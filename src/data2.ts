// export async function jokes(category: string) {
//     try {
//         const array = [];
//         for (let index = 1; index <= 16; index++) {
//             const data = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
//             const jokes = await data.json();
//             array.push(jokes);
//         };
//         return array;
//     } catch (error) {
//         console.log(error);
//     }
// }
    
export async function jokes(category: string) {
    try {
        const jokesArray = [];
        for (let i = 0; i < 5; i++) {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
            const jokeData = await response.json();
            jokesArray.push(jokeData);
        }
        return jokesArray;
    } catch (error) {
        console.error("Error fetching jokes:", error);
        return [];
    }
}