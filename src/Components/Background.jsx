import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 bg-[#030014]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-20"></div>
    </div>
  );
};

export default AnimatedBackground;