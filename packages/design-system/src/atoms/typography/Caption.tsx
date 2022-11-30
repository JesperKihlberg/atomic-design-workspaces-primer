import React from "react";
import Typography from "@material-ui/core/Typography";

const Caption: React.FC = ({ children }) => {
  return <Typography variant="caption">{children}</Typography>;
};
export default Caption;
