'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sekolah extends Model {

   static boot() {
        super.boot()
        this.addGlobalScope(builder => {
            builder.with('kepala_sekolah')
        })
    }


    static get_table(){
        return 'sekolah'
    }

    static get_primaryKey(){
        return 'id'
    }

    //create relations table sekolah to kepsek
    kepala_sekolah(){
        return this.belongsTo('App/Models/Kepsek', 'id', 'id')
    }
}

module.exports = Sekolah
