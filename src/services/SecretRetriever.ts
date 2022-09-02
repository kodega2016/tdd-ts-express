import { Secret } from "../domain/models/Secret";
import { URLID } from "../domain/models/URLID";

export interface SecretRetriever {
  retrieveSecretById(urlID: URLID): Promise<Secret>;
}
