const validator = require("validator").default;

function validateSignup(rq, rs, next) {
  const { username, email, password } = rq.body;

  if (username === undefined) {
    return rs.send("ID");
  }
  if (validator.isEmpty(username)) {
    return rs.send("ID");
  }
  if (!validator.isLength(username, { min: 5, max: 16 })) {
    return rs.send("ID");
  }
  if (!validator.isAlphanumeric(username)) {
    return rs.send("ID");
  }

  if (email === undefined) {
    return rs.send("ID");
  }
  if (validator.isEmpty(email)) {
    return rs.send("ID");
  }
  if (!validator.isEmail(email)) {
    return rs.send("ID");
  }

  //cambiar las opciones añadiendo el returnScore que se muestre el puntaje de la contraseña en el frontend
  if (password === undefined) {
    return rs.send("ID");
  }
  if (validator.isEmpty(password)) {
    return rs.send("ID");
  }
  if (!validator.isLength(password, { max: 16 })) {
    return rs.send("ID");
  }
  let optionsValidatorPassword = {
    minLength: 8,
    minUppercase: 1,
    minNumbers: 1,
    minLowercase: 1,
    minSymbols: 0,
  };
  if (!validator.isStrongPassword(password, optionsValidatorPassword)) {
    return rs.send("ID");
  }

  next();
}

function validateLogin(rq, rs, next) {
  const { email, password } = rq.body;

  if (email === undefined) {
    return rs.send("ID");
  }
  if (validator.isEmpty(email)) {
    return rs.send("ID");
  }
  if (!validator.isEmail(email)) {
    return rs.send("ID");
  }

  //cambiar las opciones añadiendo el returnScore que se muestre el puntaje de la contraseña en el frontend
  if (password === undefined) {
    return rs.send("ID");
  }
  if (validator.isEmpty(password)) {
    return rs.send("ID");
  }
  if (!validator.isLength(password, { max: 16 })) {
    return rs.send("ID");
  }
  let optionsValidatorPassword = {
    minLength: 8,
    minUppercase: 1,
    minNumbers: 1,
    minLowercase: 1,
    minSymbols: 0,
  };
  if (!validator.isStrongPassword(password, optionsValidatorPassword)) {
    return rs.send("ID");
  }

  next();
}

function validateDeleteAccount(rq, rs, next) {
  const { sessionid } = rq.body;

  if (sessionid === undefined) {
    return rs.send("ID");
  }
  if (!validator.isJWT(sessionid)) {
    return rs.send("ID");
  }

  next();
}

module.exports = { validateSignup, validateLogin, validateDeleteAccount };
