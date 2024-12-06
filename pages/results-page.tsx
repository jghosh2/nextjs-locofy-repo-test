import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/frame-component1";
import ResultsContainer1 from "../components/results-container1";
import SubscribeSection from "../components/subscribe-section";
import Footer from "../components/footer";

const ResultsPage: NextPage = () => {
  const router = useRouter();

  const onFickleflightLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHotelsTextClick = useCallback(() => {
    router.push("/hotels-page");
  }, [router]);

  return (
    <div className="w-full relative bg-studio-darkmode-allwhite-ffffff overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-studio-darkmode-allwhite-ffffff flex flex-row items-start justify-start py-[20.5px] px-20 box-border top-[0] z-[99] sticky max-w-full text-left text-sm text-darkslategray-200 font-typography-body-1 mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
          <div className="w-[174px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
            <div
              className="self-stretch h-[33px] relative overflow-hidden shrink-0 cursor-pointer"
              onClick={onFickleflightLogoContainerClick}
            >
              <Image
                className="absolute h-[96.97%] w-[99.83%] top-[1.52%] right-[0.17%] bottom-[1.52%] left-[0%] max-w-full overflow-hidden max-h-full"
                loading="lazy"
                width={174}
                height={32}
                alt=""
                src="/symbols.svg"
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
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-cornflowerblue-200">
              <a className="[text-decoration:none] relative text-[inherit]">
                Search
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <a
                className="[text-decoration:none] relative text-[inherit] cursor-pointer"
                onClick={onHotelsTextClick}
              >
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
      <FrameComponent1 />
      <ResultsContainer1 />
      <SubscribeSection subscribeSectionBackground="/subscribe-section-background@2x.png" />
      <Footer
        logo="/logo2.svg"
        entypoSocialfacebookWithCircle="/facebook-icon1.svg"
        entypoSocialinstagramWithCircle="/instagram-icon1.svg"
        entypoSocialtwitterWithCircle="/twitter-icon1.svg"
        companyPadding="unset"
        newsTextDecoration="unset"
        supportPadding="unset"
        accountTextDecoration="unset"
        morePadding="unset"
        aboutUsTextDecoration="unset"
        careersTextDecoration="unset"
        fAQTextDecoration="unset"
        quarantineRulesTextDecoration="unset"
      />
    </div>
  );
};

export default ResultsPage;
