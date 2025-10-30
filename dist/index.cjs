"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _styledcomponents = require('styled-components'); var _styledcomponents2 = _interopRequireDefault(_styledcomponents);var{entries:Y}=Object,p=e=>e.charAt(0).toUpperCase()+e.slice(1),j=(e="")=>_nullishCoalesce(_optionalChain([e, 'access', _2 => _2.match, 'call', _3 => _3(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g), 'optionalAccess', _4 => _4.map, 'call', _5 => _5(t=>t.toLowerCase()), 'optionalAccess', _6 => _6.join, 'call', _7 => _7("-")]), () => (""));function s(e,t){return/(px|%)$/.test(e)||typeof e=="string"||e===0?e:t.spacing(e)}function n(e){return typeof e=="number"?`${e}px`:e}function a(e,t,...i){let o;for(let l=0;l<i.length;l++){let g=i[l];if(t){let d=e[`$${t}$${g}`];if(d){o=d;break}}let u=e[`$${g}`];if(u){o=u;break}}return o}function f(e,t,...i){return!!a(e,t,...i)}var v=null;function P(e){if(v)return v;let t={};return Y(e).forEach(([i,o])=>{i.split("|").forEach(l=>{t[l]=o})}),v=t,t}var $=null;function S(e){return $||($=new RegExp(`^\\$(${e.Breakpoints.keys.join("|")})(\\$.*)`),$)}function W(e,t){if(e){if([100,200,300,400,500,600,700,800,900].includes(e))return`color: ${t[`fill${e}`]};`;if(typeof e=="string")return t[e]?`color: ${t[e]};`:`color: ${e};`}return""}var z=e=>typeof e=="number"?`${e}px`:e;var{fromEntries:D}=Object,F=D(["display","align","vAlign","alignItems","alignContent","alignSelf","justifyContent","justifySelf","flexDirection","flexBasis","flexWrap","pointerEvents","cursor","position","opacity","backgroundColor","backgroundImage","backgroundSize","backgroundPosition","backgroundRepeat","transform","transformOrigin","textDecoration","textWrap","animation","fontWeight","gap","gridTemplateColumns","gridTemplateRows","wordBreak","whiteSpace","textOverflow","overflow","overflowX","overflowY","textAlign","transitionDelay","filter","listStyle","objectFit","objectPosition","willChange","boxSizing"].map(e=>[e,1])),I={inline:"display: inline",block:"display: block",flex:`
    display: flex;
    width: 100%;
  `,autoFlex:`
    display: flex;
    width: auto;
  `,grid:`
    display: grid;
  `,hide:"display: none",inlineBlock:"display: inline-block",inlineFlex:"display: inline-flex","column|col":"flex-direction: column;",row:"flex-direction: row;",spaceBetween:"justify-content: space-between;",wrap:"flex-wrap: wrap;",innerCenter:(e,t)=>f(e,t,"flex","inlineFlex")?`
          justify-content: center;
          align-items: center;
        `:`
          text-align: center;
          ${f(e,t,"h","height")?`line-height: ${a(e,t,"h","height")};`:""}
        `,innerLeft:(e,t)=>f(e,t,"flex","inlineFlex")?f(e,t,"column","col")?"align-items: flex-start;":"justify-content: flex-start;":"text-align: left;",innerRight:(e,t)=>f(e,t,"flex","inlineFlex")?f(e,t,"column","col")?"align-items: flex-end;":"justify-content: flex-end;":"text-align: right;",innerTop:(e,t)=>f(e,t,"flex","inlineFlex")?f(e,t,"column","col")?"justify-content: flex-start;":"align-items: flex-start;":"",innerBottom:(e,t)=>f(e,t,"flex","inlineFlex")?f(e,t,"column","col")?"justify-content: flex-end;":"align-items: flex-end;":"",outerCenter:`
    margin-left: auto;
    margin-right: auto;
  `,grow:{css:"flex-grow",format:Number},shrink:{css:"flex-shrink"},"colReverse|columnReverse":{css:"flex-direction: column-reverse;"},reverse:{css:"flex-direction: row-reverse;"},"width|w":{css:"width",format:n},"minWidth|minW":{css:"min-width",format:n},"maxWidth|maxW":{css:(e,t)=>`
      width: 100%;
      max-width: ${n(a(e,t,"maxWidth","maxW"))};
    `},"height|h":{css:"height",format:n},"minHeight|minH":{css:"min-height",format:n},"maxHeight|maxH":{css:(e,t)=>`
      height: 100%;
      max-height: ${n(a(e,t,"maxHeight","maxH"))};
    `},"lineHeight|lineH|lh":{css:"line-height",format:n},pointer:"cursor: pointer;",relative:"position: relative",absolute:"position: absolute",fixed:"position: fixed",static:"position: static",cover:`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,"zIndex|z":{css:"z-index",withTheme:!0},top:{css:"top",format:n},right:{css:"right",format:n},bottom:{css:"bottom",format:n},left:{css:"left",format:n},"padding|p":{css:"padding",format:s},"paddingTop|pt":{css:"padding-top",format:s},"paddingRight|pr":{css:"padding-right",format:s},"paddingBottom|pb":{css:"padding-bottom",format:s},"paddingLeft|pl":{css:"padding-left",format:s},"paddingX|px":{css:(e,t)=>`
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
          border-top-left-radius: ${n(i[0])};
          border-top-right-radius: ${n(i[1])};
          border-bottom-right-radius: ${n(i[2])};
          border-bottom-left-radius: ${n(i[3])};
        `:`border-radius: ${n(i)}`}},borderTopLeftRadius:{css:"border-top-left-radius",format:n},borderTopRightRadius:{css:"border-top-right-radius",format:n},borderBottomRightRadius:{css:"border-bottom-right-radius",format:n},borderBottomLeftRadius:{css:"border-bottom-left-radius",format:n},borderColor:{css:"border-color",withTheme:!0},borderImage:{css:"border-image",withTheme:!0},...[["border","border"],["borderTop","border-top"],["borderRight","border-right"],["borderBottom","border-bottom"],["borderLeft","border-left"]].reduce((e,[t,i])=>({...e,[t]:{css:(o,l,g)=>{let u=a(o,l,_optionalChain([g, 'optionalAccess', _8 => _8.length])?[t,...g].join("$"):t),d=typeof u=="function"?u(o.theme):u;return/^\d/.test(d)?`${i}: ${d}`:`${i}: 1px solid ${d}`}}}),{}),transition:(e,t)=>{let i=a(e,t,"transition");return typeof i=="string"?`transition: ${i}`:"transition: all .2s"},"boxShadow|shadow":{css:"box-shadow",withTheme:!0},textShadow:{css:"text-shadow",withTheme:!0},color:{css:"color",withTheme:!0},fill:{css:"fill",withTheme:!0},fontSize:{css:"font-size",format:n},outline:{css:"outline",withTheme:!0}};var{keys:V}=Object;function R(e,t){let i="",o=P(t),l=S(e.theme),g=-1,u=V(e);for(;++g<u.length;){let d=u[g];if(/^\$/.test(d)){let x=e[d];if(x!==!1){let E=d.match(l)||[],[,b,H]=E,T=(H||d).slice(1).split("$"),y=T[0],c=T.slice(1),C=o[y]||F[y]&&j(y);if(C){let m=C,B=m.withTheme&&typeof x=="function"?x(e.theme):x,X=m.format?m.format(B,e.theme):B,h="";typeof m=="string"?h=m:typeof m=="function"?h=m(e,b,c):typeof m.css=="function"?h=m.css(e,b,c):h=m.css;let r="",k=h.match(/:/g);k&&k.length>1?r=h:k===null?r=`${h}: ${X};`:r=`${h.replace(/;$/,"")};`,c.includes("important")&&(r=r.replace(/;/g," !important;")),c.includes("hover")&&!c.includes("focus")&&(r=`&:hover,&:focus { ${r} }`),c.includes("hover")&&c.includes("focus")&&(r=`&:hover { ${r} }`),c.includes("focus")&&(r=`&:focus { ${r} }`),c.includes("active")&&(r=`&:active { ${r} }`),c.includes("last")&&(r=`&:last-child { ${r} }`),c.includes("odd")&&(r=`&:nth-child(odd) { ${r} }`),c.includes("even")&&(r=`&:nth-child(even) { ${r} }`),b&&(r=`${e.theme.Breakpoints.getCssMedia(e.theme.Breakpoints[p(b)])} { ${r} }`),i+=r}}}}return i}var w=e=>R(e,I),G=_styledcomponents2.default.div`
  ${e=>w(e)}
`,M= exports.Div =G;var U={weight:"font-weight",size:{css:"font-size",format:z},color:{css:(e,t,i)=>{let o=i.includes("hover")?e.$color$hover:e.$color;return W(o,e.theme)}},tnum:'font-feature-settings: "tnum";letter-spacing:-0.04em;',breakWord:"word-break: break-word;",noBreak:"white-space: nowrap;",uppercase:"text-transform: uppercase;",serif:'font-family: "Times New Roman", Times, serif',"spacing|letterSpacing":"letter-spacing",left:"text-align: left;",right:"text-align: right;",center:"text-align: center;",lineThrough:"text-decoration: line-through",linearGradient:e=>`
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
  `,underline:"text-decoration: underline;"},N=_styledcomponents2.default.p`
  ${e=>w(e)}
  ${e=>R(e,U)}
`,q= exports.Text =N;var{keys:J,entries:A,fromEntries:L}=Object,Q=()=>typeof window<"u"&&typeof document<"u"?document.body.clientWidth:0,_=e=>({getCssMedia:({min:t,max:i})=>t&&i?`@media (min-width: ${t}px) and (max-width: ${i}px)`:t?`@media (min-width: ${t}px)`:`@media (max-width: ${i}px)`,keys:J(e),...L(A(e).map(([t,{min:i,max:o}])=>[p(t),{min:i,max:o}])),...L(A(e).map(([t,{min:i=0,max:o=1/0}])=>[`is${p(t)}`,(l=Q())=>l!==0&&l>=i&&l<=o]))}),K=e=>(t,i=0,o=!0)=>(t||1)*e+i+(o?"px":0);function ee({theme:e,breakpoints:t,spacingUnit:i}){let o=_(t);return{theme:{...e,Breakpoints:o,spacing:K(i)},Breakpoints:o}}var te=ee;var we=M;exports.Div = M; exports.Text = q; exports.createUISystem = te; exports.default = we; exports.divMixin = w;
//# sourceMappingURL=index.cjs.map