import NoteService from "../models/NoteService.js";

class NoteController {
    async create(req, res) {
        try {            
            const note = await NoteService.create(req.body)
            res.json(note)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const notes = await NoteService.getAll(req.body.page, req.body.pagesize);
            return res.json(notes);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const note = await NoteService.getOne(req.params.id)
            return res.json(note)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedNote = await NoteService.update(req.params.id, req.body);
            return res.json(updatedNote);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const note = await NoteService.delete(req.params.id);
            return res.json(note)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new NoteController();