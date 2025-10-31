"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _styledcomponents = require('styled-components'); var _styledcomponents2 = _interopRequireDefault(_styledcomponents);var{entries:D}=Object,p=e=>e.charAt(0).toUpperCase()+e.slice(1),P=(e="")=>_nullishCoalesce(_optionalChain([e, 'access', _2 => _2.match, 'call', _3 => _3(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g), 'optionalAccess', _4 => _4.map, 'call', _5 => _5(t=>t.toLowerCase()), 'optionalAccess', _6 => _6.join, 'call', _7 => _7("-")]), () => (""));function s(e,t){return/(px|%)$/.test(e)||typeof e=="string"||e===0?e:t.spacing(e)}function o(e){return typeof e=="number"?`${e}px`:e}function a(e,t,...i){let r;for(let l=0;l<i.length;l++){let u=i[l];if(t){let g=e[`$${t}$${u}`];if(g){r=g;break}}let f=e[`$${u}`];if(f){r=f;break}}return r}function d(e,t,...i){return!!a(e,t,...i)}var T={};function L(e,t){if(T[t])return T[t];let i={};return D(e).forEach(([r,l])=>{r.split("|").forEach(u=>{i[u]=l})}),T[t]=i,i}var w=null;function S(e){return w||(w=new RegExp(`^\\$(${e.Breakpoints.keys.join("|")})(\\$.*)`),w)}function W(e,t){if(console.log("TCL: colorMixin -> color",e),e){if([100,200,300,400,500,600,700,800,900].includes(e))return`color: ${t[`fill${e}`]};`;if(typeof e=="string")return t[e]?`color: ${t[e]};`:`color: ${e};`}return""}var z=e=>typeof e=="number"?`${e}px`:e;var{fromEntries:O}=Object,F=O(["display","align","vAlign","alignItems","alignContent","alignSelf","justifyContent","justifySelf","flexDirection","flexBasis","flexWrap","pointerEvents","cursor","position","opacity","backgroundColor","backgroundImage","backgroundSize","backgroundPosition","backgroundRepeat","transform","transformOrigin","textDecoration","textWrap","animation","fontWeight","gap","gridTemplateColumns","gridTemplateRows","wordBreak","whiteSpace","textOverflow","overflow","overflowX","overflowY","textAlign","transitionDelay","filter","listStyle","objectFit","objectPosition","willChange","boxSizing"].map(e=>[e,1])),M={inline:"display: inline",block:"display: block",flex:`
    display: flex;
    width: 100%;
  `,autoFlex:`
    display: flex;
    width: auto;
  `,grid:`
    display: grid;
  `,hide:"display: none",inlineBlock:"display: inline-block",inlineFlex:"display: inline-flex","column|col":"flex-direction: column;",row:"flex-direction: row;",spaceBetween:"justify-content: space-between;",wrap:"flex-wrap: wrap;",innerCenter:(e,t)=>d(e,t,"flex","inlineFlex")?`
          justify-content: center;
          align-items: center;
        `:`
          text-align: center;
          ${d(e,t,"h","height")?`line-height: ${a(e,t,"h","height")};`:""}
        `,innerLeft:(e,t)=>d(e,t,"flex","inlineFlex")?d(e,t,"column","col")?"align-items: flex-start;":"justify-content: flex-start;":"text-align: left;",innerRight:(e,t)=>d(e,t,"flex","inlineFlex")?d(e,t,"column","col")?"align-items: flex-end;":"justify-content: flex-end;":"text-align: right;",innerTop:(e,t)=>d(e,t,"flex","inlineFlex")?d(e,t,"column","col")?"justify-content: flex-start;":"align-items: flex-start;":"",innerBottom:(e,t)=>d(e,t,"flex","inlineFlex")?d(e,t,"column","col")?"justify-content: flex-end;":"align-items: flex-end;":"",outerCenter:`
    margin-left: auto;
    margin-right: auto;
  `,grow:{css:"flex-grow",format:Number},shrink:{css:"flex-shrink"},"colReverse|columnReverse":{css:"flex-direction: column-reverse;"},reverse:{css:"flex-direction: row-reverse;"},"width|w":{css:"width",format:o},"minWidth|minW":{css:"min-width",format:o},"maxWidth|maxW":{css:(e,t)=>`
      width: 100%;
      max-width: ${o(a(e,t,"maxWidth","maxW"))};
    `},"height|h":{css:"height",format:o},"minHeight|minH":{css:"min-height",format:o},"maxHeight|maxH":{css:(e,t)=>`
      height: 100%;
      max-height: ${o(a(e,t,"maxHeight","maxH"))};
    `},"lineHeight|lineH|lh":{css:"line-height",format:o},pointer:"cursor: pointer;",relative:"position: relative",absolute:"position: absolute",fixed:"position: fixed",static:"position: static",cover:`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,"zIndex|z":{css:"z-index",withTheme:!0},top:{css:"top",format:o},right:{css:"right",format:o},bottom:{css:"bottom",format:o},left:{css:"left",format:o},"padding|p":{css:"padding",format:s},"paddingTop|pt":{css:"padding-top",format:s},"paddingRight|pr":{css:"padding-right",format:s},"paddingBottom|pb":{css:"padding-bottom",format:s},"paddingLeft|pl":{css:"padding-left",format:s},"paddingX|px":{css:(e,t)=>`
      padding-left: ${s(a(e,t,"paddingX","px"),e.theme)};
      padding-right: ${s(a(e,t,"paddingX","px"),e.theme)};
    `},"paddingY|py":{css:(e,t)=>`
      padding-top: ${s(a(e,t,"paddingY","py"),e.theme)};
      padding-bottom: ${s(a(e,t,"paddingY","py"),e.theme)};
    `},"margin|m":{css:"margin",format:s},"marginTop|mt":{css:"margin-top",format:s},"marginRight|mr":{css:"margin-right",format:s},"marginBottom|mb":{css:"margin-bottom",format:s},"marginLeft|ml":{css:"margin-left",format:s},"marginX|mx":{css:(e,t)=>`
      margin-left: ${s(a(e,t,"marginX","mx"),e.theme)};
      margin-right: ${s(a(e,t,"marginX","mx"),e.theme)};
    `},"marginY|my":{css:(e,t)=>`
      margin-top: ${s(a(e,t,"marginY","my"),e.theme)};
      margin-bottom: ${s(a(e,t,"marginY","my"),e.theme)};
    `},"background|bg":{css:"background",withTheme:!0},"borderRadius|radius":{css:(e,t)=>{let i=a(e,t,"borderRadius","radius");return Array.isArray(i)?`
          border-top-left-radius: ${o(i[0])};
          border-top-right-radius: ${o(i[1])};
          border-bottom-right-radius: ${o(i[2])};
          border-bottom-left-radius: ${o(i[3])};
        `:`border-radius: ${o(i)}`}},borderTopLeftRadius:{css:"border-top-left-radius",format:o},borderTopRightRadius:{css:"border-top-right-radius",format:o},borderBottomRightRadius:{css:"border-bottom-right-radius",format:o},borderBottomLeftRadius:{css:"border-bottom-left-radius",format:o},borderColor:{css:"border-color",withTheme:!0},borderImage:{css:"border-image",withTheme:!0},...[["border","border"],["borderTop","border-top"],["borderRight","border-right"],["borderBottom","border-bottom"],["borderLeft","border-left"]].reduce((e,[t,i])=>({...e,[t]:{css:(r,l,u)=>{let f=a(r,l,_optionalChain([u, 'optionalAccess', _8 => _8.length])?[t,...u].join("$"):t);console.log("TCL: propValue",f);let g=typeof f=="function"?f(r.theme):f;return/^\d/.test(g)?`${i}: ${g}`:`${i}: 1px solid ${g}`}}}),{}),transition:(e,t)=>{let i=a(e,t,"transition");return typeof i=="string"?`transition: ${i}`:"transition: all .2s"},"boxShadow|shadow":{css:"box-shadow",withTheme:!0},textShadow:{css:"text-shadow",withTheme:!0},color:{css:"color",withTheme:!0},fill:{css:"fill",withTheme:!0},fontSize:{css:"font-size",format:o},outline:{css:"outline",withTheme:!0}};var{keys:Z}=Object;function y(e,t,i="div"){let r="",l=L(t,i),u=S(e.theme),f=-1,g=Z(e);for(;++f<g.length;){let x=g[f];if(/^\$/.test(x)){let b=e[x];if(b!==!1){let V=x.match(u)||[],[,$,X]=V,C=(X||x).slice(1).split("$"),v=C[0],c=C.slice(1),B=l[v]||F[v]&&P(v);if(B){let m=B,j=m.withTheme&&typeof b=="function"?b(e.theme):b,Y=m.format?m.format(j,e.theme):j,h="";typeof m=="string"?h=m:typeof m=="function"?h=m(e,$,c):typeof m.css=="function"?h=m.css(e,$,c):h=m.css;let n="",R=h.match(/:/g);R&&R.length>1?n=h:R===null?n=`${h}: ${Y};`:n=`${h.replace(/;$/,"")};`,c.includes("important")&&(n=n.replace(/;/g," !important;")),c.includes("hover")&&!c.includes("focus")&&(n=`&:hover,&:focus { ${n} }`),c.includes("hover")&&c.includes("focus")&&(n=`&:hover { ${n} }`),c.includes("focus")&&(n=`&:focus { ${n} }`),c.includes("active")&&(n=`&:active { ${n} }`),c.includes("last")&&(n=`&:last-child { ${n} }`),c.includes("odd")&&(n=`&:nth-child(odd) { ${n} }`),c.includes("even")&&(n=`&:nth-child(even) { ${n} }`),$&&(n=`${e.theme.Breakpoints.getCssMedia(e.theme.Breakpoints[p($)])} { ${n} }`),r+=n}}}}return r}var k=e=>y(e,M),U=_styledcomponents2.default.div`
  ${e=>k(e)}
`,I= exports.Div =U;var A={weight:"font-weight",size:{css:"font-size",format:z},color:{css:(e,t,i)=>{let r=i.includes("hover")?e.$color$hover:e.$color;return console.log("TCL: color",r),W(r,e.theme)}},tnum:'font-feature-settings: "tnum";letter-spacing:-0.04em;',breakWord:"word-break: break-word;",noBreak:"white-space: nowrap;",uppercase:"text-transform: uppercase;",serif:'font-family: "Times New Roman", Times, serif',"spacing|letterSpacing":"letter-spacing",left:"text-align: left;",right:"text-align: right;",center:"text-align: center;",lineThrough:"text-decoration: line-through",linearGradient:e=>`
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(${typeof e.$linearGradient=="function"?e.$linearGradient(e.theme):e.$linearGradient});
  `,ellipsis:`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  `,underline:"text-decoration: underline;"},q=_styledcomponents2.default.p`
  ${e=>k(e)}
  ${e=>(console.log("TCL: props",e),console.log("TCL: render",y(e,A,"text")),y(e,A,"text"))}
`,J= exports.Text =q;var{keys:Q,entries:E,fromEntries:H}=Object,_=()=>typeof window<"u"&&typeof document<"u"?document.body.clientWidth:0,K=e=>({getCssMedia:({min:t,max:i})=>t&&i?`@media (min-width: ${t}px) and (max-width: ${i}px)`:t?`@media (min-width: ${t}px)`:`@media (max-width: ${i}px)`,keys:Q(e),...H(E(e).map(([t,{min:i,max:r}])=>[p(t),{min:i,max:r}])),...H(E(e).map(([t,{min:i=0,max:r=1/0}])=>[`is${p(t)}`,(l=_())=>l!==0&&l>=i&&l<=r]))}),ee=e=>(t,i=0,r=!0)=>(t||1)*e+i+(r?"px":0);function te({theme:e,breakpoints:t,spacingUnit:i}){let r=K(t);return{theme:{...e,Breakpoints:r,spacing:ee(i)},Breakpoints:r}}var ie=te;var ye=I;exports.Div = I; exports.Text = J; exports.createUISystem = ie; exports.default = ye; exports.divMixin = k;
//# sourceMappingURL=index.cjs.map