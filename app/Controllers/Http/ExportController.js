'use strict'

const ImportService = use('App/Services/ImportService')
const ExportService = use('App/Services/ExportService')
const Helpers       = use('Helpers')
const Sekolah       = use('App/Models/Sekolah')
const Kepsek        = use('App/Models/Kepsek')
const Excel    = require('exceljs')
const Database = use('Database')


class ExportController {

    async export({request, id_sekolah,rowNumber})
    {        
        let workbook = new Excel.Workbook();
        let worksheet = workbook.addWorksheet("Sheet 1");
        let font = { name: 'Times New Roman', size: 12 };

        worksheet.columns = [
                                { header: "No", key: "no",width:10,style:{font:font} }, 
                                { header: "Nama Sekolah", key: "nama" ,width:40,style:{font:font}},
                                { header: "Kode Sekolah", key: "kode" ,width:20,style: { font: font }},
                                { header: "Nama Kepala Sekolah", key: "kp",width:30,style: { font: font }},
                            ];
        
        let dataKepsek  = await Database.select('*').from('kepseks')

        let dataSekolah = Sekolah.query().with('kepala_sekolah').from('sekolahs')
        dataSekolah     = await dataSekolah.fetch()

        let data        = await dataSekolah.toJSON()

        let rowSekolah  = data.map(async item =>{
            
                worksheet.addRow({
                    no : item.id,
                    nama : item.nama_sekolah,
                    kode : item.kode_sekolah,
                    kp   : item.kepala_sekolah.nama_kepsek
                    })          
        })
        
        worksheet.getCell('B1','C1').fill = {type: 'pattern',pattern:'solid',fgColor:{ argb:'cccccc' }
            }



        rowSekolah = await Promise.all(rowSekolah)
        let res = workbook.xlsx.writeFile('./uploads/ex0orrtss.xlsx')
    }        

    
}

module.exports = ExportController
