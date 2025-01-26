import { getCookie, removeCookie, setCookie } from "@/utils/cookie";
import { useState } from "react";

export default function useCookie(key, initialValue) {
  const [value, setValue] = useState(() => {
    const data = getCookie(key);
    return data || initialValue;
  });

  function handleDispatch(action) {
    if (typeof action === "function") {
      setValue((prevState) => {
        const newValue = action(prevState);
        setCookie(key, newValue);
        return newValue;
      });
    } else {
      setValue(action);
      setCookie(key, action);
    }
  }

  function clearState() {
    removeCookie(key);
    setValue(undefined);
  }

  return [value, handleDispatch, clearState];
}
