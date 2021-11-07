var request = require("request");
const { RequestConsent } = require("./data/consentimento/consent");
const { RequestGenerateUrl } = require("./data/generateUrl/generateUrl");
const { optionRequest } = require("./data/token/token");
const SendToEmail = require("./data/utils/email");
const { Hour } = require("./data/utils/ifRequests");
const user = require("./execute/user");

console.log("\n***********************************************");
console.log("Ambiente:             " + user.environment);
console.log("Body permission:      " + user.permissions);
console.log("User send:            " + user.user);
console.log("E-mail:               " + user.email);
console.log("***********************************************\n");

for (let i = 1; i < user.quantity + 1; i++) {
  request.post(optionRequest, (error, response, body) => {
    var obj = JSON.parse(body);
    request.post(RequestConsent(obj.access_token), (error, response, body) => {
      var consents = JSON.parse(body);
      request.post(
        RequestGenerateUrl(consents.data.consentId),
        (error, response, body) => {
          var json = JSON.parse(body);
          let uri = json.uri.substring(31);
          let uriReplace = uri.replaceAll(" ", "%20");
          SendToEmail(uriReplace, i, Hour());
        }
      );
    });
  });
}
