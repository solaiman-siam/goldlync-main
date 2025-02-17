import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Previews3 = ({props, customHeight="h-[150px]"}) => {
  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

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
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <figure className="h-24 aspect-video overflow-hidden">
          <img
            src={file.preview}
            className="w-full h-full object-cover object-center"
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </figure>
      </div>
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
        <div className={`flex  items-center justify-center rounded border px-4 ${customHeight}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
          >
            <path
              d="M2.2821 16.4502H18.2821V9.4502H20.2821V17.4502C20.2821 18.0025 19.8344 18.4502 19.2821 18.4502H1.2821C0.729824 18.4502 0.282104 18.0025 0.282104 17.4502V9.4502H2.2821V16.4502ZM11.2821 6.4502V13.4502H9.2821V6.4502H4.2821L10.2821 0.450195L16.2821 6.4502H11.2821Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default Previews3;
