import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials ">
      <a
        href="https://www.linkedin.com/in/azalamin"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.github.com/azalamin"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/me.azalamin "
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
}

export default HeaderSocial