import * as React from "react";

export const SparkleIcon = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M8.75 8.75L17.5 14.4064L26.25 8.75L20.5936 17.5L26.25 26.25L17.5 20.5936L8.75 26.25L14.4064 17.5L8.75 8.75Z" fill="#C1C1C1"/>
    <path d="M17.0714 5.91309L18.7339 16.625L29.4458 18.2875L18.7339 19.95L17.0714 30.6618L15.4089 19.95L4.69702 18.2875L15.4089 16.625L17.0714 5.91309Z" fill="black"/>
  </svg>
); 