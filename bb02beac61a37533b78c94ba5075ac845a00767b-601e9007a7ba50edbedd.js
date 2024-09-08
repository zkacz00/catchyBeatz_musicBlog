"use strict";(self.webpackChunkproject4=self.webpackChunkproject4||[]).push([[668],{4240:function(e,t,n){var r=n(6540),E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var E in t=arguments[n])Object.prototype.hasOwnProperty.call(t,E)&&(e[E]=t[E]);return e},E.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var L,S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},O={},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(L||(u.BLOCKS=L={}));var o,_={};Object.defineProperty(_,"__esModule",{value:!0}),_.INLINES=void 0,function(e){e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline",e.ENTRY_HYPERLINK="entry-hyperlink",e.HYPERLINK="hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink"}(o||(_.INLINES=o={}));var l,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.MARKS=void 0,function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript",e.STRIKETHROUGH="strikethrough"}(l||(i.MARKS=l={}));var B={};!function(e){var t,n=S&&S.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,E=0,L=t.length;E<L;E++)!r&&E in t||(r||(r=Array.prototype.slice.call(t,0,E)),r[E]=t[E]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(e,"__esModule",{value:!0}),e.V1_MARKS=e.V1_NODE_TYPES=e.TEXT_CONTAINERS=e.HEADINGS=e.CONTAINERS=e.VOID_BLOCKS=e.TABLE_BLOCKS=e.LIST_ITEM_BLOCKS=e.TOP_LEVEL_BLOCKS=void 0;var r=u,E=_,L=i;e.TOP_LEVEL_BLOCKS=[r.BLOCKS.PARAGRAPH,r.BLOCKS.HEADING_1,r.BLOCKS.HEADING_2,r.BLOCKS.HEADING_3,r.BLOCKS.HEADING_4,r.BLOCKS.HEADING_5,r.BLOCKS.HEADING_6,r.BLOCKS.OL_LIST,r.BLOCKS.UL_LIST,r.BLOCKS.HR,r.BLOCKS.QUOTE,r.BLOCKS.EMBEDDED_ENTRY,r.BLOCKS.EMBEDDED_ASSET,r.BLOCKS.EMBEDDED_RESOURCE,r.BLOCKS.TABLE],e.LIST_ITEM_BLOCKS=[r.BLOCKS.PARAGRAPH,r.BLOCKS.HEADING_1,r.BLOCKS.HEADING_2,r.BLOCKS.HEADING_3,r.BLOCKS.HEADING_4,r.BLOCKS.HEADING_5,r.BLOCKS.HEADING_6,r.BLOCKS.OL_LIST,r.BLOCKS.UL_LIST,r.BLOCKS.HR,r.BLOCKS.QUOTE,r.BLOCKS.EMBEDDED_ENTRY,r.BLOCKS.EMBEDDED_ASSET,r.BLOCKS.EMBEDDED_RESOURCE],e.TABLE_BLOCKS=[r.BLOCKS.TABLE,r.BLOCKS.TABLE_ROW,r.BLOCKS.TABLE_CELL,r.BLOCKS.TABLE_HEADER_CELL],e.VOID_BLOCKS=[r.BLOCKS.HR,r.BLOCKS.EMBEDDED_ENTRY,r.BLOCKS.EMBEDDED_ASSET,r.BLOCKS.EMBEDDED_RESOURCE],e.CONTAINERS=((t={})[r.BLOCKS.OL_LIST]=[r.BLOCKS.LIST_ITEM],t[r.BLOCKS.UL_LIST]=[r.BLOCKS.LIST_ITEM],t[r.BLOCKS.LIST_ITEM]=e.LIST_ITEM_BLOCKS,t[r.BLOCKS.QUOTE]=[r.BLOCKS.PARAGRAPH],t[r.BLOCKS.TABLE]=[r.BLOCKS.TABLE_ROW],t[r.BLOCKS.TABLE_ROW]=[r.BLOCKS.TABLE_CELL,r.BLOCKS.TABLE_HEADER_CELL],t[r.BLOCKS.TABLE_CELL]=[r.BLOCKS.PARAGRAPH,r.BLOCKS.UL_LIST,r.BLOCKS.OL_LIST],t[r.BLOCKS.TABLE_HEADER_CELL]=[r.BLOCKS.PARAGRAPH],t),e.HEADINGS=[r.BLOCKS.HEADING_1,r.BLOCKS.HEADING_2,r.BLOCKS.HEADING_3,r.BLOCKS.HEADING_4,r.BLOCKS.HEADING_5,r.BLOCKS.HEADING_6],e.TEXT_CONTAINERS=n([r.BLOCKS.PARAGRAPH],e.HEADINGS,!0),e.V1_NODE_TYPES=[r.BLOCKS.DOCUMENT,r.BLOCKS.PARAGRAPH,r.BLOCKS.HEADING_1,r.BLOCKS.HEADING_2,r.BLOCKS.HEADING_3,r.BLOCKS.HEADING_4,r.BLOCKS.HEADING_5,r.BLOCKS.HEADING_6,r.BLOCKS.OL_LIST,r.BLOCKS.UL_LIST,r.BLOCKS.LIST_ITEM,r.BLOCKS.HR,r.BLOCKS.QUOTE,r.BLOCKS.EMBEDDED_ENTRY,r.BLOCKS.EMBEDDED_ASSET,E.INLINES.HYPERLINK,E.INLINES.ENTRY_HYPERLINK,E.INLINES.ASSET_HYPERLINK,E.INLINES.EMBEDDED_ENTRY,"text"],e.V1_MARKS=[L.MARKS.BOLD,L.MARKS.CODE,L.MARKS.ITALIC,L.MARKS.UNDERLINE]}(B);var a={};Object.defineProperty(a,"__esModule",{value:!0});var C={};Object.defineProperty(C,"__esModule",{value:!0});var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.EMPTY_DOCUMENT=void 0;var I=u;c.EMPTY_DOCUMENT={nodeType:I.BLOCKS.DOCUMENT,data:{},content:[{nodeType:I.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.isInline=function(e){return D(A.INLINES,e.nodeType)},K.isBlock=function(e){return D(T.BLOCKS,e.nodeType)},K.isText=function(e){return"text"===e.nodeType};var T=u,A=_;function D(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}var N,d,f={};function R(e,t){return e.map((function(e,n){return E=p(e,t),L=n,r.isValidElement(E)&&null===E.key?r.cloneElement(E,{key:L}):E;var E,L}))}function p(e,t){var n=t.renderNode,E=t.renderMark,L=t.renderText,S=t.preserveWhitespace;if(O.helpers.isText(e)){var u=L?L(e.value):e.value;if(S&&!L){var o=(u=u.replace(/ {2,}/g,(function(e){return" ".repeat(e.length)}))).split("\n"),_=[];o.forEach((function(e,t){_.push(e),t!==o.length-1&&_.push(r.createElement("br",null))})),u=_}return e.marks.reduce((function(e,t){return E[t.type]?E[t.type](e):e}),u)}var l=R(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,l):r.createElement(r.Fragment,null,l)}Object.defineProperty(f,"__esModule",{value:!0}),f.getSchemaWithNodeType=function(e){try{return function(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}("./generated/".concat(e,".json"))}catch(t){throw new Error('Schema for nodeType "'.concat(e,'" was not found.'))}},function(e){var t=S&&S.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var E=Object.getOwnPropertyDescriptor(t,n);E&&!("get"in E?!t.__esModule:E.writable||E.configurable)||(E={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,E)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),n=S&&S.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=S&&S.__exportStar||function(e,n){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(n,r)||t(n,e,r)},E=S&&S.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var E in e)"default"!==E&&Object.prototype.hasOwnProperty.call(e,E)&&t(r,e,E);return n(r,e),r};Object.defineProperty(e,"__esModule",{value:!0}),e.getSchemaWithNodeType=e.helpers=e.EMPTY_DOCUMENT=e.MARKS=e.INLINES=e.BLOCKS=void 0;var L=u;Object.defineProperty(e,"BLOCKS",{enumerable:!0,get:function(){return L.BLOCKS}});var O=_;Object.defineProperty(e,"INLINES",{enumerable:!0,get:function(){return O.INLINES}});var o=i;Object.defineProperty(e,"MARKS",{enumerable:!0,get:function(){return o.MARKS}}),r(B,e),r(a,e),r(C,e);var l=c;Object.defineProperty(e,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l.EMPTY_DOCUMENT}});var I=E(K);e.helpers=I;var T=f;Object.defineProperty(e,"getSchemaWithNodeType",{enumerable:!0,get:function(){return T.getSchemaWithNodeType}})}(O);var s=((N={})[O.BLOCKS.DOCUMENT]=function(e,t){return t},N[O.BLOCKS.PARAGRAPH]=function(e,t){return r.createElement("p",null,t)},N[O.BLOCKS.HEADING_1]=function(e,t){return r.createElement("h1",null,t)},N[O.BLOCKS.HEADING_2]=function(e,t){return r.createElement("h2",null,t)},N[O.BLOCKS.HEADING_3]=function(e,t){return r.createElement("h3",null,t)},N[O.BLOCKS.HEADING_4]=function(e,t){return r.createElement("h4",null,t)},N[O.BLOCKS.HEADING_5]=function(e,t){return r.createElement("h5",null,t)},N[O.BLOCKS.HEADING_6]=function(e,t){return r.createElement("h6",null,t)},N[O.BLOCKS.EMBEDDED_ENTRY]=function(e,t){return r.createElement("div",null,t)},N[O.BLOCKS.EMBEDDED_RESOURCE]=function(e,t){return r.createElement("div",null,t)},N[O.BLOCKS.UL_LIST]=function(e,t){return r.createElement("ul",null,t)},N[O.BLOCKS.OL_LIST]=function(e,t){return r.createElement("ol",null,t)},N[O.BLOCKS.LIST_ITEM]=function(e,t){return r.createElement("li",null,t)},N[O.BLOCKS.QUOTE]=function(e,t){return r.createElement("blockquote",null,t)},N[O.BLOCKS.HR]=function(){return r.createElement("hr",null)},N[O.BLOCKS.TABLE]=function(e,t){return r.createElement("table",null,r.createElement("tbody",null,t))},N[O.BLOCKS.TABLE_ROW]=function(e,t){return r.createElement("tr",null,t)},N[O.BLOCKS.TABLE_HEADER_CELL]=function(e,t){return r.createElement("th",null,t)},N[O.BLOCKS.TABLE_CELL]=function(e,t){return r.createElement("td",null,t)},N[O.INLINES.ASSET_HYPERLINK]=function(e){return M(O.INLINES.ASSET_HYPERLINK,e)},N[O.INLINES.ENTRY_HYPERLINK]=function(e){return M(O.INLINES.ENTRY_HYPERLINK,e)},N[O.INLINES.RESOURCE_HYPERLINK]=function(e){return P(O.INLINES.RESOURCE_HYPERLINK,e)},N[O.INLINES.EMBEDDED_ENTRY]=function(e){return M(O.INLINES.EMBEDDED_ENTRY,e)},N[O.INLINES.EMBEDDED_RESOURCE]=function(e,t){return P(O.INLINES.EMBEDDED_RESOURCE,e)},N[O.INLINES.HYPERLINK]=function(e,t){return r.createElement("a",{href:e.data.uri},t)},N),H=((d={})[O.MARKS.BOLD]=function(e){return r.createElement("b",null,e)},d[O.MARKS.ITALIC]=function(e){return r.createElement("i",null,e)},d[O.MARKS.UNDERLINE]=function(e){return r.createElement("u",null,e)},d[O.MARKS.CODE]=function(e){return r.createElement("code",null,e)},d[O.MARKS.SUPERSCRIPT]=function(e){return r.createElement("sup",null,e)},d[O.MARKS.SUBSCRIPT]=function(e){return r.createElement("sub",null,e)},d[O.MARKS.STRIKETHROUGH]=function(e){return r.createElement("s",null,e)},d);function M(e,t){return r.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}function P(e,t){return r.createElement("span",{key:t.data.target.sys.urn},"type: ",t.nodeType," urn: ",t.data.target.sys.urn)}t.i=function(e,t){return void 0===t&&(t={}),e?p(e,{renderNode:E(E({},s),t.renderNode),renderMark:E(E({},H),t.renderMark),renderText:t.renderText,preserveWhitespace:t.preserveWhitespace}):null}},701:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},2243:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(701),E={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=E},5966:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(701),E=n(3305);function L(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return L(E.INLINES,e.nodeType)},t.isBlock=function(e){return L(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},5871:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var E=Object.getOwnPropertyDescriptor(t,n);E&&!("get"in E?!t.__esModule:E.writable||E.configurable)||(E={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,E)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),E=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),L=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},S=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return E(t,e),t},O=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var u=n(701);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return u.BLOCKS}});var o=n(3305);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return o.INLINES}});var _=n(493);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return O(_).default}}),L(n(5126),t),L(n(8182),t),L(n(7826),t);var l=n(2243);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return O(l).default}});var i=S(n(5966));t.helpers=i},3305:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},493:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n},7826:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},5126:function(e,t,n){var r,E=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,E=0,L=t.length;E<L;E++)!r&&E in t||(r||(r=Array.prototype.slice.call(t,0,E)),r[E]=t[E]);return e.concat(r||Array.prototype.slice.call(t))},L=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var S=n(701),O=n(3305),u=L(n(493));t.TOP_LEVEL_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[S.BLOCKS.TABLE,S.BLOCKS.TABLE_ROW,S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[S.BLOCKS.HR,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[S.BLOCKS.OL_LIST]=[S.BLOCKS.LIST_ITEM],r[S.BLOCKS.UL_LIST]=[S.BLOCKS.LIST_ITEM],r[S.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[S.BLOCKS.QUOTE]=[S.BLOCKS.PARAGRAPH],r[S.BLOCKS.TABLE]=[S.BLOCKS.TABLE_ROW],r[S.BLOCKS.TABLE_ROW]=[S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL],r[S.BLOCKS.TABLE_CELL]=[S.BLOCKS.PARAGRAPH],r[S.BLOCKS.TABLE_HEADER_CELL]=[S.BLOCKS.PARAGRAPH],r),t.HEADINGS=[S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=E([S.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[S.BLOCKS.DOCUMENT,S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.LIST_ITEM,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,O.INLINES.HYPERLINK,O.INLINES.ENTRY_HYPERLINK,O.INLINES.ASSET_HYPERLINK,O.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[u.default.BOLD,u.default.CODE,u.default.ITALIC,u.default.UNDERLINE]},8182:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}]);
//# sourceMappingURL=bb02beac61a37533b78c94ba5075ac845a00767b-601e9007a7ba50edbedd.js.map