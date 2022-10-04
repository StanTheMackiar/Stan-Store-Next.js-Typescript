import React from "react";
import styles from "../../../../styles/Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";

const Footer = () => {
  const iconsStyle = {
    color: 'primary',
    fontSize: "40px",
    margin: "0.5rem",
    cursor: "pointer",
  };

  return (
    <footer className={styles.container}>
      <div className={styles.firstRow}>
        <p>Follow us</p>
        <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><FacebookIcon sx={iconsStyle} /></a>
        <a href="https://www.twitter.com/" target='_blank' rel="noreferrer"><TwitterIcon sx={iconsStyle} /></a>
        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><InstagramIcon sx={iconsStyle} /></a>
        <a href="https://www.youtube.com/" target='_blank' rel="noreferrer"><YouTubeIcon sx={iconsStyle} /></a>
      </div>

      <div className={styles.secondRow}>
        <div className={styles.contactElements}>
        <EmailIcon sx={{margin: "0.5rem"}}/>
        <a href="mailto:stan@store.com"><p>stan@store.com</p></a>
        </div>
        <div className={styles.contactElements}>
        <BusinessIcon sx={{margin: "0.5rem"}}/>
        <p>NIT 900784756-1</p>
        </div>
        <div className={styles.contactElements}>
        <PhoneIcon sx={{margin: "0.5rem"}}/>
        <p> 01-8000-2245</p>
        </div>
      </div>

      <div className={styles.thirdRow}>
        <p>{"© 2022 Stan's Store™ Colombia SAS."}</p>
      </div>
    </footer>
  );
};

export default Footer;
