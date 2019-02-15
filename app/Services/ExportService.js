'use strict'
const Database = use('Database')
const Excel    = require('exceljs')
const Sekolah  = use('App/Models/Sekolah')
const Kepsek   = use('App/Models/Kepsek')

class ExportService{
    static async ExportData(filename)
    {
        var workbook = new Excel.Workbook();
        workbook.xlsx.writeFile(filename)
        .then(function() {
        console.log('halo')
        });
    }            
}

module.exports = ExportService