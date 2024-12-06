import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FooterType = {
  className?: string;
  logo: string;
  entypoSocialfacebookWithCircle: string;
  entypoSocialinstagramWithCircle: string;
  entypoSocialtwitterWithCircle: string;

  /** Style props */
  companyPadding?: CSSProperties["padding"];
  newsTextDecoration?: CSSProperties["textDecoration"];
  supportPadding?: CSSProperties["padding"];
  accountTextDecoration?: CSSProperties["textDecoration"];
  morePadding?: CSSProperties["padding"];
  aboutUsTextDecoration?: CSSProperties["textDecoration"];
  careersTextDecoration?: CSSProperties["textDecoration"];
  fAQTextDecoration?: CSSProperties["textDecoration"];
  quarantineRulesTextDecoration?: CSSProperties["textDecoration"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  logo,
  entypoSocialfacebookWithCircle,
  entypoSocialinstagramWithCircle,
  entypoSocialtwitterWithCircle,
  companyPadding,
  newsTextDecoration,
  supportPadding,
  accountTextDecoration,
  morePadding,
  aboutUsTextDecoration,
  careersTextDecoration,
  fAQTextDecoration,
  quarantineRulesTextDecoration,
}) => {
  const companyStyle: CSSProperties = useMemo(() => {
    return {
      padding: companyPadding,
    };
  }, [companyPadding]);

  const newsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: newsTextDecoration,
    };
  }, [newsTextDecoration]);

  const supportStyle: CSSProperties = useMemo(() => {
    return {
      padding: supportPadding,
    };
  }, [supportPadding]);

  const accountStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: accountTextDecoration,
    };
  }, [accountTextDecoration]);

  const moreStyle: CSSProperties = useMemo(() => {
    return {
      padding: morePadding,
    };
  }, [morePadding]);

  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: aboutUsTextDecoration,
    };
  }, [aboutUsTextDecoration]);

  const careersStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: careersTextDecoration,
    };
  }, [careersTextDecoration]);

  const fAQStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: fAQTextDecoration,
    };
  }, [fAQTextDecoration]);

  const quarantineRulesStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: quarantineRulesTextDecoration,
    };
  }, [quarantineRulesTextDecoration]);

  return (
    <footer
      className={`self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row items-start justify-center flex-wrap content-start py-[33px] pl-[84px] pr-[83px] box-border gap-11 shrink-0 max-w-full text-left text-lg text-studio-darkmode-allwhite-ffffff font-typography-body-1 mq750:gap-[22px] mq750:pl-[42px] mq750:pr-[41px] mq750:box-border mq450:pl-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[385px] max-w-full mq750:min-w-full">
        <Image
          className="w-[174px] h-[33px] relative overflow-hidden shrink-0"
          loading="lazy"
          width={174}
          height={33}
          alt=""
          src={logo}
        />
        <div className="relative leading-[27px]">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className="flex flex-row items-start justify-start gap-5">
          <Image
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={30}
            height={30}
            alt=""
            src={entypoSocialfacebookWithCircle}
          />
          <Image
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={30}
            height={30}
            alt=""
            src={entypoSocialinstagramWithCircle}
          />
          <Image
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={30}
            height={30}
            alt=""
            src={entypoSocialtwitterWithCircle}
          />
        </div>
      </div>
      <div className="h-[157.9px] w-px relative border-gray-600 border-r-[1px] border-solid box-border mq1050:w-full mq1050:h-px" />
      <div className="flex-1 flex flex-row items-start justify-start min-w-[385px] max-w-full text-xl mq750:min-w-full">
        <div className="flex-1 flex flex-row items-start justify-start max-w-full mq750:flex-wrap">
          <div
            className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]"
            style={companyStyle}
          >
            <div className="w-[175.7px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
              Company
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-base">
              <a
                className="[text-decoration:none] w-[136.7px] relative text-[inherit] inline-block"
                style={aboutUsStyle}
              >
                About Us
              </a>
              <div
                className="w-[85.3px] relative inline-block"
                style={newsStyle}
              >
                News
              </div>
              <a
                className="[text-decoration:none] w-[116.1px] relative text-[inherit] inline-block"
                style={careersStyle}
              >
                Careers
              </a>
              <div className="self-stretch relative">How we work</div>
            </div>
          </div>
          <div
            className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]"
            style={supportStyle}
          >
            <div className="w-[132.6px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
              Support
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-base">
              <div
                className="w-[110.6px] relative inline-block"
                style={accountStyle}
              >
                Account
              </div>
              <div className="self-stretch relative">Support Center</div>
              <a
                className="[text-decoration:none] w-[54px] relative text-[inherit] inline-block"
                style={fAQStyle}
              >
                FAQ
              </a>
              <div className="w-[165.4px] relative inline-block">
                Accessibility
              </div>
            </div>
          </div>
          <div
            className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]"
            style={moreStyle}
          >
            <div className="w-[77.7px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
              More
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-base">
              <div className="w-[173.9px] relative inline-block">
                Covid Advisory
              </div>
              <div className="w-[136.4px] relative inline-block">
                Airline Fees
              </div>
              <div className="w-[51.6px] relative inline-block">Tips</div>
              <a
                className="[text-decoration:none] self-stretch relative text-[inherit]"
                style={quarantineRulesStyle}
              >
                Quarantine Rules
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
