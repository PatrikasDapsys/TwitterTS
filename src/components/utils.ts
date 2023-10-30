export function createUniqueID() {
  const id = Math.round(Math.random() * 100000000000);
  return id;
}
