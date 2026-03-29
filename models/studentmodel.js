const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema({
    image:{
        type:String,
          default: "default.png"

    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})


const StudentModel=mongoose.model('StudentModel',studentSchema)
module.exports=StudentModel