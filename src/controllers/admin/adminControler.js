const { Cat } = require("../../models/Cat");
//JS HOF
let adminController = (req,res)=>{
    //Modal
               //mongoose.model(tableName,ColumInformation)
               //mongoose.model(CollectionName,SchemaDefination)
    

    const kitty = new Cat({ name: req.query.name});
    kitty.save().then(() => {
        res.status(200).json({
            'msg':"Meow"
        });
    }).catch(e=>{
        res.status(400).json({
            'msg':"errr",
            data:e
        });
    });

    

    
}

module.exports = { adminController }