const getTimestamp = () => new Date(new Date().toUTCString());

const checkViewcodKeys = (error) => {
    const expectedKeys = [
      'status',
      'type',
      'title',
      'detail',
      'timestamp',
      'userMessage'
    ];
    const keys = Object.keys(error);
    let is = true;
    expectedKeys.forEach((k) => {
      if (!keys.includes(k)) is = false;
    });
    if (is) return true;
    return false;
  };

  const errors = {
    'ms-program-cashback/internal-server-error': {
      status: 500,
      type: 'outros-erros',
      title: 'Erro interno do servidor.',
      detail: 'Sem detalhes.',
      userMessage: 'Tente novamente mais tarde.',
    },
    'ms-program-cashback/validation': {
      status: 400,
      type: 'erro-de-cliente',
      title: 'Requisição inválida.',
      detail: 'Parâmetros incorretos.',
      userMessage: 'Parâmetros incorretos.',
    },
    'ms-program-cashback/search-program': {
      status: 400,
      type: 'erro-de-cliente',
      title: 'Requisição inválida.',
      detail: 'Parâmetros incorretos.',
      userMessage: 'Parâmetros incorretos.',
    },
    'ms-program-cashback/create-program': {
      status: 400,
      type: 'erro-de-inclusao',
      title: 'Requisição inválida.',
      detail: 'Parâmetros incorretos.',
      userMessage: 'Não é permito a inclusão do programa com outro ativo para o mesmo periodo.',
    },
    'ms-program-cashback/update-program': {
      status: 400,
      type: 'erro-de-alteracao',
      title: 'Requisição inválida.',
      detail: 'Parâmetros incorretos.',
      userMessage: 'Não é permito a alteração do programa com outro ativo para o mesmo periodo.',
    },
    'ms-program-cashback/cash-program': {
      status: 400,
      type: 'erro-de-pesquisa',
      title: 'Requisição inválida.',
      detail: 'Parâmetros incorretos.',
      userMessage: 'Não existe cashBack ativo para a data atual.',
    },
    'ms-program-cashback/invalid-token': {
      status: 400,
      type: 'erro-de-token',
      title: 'Requisição inválida.',
      detail: 'Parâmetros incorretos.',
      userMessage: 'Token inválido',
    },
    'ms-program-cashback/invalid-user': {
      status: 400,
      type: 'erro-de-usuario',
      title: 'Requisição inválida.',
      detail: 'Parâmetros incorretos.',
      userMessage: 'Usuario inválido',
    },



  };

  const getError = (req, errorCode, fields) => {
    const codError = checkViewcodKeys(errorCode || {});
    if (codError) return errorCode;
  
    const keys = Object.keys(errors);
    let code = `${process.env.SERVICE_NAME}/internal-server-error`;
  
    if (keys.includes(errorCode.code)) {
      code = errorCode.code;
    } else if (keys.includes(errorCode.message)) {
      code = errorCode.message;
    } else if (!(errorCode instanceof Error) && keys.includes(errorCode)) {
      code = errorCode;
    } else {
      code = `${process.env.SERVICE_NAME}/internal-server-error`;
    }

    const timestamp = getTimestamp();
    const e = { ...errors[code] };
    if (!keys.includes(errorCode.message)) e.userMessage = errorCode.message;
  
    Object.assign(e, { timestamp });
    if (fields) Object.assign(e, { fields });
  
    return e;
  };

  const generateErrorObject = (error) => {
    const e = new Error(error);
    e.code = error;
    e.type = error;
    return e;
  };


  export {
    getError,
    generateErrorObject
  }