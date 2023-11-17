import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Accounts</h1>
      <p>User Email: {user && user.email}</p>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>
      <h1 className="text-2xl font-bold py-4">this is a test</h1>

      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
};

export default Account;
