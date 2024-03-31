const { getListOfProperties, getRelativePathByValue } = require("./index");

describe("algorithmObjectMap", () => {
  const object = {
    name: "Alice",
    age: 26,
    address: {
      street: "of the Stones",
      number: 123,
      state: "XPTO",
      city: "Winged",
      country: "of Wonders",
      object: {
        object2: {
          object3: {
            object4: {
              name: "bla bla bla",
            },
          },
        },
      },
    },
  };

  describe("getListOfProperties", () => {
    it("should be return a list of properties by object with value different type of object", () => {
      const listOfProperties = getListOfProperties(object);

      expect(listOfProperties).toHaveLength(8);
    });

    it("should be return a empty list", () => {
      const listOfProperties = getListOfProperties({});

      expect(listOfProperties).toHaveLength(0);
    });
  });

  describe("getRelativePathByValue", () => {
    it("should be return a list with the relative path to the value", () => {
      const relativePath = getRelativePathByValue(object, "bla bla bla");

      expect(relativePath).toHaveLength(6);
      expect(relativePath.at(-1)).toBe("name");
    });

    it("should be return a null value to the relative path", () => {
      const relativePath = getRelativePathByValue(object, "Wrong path");

      expect(relativePath).toBeNull();
    });
  });
});
