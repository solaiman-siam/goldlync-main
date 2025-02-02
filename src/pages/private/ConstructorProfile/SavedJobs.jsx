import { Button } from "@/components/shadcn/ui/button";

const SavedJobs = () => {
  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Saved jobs</p>
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-3 gap-x-7 gap-y-8">
          {Array(9)
            .fill(null)
            .map((_, idx) => (
              <div className="space-y-4 rounded-md bg-[#FFF2EB] p-5" key={idx}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 33 34"
                  fill="none"
                  className="size-8"
                >
                  <path
                    d="M16.6558 23.7661L17.6677 24.3569L26.7124 29.6303V2.96151H6.59921V29.6303L15.6439 24.3569L16.6558 23.7661ZM6.59921 31.9559L4.58789 33.1313V0.950195H28.7237V33.1313L26.7124 31.9559L16.6558 26.0917L6.59921 31.9559Z"
                    fill="#FF6A16"
                  />
                </svg>
                <div className="">
                  <p className="mb-1 text-lg">Thermostat: Digital; Repair</p>
                  <p className="text-sm">
                    Amsterdam (37 km) <br />
                    about 7 hours ag
                  </p>
                </div>
                <p>
                  Thermostat display is not working. Might also be that it needs
                  new batteries or to change the fuse.
                </p>
              </div>
            ))}
        </div>
        <Button type="button" className="w-[230px] text-lg">
          View more
        </Button>
      </div>
    </>
  );
};

export default SavedJobs;
