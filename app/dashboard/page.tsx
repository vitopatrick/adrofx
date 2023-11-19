"use client";

import Chart from "@/components/charts/Chart";
import Cards from "@/components/dashboard/Cards";
import HotCoins from "@/components/hotcoins/Hotcoins";
import { useAuth } from "@/hooks/useAuth";
import { useChatSupport } from "@/hooks/useChatSupport";

export default function DashboardPage() {
  useAuth();
  useChatSupport();
  return (
    <div>
      <Chart />
      <Cards />
      <HotCoins />
    </div>
  );
}
