import React, { useEffect, useState } from "react";
import ResultsWrapper from "./resultsWrapper";
import { getResults } from "../../../utils";
import Loading from "../../../components/loading";
import Result from "../result";

const ResultsLogic: React.FC<any> = ({ formId }) => {
  const [results, setResults]: any = useState(null);
  useEffect(() => {
    let current = true;
    if (current) {
      getResults(formId)
        .then((res: any) => {
          setResults(res.data);
        })
        .catch(err => {
          setResults({});
          console.log(err.message);
        });
    }
    return () => {
      current = false;
    };
  }, [formId]);
  if (!results) return <Loading />;
  return <ResultsWrapper results={results} setResults={setResults} />;
};

// Decides which component to render between results paage or result page
const Results: React.FC<any> = ({ formId, resultId }) => {
  return resultId ? <Result resultId = {resultId}/> : <ResultsLogic formId = {formId} />;
};
export default Results;
