import Link from "next/link";
import React from "react";

type Props = {};

const TradeByCopying = (props: Props) => {
  return (
    <div className="my-[4rem]">
      {/* container */}
      <section className="w-[80%] mx-auto">
        {/* grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="space-y-3 md:order-last order-first">
            <h4 className="font-bodyTwo font-semibold text-3xl">
              {" "}
              Earn By Copying The{" "}
              <span className="text-blue-500"> Success Of Top Traders</span>
            </h4>
            <p className="font-light font-body leading-loose">
              Everyone can trade like a top trader. With Allpip's innovative
              Copy Trading you can automatically copy the moves of other
              investors. Find investors you believe in and replicate their
              actions in real-time.
            </p>
            <Link
              href="/get-started"
              className="bg-blue-500 inline-block  p-4 rounded-md font-body text-white"
            >
              Try It Now
            </Link>
          </div>
          <div className="order-last md:order-first">
            <img
              src="https://adrofx.com/themes/custom/adrofx_theme/images/earn-by-copy.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradeByCopying;
