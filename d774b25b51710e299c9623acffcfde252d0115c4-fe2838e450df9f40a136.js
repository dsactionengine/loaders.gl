(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{20:function(t,r){},"2qZ/":function(t,r,e){"use strict";e.d(r,"a",(function(){return l}));var n=e("o0o1"),a=e.n(n),i=(e("wcNg"),e("HaE+")),o=e("ZkZm"),u=e(20),c=e("uv9s"),s=e("mjKN"),d=void 0!==s.a?s.a:"beta",f={};function l(t,r,e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(a.a.mark((function t(r,e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===e&&(e=null),void 0===n&&(n={}),e&&(r=b(r,e,n)),f[r]=f[r]||y(r),t.next=6,f[r];case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t,r,e){if(t.startsWith("http"))return t;var n=e.modules||{};return n[t]?n[t]:o.b?e.CDN?(Object(c.a)(e.CDN.startsWith("http")),e.CDN+"/"+r+"@"+d+"/dist/libs/"+t):o.d?"../src/libs/"+t:"modules/"+r+"/src/libs/"+t:"modules/"+r+"/dist/libs/"+t}function y(t){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(a.a.mark((function t(r){var e,n,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.endsWith("wasm")){t.next=7;break}return t.next=3,fetch(r);case 3:return e=t.sent,t.next=6,e.arrayBuffer();case 6:return t.abrupt("return",t.sent);case 7:if(o.b){t.next=14;break}if(t.t0=u.requireFromFile,!t.t0){t.next=13;break}return t.next=12,u.requireFromFile(r);case 12:t.t0=t.sent;case 13:return t.abrupt("return",t.t0);case 14:if(!o.d){t.next=16;break}return t.abrupt("return",importScripts(r));case 16:return t.next=18,fetch(r);case 18:return n=t.sent,t.next=21,n.text();case 21:return i=t.sent,t.abrupt("return",m(i,r));case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,r){if(!o.b)return u.requireFromString&&u.requireFromString(t,r);if(o.d)return eval.call(o.a,t),null;var e=document.createElement("script");e.id=r;try{e.appendChild(document.createTextNode(t))}catch(n){e.text=t}return document.body.appendChild(e),null}},"5W2Y":function(t,r,e){"use strict";e.d(r,"a",(function(){return h})),e.d(r,"b",(function(){return v}));var n=e("o0o1"),a=e.n(n),i=(e("wcNg"),e("rePB")),o=e("HaE+"),u=e("2qZ/");function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){Object(i.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var d,f,l="https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_decoder.js",p="https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_wasm_wrapper.js",b="https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_decoder.wasm",y="https://raw.githubusercontent.com/google/draco/1.4.1/javascript/draco_encoder.js";function h(t){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(a.a.mark((function t(r){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.modules||{},d=e.draco3d?d||e.draco3d.createDecoderModule({}).then((function(t){return{draco:t}})):d||_(r),t.next=4,d;case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(a.a.mark((function t(r){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.modules||{},f=e.draco3d?f||e.draco3d.createEncoderModule({}).then((function(t){return{draco:t}})):f||A(r),t.next=4,f;case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(a.a.mark((function t(r){var e,n,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.draco&&r.draco.decoderType,t.next="js"===t.t0?3:(t.t0,7);break;case 3:return t.next=5,Object(u.a)(l,"draco",r);case 5:return e=t.sent,t.abrupt("break",20);case 7:return t.t1=Promise,t.next=10,Object(u.a)(p,"draco",r);case 10:return t.t2=t.sent,t.next=13,Object(u.a)(b,"draco",r);case 13:return t.t3=t.sent,t.t4=[t.t2,t.t3],t.next=17,t.t1.all.call(t.t1,t.t4);case 17:i=t.sent,e=i[0],n=i[1];case 20:return e=e||globalThis.DracoDecoderModule,t.next=23,g(e,n);case 23:return t.abrupt("return",t.sent);case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,r){var e={};return r&&(e.wasmBinary=r),new Promise((function(r){t(s(s({},e),{},{onModuleLoaded:function(t){return r({draco:t})}}))}))}function A(t){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(a.a.mark((function t(r){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.a)(y,"draco",r);case 2:return e=(e=t.sent)||globalThis.DracoEncoderModule,t.abrupt("return",new Promise((function(t){e({onModuleLoaded:function(r){return t({draco:r})}})})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},F2Cy:function(t,r,e){"use strict";e.d(r,"a",(function(){return T}));var n=e("o0o1"),a=e.n(n),i=(e("wcNg"),e("HaE+")),o=e("rePB"),u=e("ixMB"),c={draco:{decoderType:"object"==typeof WebAssembly?"wasm":"js",libraryPath:"libs/",extraAttributes:{},attributeNameEntry:void 0}},s={name:"Draco",id:"draco",module:"draco",shapes:["mesh"],version:u.a,worker:!0,extensions:["drc"],mimeTypes:["application/octet-stream"],binary:!0,tests:["DRACO"],options:c},d=e("KQm4"),f=e("jQLd"),l=e("h79P"),p=e("KN2Q");function b(t,r,e){var n=e?y(e.metadata):void 0;return Object(l.a)(t,r,n)}function y(t){var r=new Map;for(var e in t)r.set(e+".string",JSON.stringify(t[e]));return r}function h(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return m(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function m(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function v(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?v(Object(e),!0).forEach((function(r){Object(o.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var _={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR_0",TEX_COORD:"TEXCOORD_0"},w={1:Int8Array,2:Uint8Array,3:Int16Array,4:Uint16Array,5:Int32Array,6:Uint32Array,9:Float32Array},g=function(){function t(t){this.draco=t,this.decoder=new this.draco.Decoder,this.metadataQuerier=new this.draco.MetadataQuerier}var r=t.prototype;return r.destroy=function(){this.draco.destroy(this.decoder),this.draco.destroy(this.metadataQuerier)},r.parseSync=function(t,r){void 0===r&&(r={});var e=new this.draco.DecoderBuffer;e.Init(new Int8Array(t),t.byteLength),this._disableAttributeTransforms(r);var n=this.decoder.GetEncodedGeometryType(e),a=n===this.draco.TRIANGULAR_MESH?new this.draco.Mesh:new this.draco.PointCloud;try{var i;switch(n){case this.draco.TRIANGULAR_MESH:i=this.decoder.DecodeBufferToMesh(e,a);break;case this.draco.POINT_CLOUD:i=this.decoder.DecodeBufferToPointCloud(e,a);break;default:throw new Error("DRACO: Unknown geometry type.")}if(!i.ok()||!a.ptr){var o="DRACO decompression failed: "+i.error_msg();throw new Error(o)}var u=this._getDracoLoaderData(a,n,r),c=this._getMeshData(a,u,r),s=Object(f.a)(c.attributes),d=function(t,r,e){var n=y(r.metadata),a=[],i=function(t){var r={};for(var e in t){var n=t[e];r[n.name||"undefined"]=n}return r}(r.attributes);for(var o in t){var u=b(o,t[o],i[o]);a.push(u)}if(e){var c=b("indices",e);a.push(c)}return new p.a(a,n)}(c.attributes,u,c.indices);return O(O({loader:"draco",loaderData:u,header:{vertexCount:a.num_points(),boundingBox:s}},c),{},{schema:d})}finally{this.draco.destroy(e),a&&this.draco.destroy(a)}},r._getDracoLoaderData=function(t,r,e){var n=this._getTopLevelMetadata(t),a=this._getDracoAttributes(t,e);return{geometry_type:r,num_attributes:t.num_attributes(),num_points:t.num_points(),num_faces:t instanceof this.draco.Mesh?t.num_faces():0,metadata:n,attributes:a}},r._getDracoAttributes=function(t,r){for(var e={},n=0;n<t.num_attributes();n++){var a=this.decoder.GetAttribute(t,n),i=this._getAttributeMetadata(t,n);e[a.unique_id()]={unique_id:a.unique_id(),attribute_type:a.attribute_type(),data_type:a.data_type(),num_components:a.num_components(),byte_offset:a.byte_offset(),byte_stride:a.byte_stride(),normalized:a.normalized(),attribute_index:n,metadata:i};var o=this._getQuantizationTransform(a,r);o&&(e[a.unique_id()].quantization_transform=o);var u=this._getOctahedronTransform(a,r);u&&(e[a.unique_id()].octahedron_transform=u)}return e},r._getMeshData=function(t,r,e){var n=this._getMeshAttributes(r,t,e);if(!n.POSITION)throw new Error("DRACO: No position attribute found.");if(t instanceof this.draco.Mesh)switch(e.topology){case"triangle-strip":return{topology:"triangle-strip",mode:4,attributes:n,indices:{value:this._getTriangleStripIndices(t),size:1}};case"triangle-list":default:return{topology:"triangle-list",mode:5,attributes:n,indices:{value:this._getTriangleListIndices(t),size:1}}}return{topology:"point-list",mode:0,attributes:n}},r._getMeshAttributes=function(t,r,e){for(var n={},a=0,i=Object.values(t.attributes);a<i.length;a++){var o=i[a],u=this._deduceAttributeName(o,e);o.name=u;var c=this._getAttributeValues(r,o),s=c.value,d=c.size;n[u]={value:s,size:d,byteOffset:o.byte_offset,byteStride:o.byte_stride,normalized:o.normalized}}return n},r._getTriangleListIndices=function(t){var r=3*t.num_faces(),e=4*r,n=this.draco._malloc(e);try{return this.decoder.GetTrianglesUInt32Array(t,e,n),new Uint32Array(this.draco.HEAPF32.buffer,n,r).slice()}finally{this.draco._free(n)}},r._getTriangleStripIndices=function(t){var r=new this.draco.DracoInt32Array;try{return this.decoder.GetTriangleStripsFromMesh(t,r),function(t){for(var r=t.size(),e=new Int32Array(r),n=0;n<r;n++)e[n]=t.GetValue(n);return e}(r)}finally{this.draco.destroy(r)}},r._getAttributeValues=function(t,r){var e,n=w[r.data_type],a=r.num_components,i=t.num_points()*a,o=i*n.BYTES_PER_ELEMENT,u=function(t,r){switch(r){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32;default:return t.DT_INVALID}}(this.draco,n),c=this.draco._malloc(o);try{var s=this.decoder.GetAttribute(t,r.attribute_index);this.decoder.GetAttributeDataArrayForAllPoints(t,s,u,o,c),e=new n(this.draco.HEAPF32.buffer,c,i).slice()}finally{this.draco._free(c)}return{value:e,size:a}},r._deduceAttributeName=function(t,r){for(var e=t.unique_id,n=0,a=Object.entries(r.extraAttributes||{});n<a.length;n++){var i=a[n],o=i[0];if(i[1]===e)return o}var u=t.attribute_type;for(var c in _){if(this.draco[c]===u)return _[c]}var s=r.attributeNameEntry||"name";return t.metadata[s]?t.metadata[s].string:"CUSTOM_ATTRIBUTE_"+e},r._getTopLevelMetadata=function(t){var r=this.decoder.GetMetadata(t);return this._getDracoMetadata(r)},r._getAttributeMetadata=function(t,r){var e=this.decoder.GetAttributeMetadata(t,r);return this._getDracoMetadata(e)},r._getDracoMetadata=function(t){if(!t||!t.ptr)return{};for(var r={},e=this.metadataQuerier.NumEntries(t),n=0;n<e;n++){var a=this.metadataQuerier.GetEntryName(t,n);r[a]=this._getDracoMetadataField(t,a)}return r},r._getDracoMetadataField=function(t,r){var e=new this.draco.DracoInt32Array;try{this.metadataQuerier.GetIntEntryArray(t,r,e);var n=function(t){for(var r=t.size(),e=new Int32Array(r),n=0;n<r;n++)e[n]=t.GetValue(n);return e}(e);return{int:this.metadataQuerier.GetIntEntry(t,r),string:this.metadataQuerier.GetStringEntry(t,r),double:this.metadataQuerier.GetDoubleEntry(t,r),intArray:n}}finally{this.draco.destroy(e)}},r._disableAttributeTransforms=function(t){for(var r,e=t.quantizedAttributes,n=void 0===e?[]:e,a=t.octahedronAttributes,i=void 0===a?[]:a,o=h([].concat(Object(d.a)(n),Object(d.a)(i)));!(r=o()).done;){var u=r.value;this.decoder.SkipAttributeTransform(this.draco[u])}},r._getQuantizationTransform=function(t,r){var e=this,n=r.quantizedAttributes,a=void 0===n?[]:n,i=t.attribute_type();if(a.map((function(t){return e.decoder[t]})).includes(i)){var o=new this.draco.AttributeQuantizationTransform;try{if(o.InitFromAttribute(t))return{quantization_bits:o.quantization_bits(),range:o.range(),min_values:new Float32Array([1,2,3]).map((function(t){return o.min_value(t)}))}}finally{this.draco.destroy(o)}}return null},r._getOctahedronTransform=function(t,r){var e=this,n=r.octahedronAttributes,a=void 0===n?[]:n,i=t.attribute_type();if(a.map((function(t){return e.decoder[t]})).includes(i)){var o=new this.draco.AttributeQuantizationTransform;try{if(o.InitFromAttribute(t))return{quantization_bits:o.quantization_bits()}}finally{this.draco.destroy(o)}}return null},t}();var A=e("5W2Y");function j(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?j(Object(e),!0).forEach((function(r){Object(o.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var T=D(D({},s),{},{parse:function(t,r){return I.apply(this,arguments)}});function I(){return(I=Object(i.a)(a.a.mark((function t(r,e){var n,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.a)(e);case 2:return n=t.sent,i=n.draco,o=new g(i),t.prev=5,t.abrupt("return",o.parseSync(r,null==e?void 0:e.draco));case 7:return t.prev=7,o.destroy(),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[5,,7,10]])})))).apply(this,arguments)}},Lx8K:function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));var n=e("2jNN");function a(t){switch(t.constructor){case Int8Array:return new n.h;case Uint8Array:return new n.l;case Int16Array:return new n.f;case Uint16Array:return new n.j;case Int32Array:return new n.g;case Uint32Array:return new n.k;case Float32Array:return new n.d;case Float64Array:return new n.e;default:throw new Error("array type not supported")}}},h79P:function(t,r,e){"use strict";e.d(r,"b",(function(){return u})),e.d(r,"a",(function(){return c}));var n=e("KN2Q"),a=e("3p+V"),i=e("2jNN"),o=e("Lx8K");function u(t,r){var e=function(t){var r=[];for(var e in t){var n=t[e];r.push(c(e,n))}return r}(t);return new n.a(e,r)}function c(t,r,e){var n=Object(o.a)(r.value),u=e||function(t){var r=new Map;"byteOffset"in t&&r.set("byteOffset",t.byteOffset.toString(10));"byteStride"in t&&r.set("byteStride",t.byteStride.toString(10));"normalized"in t&&r.set("normalized",t.normalized.toString());return r}(r);return new a.a(t,new i.c(r.size,new a.a("value",n)),!1,u)}},ixMB:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n="undefined"!=typeof __VERSION__?__VERSION__:"latest"},jQLd:function(t,r,e){"use strict";function n(t){for(var r=1/0,e=1/0,n=1/0,a=-1/0,i=-1/0,o=-1/0,u=t.POSITION?t.POSITION.value:[],c=u&&u.length,s=0;s<c;s+=3){var d=u[s],f=u[s+1],l=u[s+2];r=d<r?d:r,e=f<e?f:e,n=l<n?l:n,a=d>a?d:a,i=f>i?f:i,o=l>o?l:o}return[[r,e,n],[a,i,o]]}e.d(r,"a",(function(){return n}))}}]);