"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[226],{3781:function(e,t,r){r.d(t,{e:function(){return _}});r(2791);var n=r(6731),a=r(7689),c="MovieItem_movie_item__axwNd",u="MovieItem_movie_item_image__ppz3o",s="MovieItem_link__mit6j",o=r(184),i=function(e){var t=e.id,r=e.original_title,i=e.poster_path,l=(0,a.TH)();return(0,o.jsx)(n.rU,{to:"/movies/".concat(t),state:{from:l},className:s,children:(0,o.jsxs)("li",{className:c,children:[(0,o.jsx)("img",{className:u,width:"280",src:"https://image.tmdb.org/t/p/w500".concat(i),alt:r}),(0,o.jsx)("p",{children:r})]})})},l=r(7938),p="MovieList_movie_list__IWl2j",v="MovieList_error__vObdl",f="idle",m="pending",h="resolved",d="rejected",_=function(e){var t=e.movies,r=void 0===t?[]:t,n=e.status,a=void 0===n?f:n;return(0,o.jsxs)(o.Fragment,{children:[a===h&&(0,o.jsx)("ul",{className:p,children:r.map((function(e){var t=e.id,r=e.original_title,n=e.poster_path;return(0,o.jsx)(i,{id:t,original_title:r,poster_path:n},t)}))}),a===m&&(0,o.jsx)(l.a,{}),";",a===d&&(0,o.jsx)("p",{className:v,children:"Something went wrong...."})]})}},8226:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),a=r(885),c=r(7757),u=r.n(c),s=r(2791),o=r(6731),i=r(4635),l=r(3781),p=r(7596),v="SearchBar_searchbar__xBucJ",f="SearchBar_form__gW7Gj",m="SearchBar_button__T7RTc",h="SearchBar_button_label__PbnEv",d="SearchBar_input__bIy50",_=r(184),g=function(){var e=(0,o.lr)(),t=(0,a.Z)(e,2),r=t[0],n=t[1],c=r.get("query"),u=(0,s.useState)(c||""),i=(0,a.Z)(u,2),l=i[0],g=i[1];return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:v,children:(0,_.jsxs)("form",{className:f,onSubmit:function(e){if(e.preventDefault(),""===(null===c||void 0===c?void 0:c.trim()))return p.Am.error("What will we look for?");n({query:l})},children:[(0,_.jsx)("button",{type:"submit",className:m,children:(0,_.jsx)("span",{className:h,children:"Search"})}),(0,_.jsx)("input",{className:d,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){g(e.currentTarget.value)},value:l})]})})})},x=r(7938),b="idle",w="pending",j="resolved",k="rejected",y=function(){var e=(0,o.lr)(),t=(0,a.Z)(e,1)[0].get("query"),r=(0,s.useState)([]),c=(0,a.Z)(r,2),v=c[0],f=c[1],m=(0,s.useState)(b),h=(0,a.Z)(m,2),d=h[0],y=h[1];return(0,s.useEffect)((function(){(0,n.Z)(u().mark((function e(){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return y(w),e.prev=3,e.next=6,(0,i.V0)(t);case 6:if(r=e.sent,(n=r.data).results.length){e.next=14;break}return y(k),f([]),e.abrupt("return",p.Am.warn("There are no matches for your search"));case 14:y(j),f(n.results);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),y(k);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))()}),[t]),v||d!==b?v||d!==w?v||d!==k?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(g,{}),v.length>0&&(0,_.jsx)(l.e,{movies:v,status:d})]}):p.Am.warn("Error"):(0,_.jsx)(x.a,{}):(0,_.jsx)(_.Fragment,{})}},4635:function(e,t,r){r.d(t,{Hg:function(){return l},PL:function(){return f},TP:function(){return v},V0:function(){return p},tx:function(){return m}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u),o="de1e46ab66709ff0c0d7eb27054e4e8b",i="https://api.themoviedb.org/3",l=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=226.ec903f8b.chunk.js.map