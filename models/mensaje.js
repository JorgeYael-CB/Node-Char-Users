const { Schema, model } = require('mongoose')



const MensajeSchema = new Schema({
  de: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },

  para: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },

  mensaje: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // le agrega la fecha de modificacion y creacion automaticamente
});


MensajeSchema.method('toJSON', function() {
  const { __v, ...obj } = this.toObject();
  return obj;
})



module.exports = model('Mensaje', MensajeSchema);