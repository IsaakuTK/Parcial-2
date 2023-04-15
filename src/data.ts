export async function cat() {
        try {
        const data = await fetch('https://api.chucknorris.io/jokes/categories');
        const jokes= await data.json();
        return jokes;
        } catch (error) {
        console.log(error);
        }
    }
        