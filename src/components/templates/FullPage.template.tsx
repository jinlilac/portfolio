import { Header } from "@/components/organisms/Header";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

type PFullPageScroll = {
  onPageChange?: (page: number) => void;
  onLoad?: (limit: number) => void;
} & PropsWithChildren;

export const FullPageScroll: React.FC<PFullPageScroll> = ({
  children,
  onLoad = () => {},
  onPageChange = () => {},
}) => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const currentPage = useRef<number>(0);
  const canScroll = useRef<boolean>(true);
  const oldTouchY = useRef<number>(0);
  const [_, refresh] = useState<number>(0);

  const scrollDown = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight; // 화면 세로 길이 100vh
    if (outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current + 1),
        left: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (outerDivRef.current.childElementCount - 1 > currentPage.current)
        currentPage.current++;
    }
    // console.log(currentPage.current);
    onPageChange(currentPage.current);
    refresh((v) => v + 1);
  };

  const scrollUp = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight; // 화면 세로 길이 100vh
    if (outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current - 1),
        left: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (currentPage.current > 0) currentPage.current--;
    }
    // console.log(currentPage.current);
    onPageChange(currentPage.current);
    refresh((v) => v + 1);
  };

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();
    if (!canScroll.current) return;
    const { deltaY } = e; // +is down -is up
    // console.log("scroll to", outerDivRef.current?.scrollHeight);
    if (deltaY > 20 && outerDivRef.current) {
      scrollDown();
    } else if (deltaY < -20 && outerDivRef.current) {
      scrollUp();
    }
  }; // wheel Handler

  const scrollHandler = (e: Event) => {
    e.preventDefault();
  };

  const onTouchDown = (e: TouchEvent) => {
    oldTouchY.current = e.changedTouches.item(0)?.clientY || 0;
  };

  const onTouchUp = (e: TouchEvent) => {
    const currentTouchY = e.changedTouches.item(0)?.clientY || 0;

    if (oldTouchY.current - currentTouchY > 80) {
      scrollDown();
    } else if (oldTouchY.current - currentTouchY < -80) {
      scrollUp();
    }
  };

  useEffect(() => {
    const outer = outerDivRef.current;
    if (!outer) return;
    onLoad(outerDivRef.current?.childElementCount as number);
    refresh((v) => v + 1);
    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", scrollHandler);
    outer.addEventListener("touchstart", onTouchDown);
    outer.addEventListener("touchend", onTouchUp);
    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", scrollHandler);
      outer.removeEventListener("touchstart", onTouchDown);
      outer.removeEventListener("touchend", onTouchUp);
    };
  }, []);
  const movePageTo = (index: number) => {
    const num = currentPage.current;
    if (index > num) for (let i = 0; i < index - num; i++) scrollDown();
    else if (index < num) for (let i = 0; i < num - index; i++) scrollUp();
  };

  return (
    <>
      <Header
        sections={["Home", "About", "Project", "Contact"]}
        currentIndex={currentPage.current}
        onClick={movePageTo}
      />
      <div ref={outerDivRef} className="h-dvh w-full overflow-hidden">
        {children}
      </div>
    </>
  );
};
