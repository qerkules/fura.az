import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // if (/android/i.test(userAgent)) {
    //   setIsMobile(true);
    // } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //   setIsMobile(true);
    // } else {
    //   setIsMobile(false);
    // }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 970);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
