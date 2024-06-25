import React from "react";
import { LoaderWrapper, Loader, LoaderImage } from "./styles";

import loaderImg from "../../Images/ARN_var-01.png";

const LoaderComponent = () => {
  return (
    <>
      <LoaderWrapper>
        <LoaderImage src={loaderImg}></LoaderImage>
        <Loader></Loader>
      </LoaderWrapper>
    </>
  );
};

export default LoaderComponent;
