import React, { createContext, useState, useEffect } from "react";
import { getTemplates } from "../utils";

export const TemplateContext = createContext({});

interface ITemplateProvider {
  children: any;
}

const TemplateProvider = ({ children }: ITemplateProvider) => {
  const [templates, setTemplates]: any = useState(null);
  useEffect(() => {
    getTemplates().then(res => {
      setTemplates(res.data);
    });
  }, []);
  // const [template, setTemplate] = useState([
  //   {
  //     id: "kjf8sesshjFksJUnx93J",
  //     name: "Plain Blue",
  //     theme: {
  //       background: "#fff",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#444",
  //       inputColor: "cadetblue",
  //       type: "plain",
  //       buttonColor: "cadetblue",
  //       buttonText: "#fff"
  //     }
  //   },
  //   {
  //     id: "sjsn hfdf9393bno03ihkn",
  //     name: "Brownish",
  //     theme: {
  //       background: "#f9cd48",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#252525",
  //       inputColor: "#252525",
  //       type: "plain",
  //       buttonColor: "#252525",
  //       buttonText: "#f9cd48"
  //     }
  //   },
  //   {
  //     id: "ajHjhB9J43B0b43i4gf0w",
  //     name: "Pale Pink",
  //     theme: {
  //       background: "#f1ece2",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#262626",
  //       inputColor: "#323232",
  //       type: "plain",
  //       buttonColor: "#262626",
  //       buttonText: "#f1ece2"
  //     }
  //   },
  //   {
  //     id: "JUFHFB8292nkjkbcw02j3f",
  //     name: "Plain Purple",
  //     theme: {
  //       background: "#fff",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#9b649c",
  //       inputColor: "#c384c5",
  //       type: "plain",
  //       buttonColor: "#c384c5",
  //       buttonText: "#fff"
  //     }
  //   },
  //   {
  //     id: "Ibf909j3n3eub9dhiHIJb0i",
  //     name: "Blackish",
  //     theme: {
  //       background: "#262626",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#fff",
  //       inputColor: "#f1ece2",
  //       type: "plain",
  //       buttonColor: "#f1ece2",
  //       buttonText: "#262626"
  //     }
  //   },
  //   {
  //     id: "aFJN4308INF4BFNjJjjfbfkl",
  //     name: "Rasberry Pie",
  //     theme: {
  //       background: "#c75875",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#fff",
  //       inputColor: "#eeeeee",
  //       type: "plain",
  //       buttonColor: "#eeeeee",
  //       buttonText: "#c75875"
  //     }
  //   },
  //   {
  //     id: "Xkbfj209kn2fj2b9fJB0IHib",
  //     name: "Blue Pie",
  //     theme: {
  //       background: "#408e91",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#fff",
  //       inputColor: "#eeeeee",
  //       type: "plain",
  //       buttonColor: "#eeeeee",
  //       buttonText: "#408e91"
  //     }
  //   },
  //   {
  //     id: "Jbdp98b[ebn0KN9hjbscionw2i0",
  //     name: "Blue Pie",
  //     theme: {
  //       background: "default.png",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#fff",
  //       inputColor: "#eeeeee",
  //       type: "image",
  //       buttonColor: "#eeeeee",
  //       buttonText: "#222"
  //     }
  //   },
  //   {
  //     id: "Jn2bf02j9JFJO0JBQBNASHCJnjhd",
  //     name: "Blue Pie",
  //     theme: {
  //       background: "default (1).png",
  //       fontFamily: "Nunito Sans",
  //       labelColor: "#555",
  //       inputColor: "#444",
  //       type: "image",
  //       buttonColor: "#eeeeee",
  //       buttonText: "#555"
  //     }
  //   }
  // ]);

  return (
    <TemplateContext.Provider
      value={{ setTemplates, templates }}
    >
      {children}
    </TemplateContext.Provider>
  );
};
export default TemplateProvider;
