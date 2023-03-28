import { DependencyList, useEffect, useRef } from "react";

export const useOnFocus = (
  callback: (event: FocusEvent) => void,
  dependencies?: DependencyList
) => {
  useEffect(() => {
    window.addEventListener("focus", callback);

    return () => {
      window.removeEventListener("focus", callback);
    };
  }, dependencies);
};
