import React, { useContext, useEffect } from "react";
import DashboardWrapper from "./dashboardWrapper";
import { TemplateContext } from "../../../context/templateContext";
import { FormContext } from "../../../context/formContext";
import { getForm } from "../../../utils";

const Dashboard: React.FC<any> = ({ match, ...props }) => {
  const { templates }: any = useContext(TemplateContext);
  const { form, setForm }: any = useContext(FormContext);
  const formId = match.params.id;
  const page = match.params.page;

  useEffect(() => {
    let current = true;
    if (current) {
      getForm(formId)
        .then(res => {
          setForm(res.data);
        })
        .catch(err => {
          setForm({});
          console.log(err.message);
        });
    }
    return () => {
      current = false;
    };
  }, [setForm, formId]);

  if (!templates || !form) return <>Loading...</>;
  return (
    <DashboardWrapper
      formExist={form.hasOwnProperty("_id")}
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
