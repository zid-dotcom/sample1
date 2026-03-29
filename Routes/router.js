const studentcontroller=require('../controllers/studentcontrollers')
const multermiddleware=require('../middlewares/multer')
const express=require('express')

const router=express.Router()


// student route




router.post('/add',multermiddleware.single('image'),studentcontroller.addstudents)
router.get('/get',studentcontroller.getAllStudents)
router.get('/get/:id',studentcontroller.getstudentById)
router.delete('/delete/:id',studentcontroller.Deletestudent)
router.put('/edit/:id',multermiddleware.single('image'),studentcontroller.updatestudent)

module.exports=router