import type { NextPage } from "next";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import FlightCard from "./flight-card";
import FlightCard1 from "./flight-card1";
import BookingCard from "./booking-card";

export type ResultsContainer1Type = {
  className?: string;
};

const ResultsContainer1: NextPage<ResultsContainer1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[939px] flex flex-row items-start justify-start pt-0 px-20 pb-[50px] box-border max-w-full text-left text-base text-dimgray-300 font-typography-body-1 mq750:pl-10 mq750:pr-10 mq750:pb-[21px] mq750:box-border mq1050:pb-8 mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start max-w-full">
        <div className="h-[666px] w-[310.8px] flex flex-col items-start justify-start gap-[38.8px] shrink-0 text-3xl lg:hidden mq450:gap-[19px]">
          <div className="h-12 flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 text-xl">
            <div className="w-[220.4px] relative tracking-[0.26px] inline-block mq450:text-base">
              10 out of 177 Results
            </div>
            <Image
              className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              width={228}
              height={1}
              alt=""
              src="/vector-22.svg"
            />
          </div>
          <div className="w-[296.6px] flex-1 flex flex-col items-start justify-start gap-6">
            <h3 className="m-0 relative text-inherit tracking-[0.26px] font-bold font-[inherit] inline-block min-w-[66.3px] mq450:text-lg">
              Stops
            </h3>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-4 text-mid">
              <div className="flex-1 flex flex-row items-start justify-start gap-4">
                <input className="m-0 h-5 w-5 relative" type="checkbox" />
                <div className="relative tracking-[0.26px]">1 Stop</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-4 mq450:flex-wrap">
                <input className="m-0 h-5 w-5 relative" type="checkbox" />
                <div className="flex-1 relative tracking-[0.26px]">2 Stops</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <h3 className="m-0 w-[190px] relative text-inherit tracking-[0.26px] font-bold font-[inherit] inline-block mq450:text-lg">
              Booking Options
            </h3>
            <div className="flex flex-col items-start justify-start gap-4 text-mid">
              <div className="flex flex-row items-start justify-start gap-4">
                <input className="m-0 h-5 w-5 relative" type="checkbox" />
                <div className="relative tracking-[0.26px]">
                  Book on Fickleflight
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <input className="m-0 h-5 w-5 relative" type="checkbox" />
                <div className="relative tracking-[0.26px]">
                  Official Airline Websites
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <h3 className="m-0 w-[199px] relative text-inherit tracking-[0.26px] font-bold font-[inherit] inline-block mq450:text-lg">
              Flight Experience
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 text-mid">
              <div className="w-[302.5px] flex flex-row items-start justify-start gap-4">
                <input className="m-0 h-5 w-5 relative" type="checkbox" />
                <div className="flex-1 relative tracking-[0.26px]">
                  No overnight flights
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-4 mq450:flex-wrap">
                <input className="m-0 h-5 w-5 relative" type="checkbox" />
                <div className="flex-1 relative tracking-[0.26px]">
                  No long stop-overs
                </div>
              </div>
            </div>
          </div>
          <Image
            className="w-[228px] h-px relative"
            width={228}
            height={1}
            alt=""
            src="/vector-22.svg"
          />
          <div className="flex flex-col items-start justify-start gap-6">
            <h3 className="m-0 w-[88.8px] relative text-inherit tracking-[0.26px] font-bold font-[inherit] inline-block mq450:text-lg">
              Airlines
            </h3>
            <div className="flex flex-col items-start justify-start gap-4 text-mid">
              <div className="flex flex-row items-start justify-start gap-4">
                <input className="m-0 h-5 w-5 relative" type="checkbox" />
                <div className="relative tracking-[0.26px]">
                  Singapore Airlines
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-4">
                <input className="m-0 h-5 w-5 relative" type="checkbox" />
                <div className="relative tracking-[0.26px]">Qatar Airways</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[770px] flex flex-col items-start justify-start py-0 pl-0 pr-6 box-border max-w-full lg:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-3 shrink-0 max-w-full z-[1]">
            <div className="relative text-lg tracking-[0.26px] text-lightslategray">
              10 out of 177 Results
            </div>
            <FlightCard
              turkish="/turkish.svg"
              singaporeAirlines="Turkish Airlines"
              aM="11:35 PM"
              flightIcon="/flighticon.svg"
              aM1="4:45 PM"
              h55MNonStop="33H 10M, 1-stop"
              statusIcon="/vector-12.svg"
              s730="S$ 723"
            />
            <FlightCard1
              sIA="/sia.svg"
              singaporeAirlines="Singapore Airlines"
              aM="8:45 PM"
              flightIcon="/flighticon.svg"
              aM1="7:55 PM"
              h55MNonStop="15H 10M, 2-stops"
              vector1="/vector-12.svg"
              s730="S$ 900"
            />
            <FlightCard
              flightCardAlignSelf="stretch"
              flightCardHeight="100px"
              flightCardWidth="unset"
              airlineSectionPadding="0px 9px 0px 0px"
              airlineSectionAlignSelf="unset"
              turkish="/japan.svg"
              singaporeAirlines="Japan Airlines"
              singaporeAirlinesMinWidth="106px"
              singaporeAirlinesDisplay="inline-block"
              detailsTimeWidth="93px"
              aM="8:20 PM"
              aMAlignSelf="stretch"
              flightIcon="/flighticon.svg"
              aM1="9:50 PM"
              h55MNonStop="17H 30M, 1-stop"
              statusIcon="/vector-12.svg"
              s730="S$ 859"
            />
            <FlightCard
              flightCardAlignSelf="stretch"
              flightCardHeight="100px"
              flightCardWidth="155.8px"
              airlineSectionPadding="unset"
              airlineSectionAlignSelf="stretch"
              turkish="/ana.svg"
              singaporeAirlines="ANA"
              singaporeAirlinesMinWidth="unset"
              singaporeAirlinesDisplay="unset"
              detailsTimeWidth="93px"
              aM="6:35 PM"
              aMAlignSelf="stretch"
              flightIcon="/flighticon.svg"
              aM1="9:50 PM"
              h55MNonStop="19H 15M, 1-stop"
              statusIcon="/vector-12.svg"
              s730="S$ 936"
            />
            <FlightCard1
              sIA="/americanairlines.svg"
              singaporeAirlines="American Airlines"
              singaporeAirlinesRight="-16px"
              frameDivWidth="331.2px"
              aM="8:20 PM"
              flightIcon="/flighticon.svg"
              aM1="9:50 PM"
              frameDivGap="30.7px"
              h55MNonStop="17H 30M, 1-stop"
              h55MNonStopDisplay="inline-block"
              h55MNonStopMinWidth="122px"
              vector1="/vector-12.svg"
              s730="S$ 936"
            />
            <FlightCard
              flightCardAlignSelf="stretch"
              flightCardHeight="100px"
              flightCardWidth="unset"
              airlineSectionPadding="unset"
              airlineSectionAlignSelf="unset"
              turkish="/turkish.svg"
              singaporeAirlines="Turkish Airlines"
              singaporeAirlinesMinWidth="115px"
              singaporeAirlinesDisplay="inline-block"
              detailsTimeWidth="unset"
              aM="11:35 PM"
              aMAlignSelf="unset"
              flightIcon="/flighticon.svg"
              aM1="4:45 PM"
              h55MNonStop="33H 10M, 1-stop"
              statusIcon="/vector-12.svg"
              s730="S$ 673"
            />
            <FlightCard
              flightCardAlignSelf="stretch"
              flightCardHeight="100px"
              flightCardWidth="unset"
              airlineSectionPadding="0px 9px 0px 0px"
              airlineSectionAlignSelf="unset"
              turkish="/japan-1.svg"
              singaporeAirlines="Japan Airlines"
              singaporeAirlinesMinWidth="106px"
              singaporeAirlinesDisplay="inline-block"
              detailsTimeWidth="unset"
              aM="10:25 PM"
              aMAlignSelf="unset"
              flightIcon="/flighticon.svg"
              aM1="9:10 AM"
              h55MNonStop="26H 45M, 1-stop"
              statusIcon="/vector-12.svg"
              s730="S$ 859"
            />
            <Button
              className="w-[220px] h-[72px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#1262af",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#1262af" },
                width: 220,
                height: 72,
              }}
            >
              Show more results
            </Button>
          </div>
        </div>
        <div className="w-[257px] rounded-md bg-studio-darkmode-allwhite-ffffff flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[18px] shrink-0 text-cornflowerblue-300 lg:hidden">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-3.5">
            <b className="self-stretch relative tracking-[0.04em] uppercase">
              Recently booked
            </b>
            <Image
              className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
              width={257}
              height={1}
              alt=""
              src="/vector-2-1.svg"
            />
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-3 text-xs text-lightslategray font-inter">
            <BookingCard
              airlineLogo="/airlinelogo@2x.png"
              singaporeAirlines="Singapore Airlines"
              price="$1128"
              depCode="SIN"
              depName="Singapore"
              arrCode="LAX"
              arrName="Los Angeles"
              flightClass="Economy"
              numPeople="2 Adults"
              expedia="Expedia"
              timeAgo="1s ago!"
            />
            <BookingCard
              bookingCardFlex="unset"
              airlineLogo="/icon@2x.png"
              singaporeAirlines="American Airlines"
              singaporeAirlinesMinWidth="100px"
              price="$1024"
              priceMinWidth="51px"
              departureFlex="unset"
              depCode="SFO"
              depCodeDisplay="inline-block"
              depCodeMinWidth="34px"
              depName="San Francisco"
              depNameMinWidth="81px"
              arrivalFlex="1"
              arrCode="SIN"
              arrCodeDisplay="unset"
              arrCodeMinWidth="unset"
              arrName="Singapore"
              arrNameDisplay="inline-block"
              arrNameMinWidth="59px"
              arrNameAlignSelf="stretch"
              arrNameTextAlign="right"
              flightClass="First Class"
              flightClassMinWidth="61px"
              numPeople="1 Adults"
              expedia="Kayak"
              timeAgo="2s ago!"
              timeAgoDisplay="inline-block"
              timeAgoMinWidth="44px"
            />
            <BookingCard
              bookingCardFlex="unset"
              airlineLogo="/icon-1@2x.png"
              singaporeAirlines="Japan Airlines"
              singaporeAirlinesMinWidth="81px"
              price="$2996"
              priceMinWidth="53px"
              departureFlex="1"
              depCode="PHX"
              depCodeDisplay="inline-block"
              depCodeMinWidth="35px"
              depName="Phoenix"
              depNameMinWidth="47px"
              arrivalFlex="unset"
              arrCode="DXB"
              arrCodeDisplay="unset"
              arrCodeMinWidth="unset"
              arrName="Dubai"
              arrNameDisplay="unset"
              arrNameMinWidth="unset"
              arrNameAlignSelf="unset"
              arrNameTextAlign="left"
              flightClass="Economy"
              flightClassMinWidth="54px"
              numPeople="3 Adults"
              expedia="Skyscanner"
              timeAgo="3s ago!"
              timeAgoDisplay="unset"
              timeAgoMinWidth="unset"
            />
            <FormControl
              className="self-stretch h-[30px] font-inter text-xs text-cornflowerblue-200"
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                backgroundColor: "rgba(18, 98, 175, 0.06)",
                borderRadius: "3px",
                width: "100%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#1262af",
                  fontSize: 12,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "86.5px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/icon--back.png"
                    style={{ marginRight: "86.5px" }}
                  />
                )}
              >
                <MenuItem>Show more</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsContainer1;
