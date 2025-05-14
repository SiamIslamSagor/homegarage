import { useState } from "react";
import axios from "axios";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

interface UseImageUploadReturn {
  preview: string;
  isUploading: boolean;
  handleImageUpload: (file: File) => Promise<string | undefined>;
  resetImage: () => void;
}

export const useImageUpload = (): UseImageUploadReturn => {
  const [preview, setPreview] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleImageUpload = async (file: File): Promise<string | undefined> => {
    setPreview(URL.createObjectURL(file));
    setIsUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(image_hosting_api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        const imageUrl = res.data.data.display_url;
        setPreview(imageUrl);
        return imageUrl;
      }

      setPreview("");
      return undefined;
    } catch (error) {
      setPreview("");
      return undefined;
    } finally {
      setIsUploading(false);
    }
  };

  const resetImage = () => {
    setPreview("");
  };

  return {
    preview,
    isUploading,
    handleImageUpload,
    resetImage,
  };
};
