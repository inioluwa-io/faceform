import React from "react";
import "../../../styles/components/results.scss";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { firstToUpperCase } from "../../../utils/string";

interface IResult {
  viewed: string;
  _id: string;
  items: any[];
  form_id: string;
  user_id: string;
}
interface IResultWrapper {
  result: IResult;
}

const ResultWrapper: React.FC<any> = ({ result }: IResultWrapper) => {
  return (
    <div id="results">
      <div className="results_container">
        <header>
          <h1>Results</h1>
        </header>
        <div className="container" id="result_panel">
          <div id="back-btn">
            <button
              onClick={() => {
                window.history.back();
              }}
            >
              <Icon path={mdiChevronLeft} color="#333" size={1} />
            </button>
          </div>
          <div className="result_">
            <div className="row">
              <ul>
                {result.items.map((item: any, index: number) => (
                  <li key={index}>
                    <h3>{item.question}</h3>
                    <p>{firstToUpperCase(item.answer)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultWrapper;
