(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4646)}])},9749:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(6495).Z,o=t(2648).Z,r=t(1598).Z,i=t(7273).Z,s=r(t(7294)),l=o(t(3121)),n=t(2675),c=t(139),h=t(8730);t(7238);var d=o(t(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(A){return void 0!==A.default}function _(A){return"number"==typeof A||void 0===A?A:"string"==typeof A&&/^[0-9]+$/.test(A)?parseInt(A,10):NaN}function g(A,e,t,o,r,i,s){if(!A||A["data-loaded-src"]===e)return;A["data-loaded-src"]=e;let l="decode"in A?A.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(A.parentNode){if("blur"===t&&i(!0),null==o?void 0:o.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:A});let s=!1,l=!1;o.current(a({},e,{nativeEvent:e,currentTarget:A,target:A,isDefaultPrevented:()=>s,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{s=!0,e.preventDefault()},stopPropagation:()=>{l=!0,e.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(A)}})}let u=s.forwardRef((A,e)=>{var{imgAttributes:t,heightInt:o,widthInt:r,qualityInt:l,className:n,imgStyle:c,blurStyle:h,isLazy:d,fill:m,placeholder:p,loading:_,srcString:u,config:f,unoptimized:x,loader:w,onLoadRef:j,onLoadingCompleteRef:b,setBlurComplete:B,setShowAltText:C,onLoad:v,onError:N}=A,E=i(A,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return _=d?"lazy":_,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},E,t,{width:r,height:o,decoding:"async","data-nimg":m?"fill":"1",className:n,loading:_,style:a({},c,h),ref:s.useCallback(A=>{e&&("function"==typeof e?e(A):"object"==typeof e&&(e.current=A)),A&&(N&&(A.src=A.src),A.complete&&g(A,u,p,j,b,B,x))},[u,p,j,b,B,N,x,e]),onLoad:A=>{let e=A.currentTarget;g(e,u,p,j,b,B,x)},onError:A=>{C(!0),"blur"===p&&B(!0),N&&N(A)}})))}),f=s.forwardRef((A,e)=>{let t,o;var r,{src:g,sizes:f,unoptimized:x=!1,priority:w=!1,loading:j,className:b,quality:B,width:C,height:v,fill:N,style:E,onLoad:y,onLoadingComplete:X,placeholder:I="empty",blurDataURL:Z,layout:k,objectFit:M,objectPosition:R,lazyBoundary:F,lazyRoot:W}=A,D=i(A,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let Q=s.useContext(h.ImageConfigContext),G=s.useMemo(()=>{let A=m||Q||c.imageConfigDefault,e=[...A.deviceSizes,...A.imageSizes].sort((A,e)=>A-e),t=A.deviceSizes.sort((A,e)=>A-e);return a({},A,{allSizes:e,deviceSizes:t})},[Q]),U=D,Y=U.loader||d.default;delete U.loader;let S="__next_img_default"in Y;if(S){if("custom"===G.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let T=Y;Y=A=>{let{config:e}=A,t=i(A,["config"]);return T(t)}}if(k){"fill"===k&&(N=!0);let L={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];L&&(E=a({},E,L));let P={responsive:"100vw",fill:"100vw"}[k];P&&!f&&(f=P)}let H="",O=_(C),z=_(v);if("object"==typeof(r=g)&&(p(r)||void 0!==r.src)){let K=p(g)?g.default:g;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(t=K.blurWidth,o=K.blurHeight,Z=Z||K.blurDataURL,H=K.src,!N){if(O||z){if(O&&!z){let J=O/K.width;z=Math.round(K.height*J)}else if(!O&&z){let V=z/K.height;O=Math.round(K.width*V)}}else O=K.width,z=K.height}}let q=!w&&("lazy"===j||void 0===j);((g="string"==typeof g?g:H).startsWith("data:")||g.startsWith("blob:"))&&(x=!0,q=!1),G.unoptimized&&(x=!0),S&&g.endsWith(".svg")&&!G.dangerouslyAllowSVG&&(x=!0);let[$,AA]=s.useState(!1),[Ae,At]=s.useState(!1),Aa=_(B),Ao=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},Ae?{}:{color:"transparent"},E),Ar="blur"===I&&Z&&!$?{backgroundSize:Ao.objectFit||"cover",backgroundPosition:Ao.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(n.getImageBlurSvg({widthInt:O,heightInt:z,blurWidth:t,blurHeight:o,blurDataURL:Z}),'")')}:{},Ai=function(A){let{config:e,src:t,unoptimized:a,width:o,quality:r,sizes:i,loader:s}=A;if(a)return{src:t,srcSet:void 0,sizes:void 0};let{widths:l,kind:n}=function(A,e,t){let{deviceSizes:a,allSizes:o}=A;if(t){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let s;s=r.exec(t);s)i.push(parseInt(s[2]));if(i.length){let l=.01*Math.min(...i);return{widths:o.filter(A=>A>=a[0]*l),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof e)return{widths:a,kind:"w"};let n=[...new Set([e,2*e].map(A=>o.find(e=>e>=A)||o[o.length-1]))];return{widths:n,kind:"x"}}(e,o,i),c=l.length-1;return{sizes:i||"w"!==n?i:"100vw",srcSet:l.map((A,a)=>"".concat(s({config:e,src:t,quality:r,width:A})," ").concat("w"===n?A:a+1).concat(n)).join(", "),src:s({config:e,src:t,quality:r,width:l[c]})}}({config:G,src:g,unoptimized:x,width:O,quality:Aa,sizes:f,loader:Y}),As=g,Al={imageSrcSet:Ai.srcSet,imageSizes:Ai.sizes,crossOrigin:U.crossOrigin},An=s.useRef(y);s.useEffect(()=>{An.current=y},[y]);let Ac=s.useRef(X);s.useEffect(()=>{Ac.current=X},[X]);let Ah=a({isLazy:q,imgAttributes:Ai,heightInt:z,widthInt:O,qualityInt:Aa,className:b,imgStyle:Ao,blurStyle:Ar,loading:j,config:G,fill:N,unoptimized:x,placeholder:I,loader:Y,srcString:As,onLoadRef:An,onLoadingCompleteRef:Ac,setBlurComplete:AA,setShowAltText:At},U);return s.default.createElement(s.default.Fragment,null,s.default.createElement(u,Object.assign({},Ah,{ref:e})),w?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+Ai.src+Ai.srcSet+Ai.sizes,rel:"preload",as:"image",href:Ai.srcSet?void 0:Ai.src},Al))):null)});e.default=f,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),A.exports=e.default)},2675:function(A,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(A){let{widthInt:e,heightInt:t,blurWidth:a,blurHeight:o,blurDataURL:r}=A,i=a||e,s=o||t,l=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&o?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},9824:function(A,e){"use strict";function t(A){let{config:e,src:t,width:a,quality:o}=A;return"".concat(e.path,"?url=").concat(encodeURIComponent(t),"&w=").concat(a,"&q=").concat(o||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.__next_img_default=!0,e.default=t},4646:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return V}});var a=t(5893),o=t(9008),r=t.n(o),i=t(7294),s=t(3423),l=t.n(s);let n=A=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"#f4f7fa",...A,children:(0,a.jsx)("path",{d:"M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5-98.5 18.2c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4l82.6-56.8 82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1-18.2-98.5zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4-45.2 65.6c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3-65.6-45.2c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3l-78.3-14.4 45.2-65.6c5.7-8.2 5.7-19 0-27.2l-45.2-65.6 78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3 65.6 45.2c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm-64-112a64 64 0 1 1 128 0 64 64 0 1 1-128 0z"})}),c=A=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"#0b0c0e",...A,children:(0,a.jsx)("path",{d:"M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3 0 98 62.8 181.4 150.4 211.7-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256c0 123.7 100 224 223.5 224 47.8 0 92-15 128.4-40.6 1.9-1.3 3.7-2.7 5.5-4 4.8-3.6 9.4-7.4 13.9-11.4 2.7-2.4 5.3-4.8 7.9-7.3 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7.6-7.4 1.2-11.1 1.6-5 .5-10.1.9-15.3 1h-4c-96.8-.2-175.2-78.9-175.2-176 0-54.8 24.9-103.7 64.1-136 1-.9 2.1-1.7 3.2-2.6 4-3.2 8.2-6.2 12.5-9 3.1-2 6.3-4 9.6-5.8 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6-2.7-.1-5.5-.1-8.2-.1-3.3 0-6.5.1-9.8.2-2.3.1-4.6.2-6.9.4z"})}),h=()=>{let[A,e]=(0,i.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),t=A=>{"dark"===A?(document.documentElement.classList.add("darkMode"),document.documentElement.classList.remove("lightMode")):(document.documentElement.classList.add("lightMode"),document.documentElement.classList.remove("darkMode"))};return(0,i.useEffect)(()=>{t(A)},[A]),(0,a.jsxs)("div",{className:l().themeToggleWrapper,children:[(0,a.jsxs)("label",{className:l().themeSwitch,children:[(0,a.jsx)("input",{type:"checkbox",id:"checkbox",onClick:t=>{e("dark"===A?"light":"dark")}}),(0,a.jsx)("div",{className:"".concat(l().slider," ").concat(l().round)})]}),"dark"===A?(0,a.jsx)(n,{}):(0,a.jsx)(c,{})]})};var d=t(7722),m=t.n(d);function p(){return(0,a.jsx)("header",{className:m().header,children:(0,a.jsxs)("nav",{className:m().header__nav,children:[(0,a.jsx)("a",{href:"#about-section",className:m().header__item,children:"About"}),(0,a.jsx)("a",{href:"#projects-section",className:m().header__item,children:"Projects"}),(0,a.jsx)("a",{href:"#footer",className:m().header__item,children:"Contact"}),(0,a.jsx)(h,{})]})})}var _=t(3901),g=t.n(_),u={src:"/portfolio//_next/static/media/heroPhoto.74070962.avif",height:4730,width:2898,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAZhtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAG8AAEAAAAAAAAALgABAAAAAAHqAAEAAAAAAAAALQAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAA12lwcnAAAACxaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAFAAAACAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAFAAAACAAAABBwaXhpAAAAAAMICAgAAAAeaXBtYQAAAAAAAAACAAEEgYYHiAACBIIDhIUAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAAGNtZGF0EgAKBRgIp2FQMiMXABBBQFDty4iKFopHEt7mhuCMBHaOjFPC7LV9wgYAi8dMQBIACggYCKdggQEDQjIfFwAAAFDJ+/95o+F7tRb6kF9gw1xU1ac8WPvIGwxzFg==",blurWidth:5,blurHeight:8},f=t(5675),x=t.n(f);function w(){return(0,a.jsxs)("section",{className:g().hero,children:[(0,a.jsxs)("a",{href:"#about-section",className:g().menu,children:[(0,a.jsx)("p",{className:g().menu__icon,children:"\uD83D\uDC4B"}),(0,a.jsx)("p",{className:g().menu__text,children:"Hi! I'm Karol"})]}),(0,a.jsx)(x(),{priority:!0,src:u,alt:"Picture of Karol",className:g().hero__image,sizes:"(max-width: 800px) 50vw, (max-width: 1200px) 33vw, 33vw"}),(0,a.jsx)("h1",{className:g().hero__heading,children:"Junior Frontend Developer"})]})}var j=t(9909),b=t.n(j),B=t(9950),C=t.n(B);let v=A=>{let{id:e,title:t,children:o}=A;return(0,a.jsxs)("div",{id:e,className:C().section,children:[(0,a.jsx)("h2",{className:C().section__title,children:t}),(0,a.jsx)("div",{className:C().section__content,children:o})]})},N=()=>(0,a.jsxs)(v,{id:"about-section",title:"About",children:[(0,a.jsx)("p",{className:b().about__text,children:"I am a physiotherapist with a Ph.D. in medical and health sciences living in Warsaw. I am currently working in the orthopedic clinic but I would like to change my line of work and take up new challenges as a front-end developer."}),(0,a.jsx)("p",{className:b().about__text,children:"In my Ph.D. research one of the greatest challenges was processing data acquired by Motion Capture System I was using. It showed me the immense possibilities of programming. Therefore, in February 2022 I decided to start learning web development. Since then, I have completed a few online courses concerning main technologies such as HTML, CSS, JavaScript and React.js."}),(0,a.jsx)("p",{className:b().about__text,children:"Privately, I am a lover of travel, mountain trips and water sports. I am also learning French as a hobby."}),(0,a.jsx)("p",{className:b().about__text,children:"Hope to hear from you!"})]}),E=[{photoImport:{src:"/portfolio//_next/static/media/natours.f315ce88.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAJwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAAC9tZGF0EgAKCBgIvGCBAQNCMhkXAAAAUFHb3O/WglH9E5p+YAVoYv222gfg",blurWidth:8,blurHeight:5},photoDescription:"Natours Project Photo",projectTitle:"Natours Project",projectTechStack:"HTML - CSS - RWD - Sass",repoUrl:"https://github.com/karollann/natours-project",websiteUrl:"https://karollann.github.io/natours-project/"},{photoImport:{src:"/portfolio//_next/static/media/nexter.be3ece0d.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAJwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAAC9tZGF0EgAKCBgIvGCBAQNCMhkXAAggAAQA/HQMcewYyUXbX+zbpCwvpEHA",blurWidth:8,blurHeight:5},photoDescription:"Trillo Project Photo",projectTitle:"Nexter Project",projectTechStack:"HTML - CSS - Flexbox - Sass",repoUrl:"https://github.com/karollann/nexter-project",websiteUrl:"https://karollann.github.io/nexter-project/"},{photoImport:{src:"/portfolio//_next/static/media/trillo.2eb95241.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAALAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAADRtZGF0EgAKCBgIvGCBAQNCMh4XAAAAUIdMVgAMCYXTHaDCGBfuoxRxJfs2e9YBNsA=",blurWidth:8,blurHeight:5},photoDescription:"Nexter Project Photo",projectTitle:"Trillo Project",projectTechStack:"HTML - CSS - Grid - Sass",repoUrl:"https://github.com/karollann/trillo-project",websiteUrl:"https://karollann.github.io/trillo-project/"},{photoImport:{src:"/portfolio//_next/static/media/bankist.88a4ee53.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAIAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAAChtZGF0EgAKCBgIvGCBAQNCMhIXAAQQAAQAuaq5IZoafPS4VyA=",blurWidth:8,blurHeight:5},photoDescription:"Bankist Project Photo",projectTitle:"Bankist Project",projectTechStack:"JavaScript",repoUrl:"https://github.com/karollann/bankist-project",websiteUrl:"https://karollann.github.io/bankist-project/"},{photoImport:{src:"/portfolio//_next/static/media/forkify.fef62e52.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAKAAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAADBtZGF0EgAKCBgIvGCBAQNCMhoXAAAAQPBuQFjQ+VsepUFAw0G+Jo8xH7wv8A==",blurWidth:8,blurHeight:5},photoDescription:"Forkify Project Photo",projectTitle:"Forkify Project",projectTechStack:"JavaScript",repoUrl:"https://github.com/karollann/forkify-project",websiteUrl:"https://karollann.github.io/forkify-project/"},{photoImport:{src:"/portfolio//_next/static/media/dadJokes.1bb2f150.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAALgAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAADZtZGF0EgAKCBgIvGCBAQNCMiAXAAAAUMnJ/Cbk/5c5GUKYq/kSxq8QTVzCK+nOKdvMwA==",blurWidth:8,blurHeight:5},photoDescription:"Dad Jokes Project Photo",projectTitle:"Dad Jokes Generator",projectTechStack:"React.js",repoUrl:"https://github.com/karollann/dad-jokes-generator",websiteUrl:"https://karollann.github.io/dad-jokes-generator/"},{photoImport:{src:"/portfolio//_next/static/media/todoList.7af26f38.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAHQAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAACVtZGF0EgAKCBgIvGCBAQNCMg8XAAAAUK/mK2UJvUJqK0A=",blurWidth:8,blurHeight:5},photoDescription:"Todo List Project Photo",projectTitle:"Todo List",projectTechStack:"React.js - Chakra UI",repoUrl:"https://github.com/karollann/todo-list",websiteUrl:"https://karollann.github.io/todo-list/"},{photoImport:{src:"/portfolio//_next/static/media/yahtzee.3681eebb.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAKQAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAADFtZGF0EgAKCBgIvGCBAQNCMhsXAAAAQL0PjUTcsK+Qp1MON61kiKPgsumbTFg=",blurWidth:8,blurHeight:5},photoDescription:"Yahtzee Game Photo",projectTitle:"Yahtzee Game",projectTechStack:"React.js",repoUrl:"https://github.com/karollann/yahtzee-game",websiteUrl:"https://karollann.github.io/yahtzee-game/"},{photoImport:{src:"/portfolio//_next/static/media/colorPalette.ca6019c2.avif",height:1800,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAAKQAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABQAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAADFtZGF0EgAKCBgIvGCBAQNCMhsXAAAAQJY/0bYcR3wbItDvkWraXThdMNMQfpA=",blurWidth:8,blurHeight:5},photoDescription:"Colors Palette Project Photo",projectTitle:"Colors Palette Project",projectTechStack:"React.js - Material UI",repoUrl:"https://github.com/karollann/color-project",websiteUrl:"https://karollann.github.io/color-project/"},{photoImport:{src:"/portfolio//_next/static/media/rentTheHouse.7bb358f2.avif",height:1596,width:2880,blurDataURL:"data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAZhtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgACAAAAAAG8AAEAAAAAAAAAFQABAAAAAAHRAAEAAAAAAAAAKAAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAA12lwcnAAAACxaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EAHAAAAAAUaXNwZQAAAAAAAAAIAAAABAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAAAIAAAABAAAABBwaXhpAAAAAAMICAgAAAAeaXBtYQAAAAAAAAACAAEEgYYHiAACBIIDhIUAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAAEVtZGF0EgAKBRgIfsKgMgoXAAABAAF1ULRgEgAKCBgIfsECAgaEMhoXAAAAQJrcTBGLcUTQaDaF+/aM8bqUEbSFOA==",blurWidth:8,blurHeight:4},photoDescription:"Rent The House Project Photo",projectTitle:"Rent The House Project",projectTechStack:"Next.js - Typescript - i18next",repoUrl:"https://github.com/karollann/rent-the-house",websiteUrl:"https://rent-the-house.vercel.app"}];var y=t(3824),X=t.n(y);let I=A=>(0,a.jsx)("svg",{viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...A,children:(0,a.jsx)("path",{d:"M9 8.5h7.5V16M16.5 8.5 7 18",stroke:"currentColor",strokeWidth:1.2})}),Z=A=>{let{projectTitle:e,projectTechStack:t,repoUrl:o}=A;return(0,a.jsxs)("li",{className:X().projectRow__list,children:[(0,a.jsxs)("div",{className:X().projectRow__listContent,children:[(0,a.jsx)("h3",{className:X().projectRow__heading,children:e}),(0,a.jsx)("span",{className:X().projectRow__text,children:t})]}),(0,a.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:X().projectRow__link,"aria-label":"Go to ".concat(e," repository."),children:(0,a.jsx)(I,{className:X().projectRow__icon})})]})};var k=t(9469),M=t.n(k);let R=()=>(0,a.jsx)(v,{id:"projects-section",title:"Projects",children:(0,a.jsx)("ul",{className:M().project,children:E.map(A=>(0,a.jsx)(Z,{projectTitle:A.projectTitle,projectTechStack:A.projectTechStack,repoUrl:A.repoUrl},A.projectTitle))})});var F=t(4737),W=t.n(F);let D=()=>(0,a.jsx)(v,{title:"Courses",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{className:W().courses,children:[(0,a.jsx)("h3",{className:W().courses__heading,children:"The Web Developer Bootcamp"}),(0,a.jsx)("span",{className:W().courses__text,children:"by Colt Steele (Udemy)"})]}),(0,a.jsxs)("li",{className:W().courses,children:[(0,a.jsx)("h3",{className:W().courses__heading,children:"Advanced CSS and Sass: Flexbox, Grid, Animations and More!"}),(0,a.jsx)("span",{className:W().courses__text,children:"by Jonas Schmedtmann (Udemy)"})]}),(0,a.jsxs)("li",{className:W().courses,children:[(0,a.jsx)("h3",{className:W().courses__heading,children:"The Complete JavaScript Course 2022: From Zero to Expert!"}),(0,a.jsx)("span",{className:W().courses__text,children:"by Jonas Schmedtmann (Udemy)"})]}),(0,a.jsxs)("li",{className:W().courses,children:[(0,a.jsx)("h3",{className:W().courses__heading,children:"The Modern React Bootcamp Course"}),(0,a.jsx)("span",{className:W().courses__text,children:"by Colt Steele (Udemy)"})]}),(0,a.jsxs)("li",{className:W().courses,children:[(0,a.jsx)("h3",{className:W().courses__heading,children:"Next.js Starter Course"}),(0,a.jsx)("span",{className:W().courses__text,children:"by Vercel Inc. (nextjs.org)"})]})]})}),Q=A=>(0,a.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...A,children:(0,a.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 0 1 8 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0 0 15 7.993 6.997 6.997 0 0 0 8 1z",clipRule:"evenodd"})}),G=A=>(0,a.jsx)("svg",{style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},viewBox:"0 0 512 512",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",...A,children:(0,a.jsx)("path",{fill:"currentColor",d:"M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892ZM160.461 423.278V197.561h-75.04v225.717h75.04Zm270.539 0V293.839c0-69.333-37.018-101.586-86.381-101.586-39.804 0-57.634 21.891-67.617 37.266v-31.958h-75.021c.995 21.181 0 225.717 0 225.717h75.02V297.222c0-6.748.486-13.492 2.474-18.315 5.414-13.475 17.767-27.434 38.494-27.434 27.135 0 38.007 20.707 38.007 51.037v120.768H431ZM123.448 88.722C97.774 88.722 81 105.601 81 127.724c0 21.658 16.264 39.002 41.455 39.002h.484c26.165 0 42.452-17.344 42.452-39.002-.485-22.092-16.241-38.954-41.943-39.002Z"})}),U=A=>(0,a.jsxs)("svg",{id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 512 512",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",...A,children:[(0,a.jsx)("style",{children:".st1{fill:black}"}),(0,a.jsx)("path",{d:"M512 397.1c0 63.5-51.5 114.9-114.9 114.9H114.9C51.5 512 0 460.5 0 397.1V114.9C0 51.5 51.5 0 114.9 0h282.2C460.5 0 512 51.5 512 114.9v282.2z",style:{fill:"currentColor"}}),(0,a.jsx)("path",{className:"st1",d:"M216.2 236.1c0 .7-.1 1.2-.1 1.7v42h58.2c0 4.3-5.1 21.7-21.4 32.7-9.5 6.5-20.3 9.4-31.6 10.2-8 .5-15.9-.3-23.6-2.7-24.3-7.8-42.4-29.8-44.8-56.5-.6-6.6-.2-13.2 1.3-19.7 7.2-31.6 37.2-55.1 71.5-50 15.2 2.2 24 8.6 32 15.4 10.5-10.5 20.9-20.9 31.6-31.7-2.6-1.9-8.6-8-19.3-14.1-15.9-9.2-33.2-13.8-51.6-14-3.5 0-6.9.2-10.4.3-6.1.2-12 1.3-17.9 2.8-23.5 6-43 18.3-58.3 37.2-14.7 18.1-22.6 38.9-24 62.1-.6 9.8.1 19.6 2.3 29.3 6.1 26.9 20.2 48.7 42.5 65 17.3 12.6 36.7 19.4 58 20.6 12 .6 23.9-.5 35.6-3.5 21.8-5.7 39.9-17.1 53.5-35.2 19.7-26.2 24.5-59.8 18.7-91.7-34.1-.2-68.1-.2-102.2-.2zM450 237.5h-36.8v-37.9H383.5v37.9h-37.9V267.2h37.9v37.9H413.2v-37.9h37.9V237.5z"})]}),Y=A=>(0,a.jsx)("svg",{style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},viewBox:"0 0 512 512",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",...A,children:(0,a.jsx)("path",{fill:"currentColor",d:"M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892ZM256 81c-47.527 0-53.487.201-72.152 1.053-18.627.85-31.348 3.808-42.48 8.135-11.508 4.472-21.267 10.456-30.996 20.184-9.729 9.729-15.713 19.489-20.185 30.996-4.326 11.132-7.284 23.853-8.135 42.48C81.201 202.513 81 208.473 81 256s.201 53.487 1.052 72.152c.851 18.627 3.809 31.348 8.135 42.48 4.472 11.507 10.456 21.267 20.185 30.996s19.488 15.713 30.996 20.185c11.132 4.326 23.853 7.284 42.48 8.134C202.513 430.799 208.473 431 256 431s53.487-.201 72.152-1.053c18.627-.85 31.348-3.808 42.48-8.134 11.507-4.472 21.267-10.456 30.996-20.185s15.713-19.489 20.185-30.996c4.326-11.132 7.284-23.853 8.134-42.48C430.799 309.487 431 303.527 431 256s-.201-53.487-1.053-72.152c-.85-18.627-3.808-31.348-8.134-42.48-4.472-11.507-10.456-21.267-20.185-30.996-9.729-9.728-19.489-15.712-30.996-20.184-11.132-4.327-23.853-7.285-42.48-8.135C309.487 81.201 303.527 81 256 81Zm0 31.532c46.727 0 52.262.178 70.715 1.02 17.062.779 26.328 3.63 32.495 6.025 8.169 3.175 13.998 6.968 20.122 13.091 6.124 6.124 9.916 11.954 13.091 20.122 2.396 6.167 5.247 15.433 6.025 32.495.842 18.453 1.021 23.988 1.021 70.715 0 46.727-.179 52.262-1.021 70.715-.778 17.062-3.629 26.328-6.025 32.495-3.175 8.169-6.967 13.998-13.091 20.122-6.124 6.124-11.953 9.916-20.122 13.091-6.167 2.396-15.433 5.247-32.495 6.025-18.45.842-23.985 1.021-70.715 1.021-46.73 0-52.264-.179-70.715-1.021-17.062-.778-26.328-3.629-32.495-6.025-8.169-3.175-13.998-6.967-20.122-13.091-6.124-6.124-9.917-11.953-13.091-20.122-2.396-6.167-5.247-15.433-6.026-32.495-.842-18.453-1.02-23.988-1.02-70.715 0-46.727.178-52.262 1.02-70.715.779-17.062 3.63-26.328 6.026-32.495 3.174-8.168 6.967-13.998 13.091-20.122 6.124-6.123 11.953-9.916 20.122-13.091 6.167-2.395 15.433-5.246 32.495-6.025 18.453-.842 23.988-1.02 70.715-1.02Zm0 53.603c-49.631 0-89.865 40.234-89.865 89.865 0 49.631 40.234 89.865 89.865 89.865 49.631 0 89.865-40.234 89.865-89.865 0-49.631-40.234-89.865-89.865-89.865Zm0 148.198c-32.217 0-58.333-26.116-58.333-58.333s26.116-58.333 58.333-58.333 58.333 26.116 58.333 58.333-26.116 58.333-58.333 58.333Zm114.416-151.748c0 11.598-9.403 20.999-21.001 20.999-11.597 0-20.999-9.401-20.999-20.999 0-11.598 9.402-21 20.999-21 11.598 0 21.001 9.402 21.001 21Z"})});var S=t(4406),T=t.n(S);let L=()=>(0,a.jsxs)("footer",{id:"footer",className:T().footer,children:[(0,a.jsxs)("div",{className:T().footer__container,children:[(0,a.jsxs)("h2",{className:T().footer__heading,children:[(0,a.jsx)("span",{className:"".concat(T()["footer__heading--1"]),children:"Have something in mind?"}),(0,a.jsx)("span",{className:"".concat(T()["footer__heading--2"]),children:"Let's build it together!"})]}),(0,a.jsx)("span",{className:T().footer__text,children:"Built by Karol Lann Vel Lace"})]}),(0,a.jsx)("div",{className:"".concat(T().footer__listContainer),children:(0,a.jsxs)("ul",{className:T().footer__list,children:[(0,a.jsx)("li",{className:"".concat(T()["footer__list--item"]),children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/karollann",className:"".concat(T()["footer__list--link"]),children:[(0,a.jsx)(Q,{width:"36px",height:"35px"}),(0,a.jsx)("span",{className:"".concat(T()["footer__list--text"]),children:"GitHub"})]})}),(0,a.jsx)("li",{className:"".concat(T()["footer__list--item"]),children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"http://linkedin.com/in/karol-lann-vel-lace",className:"".concat(T()["footer__list--link"]),children:[(0,a.jsx)(G,{height:"32px",width:"32px"}),(0,a.jsx)("span",{className:"".concat(T()["footer__list--text"]),children:"LinkedIn"})]})}),(0,a.jsx)("li",{className:"".concat(T()["footer__list--item"]),children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/lannkarol",className:"".concat(T()["footer__list--link"]),children:[(0,a.jsx)(Y,{height:"32px",width:"32px"}),(0,a.jsx)("span",{className:"".concat(T()["footer__list--text"]),children:"Instagram"})]})}),(0,a.jsx)("li",{className:"".concat(T()["footer__list--item"]),children:(0,a.jsxs)("a",{href:"mailto:lannkarol@gmail.com",className:"".concat(T()["footer__list--link"]),children:[(0,a.jsx)(U,{height:"32px",width:"32px"}),(0,a.jsx)("span",{className:"".concat(T()["footer__list--text"]),children:"lannkarol@gmail.com"})]})})]})})]});var P=t(3213),H=t.n(P);let O=A=>{let{photoImport:e,photoDescription:t,projectTitle:o,projectTechStack:r,websiteUrl:i}=A;return(0,a.jsxs)("a",{href:i,target:"_blank",rel:"noreferrer",className:H().galleryCard,"aria-label":"Go to ".concat(o," site."),children:[(0,a.jsx)(x(),{priority:!0,src:e,alt:t,className:H().galleryCard__img,sizes:"(max-width: 800px) 45vw, (max-width: 1200px) 30vw, 30vw"}),(0,a.jsxs)("div",{className:H().galleryCard__descriptionContainer,children:[(0,a.jsx)("h2",{className:H().galleryCard__imgTitle,children:o}),(0,a.jsx)("h3",{className:H().galleryCard__imgDescription,children:r})]})]})};var z=t(7587),K=t.n(z);let J=()=>(0,a.jsx)("div",{className:K().galleryContainer,children:E.map(A=>(0,a.jsx)(O,{photoImport:A.photoImport,photoDescription:A.photoDescription,projectTitle:A.projectTitle,projectTechStack:A.projectTechStack,websiteUrl:A.websiteUrl},A.projectTitle))});function V(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Portfolio by Karol Lann Vel Lace"}),(0,a.jsx)("meta",{name:"author",content:"Karol Lann Vel Lace"}),(0,a.jsx)("meta",{name:"description",content:"I am a physiotherapist with a Ph.D. in medical and health sciences living in Warsaw. I would like to change my line of work and take up new challenges as a front-end developer."}),(0,a.jsx)("meta",{name:"copyright",content:"Copyright owner: Karol Lann Vel Lace"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{name:"color-scheme",content:"light dark"})]}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(p,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(w,{}),(0,a.jsx)(N,{}),(0,a.jsx)(R,{}),(0,a.jsx)(J,{}),(0,a.jsx)(D,{})]}),(0,a.jsx)(L,{})]})]})}},9909:function(A){A.exports={about__text:"about_about__text__uRBwy"}},4737:function(A){A.exports={courses:"courses_courses__yIVAk",courses__heading:"courses_courses__heading__we5i5",courses__text:"courses_courses__text__EaO7b"}},4406:function(A){A.exports={footer:"footer_footer__7PBRV",footer__container:"footer_footer__container__d4jEr",footer__heading:"footer_footer__heading__77J2Q",footer__text:"footer_footer__text__Jq5w1",footer__listContainer:"footer_footer__listContainer__2b0x5",footer__list:"footer_footer__list__dOFw_","footer__list--link":"footer_footer__list--link__N2_l6","footer__list--text":"footer_footer__list--text__BW8ho","footer__list--item":"footer_footer__list--item__XlyKY","footer__heading--1":"footer_footer__heading--1__SP_34"}},7587:function(A){A.exports={galleryContainer:"gallery_galleryContainer__0uKn6"}},3213:function(A){A.exports={galleryCard:"galleryCard_galleryCard__oe1XQ",galleryCard__img:"galleryCard_galleryCard__img__2Osa5",galleryCard__descriptionContainer:"galleryCard_galleryCard__descriptionContainer__Zu_36","anim-lineUp":"galleryCard_anim-lineUp__2H3k0","anim-lineDown":"galleryCard_anim-lineDown__vINSK",galleryCard__imgTitle:"galleryCard_galleryCard__imgTitle__7ZYBO",galleryCard__imgDescription:"galleryCard_galleryCard__imgDescription__hRa0g"}},7722:function(A){A.exports={header:"header_header__A5I_i",header__nav:"header_header__nav__6zXQX",header__item:"header_header__item__vPgqF"}},3901:function(A){A.exports={hero:"hero_hero__AemPs",hero__heading:"hero_hero__heading__Jcl9_",hero__image:"hero_hero__image__mr80e",menu:"hero_menu__irXmY",menu__text:"hero_menu__text__6ov33",menu__icon:"hero_menu__icon__0nPT9"}},3824:function(A){A.exports={projectRow__heading:"projectRow_projectRow__heading__94Tjo",projectRow__list:"projectRow_projectRow__list__BCSrg",projectRow__listContent:"projectRow_projectRow__listContent__ZMR_E",projectRow__text:"projectRow_projectRow__text__DXYQ1",projectRow__link:"projectRow_projectRow__link__2A6wa",projectRow__icon:"projectRow_projectRow__icon__R2ivF"}},9469:function(A){A.exports={project:"project_project___2Uwh"}},9950:function(A){A.exports={section:"section_section___f6xh",section__title:"section_section__title__1LHZ2"}},3423:function(A){A.exports={themeToggleWrapper:"themeToggleButton_themeToggleWrapper__GDaz6",themeSwitch:"themeToggleButton_themeSwitch__tYfAi",slider:"themeToggleButton_slider__Fgnim",round:"themeToggleButton_round__QNvOz"}},9008:function(A,e,t){A.exports=t(3121)},5675:function(A,e,t){A.exports=t(9749)}},function(A){A.O(0,[774,888,179],function(){return A(A.s=5728)}),_N_E=A.O()}]);