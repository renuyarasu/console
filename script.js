// Javascript console Methods
console.clear(); // Console was cleared

// console.table();

async function getUsers() {
    let response = await
        fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    // console.log(data); // display info
    // console.table(data); // display data in table
    console.table(data, ['username']); // display username data in table
}
getUsers();