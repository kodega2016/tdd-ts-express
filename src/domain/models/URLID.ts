import { URLIDValidationError } from "../errors/URLIDValidationError";

export class URLID {
  constructor(public urlID: string) {
    if (urlID.length < 4)
      throw new URLIDValidationError("URL ID is too short.");
  }
}
