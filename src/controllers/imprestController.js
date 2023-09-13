 const Imprest = require('../models/imprest');

const getImprest=async (req, res) => {
    try {
      const imprests = await Imprest.findAll();
  
      res.status(200).json(imprests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }


  const getOneImprest= async (req, res) => {
    console.log(req, "req")
    try {
      const id = req.params.id;
  
      // Use Sequelize's findOne method to find an imprest by its ID
      const imprest = await Imprest.findOne({
        where: { id: id },
      });
  
      if (!imprest) {
        return res.status(404).json({ message: 'Imprest not found' });
      }
  
      res.status(200).json(imprest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
}

// creating imprest
const createImprest=async (req, res) => {
    try {
      const {
        skuid,
        barcode,
        name,
        category,
        description,
        minstock,
        maxstock,
        availablestock,
      } = req.body;
  console.log(skuid,barcode,name)
      // Use Sequelize's create method to create a new imprest record
      const newImprest = await Imprest.create({
        skuid,
        barcode,
        name,
        category,
        description,
        minstock,
        maxstock,
        availablestock,
      });
       console.log(newImprest)
  
      res.status(201).json(newImprest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
}



// update method

const updateImprest= async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const {
        skuid,
        barcode,
        name,
        category,
        description,
        minstock,
        maxstock,
        availablestock,
      } = req.body;
  
      // Use Sequelize's update method to update the imprest record
      const [rowsUpdated, [updatedImprest]] = await Imprest.update(
        {
          skuid,
          barcode,
          name,
          category,
          description,
          minstock,
          maxstock,
          availablestock,
        },
        {
          where: { id },
          returning: true, 
        }
      );
  
      if (rowsUpdated === 0) {
        return res.status(404).json({ message: 'Imprest not found' });
      }
  
      res.status(200).json(updatedImprest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
}  

const deleteOneImprest=async(req,res)=>{
const {id}=req.params;

try{
    const deletedImprest=await Imprest.destroy({
        where:{id}
    })
    if(!deletedImprest){
        return res.status(404).json({message:'Imprest not found'})
    }
    res.status(204).send() //content not found
}catch(err){
    res.status(500).json({message:'server error'})
}
}

  module.exports={
    getImprest ,
    getOneImprest,
    createImprest,
    updateImprest,
    deleteOneImprest
  }