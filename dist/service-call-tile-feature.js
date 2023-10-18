/*! For license information please see service-call-tile-feature.js.LICENSE.txt */
(()=>{"use strict";var t={393:function(t,e,i){var r=this&&this.__decorate||function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};Object.defineProperty(e,"__esModule",{value:!0}),e.BaseServiceCallFeature=void 0;const n=i(677),s=i(595),o=i(921);let l=class extends n.LitElement{constructor(){super()}renderIcon(t,e){const i={};return e&&(i.color=e),n.html`<ha-icon
			.icon=${t}
			style="${(0,o.styleMap)(i)}"
		></ha-icon>`}renderLabel(t,e){const i={};return e&&(i.color=e),n.html`<div class="label" style="${(0,o.styleMap)(i)}">${t}</div>`}render(){let t=n.html``;"icon"in this.entry&&(t=this.renderIcon(this.entry.icon,this.entry.icon_color));let e=n.html``;return"label"in this.entry&&(e=this.renderLabel(this.entry.label,this.entry.label_color)),n.html`${t}${e}`}static get styles(){return[n.css`
				:host {
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
			`]}};e.BaseServiceCallFeature=l,r([(0,s.property)({attribute:!1})],l.prototype,"hass",void 0),r([(0,s.property)({attribute:!1})],l.prototype,"entry",void 0),r([(0,s.property)({attribute:!1})],l.prototype,"itemid",void 0),e.BaseServiceCallFeature=l=r([(0,s.customElement)("base-service-call-feature")],l)},827:function(t,e,i){var r=this&&this.__decorate||function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};Object.defineProperty(e,"__esModule",{value:!0}),e.ServiceCallButton=void 0;const n=i(677),s=i(595),o=i(921),l=i(393);let a=class extends l.BaseServiceCallFeature{constructor(){super()}onClick(t){t.stopImmediatePropagation();const[e,i]=this.entry.service.split("."),r=this.entry.data||{};this.hass.callService(e,i,r)}render(){const t={};this.entry.color&&(t["background-color"]=this.entry.color),this.entry.opacity&&(t.opacity=this.entry.opacity);const e=n.html`<button
			class="button"
			itemid=${this.itemid}
			@click=${this.onClick}
			style=${(0,o.styleMap)(t)}
		></button>`;let i=n.html``;"icon"in this.entry&&(i=this.renderIcon(this.entry.icon,this.entry.icon_color));let r=n.html``;return"label"in this.entry&&(r=this.renderLabel(this.entry.label,this.entry.label_color)),n.html`${e}${i}${r} `}static get styles(){return[super.styles,n.css`
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
						opacity: 0.3;
					}
				}
				.button:active {
					opacity: 0.3;
				}
			`]}};e.ServiceCallButton=a,e.ServiceCallButton=a=r([(0,s.customElement)("service-call-button")],a)},114:function(t,e,i){var r=this&&this.__decorate||function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};Object.defineProperty(e,"__esModule",{value:!0});const n=i(147),s=i(677),o=i(595);i(827),console.info(`%c SERVICE-CALL-TILE-FEATURE v${n.version}`,"color: white; font-weight: bold; background: cornflowerblue");class l extends s.LitElement{constructor(){super()}static getStubConfig(){return{type:"custom:service-call",entries:[{type:"button",service:""}]}}setConfig(t){if(!t)throw new Error("Invalid configuration");"buttons"in(t=JSON.parse(JSON.stringify(t)))&&!("entries"in t)&&(t.entries=t.buttons);for(const e of t.entries)e.data=Object.assign(Object.assign({},e.data||{}),e.target||{}),"type"in e||(e.type="button");this.config=t}renderIcon(t,e){let i="";return e&&(i=`color: ${e};`),s.html`<ha-icon .icon=${t} style="${i}"></ha-icon>`}renderLabel(t,e){let i="";return e&&(i=`color: ${e};`),s.html`<div class="label" style="${i}">${t}</div>`}onSlide(t){var e;t.preventDefault(),t.stopImmediatePropagation();const i=t.currentTarget;let r=null!==(e=parseInt(i.value))&&void 0!==e?e:0;r<0?r=0:r>100&&(r=100);const n=i.parentElement.children[2].innerHTML;i.value=n;let s=parseInt(n);if(s>r){const t=setInterval((()=>{r>=s&&clearInterval(t),s-=1,i.value=s.toString()}),1)}else if(s<r){const t=setInterval((()=>{r<=s&&clearInterval(t),s+=1,i.value=s.toString()}),1)}t.currentTarget.parentElement.children[2].innerHTML=r.toString()}renderSlider(t,e){return s.html`
			<div class="slider-background"></div>
			<input
				type="range"
				class="slider"
				min="0"
				max="100"
				itemid=${t}
				@input=${this.onSlide}
			/>
			${this.renderLabel("50")}
		`}render(){if(!this.config||!this.hass||!this.stateObj)return null;const t=[];for(const[e,i]of this.config.entries.entries()){let r;"entity_id"in i.data||"device_id"in i.data||"area_id"in i.data||(i.data.entity_id=this.stateObj.entity_id),"slider"===i.type.toLowerCase()?(r=this.renderSlider(e,i),t.push(s.html`<div class="container">${r}</div>`)):(r=s.html` <service-call-button
						.hass=${this.hass}
						.entry=${i}
						.itemid=${e}
					/>`,t.push(r))}return s.html`<div class="row">${t}</div>`}static get styles(){return s.css`
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
					opacity: 0.3;
				}
			}
			.button:active {
				opacity: 0.3;
			}

			.slider-background {
				position: absolute;
				width: inherit;
				height: inherit;
				background: var(--slider-color);
				opacity: 0.2;
			}

			.slider {
				position: absolute;
				appearance: none;
				-webkit-appearance: none;
				-moz-appearance: none;
				height: inherit;
				width: inherit;
				overflow: hidden;
				border-radius: 10px;
				background: none;
			}

			.slider::-webkit-slider-thumb {
				appearance: none;
				-webkit-appearance: none;
				height: 18px;
				width: 4px;
				border-radius: 12px;
				background: #ffffff;
				cursor: pointer;
				box-shadow: calc(-100vw + 6px) 0 0 100vw var(--slider-color);
			}

			.slider::-moz-range-thumb {
				appearance: none;
				-moz-appearance: none;
				height: 18px;
				width: 4px;
				border-radius: 12px;
				background: #ffffff;
				cursor: pointer;
				box-shadow: calc(-100vw + 6px) 0 0 100vw var(--slider-color);
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
		`}}r([(0,o.property)({attribute:!1})],l.prototype,"hass",void 0),r([(0,o.property)({attribute:!1})],l.prototype,"config",void 0),r([(0,o.property)({attribute:!1})],l.prototype,"stateObj",void 0),customElements.define("service-call",l),window.customTileFeatures=window.customTileFeatures||[],window.customTileFeatures.push({type:"service-call",name:"Service Call",configurable:!0})},692:(t,e,i)=>{var r;i.d(e,{Al:()=>q,Jb:()=>C,Ld:()=>k,YP:()=>x,dy:()=>E,sY:()=>F});const n=window,s=n.trustedTypes,o=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,h=`<${c}>`,d=document,u=()=>d.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,f=t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),y="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,m=/>/g,_=RegExp(`>|${y}(?:([^\\s"'>=/]+)(${y}*=${y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,A=/"/g,S=/^(?:script|style|textarea|title)$/i,w=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),E=w(1),x=w(2),C=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),P=new WeakMap,O=d.createTreeWalker(d,129,null,!1);function R(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(e):e}const T=(t,e)=>{const i=t.length-1,r=[];let n,s=2===e?"<svg>":"",o=$;for(let e=0;e<i;e++){const i=t[e];let c,d,u=-1,p=0;for(;p<i.length&&(o.lastIndex=p,d=o.exec(i),null!==d);)p=o.lastIndex,o===$?"!--"===d[1]?o=g:void 0!==d[1]?o=m:void 0!==d[2]?(S.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=_):void 0!==d[3]&&(o=_):o===_?">"===d[0]?(o=null!=n?n:$,u=-1):void 0===d[1]?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=void 0===d[3]?_:'"'===d[3]?A:b):o===A||o===b?o=_:o===g||o===m?o=$:(o=_,n=void 0);const v=o===_&&t[e+1].startsWith("/>")?" ":"";s+=o===$?i+h:u>=0?(r.push(c),i.slice(0,u)+l+i.slice(u)+a+v):i+a+(-2===u?(r.push(void 0),e):v)}return[R(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class N{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const h=t.length-1,d=this.parts,[p,v]=T(t,e);if(this.el=N.createElement(p,i),O.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=O.nextNode())&&d.length<h;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(l)||e.startsWith(a)){const i=v[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+l).split(a),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?L:"?"===e[1]?z:"@"===e[1]?B:M})}else d.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(S.test(r.tagName)){const t=r.textContent.split(a),e=t.length-1;if(e>0){r.textContent=s?s.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],u()),O.nextNode(),d.push({type:2,index:++n});r.append(t[e],u())}}}else if(8===r.nodeType)if(r.data===c)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(a,t+1));)d.push({type:7,index:n}),t+=a.length-1}n++}}static createElement(t,e){const i=d.createElement("template");return i.innerHTML=t,i}}function U(t,e,i=t,r){var n,s,o,l;if(e===C)return e;let a=void 0!==r?null===(n=i._$Co)||void 0===n?void 0:n[r]:i._$Cl;const c=p(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,r)),void 0!==r?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[r]=a:i._$Cl=a),void 0!==a&&(e=U(t,a._$AS(t,e.values),a,r)),e}class j{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(i,!0);O.currentNode=n;let s=O.nextNode(),o=0,l=0,a=r[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new H(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new D(s,this,t)),this._$AV.push(e),a=r[++l]}o!==(null==a?void 0:a.index)&&(s=O.nextNode(),o++)}return O.currentNode=d,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{constructor(t,e,i,r){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),p(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==C&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):f(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=N.createElement(R(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new j(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new N(t)),e}T(t){v(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new H(this.k(u()),this.k(u()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class M{constructor(t,e,i,r,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let s=!1;if(void 0===n)t=U(this,t,e,0),s=!p(t)||t!==this._$AH&&t!==C,s&&(this._$AH=t);else{const r=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=U(this,r[i+o],e,o),l===C&&(l=this._$AH[o]),s||(s=!p(l)||l!==this._$AH[o]),l===k?t=k:t!==k&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}s&&!r&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const I=s?s.emptyScript:"";class z extends M{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class B extends M{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=U(this,t,e,0))&&void 0!==i?i:k)===C)return;const r=this._$AH,n=t===k&&r!==k||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==k&&(r===k||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const q={O:l,P:a,A:c,C:1,M:T,L:j,R:f,D:U,I:H,V:M,H:z,N:B,U:L,F:D},V=n.litHtmlPolyfillSupport;null==V||V(N,H),(null!==(r=n.litHtmlVersions)&&void 0!==r?r:n.litHtmlVersions=[]).push("2.8.0");const F=(t,e,i)=>{var r,n;const s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let o=s._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new H(e.insertBefore(u(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o}},595:(t,e,i)=>{i.r(e),i.d(e,{customElement:()=>r,eventOptions:()=>c,property:()=>o,query:()=>h,queryAll:()=>d,queryAssignedElements:()=>f,queryAssignedNodes:()=>y,queryAsync:()=>u,state:()=>l});const r=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},s=(t,e,i)=>{e.constructor.createProperty(i,t)};function o(t){return(e,i)=>void 0!==i?s(t,e,i):n(t,e)}function l(t){return o({...t,state:!0})}const a=({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(s.finisher=function(e){t(e,r)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}};function c(t){return a({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function h(t,e){return a({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}function d(t){return a({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function u(t){return a({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var p;const v=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function f(t){const{slot:e,selector:i}=null!=t?t:{};return a({descriptor:r=>({get(){var r;const n="slot"+(e?`[name=${e}]`:":not([name])"),s=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(n),o=null!=s?v(s,t):[];return i?o.filter((t=>t.matches(i))):o},enumerable:!0,configurable:!0})})}function y(t,e,i){let r,n=t;return"object"==typeof t?(n=t.slot,r=t):r={flatten:e},i?f({slot:n,flatten:e,selector:i}):a({descriptor:t=>({get(){var t,e;const i="slot"+(n?`[name=${n}]`:":not([name])"),s=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==s?void 0:s.assignedNodes(r))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},921:(t,e,i)=>{i.r(e),i.d(e,{styleMap:()=>l});var r=i(692);class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const s="important",o=" !"+s,l=(a=class extends n{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const r=e[t];if(null!=r){this.ht.add(t);const e="string"==typeof r&&r.endsWith(o);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?s:""):i[t]=r}}return r.Jb}},(...t)=>({_$litDirective$:a,values:t}));var a},677:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>l,LitElement:()=>x,ReactiveElement:()=>b,UpdatingElement:()=>E,_$LE:()=>k,_$LH:()=>w.Al,adoptStyles:()=>h,css:()=>c,defaultConverter:()=>$,getCompatibleStyle:()=>d,html:()=>w.dy,isServer:()=>P,noChange:()=>w.Jb,notEqual:()=>g,nothing:()=>w.Ld,render:()=>w.sY,supportsAdoptingStyleSheets:()=>n,svg:()=>w.YP,unsafeCSS:()=>a});const r=window,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const a=t=>new l("string"==typeof t?t:t+"",void 0,s),c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new l(i,t,s)},h=(t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=r.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return a(e)})(t):t;var u;const p=window,v=p.trustedTypes,f=v?v.emptyScript:"",y=p.reactiveElementPolyfillSupport,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:g},_="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var r;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:$).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=r.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:$;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}b[_]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==y||y({ReactiveElement:b}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.3");var A,S,w=i(692);const E=b;class x extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,w.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return w.Jb}}x.finalized=!0,x._$litElement$=!0,null===(A=globalThis.litElementHydrateSupport)||void 0===A||A.call(globalThis,{LitElement:x});const C=globalThis.litElementPolyfillSupport;null==C||C({LitElement:x});const k={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(S=globalThis.litElementVersions)&&void 0!==S?S:globalThis.litElementVersions=[]).push("3.3.3");const P=!1},147:t=>{t.exports=JSON.parse('{"name":"service-call-tile-feature","version":"2.0.0","description":"Service Call Tile Feature for Home Assistant Tile Card","main":"./dist/service-call-tile-feature.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","build":"npx webpack","prelint":"tsc --noemit","lint":"eslint ./src --fix --ext .ts --config ./.eslintrc.js","pretty-quick":"pretty-quick","postinstall":"husky install","build-css":"tcm src"},"repository":{"type":"git","url":"git+https://github.com/Nerwyn/service-call-tile-feature.git"},"keywords":[],"author":"Nerwyn","license":"Apache-2.0","bugs":{"url":"https://github.com/Nerwyn/service-call-tile-feature/issues"},"homepage":"https://github.com/Nerwyn/service-call-tile-feature#readme","husky":{"hooks":{"pre-commit":"pretty-quick --staged"}},"dependencies":{"custom-card-helpers":"^1.9.0","lit":"^2.8.0"},"devDependencies":{"@typescript-eslint/eslint-plugin":"^6.6.0","@typescript-eslint/parser":"^6.6.0","eslint":"^8.48.0","husky":"^8.0.3","prettier":"^3.0.3","pretty-quick":"^3.1.3","ts-loader":"^9.4.4","typescript":"^5.2.2","webpack":"^5.88.2","webpack-cli":"^5.1.4"}}')}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,i),s.exports}i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(114)})();