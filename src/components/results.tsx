import React, { useEffect, useState } from "react";
import "../styles/components/workspace.scss";
import Icon from "@mdi/react";
import { mdiDotsHorizontal } from "@mdi/js";
import Loading from "./loading";
import { delResult } from "../utils";
import { Link } from "react-router-dom";

const Results: React.FC<any> = ({ results, setResults }) => {
  const [savingStatus] = useState(false);
  useEffect(() => {
    let current = true;
    if (current) {
      const _morebuttons: any = document.querySelectorAll(
        ".template-detail button"
      );
      const _results = document.querySelectorAll(".idx");
      window.addEventListener("click", (e: any) => {
        for (let i = 0; i < _morebuttons.length; i++) {
          if (!_morebuttons[i].contains(e.target)) {
            _results[i].classList.remove("active");
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
            for (let i = 0; i < _results.length; i++) {
              if (i !== +id) {
                _results[i].classList.remove("active");
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

  const del = async (id: string | number, arrIndex: number) => {
    try {
      await delResult(id);
      const _temp = [...results];
      _temp.splice(arrIndex, 1);
      setResults(_temp);
      alert("Successfully Deleted!!")
    } catch (err) {
      console.warn(err);
    }
  };

  if (savingStatus) return <Loading />;

  return (
    <div className="workspaces">
      <div className="container">
        <ul className="workspace">
          {results.map((result: any, index: number) => (
            <li key={index} className={`idx_${index} idx`}>
              <div className="workspace_container">
                <Link style={{ background: "#fff" }} to={`/create/${result.form_id._id}/result/${result._id}`}>
                  <span
                    style={{
                      color: "#333"
                    }}
                  >
                    {result.items[0].answer}
                  </span>
                </Link>
                <div className="template-detail">
                  <div className="detail">
                    <p>{result.viewed === "0" ? "not viewed" : "viewed"}</p>
                  </div>
                  <button data-id={index}>
                    <Icon path={mdiDotsHorizontal} size={0.8} color="#444" />
                  </button>
                </div>
              </div>
              <div className="more-options">
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        del(result._id, index);
                      }}
                    >
                      Delete
                    </button>
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
export default Results;
