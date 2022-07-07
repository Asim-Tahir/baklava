import{c as a,d,j as h,k as l,l as c}from"./chunk-A2UGGNEY.js";var u=l(class extends c{constructor(e){var s;if(super(e),e.type!==h.ATTRIBUTE||e.name!=="class"||((s=e.strings)===null||s===void 0?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(s=>e[s]).join(" ")+" "}update(e,[s]){var i,r;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in s)s[t]&&!(!((i=this.st)===null||i===void 0)&&i.has(t))&&this.et.add(t);return this.render(s)}let o=e.element.classList;this.et.forEach(t=>{t in s||(o.remove(t),this.et.delete(t))});for(let t in s){let n=!!s[t];n===this.et.has(t)||((r=this.st)===null||r===void 0?void 0:r.has(t))||(n?(o.add(t),this.et.add(t)):(o.remove(t),this.et.delete(t)))}return a}});var y=e=>e??d;export{u as a,y as b};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=chunk-BGRHNNGM.js.map
