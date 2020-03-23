import React, { useContext, useState } from "react";
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
import NotFound from "../../public/notfound";
import Results from "../results";

interface IDashboardWrapper {
  templates: any;
  formExist: boolean;
  formId: string;
  resultId: string;
  formData: any;
  page: string;
  setForm: Function;
}

const Header: React.FC<any> = ({ formId, savingStatus }) => {
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
        default: {
          alert("Try again, something went wrong");
        }
      }
    } catch (e) {
      console.warn(e.message);
    }
  };
  const logout = (): void => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("name");
    localStorage.removeItem("image_url");
    window.location.reload();
  };
  return (
    <header className="main-header">
      <div id="logo" className="row">
        <Link to="">
          <h2>Faceform</h2>
        </Link>
      </div>
      {savingStatus && (
        <p
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          Saving...
        </p>
      )}
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
            <button
              id="logout-btn"
              className="btn btn-default btn-sm"
              onClick={logout}
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

const DashboardWrapper: React.FC<any> = ({
  templates,
  formExist,
  formId,
  resultId,
  page,
  formData
}: IDashboardWrapper) => {
  const { form, saveForm }: any = useContext(FormContext);
  const { saveStatus, setSaveStatus }: any = useContext(SaveContext);
  const [savingStatus, setSavingStatus] = useState(false);
  const supportedViews = ["form", "design", "result"];

  // Determine what to display to user
  const Views: React.FC<any> = ({ view, resultId }) => {
    if (view === "form" && !!!resultId) {
      return (
        <AppDashboard setForm="set" formId={formId} formTemplate={formData} />
      );
    } else if (view === "design" && !!!resultId) {
      return (
        <Templates selectedTheme={form.template_id} templates={templates} />
      );
    } else if (view === "result") {
      return <Results formId={formId} resultId={resultId} />;
    } else {
      return <>Not Found</>;
    }
  };
  const save = async () => {
    setSavingStatus(true);
    try {
      const res = await saveForm(form.form, formId);
      if (res.status === 200) {
        alert("Successfully Saved!!!");
        setSaveStatus(true);
        setSavingStatus(false);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div id="dashboard">
      <Header formId={formId} savingStatus={savingStatus} />
      {/* Redirect to not found if page not supported */}
      {supportedViews.includes(page) ? (
        // Redirect to no access if form access denied
        formExist ? (
          <React.Fragment>
            <Navigation formId={formId} />
            <div id="template-list">
              <Views view={page} resultId={resultId} />
              {page !== "result" && !!!resultId && (
                <React.Fragment>
                  <Forms items={formData.form} template={formData.template} />
                  <Link id="change_theme" to={`/create/${formId}/design`}>
                    <Icon path={mdiWater} size={0.7} color="#444" />
                    Change Theme
                  </Link>
                </React.Fragment>
              )}
              {!saveStatus && (
                <button
                  id="save"
                  onClick={save}
                  className="btn btn-sm btn-dark"
                >
                  Save
                </button>
              )}
            </div>
          </React.Fragment>
        ) : (
          <div id="template-list">
            <h2>No Access</h2>
          </div>
        )
      ) : (
        <div id="template-list">
          <NotFound />
        </div>
      )}
    </div>
  );
};
export default DashboardWrapper;
