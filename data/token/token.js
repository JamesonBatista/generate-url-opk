const general = require("../general/general");
const httpsAgent = require("../utils/data");
const {
  IfResolveHosts,
  IfResolveEnvrironment,
  IfClient_Id,
} = require("../utils/ifRequests");

const optionRequest = {
  host: IfResolveHosts(),
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  followAllRedirects: true,
  agent: httpsAgent,
  url: IfResolveEnvrironment() + general.endpoint_token,
  form: {
    client_id: IfClient_Id(),
    grant_type: "client_credentials",
    scope: "consents openid",
  },
};

module.exports = { optionRequest };
