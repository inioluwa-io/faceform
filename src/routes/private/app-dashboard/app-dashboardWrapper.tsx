import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiPlus, mdiDeleteOutline } from "@mdi/js";
import "./style.scss";

const AppDashboardWrapper: React.FC<any> = ({ items }) => {
  const [formData, setFormData] = useState(items);

  // Control steps in the page
  useEffect(() => {
    document.querySelector(".create .form-group")?.classList.add("active");
  }, []);

  // This shows the current page of form and saves the form

  const setData = (e: any): void => {
    const _temp = [...formData];
    _temp[e.target.dataset.id].label = e.target.value;
    setFormData(_temp);
  };

  const addNewPage = (e: any): void => {
    const _temp = [...formData];
    const _prevInputData = _temp[e.target.dataset.id];
    _temp.splice(e.target.dataset.id + 1, 0, { ..._prevInputData });
    setFormData([..._temp]);
  };

  const setActive = (e: any): void => {
    const _allContainers: any = document.querySelectorAll(
      ".create .form-group"
    );
    const _container: HTMLElement = e.target.parentElement.parentElement.parentElement;
    for (let i: number = 0; i < _allContainers.length; i++) {
      _allContainers[i].classList.remove("active");
    }
    _container.classList.add("active");
  };

  const deleteNewPage = (e: any): void => {
    if (formData.length > 1) {
      const _temp = [...formData];
      console.log(e.target.parentElement.parentElement.dataset.id);
      _temp.splice(e.target.parentElement.parentElement.dataset.id, 1);
      setFormData([..._temp]);
    }
  };
  const getRandomColor = (): string => {
    const _char = "ABCDEF0123456789";
    let result = "#";

    for (let i = 0; i < 6; i++) {
      result += _char[Math.floor(Math.random() * _char.length)];
    }
    return result + "aa";
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
      </form>
    </div>
  );
};
export default AppDashboardWrapper;