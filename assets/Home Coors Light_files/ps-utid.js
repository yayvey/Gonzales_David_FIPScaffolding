!function(n){"use strict";function o(n,o){for(var i=0,e=n;i<e.length;i++){var d=e[i],t=d.indexOf("="),l=t>=0?decodeURIComponent(d.substr(0,t)):d,r=t>=0?decodeURIComponent(d.substr(t+1)):null;"function"!=typeof l&&o.push({key:l,value:r})}}function i(n,o,i,e,d,t){var l=new Date;l.setTime(l.getTime()),i&&(i*=1e3*i);var r=new Date(l.getTime()+i),u=n+"="+o+(i?"; expires="+r.toISOString():"")+(e?"; path="+e:"")+(d?"; domain="+d:"")+(t?"; secure":"");return"undefined"!=typeof document&&(document.cookie=u),u}function e(n){var o;i(n,"",-1,"/",(null===(o=null===window||void 0===window?void 0:window.location)||void 0===o?void 0:o.hostname)||"")}var d="ps-utid",t="ps-utparam",l=["localhost:8080","cdn.pricespider.com","demo.pricespider.com"];function r(n,r,u){var v,a,s,w,c;void 0===n&&(n=[]),void 0===r&&(r=(null===(v=null===window||void 0===window?void 0:window.location)||void 0===v?void 0:v.search)||""),void 0===u&&(u=(null===(a=null===window||void 0===window?void 0:window.location)||void 0===a?void 0:a.hash)||""),l.indexOf(null===(s=null===window||void 0===window?void 0:window.location)||void 0===s?void 0:s.host)>=0&&(e(t),e(d));var p=function(n,i){var e,d=[];return n.length>1&&(null==(e=n.split("?")[1])?void 0:e.length)&&o(e.indexOf("&")>0?e.split("&"):[e],d),i.length&&(null==(e=i.split("#")[1])?void 0:e.length)&&o(e.indexOf("&")>0?e.split("&"):[e],d),d}(String(r),String(u)),h="false"===p["ps-track"]||"true"===p["ps-dnt"],f="gdpr"===p["ps-mode"],m=[],g=[];if(!h&&!f){for(var _=function(o){var i=o.key,e=o.value;if(null==e?void 0:e.length)for(var d=0,t=n;d<t.length;d++){var l=t[d],r=l.name,u=l.values;i.toLowerCase()===r.toLowerCase()&&m.indexOf(i)<0&&((null==u?void 0:u.length)?u.findIndex((function(n){return n===e}))>=0&&(m.push(encodeURIComponent(r)),g.push(encodeURIComponent(e))):(m.push(encodeURIComponent(r)),g.push(encodeURIComponent(e))))}},I=0,O=p;I<O.length;I++){_(O[I])}if((null==m?void 0:m.length)&&(null==m?void 0:m.length)===(null==g?void 0:g.length))return i(t,m.join(","),60,"/",(null===(w=null===window||void 0===window?void 0:window.location)||void 0===w?void 0:w.hostname)||""),i(d,g.join(","),60,"/",(null===(c=null===window||void 0===window?void 0:window.location)||void 0===c?void 0:c.hostname)||""),[m.join(","),g.join(",")]}return[null,null]}r([{"name":"ABType"},{"name":"audienceType","isInvalid":false,"isInvalidLength":false},{"name":"campaignType"},{"name":"cid","isInvalid":false,"isInvalidLength":false},{"name":"creativeType"},{"name":"marketingGoal","isInvalid":false,"isInvalidLength":false},{"name":"sellerGroup","isInvalid":false,"isInvalidLength":false},{"name":"utm_campaign","isInvalid":false,"isInvalidLength":false},{"name":"utm_medium","isInvalid":false,"isInvalidLength":false},{"name":"utm_source","isInvalid":false,"isInvalidLength":false}]);var u=Object.freeze({__proto__:null,init:r});n.UTID=u,Object.defineProperty(n,"__esModule",{value:!0})}(this.PriceSpider=this.PriceSpider||{});
