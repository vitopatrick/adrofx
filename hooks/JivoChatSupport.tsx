"use client";
import { useEffect } from "react";

const JivoChatSupport = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");

    // Set the JivoChat script source
    script.src = "https://code.jivosite.com/widget/dMD3QovRAt";
    script.async = true;

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return null; // JivoChat widget will be injected into the DOM, so this component doesn't need to render anything
};

export default JivoChatSupport;
