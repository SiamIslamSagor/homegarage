import { IoIosAddCircleOutline, IoMdCloseCircle } from "react-icons/io";

interface ImageUploaderProps {
  label: string;
  preview: string;
  isUploading: boolean;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  inputId: string;
  error?: string;
  required?: boolean;
  register?: any; // For react-hook-form registration
  registerOptions?: Record<string, any>; // Additional register options
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  preview,
  isUploading,
  onUpload,
  onReset,
  inputId,
  error,
  required = false,
  register,
  registerOptions = {},
}) => {
  const getInputProps = () => {
    if (register) {
      return {
        ...register(inputId, {
          required: required ? `${label} is required` : false,
          ...registerOptions,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            if (registerOptions.onChange) {
              registerOptions.onChange(e);
            }
            onUpload(e);
          },
        }),
      };
    }
    return { onChange: onUpload };
  };

  return (
    <div className="flex-column mb-5">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {preview ? (
        <div className="flex items-center justify-center">
          <div className="relative my-5">
            <img
              src={preview}
              alt={`${label} Preview`}
              className="min-h-60 sm:min-h-80 object-contain rounded-md"
            />
            <IoMdCloseCircle
              onClick={onReset}
              className="absolute -top-2 -right-2 text-2xl cursor-pointer opacity-80 hover:opacity-100 text-red-500 bg-white rounded-full p-0.5"
            />
          </div>
        </div>
      ) : (
        <div className="w-full min-h-20 border-dashed rounded-2xl border-2 border-indigo-500 bg-indigo-50 relative p-4 flex flex-col items-center justify-center">
          <label
            htmlFor={inputId}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            {isUploading ? (
              <span>Uploading...</span>
            ) : (
              <span className="py-2 px-6 text-lg flex items-center gap-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                <IoIosAddCircleOutline className="text-2xl" />
                Upload {label}
              </span>
            )}
            <span className="mt-2 text-xs text-gray-500">
              PNG, JPG up to 10MB
            </span>
          </label>
          <input
            type="file"
            className="hidden"
            id={inputId}
            accept="image/*"
            {...getInputProps()}
          />
        </div>
      )}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
};
