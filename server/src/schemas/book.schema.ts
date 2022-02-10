import { Schema } from "mongoose";

export const BookSchema = new Schema({
    Title: String,
    description: String,
    imageURL: String,
    Author: String,
    
});
