export function L(str: String) {
    return Buffer.from(str, "base64").toString("utf8");
  }