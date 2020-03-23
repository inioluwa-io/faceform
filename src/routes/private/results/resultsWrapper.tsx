import React from "react";
import "../../../styles/components/results.scss";
import Results from "../../../components/results";

const ResultsWrapper: React.FC<any> = ({ results, setResults }) => {

  return (
    <div id="results">
      <div className="results_container">
        <header>
          <h1>Results</h1>
        </header>
        <div className="container">
          <Results results={results} setResults = {setResults} />
        </div>
      </div>
    </div>
  );
};
export default ResultsWrapper;
