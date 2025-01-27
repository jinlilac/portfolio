import { ComponentProps } from "react";

import Container from "@/components/atoms/Container";
import cn from "@/libs/cn";

type ImgProps = ComponentProps<"img"> & {
  imageStyle?: string;
};

export default function Img({
  src,
  alt,
  className,
  imageStyle,
  ...others
}: ImgProps) {
  return (
    <Container.FlexRow className={cn("w-full overflow-hidden", className)}>
      <img
        className={cn("w-full object-cover", imageStyle)}
        src={src}
        alt={alt}
        {...others}
      />
    </Container.FlexRow>
  );
}

Img.defaultProps = {
  imageStyle: "",
};
