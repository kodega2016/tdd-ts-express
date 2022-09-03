import mongoose from "mongoose";
import { Secret } from "../../domain/models/Secret";
import { URLID } from "../../domain/models/URLID";
import { SecretRepository } from "../../services/SecretRepository";
import { SecretModel } from "./SecretModel";

export class MongoSecretRepository implements SecretRepository {
  constructor() {
    if (mongoose.connection.readyState != 1) {
      mongoose.connect("mongodb://localhost:27017/secret");
    }
  }

  async getSecretById(urlID: URLID): Promise<Secret> {
    const doc = await SecretModel.findOne({ urlId: urlID.urlID });
    if (!doc) return null;
    return new Secret("newSecret");
  }
}
