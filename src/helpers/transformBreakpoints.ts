type Breakpoints = Record<string, number>;
type ResponsiveConditions = Record<string, {} | { "@media": string }>;

export const transformBreakpoints = (input: Breakpoints) => {
  let responsiveConditions: ResponsiveConditions = {};

  Object.entries(input).forEach(([key, value]) => {
    if (value === 0) {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {},
      };
    } else {
      responsiveConditions = {
        ...responsiveConditions,
        [key]: {
          "@media": `screen and (min-width: ${value}px)`,
        },
      };
    }
  });

  return responsiveConditions;
};
