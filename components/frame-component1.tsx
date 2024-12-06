import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full text-left text-42xl text-studio-darkmode-allwhite-ffffff font-baloo-bhai mq450:pb-8 mq450:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(100.3deg,_#114f8b,_#2a9bd7)] flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-start justify-start py-[84.5px] px-0 box-border relative max-w-full mq450:pt-[55px] mq450:pb-[55px] mq450:box-border">
          <div className="h-[362px] w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
          <Image
            className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover z-[1]"
            width={1440}
            height={362}
            alt=""
            src="/banner-background1@2x.png"
          />
          <div className="flex-1 flex flex-col items-center justify-center py-0 px-20 box-border gap-5 max-w-full z-[2] mq750:pl-10 mq750:pr-10 mq750:box-border">
            <div className="self-stretch flex flex-col items-center justify-start">
              <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-[inherit] mq1050:text-30xl mq1050:leading-[54px] mq450:text-18xl mq450:leading-[40px]">
                Where are you off too?
              </h1>
            </div>
            <form className="m-0 self-stretch rounded-3xs bg-studio-darkmode-allwhite-ffffff flex flex-row items-start justify-start flex-wrap content-start p-5 box-border gap-0 max-w-full [row-gap:20px]">
              <div className="flex-1 flex flex-row items-start justify-start min-w-[693px] max-w-full [row-gap:20px] mq1050:flex-wrap mq1050:min-w-full">
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch font-typography-body-1 text-base text-text-primary mq1050:min-w-full"
                    label="Departure"
                    defaultValue="Singapore (SIN)"
                    variant="outlined"
                    sx={{
                      justifyContent: "flex-end",
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                      "& .MuiInputBase-root": { height: "56px" },
                      "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch font-typography-body-1 text-base text-text-primary mq1050:min-w-full"
                    label="Arrival"
                    defaultValue="Los Angeles (LA)"
                    variant="outlined"
                    sx={{
                      justifyContent: "flex-end",
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                      "& .MuiInputBase-root": { height: "56px" },
                      "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch font-typography-body-1 text-base text-text-primary mq1050:min-w-full"
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
                    }}
                  />
                </div>
              </div>
              <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border mq1050:flex-1">
                <button className="cursor-pointer [border:none] py-[15px] px-2 bg-orange-200 self-stretch rounded overflow-hidden flex flex-col items-center justify-center hover:bg-chocolate mq1050:text-center mq1050:self-stretch mq1050:w-auto mq1050:min-w-[164]">
                  <div className="self-stretch relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-typography-body-1 text-studio-darkmode-allwhite-ffffff text-center">
                    Search flights
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
