function VisitHomeResource() {
  return (
    <div className="relative w-full flex justify-center items-center h-[500px]">
        <div className="flex items-center absolute z-[8] text-white flex-col gap-4">
          <h3 className="text-4xl text-center w-5/12 font-semibold">Visit our Home Resource Center</h3>
          <h4 className="w-6/12 font-light pt-2 text-center ">
            Sometimes getting started is the hardest part. Our resource center
            -tas project guides. cost estimates and how-to guides to help you
            kick off your next home project.
          </h4>

          <div className="pt-8">
            <button className="rounded-full bg-primary text-lg px-14 py-4 font-medium text-white">
              See More
            </button>
          </div>
        </div>

        <img className="absolute top-0 left-0" src="https://i.ibb.co.com/bjb5ZTwB/Rectangle-25146.png" alt="" />
    </div>
  );
}

export default VisitHomeResource;
