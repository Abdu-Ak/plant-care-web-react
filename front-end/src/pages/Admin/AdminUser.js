import React from "react";
import Sidebar from "../../components/Admin/sidebar/Sidebar";
import UserManage from "../../components/Admin/usermanage/UserManage";

function AdminUser() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="py-24 p-5  md:p-32 md:ml-40 ">
          <UserManage />
        </div>
      </div>
    </>
  );
}

export default AdminUser;
