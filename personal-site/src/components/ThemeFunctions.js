//Light theme = true, Dark = false.

export const generalTextColor = theme =>(
  (theme ?? true) ? "#000000" : "#FFFFFF"
);

export const buttonColor = theme =>(
  (theme ?? true) ? "#004ea1" : "#ba7916"
);

export const backgroundColor = theme =>(
  (theme ?? true) ? "#FFFFFF" : "#292929"
);