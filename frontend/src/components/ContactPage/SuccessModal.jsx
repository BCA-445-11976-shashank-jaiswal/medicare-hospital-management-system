import React from "react";
import { Check, X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-8 w-full max-w-sm flex flex-col items-center text-center transform animate-in zoom-in-95 duration-300 ease-out">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
        >
          <X size={20} />
        </button>

        {/* GPay Style Checkmark Animation Container */}
        <div className="relative mb-6 mt-4">
          {/* Outer Ring */}
          <div className="w-24 h-24 rounded-full border-4 border-emerald-100 flex items-center justify-center animate-pulse">
            {/* Animated Green Circle */}
            <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin duration-[1.5s]" />
            
            {/* Inner Circle with Pop Animation */}
            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200 animate-in zoom-in-50 duration-500 delay-150 fill-mode-both">
              <Check className="text-white h-10 w-10 stroke-[3px] animate-in slide-in-from-bottom-2 duration-500 delay-300 fill-mode-both" />
            </div>
          </div>
          
          {/* Floating Particles/Glow Effects */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-300 rounded-full blur-sm animate-bounce" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-200 rounded-full blur-sm animate-pulse" />
        </div>

        {/* Success Text */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Awesome!
        </h3>
        <p className="text-gray-600 font-medium mb-8">
          {message || "Your message has been sent successfully."}
        </p>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-xl shadow-emerald-100 transition-all active:scale-95 flex items-center justify-center gap-2 group"
        >
          <span>Done</span>
          <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:animate-ping" />
        </button>
      </div>

      <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 48; }
          to { stroke-dashoffset: 0; }
        }
        .checkmark-draw {
          stroke-dasharray: 48;
          animation: draw 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;
