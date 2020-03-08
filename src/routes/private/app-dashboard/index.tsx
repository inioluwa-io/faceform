import React from "react";
import AppDashboardWrapper from "./app-dashboardWrapper";

const AppDashboard: React.FC<any> = ({ formTemplate, formId }) => {
  return <AppDashboardWrapper items={formTemplate.form} formId={formId} />;
};
export default AppDashboard;
