const { IfResolveBody, IfResolveEnvrironment } = require("../utils/ifRequests");
const httpsAgent = require("../utils/data");
const general = require("../general/general");

function RequestConsent(accessToken) {
  var requestOptions = {
    method: "POST",
    url: IfResolveEnvrironment() + general.endpoint_consents,
    headers: {
      "x-jws-signature": "xpto-123-abc-456",
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: IfResolveBody(),
    followAllRedirects: true,
    agent: httpsAgent,
  };
  return requestOptions;
}

module.exports = { RequestConsent };
