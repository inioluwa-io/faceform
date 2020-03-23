import React, { useEffect, useState } from "react";
import ResultWrapper from "./resultWrapper";
import { updateResult } from "../../../utils";
import Loading from "../../../components/loading";

const Result: React.FC<any> = ({ resultId }) => {
  const [result, setResult]: any = useState(null);

  // Set viewed to 1 and get results
  useEffect(() => {
    let current = true;
    if (current) {
      updateResult({ viewed: "1" }, resultId)
        .then((res: any) => {
          setResult(res.data.data);
        })
        .catch((err: any) => {
          console.warn(err);
        });
    }
    return () => {
      current = false;
    };
  }, [resultId]);
  if (!result) return <Loading />;
  return <ResultWrapper resultId={resultId} result = {result} />;
};
export default Result;
