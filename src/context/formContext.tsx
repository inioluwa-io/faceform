import React, { createContext, useState } from "react";
import { updateForm } from "../utils";

export const FormContext = createContext({});

interface IFormProvider {
  children: any;
}

const FormProvider = ({ children }: IFormProvider) => {
  const [form, setForm]: any = useState(null);

  const changeTemplate = async (template: any) => {
    setForm({ ...form, template_id: template });
    console.log(form);
  };

  const saveForm = (formData: any, id: string | number) => {
    setForm({ ...form, form: formData });
    try {
      return updateForm({ ...form, form: formData }, id);
    } catch (err) {
      console.warn(err.message);
    }
  };

  return (
    <FormContext.Provider value={{ changeTemplate, setForm, form, saveForm }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;
