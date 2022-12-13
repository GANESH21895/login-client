import React, { useState } from "react";

function ResetPassword() {
  return (
    <div className="login">
      <h1>Reset Password</h1>
      <div className="container">
        <form>
          <label>New Password</label>
          <input type="password" placeholder="New password"></input>

          <input type="password" placeholder="Confirm new password"></input>

          <button>Reset</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;