(()=>{var id=Object.create;var Vc=Object.defineProperty;var sd=Object.getOwnPropertyDescriptor;var rd=Object.getOwnPropertyNames;var od=Object.getPrototypeOf,ad=Object.prototype.hasOwnProperty;var ld=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var cd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of rd(t))!ad.call(i,s)&&s!==e&&Vc(i,s,{get:()=>t[s],enumerable:!(n=sd(t,s))||n.enumerable});return i};var hd=(i,t,e)=>(e=i!=null?id(od(i)):{},cd(t||!i||!i.__esModule?Vc(e,"default",{value:i,enumerable:!0}):e,i));var Cu=ld((vc,Mc)=>{(function(i,t){typeof vc=="object"&&typeof Mc!="undefined"?Mc.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis!="undefined"?globalThis:i||self,i.polygonClipping=t())})(vc,function(){"use strict";function i(I,m){var _={label:0,sent:function(){if(R[0]&1)throw R[1];return R[1]},trys:[],ops:[]},b,w,R,V;return V={next:G(0),throw:G(1),return:G(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function G(k){return function(H){return A([k,H])}}function A(k){if(b)throw new TypeError("Generator is already executing.");for(;_;)try{if(b=1,w&&(R=k[0]&2?w.return:k[0]?w.throw||((R=w.return)&&R.call(w),0):w.next)&&!(R=R.call(w,k[1])).done)return R;switch(w=0,R&&(k=[k[0]&2,R.value]),k[0]){case 0:case 1:R=k;break;case 4:return _.label++,{value:k[1],done:!1};case 5:_.label++,w=k[1],k=[0];continue;case 7:k=_.ops.pop(),_.trys.pop();continue;default:if(R=_.trys,!(R=R.length>0&&R[R.length-1])&&(k[0]===6||k[0]===2)){_=0;continue}if(k[0]===3&&(!R||k[1]>R[0]&&k[1]<R[3])){_.label=k[1];break}if(k[0]===6&&_.label<R[1]){_.label=R[1],R=k;break}if(R&&_.label<R[2]){_.label=R[2],_.ops.push(k);break}R[2]&&_.ops.pop(),_.trys.pop();continue}k=m.call(I,_)}catch(H){k=[6,H],w=0}finally{b=R=0}if(k[0]&5)throw k[1];return{value:k[0]?k[1]:void 0,done:!0}}}var t=function(){function I(m,_){this.next=null,this.key=m,this.data=_,this.left=null,this.right=null}return I}();function e(I,m){return I>m?1:I<m?-1:0}function n(I,m,_){for(var b=new t(null,null),w=b,R=b;;){var V=_(I,m.key);if(V<0){if(m.left===null)break;if(_(I,m.left.key)<0){var G=m.left;if(m.left=G.right,G.right=m,m=G,m.left===null)break}R.left=m,R=m,m=m.left}else if(V>0){if(m.right===null)break;if(_(I,m.right.key)>0){var G=m.right;if(m.right=G.left,G.left=m,m=G,m.right===null)break}w.right=m,w=m,m=m.right}else break}return w.right=m.left,R.left=m.right,m.left=b.right,m.right=b.left,m}function s(I,m,_,b){var w=new t(I,m);if(_===null)return w.left=w.right=null,w;_=n(I,_,b);var R=b(I,_.key);return R<0?(w.left=_.left,w.right=_,_.left=null):R>=0&&(w.right=_.right,w.left=_,_.right=null),w}function r(I,m,_){var b=null,w=null;if(m){m=n(I,m,_);var R=_(m.key,I);R===0?(b=m.left,w=m.right):R<0?(w=m.right,m.right=null,b=m):(b=m.left,m.left=null,w=m)}return{left:b,right:w}}function o(I,m,_){return m===null?I:(I===null||(m=n(I.key,m,_),m.left=I),m)}function a(I,m,_,b,w){if(I){b(""+m+(_?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+w(I)+`
`);var R=m+(_?"    ":"\u2502   ");I.left&&a(I.left,R,!1,b,w),I.right&&a(I.right,R,!0,b,w)}}var l=function(){function I(m){m===void 0&&(m=e),this._root=null,this._size=0,this._comparator=m}return I.prototype.insert=function(m,_){return this._size++,this._root=s(m,_,this._root,this._comparator)},I.prototype.add=function(m,_){var b=new t(m,_);this._root===null&&(b.left=b.right=null,this._size++,this._root=b);var w=this._comparator,R=n(m,this._root,w),V=w(m,R.key);return V===0?this._root=R:(V<0?(b.left=R.left,b.right=R,R.left=null):V>0&&(b.right=R.right,b.left=R,R.right=null),this._size++,this._root=b),this._root},I.prototype.remove=function(m){this._root=this._remove(m,this._root,this._comparator)},I.prototype._remove=function(m,_,b){var w;if(_===null)return null;_=n(m,_,b);var R=b(m,_.key);return R===0?(_.left===null?w=_.right:(w=n(m,_.left,b),w.right=_.right),this._size--,w):_},I.prototype.pop=function(){var m=this._root;if(m){for(;m.left;)m=m.left;return this._root=n(m.key,this._root,this._comparator),this._root=this._remove(m.key,this._root,this._comparator),{key:m.key,data:m.data}}return null},I.prototype.findStatic=function(m){for(var _=this._root,b=this._comparator;_;){var w=b(m,_.key);if(w===0)return _;w<0?_=_.left:_=_.right}return null},I.prototype.find=function(m){return this._root&&(this._root=n(m,this._root,this._comparator),this._comparator(m,this._root.key)!==0)?null:this._root},I.prototype.contains=function(m){for(var _=this._root,b=this._comparator;_;){var w=b(m,_.key);if(w===0)return!0;w<0?_=_.left:_=_.right}return!1},I.prototype.forEach=function(m,_){for(var b=this._root,w=[],R=!1;!R;)b!==null?(w.push(b),b=b.left):w.length!==0?(b=w.pop(),m.call(_,b),b=b.right):R=!0;return this},I.prototype.range=function(m,_,b,w){for(var R=[],V=this._comparator,G=this._root,A;R.length!==0||G;)if(G)R.push(G),G=G.left;else{if(G=R.pop(),A=V(G.key,_),A>0)break;if(V(G.key,m)>=0&&b.call(w,G))return this;G=G.right}return this},I.prototype.keys=function(){var m=[];return this.forEach(function(_){var b=_.key;return m.push(b)}),m},I.prototype.values=function(){var m=[];return this.forEach(function(_){var b=_.data;return m.push(b)}),m},I.prototype.min=function(){return this._root?this.minNode(this._root).key:null},I.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},I.prototype.minNode=function(m){if(m===void 0&&(m=this._root),m)for(;m.left;)m=m.left;return m},I.prototype.maxNode=function(m){if(m===void 0&&(m=this._root),m)for(;m.right;)m=m.right;return m},I.prototype.at=function(m){for(var _=this._root,b=!1,w=0,R=[];!b;)if(_)R.push(_),_=_.left;else if(R.length>0){if(_=R.pop(),w===m)return _;w++,_=_.right}else b=!0;return null},I.prototype.next=function(m){var _=this._root,b=null;if(m.right){for(b=m.right;b.left;)b=b.left;return b}for(var w=this._comparator;_;){var R=w(m.key,_.key);if(R===0)break;R<0?(b=_,_=_.left):_=_.right}return b},I.prototype.prev=function(m){var _=this._root,b=null;if(m.left!==null){for(b=m.left;b.right;)b=b.right;return b}for(var w=this._comparator;_;){var R=w(m.key,_.key);if(R===0)break;R<0?_=_.left:(b=_,_=_.right)}return b},I.prototype.clear=function(){return this._root=null,this._size=0,this},I.prototype.toList=function(){return u(this._root)},I.prototype.load=function(m,_,b){_===void 0&&(_=[]),b===void 0&&(b=!1);var w=m.length,R=this._comparator;if(b&&x(m,_,0,w-1,R),this._root===null)this._root=c(m,_,0,w),this._size=w;else{var V=f(this.toList(),h(m,_),R);w=this._size+w,this._root=d({head:V},0,w)}return this},I.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(I.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(I.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),I.prototype.toString=function(m){m===void 0&&(m=function(b){return String(b.key)});var _=[];return a(this._root,"",!0,function(b){return _.push(b)},m),_.join("")},I.prototype.update=function(m,_,b){var w=this._comparator,R=r(m,this._root,w),V=R.left,G=R.right;w(m,_)<0?G=s(_,b,G,w):V=s(_,b,V,w),this._root=o(V,G,w)},I.prototype.split=function(m){return r(m,this._root,this._comparator)},I.prototype[Symbol.iterator]=function(){var m,_,b;return i(this,function(w){switch(w.label){case 0:m=this._root,_=[],b=!1,w.label=1;case 1:return b?[3,6]:m===null?[3,2]:(_.push(m),m=m.left,[3,5]);case 2:return _.length===0?[3,4]:(m=_.pop(),[4,m]);case 3:return w.sent(),m=m.right,[3,5];case 4:b=!0,w.label=5;case 5:return[3,1];case 6:return[2]}})},I}();function c(I,m,_,b){var w=b-_;if(w>0){var R=_+Math.floor(w/2),V=I[R],G=m[R],A=new t(V,G);return A.left=c(I,m,_,R),A.right=c(I,m,R+1,b),A}return null}function h(I,m){for(var _=new t(null,null),b=_,w=0;w<I.length;w++)b=b.next=new t(I[w],m[w]);return b.next=null,_.next}function u(I){for(var m=I,_=[],b=!1,w=new t(null,null),R=w;!b;)m?(_.push(m),m=m.left):_.length>0?(m=R=R.next=_.pop(),m=m.right):b=!0;return R.next=null,w.next}function d(I,m,_){var b=_-m;if(b>0){var w=m+Math.floor(b/2),R=d(I,m,w),V=I.head;return V.left=R,I.head=I.head.next,V.right=d(I,w+1,_),V}return null}function f(I,m,_){for(var b=new t(null,null),w=b,R=I,V=m;R!==null&&V!==null;)_(R.key,V.key)<0?(w.next=R,R=R.next):(w.next=V,V=V.next),w=w.next;return R!==null?w.next=R:V!==null&&(w.next=V),b.next}function x(I,m,_,b,w){if(!(_>=b)){for(var R=I[_+b>>1],V=_-1,G=b+1;;){do V++;while(w(I[V],R)<0);do G--;while(w(I[G],R)>0);if(V>=G)break;var A=I[V];I[V]=I[G],I[G]=A,A=m[V],m[V]=m[G],m[G]=A}x(I,m,_,G,w),x(I,m,G+1,b,w)}}let y=(I,m)=>I.ll.x<=m.x&&m.x<=I.ur.x&&I.ll.y<=m.y&&m.y<=I.ur.y,g=(I,m)=>{if(m.ur.x<I.ll.x||I.ur.x<m.ll.x||m.ur.y<I.ll.y||I.ur.y<m.ll.y)return null;let _=I.ll.x<m.ll.x?m.ll.x:I.ll.x,b=I.ur.x<m.ur.x?I.ur.x:m.ur.x,w=I.ll.y<m.ll.y?m.ll.y:I.ll.y,R=I.ur.y<m.ur.y?I.ur.y:m.ur.y;return{ll:{x:_,y:w},ur:{x:b,y:R}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let L=p*p,T=(I,m)=>{if(-p<I&&I<p&&-p<m&&m<p)return 0;let _=I-m;return _*_<L*I*m?0:I<m?-1:1};class M{constructor(){this.reset()}reset(){this.xRounder=new W,this.yRounder=new W}round(m,_){return{x:this.xRounder.round(m),y:this.yRounder.round(_)}}}class W{constructor(){this.tree=new l,this.round(0)}round(m){let _=this.tree.add(m),b=this.tree.prev(_);if(b!==null&&T(_.key,b.key)===0)return this.tree.remove(m),b.key;let w=this.tree.next(_);return w!==null&&T(_.key,w.key)===0?(this.tree.remove(m),w.key):m}}let O=new M,F=11102230246251565e-32,B=134217729,C=(3+8*F)*F;function S(I,m,_,b,w){let R,V,G,A,k=m[0],H=b[0],D=0,X=0;H>k==H>-k?(R=k,k=m[++D]):(R=H,H=b[++X]);let $=0;if(D<I&&X<_)for(H>k==H>-k?(V=k+R,G=R-(V-k),k=m[++D]):(V=H+R,G=R-(V-H),H=b[++X]),R=V,G!==0&&(w[$++]=G);D<I&&X<_;)H>k==H>-k?(V=R+k,A=V-R,G=R-(V-A)+(k-A),k=m[++D]):(V=R+H,A=V-R,G=R-(V-A)+(H-A),H=b[++X]),R=V,G!==0&&(w[$++]=G);for(;D<I;)V=R+k,A=V-R,G=R-(V-A)+(k-A),k=m[++D],R=V,G!==0&&(w[$++]=G);for(;X<_;)V=R+H,A=V-R,G=R-(V-A)+(H-A),H=b[++X],R=V,G!==0&&(w[$++]=G);return(R!==0||$===0)&&(w[$++]=R),$}function z(I,m){let _=m[0];for(let b=1;b<I;b++)_+=m[b];return _}function tt(I){return new Float64Array(I)}let J=(3+16*F)*F,et=(2+12*F)*F,ct=(9+64*F)*F*F,Q=tt(4),pt=tt(8),nt=tt(12),bt=tt(16),yt=tt(4);function Lt(I,m,_,b,w,R,V){let G,A,k,H,D,X,$,_t,wt,Vt,Tt,oe,ve,Pe,Fe,Ae,je,Be,fn=I-w,Ke=_-w,pn=m-R,Qe=b-R;Pe=fn*Qe,X=B*fn,$=X-(X-fn),_t=fn-$,X=B*Qe,wt=X-(X-Qe),Vt=Qe-wt,Fe=_t*Vt-(Pe-$*wt-_t*wt-$*Vt),Ae=pn*Ke,X=B*pn,$=X-(X-pn),_t=pn-$,X=B*Ke,wt=X-(X-Ke),Vt=Ke-wt,je=_t*Vt-(Ae-$*wt-_t*wt-$*Vt),Tt=Fe-je,D=Fe-Tt,Q[0]=Fe-(Tt+D)+(D-je),oe=Pe+Tt,D=oe-Pe,ve=Pe-(oe-D)+(Tt-D),Tt=ve-Ae,D=ve-Tt,Q[1]=ve-(Tt+D)+(D-Ae),Be=oe+Tt,D=Be-oe,Q[2]=oe-(Be-D)+(Tt-D),Q[3]=Be;let Tn=z(4,Q),vi=et*V;if(Tn>=vi||-Tn>=vi||(D=I-fn,G=I-(fn+D)+(D-w),D=_-Ke,k=_-(Ke+D)+(D-w),D=m-pn,A=m-(pn+D)+(D-R),D=b-Qe,H=b-(Qe+D)+(D-R),G===0&&A===0&&k===0&&H===0)||(vi=ct*V+C*Math.abs(Tn),Tn+=fn*H+Qe*G-(pn*k+Ke*A),Tn>=vi||-Tn>=vi))return Tn;Pe=G*Qe,X=B*G,$=X-(X-G),_t=G-$,X=B*Qe,wt=X-(X-Qe),Vt=Qe-wt,Fe=_t*Vt-(Pe-$*wt-_t*wt-$*Vt),Ae=A*Ke,X=B*A,$=X-(X-A),_t=A-$,X=B*Ke,wt=X-(X-Ke),Vt=Ke-wt,je=_t*Vt-(Ae-$*wt-_t*wt-$*Vt),Tt=Fe-je,D=Fe-Tt,yt[0]=Fe-(Tt+D)+(D-je),oe=Pe+Tt,D=oe-Pe,ve=Pe-(oe-D)+(Tt-D),Tt=ve-Ae,D=ve-Tt,yt[1]=ve-(Tt+D)+(D-Ae),Be=oe+Tt,D=Be-oe,yt[2]=oe-(Be-D)+(Tt-D),yt[3]=Be;let ea=S(4,Q,4,yt,pt);Pe=fn*H,X=B*fn,$=X-(X-fn),_t=fn-$,X=B*H,wt=X-(X-H),Vt=H-wt,Fe=_t*Vt-(Pe-$*wt-_t*wt-$*Vt),Ae=pn*k,X=B*pn,$=X-(X-pn),_t=pn-$,X=B*k,wt=X-(X-k),Vt=k-wt,je=_t*Vt-(Ae-$*wt-_t*wt-$*Vt),Tt=Fe-je,D=Fe-Tt,yt[0]=Fe-(Tt+D)+(D-je),oe=Pe+Tt,D=oe-Pe,ve=Pe-(oe-D)+(Tt-D),Tt=ve-Ae,D=ve-Tt,yt[1]=ve-(Tt+D)+(D-Ae),Be=oe+Tt,D=Be-oe,yt[2]=oe-(Be-D)+(Tt-D),yt[3]=Be;let na=S(ea,pt,4,yt,nt);Pe=G*H,X=B*G,$=X-(X-G),_t=G-$,X=B*H,wt=X-(X-H),Vt=H-wt,Fe=_t*Vt-(Pe-$*wt-_t*wt-$*Vt),Ae=A*k,X=B*A,$=X-(X-A),_t=A-$,X=B*k,wt=X-(X-k),Vt=k-wt,je=_t*Vt-(Ae-$*wt-_t*wt-$*Vt),Tt=Fe-je,D=Fe-Tt,yt[0]=Fe-(Tt+D)+(D-je),oe=Pe+Tt,D=oe-Pe,ve=Pe-(oe-D)+(Tt-D),Tt=ve-Ae,D=ve-Tt,yt[1]=ve-(Tt+D)+(D-Ae),Be=oe+Tt,D=Be-oe,yt[2]=oe-(Be-D)+(Tt-D),yt[3]=Be;let ia=S(na,nt,4,yt,bt);return bt[ia-1]}function Xt(I,m,_,b,w,R){let V=(m-R)*(_-w),G=(I-w)*(b-R),A=V-G,k=Math.abs(V+G);return Math.abs(A)>=J*k?A:-Lt(I,m,_,b,w,R,k)}let ae=(I,m)=>I.x*m.y-I.y*m.x,rt=(I,m)=>I.x*m.x+I.y*m.y,mt=(I,m,_)=>{let b=Xt(I.x,I.y,m.x,m.y,_.x,_.y);return b>0?-1:b<0?1:0},It=I=>Math.sqrt(rt(I,I)),Mt=(I,m,_)=>{let b={x:m.x-I.x,y:m.y-I.y},w={x:_.x-I.x,y:_.y-I.y};return ae(w,b)/It(w)/It(b)},zt=(I,m,_)=>{let b={x:m.x-I.x,y:m.y-I.y},w={x:_.x-I.x,y:_.y-I.y};return rt(w,b)/It(w)/It(b)},Gt=(I,m,_)=>m.y===0?null:{x:I.x+m.x/m.y*(_-I.y),y:_},Ht=(I,m,_)=>m.x===0?null:{x:_,y:I.y+m.y/m.x*(_-I.x)},le=(I,m,_,b)=>{if(m.x===0)return Ht(_,b,I.x);if(b.x===0)return Ht(I,m,_.x);if(m.y===0)return Gt(_,b,I.y);if(b.y===0)return Gt(I,m,_.y);let w=ae(m,b);if(w==0)return null;let R={x:_.x-I.x,y:_.y-I.y},V=ae(R,m)/w,G=ae(R,b)/w,A=I.x+G*m.x,k=_.x+V*b.x,H=I.y+G*m.y,D=_.y+V*b.y,X=(A+k)/2,$=(H+D)/2;return{x:X,y:$}};class st{static compare(m,_){let b=st.comparePoints(m.point,_.point);return b!==0?b:(m.point!==_.point&&m.link(_),m.isLeft!==_.isLeft?m.isLeft?1:-1:U.compare(m.segment,_.segment))}static comparePoints(m,_){return m.x<_.x?-1:m.x>_.x?1:m.y<_.y?-1:m.y>_.y?1:0}constructor(m,_){m.events===void 0?m.events=[this]:m.events.push(this),this.point=m,this.isLeft=_}link(m){if(m.point===this.point)throw new Error("Tried to link already linked events");let _=m.point.events;for(let b=0,w=_.length;b<w;b++){let R=_[b];this.point.events.push(R),R.point=this.point}this.checkForConsuming()}checkForConsuming(){let m=this.point.events.length;for(let _=0;_<m;_++){let b=this.point.events[_];if(b.segment.consumedBy===void 0)for(let w=_+1;w<m;w++){let R=this.point.events[w];R.consumedBy===void 0&&b.otherSE.point.events===R.otherSE.point.events&&b.segment.consume(R.segment)}}}getAvailableLinkedEvents(){let m=[];for(let _=0,b=this.point.events.length;_<b;_++){let w=this.point.events[_];w!==this&&!w.segment.ringOut&&w.segment.isInResult()&&m.push(w)}return m}getLeftmostComparator(m){let _=new Map,b=w=>{let R=w.otherSE;_.set(w,{sine:Mt(this.point,m.point,R.point),cosine:zt(this.point,m.point,R.point)})};return(w,R)=>{_.has(w)||b(w),_.has(R)||b(R);let{sine:V,cosine:G}=_.get(w),{sine:A,cosine:k}=_.get(R);return V>=0&&A>=0?G<k?1:G>k?-1:0:V<0&&A<0?G<k?-1:G>k?1:0:A<V?-1:A>V?1:0}}}let gt=0;class U{static compare(m,_){let b=m.leftSE.point.x,w=_.leftSE.point.x,R=m.rightSE.point.x,V=_.rightSE.point.x;if(V<b)return 1;if(R<w)return-1;let G=m.leftSE.point.y,A=_.leftSE.point.y,k=m.rightSE.point.y,H=_.rightSE.point.y;if(b<w){if(A<G&&A<k)return 1;if(A>G&&A>k)return-1;let D=m.comparePoint(_.leftSE.point);if(D<0)return 1;if(D>0)return-1;let X=_.comparePoint(m.rightSE.point);return X!==0?X:-1}if(b>w){if(G<A&&G<H)return-1;if(G>A&&G>H)return 1;let D=_.comparePoint(m.leftSE.point);if(D!==0)return D;let X=m.comparePoint(_.rightSE.point);return X<0?1:X>0?-1:1}if(G<A)return-1;if(G>A)return 1;if(R<V){let D=_.comparePoint(m.rightSE.point);if(D!==0)return D}if(R>V){let D=m.comparePoint(_.rightSE.point);if(D<0)return 1;if(D>0)return-1}if(R!==V){let D=k-G,X=R-b,$=H-A,_t=V-w;if(D>X&&$<_t)return 1;if(D<X&&$>_t)return-1}return R>V?1:R<V||k<H?-1:k>H?1:m.id<_.id?-1:m.id>_.id?1:0}constructor(m,_,b,w){this.id=++gt,this.leftSE=m,m.segment=this,m.otherSE=_,this.rightSE=_,_.segment=this,_.otherSE=m,this.rings=b,this.windings=w}static fromRing(m,_,b){let w,R,V,G=st.comparePoints(m,_);if(G<0)w=m,R=_,V=1;else if(G>0)w=_,R=m,V=-1;else throw new Error(`Tried to create degenerate segment at [${m.x}, ${m.y}]`);let A=new st(w,!0),k=new st(R,!1);return new U(A,k,[b],[V])}replaceRightSE(m){this.rightSE=m,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let m=this.leftSE.point.y,_=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:m<_?m:_},ur:{x:this.rightSE.point.x,y:m>_?m:_}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(m){return m.x===this.leftSE.point.x&&m.y===this.leftSE.point.y||m.x===this.rightSE.point.x&&m.y===this.rightSE.point.y}comparePoint(m){if(this.isAnEndpoint(m))return 0;let _=this.leftSE.point,b=this.rightSE.point,w=this.vector();if(_.x===b.x)return m.x===_.x?0:m.x<_.x?1:-1;let R=(m.y-_.y)/w.y,V=_.x+R*w.x;if(m.x===V)return 0;let G=(m.x-_.x)/w.x,A=_.y+G*w.y;return m.y===A?0:m.y<A?-1:1}getIntersection(m){let _=this.bbox(),b=m.bbox(),w=g(_,b);if(w===null)return null;let R=this.leftSE.point,V=this.rightSE.point,G=m.leftSE.point,A=m.rightSE.point,k=y(_,G)&&this.comparePoint(G)===0,H=y(b,R)&&m.comparePoint(R)===0,D=y(_,A)&&this.comparePoint(A)===0,X=y(b,V)&&m.comparePoint(V)===0;if(H&&k)return X&&!D?V:!X&&D?A:null;if(H)return D&&R.x===A.x&&R.y===A.y?null:R;if(k)return X&&V.x===G.x&&V.y===G.y?null:G;if(X&&D)return null;if(X)return V;if(D)return A;let $=le(R,this.vector(),G,m.vector());return $===null||!y(w,$)?null:O.round($.x,$.y)}split(m){let _=[],b=m.events!==void 0,w=new st(m,!0),R=new st(m,!1),V=this.rightSE;this.replaceRightSE(R),_.push(R),_.push(w);let G=new U(w,V,this.rings.slice(),this.windings.slice());return st.comparePoints(G.leftSE.point,G.rightSE.point)>0&&G.swapEvents(),st.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),b&&(w.checkForConsuming(),R.checkForConsuming()),_}swapEvents(){let m=this.rightSE;this.rightSE=this.leftSE,this.leftSE=m,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let _=0,b=this.windings.length;_<b;_++)this.windings[_]*=-1}consume(m){let _=this,b=m;for(;_.consumedBy;)_=_.consumedBy;for(;b.consumedBy;)b=b.consumedBy;let w=U.compare(_,b);if(w!==0){if(w>0){let R=_;_=b,b=R}if(_.prev===b){let R=_;_=b,b=R}for(let R=0,V=b.rings.length;R<V;R++){let G=b.rings[R],A=b.windings[R],k=_.rings.indexOf(G);k===-1?(_.rings.push(G),_.windings.push(A)):_.windings[k]+=A}b.rings=null,b.windings=null,b.consumedBy=_,b.leftSE.consumedBy=_.leftSE,b.rightSE.consumedBy=_.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let m=this.prev.consumedBy||this.prev;this._beforeState=m.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let m=this.beforeState();this._afterState={rings:m.rings.slice(0),windings:m.windings.slice(0),multiPolys:[]};let _=this._afterState.rings,b=this._afterState.windings,w=this._afterState.multiPolys;for(let G=0,A=this.rings.length;G<A;G++){let k=this.rings[G],H=this.windings[G],D=_.indexOf(k);D===-1?(_.push(k),b.push(H)):b[D]+=H}let R=[],V=[];for(let G=0,A=_.length;G<A;G++){if(b[G]===0)continue;let k=_[G],H=k.poly;if(V.indexOf(H)===-1)if(k.isExterior)R.push(H);else{V.indexOf(H)===-1&&V.push(H);let D=R.indexOf(k.poly);D!==-1&&R.splice(D,1)}}for(let G=0,A=R.length;G<A;G++){let k=R[G].multiPoly;w.indexOf(k)===-1&&w.push(k)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let m=this.beforeState().multiPolys,_=this.afterState().multiPolys;switch(at.type){case"union":{let b=m.length===0,w=_.length===0;this._isInResult=b!==w;break}case"intersection":{let b,w;m.length<_.length?(b=m.length,w=_.length):(b=_.length,w=m.length),this._isInResult=w===at.numMultiPolys&&b<w;break}case"xor":{let b=Math.abs(m.length-_.length);this._isInResult=b%2===1;break}case"difference":{let b=w=>w.length===1&&w[0].isSubject;this._isInResult=b(m)!==b(_);break}default:throw new Error(`Unrecognized operation type found ${at.type}`)}return this._isInResult}}class Dt{constructor(m,_,b){if(!Array.isArray(m)||m.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=_,this.isExterior=b,this.segments=[],typeof m[0][0]!="number"||typeof m[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let w=O.round(m[0][0],m[0][1]);this.bbox={ll:{x:w.x,y:w.y},ur:{x:w.x,y:w.y}};let R=w;for(let V=1,G=m.length;V<G;V++){if(typeof m[V][0]!="number"||typeof m[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let A=O.round(m[V][0],m[V][1]);A.x===R.x&&A.y===R.y||(this.segments.push(U.fromRing(R,A,this)),A.x<this.bbox.ll.x&&(this.bbox.ll.x=A.x),A.y<this.bbox.ll.y&&(this.bbox.ll.y=A.y),A.x>this.bbox.ur.x&&(this.bbox.ur.x=A.x),A.y>this.bbox.ur.y&&(this.bbox.ur.y=A.y),R=A)}(w.x!==R.x||w.y!==R.y)&&this.segments.push(U.fromRing(R,w,this))}getSweepEvents(){let m=[];for(let _=0,b=this.segments.length;_<b;_++){let w=this.segments[_];m.push(w.leftSE),m.push(w.rightSE)}return m}}class ft{constructor(m,_){if(!Array.isArray(m))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Dt(m[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let b=1,w=m.length;b<w;b++){let R=new Dt(m[b],this,!1);R.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=R.bbox.ll.x),R.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=R.bbox.ll.y),R.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=R.bbox.ur.x),R.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=R.bbox.ur.y),this.interiorRings.push(R)}this.multiPoly=_}getSweepEvents(){let m=this.exteriorRing.getSweepEvents();for(let _=0,b=this.interiorRings.length;_<b;_++){let w=this.interiorRings[_].getSweepEvents();for(let R=0,V=w.length;R<V;R++)m.push(w[R])}return m}}class Rt{constructor(m,_){if(!Array.isArray(m))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof m[0][0][0]=="number"&&(m=[m])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let b=0,w=m.length;b<w;b++){let R=new ft(m[b],this);R.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=R.bbox.ll.x),R.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=R.bbox.ll.y),R.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=R.bbox.ur.x),R.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=R.bbox.ur.y),this.polys.push(R)}this.isSubject=_}getSweepEvents(){let m=[];for(let _=0,b=this.polys.length;_<b;_++){let w=this.polys[_].getSweepEvents();for(let R=0,V=w.length;R<V;R++)m.push(w[R])}return m}}class vt{static factory(m){let _=[];for(let b=0,w=m.length;b<w;b++){let R=m[b];if(!R.isInResult()||R.ringOut)continue;let V=null,G=R.leftSE,A=R.rightSE,k=[G],H=G.point,D=[];for(;V=G,G=A,k.push(G),G.point!==H;)for(;;){let X=G.getAvailableLinkedEvents();if(X.length===0){let wt=k[0].point,Vt=k[k.length-1].point;throw new Error(`Unable to complete output ring starting at [${wt.x}, ${wt.y}]. Last matching segment found ends at [${Vt.x}, ${Vt.y}].`)}if(X.length===1){A=X[0].otherSE;break}let $=null;for(let wt=0,Vt=D.length;wt<Vt;wt++)if(D[wt].point===G.point){$=wt;break}if($!==null){let wt=D.splice($)[0],Vt=k.splice(wt.index);Vt.unshift(Vt[0].otherSE),_.push(new vt(Vt.reverse()));continue}D.push({index:k.length,point:G.point});let _t=G.getLeftmostComparator(V);A=X.sort(_t)[0].otherSE;break}_.push(new vt(k))}return _}constructor(m){this.events=m;for(let _=0,b=m.length;_<b;_++)m[_].segment.ringOut=this;this.poly=null}getGeom(){let m=this.events[0].point,_=[m];for(let k=1,H=this.events.length-1;k<H;k++){let D=this.events[k].point,X=this.events[k+1].point;mt(D,m,X)!==0&&(_.push(D),m=D)}if(_.length===1)return null;let b=_[0],w=_[1];mt(b,m,w)===0&&_.shift(),_.push(_[0]);let R=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:_.length-1,G=this.isExteriorRing()?_.length:-1,A=[];for(let k=V;k!=G;k+=R)A.push([_[k].x,_[k].y]);return A}isExteriorRing(){if(this._isExteriorRing===void 0){let m=this.enclosingRing();this._isExteriorRing=m?!m.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let m=this.events[0];for(let w=1,R=this.events.length;w<R;w++){let V=this.events[w];st.compare(m,V)>0&&(m=V)}let _=m.segment.prevInResult(),b=_?_.prevInResult():null;for(;;){if(!_)return null;if(!b)return _.ringOut;if(b.ringOut!==_.ringOut)return b.ringOut.enclosingRing()!==_.ringOut?_.ringOut:_.ringOut.enclosingRing();_=b.prevInResult(),b=_?_.prevInResult():null}}}class kt{constructor(m){this.exteriorRing=m,m.poly=this,this.interiorRings=[]}addInterior(m){this.interiorRings.push(m),m.poly=this}getGeom(){let m=[this.exteriorRing.getGeom()];if(m[0]===null)return null;for(let _=0,b=this.interiorRings.length;_<b;_++){let w=this.interiorRings[_].getGeom();w!==null&&m.push(w)}return m}}class Ct{constructor(m){this.rings=m,this.polys=this._composePolys(m)}getGeom(){let m=[];for(let _=0,b=this.polys.length;_<b;_++){let w=this.polys[_].getGeom();w!==null&&m.push(w)}return m}_composePolys(m){let _=[];for(let b=0,w=m.length;b<w;b++){let R=m[b];if(!R.poly)if(R.isExteriorRing())_.push(new kt(R));else{let V=R.enclosingRing();V.poly||_.push(new kt(V)),V.poly.addInterior(R)}}return _}}class P{constructor(m){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U.compare;this.queue=m,this.tree=new l(_),this.segments=[]}process(m){let _=m.segment,b=[];if(m.consumedBy)return m.isLeft?this.queue.remove(m.otherSE):this.tree.remove(_),b;let w=m.isLeft?this.tree.add(_):this.tree.find(_);if(!w)throw new Error(`Unable to find segment #${_.id} [${_.leftSE.point.x}, ${_.leftSE.point.y}] -> [${_.rightSE.point.x}, ${_.rightSE.point.y}] in SweepLine tree.`);let R=w,V=w,G,A;for(;G===void 0;)R=this.tree.prev(R),R===null?G=null:R.key.consumedBy===void 0&&(G=R.key);for(;A===void 0;)V=this.tree.next(V),V===null?A=null:V.key.consumedBy===void 0&&(A=V.key);if(m.isLeft){let k=null;if(G){let D=G.getIntersection(_);if(D!==null&&(_.isAnEndpoint(D)||(k=D),!G.isAnEndpoint(D))){let X=this._splitSafely(G,D);for(let $=0,_t=X.length;$<_t;$++)b.push(X[$])}}let H=null;if(A){let D=A.getIntersection(_);if(D!==null&&(_.isAnEndpoint(D)||(H=D),!A.isAnEndpoint(D))){let X=this._splitSafely(A,D);for(let $=0,_t=X.length;$<_t;$++)b.push(X[$])}}if(k!==null||H!==null){let D=null;k===null?D=H:H===null?D=k:D=st.comparePoints(k,H)<=0?k:H,this.queue.remove(_.rightSE),b.push(_.rightSE);let X=_.split(D);for(let $=0,_t=X.length;$<_t;$++)b.push(X[$])}b.length>0?(this.tree.remove(_),b.push(m)):(this.segments.push(_),_.prev=G)}else{if(G&&A){let k=G.getIntersection(A);if(k!==null){if(!G.isAnEndpoint(k)){let H=this._splitSafely(G,k);for(let D=0,X=H.length;D<X;D++)b.push(H[D])}if(!A.isAnEndpoint(k)){let H=this._splitSafely(A,k);for(let D=0,X=H.length;D<X;D++)b.push(H[D])}}}this.tree.remove(_)}return b}_splitSafely(m,_){this.tree.remove(m);let b=m.rightSE;this.queue.remove(b);let w=m.split(_);return w.push(b),m.consumedBy===void 0&&this.tree.add(m),w}}let v=typeof process!="undefined"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,Z=typeof process!="undefined"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class it{run(m,_,b){at.type=m,O.reset();let w=[new Rt(_,!0)];for(let D=0,X=b.length;D<X;D++)w.push(new Rt(b[D],!1));if(at.numMultiPolys=w.length,at.type==="difference"){let D=w[0],X=1;for(;X<w.length;)g(w[X].bbox,D.bbox)!==null?X++:w.splice(X,1)}if(at.type==="intersection")for(let D=0,X=w.length;D<X;D++){let $=w[D];for(let _t=D+1,wt=w.length;_t<wt;_t++)if(g($.bbox,w[_t].bbox)===null)return[]}let R=new l(st.compare);for(let D=0,X=w.length;D<X;D++){let $=w[D].getSweepEvents();for(let _t=0,wt=$.length;_t<wt;_t++)if(R.insert($[_t]),R.size>v)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new P(R),G=R.size,A=R.pop();for(;A;){let D=A.key;if(R.size===G){let $=D.segment;throw new Error(`Unable to pop() ${D.isLeft?"left":"right"} SweepEvent [${D.point.x}, ${D.point.y}] from segment #${$.id} [${$.leftSE.point.x}, ${$.leftSE.point.y}] -> [${$.rightSE.point.x}, ${$.rightSE.point.y}] from queue.`)}if(R.size>v)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>Z)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let X=V.process(D);for(let $=0,_t=X.length;$<_t;$++){let wt=X[$];wt.consumedBy===void 0&&R.insert(wt)}G=R.size,A=R.pop()}O.reset();let k=vt.factory(V.segments);return new Ct(k).getGeom()}}let at=new it;var Qt={union:function(I){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];return at.run("union",I,_)},intersection:function(I){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];return at.run("intersection",I,_)},xor:function(I){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];return at.run("xor",I,_)},difference:function(I){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];return at.run("difference",I,_)}};return Qt})});var ic="170",ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ud=0,Gc=1,dd=2;var Qh=1,sc=2,Bn=3,Li=0,sn=1,Cn=2,Pi=0,Ts=1,Wc=2,Xc=3,qc=4,fd=5,Wi=100,pd=101,md=102,gd=103,_d=104,xd=200,yd=201,vd=202,Md=203,Fa=204,Ba=205,bd=206,Sd=207,Ed=208,wd=209,Td=210,Ad=211,Rd=212,Cd=213,Pd=214,za=0,ka=1,Ha=2,Ps=3,Va=4,Ga=5,Wa=6,Xa=7,tu=0,Id=1,Ld=2,Ii=0,Dd=1,Ud=2,Nd=3,rc=4,Od=5,Fd=6,oc=7;var eu=300,Is=301,Ls=302,qa=303,Ya=304,Ho=306,gr=1e3,kn=1001,Za=1002,Vn=1003,Bd=1004;var Fr=1005;var Jn=1006,sa=1007;var Yi=1008;var di=1009,nu=1010,iu=1011,_r=1012,ac=1013,Zi=1014,ci=1015,Ur=1016,lc=1017,cc=1018,Ds=1020,su=35902,ru=1021,ou=1022,Hn=1023,au=1024,lu=1025,As=1026,Us=1027,cu=1028,hc=1029,hu=1030,uc=1031;var dc=1033,lo=33776,co=33777,ho=33778,uo=33779,$a=35840,Ja=35841,ja=35842,Ka=35843,Qa=36196,tl=37492,el=37496,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,hl=37816,ul=37817,dl=37818,fl=37819,pl=37820,ml=37821,fo=36492,gl=36494,_l=36495,uu=36283,xl=36284,yl=36285,vl=36286;var po=2300,Ml=2301,ra=2302,Yc=2400,Zc=2401,$c=2402;var zd=3200,kd=3201;var du=0,Hd=1,Ci="",gn="srgb",Ws="srgb-linear",Vo="linear",me="srgb";var cs=7680;var Jc=519,Vd=512,Gd=513,Wd=514,fu=515,Xd=516,qd=517,Yd=518,Zd=519,jc=35044;var Kc="300 es",hi=2e3,mo=2001,fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=1234567,hr=Math.PI/180,xr=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function fc(i,t){return(i%t+t)%t}function $d(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jd(i,t,e){return i!==t?(e-i)/(t-i):0}function ur(i,t,e){return(1-e)*i+e*t}function jd(i,t,e,n){return ur(i,t,1-Math.exp(-e*n))}function Kd(i,t=1){return t-Math.abs(fc(i,t*2)-t)}function Qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nf(i,t){return i+Math.random()*(t-i)}function sf(i){return i*(.5-Math.random())}function rf(i){i!==void 0&&(Qc=i);let t=Qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function of(i){return i*hr}function af(i){return i*xr}function lf(i){return(i&i-1)===0&&i!==0}function cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pu={DEG2RAD:hr,RAD2DEG:xr,generateUUID:ns,clamp:Oe,euclideanModulo:fc,mapLinear:$d,inverseLerp:Jd,lerp:ur,damp:jd,pingpong:Kd,smoothstep:Qd,smootherstep:tf,randInt:ef,randFloat:nf,randFloatSpread:sf,seededRandom:rf,degToRad:of,radToDeg:af,isPowerOfTwo:lf,ceilPowerOfTwo:cf,floorPowerOfTwo:hf,setQuaternionFromProperEuler:uf,normalize:ln,denormalize:Ss},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],y=s[0],g=s[3],p=s[6],L=s[1],T=s[4],M=s[7],W=s[2],O=s[5],F=s[8];return r[0]=o*y+a*L+l*W,r[3]=o*g+a*T+l*O,r[6]=o*p+a*M+l*F,r[1]=c*y+h*L+u*W,r[4]=c*g+h*T+u*O,r[7]=c*p+h*M+u*F,r[2]=d*y+f*L+x*W,r[5]=d*g+f*T+x*O,r[8]=d*p+f*M+x*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,x=e*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oa=new $t;function mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){let i=go("canvas");return i.style.display="block",i}var th={};function lr(i){i in th||(th[i]=!0,console.warn(i))}function ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ce={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?Vo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var eh=[.64,.33,.3,.6,.15,.06],nh=[.2126,.7152,.0722],ih=[.3127,.329],sh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Ws]:{primaries:eh,whitePoint:ih,transfer:Vo,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:eh,whitePoint:ih,transfer:me,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});var hs,bl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=go("canvas")),hs.width=t.width,hs.height=t.height;let n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gf=0,_o=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(aa(s[o].image)):r.push(aa(s[o]))}else r=aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function aa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _f=0,Sn=class i extends fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=kn,s=kn,r=Jn,o=Yi,a=Hn,l=di,c=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=ns(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=eu;Sn.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(f+1)/2,W=(p+1)/2,O=(h+d)/4,F=(u+y)/4,B=(x+g)/4;return T>M&&T>W?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=O/n,r=F/n):M>W?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=O/s,r=B/s):W<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(W),n=F/r,s=B/r),this.set(n,s,r,e),this}let L=Math.sqrt((g-x)*(g-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(L)<.001&&(L=1),this.x=(g-x)/L,this.y=(u-y)/L,this.z=(d-h)/L,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sl=class extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xo=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],x=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=x,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==x){let g=1-a,p=l*d+c*f+h*x+u*y,L=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let W=Math.sqrt(T),O=Math.atan2(W,p*L);g=Math.sin(g*O)/W,a=Math.sin(a*O)/W}let M=a*L;if(l=l*g+d*M,c=c*g+f*M,h=h*g+x*M,u=u*g+y*M,g===1-a){let W=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=W,c*=W,h*=W,u*=W}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*f-c*d,t[e+1]=l*x+h*d+c*u-a*f,t[e+2]=c*x+h*f+a*d-l*u,t[e+3]=h*x-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},la=new N,oh=new _n,En=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),zr.subVectors(this.max,ir),us.subVectors(t.a,ir),ds.subVectors(t.b,ir),fs.subVectors(t.c,ir),Si.subVectors(ds,us),Ei.subVectors(fs,ds),Fi.subVectors(us,fs);let e=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Fi.z,Fi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Fi.z,0,-Fi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Fi.y,Fi.x,0];return!ca(e,us,ds,fs,zr)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,us,ds,fs,zr))?!1:(kr.crossVectors(Si,Ei),e=[kr.x,kr.y,kr.z],ca(e,us,ds,fs,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},si=[new N,new N,new N,new N,new N,new N,new N,new N],Nn=new N,Br=new En,us=new N,ds=new N,fs=new N,Si=new N,Ei=new N,Fi=new N,ir=new N,zr=new N,kr=new N,Bi=new N;function ca(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);let a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xf=new En,sr=new N,ha=new N,yr=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(ha)),this.expandByPoint(sr.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new N,ua=new N,Hr=new N,wi=new N,da=new N,Vr=new N,fa=new N,Ns=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ua.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(ua);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=wi.dot(this.direction),l=-wi.dot(Hr),c=wi.lengthSq(),h=Math.abs(1-o*o),u,d,f,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ua).addScaledVector(Hr,d),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){da.subVectors(e,t),Vr.subVectors(n,t),fa.crossVectors(da,Vr);let o=this.direction.dot(fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);let l=a*this.direction.dot(Vr.crossVectors(wi,Vr));if(l<0)return null;let c=a*this.direction.dot(da.cross(wi));if(c<0||l+c>o)return null;let h=-a*wi.dot(fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,x,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,x,y,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,x,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,x=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+x*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=x+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,x=c*h,y=c*u;e[0]=d+y*a,e[4]=x*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-x,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,x=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,x=a*h,y=a*u;e[0]=l*h,e[4]=x*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,x=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=x*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+x,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*c,x=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-x,e[2]=x*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,vf)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ti.crossVectors(n,Mn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ti.crossVectors(n,Mn)),Ti.normalize(),Gr.crossVectors(Mn,Ti),s[0]=Ti.x,s[4]=Gr.x,s[8]=Mn.x,s[1]=Ti.y,s[5]=Gr.y,s[9]=Mn.y,s[2]=Ti.z,s[6]=Gr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],y=n[6],g=n[10],p=n[14],L=n[3],T=n[7],M=n[11],W=n[15],O=s[0],F=s[4],B=s[8],C=s[12],S=s[1],z=s[5],tt=s[9],J=s[13],et=s[2],ct=s[6],Q=s[10],pt=s[14],nt=s[3],bt=s[7],yt=s[11],Lt=s[15];return r[0]=o*O+a*S+l*et+c*nt,r[4]=o*F+a*z+l*ct+c*bt,r[8]=o*B+a*tt+l*Q+c*yt,r[12]=o*C+a*J+l*pt+c*Lt,r[1]=h*O+u*S+d*et+f*nt,r[5]=h*F+u*z+d*ct+f*bt,r[9]=h*B+u*tt+d*Q+f*yt,r[13]=h*C+u*J+d*pt+f*Lt,r[2]=x*O+y*S+g*et+p*nt,r[6]=x*F+y*z+g*ct+p*bt,r[10]=x*B+y*tt+g*Q+p*yt,r[14]=x*C+y*J+g*pt+p*Lt,r[3]=L*O+T*S+M*et+W*nt,r[7]=L*F+T*z+M*ct+W*bt,r[11]=L*B+T*tt+M*Q+W*yt,r[15]=L*C+T*J+M*pt+W*Lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],x=t[3],y=t[7],g=t[11],p=t[15];return x*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+y*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],x=t[12],y=t[13],g=t[14],p=t[15],L=u*g*c-y*d*c+y*l*f-a*g*f-u*l*p+a*d*p,T=x*d*c-h*g*c-x*l*f+o*g*f+h*l*p-o*d*p,M=h*y*c-x*u*c+x*a*f-o*y*f-h*a*p+o*u*p,W=x*u*l-h*y*l-x*a*d+o*y*d+h*a*g-o*u*g,O=e*L+n*T+s*M+r*W;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/O;return t[0]=L*F,t[1]=(y*d*r-u*g*r-y*s*f+n*g*f+u*s*p-n*d*p)*F,t[2]=(a*g*r-y*l*r+y*s*c-n*g*c-a*s*p+n*l*p)*F,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*F,t[4]=T*F,t[5]=(h*g*r-x*d*r+x*s*f-e*g*f-h*s*p+e*d*p)*F,t[6]=(x*l*r-o*g*r-x*s*c+e*g*c+o*s*p-e*l*p)*F,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*F,t[8]=M*F,t[9]=(x*u*r-h*y*r-x*n*f+e*y*f+h*n*p-e*u*p)*F,t[10]=(o*y*r-x*a*r+x*n*c-e*y*c-o*n*p+e*a*p)*F,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*F,t[12]=W*F,t[13]=(h*y*s-x*u*s+x*n*d-e*y*d-h*n*g+e*u*g)*F,t[14]=(x*a*s-o*y*s-x*n*l+e*y*l+o*n*g-e*a*g)*F,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,x=r*u,y=o*h,g=o*u,p=a*u,L=l*c,T=l*h,M=l*u,W=n.x,O=n.y,F=n.z;return s[0]=(1-(y+p))*W,s[1]=(f+M)*W,s[2]=(x-T)*W,s[3]=0,s[4]=(f-M)*O,s[5]=(1-(d+p))*O,s[6]=(g+L)*O,s[7]=0,s[8]=(x+T)*F,s[9]=(g-L)*F,s[10]=(1-(d+y))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ps.set(s[0],s[1],s[2]).length(),o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);let c=1/r,h=1/o,u=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=hi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,x;if(a===hi)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===mo)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=hi){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,x,y;if(a===hi)x=(o+r)*u,y=-2*u;else if(a===mo)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ps=new N,On=new Ce,yf=new N(0,0,0),vf=new N(1,1,1),Ti=new N,Gr=new N,Mn=new N,ah=new Ce,lh=new _n,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mf=0,ch=new N,ms=new _n,oi=new Ce,Wr=new N,rr=new N,bf=new N,Sf=new _n,hh=new N(1,0,0),uh=new N(0,1,0),dh=new N(0,0,1),fh={type:"added"},Ef={type:"removed"},gs={type:"childadded",child:null},pa={type:"childremoved",child:null},hn=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new In,n=new _n,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new $t}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wr.copy(t):Wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(rr,Wr,this.up):oi.lookAt(Wr,rr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(oi),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};hn.DEFAULT_UP=new N(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new N,ai=new N,ma=new N,li=new N,_s=new N,xs=new N,ph=new N,ga=new N,_a=new N,xa=new N,ya=new ge,va=new ge,Ma=new ge,Xi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),ai.subVectors(n,e),ma.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ai),l=Fn.dot(ma),c=ai.dot(ai),h=ai.dot(ma),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ya.setScalar(0),va.setScalar(0),Ma.setScalar(0),ya.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(va,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),ai.subVectors(t,e),Fn.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;_s.subVectors(s,n),xs.subVectors(r,n),ga.subVectors(t,n);let l=_s.dot(ga),c=xs.dot(ga);if(l<=0&&c<=0)return e.copy(n);_a.subVectors(t,s);let h=_s.dot(_a),u=xs.dot(_a);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(_s,o);xa.subVectors(t,r);let f=_s.dot(xa),x=xs.dot(xa);if(x>=0&&f<=x)return e.copy(r);let y=f*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(xs,a);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return ph.subVectors(r,s),a=(u-h)/(u-h+(f-x)),e.copy(s).addScaledVector(ph,a);let p=1/(g+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(_s,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=fc(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ba(o,r,t+1/3),this.g=ba(o,r,t),this.b=ba(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ce.fromWorkingColorSpace(en.copy(this),t),Math.round(Oe(en.r*255,0,255))*65536+Math.round(Oe(en.g*255,0,255))*256+Math.round(Oe(en.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=gn){ce.fromWorkingColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Xr);let n=ur(Ai.h,Xr.h,e),s=ur(Ai.s,Xr.s,e),r=ur(Ai.l,Xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new se;se.NAMES=gu;var wf=0,$i=class extends fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ns(),this.name="",this.blending=Ts,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Ba,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mi=class extends $i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new N,qr=new dt,Pn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}};var yo=class extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vo=class extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tf=0,Rn=new Ce,Sa=new hn,ys=new N,bn=new En,or=new En,Xe=new N,un=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?vo:yo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(bn.min,or.min),bn.expandByPoint(Xe),Xe.addVectors(bn.max,or.max),bn.expandByPoint(Xe)):(bn.expandByPoint(or.min),bn.expandByPoint(or.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xe.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(t,c),Xe.add(ys)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new N,l[B]=new N;let c=new N,h=new N,u=new N,d=new dt,f=new dt,x=new dt,y=new N,g=new N;function p(B,C,S){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,C),x.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),x.sub(d);let z=1/(f.x*x.y-x.x*f.y);isFinite(z)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(z),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(z),a[B].add(y),a[C].add(y),a[S].add(y),l[B].add(g),l[C].add(g),l[S].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let B=0,C=L.length;B<C;++B){let S=L[B],z=S.start,tt=S.count;for(let J=z,et=z+tt;J<et;J+=3)p(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let T=new N,M=new N,W=new N,O=new N;function F(B){W.fromBufferAttribute(s,B),O.copy(W);let C=a[B];T.copy(C),T.sub(W.multiplyScalar(W.dot(C))).normalize(),M.crossVectors(O,C);let z=M.dot(l[B])<0?-1:1;o.setXYZW(B,T.x,T.y,T.z,z)}for(let B=0,C=L.length;B<C;++B){let S=L[B],z=S.start,tt=S.count;for(let J=z,et=z+tt;J<et;J+=3)F(t.getX(J+0)),F(t.getX(J+1)),F(t.getX(J+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let x=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new Pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mh=new Ce,zi=new Ns,Yr=new yr,gh=new N,Zr=new N,$r=new N,Jr=new N,Ea=new N,jr=new N,_h=new N,Kr=new N,re=class extends hn{constructor(t=new un,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ea.fromBufferAttribute(u,t),o?jr.addScaledVector(Ea,h):jr.addScaledVector(Ea.sub(e),h))}e.add(jr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Yr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Yr,gh)===null||zi.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){let g=d[x],p=o[g.materialIndex],L=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=L,W=T;M<W;M+=3){let O=a.getX(M),F=a.getX(M+1),B=a.getX(M+2);s=Qr(this,p,t,n,c,h,u,O,F,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=x,p=y;g<p;g+=3){let L=a.getX(g),T=a.getX(g+1),M=a.getX(g+2);s=Qr(this,o,t,n,c,h,u,L,T,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){let g=d[x],p=o[g.materialIndex],L=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=L,W=T;M<W;M+=3){let O=M,F=M+1,B=M+2;s=Qr(this,p,t,n,c,h,u,O,F,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=x,p=y;g<p;g+=3){let L=g,T=g+1,M=g+2;s=Qr(this,o,t,n,c,h,u,L,T,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Af(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Li,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:i}}function Qr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Zr),i.getVertexPosition(l,$r),i.getVertexPosition(c,Jr);let h=Af(i,t,e,n,Zr,$r,Jr,_h);if(h){let u=new N;Xi.getBarycoord(_h,Zr,$r,Jr,u),s&&(h.uv=Xi.getInterpolatedAttribute(s,a,l,c,u,new dt)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,a,l,c,u,new dt)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};Xi.getNormal(Zr,$r,Jr,d.normal),h.face=d,h.barycoord=u}return h}var qe=class i extends un{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function x(y,g,p,L,T,M,W,O,F,B,C){let S=M/F,z=W/B,tt=M/2,J=W/2,et=O/2,ct=F+1,Q=B+1,pt=0,nt=0,bt=new N;for(let yt=0;yt<Q;yt++){let Lt=yt*z-J;for(let Xt=0;Xt<ct;Xt++){let ae=Xt*S-tt;bt[y]=ae*L,bt[g]=Lt*T,bt[p]=et,c.push(bt.x,bt.y,bt.z),bt[y]=0,bt[g]=0,bt[p]=O>0?1:-1,h.push(bt.x,bt.y,bt.z),u.push(Xt/F),u.push(1-yt/B),pt+=1}}for(let yt=0;yt<B;yt++)for(let Lt=0;Lt<F;Lt++){let Xt=d+Lt+ct*yt,ae=d+Lt+ct*(yt+1),rt=d+(Lt+1)+ct*(yt+1),mt=d+(Lt+1)+ct*yt;l.push(Xt,ae,mt),l.push(ae,rt,mt),nt+=6}a.addGroup(f,nt,C),f+=nt,d+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function Rf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _u(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Cf={clone:Os,merge:cn},Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends $i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mo=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ri=new N,xh=new dt,yh=new dt,nn=class extends Mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,xh,yh),e.subVectors(yh,xh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,Ms=1,wl=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(vs,Ms,t,e);s.layers=this.layers,this.add(s);let r=new nn(vs,Ms,t,e);r.layers=this.layers,this.add(r);let o=new nn(vs,Ms,t,e);o.layers=this.layers,this.add(o);let a=new nn(vs,Ms,t,e);a.layers=this.layers,this.add(a);let l=new nn(vs,Ms,t,e);l.layers=this.layers,this.add(l);let c=new nn(vs,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},bo=class extends Sn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Tl=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qe(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Pi});r.uniforms.tEquirect.value=e;let o=new re(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=Jn),new wl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},wa=new N,Lf=new N,Df=new $t,zn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wa.subVectors(n,e).cross(Lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Df.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new yr,to=new N,Mr=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],y=s[10],g=s[11],p=s[12],L=s[13],T=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,g-f,M-p).normalize(),n[1].setComponents(l+r,d+c,g+f,M+p).normalize(),n[2].setComponents(l+o,d+h,g+x,M+L).normalize(),n[3].setComponents(l-o,d-h,g-x,M-L).normalize(),n[4].setComponents(l-a,d-u,g-y,M-T).normalize(),e===hi)n[5].setComponents(l+a,d+u,g+y,M+T).normalize();else if(e===mo)n[5].setComponents(a,u,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(to.x=s.normal.x>0?t.max.x:t.min.x,to.y=s.normal.y>0?t.max.y:t.min.y,to.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Uf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],y=u[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var So=class i extends un{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],x=[],y=[],g=[];for(let p=0;p<h;p++){let L=p*d-o;for(let T=0;T<c;T++){let M=T*u-r;x.push(M,-L,0),y.push(0,0,1),g.push(T/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let L=0;L<a;L++){let T=L+c*p,M=L+c*(p+1),W=L+1+c*(p+1),O=L+1+c*p;f.push(T,M,O),f.push(M,W,O)}this.setIndex(f),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Up=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Nf,alphahash_pars_fragment:Of,alphamap_fragment:Ff,alphamap_pars_fragment:Bf,alphatest_fragment:zf,alphatest_pars_fragment:kf,aomap_fragment:Hf,aomap_pars_fragment:Vf,batching_pars_vertex:Gf,batching_vertex:Wf,begin_vertex:Xf,beginnormal_vertex:qf,bsdfs:Yf,iridescence_fragment:Zf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Qf,color_fragment:tp,color_pars_fragment:ep,color_pars_vertex:np,color_vertex:ip,common:sp,cube_uv_reflection_fragment:rp,defaultnormal_vertex:op,displacementmap_pars_vertex:ap,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:hp,colorspace_fragment:up,colorspace_pars_fragment:dp,envmap_fragment:fp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Ap,envmap_vertex:_p,fog_vertex:xp,fog_pars_vertex:yp,fog_fragment:vp,fog_pars_fragment:Mp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:Sp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:wp,lights_pars_begin:Tp,lights_toon_fragment:Rp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Lp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Up,lights_fragment_maps:Np,lights_fragment_end:Op,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:kp,map_fragment:Hp,map_pars_fragment:Vp,map_particle_fragment:Gp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:qp,morphinstance_vertex:Yp,morphcolor_vertex:Zp,morphnormal_vertex:$p,morphtarget_pars_vertex:Jp,morphtarget_vertex:jp,normal_fragment_begin:Kp,normal_fragment_maps:Qp,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:om,iridescence_pars_fragment:am,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:_m,shadowmap_vertex:xm,shadowmask_pars_fragment:ym,skinbase_vertex:vm,skinning_pars_vertex:Mm,skinning_vertex:bm,skinnormal_vertex:Sm,specularmap_fragment:Em,specularmap_pars_fragment:wm,tonemapping_fragment:Tm,tonemapping_pars_fragment:Am,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Im,uv_vertex:Lm,worldpos_vertex:Dm,background_vert:Um,background_frag:Nm,backgroundCube_vert:Om,backgroundCube_frag:Fm,cube_vert:Bm,cube_frag:zm,depth_vert:km,depth_frag:Hm,distanceRGBA_vert:Vm,distanceRGBA_frag:Gm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:qm,linedashed_frag:Ym,meshbasic_vert:Zm,meshbasic_frag:$m,meshlambert_vert:Jm,meshlambert_frag:jm,meshmatcap_vert:Km,meshmatcap_frag:Qm,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},St={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},$n={basic:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new se(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:cn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:cn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new se(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:cn([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:cn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:cn([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:cn([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:cn([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:cn([St.lights,St.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};$n.physical={uniforms:cn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var eo={r:0,b:0,g:0},Hi=new In,pg=new Ce;function mg(i,t,e,n,s,r,o){let a=new se(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(L){let T=L.isScene===!0?L.background:null;return T&&T.isTexture&&(T=(L.backgroundBlurriness>0?e:t).get(T)),T}function y(L){let T=!1,M=x(L);M===null?p(a,l):M&&M.isColor&&(p(M,1),T=!0);let W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,o):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(L,T){let M=x(T);M&&(M.isCubeTexture||M.mapping===Ho)?(h===void 0&&(h=new re(new qe(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Os($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(T.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(Hi)),h.material.toneMapped=ce.getTransfer(M.colorSpace)!==me,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new re(new So(2,2),new jn({name:"BackgroundMaterial",uniforms:Os($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ce.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null))}function p(L,T){L.getRGB(eo,_u(i)),n.buffers.color.setClear(eo.r,eo.g,eo.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(L,T=1){a.set(L),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(L){l=L,p(a,l)},render:y,addToRenderList:g}}function gg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,z,tt,J,et){let ct=!1,Q=u(J,tt,z);r!==Q&&(r=Q,c(r.object)),ct=f(S,J,tt,et),ct&&x(S,J,tt,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(ct||o)&&(o=!1,M(S,z,tt,J),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,z,tt){let J=tt.wireframe===!0,et=n[S.id];et===void 0&&(et={},n[S.id]=et);let ct=et[z.id];ct===void 0&&(ct={},et[z.id]=ct);let Q=ct[J];return Q===void 0&&(Q=d(l()),ct[J]=Q),Q}function d(S){let z=[],tt=[],J=[];for(let et=0;et<e;et++)z[et]=0,tt[et]=0,J[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:tt,attributeDivisors:J,object:S,attributes:{},index:null}}function f(S,z,tt,J){let et=r.attributes,ct=z.attributes,Q=0,pt=tt.getAttributes();for(let nt in pt)if(pt[nt].location>=0){let yt=et[nt],Lt=ct[nt];if(Lt===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(Lt=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(Lt=S.instanceColor)),yt===void 0||yt.attribute!==Lt||Lt&&yt.data!==Lt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==J}function x(S,z,tt,J){let et={},ct=z.attributes,Q=0,pt=tt.getAttributes();for(let nt in pt)if(pt[nt].location>=0){let yt=ct[nt];yt===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor));let Lt={};Lt.attribute=yt,yt&&yt.data&&(Lt.data=yt.data),et[nt]=Lt,Q++}r.attributes=et,r.attributesNum=Q,r.index=J}function y(){let S=r.newAttributes;for(let z=0,tt=S.length;z<tt;z++)S[z]=0}function g(S){p(S,0)}function p(S,z){let tt=r.newAttributes,J=r.enabledAttributes,et=r.attributeDivisors;tt[S]=1,J[S]===0&&(i.enableVertexAttribArray(S),J[S]=1),et[S]!==z&&(i.vertexAttribDivisor(S,z),et[S]=z)}function L(){let S=r.newAttributes,z=r.enabledAttributes;for(let tt=0,J=z.length;tt<J;tt++)z[tt]!==S[tt]&&(i.disableVertexAttribArray(tt),z[tt]=0)}function T(S,z,tt,J,et,ct,Q){Q===!0?i.vertexAttribIPointer(S,z,tt,et,ct):i.vertexAttribPointer(S,z,tt,J,et,ct)}function M(S,z,tt,J){y();let et=J.attributes,ct=tt.getAttributes(),Q=z.defaultAttributeValues;for(let pt in ct){let nt=ct[pt];if(nt.location>=0){let bt=et[pt];if(bt===void 0&&(pt==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),pt==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor)),bt!==void 0){let yt=bt.normalized,Lt=bt.itemSize,Xt=t.get(bt);if(Xt===void 0)continue;let ae=Xt.buffer,rt=Xt.type,mt=Xt.bytesPerElement,It=rt===i.INT||rt===i.UNSIGNED_INT||bt.gpuType===ac;if(bt.isInterleavedBufferAttribute){let Mt=bt.data,zt=Mt.stride,Gt=bt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<nt.locationSize;Ht++)p(nt.location+Ht,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ht=0;Ht<nt.locationSize;Ht++)g(nt.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Ht=0;Ht<nt.locationSize;Ht++)T(nt.location+Ht,Lt/nt.locationSize,rt,yt,zt*mt,(Gt+Lt/nt.locationSize*Ht)*mt,It)}else{if(bt.isInstancedBufferAttribute){for(let Mt=0;Mt<nt.locationSize;Mt++)p(nt.location+Mt,bt.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Mt=0;Mt<nt.locationSize;Mt++)g(nt.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Mt=0;Mt<nt.locationSize;Mt++)T(nt.location+Mt,Lt/nt.locationSize,rt,yt,Lt*mt,Lt/nt.locationSize*Mt*mt,It)}}else if(Q!==void 0){let yt=Q[pt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(nt.location,yt);break;case 3:i.vertexAttrib3fv(nt.location,yt);break;case 4:i.vertexAttrib4fv(nt.location,yt);break;default:i.vertexAttrib1fv(nt.location,yt)}}}}L()}function W(){B();for(let S in n){let z=n[S];for(let tt in z){let J=z[tt];for(let et in J)h(J[et].object),delete J[et];delete z[tt]}delete n[S]}}function O(S){if(n[S.id]===void 0)return;let z=n[S.id];for(let tt in z){let J=z[tt];for(let et in J)h(J[et].object),delete J[et];delete z[tt]}delete n[S.id]}function F(S){for(let z in n){let tt=n[z];if(tt[S.id]===void 0)continue;let J=tt[S.id];for(let et in J)h(J[et].object),delete J[et];delete tt[S.id]}}function B(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:C,dispose:W,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:g,disableUnusedAttributes:L}}function _g(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y]*d[y];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==Hn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let B=F===Ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==di&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ci&&!B)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=x>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:L,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:W,maxSamples:O}}function yg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new zn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let L=r?0:n,T=L*4,M=p.clippingState||null;l.value=M,M=h(x,d,T,f);for(let W=0;W!==T;++W)M[W]=e[W];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,x){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,x!==!0||g===null){let p=f+y*4,L=d.matrixWorldInverse;a.getNormalMatrix(L),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,M=f;T!==y;++T,M+=4)o.copy(u[T]).applyMatrix4(L,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function vg(i){let t=new WeakMap;function e(o,a){return a===qa?o.mapping=Is:a===Ya&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qa||a===Ya)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Tl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Eo=class extends Mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,vh=[.125,.215,.35,.446,.526,.582],qi=20,Ta=new Eo,Mh=new se,Aa=null,Ra=0,Ca=0,Pa=!1,Gi=(1+Math.sqrt(5))/2,bs=1/Gi,bh=[new N(-Gi,bs,0),new N(Gi,bs,0),new N(-bs,0,Gi),new N(bs,0,Gi),new N(0,Gi,-bs),new N(0,Gi,bs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Fs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ur,format:Hn,colorSpace:Ws,depthBuffer:!1},s=Sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=bg(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,s){let a=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mh),h.toneMapping=Ii,h.autoClear=!1;let f=new mi({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),x=new re(new qe,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(Mh),y=!0);for(let p=0;p<6;p++){let L=p%3;L===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):L===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let T=this._cubeSize;no(s,L*T,p>2?T:0,T,T),h.setRenderTarget(s),y&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Is||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;no(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(s-r-1)%bh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),y=r/x,g=isFinite(r)?1+Math.floor(h*y):qi;g>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);let p=[],L=0;for(let F=0;F<qi;++F){let B=F/y,C=Math.exp(-B*B/2);p.push(C),F===0?L+=C:F<g&&(L+=2*C)}for(let F=0;F<p.length;F++)p[F]=p[F]/L;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-n;let M=this._sizeLods[s],W=3*M*(s>T-Es?s-T+Es:0),O=4*(this._cubeSize-M);no(e,W,O,3*M,2*M),l.setRenderTarget(e),l.render(u,Ta)}};function Mg(i){let t=[],e=[],n=[],s=i,r=i-Es+1+vh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Es?l=vh[o-i+Es-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,y=3,g=2,p=1,L=new Float32Array(y*x*f),T=new Float32Array(g*x*f),M=new Float32Array(p*x*f);for(let O=0;O<f;O++){let F=O%3*2/3-1,B=O>2?0:-1,C=[F,B,0,F+2/3,B,0,F+2/3,B+1,0,F,B,0,F+2/3,B+1,0,F,B+1,0];L.set(C,y*x*O),T.set(d,g*x*O);let S=[O,O,O,O,O,O];M.set(S,p*x*O)}let W=new un;W.setAttribute("position",new Pn(L,y)),W.setAttribute("uv",new Pn(T,g)),W.setAttribute("faceIndex",new Pn(M,p)),t.push(W),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sh(i,t,e){let n=new pi(i,t,e);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bg(i,t,e){let n=new Float32Array(qi),s=new N(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Eh(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function wh(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qa||l===Ya,h=l===Is||l===Ls;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fs(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Fs(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Eg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let y=d.morphAttributes[x];for(let g=0,p=y.length;g<p;g++)t.remove(y[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let y=f[x];for(let g=0,p=y.length;g<p;g++)t.update(y[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,x=u.attributes.position,y=0;if(f!==null){let L=f.array;y=f.version;for(let T=0,M=L.length;T<M;T+=3){let W=L[T+0],O=L[T+1],F=L[T+2];d.push(W,O,O,F,F,W)}}else if(x!==void 0){let L=x.array;y=x.version;for(let T=0,M=L.length/3-1;T<M;T+=3){let W=T+0,O=T+1,F=T+2;d.push(W,O,O,F,F,W)}}else return;let g=new(mu(d)?vo:yo)(d,1);g.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Tg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*o,x),e.update(f,n,x))}function h(d,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let g=0;for(let p=0;p<x;p++)g+=f[p];e.update(g,n,1)}function u(d,f,x,y){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,x);let p=0;for(let L=0;L<x;L++)p+=f[L]*y[L];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ag(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,t,e){let n=new WeakMap,s=new ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let C=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],L=a.morphAttributes.color||[],T=0;f===!0&&(T=1),x===!0&&(T=2),y===!0&&(T=3);let M=a.attributes.position.count*T,W=1;M>t.maxTextureSize&&(W=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let O=new Float32Array(M*W*4*u),F=new xo(O,M,W,u);F.type=ci,F.needsUpdate=!0;let B=T*4;for(let S=0;S<u;S++){let z=g[S],tt=p[S],J=L[S],et=M*W*4*S;for(let ct=0;ct<z.count;ct++){let Q=ct*B;f===!0&&(s.fromBufferAttribute(z,ct),O[et+Q+0]=s.x,O[et+Q+1]=s.y,O[et+Q+2]=s.z,O[et+Q+3]=0),x===!0&&(s.fromBufferAttribute(tt,ct),O[et+Q+4]=s.x,O[et+Q+5]=s.y,O[et+Q+6]=s.z,O[et+Q+7]=0),y===!0&&(s.fromBufferAttribute(J,ct),O[et+Q+8]=s.x,O[et+Q+9]=s.y,O[et+Q+10]=s.z,O[et+Q+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new dt(M,W)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var wo=class extends Sn{constructor(t,e,n,s,r,o,a,l,c,h=As){if(h!==As&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=Zi),n===void 0&&h===Us&&(n=Ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yu=new Sn,Th=new wo(1,1),vu=new xo,Mu=new El,bu=new bo,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Go(i,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),ke(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),ke(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Ch.set(n),i.uniformMatrix4fv(this.addr,!1,Ch),ke(e,n)}}function Fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=fu,r=Th):r=yu,e.setTexture2D(t||r,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bu,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function $g(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return kg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Jg(i,t){i.uniform1fv(this.addr,t)}function jg(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function Kg(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Qg(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function t0(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e0(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n0(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i0(i,t){i.uniform1iv(this.addr,t)}function s0(i,t){i.uniform2iv(this.addr,t)}function r0(i,t){i.uniform3iv(this.addr,t)}function o0(i,t){i.uniform4iv(this.addr,t)}function a0(i,t){i.uniform1uiv(this.addr,t)}function l0(i,t){i.uniform2uiv(this.addr,t)}function c0(i,t){i.uniform3uiv(this.addr,t)}function h0(i,t){i.uniform4uiv(this.addr,t)}function u0(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yu,r[o])}function d0(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mu,r[o])}function f0(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bu,r[o])}function p0(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vu,r[o])}function m0(i){switch(i){case 5126:return Jg;case 35664:return jg;case 35665:return Kg;case 35666:return Qg;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}var Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},Rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}},Cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ia=/(\w+)(\])?(\[|\.)?/g;function Lh(i,t){i.seq.push(t),i.map[t.id]=t}function g0(i,t,e){let n=i.name,s=n.length;for(Ia.lastIndex=0;;){let r=Ia.exec(n),o=Ia.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lh(e,c===void 0?new Al(a,i,t):new Rl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cl(a),Lh(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);g0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Dh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _0=37297,x0=0;function y0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Uh=new $t;function v0(i){ce._getMatrix(Uh,ce.workingColorSpace,i);let t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Vo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y0(i.getShaderSource(t),o)}else return s}function M0(i,t){let e=v0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b0(i,t){let e;switch(t){case Dd:e="Linear";break;case Ud:e="Reinhard";break;case Nd:e="Cineon";break;case rc:e="ACESFilmic";break;case Fd:e="AgX";break;case oc:e="Neutral";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var io=new N;function S0(){ce.getLuminanceCoefficients(io);let i=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function w0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cr(i){return i!==""}function Oh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(A0,C0)}var R0=new Map;function C0(i,t){let e=jt[t];if(e===void 0){let n=R0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pl(e)}var P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(i){return i.replace(P0,I0)}function I0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function D0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ls:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function N0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tu:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function O0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function F0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=L0(e),c=D0(e),h=U0(e),u=N0(e),d=O0(e),f=E0(e),x=w0(r),y=s.createProgram(),g,p,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(g=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ii?b0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,M0("linearToOutputTexel",e.outputColorSpace),S0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=Pl(o),o=Oh(o,e),o=Fh(o,e),a=Pl(a),a=Oh(a,e),a=Fh(a,e),o=Bh(o),a=Bh(a),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=L+g+o,M=L+p+a,W=Dh(s,s.VERTEX_SHADER,T),O=Dh(s,s.FRAGMENT_SHADER,M);s.attachShader(y,W),s.attachShader(y,O),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function F(z){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(y).trim(),J=s.getShaderInfoLog(W).trim(),et=s.getShaderInfoLog(O).trim(),ct=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,W,O);else{let pt=Nh(s,W,"vertex"),nt=Nh(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+tt+`
`+pt+`
`+nt)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(J===""||et==="")&&(Q=!1);Q&&(z.diagnostics={runnable:ct,programLog:tt,vertexShader:{log:J,prefix:g},fragmentShader:{log:et,prefix:p}})}s.deleteShader(W),s.deleteShader(O),B=new Cs(s,y),C=T0(s,y)}let B;this.getUniforms=function(){return B===void 0&&F(this),B};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,_0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=W,this.fragmentShader=O,this}var B0=0,Il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ll(t),e.set(t,n)),n}},Ll=class{constructor(t){this.id=B0++,this.code=t,this.usedTimes=0}};function z0(i,t,e,n,s,r,o){let a=new vr,l=new Il,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(C){return c.add(C),C===0?"uv":`uv${C}`}function g(C,S,z,tt,J){let et=tt.fog,ct=J.geometry,Q=C.isMeshStandardMaterial?tt.environment:null,pt=(C.isMeshStandardMaterial?e:t).get(C.envMap||Q),nt=pt&&pt.mapping===Ho?pt.image.height:null,bt=x[C.type];C.precision!==null&&(f=s.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));let yt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Lt=yt!==void 0?yt.length:0,Xt=0;ct.morphAttributes.position!==void 0&&(Xt=1),ct.morphAttributes.normal!==void 0&&(Xt=2),ct.morphAttributes.color!==void 0&&(Xt=3);let ae,rt,mt,It;if(bt){let Tt=$n[bt];ae=Tt.vertexShader,rt=Tt.fragmentShader}else ae=C.vertexShader,rt=C.fragmentShader,l.update(C),mt=l.getVertexShaderID(C),It=l.getFragmentShaderID(C);let Mt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Gt=J.isInstancedMesh===!0,Ht=J.isBatchedMesh===!0,le=!!C.map,st=!!C.matcap,gt=!!pt,U=!!C.aoMap,Dt=!!C.lightMap,ft=!!C.bumpMap,Rt=!!C.normalMap,vt=!!C.displacementMap,kt=!!C.emissiveMap,Ct=!!C.metalnessMap,P=!!C.roughnessMap,v=C.anisotropy>0,Z=C.clearcoat>0,it=C.dispersion>0,at=C.iridescence>0,ot=C.sheen>0,Ut=C.transmission>0,Et=v&&!!C.anisotropyMap,Pt=Z&&!!C.clearcoatMap,Qt=Z&&!!C.clearcoatNormalMap,I=Z&&!!C.clearcoatRoughnessMap,m=at&&!!C.iridescenceMap,_=at&&!!C.iridescenceThicknessMap,b=ot&&!!C.sheenColorMap,w=ot&&!!C.sheenRoughnessMap,R=!!C.specularMap,V=!!C.specularColorMap,G=!!C.specularIntensityMap,A=Ut&&!!C.transmissionMap,k=Ut&&!!C.thicknessMap,H=!!C.gradientMap,D=!!C.alphaMap,X=C.alphaTest>0,$=!!C.alphaHash,_t=!!C.extensions,wt=Ii;C.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(wt=i.toneMapping);let Vt={shaderID:bt,shaderType:C.type,shaderName:C.name,vertexShader:ae,fragmentShader:rt,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:It,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,batching:Ht,batchingColor:Ht&&J._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&J.instanceColor!==null,instancingMorph:Gt&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ws,alphaToCoverage:!!C.alphaToCoverage,map:le,matcap:st,envMap:gt,envMapMode:gt&&pt.mapping,envMapCubeUVHeight:nt,aoMap:U,lightMap:Dt,bumpMap:ft,normalMap:Rt,displacementMap:d&&vt,emissiveMap:kt,normalMapObjectSpace:Rt&&C.normalMapType===Hd,normalMapTangentSpace:Rt&&C.normalMapType===du,metalnessMap:Ct,roughnessMap:P,anisotropy:v,anisotropyMap:Et,clearcoat:Z,clearcoatMap:Pt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:I,dispersion:it,iridescence:at,iridescenceMap:m,iridescenceThicknessMap:_,sheen:ot,sheenColorMap:b,sheenRoughnessMap:w,specularMap:R,specularColorMap:V,specularIntensityMap:G,transmission:Ut,transmissionMap:A,thicknessMap:k,gradientMap:H,opaque:C.transparent===!1&&C.blending===Ts&&C.alphaToCoverage===!1,alphaMap:D,alphaTest:X,alphaHash:$,combine:C.combine,mapUv:le&&y(C.map.channel),aoMapUv:U&&y(C.aoMap.channel),lightMapUv:Dt&&y(C.lightMap.channel),bumpMapUv:ft&&y(C.bumpMap.channel),normalMapUv:Rt&&y(C.normalMap.channel),displacementMapUv:vt&&y(C.displacementMap.channel),emissiveMapUv:kt&&y(C.emissiveMap.channel),metalnessMapUv:Ct&&y(C.metalnessMap.channel),roughnessMapUv:P&&y(C.roughnessMap.channel),anisotropyMapUv:Et&&y(C.anisotropyMap.channel),clearcoatMapUv:Pt&&y(C.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&y(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&y(C.clearcoatRoughnessMap.channel),iridescenceMapUv:m&&y(C.iridescenceMap.channel),iridescenceThicknessMapUv:_&&y(C.iridescenceThicknessMap.channel),sheenColorMapUv:b&&y(C.sheenColorMap.channel),sheenRoughnessMapUv:w&&y(C.sheenRoughnessMap.channel),specularMapUv:R&&y(C.specularMap.channel),specularColorMapUv:V&&y(C.specularColorMap.channel),specularIntensityMapUv:G&&y(C.specularIntensityMap.channel),transmissionMapUv:A&&y(C.transmissionMap.channel),thicknessMapUv:k&&y(C.thicknessMap.channel),alphaMapUv:D&&y(C.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Rt||v),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ct.attributes.uv&&(le||D),fog:!!et,useFog:C.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:J.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:le&&C.map.isVideoTexture===!0&&ce.getTransfer(C.map.colorSpace)===me,decodeVideoTextureEmissive:kt&&C.emissiveMap.isVideoTexture===!0&&ce.getTransfer(C.emissiveMap.colorSpace)===me,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Cn,flipSided:C.side===sn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:_t&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&C.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(C){let S=[];if(C.shaderID?S.push(C.shaderID):(S.push(C.customVertexShaderID),S.push(C.customFragmentShaderID)),C.defines!==void 0)for(let z in C.defines)S.push(z),S.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(L(S,C),T(S,C),S.push(i.outputColorSpace)),S.push(C.customProgramCacheKey),S.join()}function L(C,S){C.push(S.precision),C.push(S.outputColorSpace),C.push(S.envMapMode),C.push(S.envMapCubeUVHeight),C.push(S.mapUv),C.push(S.alphaMapUv),C.push(S.lightMapUv),C.push(S.aoMapUv),C.push(S.bumpMapUv),C.push(S.normalMapUv),C.push(S.displacementMapUv),C.push(S.emissiveMapUv),C.push(S.metalnessMapUv),C.push(S.roughnessMapUv),C.push(S.anisotropyMapUv),C.push(S.clearcoatMapUv),C.push(S.clearcoatNormalMapUv),C.push(S.clearcoatRoughnessMapUv),C.push(S.iridescenceMapUv),C.push(S.iridescenceThicknessMapUv),C.push(S.sheenColorMapUv),C.push(S.sheenRoughnessMapUv),C.push(S.specularMapUv),C.push(S.specularColorMapUv),C.push(S.specularIntensityMapUv),C.push(S.transmissionMapUv),C.push(S.thicknessMapUv),C.push(S.combine),C.push(S.fogExp2),C.push(S.sizeAttenuation),C.push(S.morphTargetsCount),C.push(S.morphAttributeCount),C.push(S.numDirLights),C.push(S.numPointLights),C.push(S.numSpotLights),C.push(S.numSpotLightMaps),C.push(S.numHemiLights),C.push(S.numRectAreaLights),C.push(S.numDirLightShadows),C.push(S.numPointLightShadows),C.push(S.numSpotLightShadows),C.push(S.numSpotLightShadowsWithMaps),C.push(S.numLightProbes),C.push(S.shadowMapType),C.push(S.toneMapping),C.push(S.numClippingPlanes),C.push(S.numClipIntersection),C.push(S.depthPacking)}function T(C,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),C.push(a.mask)}function M(C){let S=x[C.type],z;if(S){let tt=$n[S];z=Cf.clone(tt.uniforms)}else z=C.uniforms;return z}function W(C,S){let z;for(let tt=0,J=h.length;tt<J;tt++){let et=h[tt];if(et.cacheKey===S){z=et,++z.usedTimes;break}}return z===void 0&&(z=new F0(i,S,C,r),h.push(z)),z}function O(C){if(--C.usedTimes===0){let S=h.indexOf(C);h[S]=h[h.length-1],h.pop(),C.destroy()}}function F(C){l.remove(C)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:W,releaseProgram:O,releaseShaderCache:F,programs:h,dispose:B}}function k0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function H0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,x,y,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:y,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function a(u,d,f,x,y,g){let p=o(u,d,f,x,y,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,x,y,g){let p=o(u,d,f,x,y,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||H0),n.length>1&&n.sort(d||kh),s.length>1&&s.sort(d||kh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function V0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Hh,i.set(n,[o])):s>=r.length?(o=new Hh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function G0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new se};break;case"SpotLight":e={position:new N,direction:new N,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function W0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var X0=0;function q0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Y0(i){let t=new G0,e=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Ce,o=new Ce;function a(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,x=0,y=0,g=0,p=0,L=0,T=0,M=0,W=0,O=0,F=0;c.sort(q0);for(let C=0,S=c.length;C<S;C++){let z=c[C],tt=z.color,J=z.intensity,et=z.distance,ct=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=tt.r*J,u+=tt.g*J,d+=tt.b*J;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(z.sh.coefficients[Q],J);F++}else if(z.isDirectionalLight){let Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let pt=z.shadow,nt=e.get(z);nt.shadowIntensity=pt.intensity,nt.shadowBias=pt.bias,nt.shadowNormalBias=pt.normalBias,nt.shadowRadius=pt.radius,nt.shadowMapSize=pt.mapSize,n.directionalShadow[f]=nt,n.directionalShadowMap[f]=ct,n.directionalShadowMatrix[f]=z.shadow.matrix,L++}n.directional[f]=Q,f++}else if(z.isSpotLight){let Q=t.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(tt).multiplyScalar(J),Q.distance=et,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,n.spot[y]=Q;let pt=z.shadow;if(z.map&&(n.spotLightMap[W]=z.map,W++,pt.updateMatrices(z),z.castShadow&&O++),n.spotLightMatrix[y]=pt.matrix,z.castShadow){let nt=e.get(z);nt.shadowIntensity=pt.intensity,nt.shadowBias=pt.bias,nt.shadowNormalBias=pt.normalBias,nt.shadowRadius=pt.radius,nt.shadowMapSize=pt.mapSize,n.spotShadow[y]=nt,n.spotShadowMap[y]=ct,M++}y++}else if(z.isRectAreaLight){let Q=t.get(z);Q.color.copy(tt).multiplyScalar(J),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),n.rectArea[g]=Q,g++}else if(z.isPointLight){let Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){let pt=z.shadow,nt=e.get(z);nt.shadowIntensity=pt.intensity,nt.shadowBias=pt.bias,nt.shadowNormalBias=pt.normalBias,nt.shadowRadius=pt.radius,nt.shadowMapSize=pt.mapSize,nt.shadowCameraNear=pt.camera.near,nt.shadowCameraFar=pt.camera.far,n.pointShadow[x]=nt,n.pointShadowMap[x]=ct,n.pointShadowMatrix[x]=z.shadow.matrix,T++}n.point[x]=Q,x++}else if(z.isHemisphereLight){let Q=t.get(z);Q.skyColor.copy(z.color).multiplyScalar(J),Q.groundColor.copy(z.groundColor).multiplyScalar(J),n.hemi[p]=Q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let B=n.hash;(B.directionalLength!==f||B.pointLength!==x||B.spotLength!==y||B.rectAreaLength!==g||B.hemiLength!==p||B.numDirectionalShadows!==L||B.numPointShadows!==T||B.numSpotShadows!==M||B.numSpotMaps!==W||B.numLightProbes!==F)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+W-O,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=F,B.directionalLength=f,B.pointLength=x,B.spotLength=y,B.rectAreaLength=g,B.hemiLength=p,B.numDirectionalShadows=L,B.numPointShadows=T,B.numSpotShadows=M,B.numSpotMaps=W,B.numLightProbes=F,n.version=X0++)}function l(c,h){let u=0,d=0,f=0,x=0,y=0,g=h.matrixWorldInverse;for(let p=0,L=c.length;p<L;p++){let T=c[p];if(T.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(T.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(T.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(T.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Vh(i){let t=new Y0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Z0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vh(i),t.set(s,[a])):r>=o.length?(a=new Vh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Dl=class extends $i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ul=class extends $i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function j0(i,t,e){let n=new Mr,s=new dt,r=new dt,o=new ge,a=new Dl({depthPacking:kd}),l=new Ul,c={},h=e.maxTextureSize,u={[Li]:sn,[sn]:Li,[Cn]:Cn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:$0,fragmentShader:J0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new un;x.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new re(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(O,F,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||O.length===0)return;let C=i.getRenderTarget(),S=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(Pi),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let J=p!==Bn&&this.type===Bn,et=p===Bn&&this.type!==Bn;for(let ct=0,Q=O.length;ct<Q;ct++){let pt=O[ct],nt=pt.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);let bt=nt.getFrameExtents();if(s.multiply(bt),r.copy(nt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/bt.x),s.x=r.x*bt.x,nt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/bt.y),s.y=r.y*bt.y,nt.mapSize.y=r.y)),nt.map===null||J===!0||et===!0){let Lt=this.type!==Bn?{minFilter:Vn,magFilter:Vn}:{};nt.map!==null&&nt.map.dispose(),nt.map=new pi(s.x,s.y,Lt),nt.map.texture.name=pt.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();let yt=nt.getViewportCount();for(let Lt=0;Lt<yt;Lt++){let Xt=nt.getViewport(Lt);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),tt.viewport(o),nt.updateMatrices(pt,Lt),n=nt.getFrustum(),M(F,B,nt.camera,pt,this.type)}nt.isPointLightShadow!==!0&&this.type===Bn&&L(nt,B),nt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(C,S,z)};function L(O,F){let B=t.update(y);d.defines.VSM_SAMPLES!==O.blurSamples&&(d.defines.VSM_SAMPLES=O.blurSamples,f.defines.VSM_SAMPLES=O.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new pi(s.x,s.y)),d.uniforms.shadow_pass.value=O.map.texture,d.uniforms.resolution.value=O.mapSize,d.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(F,null,B,d,y,null),f.uniforms.shadow_pass.value=O.mapPass.texture,f.uniforms.resolution.value=O.mapSize,f.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(F,null,B,f,y,null)}function T(O,F,B,C){let S=null,z=B.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)S=z;else if(S=B.isPointLight===!0?l:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let tt=S.uuid,J=F.uuid,et=c[tt];et===void 0&&(et={},c[tt]=et);let ct=et[J];ct===void 0&&(ct=S.clone(),et[J]=ct,F.addEventListener("dispose",W)),S=ct}if(S.visible=F.visible,S.wireframe=F.wireframe,C===Bn?S.side=F.shadowSide!==null?F.shadowSide:F.side:S.side=F.shadowSide!==null?F.shadowSide:u[F.side],S.alphaMap=F.alphaMap,S.alphaTest=F.alphaTest,S.map=F.map,S.clipShadows=F.clipShadows,S.clippingPlanes=F.clippingPlanes,S.clipIntersection=F.clipIntersection,S.displacementMap=F.displacementMap,S.displacementScale=F.displacementScale,S.displacementBias=F.displacementBias,S.wireframeLinewidth=F.wireframeLinewidth,S.linewidth=F.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let tt=i.properties.get(S);tt.light=B}return S}function M(O,F,B,C,S){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&S===Bn)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,O.matrixWorld);let J=t.update(O),et=O.material;if(Array.isArray(et)){let ct=J.groups;for(let Q=0,pt=ct.length;Q<pt;Q++){let nt=ct[Q],bt=et[nt.materialIndex];if(bt&&bt.visible){let yt=T(O,bt,C,S);O.onBeforeShadow(i,O,F,B,J,yt,nt),i.renderBufferDirect(B,null,J,yt,O,nt),O.onAfterShadow(i,O,F,B,J,yt,nt)}}}else if(et.visible){let ct=T(O,et,C,S);O.onBeforeShadow(i,O,F,B,J,ct,null),i.renderBufferDirect(B,null,J,ct,O,null),O.onAfterShadow(i,O,F,B,J,ct,null)}}let tt=O.children;for(let J=0,et=tt.length;J<et;J++)M(tt[J],F,B,C,S)}function W(O){O.target.removeEventListener("dispose",W);for(let B in c){let C=c[B],S=O.target.uuid;S in C&&(C[S].dispose(),delete C[S])}}}var K0={[za]:ka,[Ha]:Wa,[Va]:Xa,[Ps]:Ga,[ka]:za,[Wa]:Ha,[Xa]:Va,[Ga]:Ps};function Q0(i,t){function e(){let A=!1,k=new ge,H=null,D=new ge(0,0,0,0);return{setMask:function(X){H!==X&&!A&&(i.colorMask(X,X,X,X),H=X)},setLocked:function(X){A=X},setClear:function(X,$,_t,wt,Vt){Vt===!0&&(X*=wt,$*=wt,_t*=wt),k.set(X,$,_t,wt),D.equals(k)===!1&&(i.clearColor(X,$,_t,wt),D.copy(k))},reset:function(){A=!1,H=null,D.set(-1,0,0,0)}}}function n(){let A=!1,k=!1,H=null,D=null,X=null;return{setReversed:function($){if(k!==$){let _t=t.get("EXT_clip_control");k?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT);let wt=X;X=null,this.setClear(wt)}k=$},getReversed:function(){return k},setTest:function($){$?Mt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function($){H!==$&&!A&&(i.depthMask($),H=$)},setFunc:function($){if(k&&($=K0[$]),D!==$){switch($){case za:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=$}},setLocked:function($){A=$},setClear:function($){X!==$&&(k&&($=1-$),i.clearDepth($),X=$)},reset:function(){A=!1,H=null,D=null,X=null,k=!1}}}function s(){let A=!1,k=null,H=null,D=null,X=null,$=null,_t=null,wt=null,Vt=null;return{setTest:function(Tt){A||(Tt?Mt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Tt){k!==Tt&&!A&&(i.stencilMask(Tt),k=Tt)},setFunc:function(Tt,oe,ve){(H!==Tt||D!==oe||X!==ve)&&(i.stencilFunc(Tt,oe,ve),H=Tt,D=oe,X=ve)},setOp:function(Tt,oe,ve){($!==Tt||_t!==oe||wt!==ve)&&(i.stencilOp(Tt,oe,ve),$=Tt,_t=oe,wt=ve)},setLocked:function(Tt){A=Tt},setClear:function(Tt){Vt!==Tt&&(i.clearStencil(Tt),Vt=Tt)},reset:function(){A=!1,k=null,H=null,D=null,X=null,$=null,_t=null,wt=null,Vt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,y=!1,g=null,p=null,L=null,T=null,M=null,W=null,O=null,F=new se(0,0,0),B=0,C=!1,S=null,z=null,tt=null,J=null,et=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,pt=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Q=pt>=1):nt.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Q=pt>=2);let bt=null,yt={},Lt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),ae=new ge().fromArray(Lt),rt=new ge().fromArray(Xt);function mt(A,k,H,D){let X=new Uint8Array(4),$=i.createTexture();i.bindTexture(A,$),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<H;_t++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(k,0,i.RGBA,1,1,D,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(k+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return $}let It={};It[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(i.DEPTH_TEST),o.setFunc(Ps),ft(!1),Rt(Gc),Mt(i.CULL_FACE),U(Pi);function Mt(A){h[A]!==!0&&(i.enable(A),h[A]=!0)}function zt(A){h[A]!==!1&&(i.disable(A),h[A]=!1)}function Gt(A,k){return u[A]!==k?(i.bindFramebuffer(A,k),u[A]=k,A===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=k),A===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=k),!0):!1}function Ht(A,k){let H=f,D=!1;if(A){H=d.get(k),H===void 0&&(H=[],d.set(k,H));let X=A.textures;if(H.length!==X.length||H[0]!==i.COLOR_ATTACHMENT0){for(let $=0,_t=X.length;$<_t;$++)H[$]=i.COLOR_ATTACHMENT0+$;H.length=X.length,D=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,D=!0);D&&i.drawBuffers(H)}function le(A){return x!==A?(i.useProgram(A),x=A,!0):!1}let st={[Wi]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};st[gd]=i.MIN,st[_d]=i.MAX;let gt={[xd]:i.ZERO,[yd]:i.ONE,[vd]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[Ad]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function U(A,k,H,D,X,$,_t,wt,Vt,Tt){if(A===Pi){y===!0&&(zt(i.BLEND),y=!1);return}if(y===!1&&(Mt(i.BLEND),y=!0),A!==fd){if(A!==g||Tt!==C){if((p!==Wi||M!==Wi)&&(i.blendEquation(i.FUNC_ADD),p=Wi,M=Wi),Tt)switch(A){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}L=null,T=null,W=null,O=null,F.set(0,0,0),B=0,g=A,C=Tt}return}X=X||k,$=$||H,_t=_t||D,(k!==p||X!==M)&&(i.blendEquationSeparate(st[k],st[X]),p=k,M=X),(H!==L||D!==T||$!==W||_t!==O)&&(i.blendFuncSeparate(gt[H],gt[D],gt[$],gt[_t]),L=H,T=D,W=$,O=_t),(wt.equals(F)===!1||Vt!==B)&&(i.blendColor(wt.r,wt.g,wt.b,Vt),F.copy(wt),B=Vt),g=A,C=!1}function Dt(A,k){A.side===Cn?zt(i.CULL_FACE):Mt(i.CULL_FACE);let H=A.side===sn;k&&(H=!H),ft(H),A.blending===Ts&&A.transparent===!1?U(Pi):U(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),r.setMask(A.colorWrite);let D=A.stencilWrite;a.setTest(D),D&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),kt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(A){S!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),S=A)}function Rt(A){A!==ud?(Mt(i.CULL_FACE),A!==z&&(A===Gc?i.cullFace(i.BACK):A===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),z=A}function vt(A){A!==tt&&(Q&&i.lineWidth(A),tt=A)}function kt(A,k,H){A?(Mt(i.POLYGON_OFFSET_FILL),(J!==k||et!==H)&&(i.polygonOffset(k,H),J=k,et=H)):zt(i.POLYGON_OFFSET_FILL)}function Ct(A){A?Mt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function P(A){A===void 0&&(A=i.TEXTURE0+ct-1),bt!==A&&(i.activeTexture(A),bt=A)}function v(A,k,H){H===void 0&&(bt===null?H=i.TEXTURE0+ct-1:H=bt);let D=yt[H];D===void 0&&(D={type:void 0,texture:void 0},yt[H]=D),(D.type!==A||D.texture!==k)&&(bt!==H&&(i.activeTexture(H),bt=H),i.bindTexture(A,k||It[A]),D.type=A,D.texture=k)}function Z(){let A=yt[bt];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function I(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function m(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function b(A){ae.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),ae.copy(A))}function w(A){rt.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),rt.copy(A))}function R(A,k){let H=c.get(k);H===void 0&&(H=new WeakMap,c.set(k,H));let D=H.get(A);D===void 0&&(D=i.getUniformBlockIndex(k,A.name),H.set(A,D))}function V(A,k){let D=c.get(k).get(A);l.get(k)!==D&&(i.uniformBlockBinding(k,D,A.__bindingPointIndex),l.set(k,D))}function G(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},bt=null,yt={},u={},d=new WeakMap,f=[],x=null,y=!1,g=null,p=null,L=null,T=null,M=null,W=null,O=null,F=new se(0,0,0),B=0,C=!1,S=null,z=null,tt=null,J=null,et=null,ae.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:zt,bindFramebuffer:Gt,drawBuffers:Ht,useProgram:le,setBlending:U,setMaterial:Dt,setFlipSided:ft,setCullFace:Rt,setLineWidth:vt,setPolygonOffset:kt,setScissorTest:Ct,activeTexture:P,bindTexture:v,unbindTexture:Z,compressedTexImage2D:it,compressedTexImage3D:at,texImage2D:m,texImage3D:_,updateUBOMapping:R,uniformBlockBinding:V,texStorage2D:Qt,texStorage3D:I,texSubImage2D:ot,texSubImage3D:Ut,compressedTexSubImage2D:Et,compressedTexSubImage3D:Pt,scissor:b,viewport:w,reset:G}}function Gh(i,t,e,n){let s=t_(n);switch(e){case ru:return i*t;case au:return i*t;case lu:return i*t*2;case cu:return i*t/s.components*s.byteLength;case hc:return i*t/s.components*s.byteLength;case hu:return i*t*2/s.components*s.byteLength;case uc:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case dc:return i*t*4/s.components*s.byteLength;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case $a:case ja:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uu:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t_(i){switch(i){case di:case nu:return{byteLength:1,components:1};case _r:case iu:case Ur:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case Zi:case ac:case ci:return{byteLength:4,components:1};case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function e_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,v){return f?new OffscreenCanvas(P,v):go("canvas")}function y(P,v,Z){let it=1,at=Ct(P);if((at.width>Z||at.height>Z)&&(it=Z/Math.max(at.width,at.height)),it<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let ot=Math.floor(it*at.width),Ut=Math.floor(it*at.height);u===void 0&&(u=x(ot,Ut));let Et=v?x(ot,Ut):u;return Et.width=ot,Et.height=Ut,Et.getContext("2d").drawImage(P,0,0,ot,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+ot+"x"+Ut+")."),Et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,v,Z,it,at=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot=v;if(v===i.RED&&(Z===i.FLOAT&&(ot=i.R32F),Z===i.HALF_FLOAT&&(ot=i.R16F),Z===i.UNSIGNED_BYTE&&(ot=i.R8)),v===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.R8UI),Z===i.UNSIGNED_SHORT&&(ot=i.R16UI),Z===i.UNSIGNED_INT&&(ot=i.R32UI),Z===i.BYTE&&(ot=i.R8I),Z===i.SHORT&&(ot=i.R16I),Z===i.INT&&(ot=i.R32I)),v===i.RG&&(Z===i.FLOAT&&(ot=i.RG32F),Z===i.HALF_FLOAT&&(ot=i.RG16F),Z===i.UNSIGNED_BYTE&&(ot=i.RG8)),v===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Z===i.UNSIGNED_INT&&(ot=i.RG32UI),Z===i.BYTE&&(ot=i.RG8I),Z===i.SHORT&&(ot=i.RG16I),Z===i.INT&&(ot=i.RG32I)),v===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Z===i.UNSIGNED_INT&&(ot=i.RGB32UI),Z===i.BYTE&&(ot=i.RGB8I),Z===i.SHORT&&(ot=i.RGB16I),Z===i.INT&&(ot=i.RGB32I)),v===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Z===i.BYTE&&(ot=i.RGBA8I),Z===i.SHORT&&(ot=i.RGBA16I),Z===i.INT&&(ot=i.RGBA32I)),v===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),v===i.RGBA){let Ut=at?Vo:ce.getTransfer(it);Z===i.FLOAT&&(ot=i.RGBA32F),Z===i.HALF_FLOAT&&(ot=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ot=Ut===me?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function M(P,v){let Z;return P?v===null||v===Zi||v===Ds?Z=i.DEPTH24_STENCIL8:v===ci?Z=i.DEPTH32F_STENCIL8:v===_r&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zi||v===Ds?Z=i.DEPTH_COMPONENT24:v===ci?Z=i.DEPTH_COMPONENT32F:v===_r&&(Z=i.DEPTH_COMPONENT16),Z}function W(P,v){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vn&&P.minFilter!==Jn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function O(P){let v=P.target;v.removeEventListener("dispose",O),B(v),v.isVideoTexture&&h.delete(v)}function F(P){let v=P.target;v.removeEventListener("dispose",F),S(v)}function B(P){let v=n.get(P);if(v.__webglInit===void 0)return;let Z=P.source,it=d.get(Z);if(it){let at=it[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&C(P),Object.keys(it).length===0&&d.delete(Z)}n.remove(P)}function C(P){let v=n.get(P);i.deleteTexture(v.__webglTexture);let Z=P.source,it=d.get(Z);delete it[v.__cacheKey],o.memory.textures--}function S(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let at=0;at<v.__webglFramebuffer[it].length;at++)i.deleteFramebuffer(v.__webglFramebuffer[it][at]);else i.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)i.deleteFramebuffer(v.__webglFramebuffer[it]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=P.textures;for(let it=0,at=Z.length;it<at;it++){let ot=n.get(Z[it]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(Z[it])}n.remove(P)}let z=0;function tt(){z=0}function J(){let P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function et(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function ct(P,v){let Z=n.get(P);if(P.isVideoTexture&&vt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){let it=P.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Z,P,v);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+v)}function Q(P,v){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){rt(Z,P,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+v)}function pt(P,v){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){rt(Z,P,v);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+v)}function nt(P,v){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){mt(Z,P,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+v)}let bt={[gr]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},yt={[Vn]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},Lt={[Vd]:i.NEVER,[Zd]:i.ALWAYS,[Gd]:i.LESS,[fu]:i.LEQUAL,[Wd]:i.EQUAL,[Yd]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Xt(P,v){if(v.type===ci&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Jn||v.magFilter===sa||v.magFilter===Fr||v.magFilter===Yi||v.minFilter===Jn||v.minFilter===sa||v.minFilter===Fr||v.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,bt[v.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,bt[v.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,bt[v.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,yt[v.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Vn||v.minFilter!==Fr&&v.minFilter!==Yi||v.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(P,v){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",O));let it=v.source,at=d.get(it);at===void 0&&(at={},d.set(it,at));let ot=et(v);if(ot!==P.__cacheKey){at[ot]===void 0&&(at[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),at[ot].usedTimes++;let Ut=at[P.__cacheKey];Ut!==void 0&&(at[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&C(v)),P.__cacheKey=ot,P.__webglTexture=at[ot].texture}return Z}function rt(P,v,Z){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);let at=ae(P,v),ot=v.source;e.bindTexture(it,P.__webglTexture,i.TEXTURE0+Z);let Ut=n.get(ot);if(ot.version!==Ut.__version||at===!0){e.activeTexture(i.TEXTURE0+Z);let Et=ce.getPrimaries(ce.workingColorSpace),Pt=v.colorSpace===Ci?null:ce.getPrimaries(v.colorSpace),Qt=v.colorSpace===Ci||Et===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let I=y(v.image,!1,s.maxTextureSize);I=kt(v,I);let m=r.convert(v.format,v.colorSpace),_=r.convert(v.type),b=T(v.internalFormat,m,_,v.colorSpace,v.isVideoTexture);Xt(it,v);let w,R=v.mipmaps,V=v.isVideoTexture!==!0,G=Ut.__version===void 0||at===!0,A=ot.dataReady,k=W(v,I);if(v.isDepthTexture)b=M(v.format===Us,v.type),G&&(V?e.texStorage2D(i.TEXTURE_2D,1,b,I.width,I.height):e.texImage2D(i.TEXTURE_2D,0,b,I.width,I.height,0,m,_,null));else if(v.isDataTexture)if(R.length>0){V&&G&&e.texStorage2D(i.TEXTURE_2D,k,b,R[0].width,R[0].height);for(let H=0,D=R.length;H<D;H++)w=R[H],V?A&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,w.width,w.height,m,_,w.data):e.texImage2D(i.TEXTURE_2D,H,b,w.width,w.height,0,m,_,w.data);v.generateMipmaps=!1}else V?(G&&e.texStorage2D(i.TEXTURE_2D,k,b,I.width,I.height),A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,m,_,I.data)):e.texImage2D(i.TEXTURE_2D,0,b,I.width,I.height,0,m,_,I.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&G&&e.texStorage3D(i.TEXTURE_2D_ARRAY,k,b,R[0].width,R[0].height,I.depth);for(let H=0,D=R.length;H<D;H++)if(w=R[H],v.format!==Hn)if(m!==null)if(V){if(A)if(v.layerUpdates.size>0){let X=Gh(w.width,w.height,v.format,v.type);for(let $ of v.layerUpdates){let _t=w.data.subarray($*X/w.data.BYTES_PER_ELEMENT,($+1)*X/w.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,$,w.width,w.height,1,m,_t)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,w.width,w.height,I.depth,m,w.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,b,w.width,w.height,I.depth,0,w.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?A&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,w.width,w.height,I.depth,m,_,w.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,b,w.width,w.height,I.depth,0,m,_,w.data)}else{V&&G&&e.texStorage2D(i.TEXTURE_2D,k,b,R[0].width,R[0].height);for(let H=0,D=R.length;H<D;H++)w=R[H],v.format!==Hn?m!==null?V?A&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,w.width,w.height,m,w.data):e.compressedTexImage2D(i.TEXTURE_2D,H,b,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?A&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,w.width,w.height,m,_,w.data):e.texImage2D(i.TEXTURE_2D,H,b,w.width,w.height,0,m,_,w.data)}else if(v.isDataArrayTexture)if(V){if(G&&e.texStorage3D(i.TEXTURE_2D_ARRAY,k,b,I.width,I.height,I.depth),A)if(v.layerUpdates.size>0){let H=Gh(I.width,I.height,v.format,v.type);for(let D of v.layerUpdates){let X=I.data.subarray(D*H/I.data.BYTES_PER_ELEMENT,(D+1)*H/I.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,I.width,I.height,1,m,_,X)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,m,_,I.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,b,I.width,I.height,I.depth,0,m,_,I.data);else if(v.isData3DTexture)V?(G&&e.texStorage3D(i.TEXTURE_3D,k,b,I.width,I.height,I.depth),A&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,m,_,I.data)):e.texImage3D(i.TEXTURE_3D,0,b,I.width,I.height,I.depth,0,m,_,I.data);else if(v.isFramebufferTexture){if(G)if(V)e.texStorage2D(i.TEXTURE_2D,k,b,I.width,I.height);else{let H=I.width,D=I.height;for(let X=0;X<k;X++)e.texImage2D(i.TEXTURE_2D,X,b,H,D,0,m,_,null),H>>=1,D>>=1}}else if(R.length>0){if(V&&G){let H=Ct(R[0]);e.texStorage2D(i.TEXTURE_2D,k,b,H.width,H.height)}for(let H=0,D=R.length;H<D;H++)w=R[H],V?A&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,m,_,w):e.texImage2D(i.TEXTURE_2D,H,b,m,_,w);v.generateMipmaps=!1}else if(V){if(G){let H=Ct(I);e.texStorage2D(i.TEXTURE_2D,k,b,H.width,H.height)}A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,m,_,I)}else e.texImage2D(i.TEXTURE_2D,0,b,m,_,I);g(v)&&p(it),Ut.__version=ot.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function mt(P,v,Z){if(v.image.length!==6)return;let it=ae(P,v),at=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Z);let ot=n.get(at);if(at.version!==ot.__version||it===!0){e.activeTexture(i.TEXTURE0+Z);let Ut=ce.getPrimaries(ce.workingColorSpace),Et=v.colorSpace===Ci?null:ce.getPrimaries(v.colorSpace),Pt=v.colorSpace===Ci||Ut===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Qt=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,m=[];for(let D=0;D<6;D++)!Qt&&!I?m[D]=y(v.image[D],!0,s.maxCubemapSize):m[D]=I?v.image[D].image:v.image[D],m[D]=kt(v,m[D]);let _=m[0],b=r.convert(v.format,v.colorSpace),w=r.convert(v.type),R=T(v.internalFormat,b,w,v.colorSpace),V=v.isVideoTexture!==!0,G=ot.__version===void 0||it===!0,A=at.dataReady,k=W(v,_);Xt(i.TEXTURE_CUBE_MAP,v);let H;if(Qt){V&&G&&e.texStorage2D(i.TEXTURE_CUBE_MAP,k,R,_.width,_.height);for(let D=0;D<6;D++){H=m[D].mipmaps;for(let X=0;X<H.length;X++){let $=H[X];v.format!==Hn?b!==null?V?A&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X,0,0,$.width,$.height,b,$.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X,R,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X,0,0,$.width,$.height,b,w,$.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X,R,$.width,$.height,0,b,w,$.data)}}}else{if(H=v.mipmaps,V&&G){H.length>0&&k++;let D=Ct(m[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,k,R,D.width,D.height)}for(let D=0;D<6;D++)if(I){V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,m[D].width,m[D].height,b,w,m[D].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,R,m[D].width,m[D].height,0,b,w,m[D].data);for(let X=0;X<H.length;X++){let _t=H[X].image[D].image;V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X+1,0,0,_t.width,_t.height,b,w,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X+1,R,_t.width,_t.height,0,b,w,_t.data)}}else{V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,b,w,m[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,R,b,w,m[D]);for(let X=0;X<H.length;X++){let $=H[X];V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X+1,0,0,b,w,$.image[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X+1,R,b,w,$.image[D])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),ot.__version=at.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function It(P,v,Z,it,at,ot){let Ut=r.convert(Z.format,Z.colorSpace),Et=r.convert(Z.type),Pt=T(Z.internalFormat,Ut,Et,Z.colorSpace),Qt=n.get(v),I=n.get(Z);if(I.__renderTarget=v,!Qt.__hasExternalTextures){let m=Math.max(1,v.width>>ot),_=Math.max(1,v.height>>ot);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,ot,Pt,m,_,v.depth,0,Ut,Et,null):e.texImage2D(at,ot,Pt,m,_,0,Ut,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,at,I.__webglTexture,0,ft(v)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,at,I.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(P,v,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),v.depthBuffer){let it=v.depthTexture,at=it&&it.isDepthTexture?it.type:null,ot=M(v.stencilBuffer,at),Ut=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=ft(v);Rt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,ot,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ot,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ot,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,P)}else{let it=v.textures;for(let at=0;at<it.length;at++){let ot=it[at],Ut=r.convert(ot.format,ot.colorSpace),Et=r.convert(ot.type),Pt=T(ot.internalFormat,Ut,Et,ot.colorSpace),Qt=ft(v);Z&&Rt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Pt,v.width,v.height):Rt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,Pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(P,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(v.depthTexture);it.__renderTarget=v,(!it.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ct(v.depthTexture,0);let at=it.__webglTexture,ot=ft(v);if(v.depthTexture.format===As)Rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(v.depthTexture.format===Us)Rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Gt(P){let v=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let it=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){let at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",at)};it.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=it}if(P.depthTexture&&!v.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");zt(v.__webglFramebuffer,P)}else if(Z){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=i.createRenderbuffer(),Mt(v.__webglDepthbuffer[it],P,!1);else{let at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Mt(v.__webglDepthbuffer,P,!1);else{let it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(P,v,Z){let it=n.get(P);v!==void 0&&It(it.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Gt(P)}function le(P){let v=P.texture,Z=n.get(P),it=n.get(v);P.addEventListener("dispose",F);let at=P.textures,ot=P.isWebGLCubeRenderTarget===!0,Ut=at.length>1;if(Ut||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,o.memory.textures++),ot){Z.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[Et]=[];for(let Pt=0;Pt<v.mipmaps.length;Pt++)Z.__webglFramebuffer[Et][Pt]=i.createFramebuffer()}else Z.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Et=0;Et<v.mipmaps.length;Et++)Z.__webglFramebuffer[Et]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Et=0,Pt=at.length;Et<Pt;Et++){let Qt=n.get(at[Et]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Rt(P)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Et=0;Et<at.length;Et++){let Pt=at[Et];Z.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Et]);let Qt=r.convert(Pt.format,Pt.colorSpace),I=r.convert(Pt.type),m=T(Pt.internalFormat,Qt,I,Pt.colorSpace,P.isXRRenderTarget===!0),_=ft(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,_,m,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,v);for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)It(Z.__webglFramebuffer[Et][Pt],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Pt);else It(Z.__webglFramebuffer[Et],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Et=0,Pt=at.length;Et<Pt;Et++){let Qt=at[Et],I=n.get(Qt);e.bindTexture(i.TEXTURE_2D,I.__webglTexture),Xt(i.TEXTURE_2D,Qt),It(Z.__webglFramebuffer,P,Qt,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),g(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,it.__webglTexture),Xt(Et,v),v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)It(Z.__webglFramebuffer[Pt],P,v,i.COLOR_ATTACHMENT0,Et,Pt);else It(Z.__webglFramebuffer,P,v,i.COLOR_ATTACHMENT0,Et,0);g(v)&&p(Et),e.unbindTexture()}P.depthBuffer&&Gt(P)}function st(P){let v=P.textures;for(let Z=0,it=v.length;Z<it;Z++){let at=v[Z];if(g(at)){let ot=L(P),Ut=n.get(at).__webglTexture;e.bindTexture(ot,Ut),p(ot),e.unbindTexture()}}}let gt=[],U=[];function Dt(P){if(P.samples>0){if(Rt(P)===!1){let v=P.textures,Z=P.width,it=P.height,at=i.COLOR_BUFFER_BIT,ot=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(P),Et=v.length>1;if(Et)for(let Pt=0;Pt<v.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<v.length;Pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);let Qt=n.get(v[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,Z,it,0,0,Z,it,at,i.NEAREST),l===!0&&(gt.length=0,U.length=0,gt.push(i.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gt.push(ot),U.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Pt=0;Pt<v.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);let Qt=n.get(v[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let v=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ft(P){return Math.min(s.maxSamples,P.samples)}function Rt(P){let v=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(P){let v=o.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function kt(P,v){let Z=P.colorSpace,it=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Ws&&Z!==Ci&&(ce.getTransfer(Z)===me?(it!==Hn||at!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),v}function Ct(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=tt,this.setTexture2D=ct,this.setTexture2DArray=Q,this.setTexture3D=pt,this.setTextureCube=nt,this.rebindTextures=Ht,this.setupRenderTarget=le,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Rt}function n_(i,t){function e(n,s=Ci){let r,o=ce.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===Ur)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===ou)return i.RGB;if(n===Hn)return i.RGBA;if(n===au)return i.LUMINANCE;if(n===lu)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===cu)return i.RED;if(n===hc)return i.RED_INTEGER;if(n===hu)return i.RG;if(n===uc)return i.RG_INTEGER;if(n===dc)return i.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ja||n===ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===tl)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===gl||n===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===xl||n===yl||n===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Nl=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},i_={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new jn({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new So(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fl=class extends fi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,y=new Ol,g=e.getContextAttributes(),p=null,L=null,T=[],M=[],W=new dt,O=null,F=new nn;F.viewport=new ge;let B=new nn;B.viewport=new ge;let C=[F,B],S=new Nl,z=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let mt=T[rt];return mt===void 0&&(mt=new dr,T[rt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(rt){let mt=T[rt];return mt===void 0&&(mt=new dr,T[rt]=mt),mt.getGripSpace()},this.getHand=function(rt){let mt=T[rt];return mt===void 0&&(mt=new dr,T[rt]=mt),mt.getHandSpace()};function J(rt){let mt=M.indexOf(rt.inputSource);if(mt===-1)return;let It=T[mt];It!==void 0&&(It.update(rt.inputSource,rt.frame,c||o),It.dispatchEvent({type:rt.type,data:rt.inputSource}))}function et(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",ct);for(let rt=0;rt<T.length;rt++){let mt=M[rt];mt!==null&&(M[rt]=null,T[rt].disconnect(mt))}z=null,tt=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,L=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",et),s.addEventListener("inputsourceschange",ct),g.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(W),s.renderState.layers===void 0){let mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),L=new pi(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:di,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let mt=null,It=null,Mt=null;g.depth&&(Mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=g.stencil?Us:As,It=g.stencil?Ds:Zi);let zt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),L=new pi(d.textureWidth,d.textureHeight,{format:Hn,type:di,depthTexture:new wo(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ct(rt){for(let mt=0;mt<rt.removed.length;mt++){let It=rt.removed[mt],Mt=M.indexOf(It);Mt>=0&&(M[Mt]=null,T[Mt].disconnect(It))}for(let mt=0;mt<rt.added.length;mt++){let It=rt.added[mt],Mt=M.indexOf(It);if(Mt===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=M.length){M.push(It),Mt=Gt;break}else if(M[Gt]===null){M[Gt]=It,Mt=Gt;break}if(Mt===-1)break}let zt=T[Mt];zt&&zt.connect(It)}}let Q=new N,pt=new N;function nt(rt,mt,It){Q.setFromMatrixPosition(mt.matrixWorld),pt.setFromMatrixPosition(It.matrixWorld);let Mt=Q.distanceTo(pt),zt=mt.projectionMatrix.elements,Gt=It.projectionMatrix.elements,Ht=zt[14]/(zt[10]-1),le=zt[14]/(zt[10]+1),st=(zt[9]+1)/zt[5],gt=(zt[9]-1)/zt[5],U=(zt[8]-1)/zt[0],Dt=(Gt[8]+1)/Gt[0],ft=Ht*U,Rt=Ht*Dt,vt=Mt/(-U+Dt),kt=vt*-U;if(mt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(kt),rt.translateZ(vt),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),zt[10]===-1)rt.projectionMatrix.copy(mt.projectionMatrix),rt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let Ct=Ht+vt,P=le+vt,v=ft-kt,Z=Rt+(Mt-kt),it=st*le/P*Ct,at=gt*le/P*Ct;rt.projectionMatrix.makePerspective(v,Z,it,at,Ct,P),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function bt(rt,mt){mt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(mt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let mt=rt.near,It=rt.far;y.texture!==null&&(y.depthNear>0&&(mt=y.depthNear),y.depthFar>0&&(It=y.depthFar)),S.near=B.near=F.near=mt,S.far=B.far=F.far=It,(z!==S.near||tt!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),z=S.near,tt=S.far),F.layers.mask=rt.layers.mask|2,B.layers.mask=rt.layers.mask|4,S.layers.mask=F.layers.mask|B.layers.mask;let Mt=rt.parent,zt=S.cameras;bt(S,Mt);for(let Gt=0;Gt<zt.length;Gt++)bt(zt[Gt],Mt);zt.length===2?nt(S,F,B):S.projectionMatrix.copy(F.projectionMatrix),yt(rt,S,Mt)};function yt(rt,mt,It){It===null?rt.matrix.copy(mt.matrixWorld):(rt.matrix.copy(It.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(mt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(mt.projectionMatrix),rt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=xr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(rt){l=rt,d!==null&&(d.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Lt=null;function Xt(rt,mt){if(h=mt.getViewerPose(c||o),x=mt,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(L,f.framebuffer),t.setRenderTarget(L));let Mt=!1;It.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let Gt=0;Gt<It.length;Gt++){let Ht=It[Gt],le=null;if(f!==null)le=f.getViewport(Ht);else{let gt=u.getViewSubImage(d,Ht);le=gt.viewport,Gt===0&&(t.setRenderTargetTextures(L,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(L))}let st=C[Gt];st===void 0&&(st=new nn,st.layers.enable(Gt),st.viewport=new ge,C[Gt]=st),st.matrix.fromArray(Ht.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Ht.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(le.x,le.y,le.width,le.height),Gt===0&&(S.matrix.copy(st.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(st)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Gt=u.getDepthInformation(It[0]);Gt&&Gt.isValid&&Gt.texture&&y.init(t,Gt,s.renderState)}}for(let It=0;It<T.length;It++){let Mt=M[It],zt=T[It];Mt!==null&&zt!==void 0&&zt.update(Mt,mt,c||o)}Lt&&Lt(rt,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),x=null}let ae=new xu;ae.setAnimationLoop(Xt),this.setAnimationLoop=function(rt){Lt=rt},this.dispose=function(){}}},Vi=new In,o_=new Ce;function a_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,_u(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,L,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,L,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let L=t.get(p),T=L.envMap,M=L.envMapRotation;T&&(g.envMap.value=T,Vi.copy(M),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),g.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(Vi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,L,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*L,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,L){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let L=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(L,T){let M=T.program;n.uniformBlockBinding(L,M)}function c(L,T){let M=s[L.id];M===void 0&&(x(L),M=h(L),s[L.id]=M,L.addEventListener("dispose",g));let W=T.program;n.updateUBOMapping(L,W);let O=t.render.frame;r[L.id]!==O&&(d(L),r[L.id]=O)}function h(L){let T=u();L.__bindingPointIndex=T;let M=i.createBuffer(),W=L.__size,O=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,W,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function u(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(L){let T=s[L.id],M=L.uniforms,W=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let O=0,F=M.length;O<F;O++){let B=Array.isArray(M[O])?M[O]:[M[O]];for(let C=0,S=B.length;C<S;C++){let z=B[C];if(f(z,O,C,W)===!0){let tt=z.__offset,J=Array.isArray(z.value)?z.value:[z.value],et=0;for(let ct=0;ct<J.length;ct++){let Q=J[ct],pt=y(Q);typeof Q=="number"||typeof Q=="boolean"?(z.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,tt+et,z.__data)):Q.isMatrix3?(z.__data[0]=Q.elements[0],z.__data[1]=Q.elements[1],z.__data[2]=Q.elements[2],z.__data[3]=0,z.__data[4]=Q.elements[3],z.__data[5]=Q.elements[4],z.__data[6]=Q.elements[5],z.__data[7]=0,z.__data[8]=Q.elements[6],z.__data[9]=Q.elements[7],z.__data[10]=Q.elements[8],z.__data[11]=0):(Q.toArray(z.__data,et),et+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(L,T,M,W){let O=L.value,F=T+"_"+M;if(W[F]===void 0)return typeof O=="number"||typeof O=="boolean"?W[F]=O:W[F]=O.clone(),!0;{let B=W[F];if(typeof O=="number"||typeof O=="boolean"){if(B!==O)return W[F]=O,!0}else if(B.equals(O)===!1)return B.copy(O),!0}return!1}function x(L){let T=L.uniforms,M=0,W=16;for(let F=0,B=T.length;F<B;F++){let C=Array.isArray(T[F])?T[F]:[T[F]];for(let S=0,z=C.length;S<z;S++){let tt=C[S],J=Array.isArray(tt.value)?tt.value:[tt.value];for(let et=0,ct=J.length;et<ct;et++){let Q=J[et],pt=y(Q),nt=M%W,bt=nt%pt.boundary,yt=nt+bt;M+=bt,yt!==0&&W-yt<pt.storage&&(M+=W-yt),tt.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=M,M+=pt.storage}}}let O=M%W;return O>0&&(M+=W-O),L.__size=M,L.__cache={},this}function y(L){let T={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(T.boundary=4,T.storage=4):L.isVector2?(T.boundary=8,T.storage=8):L.isVector3||L.isColor?(T.boundary=16,T.storage=12):L.isVector4?(T.boundary=16,T.storage=16):L.isMatrix3?(T.boundary=48,T.storage=48):L.isMatrix4?(T.boundary=64,T.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),T}function g(L){let T=L.target;T.removeEventListener("dispose",g);let M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let L in s)i.deleteBuffer(s[L]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var To=class{constructor(t={}){let{canvas:e=df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,L=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Ii,this.toneMappingExposure=1;let M=this,W=!1,O=0,F=0,B=null,C=-1,S=null,z=new ge,tt=new ge,J=null,et=new se(0),ct=0,Q=e.width,pt=e.height,nt=1,bt=null,yt=null,Lt=new ge(0,0,Q,pt),Xt=new ge(0,0,Q,pt),ae=!1,rt=new Mr,mt=!1,It=!1,Mt=new Ce,zt=new Ce,Gt=new N,Ht=new ge,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function gt(){return B===null?nt:1}let U=n;function Dt(E,q){return e.getContext(E,q)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ic}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",$,!1),U===null){let q="webgl2";if(U=Dt(q,E),U===null)throw Dt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ft,Rt,vt,kt,Ct,P,v,Z,it,at,ot,Ut,Et,Pt,Qt,I,m,_,b,w,R,V,G,A;function k(){ft=new Eg(U),ft.init(),V=new n_(U,ft),Rt=new xg(U,ft,t,V),vt=new Q0(U,ft),Rt.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),kt=new Ag(U),Ct=new k0,P=new e_(U,ft,vt,Ct,Rt,V,kt),v=new vg(M),Z=new Sg(M),it=new Uf(U),G=new gg(U,it),at=new wg(U,it,kt,G),ot=new Cg(U,at,it,kt),b=new Rg(U,Rt,P),I=new yg(Ct),Ut=new z0(M,v,Z,ft,Rt,G,I),Et=new a_(M,Ct),Pt=new V0,Qt=new Z0(ft),_=new mg(M,v,Z,vt,ot,f,l),m=new j0(M,ot,Rt),A=new l_(U,kt,Rt,vt),w=new _g(U,ft,kt),R=new Tg(U,ft,kt),kt.programs=Ut.programs,M.capabilities=Rt,M.extensions=ft,M.properties=Ct,M.renderLists=Pt,M.shadowMap=m,M.state=vt,M.info=kt}k();let H=new Fl(M,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(Q,pt,!1))},this.getSize=function(E){return E.set(Q,pt)},this.setSize=function(E,q,j=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,pt=q,e.width=Math.floor(E*nt),e.height=Math.floor(q*nt),j===!0&&(e.style.width=E+"px",e.style.height=q+"px"),this.setViewport(0,0,E,q)},this.getDrawingBufferSize=function(E){return E.set(Q*nt,pt*nt).floor()},this.setDrawingBufferSize=function(E,q,j){Q=E,pt=q,nt=j,e.width=Math.floor(E*j),e.height=Math.floor(q*j),this.setViewport(0,0,E,q)},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(Lt)},this.setViewport=function(E,q,j,K){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,q,j,K),vt.viewport(z.copy(Lt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,q,j,K){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,q,j,K),vt.scissor(tt.copy(Xt).multiplyScalar(nt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){vt.setScissorTest(ae=E)},this.setOpaqueSort=function(E){bt=E},this.setTransparentSort=function(E){yt=E},this.getClearColor=function(E){return E.copy(_.getClearColor())},this.setClearColor=function(){_.setClearColor.apply(_,arguments)},this.getClearAlpha=function(){return _.getClearAlpha()},this.setClearAlpha=function(){_.setClearAlpha.apply(_,arguments)},this.clear=function(E=!0,q=!0,j=!0){let K=0;if(E){let Y=!1;if(B!==null){let xt=B.texture.format;Y=xt===dc||xt===uc||xt===hc}if(Y){let xt=B.texture.type,At=xt===di||xt===Zi||xt===_r||xt===Ds||xt===lc||xt===cc,Nt=_.getClearColor(),Ot=_.getClearAlpha(),qt=Nt.r,Zt=Nt.g,Ft=Nt.b;At?(x[0]=qt,x[1]=Zt,x[2]=Ft,x[3]=Ot,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=qt,y[1]=Zt,y[2]=Ft,y[3]=Ot,U.clearBufferiv(U.COLOR,0,y))}else K|=U.COLOR_BUFFER_BIT}q&&(K|=U.DEPTH_BUFFER_BIT),j&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",$,!1),Pt.dispose(),Qt.dispose(),Ct.dispose(),v.dispose(),Z.dispose(),ot.dispose(),G.dispose(),A.dispose(),Ut.dispose(),H.dispose(),H.removeEventListener("sessionstart",Pe),H.removeEventListener("sessionend",Fe),Ae.stop()};function D(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;let E=kt.autoReset,q=m.enabled,j=m.autoUpdate,K=m.needsUpdate,Y=m.type;k(),kt.autoReset=E,m.enabled=q,m.autoUpdate=j,m.needsUpdate=K,m.type=Y}function $(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _t(E){let q=E.target;q.removeEventListener("dispose",_t),wt(q)}function wt(E){Vt(E),Ct.remove(E)}function Vt(E){let q=Ct.get(E).programs;q!==void 0&&(q.forEach(function(j){Ut.releaseProgram(j)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,q,j,K,Y,xt){q===null&&(q=le);let At=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=ea(E,q,j,K,Y);vt.setMaterial(K,At);let Ot=j.index,qt=1;if(K.wireframe===!0){if(Ot=at.getWireframeAttribute(j),Ot===void 0)return;qt=2}let Zt=j.drawRange,Ft=j.attributes.position,he=Zt.start*qt,Me=(Zt.start+Zt.count)*qt;xt!==null&&(he=Math.max(he,xt.start*qt),Me=Math.min(Me,(xt.start+xt.count)*qt)),Ot!==null?(he=Math.max(he,0),Me=Math.min(Me,Ot.count)):Ft!=null&&(he=Math.max(he,0),Me=Math.min(Me,Ft.count));let Ee=Me-he;if(Ee<0||Ee===1/0)return;G.setup(Y,K,Nt,j,Ot);let mn,fe=w;if(Ot!==null&&(mn=it.get(Ot),fe=R,fe.setIndex(mn)),Y.isMesh)K.wireframe===!0?(vt.setLineWidth(K.wireframeLinewidth*gt()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(Y.isLine){let Bt=K.linewidth;Bt===void 0&&(Bt=1),vt.setLineWidth(Bt*gt()),Y.isLineSegments?fe.setMode(U.LINES):Y.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else Y.isPoints?fe.setMode(U.POINTS):Y.isSprite&&fe.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)fe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))fe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Bt=Y._multiDrawStarts,ii=Y._multiDrawCounts,pe=Y._multiDrawCount,Un=Ot?it.get(Ot).bytesPerElement:1,ls=Ct.get(K).currentProgram.getUniforms();for(let vn=0;vn<pe;vn++)ls.setValue(U,"_gl_DrawID",vn),fe.render(Bt[vn]/Un,ii[vn])}else if(Y.isInstancedMesh)fe.renderInstances(he,Ee,Y.count);else if(j.isInstancedBufferGeometry){let Bt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ii=Math.min(j.instanceCount,Bt);fe.renderInstances(he,Ee,ii)}else fe.render(he,Ee)};function Tt(E,q,j){E.transparent===!0&&E.side===Cn&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Qe(E,q,j),E.side=Li,E.needsUpdate=!0,Qe(E,q,j),E.side=Cn):Qe(E,q,j)}this.compile=function(E,q,j=null){j===null&&(j=E),p=Qt.get(j),p.init(q),T.push(p),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),E!==j&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();let K=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let xt=Y.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){let Nt=xt[At];Tt(Nt,j,Y),K.add(Nt)}else Tt(xt,j,Y),K.add(xt)}),T.pop(),p=null,K},this.compileAsync=function(E,q,j=null){let K=this.compile(E,q,j);return new Promise(Y=>{function xt(){if(K.forEach(function(At){Ct.get(At).currentProgram.isReady()&&K.delete(At)}),K.size===0){Y(E);return}setTimeout(xt,10)}ft.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let oe=null;function ve(E){oe&&oe(E)}function Pe(){Ae.stop()}function Fe(){Ae.start()}let Ae=new xu;Ae.setAnimationLoop(ve),typeof self!="undefined"&&Ae.setContext(self),this.setAnimationLoop=function(E){oe=E,H.setAnimationLoop(E),E===null?Ae.stop():Ae.start()},H.addEventListener("sessionstart",Pe),H.addEventListener("sessionend",Fe),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(q),q=H.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,q,B),p=Qt.get(E,T.length),p.init(q),T.push(p),zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),rt.setFromProjectionMatrix(zt),It=this.localClippingEnabled,mt=I.init(this.clippingPlanes,It),g=Pt.get(E,L.length),g.init(),L.push(g),H.enabled===!0&&H.isPresenting===!0){let xt=M.xr.getDepthSensingMesh();xt!==null&&je(xt,q,-1/0,M.sortObjects)}je(E,q,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(bt,yt),st=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,st&&_.addToRenderList(g,E),this.info.render.frame++,mt===!0&&I.beginShadows();let j=p.state.shadowsArray;m.render(j,E,q),mt===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,Y=g.transmissive;if(p.setupLights(),q.isArrayCamera){let xt=q.cameras;if(Y.length>0)for(let At=0,Nt=xt.length;At<Nt;At++){let Ot=xt[At];fn(K,Y,E,Ot)}st&&_.render(E);for(let At=0,Nt=xt.length;At<Nt;At++){let Ot=xt[At];Be(g,E,Ot,Ot.viewport)}}else Y.length>0&&fn(K,Y,E,q),st&&_.render(E),Be(g,E,q);B!==null&&(P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B)),E.isScene===!0&&E.onAfterRender(M,E,q),G.resetDefaultState(),C=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],mt===!0&&I.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,L.pop(),L.length>0?g=L[L.length-1]:g=null};function je(E,q,j,K){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||rt.intersectsSprite(E)){K&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(zt);let At=ot.update(E),Nt=E.material;Nt.visible&&g.push(E,At,Nt,j,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||rt.intersectsObject(E))){let At=ot.update(E),Nt=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ht.copy(At.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(zt)),Array.isArray(Nt)){let Ot=At.groups;for(let qt=0,Zt=Ot.length;qt<Zt;qt++){let Ft=Ot[qt],he=Nt[Ft.materialIndex];he&&he.visible&&g.push(E,At,he,j,Ht.z,Ft)}}else Nt.visible&&g.push(E,At,Nt,j,Ht.z,null)}}let xt=E.children;for(let At=0,Nt=xt.length;At<Nt;At++)je(xt[At],q,j,K)}function Be(E,q,j,K){let Y=E.opaque,xt=E.transmissive,At=E.transparent;p.setupLightsView(j),mt===!0&&I.setGlobalState(M.clippingPlanes,j),K&&vt.viewport(z.copy(K)),Y.length>0&&Ke(Y,q,j),xt.length>0&&Ke(xt,q,j),At.length>0&&Ke(At,q,j),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function fn(E,q,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new pi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Ur:di,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let xt=p.state.transmissionRenderTarget[K.id],At=K.viewport||z;xt.setSize(At.z,At.w);let Nt=M.getRenderTarget();M.setRenderTarget(xt),M.getClearColor(et),ct=M.getClearAlpha(),ct<1&&M.setClearColor(16777215,.5),M.clear(),st&&_.render(j);let Ot=M.toneMapping;M.toneMapping=Ii;let qt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),mt===!0&&I.setGlobalState(M.clippingPlanes,K),Ke(E,j,K),P.updateMultisampleRenderTarget(xt),P.updateRenderTargetMipmap(xt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ft=0,he=q.length;Ft<he;Ft++){let Me=q[Ft],Ee=Me.object,mn=Me.geometry,fe=Me.material,Bt=Me.group;if(fe.side===Cn&&Ee.layers.test(K.layers)){let ii=fe.side;fe.side=sn,fe.needsUpdate=!0,pn(Ee,j,K,mn,fe,Bt),fe.side=ii,fe.needsUpdate=!0,Zt=!0}}Zt===!0&&(P.updateMultisampleRenderTarget(xt),P.updateRenderTargetMipmap(xt))}M.setRenderTarget(Nt),M.setClearColor(et,ct),qt!==void 0&&(K.viewport=qt),M.toneMapping=Ot}function Ke(E,q,j){let K=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,xt=E.length;Y<xt;Y++){let At=E[Y],Nt=At.object,Ot=At.geometry,qt=K===null?At.material:K,Zt=At.group;Nt.layers.test(j.layers)&&pn(Nt,q,j,Ot,qt,Zt)}}function pn(E,q,j,K,Y,xt){E.onBeforeRender(M,q,j,K,Y,xt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(M,q,j,K,E,xt),Y.transparent===!0&&Y.side===Cn&&Y.forceSinglePass===!1?(Y.side=sn,Y.needsUpdate=!0,M.renderBufferDirect(j,q,K,Y,E,xt),Y.side=Li,Y.needsUpdate=!0,M.renderBufferDirect(j,q,K,Y,E,xt),Y.side=Cn):M.renderBufferDirect(j,q,K,Y,E,xt),E.onAfterRender(M,q,j,K,Y,xt)}function Qe(E,q,j){q.isScene!==!0&&(q=le);let K=Ct.get(E),Y=p.state.lights,xt=p.state.shadowsArray,At=Y.state.version,Nt=Ut.getParameters(E,Y.state,xt,q,j),Ot=Ut.getProgramCacheKey(Nt),qt=K.programs;K.environment=E.isMeshStandardMaterial?q.environment:null,K.fog=q.fog,K.envMap=(E.isMeshStandardMaterial?Z:v).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?q.environmentRotation:E.envMapRotation,qt===void 0&&(E.addEventListener("dispose",_t),qt=new Map,K.programs=qt);let Zt=qt.get(Ot);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===At)return vi(E,Nt),Zt}else Nt.uniforms=Ut.getUniforms(E),E.onBeforeCompile(Nt,M),Zt=Ut.acquireProgram(Nt,Ot),qt.set(Ot,Zt),K.uniforms=Nt.uniforms;let Ft=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=I.uniform),vi(E,Nt),K.needsLights=ia(E),K.lightsStateVersion=At,K.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.directionalShadowMap.value=Y.state.directionalShadowMap,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotShadowMap.value=Y.state.spotShadowMap,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMap.value=Y.state.pointShadowMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function Tn(E){if(E.uniformsList===null){let q=E.currentProgram.getUniforms();E.uniformsList=Cs.seqWithValue(q.seq,E.uniforms)}return E.uniformsList}function vi(E,q){let j=Ct.get(E);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.batchingColor=q.batchingColor,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.instancingMorph=q.instancingMorph,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function ea(E,q,j,K,Y){q.isScene!==!0&&(q=le),P.resetTextureUnits();let xt=q.fog,At=K.isMeshStandardMaterial?q.environment:null,Nt=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ws,Ot=(K.isMeshStandardMaterial?Z:v).get(K.envMap||At),qt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Zt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ft=!!j.morphAttributes.position,he=!!j.morphAttributes.normal,Me=!!j.morphAttributes.color,Ee=Ii;K.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ee=M.toneMapping);let mn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,fe=mn!==void 0?mn.length:0,Bt=Ct.get(K),ii=p.state.lights;if(mt===!0&&(It===!0||E!==S)){let An=E===S&&K.id===C;I.setState(K,E,An)}let pe=!1;K.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ii.state.version||Bt.outputColorSpace!==Nt||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==Ot||K.fog===!0&&Bt.fog!==xt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==I.numPlanes||Bt.numIntersection!==I.numIntersection)||Bt.vertexAlphas!==qt||Bt.vertexTangents!==Zt||Bt.morphTargets!==Ft||Bt.morphNormals!==he||Bt.morphColors!==Me||Bt.toneMapping!==Ee||Bt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Bt.__version=K.version);let Un=Bt.currentProgram;pe===!0&&(Un=Qe(K,q,Y));let ls=!1,vn=!1,er=!1,we=Un.getUniforms(),Zn=Bt.uniforms;if(vt.useProgram(Un.program)&&(ls=!0,vn=!0,er=!0),K.id!==C&&(C=K.id,vn=!0),ls||S!==E){vt.buffers.depth.getReversed()?(Mt.copy(E.projectionMatrix),pf(Mt),mf(Mt),we.setValue(U,"projectionMatrix",Mt)):we.setValue(U,"projectionMatrix",E.projectionMatrix),we.setValue(U,"viewMatrix",E.matrixWorldInverse);let Mi=we.map.cameraPosition;Mi!==void 0&&Mi.setValue(U,Gt.setFromMatrixPosition(E.matrixWorld)),Rt.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&we.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,vn=!0,er=!0)}if(Y.isSkinnedMesh){we.setOptional(U,Y,"bindMatrix"),we.setOptional(U,Y,"bindMatrixInverse");let An=Y.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),we.setValue(U,"boneTexture",An.boneTexture,P))}Y.isBatchedMesh&&(we.setOptional(U,Y,"batchingTexture"),we.setValue(U,"batchingTexture",Y._matricesTexture,P),we.setOptional(U,Y,"batchingIdTexture"),we.setValue(U,"batchingIdTexture",Y._indirectTexture,P),we.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&we.setValue(U,"batchingColorTexture",Y._colorsTexture,P));let nr=j.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&b.update(Y,j,Un),(vn||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,we.setValue(U,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Zn.envMap.value=Ot,Zn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&q.environment!==null&&(Zn.envMapIntensity.value=q.environmentIntensity),vn&&(we.setValue(U,"toneMappingExposure",M.toneMappingExposure),Bt.needsLights&&na(Zn,er),xt&&K.fog===!0&&Et.refreshFogUniforms(Zn,xt),Et.refreshMaterialUniforms(Zn,K,nt,pt,p.state.transmissionRenderTarget[E.id]),Cs.upload(U,Tn(Bt),Zn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Cs.upload(U,Tn(Bt),Zn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&we.setValue(U,"center",Y.center),we.setValue(U,"modelViewMatrix",Y.modelViewMatrix),we.setValue(U,"normalMatrix",Y.normalMatrix),we.setValue(U,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let An=K.uniformsGroups;for(let Mi=0,bi=An.length;Mi<bi;Mi++){let Hc=An[Mi];A.update(Hc,Un),A.bind(Hc,Un)}}return Un}function na(E,q){E.ambientLightColor.needsUpdate=q,E.lightProbe.needsUpdate=q,E.directionalLights.needsUpdate=q,E.directionalLightShadows.needsUpdate=q,E.pointLights.needsUpdate=q,E.pointLightShadows.needsUpdate=q,E.spotLights.needsUpdate=q,E.spotLightShadows.needsUpdate=q,E.rectAreaLights.needsUpdate=q,E.hemisphereLights.needsUpdate=q}function ia(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,q,j){Ct.get(E.texture).__webglTexture=q,Ct.get(E.depthTexture).__webglTexture=j;let K=Ct.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,q){let j=Ct.get(E);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(E,q=0,j=0){B=E,O=q,F=j;let K=!0,Y=null,xt=!1,At=!1;if(E){let Ot=Ct.get(E);if(Ot.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(Ot.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(Ot.__hasExternalTextures)P.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ft=E.depthTexture;if(Ot.__boundDepthTexture!==Ft){if(Ft!==null&&Ct.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}let qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let Zt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Zt[q])?Y=Zt[q][j]:Y=Zt[q],xt=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?Y=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Zt)?Y=Zt[j]:Y=Zt,z.copy(E.viewport),tt.copy(E.scissor),J=E.scissorTest}else z.copy(Lt).multiplyScalar(nt).floor(),tt.copy(Xt).multiplyScalar(nt).floor(),J=ae;if(vt.bindFramebuffer(U.FRAMEBUFFER,Y)&&K&&vt.drawBuffers(E,Y),vt.viewport(z),vt.scissor(tt),vt.setScissorTest(J),xt){let Ot=Ct.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,j)}else if(At){let Ot=Ct.get(E.texture),qt=q||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,j||0,qt)}C=-1},this.readRenderTargetPixels=function(E,q,j,K,Y,xt,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){vt.bindFramebuffer(U.FRAMEBUFFER,Nt);try{let Ot=E.texture,qt=Ot.format,Zt=Ot.type;if(!Rt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=E.width-K&&j>=0&&j<=E.height-Y&&U.readPixels(q,j,K,Y,V.convert(qt),V.convert(Zt),xt)}finally{let Ot=B!==null?Ct.get(B).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,q,j,K,Y,xt,At){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){let Ot=E.texture,qt=Ot.format,Zt=Ot.type;if(!Rt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=E.width-K&&j>=0&&j<=E.height-Y){vt.bindFramebuffer(U.FRAMEBUFFER,Nt);let Ft=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ft),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),U.readPixels(q,j,K,Y,V.convert(qt),V.convert(Zt),0);let he=B!==null?Ct.get(B).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,he);let Me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ff(U,Me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ft),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.deleteBuffer(Ft),U.deleteSync(Me),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,q=null,j=0){E.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1]);let K=Math.pow(2,-j),Y=Math.floor(E.image.width*K),xt=Math.floor(E.image.height*K),At=q!==null?q.x:0,Nt=q!==null?q.y:0;P.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,At,Nt,Y,xt),vt.unbindTexture()},this.copyTextureToTexture=function(E,q,j=null,K=null,Y=0){E.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],q=arguments[2],Y=arguments[3]||0,j=null);let xt,At,Nt,Ot,qt,Zt,Ft,he,Me,Ee=E.isCompressedTexture?E.mipmaps[Y]:E.image;j!==null?(xt=j.max.x-j.min.x,At=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,Ot=j.min.x,qt=j.min.y,Zt=j.isBox3?j.min.z:0):(xt=Ee.width,At=Ee.height,Nt=Ee.depth||1,Ot=0,qt=0,Zt=0),K!==null?(Ft=K.x,he=K.y,Me=K.z):(Ft=0,he=0,Me=0);let mn=V.convert(q.format),fe=V.convert(q.type),Bt;q.isData3DTexture?(P.setTexture3D(q,0),Bt=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(P.setTexture2DArray(q,0),Bt=U.TEXTURE_2D_ARRAY):(P.setTexture2D(q,0),Bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);let ii=U.getParameter(U.UNPACK_ROW_LENGTH),pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Un=U.getParameter(U.UNPACK_SKIP_PIXELS),ls=U.getParameter(U.UNPACK_SKIP_ROWS),vn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),U.pixelStorei(U.UNPACK_SKIP_ROWS,qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt);let er=E.isDataArrayTexture||E.isData3DTexture,we=q.isDataArrayTexture||q.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Zn=Ct.get(E),nr=Ct.get(q),An=Ct.get(Zn.__renderTarget),Mi=Ct.get(nr.__renderTarget);vt.bindFramebuffer(U.READ_FRAMEBUFFER,An.__webglFramebuffer),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let bi=0;bi<Nt;bi++)er&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,Y,Zt+bi),E.isDepthTexture?(we&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(q).__webglTexture,Y,Me+bi),U.blitFramebuffer(Ot,qt,xt,At,Ft,he,xt,At,U.DEPTH_BUFFER_BIT,U.NEAREST)):we?U.copyTexSubImage3D(Bt,Y,Ft,he,Me+bi,Ot,qt,xt,At):U.copyTexSubImage2D(Bt,Y,Ft,he,Me+bi,Ot,qt,xt,At);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else we?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Bt,Y,Ft,he,Me,xt,At,Nt,mn,fe,Ee.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(Bt,Y,Ft,he,Me,xt,At,Nt,mn,Ee.data):U.texSubImage3D(Bt,Y,Ft,he,Me,xt,At,Nt,mn,fe,Ee):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Y,Ft,he,xt,At,mn,fe,Ee.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Y,Ft,he,Ee.width,Ee.height,mn,Ee.data):U.texSubImage2D(U.TEXTURE_2D,Y,Ft,he,xt,At,mn,fe,Ee);U.pixelStorei(U.UNPACK_ROW_LENGTH,ii),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Un),U.pixelStorei(U.UNPACK_SKIP_ROWS,ls),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vn),Y===0&&q.generateMipmaps&&U.generateMipmap(Bt),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,q,j=null,K=null,Y=0){return E.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,E=arguments[2],q=arguments[3],Y=arguments[4]||0),lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,q,j,K,Y)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){O=0,F=0,B=null,vt.reset(),G.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Bs=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ao=class extends Sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new dt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],o=[],a=new N,l=new Ce;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bl=class extends br{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var so=new N,La=new mc,Da=new mc,Ua=new mc,Kn=class extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(so.subVectors(s[0],s[1]).add(s[0]),c=so);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(so.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=so),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),La.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,y,g),Da.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,y,g),Ua.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,y,g)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Da.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ua.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(La.calc(l),Da.calc(l),Ua.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function c_(i,t){let e=1-i;return e*e*t}function h_(i,t){return 2*(1-i)*i*t}function u_(i,t){return i*i*t}function fr(i,t,e,n){return c_(i,t)+h_(i,e)+u_(i,n)}function d_(i,t){let e=1-i;return e*e*e*t}function f_(i,t){let e=1-i;return 3*e*e*i*t}function p_(i,t){return 3*(1-i)*i*i*t}function m_(i,t){return i*i*i*t}function pr(i,t,e,n,s){return d_(i,t)+f_(i,e)+p_(i,n)+m_(i,s)}var Ro=class extends Ln{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zl=class extends Ln{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(t,s.x,r.x,o.x,a.x),pr(t,s.y,r.y,o.y,a.y),pr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends Ln{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kl=class extends Ln{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends Ln{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Ln{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(t,s.x,r.x,o.x),fr(t,s.y,r.y,o.y),fr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Wh(a,l.x,c.x,h.x,u.x),Wh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},Do=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:Kn,CubicBezierCurve:Ro,CubicBezierCurve3:zl,EllipseCurve:br,LineCurve:Co,LineCurve3:kl,QuadraticBezierCurve:Po,QuadraticBezierCurve3:Io,SplineCurve:Lo}),Hl=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Do[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Do[s.type]().fromJSON(s))}return this}},zs=class extends Hl{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Co(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Po(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ro(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new br(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sr=class i extends un{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new N,d=new dt,f=new N,x=new N,y=new N,g=0,p=0;for(let L=0;L<=t.length-1;L++)switch(L){case 0:g=t[L+1].x-t[L].x,p=t[L+1].y-t[L].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[L+1].x-t[L].x,p=t[L+1].y-t[L].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(x)}for(let L=0;L<=e;L++){let T=n+L*h*s,M=Math.sin(T),W=Math.cos(T);for(let O=0;O<=t.length-1;O++){u.x=t[O].x*M,u.y=t[O].y,u.z=t[O].x*W,o.push(u.x,u.y,u.z),d.x=L/e,d.y=O/(t.length-1),a.push(d.x,d.y);let F=l[3*O+0]*M,B=l[3*O+1],C=l[3*O+0]*W;c.push(F,B,C)}}for(let L=0;L<e;L++)for(let T=0;T<t.length-1;T++){let M=T+L*t.length,W=M,O=M+t.length,F=M+t.length+1,B=M+1;r.push(W,O,B),r.push(F,B,O)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Er=class i extends un{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ks=class i extends un{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,y=[],g=n/2,p=0;L(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function L(){let M=new N,W=new N,O=0,F=(e-t)/n;for(let B=0;B<=r;B++){let C=[],S=B/r,z=S*(e-t)+t;for(let tt=0;tt<=s;tt++){let J=tt/s,et=J*l+a,ct=Math.sin(et),Q=Math.cos(et);W.x=z*ct,W.y=-S*n+g,W.z=z*Q,u.push(W.x,W.y,W.z),M.set(ct,F,Q).normalize(),d.push(M.x,M.y,M.z),f.push(J,1-S),C.push(x++)}y.push(C)}for(let B=0;B<s;B++)for(let C=0;C<r;C++){let S=y[C][B],z=y[C+1][B],tt=y[C+1][B+1],J=y[C][B+1];(t>0||C!==0)&&(h.push(S,z,J),O+=3),(e>0||C!==r-1)&&(h.push(z,tt,J),O+=3)}c.addGroup(p,O,0),p+=O}function T(M){let W=x,O=new dt,F=new N,B=0,C=M===!0?t:e,S=M===!0?1:-1;for(let tt=1;tt<=s;tt++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),x++;let z=x;for(let tt=0;tt<=s;tt++){let et=tt/s*l+a,ct=Math.cos(et),Q=Math.sin(et);F.x=C*Q,F.y=g*S,F.z=C*ct,u.push(F.x,F.y,F.z),d.push(0,S,0),O.x=ct*.5+.5,O.y=Q*.5*S+.5,f.push(O.x,O.y),x++}for(let tt=0;tt<s;tt++){let J=W+tt,et=z+tt;M===!0?h.push(et,et+1,J):h.push(et+1,et,J),B+=3}c.addGroup(p,B,M===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hs=class i extends ks{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Vs=class extends zs{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new zs().fromJSON(s))}return this}},g_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Su(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=M_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let x=e;x<s;x+=e)u=i[x],d=i[x+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return wr(r,o,e,a,l,f,0),o}};function Su(i,t,e,n,s){let r,o;if(s===L_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Xh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Xh(r,i[r],i[r+1],o);return o&&Wo(o,o.next)&&(Ar(o),o=o.next),o}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wo(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&T_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?x_(i,n,s,r):__(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ar(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=y_(Ji(i),t,e),wr(i,t,e,n,s,r,2)):o===2&&v_(i,t,e,n,s,r):wr(Ji(i),t,e,n,s,r,1);break}}}function __(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=f&&ws(s,a,r,l,o,c,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function x_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,x=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Vl(f,x,t,e,n),L=Vl(y,g,t,e,n),T=i.prevZ,M=i.nextZ;for(;T&&T.z>=p&&M&&M.z<=L;){if(T.x>=f&&T.x<=y&&T.y>=x&&T.y<=g&&T!==s&&T!==o&&ws(a,h,l,u,c,d,T.x,T.y)&&Ie(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=f&&M.x<=y&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&ws(a,h,l,u,c,d,M.x,M.y)&&Ie(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=y&&T.y>=x&&T.y<=g&&T!==s&&T!==o&&ws(a,h,l,u,c,d,T.x,T.y)&&Ie(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=L;){if(M.x>=f&&M.x<=y&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&ws(a,h,l,u,c,d,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function y_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Wo(s,r)&&Eu(s,n,n.next,r)&&Tr(s,r)&&Tr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ar(n),Ar(n.next),n=i=r),n=n.next}while(n!==i);return Ji(n)}function v_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C_(o,a)){let l=wu(o,a);o=Ji(o,o.next),l=Ji(l,l.next),wr(o,t,e,n,s,r,0),wr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function M_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Su(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(R_(c));for(s.sort(b_),r=0;r<s.length;r++)e=S_(s[r],e);return e}function b_(i,t){return i.x-t.x}function S_(i,t){let e=E_(i,t);if(!e)return t;let n=wu(e,i);return Ji(n,n.next),Ji(e,e.next)}function E_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ws(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Tr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&w_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function w_(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function T_(i,t,e,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,A_(s)}function A_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Vl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function R_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ws(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function C_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!P_(i,t)&&(Tr(i,t)&&Tr(t,i)&&I_(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Wo(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wo(i,t){return i.x===t.x&&i.y===t.y}function Eu(i,t,e,n){let s=oo(Ie(i,t,e)),r=oo(Ie(i,t,n)),o=oo(Ie(e,n,i)),a=oo(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&ro(i,e,t)||r===0&&ro(i,n,t)||o===0&&ro(e,i,n)||a===0&&ro(e,t,n))}function ro(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function oo(i){return i>0?1:i<0?-1:0}function P_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Tr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function I_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wu(i,t){let e=new Gl(i.i,i.x,i.y),n=new Gl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xh(i,t,e,n){let s=new Gl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var mr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];qh(t),Yh(n,t);let o=t.length;e.forEach(qh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Yh(n,e[l]);let a=g_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function qh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Rr=class i extends un{constructor(t=new Vs([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,L=e.UVGenerator!==void 0?e.UVGenerator:D_,T,M=!1,W,O,F,B;p&&(T=p.getSpacedPoints(h),M=!0,d=!1,W=p.computeFrenetFrames(h,!1),O=new N,F=new N,B=new N),d||(g=0,f=0,x=0,y=0);let C=a.extractPoints(c),S=C.shape,z=C.holes;if(!mr.isClockWise(S)){S=S.reverse();for(let st=0,gt=z.length;st<gt;st++){let U=z[st];mr.isClockWise(U)&&(z[st]=U.reverse())}}let J=mr.triangulateShape(S,z),et=S;for(let st=0,gt=z.length;st<gt;st++){let U=z[st];S=S.concat(U)}function ct(st,gt,U){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(gt,U)}let Q=S.length,pt=J.length;function nt(st,gt,U){let Dt,ft,Rt,vt=st.x-gt.x,kt=st.y-gt.y,Ct=U.x-st.x,P=U.y-st.y,v=vt*vt+kt*kt,Z=vt*P-kt*Ct;if(Math.abs(Z)>Number.EPSILON){let it=Math.sqrt(v),at=Math.sqrt(Ct*Ct+P*P),ot=gt.x-kt/it,Ut=gt.y+vt/it,Et=U.x-P/at,Pt=U.y+Ct/at,Qt=((Et-ot)*P-(Pt-Ut)*Ct)/(vt*P-kt*Ct);Dt=ot+vt*Qt-st.x,ft=Ut+kt*Qt-st.y;let I=Dt*Dt+ft*ft;if(I<=2)return new dt(Dt,ft);Rt=Math.sqrt(I/2)}else{let it=!1;vt>Number.EPSILON?Ct>Number.EPSILON&&(it=!0):vt<-Number.EPSILON?Ct<-Number.EPSILON&&(it=!0):Math.sign(kt)===Math.sign(P)&&(it=!0),it?(Dt=-kt,ft=vt,Rt=Math.sqrt(v)):(Dt=vt,ft=kt,Rt=Math.sqrt(v/2))}return new dt(Dt/Rt,ft/Rt)}let bt=[];for(let st=0,gt=et.length,U=gt-1,Dt=st+1;st<gt;st++,U++,Dt++)U===gt&&(U=0),Dt===gt&&(Dt=0),bt[st]=nt(et[st],et[U],et[Dt]);let yt=[],Lt,Xt=bt.concat();for(let st=0,gt=z.length;st<gt;st++){let U=z[st];Lt=[];for(let Dt=0,ft=U.length,Rt=ft-1,vt=Dt+1;Dt<ft;Dt++,Rt++,vt++)Rt===ft&&(Rt=0),vt===ft&&(vt=0),Lt[Dt]=nt(U[Dt],U[Rt],U[vt]);yt.push(Lt),Xt=Xt.concat(Lt)}for(let st=0;st<g;st++){let gt=st/g,U=f*Math.cos(gt*Math.PI/2),Dt=x*Math.sin(gt*Math.PI/2)+y;for(let ft=0,Rt=et.length;ft<Rt;ft++){let vt=ct(et[ft],bt[ft],Dt);Mt(vt.x,vt.y,-U)}for(let ft=0,Rt=z.length;ft<Rt;ft++){let vt=z[ft];Lt=yt[ft];for(let kt=0,Ct=vt.length;kt<Ct;kt++){let P=ct(vt[kt],Lt[kt],Dt);Mt(P.x,P.y,-U)}}}let ae=x+y;for(let st=0;st<Q;st++){let gt=d?ct(S[st],Xt[st],ae):S[st];M?(F.copy(W.normals[0]).multiplyScalar(gt.x),O.copy(W.binormals[0]).multiplyScalar(gt.y),B.copy(T[0]).add(F).add(O),Mt(B.x,B.y,B.z)):Mt(gt.x,gt.y,0)}for(let st=1;st<=h;st++)for(let gt=0;gt<Q;gt++){let U=d?ct(S[gt],Xt[gt],ae):S[gt];M?(F.copy(W.normals[st]).multiplyScalar(U.x),O.copy(W.binormals[st]).multiplyScalar(U.y),B.copy(T[st]).add(F).add(O),Mt(B.x,B.y,B.z)):Mt(U.x,U.y,u/h*st)}for(let st=g-1;st>=0;st--){let gt=st/g,U=f*Math.cos(gt*Math.PI/2),Dt=x*Math.sin(gt*Math.PI/2)+y;for(let ft=0,Rt=et.length;ft<Rt;ft++){let vt=ct(et[ft],bt[ft],Dt);Mt(vt.x,vt.y,u+U)}for(let ft=0,Rt=z.length;ft<Rt;ft++){let vt=z[ft];Lt=yt[ft];for(let kt=0,Ct=vt.length;kt<Ct;kt++){let P=ct(vt[kt],Lt[kt],Dt);M?Mt(P.x,P.y+T[h-1].y,T[h-1].x+U):Mt(P.x,P.y,u+U)}}}rt(),mt();function rt(){let st=s.length/3;if(d){let gt=0,U=Q*gt;for(let Dt=0;Dt<pt;Dt++){let ft=J[Dt];zt(ft[2]+U,ft[1]+U,ft[0]+U)}gt=h+g*2,U=Q*gt;for(let Dt=0;Dt<pt;Dt++){let ft=J[Dt];zt(ft[0]+U,ft[1]+U,ft[2]+U)}}else{for(let gt=0;gt<pt;gt++){let U=J[gt];zt(U[2],U[1],U[0])}for(let gt=0;gt<pt;gt++){let U=J[gt];zt(U[0]+Q*h,U[1]+Q*h,U[2]+Q*h)}}n.addGroup(st,s.length/3-st,0)}function mt(){let st=s.length/3,gt=0;It(et,gt),gt+=et.length;for(let U=0,Dt=z.length;U<Dt;U++){let ft=z[U];It(ft,gt),gt+=ft.length}n.addGroup(st,s.length/3-st,1)}function It(st,gt){let U=st.length;for(;--U>=0;){let Dt=U,ft=U-1;ft<0&&(ft=st.length-1);for(let Rt=0,vt=h+g*2;Rt<vt;Rt++){let kt=Q*Rt,Ct=Q*(Rt+1),P=gt+Dt+kt,v=gt+ft+kt,Z=gt+ft+Ct,it=gt+Dt+Ct;Gt(P,v,Z,it)}}}function Mt(st,gt,U){l.push(st),l.push(gt),l.push(U)}function zt(st,gt,U){Ht(st),Ht(gt),Ht(U);let Dt=s.length/3,ft=L.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);le(ft[0]),le(ft[1]),le(ft[2])}function Gt(st,gt,U,Dt){Ht(st),Ht(gt),Ht(Dt),Ht(gt),Ht(U),Ht(Dt);let ft=s.length/3,Rt=L.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);le(Rt[0]),le(Rt[1]),le(Rt[3]),le(Rt[1]),le(Rt[2]),le(Rt[3])}function Ht(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function le(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return U_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Do[s.type]().fromJSON(s)),new i(n,t.options)}},D_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],x=t[s*3+2],y=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-u),new dt(d,1-x),new dt(y,1-p)]:[new dt(a,1-l),new dt(h,1-u),new dt(f,1-x),new dt(g,1-p)]}};function U_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Uo=class i extends un{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new N,x=new dt;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let y=0;y<s;y++){let g=y*(n+1);for(let p=0;p<n;p++){let L=p+g,T=L,M=L+n+1,W=L+n+2,O=L+1;a.push(T,M,O),a.push(M,W,O)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ji=class i extends un{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],x=[],y=[],g=[];for(let p=0;p<=n;p++){let L=[],T=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let W=0;W<=e;W++){let O=W/e;u.x=-t*Math.cos(s+O*r)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(s+O*r)*Math.sin(o+T*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(O+M,1-T),L.push(c++)}h.push(L)}for(let p=0;p<n;p++)for(let L=0;L<e;L++){let T=h[p][L+1],M=h[p][L],W=h[p+1][L],O=h[p+1][L+1];(p!==0||o>0)&&f.push(T,M,O),(p!==n-1||l<Math.PI)&&f.push(M,W,O)}this.setIndex(f),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cr=class i extends un{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let y=x/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let y=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,L=(s+1)*f+x;o.push(y,g,L),o.push(g,p,L)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var gi=class i extends un{constructor(t=new Io(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new dt,h=new N,u=[],d=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function y(){for(let T=0;T<e;T++)g(T);g(r===!1?e:0),L(),p()}function g(T){h=t.getPointAt(T/e,h);let M=o.normals[T],W=o.binormals[T];for(let O=0;O<=s;O++){let F=O/s*Math.PI*2,B=Math.sin(F),C=-Math.cos(F);l.x=C*M.x+B*W.x,l.y=C*M.y+B*W.y,l.z=C*M.z+B*W.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let T=1;T<=e;T++)for(let M=1;M<=s;M++){let W=(s+1)*(T-1)+(M-1),O=(s+1)*T+(M-1),F=(s+1)*T+M,B=(s+1)*(T-1)+M;x.push(W,O,B),x.push(O,F,B)}}function L(){for(let T=0;T<=e;T++)for(let M=0;M<=s;M++)c.x=T/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Do[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Di=class extends $i{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pr=class extends Di{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ao(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function N_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends Gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zc:r=t,a=2*e-n;break;case $c:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:o=t,l=2*n-e;break;case $c:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),y=x*x,g=y*x,p=-d*g+2*d*y-d*x,L=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*x+1,T=(-1-f)*g+(1.5+f)*y+.5*x,M=f*g-f*y;for(let W=0;W!==a;++W)r[W]=p*o[h+W]+L*o[c+W]+T*o[l+W]+M*o[u+W];return r}},Xl=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ql=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ao(e,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ao(t.times,Array),values:ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case po:e=this.InterpolantFactoryMethodDiscrete;break;case Ml:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return Ml;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&N_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){let y=e[u+x];if(y!==e[d+x]||y!==e[f+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Ml;var Ki=class extends Gn{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=po;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Gn{};Yl.prototype.ValueTypeName="color";var Zl=class extends Gn{};Zl.prototype.ValueTypeName="number";var $l=class extends Gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},No=class extends Gn{InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}};No.prototype.ValueTypeName="quaternion";No.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Gn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=po;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Gn{};Jl.prototype.ValueTypeName="vector";var jl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},O_=new jl,Kl=class{constructor(t){this.manager=t!==void 0?t:O_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Oo=class extends Ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Na=new Ce,Zh=new N,$h=new N,Fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Jh=new Ce,ar=new N,Oa=new N,Ql=class extends Fo{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(ar),Oa.copy(n.position),Oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Oa),n.updateMatrixWorld(),s.makeTranslation(-ar.x,-ar.y,-ar.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}},Bo=class extends Ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},tc=class extends Fo{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var gc="\\[\\]\\.:\\/",F_=new RegExp("["+gc+"]","g"),_c="[^"+gc+"]",B_="[^"+gc.replace("\\.","")+"]",z_=/((?:WC+[\/:])*)/.source.replace("WC",_c),k_=/(WCOD+)?/.source.replace("WCOD",B_),H_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),V_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),G_=new RegExp("^"+z_+k_+H_+V_+"$"),W_=["material","materials","bones","map"],ec=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(F_,"")}static parseTrackName(t){let e=G_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);W_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=ec;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zx=new Float32Array(1);var jh=new Ce,zo=class{constructor(t,e,n=0,s=1/0){this.ray=new Ns(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(t,e=!0,n=[]){return nc(t,this,n,e),n.sort(Kh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)nc(t[s],this,n,e);return n.sort(Kh),n}};function Kh(i,t){return i.distance-t.distance}function nc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)nc(r[o],t,e,!0)}}var Dr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ko=class extends fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);var Tu={type:"change"},yc={type:"start"},Ru={type:"end"},Xo=new Ns,Au=new zn,q_=Math.cos(70*pu.DEG2RAD),He=new N,xn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xc=1e-6,qo=class extends ko{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new _n,this._lastTargetPosition=new N,this._quat=new _n().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dr,this._sphericalDelta=new Dr,this._scale=1,this._panOffset=new N,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new N,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z_.bind(this),this._onPointerDown=Y_.bind(this),this._onPointerUp=$_.bind(this),this._onContextMenu=nx.bind(this),this._onMouseWheel=K_.bind(this),this._onKeyDown=Q_.bind(this),this._onTouchStart=tx.bind(this),this._onTouchMove=ex.bind(this),this._onMouseDown=J_.bind(this),this._onMouseMove=j_.bind(this),this._interceptControlDown=ix.bind(this),this._interceptControlUp=sx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tu),this.update(),this.state=_e.NONE}update(t=null){let e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=He.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xo.origin.copy(this.object.position),Xo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xo.direction))<q_?this.object.lookAt(this.target):(Au.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xo.intersectPlane(Au,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xc||this._lastTargetPosition.distanceToSquared(this.target)>xc?(this.dispatchEvent(Tu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Y_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Z_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ru),this.state=_e.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function J_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(yc)}function j_(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function K_(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(yc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ru))}function Q_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function tx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(yc)}function ex(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function nx(i){this.enabled!==!1&&i.preventDefault()}function ix(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Yo=class extends Bs{constructor(){super();let t=new qe;t.deleteAttribute("uv");let e=new Di({side:sn}),n=new Di,s=new Bo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new re(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new re(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new re(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new re(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new re(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new re(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new re(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new re(t,qs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new re(t,qs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let x=new re(t,qs(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);let y=new re(t,qs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let g=new re(t,qs(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new re(t,qs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function qs(i){let t=new mi;return t.color.setScalar(i),t}var zu=hd(Cu()),Se=Math.PI*2,Qo=.1,Te=i=>-(i-500)*Qo,Ve=i=>(i-500)*Qo;function wn(i){try{window.Bridge&&window.Bridge.postMessage?window.Bridge.postMessage(JSON.stringify(i)):(window.__msgs=window.__msgs||[]).push(i)}catch{}}var xe=(i,t,e)=>[i[0]+t*Math.cos(e),i[1]+t*Math.sin(e)],Zs=(i,t,e=48)=>{let n=[];for(let s=0;s<e;s++)n.push(xe(i,t,s/e*Se));return n},Ye=(i,t,e=48)=>[Zs(i,t,e)],Zo=i=>[i];function rx(i){return typeof i[0][0][0]=="number"}function ku(i){return rx(i)?[i]:i}function Qn(...i){return zu.default.union(...i.map(ku))}function Wn(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],o=Math.hypot(s,r)||1,a=-r/o,l=s/o,c=[[i[0]+a*e/2,i[1]+l*e/2],[t[0]+a*n/2,t[1]+l*n/2],[t[0]-a*n/2,t[1]-l*n/2],[i[0]-a*e/2,i[1]-l*e/2]];return Qn([c],Ye(i,e/2,24),Ye(t,n/2,24))}var Nr=(i,t,e)=>Wn(i,t,e,e);function rn(i,t,e,n=0,s=0){let r=s>0?s:Math.max(2,t*Se/e*.45),o=t-r,a=Se/e,l=[];for(let c=0;c<e;c++){let h=n+c*a;l.push(xe(i,o,h),xe(i,t,h+a*.18),xe(i,t,h+a*.42),xe(i,o,h+a*.6))}return l}function Fc(i,t,e,n,s,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a*Se/n,c=r+(a+1)*Se/n,h=Math.asin(Math.min(.9,s/2/t)),u=Math.asin(Math.min(.9,s/2/e)),d=[];for(let f=0;f<=16;f++)d.push(xe(i,t,l+h+(c-h-(l+h))*f/16));for(let f=0;f<=6;f++)d.push(xe(i,e,c-u-(c-u-(l+u))*f/6));o.push(d)}return o}var ee=[500,500];function Hu(i,t,e=4){let n=[rn(ee,i,t)];return i>24&&e>0&&n.push(...Fc(ee,i*.74,Math.max(i*.24,10),e,i*.12)),n}function ox(i,t=20){let e=Se/t,n=[];for(let s=0;s<t;s++){let r=s*e;n.push(xe(ee,i*.72,r),xe(ee,i,r+e*.55),xe(ee,i*.9,r+e*.75))}return[n,...Fc(ee,i*.6,i*.2,4,i*.14)]}var Vu=(i,t,e,n=96)=>[Zs(i,t,n),Zs(i,e,n).reverse()];function ax(i){let t=[];for(let e of ku(i)){let[n,...s]=e,r=new Vs(n.map(o=>new dt(Te(o[0]),-Ve(o[1]))));for(let o of s)r.holes.push(new zs(o.map(a=>new dt(Te(a[0]),-Ve(a[1])))));t.push(r)}return t}function Jt(i,t,e,n){let s=n!=null?n:Math.min(.12,e*.2),r=new Rr(ax(i),{depth:Math.max(.02,e-2*s),bevelEnabled:s>0,bevelThickness:s,bevelSize:s*.8,bevelOffset:-s*.8,bevelSegments:2,curveSegments:8});return r.rotateX(-Math.PI/2),r.translate(0,t+s,0),r}function Wt(i,t,e,n=32,s){let r=new ks(s!=null?s:i,i,e-t,n);return r.translate(0,(t+e)/2,0),r}function tr(i,t,e,n=1){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Ao(s);return r.wrapS=r.wrapT=gr,r.repeat.set(n,n),r.colorSpace=gn,r.anisotropy=4,r}var Pu=(i=!1)=>tr(256,256,(t,e,n)=>{let s=t.createImageData(e,n);for(let r=0;r<n;r++)for(let o=0;o<e;o++){let a=(o+r)%64/64,l=Math.pow(Math.sin(a*Math.PI),2),c=i?150-90*l+(o*7+r*13)%11:168+84*l,h=(r*e+o)*4;s.data[h]=c,s.data[h+1]=c+2,s.data[h+2]=c+6,s.data[h+3]=255}t.putImageData(s,0,0)},1/7),Iu=(i=!1)=>tr(256,256,(t,e,n)=>{t.fillStyle=i?"#8a8a8a":"#c9ced6",t.fillRect(0,0,e,n);let s=32;for(let r=-1;r<=n/s+1;r++)for(let o=-1;o<=e/s+1;o++){let a=o*s+(r%2?s/2:0),l=r*s*.87,c=t.createRadialGradient(a-4,l-4,1,a,l,22);i?(c.addColorStop(0,"#404040"),c.addColorStop(.6,"#909090"),c.addColorStop(1,"#6a6a6a")):(c.addColorStop(0,"#f2f4f7"),c.addColorStop(.55,"#c3c9d2"),c.addColorStop(1,"#dfe3e9")),t.fillStyle=c,t.beginPath(),t.arc(a,l,21,0,Se),t.fill()}},1/7);function bc(i){let t=tr(512,512,(e,n,s)=>{e.fillStyle="#d8dde4",e.fillRect(0,0,n,s);for(let r=4;r<n*.72;r+=3){let o=200+Math.floor(Math.random()*50);e.strokeStyle=`rgb(${o},${o+3},${o+8})`,e.lineWidth=2,e.beginPath(),e.arc(n/2,s/2,r,0,Se),e.stroke()}});return t.wrapS=t.wrapT=kn,t.repeat.set(1/i,1/i),t.offset.set(.5,.5),t}var lx=()=>{let i=tr(1024,1024,(t,e)=>{let n=e/2;t.fillStyle="#fbf8f2",t.fillRect(0,0,e,e),t.strokeStyle="#1d2b4a";for(let s=0;s<60;s++){let r=s/60*Se,o=s%5===0;t.lineWidth=o?16:4,t.beginPath(),t.moveTo(n+Math.cos(r)*(o?395:440),n+Math.sin(r)*(o?395:440)),t.lineTo(n+Math.cos(r)*470,n+Math.sin(r)*470),t.stroke()}t.fillStyle="#ffffff",t.fillRect(n+300,n-34,74,68),t.lineWidth=4,t.strokeRect(n+300,n-34,74,68),t.fillStyle="#1d2b4a",t.font="bold 50px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("8",n+337,n+2)});return i.wrapS=i.wrapT=kn,i.repeat.set(1,1),i},cx=()=>{let i=tr(1024,1024,(t,e)=>{let n=e/2;t.fillStyle="#f4f1ea",t.fillRect(0,0,e,e),t.fillStyle="#1d2b4a",t.font="bold 38px sans-serif",t.textAlign="center",t.textBaseline="middle";for(let s=0;s<31;s++){let r=s/31*Se;t.save(),t.translate(n+Math.cos(r)*465,n+Math.sin(r)*465),t.rotate(r+Math.PI/2),t.fillText(String(s+1),0,0),t.restore()}});return i.wrapS=i.wrapT=kn,i.repeat.set(1,1),i},hx=()=>tr(256,256,(i,t,e)=>{let n=i.createImageData(t,e);for(let s=0;s<t*e;s++){let r=225+Math.floor(Math.random()*30);n.data[s*4]=r,n.data[s*4+1]=r,n.data[s*4+2]=r,n.data[s*4+3]=255}i.putImageData(n,0,0)},6),Sc=null;function xi(){return Sc||(Sc={stripes:Pu(),stripesR:Pu(!0),perlage:Iu(),perlageR:Iu(!0),grain10:bc(21),grain5:bc(11),grain42:bc(86),dial:lx(),date:cx()}),Sc}var rs=!0;try{let i=localStorage.getItem("w3d_quality");rs=i?i==="high":(navigator.hardwareConcurrency||4)>=6}catch{}var Ge=i=>new Di(i),Dn=i=>rs?new Pr(i):Ge(Object.fromEntries(Object.entries(i).filter(([t])=>!["clearcoat","clearcoatRoughness","anisotropy","anisotropyRotation","iridescence","iridescenceIOR","iridescenceThicknessRange","sheen","sheenColor","sheenRoughness"].includes(t)))),ut={brass:()=>Dn({color:14265688,metalness:1,roughness:.3,clearcoat:.2}),gold:()=>Dn({color:15121768,metalness:1,roughness:.22,clearcoat:.35,clearcoatRoughness:.15,anisotropy:.35}),steel:()=>Dn({color:14673130,metalness:1,roughness:.13,clearcoat:.2}),steelMatte:()=>Dn({color:13160151,metalness:.95,roughness:.38}),bridge:()=>Dn({color:16054009,metalness:.95,roughness:.3,map:xi().stripes,roughnessMap:xi().stripesR,anisotropy:.75,anisotropyRotation:Math.PI/4,clearcoat:.15,clearcoatRoughness:.2}),plate:()=>Dn({color:14080994,metalness:.9,roughness:.42,map:xi().perlage,roughnessMap:xi().perlageR}),ruby:()=>new Pr({color:12720219,metalness:0,roughness:.08,clearcoat:1,clearcoatRoughness:.05,emissive:2752528}),blue:()=>Dn({color:2311861,metalness:.85,roughness:.2,iridescence:.85,iridescenceIOR:1.8,iridescenceThicknessRange:[220,620],clearcoat:.4}),dark:()=>Ge({color:1317416,metalness:.3,roughness:.6}),spring:()=>Ge({color:7175312,metalness:.9,roughness:.3}),hands:()=>Ge({color:1911626,metalness:.6,roughness:.35}),orange:()=>Ge({color:15895608,metalness:.2,roughness:.4,emissive:6957568}),grain:i=>Ge({color:16777215,metalness:.9,roughness:.3,map:i}),dial:()=>Ge({color:16777215,metalness:0,roughness:.55,map:xi().dial}),dateRing:()=>Ge({color:16777215,metalness:0,roughness:.6,map:xi().date}),heavy:()=>Ge({color:10133931,metalness:.9,roughness:.35}),case:()=>Dn({color:15133423,metalness:1,roughness:.1,clearcoat:.5,clearcoatRoughness:.08}),oil:()=>Dn({color:14263361,metalness:0,roughness:.03,clearcoat:1,transparent:!0,opacity:.85})};function Ys(i,t,e=0){return i.position.set(Te(t[0]),e,Ve(t[1])),i}function lt(i,t,e=!0){let n=new re(i,t);return n.castShadow=e,n.receiveShadow=!0,n}function Ue(i,t=0){let e=new Yt;return e.position.set(Te(i[0]),t,Ve(i[1])),e}function Ui(i,t){return i.translate(-Te(t[0]),0,-Ve(t[1])),i}function Ec(i,t,e=.9,n=!1){let s=Ue(i),r=.22,o=n?t-r:t;return s.add(lt(Wt(e,o,o+r,32),ut.ruby(),!1)),s.add(lt(Wt(e*.28,n?o-.01:o+.01,n?o+r-.02:o+r+.01,16),ut.dark(),!1)),s}var ht={c:[500,500],barrel:[640,330],crownWheel:[780,410],click:[548,214],center:[500,500],third:[370,610],fourth:[470,705],escape:[580,730],pallet:[660,690],balance:[760,640],cockFoot:[815,728],rev1:[420,270],rev2:[505,335],slPivot:[820,405],yokePivot:[790,610],clutch:[885,500],windingPinion:[935,500],settingWheel:[860,572],minuteWheel:[425,580],dateWheel:[380,410],jumper:[620,300]};ht.forkTip=[ht.pallet[0]+(ht.balance[0]-ht.pallet[0])*.62,ht.pallet[1]+(ht.balance[1]-ht.pallet[1])*.62];ht.entry=xe(ht.escape,52,-2.2);ht.exit=xe(ht.escape,52,.55);var wc=-3.9,ie={};function te(i,t,e,{dir:n=1,face:s=0,cover:r=!1}={}){return e.name=i,e.userData={...e.userData,id:i,part:t},ie[i]={id:i,obj:e,part:t,dir:n,face:s,cover:r,base:{p:e.position.clone(),q:e.quaternion.clone()}},e}var ux={p_platina:"platina",q_platina:"platina",p_stelo:"stelo",q_stelo:"stelo",p_cassa:"cassa",q_cassa:"cassa"},Oi=i=>ux[i]||i;function Tc(i,t,e,n,s,r,o=ut.gold){let a=Ue(i);return a.add(lt(Jt([Hu(t,e)],n,.45,.06),o())),a.add(lt(Jt([rn(ee,s,10)],r,n-r+.01,.04),ut.steel())),a.add(lt(Wt(t*.24*Qo,n-.05,n+.55,24),o())),a.add(lt(Wt(.35,0,7.6,12),ut.steel())),a}function dx(i){{let o=new Yt;o.add(lt(Jt(Ye(ee,440,128),-3,3,.25),ut.plate())),te("platina","platina",o,{dir:1,face:0}),i.add(o)}i.add(te("ruota_centro","ruota_centro",(()=>{let o=Tc(ht.center,115,80,1,18,1.45);return o.add(lt(Wt(.35,-8.2,0,12),ut.steel())),o})())),i.add(te("ruota_terzo","ruota_terzo",Tc(ht.third,85,75,2,14,.6))),i.add(te("ruota_secondi","ruota_secondi",Tc(ht.fourth,72,70,3,12,1))),i.add(te("ruota_scappamento","ruota_scappamento",(()=>{let o=Ue(ht.escape);return o.add(lt(Jt([ox(50)],3.85,.35,.04),ut.steel())),o.add(lt(Jt([rn(ee,9,8)],3,.86,.03),ut.steel())),o.add(lt(Wt(.35,0,7.6,12),ut.steel())),o})())),i.add(te("bariletto","bariletto",(()=>{let o=Ue(ht.barrel);return o.add(lt(Jt([rn(ee,135,90)],.5,.65,.06),ut.gold())),o.add(lt(Wt(12.4,1.1,4.4,64),ut.gold())),o.add(lt(Wt(12,4.4,4.75,64),ut.brass())),o.add(lt(Wt(2.2,0,7.4,24),ut.steel())),o})())),i.add(te("ancora","ancora",(()=>{let o=Ue(ht.pallet),a=Qn(Wn(ht.pallet,ht.forkTip,30,14),Wn(ht.pallet,ht.entry,24,14),Wn(ht.pallet,ht.exit,24,14),Ye(ht.pallet,18));o.add(lt(Ui(Jt(a,3.85,.4,.05),ht.pallet),ut.steel()));for(let l of[ht.entry,ht.exit]){let c=new qe(1.5,.6,.55),h=lt(c,ut.ruby(),!1),u=Te(l[0])-Te(ht.pallet[0]),d=Ve(l[1])-Ve(ht.pallet[1]);h.position.set(u*1.05,4.05,d*1.05),h.rotation.y=-Math.atan2(d,u),o.add(h)}return o.add(lt(Wt(.3,0,7.6,12),ut.steel())),o})())),i.add(te("bilanciere","bilanciere",(()=>{let o=Ue(ht.balance),a=[Zs(ee,100,96),...Fc(ee,86,15,3,10,.4)];o.add(lt(Jt([a],4.7,.6,.08),ut.gold()));for(let d=0;d<10;d++){let f=d/10*Se,x=lt(new ji(.42,12,8),ut.gold());x.position.set(Math.cos(f)*10.1,5,Math.sin(f)*10.1),o.add(x)}o.add(lt(Wt(.28,3.4,9.6,12),ut.steel())),o.add(lt(Wt(2.1,3.9,4.25,32),ut.steel()));let l=lt(Wt(.32,3.55,4.3,12),ut.ruby(),!1),c=Te(ht.pallet[0])-Te(ht.balance[0]),h=Ve(ht.pallet[1])-Ve(ht.balance[1]),u=Math.hypot(c,h);return l.position.set(c/u*1.6,0,h/u*1.6),o.add(l),o})())),i.add(te("spirale","spirale",(()=>{let o=Ue(ht.balance),a=[];for(let l=0;l<=900;l++){let c=l/900,h=c*9*Se,u=1.6+4.4*c;a.push(new N(Math.cos(h)*u,5.75,Math.sin(h)*u))}return o.add(lt(new gi(new Kn(a),1400,.05,5,!1),ut.spring(),!1)),o.add(lt(Wt(.9,5.4,6,16),ut.steel())),o})()));let t=Qn(Zo([[455,455],[545,465],[560,560],[625,700],[615,772],[540,775],[470,752],[335,655],[330,575],[440,470]]),Ye(ht.center,42),Ye(ht.third,40),Ye(ht.fourth,40),Ye(ht.escape,36));i.add(te("ponte_treno","ponte_treno",(()=>{let o=new Yt;o.add(lt(Jt(t,5.4,2,.22),ut.bridge()));for(let a of[ht.center,ht.third,ht.fourth,ht.escape])o.add(Ec(a,7.4,.95));for(let a of[[420,560],[560,640],[400,680]])o.add(Ys(lt(Wt(1.6,0,5.4,20),ut.steelMatte()),a));return o})(),{face:7.4,cover:!0})),i.add(te("ponte_ancora","ponte_ancora",(()=>{let o=new Yt;return o.add(lt(Jt(Nr([ht.pallet[0]-30,ht.pallet[1]+35],[ht.pallet[0]+25,ht.pallet[1]-30],44),5.4,2,.2),ut.bridge())),o.add(Ec(ht.pallet,7.4,.75)),o.add(Ys(lt(Wt(1.4,0,5.4,20),ut.steelMatte()),[636,718])),o})(),{face:7.4,cover:!0}));let e=Qn(Ye(ht.barrel,150,72),Ye(ht.crownWheel,72),Zo([[700,230],[830,350],[790,470],[650,470]]));i.add(te("ponte_bariletto","ponte_bariletto",(()=>{let o=new Yt;o.add(lt(Jt(e,5,2.4,.22),ut.bridge()));for(let a of[[520,240],[760,250],[705,455]])o.add(Ys(lt(Wt(1.6,0,5,20),ut.steelMatte()),a));return o})(),{face:7.4,cover:!0}));let n=Qn(Ye(ht.balance,44),Wn(ht.balance,ht.cockFoot,70,82));i.add(te("ponte_bilanciere","ponte_bilanciere",(()=>{let o=new Yt;o.add(lt(Jt(n,7,1.9,.2),ut.bridge()));let a=lt(Wt(4,0,7,32),ut.bridge());a.position.set(Te(ht.cockFoot[0]),0,Ve(ht.cockFoot[1])),o.add(a);let l=Ue(ht.balance);l.add(lt(Wt(2.3,8.9,9.15,32),ut.steel())),l.add(lt(Wt(1.2,9.15,9.3,24),ut.ruby(),!1));for(let c of[-1,1]){let h=lt(new Cr(2,.09,6,24,Math.PI*.7),ut.spring(),!1);h.rotation.x=-Math.PI/2,h.rotation.z=c>0?-.2:Math.PI-1.9,h.position.y=9.3,l.add(h)}return o.add(l),o})(),{face:8.9,cover:!0})),i.add(te("racchetta","racchetta",(()=>{let o=Ue(ht.balance),a=Nr([ht.balance[0]-14,ht.balance[1]-14],[ht.balance[0]-82,ht.balance[1]-82],12);return o.add(lt(Ui(Jt(a,8.9,.35,.05),ht.balance),ut.steel())),o})(),{face:9.25})),i.add(te("rocchetto_cricco","rocchetto_cricco",(()=>{let o=Ue(ht.barrel);return o.add(lt(Jt([rn(ee,105,60)],7.4,.8,.06),ut.grain(xi().grain10))),o})(),{face:8.2,cover:!0})),i.add(te("ruota_carica","ruota_carica",(()=>{let o=Ue(ht.crownWheel);return o.add(lt(Jt([rn(ee,55,40)],7.4,.8,.06),ut.grain(xi().grain5))),o})(),{face:8.2})),i.add(te("cricchetto","cricchetto",(()=>{let o=Ue(ht.click),a=Qn(Wn(ht.click,xe(ht.barrel,109,-2.2),30,12),Ye(ht.click,18));o.add(lt(Ui(Jt(a,7.4,.6,.06),ht.click),ut.steel()));let l=[];for(let c=0;c<=30;c++){let h=c/30;l.push(new N(1+4.5*h,7.7,-1.8-1.2*Math.sin(h*Math.PI)))}return o.add(lt(new gi(new Kn(l),40,.18,6),ut.spring())),o})(),{face:8}));let s=Qn(Zo([[320,215],[560,200],[585,300],[560,395],[345,395],[300,300]]),Ye(ht.rev1,48),Ye(ht.rev2,48));i.add(te("ponte_automatico","ponte_automatico",(()=>{let o=new Yt;o.add(lt(Jt(s,9.4,1.5,.18),ut.bridge()));for(let a of[[345,300],[560,240]])o.add(Ys(lt(Wt(1.5,0,9.4,20),ut.steelMatte()),a));return o})(),{face:10.9,cover:!0}));for(let[o,a]of[["invertitore_1",ht.rev1],["invertitore_2",ht.rev2]])i.add(te(o,"invertitori",(()=>{let l=Ue(a);return l.add(lt(Jt([rn(ee,40,36)],10.9,.5,.05),ut.brass())),l.add(Ec([500,500],11.4,.6)),l})(),{face:11.4,cover:!0}));i.add(te("rotore","rotore",(()=>{let o=new Yt,a=[];for(let c=0;c<=64;c++)a.push(xe(ee,425,Math.PI+c/64*Math.PI));for(let c=64;c>=0;c--)a.push(xe(ee,62,Math.PI+c/64*Math.PI));o.add(lt(Jt([a],12.6,.7,.08),ut.grain(xi().grain42)));let l=[];for(let c=0;c<=64;c++)l.push(xe(ee,425,Math.PI+c/64*Math.PI));for(let c=64;c>=0;c--)l.push(xe(ee,378,Math.PI+c/64*Math.PI));return o.add(lt(Jt([l],12,2,.15),ut.heavy())),o.add(lt(Wt(5.6,11.2,13.6,48),ut.steel())),o.add(lt(Wt(4.2,13.6,13.8,48),ut.steelMatte())),o})(),{face:13.8,cover:!0})),i.add(te("stelo","stelo",(()=>{let o=new Yt;o.position.set(0,wc,0);let a=lt(Wt(.85,0,18,16),ut.steel());a.rotation.z=Math.PI/2,a.position.set(Te(860),0,0),o.add(a);let l=lt(new qe(5,1.2,1.2),ut.steel());l.position.set((Te(885)+Te(935))/2,0,0),o.add(l);let c=Jt([rn(ee,46,44,0,5)],0,3,.3);c.translate(0,-1.5,0);let h=lt(c,ut.case());h.rotation.z=Math.PI/2,h.position.set(Te(1050),0,0),o.add(h);let u=lt(Wt(3.6,0,.4,32),ut.case());return u.rotation.z=-Math.PI/2,u.position.set(Te(1050)-1.5,0,0),o.add(u),o})(),{dir:1})),i.add(te("tiretto","tiretto",(()=>{let o=Ue(ht.slPivot),a=Qn(Wn(ht.slPivot,[905,470],34,18),Ye(ht.slPivot,22));o.add(lt(Ui(Jt(a,-3.55,.55,.05),ht.slPivot),ut.steel()));let l=lt(Wt(.5,-4.6,-3.5,12),ut.steelMatte());return l.position.set(Te(900)-Te(ht.slPivot[0]),0,Ve(476)-Ve(ht.slPivot[1])),o.add(l),o})(),{dir:-1,face:-3.55}));let r=(o,a,l)=>{let c=new Yt;c.position.set(Te(o[0]),wc,Ve(o[1]));let h=Jt([rn(ee,a,10)],-l/2,l,.04),u=lt(h,ut.steel());return u.rotation.z=Math.PI/2,c.add(u),c};i.add(te("pignone_carica","pignone_carica",r(ht.windingPinion,13,2.8),{dir:-1})),i.add(te("pignone_scorrevole","pignone_scorrevole",r(ht.clutch,14,3.4),{dir:-1})),i.add(te("ruota_rinvio","ruota_rinvio",(()=>{let o=Ue(ht.settingWheel);return o.add(lt(Jt([rn(ee,28,20)],-3.6,.6,.05),ut.steel())),o})(),{dir:-1,face:-3.6})),i.add(te("bascula","bascula",(()=>{let o=Ue(ht.yokePivot),a=Qn(Wn(ht.yokePivot,[870,530],30,16),Ye(ht.yokePivot,20));return o.add(lt(Ui(Jt(a,-3.5,.5,.05),ht.yokePivot),ut.steelMatte())),o})(),{dir:-1,face:-3.5})),i.add(te("molla_tiretto","molla_tiretto",(()=>{let o=new Yt,a=Zo([[760,385],[850,380],[915,430],[845,455],[800,520],[830,640],[760,660],[735,560]]);o.add(lt(Jt(a,-6,.6,.08),ut.steelMatte()));for(let l of[[770,420],[770,620]])o.add(Ys(lt(Wt(1.4,-5.4,-3,16),ut.steelMatte()),l));return o})(),{dir:-1,face:-6,cover:!0})),i.add(te("chaussee","chaussee",(()=>{let o=Ue(ht.center);return o.add(lt(Wt(2.3,-8,-3,24),ut.steel())),o.add(lt(Jt([rn(ee,26,12)],-4,1,.04),ut.steel())),o})(),{dir:-1})),i.add(te("ruota_minuteria","ruota_minuteria",(()=>{let o=Ue(ht.minuteWheel);return o.add(lt(Jt([rn(ee,50,36)],-3.9,.5,.05),ut.steel())),o.add(lt(Jt([rn(ee,14,10)],-4.8,.95,.03),ut.steel())),o})(),{dir:-1})),i.add(te("ruota_ore","ruota_ore",(()=>{let o=Ue(ht.center);return o.add(lt(Jt([[...Hu(66,48,0),Zs(ee,30,32).reverse()]],-5.3,.45,.05),ut.gold())),o.add(lt(Wt(3,-7.8,-4.85,32),ut.gold())),o})(),{dir:-1})),i.add(te("ruota_datario","datario",(()=>{let o=Ue(ht.dateWheel);return o.add(lt(Jt([rn(ee,44,30)],-4.6,.5,.05),ut.steel())),o})(),{dir:-1})),i.add(te("disco_datario","datario",(()=>{let o=new Yt,a=[rn(ee,362,31,0,9).reverse(),Zs(ee,428,128)];o.add(lt(Jt([[a[1],a[0]]],-5.9,.3,.03),ut.steelMatte()));let l=new Uo(36.4,42.6,128);l.rotateX(Math.PI/2),l.rotateY(Math.PI);let c=new re(l,ut.dateRing());return c.position.y=-5.91,c.receiveShadow=!0,o.add(c),o})(),{dir:-1,face:-5.9})),i.add(te("saltarello","datario",(()=>{let o=Ue(ht.jumper),a=Qn(Wn(ht.jumper,xe(ee,368,-1.25),26,10),Ye(ht.jumper,16));return o.add(lt(Ui(Jt(a,-5.95,.4,.05),ht.jumper),ut.steel())),o})(),{dir:-1,face:-5.95})),i.add(te("placca_calendario","datario",(()=>{let o=new Yt;o.add(lt(Jt(Vu(ee,352,80),-6.6,.55,.08),ut.steelMatte()));for(let a of[[300,420],[640,700],[560,220]])o.add(Ys(lt(Wt(1.3,-6.05,-3,16),ut.steelMatte()),a));return o})(),{dir:-1,face:-6.6,cover:!0})),i.add(te("quadrante","quadrante",(()=>{let o=new Yt;o.add(lt(Wt(43.6,-7.6,-7.2,128),Ge({color:15986404,metalness:0,roughness:.55})));let a=new Er(43.6,128);a.rotateX(Math.PI/2),a.rotateY(Math.PI);let l=new re(a,ut.dial());return l.position.y=-7.61,l.receiveShadow=!0,o.add(l),o})(),{dir:-1,face:-7.6,cover:!0})),i.add(te("lancette","lancette",(()=>{let o=new Yt,a=-Math.PI/2,l=lt(Jt(Wn(ee,xe(ee,250,a),30,10),-8.2,.2,.03),ut.hands()),c=lt(Jt(Wn(ee,xe(ee,370,a),22,8),-8.7,.2,.03),ut.hands()),h=lt(Jt(Nr(xe(ee,80,a+Math.PI),xe(ee,400,a),6),-9.1,.12,.02),ut.orange());return l.name="h",c.name="m",h.name="s",o.add(l,c,h),o.userData.hands={h:l,m:c,s:h},ta(o,10*3600+10*60+30),o.add(lt(Wt(1.2,-9.2,-7.6,24),ut.hands())),o})(),{dir:-1,face:-9.2,cover:!0})),i.add(te("cassa","cassa",(()=>{let o=new Yt,a=[[44.4,-9.6],[47.6,-9.6],[49,-8.4],[49.4,0],[49,13.6],[47.4,14.5],[44.4,14.5],[44.4,-9.6]].map(c=>new dt(c[0],c[1]));o.add(lt(new Sr(a,128),ut.case()));let l=lt(Wt(1.8,0,4,24),ut.case());l.rotation.z=Math.PI/2,l.position.set(Te(1e3)-.5,wc,0),o.add(l);for(let c of[[164,193],[833,810]]){let h=Math.atan2(Ve(c[1]),Te(c[0])),u=lt(new qe(5.5,.6,3.2),ut.steelMatte());u.position.set(Te(c[0]),.3,Ve(c[1])),u.rotation.y=-h,o.add(u)}return o})(),{dir:1,face:.6,cover:!0})),i.add(te("fondello","fondello",(()=>{let o=new Yt;o.add(lt(Wt(47.2,14.5,15.9,128),ut.case())),o.add(lt(Wt(37,15.9,16.3,128),ut.case()));for(let a=0;a<6;a++){let l=a/6*Se,c=lt(new qe(3,.5,2.4),ut.dark());c.position.set(Math.cos(l)*44,15.75,Math.sin(l)*44),c.rotation.y=-l,o.add(c)}return o})(),{dir:1,face:16.3,cover:!0}))}function ta(i,t){let e=i.userData.hands;e&&(e.s.rotation.y=t%60/60*Se,e.m.rotation.y=t%3600/3600*Se,e.h.rotation.y=t%43200/43200*Se)}var ni={};function fx(i){let t=ie[Oi(i.item)];if(!t)return;let e=i.r*Qo,n=new Yt;n.position.set(Te(i.x),t.face,Ve(i.y)),t.dir<0&&(n.rotation.x=Math.PI);let s=new Yt;s.add(lt(Wt(e,0,.62,32),ut.blue()));let r=lt(new qe(e*2.06,.3,e*.3),ut.dark(),!1);r.position.y=.52,r.rotation.y=(i.x*7+i.y)%3,s.add(r),s.add(lt(Wt(e*.45,-2.4,0,12),ut.blue()));{let o=[],a=e*.45+.04;for(let l=0;l<=120;l++){let c=l/120,h=c*6*Se;o.push(new N(Math.cos(h)*a,-2.3+2.1*c,Math.sin(h)*a))}s.add(lt(new gi(new Kn(o),160,.07,5),ut.blue(),!1))}n.add(s),n.name=i.id,n.userData={id:i.id,part:"viti"},ni[i.id]={id:i.id,item:Oi(i.item),lh:!!i.lh,outer:n,spin:s,r:e,base:{p:n.position.clone(),q:n.quaternion.clone()}},Kt.add(n)}var dn,de,We,$e,Kt,qn,Ze,Je,Yn,Le,an,ti,Bc=76,Gu=[],os=new Set,Wu=new Set,zc=[],js="ponti",Ks=!1,Jo=null,Xu=0,$s=[],px=document.getElementById("labels"),qu=1,Yu={abort:!0};function as(i,t,e,n){let s={t0:performance.now(),dur:i*qu,fn:t,done:e,fail:n};return $s.push(s),s}var be=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;function mx(){let i=document.getElementById("c");try{dn=new To({canvas:i,antialias:!0,alpha:!0})}catch(F){wn({type:"nogl",msg:String(F)});return}dn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),dn.setSize(window.innerWidth,window.innerHeight,!1),dn.toneMapping=oc||rc,dn.toneMappingExposure=.95,dn.shadowMap.enabled=!0,dn.shadowMap.type=rs?Bn:sc,dn.setClearColor(0,0),de=new Bs,de.background=null;let t=new Fs(dn);de.environment=t.fromScene(new Yo,.03).texture,de.environmentIntensity=1.05,We=new nn(35,window.innerWidth/window.innerHeight,1,1e3),We.position.set(0,112,64),$e=new qo(We,dn.domElement),$e.enableDamping=!0,$e.dampingFactor=.12,$e.minDistance=18,$e.maxDistance=260,$e.maxPolarAngle=Math.PI*.47,$e.target.set(0,0,0);let e=new Lr(16777215,1.7);e.position.set(-35,110,45),e.castShadow=!0,e.shadow.mapSize.set(rs?2048:1024,rs?2048:1024),e.shadow.radius=rs?6:2,e.shadow.blurSamples=12,e.shadow.camera.left=-62,e.shadow.camera.right=62,e.shadow.camera.top=62,e.shadow.camera.bottom=-62,e.shadow.camera.near=10,e.shadow.camera.far=260,e.shadow.bias=-4e-4,e.shadow.normalBias=.02,de.add(e),de.add(new Oo(16777215,8357784,.45));let n=new Lr(14674175,.55);n.position.set(70,40,-60),de.add(n);let s=new re(new Er(190,96),Ge({color:2240589,metalness:0,roughness:.95,map:hx()}));s.rotation.x=-Math.PI/2,s.position.y=-16,s.receiveShadow=!0,de.add(s),ti=new Yt;let r=new Vs,o=46,a=92,l=5;r.moveTo(-o/2+l,-a/2),r.lineTo(o/2-l,-a/2),r.quadraticCurveTo(o/2,-a/2,o/2,-a/2+l),r.lineTo(o/2,a/2-l),r.quadraticCurveTo(o/2,a/2,o/2-l,a/2),r.lineTo(-o/2+l,a/2),r.quadraticCurveTo(-o/2,a/2,-o/2,a/2-l),r.lineTo(-o/2,-a/2+l),r.quadraticCurveTo(-o/2,-a/2,-o/2+l,-a/2);let c=new Rr(r,{depth:.6,bevelEnabled:!1});c.rotateX(-Math.PI/2);let h=new re(c,Ge({color:6127470,roughness:.95,metalness:0}));h.receiveShadow=!0,ti.add(h),ti.position.set(Bc,-15.9,0),ti.visible=!1,de.add(ti),Kt=new Yt,de.add(Kt),dx(Kt),qn=new Yt;let u=[[0,0],[7.5,0],[8.2,.4],[8.6,2.2],[8.1,2.3],[7.4,.7],[0,.7]].map(F=>new dt(F[0],F[1])),d=lt(new Sr(u,64),Ge({color:16185338,metalness:.1,roughness:.4}));qn.add(d),qn.position.set(62,-8,26),qn.visible=!1,de.add(qn),Ze=new Yt,Ze.add(lt(Wt(.28,0,9,16,.42),ut.steel())),Ze.add(lt(Wt(1.5,9,19,24),Ge({color:1915530,metalness:.2,roughness:.5})));let f=lt(new qe(.5,9,3.1),Ge({color:15895608,roughness:.5}));f.position.y=14,Ze.add(f),Ze.add(lt(Wt(1.55,19,20.5,24),Ge({color:15895608,roughness:.5}))),Ze.visible=!1,de.add(Ze),Le=new Yt;let x=new qe(.7,20,1.6);x.translate(0,10,0);for(let F of[-1,1]){let B=new Yt;B.position.y=20;let C=lt(x.clone(),ut.steel());C.position.y=-20,B.add(C),B.userData.sgn=F,Le.add(B)}Le.add(lt(Wt(1,19.5,21,16),ut.steel())),Le.visible=!1,de.add(Le),Js(1),an=new Yt;let y=lt(new Hs(.18,6,12),ut.steel());y.rotation.x=Math.PI,y.position.y=3,an.add(y),an.add(lt(Wt(.6,6,20,16),Ge({color:1915530,roughness:.5})));let g=lt(new ji(.32,16,12),ut.oil(),!1);g.position.y=.15,an.add(g),an.userData.drop=g,an.visible=!1,de.add(an),Je=new Yt;let p=lt(new Hs(.35,5,16),ut.steel());p.rotation.x=Math.PI,p.position.y=2.5,Je.add(p),Je.add(lt(Wt(.9,5,20,16),Ge({color:15895608,roughness:.5}))),Je.visible=!1,de.add(Je),Yn=new Yt;let L=Ge({color:15895608,emissive:15895608,emissiveIntensity:.6,side:Cn}),T=new Yt;T.add(new re(new Cr(1,.13,8,48,Math.PI*1.45),L));let M=new re(new Hs(.42,.9,16),L),W=Math.PI*1.45;M.position.set(Math.cos(W),Math.sin(W),0),M.rotation.z=W,T.add(M),T.rotation.x=-Math.PI/2,Yn.add(T),Yn.userData.arc=T,Yn.visible=!1,de.add(Yn);let O=null;dn.domElement.addEventListener("pointerdown",F=>{O={x:F.clientX,y:F.clientY,t:performance.now()}}),dn.domElement.addEventListener("pointerup",F=>{if(!O)return;Math.hypot(F.clientX-O.x,F.clientY-O.y)<8&&performance.now()-O.t<450&&_x(F.clientX,F.clientY),O=null}),window.addEventListener("resize",Lu),Lu(),requestAnimationFrame(nd),wn({type:"ready"})}function Lu(){let i=window.innerWidth,t=window.innerHeight;!dn||i===0||t===0||(dn.setSize(i,t,!1),We.aspect=i/t,We.updateProjectionMatrix())}function gx(i){for(let t=i;t;t=t.parent)if(!t.visible)return!1;return!0}function _x(i,t){let e=new zo,n=new dt(i/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);e.setFromCamera(n,We);let s=e.intersectObject(Kt,!0);for(let r of s){if(!gx(r.object))continue;let o=r.object;for(;o&&!(o.userData&&o.userData.id);)o=o.parent;if(!o)continue;let a=ie[o.userData.id];if(!(Ks&&a&&a.cover)){Jo=o.userData.id,Xu=performance.now()+1600,wn({type:"tap",id:o.userData.id,part:o.userData.part});return}}}function Cc(i,t){i.traverse(e=>{if(!e.isMesh)return;let n=Array.isArray(e.material)?e.material:[e.material];for(let s of n)t(s,e)})}function Ni(i,t){Cc(i,e=>{e.userData.baseOpacity===void 0&&(e.userData.baseOpacity=e.opacity),e.transparent=t<.999,e.opacity=t,e.depthWrite=t>.6})}function De(i,t){t.position.copy(i.base.p),t.quaternion.copy(i.base.q),t.scale.set(1,1,1)}function Du(i){for(let t of os)if(Oi(t)===i)return!0;return!1}function xx(){let i=$s.splice(0,$s.length);for(let t of i)t.fail&&t.fail(Yu);for(let t of[...de.children])t.userData&&t.userData.holder&&de.remove(t);Ze.visible=!1,Je.visible=!1,Yn.visible=!1}function jo(i){xx(),os=new Set(i.present||[]),Wu=new Set((i.highlight||[]).map(Oi)),zc=i.numbered||[],Ks=!!i.xray;let t=i.tray||[],e=(i.mat||[]).map(Oi);for(let r of Gu.splice(0))r.parent&&r.parent.remove(r);Le.visible=!1,an.visible=!1;let n=0;for(let r of Object.values(ie))r.obj.parent!==Kt&&Kt.add(r.obj),r.busy=!1,r.obj.scale.set(1,1,1),De(r,r.obj),(r.id==="cricchetto"||r.id==="rocchetto_cricco"||r.id==="racchetta")&&De(r,r.obj),r.obj.visible=Du(r.id),Ni(r.obj,Ks&&r.cover?.22:1);for(let r of[...new Set(e)]){let o=ie[r];!o||Du(r)||(o.obj.visible=!0,ju(o,n++,!1))}Or=n,ti.visible=n>0||!!i.showMat;let s=0;for(let r of Object.values(ni))r.outer.parent!==Kt&&Kt.add(r.outer),De(r,r.outer),r.spin.position.set(0,0,0),r.spin.rotation.set(0,0,0),Ni(r.outer,1),os.has(r.id)?r.outer.visible=!0:t.includes(r.id)?(r.outer.visible=!0,Zu(r,s++,!1)):r.outer.visible=!1;qn.visible=t.length>0||!!i.showTray,Ko=s,i.live&&yi(i.live),i.side&&i.side!==js?vx(i.side,i.animate!==!1):Kt.rotation.z=js==="quadrante"?Math.PI:0,i.focus&&Pc(i.focus,i.animate!==!1,i.zoom)}var Ko=0;function yx(i){let t=i*2.399,e=1.6+1.45*Math.sqrt(i);return new N(qn.position.x+Math.cos(t)*Math.min(e,6),qn.position.y+1.3,qn.position.z+Math.sin(t)*Math.min(e,6))}function Zu(i,t,e){de.attach(i.outer);let n=yx(t),s=new _n().setFromEuler(new In(Math.PI/2-.2,0,.6*t));if(!e){i.outer.position.copy(n),i.outer.quaternion.copy(s);return}let r=i.outer.position.clone(),o=i.outer.quaternion.clone();return new Promise((a,l)=>as(900,c=>{let h=be(c);i.outer.position.lerpVectors(r,n,h),i.outer.position.y+=Math.sin(h*Math.PI)*14,i.outer.quaternion.slerpQuaternions(o,s,h)},a,l))}function vx(i,t){js=i;let e=i==="quadrante"?Math.PI:0;if(!t){Kt.rotation.z=e;return}let n=Kt.rotation.z;as(900,s=>{Kt.rotation.z=n+(e-n)*be(s),Kt.position.y=Math.sin(s*Math.PI)*18})}function Mx(i){let t=new En,e=Kt.rotation.z,n=Kt.position.y;Kt.rotation.z=js==="quadrante"?Math.PI:0,Kt.position.y=0,Kt.updateMatrixWorld(!0);for(let s of i){let r=Oi(s),o=ie[r]&&ie[r].obj||ni[r]&&ni[r].outer;if(!o)continue;let a=o.visible;o.visible=!0;let l=new En().setFromObject(o);o.visible=a,l.isEmpty()||t.union(l)}return Kt.rotation.z=e,Kt.position.y=n,Kt.updateMatrixWorld(!0),t}function Pc(i,t=!0,e=1){let n=new N(0,0,0),s=52;if((!i||!i.length)&&ti&&ti.visible&&(n=new N(Bc/2-4,0,0),s=66),i&&i.length){let u=Mx(i);u.isEmpty()||(u.getCenter(n),s=Math.max(9,u.getSize(new N).length()/2))}let r=Math.min(240,Math.max(26,s/Math.sin(We.fov*Math.PI/360)*1.05*(e||1))),o=Math.atan2(We.position.x-$e.target.x,We.position.z-$e.target.z),a=i&&i.length?.55:.68,l=new N(n.x+r*Math.sin(a)*Math.sin(o),n.y+r*Math.cos(a),n.z+r*Math.sin(a)*Math.cos(o));if(!t){$e.target.copy(n),We.position.copy(l);return}let c=$e.target.clone(),h=We.position.clone();as(800,u=>{let d=be(u);$e.target.lerpVectors(c,n,d),We.position.lerpVectors(h,l,d)})}function Ic(i,t=0){return i.outer.updateMatrixWorld(!0),i.spin.localToWorld(new N(0,.62+t,0))}function kc(i,t,e){return Kt.updateMatrixWorld(!0),Kt.localToWorld(new N(Te(i),e,Ve(t)))}var $u=i=>new Promise((t,e)=>as(i,()=>{},t,e)),ye=(i,t)=>new Promise((e,n)=>as(i,t,e,n));function bx(i,t,e){Yn.visible=!0,Yn.position.copy(i).add(new N(0,.35,0));let n=t+1;Yn.scale.set(e?n:-n,n,n)}async function Sx(i,t){let e=i.lh?-1:1,n=t?-e:e;if(t){let l=new N;Kt.add(i.outer),De(i,i.outer),i.spin.position.y=1.4,i.outer.updateMatrixWorld(!0),i.outer.getWorldPosition(l);let c=new _n;i.outer.getWorldQuaternion(c),de.attach(i.outer);let h=i.outer.position.clone(),u=i._trayPos||h.clone().add(new N(0,20,0)),d=i._trayQuat||i.outer.quaternion.clone();i.outer.visible=!0,i.outer.position.copy(u),i.outer.quaternion.copy(d),await ye(800,f=>{let x=be(f);i.outer.position.lerpVectors(u,l,x),i.outer.position.y+=Math.sin(x*Math.PI)*12,i.outer.quaternion.slerpQuaternions(d,c,x)}),Kt.attach(i.outer),De(i,i.outer)}let s=Ic(i);bx(s,i.r,n>0),Ze.visible=!0,Ze.rotation.set(0,0,0),Ze.position.copy(s).add(new N(0,22,0)),await ye(550,l=>Ze.position.y=s.y+22*(1-be(l)));let r=3,o=i.spin.position.y;await ye(2300,l=>{let c=n*l*r*Se;i.spin.rotation.y=c,Ze.rotation.y=c,i.spin.position.y=t?o*(1-l):1.4*l;let h=Ic(i);Ze.position.copy(h),Yn.userData.arc.rotation.z=-c*.15}),Yn.visible=!1;let a=Ze.position.clone();await ye(450,l=>Ze.position.y=a.y+22*be(l)),Ze.visible=!1,t||(qn.visible=!0,await Zu(i,Ko++,!0))}var Ex=new Set(["cassa","fondello","stelo","rotore","quadrante","platina","lancette"]);async function Uu(i,t){let e=[...new Set(i.map(Oi))].map(r=>ie[r]).filter(Boolean);if(e.length&&!e.some(r=>Ex.has(r.id)))return t?Px(e):Cx(e);let n=e;for(let r of n)r.obj.visible=!0,Ni(r.obj,1);let s=n.length===1?n[0].id:null;await ye(1300,r=>{let o=be(t?1-r:r);for(let a of n)De(a,a.obj),a.id==="stelo"?a.obj.position.x-=16*o:a.id==="fondello"?(a.obj.rotation.y=o*1.6,a.obj.position.y+=22*Math.max(0,o-.35)/.65):(a.obj.position.y+=a.dir*20*o,a.obj.position.x+=(js==="quadrante"?-1:1)*16*Math.max(0,o-.25)/.75,(a.id==="ponte_bilanciere"||a.id==="bilanciere"||a.id==="spirale"||a.id==="racchetta")&&(a.obj.rotation.y=.12*Math.sin(o*Math.PI))),Ni(a.obj,o<.55?1:Math.max(0,1-(o-.55)/.45));for(let a of Object.values(ni))n.some(l=>l.id===a.item)&&a.outer.parent===Kt&&a.outer.visible&&(De(a,a.outer),a.outer.position.y+=ie[a.item].dir*20*o,a.outer.position.x+=(js==="quadrante"?-1:1)*16*Math.max(0,o-.25)/.75)});for(let r of n)De(r,r.obj),Ni(r.obj,Ks&&r.cover?.22:1),r.obj.visible=!!t}async function wx(i,t){let e=kc(i[0],i[1],t);Je.visible=!0,Je.position.copy(e).add(new N(0,18,0)),await ye(600,n=>Je.position.y=e.y+18*(1-be(n)));for(let n=0;n<2;n++)await ye(260,s=>Je.position.y=e.y+1.2*Math.sin(s*Math.PI));await $u(300),await ye(450,n=>Je.position.y=e.y+18*be(n)),Je.visible=!1}async function Tx(){let i=ie.cricchetto.obj,t=ie.rocchetto_cricco.obj,e=xe(ht.barrel,112,-2.2),n=kc(e[0],e[1],8);Je.visible=!0,Je.position.copy(n).add(new N(0,18,0)),await ye(600,s=>Je.position.y=n.y+18*(1-be(s))),await ye(400,s=>{i.rotation.y=.22*be(s)}),await ye(2600,s=>{t.rotation.y=-2.5*Se*(1-Math.pow(1-s,2))}),await ye(400,s=>{i.rotation.y=.22*(1-be(s))}),await ye(450,s=>Je.position.y=n.y+18*be(s)),Je.visible=!1,t.rotation.y=0}async function Ax(){let i=ie.racchetta.obj;for(let t of[.14,-.14,0]){let e=i.rotation.y;await ye(700,n=>{i.rotation.y=e+(t-e)*be(n)})}}var Nu=Promise.resolve();function Rx(i,t){Nu=Nu.then(async()=>{try{let e=i.t;if(e==="unscrew"||e==="screw"){let n=ni[i.ids[0]];if(n){if(e==="screw"){let s=n.outer.parent===de&&n.outer.visible;n._trayPos=s?n.outer.position.clone():null,n._trayQuat=s?n.outer.quaternion.clone():null}await Sx(n,e==="screw"),e==="screw"?(os.add(n.id),Ko=Math.max(0,Ko-1)):os.delete(n.id)}}else if(e==="lift"){await Uu(i.ids,!1);for(let n of i.ids)os.delete(n)}else if(e==="lower"){await Uu(i.ids,!0);for(let n of i.ids)os.add(n)}else e==="press"?await wx(i.at,.2):e==="letdown"?await Tx():e==="regulate"?await Ax():e==="oil"&&await Ix(i.ids[0],i.pts||[])}catch(e){if(e===Yu){wn({type:"aborted",seq:t});return}wn({type:"error",msg:String(e&&e.stack||e)})}wn({type:"done",seq:t})})}var Or=0;function Js(i){for(let t of Le.children)t.userData.sgn&&(t.rotation.z=t.userData.sgn*(.025+.06*i))}function Ju(i){let t=i%2,e=Math.floor(i/2);return new N(Bc-10+t*20,-15.2,-32+e*21)}function ju(i,t,e){let n=i.obj;de.attach(n);let s=n.position.clone(),r=n.scale.clone();n.scale.setScalar(.5),n.updateMatrixWorld(!0);let o=new En().setFromObject(n),a=o.getCenter(new N),l=Ju(t),c=s.clone().add(new N(l.x-a.x,l.y-o.min.y,l.z-a.z));return n.scale.copy(r),e?{end:c,p0:s,s0:r}:(n.position.copy(c),n.scale.setScalar(.5),{end:c})}function Lc(i){i.updateMatrixWorld(!0);let t=new En().setFromObject(i),e=t.getCenter(new N);return new N(e.x,t.max.y,e.z)}async function Cx(i){ti.visible=!0;let t=i[0];for(let d of i)d.busy=!0,d.obj.visible=!0,Ni(d.obj,1);let e=new Yt;e.userData.holder=!0,de.add(e);let n=Lc(t.obj);e.position.copy(n),e.updateMatrixWorld(!0);for(let d of i)e.attach(d.obj);Le.visible=!0,Js(1),Le.position.copy(n).add(new N(0,18,0)),Le.rotation.set(0,.5,.12),await ye(500,d=>Le.position.y=n.y+18*(1-be(d))-.4),await ye(250,d=>Js(1-d));let s=t.id==="ponte_bilanciere"?.22:.08,r=e.position.clone();await ye(700,d=>{let f=be(d);e.position.y=r.y+14*f,e.rotation.x=s*Math.sin(f*Math.PI),e.rotation.y=(t.id==="ponte_bilanciere"?.15:0)*Math.sin(f*Math.PI),Le.position.y=e.position.y-.4});let o=Or++,l=ju({obj:e},o,!0),c=l.p0,h=l.end;await ye(900,d=>{let f=be(d);e.position.lerpVectors(c,h,f),e.position.y+=Math.sin(f*Math.PI)*10,e.scale.setScalar(1-.5*f),e.rotation.x=0;let x=Lc(e);Le.position.set(x.x,x.y-.4,x.z)}),await ye(250,d=>Js(d));let u=Le.position.clone();await ye(400,d=>Le.position.y=u.y+20*be(d)),Le.visible=!1;for(let d of i)de.attach(d.obj),d.busy=!1;de.remove(e)}async function Px(i){let t=i[0];for(let c of i)c.obj.parent!==Kt&&Kt.add(c.obj),c.obj.scale.set(1,1,1),De(c,c.obj),c.obj.visible=!0,c.busy=!0,Ni(c.obj,1);Kt.updateMatrixWorld(!0);let e=Lc(t.obj),n=new Yt;n.userData.holder=!0,de.add(n),n.position.copy(e),n.updateMatrixWorld(!0);for(let c of i)n.attach(c.obj);let s=.5,r=Ju(Math.max(0,Or-1)),o=new N(r.x,r.y+3,r.z);n.position.copy(o),n.scale.setScalar(s),Le.visible=!0,Js(0),Le.rotation.set(0,.5,.12),await ye(1e3,c=>{let h=be(c);n.position.lerpVectors(o,e.clone().add(new N(0,10,0)),h),n.position.y+=Math.sin(h*Math.PI)*10,n.scale.setScalar(s+(1-s)*h),Le.position.set(n.position.x,n.position.y-.4,n.position.z)});let a=n.position.y;await ye(700,c=>{n.position.y=a+(e.y-a)*be(c),Le.position.y=n.position.y-.4}),await ye(250,c=>Js(c));let l=Le.position.clone();await ye(400,c=>Le.position.y=l.y+20*be(c)),Le.visible=!1;for(let c of i)Kt.attach(c.obj),De(c,c.obj),c.obj.scale.set(1,1,1),c.busy=!1;de.remove(n),Or=Math.max(0,Or-1)}async function Ix(i,t){let e=ie[Oi(i)],n=e?e.face:7.4;an.visible=!0;for(let s of t){let r=kc(s[0],s[1],e&&e.dir<0?n-.05:n+.05);an.userData.drop.visible=!0,an.position.copy(r).add(new N(0,16,0)),await ye(450,a=>an.position.y=r.y+16*(1-be(a))+.3),await $u(250);let o=lt(new ji(.45,16,12),ut.oil(),!1);o.scale.set(1,.45,1),o.position.copy(r).add(new N(0,.15,0)),de.add(o),Gu.push(o),an.userData.drop.visible=!1,await ye(350,a=>an.position.y=r.y+.3+10*be(a))}await ye(300,s=>an.position.y+=s*2),an.visible=!1}var ne={on:!1,speed:1,sound:!1,panel:!1,t:0,clock0:0,lastBeat:-1,demo:null},Lx=["bilanciere","spirale","ancora","ruota_scappamento","ruota_secondi","ruota_terzo","ruota_centro","bariletto"],Dc=4.6,Ou=.42,Dx=.16,Ux=4;function yi(i){if(i.on!==void 0&&(ne.on=!!i.on),i.speed!==void 0&&(ne.speed=Math.max(.005,+i.speed)),i.panel!==void 0&&(ne.panel=!!i.panel),!ne.clock0){let t=new Date;ne.clock0=t.getHours()*3600+t.getMinutes()*60+t.getSeconds()+t.getMilliseconds()/1e3}Oc()}function Nx(){for(let i of Lx){let t=ie[i];if(!t||!t.obj.visible||t.obj.parent!==Kt||t.busy)return!1}return!0}var Fu="",Bu=0;function Ox(i){let t=Se*Ux*i/2,e=Dc*Math.sin(t),n=t/Math.PI,s=Math.floor(n+.5),r=(n-s)*Math.PI,o=Math.asin(Math.min(1,Ou/Dc)),a=Math.min(1,Math.max(0,(r+o)/(2*o))),l=s-.5+a*a*(3-2*a),c=Dx*Math.max(-1,Math.min(1,e/Ou))*-1,h="libero";return Math.abs(r)<o&&(h=r<-o*.15?"sblocco":"impulso"),{theta:e,steps:l,fork:c,ph:h,beat:s}}function Fx(i,t){if(!ne.on||(ne.t+=i*ne.speed,!(Nx()||ne.demo==="escapement"||ne.demo==="energy")))return;let n=Ox(ne.t),s=-n.steps*(Se/20)/2,r=(c,h)=>{let u=ie[c];u&&u.obj.parent===Kt&&!u.busy&&(u.obj.rotation.y=h)};r("bilanciere",n.theta);let o=ie.spirale;if(o&&o.obj.parent===Kt&&!o.busy){o.obj.rotation.y=n.theta*.4;let c=1+.035*(n.theta/Dc);o.obj.scale.set(c,1,c)}r("ancora",n.fork),r("ruota_scappamento",s),r("ruota_secondi",-s/12),r("ruota_terzo",s/90),r("ruota_centro",-s/720),r("bariletto",s/5760);let a=ie.rotore;a&&a.obj.visible&&a.obj.parent===Kt&&!a.busy&&ne.speed<=1.5&&(a.obj.rotation.y=.5*Math.sin(ne.t*.8));let l=ie.lancette;if(l&&l.obj.parent===Kt&&ne.demo!=="keyless"){let c=ne.clock0+Math.floor(ne.t*8)/8;ta(l.obj,c)}n.beat!==ne.lastBeat&&(ne.lastBeat>=0&&ne.sound&&ne.speed<=2&&zx(n.beat%2),ne.lastBeat=n.beat),ne.demo==="escapement"&&n.ph!==Fu&&t-Bu>90&&(Fu=n.ph,Bu=t,wn({type:"phase",phase:n.ph}))}var yn=null,Uc=null;function Bx(){if(yn)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;yn=new i,Uc=yn.createBuffer(1,Math.floor(yn.sampleRate*.03),yn.sampleRate);let t=Uc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=(Math.random()*2-1)*Math.exp(-e/(yn.sampleRate*.0025))}function zx(i){if(!yn)return;let t=yn.createBufferSource();t.buffer=Uc;let e=yn.createBiquadFilter();e.type="bandpass",e.frequency.value=i?3600:4300,e.Q.value=2.5;let n=yn.createGain();n.gain.value=.9,t.connect(e).connect(n).connect(yn.destination),t.start()}var Nc=document.getElementById("live");function Oc(){if(!Nc)return;Nc.style.display=ne.panel?"flex":"none";let i=document.getElementById("lp-play"),t=document.getElementById("lp-sound"),e=document.getElementById("lp-speed");i&&(i.textContent=ne.on?"\u275A\u275A":"\u25B6"),t&&(t.textContent=ne.sound?"\u{1F50A}":"\u{1F508}"),e&&(e.textContent=ne.speed>=1?"1\xD7":ne.speed>=.1?"\u2152":"1/50")}Nc&&(document.getElementById("lp-play").addEventListener("click",()=>{yi({on:!ne.on})}),document.getElementById("lp-sound").addEventListener("click",()=>{Bx(),yn&&yn.state==="suspended"&&yn.resume(),ne.sound=!ne.sound,Oc()}),document.getElementById("lp-speed").addEventListener("click",()=>{ne.speed=ne.speed>=1?.1:ne.speed>=.1?.02:1,Oc()}));var Qs=null,Xn=null,on=null,ei={pos:0,posAnim:0,turning:!1,turnDir:1,psi:0,wrist:!1,ticking:!0,charge:.3,slip:0,flash:0,sentAt:0};function Ku(){Qs=null,ne.demo=null,Xn&&(de.remove(Xn),Xn=null),on&&(on.visible=!1),Kt.visible=!0;for(let i of["stelo","pignone_scorrevole","pignone_carica","tiretto","bascula","ruota_rinvio","ruota_minuteria","chaussee","ruota_ore","ruota_datario","disco_datario"]){let t=ie[i];t&&De(t,t.obj)}}function kx(i){var e,n;if(Ku(),!i||!i.kind){yi({on:!1});return}let t=i.kind;if(ne.demo=t,t==="escapement")jo({side:"ponti",present:["platina","ruota_scappamento","ancora","bilanciere","spirale","ruota_secondi","ruota_terzo"],focus:["ruota_scappamento","ancora","bilanciere"],zoom:.8}),yi({on:!0,speed:(e=i.speed)!=null?e:.05,panel:!1});else if(t==="energy"){let s=["platina","bariletto","ruota_centro","ruota_terzo","ruota_secondi","ruota_scappamento","ancora","bilanciere","spirale"];jo({side:"ponti",present:s,focus:s.slice(1),zoom:.9}),yi({on:!0,speed:(n=i.speed)!=null?n:60,panel:!1}),Hx()}else if(t==="keyless")jo({side:"quadrante",present:["platina","stelo","tiretto","pignone_carica","pignone_scorrevole","ruota_rinvio","bascula","chaussee","ruota_minuteria","ruota_ore","ruota_datario","lancette"],focus:["stelo","tiretto","bascula","pignone_scorrevole","ruota_rinvio"],zoom:.8}),yi({on:!1,panel:!1}),ei.psi=0,Qs=Vx,Qu(i);else if(t==="bridle"){yi({on:!1,panel:!1}),Kt.visible=!1,qn.visible=!1,ti.visible=!1,Gx(),on.visible=!0,Qs=Wx;let r=new En().setFromObject(on).getCenter(new N),o=$e.target.clone(),a=We.position.clone(),l=r.clone().add(new N(0,48,30));as(800,c=>{$e.target.lerpVectors(o,r,be(c)),We.position.lerpVectors(a,l,be(c))})}}function Hx(){let i=[ht.barrel,ht.center,ht.third,ht.fourth,ht.escape,ht.pallet,ht.balance].map((r,o)=>new N(Te(r[0]),6.2-o*.3,Ve(r[1]))),t=new Kn(i);Xn=new Yt;let e=new mi({color:16752704,transparent:!0,opacity:.95}),n=26;for(let r=0;r<n;r++){let o=new re(new ji(.75,14,10),e);o.userData.u=r/n,Xn.add(o)}let s=new re(new gi(t,120,.22,6),new mi({color:15895608,transparent:!0,opacity:.45}));Xn.add(s),Xn.userData.curve=t,de.add(Xn),Qs=r=>{if(Xn)for(let o of Xn.children){if(o.userData.u===void 0)continue;o.userData.u=(o.userData.u+r*.12)%1;let a=Xn.userData.curve.getPointAt(o.userData.u);o.position.copy(a);let l=.7+.5*Math.sin(o.userData.u*12+performance.now()/300);o.scale.setScalar(l)}}}function Qu(i){i.pos!==void 0&&(ei.pos=i.pos),i.turning!==void 0&&(ei.turning=!!i.turning),i.dir!==void 0&&(ei.turnDir=i.dir)}function Vx(i){let t=ei;t.posAnim+=(t.pos-t.posAnim)*Math.min(1,i*8);let e=t.turning?i*4*t.turnDir:0;t.psi+=e;let n=ie.stelo,s=ie.pignone_scorrevole,r=ie.pignone_carica;De(n,n.obj),n.obj.position.x-=1.5*t.posAnim,n.obj.rotation.x=t.psi,De(s,s.obj);let o=Math.min(1,t.posAnim);s.obj.position.x+=-1+2*o,s.obj.rotation.x=t.psi,De(r,r.obj),t.pos===0&&(t.windA=t.psi),r.obj.rotation.x=t.windA||0;let a=ie.tiretto,l=ie.bascula;De(a,a.obj),a.obj.rotation.y=-.1*t.posAnim,De(l,l.obj),l.obj.rotation.y=.12*o;let c=ei;t.pos===2&&e&&(c.setting=(c.setting||0)+e),t.pos===1&&e&&(c.date=(c.date||0)+e);let h=c.setting||0,u=ie.ruota_rinvio;De(u,u.obj),u.obj.rotation.y=h*1.6;let d=ie.ruota_minuteria;De(d,d.obj),d.obj.rotation.y=-h*.9;let f=ie.chaussee;De(f,f.obj),f.obj.rotation.y=h*.4;let x=ie.ruota_ore;De(x,x.obj),x.obj.rotation.y=h*.4/12,ta(ie.lancette.obj,10*3600+10*60+h*.4/Se*3600);let y=ie.ruota_datario;De(y,y.obj),y.obj.rotation.y=(c.date||0)*1.2;let g=ie.disco_datario;De(g,g.obj);let p=Math.floor((c.date||0)*1.2/Math.PI);g.obj.rotation.y=p*(Se/31)}function Gx(){if(on)return;on=new Yt;let i=14,t=lt(Jt([rn(ee,150,96)],0,.9,.08),ut.gold());on.add(t);let e=lt(Wt(i,.9,1.3,96),ut.brass());on.add(e);let n=new re(new ks(i,i,4.6,96,1,!0),Dn({color:14265688,metalness:1,roughness:.3,side:Cn}));n.position.y=3.6,n.castShadow=!0,n.receiveShadow=!0,on.add(n);let s=lt(Wt(2,0,7.2,32),ut.steel());on.add(s);let r=lt(new qe(.9,2,.9),ut.steel());r.position.set(2.2,3.4,0),on.add(r);let o=lt(new qe(2.4,1.2,2.4),ut.steel());o.position.y=6.8,on.add(o),on.userData.arbor=[s,r,o],on.position.set(0,2,0),de.add(on),td(.3,0)}var _i=null,ss=null;function td(i,t){let e=on;_i&&(e.remove(_i),_i.geometry.dispose()),ss&&(e.remove(ss),ss.geometry.dispose());let n=7.5,s=8.5-5.8*i,r=13-5.6*i,o=t-i*9,a=[],l=520;for(let f=0;f<=l;f++){let x=f/l,y=o+x*n*Se,g=s+(r-s)*Math.pow(x,.9);a.push(new N(Math.cos(y)*g,3.5,Math.sin(y)*g))}a.unshift(new N(Math.cos(o)*2.4,3.5,Math.sin(o)*2.4));let c=new Kn(a);_i=lt(new gi(c,900,.16,6),Dn({color:13226460,metalness:1,roughness:.18}),!1),_i.scale.y=1;let h=new re(_i.geometry,_i.material);_i.geometry.scale(1,1,1),e.add(_i);let u=o+n*Se,d=[];for(let f=0;f<=40;f++){let x=u+f/40*1.3;d.push(new N(Math.cos(x)*13.6,3.5,Math.sin(x)*13.6))}ss=lt(new gi(new Kn(d),60,.32,8),Dn({color:15895608,metalness:.6,roughness:.3,emissive:4200448}),!1),e.add(ss);for(let f of e.userData.arbor)f.rotation.y=-i*9}var Ac=0;function Wx(i,t){let e=ei,n=e.charge;e.wrist&&ed(i*.12),e.ticking&&(e.charge=Math.max(0,e.charge-i*.012)),e.flash=Math.max(0,e.flash-i*1.5),ss&&ss.material.emissive.setRGB(.25+.75*e.flash,.1*(1-e.flash),0),Ac+=Math.abs(e.charge-n)+(e.slipping?1:0),Ac>.002&&(td(e.charge,e.slip),Ac=0),e.slipping=!1,t-e.sentAt>180&&(e.sentAt=t,wn({type:"bridle",charge:e.charge,flash:e.flash}))}function ed(i){let t=ei;t.charge+=i,t.charge>1&&(t.slip+=(t.charge-1)*9,t.charge=1,t.flash=1,t.slipping=!0)}var ey=new N,Rc=0;function nd(i){let t=Rc?Math.min(.1,(i-Rc)/1e3):0;Rc=i;for(let n=$s.length-1;n>=0;n--){let s=$s[n],r=Math.min(1,(i-s.t0)/s.dur);s.fn(r),r>=1&&($s.splice(n,1),s.done&&s.done())}$e.update(),Fx(t,i),Qs&&Qs(t,i);let e=.35+.3*Math.sin(i/260);for(let n of Object.values(ie)){let s=Wu.has(n.id)||Jo===n.id;s===!!n._lit&&!s||(Cc(n.obj,r=>{r.emissive&&(r.userData.baseEmissive===void 0&&(r.userData.baseEmissive=r.emissive.getHex()),s?(r.emissive.setHex(15895608),r.emissiveIntensity=e):(r.emissive.setHex(r.userData.baseEmissive),r.emissiveIntensity=1))}),n._lit=s)}for(let n of Object.values(ni)){let s=zc.some(r=>r.id===n.id&&r.active);s===!!n._lit&&!s||(Cc(n.outer,r=>{r.emissive&&(r.userData.baseEmissive===void 0&&(r.userData.baseEmissive=r.emissive.getHex()),s?(r.emissive.setHex(15895608),r.emissiveIntensity=e):(r.emissive.setHex(r.userData.baseEmissive),r.emissiveIntensity=1))}),n._lit=s)}Jo&&i>Xu&&(Jo=null),dn.render(de,We),Xx(),requestAnimationFrame(nd)}var $o=[];function Xx(){let i=window.innerWidth,t=window.innerHeight,e=0;for(let n of zc){let s=ni[n.id];if(!s||!s.outer.visible||s.outer.parent!==Kt)continue;let r=Ic(s,.4).project(We);if(r.z>1)continue;let o=$o[e];o||(o=document.createElement("div"),o.className="lbl",px.appendChild(o),$o.push(o)),o.textContent=n.n,o.style.display="flex",o.classList.toggle("on",!!n.active),o.style.transform=`translate(${(r.x+1)/2*i-13}px, ${(1-r.y)/2*t-40}px)`,e++}for(let n=e;n<$o.length;n++)$o[n].style.display="none"}var is=null;function qx(i){let t=ie.lancette&&ie.lancette.obj,e=ie.quadrante&&ie.quadrante.obj;if(!t||!e)return;let n=t.userData.hands;if(!is){let r=-Math.PI/2,o=ht.fourth,a=new Yt;a.position.set(Te(o[0]),0,Ve(o[1])),a.add(lt(Ui(Jt(Nr(xe(o,22,r+Math.PI),xe(o,92,r),5),-8.3,.1,.02),o),ut.orange())),a.add(lt(Ui(Wt(.8,-8.4,-7.6,16),[500,500]),ut.hands())),a.visible=!1,t.add(a);let l=new Yt;l.add(lt(Jt(Vu(o,108,102),-7.66,.05,.01),ut.hands(),!1));for(let c=0;c<12;c++){let h=c/12*Se;l.add(lt(Jt(Nr(xe(o,92,h),xe(o,c%3===0?76:84,h),3.2),-7.66,.05,.01),ut.hands(),!1))}l.visible=!1,e.add(l),is={hand:a,dialRing:l,central:n.s}}let s=!!i.smallSeconds;is.central.visible=!s,is.hand.visible=s,is.dialRing.visible=s,n.s=s?is.hand:is.central,ta(t,10*3600+10*60+30)}window.W3D={setup(i){try{for(let t of i.screws||[])ni[t.id]||fx(t);wn({type:"setup",items:Object.keys(ie),screws:Object.keys(ni)})}catch(t){wn({type:"error",msg:String(t&&t.stack||t)})}},show(i){try{ne.demo&&Ku(),jo(i)}catch(t){wn({type:"error",msg:String(t&&t.stack||t)})}},play(i,t){Rx(i,t)},focus(i,t){Pc(i,!0,t)},setXray(i){Ks=!!i;for(let t of Object.values(ie))Ni(t.obj,Ks&&t.cover?.22:1)},_slow(i){qu=i},layout(i){try{qx(i||{})}catch(t){wn({type:"error",msg:String(t&&t.stack||t)})}},live(i){yi(i||{})},demo(i){var t;try{if(i&&ne.demo===i.kind){i.kind==="keyless"&&Qu(i),(i.kind==="escapement"||i.kind==="energy")&&yi({speed:(t=i.speed)!=null?t:ne.speed}),i.kind==="bridle"&&(i.wind&&ed(i.wind),i.wrist!==void 0&&(ei.wrist=!!i.wrist),i.ticking!==void 0&&(ei.ticking=!!i.ticking));return}kx(i)}catch(e){wn({type:"error",msg:String(e&&e.stack||e)})}},setQuality(i){try{localStorage.setItem("w3d_quality",i)}catch{}location.reload()},quality(){return rs?"high":"normal"},view(i){if(i==="top"){let t=We.position.clone(),e=We.position.distanceTo($e.target),n=$e.target.clone().add(new N(0,e*.995,e*.1));as(600,s=>We.position.lerpVectors(t,n,be(s)))}else Pc([],!0)}};mx();})();
/*! Bundled license information:

polygon-clipping/dist/polygon-clipping.umd.js:
  (**
   * splaytree v3.1.2
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
