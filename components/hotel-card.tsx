import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";

export type HotelCardType = {
  className?: string;
  matterhornSuitesImage: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  starIcon: string;
  placeholder?: string;
  reviews?: string;

  /** Style props */
  roomInfoWidth?: CSSProperties["width"];
  reviewsMinWidth?: CSSProperties["minWidth"];
};

const HotelCard: NextPage<HotelCardType> = ({
  className = "",
  matterhornSuitesImage,
  roomInfoWidth,
  entireBungalow,
  matterhornSuites,
  night,
  starIcon,
  placeholder,
  reviews,
  reviewsMinWidth,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const roomInfoStyle: CSSProperties = useMemo(() => {
    return {
      width: roomInfoWidth,
    };
  }, [roomInfoWidth]);

  const reviewsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: reviewsMinWidth,
    };
  }, [reviewsMinWidth]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`flex-1 flex flex-row items-start justify-start py-0 px-3 box-border min-w-[294px] max-w-[320px] text-left text-base text-darkslategray-300 font-typography-body-1 ${className}`}
      >
        <div className="h-[442px] flex-1 rounded-3xs bg-studio-darkmode-allwhite-ffffff border-whitesmoke-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[13px] px-3 gap-[23px] hover:bg-gainsboro-200 hover:cursor-pointer mq450:h-auto">
          <Image
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            width={270}
            height={200}
            alt=""
            src={matterhornSuitesImage}
          />
          <div className="self-stretch h-[120px] relative mq450:h-auto mq450:min-h-[120]">
            <Image
              className="absolute top-[0px] left-[245px] w-[25px] h-[25px] overflow-hidden cursor-pointer"
              loading="lazy"
              width={25}
              height={25}
              alt=""
              src="/video.svg"
              onClick={openMatterhornPopup}
            />
            <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[23px] h-full">
              <div
                className="w-[234px] flex flex-col items-start justify-start gap-1.5"
                style={roomInfoStyle}
              >
                <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                  {entireBungalow}
                </div>
                <h3 className="m-0 self-stretch relative text-3xl tracking-[0.04em] capitalize font-bold font-[inherit] mq450:text-lg">
                  {matterhornSuites}
                </h3>
                <div className="self-stretch relative text-lg tracking-[0.04em]">
                  {night}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[9.3px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[3.7px] shrink-0">
                  <Image
                    className="h-[17.2px] w-[16.6px] relative"
                    width={17}
                    height={17}
                    alt=""
                    src={starIcon}
                  />
                  <div className="relative tracking-[0.04em] font-medium">
                    {placeholder}
                  </div>
                </div>
                <a
                  className="[text-decoration:none] flex-1 relative tracking-[0.04em] text-cornflowerblue-200 inline-block min-w-[74px] shrink-0"
                  style={reviewsStyle}
                >
                  {reviews}
                </a>
              </div>
            </div>
          </div>
          <Button
            className="self-stretch h-[46px]"
            disableElevation
            variant="outlined"
            sx={{
              color: "#1262af",
              fontSize: "15",
              borderColor: "#ccdcec",
              borderRadius: "4px",
              "&:hover": { borderColor: "#ccdcec" },
              height: 46,
            }}
          >
            More details
          </Button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCard;
