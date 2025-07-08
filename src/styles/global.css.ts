import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("html", {
  fontSize: "62.5%",
  WebkitFontSmoothing: "antialiased",
});

globalStyle("body", {
  fontSize: "1.6rem",
});

globalStyle("ul, ol", {
  listStyle: "none",
});

globalStyle("button", {
  border: "none",
  backgroundColor: "transparent",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("img", {
  display: "block",
});
