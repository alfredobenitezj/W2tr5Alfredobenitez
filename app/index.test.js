import getVocalCheck from "./index";

describe("Given a getVocalCheck funtion ", () => {
  describe("When it receives a `rana´ "),
    () => {
      test("then it should return false"),
        () => {
          const word = "rana";

          const check = getVocalCheck(word);

          expect(check).toBe(false);
        };
    };
});
