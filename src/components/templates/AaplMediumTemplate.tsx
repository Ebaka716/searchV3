import React from "react";
import BigTemplate from "./BigTemplate";

interface AaplMediumTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
  query: string;
}

const AaplMediumTemplate: React.FC<AaplMediumTemplateProps> = ({ headerRef, query }) => (
  <BigTemplate
    headerRef={headerRef}
    header={query}
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