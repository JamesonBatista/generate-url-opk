## Instruções:

### Pré-requisitos:

NodeJs (para verificar se tem o Node instalado, no terminal ou cmd execute *node --version* deve retornar a versão, caso não baixar no Google)

### Como executar:

    Abrir o projeto no VsCode, na linda de comando executar *npm i*  para instalar as dependências.

### Alterando dados de geração URL:

    Dentro da pasta execute/user.js existem alguns campos:

            cpf: "61753453550",                      ->       CPF com ou sem pontos o próprio programa irá formatar automaticamente
            user: "Jam",                             ->       Nome para quem vai a URL gerada
            email: "cittestsendemail@gmail.com",     ->       E-mail para qual será enviado a URL
            environment: env.TH,                     ->       Ambiente de execução que pode ser escoliho dentre TH, TU, TI
            permissions: permissions.todas,          ->       As permissões que serão atribuídas ao consentimento para mudar basta apagar o * .todas * colocar . e irá aparecer
                                                              outras opções.
            quantity: 3,                             ->       Quantidade de e-mails que serão enviados, podendo quer qualquer valor
