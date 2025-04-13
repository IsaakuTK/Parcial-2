import styles from "./index.css"
import {cat} from './data'
import {jokes} from './data2'
import { Button, Card} from "./components/export";
import  { Attributtes } from "./components/card/card";
import { AttributtesButton } from "./components/button/button";

class AppContainer extends HTMLElement {
    buttons: Button[] = [];
    cardsContainer: HTMLElement;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.cardsContainer = document.createElement("section");
        this.cardsContainer.className = "cards-container";
    }

    async connectedCallback() {
        // Cargar categorías y crear botones
        const categories = await cat();
        
        categories?.forEach((category: string) => {
            const button = this.ownerDocument.createElement("chis-button") as Button;
            button.setAttribute(AttributtesButton.name, category);
            
            button.addEventListener('click', async () => {
                await this.loadJokes(category);
            });
            
            this.buttons.push(button);
        });

        this.render();
    }

    async loadJokes(category: string) {
        // Limpiar cartas existentes
        this.cardsContainer.innerHTML = "";
        
        // Obtener 5 nuevos chistes
        const jokesData = await jokes(category);
        
        // Crear y agregar las nuevas cartas
        jokesData?.forEach((joke: any) => {
            const card = this.ownerDocument.createElement("chis-card") as Card;
            card.setAttribute(Attributtes.icon_url, joke.icon_url);
            card.setAttribute(Attributtes.idu, joke.id);
            card.setAttribute(Attributtes.url, joke.url);
            card.setAttribute(Attributtes.value, joke.value);
            
            this.cardsContainer.appendChild(card);
        });
    }

    render() {
        if (!this.shadowRoot) return;
        
        this.shadowRoot.innerHTML = '';
        
        // Agregar estilos
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot.appendChild(css);

        // Crear contenedor de botones
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        
        // Agregar botones
        this.buttons.forEach(button => {
            buttonContainer.appendChild(button);
        });

        // Agregar elementos al shadow DOM
        this.shadowRoot.appendChild(buttonContainer);
        this.shadowRoot.appendChild(this.cardsContainer);
    }
}

customElements.define('app-container', AppContainer);