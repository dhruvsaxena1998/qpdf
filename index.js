import { encrypt } from "node-qpdf2";
import fs from "fs/promises";

export async function handler(event) {
  const pdf = {
    input: "./sample.pdf",
    output: "/tmp/encrypted.pdf",
    password: "123456",
  };

  await encrypt(pdf);

  const file = await fs.readFile(pdf.output);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/pdf",
    },
    isBase64Encoded: true,
    body: file.toString("base64"),
  };
}
