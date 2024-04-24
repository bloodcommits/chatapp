import {styled} from "@mui/material"

export const VisuallyHidden = styled("input")({
    border: 0,
    // clip: "rect(0 0 0 0)",
    height: 5,
    // margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 5,
    background: "transparent",
//   border: "none"
borderRadius:"50%"
  });