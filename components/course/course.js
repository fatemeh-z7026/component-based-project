const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="components/course/course.css" />
<div class="course-card">
        <div class="img-cover">
          <img class="course-card-img" alt="" />
        </div>
        <div class="details">
          <h2></h2>
          <div class="info">
            <p>students: <slot name="students"></slot></p>
            <p>teacher: <slot name="teacher"></slot></p>
          </div>
          <div class="actions">
            <button id="register">register</button>
            <button id="toggle-btn">show details</button>
          </div>
        </div>
      </div>`;

class Course extends HTMLElement {
  constructor() {
    super();

    this.toggleInfo = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  register(comp) {
    alert(`You register in course ${comp.getAttribute("title")}`);
  }

  toggleAction() {
    this.toggleInfo = !this.toggleInfo;
    this.shadowRoot.querySelector(".info").style.display = this.toggleInfo
      ? "block"
      : "none";
    this.shadowRoot.querySelector("#toggle-btn").innerHTML = this.toggleInfo
      ? "Hide Details"
      : "Show Details";
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".details h2").innerHTML =
      this.getAttribute("title");

    this.shadowRoot
      .querySelector(".course-card-img")
      .setAttribute("src", this.getAttribute("img-cover"));

    this.shadowRoot.querySelector("#register").addEventListener("click", () => {
      this.register(this);
    });
    this.shadowRoot
      .querySelector("#toggle-btn")
      .addEventListener("click", () => this.toggleAction());
  }
  static observedAttribute() {
    return ["title", "img-cover"];
  }
}

export { Course }; 
