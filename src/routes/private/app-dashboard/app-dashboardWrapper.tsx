import React, { useState, useEffect, useContext } from "react";
import Icon from "@mdi/react";
import { mdiPlus, mdiDeleteOutline } from "@mdi/js";
import "./style.scss";
import { FormContext } from "../../../context/formContext";
import { SaveContext } from "../../../context/saveContext";

const AppDashboardWrapper: React.FC<any> = ({ items, formId }) => {
  const { form, saveForm }: any = useContext(FormContext);
  const { setSaveStatus }: any = useContext(SaveContext);
  const [formData, setFormData] = useState(form.form);
  const [inputChange, setinputChange] = useState(false);

  // Control steps in the page
  useEffect(() => {
    document
      .querySelectorAll(".create .form-group")[0]
      ?.classList.add("active");
  }, []);

  // This handles onChange event for each input field
  const setData = (e: any): void => {
    setinputChange(true);
    const _temp = [...formData];
    _temp[e.target.dataset.id].label = e.target.value;
    setFormData([..._temp]);
  };

  const addNewPage = (e: any): void => {
    setinputChange(true);
    const _temp = [...formData];
    const target: any =
      e.target.dataset.id ||
      e.target.parentElement.dataset.id ||
      e.target.parentElement.parentElement.dataset.id;
    const _prevInputData = _temp[target];
    _temp.splice(target + 1, 0, { ..._prevInputData });
    setFormData([..._temp]);
    // console.log(_te)
    // saveForm([..._temp], formId);
  };

  const setActive = (e: any): void => {
    const _allContainers: any = document.querySelectorAll(
      ".create .form-group"
    );
    const _container: HTMLElement =
      e.target.parentElement.parentElement.parentElement;
    for (let i: number = 0; i < _allContainers.length; i++) {
      _allContainers[i].classList.remove("active");
    }
    _container.classList.add("active");
  };

  const deleteNewPage = (e: any): void => {
    setSaveStatus(false);
    if (formData.length > 1) {
      const _temp = [...formData];
      _temp.splice(e.target.parentElement.parentElement.dataset.id, 1);
      saveForm([..._temp], formId);
    }
  };
  const save = () => {
    try {
      saveForm(formData, formId);
      alert("Successfully Saved!!!");
      setinputChange(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="create">
      <form>
        {formData.map((item: any, index: number) => (
          <div className="form-group" key={index}>
            <div className="form-input">
              <span className="badge" style={{ background: "cadetblue" }}>
                {index + 1}
              </span>
              <div className="form-control">
                <textarea
                  rows={3}
                  cols={10}
                  maxLength={100}
                  name={`form_${index}`}
                  data-id={index}
                  onChange={setData}
                  onFocus={setActive}
                  id={`form_${index}`}
                  value={item.label}
                ></textarea>
                <div className="ctrl-btn">
                  {formData.length > 1 && (
                    <button
                      type="button"
                      data-id={index}
                      onClick={deleteNewPage}
                      className="btn delete-btn"
                    >
                      <Icon path={mdiDeleteOutline} color="#999" size={0.9} />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <button
              data-id={index}
              type="button"
              className="add-btn btn"
              onClick={addNewPage}
            >
              <Icon path={mdiPlus} color="#444" size={0.8} />
            </button>
          </div>
        ))}
        {inputChange && (
          <button id="save" onClick={save} className="btn btn-sm btn-dark">
            Save
          </button>
        )}
      </form>
    </div>
  );
};
export default AppDashboardWrapper;
