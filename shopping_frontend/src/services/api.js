/**
 * Fake REST API placeholder for frontend demo.
 * Replace these with real backend calls once API endpoints are available.
 */

// PUBLIC_INTERFACE
export async function fetchProducts() {
  // Here you would do: return fetch('/api/products').then(r => r.json());
  throw new Error("API not implemented. Demo uses local data.");
}

// PUBLIC_INTERFACE
export async function authSignup({ email, password, name }) {
  // Replace with POST to /api/signup
  await sleep(400);
  if (!email || !password || !name) throw new Error("Missing fields");
  return { name, email, token: "demo-signup-token" };
}

// PUBLIC_INTERFACE
export async function authSignin({ email, password }) {
  // Replace with POST to /api/signin
  await sleep(400);
  if (!email || !password) throw new Error("Missing fields");
  // Demo: accept any
  return { name: email.split("@")[0] || "User", email, token: "demo-signin-token" };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
