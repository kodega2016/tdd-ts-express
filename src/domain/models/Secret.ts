import { SecretValidationError } from "../errors/SecretValidationError";

export class Secret {
  constructor(private secret: string) {
    if (secret.length < 4)
      throw new SecretValidationError("Secret is too short.");
  }
}
