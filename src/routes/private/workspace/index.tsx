import React, { useEffect, useState } from "react";
import WorkspaceWrapper from "./workspaceWrapper";
import { getWorkspaces } from "../../../utils";

// const workspace: any = [
//   {
//     id: "kjf8ueb9hjFJUnx93J",
//     name: "Blue Pie",
//     response: {
//       items: [""],
//       total: 5
//     },
//     theme: {
//       background: "#408e91",
//       fontFamily: "Nunito Sans",
//       labelColor: "#fff",
//       inputColor: "#eeeeee",
//       type: "plain",
//       buttonColor: "#eeeeee",
//       buttonText: "#408e91"
//     }
//   },
//   {
//     id: "kjf8ueb9hjFJUnx93J",
//     name: "Blue Pie",
//     response: {
//       items: [""],
//       total: 2
//     },
//     theme: {
//       background: "default.png",
//       fontFamily: "Nunito Sans",
//       labelColor: "#fff",
//       inputColor: "#eeeeee",
//       type: "image",
//       buttonColor: "#eeeeee",
//       buttonText: "#222"
//     }
//   },
//   {
//     id: "kjf8ueb9hjFJUnx93J",
//     name: "Blue Pie",
//     response: {
//       items: [""],
//       total: 10
//     },
//     theme: {
//       background: "default (1).png",
//       fontFamily: "Nunito Sans",
//       labelColor: "#555",
//       inputColor: "#444",
//       type: "image",
//       buttonColor: "#eeeeee",
//       buttonText: "#555"
//     }
//   }
// ];
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
