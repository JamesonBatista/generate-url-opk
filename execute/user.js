const permissions = require("../data/utils/permissions");
const env = require("../data/utils/Environments");
module.exports = {
  cpf: "61753453550",
  user: "Jam",
  email: "cittestsendemail@gmail.com",
  environment: env.TH,
  permissions: permissions.todas,
  quantity: 2,
};

// module.exports = {
//   cpf: "669519316-90",
//   user: "Mari",
//   email: "mariana.oapi@gmail.com, vila.altarenda.dcd@icloud.com",
//   environment: env.TH,
//   permissions: permissions.todas,
//   quantity: 3,
// };

// cpf: "61753453550",                      ->       CPF com ou sem pontos o próprio programa irá formatar automaticamente
// user: "Jam",                             ->       Nome para quem vai a URL gerada
// email: "cittestsendemail@gmail.com",     ->       E-mail para qual será enviado a URL
// environment: env.TH,                     ->       Ambiente de execução que pode ser escoliho dentre TH, TU, TI
// permissions: permissions.todas,          ->       As permissões que serão atribuídas ao consentimento para mudar basta apagar o * .todas * colocar . e irá aparecer
//                                                   outras opções.
// quantity: 3,                             ->       Quantidade de e-mails que serão enviados, podendo quer qualquer valor
