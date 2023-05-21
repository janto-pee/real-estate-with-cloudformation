import mongoose from "mongoose"

export interface SessionInput {
    user: ['_id'];
    valid: boolean;
    useragent?: string | undefined;
}

export interface SessionDocument extends SessionInput, mongoose.Document {
    createdAt: NativeDate;
    updatedAt: NativeDate;
}

const SessionSchema = new mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    valid : {type: Boolean, default: true},
    useragent : {type: String, lowercase: true},
}, {
    timestamps: true
})

const SessionModel = mongoose.model<SessionDocument>("Session", SessionSchema)
export default SessionModel