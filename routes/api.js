const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);
const path = require('path');

const getNotes = ()  => {
    return readFromFile('db/db.json', 'utf-8').then(rawNotes => [].concat(JSON.parse(rawNotes)) ) 
}
// get placeholder notes from db.json file
router.get('/notes', (req, res) => {
    getNotes().then(notes => res.json(notes)).catch(err => res.json({err, msg:'failed to load notes'}))
 

});

// post new notes
router.post('/notes', (req, res) => {
 getNotes().then(oldnotes => {

   let newNote = {title: req.body.title, text:req.body.text, id:Math.floor(Math.random() * 1000)}
   let noteArray = [...oldnotes, newNote]
  writeToFile('db/db.json', JSON.stringify(noteArray)).then(() => res.json({msg:'ok'}))
 })

});

// delete a note
// router.delete('/notes/:id', (req, res) => {
//     // console.log(req.params.id);
//     // console.log(`Your Note ${req.params.id} has now been deleted`);

//     let newArr = Notes.filter(note => note.id !== parseInt(req.params.id));
//     fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(newArr));

//     res.json(Notes);
// });

module.exports = router;