import React from "react";
import "./social.css";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow
} from "react-icons/fa";
import { socialLinks } from "../../contentInfo";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
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
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
