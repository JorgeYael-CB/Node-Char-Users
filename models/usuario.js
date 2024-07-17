const { Schema, model } = require('mongoose')



const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  online: {
    type: Boolean,
    default: false,
  },
});


UsuarioSchema.method('toJSON', function() {
  const { _id, __v, password, ...obj } = this.toObject();
  obj.uid = _id;
  return obj;
})



module.exports = model('Usuario', UsuarioSchema);