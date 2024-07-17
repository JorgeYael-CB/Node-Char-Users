const { response, request } = require("express");
const { validationResult } = require("express-validator");



const crearUsuario = async( req = request, res = response ) => {
  res.json('Creando usuario');
}


const login = async( req = request, res = response ) => {
  const errores = validationResult(req);
  if( !errores.isEmpty() ) return res.status(401).json({errores: errores.errors, status: 401});

  const {email, password} = req.body;


  res.json({email, password});
}


const renewToken = async( req = request, res = response ) => {
  res.json('Renew token');
}




module.exports = {
  crearUsuario,
  login,
  renewToken,
};