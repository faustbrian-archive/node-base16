import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("foobar")).toStrictEqual("666f6f626172");
});

test("#decode", () => {
  expect(decode("666f6f626172").toString("utf8")).toStrictEqual("foobar");
});
