"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[75],{712:function(n,e,i){i.d(e,{Z:function(){return o}});i(791);var r,t=i(168),c=i(454).ZP.button(r||(r=(0,t.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),s=i(184),o=function(n){var e=n.id,i=n.img,r=n.make,t=n.model,o=n.year,l=n.rentalPrice,d=n.address,u=n.rentalCompany,a=n.type,h=n.accessories,f=n.functionalities,p=n.onSwitchFavorite,x=n.onModalOpen;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:i,alt:"car"}),(0,s.jsx)(c,{onClick:p}),(0,s.jsxs)("h2",{children:[" ",r,(0,s.jsx)("span",{children:t}),(0,s.jsx)("span",{children:o})]}),(0,s.jsx)("p",{children:l}),(0,s.jsxs)("p",{children:[d.split(", ").splice(1,1)[0]," |"," ",d.split(", ").splice(-1,1)[0]," | ",u," | ",a,"|"," ",t," | ",e," | ",h[0]," | ",f[0]]}),(0,s.jsx)("button",{type:"button",id:e,onClick:x,children:"Learn More"})]},e)}},883:function(n,e,i){var r=i(434),t=i(542),c=i(184);e.Z=function(){var n=(0,r.v9)(t.D),e=n.id,i=n.img,s=n.year,o=n.make,l=n.model,d=n.type,u=n.rentalPrice,a=n.mileage,h=n.description,f=n.accessories,p=n.functionalities,x=n.rentalConditions,j=n.fuelConsumption,v=n.address,m=n.engineSize,g=x.split("\n"),k=g[0].split(":");return(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{src:i,alt:o}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:o}),(0,c.jsx)("span",{children:l}),(0,c.jsx)("p",{children:s})]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:v.split(", ").splice(1,1)[0]}),(0,c.jsx)("li",{children:v.split(", ").splice(-1,1)[0]}),(0,c.jsxs)("li",{children:["Id:",e]}),(0,c.jsxs)("li",{children:["Year:",s]}),(0,c.jsxs)("li",{children:["Type:",d]}),(0,c.jsxs)("li",{children:["FuelConsumption:",j]}),(0,c.jsxs)("li",{children:["Engine Size:",m]})]}),(0,c.jsx)("p",{children:h}),(0,c.jsx)("p",{children:"Accessories and functionalities:"}),(0,c.jsxs)("p",{children:[f[0]," | ",f[1]," | ",f[2]]}),(0,c.jsxs)("p",{children:[p[0]," | ",p[1]," | ",p[2]]}),(0,c.jsx)("p",{children:"Rental Conditions: "}),(0,c.jsxs)("p",{children:[k[0],": ",(0,c.jsx)("span",{children:k[1]})]}),(0,c.jsx)("p",{children:g[1]}),(0,c.jsx)("p",{children:g[2]}),(0,c.jsxs)("p",{children:["Mileage:",(0,c.jsx)("span",{children:a.toLocaleString("en-US")})]}),(0,c.jsxs)("p",{children:["Price: ",(0,c.jsxs)("span",{children:[u.substring(1),"$"]})]})]})}},739:function(n,e,i){i.d(e,{Z:function(){return x}});var r,t,c=i(791),s=i(164),o=i(434),l=i(168),d=i(454),u=d.ZP.div(r||(r=(0,l.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  background-color: rgba(18, 20, 23, 0.5);\n  overscroll-behavior: contain;\n  z-index: 5;\n"]))),a=d.ZP.div(t||(t=(0,l.Z)(["\n  width: 541px;\n  height: 500px;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  padding: 40px;\n  background-color: #fff;\n  border-radius: 24px;\n"]))),h=i(581),f=i(184),p=document.getElementById("modal"),x=function(n){var e=n.children,i=(0,o.I0)();(0,c.useEffect)((function(){var n=function(n){"Escape"===n.code&&i((0,h.h7)())};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[i]);return(0,s.createPortal)((0,f.jsx)(u,{onClick:function(n){n.currentTarget===n.target&&i((0,h.h7)())},children:(0,f.jsxs)(a,{children:[(0,f.jsx)("button",{onClick:function(){i((0,h.h7)())}}),e]})}),p)}},75:function(n,e,i){i.r(e),i.d(e,{default:function(){return m}});var r=i(413),t=i(439),c=i(712),s=i(883),o=i(739),l=i(791),d=i(434),u=i(609),a=i(519),h=i(591),f=i(161),p=i(542),x=i(581),j=i(184),v=function(){var n=(0,d.v9)(a.j),e=(0,d.v9)(h.h),i=(0,d.v9)(p.H),v=(0,l.useState)(8),m=(0,t.Z)(v,2),g=m[0],k=m[1],w=(0,d.I0)();(0,l.useEffect)((function(){w((0,u.v)())}),[w]);var b=function(e){var i=n.reduce((function(n,i){return n||(i.id===Number(e.currentTarget.id)?i:null)}),null);w((0,x.h7)()),w((0,x.Mr)(i))};return(0,j.jsxs)("div",{children:[(0,j.jsx)("ul",{children:n.slice(0,g).map((function(n){return(0,j.jsx)(c.Z,(0,r.Z)((0,r.Z)({},n),{},{onSwitchFavorite:function(){return function(n){e.some((function(e){return e.id===n.id}))?w((0,f.zm)(n)):w((0,f.EM)(n))}(n)},onModalOpen:b}),n.id)}))}),g<n.length&&(0,j.jsx)("button",{onClick:function(){k((function(n){return n+8}))},children:"Load More"}),i&&(0,j.jsx)(o.Z,{children:(0,j.jsx)(s.Z,{})})]})},m=function(){var n=(0,d.I0)();return(0,l.useEffect)((function(){n((0,u.v)())})),(0,j.jsx)("div",{children:(0,j.jsx)(v,{})})}},519:function(n,e,i){i.d(e,{j:function(){return r}});var r=function(n){return n.cars.carData}},591:function(n,e,i){i.d(e,{h:function(){return r}});var r=function(n){return n.favorite.favoriteItems}},542:function(n,e,i){i.d(e,{D:function(){return r},H:function(){return t}});var r=function(n){return n.modal.modalData},t=function(n){return n.modal.isModalOpen}}}]);
//# sourceMappingURL=75.58db7455.chunk.js.map