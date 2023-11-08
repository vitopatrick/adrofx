import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white">
      {/* container  */}
      <section className="w-[80%] mx-auto">
        <hr />
        <div className="flex items-center gap-[3rem] py-6">
          <div className="w-[100px]">
            <img
              src="https://adrofx.com/themes/custom/adrofx_theme/img/logo-milit.svg"
              alt=""
            />
          </div>
          <div>
            <p className="font-light font-body text-neutral-400">
              ADROMKT Limited, Company number 700546 is regulated and licensed
              by Vanuatu Financial Services Commission (VFSC) with its
              registered Office at Govant Building, BP 1276, Port Vila, Vanuatu
            </p>
          </div>
        </div>
        <p className="font-light font-body py-4 text-sm leading-loose text-neutral-400">
          Risk Warning: Trading Forex and Leveraged Financial Instruments
          involves significant risk and can result in the loss of your invested
          capital. You should not invest more than you can afford to lose and
          should ensure that you fully understand the risks involved. Trading
          leveraged products may not be suitable for all investors. Before
          trading, please take into consideration your level of experience,
          investment objectives, and seek independent financial advice if
          necessary. It is the responsibility of the Client to ascertain whether
          he/she is permitted to use the services of the AdroFx brand based on
          the legal requirements in his/her country of residence. Please read
          AdroFx’s full Risk Disclosure. The information on this website is not
          intended to be addressed to the public of AdroFx.com does not provide
          services to residents of Suriname, North Korea, U.S citizens, Syria.
          other jurisdictions that would be contrary to local law or
          regulation..
        </p>
        <hr />
        <p className="text-center font-light font-body  py-2 text-neutral-400">
          2023 © AdroFX
        </p>
      </section>
    </footer>
  );
};

export default Footer;
