const sql = require('../controllers/db');

const Review = function(review){
    this.productId = review.productId;
    this.ratings = review.ratings;
    this.review = review.review;
    this.reviewerName = review.reviewerName;
    this.reviewerEmail = review.reviewerEmail;
    this.subscription = review.subscription;
}

Review.create = (newReview, result)=>{
    sql.query("INSERT INTO allreviews SET ?", newReview, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(newReview)
        }
    })
}

Review.findById = (id, result)=>{
    sql.query("SELECT * FROM allreviews WHERE productId= ?", id, (err, res)=>{
        if(err){
            result(err)
        }else{
            result(res)
        }
    })
}

module.exports = Review