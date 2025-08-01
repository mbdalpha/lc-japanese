class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML=`
    <footer>
        <div class="row">
            <div class="main">
                <p>
                    This is a work in progress, more stuff will likely be added as time progresses
                </p>
                <p>
                    Please contact "mbda" on Discord if you have any questions or suggestions.
                </p>
            </div>
            <div class="discord">
                <a href="homepage.html" style="display:block; font-size: 1.7em; background-color:#7289da; color:white; text-decoration: none; border-radius: 8px; text-align:center;">
                <i class="fa-brands fa-discord"></i>
                Join us on Discord
                </a>
            </div>
        </div>
    </footer>
    
    `;
    }
}

customElements.define('footer-component', Footer);