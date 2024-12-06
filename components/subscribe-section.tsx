import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";

export type SubscribeSectionType = {
  className?: string;
  subscribeSectionBackground: string;
};

const SubscribeSection: NextPage<SubscribeSectionType> = ({
  className = "",
  subscribeSectionBackground,
}) => {
  return (
    <div
      className={`self-stretch bg-aliceblue overflow-hidden flex flex-row items-start justify-center pt-[52px] px-0 pb-[42px] box-border relative shrink-0 max-w-full text-center text-lg text-cornflowerblue-300 font-typography-body-1 mq750:pt-[34px] mq750:pb-[27px] mq750:box-border ${className}`}
    >
      <Image
        className="h-full w-full absolute !m-[0] right-[0px] bottom-[-1px] left-[0px] max-w-full overflow-hidden object-cover"
        width={1440}
        height={530}
        alt=""
        src={subscribeSectionBackground}
      />
      <div className="w-[549px] flex flex-col items-center justify-start p-5 box-border gap-[30px] max-w-full z-[1]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            subscribe to our newsletter
          </b>
          <h2 className="m-0 self-stretch relative text-11xl font-bold font-[inherit] text-darkslategray-100 mq750:text-5xl mq450:text-lg">
            Get weekly updates
          </h2>
        </div>
        <form className="m-0 self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-studio-darkmode-allwhite-ffffff border-whitesmoke-200 border-[1px] border-solid flex flex-col items-start justify-start py-[26px] px-[29px] gap-[17px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative text-lg leading-[34px] font-typography-body-1 text-slategray text-left">
              Fill in your details to join the party!
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
            <TextField
              className="[border:none] bg-[transparent] self-stretch font-typography-body-1 text-base text-gray-500"
              placeholder="Your name"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="24px" height="24px" src="/arrowdropdown.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  paddingRight: "12px",
                },
                "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.6)" },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch font-typography-body-1 text-base text-gray-500"
              placeholder="Email address"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="24px" height="24px" src="/arrowdropdown-1.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  paddingRight: "12px",
                },
                "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.6)" },
              }}
            />
          </div>
          <Button
            className="w-[164px] h-14 hover:bg-darkorange"
            disableElevation
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "15",
              background: "#f99a0e",
              borderRadius: "4px",
              "&:hover": { background: "#f99a0e" },
              width: 164,
              height: 56,
            }}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
