const e=require("inquirer"),{useTs:t}=require("../config/bruce"),{IGNORE_DEPS:r}=require("../util/getting"),{AbsPath:n}=require("../util/setting"),{DEPENDENCE:E,QT_DEPS:_,QT_FRAME:i,QT_LOCALE:a,QT_MODE:o,QT_NAMEC:u,QT_NAMEP:s,QT_PORT:S,QT_STYLE:T,QT_TYPE:l,QT_USE_ANALYZE:c,QT_USE_COMPRESS:p,QT_USE_CSSLINT:Q,QT_USE_ES6:d,QT_USE_HASH:P,QT_USE_INSTALL:A,QT_USE_JSLINT:f,QT_USE_OPEN:D,QT_USE_POLYFILL:U,QT_USE_PROPS:O,QT_USE_TIMED:w,QT_USE_TS:L,QT_USE_UPLOAD:N,QT_VENDOR:m}=require("./question");async function M(t){const{MODE:r}=await e.prompt(o),n=[S,D,Q,f],E=[Q,f,d,!t&&U,P,w,p,c,N].filter(Boolean),_={dev:n,test:E,prod:E}[r],i=await e.prompt(_);return i.MODE=r,i}async function R(){const{dependencies:t={}}=require(n("package.json")),E=Object.keys(t).sort().reduce((e,t)=>(!r.includes(t)&&e.push(t),e),[]);return await e.prompt(m(E))}async function q(){const{FRAME:t}=await e.prompt(i),r=[s,"default"!==t&&l,"default"!==t&&T,"default"!==t&&_(t),"default"!==t&&L,A],n=await e.prompt(r.filter(Boolean));return n.FRAME=t,"default"!==t&&(n.DEPS=E[t].reduce((e,t)=>(t.disabled&&e.push(t.value),e),n.DEPS).map(e=>e.split(" ")).flat().sort(),n.USE_TS&&(n.DEVDEPS=["node",...n.DEPS].filter(e=>!e.includes("@hot-loader")&&!e.includes("mobx")).map(e=>`@types/${e}`).sort())),n}async function y(){return await e.prompt(a)}async function I(){const r=[u,!t&&O],n=await e.prompt(r.filter(Boolean));return t&&(n.USE_PROPS=!0),n}module.exports={BuildAnswer:M,DllAnswer:R,InitAnswer:q,LocaleAnswer:y,NewAnswer:I};