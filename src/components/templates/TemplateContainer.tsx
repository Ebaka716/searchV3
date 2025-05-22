"use client";
import React, { useState } from "react";
import { SparkleIcon } from "../icons/SparkleIcon";
import Typewriter from "../ui/Typewriter";

interface TemplateContainerProps {
  headerRef?: React.Ref<HTMLDivElement>;
  header?: string;
  preamble?: string;
  thinking?: React.ReactNode;
  children: React.ReactNode;
}

const TemplateContainer: React.FC<TemplateContainerProps> = ({
  headerRef,
  header,
  preamble,
  thinking,
  children,
}) => {
  const [headerDone, setHeaderDone] = useState(false);
  return (
    <div className="w-full flex flex-col gap-6 mb-6">
      <div ref={headerRef} className="w-full p-0 mb-2 flex flex-col gap-2">
        {header && (
          <div className="text-2xl font-bold text-zinc-900 flex items-center gap-2 mt-4">
            <SparkleIcon className="w-6 h-6 text-yellow-400" />
            <Typewriter text={header} speed={50} onDone={() => setHeaderDone(true)} />
          </div>
        )}
        {preamble && (
          <div className="text-zinc-600 text-base">
            {headerDone ? <Typewriter text={preamble} speed={50} /> : null}
          </div>
        )}
        {thinking}
      </div>
      {children}
    </div>
  );
};

export default TemplateContainer; 