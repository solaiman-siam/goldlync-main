import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoMdClose } from "react-icons/io";

const Previews3 = ({
  customAspect = "aspect-[1436/600]",
  img,
  setImg,
  text,
}) => {
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      if (selectedFile) {
        selectedFile.preview = URL.createObjectURL(selectedFile);
        setFile(selectedFile);
        if (setImg) setImg(selectedFile);
      }
    },
  });

  useEffect(() => {
    // Clean up preview URL when component unmounts or file changes
    return () => {
      if (file && file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  return (
    <section className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={`flex items-center justify-center overflow-hidden rounded border ${customAspect} w-full`}
        >
          {img ? (
            <figure className="relative h-full w-full overflow-hidden">
              <img
                src={img?.preview}
                className="size-full object-cover object-center"
                onLoad={() => URL.revokeObjectURL(img?.preview)}
              />
              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-800"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  setImg(null);
                }}
              >
                <IoMdClose className="size-10 text-white" />
              </button>
            </figure>
          ) : (
            <div className="flex gap-2 items-center">
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
              <p>{text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Previews3;
