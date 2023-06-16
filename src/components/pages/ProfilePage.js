import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin; // token

  console.log("user: ",userInfo)
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      //
    }
  }, [dispatch, navigate, userInfo]);
  return (
    <div>ProfilePage</div>
  )
}
