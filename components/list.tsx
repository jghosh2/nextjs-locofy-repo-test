import type { NextPage } from "next";
import MenuItem from "./menu-item";
import MenuItem1 from "./menu-item1";

export type ListType = {
  className?: string;
};

const List: NextPage<ListType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[347px] flex flex-col items-start justify-start py-2 px-0 box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <MenuItem
        disabled={false}
        icon={false}
        option="Singapore - Changi (LAX)"
      />
      <MenuItem1 contentType="Text Only" />
      <section className="flex flex-col items-start justify-start">
        <MenuItem
          disabled={false}
          icon={false}
          menuItemWidth="unset"
          menuItemAlignSelf="stretch"
          option="Mactan International Airport (MIA)"
          menuItemHeight="36px"
        />
        <MenuItem
          disabled={false}
          icon={false}
          menuItemWidth="unset"
          menuItemAlignSelf="stretch"
          option="Clark International Airport (CIA)"
          menuItemHeight="36px"
        />
        <MenuItem
          disabled={false}
          icon={false}
          menuItemWidth="347px"
          menuItemAlignSelf="unset"
          option="Charles de Gaulle Airport (CGA)"
          menuItemHeight="36px"
        />
      </section>
    </div>
  );
};

export default List;
