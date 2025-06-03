"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PartsShopOwnerFormData } from "@/types/garage-owner";
import { useImageUpload } from "@/hooks/useImageUpload";
import { FormField } from "@/components/common/FormField";
import { ImageUploader } from "@/components/common/ImageUploader";
import SuccessModal from "@/components/common/SuccessModal";
import { useRouter } from "next/navigation";

const PartsShopOwnerSignUpForm = () => {
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
  } = useForm<PartsShopOwnerFormData>();

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

  const {
    preview: trifoldPreview,
    isUploading: isTrifoldUploading,
    handleImageUpload: handleTrifoldUpload,
    resetImage: resetTrifold,
  } = useImageUpload();

  const watchedOwnerNIDPreview = watch("ownerNIDImageUrl");
  const watchedShopLicensePreview = watch("shopTradeLicenseUrl");
  const watchedTrifoldPreview = watch("trifoldImageUrl");

  const onSubmit: SubmitHandler<PartsShopOwnerFormData> = async data => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      const {
        ownerNIDImage,
        shopTradeLicenseFile,
        trifoldImage,
        ...submitData
      } = data;

      const response = await fetch("/api/parts-shop-owner/register", {
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
        setValue("shopTradeLicenseUrl", imageUrl, { shouldValidate: true });
        setValue("shopTradeLicenseFile", undefined);
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
    setValue("shopTradeLicenseUrl", undefined, { shouldValidate: true });
    setValue("shopTradeLicenseFile", undefined);
  };

  const handleTrifoldImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      const imageUrl = await handleTrifoldUpload(e.target.files[0]);
      if (imageUrl) {
        setValue("trifoldImageUrl", imageUrl, { shouldValidate: true });
        setValue("trifoldImage", undefined);
      }
    }
  };

  const handleTrifoldReset = () => {
    resetTrifold();
    setValue("trifoldImageUrl", undefined, { shouldValidate: true });
    setValue("trifoldImage", undefined);
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
          required={false}
          register={register}
          registerOptions={{
            validate: () => true,
          }}
        />

        <h3 className="text-lg font-medium text-gray-800 border-b pb-2 mb-4">
          Shop Information
        </h3>

        <FormField
          label="Shop Name"
          id="shopName"
          type="text"
          placeholder="Enter the shop name"
          error={errors.shopName?.message}
          register={register}
          required
        />

        <FormField
          label="Shop Address (division, district, municipality, ward, street, house number)"
          id="shopAddress"
          type="text"
          placeholder="Enter the shop address"
          error={errors.shopAddress?.message}
          register={register}
          required
        />

        <FormField
          label="Shop Type"
          id="shopType"
          type="text"
          placeholder="Enter the type of shop (e.g., Auto Parts, Motorcycle Parts, etc.)"
          error={errors.shopType?.message}
          register={register}
          required
        />

        <ImageUploader
          label="Shop Trade License"
          preview={licensePreview}
          isUploading={isLicenseUploading}
          onUpload={handleLicenseImageChange}
          onReset={handleLicenseReset}
          inputId="shopTradeLicenseFile"
          error={errors.shopTradeLicenseFile?.message}
          required={false}
          register={register}
          registerOptions={{
            validate: () => true,
          }}
        />

        <ImageUploader
          label="Trifold Image"
          preview={trifoldPreview}
          isUploading={isTrifoldUploading}
          onUpload={handleTrifoldImageChange}
          onReset={handleTrifoldReset}
          inputId="trifoldImage"
          error={errors.trifoldImage?.message}
          required={true}
          register={register}
          registerOptions={{
            validate: () => {
              return watchedTrifoldPreview ? true : "Trifold image is required";
            },
          }}
        />

        <div>
          <button
            type="submit"
            disabled={
              isSubmitting ||
              isNIDUploading ||
              isLicenseUploading ||
              isTrifoldUploading
            }
            className={`mt-6 h-[50px] w-full cursor-pointer rounded-xl border-none bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-150 ${
              isSubmitting ||
              isNIDUploading ||
              isLicenseUploading ||
              isTrifoldUploading
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isSubmitting
              ? "Registering..."
              : isNIDUploading || isLicenseUploading || isTrifoldUploading
              ? "Processing Images..."
              : "Register as Parts Shop Owner"}
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleModalClose}
        title="Registration Successful!"
        message="Your parts shop owner registration has been submitted successfully. We will review your application and get back to you soon."
      />
    </>
  );
};

export default PartsShopOwnerSignUpForm;
