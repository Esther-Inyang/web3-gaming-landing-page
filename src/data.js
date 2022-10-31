import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const menuLinks = [
  {
    id: 1,
    path: "/",
    text: "random",
  },
  {
    id: 2,
    path: "/about",
    text: "about",
  },
  {
    id: 3,
    path: "/projects",
    text: "projects",
  },
  {
    id: 4,
    path: "/contact",
    text: "contact",
  },
  {
    id: 5,
    path: "/profile",
    text: "profile",
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.com",
    icon: <FaBehance />,
  },
];
