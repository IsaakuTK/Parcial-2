import "./components/export"
import styles from "./index.css"
import {cat} from './data'
import {jokes} from './data2'
import  Card, { Attributtes } from "./components/card/card";
import Button, { AttributtesButton } from "./components/button/button";

class AppContainer extends HTMLElement {
    jokess: Card[]=[];
    buttons: Button [] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const data = await cat();
        console.log(data);
        data?.forEach((siu:any) => {
            const button = this.ownerDocument.createElement("chis-button") as Button;
            button.setAttribute(AttributtesButton.name, siu);
            this.buttons.push(button);
            
        });
        
            const data2 = await jokes();
            console.log(data2);
            data2?.forEach((e:any) => {
                const prof = this.ownerDocument.createElement(
                    "chis-card"
                    ) as Card;
                    prof.setAttribute(Attributtes.icon_url, e.icon_url);
                    prof.setAttribute(Attributtes.idu, e.id);
                    prof.setAttribute(Attributtes.url, e.url);
                    prof.setAttribute(Attributtes.value, e.value);

                    this.jokess.push(prof);
            });
        this.render(this.jokess);
    }

    render(jokess : any) {
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);

        this.buttons.forEach((s:any) => {
            this.shadowRoot?.appendChild(s);
    });
    const card = this.ownerDocument.createElement("section")
            card.className = "card";
            for (let index = 0; index < jokess.length; index++) {
                 card.appendChild(jokess[index]);
            }  
            this.shadowRoot?.appendChild(card);

        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)


