import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const param = useParams();
  return <React.Fragment>{param.id}</React.Fragment>;
};
