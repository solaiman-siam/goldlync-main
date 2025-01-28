import JobItem from "@/components/profile/my-job/JobItem";

const CompleteJobs = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-8">
      {Array(9)
        .fill(null)
        ?.map((_, idx) => (
          <JobItem key={`complete-job-${idx}`} />
        ))}
    </div>
  );
};

export default CompleteJobs;
