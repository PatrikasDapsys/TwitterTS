export function createUniqueID() {
  const id = Math.round(Math.random() * 100000000000);
  return id;
}
export function areCharactersValid(username: string, handle: string) {
  const pattern = /^[a-zA-Z0-9]+$/; //Contains only aA-zZ and 0-9
  return pattern.test(username) && pattern.test(handle);
}
