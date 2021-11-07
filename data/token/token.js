const general = require("../general/general");
const httpsAgent = require("../utils/data");
const {
  IfResolveHosts,
  IfResolveEnvrironment,
} = require("../utils/ifRequests");

const optionRequest = {
  host: IfResolveHosts(),
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  followAllRedirects: true,
  agent: httpsAgent,
  url: IfResolveEnvrironment() + general.endpoint_token,
  form: {
    client_id: "2d3d7e39-a219-49f1-bef6-9e673b6106aa",
    grant_type: "client_credentials",
    scope: "consents openid",
  },
};

module.exports = { optionRequest };
