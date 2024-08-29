import React from "react";
import "./userpage.css";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@mui/icons-material";

function Userpage() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newuser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anurag Rathore</span>
              <span className="userShowUserTitle">Software Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">anura07</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">07.05.2001</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+91 7300375060</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">anurag730037@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Jaipur | India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateRight">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="anura07"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Anurag Rathore"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="anurag730037@gmail.com"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="number"
                  placeholder="7300375060"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Jaipur | India"
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="" alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Userpage;
