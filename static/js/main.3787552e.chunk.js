(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(2),o=n.n(i),a=n(8),s=n.n(a),r=(n(19),n(9)),d=n(10),u=n(13),b=n(12),j=(n(20),n(3)),h=n(11),l=n(4),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={quote:[{text:"Genius is one percent inspiration and ninety-nine percent perspiration.",author:"Thomas Edison"}],index:0},t.getRandomIdx=function(){var e=t.state.quote,n=Math.floor(Math.random()*e.length);t.setState({index:n})},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(e){return t.setState({quote:e},t.getRandomIdx)}))}},{key:"render",value:function(){var t=Object(c.jsx)(j.a,{icon:h.a}),e=Object(c.jsx)(j.a,{icon:l.c}),n=Object(c.jsx)(j.a,{icon:l.a}),i=Object(c.jsx)(j.a,{icon:l.b}),o=this.state,a=o.quote[o.index],s="https://twitter.com/intent/tweet?text=".concat(a.text,"-").concat(a.author);return Object(c.jsx)("div",{className:"d-flex align-items-center justify-content-center vh-100",children:Object(c.jsxs)("div",{className:"col-6 box p-4 rounded card-body",id:"quote-box",children:[a&&Object(c.jsxs)("div",{className:"blockquote mb-4",children:[Object(c.jsxs)("p",{id:"text",children:[Object(c.jsx)("div",{id:"icon",children:n}),"  ",a.text," ",Object(c.jsx)("div",{id:"icon2",children:i})," "]}),Object(c.jsx)("cite",{className:"d-block text-right blockquote-footer",id:"author",children:a.author})]}),Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsxs)("a",{class:"btn btn-sm btn-primary",target:"_blank",href:s,id:"tweet-quote",children:[t," Tweet"]}),Object(c.jsxs)("button",{class:"btn btn-sm btn-primary",onClick:this.getRandomIdx,id:"new-quote",children:[" ",e," Get Quote"]})]})]})})}}]),n}(i.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),o(t),a(t)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.3787552e.chunk.js.map