import React from "react";
import { useNav } from "./nav-controller";

const withNavClose = (AComponent: any) => {
  const MemoizedComponent = React.memo(AComponent);
  return (props: any) => {
    const { close } = useNav();
    return <MemoizedComponent {...props} closeNav={close} />;
  };
};

export default withNavClose;
