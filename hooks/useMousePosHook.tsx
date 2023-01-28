import { useEffect, useState } from "react";

function useMousePosHook(ref: React.RefObject<any>) {
  const [isInside, setIsInside] = useState(false);

  function handleClickOutside(event: MouseEvent) {
    if (!ref.current || !event?.target) {
      return;
    }

    if (!ref.current.contains(event.target as Node)) {
      setIsInside(false);
    } else {
      setIsInside(true);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, isInside]);

  return [isInside];
}

export default useMousePosHook;
