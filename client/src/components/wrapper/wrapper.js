import React from "react";
import Sidebar from "../common/sidebar";

const Wrapper = (WrappedComponent) => {
  return (props) => (
    <div>
       <Sidebar />
      <div style={{ marginLeft: "17vw"}}>
        <WrappedComponent {...props} />
      </div>
    </div>
  );
};

export default Wrapper;
