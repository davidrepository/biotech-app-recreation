export const combineClassnames = (
  ...classes: (string | undefined | null | false)[]
): string | undefined => {
  const filtered = classes.filter(Boolean);
  if (filtered.length === 0) return undefined;
  return filtered.join(" ");
};
