import { version } from '../package.json';
import { LitElement, TemplateResult, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';
import { IConfig } from './models/interfaces';

console.info(
	`%c SERVICE-CALL-TILE-FEATURE v${version}`,
	'color: white; font-weight: bold; background: cornflowerblue',
);

class ServiceCallTileFeature extends LitElement {
	@property({ attribute: false })
	hass!: HomeAssistant;
	@property({ attribute: false })
	private config!: IConfig;
	@property({ attribute: false })
	private stateObj!: HassEntity;

	constructor() {
		super();
	}

	static get properties() {
		return {
			hass: {},
			config: {},
			stateObj: {},
		};
	}

	static getStubConfig() {
		return {
			type: 'custom:service-call',
			buttons: [
				{
					service: '',
				},
			],
		};
	}

	setConfig(config: IConfig) {
		if (!config) {
			throw new Error('Invalid configuration');
		}
		config = JSON.parse(JSON.stringify(config));
		for (const button of config.buttons) {
			// Merge target and data fields
			button.data = {
				...(button.data || {}),
				...(button.target || {}),
			};
		}
		this.config = config;
	}

	_press(e: MouseEvent) {
		e.stopImmediatePropagation();
		const i = parseInt(
			(e.currentTarget as HTMLButtonElement).getAttribute('itemid') ||
				'-1',
		);
		const button = this.config.buttons[i];
		const [domain, service] = button.service.split('.');

		const data = button.data || {};
		if (
			!('entity_id' in data) &&
			!('device_id' in data) &&
			!('area_id' in data)
		) {
			data['entity_id'] = this.stateObj.entity_id;
		}

		this.hass.callService(domain, service, data);
	}

	renderBackground(itemid: number, color?: string, opacity?: number) {
		let colorStyle = ``;
		let opacityStyle = ``;
		if (color) {
			colorStyle = `background-color: ${color};`;
		}
		if (opacity) {
			opacityStyle = `opacity: ${opacity};`;
		}
		const style = `${colorStyle}${opacityStyle}`;

		return html`<button
			class="button"
			itemid=${itemid}
			@click=${this._press}
			style="${style}"
		></button>`;
	}

	renderIcon(icon: string, color?: string) {
		let style = ``;
		if (color) {
			style = `color: ${color};`;
		}
		return html`<ha-icon .icon=${icon} style="${style}"></ha-icon>`;
	}

	renderLabel(text: string, color?: string) {
		let style = ``;
		if (color) {
			style = `color: ${color};`;
		}
		return html`<div class="label" style="${style}">${text}</div>`;
	}

	render() {
		if (!this.config || !this.hass || !this.stateObj) {
			return null;
		}

		const buttons: TemplateResult[] = [];
		for (const [i, entry] of this.config.buttons.entries()) {
			const button: TemplateResult[] = [];

			// Button/Background
			button.push(this.renderBackground(i, entry.color, entry.opacity));

			// Icon
			if ('icon' in entry) {
				button.push(
					this.renderIcon(entry.icon as string, entry.icon_color),
				);
			}

			// Label
			if ('label' in entry) {
				button.push(
					this.renderLabel(entry.label as string, entry.label_color),
				);
			}

			// Button, icon, and label in a container
			buttons.push(html`<div class="container">${button}</div>`);
		}

		return html`<div class="row">${buttons}</div> `;
	}

	static get styles() {
		return css`
			.row {
				display: flex;
				flex-direction: row;
				flex-flow: row;
				justify-content: center;
				align-items: center;
				padding: 0 12px 12px;
				gap: 12px;
				width: auto;
			}
			.container {
				display: flex;
				flex-flow: column;
				place-content: center space-evenly;
				align-items: center;
				position: relative;
				height: 40px;
				width: 100%;
				border-radius: 10px;
				border: none;
				padding: 0px;
				box-sizing: border-box;
				line-height: 0;
				outline: 0px;
				overflow: hidden;
				font-size: inherit;
				color: inherit;
			}
			.button {
				background-color: var(--disabled-color);
				opacity: 0.2;
				transition: background-color 180ms ease-in-out;
				position: absolute;
				cursor: pointer;
				height: inherit;
				width: inherit;
				border-radius: 10px;
				border: none;
			}
			@media (hover: hover) {
				.button:hover {
					opacity: 0.4;
				}
			}
			.button:active {
				opacity: 0.4;
			}

			ha-icon {
				position: relative;
				pointer-events: none;
				display: inline-flex;
				flex-flow: column;
				place-content: center;
			}

			.label {
				position: relative;
				pointer-events: none;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				height: 15px;
				width: inherit;
				font-family: inherit;
				font-size: 12px;
			}
		`;
	}
}

customElements.define('service-call', ServiceCallTileFeature);

window.customTileFeatures = window.customTileFeatures || [];
window.customTileFeatures.push({
	type: 'service-call',
	name: 'Service Call',
	configurable: true,
});
