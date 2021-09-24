var mongoose = require('mongoose');
const comercio = require('../../models/comercio.js');
var Comercio = require('../../models/comercio.js')

const Clistado = async () => {
    try {
        const lista = await Comercio.listado()
        return lista.length;
    } catch (error) {
        return 0;
    }
}
const testFindById = async (id, done) => {
    const comercioDB = await Comercio.findById(id);
    
    if (!comercioDB) { done() 
    
    }
    return console.log(" Eliminado de MongoDB");
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

    //************************************************************************************/
/*  

    describe('GET',()=>{
        it('Busca por _id, nombre y direccion', (done) => {
                /////////////////// Campo para busqueda ///////////////////////////////
            Comercio.buscar('', '', (error, lista) => {
                console.log(lista);
                expect(error).withContext('400 Bad Request').toBeNull();
                expect(lista.length).withContext('404 Not Found')
                .toBeGreaterThanOrEqual(1)
            done()
        
            })
        })
    })
/*
    /************************************************************************************/
/*
    describe('PUT',()=>{
        it('Editar campos de comercio como nombre direccion y telefono', (done) => {
            /////////////////// Inserte el ID ///////////////////////////////
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
/*
    /************************************************************************************/ 
    describe('DELETE',()=>{   
        it('Eliminar registro de comercio', (done) => {
            const id = '614c61261af5a9ae72d9dd650000';
             const comercioDB = testFindById(id, done);
                Comercio.eliminar(id, (error,) => { 
                expect(comercioDB).withContext('ID no encontrado').toBe();
                expect(error).withContext('404 Not Found').toBeNull()
                
                done()
            })
        })
    })

})