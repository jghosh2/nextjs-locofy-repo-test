import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const onSearchTextClick = useCallback(() => {
    router.push("/results-page");
  }, [router]);

  const onHotelsTextClick = useCallback(() => {
    router.push("/hotels-page");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-42xl text-studio-darkmode-allwhite-ffffff font-baloo-bhai ${className}`}
    >
      <header className="self-stretch bg-studio-darkmode-allwhite-ffffff flex flex-row items-start justify-start py-[20.5px] px-20 box-border top-[0] z-[99] sticky max-w-full text-left text-sm text-darkslategray-200 font-typography-body-1 mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
          <div className="w-[174px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
            <div className="self-stretch h-[33px] relative overflow-hidden shrink-0">
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
            src="/hamburgermenu@2x.png"
          />
          <div className="w-[368px] flex flex-row items-start justify-start gap-[30px] max-w-full mq750:hidden">
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-cornflowerblue-200">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[48px]">
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
      <div className="self-stretch [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-start justify-start relative max-w-full">
        <div className="self-stretch w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
        <Image
          className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover z-[1]"
          width={1440}
          height={640}
          alt=""
          src="/banner--background@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start py-[167.5px] px-[140px] box-border gap-[43px] max-w-full z-[2] mq750:gap-[21px] mq750:py-[109px] mq750:px-[70px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-[inherit] mq750:text-30xl mq750:leading-[54px] mq450:text-18xl mq450:leading-[40px]">{`Let’s explore & travel the world`}</h1>
            <h3 className="m-0 self-stretch relative text-5xl leading-[32px] font-normal font-typography-body-1 mq450:text-lgi mq450:leading-[26px]">
              Find the best destinations and the most popular stays!
            </h3>
          </div>
          <form className="m-0 self-stretch rounded-3xs bg-studio-darkmode-allwhite-ffffff flex flex-col items-start justify-start pt-[25px] px-5 pb-5 box-border gap-[9px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[5px] max-w-full mq1225:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border min-w-[577px] max-w-full mq1050:min-w-full">
                  <b className="self-stretch relative text-xl tracking-[0.04em] uppercase font-typography-body-1 text-darkslategray-300 text-left mq450:text-base">
                    Search flights
                  </b>
                </div>
                <div className="w-[216.5px] flex flex-row items-start justify-start gap-5">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-lgi flex flex-row items-center justify-start p-[9px]">
                      <input
                        className="cursor-pointer m-0 h-5 w-5 relative overflow-hidden shrink-0"
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="relative text-base tracking-[0.15px] leading-[150%] font-typography-body-1 text-darkslategray-400 text-left">
                        Return
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="rounded-lgi flex flex-row items-center justify-start p-[9px]">
                      <input
                        className="cursor-pointer m-0 h-5 w-5 relative overflow-hidden shrink-0"
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="self-stretch relative text-base tracking-[0.15px] leading-[150%] font-typography-body-1 text-darkslategray-400 text-left">
                        One-way
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-0 max-w-full [row-gap:20px]">
              <div className="flex-1 flex flex-row items-start justify-start p-[5px] box-border gap-2.5 min-w-[615px] max-w-full mq1050:min-w-full mq1225:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <div className="self-stretch rounded border-gray-400 border-[1px] border-solid flex flex-col items-start justify-start py-0 px-[11px]">
                    <div className="h-0.5 bg-studio-darkmode-allwhite-ffffff flex flex-row items-center justify-start py-0 pl-1 pr-[3px] box-border">
                      <div className="relative text-xs tracking-[0.15px] leading-[12px] font-typography-body-1 text-gray-500 text-left">
                        Departure
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-2">
                      <div className="hidden flex-row items-start justify-start gap-2">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-gainsboro-100 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-silver h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="h-6 w-6 relative text-xs tracking-[0.4px] leading-[166%] font-typography-body-1 text-dimgray-200 text-center flex items-center justify-center shrink-0">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="w-[27px] h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-typography-body-1 text-text-primary text-left inline-block">
                                Chip
                              </div>
                            </div>
                            <Image
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              width={24}
                              height={24}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-gainsboro-100 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-silver h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="h-6 w-6 relative text-xs tracking-[0.4px] leading-[166%] font-typography-body-1 text-dimgray-200 text-center flex items-center justify-center shrink-0">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="w-[27px] h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-typography-body-1 text-text-primary text-left inline-block">
                                Chip
                              </div>
                            </div>
                            <input
                              className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] font-typography-body-1 text-text-primary text-left">
                        Singapore (SIN)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <div className="self-stretch rounded border-gray-400 border-[1px] border-solid flex flex-col items-start justify-start py-0 px-[11px]">
                    <div className="h-0.5 bg-studio-darkmode-allwhite-ffffff flex flex-row items-center justify-start py-0 pl-1 pr-[3px] box-border">
                      <div className="relative text-xs tracking-[0.15px] leading-[12px] font-typography-body-1 text-gray-500 text-left">
                        Arrival
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-2">
                      <div className="hidden flex-row items-start justify-start gap-2">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-gainsboro-100 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-silver h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="h-6 w-6 relative text-xs tracking-[0.4px] leading-[166%] font-typography-body-1 text-dimgray-200 text-center flex items-center justify-center shrink-0">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="w-[27px] h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-typography-body-1 text-text-primary text-left inline-block">
                                Chip
                              </div>
                            </div>
                            <Image
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              width={24}
                              height={24}
                              alt=""
                              src="/cancel-2.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-gainsboro-100 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-silver h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="h-6 w-6 relative text-xs tracking-[0.4px] leading-[166%] font-typography-body-1 text-dimgray-200 text-center flex items-center justify-center shrink-0">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="w-[27px] h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-typography-body-1 text-text-primary text-left inline-block">
                                Chip
                              </div>
                            </div>
                            <Image
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              width={24}
                              height={24}
                              alt=""
                              src="/cancel-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] font-typography-body-1 text-text-primary text-left">
                        Los Angeles (LA)
                      </div>
                    </div>
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] w-[305.3px] font-typography-body-1 text-base text-text-primary min-w-[229px]"
                  label="Date"
                  defaultValue="01/05/2022"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="24px" height="24px" src="/date.svg" />
                    ),
                  }}
                  sx={{
                    justifyContent: "flex-end",
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      paddingRight: "12px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                    width: "305.3px",
                  }}
                />
              </div>
              <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border">
                <button className="cursor-pointer [border:none] py-[15px] px-2 bg-orange-200 self-stretch rounded overflow-hidden flex flex-col items-center justify-center hover:bg-chocolate">
                  <div className="self-stretch relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-typography-body-1 text-studio-darkmode-allwhite-ffffff text-center">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
