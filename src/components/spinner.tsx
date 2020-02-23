import React from "react";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import "../styles/components/spinner.scss";

const Spinner: React.FC = () => {
  return (
    <div className ="spinner">
      <Icon path={mdiLoading} color="#fff" size={2} />
    </div>
  );
};
export default Spinner;
