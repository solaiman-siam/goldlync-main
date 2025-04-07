import Container from "@/components/Container";
import ConstructorProfileSidebar from "@/components/shared/ConstructorProfileSidebar";
import { Outlet } from "react-router";

const ConstructorProfileLayout = () => {
  return (
    <Container>
      <div className="mb-24 mt-10">
        <h1 className="mb-12 font-manrope text-[32px] font-bold">Profile</h1>
        <div className="flex items-start gap-12">
          <ConstructorProfileSidebar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ConstructorProfileLayout;
