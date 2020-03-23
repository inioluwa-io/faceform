import React, { useEffect, useState } from "react";
import WorkspaceWrapper from "./workspaceWrapper";
import { getWorkspaces } from "../../../utils";
import Loading from "../../../components/loading";

const Workspace: React.FC<any> = () => {
  const [workspaces, setWorkspaces]: any = useState(null);
  useEffect(() => {
    getWorkspaces()
      .then((res: any) => {
        setWorkspaces(res.data);
      })
      .catch((err: any) => {
        console.warn(err);
      });
  }, []);
  if (!workspaces) return <Loading />;
  return <WorkspaceWrapper workspaces={workspaces} setWorkspaces = {setWorkspaces} />;
};
export default Workspace;
