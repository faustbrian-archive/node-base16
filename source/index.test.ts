import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("foobar")).toStrictEqual("666F6F626172");
});

test("#decode", () => {
  expect(decode("666F6F626172").toString("utf8")).toStrictEqual("foobar");
});
