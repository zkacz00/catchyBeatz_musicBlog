"use strict";(self.webpackChunkproject4=self.webpackChunkproject4||[]).push([[590],{1891:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var n=l(6540),a=l(8023),r=l(4240);var o=e=>{let{title:t,author:l,date:o,readingTime:c,category:s,likesNr:m,blogPostContent:u,slug:i,renderOptions:E}=e;const{Layout:d,BlogNavigation:g,HeartsCounter:p,ViewsCounter:b,RecentPosts:v}=a.A;return n.createElement(d,null,n.createElement("div",{className:"blogPage"},n.createElement("div",{className:"blogPage__content"},n.createElement(g,null),n.createElement("div",{className:"blogPost"},n.createElement("div",{className:"blogPost__content"},n.createElement("div",{className:"blogPost__header"},n.createElement("p",null,l),n.createElement("p",null,"•"),n.createElement("p",null,o),n.createElement("p",null,"•"),n.createElement("p",null,c," min read")),n.createElement("hr",null),n.createElement("h1",null,t),JSON.parse(u.raw).content.map(((e,t)=>n.createElement("div",{key:t},(0,r.i)(e,E)))),n.createElement("hr",null),n.createElement("div",{className:"blogPost__footer"},n.createElement("p",null,s.toUpperCase()),n.createElement("div",null,n.createElement(b,{baseCount:140}),n.createElement(p,{baseCount:m}))))),n.createElement(v,{currentSlug:i}))))},c=l(4810),s=l(5871);var m=e=>{let{pageContext:{pagePath:t}}=e;const l=(0,c.GR)("3911085107").allContentfulBlogPostEl.edges.filter((e=>e.node.slug===t))[0].node,a={renderNode:{[s.BLOCKS.PARAGRAPH]:(e,t)=>n.createElement("p",{className:"blogPost__text"},t),[s.BLOCKS.QUOTE]:(e,t)=>n.createElement("div",{className:"blogPost__highlight"},t),[s.BLOCKS.EMBEDDED_ASSET]:e=>{const t=l.blogPostContent.references.find((t=>t.contentful_id===e.data.target.sys.id));return n.createElement("img",{src:null==t?void 0:t.url,alt:null==t?void 0:t.title})}}};return n.createElement(o,Object.assign({},l,{renderOptions:a}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-js-2c3b19fe913beff83da1.js.map