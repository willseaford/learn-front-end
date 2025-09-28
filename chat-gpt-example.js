// 1. Imports
import fetch from "node-fetch";

// 2. Constants
const API_URL = "https://example.com/api";

// 3. Helper functions
function handleError(err) {
    console.error("API error:", err.message);
}

// 4. Classes
class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getData(endpoint) {
        try {
            const res = await fetch(`${this.baseUrl}/${endpoint}`);
            return res.json();
        } catch (err) {
            handleError(err);
        }
    }
}

// 5. Main logic
async function run() {
    const client = new ApiClient(API_URL);
    const data = await client.getData("users");
    console.log(data);
}

// 6. Exports
export { ApiClient, run };

// 7. Script execution
if (import.meta.url === `file://${process.argv[1]}`) {
    run();
}