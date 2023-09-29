for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['Gbolahan', 'Favour', 'Ola', 'Jaminator'];

for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: 'Ismael',
    age: '23',
    isAdmin: true
}

for (const key in loggedInUser) {
    console.log(loggedInUser[key]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Are you sure you want to quit?');
}

console.log(isFinished);