import React from "react";
import AppDashboardWrapper from "./app-dashboardWrapper";

const AppDashboard: React.FC<any> = () => {
  const formTemplate = {
    form: [
      {
        label: "Ready to start your first survey?",
        placeholder: "Answer",
        type: "text"
      },
      {
        label: "You made it!! ",
        placeholder: "Answer",
        type: "text"
      }
    ],
  };

  return <AppDashboardWrapper items={formTemplate.form} />;
};
export default AppDashboard;
