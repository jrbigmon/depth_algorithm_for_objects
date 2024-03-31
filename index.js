const algorithmObjectMap = () => {
  const getListOfProperties = (object) => {
    const listOfProperties = [];

    const mapObject = (object, father = []) => {
      const listOfTemporaryObjects = [];

      Object.entries(object)?.forEach(([key, value]) => {
        if (typeof value !== "object") {
          if (!father?.length) {
            listOfProperties.push([key]);
          } else {
            listOfProperties.push([...father, key]);
          }
        } else {
          listOfTemporaryObjects.push([
            [...(father?.length ? father : []), key],
            value,
          ]);
        }
      });

      listOfTemporaryObjects?.forEach(([keys, object]) =>
        mapObject(object, keys)
      );
    };

    mapObject(object);

    return listOfProperties;
  };

  const getRelativePathByValue = (object, valueToSearch) => {
    let relativePath = null;

    const mapObjectAndSearch = (object, father = []) => {
      const listOfTemporaryObjects = [];

      const objectEntries = Object.entries(object);

      for (const [key, value] of objectEntries) {
        if (typeof value !== "object") {
          if (value === valueToSearch) {
            relativePath = [...father, key];
            break;
          }
        } else {
          listOfTemporaryObjects.push([
            [...(father?.length ? father : []), key],
            value,
          ]);
        }
      }

      listOfTemporaryObjects?.forEach(([keys, object]) => {
        if (!relativePath?.length) mapObjectAndSearch(object, keys);
      });
    };

    mapObjectAndSearch(object);

    return relativePath;
  };

  return {
    getListOfProperties,
    getRelativePathByValue,
  };
};

module.exports = algorithmObjectMap();
