import React from "react";
import classes from "./style.module.css";
import footerRightEmail from "./footerIcon/footer-rigth-email.svg";
import Facebook from "./footerIcon/facebook.svg";
import VK from "./footerIcon/VK.svg";
import Instagram from "./footerIcon/Insta.svg";
import YouTube from "./footerIcon/YouTube.svg";
import Twitter from "./footerIcon/Twitter.svg";
import Logo from "../header/Logo";

const FooterRightContacts = () => {
  return (
    <div className={classes.contactsWrapper}>
      <div className={classes.footerMail}>
        <img src={footerRightEmail} alt="footerRightEmail" />
        <a href="/">info@partashop.ru</a>
      </div>
      <div className={classes.socialList}>
        <div>
          <a href="/"><img src={Facebook} alt="Facebook" /></a>
        </div>
        <div>
          <a href="/"><img src={VK} alt="VK" /></a>
        </div>
        <div>
          <a href="/"><img src={Instagram} alt="Instagram" /></a>
        </div>
        <div>
          <a href="/"><img src={YouTube} alt="YouTube" /></a>
        </div>
        <div>
          <a href="/"><img src={Twitter} alt="Twitter" /></a>
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default FooterRightContacts;
