export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  },
  defaultValue = "Present",
) {
  try {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", options).format(date);
  } catch {
    return defaultValue;
  }
}

export const formatDisplayName = (key: string): string => {
  if (key.includes("_")) return key.split("_").map((part) => formatDisplayName(part)).join(" & ");

  const words: string[] = key.split(/(?=[A-Z])/);

  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  return words.join(" ");
};
