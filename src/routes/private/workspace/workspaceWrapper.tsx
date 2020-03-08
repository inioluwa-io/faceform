import React from "react";
import "../../../styles/components/header.scss";
import "../../../styles/pages/workspace.scss";
import { Link } from "react-router-dom";
import Workspaces from "../../../components/workspaces";

const Header: React.FC = () => {
  const logout = (): void => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("name");
    localStorage.removeItem("image_url");
    window.location.reload();
  };
  const image_url: any = window.localStorage.getItem("image_url");
  return (
    <header className="main-header">
      <div id="logo" className="row">
        <Link to="">
          <h2>Faceform</h2>
        </Link>
      </div>
      <div className="usr-profile row">
        <ul className="row">
          <li>
            <button
              onClick={logout}
              id="logout-btn"
              className="btn btn-default btn-sm "
            >
              Logout
            </button>
            <div className="profile-pic">
              <img src={image_url} alt="avatar" />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

const WorkspaceWrapper: React.FC<any> = ({ workspaces }) => {
  return (
    <div id="workspace">
      <Header />
      <main>
        <h1>My workspace</h1>
        <Workspaces workspaces={workspaces} />
      </main>
    </div>
  );
};
export default WorkspaceWrapper;
