export class Verify {
    constructor(expectedBody?: Record<string, string>);
  
    VerifyIfIsCorrect(
      body: Record<string, string>
    ): [message: string, isValid: boolean];
  
    VerifyIfCredentialsExists(
      body: Record<string, string> | null | undefined
    ): [message: string, exists: boolean];
  
    NewBody(body: Record<string, string>): void;
  
    expectedProperties: string[];
    expectedValues: Record<string, string>;
  }
  