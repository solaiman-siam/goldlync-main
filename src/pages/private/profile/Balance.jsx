import { BalanceIcon2 } from "@/assets/icons";
import ProfileSection from "@/components/profile/ProfileSection";
import { Button } from "@/components/shadcn/ui/button";

const Balance = () => {
  return (
    <ProfileSection title="Balance">
      <div className="mb-4 rounded-md border p-6">
        <BalanceIcon2 className="text-accent" />
        <div className="text-2xl my-5 font-medium text-accent">€125.50</div>
        <div className="text-base font-normal">
          <span className="font-bold">Next invoice date:</span> <span>1 Nov 2024</span>
        </div>
        <div className="mb-4">All prices are exclusive of VAT</div>
        <div>No transactions found.</div>
      </div>
      <Button className="rounded">Add payment method</Button>
    </ProfileSection>
  );
};

export default Balance;
