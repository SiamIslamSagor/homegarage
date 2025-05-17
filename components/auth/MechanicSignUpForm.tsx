"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MechanicFormData } from "@/types/garage-owner";
import { useImageUpload } from "@/hooks/useImageUpload";
import { FormField } from "@/components/common/FormField";
import { ImageUploader } from "@/components/common/ImageUploader";
import SuccessModal from "@/components/common/SuccessModal";
import { useRouter } from "next/navigation";

const MechanicSignUpForm = () => {
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

  const onSubmit: SubmitHandler<MechanicFormData> = async data => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      const { ownerNIDImage, certificateFile, ...submitData } = data;

      const response = await fetch("/api/mechanic/register", {
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
            disabled={isSubmitting || isNIDUploading || isCertificateUploading}
            className={`mt-6 h-[50px] w-full cursor-pointer rounded-xl border-none bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150 ${
              isSubmitting || isNIDUploading || isCertificateUploading
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isSubmitting
              ? "Registering..."
              : isNIDUploading || isCertificateUploading
              ? "Processing Images..."
              : "Register as Mechanic"}
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleModalClose}
        title="Registration Successful!"
        message="Your mechanic registration has been submitted successfully. We will review your application and get back to you soon."
      />
    </>
  );
};

export default MechanicSignUpForm;
