"use client";

import React, { useState } from "react";

export default function PrivacyPage() {
  const [activeTab, setActiveTab] = useState<"en" | "bn">("en");

  const content = {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Introduction",
          content:
            "This Privacy Policy explains how HomeGarage collects, uses, discloses, and safeguards your information when you use our application and platform. By using our services, you agree to this policy.",
        },
        {
          title: "2. What Information We Collect",
          content:
            "We collect the following types of data to improve user experience and service efficiency:",
          list: [
            "Personal Information: Name, phone number, email address, location, and payment method",
            "Vehicle Information: Vehicle type, model, year, and registration details",
            "Usage Data: Interactions within the app, service preferences, and support tickets",
            "Location Data: Collected when you allow GPS-based features",
            "Device Information: Device ID, operating system, and browser type",
            "Uploaded Content: Photos, documents, or any file submitted for verification or service purposes",
          ],
        },
        {
          title: "3. How We Use Your Information",
          content: "We use your data to:",
          list: [
            "Provide you with core services like booking mechanics, buying/selling vehicles, purchasing parts, or hiring drivers",
            "Offer location-based service recommendations and real-time tracking",
            "Handle payments, orders, cancellations, and customer support",
            "Improve app performance, detect fraud, and analyze usage trends",
            "Send notifications, offers, promotions, and service updates",
          ],
        },
        {
          title: "4. Cookies and Tracking Technologies",
          content: "We use cookies and similar technologies to:",
          list: [
            "Remember your preferences",
            "Track usage and performance metrics",
            "Personalize your experience across devices",
          ],
          additional:
            "Cookies are small data files stored on your device. You can manage or disable cookies through your browser settings but it may limit app functionality.",
        },
        {
          title: "5. App Permissions",
          content: "Our app may request permissions for:",
          list: [
            "Location: For nearby service access and live tracking",
            "Camera: For uploading photos during bookings or profile setup",
            "File Access: For submitting documents and uploading receipts",
            "Notifications: To send service updates and offers",
          ],
          additional:
            "All permissions are optional but denying them may limit some features.",
        },
        {
          title: "6. Third-Party Analytics and Advertising Tools",
          content:
            "We use tools like Firebase Analytics, Meta Ads Manager, and Google Tag Manager to:",
          list: [
            "Understand how users interact with our platform",
            "Optimize app flow and functionality",
            "Serve relevant promotional ads across channels",
          ],
          additional:
            "These tools may collect device IDs, app usage patterns, and event data but do not store sensitive personal information.",
        },
        {
          title: "7. Data Sharing and Disclosure",
          content:
            "We do not sell your personal data. We may share limited information with:",
          list: [
            "Mechanics, Drivers, or Sellers during confirmed service interactions",
            "Third-party partners for technical support and analytics",
            "Government or legal bodies if required by law",
          ],
        },
        {
          title: "8. Data Retention",
          content:
            "We retain user information as long as your account is active or as needed to comply with legal obligations and dispute resolution. You may request account deletion at any time.",
        },
        {
          title: "9. Children's Privacy",
          content:
            "Our services are not directed to anyone under 18. Users below 18 must use the app under parental or guardian supervision.",
        },
        {
          title: "10. Your Rights",
          content: "You may:",
          list: [
            "Access and correct your personal data through your profile",
            "Delete your account and request removal of data",
            "Manage notification preferences",
          ],
        },
        {
          title: "11. Changes to This Policy",
          content:
            "HomeGarage reserves full rights to modify this Privacy Policy when needed without prior notice. Updated policies will be reflected in the app and apply immediately from the time of posting.",
        },
        {
          title: "12. Contact Us",
          content:
            "For any concerns regarding your privacy or data usage, contact us at:",
          contact: {
            email: "privacy@homegaragebd.com",
            address:
              "Office Address: Rani Bazar, Rajshahi Sadar, Rajshahi, Bangladesh",
          },
        },
      ],
    },
    bn: {
      title: "গোপনীয়তা নীতি",
      sections: [
        {
          title: "১. পরিচিতি",
          content:
            "এই গোপনীয়তা নীতি (Privacy Policy) ব্যাখ্যা করে যে, HomeGarage কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, প্রকাশ এবং সুরক্ষা করে যখন আপনি আমাদের অ্যাপ্লিকেশন ও প্ল্যাটফর্ম ব্যবহার করেন। আমাদের সেবা ব্যবহারের মাধ্যমে আপনি এই নীতির সাথে সম্মত হন।",
        },
        {
          title: "২. আমরা কী তথ্য সংগ্রহ করি",
          content:
            "আমরা ব্যবহারকারীর অভিজ্ঞতা ও সেবা দক্ষতা উন্নয়নের জন্য নিম্নলিখিত ধরণের তথ্য সংগ্রহ করি:",
          list: [
            "ব্যক্তিগত তথ্য: নাম, ফোন নম্বর, ইমেইল ঠিকানা, অবস্থান, এবং পেমেন্ট পদ্ধতি",
            "যানবাহনের তথ্য: যানবাহনের ধরন, মডেল, সাল, ও রেজিস্ট্রেশন বিবরণ",
            "ব্যবহারের তথ্য: অ্যাপের মধ্যে আপনার কার্যকলাপ, সেবার পছন্দ, এবং সাপোর্ট টিকিট",
            "অবস্থান সংক্রান্ত তথ্য: আপনি জিপিএস-ভিত্তিক ফিচার চালু করলে তা সংগ্রহ করা হয়",
            "ডিভাইসের তথ্য: ডিভাইস আইডি, অপারেটিং সিস্টেম, এবং ব্রাউজারের ধরন",
            "আপলোডকৃত কনটেন্ট: ছবি, ডকুমেন্ট বা যেকোনো ফাইল যা যাচাই বা সেবার উদ্দেশ্যে জমা দেওয়া হয়",
          ],
        },
        {
          title: "৩. আমরা আপনার তথ্য কীভাবে ব্যবহার করি",
          content: "আপনার তথ্য ব্যবহৃত হয় নিচের উদ্দেশ্যে:",
          list: [
            "মৌলিক সেবা প্রদান করতে — যেমন মেকানিক বুকিং, যানবাহন ক্রয়/বিক্রয়, পার্টস কেনা, বা ড্রাইভার ভাড়া",
            "অবস্থানভিত্তিক সুপারিশ ও রিয়েল-টাইম ট্র্যাকিং",
            "পেমেন্ট, অর্ডার, বাতিলকরণ এবং গ্রাহক সহায়তা পরিচালনা করতে",
            "অ্যাপের কার্যক্ষমতা উন্নত করতে, প্রতারণা সনাক্ত করতে এবং ব্যবহার বিশ্লেষণ করতে",
            "নোটিফিকেশন, অফার, প্রোমোশন ও সেবা আপডেট পাঠাতে",
          ],
        },
        {
          title: "৪. কুকিজ ও ট্র্যাকিং প্রযুক্তি",
          content: "আমরা নিচের উদ্দেশ্যে কুকিজ ও অনুরূপ প্রযুক্তি ব্যবহার করি:",
          list: [
            "আপনার পছন্দ মনে রাখতে",
            "ব্যবহার ও পারফরম্যান্স মেট্রিক ট্র্যাক করতে",
            "বিভিন্ন ডিভাইস জুড়ে আপনার অভিজ্ঞতা ব্যক্তিগতকরণ করতে",
          ],
          additional:
            "কুকিজ হলো ছোট ডেটা ফাইল যা আপনার ডিভাইসে সংরক্ষণ করা হয়। আপনি চাইলে ব্রাউজারের সেটিংস থেকে কুকিজ নিয়ন্ত্রণ বা নিষ্ক্রিয় করতে পারেন, তবে এতে কিছু ফিচার কাজ নাও করতে পারে।",
        },
        {
          title: "৫. অ্যাপ পারমিশন",
          content: "আমাদের অ্যাপ নিচের পারমিশন চাইতে পারে:",
          list: [
            "অবস্থান: নিকটস্থ সেবা ও লাইভ ট্র্যাকিংয়ের জন্য",
            "ক্যামেরা: ছবি আপলোড করার সময় বা প্রোফাইল সেটআপে",
            "ফাইল অ্যাক্সেস: ডকুমেন্ট জমা বা রসিদ আপলোড করতে",
            "নোটিফিকেশন: সেবা আপডেট ও অফার পাঠাতে",
          ],
          additional:
            "সব পারমিশন ঐচ্ছিক, তবে অস্বীকার করলে কিছু ফিচার সীমিত হতে পারে।",
        },
        {
          title: "৬. তৃতীয় পক্ষের অ্যানালিটিক্স ও বিজ্ঞাপন টুল",
          content:
            "আমরা Firebase Analytics, Meta Ads Manager এবং Google Tag Manager-এর মতো টুল ব্যবহার করি:",
          list: [
            "ব্যবহারকারীর আচরণ বোঝার জন্য",
            "অ্যাপের ফ্লো ও কার্যক্ষমতা উন্নত করার জন্য",
            "প্রাসঙ্গিক বিজ্ঞাপন প্রদর্শনের জন্য",
          ],
          additional:
            "এই টুলগুলো ডিভাইস আইডি, অ্যাপ ব্যবহার প্যাটার্ন ও ইভেন্ট ডেটা সংগ্রহ করতে পারে, তবে এগুলো সংবেদনশীল ব্যক্তিগত তথ্য সংরক্ষণ করে না।",
        },
        {
          title: "৭. তথ্য শেয়ারিং ও প্রকাশ",
          content:
            "আমরা আপনার ব্যক্তিগত তথ্য বিক্রি করি না। আমরা সীমিত তথ্য শেয়ার করতে পারি:",
          list: [
            "নিশ্চিতকৃত সেবার ক্ষেত্রে মেকানিক, ড্রাইভার বা বিক্রেতার সাথে",
            "প্রযুক্তিগত সহায়তা ও বিশ্লেষণের জন্য তৃতীয় পক্ষের সাথে",
            "আইনি প্রয়োজনে সরকারি বা আইন প্রয়োগকারী সংস্থার সাথে",
          ],
        },
        {
          title: "৮. তথ্য সংরক্ষণ",
          content:
            "আপনার অ্যাকাউন্ট সক্রিয় থাকা পর্যন্ত বা আইনি প্রয়োজনে যতদিন প্রয়োজন ততদিন আমরা তথ্য সংরক্ষণ করি। আপনি যেকোনো সময় অ্যাকাউন্ট মুছে ফেলার অনুরোধ করতে পারেন।",
        },
        {
          title: "৯. শিশুদের গোপনীয়তা",
          content:
            "আমাদের সেবা ১৮ বছরের কম বয়সীদের জন্য নয়। ১৮ বছরের কম বয়সী ব্যবহারকারীরা অভিভাবক বা অভিভাবকের তত্ত্বাবধানে অ্যাপ ব্যবহার করতে পারবেন।",
        },
        {
          title: "১০. আপনার অধিকারসমূহ",
          content: "আপনি:",
          list: [
            "আপনার প্রোফাইল থেকে ব্যক্তিগত তথ্য অ্যাক্সেস ও সংশোধন করতে পারবেন",
            "অ্যাকাউন্ট মুছে ফেলতে ও তথ্য অপসারণ অনুরোধ করতে পারবেন",
            "নোটিফিকেশন সেটিংস নিয়ন্ত্রণ করতে পারবেন",
          ],
        },
        {
          title: "১১. এই নীতিতে পরিবর্তন",
          content:
            "HomeGarage যেকোনো সময় পূর্ব বিজ্ঞপ্তি ছাড়াই এই গোপনীয়তা নীতি পরিবর্তনের অধিকার সংরক্ষণ করে। আপডেটকৃত নীতি অ্যাপে প্রকাশ করা হবে এবং সঙ্গে সঙ্গে কার্যকর হবে।",
        },
        {
          title: "১২. যোগাযোগ করুন",
          content:
            "আপনার গোপনীয়তা বা তথ্য ব্যবহারের বিষয়ে যেকোনো প্রশ্নের জন্য যোগাযোগ করুন:",
          contact: {
            email: "privacy@homegaragebd.com",
            address: "অফিস ঠিকানা: রাণী বাজার, রাজশাহী সদর, রাজশাহী, বাংলাদেশ",
          },
        },
      ],
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-40">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
          <button
            onClick={() => setActiveTab("en")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "en"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setActiveTab("bn")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "bn"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6">{content[activeTab].title}</h1>

      <div className="space-y-6">
        {content[activeTab].sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
            {section.list && (
              <ul className="list-decimal ml-6 mt-2 text-gray-700 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.additional && (
              <p className="text-gray-700 mt-3">{section.additional}</p>
            )}
            {section.contact && (
              <div className="mt-2 text-gray-700">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:privacy@homegaragebd.com"
                    className="text-blue-600 hover:underline"
                  >
                    {section.contact.email}
                  </a>
                </p>
                <p>{section.contact.address}</p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
