import React from "react";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";
import { mdiFormatPaint, mdiWater, mdiGraphOutline } from "@mdi/js";

const Navigation: React.FC<any> = ({ formId }) => {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to={`/create/${formId}/form`} activeClassName="active">
              <Icon path={mdiFormatPaint} color="#777" size={1} />
            </NavLink>
          </li>
          <li>
            <NavLink to={`/create/${formId}/design`} activeClassName="active">
              <Icon path={mdiWater} color="#777" size={1} />
            </NavLink>
          </li>
          <li>
            <NavLink to={`/create/${formId}/result`} activeClassName="active">
              <Icon path={mdiGraphOutline} color="#777" size={1} />
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  export default Navigation;