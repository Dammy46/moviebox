import React from "react";
import { BsInstagram } from "react-icons/bs";
import {ImFacebook2, ImTwitter} from 'react-icons/im'
import {IoLogoYoutube} from "react-icons/io"

const Footer = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto py-[5rem] flex flex-col gap-[30px] border-t text-center">
        <p className="text-gray-400">© 2021 MovieBox by Adriana Eka Prayudha  </p>
      </div>
    </div>
  );
};

export default Footer;
