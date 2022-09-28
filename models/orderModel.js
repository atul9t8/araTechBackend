const sql = require('../controllers/db');


const Order = function(order){
    this.fName = order.fName;
    this.lName = order.lName;
    this.companyName = order.companyName;
    this.countryRegion = order.countryRegion;
    this.streetAddress = order.streetAddress;
    this.apartmentAddress = order.apartmentAddress;
    this.townCity = order.townCity;
    this.district = order.district;
    this.postCode = order.postCode;
    this.phone = order.phone;
    this.email = order.email;
    this.orderNote = order.orderNote;
    this.productName = order.productName;
    this.quantity = order.quantity;
    this.subtotal = order.subtotal;
    this.total = order.total;
    this.paymentMethod = order.paymentMethod;
    this.orderId = order.orderId;
    this.status = order.status;
};

Order.create = (newOrder, result)=>{
    sql.query("INSERT INTO orderinfo SET ?", newOrder, (err, res)=>{
        if(err){
            result(err, null);
        }
        result(null, newOrder);
        }
    )
}

Order.getAllOrder = (status, result)=>{
    sql.query("SELECT * FROM orderinfo WHERE status != ?", status, (err, res)=>{
        if(err){
            result(err, null);
        }
        result(null, res);
        }
    )
}

Order.getAllOrderByEmail = (email, result)=>{
    sql.query("SELECT * FROM orderinfo WHERE email= ?", email, (err, res)=>{
        if(err){
            result(err, null);
        }
        result(null, res);
        }
    )
}

//work to do
Order.getOrderById = (id, result)=>{
    sql.query("SELECT * FROM orderinfo WHERE id= ?", email, (err, res)=>{
        if(err){
            result(err, null);
        }
        result(null, res);
        }
    )
}

Order.updateStatus = (order, result)=>{
    sql.query("UPDATE orderinfo SET status= ? WHERE id= ?", order, (err, res)=>{
        if(err){
            result(err, null);
        }
        result(null, "Status updated");
        }
    )
}


module.exports = Order