function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,_=f.trustedTypes,g=_?_.emptyScript:"",m=f.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??v)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,m?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.1.1");const x=globalThis,w=x.trustedTypes,E=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,T=`<${P}>`,N=document,U=()=>N.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,M="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,R=/>/g,D=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,F=N.createTreeWalker(N,129);function J(t,e){if(!k(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===H?"!--"===l[1]?o=z:void 0!==l[1]?o=R:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=D):void 0!==l[3]&&(o=D):o===D?">"===l[0]?(o=r??H,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?D:'"'===l[3]?L:j):o===L||o===j?o=D:o===z||o===R?o=H:(o=D,r=void 0);const d=o===D&&t[e+1].startsWith("/>")?" ":"";n+=o===H?s+T:h>=0?(i.push(a),s.slice(0,h)+S+s.slice(h)+C+d):s+C+(-2===h?e:d)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=K(t,e);if(this.el=Z.createElement(l,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=h[n++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=N.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===q)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??N).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=F.nextNode(),n++)}return F.currentNode=N,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>k(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new G(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=X(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=X(this,i[s+o],e,o),a===q&&(a=this._$AH[o]),n||=!O(a)||a!==this._$AH[o],a===V?t=V:t!==V&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends Y{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??V)===q)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(Z,Q),(x.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;class ot extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Q(e.insertBefore(U(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.1");const lt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},ct=(t=ht,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function dt(t){return(e,s)=>"object"==typeof s?ct(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function pt(t){return dt({...t,state:!0,attribute:!1})}let ut=class extends ot{static async getConfigElement(){return await Promise.resolve().then(function(){return _t}),document.createElement("ha-barometer-card-editor")}static getStubConfig(){return{type:"custom:ha-barometer-card",entity:"sensor.pressure"}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("The entity field is required.");this._config={min_pressure:960,max_pressure:1040,...t}}getCardSize(){return 4}render(){if(!this._config||!this.hass)return I``;const t=this.hass.states[this._config.entity];if(!t)return I`
        <ha-card>
          <div class="missing-entity">
            ${this._config.name??"Barometer"}
            <p class="secondary">Entity "${this._config.entity}" not found.</p>
          </div>
        </ha-card>
      `;const e=Number(t.state),s=t.attributes.unit_of_measurement??"hPa",i=Number.isFinite(e)?e.toFixed(1):t.state,r=this._computeTrend(t),n=this._config.name??t.attributes.friendly_name??this._config.entity,o=this._computeNeedleAngle(e),a=this._formatDateTime(t);return I`
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
            <span class="pressure">${i}</span>
            <span class="unit">${s}</span>
          </div>
          <div class="last-updated">${a}</div>
        </div>
      </ha-card>
    `}_renderTickMarks(t,e){const s=e-t,i=Array.from({length:9},(i,r)=>{const n=t+s/8*r,o=this._mapValueToAngle(n,t,e);return I`
        <div class="tick" style="transform: rotate(${o}deg)">
          <span class="tick-label" style="transform: rotate(${-o}deg)">
            ${n.toFixed(0)}
          </span>
        </div>
      `});return I`<div class="ticks" aria-hidden="true">${i}</div>`}_computeNeedleAngle(t){if(!Number.isFinite(t))return 0;const e=this._config?.min_pressure??960,s=this._config?.max_pressure??1040;return this._mapValueToAngle(t,e,s)}_mapValueToAngle(t,e,s){return 240*((Math.min(Math.max(t,e),s)-e)/(s-e||1))-120}_computeTrend(t){const e=t.attributes.trend??t.attributes.pressure_trend??t.attributes.barometer_trend;if("string"==typeof e&&e.length){const t=e.toLowerCase();return t.includes("rising")?this._localize("ui.card.weather.attributes.pressure_trend.rising")??"Rising":t.includes("falling")?this._localize("ui.card.weather.attributes.pressure_trend.falling")??"Falling":t.includes("steady")||t.includes("stable")?this._localize("ui.card.weather.attributes.pressure_trend.steady")??"Steady":e}return this._localize("ui.card.weather.attributes.pressure_trend.unknown")??"Stable"}_formatDateTime(t){const e=new Date(t.last_changed),s=this.hass.formatDateTime;return"function"==typeof s?s.call(this.hass,e,{hour:"2-digit",minute:"2-digit"}):e.toLocaleString()}_localize(t){const e=this.hass?.localize;if("function"==typeof e)return e.call(this.hass,t)}static get styles(){return o`
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
    `}};t([dt({attribute:!1})],ut.prototype,"hass",void 0),t([pt()],ut.prototype,"_config",void 0),ut=t([lt("ha-barometer-card")],ut),window.customCards=window.customCards||[],window.customCards.push({type:"ha-barometer-card",name:"HA Barometer Card",description:"Classic-inspired barometer gauge for pressure sensors."});let ft=class extends ot{connectedCallback(){super.connectedCallback(),!customElements.get("ha-entity-picker")&&window.loadCardHelpers&&window.loadCardHelpers().then(()=>this.requestUpdate()).catch(()=>{})}setConfig(t){this._config={min_pressure:960,max_pressure:1040,...t}}render(){if(!this.hass||!this._config)return I``;const t=this._config;return I`
      <div class="form">
        <!-- Entity -->
        <ha-entity-picker
          .hass=${this.hass}
          .label=${this._localize("ui.panel.lovelace.editor.card.generic.entity")}
          .value=${t.entity}
          .includeDomains=${["sensor"]}
          allow-custom-entity
          @value-changed=${this._handleEntityChanged}
        ></ha-entity-picker>

        <!-- Name -->
        <ha-textfield
          .label=${this._localize("ui.panel.lovelace.editor.card.generic.name")}
          .value=${t.name??""}
          @change=${this._handleTextChange("name")}
        ></ha-textfield>

        <!-- Minimum pressure -->
        <ha-textfield
          label="Minimum pressure"
          helper="Dial lower bound (hPa)"
          type="number"
          .value=${String(t.min_pressure??960)}
          @change=${this._handleNumberChange("min_pressure")}
        ></ha-textfield>

        <!-- Maximum pressure -->
        <ha-textfield
          label="Maximum pressure"
          helper="Dial upper bound (hPa)"
          type="number"
          .value=${String(t.max_pressure??1040)}
          @change=${this._handleNumberChange("max_pressure")}
        ></ha-textfield>

        <!-- Needle color -->
        <ha-textfield
          label="Needle color"
          helper="Any valid CSS color (e.g. red, #ff0000, var(--accent-color))"
          .value=${t.needle_color??""}
          @change=${this._handleTextChange("needle_color")}
        ></ha-textfield>
      </div>
    `}_handleEntityChanged(t){t.stopPropagation();const e=t.detail.value;this._updateConfig({entity:e??""})}_handleTextChange(t){return e=>{e.stopPropagation();const s=e.currentTarget;this._updateConfig({[t]:s.value||void 0})}}_handleNumberChange(t){return e=>{e.stopPropagation();const s=e.currentTarget,i=""===s.value?void 0:Number(s.value);this._updateConfig({[t]:void 0===i||Number.isNaN(i)?void 0:i})}}_updateConfig(t){if(!this._config)return;const e={...this._config,...t};this._config=e}_localize(t){const e=this.hass?.localize;return"function"==typeof e?e.call(this.hass,t):t}static get styles(){return o`
      .form {
        display: grid;
        gap: 16px;
        padding: 8px 4px 16px;
      }

      ha-textfield,
      ha-entity-picker {
        width: 100%;
      }
    `}};t([dt({attribute:!1})],ft.prototype,"hass",void 0),t([pt()],ft.prototype,"_config",void 0),ft=t([lt("ha-barometer-card-editor")],ft);var _t=Object.freeze({__proto__:null,get HaBarometerCardEditor(){return ft}});export{ut as HaBarometerCard};
//# sourceMappingURL=ha-barometer-card.js.map
