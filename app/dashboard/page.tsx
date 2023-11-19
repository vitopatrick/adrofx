"use client";

import Chart from "@/components/charts/Chart";
import Cards from "@/components/dashboard/Cards";
import HotCoins from "@/components/hotcoins/Hotcoins";
import JivoChatSupport from "@/hooks/JivoChatSupport";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  useAuth();
  return (
    <div>
      <Chart />
      <Cards />
      <HotCoins />
      <JivoChatSupport />
    </div>
  );
}
