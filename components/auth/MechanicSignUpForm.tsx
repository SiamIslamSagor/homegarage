"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MechanicFormData } from "@/types/garage-owner";
import { useImageUpload } from "@/hooks/useImageUpload";
import { FormField } from "@/components/common/FormField";
import { ImageUploader } from "@/components/common/ImageUploader";

const MechanicSignUpForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<MechanicFormData>();

  const {
    preview: nidPreview,
    isUploading: isNIDUploading,
    handleImageUpload: handleNIDUpload,
    resetImage: resetNID,
  } = useImageUpload();

  const {
    preview: certificatePreview,
    isUploading: isCertificateUploading,
    handleImageUpload: handleCertificateUpload,
    resetImage: resetCertificate,
  } = useImageUpload();

  const watchedOwnerNIDPreview = watch("ownerNIDImageUrl");
  const watchedCertificatePreview = watch("certificateUrl");

  const onSubmit: SubmitHandler<MechanicFormData> = data => {
    const { ownerNIDImage, certificateFile, ...submitData } = data;
    console.log("Mechanic Sign Up Data:", {
      ...submitData,
      ownerNIDImageUrl: watchedOwnerNIDPreview,
      certificateUrl: watchedCertificatePreview,
    });
  };

  const handleNIDImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      const imageUrl = await handleNIDUpload(e.target.files[0]);
      if (imageUrl) {
        setValue("ownerNIDImageUrl", imageUrl, { shouldValidate: true });
        setValue("ownerNIDImage", undefined);
      }
    }
  };

  const handleCertificateImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      const imageUrl = await handleCertificateUpload(e.target.files[0]);
      if (imageUrl) {
        setValue("certificateUrl", imageUrl, { shouldValidate: true });
        setValue("certificateFile", undefined);
      }
    }
  };

  const handleNIDReset = () => {
    resetNID();
    setValue("ownerNIDImageUrl", undefined, { shouldValidate: true });
    setValue("ownerNIDImage", undefined);
  };

  const handleCertificateReset = () => {
    resetCertificate();
    setValue("certificateUrl", undefined, { shouldValidate: true });
    setValue("certificateFile", undefined);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-lg font-medium text-gray-800 border-b pb-2 mb-4">
        Personal Information
      </h3>

      <FormField
        label="Full Name"
        id="name"
        type="text"
        placeholder="Enter your full name"
        error={errors.name?.message}
        register={register}
        required
      />

      <FormField
        label="Phone Number"
        id="number"
        type="tel"
        placeholder="Enter your phone number"
        error={errors.number?.message}
        register={register}
        required
      />

      <FormField
        label="Your Address"
        id="address"
        type="text"
        placeholder="Enter your residential address"
        error={errors.address?.message}
        register={register}
        required
      />

      <ImageUploader
        label="Owner NID"
        preview={nidPreview}
        isUploading={isNIDUploading}
        onUpload={handleNIDImageChange}
        onReset={handleNIDReset}
        inputId="ownerNIDImage"
        error={errors.ownerNIDImage?.message}
        required={true}
        register={register}
        registerOptions={{
          validate: () => {
            return watchedOwnerNIDPreview
              ? true
              : "Owner NID image is required";
          },
        }}
      />

      <h3 className="text-lg font-medium text-gray-800 border-b pb-2 mb-4 pt-4">
        Professional Information
      </h3>

      <FormField
        label="Specialization"
        id="specialization"
        type="text"
        placeholder="Enter your specialization (e.g., Engine, Transmission, etc.)"
        error={errors.specialization?.message}
        register={register}
        required
      />

      <FormField
        label="Years of Experience"
        id="experience"
        type="text"
        placeholder="Enter your years of experience"
        error={errors.experience?.message}
        register={register}
        required
      />

      <ImageUploader
        label="Professional Certificate"
        preview={certificatePreview}
        isUploading={isCertificateUploading}
        onUpload={handleCertificateImageChange}
        onReset={handleCertificateReset}
        inputId="certificateFile"
        error={errors.certificateFile?.message}
        required={true}
        register={register}
        registerOptions={{
          validate: () => {
            return watchedCertificatePreview
              ? true
              : "Professional Certificate is required";
          },
        }}
      />

      <div>
        <button
          type="submit"
          disabled={isNIDUploading || isCertificateUploading}
          className={`mt-6 h-[50px] w-full cursor-pointer rounded-xl border-none bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150 ${
            isNIDUploading || isCertificateUploading
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {isNIDUploading || isCertificateUploading
            ? "Processing Images..."
            : "Register as Mechanic"}
        </button>
      </div>
    </form>
  );
};

export default MechanicSignUpForm;
