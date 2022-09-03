import { Document, model, Schema } from "mongoose";

interface ISecretSchema extends Document {
  urlId: string;
  secret: string;
}
const SecretSchema = new Schema({
  urlId: {
    type: String,
  },
  secret: {
    type: String,
  },
});

export const SecretModel = model<ISecretSchema>("Secrets", SecretSchema);
