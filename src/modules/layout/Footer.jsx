import { HeartIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 text-center flex items-center justify-center">
      Powered By <HeartIcon size={24} className="ml-2" color="red" />
    </div>
  );
};

export default Footer;
