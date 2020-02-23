import React from "react";
import "../styles/components/template.scss";

const Templates: React.FC<any> = ({ templates, selectedTheme = null }) => {
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
                  style={
                    template.theme.type === "plain"
                      ? {
                          background: template.theme.background,
                          color: template.theme.text
                        }
                      : {
                          backgroundImage: `url('../../${template.theme.background}')`,
                          color: template.theme.text,
                          backgroundSize:"cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center"
                        }
                  }
                >
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
