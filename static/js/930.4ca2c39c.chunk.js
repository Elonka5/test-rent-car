"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[930],{930:function(n,e,i){i.r(e),i.d(e,{default:function(){return y}});var r,s,t=i(413),c=i(791),l=i(184),o=function(n){var e=n.id,i=n.img,r=n.make,s=n.model,t=n.year,c=n.rentalPrice,o=n.address,d=n.rentalCompany,a=n.type,u=n.accessories,h=n.functionalities,p=n.onSwitchFavorite,x=n.onModalOpen;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:i,alt:"car"}),(0,l.jsx)("button",{onClick:p}),(0,l.jsxs)("h2",{children:[" ",r,(0,l.jsx)("span",{children:s}),(0,l.jsx)("span",{children:t})]}),(0,l.jsx)("p",{children:c}),(0,l.jsxs)("p",{children:[o.split(", ").splice(1,1)[0]," |"," ",o.split(", ").splice(-1,1)[0]," | ",d," | ",a,"|"," ",s," | ",e," | ",u[0]," | ",h[0]]}),(0,l.jsx)("button",{type:"button",id:e,onClick:x,children:"Learn More"})]},e)},d=i(434),a=function(n){return n.modal.modalData},u=function(n){return n.modal.isModalOpen},h=function(){var n=(0,d.v9)(a),e=n.id,i=n.img,r=n.year,s=n.make,t=n.model,c=n.type,o=n.rentalPrice,u=n.mileage,h=n.description,p=n.accessories,x=n.functionalities,j=n.rentalConditions,f=n.fuelConsumption,v=n.address,m=n.engineSize,g=j.split("\n"),k=g[0].split(":");return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:i,alt:s}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:s}),(0,l.jsx)("span",{children:t}),(0,l.jsx)("p",{children:r})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:v.split(", ").splice(1,1)[0]}),(0,l.jsx)("li",{children:v.split(", ").splice(-1,1)[0]}),(0,l.jsxs)("li",{children:["Id:",e]}),(0,l.jsxs)("li",{children:["Year:",r]}),(0,l.jsxs)("li",{children:["Type:",c]}),(0,l.jsxs)("li",{children:["FuelConsumption:",f]}),(0,l.jsxs)("li",{children:["Engine Size:",m]})]}),(0,l.jsx)("p",{children:h}),(0,l.jsx)("p",{children:"Accessories and functionalities:"}),(0,l.jsxs)("p",{children:[p[0]," | ",p[1]," | ",p[2]]}),(0,l.jsxs)("p",{children:[x[0]," | ",x[1]," | ",x[2]]}),(0,l.jsx)("p",{children:"Rental Conditions: "}),(0,l.jsxs)("p",{children:[k[0],": ",(0,l.jsx)("span",{children:k[1]})]}),(0,l.jsx)("p",{children:g[1]}),(0,l.jsx)("p",{children:g[2]}),(0,l.jsxs)("p",{children:["Mileage:",(0,l.jsx)("span",{children:u.toLocaleString("en-US")})]}),(0,l.jsxs)("p",{children:["Price: ",(0,l.jsxs)("span",{children:[o.substring(1),"$"]})]})]})},p=i(164),x=i(168),j=i(867),f=j.ZP.div(r||(r=(0,x.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  background-color: rgba(18, 20, 23, 0.5);\n  overscroll-behavior: contain;\n  z-index: 5;\n"]))),v=j.ZP.div(s||(s=(0,x.Z)(["\n  width: 541px;\n  height: 500px;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  padding: 40px;\n  background-color: #fff;\n  border-radius: 24px;\n"]))),m=i(581),g=document.getElementById("modal"),k=function(n){var e=n.children,i=(0,d.I0)();(0,c.useEffect)((function(){var n=function(n){"Escape"===n.code&&i((0,m.h7)())};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[i]);return(0,p.createPortal)((0,l.jsx)(f,{onClick:function(n){n.currentTarget===n.target&&i((0,m.h7)())},children:(0,l.jsxs)(v,{children:[(0,l.jsx)("button",{onClick:function(){i((0,m.h7)())}}),e]})}),g)},w=i(609),b=i(161),C=function(){var n=(0,d.v9)((function(n){return n.cars.carData})),e=(0,d.v9)(u),i=(0,d.I0)();(0,c.useEffect)((function(){i((0,w.v)())}),[i]);var r=function(e){var r=n.find((function(n){return n.id===Number(e.currentTarget.id)}));i((0,m.h7)()),i((0,m.Mr)(r))};return(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{children:[n.map((function(n){return(0,l.jsx)(o,(0,t.Z)((0,t.Z)({},n),{},{onSwitchFavorite:function(){return function(n){i((0,b.EM)(n))}(n)},onModalOpen:r}),n.id)})),e&&(0,l.jsx)(k,{children:(0,l.jsx)(h,{})})]})})},y=function(){var n=(0,d.I0)();return(0,c.useEffect)((function(){n((0,w.v)())})),(0,l.jsxs)("div",{children:["Catalog",(0,l.jsx)(C,{})]})}}}]);
//# sourceMappingURL=930.4ca2c39c.chunk.js.map