import React from "react";
import Typography from "@material-ui/core/Typography";

const Body: React.FC = ({ children }) => {
  return <Typography variant="body1">{children}</Typography>;
};
export default Body;
