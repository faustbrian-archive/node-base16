import { encoding } from "bcrypto";

export const encode = (content: string): string =>
  encoding.base16.encode(Buffer.from(content));

export const decode = (content: string): Buffer =>
  encoding.base16.decode(content);
