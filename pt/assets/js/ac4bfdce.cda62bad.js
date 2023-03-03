"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=r.createContext({}),i=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,p=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=i(a),c=o,f=l["".concat(m,".").concat(c)]||l[c]||u[c]||p;return a?r.createElement(f,n(n({ref:t},d),{},{components:a})):r.createElement(f,n({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=a.length,n=new Array(p);n[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[l]="string"==typeof e?e:o,n[1]=s;for(var i=2;i<p;i++)n[i]=a[i];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var r=a(87462),o=(a(67294),a(3905));const p={sidebar_position:3},n='\ud83d\udfe2 Um Prompt "Padr\xe3o"',s={unversionedId:"basics/standard_prompt",id:"basics/standard_prompt",title:'\ud83d\udfe2 Um Prompt "Padr\xe3o"',description:"N\xf3s j\xe1 vimos alguns prompts de diferentes formatos at\xe9 aqui.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/basics/standard_prompt.md",sourceDirName:"basics",slug:"/basics/standard_prompt",permalink:"/pt/docs/basics/standard_prompt",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/standard_prompt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Role Prompting",permalink:"/pt/docs/basics/roles"},next:{title:"\ud83d\udfe2 More on Prompting",permalink:"/pt/docs/basics/more_on_prompting"}},m={},i=[{value:"Por que eu deveria me importar?",id:"por-que-eu-deveria-me-importar",level:4},{value:"Dois exemplos de <em>prompts</em> &quot;padr\xe3o&quot;:",id:"dois-exemplos-de-prompts-padr\xe3o",level:3},{value:"<em>Prompts Few Shot</em> Padr\xe3o",id:"prompts-few-shot-padr\xe3o",level:2},{value:"Dois exemplos de <em>prompts few shot</em> padr\xe3o:",id:"dois-exemplos-de-prompts-few-shot-padr\xe3o",level:3}],d={toc:i},l="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-um-prompt-padr\xe3o"},'\ud83d\udfe2 Um Prompt "Padr\xe3o"'),(0,o.kt)("p",null,"N\xf3s j\xe1 vimos alguns ",(0,o.kt)("em",{parentName:"p"},"prompts")," de diferentes formatos at\xe9 aqui.\nSeguindo Kojima et al.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", ",(0,o.kt)("em",{parentName:"p"},"prompts")," que s\xe3o constitu\xeddos apenas por perguntas ser\xe3o referidos como ",(0,o.kt)("em",{parentName:"p"},"prompts"),' "padr\xe3o". Os ',(0,o.kt)("em",{parentName:"p"},"prompts")," que s\xe3o constiu\xeddos apenas de perguntas e est\xe3o no formato PR (pergunta e resposta) tamb\xe9m ser\xe3o considerados como ",(0,o.kt)("em",{parentName:"p"},"prompts"),' "padr\xe3o". '),(0,o.kt)("h4",{id:"por-que-eu-deveria-me-importar"},"Por que eu deveria me importar?"),(0,o.kt)("p",null,"Muitos artigos que s\xe3o referenciados ao longo deste curso usam este termo.\nEnt\xe3o, feita a defini\xe7\xe3o formal, ser\xe1 poss\xedvel constratar outros tipos de ",(0,o.kt)("em",{parentName:"p"},"prompts")," em rela\xe7\xe3o aos ",(0,o.kt)("em",{parentName:"p"},"prompts"),' "padr\xe3o".'),(0,o.kt)("h3",{id:"dois-exemplos-de-prompts-padr\xe3o"},"Dois exemplos de ",(0,o.kt)("em",{parentName:"h3"},"prompts"),' "padr\xe3o":'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Prompt Padr\xe3o")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Qual \xe9 a capital da Fran\xe7a?\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Prompt Padr\xe3o no formato PR (pergunta e resposta)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"P: Qual \xe9 a capital da Fran\xe7a?\nR:\n")),(0,o.kt)("h2",{id:"prompts-few-shot-padr\xe3o"},(0,o.kt)("em",{parentName:"h2"},"Prompts Few Shot",(0,o.kt)("sup",{parentName:"em",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))," Padr\xe3o"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Prompts Few Shot")," padr\xe3o",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," s\xe3o apenas ",(0,o.kt)("em",{parentName:"p"},"prompts")," padr\xe3o que possuem ",(0,o.kt)("strong",{parentName:"p"},"exemplares")," neles. Ou seja, possuem exemplos no pr\xf3prio ",(0,o.kt)("em",{parentName:"p"},"prompt")," da tarefa que o ",(0,o.kt)("em",{parentName:"p"},"prompt")," est\xe1 tentando resolver",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". Nas pesquisas acad\xeamicas, ",(0,o.kt)("em",{parentName:"p"},"prompts few shot")," padr\xe3o s\xe3o, algumas vezes, referidos simplesmente como ",(0,o.kt)("em",{parentName:"p"},"prompts")," padr\xe3o (neste curso, isso ser\xe1 evitado)."),(0,o.kt)("h3",{id:"dois-exemplos-de-prompts-few-shot-padr\xe3o"},"Dois exemplos de ",(0,o.kt)("em",{parentName:"h3"},"prompts few shot")," padr\xe3o:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Prompt Few Shot Padr\xe3o")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Qual \xe9 a capital da Espanha?\nMadrid\nQual \xe9 a capital da It\xe1lia?\nRoma\nQual \xe9 a capital da Fran\xe7a?\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Prompt Few Shot Padr\xe3o no formato PR (pergunta e resposta)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"P: Qual \xe9 a capital da Espanha?\nR: Madrid\nP: Qual \xe9 a capital da It\xe1lia?\nR: Roma\nP: Qual \xe9 a capital da Fran\xe7a?\nR:\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Prompts Few Shot"),' facilitam o aprendizado "few shot", tamb\xe9m conhecido como aprendizado "contextualizado", que \xe9 a habilidade de aprender sem a atualiza\xe7\xe3o de par\xe2metros.'),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},'Few Shot pode ser traduzido como "poucos exemplos". No contexto de engenharia de ',(0,o.kt)("em",{parentName:"li"},"prompt"),', seria algo como "aprendizado com poucos exemplos".',(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Liu, P., Yuan, W., Fu, J., Jiang, Z., Hayashi, H., & Neubig, G. (2022). Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing. ACM Computing Surveys. https://doi.org/10.1145/3560815\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., \u2026 Amodei, D. (2020). Language Models are Few-Shot Learners.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);