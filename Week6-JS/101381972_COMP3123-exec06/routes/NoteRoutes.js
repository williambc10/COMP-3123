const express = require("express");
const Note = require("../models/NotesModel.js");
const { check, validationResult } = require('express-validator');

const routes = express.Router()

//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', [ 
    check('noteTitle', 'Note title is required').not().isEmpty(),
    check('noteDescription', 'Note description is required').not().isEmpty(),
    check('priority', 'Priority is required').not().isEmpty()
  ], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const noteData = req.body;
    console.log(noteData);
  
    try {
      const note = new Note(noteData);
      const newNote = await note.save();
      res.status(201).json({
        message: 'Note created successfully.',
        note_id: newNote._id
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
});

//http://mongoosejs.com/docs/api.html#find_find
routes.get("/notes", (req, res) => {
    Note.find().then((notes) => {
        res.send(notes).status(200)
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
});

//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get("/notes/:noteId", (req, res) => {
    Note.findById(req.params.noteId, req.body, {new: true})
    .then((note) => {
        if(note) {
            res.send(note).status(200)
        } else {
            res.status(404).send({message: "Note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
});

//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put("/notes/:noteId", (req, res) => {
    Note.findByIdAndUpdate(req.params.noteId, req.body, {new: true})
    .then((note) => {
        if(note) {
            res.status(200).json({
                message: 'Note details updated successfully.'
              });
        } else {
            res.status(404).send({message: "Note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
});

//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete("/notes/:noteId", (req, res) => {
    const noteId = req.params.noteId;

    Note.findByIdAndRemove(noteId).then((note) => {
        if(note) {
            res.status(204).json({
                message: 'Note deleted successfully.'
              });
        } else {
            res.status(404).send({message: "Note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
});

module.exports = routes
