import mongoose from 'mongoose'
import { linkSchemaTypes } from '../interface/linkSchema.interface'

const linkSchema = new mongoose.Schema<linkSchemaTypes>({
    url: String,
    longUrl: String,
    shortenedUrl: String,
    date: { type: String, default: Date.now() }
})

module.exports = mongoose.model("Url", linkSchema)