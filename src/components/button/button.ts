import styles from './button.css';

export enum AttributtesButton {
 "name" = "name",
}

class Button extends HTMLElement{

    name?: string;

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    static get observedAttributes(){
        const attrs: Record<AttributtesButton, null> = {
            name: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
    }


    attributeChangedCallback(
        propName: AttributtesButton,
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
                <section class = "all">
                <button class ="b">${this.name}</button>
                </section>
            `;
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }    
    }
customElements.define("chis-button", Button);
export default Button;



