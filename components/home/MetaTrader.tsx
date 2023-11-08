import Link from "next/link";
import React from "react";

type Props = {};

const MetaTrader = (props: Props) => {
  return (
    <div className="my-[4rem] bg-blue-100/20 py-[4rem]">
      {/* container */}
      <section className="w-[80%] mx-auto">
        {/* grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="space-y-3 order-last md:order-first">
            <div className="w-[150px]">
              <img
                src="https://adrofx.com/themes/custom/adrofx_theme/images/metatrader-4-logo.png"
                alt=""
              />
            </div>
            <h4 className="font-bodyTwo font-semibold text-3xl">
              Most Popular Platforms In The Financial Markets.
            </h4>
            <p className="font-light font-body leading-loose">
              MetaTrader4 terminal is still an unquestionable leader among
              retail traders. It has all features and tools that are necessary
              for beginners and expirienced trader ot the financial market.
              Moreover, the terminal includes embedded functionality and
              opportunities, which are typical only for MQL platforms.
            </p>
            <Link
              href="/get-started"
              className="bg-blue-500 inline-block  p-4 rounded-md font-body text-white"
            >
              Start Trading
            </Link>
          </div>
          <div className="md:order-last order-first">
            <img
              src="https://adrofx.com/themes/custom/adrofx_theme/images/metatrader4-devices.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaTrader;
