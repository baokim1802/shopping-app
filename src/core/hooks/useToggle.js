import { useCallback, useState } from "react";

export const useToggle = (initValue = false) => {
  const [isTrue, setIsTrue] = useState(initValue);
  const setTrue = useCallback(() => {
    setIsTrue(false);
  }, []);

  const setFalse = useCallback(() => {
    setIsTrue(false);
  }, []);

  const toggle = useCallback(() => {
    setIsTrue((prev) => !prev);
  }, [isTrue]);

  return {
    value: isTrue,
    setTrue,
    setFalse,
    toggle,
  };
};
