// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stages } = db 

// EXPORT


//find all stages
Stages.get('/',async(req,res)=>{
    try{const foundstages=await Band.findAll()
        res.status(200).json(foundstages)

    }catch (error){
        res.status(500).json(error)
    }
})
//find a band
Stages.get('/:id',async(req,res)=>{
    try{
        const foundBand=await Band.findOne({
            where:{band_id:req.prams.id}
        })
        res.status(200).json(foundBand);
    }catch(error){
        res.status(500).json(error)
    }
})
// CREATE A BAND
Stages.post('/', async (req, res) => {
    
    try {
        console.log ('here')
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// UPDATE A BAND
Stages.put('/:id', async (req, res) => {
    try {
        const updatedstages = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedstages} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// DELETE A BAND
Stages.delete('/:id', async (req, res) => {
    try {
        const deletedstages = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedstages} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})




module.exports = stages
