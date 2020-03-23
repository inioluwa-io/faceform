import React, { useContext, useEffect, useState } from "react";
import Forms from "../../../components/form";
import { FormContext } from "../../../context/formContext";
import { getPublish } from "../../../utils";
import Loading from "../../../components/loading";

const Publish: React.FC<any> = ({ match }) => {
  const formId = match.params.id;
  const { setForm, form }: any = useContext(FormContext);
  const [error, setError] = useState("");

  useEffect(() => {
    let current = true;
    if (current) {
      getPublish(formId)
        .then(res => {
          setForm(res.data.form_id);
        })
        .catch(err => {
          setError("Faceform does not exist");
          setForm({});
        });
    }
    return () => {
      current = false;
    };
  }, [formId, setForm]);

  if (!form) return <Loading/>;
  if (error.length > 0) return <>{error}</>;
  // return <>flf</>;
  return <Forms env = "production" />;
};
export default Publish;
