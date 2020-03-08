import React, { useEffect, useState } from "react";
import WorkspaceWrapper from "./workspaceWrapper";
import { getWorkspaces } from "../../../utils";

const Workspace: React.FC<any> = () => {
  const [workspaces, setWorkspaces]: any = useState(null);
  useEffect(() => {
    getWorkspaces().then(res => {
      setWorkspaces(res.data);
    });
  },[]);
  if (!workspaces) return <>Loading...</>;
  return <WorkspaceWrapper workspaces={workspaces} />;
};
export default Workspace;
