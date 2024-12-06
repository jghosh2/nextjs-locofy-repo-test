import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import RecentSearchesContent from "../components/recent-searches-content";
import TripMenus from "../components/trip-menus";
import TripPlanning from "../components/trip-planning";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStays from "../components/popular-stays";
import Subscription from "../components/subscription";

const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-studio-darkmode-allwhite-ffffff overflow-hidden flex flex-col items-start justify-start gap-[69px] leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a] mq750:gap-[34px] mq450:gap-[17px]">
      <FrameComponent />
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-20 box-border gap-20 max-w-full text-left text-lg text-darkslategray-300 font-typography-body-1 mq750:gap-10 mq750:pl-10 mq750:pr-10 mq750:box-border mq450:gap-5">
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Recent Searches
          </b>
          <RecentSearchesContent />
          <TripMenus />
        </div>
        <TripPlanning />
        <div className="w-[231.4px] rounded-12xl bg-studio-darkmode-allwhite-ffffff hidden flex-row items-start justify-start gap-2.5 whitespace-nowrap text-right text-cornflowerblue-300">
          <div className="flex-1 relative tracking-[0.04em] font-medium">
            View all destinations
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/arrowright-1.svg"
          />
        </div>
        <RecommendedHolidaysContainer />
        <PopularStays />
      </section>
      <Subscription />
    </div>
  );
};

export default Homepage;
