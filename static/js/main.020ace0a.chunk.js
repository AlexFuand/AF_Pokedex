(this.webpackJsonppokemonapp=this.webpackJsonppokemonapp||[]).push([[0],{10:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(3),n=t.n(a),o=(t(8),t(0));var j=()=>{const[e,s]=Object(c.useState)(),[t,a]=Object(c.useState)(),[n,j]=Object(c.useState)(""),[i,l]=Object(c.useState)(),[d,r]=Object(c.useState)([]),[b,u]=Object(c.useState)(""),m=[...Array(10).keys()];Object(c.useEffect)((()=>{e&&(async()=>{const s=await fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)),t=await s.json();j(t.name),l(t.id),r(t.types),u(t.sprites.front_default)})()}),[e]);console.log(t);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"topPokedex",children:[Object(o.jsxs)("div",{className:"upScreen",children:[Object(o.jsxs)("div",{className:"upScreenButton",children:[Object(o.jsx)("div",{className:"upScreenButtonOne"}),Object(o.jsx)("div",{className:"upScreenButtonTwo"}),Object(o.jsx)("div",{className:"upScreenButtonThree"}),Object(o.jsx)("div",{className:"upScreenButtonFour"}),Object(o.jsx)("div",{className:"upScreenButtonFive",children:Object(o.jsx)("div",{className:"upScreenButtonShadow"})})]}),Object(o.jsx)("div",{className:"upScreenPolygon"}),Object(o.jsxs)("div",{className:"topButtons",children:[Object(o.jsx)("div",{className:"topButton topButtonOne",children:Object(o.jsx)("div",{className:"topButtonShadow"})}),Object(o.jsx)("div",{className:"topButton topButtonTwo",children:Object(o.jsx)("div",{className:"topButtonShadow"})}),Object(o.jsx)("div",{className:"topButton topButtonThree",children:Object(o.jsx)("div",{className:"topButtonShadow"})})]})]}),Object(o.jsx)("div",{className:"screen",children:Object(o.jsxs)("div",{className:"screenElements",children:[Object(o.jsxs)("div",{className:"screenUpButtons",children:[Object(o.jsx)("div",{className:"screenUpButtonOne",children:Object(o.jsx)("div",{className:"screenUpButtonShadow"})}),Object(o.jsx)("div",{className:"screenUpButtonTwo",children:Object(o.jsx)("div",{className:"screenUpButtonShadow"})})]}),Object(o.jsx)("div",{className:"screenBackground",children:n?Object(o.jsxs)("div",{className:"screenLoaded",children:[Object(o.jsx)("img",{src:b,alt:b}),Object(o.jsxs)("div",{className:"infos",children:[Object(o.jsxs)("div",{children:["Pokedex N\xb0 : ",i," "]}),Object(o.jsx)("div",{className:"pokeName",children:n}),Object(o.jsxs)("div",{className:"pokeType",children:[1===d.length?"Type":"Types"," : ",d.map(((e,s)=>Object(o.jsx)("span",{children:e.type.name},s)))]})]})]}):Object(o.jsx)("div",{className:"screenBase"})}),Object(o.jsxs)("div",{className:"screenDown",children:[Object(o.jsx)("div",{className:"screenDownButtons"}),Object(o.jsx)("div",{className:"screenDownButtons"}),Object(o.jsx)("div",{className:"screenDownButtons"})]})]})})]}),Object(o.jsxs)("div",{className:"lines",children:[Object(o.jsx)("div",{className:"contrastLineOne"}),Object(o.jsx)("div",{className:"contrastLineTwo"}),Object(o.jsx)("div",{className:"yellowLine"}),Object(o.jsx)("div",{className:"borderLine"})]}),Object(o.jsxs)("div",{className:"bottomPokedex",children:[Object(o.jsxs)("div",{className:"bottomScreen",children:[Object(o.jsx)("input",{value:t,type:"text",placeholder:"ENTER NAME OR NUMBER",onChange:e=>a(e.target.value),className:"input_zone"}),Object(o.jsx)("div",{className:"shadow one"}),Object(o.jsx)("div",{className:"shadow two"}),Object(o.jsx)("div",{className:"shadow three"})]}),Object(o.jsx)("div",{className:"bottomKeyboard",children:m.map(((e,s)=>Object(o.jsx)("button",{className:"keyboardButton",onClick:()=>(e=>{a(0!==e||void 0!==t&&""!==t?t+e.toString():"")})(e),children:e},s)))}),Object(o.jsxs)("div",{className:"bottomButtons",children:[Object(o.jsxs)("div",{className:"bottomButtonsLeft",children:[Object(o.jsx)("button",{className:"searchButton",onClick:()=>(e=>{const t=e.replace(/\s+/g,"").toLowerCase();s(t),a("")})(t),children:"search"}),Object(o.jsx)("button",{className:"clearButton",onClick:()=>(s(""),a(""),void j("")),children:"clear"})]}),Object(o.jsx)("div",{className:"bottomButtonRight",children:Object(o.jsxs)("div",{className:"upScreenButton",children:[Object(o.jsx)("div",{className:"upScreenButtonOne"}),Object(o.jsx)("div",{className:"upScreenButtonTwo"}),Object(o.jsx)("div",{className:"upScreenButtonThree"}),Object(o.jsx)("div",{className:"upScreenButtonFour"}),Object(o.jsx)("div",{className:"upScreenButtonFive",children:Object(o.jsx)("div",{className:"upScreenButtonShadow"})})]})})]}),Object(o.jsxs)("div",{className:"bottomNav",children:[Object(o.jsx)("button",{className:"previousButton",onClick:()=>{s(i-1)},children:"Previous"}),Object(o.jsx)("button",{className:"nextButton",onClick:()=>(async()=>{s(i+1)})(),children:"Next"})]})]})]})};n.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))},8:function(e,s,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.020ace0a.chunk.js.map