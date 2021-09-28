var mongoose = require('mongoose');
const comercio = require('../../models/comercio.js');
var Comercio = require('../../models/comercio.js')

const Clistado =  () => {
    try {
        const lista =  Comercio.listado()
        return lista.length;
    } catch (error) {
        return 0;
    }
}
const testFindById =  (id, done) => {
    const comercioDB =  Comercio.findById(id);
    expect(comercioDB).not.withContext('ID no encontrado').toBe();
    if (!comercioDB) { done() 
    
    }
    return 0;
}

describe('Test modelo Comercio', function(){

    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost/emprendeapp';
        mongoose.connect(mongoDB, {useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection_error'));
        db.once('open', function() {
            console.log('Conectado a MongoDB');
            done();
        });
    })
 
/*

    describe('GET',()=>{
        it('Busca por _id, nombre y direccion', (done) => {
                /////////////////// Campo para busqueda ///////////////////////////////
            Comercio.buscar('_id', '6152ade6d11dbbdf26eb6b0d', (error, lista) => {
                console.log(lista);
                expect(error).withContext('400 Bad Request').toBeNull();
                expect(lista.length).withContext('404 Not Found')
                .toBeGreaterThanOrEqual(1)
            done()
            })
        })
    })

**/

/*

describe('POST',()=>{
    it('Registra un nuevo comercio', (done) => {
        //////////////////////////////Campos para registrar un nuevo comercio ////
        const comercio = Comercio.Constructor('Pan Lilian','Chalatenango', '7655-9098')
        comercio.save( (error, comercio) => {
            const { _id } = comercio;
            console.log('Registrado');
            expect(error).withContext('400 Bad Request').toBeNull();
            expect(_id).not.withContext('404 Not Found')
            .toBeGreaterThanOrEqual(1)
            done()
        })
    })
})

**/

/*
    describe('PUT',()=>{
        it('Editar campos de comercio como nombre direccion y telefono', (done) => {
            /////////////////// Inserte el ID del Comercio ///////////////////////////
            const id = '6152ade6d11dbbdf26eb6b0d';
            const comercioDB = testFindById(id, done)
                /////////////////// Campo para editar ///////////////////////////////
                Comercio.editar(id, { nombre: 'Pan Lilian', direccion: 'Nueva Concepcion', telefono:'7655-9098'}, (error, lista) => {
                console.log(lista);
                expect(error).withContext('400 Bad Request').toBeNull();
                expect(comercioDB).not.withContext('404 Not Found')
                .toBeGreaterThanOrEqual(1)
                done()
            })
        })
    
    })

**/  


    describe('DELETE',()=>{   
        it('Eliminar registro de comercio por id', (done) => {
            /////////////////// Inserte el ID del Comercio ///////////////////////////
            const id = '6152ade6d11dbbdf26eb6b0d';
             const comercioDB = testFindById(id, done);
                Comercio.eliminar(id, (error) => {
                    console.log('Eliminado');
                expect(error).withContext('400 Bad Request').toBeNull();
                expect(comercioDB).not.withContext('404 Not Found')
                .toBeGreaterThanOrEqual(1)
                done()
            })
        })
    })
    

    
})