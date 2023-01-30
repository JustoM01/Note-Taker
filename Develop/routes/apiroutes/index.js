
const router = require("express").Router();


const {
    notes
} = require('../../db/db');


const {
    noteCreateNewNote,
    noteDeleteNote
} = require('../../lib/noteFunctions');


router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    
    let note = noteCreateNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
 })


module.exports = router;