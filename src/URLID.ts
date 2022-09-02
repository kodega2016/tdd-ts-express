import { URLIDValidationError } from "./URLIDValidationError";

export class URLID {
  constructor(private urlID: string) {
    if (urlID.length < 4)
      throw new URLIDValidationError("URL ID is too short.");
  }
}
