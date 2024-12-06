import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Content from "../components/content";
import ResultsContainer from "../components/results-container";
import SubscribeSection from "../components/subscribe-section";
import Footer from "../components/footer";

const HotelsPage: NextPage = () => {
  const router = useRouter();

  const onFickleflightLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSearchTextClick = useCallback(() => {
    router.push("/results-page");
  }, [router]);

  return (
    <div className="w-full h-[2087.1px] relative bg-studio-darkmode-allwhite-ffffff overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[225.8px] box-border leading-[normal] tracking-[normal] mq450:h-auto">
      <header className="self-stretch bg-studio-darkmode-allwhite-ffffff flex flex-row items-start justify-start py-[20.5px] px-20 box-border top-[0] z-[99] sticky max-w-full text-left text-sm text-darkslategray-200 font-typography-body-1 mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
          <div className="w-[174px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
            <div
              className="self-stretch h-[33px] relative overflow-hidden shrink-0 cursor-pointer"
              onClick={onFickleflightLogoContainerClick}
            >
              <Image
                className="absolute top-[0.5px] left-[0px] w-[173.7px] h-8 cursor-pointer"
                loading="lazy"
                width={174}
                height={32}
                alt=""
                src="/symbols.svg"
                onClick={onFickleflightLogoContainerClick}
              />
            </div>
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover hidden"
            width={24}
            height={24}
            alt=""
            src="/hamburgermenu1@2x.png"
          />
          <div className="w-[368px] flex flex-row items-start justify-start gap-[30px] max-w-full mq750:hidden">
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <a
                className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px] cursor-pointer"
                onClick={onFickleflightLogoContainerClick}
              >
                Explore
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <a
                className="[text-decoration:none] relative text-[inherit] cursor-pointer"
                onClick={onSearchTextClick}
              >
                Search
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-cornflowerblue-200">
              <a className="[text-decoration:none] relative text-[inherit]">
                Hotels
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[5px]">
              <a className="[text-decoration:none] relative text-[inherit]">
                Offers
              </a>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-3">
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <Image
                  className="w-6 h-6 relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/notification-bell@2x.png"
                />
              </div>
              <Image
                className="h-9 w-9 rounded-19xl object-cover"
                loading="lazy"
                width={36}
                height={36}
                alt=""
                src="/profile-picture@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <Content />
      <div className="w-[561.9px] h-[600px] relative hidden max-w-full">
        <Image
          className="absolute top-[0px] left-[0px] w-full h-full object-cover"
          width={562}
          height={599}
          alt=""
          src="/map@2x.png"
        />
        <Image
          className="absolute top-[53.3px] left-[92.8px] w-[333.3px] h-[328.1px]"
          width={333}
          height={328}
          alt=""
          src="/dots.svg"
        />
        <Image
          className="absolute top-[539.9px] left-[517.6px] w-[30.2px] h-[48.1px] object-cover"
          width={30}
          height={48}
          alt=""
          src="/zoom@2x.png"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[50px] box-border max-w-full shrink-0 mq750:pl-10 mq750:pr-10 mq750:pb-[21px] mq750:box-border mq1050:pb-8 mq1050:box-border">
        <ResultsContainer />
      </section>
      <SubscribeSection subscribeSectionBackground="/subscribe-section-background@2x.png" />
      <Footer
        logo="/logo1.svg"
        entypoSocialfacebookWithCircle="/facebook-icon.svg"
        entypoSocialinstagramWithCircle="/instagram-icon.svg"
        entypoSocialtwitterWithCircle="/twitter-icon.svg"
        companyPadding="unset"
        newsTextDecoration="none"
        supportPadding="unset"
        accountTextDecoration="none"
        morePadding="unset"
        aboutUsTextDecoration="none"
        careersTextDecoration="none"
        fAQTextDecoration="none"
        quarantineRulesTextDecoration="none"
      />
    </div>
  );
};

export default HotelsPage;
