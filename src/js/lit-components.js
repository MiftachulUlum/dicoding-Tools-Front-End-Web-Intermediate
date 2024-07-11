import { LitElement, html, css } from 'lit';

class StoryComponent extends LitElement {
  static properties = {
    name: { type: String },
    description: { type: String },
    photoUrl: { type: String },
    createdAt: { type: String }
  };

  static styles = css`
    .story-card {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 16px 0;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .story-photo {
      max-width: 100%;
      border-radius: 8px;
    }
  `;

  render() {
    return html`
      <div class="story-card">
        <h2>${this.name}</h2>
        <img class="story-photo" src="${this.photoUrl}" alt="${this.description}">
        <p>${this.description}</p>
        <small>${this.createdAt}</small>
      </div>
    `;
  }
}

customElements.define('story-component', StoryComponent);
