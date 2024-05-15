import { useIsMounted } from "@pancakeswap/hooks";
import React from "react";
import { useMatchBreakpoints } from "../../contexts";
import { Flex } from "../Box";
import { StyledFooter, StyledSocialLinks } from "./styles";

import { FooterProps } from "./types";

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  buyCakeLink,
  chainId,
  ...props
}) => {
  const isMounted = useIsMounted();
  const { isXl } = useMatchBreakpoints();
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledSocialLinks order={[1]} pb={["42px", null, "32px"]} justifyContent="center" />
        <Flex order={[2]} p={["30px"]} justifyContent="center">
          <p>Copyright © 2024 WaxDex. All Rights Reserved.</p>
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
