(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(52)},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n,l,r,o=a(0),i=a.n(o),c=a(17),m=a.n(c),s=a(11),u=a(10),h=a(5),p=a(6),E=a(8),g=a(7),d=a(9),f={greet:"This is me :)",img:"/img/head_shot_lg.jpg",alt:"Burnie",talk:"I'm a front-end engineer. Keep going on the way to front-end engineer. Now learn ReactJs."},y=[{type:"EDUCATION",lists:[{time:"9/2014 \u2013 6/2018",location:"National Chiao Tung University",work:"Bachelor in Biological Technology"},{time:"9/2011 \u2013 6/2014",location:"Taichung Second Senior High School",work:"Doing General Studies"}]},{type:"WORK EXPERIENCE\t",lists:[{time:"7/2018 \u2013 6/2019",location:"Stork Ladies Clinic",work:"Web Programmer",details:["Develop system of signing the consent form","Develop system of matching customers by calling API of facial similarity","Introduce resource reservation system by using open source"]},{time:"9/2011 \u2013 6/2014",location:"National Chiao Tung University - 12u10",work:"Backend Engineer",details:["Develop backend dashboard"]}]},{type:"EXTRACURRICULAR ACTIVITIES",lists:[{time:"2/2016 \u2013 7/2016",location:"2016 NCTU Biocamp",work:"Vice Coordinator"},{time:"10/2015 \u2013 12/2015",location:"JianGong Primary School",work:"Volunteer"},{time:"3/2015 \u2013 7/2015",location:"2015 NCTU Biocamp",work:"Worker in Activities Section"}]}],k=function(){return i.a.createElement("div",null,i.a.createElement("p",null,f.greet),i.a.createElement("img",{className:"head-shot-lg",src:"/my-blog"+f.img,alt:f.alt}),i.a.createElement("p",null,f.talk))},b=function(){return y.map(function(e){var t=e.lists.map(function(e){var t=function(e){return e.details?e.details.map(function(e){var t=(new Date).getTime(),a=Math.floor(t/(Math.floor(1e3*Math.random())+3));return i.a.createElement("li",{className:"journey-detail",key:a},e)}):null}(e),a=(new Date).getTime(),n=Math.floor(a/(Math.floor(1e3*Math.random())+5));return i.a.createElement("article",{key:n},i.a.createElement("div",{className:"journey-time"},e.time),i.a.createElement("div",{className:"journey-location"},e.location),i.a.createElement("ul",null,i.a.createElement("li",{className:"journey-work",key:n},e.work,i.a.createElement("ol",null,t))))}),a=(new Date).getTime(),n=Math.floor(a/(Math.floor(1e3*Math.random())+7));return i.a.createElement("div",{className:"journey-box",key:n},i.a.createElement("h3",null,e.type),t,i.a.createElement("div",{className:"bottom-line"}))})},v=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"right-part"},i.a.createElement("h1",null,"About me"),i.a.createElement(k,null),i.a.createElement("h1",null,"My Journey"),i.a.createElement(b,null))}}]),t}(i.a.Component),j=[{type:"Email",link:"chen0317029@gmail.com"},{type:"Home",link:"https://burniechen.github.io/my-blog/",icon:"/img/home.svg"},{type:"Linkedin",link:"https://www.linkedin.com/in/%E6%9F%8F%E4%B8%9E-%E9%99%B3-736210180/",icon:"/img/linkedin.svg"},{type:"GitHub",link:"https://github.com/burniechen/my-blog",icon:"/img/github.svg"}],w=function(){var e=j.map(function(e){var t=(new Date).getTime(),a=Math.floor(t/(Math.floor(1e3*Math.random())+2));return e.icon?i.a.createElement("li",{key:a},i.a.createElement("a",{href:e.link},i.a.createElement("img",{className:"contact-icon",src:"/my-blog"+e.icon,alt:e.type}))):i.a.createElement("p",{key:a},i.a.createElement("span",null,e.type,"\uff1a"),i.a.createElement("a",{href:"mailto:"+e.link},e.link))});return i.a.createElement("ul",{className:"contact-box"},e)},M=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"right-part"},i.a.createElement("h1",null,"Contact me"),i.a.createElement(w,null))}}]),t}(i.a.Component),N=a(24),O=[{title:"Signiture Pad for Consent Form",location:"Stork Ladies Clinic",lists:["123","123"],imgs:[{src:"http://placekitten.com/g/400/200",alt:"400*200"},{src:"http://placekitten.com/g/400/200",alt:"200*200"},{src:"http://placekitten.com/g/400/200",alt:"200*200"}]},{title:"Booked Scheduler",location:"Stork Ladies Clinic",lists:["12323","12323"],imgs:[{src:"http://placekitten.com/g/400/200",alt:"400*480"},{src:"http://placekitten.com/g/400/200",alt:"200*200"},{src:"http://placekitten.com/g/400/200",alt:"200*200"}]}],T=(n=a.n(N).a,l={className:"",dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!0,centerPadding:"0px"},r=O,function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.map(function(e){var t=function(e){var t=e.lists.map(function(e){var t=(new Date).getTime(),a=Math.floor(t/(Math.floor(1e3*Math.random())+2));return i.a.createElement("li",{key:a},e)});return i.a.createElement("ol",null,t)}(e),a=function(e){var t=(new Date).getTime(),a=Math.floor(t/(Math.floor(1e3*Math.random())+2));return e.imgs.map(function(e){return i.a.createElement("div",{key:a},i.a.createElement("img",{src:e.src,alt:e.alt}))})}(e),r=(new Date).getTime(),o=Math.floor(r/(Math.floor(1e3*Math.random())+2));return i.a.createElement("div",{key:o},i.a.createElement("div",null,i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.location),t),i.a.createElement(n,Object.assign({},l,{key:o}),a))})}}]),t}(i.a.Component)),C=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"right-part"},i.a.createElement("div",null,i.a.createElement("h1",null,"My Project")),i.a.createElement(T,null))}}]),t}(i.a.Component),S=function(){return i.a.createElement("h1",null,"This page can't be found")},D=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.b,{to:"/"},"About me")),i.a.createElement("li",null,i.a.createElement(s.b,{to:"/pages/contact"},"Contact me")),i.a.createElement("li",null,i.a.createElement(s.b,{to:"/pages/project"},"My project")))},B={img:"/img/head_shot_sm.jpg",name:"Burnie Chen",description:"\u201c The more you know, the more you know you don't know. \u201d \u2015 Aristotle."},A=function(){return i.a.createElement("div",null,i.a.createElement("img",{className:"head-shot-sm",src:"/my-blog"+B.img,alt:B.name}),i.a.createElement("h2",null,B.name),i.a.createElement("p",{className:"description"},B.description))},I=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"left-part"},i.a.createElement(A,null),i.a.createElement(D,null),i.a.createElement("div",{className:"description"},"\xa9 All rights reserved.")),i.a.createElement(u.d,null,i.a.createElement(u.b,{path:"/",exact:!0,component:v}),i.a.createElement(u.b,{path:"/pages/contact",component:M}),i.a.createElement(u.b,{path:"/pages/project",component:C}),i.a.createElement(u.b,{path:"/not-found",component:S}),i.a.createElement(u.a,{to:"/not-found"})))};a(51);m.a.render(i.a.createElement(s.a,null,i.a.createElement(I,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.249b7b09.chunk.js.map