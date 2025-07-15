import { useRef } from "react";

export const useDebounce = (fun) => {

    console.log("useDebounce called");
    const ref= useRef();

    return () => {
      clearTimeout(ref.current);
      ref.current = setTimeout(fun,300);
    };
}