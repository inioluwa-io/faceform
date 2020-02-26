import React, { useContext } from "react";
import DashboardWrapper from "./dashboardWrapper";
import { TemplateContext } from "../../../context/templateContext";
import { FormContext } from "../../../context/formContext";

const Dashboard: React.FC<any> = ({ match, ...props }) => {
  const { templates }: any = useContext(TemplateContext);
  const { form }: any = useContext(FormContext);
  const formId = match.params.id;
  const page = match.params.page;
  return (
    <DashboardWrapper
      formExist={formId === "abcdef"}
      formId={formId}
      templates={templates}
      page={page}
      formData={form}
      selectedTheme={2}
      {...props}
    />
  );
};
export default Dashboard;
