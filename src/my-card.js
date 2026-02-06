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
    this.title = "Clippy Card!";
    this.link = "https://hax.psu.edu";
    this.image="https://i.pinimg.com/originals/21/86/a6/2186a6ede0392eae08c4297a3ac3b84a.gif";
    this.alt="GIF of Clippy reading a document";
    this.btn="Details";

  }

  static get styles() {
    return css`
        .card {
  text-align: center;
  background-color: var(--my-card-bg-color, #D0D7E7);
  max-width: 400px;
  margin: 16px auto;
  padding: 16px;
}

.card-image {
  width: 300px;
  border: 10px solid #12152B;
  border-radius: 10px;
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

    `;
  }

  render() {
    return html`
<div id="cardlist" class="wrapper">
  <div class="card">
  <h2 class="card-title">${this.title}</h2>
  <img class="card-image" src="${this.image}" alt="${this.alt}"> 

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
      image: { type: String },
      alt: { type: String },
      btn: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
