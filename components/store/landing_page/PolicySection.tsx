import React from "react";
import { TbTruckReturn, TbShieldCheck } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const policies = [
  {
    icon: TbTruckReturn,
    title: "30-Day Returns",
    description:
      "We know online shopping can be tricky. You can try and return any item within 30 days for a full refund.",
  },
  {
    icon: TbShieldCheck,
    title: "Safe Delivery",
    description:
      "Your order is in good hands. We guarantee safe, insured delivery right to your door.",
  },
  {
    icon: BiSupport,
    title: "24/7 Support",
    description:
      "Our team is here to help with any questions you may have, anytime. We're just a message away.",
  },
];

const PolicySection = () => {
  return (
    <section className="w-full bg-[#FFE3BB] py-12 md:py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 px-4">
        {policies.map((policy) => (
          <div
            key={policy.title}
            className="flex flex-col items-center text-center md:flex-1"
          >
            <policy.icon className="w-10 h-10 md:w-12 md:h-12 text-[#6C1D45] mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {policy.title}
            </h3>
            <p className="text-sm text-gray-700 max-w-xs">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PolicySection;
