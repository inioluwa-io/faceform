import React from "react";
import "../../../styles/components/navbar.scss";
import "../../../styles/components/header.scss";
import "../../../styles/pages/dashboard.scss";
import AppDashboard from "../app-dashboard";
import Forms from "../../../components/form";
import Navigation from "../../../components/navigation";
import Templates from "../../../components/templates";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiWater } from "@mdi/js";
import avatar from "../../../assets/img3.jpg";

interface IDashboardWrapper {
  templates: any;
  formExist: boolean;
  formId: string;
  formData: any;
  page: string;
  selectedTheme?: number | null;
  setForm: Function;
}

const Header: React.FC = () => {
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
              onClick={() => {
                window.location.pathname = "/publish/3ekke3";
              }}
              id="publish-btn"
              className="btn btn-dark btn-sm "
            >
              Publish
            </button>
          </li>
          <li>
            <button id="logout-btn" className="btn btn-default btn-sm ">
              Logout
            </button>
            <div className="profile-pic">
              <img src={avatar} alt="avatar" />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

const DashboardWrapper: React.FC<any> = ({
  templates,
  formExist,
  formId,
  page,
  formData,
  setForm,
  selectedTheme = null,
  ...props
}: IDashboardWrapper) => {
  const Views: React.FC<any> = ({ view }) => {
    switch (view) {
      case "form":
        return (
          <AppDashboard setForm="set" formId={formId} formTemplate={formData} />
        );

      case "design":
        return (
          <Templates selectedTheme={selectedTheme} templates={templates} />
        );

      case "result":
        return (
          <Templates selectedTheme={selectedTheme} templates={templates} />
        );

      default:
        return <>Not found</>;
    }
  };

  return (
    <div id="dashboard">
      <Header />
      {formExist ? (
        <React.Fragment>
          <Navigation formId={formId} />
          <div id="template-list">
            <Views view={page} />
            {page !== "result" && (
              <React.Fragment>
                <Forms items={formData.form} template={formData.template} />
                <Link id="change_theme" to={`/create/${formId}/design`}>
                  <Icon path={mdiWater} size={0.7} color="#444" />
                  Change Theme
                </Link>
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      ) : (
        <div id="template-list">
          <h2>No Access</h2>
        </div>
      )}
    </div>
  );
};
export default DashboardWrapper;
