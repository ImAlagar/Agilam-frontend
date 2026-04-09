import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  items = [],
  route,
  color = "primary",
}) => {
  const navigate = useNavigate();

  const styles = {
    primary: {
      border: "border-green-200",
      gradient: "from-green-100 to-white",
      iconBg: "bg-green-500",
      text: "text-green-700",
      tick: "text-green-600",
    },
    secondary: {
      border: "border-orange-200",
      gradient: "from-orange-100 to-white",
      iconBg: "bg-orange-500",
      text: "text-orange-700",
      tick: "text-orange-600",
    },
    accent: {
      border: "border-blue-200",
      gradient: "from-blue-100 to-white",
      iconBg: "bg-blue-500",
      text: "text-blue-700",
      tick: "text-blue-600",
    },
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative cursor-pointer"
      onClick={() => route && navigate(route)}
    >
      {/* CARD */}
      <div
        className={`relative rounded-2xl p-6 pt-12 shadow-xl border ${styles[color].border} overflow-hidden`}
      >
        {/* 🔹 Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${styles[color].gradient}`}
        />

        {/* 🔹 Diamond Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />

        {/* 🔹 Center Glow (IMPORTANT) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 bg-white/50 blur-3xl rounded-full"></div>
        </div>

        {/* 🔹 Content */}
        <div className="relative z-10 text-center">
          <h3 className={`text-xl font-bold mb-4 ${styles[color].text}`}>
            {title}
          </h3>

          <ul className="space-y-3 text-left">
            {items.map((item, i) => (
              <li key={i} className="flex gap-2 text-gray-700 text-sm">
                <Check size={16} className={`${styles[color].tick} mt-1`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔹 Floating Icon */}
      <div
        className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-white ${styles[color].iconBg}`}
      >
        {Icon && <Icon size={24} />}
      </div>
    </motion.div>
  );
};

export default ServiceCard;