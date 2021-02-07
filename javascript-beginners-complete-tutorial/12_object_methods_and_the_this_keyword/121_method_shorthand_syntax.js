// упрощенное написание методов
const auth = {
    username: 'TommyBot',
    login() {
        console.log("LOGGED YOU IN!");
    },
    logout() {
        console.log("GOODBYE");
    }
}

const m1 = auth.login
console.log(m1());
console.log(auth.login);
