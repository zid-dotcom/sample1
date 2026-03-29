const studentmodel = require('../models/studentmodel')

    

exports.addstudents = async (req, res) => {

    try {
        const { name, email, place } = req.body

        const imageFile=req.file?.filename

        console.log(imageFile);
        
        console.log(req.body);
        


        if (!name || !email || !place) {
            return res.status(406).json("please fill all fields")
        }

        // if(!imageFile){
        //     return res.status(401).json('image is not selected yet')
        // }

        const students = new studentmodel({ name, email, place,image:imageFile })
        await students.save()
        res.status(200).json(students)

    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)

    }






}



exports.getAllStudents = async (req, res) => {
    try {
       

        const liststudents = await studentmodel.find()


        res.status(200).json(liststudents)

    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)



    }
}


exports.getstudentById = async (req, res) => {
    try {
        const { id } = req.params

        const fetchstudent = await studentmodel.findById(id)
        res.status(200).json(fetchstudent)

    }
    catch (err) {
        console.log(err);
        res.status(401).json(err)

    }
}


exports.Deletestudent = async (req, res) => {
    try {
        const { id } = req.params
        console.log(req.params);

        const deletedstudent = await studentmodel.findByIdAndDelete(id)
        res.status(200).json(deletedstudent)

    }
    catch (err) {
        res.status(400).json(err)

    }
}




exports.updatestudent = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, place } = req.body
        const imageFile=req.file?.filename

        console.log(imageFile);

        const updatedData={
            name,
            email,
            place
        }

        // 🔥 only update image if new one uploaded

        if(imageFile){
            updatedData.image=imageFile
        }

      
        
        const updatedstudents = await studentmodel.findByIdAndUpdate(id, updatedData)
        res.status(200).json(updatedstudents)



    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)


    }








}