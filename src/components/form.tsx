import React, { useState, useEffect, useCallback, useContext } from "react";
import "../styles/components/form.scss";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight, mdiArrowRight } from "@mdi/js";
import { FormContext } from "../context/formContext";

const Forms: React.FC<any> = ({ items, template }) => {
  const { form }: any = useContext(FormContext);
  template = form.template_id;
  items = form.form;


  const [page, setPage] = useState(1);
  const animate = useCallback(
    (index: number = 1) => {
      const form: any = document.querySelector("#faceform_");
      form.style.transform = `translateY(-${100 * (index - 1)}%)`;
      const pages: any = form.querySelectorAll(".form-group");
      for (let i = 0; i < items.length; i++) {
        pages[i].style.opacity = 0;
      }
      pages[index - 1].style.opacity = 1;
    },
    [items.length]
  );

  useEffect(() => {
    let currentState = true;
    if (currentState) {
      animate();
    }
    return () => {
      currentState = false;
    };
  }, [animate]);

  const next = () => {
    if (page < items.length) {
      setPage(page + 1);
      animate(page + 1);
    }
  };

  const back = () => {
    if (page > 1) {
      setPage(page - 1);
      animate(page - 1);
    }
  };

  return (
    <div
      id="faceform_container"
      style={
        template.theme.type !== "image"
          ? {
              background: template.theme.background
            }
          : {
              backgroundImage: `url('../../${template.theme.background}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
      }
    >
      <div className="faceform_carousel">
        <div className="pagination">
          <span
            style={{
              color: template.theme.labelColor
            }}
          >
            {page}
          </span>
          <Icon
            path={mdiArrowRight}
            size={0.6}
            color={template.theme.labelColor}
          />
        </div>
        <form id="faceform_">
          {items.map((item: any, index: number) => (
            <div className="form-group" key={index}>
              <div className="form-control" key={index}>
                <label
                  htmlFor={`faceform_${index}`}
                  style={{
                    color: template.theme.labelColor,
                    fontFamily: template.theme.fontFamily
                  }}
                >
                  {item.label}
                </label>
                <input
                  placeholder={item.placeholder}
                  id={`faceform_${index}`}
                  style={{
                    color: template.theme.inputColor,
                    fontFamily: template.theme.fontFamily
                  }}
                />
              </div>
            </div>
          ))}
        </form>
      </div>
      <div className="controls">
        <button
          type="button"
          style={{ background: template.theme.buttonColor }}
          onClick={() => {
            back();
          }}
        >
          <Icon
            path={mdiChevronLeft}
            color={template.theme.buttonText}
            size={0.9}
          />
        </button>
        <button
          className={page === items.length ? "go right" : "right"}
          type="button"
          style={{ background: template.theme.buttonColor }}
          onClick={() => {
            next();
          }}
        >
          <span style={{ color: template.theme.buttonText }}>Go</span>
          <Icon
            path={mdiChevronRight}
            color={template.theme.buttonText}
            size={0.9}
          />
        </button>
      </div>
      <span className="badge">
        Powered by <strong>Faceform</strong>
      </span>
    </div>
  );
};
export default Forms;
