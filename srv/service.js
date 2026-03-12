const cds = require('@sap/cds');

class BuisnessService extends cds.ApplicationService {
    async init(){
        const bp = await cds.connect.to('API_BUSINESS_PARTNER');
        const nw = await cds.connect.to('northwind');


        this.on('READ','A_BuisnessPartner',async req=>{
            return bp.run(req.query);
        })

         this.on('READ',['customers','products'],async req=>{
            return nw.run(req.query);
        })

         this.on('READ','localData',async req=>{
            const empdata = await cds.connect.to('employeedata');
            const data = empdata.run(req.query);
            // const data = await empdata.send({
            //     method: 'GET',
            //     path: '/Employee',
            //     headers :{
            //         'Content-Type': 'application/json',
            //         "accept": "application/json",
            //         "X-Requested-With": "XMLHttpRequest"
            //     }
            // })
            return data;
        })


         this.on('READ','studentdata',async req=>{
            const cdd = await cds.connect.to('student');
            const data = await cdd.run(req.query);
            
            // await cdd.send({
            //     method: 'GET',
            //     path: '/student',
            //     headers :{
            //         'Content-Type': 'application/json',
            //         "accept": "application/json",
            //         "X-Requested-With": "XMLHttpRequest"
            //     }
            // })
            return data;
        })



        

        return super.init();

    }
}

module.exports = {BuisnessService}  