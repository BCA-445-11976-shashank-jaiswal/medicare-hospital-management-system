import axios from "axios";

async function testContactAPI() {
  console.log("Testing POST /api/contact...");
  try {
    const response = await axios.post("http://127.0.0.1:4000/api/contact", {
      name: "Test User",
      email: "hcoder81@gmail.com",
      phone: "1234567890",
      message: "This is a test message from the terminal script."
    });
    console.log("✅ API Response:", response.data);
  } catch (error) {
    console.error("❌ API Test Failed!");
    console.error("Error Detail:", error.response?.data || error.message);
  }
}

testContactAPI();
