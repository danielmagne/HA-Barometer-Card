import{fireEvent as t}from"custom-card-helpers";function e(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,r)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t;var h;const d=window,c=d.trustedTypes,u=c?c.emptyScript:"",p=d.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:_},g="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const s=document.createElement("style"),r=i.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,t.appendChild(s)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:f;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var $;m[g]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:m}),(null!==(h=d.reactiveElementVersions)&&void 0!==h?h:d.reactiveElementVersions=[]).push("1.6.3");const y=window,b=y.trustedTypes,A=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,w="?"+E,S=`<${w}>`,C=document,k=()=>C.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,N="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,z=/>/g,O=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,R=/"/g,D=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),I=new WeakMap,V=C.createTreeWalker(C,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=U;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===U?"!--"===l[1]?o=H:void 0!==l[1]?o=z:void 0!==l[2]?(D.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=null!=r?r:U,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?O:'"'===l[3]?R:M):o===R||o===M?o=O:o===H||o===z?o=U:(o=O,r=void 0);const c=o===O&&t[e+1].startsWith("/>")?" ":"";n+=o===U?i+S:h>=0?(s.push(a),i.slice(0,h)+x+i.slice(h)+E+c):i+E+(-2===h?(s.push(void 0),e):c)}return[W(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=F(t,e);if(this.el=q.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=V.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(x)||e.startsWith(E)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+x).split(E),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Y:"@"===e[1]?tt:X})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(D.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),V.nextNode(),a.push({type:2,index:++r});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)a.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){var r,n,o,a;if(e===L)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=P(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=K(t,l._$AS(t,e.values),l,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);V.currentNode=r;let n=V.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new Z(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new et(n,this,t)),this._$AV.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=V.nextNode(),o++)}return V.currentNode=C,r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,s){var r;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),P(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(W(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new J(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new q(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Z(this.k(k()),this.k(k()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,s,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=K(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=K(this,s[i+o],e,o),a===L&&(a=this._$AH[o]),n||(n=!P(a)||a!==this._$AH[o]),a===B?t=B:t!==B&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const Q=b?b.emptyScript:"";class Y extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class tt extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=K(this,t,e,0))&&void 0!==i?i:B)===L)return;const s=this._$AH,r=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==B&&(s===B||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=y.litHtmlPolyfillSupport;null==it||it(q,Z),(null!==($=y.litHtmlVersions)&&void 0!==$?$:y.litHtmlVersions=[]).push("2.8.0");var st,rt;class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new Z(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}nt.finalized=!0,nt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:nt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:nt}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.3.3");const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ht(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}function dt(t){return ht({...t,state:!0})}var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;let ut=class extends nt{static async getConfigElement(){return await Promise.resolve().then(function(){return ft}),document.createElement("ha-barometer-card-editor")}static getStubConfig(){return{type:"custom:ha-barometer-card",entity:"sensor.pressure"}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("The entity field is required.");this._config={min_pressure:960,max_pressure:1040,...t}}getCardSize(){return 4}render(){if(!this._config||!this.hass)return j``;const t=this.hass.states[this._config.entity];if(!t)return j`
        <ha-card>
          <div class="missing-entity">
            ${this._config.name??"Barometer"}
            <p class="secondary">Entity "${this._config.entity}" not found.</p>
          </div>
        </ha-card>
      `;const e=Number(t.state),i=t.attributes.unit_of_measurement??"hPa",s=Number.isFinite(e)?e.toFixed(1):t.state,r=this._computeTrend(t),n=this._config.name??t.attributes.friendly_name??this._config.entity,o=this._computeNeedleAngle(e),a=this._formatDateTime(t);return j`
      <ha-card>
        <div class="card-header">
          <div class="title">${n}</div>
          <div class="subtitle">${r}</div>
        </div>
        <div class="dial">
          <div class="dial-face">
            <div class="dial-background"></div>
            <div class="dial-scale">
              ${this._renderTickMarks(this._config.min_pressure??960,this._config.max_pressure??1040)}
            </div>
            <div
              class="dial-needle"
              style="transform: rotate(${o}deg); border-color: ${this._config.needle_color??"var(--primary-color)"} transparent transparent transparent;"
            ></div>
            <div class="dial-cap"></div>
          </div>
          <div class="dial-value">
            <span class="pressure">${s}</span>
            <span class="unit">${i}</span>
          </div>
          <div class="last-updated">${a}</div>
        </div>
      </ha-card>
    `}_renderTickMarks(t,e){const i=e-t,s=Array.from({length:9},(s,r)=>{const n=t+i/8*r,o=this._mapValueToAngle(n,t,e);return j`
        <div class="tick" style="transform: rotate(${o}deg)">
          <span class="tick-label" style="transform: rotate(${-o}deg)">
            ${n.toFixed(0)}
          </span>
        </div>
      `});return j`<div class="ticks" aria-hidden="true">${s}</div>`}_computeNeedleAngle(t){if(!Number.isFinite(t))return 0;const e=this._config?.min_pressure??960,i=this._config?.max_pressure??1040;return this._mapValueToAngle(t,e,i)}_mapValueToAngle(t,e,i){return 240*((Math.min(Math.max(t,e),i)-e)/(i-e||1))-120}_computeTrend(t){const e=t.attributes.trend??t.attributes.pressure_trend??t.attributes.barometer_trend;if("string"==typeof e&&e.length){const t=e.toLowerCase();return t.includes("rising")?this._localize("ui.card.weather.attributes.pressure_trend.rising")??"Rising":t.includes("falling")?this._localize("ui.card.weather.attributes.pressure_trend.falling")??"Falling":t.includes("steady")||t.includes("stable")?this._localize("ui.card.weather.attributes.pressure_trend.steady")??"Steady":e}return this._localize("ui.card.weather.attributes.pressure_trend.unknown")??"Stable"}_formatDateTime(t){const e=new Date(t.last_changed),i=this.hass.formatDateTime;return"function"==typeof i?i.call(this.hass,e,{hour:"2-digit",minute:"2-digit"}):e.toLocaleString()}_localize(t){const e=this.hass?.localize;if("function"==typeof e)return e.call(this.hass,t)}static get styles(){return a`
      ha-card {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: stretch;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .title {
        font-size: 1.2rem;
        font-weight: 600;
      }

      .subtitle {
        color: var(--secondary-text-color);
        font-size: 0.9rem;
        text-transform: capitalize;
      }

      .dial {
        position: relative;
        display: grid;
        place-items: center;
        gap: 12px;
      }

      .dial-face {
        position: relative;
        width: min(260px, 100%);
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 0.4));
        box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1);
      }

      .dial-background {
        position: absolute;
        inset: 12%;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.85), rgba(230, 230, 230, 0.4));
      }

      .dial-scale {
        position: absolute;
        inset: 8%;
        border-radius: 50%;
      }

      .ticks {
        position: absolute;
        inset: 0;
      }

      .tick {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      .tick::before {
        content: '';
        position: absolute;
        top: 6%;
        left: 50%;
        width: 2px;
        height: 12%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.35);
      }

      .tick-label {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75rem;
        color: rgba(0, 0, 0, 0.65);
        letter-spacing: 0.03em;
      }

      .dial-needle {
        position: absolute;
        bottom: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 6px calc(50% - 18px) 6px;
        transform-origin: bottom center;
        transition: transform 0.8s ease-out;
      }

      .dial-cap {
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: radial-gradient(circle, var(--primary-color), var(--primary-text-color));
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.5);
      }

      .dial-value {
        display: flex;
        align-items: baseline;
        gap: 4px;
        font-variant-numeric: tabular-nums;
      }

      .pressure {
        font-size: 2rem;
        font-weight: 600;
      }

      .unit {
        color: var(--secondary-text-color);
        font-size: 0.9rem;
        text-transform: uppercase;
      }

      .last-updated {
        color: var(--secondary-text-color);
        font-size: 0.85rem;
      }

      .missing-entity {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .secondary {
        color: var(--secondary-text-color);
        margin: 0;
      }

      @media (max-width: 400px) {
        ha-card {
          padding: 12px;
        }

        .dial-face {
          width: min(220px, 100%);
        }
      }
    `}};e([ht({attribute:!1})],ut.prototype,"hass",void 0),e([dt()],ut.prototype,"_config",void 0),ut=e([at("ha-barometer-card")],ut),window.customCards=window.customCards||[],window.customCards.push({type:"ha-barometer-card",name:"HA Barometer Card",description:"Classic-inspired barometer gauge for pressure sensors."});let pt=class extends nt{setConfig(t){this._config={min_pressure:960,max_pressure:1040,...t}}render(){return this.hass&&this._config?j`
      <div class="form">
        <ha-entity-picker
          .hass=${this.hass}
          .label=${this._localize("ui.panel.lovelace.editor.card.generic.entity")}
          .value=${this._config.entity}
          .includeDomains=${["sensor"]}
          allow-custom-entity
          @value-changed=${this._handleEntityChanged}
        ></ha-entity-picker>

        <ha-textfield
          .label=${this._localize("ui.panel.lovelace.editor.card.generic.name")}
          .value=${this._config.name??""}
          @change=${this._handleTextChange("name")}
        ></ha-textfield>

        <ha-textfield
          label="Minimum pressure"
          helper="Dial lower bound (hPa)"
          type="number"
          .value=${String(this._config.min_pressure??960)}
          @change=${this._handleNumberChange("min_pressure")}
        ></ha-textfield>

        <ha-textfield
          label="Maximum pressure"
          helper="Dial upper bound (hPa)"
          type="number"
          .value=${String(this._config.max_pressure??1040)}
          @change=${this._handleNumberChange("max_pressure")}
        ></ha-textfield>

        <ha-textfield
          label="Needle color"
          helper="Any valid CSS color"
          .value=${this._config.needle_color??""}
          @change=${this._handleTextChange("needle_color")}
        ></ha-textfield>
      </div>
    `:j``}_handleEntityChanged(t){t.stopPropagation();const e=t.detail.value;this._updateConfig({entity:e??""})}_handleTextChange(t){return e=>{e.stopPropagation();const i=e.currentTarget;this._updateConfig({[t]:i.value||void 0})}}_handleNumberChange(t){return e=>{e.stopPropagation();const i=e.currentTarget.value,s=""===i?void 0:Number(i);this._updateConfig({[t]:void 0===s||Number.isNaN(s)?void 0:s})}}_updateConfig(e){if(!this._config)return;const i={...this._config,...e};this._config=i,t(this,"config-changed",{config:i})}_localize(t){const e=this.hass?.localize;return"function"==typeof e?e.call(this.hass,t):t}static get styles(){return a`
      .form {
        display: grid;
        gap: 16px;
        padding: 8px 4px 16px;
      }

      ha-textfield,
      ha-entity-picker {
        width: 100%;
      }
    `}};e([ht({attribute:!1})],pt.prototype,"hass",void 0),e([dt()],pt.prototype,"_config",void 0),pt=e([at("ha-barometer-card-editor")],pt);var ft=Object.freeze({__proto__:null,get HaBarometerCardEditor(){return pt}});export{ut as HaBarometerCard};
//# sourceMappingURL=ha-barometer-card.js.map
