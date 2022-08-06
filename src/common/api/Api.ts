import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8080";

interface ApiProperties {
  url: string;
  type?: string;
  param?: any;
  contentType?: string;
  token?: any;
}

const Api = ({
  url,
  type = "GET",
  param,
  contentType = "application/json",
  token,
}: ApiProperties) => {
  const headers = {
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
    "Access-Control-Allow-Headers":
      "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization",
    Authorization: token,
  };

  return Axios({
    method: type,
    url: `${url}`,
    headers,
    data: param,
  });
};

export default Api;
