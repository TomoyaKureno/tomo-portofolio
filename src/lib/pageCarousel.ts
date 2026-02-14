import { pageOrder } from "@/src/lib/constantData";

const clampPageIndex = (pathname: string): number => {
  return Math.max(0, pageOrder.indexOf(pathname));
};

export const getPageDirection = (currentPath: string, previousPath: string): number => {
  const currentIndex = pageOrder.indexOf(currentPath);
  const previousIndex = pageOrder.indexOf(previousPath);

  if (currentIndex === -1 || previousIndex === -1 || currentIndex === previousIndex) {
    return 0;
  }

  return currentIndex > previousIndex ? 1 : -1;
};

export const getNextPath = (pathname: string): string => {
  const currentIndex = clampPageIndex(pathname);
  return pageOrder[(currentIndex + 1) % pageOrder.length];
};

export const getPreviousPath = (pathname: string): string => {
  const currentIndex = clampPageIndex(pathname);
  return pageOrder[(currentIndex - 1 + pageOrder.length) % pageOrder.length];
};
