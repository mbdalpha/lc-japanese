class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML=`
    <header>
        <nav>
            <div class="pure-menu pure-menu-horizontal">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item">
                        <a href="homepage.html" class="pure-menu-link">Home</a>
                    </li>
                    <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover pure-menu-selected">
                        <a href="#" id="mainguide.html" class="pure-menu-link">Main Guide</a>
                        <ul class="pure-menu-children">
                            <li class="pure-menu-item">
                                <a href="mainguide.html" class="pure-menu-link">Kana</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="mainguide.html#vocab" class="pure-menu-link">Vocab</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="mainguide.html#grammar" class="pure-menu-link">Grammar</a>
                            </li>
                        </ul>
                    </li>
                    <li class="pure-menu-item">
                    <a class="pure-menu-link" href="resources.html">Resources</a>
                    </li>
                    <!-- FIXME:darkmode.js 
                    <li class="pure-menu-item">
                    <button onclick="swapStyle()" style="font-size: 1.4em; background: none ; border: none;">
                        <i id="themebutton" class="fa-solid fa-sun"></i>
                    </button>
                    </li>
                    -->
                </ul>
            </div>
        </nav>

        <h1>リービングサート日本語!</h1>
        <p><strong>A lineup of resources applicable to Leaving Cert Japanese</strong></p>
    </header>
    `;
    }
}

customElements.define('header-component', Header);
