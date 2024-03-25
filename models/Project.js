import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    dueDate: {
        type: Date,
        default: Date.now()
    },
    client: {
        type: String,
        trim: true,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    collaborators:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
}, {
    timestamps: true,
}
);

const Porject = mongoose.model('Project', projectSchema);

export default Porject;