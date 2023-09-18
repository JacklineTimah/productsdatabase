const {addedCategory}= require('../services/category.service')

const newCategory= async(req,res,next)=>{
   try {
       const response= await addedCategory(req.body)
       return res.status(response.code).json(response)
   } catch (error) {
       next(error)
   }
}

module.exports={newCategory}