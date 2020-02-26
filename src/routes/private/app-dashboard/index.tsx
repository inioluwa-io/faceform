import React from "react";
import AppDashboardWrapper from "./app-dashboardWrapper";

const AppDashboard: React.FC<any> = ({ formTemplate }) => {
  return <AppDashboardWrapper items={formTemplate.form} />;
};
export default AppDashboard;
