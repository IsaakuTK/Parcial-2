import styles from './card.css';

export enum Attributtes {
 "icon_url"= "icon_url",
 "idu" = "idu",
 "url" = "url",
 "value" = "value"
}

class Card extends HTMLElement{

    icon_url?: string;
    idu?: string;
    url?: string;
    value?: string;


    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attributtes, null> = {
            icon_url: null,
            idu: null,
            url: null,
            value: null
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attributtes,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {          
                default:
                this[propName] = newValue;
                break;
            }
           
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img class="title" src="${this.icon_url}">
                            <p>${this.idu}</p>
                        </div>
                        <div class="flip-card-back">
                            <a href="${this.url}" target="_blank" class="title">Ver en API</a>
                            <p>${this.value}</p>
                        </div>
                    </div>
                </div>
            `;
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }    
    }
customElements.define("chis-card", Card);
export default Card;