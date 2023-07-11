//Light theme = true, Dark = false.

export const generalTextColor = theme =>(
  (theme ?? true) ? "#000000" : "#FFFFFF"
);

export const buttonColor = theme =>(
  (theme ?? true) ? "#002e5e" : "#ba7916"
);

export const backgroundColor = theme =>(
  (theme ?? true) ? "#FFFFFF" : "#292929"
);

export const navBarBackgroundColor = theme =>(
  (theme ?? true) ? "#002e5e" : "#ba7916"
);