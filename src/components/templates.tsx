import React, { useContext } from "react";
import "../styles/components/template.scss";
import { FormContext } from "../context/formContext";
import { SaveContext } from "../context/saveContext";
import Loading from "./loading";

const Templates: React.FC<any> = ({ templates, selectedTheme }) => {
  const { changeTemplate }: any = useContext(FormContext);
  const { setSaveStatus }: any = useContext(SaveContext);

  const handleChange = (event: any) => {
    const target =
      event.target.dataset.id ||
      event.target.parentElement.dataset.id ||
      event.target.parentElement.parentElement.dataset.id;
    changeTemplate(templates[target]);
    setSaveStatus(false);
  };

  if (!selectedTheme) return <Loading />;

  return (
    <div className="templates">
      <header>
        <h1>Design</h1>
      </header>
      <div className="container">
        <ul>
          {templates.map((template: any, index: number) => (
            <li key={index}>
              <div className="template_container">
                <button
                  data-id={index}
                  onClick={handleChange}
                  style={
                    template.theme.type === "plain"
                      ? {
                          background: template.theme.background,
                          color: template.theme.text
                        }
                      : {
                          backgroundImage: `url('../../${template.theme.background}')`,
                          color: template.theme.text,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center"
                        }
                  }
                >
                  {selectedTheme._id === template._id && (
                    <span
                      style={{
                        background: "#b85ef4",
                        color: "#fff",
                        position: "absolute",
                        right: "9px",
                        top: "10px",
                        fontSize: "11px",
                        borderRadius: "3px",
                        padding: " 2px 5px"
                      }}
                    >
                      Selected
                    </span>
                  )}

                  <span style={{ color: template.theme.labelColor }}>
                    Question
                  </span>
                  <span
                    className="answer"
                    style={{ color: template.theme.inputColor }}
                  >
                    Answer
                  </span>
                  <span
                    className="btn"
                    style={{ background: template.theme.buttonColor }}
                  ></span>
                </button>
                <div className="template-detail">
                  <div className="detail">
                    <p>{template.name}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Templates;
