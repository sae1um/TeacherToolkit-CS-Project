const USERS = require("./users.json");

// Configuration
const REGISTER_URL = 'http://localhost:3030/auth/register';
const LOGIN_URL = 'http://localhost:3030/auth/login';
const CONCURRENT_REQUESTS = 50; 

async function sendRegister(user){
    try{
        const response = await fetch(REGISTER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const json = await response.json();
        console.log(`Registering ${user.email}:`, response.status);
        if(json.error){
            console.log(json);
            return null;
        }
        return json;
    }catch(err){
        console.error(`Registration failed for ${user.email}:`, error.response?.status || error.message);
        return null;
    }
}


// Function to simulate a login request
async function sendLogin(user) {
    try {
        const response = await fetch(LOGIN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: user.email, password: user.password})
        })
        console.log(`Logging in ${user.email}:`, response.status);
        const json = await response.json();
        if(json.error){
            console.log(json);
            return null;
        }
        return json;
    } catch (error) {
        console.error(`Login failed for ${user.email}:`, error.response?.status || error.message);
        return null;
    }
}

// Function to run concurrent registrations
async function simlutateRegisters() {
    console.log(`Starting ${CONCURRENT_REQUESTS} concurrent registration requests...`);

    const promises = [];
    for (let i = 0; i < CONCURRENT_REQUESTS; i++) {
        // Cycle through the USERS array to simulate logins
        const user = USERS[i % USERS.length];
        promises.push(sendRegister(user));
    }

    // Wait for all registration attempts to complete
    const results = await Promise.all(promises);

    // Log results
    console.log(`Completed ${CONCURRENT_REQUESTS} registration requests.`);
    console.log(`Successes: ${results.filter((result) => result).length}`);
    console.log(`Failures: ${results.filter((result) => !result).length}`);
}

async function simulateLogin(){
    console.log(`Starting ${CONCURRENT_REQUESTS} concurrent registration requests...`);

    const promises = [];
    for (let i = 0; i < CONCURRENT_REQUESTS; i++) {
        const user = USERS[i % USERS.length];
        promises.push(sendLogin(user));
    }

    const results = await Promise.all(promises);

    // Log results
    console.log(`Completed ${CONCURRENT_REQUESTS} registration requests.`);
    console.log(`Successes: ${results.filter((result) => result).length}`);
    console.log(`Failures: ${results.filter((result) => !result).length}`);
}


// Run the simulation
// simlutateRegisters();
simulateLogin();