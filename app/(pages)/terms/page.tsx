"use client";

import React, { useState } from "react";

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<"en" | "bn">("en");

  const content = {
    en: {
      title: "Terms of Service",
      sections: [
        {
          title: "Introduction",
          content:
            'These Terms of Service ("Terms") govern your use of the HomeGarage platform, including our mobile application, website, and all services offered (FixMate, PartsHub, AutoBazar, ProDriver, and AutoSOS). By accessing or using HomeGarage, you agree to comply with these Terms.',
        },
        {
          title: "1. Eligibility",
          list: [
            "You must be at least 18 years old to use our services",
            "If you create an account on behalf of a company, you represent you have authority to bind the company",
          ],
        },
        {
          title: "2. User Accounts",
          list: [
            "You are responsible for maintaining the confidentiality of your login credentials",
            "All actions taken using your account are your responsibility",
            "We reserve the right to suspend or terminate accounts for misuse or fraudulent activity",
          ],
        },
        {
          title: "3. Service-Specific Terms",
          subsections: [
            {
              title: "3.1 FixMate – Book a Mechanic",
              list: [
                "Once a mechanic accepts a booking, you cannot cancel it via the app",
                "If a customer refuses service after mechanic arrival, a travel cost and platform fee will be added to their next invoice",
                "Repeating this behavior 3 times may result in a permanent ban",
                "If the mechanic identifies additional issues, a revised estimate will be shared. You may approve or reject. If rejected, original work continues",
              ],
            },
            {
              title: "3.2 PartsHub – Auto Parts Purchase",
              list: [
                "Products are clearly labeled as either new or reconditioned",
                "Reconditioned parts come without any guarantee or warranty",
                "New parts may carry warranties only if provided by the seller, which will be clearly stated",
                "HomeGarage is not liable for post-purchase issues with reconditioned parts",
                "Delivery timelines vary based on distance and product origin",
              ],
            },
            {
              title: "3.3 AutoBazar – Buy & Sell Vehicles",
              list: [
                "For deals closed at HomeGarage offices, a 0.2% commission is charged to the buyer",
                "In-app connections are facilitated between verified buyers and sellers, with optional paid services",
                "HomeGarage is not responsible for post-sale disputes unless the transaction is formally hosted by our office",
              ],
            },
            {
              title: "3.4 ProDriver – Hire a Driver",
              list: [
                "Drivers are verified by HomeGarage (license, NID, experience, address)",
                "After a completed service, if you contact a driver directly, HomeGarage is not liable for any incidents",
                "We do not offer post-service support in privately arranged engagements",
              ],
            },
            {
              title: "3.5 AutoSOS – Emergency Support",
              list: [
                "Urgent help includes towing, emergency delivery, or highway assistance",
                "Charges are calculated based on distance and type of service",
                "Emergency requests are not cancellable after confirmation",
                "Service availability may vary by region and traffic conditions",
              ],
            },
          ],
        },
        {
          title: "4. Booking Cancellation Rules",
          list: [
            "Cancellation is not allowed once a mechanic, driver, seller, or parts vendor accepts the service",
            "Violation of this policy incurs a penalty, automatically billed on your next booking",
            "Repeated violations may result in account restrictions",
          ],
        },
        {
          title: "5. Payments",
          list: [
            "All charges are displayed transparently before final confirmation",
            "Payments can be made online or via Cash-on-Delivery (COD), with extra fee",
            "Invoices reflect service fee, platform charge, delivery fee (if applicable), and VAT where required",
            "HomeGarage may deduct any penalties or past dues from your next invoice",
          ],
        },
        {
          title: "6. Refunds & Disputes",
          list: [
            "Refunds are only applicable if service is canceled before acceptance",
            "No refunds are given once a mechanic, driver, vendor, or seller confirms a service or sale",
            "For any service dissatisfaction, users must report within 24 hours via in-app support",
            "Refund claims are evaluated case-by-case, and decision is final",
          ],
        },
        {
          title: "7. Conduct and Usage",
          list: [
            "Users must not engage in abusive, fraudulent, or illegal activity",
            "HomeGarage may investigate violations and suspend services without notice",
            "Any content or communication deemed harmful may be removed",
          ],
        },
        {
          title: "8. Intellectual Property",
          list: [
            "All content, branding, and designs are property of HomeGarage",
            "You may not reuse or modify our assets without written permission",
          ],
        },
        {
          title: "9. Data & Permissions",
          list: [
            "App usage requires location access, contact info, and device permissions",
            "We use cookies and third-party tools (analytics, ads) to improve your experience",
            "Our Privacy Policy governs how we collect and use your data",
          ],
        },
        {
          title: "10. Platform Changes",
          list: [
            "HomeGarage reserves the right to modify services, pricing, and policies at any time",
            "Continued use of the platform means you accept the updated Terms",
          ],
        },
        {
          title: "11. Governing Law",
          list: [
            "These Terms are governed by the laws of the People's Republic of Bangladesh",
            "All disputes are subject to the exclusive jurisdiction of courts in Rajshahi, Bangladesh",
          ],
        },
      ],
    },
    bn: {
      title: "ব্যবহারের শর্তাবলি",
      sections: [
        {
          title: "পরিচিতি",
          content:
            'এই ব্যবহারের শর্তাবলি ("শর্তাবলি") HomeGarage প্ল্যাটফর্মের ব্যবহারের জন্য প্রযোজ্য, যার মধ্যে রয়েছে আমাদের মোবাইল অ্যাপ্লিকেশন, ওয়েবসাইট এবং সমস্ত সেবা (FixMate, PartsHub, AutoBazar, ProDriver, এবং AutoSOS)। আপনি HomeGarage ব্যবহার করলে এই শর্তাবলির সাথে সম্মত হন।',
        },
        {
          title: "১. যোগ্যতা",
          list: [
            "আমাদের সেবা ব্যবহার করতে হলে আপনার বয়স কমপক্ষে ১৮ বছর হতে হবে",
            "আপনি যদি কোনো প্রতিষ্ঠানের পক্ষ থেকে অ্যাকাউন্ট তৈরি করেন, তবে আপনি প্রতিষ্ঠানকে প্রতিনিধিত্ব করার ক্ষমতা রাখেন",
          ],
        },
        {
          title: "২. ব্যবহারকারীর অ্যাকাউন্ট",
          list: [
            "আপনার লগইন তথ্য গোপন রাখা আপনার দায়িত্ব",
            "আপনার অ্যাকাউন্ট ব্যবহার করে যা কিছু করা হবে, তার সম্পূর্ণ দায়িত্ব আপনার",
            "অসদুপায় বা প্রতারণামূলক আচরণের জন্য আমরা অ্যাকাউন্ট স্থগিত বা বাতিল করতে পারি",
          ],
        },
        {
          title: "৩. নির্দিষ্ট সেবার শর্তাবলি",
          subsections: [
            {
              title: "৩.১ FixMate – মেকানিক বুকিং",
              list: [
                "মেকানিক বুকিং নিশ্চিত হলে তা অ্যাপে বাতিল করা যাবে না",
                "মেকানিক গন্তব্যে পৌঁছে গেলে সেবা প্রত্যাখ্যান করলে, যাতায়াত খরচ এবং প্ল্যাটফর্ম ফি পরবর্তী ইনভয়েসে যোগ হবে",
                "এই আচরণ ৩ বার করলে অ্যাকাউন্ট স্থায়ীভাবে নিষিদ্ধ হতে পারে",
                "অতিরিক্ত সমস্যা চিহ্নিত হলে আপডেটেড মূল্য অনুমোদনের জন্য পাঠানো হবে; আপনি তা গ্রহণ বা প্রত্যাখ্যান করতে পারেন। প্রত্যাখ্যান করলে মূল কাজ চালিয়ে যাওয়া হবে",
              ],
            },
            {
              title: "৩.২ PartsHub – গাড়ির যন্ত্রাংশ কেনাকাটা",
              list: [
                "পণ্যগুলো নতুন বা রিকন্ডিশন — এটি স্পষ্টভাবে উল্লেখ থাকে",
                "রিকন্ডিশন পার্টসে কোনো গ্যারান্টি বা ওয়ারেন্টি থাকে না",
                "নতুন পার্টসে ওয়ারেন্টি থাকতে পারে, যদি বিক্রেতা দিয়ে থাকে এবং তা উল্লেখ থাকবে",
                "রিকন্ডিশন পার্টসের পরবর্তী সমস্যার জন্য HomeGarage দায়ী নয়",
                "ডেলিভারি সময় দূরত্ব ও পণ্যের উৎস অনুযায়ী পরিবর্তিত হতে পারে",
              ],
            },
            {
              title: "৩.৩ AutoBazar – গাড়ি ক্রয় ও বিক্রয়",
              list: [
                "HomeGarage অফিসে লেনদেন সম্পন্ন হলে ক্রেতার কাছ থেকে ০.২% কমিশন নেওয়া হবে",
                "অ্যাপে যাচাইকৃত ক্রেতা ও বিক্রেতার মধ্যে সংযোগ করানো হয়; অতিরিক্ত ফিচার পেইড হতে পারে",
                "অফিসে অফিসিয়ালি সম্পন্ন না হলে পরবর্তী ঝামেলার জন্য HomeGarage দায়ী নয়",
              ],
            },
            {
              title: "৩.৪ ProDriver – ড্রাইভার ভাড়া",
              list: [
                "ড্রাইভারদের লাইসেন্স, জাতীয় পরিচয়পত্র, অভিজ্ঞতা ও ঠিকানা যাচাই করে HomeGarage",
                "সেবা শেষে ড্রাইভারকে সরাসরি যোগাযোগ করলে পরবর্তী ঝামেলার জন্য HomeGarage দায়ী নয়",
                "ব্যক্তিগতভাবে গৃহীত সেবার জন্য কোনো সহায়তা দেওয়া হয় না",
              ],
            },
            {
              title: "৩.৫ AutoSOS – জরুরি সহায়তা",
              list: [
                "জরুরি সেবার মধ্যে টোয়িং, জরুরি ডেলিভারি, বা হাইওয়ে সহায়তা অন্তর্ভুক্ত",
                "খরচ দূরত্ব ও সেবার ধরণ অনুযায়ী নির্ধারিত হয়",
                "কনফার্ম হওয়ার পর জরুরি অনুরোধ বাতিলযোগ্য নয়",
                "সেবার প্রাপ্যতা অঞ্চল ও ট্রাফিক পরিস্থিতির উপর নির্ভর করে",
              ],
            },
          ],
        },
        {
          title: "৪. বুকিং বাতিলের নিয়মাবলি",
          list: [
            "মেকানিক, ড্রাইভার, বিক্রেতা বা পার্টস ভেন্ডর একবার সেবা গ্রহণ করলে তা বাতিল করা যাবে না",
            "এই নিয়ম লঙ্ঘনের ফলে জরিমানা প্রযোজ্য হবে এবং তা পরবর্তী বুকিংয়ে যুক্ত হবে",
            "পুনরাবৃত্ত লঙ্ঘনের ফলে অ্যাকাউন্টে সীমাবদ্ধতা আরোপ করা হতে পারে",
          ],
        },
        {
          title: "৫. পেমেন্ট",
          list: [
            "সব চার্জ নিশ্চিতকরণের আগে স্পষ্টভাবে প্রদর্শিত হয়",
            "অনলাইন পেমেন্ট অথবা ক্যাশ অন ডেলিভারি (COD) এর মাধ্যমে পরিশোধ করা যাবে, COD-তে অতিরিক্ত ফি প্রযোজ্য",
            "ইনভয়েসে সেবা ফি, প্ল্যাটফর্ম চার্জ, ডেলিভারি ফি (যদি থাকে), এবং প্রযোজ্য ভ্যাট অন্তর্ভুক্ত থাকবে",
            "যেকোনো জরিমানা বা বকেয়া পরবর্তী ইনভয়েস থেকে কেটে নেওয়া হতে পারে",
          ],
        },
        {
          title: "৬. রিফান্ড ও অভিযোগ",
          list: [
            "রিফান্ড কেবল তখনই প্রযোজ্য যখন সেবা নিশ্চিত হবার আগেই বাতিল করা হয়",
            "একবার মেকানিক, ড্রাইভার, বিক্রেতা বা ভেন্ডর সেবা নিশ্চিত করলে রিফান্ড প্রযোজ্য নয়",
            "সেবা সংক্রান্ত অভিযোগ ২৪ ঘণ্টার মধ্যে ইন-অ্যাপ সাপোর্টে জানাতে হবে",
            "প্রতিটি রিফান্ড দাবি যাচাই-বাছাই করে চূড়ান্ত সিদ্ধান্ত নেওয়া হয়",
          ],
        },
        {
          title: "৭. ব্যবহারকারীর আচরণ",
          list: [
            "ব্যবহারকারীদেরকে কোনো প্রকার অপব্যবহার, প্রতারণা বা বেআইনি কর্মকাণ্ডে লিপ্ত হওয়া চলবে না",
            "HomeGarage যেকোনো লঙ্ঘন তদন্ত করে সেবা স্থগিত করতে পারে",
            "ক্ষতিকর কোনো কনটেন্ট বা বার্তা মুছে ফেলা হতে পারে",
          ],
        },
        {
          title: "৮. মেধাস্বত্ব",
          list: [
            "সমস্ত কনটেন্ট, ব্র্যান্ডিং, ও ডিজাইন HomeGarage-এর মালিকানাধীন",
            "আমাদের অনুমতি ছাড়া এগুলো ব্যবহার বা পরিবর্তন করা যাবে না",
          ],
        },
        {
          title: "৯. তথ্য ও অনুমতিসমূহ",
          list: [
            "অ্যাপ ব্যবহারে লোকেশন, কনট্যাক্ট ও ডিভাইস পারমিশন প্রয়োজন হয়",
            "আমরা কুকিজ ও তৃতীয় পক্ষের টুল (বিশ্লেষণ, বিজ্ঞাপন) ব্যবহার করি আপনার অভিজ্ঞতা উন্নত করতে",
            "আমরা কীভাবে আপনার তথ্য সংগ্রহ ও ব্যবহার করি তা আমাদের গোপনীয়তা নীতিতে বিস্তারিত রয়েছে",
          ],
        },
        {
          title: "১০. প্ল্যাটফর্ম পরিবর্তন",
          list: [
            "HomeGarage যেকোনো সময় সেবা, মূল্য বা নীতিমালা পরিবর্তনের অধিকার রাখে",
            "প্ল্যাটফর্ম চালিয়ে ব্যবহার করলে তা আপডেট হওয়া শর্তাবলিতে সম্মতির ইঙ্গিত বহন করে",
          ],
        },
        {
          title: "১১. আইনগত শর্ত",
          list: [
            "এই শর্তাবলি গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের আইন দ্বারা পরিচালিত",
            "যেকোনো বিরোধের ক্ষেত্রে রাজশাহী, বাংলাদেশের আদালতের একক এখতিয়ার থাকবে",
          ],
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
            {section.content && (
              <p className="text-gray-700">{section.content}</p>
            )}
            {section.list && (
              <ul className="list-decimal ml-6 mt-2 text-gray-700 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.subsections && (
              <div className="space-y-4 mt-4">
                {section.subsections.map((subsection, i) => (
                  <div key={i} className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {subsection.title}
                    </h3>
                    <ul className="list-decimal ml-6 text-gray-700 space-y-2">
                      {subsection.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
