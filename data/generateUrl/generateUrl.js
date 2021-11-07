const { IfResolveAud, IfResolveEnvrironment } = require("../utils/ifRequests");
const httpsAgent = require("../utils/data");
const general = require("../general/general");

function RequestGenerateUrl(consent) {
  var genurl = {
    client_id: "2d3d7e39-a219-49f1-bef6-9e673b6106aa",
    consent_id: consent,
    redirect_uri: "https://www.bradesco.com.br/mock1",
    brand: "bradesco",
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
