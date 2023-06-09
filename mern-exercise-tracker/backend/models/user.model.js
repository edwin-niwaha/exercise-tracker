import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    emailId: { type: String, required: true},
}, { timestamps: true });

export default mongoose.model('User', userSchema);