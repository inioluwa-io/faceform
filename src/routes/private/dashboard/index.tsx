import React from "react";
import DashboardWrapper from "./dashboardWrapper";

const templates: any = [
  {
    id: "kjf8ueb9hjFJUnx93J",
    name: "Plain Blue",
    theme: {
      background: "#fff",
      fontFamily: "Nunito Sans",
      labelColor: "#444",
      inputColor: "cadetblue",
      type: "plain",
      buttonColor: "cadetblue",
      buttonText: "#fff"
    }
  },
  {
    id: "kjf8ueb9hjFJUnx93J",
    name: "Brownish",
    theme: {
      background: "#f9cd48",
      fontFamily: "Nunito Sans",
      labelColor: "#252525",
      inputColor: "#252525",
      type: "plain",
      buttonColor: "#252525",
      buttonText: "#f9cd48"
    }
  },
  {
    id: "kjf8ueb9hjFJUnx93J",
    name: "Pale Pink",
    theme: {
      background: "#f1ece2",
      fontFamily: "Nunito Sans",
      labelColor: "#262626",
      inputColor: "#323232",
      type: "plain",
      buttonColor: "#262626",
      buttonText: "#f1ece2"
    }
  },
  {
    id: "kjf8ueb9hjFJUnx93J",
    name: "Plain Purple",
    theme: {
      background: "#fff",
      fontFamily: "Nunito Sans",
      labelColor: "#9b649c",
      inputColor: "#c384c5",
      type: "plain",
      buttonColor: "#c384c5",
      buttonText: "#fff"
    }
  },
  {
    id: "kjf8ueb9hjFJUnx93J",
    name: "Blackish",
    theme: {
      background: "#262626",
      fontFamily: "Nunito Sans",
      labelColor: "#fff",
      inputColor: "#f1ece2",
      type: "plain",
      buttonColor: "#f1ece2",
      buttonText: "#262626"
    }
  },
  {
    id: "kjf8ueb9hjFJUnx93J",
    name: "Rasberry Pie",
    theme: {
      background: "#c75875",
      fontFamily: "Nunito Sans",
      labelColor: "#fff",
      inputColor: "#eeeeee",
      type: "plain",
      buttonColor: "#eeeeee",
      buttonText: "#c75875"
    }
  },
  {
    id: "kjf8ueb9hjFJUnx93J",
    name: "Blue Pie",
    theme: {
      background: "#408e91",
      fontFamily: "Nunito Sans",
      labelColor: "#fff",
      inputColor: "#eeeeee",
      type: "plain",
      buttonColor: "#eeeeee",
      buttonText: "#408e91"
    }
  },
  {
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
  },
  {
    id: "kjf8ueb9hjFJUnx93J",
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
];

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
  template: templates[8]
};

const Dashboard: React.FC<any> = ({ match, ...props }) => {
  const formId = match.params.id;
  const page = match.params.page;
  return (
    <DashboardWrapper
      formExist={formId === "abcdef"}
      formId={formId}
      templates={templates}
      page={page}
      formData={formData}
      selectedTheme={2}
      {...props}
    />
  );
};
export default Dashboard;
