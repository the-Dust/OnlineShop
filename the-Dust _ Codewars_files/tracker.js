// v6.3.1827
(function(g,l,N,E,O,r,t,x,ga,ha,ia,y,U,F,ja,z,ka,la){function m(a,b,c,d){return function(){a.call(b,c,d)}}function B(a){return"object"==typeof a}function za(){for(var a=32,b="";a--;)b+=(0|16*O.random()).toString(16);return b}function A(a,b,c,d){var e;(e=a.addEventListener)?e.call(a,b,c,0):a.attachEvent(d||"on"+b,c)}function ma(){return N&&"preview"==N.loadPurpose}function G(a,b){for(var c in a)a.hasOwnProperty(c)&&a[c]!==n&&b(a[c],c)}function Aa(a){var b=(typeof a).charAt(0);return"[object Array]"==
V.call(a)?"a":"[object Date]"==V.call(a)?"d":b}function H(a,b){var c=[];G(a,function(a,e){c.push(ga(e)+"="+ga(b?Aa(a)+("[object Date]"==V.call(a)?+a:B(a)&&a?H(a,b):a):a))});return c.join("&")}function I(a,b){if(!a)throw Error(b);}function Ba(a){P[na]=a;return na++}function oa(){var a=g.olark;a&&a("api.boot.onIdentityReady",function(a,c,d){J=a;W=c;X=d})}function Q(a,b){var c="path=/;",d=a.g(6);d&&(c+="domain="+d+";");return{m:function(d,f){a.g(1,1)&&(l.cookie=d+"="+f+";"+("expires="+(new r(+new r+
(b?6E10:6E4))).toGMTString()+";")+c)},A:function(b){if(a.g(1,1))return(l.cookie.match("(^|;)\\s*"+b+"=([^;]*)")||[])[2]||n},ca:function(a){l.cookie=a+"=;"+("expires="+(new r(0)).toGMTString()+";")+c}}}function K(a){function b(){var a=d[z];a&&(d[z]=a[y](":_GS_:")[0])}var c;if(K[a])return K[a];var d=g.top;K[a]=c=function(){b();d[z]=(d[z]||"")+":_GS_:"+[a,c.f,c.I]};try{var e=d[z]||"";if(-1!=e[la](":_GS_:")){var f=e[y](":_GS_:")[1][y](",");f[0]==a&&(c.f=f[1]||"",c.I=f[2]||"")}b()}catch(u){d={}}return c}
function pa(a){var b=l[ka]("head")[0],c=l[ia]("script");c.src=a;b.appendChild(c);return function(){c&&b.removeChild(c);c=null}}function R(a){var b=v.c;b||(b=v.c=function(a){b.q.push(a)},b.q=[]);b(a)}function C(a){function b(b){f.m(d,u.f=b?"":[Y,548*h.D+2019,379*h.B+4621,+new r].join(":"));a.s(11,b?0:Y)}function c(){g&&"-"!==g?(f.m(e,g+(m?"|"+m:"")),R(["i",a.b,g,m])):(f.m(e,""),R(["u",a.b]))}var d="gs_u_"+a.b,e="gs_v_"+a.b,f=Q(a,1),u=K(a.b),k=(f.A(d)||u.f||"")[y](/(?::|%3A)/),p=1,Y=a.g(11,k[0])||(p=
0,za()),Ca=((k[1]||2019)-2019)/548,l=((k[2]||4621)-4621)/379,k=(k[3]||0)/1E3,g=a.g(13),m=a.g(14),h;h={f:Y,C:g,D:Ca,B:l,ia:~~k,pa:p,ga:function(a,c){h.B+=+a;h.D+=+c;b()},X:function(a){g=h.C=a;c()},qa:b,na:function(){var b=f.A("gs_p_"+a.b)||u.I;f.ca("gs_p_"+a.b);return a.i!==n?a.i:b},M:m,ra:function(a){I(/^[0-9a-f]{64}$/.test(a),"Invalid auth signature");m=h.M=a;c()}};c();return h}function S(a,b,c,d,e){var f=m,u=t(function(){f();Z=(Z+1)%aa[F];c.et&&(c.et=0);c.rt=1;--e&&S(a,b,c,d,e)},1E4),k=C(a);c.cb=
Ba(function(a,b){d(a,b);f();x(u)});c.a=a.b;c.au=k.M;c.id=k.f;c.cid=k.C;c.tv=ha;k=b+"?"+H(c);f=pa((Da?"https":"http")+"://"+aa[Z]+".gosquared.com/"+k)}function qa(a,b,c){var d=l[ia]("a");d.href=b||g.location.href;b=d.href;a.g(7,1)||(b=b[U](/\?[^#]*/,""));a.g(8)||(b=b[U](/#.*$/,""));a=b;a=/^file:/.test(a)||/\/\/localhost[\/:]/.test(a+"/");return{sa:b,t:c!==n?c:l.title,U:a,T:/fb_xd_(bust|fragment)/.test(b)}}function ra(a){var b;if(a.L){var c=qa(a);!a.g(9)&&c.U||c.T||ma()||(b=H(a.h,1))&&S(a,"prop",{cp:b},
m,5)}else t(function(){ra(a)},100)}function sa(a,b,c){var d=a.h=a.h||{};I(b||B(c),"Not an object");b?d[b]=c:d=a.h=c;!a.W&&a.L&&(a.W=t(function(){ra(a);a.W=0},5))}function Ea(){var a=0,b=0,c;E&&(a=E.width,b=E.height);c=(c=g.orientation)&&(c+360)%180;return{K:c?b:a,J:c?a:b,aa:E&&E.colorDepth||"-",ha:N.language||N.browserLanguage||"-",ba:l.characterSet||l.charSet||"-",da:g.devicePixelRatio||1,ja:(new r).getTimezoneOffset()}}function ba(){function a(a){return g["inner"+a]||c&&c[e="client"+a]||d&&d[e]}
function b(a){return O.max(d[e="scroll"+a]|0,c[e]|0,d[e="offset"+a]|0,c[e]|0,d[e="client"+a]|0,c[e]|0)}var c=l.documentElement,d=l.body||c,e;return{Z:a("Width"),Y:a("Height"),R:b("Width"),P:b("Height"),o:g.pageXOffset||c&&c.scrollLeft||0,u:g.pageYOffset||c&&c.scrollTop||0}}function ta(a){a.j&&(a.j=0,a.w=new r-a.F+(a.w||0))}function ca(a){x(a.ka);a.ka=t(m(ta,0,a),15E3);a.j||(a.j=1,a.F=new r)}function Fa(a){var b=a.w,c=new r;a.j&&(b+=c-a.F,a.F=c);a.w=0;return b}function Ga(a){ca(a);var b=ba();b.u>a.H&&
(a.H=b.u);b.o>a.G&&(a.G=b.o)}function Ha(a){var b=m(ca,0,a);A(l,"mousemove",b);A(l,"keydown",b);A(g,"scroll",m(Ga,0,a));A(l,"focus",b,"focusin");A(l,"blur",m(ta,0,a),"focusout")}function Ia(a){a=a.g(10,l.referrer);var b;!a||/^(chrome|about|file):/.test(a)||/^\[.*\]$/.test(a)?a="-":b=a[U](/^.*?\/\//,"")[la](location.host);return{S:+(0<=b&&8>=b),oa:a}}function T(a,b,c,d){if(a.i!==n){if(!c){var e=ba();c={vw:e.Z,vh:e.Y,dw:e.R,dh:e.P,st:e.u,sl:e.o,mst:a.H,msl:a.G}}c.i=a.i;c.e=b;c.et=Fa(a);q&&(c.bc=1);
a.V&&J&&(a.V=0,c.o_si=J,c.o_vi=W,c.o_ci=X);S(a,"ping",c,function(){d&&d();x(a.l);a.l=t(m(T,0,a),[7E3,12E3][a.ma++]||17500+5E3*O.random())},5)}else t(function(){T(a,b,c,d)},5E3)}function Ja(a){if(a.i!==n){var b=Q(a);a.g(1,1)?b.m("gs_p_"+a.b,a.i):(b=K(a.b),b.I=a.i,b())}}function da(a,b,c){I(a,"Event name is required");b&&b.call&&(c=b,b=n);if(b===""+b||b===+b)b={caption:b};a={gs_evt_name:a,d:H(b||{},1)};T(this,"event",a,c)}function ea(a,b,c){a&&a.call&&(c=a,a=n);b&&b.call&&(c=b,b=n);var d=this,e=qa(d,
a,b),f=Ia(d),u=d.i===n&&!f.S;b=d.L=C(d);var k=Ea(),p=ba(),h=d.g(5);b.ga(1,u);x(d.l);d.w=0;d.j=0;ca(d);!d.g(9)&&e.U||e.T||ma()||k.K&&k.J&&10>k.K&&10>k.J||(d.H=p.u,d.G=p.o,e={cs:k.ba,cd:k.aa,la:k.ha,sw:k.K,sh:k.J,dp:k.da,pu:e.sa,pt:e.t||"-",ri:f.S,ru:f.oa,re:b.pa,vi:b.D,pv:b.B,lv:b.ia,vw:p.Z,vh:p.Y,dw:p.R,dh:p.P,st:p.u,sl:p.o,un:d.g(3),pp:b.na(),ec:h,aip:d.g(2)?1:n,tz:k.ja},d.h&&(e.cp=H(d.h,1)),d.ea||!1===d.g(15)||(e.rc=1,d.ea=1),q&&(d.uid=b.f,e.bc=1),J?(e.o_si=J,e.o_vi=W,e.o_ci=X):d.V=1,d.ma=0,S(d,
"pv",e,function(a,b){a!==n&&(d.i=a,x(d.l),d.l=t(m(T,0,d),5E3),c&&c());if(b){R(b);var e=v.c;e.c||(e.c=[2,d.b,d.g(15),d.g(11),d.g(6)]);var e=(d.g(15)||{}).js||"https://js.gs-chat.com/chat.js",f=b[0];ua||(ua=1,pa(e+(f?"?"+f.v:"")))}},5),d.i!==n?a!==n&&(d.i=n):(t(m(Ha,0,d),500),A(g,"beforeunload",m(Ja,0,d))))}function va(a){var b="gs_v_"+a,c=this,d=[];d[12]=c.b=a;c.s=function(a,b,e){4==a&&(sa(c,e,b),b&&!c.N&&(e=b.id,b=b.email,!e&&b&&(e="email:"+b),e&&(c.N=e,C(c).X(e))),b=c.h);13==a&&(sa(c,"id",b),b=(c.N=
b)||"-",C(c).X(b));14==a&&C(c).ra(b);d[a]=b};c.g=function(a,e){function f(){var a=Q(c,1).A(b),d;/\|[0-9a-f]{32,64}/.test(a)&&(a=a[y]("|"),d=a.pop(),a=a.join("|"));return{$:d,C:a}}return a in d?d[a]:13==a?f().C||e:14==a?f().$||e:e};var e;c.fa=function(){e=t(m(ea,c),20)};c.O=function(){x(c.l);x(e)}}function fa(a,b,c){if(!a)for(a in h)return h[a];if(h[b||a])return h[b||a];a=h[b||a]=new va(a);c&&a.fa();return a}function D(a,b,c,d,e){b?a.call(h[b],c,d,e):G(h,function(b){a.call(b,c,d,e)})}function Ka(a,
b,c,d){function e(a,b){b=b||(B(a)?a:{});B(a)||(b[z]=a);I(b[z],"No Name");k.push(b);return g}function f(a){for(var b=0;b<a[F];)e(a[b++]);return g}function h(){D(function(){var a=Q(this,1),d="gs_t_"+this.b,e=a.A(d)||0;a.m(d,+new r);da.call(this,"_transaction",{id:b,pt:{ts:+e},i:k,d:c})},a)}!c&&B(b)&&(c=b,b=c.id);var k=[],g;d&&f(d);c&&c.track&&h();return g={id:b,addItem:e,addItems:f,track:h}}function La(a,b){!b&&B(a)&&(b=a,a=b.id,!a&&b.email&&(a="email:"+b.email));I(a,"ID or email required");this.s(13,
a);b&&this.s(4,b)}function v(a,b,c,d){if(a&&a.call)a();else if(/^GSN-.*-.$/.test(a))b!==""+b&&(c=b,b=0),fa(a,b,c||c===n);else if(P[a])P[a](b,c),delete P[a];else{var e=function(a,b,c){f?h[f].s(a,b,c):G(h,function(d){d.s(a,b,c)})};a=a[y](".");var f;1<a[F]&&(f=a.shift());a=a[0];var g={usecookies:1,anonymizeip:2,visitorname:3,username:3,statuscode:5,cookiedomain:6,trackparams:7,trackhash:8,tracklocal:9,referrer:10,visitorid:13,visitor:4,clientid:11,auth:14,props:4,properties:4,chat:15};if(/transaction$/i.test(a))return Ka(f,
b,c,d);if("get"==a)return c=g[(b+"")[ja]()]||b,f?d=h[f].g(c):G(h,function(a){d=a.g(c)}),d;"set"==a?(a=(b+"")[y]("."),b=a.shift(),e(g[b[ja]()]||b,c,a.join("."))):"track"==a?D(ea,f,b,c,d):"event"==a?D(da,f,b,c,d):"cancel"==a?D(function(){this.O()},f):"noCookies"==a?e(1,0):"anonymizeIP"==a?e(2,1):"tag"==a?e(3,b):"load"==a?b&&b():"auth"==a?e(14,b):"identify"==a?D(La,f,b,c,d):"alias"==a?e(13,b):"unidentify"==a?D(function(){this.g(13)&&(this.s(13),C(this).qa(1))}):"props"==a||"properties"==a?e(4,b):"chat"==
a&&R([b,c,d])}}function wa(a){v.apply({},a)}var n,L,M=g._gs||(L=1,function(){xa.push(arguments)}),xa=M.q||[];if(!M.v){var q=g.GoSquared,V=Object.prototype.toString,P={},na=0,J,W,X,aa=["data","data2"],Z=0|O.random()*aa[F],Da=/^https:/.test(location.href),ua,h={};if(q){G(q,function(a,b){"acct"==b?(fa(a,"_default",1),M(function(){function c(a){d[a.shift()].apply(d,a)}var d=q.DefaultTracker=h._default;if(b=q.q)for(;a=b.shift();)c(a);q.q={push:c};(b=q.load)&&b(d)})):"load"!=b&&"q"!=b&&M("set",b,a)});var w=
va.prototype;w.TrackView=ea;w.TrackEvent=da;w.Cancel=function(){this.O()};q.Tracker=fa;q.Cancel=m(v,0,"cancel")}g._gs=v;v.v=ha;for(M.q={push:wa};w=xa.shift();)wa(w);if(L){L=l[ka]("script");for(var w=L[F],ya;w--;)(ya=L[w].getAttribute("data-gs"))&&v(ya)}oa();A(g,"load",oa)}})(window,document,navigator||{},screen,Math,Date,setTimeout,clearTimeout,encodeURIComponent,"6.3.1827","createElement","split","replace","length","toLowerCase","name","getElementsByTagName","indexOf");