const user = require("../../execute/user");
const general = require("../general/general");
const body = require("./BodyJson");
function IfResolveBody() {
  var resultBody;
  if (user.permissions == "Todas") resultBody = body.todas;

  if (user.permissions == "Operação de Crédito") resultBody = body.ope_credito;

  if (user.permissions == "Informações Complementares")
    resultBody = body.info_complementares;

  if (user.permissions == "Dados Cadastrais")
    resultBody = body.dados_cadastrais;

  if (user.permissions == "Dados Cadastrais e Informações complementares")
    resultBody = body.dados_e_infor;

  if (user.permissions == "Dados da conta") resultBody = body.dados_conta;

  if (user.permissions == "Operação de Credito | Cartão de crédito")
    resultBody = body.ope_credito_cartao_credit;

  return resultBody;
}

function IfResolveEnvrironment() {
  var urlBase;
  if (user.environment.toLowerCase() == "TH".toLowerCase())
    urlBase = general.env_TH;

  if (user.environment.toLowerCase() == "TU".toLowerCase())
    urlBase = general.env_TU;

  if (user.environment.toLowerCase() == "TI".toLowerCase())
    urlBase = general.env_TI;

  return urlBase;
}

function IfResolveAud() {
  var urlBase;
  if (user.environment.toLowerCase() == "TH".toLowerCase())
    urlBase = general.aud_TH;

  if (user.environment.toLowerCase() == "TU".toLowerCase())
    urlBase = general.aud_TU;

  if (user.environment.toLowerCase() == "TI".toLowerCase())
    urlBase = general.aud_TI;

  return urlBase;
}
function IfResolveHosts() {
  var urlBase;
  if (user.environment.toLowerCase() == "TH".toLowerCase())
    urlBase = general.host_TH;

  if (user.environment.toLowerCase() == "TU".toLowerCase())
    urlBase = general.host_TU;

  if (user.environment.toLowerCase() == "TI".toLowerCase())
    urlBase = general.host_TI;

  return urlBase;
}
function Hour() {
  function zero(value) {
    if (value < 9) return "0" + value;
    else return value;
  }

  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1;
  var ano = dataAtual.getFullYear();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var seconds = dataAtual.getSeconds();

  var date_full =
    zero(dia) +
    "/" +
    zero(mes) +
    "/" +
    ano +
    "  " +
    zero(horas) +
    ":" +
    zero(minutos) +
    ":" +
    zero(seconds);

  return date_full;
}

module.exports = {
  IfResolveBody,
  IfResolveEnvrironment,
  IfResolveAud,
  IfResolveHosts,
  Hour,
};
