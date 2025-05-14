"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PartsShopOwnerFormData } from "@/types/garage-owner";
import { useImageUpload } from "@/hooks/useImageUpload";
import { FormField } from "@/components/common/FormField";
import { ImageUploader } from "@/components/common/ImageUploader";

const PartsShopOwnerSignUpForm = () => {
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

  const watchedOwnerNIDPreview = watch("ownerNIDImageUrl");
  const watchedShopLicensePreview = watch("shopTradeLicenseUrl");

  const onSubmit: SubmitHandler<PartsShopOwnerFormData> = data => {
    const { ownerNIDImage, shopTradeLicenseFile, ...submitData } = data;
    console.log("Parts Shop Owner Sign Up Data:", {
      ...submitData,
      ownerNIDImageUrl: watchedOwnerNIDPreview,
      shopTradeLicenseUrl: watchedShopLicensePreview,
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
        label="Shop Address"
        id="shopAddress"
        type="text"
        placeholder="Enter the shop address"
        error={errors.shopAddress?.message}
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
        required={true}
        register={register}
        registerOptions={{
          validate: () => {
            return watchedShopLicensePreview
              ? true
              : "Shop Trade License is required";
          },
        }}
      />

      <div>
        <button
          type="submit"
          disabled={isNIDUploading || isLicenseUploading}
          className={`mt-6 h-[50px] w-full cursor-pointer rounded-xl border-none bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-150 ${
            isNIDUploading || isLicenseUploading
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {isNIDUploading || isLicenseUploading
            ? "Processing Images..."
            : "Register as Parts Shop Owner"}
        </button>
      </div>
    </form>
  );
};

export default PartsShopOwnerSignUpForm;
