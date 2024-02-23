var usermodel = require('../model/usermodel');

exports.insert =  async(req,res) =>{
    var data = await usermodel.create(req.body);

    console.log(data)
    res.status(200).json({
        status:"success",
        data
    })
}
exports.select_data =  async(req,res) =>{
    var data = await usermodel.find();

    res.status(200).json({
        status:"success",
        data
    })
}