const userdetails = require("../../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const diary = require("../../models/diarySchema");
require("dotenv").config();
const moment = require("moment");
const posts = require("../../models/postSchema");

module.exports = {
  userSignup: (req, res) => {
    let data = req.body;

    userdetails.findOne({ email: data.email }).then((userdata) => {
      if (userdata) {
        res.send({ existed: true });
      } else {
        bcrypt.hash(data.password, 10).then((password) => {
          userdetails
            .create({
              email: data.email,
              password: password,
            })
            .then((user) => {
              res.send({ signed: true });
            });
        });
      }
    });
  },

  userLogin: (req, res) => {
    const { email, password } = req.body;

    userdetails.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.isBlock) {
          res.send({ err: "You were Blocked by Admin..!" });
        } else {
          bcrypt.compare(password, user.password).then((match) => {
            if (match) {
              userdetails
                .findByIdAndUpdate({ _id: user.id }, { status: "online" })
                .then((result) => {
                  if (result) {
                    let payload = {
                      id: user._id,
                      email: user.email,
                    };
                    jwt.sign(
                      payload,
                      process.env.JWT_SECRET,
                      {
                        expiresIn: 86400,
                      },
                      (err, token) => {
                        if (err) {
                          console.log(err);
                        } else {
                          res.send({ logged: true, token: `Bearer ${token}` });
                        }
                      }
                    );
                  }
                });
            } else {
              res.send({ err: "Invalid password ...!" });
            }
          });
        }
      } else {
        res.send({ err: "Invalid email ...!" });
      }
    });
  },
  googleSign: (req, res) => {
    const { username, email, image } = req.body;
    userdetails.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.isBlock) {
          res.send({ err: "You were Blocked by Admin..!" });
        } else {
          userdetails
            .findByIdAndUpdate({ _id: user.id }, { status: "online" })
            .then((result) => {
              if (result) {
                let payload = {
                  id: user._id,
                  email: user.email,
                };
                jwt.sign(
                  payload,
                  process.env.JWT_SECRET,
                  {
                    expiresIn: 86400,
                  },
                  (err, token) => {
                    if (err) {
                      console.log(err);
                    } else {
                      res.send({ logged: true, token: `Bearer ${token}` });
                    }
                  }
                );
              }
            });
        }
      } else {
        userdetails
          .create({
            username: username,
            email: email,
            image: image,
            status: "online",
          })
          .then((user) => {
            if (user) {
              let payload = {
                id: user._id,
                email: user.email,
              };
              jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                  expiresIn: 86400,
                },
                (err, token) => {
                  if (err) {
                    console.log(err);
                  } else {
                    res.send({ logged: true, token: `Bearer ${token}` });
                  }
                }
              );
            }
          });
      }
    });
  },

  getProfile: (req, res) => {
    try {
      const id = req.id;

      userdetails.findOne({ _id: id }).then((user) => {
        if (user) {
          res.send({ user });
        }
      });
    } catch (error) {
      console.error();
    }
  },

  editProfile: (req, res) => {
    const id = req.id;
    const { username, phone, bio } = req.body;

    userdetails
      .findByIdAndUpdate(
        { _id: id },
        { username: username, phone: phone, bio: bio }
      )
      .then((user) => {
        if (req.file) {
          const image = req.file.path;
          userdetails
            .findByIdAndUpdate({ _id: id }, { image: image })
            .then((result) => {
              if (result) {
                res.send({ success: true });
              }
            });
        } else {
          res.send({ success: true });
        }
      });
  },

  changePass: (req, res) => {
    const { newPass, oldPass } = req.body;

    const id = req.id;

    if (oldPass) {
      console.log(oldPass);
      userdetails.findOne({ _id: id }).then((user) => {
        bcrypt.compare(oldPass, user.password).then((result) => {
          if (result) {
            bcrypt.hash(newPass, 10).then((password) => {
              userdetails
                .findByIdAndUpdate({ _id: id }, { password: password })
                .then((user) => {
                  res.send({ success: true });
                });
            });
          } else {
            res.send({ err: "Old password is not matched..!" });
          }
        });
      });
    } else {
      bcrypt.hash(newPass, 10).then((password) => {
        userdetails
          .findByIdAndUpdate({ _id: id }, { password: password })
          .then((user) => {
            res.send({ success: true });
          });
      });
    }
  },

  addDiary: (req, res) => {
    const id = req.id;
    const data = req.body;

    diary
      .find({ $and: [{ scientificName: data.scientificName }, { userId: id }] })
      .then((olddiary) => {
        if (olddiary.length > 0) {
          console.log(olddiary);
          res.send({ success: true });
        } else {
          diary
            .create({
              userId: id,
              commonName: data.commonName,
              otherName: data.otherName,
              scientificName: data.scientificName,
              watering: data.watering,
              sunlight: data.sunlight,
              image: data.image,
              Date: moment().format("L"),
            })
            .then((newdiary) => {
              if (newdiary) {
                res.send({ success: true });
              }
            });
        }
      });
  },

  getDiary: (req, res) => {
    const id = req.id;

    diary.find({ userId: id }).then((user) => {
      if (user) {
        res.send({ user });
      }
    });
  },

  deleteDiary: (req, res) => {
    const id = req.body.id;

    diary.deleteOne({ _id: id }).then((result) => {
      if (result) {
        res.send({ success: true });
      }
    });
  },

  getUsers : (req,res)=>{

    userdetails.find().then((users)=>{
      res.send({success:true,users })
    })

  },
   
  addPost : (req,res)=>{
    const id = req.id
    const image = req.file.path
    const {title,caption,tag} = req.body

    console.log(tag);
     
    posts.create({
      userId : id,
      image : image,
      title : title,
      caption :caption ,
      tags : tag ,
      Date :  moment().format("L"),

    }).then((data)=>{
     res.send({success : true  })
    })
     
   

  },  

  getChat: (req, res) => {},

  logOut: (req, res) => {
    const id = req.id;   

    userdetails
      .updateOne({ _id: id }, { $set: { status: "offline" } })
      .then((user) => {
        if (user) {
          res.send({ logout: true });
        }
      });
  },
};
