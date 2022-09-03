import mongoose from "mongoose";
import { URLID } from "../../../../src/domain/models/URLID";
import { MongoSecretRepository } from "../../../../src/infra/repositories/MongoSecretRepository";
import { SecretModel } from "../../../../src/infra/repositories/SecretModel";

describe("MonogoSecretRepository", () => {
  it("it should connect to the database", () => {
    mongoose.connect = jest.fn();

    new MongoSecretRepository();
    expect(mongoose.connect).toBeCalledTimes(1);
    expect(mongoose.connect).toBeCalledWith("mongodb://localhost:27017/secret");
  });
  it("it should return null when the secret is not found", async () => {
    mongoose.connect = jest.fn();
    SecretModel.findOne = jest.fn().mockResolvedValue(null);
    const monogoSecretRepository = new MongoSecretRepository();

    const urlID = new URLID("thisisnewsecret");
    expect(await monogoSecretRepository.getSecretById(urlID)).toBe(null);
    expect(mongoose.connect).toBeCalledTimes(1);
  });
});
