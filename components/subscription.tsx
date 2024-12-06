import type { NextPage } from "next";
import SubscribeSection from "./subscribe-section";
import Footer from "./footer";

export type SubscriptionType = {
  className?: string;
};

const Subscription: NextPage<SubscriptionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[754.7px] flex flex-col items-start justify-start pt-0 px-0 pb-[225.7px] box-border max-w-full text-center text-lg text-cornflowerblue-300 font-typography-body-1 mq750:pb-24 mq750:box-border mq1050:pb-[147px] mq1050:box-border mq1225:h-auto ${className}`}
    >
      <SubscribeSection subscribeSectionBackground="/subscribe-section-background@2x.png" />
      <Footer
        logo="/logo.svg"
        entypoSocialfacebookWithCircle="/entyposocialfacebookwithcircle.svg"
        entypoSocialinstagramWithCircle="/entyposocialinstagramwithcircle.svg"
        entypoSocialtwitterWithCircle="/entyposocialtwitterwithcircle.svg"
      />
    </section>
  );
};

export default Subscription;
