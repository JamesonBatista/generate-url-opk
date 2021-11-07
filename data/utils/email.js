const user = require("../../execute/user");
const { rootEmail, password } = require("../../root");
const general = require("../general/general");

const SendToEmail = (message, i, hour) => {
  var urlBase;
  if (user.environment.toLowerCase() == "TH".toLowerCase())
    urlBase = general.concatUrl_TH;

  if (user.environment.toLowerCase() == "TU".toLowerCase())
    urlBase = general.concatUrl_TU;

  if (user.environment.toLowerCase() == "TI".toLowerCase())
    urlBase = general.concatUrl_TI;

  var nodemailer = require("nodemailer");
  var smtpTransport = require("nodemailer-smtp-transport");

  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: rootEmail,
        pass: password,
      },
    })
  );
  var title =
    "Env: " +
    user.environment +
    " | " +
    "Permissão: " +
    user.permissions +
    " | " +
    "User: " +
    user.user +
    " | " +
    "CPF: " +
    user.cpf +
    " |  Envio: " +
    hour +
    " | E-mail: " +
    i;
  var mailOptions = {
    from: "cittestsendemail@gmail.com",
    to: user.email,
    subject: title,
    text: urlBase + message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("*****  OK -  " + i + "  ******\n");
    }
  });
};

module.exports = SendToEmail;
