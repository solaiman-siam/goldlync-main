import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const Previews = ({ onFilesChange, limit = 20 }) => {
  const [files, setFiles] = useState([]);

  // Notify parent when files change
  useEffect(() => {
    onFilesChange && onFilesChange(files);
  }, [files, onFilesChange]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );

      setFiles((prev) => {
        const allFiles = [...prev, ...newFiles];
        allFiles.length > limit && toast.error(`You can only upload ${limit} images`);
        const updatedFiles = allFiles
          .filter(
            (file, index, self) =>
              index === self.findIndex((f) => f.name === file.name)
          )
          .slice(0, limit);
        return updatedFiles;
      });
    },
  });

  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  const thumbs = files.map((file) => (
    <div className="relative" key={file.name}>
      <figure className="size-24 overflow-hidden border p-1 shadow-md">
        <img
          src={file.preview}
          className="size-full object-cover object-center"
          onLoad={() => URL.revokeObjectURL(file.preview)}
          alt={file.name}
        />
      </figure>
      <button
        type="button"
        className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-red-800"
        onClick={() => removeFile(file.name)}
      >
        <IoMdClose className="text-white" />
      </button>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="flex h-[64px] items-center justify-between rounded border border-input px-4">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="26"
              viewBox="0 0 33 26"
              fill="none"
            >
              <path
                d="M1 19L9.2544 10.7456C9.58869 10.4113 9.98555 10.1461 10.4223 9.96521C10.8591 9.78429 11.3272 9.69117 11.8 9.69117C12.2728 9.69117 12.7409 9.78429 13.1777 9.96521C13.6144 10.1461 14.0113 10.4113 14.3456 10.7456L22.6 19M20.2 16.6L22.4544 14.3456C22.7887 14.0113 23.1856 13.7461 23.6223 13.5652C24.0591 13.3843 24.5272 13.2912 25 13.2912C25.4728 13.2912 25.9409 13.3843 26.3777 13.5652C26.8144 13.7461 27.2113 14.0113 27.5456 14.3456L32.2 19M3.4 25H29.8C30.4365 25 31.047 24.7471 31.4971 24.2971C31.9471 23.847 32.2 23.2365 32.2 22.6V3.4C32.2 2.76348 31.9471 2.15303 31.4971 1.70294C31.047 1.25286 30.4365 1 29.8 1H3.4C2.76348 1 2.15303 1.25286 1.70294 1.70294C1.25286 2.15303 1 2.76348 1 3.4V22.6C1 23.2365 1.25286 23.847 1.70294 24.2971C2.15303 24.7471 2.76348 25 3.4 25ZM20.2 7H20.2128V7.0128H20.2V7ZM20.8 7C20.8 7.15913 20.7368 7.31174 20.6243 7.42426C20.5117 7.53679 20.3591 7.6 20.2 7.6C20.0409 7.6 19.8883 7.53679 19.7757 7.42426C19.6632 7.31174 19.6 7.15913 19.6 7C19.6 6.84087 19.6632 6.68826 19.7757 6.57574C19.8883 6.46321 20.0409 6.4 20.2 6.4C20.3591 6.4 20.5117 6.46321 20.6243 6.57574C20.7368 6.68826 20.8 6.84087 20.8 7Z"
                stroke="#8D8D8D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#8D8D8D]">
              Drag & Drop image here or{" "}
              <span className="text-primary">browse</span>
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            {/* <rect width="28" height="28" rx="4" fill="#E0E0E0" /> */}
            <path
              d="M7 17.5V19.25C7 19.7141 7.18437 20.1592 7.51256 20.4874C7.84075 20.8156 8.28587 21 8.75 21H19.25C19.7141 21 20.1592 20.8156 20.4874 20.4874C20.8156 20.1592 21 19.7141 21 19.25V17.5M10.5 10.5L14 7M14 7L17.5 10.5M14 7V17.5"
              stroke="#8D8D8D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {files.length > 0 && (
        <aside className="my-5 flex flex-wrap gap-4">{thumbs}</aside>
      )}
    </section>
  );
};

export default Previews;
