"use strict";var precacheConfig=[["/manipalandrenuka/index.html","cab87c3b7835d3601054272f68f3f243"],["/manipalandrenuka/static/css/main.093f53bc.css","92ebcd2a875833558725a1af1005cb02"],["/manipalandrenuka/static/js/main.51d20731.js","95c89dc3fd78cb9808e7560a2262e23a"],["/manipalandrenuka/static/media/family.fab27cd9.png","fab27cd9d13abcd4cfcc6c4210a4cad5"],["/manipalandrenuka/static/media/firstglance.687ed90c.jpg","687ed90c2dde5ac776248c5bf2c56af6"],["/manipalandrenuka/static/media/freedom.9023e0f0.png","9023e0f0c89a135e0c3a38e7e705897c"],["/manipalandrenuka/static/media/impact.b7ff3e9a.png","b7ff3e9a6b747d699c74a861b8985fea"],["/manipalandrenuka/static/media/leadership.b7676400.png","b7676400800f40f2c28d5c323dec695c"],["/manipalandrenuka/static/media/mentorship.5425723b.png","5425723b3869a8501df8393d3428a3e3"],["/manipalandrenuka/static/media/overviewcont_1.0deb5dfa.png","0deb5dfae512788093cf024c41317f01"],["/manipalandrenuka/static/media/overviewcont_2.baf7b7bf.png","baf7b7bf2f6efe98056d103dec49db15"],["/manipalandrenuka/static/media/overviewcontmain.f9a2b509.png","f9a2b50965553a1f7bcd68c7f492262a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,a,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return a.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),r=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,a=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var r="/manipalandrenuka/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});