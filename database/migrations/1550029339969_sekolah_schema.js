'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SekolahSchema extends Schema {
  up () {
    this.create('sekolahs', (table) => {
      table.increments()
      table.string('nama_sekolah', 80).notNullable()
      table.string('kode_sekolah', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('sekolahs')
  }
}

module.exports = SekolahSchema
