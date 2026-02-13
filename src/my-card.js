import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.fancy = false;
    this.title = "Card Title";
    this.link = "";
    this.image="";
    this.alt="alt text for image";
    this.btn="Button Text";

  }

  static get styles() {
    return css`
        .card {
  display:inline-block;
  text-align: center;
  background-color: var(--my-card-bg-color, #D0D7E7);
  width: 400px;
  height: 500px;
  margin: 16px auto;
  padding: 16px;
}

:host([fancy]) {
display: inline-block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}

.card-image {
  width: 200px;
}

h1 {
  color: #12152B;
}

.btn {
  color: #12152B;
  font-family: "Times New Roman", Times, serif;
  font-size: 32px;
  margin: 10px 50px 100px;
  padding: 20px 80px;
  border: 10px solid #12152B;
  border-radius: 10px;
}  
  .btn {
    font-size: 20px;
    padding: 12px 40px;
    border-width: 6x;
  }
  .desc {
    max-height: 150px;
    overflow-y: auto;
  }
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`
  <div class="wrapper">
  <div class="card">
  <h2 class="card-title">${this.title}</h2>
  <img class="card-image" src="${this.image}" alt="${this.alt}"> 
  <!-- put this in your render method where you had details -->
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
    <summary>Description</summary>
      <div class="desc">
        <slot>${this.description}</slot>
      </div>
</details>
  <a href="${this.link}" class="details-btn">
    <button class="btn"> ${this.btn}  </button>
  </a>
  </div>
</div>
`;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
      image: { type: String },
      alt: { type: String },
      btn: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
