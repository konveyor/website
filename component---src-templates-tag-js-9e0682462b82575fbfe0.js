"use strict";(self.webpackChunkkonveyor_community_site=self.webpackChunkkonveyor_community_site||[]).push([[969],{6050:function(e,t,a){var r=a(3366),n=a(7294),o=a(9230),s=["image","innerClassName"];t.Z=function(e){var t=e.image,l=e.innerClassName,c=(0,r.Z)(e,s),i=(0,o.c)(t);return i?n.createElement("div",c,n.createElement(o.G,{className:l,image:i,alt:""})):n.createElement("div",c,n.createElement(o.S,{alt:"",layout:"fullWidth",aspectRatio:"2.22",className:l,src:"../images/home-social-media.jpg",__imageData:a(6163)}))}},5677:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(1597);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=(0,r.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,c=void 0===l?24:l,i=s(e,["color","size"]);return r.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("polyline",{points:"12 8 8 12 12 16"}),r.createElement("line",{x1:"16",y1:"12",x2:"8",y2:"12"}))}));l.displayName="ArrowLeftCircle";var c=l,i=a(1857),m=function(e){var t=e.pageContext,a=t.previousPagePath,o=t.nextPagePath,s=t.humanPageNumber,l=t.numberOfPages,m="px-3 flex items-center space-x-3 py-2 border-2 border-base-400 rounded hover:border-base-500 focus:ring-2 focus:ring-base-500 font-medium",f="inline h-5 w-5";return r.createElement("nav",{className:"flex justify-between my-8 items-center"},l>1&&r.createElement("div",{className:"font-medium"},"Page ",s," of ",l),r.createElement("div",{className:"flex space-x-3"},a&&r.createElement(n.Link,{to:a+"/",rel:"prev",className:m},r.createElement(c,{"aria-hidden":!0,className:f}),r.createElement("div",{className:"flex space-x-1"},r.createElement("span",null,"Previous"),r.createElement("span",{className:"sr-only md:not-sr-only"},"page"))),o&&r.createElement(n.Link,{to:o+"/",rel:"next",className:m},r.createElement("div",{className:"flex space-x-1"},r.createElement("span",null,"Next"),r.createElement("span",{className:"sr-only md:not-sr-only"},"page")),r.createElement(i.Z,{"aria-hidden":!0,className:f}))))}},2095:function(e,t,a){var r=a(7294),n=a(1597),o=a(6050);t.Z=function(e){var t=e.post,a=e.condensed,s="/blog/"+t.slug;return r.createElement("div",{className:a?"":"md:first:col-span-2"},r.createElement(n.Link,{to:s,className:"shadow-post hover:shadow-post-hover flex flex-col bg-base-100 h-full p-4 group rounded-lg focus:ring-2 focus:ring-primary-400"},r.createElement(o.Z,{className:"before:text-transparent before:absolute before:pointer-events-none before:z-[1] before:w-full before:h-full before:shadow-image before:rounded-md relative rounded-md overflow-hidden",image:t.frontmatter.image}),r.createElement("p",{className:"flex justify-between border-b border-base-300 py-3 text-base-500 font-bold"},t.frontmatter.date),r.createElement("h2",{className:"my-2 font-headings font-bold text-lg tracking-wide group-hover:text-primary-700"},t.frontmatter.title),!0!==a&&r.createElement("p",{className:"line-clamp-3"},t.frontmatter.description?t.frontmatter.description:t.excerpt)))}},3450:function(e,t,a){a.r(t);var r=a(7294),n=a(258),o=a(5677),s=a(2095);t.default=function(e){var t=e.data,a=e.pageContext,l=t.allMdxByTag.nodes,c=a.tag;return r.createElement("div",{className:"max-w-screen-xl page-wrapper"},r.createElement(n.Z,{title:"Posts under "+c}),r.createElement("h1",{className:"my-6 font-headings font-bold text-2xl lg:text-3xl tracking-wide"},"Posts under ",r.createElement("mark",{className:"capitalize italic"},c)),r.createElement("div",{className:"grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-6 my-6"},l.map((function(e){return r.createElement(s.Z,{key:e.id,post:e,condensed:!0})}))),r.createElement(o.Z,{pageContext:a}))}},6163:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#383888","images":{"fallback":{"src":"/static/99941e8626cc7fea811646effb77b35e/135b9/home-social-media.jpg","srcSet":"/static/99941e8626cc7fea811646effb77b35e/ffae8/home-social-media.jpg 750w,\\n/static/99941e8626cc7fea811646effb77b35e/271eb/home-social-media.jpg 1080w,\\n/static/99941e8626cc7fea811646effb77b35e/135b9/home-social-media.jpg 1200w","sizes":"100vw"},"sources":[{"srcSet":"/static/99941e8626cc7fea811646effb77b35e/5f165/home-social-media.webp 750w,\\n/static/99941e8626cc7fea811646effb77b35e/29464/home-social-media.webp 1080w,\\n/static/99941e8626cc7fea811646effb77b35e/367e4/home-social-media.webp 1200w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.4508333333333333}')}}]);
//# sourceMappingURL=component---src-templates-tag-js-9e0682462b82575fbfe0.js.map