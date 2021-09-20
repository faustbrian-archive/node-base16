import { base16 } from "rfc4648";

export const encode = (content: string): string =>
  base16.stringify(Buffer.from(content));

export const decode = (content: string): Buffer =>
  Buffer.from(base16.parse(content));
