import type { NextPage } from "next";
import Image from "next/image";

export type TripMenusType = {
  className?: string;
};

const TripMenus: NextPage<TripMenusType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between flex-wrap content-start gap-5 text-center text-mini text-gray-100 font-typography-body-1 ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-2 text-left">
        <Image
          className="w-[65.4px] h-[65.4px] relative shrink-0"
          loading="lazy"
          width={65}
          height={65}
          alt=""
          src="/hotel-icon.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-3">
          <div className="relative tracking-[0.04em] shrink-0">Hotel</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px]">
          <div className="flex-1 rounded-2xl bg-sandybrown flex flex-row items-start justify-start pt-[17px] px-4 pb-[17.1px]">
            <div className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-sandybrown hidden" />
            <Image
              className="h-[31.3px] w-[31.6px] relative z-[1]"
              width={32}
              height={31}
              alt=""
              src="/ticket.svg"
            />
          </div>
        </div>
        <div className="self-stretch relative tracking-[0.04em]">
          Attractions
        </div>
      </div>
      <div className="flex flex-col items-end justify-start gap-2">
        <Image
          className="w-[65.4px] h-[65.4px] relative shrink-0"
          loading="lazy"
          width={65}
          height={65}
          alt=""
          src="/eats-icon.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-4">
          <div className="flex-1 relative tracking-[0.04em] shrink-0">Eats</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <div className="rounded-2xl bg-gold flex flex-row items-start justify-start pt-[17.3px] px-[19px] pb-[16.4px] shrink-0">
            <div className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-gold hidden" />
            <Image
              className="h-[31.7px] w-[26.9px] relative z-[1]"
              width={27}
              height={32}
              alt=""
              src="/train.svg"
            />
          </div>
        </div>
        <div className="self-stretch relative tracking-[0.04em] shrink-0">
          Commute
        </div>
      </div>
      <div className="flex flex-col items-end justify-start gap-2">
        <div className="self-stretch rounded-2xl bg-cornflowerblue-100 flex flex-row items-start justify-start pt-[19.4px] px-5 pb-[19.7px] shrink-0">
          <div className="h-[65.4px] w-[70px] relative rounded-2xl bg-cornflowerblue-100 hidden" />
          <Image
            className="h-[26.3px] w-[28.4px] relative z-[1]"
            width={28}
            height={26}
            alt=""
            src="/taxi.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[19px] pr-[18px]">
          <div className="flex-1 relative tracking-[0.04em] inline-block min-w-[33.1px] shrink-0">
            Taxi
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="rounded-2xl bg-yellowgreen flex flex-row items-start justify-start pt-[21.1px] px-[19px] pb-[21px] shrink-0">
          <div className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-yellowgreen hidden" />
          <Image
            className="h-[23.3px] w-[26.1px] relative z-[1]"
            width={26}
            height={23}
            alt=""
            src="/movie.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1.5">
          <div className="flex-1 relative tracking-[0.04em] shrink-0">
            Movies
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripMenus;
