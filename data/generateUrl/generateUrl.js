const {
  IfResolveAud,
  IfResolveEnvrironment,
  IfClient_Id,
} = require("../utils/ifRequests");
const httpsAgent = require("../utils/data");
const general = require("../general/general");
const user = require("../../execute/user");

function RequestGenerateUrl(consent) {
  var genurl = {
    client_id: IfClient_Id(),
    consent_id: consent,
    redirect_uri: "https://www.bradesco.com.br/mock1",
    brand: user.TPP.toLowerCase(),
    aud: IfResolveAud(),
  };
  var requestOptions = {
    method: "GET",
    headers: genurl,
    followAllRedirects: true,
    agent: httpsAgent,
    url: IfResolveEnvrironment() + general.endpoint_generateUrl,
  };

  return requestOptions;
}

module.exports = { RequestGenerateUrl };
