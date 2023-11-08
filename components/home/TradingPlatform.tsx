import Link from "next/link";
import React from "react";

type Props = {};

const TradingPlatform = (props: Props) => {
  return (
    <div className="my-[4rem]">
      {/* container */}
      <section className="w-[80%] mx-auto">
        {/* grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="space-y-3 md:order-last order-first">
            <div className="w-[150px]">
              <img
                src="https://adrofx.com/themes/custom/adrofx_theme/images/allpips-logo.svg"
                alt=""
              />
            </div>
            <h4 className="font-bodyTwo font-semibold text-3xl">
              Access To All Global Markets From A Single Account.
            </h4>
            <p className="font-light font-body leading-loose">
              Multi-asset terminal Allpips combines cutting-edge technologies
              and a classic design taken to a whole new level. No more
              unnecessary software and updates-get access to all global
              financial markets via a web terminal in a familiar web browser.
            </p>
            <Link
              href="/get-started"
              className="bg-purple-500 inline-block  p-4 rounded-md font-body text-white"
            >
              One Click Away
            </Link>
          </div>
          <div className="order-last md:order-first">
            <img
              src="https://adrofx.com/themes/custom/adrofx_theme/images/web-platform-devices.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingPlatform;
