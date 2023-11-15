import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import ManagePortfoilos from "@/components/home/ManagePortfoilos";
import MetaTrader from "@/components/home/MetaTrader";
import Navbar from "@/components/home/Navbar";
import Reviews from "@/components/home/Reviews";
import TradeByCopying from "@/components/home/TradeGrid";
import TradeGrid from "@/components/home/TradeGrid";
import TradingPlatform from "@/components/home/TradingPlatform";
import OurServices from "@/components/home/our-services";
import StepsToTrading from "@/components/home/steps-to-trading";
import TradingAdvantages from "@/components/home/trading-advantages";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Trading Advantages */}
      <TradingAdvantages />
      {/* Trading Platforms */}
      <TradingPlatform />
      {/* Meta Trader 4 */}
      <MetaTrader />
      {/* Earn by copying Traders */}
      <TradeByCopying />
      {/* Manage Portfolios */}
      <ManagePortfoilos />
      {/* steps to trading */}
      <StepsToTrading />
      {/* our services */}
      <OurServices />
      {/* Reviews */}
      <Reviews />
      {/* Footer */}
      <Footer />
    </>
  );
}
