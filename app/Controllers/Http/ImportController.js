'use strict'

const ImportService = use('App/Services/ImportService')
const Helpers       = use('Helpers')
const Sekolah  = use('App/Models/Sekolah')
const Kepsek   = use('App/Models/Kepsek')

class ImportController {

    async import({request, response})
    {
        let upload  = request.file('upload')
        let fname   = `${new Date().getTime()}.${upload.extname}`
        let dir     = 'upload/'

        //move uploaded file into custom folder
        await upload.move(Helpers.tmpPath(dir), {
            name: fname
        })

        if (!upload.moved()) {
            console.log('error')
            return (upload.error(), 'Error moving files', 500)
        }

        let send = await ImportService.ImportClassification('tmp/' + dir + fname)
        console.log(send)
    }

    async getData(){
        // api get all data import
        let get = await Sekolah.all()
        return (get)
    }
}

module.exports = ImportController
