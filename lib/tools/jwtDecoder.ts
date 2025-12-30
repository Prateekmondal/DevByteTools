// frontend/lib/tools/jwtDecoder.ts

function base64UrlDecode(str: string): string {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = str.length % 4;
  if (pad) {
    str += "=".repeat(4 - pad);
  }
  return atob(str);
}

export function decodeJwt(token: string) {
  if (!token.trim()) {
    throw new Error("JWT is empty");
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid JWT format");
  }

  try {
    const header = JSON.parse(base64UrlDecode(parts[0]));
    const payload = JSON.parse(base64UrlDecode(parts[1]));

    const exp = payload.exp
      ? new Date(payload.exp * 1000).toISOString()
      : "No expiration";

    return {
      header,
      payload,
      expiration: exp,
    };
  } catch {
    throw new Error("Unable to decode JWT");
  }
}
