import{ar as r,as as c,at as s}from"./index.3392e392.js";function i(t){if(t.indexOf("filename*=")!==-1)return decodeURIComponent(t.split("filename*=")[1].split("'")[2]);let e=t.split("filename=")[1];return e=e.replace(/^["']|["']$/g,""),e}function m({page:t,limit:e,sortBy:n="updated_at",sortOrder:d="desc",query:o,sources:l}){return r.get("/downloads",{params:{page:t,limit:e,query:o,sources:l,order_by:n,order_direction:d},paramsSerializer:a=>s.stringify(a,{arrayFormat:"repeat",skipNulls:!0})}).then(a=>a.data).catch(a=>Promise.reject(c(a)))}function p(t){return r({method:"post",url:"/downloads",data:t,headers:{"Content-Type":"multipart/form-data"}})}function w(t){return r.get(`/downloads/${t}/download`,{responseType:"blob"}).then(e=>{const n=new Blob([e.data],{type:e.headers["content-type"]}),d=window.URL.createObjectURL(n),o=document.createElement("a");o.href=d;const l=i(e.headers["content-disposition"]);console.warn(l),console.warn(e.headers["content-disposition"]),o.setAttribute("download",l),document.body.appendChild(o),o.click(),document.body.removeChild(o)}).catch(e=>Promise.reject(c(e)))}function b(t){return r.get(`/downloads/${t}/download`,{responseType:"blob"}).then(e=>{const n=new Blob([e.data],{type:e.headers["content-type"]});return window.URL.createObjectURL(n)}).catch(e=>Promise.reject(c(e)))}function h(t){return r.get(`/downloads/${t}/download`,{responseType:"text"}).then(e=>e.data).catch(e=>Promise.reject(c(e)))}export{w as a,b,m as c,p as d,h as g};
