import authImage1 from "@/assets/images/auth-1.png";
import { Button } from "@/components/shadcn/ui/button";
import SiteLogo from "@/components/SiteLogo";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";

const RoleChoose = () => {
  const { chooseRole, setChooseRole } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRoleChoose = () => {
    if (!chooseRole) {
      setErrorMessage("Please select a role");
      return;
    }
    navigate("/register");
  };

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat p-4 font-poppins"
      style={{ backgroundImage: `url('${authImage1}')` }}
    >
      <div className="absolute inset-0 z-[0] h-full w-full bg-[#FF6A16] opacity-50"></div>
      <div className="relative flex w-full items-center justify-center overflow-auto rounded-lg bg-background px-4 py-32 md:w-[60%]">
        <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 text-center">
          <SiteLogo />
          <h2 className="text-2xl font-bold">
            What do you want to join here as?
          </h2>
          <div className="my-8 flex w-full items-center gap-2">
            <RoleItem
              value="customer"
              setValue={setChooseRole}
              currentValue={chooseRole}
            >
              Customer
            </RoleItem>
            <RoleItem
              value="pro"
              setValue={setChooseRole}
              currentValue={chooseRole}
            >
              Pro
            </RoleItem>
          </div>
          {errorMessage && (
            <p className="text-sm font-semibold text-destructive">
              {errorMessage}
            </p>
          )}
          <Button className="w-full" onClick={handleRoleChoose}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const RoleItem = ({ children, currentValue, value, setValue }) => {
  return (
    <Button
      className="w-full rounded-md border border-accent"
      variant={currentValue === value ? "default" : "outline"}
      onClick={() => setValue(value)}
    >
      {children}
    </Button>
  );
};

export default RoleChoose;
