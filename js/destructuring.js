const user = {
  firstName: "John",
  lastName: "Doe",
  social: {
    facebook: "johndoe",
    twitter: "jdoe",
  },
};

const { firstName, lastName, social: { facebook, twitter } = {} } = user;

// array destructuring
const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;
const [, , third, , last] = arr;
// rest operator
const [first, ...others] = arr;
console.log(first, others);
