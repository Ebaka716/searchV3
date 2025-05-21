import React from "react";
import BigTemplate from "./BigTemplate";

interface AaplSmallTemplateProps {
  headerRef?: React.Ref<HTMLDivElement>;
}

const AaplSmallTemplate: React.FC<AaplSmallTemplateProps> = ({ headerRef }) => (
  <BigTemplate
    headerRef={headerRef}
    header={"AAPL Stock (Small)"}
    preamble={"Apple Inc. (AAPL) is trading at $175.23 (+1.2%)"}
    cards={[
      "Price: $175.23",
      "Change: +1.2%",
      "Market Cap: $2.8T",
    ]}
    cardGridVariant="single-row"
  />
);

export default AaplSmallTemplate; 