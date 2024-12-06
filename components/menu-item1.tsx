import type { NextPage } from "next";

export type MenuItem1Type = {
  className?: string;

  /** Variant props */
  contentType?: string;
  state?: boolean;
};

const MenuItem1: NextPage<MenuItem1Type> = ({
  className = "",
  contentType = "W. Icon",
  state = "Hover",
}) => {
  return (
    <div
      className={`self-stretch bg-action-hover flex flex-col items-start justify-start py-1.5 px-4 text-left text-base text-text-primary font-typography-body-1 ${className}`}
      data-contentType={contentType}
    >
      <div className="relative tracking-[0.15px] leading-[150%]">
        Ninoy Aquiono International Airport (NAIA
      </div>
    </div>
  );
};

export default MenuItem1;
