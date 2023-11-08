import React from "react";

type Props = {};

let services = [
  "https://adrofx.com/themes/custom/adrofx_theme/img/payment-systems/Tether-logo.svg",
  "https://adrofx.com/themes/custom/adrofx_theme/img/payment-systems/mastercard.svg",
  "https://adrofx.com/themes/custom/adrofx_theme/img/payment-systems/visa-logo-200.svg",
  "https://adrofx.com/themes/custom/adrofx_theme/img/payment-systems/bank-transfer-logo.svg",
  "https://adrofx.com/themes/custom/adrofx_theme/img/payment-systems/bitcoin-logo.svg",
];

const OurServices = (props: Props) => {
  return (
    <div className="my-[5rem]">
      {/* container */}
      <section className="w-[80%] p-4 mx-auto">
        <h4 className=" py-3 font-headerTwo text-3xl text-center">
          Multiple Payment Options
        </h4>
        <p className="font-body text-center font-light ">
          We provide our clients with a wide range of flexible payment options
          including Bank Transfer, Credit/Debit cards, E-Wallets, and more.
          Detailed information is available on our Deposits & Withdrawals page.
        </p>
        {/* Grid */}
        <div className="flex flex-col md:flex-row items-center gap-[2rem] justify-between overflow-y-scroll  mt-[2rem]">
          {services.map((service) => (
            <div key={service}>
              <div>
                <img src={service} alt="" className="rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
