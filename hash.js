async function generateHash() {
  const encoder = new TextEncoder();
  const data = encoder.encode("indabaX@katleho001 ");
  const hash = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hash));
  console.log("Your hash:", hashArray.map(b => b.toString(16).padStart(2, '0')).join(''));
}
generateHash();