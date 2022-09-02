export class URLIDValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "URLIDValidationError";
  }
}
