const template = document.createElement("template");
template.innerHTML = `
 <link rel="stylesheet" href="components/header/header.css" />
<div class="header-container"><h2 class="header-title"></h2></div>`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("h2").innerHTML =
      this.getAttribute("header-title");
  }

  static observedAttribute() {
    return ["header-title"];
  }
}

export { Header };
