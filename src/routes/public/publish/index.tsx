import React from "react";
import Forms from "../../../components/form";

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
  template: {
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
  return <Forms items={formData.form} template={formData.template} />;
};
export default Publish;
