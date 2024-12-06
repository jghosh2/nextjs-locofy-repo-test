import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MenuItemType = {
  className?: string;
  option?: string;

  /** Variant props */
  disabled?: boolean;
  icon?: boolean;

  /** Style props */
  menuItemWidth?: CSSProperties["width"];
  menuItemAlignSelf?: CSSProperties["alignSelf"];
  menuItemHeight?: CSSProperties["height"];
};

const MenuItem: NextPage<MenuItemType> = ({
  className = "",
  disabled = false,
  icon = true,
  menuItemWidth,
  menuItemAlignSelf,
  option,
  menuItemHeight,
}) => {
  const menuItemStyle: CSSProperties = useMemo(() => {
    return {
      width: menuItemWidth,
      alignSelf: menuItemAlignSelf,
      height: menuItemHeight,
    };
  }, [menuItemWidth, menuItemAlignSelf, menuItemHeight]);

  return (
    <div
      className={`w-[347px] bg-studio-darkmode-allwhite-ffffff h-9 flex flex-col items-start justify-center py-1.5 px-4 box-border text-left text-base text-text-primary font-typography-body-1 ${className}`}
      data-disabled={disabled}
      data-icon={icon}
      style={menuItemStyle}
    >
      <div className="relative tracking-[0.15px] leading-[150%]">{option}</div>
    </div>
  );
};

export default MenuItem;
