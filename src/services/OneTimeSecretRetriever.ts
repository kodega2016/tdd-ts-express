import { SecretNotFoundError } from "../domain/errors/SecretNotFoundError";
import { Secret } from "../domain/models/Secret";
import { URLID } from "../domain/models/URLID";
import { SecretRepository } from "./SecretRepository";
import { SecretRetriever } from "./SecretRetriever";

export class OneTimeSecretRetriever implements SecretRetriever {
  constructor(private secretRepository: SecretRepository) {}

  async retrieveSecretById(urlID: URLID): Promise<Secret> {
    const secret = await this.secretRepository.getSecretById(urlID);
    if (!secret) throw new SecretNotFoundError();
    return secret;
  }
}
