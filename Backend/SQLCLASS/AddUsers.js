const { faker } = require('@faker-js/faker')
const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "CollegeDB",
});

let getRandomUser = () => {
    let firstname = faker.person.firstName();
    let lastname = faker.person.lastName();
    let username = firstname + lastname;
    return [
        faker.string.uuid(),
        username,
        faker.internet.email({ firstname, lastname }),
        faker.internet.password(),

    ]
};




let addUsers = async (query) => {
    const client = await pool.connect()
    try {
        await client.query(query)
        console.log('Record added successfully');
    }
    catch (e) {
        console.log(e);
    }
    await client.release();
}

for (let i = 0; i < 100; i++) {
    let data = getRandomUser();
    const query = {
        name: 'add-users',
        text: 'INSERT INTO usertable values ($1,$2,$3,$4)',
        values: [...data]
    }
    addUsers(query);
}

