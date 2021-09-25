var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ComercioSchema = new Schema({
    nombre:String,
    direccion:String,
    telefono:String
})

ComercioSchema.statics.Constructor=function(nombre,direccion,telefono){
    return new this({
        nombre:nombre,
        direccion:direccion,
        telefono:telefono
    })
}

ComercioSchema.statics.listado = function(cb){
    return this.find({},cb);
}

ComercioSchema.statics.buscar = function (prop, value, cb) {
    return this.find({ [prop]: value }, cb)
}

ComercioSchema.statics.editar = function (id, comercio, cb) {
    return this.findByIdAndUpdate(id, { "$set": comercio }, { returnOriginal: false }, cb);
}

ComercioSchema.statics.eliminar = function (id, cb) {
    return this.findByIdAndDelete(id, {}, cb);

}

ComercioSchema.statics.guardar = function (nombre,direccion,telefono, comercio, cb) {
    return this.findByIdAndSave(nombre,direccion,telefono, { "$set": comercio }, { returnOriginal: false }, cb);
}
module.exports= mongoose.model('Comercio',ComercioSchema)