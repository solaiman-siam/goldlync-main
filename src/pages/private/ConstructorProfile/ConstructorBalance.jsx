import { ClockIcon1 } from "@/assets/icons";
import { Coin1 } from "@/assets/icons";
import { Button } from "@/components/shadcn/ui/button";
import BenefitsCoins from "@/components/shared/BenefitsCoins";
import React from "react";
import { Link } from "react-router";

const ConstructorBalance = () => {
  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Balance</p>
      </div>

      <div className="mb-16 space-y-6 rounded-md border p-6">
        <Coin1 />
        <div className="">
          <p className="mb-3 text-2xl font-medium text-accent">98 LYCoins</p>
          <p>$45 Get more for less and bid on larger projects.</p>
        </div>
        <Button className="mt-10 rounded" type="submit" asChild>
          <Link to="/coin-purchase">Add More Coin</Link>
        </Button>
      </div>

      <BenefitsCoins />
    </>
  );
};

export default ConstructorBalance;
