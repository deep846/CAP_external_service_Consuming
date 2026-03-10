const cds = require('@sap/cds');

class BuisnessService extends cds.ApplicationService {
    async init(){
        const bp = await cds.connect.to('API_BUSINESS_PARTNER');
        const nw = await cds.connect.to('northwind');
        const cdd = await cds.connect.to('student');


        this.on('READ','A_BuisnessPartner',async req=>{
            return bp.run(req.query);
        })

         this.on('READ',['customers','products'],async req=>{
            return nw.run(req.query);
        })


         this.on('READ','studentdata',async req=>{
            return await cdd.run(req.query);
        })



        

        return super.init();

    }
}

module.exports = {BuisnessService}  