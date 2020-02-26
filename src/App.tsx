import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Routes from "./routes/";
import TemplateProvider from "./context/templateContext";
import FormContext  from "./context/formContext";

const App: React.FC = () => {
  const removeTapHighlight = (e: any) => {
    if (e.detail > 1) {
      e.preventDefault();
    }
  };
  const setUserAgent = (): void => {
    if (
      /iPod|iPhone|Blackberry|Android|iPad|webOS/.test(
        window.navigator.userAgent
      )
    ) {
      document.querySelector("html")?.classList.add("mobile");
    } else {
      document.querySelector("html")?.classList.add("desktop");
    }
  };
  useEffect(() => {
    setUserAgent();
    document.addEventListener("mousedown", e => removeTapHighlight(e));
    return () =>
      document.removeEventListener("mousedown", e => removeTapHighlight(e));
  }, []);

  return (
    <div className="default">
      <TemplateProvider>
        <FormContext>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </FormContext>
      </TemplateProvider>
    </div>
  );
};

export default App;
