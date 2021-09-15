import mongoose from 'mongoose';

const Note = new mongoose.Schema({
    created: {type: String, required: true},
    value: {type: String, required: true, maxlength:400}    
})

export default mongoose.model('Note', Note)