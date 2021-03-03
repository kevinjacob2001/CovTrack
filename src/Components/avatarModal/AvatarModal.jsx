import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Avatar } from "antd";
import { useSelector } from "react-redux";
import { auth } from "../../../src/firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./AvatarModal.css";
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import db from '../../firebase'
import Image from "./Group.svg";
import { logout, selectUser } from "../../features/userSlice";



function AvatarModal() {



  const [selected, setSelected] = React.useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();
  const logoutUser = () => {
    console.log("logout clicked")
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .then(() => {});
  };
  const user = useSelector(selectUser);
  console.log(user?.displayName);
  console.log(user?.email);

const confirmMail=()=>{
  if(!selected){
   db.collection('users').doc(user?.uid).set({
    email:user?.email
 })
}
else{
db.collection("users").doc(user?.uid).delete()
}
}

  return (
    <div>
      <Avatar
        src={user.photo}
        className="avatarImage"
        size={40}
        type="primary"
        onClick={() => setModal1Visible(true)}
      />

      <Modal
        style={{ top: 100, right: 20, position: "absolute" }}
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        width={350}
        zIndex={99999}
        className="modal__card"
        onCancel={() => setModal1Visible(false)}
        footer={null}
      >
        <div style={{ textAlign: "center" }}>
          <Avatar
            style={{ backgroundColor: "#454E62" }}
            icon={<UserOutlined />}
            size={74}
            src={user.photo}
          ></Avatar>
          <h4 style={{ fontWeight: "900", marginTop: "1rem" }}>
            {user?.displayName}
          </h4>
          <p style={{ fontWeight: "100", opacity: "0.6" }}>
            {user?.email}
          </p>
          <Button onClick={logoutUser}>Logout</Button>
         <div className="footer__div">
         <p style={{ textAlign: "center", marginTop: "2rem", opacity: ".6" }}>
            Do you want to receive daily COVID-19 updates?
          </p>

          <ToggleButton
          
      value="check"
      onClick={confirmMail}
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
      className="toggle__btn"
    >
      <CheckIcon />
    </ToggleButton>

         </div>
        </div>
      </Modal>
    </div>
  );
}

export default AvatarModal;
