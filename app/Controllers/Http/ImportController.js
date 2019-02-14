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

        await upload.move(Helpers.tmpPath(dir), {
            name: fname
        })

        if (!upload.moved()) {
            console.log('error')
            return (upload.error(), 'Error moving files', 500)
        }

        //console.log(['hhh'],upload)
        let send = await ImportService.ImportClassification('tmp/' + dir + fname)
        console.log(send)
        let aa  = 'suses'
        return ({}, aa,200)
    }

    async getData(){
        let get = await Sekolah.all()

        return (get)
    }
}

module.exports = ImportController
