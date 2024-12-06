import type { NextPage } from "next";
import Image from "next/image";

export type MatterhornPopupType = {
  className?: string;
  onClose?: () => void;
};

const MatterhornPopup: NextPage<MatterhornPopupType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[900px] relative rounded-lg bg-studio-darkmode-allwhite-ffffff flex flex-row items-start justify-start p-5 box-border leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center py-60 px-5 box-border relative max-w-full mq560:pt-[156px] mq560:pb-[156px] mq560:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <Image
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            width={860}
            height={560}
            alt=""
            src="/video-thumbnail@2x.png"
          />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[1]" />
        </div>
        <Image
          className="h-20 w-20 relative z-[2]"
          loading="lazy"
          width={80}
          height={80}
          alt=""
          src="/play-icon.svg"
        />
      </div>
    </div>
  );
};

export default MatterhornPopup;
