import cn from "clsx";
import React, { FC, useEffect, useMemo, useState } from "react";
import s from "./styles.module.css";

interface Props {
  onChange?: (key: string, index: number) => void;
  items: Item[];
  tabClassName?: string;
  defaultActive?: number;
}

interface Item {
  name: string;
  key: string;
  component?: any;
}

const TabItem = ({
  item,
  isActive,
  onClick,
}: {
  onClick: () => void;
  item: Item;
  isActive: boolean;
}) => {
  const rootClassName = cn(s.item, { [s.itemActive]: isActive });

  return (
    <div className={rootClassName} onClick={onClick}>
      <span
        className={`whitespace-nowrap font-semibold ${
          isActive ? "text-[#5A4BDA]" : "text-[#525252]"
        }`}
      >
        {item.name}
      </span>
    </div>
  );
};
const Tabs: FC<Props> = React.memo(
  ({ items, onChange, tabClassName = "", defaultActive = 0 }) => {
    const rootClassName = cn(s.root, tabClassName);
    const [active, setActive] = useState(items?.[defaultActive].key);
    useEffect(() => {
      if (defaultActive !== undefined) {
        setActive(items?.[defaultActive].key);
      }
    }, [defaultActive]);
    const Body = useMemo(() => {
      return (
        <div
          className={"animated fadeIn mt-4 px-0.5 duration-200"}
          key={active}
        >
          {items.find((item) => item.key === active)?.component || <></>}
        </div>
      );
    }, [items, active]);
    return (
      <div className={"flex flex-col"}>
        <div className={rootClassName}>
          {items.map((item, index) => {
            return (
              <TabItem
                onClick={() => {
                  setActive(item.key);
                  onChange && onChange(item.key, index);
                }}
                item={item}
                key={index}
                isActive={item.key === active}
              />
            );
          })}
        </div>
        {Body}
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

export { Tabs };
