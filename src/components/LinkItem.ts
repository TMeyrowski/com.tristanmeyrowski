import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('link-item')
class LinkItem extends LitElement {
    static styles = css`
        :host {
            display: block;
            margin-block-end: 20px;
        }

        .link-title {
            font-weight: bold;
        }

        .link-description {
            margin-inline-start: 20px;
            margin-block-start: 5px;
        }

        a:hover {
            text-decoration: none;
        }
    `;

    @property({type: String})
    href = '';

    @property({type: String})
    title = '';

    @property({type: String})
    description = '';

    render() {
        return html`
            <a href="${this.href}" class="link-title" target="_blank" rel="noreferrer">${this.title}</a>
            <div class="link-description">
                ${this.description}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'link-item': LinkItem;
    }
}
