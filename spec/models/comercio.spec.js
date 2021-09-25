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
    expect(comercioDB).not.withContext('ID no encontrado').toBeNull();
    if (!comercioDB) { done() 
    
    }
    return console.log("Ok");
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
            Comercio.buscar('_id', '', (error, lista) => {
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
            /////////////////// ////////////////////////Campos para registrar un nuevo comercio ////
            const comercio = Comercio.Constructor('','', '')
            comercio.save( (error, comercio) => {
                const { _id } = comercio;
                expect(error).withContext('error en la consulta').toBeNull();
                expect(_id).not.withContext('no se generó ID').toBeNull();
                done()
            })
        })

    })
**/

 /*  
    describe('PUT',()=>{
        it('Editar campos de comercio como nombre direccion y telefono', (done) => {
            /////////////////// Inserte el ID del Comercio ///////////////////////////
            const id = '614a4c2bfa141c94792d003f';
            const comercioDB = testFindById(id, done)
                /////////////////// Campo para editar ///////////////////////////////
                Comercio.editar(id, { nombre: 'Pan Lilian', direccion: 'Chalatenango', telefono:'78986543'}, (error, lista) => {
                console.log(lista);
                expect(error).withContext('400 Bad Request').toBeNull();
                expect(comercioDB).not.withContext('404 Not Found')
                .toBeGreaterThanOrEqual(1)
                done()
            })
        })
    
    })
**/
    

/*
    describe('DELETE',()=>{   
        it('Eliminar registro de comercio por id', (done) => {
            /////////////////// Inserte el ID del Comercio ///////////////////////////
            const id = '614c61261af5a9ae72d9dd650000';
             const comercioDB = testFindById(id, done);
                Comercio.eliminar(id, (error,) => { 
                expect(comercioDB).withContext('ID no encontrado').toBe();
                expect(error).withContext('404 Not Found').toBeNull() 
                done()
            })
        })
    })
    
**/

    
})