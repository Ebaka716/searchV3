import React from "react";
import BigTemplate from "./BigTemplate";

interface AaplMediumTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
}

const AaplMediumTemplate: React.FC<AaplMediumTemplateProps> = ({ headerRef }) => (
  <BigTemplate
    headerRef={headerRef}
    header={"AAPL Stock (Medium)"}
    preamble={"Apple Inc. (AAPL) is currently trading at $175.23, up 1.2% today. The company remains a leader in consumer electronics and services."}
    cards={[
      "Price: $175.23",
      "Change: +1.2%",
      "Market Cap: $2.8T",
      "P/E Ratio: 28.7",
      "52-Week Range: $150.00 - $199.62",
    ]}
    cardGridVariant="2x2"
  />
);

export default AaplMediumTemplate; 