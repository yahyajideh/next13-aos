"use client";

import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSClientCompent = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);
  return <>{children}</>;
};

export default AOSClientCompent;
