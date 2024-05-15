import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("Ecosystem"),
    items: [
      {
        label: t("Trade"),
        href: "https://pancakeswap.finance/swap",
      },
      {
        label: t("Earn"),
        href: "https://pancakeswap.finance/farms",
      },
      {
        label: t("Tokenomics"),
        href: "https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics",
      },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: t("Github"),
        href: "https://github.com/pancakeswap",
      },
    ],
  },
  {
    label: t("Support"),
    items: [
      {
        label: t("Contact"),
        href: "https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: t("Documentation"),
        href: "https://docs.pancakeswap.finance/",
      },
    ],
  },
  {
    label: t("About"),
    items: [
      {
        label: t("Terms Of Service"),
        href: "https://pancakeswap.finance/terms-of-service",
      },
    ],
  },
];
