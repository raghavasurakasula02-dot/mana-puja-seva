import React, { useEffect, useRef, useState } from 'react';

const ScrollingMessage = () => {
  const scrollRef = useRef(null);
  const [duration, setDuration] = useState(20); // default duration in seconds

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      // scroll speed: 100 pixels per 10 seconds
      const speed = 10; // px per second
      const newDuration = (scrollWidth / speed);
      setDuration(newDuration);
    }
  }, []);

  return (
    <div className="bg-primary text-white py-2 overflow-hidden relative">
      <div 
        ref={scrollRef} 
        className="flex whitespace-nowrap"
        style={{ animation: `scroll ${duration}s linear infinite` }}
      >
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
        .flex {
          display: inline-flex;
          min-width: 200%;
        }
      `}</style>
    </div>
  );
};

export default ScrollingMessage;
