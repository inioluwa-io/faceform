import React, { useEffect } from "react";
import "../styles/components/workspace.scss";
import Icon from "@mdi/react";
import { mdiPlus, mdiDotsHorizontal } from "@mdi/js";
import { Link } from "react-router-dom";

const Workspaces: React.FC<any> = ({ workspaces }) => {
  useEffect(() => {
    let current = true;
    if (current) {
      const _morebuttons: any = document.querySelectorAll(
        ".template-detail button"
      );
      const _workspaces = document.querySelectorAll(".idx");
      window.addEventListener("click", (e: any) => {
        for (let i = 0; i < _morebuttons.length; i++) {
          if (!_morebuttons[i].contains(e.target)) {
            _workspaces[i].classList.remove("active");
          }
        }
      });
      for (let i = 0; i < _morebuttons.length; i++) {
        _morebuttons[i].addEventListener(
          "click",
          (e: any) => {
            const id =
              e.target.dataset.id ||
              e.target.parentElement.dataset.id ||
              e.target.parentElement.parentElement.dataset.id;
            for (let i = 0; i < _workspaces.length; i++) {
              if (i !== +id) {
                _workspaces[i].classList.remove("active");
              }
            }
            const _element: any = document.querySelector(`.idx_${id}`);
            if (_element.classList.contains("active")) {
              _element.classList.remove("active");
            } else {
              _element.classList.add("active");
            }
          },
          false
        );
      }
    }

    return () => {
      current = false;
    };
  }, []);
  return (
    <div className="workspaces">
      <div className="container">
        <ul className="workspace">
          <li>
            <div className="workspace_container">
              <button id="add_new_form">
                <Icon path={mdiPlus} color="#fff" size={1.5} />
                <span>New faceform</span>
              </button>
            </div>
          </li>
          {workspaces.map((workspace: any, index: number) => (
            <li key={index} className={`idx_${index} idx`}>
              <div className="workspace_container">
                <Link
                  to={"create/abcdef/form"}
                  style={
                    workspace.theme.type === "plain"
                      ? {
                          background: workspace.theme.background,
                          color: workspace.theme.text
                        }
                      : {
                          backgroundImage: `url('../../${workspace.theme.background}')`,
                          color: workspace.theme.text,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center"
                        }
                  }
                >
                  <span style={{ color: workspace.theme.labelColor }}>
                    {workspace.name}
                  </span>
                </Link>
                <div className="template-detail">
                  <div className="detail">
                    <p>
                      {workspace.response.total} response
                      {workspace.response.total > 1 ? "s" : ""}
                    </p>
                  </div>
                  <button data-id={index}>
                    <Icon path={mdiDotsHorizontal} size={0.8} color="#444" />
                  </button>
                </div>
              </div>
              <div className="more-options">
                <ul>
                  <li>
                    <Link to={`publish/${workspace.id}`}>Preview</Link>
                  </li>
                  <li>
                    <Link to={`create/abcdef/result/`}>Results</Link>
                  </li>
                  <li>
                    <button>Delete</button>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Workspaces;
