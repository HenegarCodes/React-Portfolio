import React from "react";
import "./social.css";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow

} from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { socialLinks } from "../../contentInfo";

export const Socialicons = (params) => {
  return (
    <div className="sidebar">
      <ul>
        {socialLinks.stackOverflow && (
          <li>
            <a href={socialLinks.stackOverflow}>
              <FaStackOverflow />
            </a>
          </li>
        )}
        {socialLinks.github && (
          <li>
            <a href={socialLinks.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialLinks.linkedin && (
          <li>
            <a href={socialLinks.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialLinks.resume && (
          <li>
            <a href={socialLinks.resume}>
              <IoIosDocument />
            </a>
          </li>
        )}
      </ul>

      <p>Connect With Me!</p>
    </div>
  );
};
