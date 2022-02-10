import { Document } from "mongoose";

export interface Book extends Document {
  readonly Title: string;
  readonly Author: string;
  readonly imageURL: string;
  readonly Description: number;
}