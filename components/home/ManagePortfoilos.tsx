import Link from "next/link";
import React from "react";

type Props = {};

const ManagePortfoilos = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[80%] mx-auto">
        {/* grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="space-y-3">
            <h4 className="font-bodyTwo font-semibold text-3xl">
              {" "}
              <span className="text-blue-500">Managed Portfolios</span> Let The
              Experts Trade For You
            </h4>
            <p className="font-light font-body leading-loose">
              Follow people just like on any other social media. Discover
              hundreds of investors and copy their trades. hey trade, you
              copy.Fully automated For Beginners Trader, Skilled Trader even
              professionals Trader there is a benefit for everyone one! Check
              our top traders
            </p>
            <Link
              href="/get-started"
              className="bg-blue-500 inline-block  p-4 rounded-md font-body text-white"
            >
              Check it out
            </Link>
          </div>
          <div>
            <img
              src="https://adrofx.com/themes/custom/adrofx_theme/images/manged-portfolios.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagePortfoilos;
