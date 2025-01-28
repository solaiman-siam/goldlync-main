import { BagIcon1, ClockIcon1, LocationIcon2 } from "@/assets/icons";

const JobItem = () => {
  return (
    <div className="space-y-3 rounded-md bg-card px-4 py-8">
      <div className="inline-block rounded-md bg-[#E7EFEE] px-3 py-1.5 text-sm text-[#0A5B55]">
        Order completed
      </div>
      <h6 className="font-manrope text-lg font-semibold leading-[130%]">
        Installing or replacing radiators: 4 radiators; New radiators...
      </h6>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2 font-manrope text-sm font-normal leading-[150%] text-[#2D2F34] opacity-70">
          <BagIcon1 />
          <span>Renovation work</span>
        </li>
        <li className="flex items-center gap-2 font-manrope text-sm font-normal leading-[150%] text-[#2D2F34] opacity-70">
          <LocationIcon2 />
          <span>Nieuw-Vennep (28 km)</span>
        </li>
        <li className="flex items-center gap-2 font-manrope text-sm font-normal leading-[150%] text-[#2D2F34] opacity-70">
          <ClockIcon1 />
          <span>30 min ago</span>
        </li>
      </ul>
    </div>
  );
};

export default JobItem;
