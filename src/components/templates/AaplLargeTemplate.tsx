import React from "react";
import BigTemplate from "./BigTemplate";

interface AaplLargeTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const AaplLargeTemplate: React.FC<AaplLargeTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
    preamble={"Apple Inc. (AAPL) closed at $157.65 on December 31st last year. This reflects a strong year for the company, driven by robust iPhone sales and growth in services."}
    cards={[
      "Price: $157.65 (last year close)",
      "Change: +12.3% YoY",
      "Market Cap: $2.9T",
      "P/E Ratio: 29.5",
      "Dividend Yield: 0.55%",
      "52-Week Range: $150.00 - $199.62",
      "iPhone Sales: Record high",
      "Services Growth: +20% YoY",
    ]}
    cardGridVariant="big-template"
  />
);

export default AaplLargeTemplate; 