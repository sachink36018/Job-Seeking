import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By SachinKumar.</div>
      <div>
        <Link to={"https://www.facebook.com"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.youtube.com/sachin-kumar-7a29a9250"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/sk_chottu1"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
