import NextLink from "next/link";
import { ComponentProps } from "react";

type DefaultNextLinkProps = ComponentProps<typeof NextLink>;
export type LinkProps = DefaultNextLinkProps & {
  disabled?: boolean;
};

export const Link = ({
  children,
  href,
  disabled,
  className,
  ...rest
}: LinkProps) => {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <NextLink href={href} className={className} {...rest}>
      {children}
    </NextLink>
  );
};
