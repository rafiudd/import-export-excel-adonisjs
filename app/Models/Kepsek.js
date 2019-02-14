'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Kepsek extends Model {
    static get_table(){
        return 'kepsek'
    }

    static get_primaryKey(){
        return 'id'
    }
}

module.exports = Kepsek
