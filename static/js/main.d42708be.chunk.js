(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),n=t(2),s=t(4),r=t(3),l=t(5),i=t(0),o=t.n(i),u=t(7),b=t.n(u),m=(t(14),t(15),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).state={},t}return Object(l.a)(a,e),Object(n.a)(a,[{key:"signColor",value:function(e){var a="-webkit-gradient(linear, 100% 0%, 0% 0%,from(transparent), to(".concat({h:"#e9db39",he:"#4e1892",li:"#dc143c",be:"#2578b5",b:"#cc3536",al:"#0041a5",f:"#005b5a",sc:"#ff9c00",la:"#a03e28",ac:"#6a6834",ubu:"#fff"}[e],")");return console.log(e,a),{background:a}}},{key:"render",value:function(){return this.props.metadata?o.a.createElement("div",{className:"e-element"},o.a.createElement("span",{className:"e-number",style:this.signColor(this.props.metadata[4])},this.props.metadata[0]),o.a.createElement("span",{className:"e-symbol"},this.props.metadata[1]),o.a.createElement("span",{className:"e-name"},this.props.metadata[2]),o.a.createElement("span",{className:"e-bottomdata"},this.props.metadata[3])):o.a.createElement("div",{className:"e-element"})}}]),a}(o.a.Component));t(16);var h=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).state={},t}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=[[""],["1","H","\u6c22","1.00794","h"],["2","He","\u6c26","4.002602","he"],["3","Li","\u9502","6.941","li"],["4","Be","\u94cd","9.012182","be"],["5","B","\u787c","10.811","b"],["6","C","\u78b3","12.0107","h"],["7","N","\u6c2e","14.0067","h"],["8","O","\u6c27","15.9994","h"],["9","F","\u6c1f","18.998403","f"],["10","Ne","\u6c16","20.1797","he"],["11","Na","\u94a0","22.989769","li"],["12","Mg","\u9541","24.3050","be"],["13","Al","\u94dd","26.9815386","al"],["14","Si","\u7845","28.0855","b"],["15","P","\u78f7","30.973762","h"],["16","S","\u786b","32.065","h"],["17","Cl","\u6c2f","35.453","f"],["18","Ar","\u6c29","39.948","he"],["19","K","\u94be","39.0983","li"],["20","Ca","\u9499","40.078","be"],["21","Sc","\u94aa","44.955912","sc"],["22","Ti","\u949b","47.867","sc"],["23","V","\u9492","50.9415","sc"],["24","Cr","\u94ec","51.9961","sc"],["25","Mn"," \u9530","54.938045","sc"],["26","Fe","\u94c1","55.845","sc"],["27","Co","\u94b4","58.933195","sc"],["28","Ni","\u954d","58.6934","sc"],["29","Cu","\u94dc","63.546","sc"],["30","Zn","\u950c","65.409","sc"],["31","Ga","\u9553","69.723","al"],["32","Ge","\u9517","72.64","b"],["33","As","\u7837","74.92160","b"],["34","Se","\u7852","78.96","h"],["35","Br","\u6eb4","79.904","f"],["36","Kr","\u6c2a","83.798","he"],["37","Rb","\u94f7","85.4678","li"],["38","Sr","\u9536","87.62","be"],["39","Y","\u9487","88.90585","sc"],["40","Zr","\u9506","91.224","sc"],["41","Nb","\u94cc","92.90638","sc"],["42","Mo","\u94bc","95.94","sc"],["43","Tc","\u951d","98.9063","sc"],["44","Ru","\u948c","101.07","sc"],["45","Rh","\u94d1","102.90550","sc"],["46","Pd","\u94af","106.42","sc"],["47","Ag","\u94f6","107.8682","sc"],["48","Cd"," \u9549","112.411","sc"],["49","In","\u94df","114.818","al"],["50","Sn","\u9521","118.710","al"],["51","Sb","\u9511","121.760","b"],["52","Te","\u78b2","127.60","b"],["53","I","\u7898","126.90447","f"],["54","Xe","\u6c19","131.293","he"],["55","Cs","\u94ef","132.9054519","li"],["56","Ba","\u94a1","137.327","be"],["57","La","\u9567","138.90547","la"],["58","Ce","\u94c8","140.116","la"],["59","Pr","\u9568","140.9465","la"],["60","Nd","\u9495","144.242","la"],["61","Pm"," \u94b7","146.9151","la"],["62","Sm","\u9490","150.36","la"],["63","Eu","\u94d5","151.964","la"],["64","Gd","\u9486","157.25","la"],["65","Tb","\u94fd","158.92535","la"],["66","Dy","\u955d","162.500","la"],["67","Ho","\u94ac","164.93032","la"],["68","Er","\u94d2","167.259","la"],["69","Tm","\u94e5","168.93421","la"],["70","Yb","\u9571","173.04","la"],["71","Lu","\u9565","174.967","la"],["72","Hf","\u94ea","178.49","sc"],["73","Ta","\u94bd","180.9479","sc"],["74","W","\u94a8","183.84","sc"],["75","Re","\u94fc","186.207","sc"],["76","Os","\u9507","190.23","sc"],["77","Ir","\u94f1","192.217","sc"],["78","Pt","\u94c2","195.084","sc"],["79","Au","\u91d1","196.966569","sc"],["80","Hg","\u6c5e","200.59","sc"],["81","Tl","\u94ca","204.3833","al"],["82","Pb","\u94c5","207.2","al"],["83","Bi","\u94cb","208.98040","al"],["84","Po","\u948b","208.9824","b"],["85","At","\u7839","209.9871","f"],["86","Rn","\u6c21","222.0176","he"],["87","Fr","\u94ab","223.0197","li"],["88","Ra","\u956d","226.0254","be"],["89","Ac","\u9515","227.0278","ac"],["90","Th","\u948d","232.03806","ac"],["91","Pa","\u9564","231.03588","ac"],["92","U","\u94c0","238.02891","ac"],["93","Np","\u954e","237.0482","ac"],["94","Pu","\u923d","244.0642","ac"],["95","Am","\u9545","243.0614","ac"],["96","Cm","\u9514","247.0703","ac"],["97","Bk","\u952b","247.0703","ac"],["98","Cf","\u950e","251.0796","ac"],["99","Es","\u953f","252.0829","ac"],["100","Fm","\u9544","257.0951","ac"],["101","Md","\u9494","258.0951","ac"],["102","No","\u9518","259.1009","ac"],["103","Lr","\u94f9","264.8657","ac"],["104","Rf","\ud872\udf3b","267.12153","sc"],["105","Db","\ud872\udf4a","270.130718","sc"],["106","Sg","\ud872\udf73","272.13516","sc"],["107","Bh","\ud872\udf5b","274.142103","sc"],["108","Hs","\ud872\udf76","276.648525","sc"],["109","Mt","\u9fcf","278.1548","sc"],["110","Ds","\ud86d\udffc","281.16206","sc"],["111","Rg","\ud872\udf2d","283.16843","sc"],["112","Cn","\u9fd4","285.17441","sc"],["113","Nh","\u9268","287.18105","al"],["114","Fl","\ud86d\udce7","289.19048","al"],["115","Mc","\u9546","291.19438","al"],["116","Lv","\ud86d\udff7","293.20455","al"],["117","Ts","","294.2106","f"],["118","Og","","294.21456","he"],["119","Uue","","316","li"],["120","Ubn","","320","be"]];return o.a.createElement("div",null,o.a.createElement("div",{className:"main-table"},function(a,t,c){for(var n=[],s=0;s<t;s++){for(var r=[],l=0;l<a;l++){var i=c[a*s+l];r.push(o.a.createElement(m,{metadata:e[i]}))}n.push(o.a.createElement("div",{className:"t-row"},r))}return n}(18,10,[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,0,0,0,0,0,0,0,0,0,0,5,6,7,8,9,10,11,12,0,0,0,0,0,0,0,0,0,0,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,0,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,0,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,0,0,0,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,0]),function(){for(var e=["I A","II A","III B","IV B","V B","VI B","VII B","VIII","VIII","VIII","I B","II B","III A","IV A","V A","VI A","VII A","0"],a=[],t=0;t<18;t++)a.push(o.a.createElement("div",{className:"t-group"},e[t]));return o.a.createElement("div",{className:"group-bar"},a)}(),function(){var e=[1,2,3,4,5,6,7,8,null,null],a=[];for(var t in e)a.push(o.a.createElement("div",{class:"t-periodic"},e[t]));return o.a.createElement("div",{className:"periodic-bar"},a)}()))}}]),a}(o.a.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(h,null)}}]),a}(o.a.Component);b.a.render(o.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.d42708be.chunk.js.map