export function assert(statement:boolean, message:string) {
    if (!statement) {
      throw Error(`Assertion failed: ${message}`)
    }
  }