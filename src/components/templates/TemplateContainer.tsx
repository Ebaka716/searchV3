import React from "react";

interface TemplateContainerProps {
  headerRef?: React.Ref<HTMLDivElement>;
  header?: React.ReactNode;
  preamble?: React.ReactNode;
  thinking?: React.ReactNode;
  children: React.ReactNode;
}

const TemplateContainer: React.FC<TemplateContainerProps> = ({
  headerRef,
  header,
  preamble,
  thinking,
  children,
}) => (
  <div className="w-full flex flex-col gap-6 mb-6">
    <div ref={headerRef} className="w-full p-0 mb-2 flex flex-col gap-2">
      {header && <div className="text-2xl font-bold text-zinc-900">{header}</div>}
      {preamble && <div className="text-zinc-600 text-base">{preamble}</div>}
      {thinking}
    </div>
    {children}
  </div>
);

export default TemplateContainer; 