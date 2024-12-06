import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import Pilldefault from "./pilldefault";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full shrink-0 text-left text-23xl text-studio-darkmode-allwhite-ffffff font-baloo-bhai ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] flex flex-row items-start justify-start pt-[50px] px-0 pb-[46px] box-border relative gap-2 max-w-full">
        <Image
          className="h-full w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden object-cover"
          loading="lazy"
          width={1440}
          height={193}
          alt=""
          src="/banner-background@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-20 pr-5 box-border gap-2 max-w-full z-[1] lg:pl-10 lg:box-border">
          <h1 className="m-0 w-[1281px] relative text-inherit tracking-[0.02em] leading-[48px] font-normal font-[inherit] inline-block max-w-full mq450:text-6xl mq450:leading-[29px] mq1050:text-15xl mq1050:leading-[38px]">
            Stays in Los Angeles
          </h1>
          <div className="flex flex-row items-start justify-start gap-2 max-w-full text-center text-base font-typography-body-1 mq450:flex-wrap">
            <Button
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1262af",
                fontSize: "16",
                background: "#fff",
                border: "#fff solid 1px",
                borderRadius: "27px",
                "&:hover": { background: "#fff" },
              }}
            >
              Recommended
            </Button>
            <Button
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                borderColor: "#fff",
                borderRadius: "27px",
                "&:hover": { borderColor: "#fff" },
              }}
            >
              Price
            </Button>
            <Pilldefault />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
