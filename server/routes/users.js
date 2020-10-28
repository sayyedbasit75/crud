var express = require('express');
var router = express.Router();
var db = require('../config/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Server Up and Running');
});


/* Create */

router.post("/create", (req, res) =>{
  var data = req.body
  var sql = "INSERT INTO tb_pratice (`userName`, `userEmail`, `userMobile`, `userAddress`) VALUES ('"+data.userName+"', '"+data.userEmail+"', '"+data.userMobile+"', '"+data.userAddress+"')"
  db.query(sql, (err, row) =>{
    console.log(sql)
    if(err){
      res.status(400).send({
        ack: false,
        message: "Unable to insert"
      })
    } else {
      res.json({
        ack: true,
        message: "Inserted Successfully.."
      })
    }
  })
})

router.get("/get", (req, res) =>{
  var sql = "SELECT * FROM `tb_pratice`"
  db.query(sql, (err, rows) =>{
    if(err){  
      res.status(400).send({
        ack: false,
        message: "No data found.."
      })
    } else {
      res.json({
        ack: true,
        message: "Data Found Successfully..",
        rows
      })
    }
  })
})

router.put("/update", (req, res) =>{
  var data = req.body;
  // var sql = "UPDATE `tb_pratice` SET `userName` = '"+data.userName+"',  `userEmail`= '"+data.userEmail+"', `userMobile`='"+data.userMobile+"', `userAddress`='"+data.userAddress+"' WHERE `id` = '"+data.id+"' "
  var sql = "UPDATE `tb_pratice` SET `userName`='"+data.userName+"',`userEmail`='"+data.userEmail+"',`userMobile`='"+data.userMobile+"',`userAddress`='"+data.userAddress+"' WHERE `tb_pratice`.`id` = '"+data.userId+"'"
  db.query(sql, (err, rows) =>{
    console.log(sql)
    if(err){
      res.status(400).send({
        ack: false,
        message: "Unable to update"
      })
    } else{
      res.json({
        ack: true,
        message: "Update Successfully.."
      })
    }
  })
})


router.delete("/delete/:id", (req, res) =>{
  var sql = "DELETE FROM `tb_pratice` WHERE `id` = '"+req.params.id+"'"
  db.query(sql, (err, rows) =>{
    console.log(sql)
    if(err){
      res.status({
        ack: false,
        message: "Unable to delete"
      })
    } else {
      res.json({
        ack: true,
        message: "Deleted Successfully.."
      })
    }
  })
})

module.exports = router;
