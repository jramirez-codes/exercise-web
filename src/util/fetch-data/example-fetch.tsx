export async function exampleFetch() {
  await new Promise(r => setTimeout(r, 2000));
  return "HELLO WORLD"
}