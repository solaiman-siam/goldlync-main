import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoMdClose } from "react-icons/io";

const Previews2 = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles((prevFiles) => {
        const allFiles = [...prevFiles, ...newFiles];

        // Ensure unique files
        const uniqueFiles = Array.from(
          new Set(allFiles.map((file) => file.name))
        ).map((name) => allFiles.find((file) => file.name === name));

        // Limit to 5 files
        return uniqueFiles.slice(0, 10);
      });
    },
  });

  const thumbs = files.map((file) => (
    <div className="relative" key={file.name}>
      <figure className="size-24 overflow-hidden border p-1 shadow-md">
        <img
          src={file.preview}
          className="size-full object-cover object-center"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </figure>
      <button
        type="button"
        className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-red-800"
        onClick={() => setFiles(files.filter((f) => f.name !== file.name))}
      >
        <IoMdClose className="text-white" />
      </button>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="flex h-[400px] items-center justify-center rounded border bg-[#F1F1F1] px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="121"
            viewBox="0 0 120 121"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.1063 22.8545C48.6375 22.8545 45.4463 24.827 43.8937 27.9282L42.6863 30.3545H33.75C27.5812 30.3545 22.5 35.4357 22.5 41.6045V79.1045C22.5 85.2732 27.5812 90.3545 33.75 90.3545H86.25C92.4187 90.3545 97.5 85.2732 97.5 79.1045V41.6045C97.5 35.4357 92.4187 30.3545 86.25 30.3545H77.3138L76.1062 27.9282C75.3415 26.4049 74.1688 25.1239 72.7187 24.2281C71.2686 23.3322 69.5982 22.8567 67.8937 22.8545H52.1063ZM52.1063 30.3545H67.8937C68.5387 30.3545 69.1087 30.7107 69.3937 31.2845L71.6437 35.7845C71.9558 36.4072 72.435 36.9306 73.0278 37.2963C73.6206 37.6619 74.3035 37.8552 75 37.8545H86.25C88.365 37.8545 90 39.4895 90 41.6045V79.1045C90 81.2195 88.365 82.8545 86.25 82.8545H33.75C31.635 82.8545 30 81.2195 30 79.1045V41.6045C30 39.4895 31.635 37.8545 33.75 37.8545H45C45.6969 37.8548 46.38 37.661 46.9729 37.2947C47.5657 36.9284 48.0448 36.4041 48.3563 35.7807L50.6063 31.2807C50.7445 31.0014 50.9584 30.7666 51.2236 30.6028C51.4888 30.4391 51.7946 30.353 52.1063 30.3545ZM11.25 7.85449C10.2554 7.85449 9.30161 8.24958 8.59835 8.95284C7.89509 9.6561 7.5 10.6099 7.5 11.6045V26.6045C7.5 27.5991 7.89509 28.5529 8.59835 29.2561C9.30161 29.9594 10.2554 30.3545 11.25 30.3545C12.2446 30.3545 13.1984 29.9594 13.9017 29.2561C14.6049 28.5529 15 27.5991 15 26.6045V15.3545H26.25C27.2446 15.3545 28.1984 14.9594 28.9016 14.2561C29.6049 13.5529 30 12.5991 30 11.6045C30 10.6099 29.6049 9.6561 28.9016 8.95284C28.1984 8.24958 27.2446 7.85449 26.25 7.85449H11.25ZM11.25 90.3545C10.2554 90.3545 9.30161 90.7496 8.59835 91.4528C7.89509 92.1561 7.5 93.1099 7.5 94.1045V109.104C7.5 110.099 7.89509 111.053 8.59835 111.756C9.30161 112.459 10.2554 112.854 11.25 112.854H26.25C27.2446 112.854 28.1984 112.459 28.9016 111.756C29.6049 111.053 30 110.099 30 109.104C30 108.11 29.6049 107.156 28.9016 106.453C28.1984 105.75 27.2446 105.354 26.25 105.354H15V94.1045C15 93.1099 14.6049 92.1561 13.9017 91.4528C13.1984 90.7496 12.2446 90.3545 11.25 90.3545ZM93.75 7.85449C92.7554 7.85449 91.8016 8.24958 91.0983 8.95284C90.3951 9.6561 90 10.6099 90 11.6045C90 12.0969 90.097 12.5846 90.2855 13.0396C90.4739 13.4945 90.7501 13.9079 91.0983 14.2561C91.8016 14.9594 92.7554 15.3545 93.75 15.3545H105V26.6045C105 27.5991 105.395 28.5529 106.098 29.2561C106.802 29.9594 107.755 30.3545 108.75 30.3545C109.745 30.3545 110.698 29.9594 111.402 29.2561C112.105 28.5529 112.5 27.5991 112.5 26.6045V11.6045C112.5 10.6099 112.105 9.6561 111.402 8.95284C110.698 8.24958 109.745 7.85449 108.75 7.85449H93.75ZM108.75 90.3545C107.755 90.3545 106.802 90.7496 106.098 91.4528C105.395 92.1561 105 93.1099 105 94.1045V105.354H93.75C92.7554 105.354 91.8016 105.75 91.0983 106.453C90.3951 107.156 90 108.11 90 109.104C90 110.099 90.3951 111.053 91.0983 111.756C91.8016 112.459 92.7554 112.854 93.75 112.854H108.75C109.745 112.854 110.698 112.459 111.402 111.756C112.105 111.053 112.5 110.099 112.5 109.104V94.1045C112.5 93.1099 112.105 92.1561 111.402 91.4528C110.698 90.7496 109.745 90.3545 108.75 90.3545Z"
              fill="#C4CDD5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60 45.3545C51.7613 45.3545 45 52.1157 45 60.3545C45 68.5932 51.7613 75.3545 60 75.3545C68.2388 75.3545 75 68.5932 75 60.3545C75 52.1157 68.2388 45.3545 60 45.3545ZM60 52.8545C64.185 52.8545 67.5 56.1657 67.5 60.3545C67.5 64.5432 64.185 67.8545 60 67.8545C55.815 67.8545 52.5 64.5395 52.5 60.3545C52.5 56.1695 55.815 52.8545 60 52.8545Z"
              fill="#C4CDD5"
            />
          </svg>
        </div>
      </div>
      <aside className="my-5 flex flex-wrap gap-4">{thumbs}</aside>
    </section>
  );
};

export default Previews2;
