import { useEffect, useState } from "react";

function useMousePosHook(ref: React.RefObject<any>) {
  const [isInside, setIsInside] = useState(false);
  const [isHoverInside, setIsHoverInside] = useState(false);

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

  function handleHover(event: MouseEvent) {
    if (!ref.current || !event?.target) {
      return;
    }
    const elementHeight = ref.current.getBoundingClientRect().height;
    const elementYPosTop = ref.current.offsetTop;
    const elementYPosBottom = elementYPosTop + elementHeight;

    const elementWidth = ref.current.getBoundingClientRect().width;
    const elementXPosLeft = ref.current.offsetLeft;
    const elementXPosRight = elementXPosLeft + elementWidth;

    const isMouseHoverInXAxis =
      event.clientX >= elementXPosLeft && event.clientX <= elementXPosRight;

    const isMouseHoverInYAxis =
      event.clientY >= elementYPosTop &&
      event.clientY <= elementYPosBottom + 15;

    const isMouseHoverNearElement = isMouseHoverInYAxis && isMouseHoverInXAxis;

    if (ref.current.contains(event.target as Node) || isMouseHoverNearElement) {
      setIsHoverInside(true);
    } else {
      setIsHoverInside(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousemove", handleHover);

    return () => document.removeEventListener("mousemove", handleHover);
  }, [ref, isHoverInside]);

  return [isInside, isHoverInside];
}

export default useMousePosHook;
