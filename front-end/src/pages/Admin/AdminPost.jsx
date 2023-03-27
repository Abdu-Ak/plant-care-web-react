import React from "react";
import PostManage from "../../components/Admin/postmanage/PostManage";
import Sidebar from "../../components/Admin/sidebar/Sidebar";
function AdminPost() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="py-24 p-5  md:p-32 md:ml-40 ">
          <PostManage/>
        </div>
      </div>
    </>
  );
}

export default AdminPost;
