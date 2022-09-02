export class SecretNotFoundError extends Error {
  constructor() {
    super("Secret doenot exist in the system.");
    this.name = "SecretNotFoundError";
  }
}
