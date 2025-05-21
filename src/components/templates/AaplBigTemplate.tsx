import React from "react";
import BigTemplate from "./BigTemplate";

interface AaplBigTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
}

const AaplBigTemplate: React.FC<AaplBigTemplateProps> = ({ headerRef }) => (
  <BigTemplate
    headerRef={headerRef}
    header={"AAPL Stock Overview"}
    preamble={"Key financials and highlights for Apple Inc. (AAPL)."}
    cards={[
      "Price: $190.12 (as of close)",
      "Change: +1.23%",
      "Market Cap: $2.9T",
      "P/E Ratio: 29.5",
      "Dividend Yield: 0.55%",
      "52-Week Range: $150.00 - $199.62",
    ]}
  />
);

export default AaplBigTemplate; 