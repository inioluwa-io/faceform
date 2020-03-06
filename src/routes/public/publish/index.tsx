import React, { useContext } from "react";
import Forms from "../../../components/form";
import { FormContext } from "../../../context/formContext";

const formData = {
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
  template_id: {
    id: "kjf8ueb9hjFJUnx93J",
    name: "Blue Pie",
    theme: {
      background: "default.png",
      fontFamily: "Nunito Sans",
      labelColor: "#fff",
      inputColor: "#eeeeee",
      type: "image",
      buttonColor: "#eeeeee",
      buttonText: "#222"
    }
  }
};

const Publish: React.FC<any> = () => {
  const { setForm, form }: any = useContext(FormContext);
  
  return <Forms items={formData.form} template={formData.template_id} />;
};
export default Publish;
