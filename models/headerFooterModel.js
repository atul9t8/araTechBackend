const sql = require('../controllers/db');



const Information = function(info){
    this.description = info.description;
    this.isoinfo = info.isoinfo;
    this.hotline = info.hotline;
    this.fb = info.fb;
    this.linkedin = info.linkedin;
    this.twitter = info.twitter;
    this.insta = info.insta;
    this.cellphoneNo = info.cellphoneNo;
    this.email = info.email;
    this.corporateOffice = info.corporateOffice;
    this.whatsappNo = info.whatsappNo;
    this.dhakaShowroom = info.dhakaShowroom;
    this.chittagongShowroom = info.chittagongShowroom;
};


Information.create = (newInformation, result)=>{
    sql.query("INSERT INTO headerinfo SET ?", newInformation, (err, res)=>{
        if(err){
            result(err, null);
        }
        result(null, newInformation);
        }
    )
}

Information.get = (result)=>{
    sql.query("SELECT * FROM headerinfo", (err, res)=>{
        if(err){
            result(err, null);
        }
        result(null, res);
        }
    )
}

Information.update = (id, result)=>{
    sql.query("UPDATE headerinfo SET ? WHERE id= ?", id, (err, res)=>{
        if(err){
            result(err, null);
        }
        result(null, "Updated");
        }
    )
}


module.exports = Information