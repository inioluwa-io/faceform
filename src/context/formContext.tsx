import React, { createContext, useState } from "react";

export const FormContext = createContext({});

interface IFormProvider {
  children: any;
}

const FormProvider = ({ children }: IFormProvider) => {

  const [form, setForm] = useState({
    id: "djdnjhsdleeauibjeweew",
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
    template: {
      id: "Jn2bf02j9JFJO0JBQBNASHCJnjhd",
      name: "Blue Pie",
      theme: {
        background: "default (1).png",
        fontFamily: "Nunito Sans",
        labelColor: "#555",
        inputColor: "#444",
        type: "image",
        buttonColor: "#eeeeee",
        buttonText: "#555"
      }
    }
  });

  const changeTemplate = async (template: any) => {
    setForm({ ...form, template: template });
  };

  const saveForm = (formData: any) => {
    setForm({ ...form, form : formData });
  };

  return (
    <FormContext.Provider value={{ changeTemplate, setForm, form, saveForm }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;
