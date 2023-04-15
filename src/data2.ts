export async function jokes() {
    try {
    const array=[];
    for (let index = 1; index <= 16; index++) {
    const data = await fetch('https://api.chucknorris.io/jokes/random?category=travel');
    const jokes= await data.json();
    array.push(jokes);
    };
    return array;
    } catch (error) {
    console.log(error);
    }
    }
    