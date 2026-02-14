import { navigationLinks } from "@/src/lib/constantData";

export const normalizePath = (path: string): string => {
  const sanitized = path.replace(/\/+$/, "");
  return sanitized || "/";
};

export const getActiveNavPath = (pathname: string): string | null => {
  const current = normalizePath(pathname);
  const navPaths = Object.keys(navigationLinks)
    .map(normalizePath)
    .sort((a, b) => b.length - a.length);

  for (const navPath of navPaths) {
    if (navPath === "/") {
      if (current === "/") return navPath;
      continue;
    }

    if (current === navPath || current.startsWith(`${navPath}/`)) {
      return navPath;
    }
  }

  return null;
};
