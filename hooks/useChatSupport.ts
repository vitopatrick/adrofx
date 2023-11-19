import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jivosite.com/widget/dMD3QovRAt";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to run the effect only once on mount
};
