export function createUniqueID() {
  const id = Math.round(Math.random() * 100000000000);
  return id;
}
export function areCharactersValid(username: string, handle: string) {
  const patternWithNoSpace = /^[a-zA-Z0-9]+$/; //Contains only aA-zZ and 0-9 no spaces
  const patternWithSpace = /^[a-zA-Z0-9 ]+$/; //Contains only aA-zZ and 0-9 with spaces
  return patternWithSpace.test(username) && patternWithNoSpace.test(handle);
}
