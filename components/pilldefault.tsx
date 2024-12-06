import type { NextPage } from "next";

export type PilldefaultType = {
  className?: string;
};

const Pilldefault: NextPage<PilldefaultType> = ({ className = "" }) => {
  return (
    <div
      className={`rounded-8xl border-studio-darkmode-allwhite-ffffff border-[1px] border-solid flex flex-row items-center justify-center py-[11px] px-[21px] text-center text-base text-studio-darkmode-allwhite-ffffff font-typography-body-1 ${className}`}
    >
      <a className="[text-decoration:none] h-[19px] relative tracking-[0.04em] capitalize font-medium text-[inherit] inline-block">
        Rating
      </a>
    </div>
  );
};

export default Pilldefault;
