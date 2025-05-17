"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GarageOwnerFormData } from "@/types/garage-owner";
import { useImageUpload } from "@/hooks/useImageUpload";
import { FormField } from "@/components/common/FormField";
import { ImageUploader } from "@/components/common/ImageUploader";
import SuccessModal from "@/components/common/SuccessModal";
import { useRouter } from "next/navigation";

const GarageOwnerSignUpForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<GarageOwnerFormData>();

  const {
    preview: nidPreview,
    isUploading: isNIDUploading,
    handleImageUpload: handleNIDUpload,
    resetImage: resetNID,
  } = useImageUpload();

  const {
    preview: licensePreview,
    isUploading: isLicenseUploading,
    handleImageUpload: handleLicenseUpload,
    resetImage: resetLicense,
  } = useImageUpload();

  const watchedOwnerNIDPreview = watch("ownerNIDImageUrl");
  const watchedTradeLicensePreview = watch("garageTradeLicenseUrl");

  const onSubmit: SubmitHandler<GarageOwnerFormData> = async data => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      const { ownerNIDImage, garageTradeLicenseFile, ...submitData } = data;

      const response = await fetch("/api/garage-owner/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      setShowSuccessModal(true);
    } catch (error: any) {
      console.error("Registration error:", error);
      setErrorMessage(error.message || "Failed to register. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    router.push("/"); // or wherever you want to redirect after successful registration
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

  const handleLicenseImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      const imageUrl = await handleLicenseUpload(e.target.files[0]);
      if (imageUrl) {
        setValue("garageTradeLicenseUrl", imageUrl, { shouldValidate: true });
        setValue("garageTradeLicenseFile", undefined);
      }
    }
  };

  const handleNIDReset = () => {
    resetNID();
    setValue("ownerNIDImageUrl", undefined, { shouldValidate: true });
    setValue("ownerNIDImage", undefined);
  };

  const handleLicenseReset = () => {
    resetLicense();
    setValue("garageTradeLicenseUrl", undefined, { shouldValidate: true });
    setValue("garageTradeLicenseFile", undefined);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
            {errorMessage}
          </div>
        )}

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
          Garage Information
        </h3>

        <FormField
          label="Garage Name"
          id="garageName"
          type="text"
          placeholder="Enter the garage name"
          error={errors.garageName?.message}
          register={register}
          required
        />

        <FormField
          label="Garage Address"
          id="garageAddress"
          type="text"
          placeholder="Enter the garage address"
          error={errors.garageAddress?.message}
          register={register}
          required
        />

        <ImageUploader
          label="Garage Trade License"
          preview={licensePreview}
          isUploading={isLicenseUploading}
          onUpload={handleLicenseImageChange}
          onReset={handleLicenseReset}
          inputId="garageTradeLicenseFile"
          error={errors.garageTradeLicenseFile?.message}
          required={true}
          register={register}
          registerOptions={{
            validate: () => {
              return watchedTradeLicensePreview
                ? true
                : "Garage Trade License is required";
            },
          }}
        />

        <div>
          <button
            type="submit"
            disabled={isSubmitting || isNIDUploading || isLicenseUploading}
            className={`mt-6 h-[50px] w-full cursor-pointer rounded-xl border-none bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-150 ${
              isSubmitting || isNIDUploading || isLicenseUploading
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isSubmitting
              ? "Registering..."
              : isNIDUploading || isLicenseUploading
              ? "Processing Images..."
              : "Register as Garage Owner"}
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleModalClose}
        title="Registration Successful!"
        message="Your garage owner registration has been submitted successfully. We will review your application and get back to you soon."
      />
    </>
  );
};

export default GarageOwnerSignUpForm;
