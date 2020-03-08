import React, { useContext } from "react";
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
import { FormContext } from "../../../context/formContext";
import { SaveContext } from "../../../context/saveContext";
import { addPublish } from "../../../utils";

interface IDashboardWrapper {
  templates: any;
  formExist: boolean;
  formId: string;
  formData: any;
  page: string;
  setForm: Function;
}

const Header: React.FC<any> = ({ formId }) => {
  const image_url: any = window.localStorage.getItem("image_url");
  const publish = async () => {
    try {
      const res = await addPublish({ form_id: formId });
      switch (res.status) {
        case 200: {
          alert("Already Published!!!");
          break;
        }
        case 201: {
          alert("Successfully Published!!!");
          break;
        }
        default:{
          alert("Try again, something went wrong");
        }
      }
    } catch (e) {
      console.warn(e.message);
    }
  };
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
              onClick={publish}
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
              <img src={image_url} alt="avatar" />
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
  formData
}: IDashboardWrapper) => {
  const { form, saveForm }: any = useContext(FormContext);
  const { saveStatus, setSaveStatus }: any = useContext(SaveContext);

  const Views: React.FC<any> = ({ view }) => {
    switch (view) {
      case "form":
        return (
          <AppDashboard setForm="set" formId={formId} formTemplate={formData} />
        );

      case "design":
        return (
          <Templates selectedTheme={form.template_id} templates={templates} />
        );

      case "result":
        return (
          <Templates selectedTheme={form.template_id} templates={templates} />
        );

      default:
        return <>Not found</>;
    }
  };
  const save = async () => {
    try {
      const res = await saveForm(form.form, formId);
      if (res.status === 200) {
        alert("Successfully Saved!!!");
        setSaveStatus(true);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div id="dashboard">
      <Header formId={formId} />
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
            {!saveStatus && (
              <button id="save" onClick={save} className="btn btn-sm btn-dark">
                Save
              </button>
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
