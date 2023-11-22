class NavBar extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../components/nav-bar/styles.scss">
        <div id="nav-bar">
            <div id="nav-bar-enerwave">
                <img src="../../public/icons/enerwave-logo.svg" alt="">
                <div>
                    <div>
                        <img src="" alt="">
                        <p>Inicio</p>
                    </div>
                    <div>
                        <img src="" alt="">
                        <p>Biblioteca</p>
                    </div>
                    <div>
                        <img src="" alt="">
                        <p>Aprendizaje</p>
                    </div>
                </div>
            </div>
            <img src="../../public/icons/enerbit-logo.svg" alt="">
        </div>
        `;
    }
}

customElements.define('nav-bar', NavBar)
export default NavBar;