import dayjs from "dayjs";
import axios from "axios";
import _ from "lodash";
import moment from "moment";

console.log("[app-b] Starting application...");
console.log("[app-b] Current date (dayjs):", dayjs().format("YYYY-MM-DD HH:mm:ss"));
console.log("[app-b] Current date (moment):", moment().format("YYYY-MM-DD HH:mm:ss"));
console.log("[app-b] Using axios version:", axios.VERSION);
console.log("[app-b] Lodash version:", _.VERSION);

// Example data processing
const sampleData = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 }
];

console.log("[app-b] Processing data with lodash:");
const processedData = _.chain(sampleData)
  .filter(person => person.age >= 30)
  .map(person => ({ ...person, category: "senior" }))
  .value();

console.log("[app-b] Filtered data:", processedData);

// Example API call with different endpoint
async function fetchUserData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log("[app-b] Fetched user:", _.pick(response.data, ['id', 'name', 'email']));
  } catch (error) {
    console.log("[app-b] Error fetching user data:", error.message);
  }
}

fetchUserData();
