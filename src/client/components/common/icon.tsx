import React from "react";
import { IconContext } from "react-icons";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

export const IconMap = {
  bookmark: BsFillBookmarkHeartFill,
};

type IconName = keyof typeof IconMap;

export type IconProps = React.SVGAttributes<SVGElement> & {
  name: IconName;
  className?: string;
  size?: string; // in em or px
  style?: React.CSSProperties;
};

const Icon: React.FC<IconProps> = ({
  name,
  size,
  className = "",
  style,
  ...props
}) => {
  const IconComponent = IconMap[name];

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <IconContext.Provider value={{ size, className, style }}>
      <IconComponent {...props} />
    </IconContext.Provider>
  );
};

export default Icon;
