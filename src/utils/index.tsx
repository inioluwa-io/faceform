import axios from "axios";

const token = localStorage.getItem("access_token");

const headers = {
  Authorization: `${token}`,
  "Content-Type": "application/json"
};
// save the new request for cancellation
let _source: any = undefined;
const ENDPOINT_PREFIX = "http://localhost:8888/api/v1/";

export const addForm = async (data: any) => {
  if (typeof _source != typeof undefined) {
    _source.cancel("Operation canceled due to new request.");
  }
  _source = axios.CancelToken.source();
  return await axios({
    method: "post",
    url: `${ENDPOINT_PREFIX}form/add`,
    headers,
    cancelToken: _source.token,
    data
  });
};
export const updateForm = (data: any, id: string | number) => {
  if (typeof _source != typeof undefined) {
    _source.cancel("Operation cancelled due to new request.");
    // return ;
  }
  _source = axios.CancelToken.source();
  return axios({
    method: "put",
    url: `${ENDPOINT_PREFIX}form/update/${id}`,
    headers,
    cancelToken: _source.token,
    data
  });
};

export const getForm = (id: any) => {
  if (typeof _source != typeof undefined) {
    _source.cancel("Operation canceled due to new request.");
  }
  _source = axios.CancelToken.source();
  return axios.get(`${ENDPOINT_PREFIX}form/${id}`, {
    headers,
    cancelToken: _source.token
  });
};

export const addWorkspace = (data: any) =>
  axios({
    method: "post",
    url: `${ENDPOINT_PREFIX}workspace/add`,
    headers,
    data
  });

export const addPublish = (data: any) =>
  axios({
    method: "post",
    url: `${ENDPOINT_PREFIX}publish/add`,
    headers,
    data
  });

export const deleteWorkspace = (id: any) =>
  axios({
    method: "delete",
    url: `${ENDPOINT_PREFIX}workspace/delete/${id}`,
    headers
  });

export const getTemplates = () =>
  axios.get(`${ENDPOINT_PREFIX}template/`, { headers });

export const getPublish = (id: any) =>
  axios.get(`${ENDPOINT_PREFIX}publish/${id}`, { headers });

export const getWorkspaces = () =>
  axios.get(`${ENDPOINT_PREFIX}me/workspace`, { headers });
