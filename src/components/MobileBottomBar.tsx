"use client";

import { Phone, CalendarDays, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileBottomBar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden  bg-black">
      <div className="grid grid-cols-3  h-[64px] border-t border-black/10">
        {/* Call */}
        <a
          href="tel:+918977727771"
          className="flex flex-col items-center justify-center gap-1 text-white active:bg-black/10"
        >
          <Phone size={20} />
          <span className="text-[14px] font-medium">Call Us</span>
        </a>

        {/* Appointment */}
        <button
          onClick={() => navigate("/callback")}
          className="flex flex-col items-center justify-center gap-1 text-white active:bg-black/10"
        >
          <CalendarDays size={20} />
          <span className="text-[12px] font-medium">Book An Appointment</span>
        </button>

        {/* Email */}
        <a
          href="mailto:info@longevitylounge.in"
          className="flex flex-col items-center justify-center gap-1 text-white active:bg-black/10"
        >
          <Mail size={20} />
          <span className="text-[14px] font-medium">Email</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
