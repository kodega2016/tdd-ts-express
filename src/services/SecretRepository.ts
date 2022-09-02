import { Secret } from "../domain/models/Secret";
import { URLID } from "../domain/models/URLID";

export interface SecretRepository {
  getSecretById(urlID: URLID): Promise<Secret | null>;
}
