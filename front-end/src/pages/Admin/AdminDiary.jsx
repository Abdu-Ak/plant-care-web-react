import React from "react";
import Sidebar from "../../components/Admin/sidebar/Sidebar";
import DiaryManage from "../../components/Admin/diarymanage/DiaryManage";
function AdminDiary() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="py-24 p-5  md:p-32 md:ml-40 ">
          <DiaryManage />
        </div>
      </div>
    </>
  );
}

export default AdminDiary;
