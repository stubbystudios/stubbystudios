(this.webpackJsonpstubbystudios=this.webpackJsonpstubbystudios||[]).push([[0],{32:function(e,t,a){e.exports=a(74)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),i=a(31),o=a(4),s=a.n(o),m=a(6),u=a(7),d=a(8),h=a(10),f=a(9),E=a(25),p=a.n(E)()("14007530e98df328a8462b0f60f49c8d7d83860e"),g=a(26),v=(a(65),function(e){var t=e.header;return l.a.createElement("header",{role:"banner",className:"header-main",style:{backgroundImage:"url(".concat(t.hero_image,")")}},l.a.createElement("div",{className:"container hero-content"},l.a.createElement("img",{src:t.logo_image,alt:t.logo_alt}),l.a.createElement("h1",null,t.headline),l.a.createElement("h4",null,t.sub_headline)))}),b=(a(66),function(e){var t=e.article;return l.a.createElement("section",{className:"container article"},l.a.createElement("h2",null,t.title),l.a.createElement("div",null,l.a.createElement("p",null,t.body),l.a.createElement("div",{className:"btn-container"},l.a.createElement("a",{href:"https://www.linkedin.com/in/careybest/",className:"btn linkedin-btn"},"Connect on LinkedIn"),l.a.createElement("a",{href:"https://my.indeed.com/p/careyb-n8x5j7o",className:"btn indeed-btn"},"Indeed Resume"))))}),k=(a(67),a(68),a(29)),w=function(e){var t=Object(k.useMediaQuery)({query:"(min-device-width: 768px)"});return e.item.portfolio.map((function(a,n){return l.a.createElement("li",{className:"screenshot",key:n},l.a.createElement("div",{className:"thumbnail-content"},t?l.a.createElement("img",{src:a.thumbnail,alt:a.thumbnail_alt,onClick:function(){return e.handleClick(a)}}):l.a.createElement("img",{src:a.thumbnail,alt:a.thumbnail_alt}),l.a.createElement("h3",null,a.title),l.a.createElement("p",null,a.text)))}))},y=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).setImages=function(){return e.setState({images:[{portfolio:e.state.fields.portfolio}]})},e.renderImages=function(){return e.state.images.map((function(t,a){return l.a.createElement(w,{key:a,handleClick:e.handleClick,item:t})}))},e.getSelectedImage=function(){return l.a.createElement("section",{className:"modal-outer"},l.a.createElement("div",{className:"overlay",onClick:function(){return e.handleClick(null)}}),l.a.createElement("div",{className:"modal-inner"},l.a.createElement("header",null,l.a.createElement("h3",null,e.state.selectedImage.title),l.a.createElement("i",{className:"icon icon-close",onClick:function(){return e.handleClick(null)}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 47.1 47.1"},l.a.createElement("g",{"data-name":"Group 1",fill:"none",stroke:"#2d2d2d",strokeWidth:"10"},l.a.createElement("path",{"data-name":"Line 1",d:"M3.5 3.5l40 40"}),l.a.createElement("path",{"data-name":"Line 2",d:"M43.5 3.5l-40 40"}))))),l.a.createElement("img",{src:e.state.selectedImage.full_image,alt:e.state.selectedImage.thumbnail_alt})))},e.handleClick=function(t){e.setState({selectedImage:t})},e.state={selectedImage:null,images:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.page.retrieve("*","homepage");case 2:t=e.sent,this.setState({fields:t.data.data.fields}),this.setImages();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.images;return console.log("PORTFOLIO",e),l.a.createElement("section",{className:"portfolio"},this.state.selectedImage?this.getSelectedImage():null,l.a.createElement("ul",null,this.state.images?this.renderImages():null))}}]),a}(l.a.Component),N=(a(69),function(e){var t=e.skills;return l.a.createElement("ul",null,t.map((function(e,t){return l.a.createElement("li",{className:"screenshot",key:t},l.a.createElement("h4",null,e.title),l.a.createElement("img",{src:e.logo,alt:e.alt}))})))}),I=(a(70),function(e){var t=e.footer;return l.a.createElement("footer",{role:"contentinfo"},l.a.createElement("div",{className:"container page-footer"},l.a.createElement("p",null,"Powered ",l.a.createElement("a",{href:"https://buttercms.com/"},"ButterCMS")," and React"),l.a.createElement("img",{src:t.logo,alt:t.alt})))}),O=function(e){var t=e.header,a=e.article,n=e.portfolio,r=e.portfolio_title,c=e.skills,i=e.skills_title,o=e.footer;return l.a.createElement("div",{className:"page-wrapper"},l.a.createElement(v,{header:t}),l.a.createElement("main",{role:"main"},l.a.createElement(b,{article:a}),l.a.createElement("section",{className:"container portfolio"},l.a.createElement("h2",{className:"section-title"},r),l.a.createElement(y,{portfolio:n})),l.a.createElement("section",{className:"container skills"},l.a.createElement("h2",{className:"section-title"},i),l.a.createElement(N,{skills:c}))),l.a.createElement(I,{footer:o}))},C=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={fields:{header:"",article:"",portfolio:[],skills:[],footer:[]}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.page.retrieve("*","homepage");case 2:t=e.sent,this.setState({fields:t.data.data.fields});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.fields;return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,null,l.a.createElement("title",null,e.header.seo_title)),l.a.createElement(O,e))}}]),a}(l.a.Component);a(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.9389548c.chunk.js.map