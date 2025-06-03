import React from "react";
import RmdInfoAnswer from "../answers/RmdInfoAnswer";

const RmdLargeAnswerRow: React.FC = () => (
  <div className="w-full h-full">
    {/* Transparent card for tan background effect */}
    <div className="bg-transparent shadow-none border-none p-0">
      <RmdInfoAnswer />
    </div>
  </div>
);

export default RmdLargeAnswerRow; 