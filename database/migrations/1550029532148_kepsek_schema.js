'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KepsekSchema extends Schema {
  up () {
    this.create('kepseks', (table) => {
      table.increments()
      table.string('nama_kepsek', 80)
      table.string('id_sekolah')
      table.string('nip')
      table.timestamps()
    })
  }

  down () {
    this.drop('kepseks')
  }
}

module.exports = KepsekSchema
