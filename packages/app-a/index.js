import dayjs from "dayjs";
import axios from "axios";
import _ from "lodash";

console.log("[app-a] Starting application...");
console.log("[app-a] Current date:", dayjs().format("YYYY-MM-DD HH:mm:ss"));
console.log("[app-a] Using axios version:", axios.VERSION);
console.log("[app-a] Lodash version:", _.VERSION);

// Example API call
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log("[app-a] Fetched data:", _.pick(response.data, ['id', 'title']));
  } catch (error) {
    console.log("[app-a] Error fetching data:", error.message);
  }
}

fetchData();
