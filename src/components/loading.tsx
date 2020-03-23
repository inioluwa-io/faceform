import React from "react";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

const Loading: React.FC<any> = () => (
  <div id="loader">
    <Icon className="loader" path={mdiLoading} size={2} color="#333" />
  </div>
);
export default Loading;
