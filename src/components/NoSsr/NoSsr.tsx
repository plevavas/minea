import { PropsWithChildren, useEffect, useState } from "react";

export const NoSsr = ({ children }: PropsWithChildren) => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  return canRender ? <>{children}</> : null;
};
