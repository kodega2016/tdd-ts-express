import { URLID } from "../URLID";
import { Secret } from "./Secret";

export interface SecretRetriever {
  retrieveSecretById(urlID: URLID): Promise<Secret>;
}
