# Documentation for Object Mapping Algorithm

This algorithm is designed to traverse an object and create a list of each property along with its relative path to reach the corresponding value. It can create a multidimensional list (matrix) without any dimensional limit. Additionally, the algorithm provides the capability to find the path of a specific property by providing its value.

## Functions

### getListOfProperties(object)

Description
This function traverses the provided object and generates a list of properties along with their relative paths.

Parameters
object: The object to be traversed.
Returns
An array containing the list of properties along with their respective paths.
Example Usage

```javascript
const listOfProperties = getListOfProperties(object);
```

### getRelativePathByValue(object, valueToSearch)

Description
This function searches for a specific value within the provided object and returns its relative path.

Parameters
object: The object to be searched.
valueToSearch: The value to be found within the object.
Returns
An array representing the relative path to the specified value.
Example Usage

```javascript
const path = getRelativePathByValue(object, "value_to_search");
```

## Usage Example

```javascript
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

const { getListOfProperties, getRelativePathByValue } = algorithmObjectMap();

const path = getRelativePathByValue(object, "bla bla bla");
console.log(path);
// result:
// [ 'address', 'object', 'object2', 'object3', 'object4', 'name' ]

const listOfProperties = getListOfProperties(object);
console.log(listOfProperties);
// result:
// [
//   ['name'],
//   ['age'],
//   [ 'address', 'street' ],
//   [ 'address', 'number' ],
//   [ 'address', 'state' ],
//   [ 'address', 'city' ],
//   [ 'address', 'country' ],
//   [ 'address', 'object', 'object2', 'object3', 'object4', 'name' ]
// ]
```

Notes
This algorithm supports objects of any depth.
When using getRelativePathByValue, if multiple occurrences of the same value exist within the object, the function returns the path of the first occurrence found during traversal.
