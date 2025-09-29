import React from 'react';

const ScrollingMessage = () => {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        <span className="inline-block px-4 font-telugu-sans text-sm md:text-base">
          ✨ ఉత్తమంగా ధృవీకరించబడిన సహజ రత్నాల నుండి అసలైన నీలము (🔵 Blue Sapphire) మరియు కెంపు (🔴 Ruby) రత్నాలను కొనుగోలు చేయండి | Buy authentic Neelam (🔷 Blue Sapphire) and Kempu (🔴 Ruby) gemstones from certified natural gemstones from us
        </span>
        <span className="inline-block px-4 font-telugu-sans text-sm md:text-base">
          ✨ ఉత్తమంగా ధృవీకరించబడిన సహజ రత్నాల నుండి అసలైన నీలము (🔵 Blue Sapphire) మరియు కెంపు (🔴 Ruby) రత్నాలను కొనుగోలు చేయండి | Buy authentic Neelam (🔷 Blue Sapphire) and Kempu (🔴 Ruby) gemstones from certified natural gemstones from us
        </span>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-flex;
          min-width: 200%;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingMessage;
