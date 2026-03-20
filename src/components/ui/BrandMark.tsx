import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: number;
  className?: string;
};

export function BrandMark({ size = 28, className }: BrandMarkProps) {
  return (
    <Image
      src="/img/brand/clarium-icon.png"
      alt=""
      width={size}
      height={size}
      className={cn("rounded-[8px]", className)}
      priority
    />
  );
}
