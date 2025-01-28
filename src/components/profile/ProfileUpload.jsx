import { cn } from "@/lib/shadcn/utils";
import { MAX_PROFILE_IMAGE_SIZE } from "@/lib/staticData";
import { forwardRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { Pencil, Trash2 } from "lucide-react";

const ProfileUpload = forwardRef(
  ({ setValue, value, setError, disabled }, ref) => {
    const onDrop = useCallback(
      (acceptedFiles) => {
        setError("");
        setValue(acceptedFiles[0]);
      },
      [setValue, setError]
    );

    const onDropRejected = useCallback(
      (rejectedFiles) => {
        let errorName = "";

        switch (rejectedFiles[0].errors[0].code) {
          case "file-too-large":
            errorName = "Selected file is too big.";
            break;
          case "file-invalid-type":
            errorName = "Invalid file type.";
            break;
          default:
            errorName = "Something went wrong";
            break;
        }

        setError(errorName);
      },
      [setError]
    );

    const { getRootProps, getInputProps, isDragActive, isDragReject } =
      useDropzone({
        onDrop,
        onDropRejected,
        accept: {
          "image/png": [".png"],
          "image/jpg": [".jpg"],
          "image/jpeg": [".jpeg"],
        },
        maxSize: MAX_PROFILE_IMAGE_SIZE,
        multiple: false,
        maxFiles: 1,
        disabled,
      });

    return (
      <div
        ref={ref}
        className={cn(
          "group relative size-[150px] cursor-pointer overflow-hidden rounded-full border",
          isDragActive && "border-sky-500 bg-sky-800",
          isDragReject && "border-red-500 bg-red-800"
        )}
        {...getRootProps()}
      >
        {value && typeof value === "string" ? (
          <>
            <Avatar className="size-full">
              <AvatarImage src={value} alt="user image" />
              <AvatarFallback>John Deo</AvatarFallback>
            </Avatar>
            <AvatarDeleteBtn setValue={setValue} disabled={disabled} />
          </>
        ) : value instanceof File ? (
          <>
            <img
              src={URL.createObjectURL(value)}
              className="size-full object-cover object-center"
              alt="user image"
            />
            <AvatarDeleteBtn setValue={setValue} disabled={disabled} />
          </>
        ) : (
          <div className="absolute left-1/2 top-1/2 inline-flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary">
            <Pencil className="size-[50%]" />
          </div>
        )}
        <input {...getInputProps()} />
      </div>
    );
  }
);
ProfileUpload.displayName = "ProfileUpload";

const AvatarDeleteBtn = ({ setValue, disabled }) => (
  <>
    <div className="absolute inset-0 size-full bg-secondary opacity-0 duration-200 group-hover:opacity-40"></div>
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setValue(null);
        }}
        disabled={disabled}
        className="inline-flex size-8 items-center justify-center rounded-full bg-destructive opacity-0 duration-200 group-hover:opacity-100"
        type="button"
      >
        <Trash2 className="size-[50%]" />
      </button>
    </div>
  </>
);

export default ProfileUpload;
