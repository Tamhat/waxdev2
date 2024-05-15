import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 160 44" {...props}>
      <image width="160" height="44" href="/images/logo/logo-text.png" />
    </Svg>
  );
};

export default Logo;
