import internal from "stream";
import Note from "../models/NoteDbModel.js";

class NoteService {
    
    /**
     * Create Note in the database
     * @param {object} note 
     * @returns {object} 
     */
    async create(note) {
        let notes = {
            created: Date.now(), 
            value: note.value
        }
        
        const createdNote = await Note.create(notes);
        return createdNote;
    }

    /**
     * Returns all notes paginated and sorted by timestamp
     * @param {number} page 
     * @param {number} pagesize
     * @returns {object} return all Notes paginated and sorted by timestamp
     */
    async getAll(page, pagesize) {
        const currentPage = page;
        const pageSize = pagesize; 
        const skip = pageSize * (currentPage-1);
        const limit = pageSize;

        const sortByDate = { created: 1 };
         
        const notes = await Note.find({}).sort(sortByDate).skip(skip).limit(limit);
        return notes;
    }

    /**
     * Returns Note by given ID
     * @param {string} id 
     * @returns {note}
     */
    async getOne(id) {
        if (!id) {
            throw new Error('No ID')
        }
        
        const note = await Note.findById(id);
        return note;
    }

    /**
     * Edit Note by id
     * @param {string} id 
     * @param {object} note
     * @returns {object} return updated Note
     */
    async update(id, note) {
        if (!id) {
            throw new Error('No ID')
        }
        const updatedNote = await Note.findByIdAndUpdate(id, note, {new: true})
        return updatedNote;
    }

    /**
     * Delete Note by id
     * @param {number} id      
     * @returns {object} return updated Note
     */
    async delete(id) {
            if (!id) {
                throw new Error('No ID')
            }
            const note = await Note.findByIdAndDelete(id);
            
            return note;
    }
}

export default new NoteService();
