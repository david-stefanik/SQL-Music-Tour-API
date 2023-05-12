const events = require('express').Router()
const db = require('../models')
const {Events}=db

// FIND ALL events
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Events.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})
// FIND A SPECIFIC events
events.get('/:id', async (req, res) => {
    try {
        const foundEvents = await events.findOne({
            where: { events_id: req.params.id }
        })
        res.status(200).json(foundevents)
    } catch (error) {
        res.status(500).json(error)
    }
})
// CREATE A events
events.post('/', async (req, res) => {
    try {
        const newEvents = await events.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvents
        })
    } catch(err) {
        res.status(500).json(err)
    }
})










module.exports= events