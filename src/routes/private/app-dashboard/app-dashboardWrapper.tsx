import React, { useState, useEffect, useContext } from "react";
import Icon from "@mdi/react";
import { mdiPlus, mdiDeleteOutline } from "@mdi/js";
import "./style.scss";
import { FormContext } from "../../../context/formContext";

const AppDashboardWrapper: React.FC<any> = ({ items, formId }) => {
  const { form, saveForm }: any = useContext(FormContext);
  const [formData, setFormData] = useState(form.form);
  const [saving, setSaving] = useState(false);

  // Control steps in the page
  useEffect(() => {
    document
      .querySelectorAll(".create .form-group")[0]
      ?.classList.add("active");
  }, []);

  // This shows the current page of form and saves the form

  const setData = (e: any): void => {
    const _temp = [...formData];
    _temp[e.target.dataset.id].label = e.target.value;
    setFormData(_temp);
  };

  const addNewPage = (e: any): void => {
    const _temp = [...formData];
    const target: any =
      e.target.dataset.id ||
      e.target.parentElement.dataset.id ||
      e.target.parentElement.parentElement.dataset.id;
    const _prevInputData = _temp[target];
    _temp.splice(target + 1, 0, { ..._prevInputData });
    setFormData([..._temp]);
    saveForm([..._temp], formId);
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
    if (formData.length > 1) {
      const _temp = [...formData];
      _temp.splice(e.target.parentElement.parentElement.dataset.id, 1);
      saveForm([..._temp], formId);
    }
  };
  const save =  () => {
    setSaving(true);
    const res = saveForm(formData, formId);
    if (!res) {
      console.warn("Could not save form");
    }
    setSaving(false);
  };

  return (
    <div className="create">
      {saving && <h3>Saving</h3>}
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
      </form>
      <button id="save" onClick={save} className="btn btn-sm btn-dark">
        Save
      </button>
    </div>
  );
};
export default AppDashboardWrapper;
