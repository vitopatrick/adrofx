"use client";

import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    var Tawk_API: any = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1: any = document.createElement("script"),
        s0: any = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6551130e958be55aeaaee4af/1hf2b4sir";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
};


