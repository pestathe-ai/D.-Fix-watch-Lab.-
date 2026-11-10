(()=>{var hd=Object.create;var qc=Object.defineProperty;var ud=Object.getOwnPropertyDescriptor;var dd=Object.getOwnPropertyNames;var fd=Object.getPrototypeOf,pd=Object.prototype.hasOwnProperty;var md=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var gd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of dd(t))!pd.call(i,s)&&s!==e&&qc(i,s,{get:()=>t[s],enumerable:!(n=ud(t,s))||n.enumerable});return i};var _d=(i,t,e)=>(e=i!=null?hd(fd(i)):{},gd(t||!i||!i.__esModule?qc(e,"default",{value:i,enumerable:!0}):e,i));var Du=md((wc,Tc)=>{(function(i,t){typeof wc=="object"&&typeof Tc!="undefined"?Tc.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis!="undefined"?globalThis:i||self,i.polygonClipping=t())})(wc,function(){"use strict";function i(I,m){var _={label:0,sent:function(){if(R[0]&1)throw R[1];return R[1]},trys:[],ops:[]},b,w,R,V;return V={next:G(0),throw:G(1),return:G(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function G(k){return function(H){return A([k,H])}}function A(k){if(b)throw new TypeError("Generator is already executing.");for(;_;)try{if(b=1,w&&(R=k[0]&2?w.return:k[0]?w.throw||((R=w.return)&&R.call(w),0):w.next)&&!(R=R.call(w,k[1])).done)return R;switch(w=0,R&&(k=[k[0]&2,R.value]),k[0]){case 0:case 1:R=k;break;case 4:return _.label++,{value:k[1],done:!1};case 5:_.label++,w=k[1],k=[0];continue;case 7:k=_.ops.pop(),_.trys.pop();continue;default:if(R=_.trys,!(R=R.length>0&&R[R.length-1])&&(k[0]===6||k[0]===2)){_=0;continue}if(k[0]===3&&(!R||k[1]>R[0]&&k[1]<R[3])){_.label=k[1];break}if(k[0]===6&&_.label<R[1]){_.label=R[1],R=k;break}if(R&&_.label<R[2]){_.label=R[2],_.ops.push(k);break}R[2]&&_.ops.pop(),_.trys.pop();continue}k=m.call(I,_)}catch(H){k=[6,H],w=0}finally{b=R=0}if(k[0]&5)throw k[1];return{value:k[0]?k[1]:void 0,done:!0}}}var t=function(){function I(m,_){this.next=null,this.key=m,this.data=_,this.left=null,this.right=null}return I}();function e(I,m){return I>m?1:I<m?-1:0}function n(I,m,_){for(var b=new t(null,null),w=b,R=b;;){var V=_(I,m.key);if(V<0){if(m.left===null)break;if(_(I,m.left.key)<0){var G=m.left;if(m.left=G.right,G.right=m,m=G,m.left===null)break}R.left=m,R=m,m=m.left}else if(V>0){if(m.right===null)break;if(_(I,m.right.key)>0){var G=m.right;if(m.right=G.left,G.left=m,m=G,m.right===null)break}w.right=m,w=m,m=m.right}else break}return w.right=m.left,R.left=m.right,m.left=b.right,m.right=b.left,m}function s(I,m,_,b){var w=new t(I,m);if(_===null)return w.left=w.right=null,w;_=n(I,_,b);var R=b(I,_.key);return R<0?(w.left=_.left,w.right=_,_.left=null):R>=0&&(w.right=_.right,w.left=_,_.right=null),w}function r(I,m,_){var b=null,w=null;if(m){m=n(I,m,_);var R=_(m.key,I);R===0?(b=m.left,w=m.right):R<0?(w=m.right,m.right=null,b=m):(b=m.left,m.left=null,w=m)}return{left:b,right:w}}function a(I,m,_){return m===null?I:(I===null||(m=n(I.key,m,_),m.left=I),m)}function o(I,m,_,b,w){if(I){b(""+m+(_?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+w(I)+`
`);var R=m+(_?"    ":"\u2502   ");I.left&&o(I.left,R,!1,b,w),I.right&&o(I.right,R,!0,b,w)}}var l=function(){function I(m){m===void 0&&(m=e),this._root=null,this._size=0,this._comparator=m}return I.prototype.insert=function(m,_){return this._size++,this._root=s(m,_,this._root,this._comparator)},I.prototype.add=function(m,_){var b=new t(m,_);this._root===null&&(b.left=b.right=null,this._size++,this._root=b);var w=this._comparator,R=n(m,this._root,w),V=w(m,R.key);return V===0?this._root=R:(V<0?(b.left=R.left,b.right=R,R.left=null):V>0&&(b.right=R.right,b.left=R,R.right=null),this._size++,this._root=b),this._root},I.prototype.remove=function(m){this._root=this._remove(m,this._root,this._comparator)},I.prototype._remove=function(m,_,b){var w;if(_===null)return null;_=n(m,_,b);var R=b(m,_.key);return R===0?(_.left===null?w=_.right:(w=n(m,_.left,b),w.right=_.right),this._size--,w):_},I.prototype.pop=function(){var m=this._root;if(m){for(;m.left;)m=m.left;return this._root=n(m.key,this._root,this._comparator),this._root=this._remove(m.key,this._root,this._comparator),{key:m.key,data:m.data}}return null},I.prototype.findStatic=function(m){for(var _=this._root,b=this._comparator;_;){var w=b(m,_.key);if(w===0)return _;w<0?_=_.left:_=_.right}return null},I.prototype.find=function(m){return this._root&&(this._root=n(m,this._root,this._comparator),this._comparator(m,this._root.key)!==0)?null:this._root},I.prototype.contains=function(m){for(var _=this._root,b=this._comparator;_;){var w=b(m,_.key);if(w===0)return!0;w<0?_=_.left:_=_.right}return!1},I.prototype.forEach=function(m,_){for(var b=this._root,w=[],R=!1;!R;)b!==null?(w.push(b),b=b.left):w.length!==0?(b=w.pop(),m.call(_,b),b=b.right):R=!0;return this},I.prototype.range=function(m,_,b,w){for(var R=[],V=this._comparator,G=this._root,A;R.length!==0||G;)if(G)R.push(G),G=G.left;else{if(G=R.pop(),A=V(G.key,_),A>0)break;if(V(G.key,m)>=0&&b.call(w,G))return this;G=G.right}return this},I.prototype.keys=function(){var m=[];return this.forEach(function(_){var b=_.key;return m.push(b)}),m},I.prototype.values=function(){var m=[];return this.forEach(function(_){var b=_.data;return m.push(b)}),m},I.prototype.min=function(){return this._root?this.minNode(this._root).key:null},I.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},I.prototype.minNode=function(m){if(m===void 0&&(m=this._root),m)for(;m.left;)m=m.left;return m},I.prototype.maxNode=function(m){if(m===void 0&&(m=this._root),m)for(;m.right;)m=m.right;return m},I.prototype.at=function(m){for(var _=this._root,b=!1,w=0,R=[];!b;)if(_)R.push(_),_=_.left;else if(R.length>0){if(_=R.pop(),w===m)return _;w++,_=_.right}else b=!0;return null},I.prototype.next=function(m){var _=this._root,b=null;if(m.right){for(b=m.right;b.left;)b=b.left;return b}for(var w=this._comparator;_;){var R=w(m.key,_.key);if(R===0)break;R<0?(b=_,_=_.left):_=_.right}return b},I.prototype.prev=function(m){var _=this._root,b=null;if(m.left!==null){for(b=m.left;b.right;)b=b.right;return b}for(var w=this._comparator;_;){var R=w(m.key,_.key);if(R===0)break;R<0?_=_.left:(b=_,_=_.right)}return b},I.prototype.clear=function(){return this._root=null,this._size=0,this},I.prototype.toList=function(){return u(this._root)},I.prototype.load=function(m,_,b){_===void 0&&(_=[]),b===void 0&&(b=!1);var w=m.length,R=this._comparator;if(b&&x(m,_,0,w-1,R),this._root===null)this._root=c(m,_,0,w),this._size=w;else{var V=f(this.toList(),h(m,_),R);w=this._size+w,this._root=d({head:V},0,w)}return this},I.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(I.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(I.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),I.prototype.toString=function(m){m===void 0&&(m=function(b){return String(b.key)});var _=[];return o(this._root,"",!0,function(b){return _.push(b)},m),_.join("")},I.prototype.update=function(m,_,b){var w=this._comparator,R=r(m,this._root,w),V=R.left,G=R.right;w(m,_)<0?G=s(_,b,G,w):V=s(_,b,V,w),this._root=a(V,G,w)},I.prototype.split=function(m){return r(m,this._root,this._comparator)},I.prototype[Symbol.iterator]=function(){var m,_,b;return i(this,function(w){switch(w.label){case 0:m=this._root,_=[],b=!1,w.label=1;case 1:return b?[3,6]:m===null?[3,2]:(_.push(m),m=m.left,[3,5]);case 2:return _.length===0?[3,4]:(m=_.pop(),[4,m]);case 3:return w.sent(),m=m.right,[3,5];case 4:b=!0,w.label=5;case 5:return[3,1];case 6:return[2]}})},I}();function c(I,m,_,b){var w=b-_;if(w>0){var R=_+Math.floor(w/2),V=I[R],G=m[R],A=new t(V,G);return A.left=c(I,m,_,R),A.right=c(I,m,R+1,b),A}return null}function h(I,m){for(var _=new t(null,null),b=_,w=0;w<I.length;w++)b=b.next=new t(I[w],m[w]);return b.next=null,_.next}function u(I){for(var m=I,_=[],b=!1,w=new t(null,null),R=w;!b;)m?(_.push(m),m=m.left):_.length>0?(m=R=R.next=_.pop(),m=m.right):b=!0;return R.next=null,w.next}function d(I,m,_){var b=_-m;if(b>0){var w=m+Math.floor(b/2),R=d(I,m,w),V=I.head;return V.left=R,I.head=I.head.next,V.right=d(I,w+1,_),V}return null}function f(I,m,_){for(var b=new t(null,null),w=b,R=I,V=m;R!==null&&V!==null;)_(R.key,V.key)<0?(w.next=R,R=R.next):(w.next=V,V=V.next),w=w.next;return R!==null?w.next=R:V!==null&&(w.next=V),b.next}function x(I,m,_,b,w){if(!(_>=b)){for(var R=I[_+b>>1],V=_-1,G=b+1;;){do V++;while(w(I[V],R)<0);do G--;while(w(I[G],R)>0);if(V>=G)break;var A=I[V];I[V]=I[G],I[G]=A,A=m[V],m[V]=m[G],m[G]=A}x(I,m,_,G,w),x(I,m,G+1,b,w)}}let y=(I,m)=>I.ll.x<=m.x&&m.x<=I.ur.x&&I.ll.y<=m.y&&m.y<=I.ur.y,g=(I,m)=>{if(m.ur.x<I.ll.x||I.ur.x<m.ll.x||m.ur.y<I.ll.y||I.ur.y<m.ll.y)return null;let _=I.ll.x<m.ll.x?m.ll.x:I.ll.x,b=I.ur.x<m.ur.x?I.ur.x:m.ur.x,w=I.ll.y<m.ll.y?m.ll.y:I.ll.y,R=I.ur.y<m.ur.y?I.ur.y:m.ur.y;return{ll:{x:_,y:w},ur:{x:b,y:R}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let L=p*p,T=(I,m)=>{if(-p<I&&I<p&&-p<m&&m<p)return 0;let _=I-m;return _*_<L*I*m?0:I<m?-1:1};class M{constructor(){this.reset()}reset(){this.xRounder=new W,this.yRounder=new W}round(m,_){return{x:this.xRounder.round(m),y:this.yRounder.round(_)}}}class W{constructor(){this.tree=new l,this.round(0)}round(m){let _=this.tree.add(m),b=this.tree.prev(_);if(b!==null&&T(_.key,b.key)===0)return this.tree.remove(m),b.key;let w=this.tree.next(_);return w!==null&&T(_.key,w.key)===0?(this.tree.remove(m),w.key):m}}let O=new M,F=11102230246251565e-32,B=134217729,C=(3+8*F)*F;function S(I,m,_,b,w){let R,V,G,A,k=m[0],H=b[0],D=0,X=0;H>k==H>-k?(R=k,k=m[++D]):(R=H,H=b[++X]);let $=0;if(D<I&&X<_)for(H>k==H>-k?(V=k+R,G=R-(V-k),k=m[++D]):(V=H+R,G=R-(V-H),H=b[++X]),R=V,G!==0&&(w[$++]=G);D<I&&X<_;)H>k==H>-k?(V=R+k,A=V-R,G=R-(V-A)+(k-A),k=m[++D]):(V=R+H,A=V-R,G=R-(V-A)+(H-A),H=b[++X]),R=V,G!==0&&(w[$++]=G);for(;D<I;)V=R+k,A=V-R,G=R-(V-A)+(k-A),k=m[++D],R=V,G!==0&&(w[$++]=G);for(;X<_;)V=R+H,A=V-R,G=R-(V-A)+(H-A),H=b[++X],R=V,G!==0&&(w[$++]=G);return(R!==0||$===0)&&(w[$++]=R),$}function z(I,m){let _=m[0];for(let b=1;b<I;b++)_+=m[b];return _}function tt(I){return new Float64Array(I)}let J=(3+16*F)*F,et=(2+12*F)*F,ht=(9+64*F)*F*F,Q=tt(4),pt=tt(8),it=tt(12),bt=tt(16),yt=tt(4);function Lt(I,m,_,b,w,R,V){let G,A,k,H,D,X,$,_t,wt,Vt,Tt,oe,ve,Le,ze,Ce,Ke,ke,mn=I-w,Qe=_-w,gn=m-R,tn=b-R;Le=mn*tn,X=B*mn,$=X-(X-mn),_t=mn-$,X=B*tn,wt=X-(X-tn),Vt=tn-wt,ze=_t*Vt-(Le-$*wt-_t*wt-$*Vt),Ce=gn*Qe,X=B*gn,$=X-(X-gn),_t=gn-$,X=B*Qe,wt=X-(X-Qe),Vt=Qe-wt,Ke=_t*Vt-(Ce-$*wt-_t*wt-$*Vt),Tt=ze-Ke,D=ze-Tt,Q[0]=ze-(Tt+D)+(D-Ke),oe=Le+Tt,D=oe-Le,ve=Le-(oe-D)+(Tt-D),Tt=ve-Ce,D=ve-Tt,Q[1]=ve-(Tt+D)+(D-Ce),ke=oe+Tt,D=ke-oe,Q[2]=oe-(ke-D)+(Tt-D),Q[3]=ke;let Cn=z(4,Q),Ei=et*V;if(Cn>=Ei||-Cn>=Ei||(D=I-mn,G=I-(mn+D)+(D-w),D=_-Qe,k=_-(Qe+D)+(D-w),D=m-gn,A=m-(gn+D)+(D-R),D=b-tn,H=b-(tn+D)+(D-R),G===0&&A===0&&k===0&&H===0)||(Ei=ht*V+C*Math.abs(Cn),Cn+=mn*H+tn*G-(gn*k+Qe*A),Cn>=Ei||-Cn>=Ei))return Cn;Le=G*tn,X=B*G,$=X-(X-G),_t=G-$,X=B*tn,wt=X-(X-tn),Vt=tn-wt,ze=_t*Vt-(Le-$*wt-_t*wt-$*Vt),Ce=A*Qe,X=B*A,$=X-(X-A),_t=A-$,X=B*Qe,wt=X-(X-Qe),Vt=Qe-wt,Ke=_t*Vt-(Ce-$*wt-_t*wt-$*Vt),Tt=ze-Ke,D=ze-Tt,yt[0]=ze-(Tt+D)+(D-Ke),oe=Le+Tt,D=oe-Le,ve=Le-(oe-D)+(Tt-D),Tt=ve-Ce,D=ve-Tt,yt[1]=ve-(Tt+D)+(D-Ce),ke=oe+Tt,D=ke-oe,yt[2]=oe-(ke-D)+(Tt-D),yt[3]=ke;let oa=S(4,Q,4,yt,pt);Le=mn*H,X=B*mn,$=X-(X-mn),_t=mn-$,X=B*H,wt=X-(X-H),Vt=H-wt,ze=_t*Vt-(Le-$*wt-_t*wt-$*Vt),Ce=gn*k,X=B*gn,$=X-(X-gn),_t=gn-$,X=B*k,wt=X-(X-k),Vt=k-wt,Ke=_t*Vt-(Ce-$*wt-_t*wt-$*Vt),Tt=ze-Ke,D=ze-Tt,yt[0]=ze-(Tt+D)+(D-Ke),oe=Le+Tt,D=oe-Le,ve=Le-(oe-D)+(Tt-D),Tt=ve-Ce,D=ve-Tt,yt[1]=ve-(Tt+D)+(D-Ce),ke=oe+Tt,D=ke-oe,yt[2]=oe-(ke-D)+(Tt-D),yt[3]=ke;let aa=S(oa,pt,4,yt,it);Le=G*H,X=B*G,$=X-(X-G),_t=G-$,X=B*H,wt=X-(X-H),Vt=H-wt,ze=_t*Vt-(Le-$*wt-_t*wt-$*Vt),Ce=A*k,X=B*A,$=X-(X-A),_t=A-$,X=B*k,wt=X-(X-k),Vt=k-wt,Ke=_t*Vt-(Ce-$*wt-_t*wt-$*Vt),Tt=ze-Ke,D=ze-Tt,yt[0]=ze-(Tt+D)+(D-Ke),oe=Le+Tt,D=oe-Le,ve=Le-(oe-D)+(Tt-D),Tt=ve-Ce,D=ve-Tt,yt[1]=ve-(Tt+D)+(D-Ce),ke=oe+Tt,D=ke-oe,yt[2]=oe-(ke-D)+(Tt-D),yt[3]=ke;let la=S(aa,it,4,yt,bt);return bt[la-1]}function Xt(I,m,_,b,w,R){let V=(m-R)*(_-w),G=(I-w)*(b-R),A=V-G,k=Math.abs(V+G);return Math.abs(A)>=J*k?A:-Lt(I,m,_,b,w,R,k)}let ae=(I,m)=>I.x*m.y-I.y*m.x,ot=(I,m)=>I.x*m.x+I.y*m.y,mt=(I,m,_)=>{let b=Xt(I.x,I.y,m.x,m.y,_.x,_.y);return b>0?-1:b<0?1:0},It=I=>Math.sqrt(ot(I,I)),Mt=(I,m,_)=>{let b={x:m.x-I.x,y:m.y-I.y},w={x:_.x-I.x,y:_.y-I.y};return ae(w,b)/It(w)/It(b)},zt=(I,m,_)=>{let b={x:m.x-I.x,y:m.y-I.y},w={x:_.x-I.x,y:_.y-I.y};return ot(w,b)/It(w)/It(b)},Gt=(I,m,_)=>m.y===0?null:{x:I.x+m.x/m.y*(_-I.y),y:_},Ht=(I,m,_)=>m.x===0?null:{x:_,y:I.y+m.y/m.x*(_-I.x)},le=(I,m,_,b)=>{if(m.x===0)return Ht(_,b,I.x);if(b.x===0)return Ht(I,m,_.x);if(m.y===0)return Gt(_,b,I.y);if(b.y===0)return Gt(I,m,_.y);let w=ae(m,b);if(w==0)return null;let R={x:_.x-I.x,y:_.y-I.y},V=ae(R,m)/w,G=ae(R,b)/w,A=I.x+G*m.x,k=_.x+V*b.x,H=I.y+G*m.y,D=_.y+V*b.y,X=(A+k)/2,$=(H+D)/2;return{x:X,y:$}};class rt{static compare(m,_){let b=rt.comparePoints(m.point,_.point);return b!==0?b:(m.point!==_.point&&m.link(_),m.isLeft!==_.isLeft?m.isLeft?1:-1:U.compare(m.segment,_.segment))}static comparePoints(m,_){return m.x<_.x?-1:m.x>_.x?1:m.y<_.y?-1:m.y>_.y?1:0}constructor(m,_){m.events===void 0?m.events=[this]:m.events.push(this),this.point=m,this.isLeft=_}link(m){if(m.point===this.point)throw new Error("Tried to link already linked events");let _=m.point.events;for(let b=0,w=_.length;b<w;b++){let R=_[b];this.point.events.push(R),R.point=this.point}this.checkForConsuming()}checkForConsuming(){let m=this.point.events.length;for(let _=0;_<m;_++){let b=this.point.events[_];if(b.segment.consumedBy===void 0)for(let w=_+1;w<m;w++){let R=this.point.events[w];R.consumedBy===void 0&&b.otherSE.point.events===R.otherSE.point.events&&b.segment.consume(R.segment)}}}getAvailableLinkedEvents(){let m=[];for(let _=0,b=this.point.events.length;_<b;_++){let w=this.point.events[_];w!==this&&!w.segment.ringOut&&w.segment.isInResult()&&m.push(w)}return m}getLeftmostComparator(m){let _=new Map,b=w=>{let R=w.otherSE;_.set(w,{sine:Mt(this.point,m.point,R.point),cosine:zt(this.point,m.point,R.point)})};return(w,R)=>{_.has(w)||b(w),_.has(R)||b(R);let{sine:V,cosine:G}=_.get(w),{sine:A,cosine:k}=_.get(R);return V>=0&&A>=0?G<k?1:G>k?-1:0:V<0&&A<0?G<k?-1:G>k?1:0:A<V?-1:A>V?1:0}}}let gt=0;class U{static compare(m,_){let b=m.leftSE.point.x,w=_.leftSE.point.x,R=m.rightSE.point.x,V=_.rightSE.point.x;if(V<b)return 1;if(R<w)return-1;let G=m.leftSE.point.y,A=_.leftSE.point.y,k=m.rightSE.point.y,H=_.rightSE.point.y;if(b<w){if(A<G&&A<k)return 1;if(A>G&&A>k)return-1;let D=m.comparePoint(_.leftSE.point);if(D<0)return 1;if(D>0)return-1;let X=_.comparePoint(m.rightSE.point);return X!==0?X:-1}if(b>w){if(G<A&&G<H)return-1;if(G>A&&G>H)return 1;let D=_.comparePoint(m.leftSE.point);if(D!==0)return D;let X=m.comparePoint(_.rightSE.point);return X<0?1:X>0?-1:1}if(G<A)return-1;if(G>A)return 1;if(R<V){let D=_.comparePoint(m.rightSE.point);if(D!==0)return D}if(R>V){let D=m.comparePoint(_.rightSE.point);if(D<0)return 1;if(D>0)return-1}if(R!==V){let D=k-G,X=R-b,$=H-A,_t=V-w;if(D>X&&$<_t)return 1;if(D<X&&$>_t)return-1}return R>V?1:R<V||k<H?-1:k>H?1:m.id<_.id?-1:m.id>_.id?1:0}constructor(m,_,b,w){this.id=++gt,this.leftSE=m,m.segment=this,m.otherSE=_,this.rightSE=_,_.segment=this,_.otherSE=m,this.rings=b,this.windings=w}static fromRing(m,_,b){let w,R,V,G=rt.comparePoints(m,_);if(G<0)w=m,R=_,V=1;else if(G>0)w=_,R=m,V=-1;else throw new Error(`Tried to create degenerate segment at [${m.x}, ${m.y}]`);let A=new rt(w,!0),k=new rt(R,!1);return new U(A,k,[b],[V])}replaceRightSE(m){this.rightSE=m,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let m=this.leftSE.point.y,_=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:m<_?m:_},ur:{x:this.rightSE.point.x,y:m>_?m:_}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(m){return m.x===this.leftSE.point.x&&m.y===this.leftSE.point.y||m.x===this.rightSE.point.x&&m.y===this.rightSE.point.y}comparePoint(m){if(this.isAnEndpoint(m))return 0;let _=this.leftSE.point,b=this.rightSE.point,w=this.vector();if(_.x===b.x)return m.x===_.x?0:m.x<_.x?1:-1;let R=(m.y-_.y)/w.y,V=_.x+R*w.x;if(m.x===V)return 0;let G=(m.x-_.x)/w.x,A=_.y+G*w.y;return m.y===A?0:m.y<A?-1:1}getIntersection(m){let _=this.bbox(),b=m.bbox(),w=g(_,b);if(w===null)return null;let R=this.leftSE.point,V=this.rightSE.point,G=m.leftSE.point,A=m.rightSE.point,k=y(_,G)&&this.comparePoint(G)===0,H=y(b,R)&&m.comparePoint(R)===0,D=y(_,A)&&this.comparePoint(A)===0,X=y(b,V)&&m.comparePoint(V)===0;if(H&&k)return X&&!D?V:!X&&D?A:null;if(H)return D&&R.x===A.x&&R.y===A.y?null:R;if(k)return X&&V.x===G.x&&V.y===G.y?null:G;if(X&&D)return null;if(X)return V;if(D)return A;let $=le(R,this.vector(),G,m.vector());return $===null||!y(w,$)?null:O.round($.x,$.y)}split(m){let _=[],b=m.events!==void 0,w=new rt(m,!0),R=new rt(m,!1),V=this.rightSE;this.replaceRightSE(R),_.push(R),_.push(w);let G=new U(w,V,this.rings.slice(),this.windings.slice());return rt.comparePoints(G.leftSE.point,G.rightSE.point)>0&&G.swapEvents(),rt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),b&&(w.checkForConsuming(),R.checkForConsuming()),_}swapEvents(){let m=this.rightSE;this.rightSE=this.leftSE,this.leftSE=m,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let _=0,b=this.windings.length;_<b;_++)this.windings[_]*=-1}consume(m){let _=this,b=m;for(;_.consumedBy;)_=_.consumedBy;for(;b.consumedBy;)b=b.consumedBy;let w=U.compare(_,b);if(w!==0){if(w>0){let R=_;_=b,b=R}if(_.prev===b){let R=_;_=b,b=R}for(let R=0,V=b.rings.length;R<V;R++){let G=b.rings[R],A=b.windings[R],k=_.rings.indexOf(G);k===-1?(_.rings.push(G),_.windings.push(A)):_.windings[k]+=A}b.rings=null,b.windings=null,b.consumedBy=_,b.leftSE.consumedBy=_.leftSE,b.rightSE.consumedBy=_.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let m=this.prev.consumedBy||this.prev;this._beforeState=m.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let m=this.beforeState();this._afterState={rings:m.rings.slice(0),windings:m.windings.slice(0),multiPolys:[]};let _=this._afterState.rings,b=this._afterState.windings,w=this._afterState.multiPolys;for(let G=0,A=this.rings.length;G<A;G++){let k=this.rings[G],H=this.windings[G],D=_.indexOf(k);D===-1?(_.push(k),b.push(H)):b[D]+=H}let R=[],V=[];for(let G=0,A=_.length;G<A;G++){if(b[G]===0)continue;let k=_[G],H=k.poly;if(V.indexOf(H)===-1)if(k.isExterior)R.push(H);else{V.indexOf(H)===-1&&V.push(H);let D=R.indexOf(k.poly);D!==-1&&R.splice(D,1)}}for(let G=0,A=R.length;G<A;G++){let k=R[G].multiPoly;w.indexOf(k)===-1&&w.push(k)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let m=this.beforeState().multiPolys,_=this.afterState().multiPolys;switch(lt.type){case"union":{let b=m.length===0,w=_.length===0;this._isInResult=b!==w;break}case"intersection":{let b,w;m.length<_.length?(b=m.length,w=_.length):(b=_.length,w=m.length),this._isInResult=w===lt.numMultiPolys&&b<w;break}case"xor":{let b=Math.abs(m.length-_.length);this._isInResult=b%2===1;break}case"difference":{let b=w=>w.length===1&&w[0].isSubject;this._isInResult=b(m)!==b(_);break}default:throw new Error(`Unrecognized operation type found ${lt.type}`)}return this._isInResult}}class Dt{constructor(m,_,b){if(!Array.isArray(m)||m.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=_,this.isExterior=b,this.segments=[],typeof m[0][0]!="number"||typeof m[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let w=O.round(m[0][0],m[0][1]);this.bbox={ll:{x:w.x,y:w.y},ur:{x:w.x,y:w.y}};let R=w;for(let V=1,G=m.length;V<G;V++){if(typeof m[V][0]!="number"||typeof m[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let A=O.round(m[V][0],m[V][1]);A.x===R.x&&A.y===R.y||(this.segments.push(U.fromRing(R,A,this)),A.x<this.bbox.ll.x&&(this.bbox.ll.x=A.x),A.y<this.bbox.ll.y&&(this.bbox.ll.y=A.y),A.x>this.bbox.ur.x&&(this.bbox.ur.x=A.x),A.y>this.bbox.ur.y&&(this.bbox.ur.y=A.y),R=A)}(w.x!==R.x||w.y!==R.y)&&this.segments.push(U.fromRing(R,w,this))}getSweepEvents(){let m=[];for(let _=0,b=this.segments.length;_<b;_++){let w=this.segments[_];m.push(w.leftSE),m.push(w.rightSE)}return m}}class ft{constructor(m,_){if(!Array.isArray(m))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Dt(m[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let b=1,w=m.length;b<w;b++){let R=new Dt(m[b],this,!1);R.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=R.bbox.ll.x),R.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=R.bbox.ll.y),R.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=R.bbox.ur.x),R.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=R.bbox.ur.y),this.interiorRings.push(R)}this.multiPoly=_}getSweepEvents(){let m=this.exteriorRing.getSweepEvents();for(let _=0,b=this.interiorRings.length;_<b;_++){let w=this.interiorRings[_].getSweepEvents();for(let R=0,V=w.length;R<V;R++)m.push(w[R])}return m}}class Rt{constructor(m,_){if(!Array.isArray(m))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof m[0][0][0]=="number"&&(m=[m])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let b=0,w=m.length;b<w;b++){let R=new ft(m[b],this);R.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=R.bbox.ll.x),R.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=R.bbox.ll.y),R.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=R.bbox.ur.x),R.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=R.bbox.ur.y),this.polys.push(R)}this.isSubject=_}getSweepEvents(){let m=[];for(let _=0,b=this.polys.length;_<b;_++){let w=this.polys[_].getSweepEvents();for(let R=0,V=w.length;R<V;R++)m.push(w[R])}return m}}class vt{static factory(m){let _=[];for(let b=0,w=m.length;b<w;b++){let R=m[b];if(!R.isInResult()||R.ringOut)continue;let V=null,G=R.leftSE,A=R.rightSE,k=[G],H=G.point,D=[];for(;V=G,G=A,k.push(G),G.point!==H;)for(;;){let X=G.getAvailableLinkedEvents();if(X.length===0){let wt=k[0].point,Vt=k[k.length-1].point;throw new Error(`Unable to complete output ring starting at [${wt.x}, ${wt.y}]. Last matching segment found ends at [${Vt.x}, ${Vt.y}].`)}if(X.length===1){A=X[0].otherSE;break}let $=null;for(let wt=0,Vt=D.length;wt<Vt;wt++)if(D[wt].point===G.point){$=wt;break}if($!==null){let wt=D.splice($)[0],Vt=k.splice(wt.index);Vt.unshift(Vt[0].otherSE),_.push(new vt(Vt.reverse()));continue}D.push({index:k.length,point:G.point});let _t=G.getLeftmostComparator(V);A=X.sort(_t)[0].otherSE;break}_.push(new vt(k))}return _}constructor(m){this.events=m;for(let _=0,b=m.length;_<b;_++)m[_].segment.ringOut=this;this.poly=null}getGeom(){let m=this.events[0].point,_=[m];for(let k=1,H=this.events.length-1;k<H;k++){let D=this.events[k].point,X=this.events[k+1].point;mt(D,m,X)!==0&&(_.push(D),m=D)}if(_.length===1)return null;let b=_[0],w=_[1];mt(b,m,w)===0&&_.shift(),_.push(_[0]);let R=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:_.length-1,G=this.isExteriorRing()?_.length:-1,A=[];for(let k=V;k!=G;k+=R)A.push([_[k].x,_[k].y]);return A}isExteriorRing(){if(this._isExteriorRing===void 0){let m=this.enclosingRing();this._isExteriorRing=m?!m.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let m=this.events[0];for(let w=1,R=this.events.length;w<R;w++){let V=this.events[w];rt.compare(m,V)>0&&(m=V)}let _=m.segment.prevInResult(),b=_?_.prevInResult():null;for(;;){if(!_)return null;if(!b)return _.ringOut;if(b.ringOut!==_.ringOut)return b.ringOut.enclosingRing()!==_.ringOut?_.ringOut:_.ringOut.enclosingRing();_=b.prevInResult(),b=_?_.prevInResult():null}}}class kt{constructor(m){this.exteriorRing=m,m.poly=this,this.interiorRings=[]}addInterior(m){this.interiorRings.push(m),m.poly=this}getGeom(){let m=[this.exteriorRing.getGeom()];if(m[0]===null)return null;for(let _=0,b=this.interiorRings.length;_<b;_++){let w=this.interiorRings[_].getGeom();w!==null&&m.push(w)}return m}}class Ct{constructor(m){this.rings=m,this.polys=this._composePolys(m)}getGeom(){let m=[];for(let _=0,b=this.polys.length;_<b;_++){let w=this.polys[_].getGeom();w!==null&&m.push(w)}return m}_composePolys(m){let _=[];for(let b=0,w=m.length;b<w;b++){let R=m[b];if(!R.poly)if(R.isExteriorRing())_.push(new kt(R));else{let V=R.enclosingRing();V.poly||_.push(new kt(V)),V.poly.addInterior(R)}}return _}}class P{constructor(m){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U.compare;this.queue=m,this.tree=new l(_),this.segments=[]}process(m){let _=m.segment,b=[];if(m.consumedBy)return m.isLeft?this.queue.remove(m.otherSE):this.tree.remove(_),b;let w=m.isLeft?this.tree.add(_):this.tree.find(_);if(!w)throw new Error(`Unable to find segment #${_.id} [${_.leftSE.point.x}, ${_.leftSE.point.y}] -> [${_.rightSE.point.x}, ${_.rightSE.point.y}] in SweepLine tree.`);let R=w,V=w,G,A;for(;G===void 0;)R=this.tree.prev(R),R===null?G=null:R.key.consumedBy===void 0&&(G=R.key);for(;A===void 0;)V=this.tree.next(V),V===null?A=null:V.key.consumedBy===void 0&&(A=V.key);if(m.isLeft){let k=null;if(G){let D=G.getIntersection(_);if(D!==null&&(_.isAnEndpoint(D)||(k=D),!G.isAnEndpoint(D))){let X=this._splitSafely(G,D);for(let $=0,_t=X.length;$<_t;$++)b.push(X[$])}}let H=null;if(A){let D=A.getIntersection(_);if(D!==null&&(_.isAnEndpoint(D)||(H=D),!A.isAnEndpoint(D))){let X=this._splitSafely(A,D);for(let $=0,_t=X.length;$<_t;$++)b.push(X[$])}}if(k!==null||H!==null){let D=null;k===null?D=H:H===null?D=k:D=rt.comparePoints(k,H)<=0?k:H,this.queue.remove(_.rightSE),b.push(_.rightSE);let X=_.split(D);for(let $=0,_t=X.length;$<_t;$++)b.push(X[$])}b.length>0?(this.tree.remove(_),b.push(m)):(this.segments.push(_),_.prev=G)}else{if(G&&A){let k=G.getIntersection(A);if(k!==null){if(!G.isAnEndpoint(k)){let H=this._splitSafely(G,k);for(let D=0,X=H.length;D<X;D++)b.push(H[D])}if(!A.isAnEndpoint(k)){let H=this._splitSafely(A,k);for(let D=0,X=H.length;D<X;D++)b.push(H[D])}}}this.tree.remove(_)}return b}_splitSafely(m,_){this.tree.remove(m);let b=m.rightSE;this.queue.remove(b);let w=m.split(_);return w.push(b),m.consumedBy===void 0&&this.tree.add(m),w}}let v=typeof process!="undefined"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,Z=typeof process!="undefined"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class st{run(m,_,b){lt.type=m,O.reset();let w=[new Rt(_,!0)];for(let D=0,X=b.length;D<X;D++)w.push(new Rt(b[D],!1));if(lt.numMultiPolys=w.length,lt.type==="difference"){let D=w[0],X=1;for(;X<w.length;)g(w[X].bbox,D.bbox)!==null?X++:w.splice(X,1)}if(lt.type==="intersection")for(let D=0,X=w.length;D<X;D++){let $=w[D];for(let _t=D+1,wt=w.length;_t<wt;_t++)if(g($.bbox,w[_t].bbox)===null)return[]}let R=new l(rt.compare);for(let D=0,X=w.length;D<X;D++){let $=w[D].getSweepEvents();for(let _t=0,wt=$.length;_t<wt;_t++)if(R.insert($[_t]),R.size>v)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new P(R),G=R.size,A=R.pop();for(;A;){let D=A.key;if(R.size===G){let $=D.segment;throw new Error(`Unable to pop() ${D.isLeft?"left":"right"} SweepEvent [${D.point.x}, ${D.point.y}] from segment #${$.id} [${$.leftSE.point.x}, ${$.leftSE.point.y}] -> [${$.rightSE.point.x}, ${$.rightSE.point.y}] from queue.`)}if(R.size>v)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>Z)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let X=V.process(D);for(let $=0,_t=X.length;$<_t;$++){let wt=X[$];wt.consumedBy===void 0&&R.insert(wt)}G=R.size,A=R.pop()}O.reset();let k=vt.factory(V.segments);return new Ct(k).getGeom()}}let lt=new st;var te={union:function(I){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];return lt.run("union",I,_)},intersection:function(I){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];return lt.run("intersection",I,_)},xor:function(I){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];return lt.run("xor",I,_)},difference:function(I){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];return lt.run("difference",I,_)}};return te})});var lc="170",rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xd=0,Yc=1,yd=2;var iu=1,cc=2,Vn=3,Oi=0,rn=1,Ln=2,Ui=0,Ps=1,Zc=2,$c=3,Jc=4,vd=5,$i=100,Md=101,bd=102,Sd=103,Ed=104,wd=200,Td=201,Ad=202,Rd=203,Va=204,Ga=205,Cd=206,Pd=207,Id=208,Ld=209,Dd=210,Ud=211,Nd=212,Od=213,Fd=214,Wa=0,Xa=1,qa=2,Us=3,Ya=4,Za=5,$a=6,Ja=7,su=0,Bd=1,zd=2,Ni=0,kd=1,Hd=2,Vd=3,hc=4,Gd=5,Wd=6,uc=7;var ru=300,Ns=301,Os=302,ja=303,Ka=304,Xo=306,vr=1e3,Wn=1001,Qa=1002,qn=1003,Xd=1004;var Hr=1005;var Qn=1006,ca=1007;var Ki=1008;var pi=1009,ou=1010,au=1011,Mr=1012,dc=1013,Qi=1014,ui=1015,Br=1016,fc=1017,pc=1018,Fs=1020,lu=35902,cu=1021,hu=1022,Xn=1023,uu=1024,du=1025,Is=1026,Bs=1027,fu=1028,mc=1029,pu=1030,gc=1031;var _c=1033,fo=33776,po=33777,mo=33778,go=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,yl=37820,vl=37821,_o=36492,Ml=36494,bl=36495,mu=36283,Sl=36284,El=36285,wl=36286;var xo=2300,Tl=2301,ha=2302,jc=2400,Kc=2401,Qc=2402;var qd=3200,Yd=3201;var gu=0,Zd=1,Di="",xn="srgb",Zs="srgb-linear",qo="linear",ge="srgb";var fs=7680;var th=519,$d=512,Jd=513,jd=514,_u=515,Kd=516,Qd=517,tf=518,ef=519,eh=35044;var nh="300 es",di=2e3,yo=2001,mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=1234567,pr=Math.PI/180,br=180/Math.PI;function as(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function nf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function sf(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function rf(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function of(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hf(i,t){return i+Math.random()*(t-i)}function uf(i){return i*(.5-Math.random())}function df(i){i!==void 0&&(ih=i);let t=ih+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ff(i){return i*pr}function pf(i){return i*br}function mf(i){return(i&i-1)===0&&i!==0}function gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function As(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xu={DEG2RAD:pr,RAD2DEG:br,generateUUID:as,clamp:Be,euclideanModulo:xc,mapLinear:nf,inverseLerp:sf,lerp:mr,damp:rf,pingpong:of,smoothstep:af,smootherstep:lf,randInt:cf,randFloat:hf,randFloatSpread:uf,seededRandom:df,degToRad:ff,radToDeg:pf,isPowerOfTwo:mf,ceilPowerOfTwo:gf,floorPowerOfTwo:_f,setQuaternionFromProperEuler:xf,normalize:cn,denormalize:As},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],y=s[0],g=s[3],p=s[6],L=s[1],T=s[4],M=s[7],W=s[2],O=s[5],F=s[8];return r[0]=a*y+o*L+l*W,r[3]=a*g+o*T+l*O,r[6]=a*p+o*M+l*F,r[1]=c*y+h*L+u*W,r[4]=c*g+h*T+u*O,r[7]=c*p+h*M+u*F,r[2]=d*y+f*L+x*W,r[5]=d*g+f*T+x*O,r[8]=d*p+f*M+x*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,x=e*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ua=new $t;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yf(){let i=vo("canvas");return i.style.display="block",i}var sh={};function dr(i){i in sh||(sh[i]=!0,console.warn(i))}function vf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ce={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rh=[.64,.33,.3,.6,.15,.06],oh=[.2126,.7152,.0722],ah=[.3127,.329],lh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Zs]:{primaries:rh,whitePoint:ah,transfer:qo,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:oh,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:rh,whitePoint:ah,transfer:ge,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:oh,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});var ps,Al=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=vo("canvas")),ps.width=t.width,ps.height=t.height;let n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=vo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sf=0,Mo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(da(s[a].image)):r.push(da(s[a]))}else r=da(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function da(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ef=0,Tn=class i extends mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Qn,a=Ki,o=Xn,l=pi,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=as(),this.name="",this.source=new Mo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=ru;Tn.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(f+1)/2,W=(p+1)/2,O=(h+d)/4,F=(u+y)/4,B=(x+g)/4;return T>M&&T>W?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=O/n,r=F/n):M>W?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=O/s,r=B/s):W<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(W),n=F/r,s=B/r),this.set(n,s,r,e),this}let L=Math.sqrt((g-x)*(g-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(L)<.001&&(L=1),this.x=(g-x)/L,this.y=(u-y)/L,this.z=(d-h)/L,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Mo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bo=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],x=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=x,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==x){let g=1-o,p=l*d+c*f+h*x+u*y,L=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let W=Math.sqrt(T),O=Math.atan2(W,p*L);g=Math.sin(g*O)/W,o=Math.sin(o*O)/W}let M=o*L;if(l=l*g+d*M,c=c*g+f*M,h=h*g+x*M,u=u*g+y*M,g===1-o){let W=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=W,c*=W,h*=W,u*=W}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*f-c*d,t[e+1]=l*x+h*d+c*u-o*f,t[e+2]=c*x+h*f+o*d-l*u,t[e+3]=h*x-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fa=new N,hh=new yn,An=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Gr.subVectors(this.max,ar),ms.subVectors(t.a,ar),gs.subVectors(t.b,ar),_s.subVectors(t.c,ar),Ai.subVectors(gs,ms),Ri.subVectors(_s,gs),Vi.subVectors(ms,_s);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Vi.z,Vi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Vi.z,0,-Vi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Vi.y,Vi.x,0];return!pa(e,ms,gs,_s,Gr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,ms,gs,_s,Gr))?!1:(Wr.crossVectors(Ai,Ri),e=[Wr.x,Wr.y,Wr.z],pa(e,ms,gs,_s,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new N,new N,new N,new N,new N,new N,new N,new N],zn=new N,Vr=new An,ms=new N,gs=new N,_s=new N,Ai=new N,Ri=new N,Vi=new N,ar=new N,Gr=new N,Wr=new N,Gi=new N;function pa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gi.fromArray(i,r);let o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wf=new An,lr=new N,ma=new N,Sr=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(ma)),this.expandByPoint(lr.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new N,ga=new N,Xr=new N,Ci=new N,_a=new N,qr=new N,xa=new N,zs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(ga);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xr),o=Ci.dot(this.direction),l=-Ci.dot(Xr),c=Ci.lengthSq(),h=Math.abs(1-a*a),u,d,f,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ga).addScaledVector(Xr,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),qr.subVectors(n,t),xa.crossVectors(_a,qr);let a=this.direction.dot(xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,t);let l=o*this.direction.dot(qr.crossVectors(Ci,qr));if(l<0)return null;let c=o*this.direction.dot(_a.cross(Ci));if(c<0||l+c>a)return null;let h=-o*Ci.dot(xa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,x,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,x,y,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,x,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,x=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+x*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,x=c*h,y=c*u;e[0]=d+y*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,x=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,x=o*h,y=o*u;e[0]=l*h,e[4]=x*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=x*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+x,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-x,e[2]=x*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Af)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Pi.crossVectors(n,En),Pi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Pi.crossVectors(n,En)),Pi.normalize(),Yr.crossVectors(En,Pi),s[0]=Pi.x,s[4]=Yr.x,s[8]=En.x,s[1]=Pi.y,s[5]=Yr.y,s[9]=En.y,s[2]=Pi.z,s[6]=Yr.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],y=n[6],g=n[10],p=n[14],L=n[3],T=n[7],M=n[11],W=n[15],O=s[0],F=s[4],B=s[8],C=s[12],S=s[1],z=s[5],tt=s[9],J=s[13],et=s[2],ht=s[6],Q=s[10],pt=s[14],it=s[3],bt=s[7],yt=s[11],Lt=s[15];return r[0]=a*O+o*S+l*et+c*it,r[4]=a*F+o*z+l*ht+c*bt,r[8]=a*B+o*tt+l*Q+c*yt,r[12]=a*C+o*J+l*pt+c*Lt,r[1]=h*O+u*S+d*et+f*it,r[5]=h*F+u*z+d*ht+f*bt,r[9]=h*B+u*tt+d*Q+f*yt,r[13]=h*C+u*J+d*pt+f*Lt,r[2]=x*O+y*S+g*et+p*it,r[6]=x*F+y*z+g*ht+p*bt,r[10]=x*B+y*tt+g*Q+p*yt,r[14]=x*C+y*J+g*pt+p*Lt,r[3]=L*O+T*S+M*et+W*it,r[7]=L*F+T*z+M*ht+W*bt,r[11]=L*B+T*tt+M*Q+W*yt,r[15]=L*C+T*J+M*pt+W*Lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],x=t[3],y=t[7],g=t[11],p=t[15];return x*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+y*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],x=t[12],y=t[13],g=t[14],p=t[15],L=u*g*c-y*d*c+y*l*f-o*g*f-u*l*p+o*d*p,T=x*d*c-h*g*c-x*l*f+a*g*f+h*l*p-a*d*p,M=h*y*c-x*u*c+x*o*f-a*y*f-h*o*p+a*u*p,W=x*u*l-h*y*l-x*o*d+a*y*d+h*o*g-a*u*g,O=e*L+n*T+s*M+r*W;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/O;return t[0]=L*F,t[1]=(y*d*r-u*g*r-y*s*f+n*g*f+u*s*p-n*d*p)*F,t[2]=(o*g*r-y*l*r+y*s*c-n*g*c-o*s*p+n*l*p)*F,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*F,t[4]=T*F,t[5]=(h*g*r-x*d*r+x*s*f-e*g*f-h*s*p+e*d*p)*F,t[6]=(x*l*r-a*g*r-x*s*c+e*g*c+a*s*p-e*l*p)*F,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*F,t[8]=M*F,t[9]=(x*u*r-h*y*r-x*n*f+e*y*f+h*n*p-e*u*p)*F,t[10]=(a*y*r-x*o*r+x*n*c-e*y*c-a*n*p+e*o*p)*F,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*F,t[12]=W*F,t[13]=(h*y*s-x*u*s+x*n*d-e*y*d-h*n*g+e*u*g)*F,t[14]=(x*o*s-a*y*s-x*n*l+e*y*l+a*n*g-e*o*g)*F,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,x=r*u,y=a*h,g=a*u,p=o*u,L=l*c,T=l*h,M=l*u,W=n.x,O=n.y,F=n.z;return s[0]=(1-(y+p))*W,s[1]=(f+M)*W,s[2]=(x-T)*W,s[3]=0,s[4]=(f-M)*O,s[5]=(1-(d+p))*O,s[6]=(g+L)*O,s[7]=0,s[8]=(x+T)*F,s[9]=(g-L)*F,s[10]=(1-(d+y))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xs.set(s[0],s[1],s[2]).length(),a=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);let c=1/r,h=1/a,u=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=di){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,x;if(o===di)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===yo)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=di){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,x,y;if(o===di)x=(a+r)*u,y=-2*u;else if(o===yo)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xs=new N,kn=new Ie,Tf=new N(0,0,0),Af=new N(1,1,1),Pi=new N,Yr=new N,En=new N,uh=new Ie,dh=new yn,Un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rf=0,fh=new N,ys=new yn,li=new Ie,Zr=new N,cr=new N,Cf=new N,Pf=new yn,ph=new N(1,0,0),mh=new N(0,1,0),gh=new N(0,0,1),_h={type:"added"},If={type:"removed"},vs={type:"childadded",child:null},ya={type:"childremoved",child:null},un=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Un,n=new yn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new $t}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zr.copy(t):Zr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(cr,Zr,this.up):li.lookAt(Zr,cr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(li),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_h),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(If),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_h),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};un.DEFAULT_UP=new N(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new N,ci=new N,va=new N,hi=new N,Ms=new N,bs=new N,xh=new N,Ma=new N,ba=new N,Sa=new N,Ea=new _e,wa=new _e,Ta=new _e,Ji=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),ci.subVectors(n,e),va.subVectors(t,e);let a=Hn.dot(Hn),o=Hn.dot(ci),l=Hn.dot(va),c=ci.dot(ci),h=ci.dot(va),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ea.setScalar(0),wa.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ea,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Ta,r.z),a}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),ci.subVectors(t,e),Hn.cross(ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Hn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),bs.subVectors(r,n),Ma.subVectors(t,n);let l=Ms.dot(Ma),c=bs.dot(Ma);if(l<=0&&c<=0)return e.copy(n);ba.subVectors(t,s);let h=Ms.dot(ba),u=bs.dot(ba);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ms,a);Sa.subVectors(t,r);let f=Ms.dot(Sa),x=bs.dot(Sa);if(x>=0&&f<=x)return e.copy(r);let y=f*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(bs,o);let g=h*x-f*u;if(g<=0&&u-h>=0&&f-x>=0)return xh.subVectors(r,s),o=(u-h)/(u-h+(f-x)),e.copy(s).addScaledVector(xh,o);let p=1/(g+y+d);return a=y*p,o=d*p,e.copy(n).addScaledVector(Ms,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=xc(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Aa(a,r,t+1/3),this.g=Aa(a,r,t),this.b=Aa(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){let n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ce.fromWorkingColorSpace(nn.copy(this),t),Math.round(Be(nn.r*255,0,255))*65536+Math.round(Be(nn.g*255,0,255))*256+Math.round(Be(nn.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=xn){ce.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,s=nn.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL($r);let n=mr(Ii.h,$r.h,e),s=mr(Ii.s,$r.s,e),r=mr(Ii.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new se;se.NAMES=vu;var Lf=0,ts=class extends mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=as(),this.name="",this.blending=Ps,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_i=class extends ts{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new N,Jr=new dt,Dn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=As(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eh&&(t.usage=this.usage),t}};var So=class extends Dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Eo=class extends Dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Df=0,In=new Ie,Ra=new un,Ss=new N,wn=new An,hr=new An,Ye=new N,dn=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?Eo:So)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(wn.min,hr.min),wn.expandByPoint(Ye),Ye.addVectors(wn.max,hr.max),wn.expandByPoint(Ye)):(wn.expandByPoint(hr.min),wn.expandByPoint(hr.max))}wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(t,c),Ye.add(Ss)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new N,l[B]=new N;let c=new N,h=new N,u=new N,d=new dt,f=new dt,x=new dt,y=new N,g=new N;function p(B,C,S){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,C),x.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),x.sub(d);let z=1/(f.x*x.y-x.x*f.y);isFinite(z)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(z),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(z),o[B].add(y),o[C].add(y),o[S].add(y),l[B].add(g),l[C].add(g),l[S].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let B=0,C=L.length;B<C;++B){let S=L[B],z=S.start,tt=S.count;for(let J=z,et=z+tt;J<et;J+=3)p(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let T=new N,M=new N,W=new N,O=new N;function F(B){W.fromBufferAttribute(s,B),O.copy(W);let C=o[B];T.copy(C),T.sub(W.multiplyScalar(W.dot(C))).normalize(),M.crossVectors(O,C);let z=M.dot(l[B])<0?-1:1;a.setXYZW(B,T.x,T.y,T.z,z)}for(let B=0,C=L.length;B<C;++B){let S=L[B],z=S.start,tt=S.count;for(let J=z,et=z+tt;J<et;J+=3)F(t.getX(J+0)),F(t.getX(J+1)),F(t.getX(J+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let x=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new Dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yh=new Ie,Wi=new zs,jr=new Sr,vh=new N,Kr=new N,Qr=new N,to=new N,Ca=new N,eo=new N,Mh=new N,no=new N,re=class extends un{constructor(t=new dn,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ca.fromBufferAttribute(u,t),a?eo.addScaledVector(Ca,h):eo.addScaledVector(Ca.sub(e),h))}e.add(eo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(jr.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(jr,vh)===null||Wi.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let g=d[x],p=a[g.materialIndex],L=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=L,W=T;M<W;M+=3){let O=o.getX(M),F=o.getX(M+1),B=o.getX(M+2);s=io(this,p,t,n,c,h,u,O,F,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=x,p=y;g<p;g+=3){let L=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);s=io(this,a,t,n,c,h,u,L,T,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let g=d[x],p=a[g.materialIndex],L=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=L,W=T;M<W;M+=3){let O=M,F=M+1,B=M+2;s=io(this,p,t,n,c,h,u,O,F,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=x,p=y;g<p;g+=3){let L=g,T=g+1,M=g+2;s=io(this,a,t,n,c,h,u,L,T,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Uf(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Oi,o),l===null)return null;no.copy(o),no.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(no);return c<e.near||c>e.far?null:{distance:c,point:no.clone(),object:i}}function io(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Kr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,to);let h=Uf(i,t,e,n,Kr,Qr,to,Mh);if(h){let u=new N;Ji.getBarycoord(Mh,Kr,Qr,to,u),s&&(h.uv=Ji.getInterpolatedAttribute(s,o,l,c,u,new dt)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,o,l,c,u,new dt)),a&&(h.normal=Ji.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Ji.getNormal(Kr,Qr,to,d.normal),h.face=d,h.barycoord=u}return h}var Ze=class i extends dn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function x(y,g,p,L,T,M,W,O,F,B,C){let S=M/F,z=W/B,tt=M/2,J=W/2,et=O/2,ht=F+1,Q=B+1,pt=0,it=0,bt=new N;for(let yt=0;yt<Q;yt++){let Lt=yt*z-J;for(let Xt=0;Xt<ht;Xt++){let ae=Xt*S-tt;bt[y]=ae*L,bt[g]=Lt*T,bt[p]=et,c.push(bt.x,bt.y,bt.z),bt[y]=0,bt[g]=0,bt[p]=O>0?1:-1,h.push(bt.x,bt.y,bt.z),u.push(Xt/F),u.push(1-yt/B),pt+=1}}for(let yt=0;yt<B;yt++)for(let Lt=0;Lt<F;Lt++){let Xt=d+Lt+ht*yt,ae=d+Lt+ht*(yt+1),ot=d+(Lt+1)+ht*(yt+1),mt=d+(Lt+1)+ht*yt;l.push(Xt,ae,mt),l.push(ae,ot,mt),it+=6}o.addGroup(f,it,C),f+=it,d+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=ks(i[e]);for(let s in n)t[s]=n[s]}return t}function Nf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Of={clone:ks,merge:hn},Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends ts{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=Nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wo=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new N,bh=new dt,Sh=new dt,sn=class extends wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Sh),e.subVectors(Sh,bh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Es=-90,ws=1,Pl=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Es,ws,t,e);s.layers=this.layers,this.add(s);let r=new sn(Es,ws,t,e);r.layers=this.layers,this.add(r);let a=new sn(Es,ws,t,e);a.layers=this.layers,this.add(a);let o=new sn(Es,ws,t,e);o.layers=this.layers,this.add(o);let l=new sn(Es,ws,t,e);l.layers=this.layers,this.add(l);let c=new sn(Es,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},To=class extends Tn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Il=class extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new To(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ui});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Qn),new Pl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Pa=new N,zf=new N,kf=new $t,Gn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Pa.subVectors(n,e).cross(zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kf.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new Sr,so=new N,wr=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],x=s[9],y=s[10],g=s[11],p=s[12],L=s[13],T=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,g-f,M-p).normalize(),n[1].setComponents(l+r,d+c,g+f,M+p).normalize(),n[2].setComponents(l+a,d+h,g+x,M+L).normalize(),n[3].setComponents(l-a,d-h,g-x,M-L).normalize(),n[4].setComponents(l-o,d-u,g-y,M-T).normalize(),e===di)n[5].setComponents(l+o,d+u,g+y,M+T).normalize();else if(e===yo)n[5].setComponents(o,u,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],y=u[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ao=class i extends dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],x=[],y=[],g=[];for(let p=0;p<h;p++){let L=p*d-a;for(let T=0;T<c;T++){let M=T*u-r;x.push(M,-L,0),y.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let L=0;L<o;L++){let T=L+c*p,M=L+c*(p+1),W=L+1+c*(p+1),O=L+1+c*p;f.push(T,M,O),f.push(M,W,O)}this.setIndex(f),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,kp=`struct PhysicalMaterial {
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
}`,Hp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,fg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Zf,aomap_pars_fragment:$f,batching_pars_vertex:Jf,batching_vertex:jf,begin_vertex:Kf,beginnormal_vertex:Qf,bsdfs:tp,iridescence_fragment:ep,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:hp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:vp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:bp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Up,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Lp,lights_pars_begin:Dp,lights_toon_fragment:Np,lights_toon_pars_fragment:Op,lights_phong_fragment:Fp,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:kp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Zp,map_pars_fragment:$p,map_particle_fragment:Jp,map_particle_pars_fragment:jp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:tm,morphcolor_vertex:em,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:vm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Im,specularmap_pars_fragment:Lm,tonemapping_fragment:Dm,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:Om,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:km,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:Zm,distanceRGBA_vert:$m,distanceRGBA_frag:Jm,equirect_vert:jm,equirect_frag:Km,linedashed_vert:Qm,linedashed_frag:tg,meshbasic_vert:eg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:dg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:xg,sprite_vert:yg,sprite_frag:vg},St={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Kn={basic:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new se(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:hn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:hn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new se(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:hn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:hn([St.points,St.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:hn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:hn([St.common,St.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:hn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:hn([St.sprite,St.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:hn([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:hn([St.lights,St.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Kn.physical={uniforms:hn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var ro={r:0,b:0,g:0},qi=new Un,Mg=new Ie;function bg(i,t,e,n,s,r,a){let o=new se(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(L){let T=L.isScene===!0?L.background:null;return T&&T.isTexture&&(T=(L.backgroundBlurriness>0?e:t).get(T)),T}function y(L){let T=!1,M=x(L);M===null?p(o,l):M&&M.isColor&&(p(M,1),T=!0);let W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,a):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(L,T){let M=x(T);M&&(M.isCubeTexture||M.mapping===Xo)?(h===void 0&&(h=new re(new Ze(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:ks(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qi.copy(T.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(qi)),h.material.toneMapped=ce.getTransfer(M.colorSpace)!==ge,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new re(new Ao(2,2),new ti({name:"BackgroundMaterial",uniforms:ks(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ce.getTransfer(M.colorSpace)!==ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null))}function p(L,T){L.getRGB(ro,Mu(i)),n.buffers.color.setClear(ro.r,ro.g,ro.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(L,T=1){o.set(L),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(L){l=L,p(o,l)},render:y,addToRenderList:g}}function Sg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,z,tt,J,et){let ht=!1,Q=u(J,tt,z);r!==Q&&(r=Q,c(r.object)),ht=f(S,J,tt,et),ht&&x(S,J,tt,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(ht||a)&&(a=!1,M(S,z,tt,J),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,z,tt){let J=tt.wireframe===!0,et=n[S.id];et===void 0&&(et={},n[S.id]=et);let ht=et[z.id];ht===void 0&&(ht={},et[z.id]=ht);let Q=ht[J];return Q===void 0&&(Q=d(l()),ht[J]=Q),Q}function d(S){let z=[],tt=[],J=[];for(let et=0;et<e;et++)z[et]=0,tt[et]=0,J[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:tt,attributeDivisors:J,object:S,attributes:{},index:null}}function f(S,z,tt,J){let et=r.attributes,ht=z.attributes,Q=0,pt=tt.getAttributes();for(let it in pt)if(pt[it].location>=0){let yt=et[it],Lt=ht[it];if(Lt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(Lt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(Lt=S.instanceColor)),yt===void 0||yt.attribute!==Lt||Lt&&yt.data!==Lt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==J}function x(S,z,tt,J){let et={},ht=z.attributes,Q=0,pt=tt.getAttributes();for(let it in pt)if(pt[it].location>=0){let yt=ht[it];yt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor));let Lt={};Lt.attribute=yt,yt&&yt.data&&(Lt.data=yt.data),et[it]=Lt,Q++}r.attributes=et,r.attributesNum=Q,r.index=J}function y(){let S=r.newAttributes;for(let z=0,tt=S.length;z<tt;z++)S[z]=0}function g(S){p(S,0)}function p(S,z){let tt=r.newAttributes,J=r.enabledAttributes,et=r.attributeDivisors;tt[S]=1,J[S]===0&&(i.enableVertexAttribArray(S),J[S]=1),et[S]!==z&&(i.vertexAttribDivisor(S,z),et[S]=z)}function L(){let S=r.newAttributes,z=r.enabledAttributes;for(let tt=0,J=z.length;tt<J;tt++)z[tt]!==S[tt]&&(i.disableVertexAttribArray(tt),z[tt]=0)}function T(S,z,tt,J,et,ht,Q){Q===!0?i.vertexAttribIPointer(S,z,tt,et,ht):i.vertexAttribPointer(S,z,tt,J,et,ht)}function M(S,z,tt,J){y();let et=J.attributes,ht=tt.getAttributes(),Q=z.defaultAttributeValues;for(let pt in ht){let it=ht[pt];if(it.location>=0){let bt=et[pt];if(bt===void 0&&(pt==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),pt==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor)),bt!==void 0){let yt=bt.normalized,Lt=bt.itemSize,Xt=t.get(bt);if(Xt===void 0)continue;let ae=Xt.buffer,ot=Xt.type,mt=Xt.bytesPerElement,It=ot===i.INT||ot===i.UNSIGNED_INT||bt.gpuType===dc;if(bt.isInterleavedBufferAttribute){let Mt=bt.data,zt=Mt.stride,Gt=bt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<it.locationSize;Ht++)p(it.location+Ht,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ht=0;Ht<it.locationSize;Ht++)g(it.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Ht=0;Ht<it.locationSize;Ht++)T(it.location+Ht,Lt/it.locationSize,ot,yt,zt*mt,(Gt+Lt/it.locationSize*Ht)*mt,It)}else{if(bt.isInstancedBufferAttribute){for(let Mt=0;Mt<it.locationSize;Mt++)p(it.location+Mt,bt.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Mt=0;Mt<it.locationSize;Mt++)g(it.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Mt=0;Mt<it.locationSize;Mt++)T(it.location+Mt,Lt/it.locationSize,ot,yt,Lt*mt,Lt/it.locationSize*Mt*mt,It)}}else if(Q!==void 0){let yt=Q[pt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(it.location,yt);break;case 3:i.vertexAttrib3fv(it.location,yt);break;case 4:i.vertexAttrib4fv(it.location,yt);break;default:i.vertexAttrib1fv(it.location,yt)}}}}L()}function W(){B();for(let S in n){let z=n[S];for(let tt in z){let J=z[tt];for(let et in J)h(J[et].object),delete J[et];delete z[tt]}delete n[S]}}function O(S){if(n[S.id]===void 0)return;let z=n[S.id];for(let tt in z){let J=z[tt];for(let et in J)h(J[et].object),delete J[et];delete z[tt]}delete n[S.id]}function F(S){for(let z in n){let tt=n[z];if(tt[S.id]===void 0)continue;let J=tt[S.id];for(let et in J)h(J[et].object),delete J[et];delete tt[S.id]}}function B(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:C,dispose:W,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:g,disableUnusedAttributes:L}}function Eg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y]*d[y];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==Xn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let B=F===Br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==pi&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ui&&!B)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=x>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:L,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:W,maxSamples:O}}function Tg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Gn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let L=r?0:n,T=L*4,M=p.clippingState||null;l.value=M,M=h(x,d,T,f);for(let W=0;W!==T;++W)M[W]=e[W];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,x){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,x!==!0||g===null){let p=f+y*4,L=d.matrixWorldInverse;o.getNormalMatrix(L),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,M=f;T!==y;++T,M+=4)a.copy(u[T]).applyMatrix4(L,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Ag(i){let t=new WeakMap;function e(a,o){return o===ja?a.mapping=Ns:o===Ka&&(a.mapping=Os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ja||o===Ka)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Il(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ro=class extends wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,Eh=[.125,.215,.35,.446,.526,.582],ji=20,Ia=new Ro,wh=new se,La=null,Da=0,Ua=0,Na=!1,Zi=(1+Math.sqrt(5))/2,Ts=1/Zi,Th=[new N(-Zi,Ts,0),new N(Zi,Ts,0),new N(-Ts,0,Zi),new N(Ts,0,Zi),new N(0,Zi,-Ts),new N(0,Zi,Ts),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Da,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Br,format:Xn,colorSpace:Zs,depthBuffer:!1},s=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Cg(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,s){let o=new sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wh),h.toneMapping=Ni,h.autoClear=!1;let f=new _i({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new re(new Ze,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(wh),y=!0);for(let p=0;p<6;p++){let L=p%3;L===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):L===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let T=this._cubeSize;oo(s,L*T,p>2?T:0,T,T),h.setRenderTarget(s),y&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ns||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;oo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Th[(s-r-1)%Th.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),y=r/x,g=isFinite(r)?1+Math.floor(h*y):ji;g>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ji}`);let p=[],L=0;for(let F=0;F<ji;++F){let B=F/y,C=Math.exp(-B*B/2);p.push(C),F===0?L+=C:F<g&&(L+=2*C)}for(let F=0;F<p.length;F++)p[F]=p[F]/L;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-n;let M=this._sizeLods[s],W=3*M*(s>T-Rs?s-T+Rs:0),O=4*(this._cubeSize-M);oo(e,W,O,3*M,2*M),l.setRenderTarget(e),l.render(u,Ia)}};function Rg(i){let t=[],e=[],n=[],s=i,r=i-Rs+1+Eh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Rs?l=Eh[a-i+Rs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,y=3,g=2,p=1,L=new Float32Array(y*x*f),T=new Float32Array(g*x*f),M=new Float32Array(p*x*f);for(let O=0;O<f;O++){let F=O%3*2/3-1,B=O>2?0:-1,C=[F,B,0,F+2/3,B,0,F+2/3,B+1,0,F,B,0,F+2/3,B+1,0,F,B+1,0];L.set(C,y*x*O),T.set(d,g*x*O);let S=[O,O,O,O,O,O];M.set(S,p*x*O)}let W=new dn;W.setAttribute("position",new Dn(L,y)),W.setAttribute("uv",new Dn(T,g)),W.setAttribute("faceIndex",new Dn(M,p)),t.push(W),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ah(i,t,e){let n=new gi(i,t,e);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cg(i,t,e){let n=new Float32Array(ji),s=new N(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Rh(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ch(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function Pg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ja||l===Ka,h=l===Ns||l===Os;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Hs(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Hs(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ig(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let y=d.morphAttributes[x];for(let g=0,p=y.length;g<p;g++)t.remove(y[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let y=f[x];for(let g=0,p=y.length;g<p;g++)t.update(y[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,x=u.attributes.position,y=0;if(f!==null){let L=f.array;y=f.version;for(let T=0,M=L.length;T<M;T+=3){let W=L[T+0],O=L[T+1],F=L[T+2];d.push(W,O,O,F,F,W)}}else if(x!==void 0){let L=x.array;y=x.version;for(let T=0,M=L.length/3-1;T<M;T+=3){let W=T+0,O=T+1,F=T+2;d.push(W,O,O,F,F,W)}}else return;let g=new(yu(d)?Eo:So)(d,1);g.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Dg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*a,x),e.update(f,n,x))}function h(d,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let g=0;for(let p=0;p<x;p++)g+=f[p];e.update(g,n,1)}function u(d,f,x,y){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,x);let p=0;for(let L=0;L<x;L++)p+=f[L]*y[L];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ug(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){let n=new WeakMap,s=new _e;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let C=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],L=o.morphAttributes.color||[],T=0;f===!0&&(T=1),x===!0&&(T=2),y===!0&&(T=3);let M=o.attributes.position.count*T,W=1;M>t.maxTextureSize&&(W=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let O=new Float32Array(M*W*4*u),F=new bo(O,M,W,u);F.type=ui,F.needsUpdate=!0;let B=T*4;for(let S=0;S<u;S++){let z=g[S],tt=p[S],J=L[S],et=M*W*4*S;for(let ht=0;ht<z.count;ht++){let Q=ht*B;f===!0&&(s.fromBufferAttribute(z,ht),O[et+Q+0]=s.x,O[et+Q+1]=s.y,O[et+Q+2]=s.z,O[et+Q+3]=0),x===!0&&(s.fromBufferAttribute(tt,ht),O[et+Q+4]=s.x,O[et+Q+5]=s.y,O[et+Q+6]=s.z,O[et+Q+7]=0),y===!0&&(s.fromBufferAttribute(J,ht),O[et+Q+8]=s.x,O[et+Q+9]=s.y,O[et+Q+10]=s.z,O[et+Q+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new dt(M,W)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Og(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Co=class extends Tn{constructor(t,e,n,s,r,a,o,l,c,h=Is){if(h!==Is&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=Qi),n===void 0&&h===Bs&&(n=Fs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Su=new Tn,Ph=new Co(1,1),Eu=new bo,wu=new Cl,Tu=new To,Ih=[],Lh=[],Dh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function $s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ih[s];if(r===void 0&&(r=new Float32Array(s),Ih[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),Ve(e,n)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Ve(e,n)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),Ve(e,n)}}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=_u,r=Ph):r=Su,e.setTexture2D(t||r,s)}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wu,s)}function t0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tu,s)}function e0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eu,s)}function n0(i){switch(i){case 5126:return Fg;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Hg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return $g;case 36295:return Jg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}function i0(i,t){i.uniform1fv(this.addr,t)}function s0(i,t){let e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function r0(i,t){let e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function o0(i,t){let e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function a0(i,t){let e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l0(i,t){let e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function c0(i,t){let e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h0(i,t){i.uniform1iv(this.addr,t)}function u0(i,t){i.uniform2iv(this.addr,t)}function d0(i,t){i.uniform3iv(this.addr,t)}function f0(i,t){i.uniform4iv(this.addr,t)}function p0(i,t){i.uniform1uiv(this.addr,t)}function m0(i,t){i.uniform2uiv(this.addr,t)}function g0(i,t){i.uniform3uiv(this.addr,t)}function _0(i,t){i.uniform4uiv(this.addr,t)}function x0(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Su,r[a])}function y0(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||wu,r[a])}function v0(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Tu,r[a])}function M0(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Eu,r[a])}function b0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return M0}}var Ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n0(e.type)}},Dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b0(e.type)}},Ul=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function S0(i,t,e){let n=i.name,s=n.length;for(Oa.lastIndex=0;;){let r=Oa.exec(n),a=Oa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oh(e,c===void 0?new Ll(o,i,t):new Dl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ul(o),Oh(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);S0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Fh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var E0=37297,w0=0;function T0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Bh=new $t;function A0(i){ce._getMatrix(Bh,ce.workingColorSpace,i);let t=`mat3( ${Bh.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case qo:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+T0(i.getShaderSource(t),a)}else return s}function R0(i,t){let e=A0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function C0(i,t){let e;switch(t){case kd:e="Linear";break;case Hd:e="Reinhard";break;case Vd:e="Cineon";break;case hc:e="ACESFilmic";break;case Wd:e="AgX";break;case uc:e="Neutral";break;case Gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ao=new N;function P0(){ce.getLuminanceCoefficients(ao);let i=ao.x.toFixed(4),t=ao.y.toFixed(4),e=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function L0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function D0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fr(i){return i!==""}function kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(i){return i.replace(U0,O0)}var N0=new Map;function O0(i,t){let e=Kt[t];if(e===void 0){let n=N0.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}var F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace(F0,B0)}function B0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function z0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function k0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Os:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function V0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case su:t="ENVMAP_BLENDING_MULTIPLY";break;case Bd:t="ENVMAP_BLENDING_MIX";break;case zd:t="ENVMAP_BLENDING_ADD";break}return t}function G0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function W0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=z0(e),c=k0(e),h=H0(e),u=V0(e),d=G0(e),f=I0(e),x=L0(r),y=s.createProgram(),g,p,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(fr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(g=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?C0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),P0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=Nl(a),a=kh(a,e),a=Hh(a,e),o=Nl(o),o=kh(o,e),o=Hh(o,e),a=Vh(a),o=Vh(o),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=L+g+a,M=L+p+o,W=Fh(s,s.VERTEX_SHADER,T),O=Fh(s,s.FRAGMENT_SHADER,M);s.attachShader(y,W),s.attachShader(y,O),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function F(z){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(y).trim(),J=s.getShaderInfoLog(W).trim(),et=s.getShaderInfoLog(O).trim(),ht=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,W,O);else{let pt=zh(s,W,"vertex"),it=zh(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+tt+`
`+pt+`
`+it)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(J===""||et==="")&&(Q=!1);Q&&(z.diagnostics={runnable:ht,programLog:tt,vertexShader:{log:J,prefix:g},fragmentShader:{log:et,prefix:p}})}s.deleteShader(W),s.deleteShader(O),B=new Ds(s,y),C=D0(s,y)}let B;this.getUniforms=function(){return B===void 0&&F(this),B};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,E0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=W,this.fragmentShader=O,this}var X0=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fl(t),e.set(t,n)),n}},Fl=class{constructor(t){this.id=X0++,this.code=t,this.usedTimes=0}};function q0(i,t,e,n,s,r,a){let o=new Er,l=new Ol,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(C){return c.add(C),C===0?"uv":`uv${C}`}function g(C,S,z,tt,J){let et=tt.fog,ht=J.geometry,Q=C.isMeshStandardMaterial?tt.environment:null,pt=(C.isMeshStandardMaterial?e:t).get(C.envMap||Q),it=pt&&pt.mapping===Xo?pt.image.height:null,bt=x[C.type];C.precision!==null&&(f=s.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));let yt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Lt=yt!==void 0?yt.length:0,Xt=0;ht.morphAttributes.position!==void 0&&(Xt=1),ht.morphAttributes.normal!==void 0&&(Xt=2),ht.morphAttributes.color!==void 0&&(Xt=3);let ae,ot,mt,It;if(bt){let Tt=Kn[bt];ae=Tt.vertexShader,ot=Tt.fragmentShader}else ae=C.vertexShader,ot=C.fragmentShader,l.update(C),mt=l.getVertexShaderID(C),It=l.getFragmentShaderID(C);let Mt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Gt=J.isInstancedMesh===!0,Ht=J.isBatchedMesh===!0,le=!!C.map,rt=!!C.matcap,gt=!!pt,U=!!C.aoMap,Dt=!!C.lightMap,ft=!!C.bumpMap,Rt=!!C.normalMap,vt=!!C.displacementMap,kt=!!C.emissiveMap,Ct=!!C.metalnessMap,P=!!C.roughnessMap,v=C.anisotropy>0,Z=C.clearcoat>0,st=C.dispersion>0,lt=C.iridescence>0,at=C.sheen>0,Ut=C.transmission>0,Et=v&&!!C.anisotropyMap,Pt=Z&&!!C.clearcoatMap,te=Z&&!!C.clearcoatNormalMap,I=Z&&!!C.clearcoatRoughnessMap,m=lt&&!!C.iridescenceMap,_=lt&&!!C.iridescenceThicknessMap,b=at&&!!C.sheenColorMap,w=at&&!!C.sheenRoughnessMap,R=!!C.specularMap,V=!!C.specularColorMap,G=!!C.specularIntensityMap,A=Ut&&!!C.transmissionMap,k=Ut&&!!C.thicknessMap,H=!!C.gradientMap,D=!!C.alphaMap,X=C.alphaTest>0,$=!!C.alphaHash,_t=!!C.extensions,wt=Ni;C.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(wt=i.toneMapping);let Vt={shaderID:bt,shaderType:C.type,shaderName:C.name,vertexShader:ae,fragmentShader:ot,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:It,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,batching:Ht,batchingColor:Ht&&J._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&J.instanceColor!==null,instancingMorph:Gt&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Zs,alphaToCoverage:!!C.alphaToCoverage,map:le,matcap:rt,envMap:gt,envMapMode:gt&&pt.mapping,envMapCubeUVHeight:it,aoMap:U,lightMap:Dt,bumpMap:ft,normalMap:Rt,displacementMap:d&&vt,emissiveMap:kt,normalMapObjectSpace:Rt&&C.normalMapType===Zd,normalMapTangentSpace:Rt&&C.normalMapType===gu,metalnessMap:Ct,roughnessMap:P,anisotropy:v,anisotropyMap:Et,clearcoat:Z,clearcoatMap:Pt,clearcoatNormalMap:te,clearcoatRoughnessMap:I,dispersion:st,iridescence:lt,iridescenceMap:m,iridescenceThicknessMap:_,sheen:at,sheenColorMap:b,sheenRoughnessMap:w,specularMap:R,specularColorMap:V,specularIntensityMap:G,transmission:Ut,transmissionMap:A,thicknessMap:k,gradientMap:H,opaque:C.transparent===!1&&C.blending===Ps&&C.alphaToCoverage===!1,alphaMap:D,alphaTest:X,alphaHash:$,combine:C.combine,mapUv:le&&y(C.map.channel),aoMapUv:U&&y(C.aoMap.channel),lightMapUv:Dt&&y(C.lightMap.channel),bumpMapUv:ft&&y(C.bumpMap.channel),normalMapUv:Rt&&y(C.normalMap.channel),displacementMapUv:vt&&y(C.displacementMap.channel),emissiveMapUv:kt&&y(C.emissiveMap.channel),metalnessMapUv:Ct&&y(C.metalnessMap.channel),roughnessMapUv:P&&y(C.roughnessMap.channel),anisotropyMapUv:Et&&y(C.anisotropyMap.channel),clearcoatMapUv:Pt&&y(C.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&y(C.clearcoatRoughnessMap.channel),iridescenceMapUv:m&&y(C.iridescenceMap.channel),iridescenceThicknessMapUv:_&&y(C.iridescenceThicknessMap.channel),sheenColorMapUv:b&&y(C.sheenColorMap.channel),sheenRoughnessMapUv:w&&y(C.sheenRoughnessMap.channel),specularMapUv:R&&y(C.specularMap.channel),specularColorMapUv:V&&y(C.specularColorMap.channel),specularIntensityMapUv:G&&y(C.specularIntensityMap.channel),transmissionMapUv:A&&y(C.transmissionMap.channel),thicknessMapUv:k&&y(C.thicknessMap.channel),alphaMapUv:D&&y(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Rt||v),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ht.attributes.uv&&(le||D),fog:!!et,useFog:C.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:J.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:le&&C.map.isVideoTexture===!0&&ce.getTransfer(C.map.colorSpace)===ge,decodeVideoTextureEmissive:kt&&C.emissiveMap.isVideoTexture===!0&&ce.getTransfer(C.emissiveMap.colorSpace)===ge,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ln,flipSided:C.side===rn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:_t&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&C.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(C){let S=[];if(C.shaderID?S.push(C.shaderID):(S.push(C.customVertexShaderID),S.push(C.customFragmentShaderID)),C.defines!==void 0)for(let z in C.defines)S.push(z),S.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(L(S,C),T(S,C),S.push(i.outputColorSpace)),S.push(C.customProgramCacheKey),S.join()}function L(C,S){C.push(S.precision),C.push(S.outputColorSpace),C.push(S.envMapMode),C.push(S.envMapCubeUVHeight),C.push(S.mapUv),C.push(S.alphaMapUv),C.push(S.lightMapUv),C.push(S.aoMapUv),C.push(S.bumpMapUv),C.push(S.normalMapUv),C.push(S.displacementMapUv),C.push(S.emissiveMapUv),C.push(S.metalnessMapUv),C.push(S.roughnessMapUv),C.push(S.anisotropyMapUv),C.push(S.clearcoatMapUv),C.push(S.clearcoatNormalMapUv),C.push(S.clearcoatRoughnessMapUv),C.push(S.iridescenceMapUv),C.push(S.iridescenceThicknessMapUv),C.push(S.sheenColorMapUv),C.push(S.sheenRoughnessMapUv),C.push(S.specularMapUv),C.push(S.specularColorMapUv),C.push(S.specularIntensityMapUv),C.push(S.transmissionMapUv),C.push(S.thicknessMapUv),C.push(S.combine),C.push(S.fogExp2),C.push(S.sizeAttenuation),C.push(S.morphTargetsCount),C.push(S.morphAttributeCount),C.push(S.numDirLights),C.push(S.numPointLights),C.push(S.numSpotLights),C.push(S.numSpotLightMaps),C.push(S.numHemiLights),C.push(S.numRectAreaLights),C.push(S.numDirLightShadows),C.push(S.numPointLightShadows),C.push(S.numSpotLightShadows),C.push(S.numSpotLightShadowsWithMaps),C.push(S.numLightProbes),C.push(S.shadowMapType),C.push(S.toneMapping),C.push(S.numClippingPlanes),C.push(S.numClipIntersection),C.push(S.depthPacking)}function T(C,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),C.push(o.mask)}function M(C){let S=x[C.type],z;if(S){let tt=Kn[S];z=Of.clone(tt.uniforms)}else z=C.uniforms;return z}function W(C,S){let z;for(let tt=0,J=h.length;tt<J;tt++){let et=h[tt];if(et.cacheKey===S){z=et,++z.usedTimes;break}}return z===void 0&&(z=new W0(i,S,C,r),h.push(z)),z}function O(C){if(--C.usedTimes===0){let S=h.indexOf(C);h[S]=h[h.length-1],h.pop(),C.destroy()}}function F(C){l.remove(C)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:W,releaseProgram:O,releaseShaderCache:F,programs:h,dispose:B}}function Y0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,x,y,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:y,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function o(u,d,f,x,y,g){let p=a(u,d,f,x,y,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,x,y,g){let p=a(u,d,f,x,y,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Z0),n.length>1&&n.sort(d||Wh),s.length>1&&s.sort(d||Wh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function $0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xh,i.set(n,[a])):s>=r.length?(a=new Xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function J0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new se};break;case"SpotLight":e={position:new N,direction:new N,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function j0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var K0=0;function Q0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t_(i){let t=new J0,e=j0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Ie,a=new Ie;function o(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,x=0,y=0,g=0,p=0,L=0,T=0,M=0,W=0,O=0,F=0;c.sort(Q0);for(let C=0,S=c.length;C<S;C++){let z=c[C],tt=z.color,J=z.intensity,et=z.distance,ht=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=tt.r*J,u+=tt.g*J,d+=tt.b*J;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(z.sh.coefficients[Q],J);F++}else if(z.isDirectionalLight){let Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let pt=z.shadow,it=e.get(z);it.shadowIntensity=pt.intensity,it.shadowBias=pt.bias,it.shadowNormalBias=pt.normalBias,it.shadowRadius=pt.radius,it.shadowMapSize=pt.mapSize,n.directionalShadow[f]=it,n.directionalShadowMap[f]=ht,n.directionalShadowMatrix[f]=z.shadow.matrix,L++}n.directional[f]=Q,f++}else if(z.isSpotLight){let Q=t.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(tt).multiplyScalar(J),Q.distance=et,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,n.spot[y]=Q;let pt=z.shadow;if(z.map&&(n.spotLightMap[W]=z.map,W++,pt.updateMatrices(z),z.castShadow&&O++),n.spotLightMatrix[y]=pt.matrix,z.castShadow){let it=e.get(z);it.shadowIntensity=pt.intensity,it.shadowBias=pt.bias,it.shadowNormalBias=pt.normalBias,it.shadowRadius=pt.radius,it.shadowMapSize=pt.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=ht,M++}y++}else if(z.isRectAreaLight){let Q=t.get(z);Q.color.copy(tt).multiplyScalar(J),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),n.rectArea[g]=Q,g++}else if(z.isPointLight){let Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){let pt=z.shadow,it=e.get(z);it.shadowIntensity=pt.intensity,it.shadowBias=pt.bias,it.shadowNormalBias=pt.normalBias,it.shadowRadius=pt.radius,it.shadowMapSize=pt.mapSize,it.shadowCameraNear=pt.camera.near,it.shadowCameraFar=pt.camera.far,n.pointShadow[x]=it,n.pointShadowMap[x]=ht,n.pointShadowMatrix[x]=z.shadow.matrix,T++}n.point[x]=Q,x++}else if(z.isHemisphereLight){let Q=t.get(z);Q.skyColor.copy(z.color).multiplyScalar(J),Q.groundColor.copy(z.groundColor).multiplyScalar(J),n.hemi[p]=Q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let B=n.hash;(B.directionalLength!==f||B.pointLength!==x||B.spotLength!==y||B.rectAreaLength!==g||B.hemiLength!==p||B.numDirectionalShadows!==L||B.numPointShadows!==T||B.numSpotShadows!==M||B.numSpotMaps!==W||B.numLightProbes!==F)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+W-O,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=F,B.directionalLength=f,B.pointLength=x,B.spotLength=y,B.rectAreaLength=g,B.hemiLength=p,B.numDirectionalShadows=L,B.numPointShadows=T,B.numSpotShadows=M,B.numSpotMaps=W,B.numLightProbes=F,n.version=K0++)}function l(c,h){let u=0,d=0,f=0,x=0,y=0,g=h.matrixWorldInverse;for(let p=0,L=c.length;p<L;p++){let T=c[p];if(T.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(T.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(T.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function qh(i){let t=new t_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function e_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qh(i),t.set(s,[o])):r>=a.length?(o=new qh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Bl=class extends ts{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zl=class extends ts{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
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
}`;function s_(i,t,e){let n=new wr,s=new dt,r=new dt,a=new _e,o=new Bl({depthPacking:Yd}),l=new zl,c={},h=e.maxTextureSize,u={[Oi]:rn,[rn]:Oi,[Ln]:Ln},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new dn;x.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new re(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(O,F,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||O.length===0)return;let C=i.getRenderTarget(),S=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(Ui),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let J=p!==Vn&&this.type===Vn,et=p===Vn&&this.type!==Vn;for(let ht=0,Q=O.length;ht<Q;ht++){let pt=O[ht],it=pt.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;s.copy(it.mapSize);let bt=it.getFrameExtents();if(s.multiply(bt),r.copy(it.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/bt.x),s.x=r.x*bt.x,it.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/bt.y),s.y=r.y*bt.y,it.mapSize.y=r.y)),it.map===null||J===!0||et===!0){let Lt=this.type!==Vn?{minFilter:qn,magFilter:qn}:{};it.map!==null&&it.map.dispose(),it.map=new gi(s.x,s.y,Lt),it.map.texture.name=pt.name+".shadowMap",it.camera.updateProjectionMatrix()}i.setRenderTarget(it.map),i.clear();let yt=it.getViewportCount();for(let Lt=0;Lt<yt;Lt++){let Xt=it.getViewport(Lt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),tt.viewport(a),it.updateMatrices(pt,Lt),n=it.getFrustum(),M(F,B,it.camera,pt,this.type)}it.isPointLightShadow!==!0&&this.type===Vn&&L(it,B),it.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(C,S,z)};function L(O,F){let B=t.update(y);d.defines.VSM_SAMPLES!==O.blurSamples&&(d.defines.VSM_SAMPLES=O.blurSamples,f.defines.VSM_SAMPLES=O.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new gi(s.x,s.y)),d.uniforms.shadow_pass.value=O.map.texture,d.uniforms.resolution.value=O.mapSize,d.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(F,null,B,d,y,null),f.uniforms.shadow_pass.value=O.mapPass.texture,f.uniforms.resolution.value=O.mapSize,f.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(F,null,B,f,y,null)}function T(O,F,B,C){let S=null,z=B.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)S=z;else if(S=B.isPointLight===!0?l:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let tt=S.uuid,J=F.uuid,et=c[tt];et===void 0&&(et={},c[tt]=et);let ht=et[J];ht===void 0&&(ht=S.clone(),et[J]=ht,F.addEventListener("dispose",W)),S=ht}if(S.visible=F.visible,S.wireframe=F.wireframe,C===Vn?S.side=F.shadowSide!==null?F.shadowSide:F.side:S.side=F.shadowSide!==null?F.shadowSide:u[F.side],S.alphaMap=F.alphaMap,S.alphaTest=F.alphaTest,S.map=F.map,S.clipShadows=F.clipShadows,S.clippingPlanes=F.clippingPlanes,S.clipIntersection=F.clipIntersection,S.displacementMap=F.displacementMap,S.displacementScale=F.displacementScale,S.displacementBias=F.displacementBias,S.wireframeLinewidth=F.wireframeLinewidth,S.linewidth=F.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let tt=i.properties.get(S);tt.light=B}return S}function M(O,F,B,C,S){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&S===Vn)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,O.matrixWorld);let J=t.update(O),et=O.material;if(Array.isArray(et)){let ht=J.groups;for(let Q=0,pt=ht.length;Q<pt;Q++){let it=ht[Q],bt=et[it.materialIndex];if(bt&&bt.visible){let yt=T(O,bt,C,S);O.onBeforeShadow(i,O,F,B,J,yt,it),i.renderBufferDirect(B,null,J,yt,O,it),O.onAfterShadow(i,O,F,B,J,yt,it)}}}else if(et.visible){let ht=T(O,et,C,S);O.onBeforeShadow(i,O,F,B,J,ht,null),i.renderBufferDirect(B,null,J,ht,O,null),O.onAfterShadow(i,O,F,B,J,ht,null)}}let tt=O.children;for(let J=0,et=tt.length;J<et;J++)M(tt[J],F,B,C,S)}function W(O){O.target.removeEventListener("dispose",W);for(let B in c){let C=c[B],S=O.target.uuid;S in C&&(C[S].dispose(),delete C[S])}}}var r_={[Wa]:Xa,[qa]:$a,[Ya]:Ja,[Us]:Za,[Xa]:Wa,[$a]:qa,[Ja]:Ya,[Za]:Us};function o_(i,t){function e(){let A=!1,k=new _e,H=null,D=new _e(0,0,0,0);return{setMask:function(X){H!==X&&!A&&(i.colorMask(X,X,X,X),H=X)},setLocked:function(X){A=X},setClear:function(X,$,_t,wt,Vt){Vt===!0&&(X*=wt,$*=wt,_t*=wt),k.set(X,$,_t,wt),D.equals(k)===!1&&(i.clearColor(X,$,_t,wt),D.copy(k))},reset:function(){A=!1,H=null,D.set(-1,0,0,0)}}}function n(){let A=!1,k=!1,H=null,D=null,X=null;return{setReversed:function($){if(k!==$){let _t=t.get("EXT_clip_control");k?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT);let wt=X;X=null,this.setClear(wt)}k=$},getReversed:function(){return k},setTest:function($){$?Mt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function($){H!==$&&!A&&(i.depthMask($),H=$)},setFunc:function($){if(k&&($=r_[$]),D!==$){switch($){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=$}},setLocked:function($){A=$},setClear:function($){X!==$&&(k&&($=1-$),i.clearDepth($),X=$)},reset:function(){A=!1,H=null,D=null,X=null,k=!1}}}function s(){let A=!1,k=null,H=null,D=null,X=null,$=null,_t=null,wt=null,Vt=null;return{setTest:function(Tt){A||(Tt?Mt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Tt){k!==Tt&&!A&&(i.stencilMask(Tt),k=Tt)},setFunc:function(Tt,oe,ve){(H!==Tt||D!==oe||X!==ve)&&(i.stencilFunc(Tt,oe,ve),H=Tt,D=oe,X=ve)},setOp:function(Tt,oe,ve){($!==Tt||_t!==oe||wt!==ve)&&(i.stencilOp(Tt,oe,ve),$=Tt,_t=oe,wt=ve)},setLocked:function(Tt){A=Tt},setClear:function(Tt){Vt!==Tt&&(i.clearStencil(Tt),Vt=Tt)},reset:function(){A=!1,k=null,H=null,D=null,X=null,$=null,_t=null,wt=null,Vt=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,y=!1,g=null,p=null,L=null,T=null,M=null,W=null,O=null,F=new se(0,0,0),B=0,C=!1,S=null,z=null,tt=null,J=null,et=null,ht=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,pt=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(it)[1]),Q=pt>=1):it.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Q=pt>=2);let bt=null,yt={},Lt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),ae=new _e().fromArray(Lt),ot=new _e().fromArray(Xt);function mt(A,k,H,D){let X=new Uint8Array(4),$=i.createTexture();i.bindTexture(A,$),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<H;_t++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(k,0,i.RGBA,1,1,D,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(k+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return $}let It={};It[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Mt(i.DEPTH_TEST),a.setFunc(Us),ft(!1),Rt(Yc),Mt(i.CULL_FACE),U(Ui);function Mt(A){h[A]!==!0&&(i.enable(A),h[A]=!0)}function zt(A){h[A]!==!1&&(i.disable(A),h[A]=!1)}function Gt(A,k){return u[A]!==k?(i.bindFramebuffer(A,k),u[A]=k,A===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=k),A===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=k),!0):!1}function Ht(A,k){let H=f,D=!1;if(A){H=d.get(k),H===void 0&&(H=[],d.set(k,H));let X=A.textures;if(H.length!==X.length||H[0]!==i.COLOR_ATTACHMENT0){for(let $=0,_t=X.length;$<_t;$++)H[$]=i.COLOR_ATTACHMENT0+$;H.length=X.length,D=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,D=!0);D&&i.drawBuffers(H)}function le(A){return x!==A?(i.useProgram(A),x=A,!0):!1}let rt={[$i]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};rt[Sd]=i.MIN,rt[Ed]=i.MAX;let gt={[wd]:i.ZERO,[Td]:i.ONE,[Ad]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Id]:i.DST_COLOR,[Cd]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[Ld]:i.ONE_MINUS_DST_COLOR,[Pd]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[Od]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function U(A,k,H,D,X,$,_t,wt,Vt,Tt){if(A===Ui){y===!0&&(zt(i.BLEND),y=!1);return}if(y===!1&&(Mt(i.BLEND),y=!0),A!==vd){if(A!==g||Tt!==C){if((p!==$i||M!==$i)&&(i.blendEquation(i.FUNC_ADD),p=$i,M=$i),Tt)switch(A){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zc:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}L=null,T=null,W=null,O=null,F.set(0,0,0),B=0,g=A,C=Tt}return}X=X||k,$=$||H,_t=_t||D,(k!==p||X!==M)&&(i.blendEquationSeparate(rt[k],rt[X]),p=k,M=X),(H!==L||D!==T||$!==W||_t!==O)&&(i.blendFuncSeparate(gt[H],gt[D],gt[$],gt[_t]),L=H,T=D,W=$,O=_t),(wt.equals(F)===!1||Vt!==B)&&(i.blendColor(wt.r,wt.g,wt.b,Vt),F.copy(wt),B=Vt),g=A,C=!1}function Dt(A,k){A.side===Ln?zt(i.CULL_FACE):Mt(i.CULL_FACE);let H=A.side===rn;k&&(H=!H),ft(H),A.blending===Ps&&A.transparent===!1?U(Ui):U(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);let D=A.stencilWrite;o.setTest(D),D&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),kt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(A){S!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),S=A)}function Rt(A){A!==xd?(Mt(i.CULL_FACE),A!==z&&(A===Yc?i.cullFace(i.BACK):A===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),z=A}function vt(A){A!==tt&&(Q&&i.lineWidth(A),tt=A)}function kt(A,k,H){A?(Mt(i.POLYGON_OFFSET_FILL),(J!==k||et!==H)&&(i.polygonOffset(k,H),J=k,et=H)):zt(i.POLYGON_OFFSET_FILL)}function Ct(A){A?Mt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function P(A){A===void 0&&(A=i.TEXTURE0+ht-1),bt!==A&&(i.activeTexture(A),bt=A)}function v(A,k,H){H===void 0&&(bt===null?H=i.TEXTURE0+ht-1:H=bt);let D=yt[H];D===void 0&&(D={type:void 0,texture:void 0},yt[H]=D),(D.type!==A||D.texture!==k)&&(bt!==H&&(i.activeTexture(H),bt=H),i.bindTexture(A,k||It[A]),D.type=A,D.texture=k)}function Z(){let A=yt[bt];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function I(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function m(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function b(A){ae.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),ae.copy(A))}function w(A){ot.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),ot.copy(A))}function R(A,k){let H=c.get(k);H===void 0&&(H=new WeakMap,c.set(k,H));let D=H.get(A);D===void 0&&(D=i.getUniformBlockIndex(k,A.name),H.set(A,D))}function V(A,k){let D=c.get(k).get(A);l.get(k)!==D&&(i.uniformBlockBinding(k,D,A.__bindingPointIndex),l.set(k,D))}function G(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},bt=null,yt={},u={},d=new WeakMap,f=[],x=null,y=!1,g=null,p=null,L=null,T=null,M=null,W=null,O=null,F=new se(0,0,0),B=0,C=!1,S=null,z=null,tt=null,J=null,et=null,ae.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Mt,disable:zt,bindFramebuffer:Gt,drawBuffers:Ht,useProgram:le,setBlending:U,setMaterial:Dt,setFlipSided:ft,setCullFace:Rt,setLineWidth:vt,setPolygonOffset:kt,setScissorTest:Ct,activeTexture:P,bindTexture:v,unbindTexture:Z,compressedTexImage2D:st,compressedTexImage3D:lt,texImage2D:m,texImage3D:_,updateUBOMapping:R,uniformBlockBinding:V,texStorage2D:te,texStorage3D:I,texSubImage2D:at,texSubImage3D:Ut,compressedTexSubImage2D:Et,compressedTexSubImage3D:Pt,scissor:b,viewport:w,reset:G}}function Yh(i,t,e,n){let s=a_(n);switch(e){case cu:return i*t;case uu:return i*t;case du:return i*t*2;case fu:return i*t/s.components*s.byteLength;case mc:return i*t/s.components*s.byteLength;case pu:return i*t*2/s.components*s.byteLength;case gc:return i*t*2/s.components*s.byteLength;case hu:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case _c:return i*t*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(i,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(i,8)*Math.max(t,8)/2;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _o:case Ml:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mu:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case El:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a_(i){switch(i){case pi:case ou:return{byteLength:1,components:1};case Mr:case au:case Br:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case Qi:case dc:case ui:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function l_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,v){return f?new OffscreenCanvas(P,v):vo("canvas")}function y(P,v,Z){let st=1,lt=Ct(P);if((lt.width>Z||lt.height>Z)&&(st=Z/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let at=Math.floor(st*lt.width),Ut=Math.floor(st*lt.height);u===void 0&&(u=x(at,Ut));let Et=v?x(at,Ut):u;return Et.width=at,Et.height=Ut,Et.getContext("2d").drawImage(P,0,0,at,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+at+"x"+Ut+")."),Et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,v,Z,st,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let at=v;if(v===i.RED&&(Z===i.FLOAT&&(at=i.R32F),Z===i.HALF_FLOAT&&(at=i.R16F),Z===i.UNSIGNED_BYTE&&(at=i.R8)),v===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(at=i.R8UI),Z===i.UNSIGNED_SHORT&&(at=i.R16UI),Z===i.UNSIGNED_INT&&(at=i.R32UI),Z===i.BYTE&&(at=i.R8I),Z===i.SHORT&&(at=i.R16I),Z===i.INT&&(at=i.R32I)),v===i.RG&&(Z===i.FLOAT&&(at=i.RG32F),Z===i.HALF_FLOAT&&(at=i.RG16F),Z===i.UNSIGNED_BYTE&&(at=i.RG8)),v===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(at=i.RG8UI),Z===i.UNSIGNED_SHORT&&(at=i.RG16UI),Z===i.UNSIGNED_INT&&(at=i.RG32UI),Z===i.BYTE&&(at=i.RG8I),Z===i.SHORT&&(at=i.RG16I),Z===i.INT&&(at=i.RG32I)),v===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(at=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(at=i.RGB16UI),Z===i.UNSIGNED_INT&&(at=i.RGB32UI),Z===i.BYTE&&(at=i.RGB8I),Z===i.SHORT&&(at=i.RGB16I),Z===i.INT&&(at=i.RGB32I)),v===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),Z===i.UNSIGNED_INT&&(at=i.RGBA32UI),Z===i.BYTE&&(at=i.RGBA8I),Z===i.SHORT&&(at=i.RGBA16I),Z===i.INT&&(at=i.RGBA32I)),v===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),v===i.RGBA){let Ut=lt?qo:ce.getTransfer(st);Z===i.FLOAT&&(at=i.RGBA32F),Z===i.HALF_FLOAT&&(at=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(at=Ut===ge?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function M(P,v){let Z;return P?v===null||v===Qi||v===Fs?Z=i.DEPTH24_STENCIL8:v===ui?Z=i.DEPTH32F_STENCIL8:v===Mr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qi||v===Fs?Z=i.DEPTH_COMPONENT24:v===ui?Z=i.DEPTH_COMPONENT32F:v===Mr&&(Z=i.DEPTH_COMPONENT16),Z}function W(P,v){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==qn&&P.minFilter!==Qn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function O(P){let v=P.target;v.removeEventListener("dispose",O),B(v),v.isVideoTexture&&h.delete(v)}function F(P){let v=P.target;v.removeEventListener("dispose",F),S(v)}function B(P){let v=n.get(P);if(v.__webglInit===void 0)return;let Z=P.source,st=d.get(Z);if(st){let lt=st[v.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&C(P),Object.keys(st).length===0&&d.delete(Z)}n.remove(P)}function C(P){let v=n.get(P);i.deleteTexture(v.__webglTexture);let Z=P.source,st=d.get(Z);delete st[v.__cacheKey],a.memory.textures--}function S(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(v.__webglFramebuffer[st]))for(let lt=0;lt<v.__webglFramebuffer[st].length;lt++)i.deleteFramebuffer(v.__webglFramebuffer[st][lt]);else i.deleteFramebuffer(v.__webglFramebuffer[st]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[st])}else{if(Array.isArray(v.__webglFramebuffer))for(let st=0;st<v.__webglFramebuffer.length;st++)i.deleteFramebuffer(v.__webglFramebuffer[st]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let st=0;st<v.__webglColorRenderbuffer.length;st++)v.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[st]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=P.textures;for(let st=0,lt=Z.length;st<lt;st++){let at=n.get(Z[st]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(Z[st])}n.remove(P)}let z=0;function tt(){z=0}function J(){let P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function et(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function ht(P,v){let Z=n.get(P);if(P.isVideoTexture&&vt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){let st=P.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(Z,P,v);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+v)}function Q(P,v){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){ot(Z,P,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+v)}function pt(P,v){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){ot(Z,P,v);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+v)}function it(P,v){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){mt(Z,P,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+v)}let bt={[vr]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},yt={[qn]:i.NEAREST,[Xd]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},Lt={[$d]:i.NEVER,[ef]:i.ALWAYS,[Jd]:i.LESS,[_u]:i.LEQUAL,[jd]:i.EQUAL,[tf]:i.GEQUAL,[Kd]:i.GREATER,[Qd]:i.NOTEQUAL};function Xt(P,v){if(v.type===ui&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qn||v.magFilter===ca||v.magFilter===Hr||v.magFilter===Ki||v.minFilter===Qn||v.minFilter===ca||v.minFilter===Hr||v.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,bt[v.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,bt[v.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,bt[v.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,yt[v.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qn||v.minFilter!==Hr&&v.minFilter!==Ki||v.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(P,v){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",O));let st=v.source,lt=d.get(st);lt===void 0&&(lt={},d.set(st,lt));let at=et(v);if(at!==P.__cacheKey){lt[at]===void 0&&(lt[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),lt[at].usedTimes++;let Ut=lt[P.__cacheKey];Ut!==void 0&&(lt[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&C(v)),P.__cacheKey=at,P.__webglTexture=lt[at].texture}return Z}function ot(P,v,Z){let st=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(st=i.TEXTURE_3D);let lt=ae(P,v),at=v.source;e.bindTexture(st,P.__webglTexture,i.TEXTURE0+Z);let Ut=n.get(at);if(at.version!==Ut.__version||lt===!0){e.activeTexture(i.TEXTURE0+Z);let Et=ce.getPrimaries(ce.workingColorSpace),Pt=v.colorSpace===Di?null:ce.getPrimaries(v.colorSpace),te=v.colorSpace===Di||Et===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let I=y(v.image,!1,s.maxTextureSize);I=kt(v,I);let m=r.convert(v.format,v.colorSpace),_=r.convert(v.type),b=T(v.internalFormat,m,_,v.colorSpace,v.isVideoTexture);Xt(st,v);let w,R=v.mipmaps,V=v.isVideoTexture!==!0,G=Ut.__version===void 0||lt===!0,A=at.dataReady,k=W(v,I);if(v.isDepthTexture)b=M(v.format===Bs,v.type),G&&(V?e.texStorage2D(i.TEXTURE_2D,1,b,I.width,I.height):e.texImage2D(i.TEXTURE_2D,0,b,I.width,I.height,0,m,_,null));else if(v.isDataTexture)if(R.length>0){V&&G&&e.texStorage2D(i.TEXTURE_2D,k,b,R[0].width,R[0].height);for(let H=0,D=R.length;H<D;H++)w=R[H],V?A&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,w.width,w.height,m,_,w.data):e.texImage2D(i.TEXTURE_2D,H,b,w.width,w.height,0,m,_,w.data);v.generateMipmaps=!1}else V?(G&&e.texStorage2D(i.TEXTURE_2D,k,b,I.width,I.height),A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,m,_,I.data)):e.texImage2D(i.TEXTURE_2D,0,b,I.width,I.height,0,m,_,I.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&G&&e.texStorage3D(i.TEXTURE_2D_ARRAY,k,b,R[0].width,R[0].height,I.depth);for(let H=0,D=R.length;H<D;H++)if(w=R[H],v.format!==Xn)if(m!==null)if(V){if(A)if(v.layerUpdates.size>0){let X=Yh(w.width,w.height,v.format,v.type);for(let $ of v.layerUpdates){let _t=w.data.subarray($*X/w.data.BYTES_PER_ELEMENT,($+1)*X/w.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,$,w.width,w.height,1,m,_t)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,w.width,w.height,I.depth,m,w.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,b,w.width,w.height,I.depth,0,w.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?A&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,w.width,w.height,I.depth,m,_,w.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,b,w.width,w.height,I.depth,0,m,_,w.data)}else{V&&G&&e.texStorage2D(i.TEXTURE_2D,k,b,R[0].width,R[0].height);for(let H=0,D=R.length;H<D;H++)w=R[H],v.format!==Xn?m!==null?V?A&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,w.width,w.height,m,w.data):e.compressedTexImage2D(i.TEXTURE_2D,H,b,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?A&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,w.width,w.height,m,_,w.data):e.texImage2D(i.TEXTURE_2D,H,b,w.width,w.height,0,m,_,w.data)}else if(v.isDataArrayTexture)if(V){if(G&&e.texStorage3D(i.TEXTURE_2D_ARRAY,k,b,I.width,I.height,I.depth),A)if(v.layerUpdates.size>0){let H=Yh(I.width,I.height,v.format,v.type);for(let D of v.layerUpdates){let X=I.data.subarray(D*H/I.data.BYTES_PER_ELEMENT,(D+1)*H/I.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,I.width,I.height,1,m,_,X)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,m,_,I.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,b,I.width,I.height,I.depth,0,m,_,I.data);else if(v.isData3DTexture)V?(G&&e.texStorage3D(i.TEXTURE_3D,k,b,I.width,I.height,I.depth),A&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,m,_,I.data)):e.texImage3D(i.TEXTURE_3D,0,b,I.width,I.height,I.depth,0,m,_,I.data);else if(v.isFramebufferTexture){if(G)if(V)e.texStorage2D(i.TEXTURE_2D,k,b,I.width,I.height);else{let H=I.width,D=I.height;for(let X=0;X<k;X++)e.texImage2D(i.TEXTURE_2D,X,b,H,D,0,m,_,null),H>>=1,D>>=1}}else if(R.length>0){if(V&&G){let H=Ct(R[0]);e.texStorage2D(i.TEXTURE_2D,k,b,H.width,H.height)}for(let H=0,D=R.length;H<D;H++)w=R[H],V?A&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,m,_,w):e.texImage2D(i.TEXTURE_2D,H,b,m,_,w);v.generateMipmaps=!1}else if(V){if(G){let H=Ct(I);e.texStorage2D(i.TEXTURE_2D,k,b,H.width,H.height)}A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,m,_,I)}else e.texImage2D(i.TEXTURE_2D,0,b,m,_,I);g(v)&&p(st),Ut.__version=at.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function mt(P,v,Z){if(v.image.length!==6)return;let st=ae(P,v),lt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Z);let at=n.get(lt);if(lt.version!==at.__version||st===!0){e.activeTexture(i.TEXTURE0+Z);let Ut=ce.getPrimaries(ce.workingColorSpace),Et=v.colorSpace===Di?null:ce.getPrimaries(v.colorSpace),Pt=v.colorSpace===Di||Ut===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let te=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,m=[];for(let D=0;D<6;D++)!te&&!I?m[D]=y(v.image[D],!0,s.maxCubemapSize):m[D]=I?v.image[D].image:v.image[D],m[D]=kt(v,m[D]);let _=m[0],b=r.convert(v.format,v.colorSpace),w=r.convert(v.type),R=T(v.internalFormat,b,w,v.colorSpace),V=v.isVideoTexture!==!0,G=at.__version===void 0||st===!0,A=lt.dataReady,k=W(v,_);Xt(i.TEXTURE_CUBE_MAP,v);let H;if(te){V&&G&&e.texStorage2D(i.TEXTURE_CUBE_MAP,k,R,_.width,_.height);for(let D=0;D<6;D++){H=m[D].mipmaps;for(let X=0;X<H.length;X++){let $=H[X];v.format!==Xn?b!==null?V?A&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X,0,0,$.width,$.height,b,$.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X,R,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X,0,0,$.width,$.height,b,w,$.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X,R,$.width,$.height,0,b,w,$.data)}}}else{if(H=v.mipmaps,V&&G){H.length>0&&k++;let D=Ct(m[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,k,R,D.width,D.height)}for(let D=0;D<6;D++)if(I){V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,m[D].width,m[D].height,b,w,m[D].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,R,m[D].width,m[D].height,0,b,w,m[D].data);for(let X=0;X<H.length;X++){let _t=H[X].image[D].image;V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X+1,0,0,_t.width,_t.height,b,w,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X+1,R,_t.width,_t.height,0,b,w,_t.data)}}else{V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,b,w,m[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,R,b,w,m[D]);for(let X=0;X<H.length;X++){let $=H[X];V?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X+1,0,0,b,w,$.image[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,X+1,R,b,w,$.image[D])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),at.__version=lt.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function It(P,v,Z,st,lt,at){let Ut=r.convert(Z.format,Z.colorSpace),Et=r.convert(Z.type),Pt=T(Z.internalFormat,Ut,Et,Z.colorSpace),te=n.get(v),I=n.get(Z);if(I.__renderTarget=v,!te.__hasExternalTextures){let m=Math.max(1,v.width>>at),_=Math.max(1,v.height>>at);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,at,Pt,m,_,v.depth,0,Ut,Et,null):e.texImage2D(lt,at,Pt,m,_,0,Ut,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Rt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,lt,I.__webglTexture,0,ft(v)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,lt,I.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(P,v,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),v.depthBuffer){let st=v.depthTexture,lt=st&&st.isDepthTexture?st.type:null,at=M(v.stencilBuffer,lt),Ut=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=ft(v);Rt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,at,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,at,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,at,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,P)}else{let st=v.textures;for(let lt=0;lt<st.length;lt++){let at=st[lt],Ut=r.convert(at.format,at.colorSpace),Et=r.convert(at.type),Pt=T(at.internalFormat,Ut,Et,at.colorSpace),te=ft(v);Z&&Rt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Pt,v.width,v.height):Rt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,Pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(P,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=n.get(v.depthTexture);st.__renderTarget=v,(!st.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ht(v.depthTexture,0);let lt=st.__webglTexture,at=ft(v);if(v.depthTexture.format===Is)Rt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(v.depthTexture.format===Bs)Rt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Gt(P){let v=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let st=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),st){let lt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),v.__depthDisposeCallback=lt}v.__boundDepthTexture=st}if(P.depthTexture&&!v.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");zt(v.__webglFramebuffer,P)}else if(Z){v.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[st]),v.__webglDepthbuffer[st]===void 0)v.__webglDepthbuffer[st]=i.createRenderbuffer(),Mt(v.__webglDepthbuffer[st],P,!1);else{let lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Mt(v.__webglDepthbuffer,P,!1);else{let st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(P,v,Z){let st=n.get(P);v!==void 0&&It(st.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Gt(P)}function le(P){let v=P.texture,Z=n.get(P),st=n.get(v);P.addEventListener("dispose",F);let lt=P.textures,at=P.isWebGLCubeRenderTarget===!0,Ut=lt.length>1;if(Ut||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=v.version,a.memory.textures++),at){Z.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[Et]=[];for(let Pt=0;Pt<v.mipmaps.length;Pt++)Z.__webglFramebuffer[Et][Pt]=i.createFramebuffer()}else Z.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Et=0;Et<v.mipmaps.length;Et++)Z.__webglFramebuffer[Et]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Et=0,Pt=lt.length;Et<Pt;Et++){let te=n.get(lt[Et]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Rt(P)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Et=0;Et<lt.length;Et++){let Pt=lt[Et];Z.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Et]);let te=r.convert(Pt.format,Pt.colorSpace),I=r.convert(Pt.type),m=T(Pt.internalFormat,te,I,Pt.colorSpace,P.isXRRenderTarget===!0),_=ft(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,_,m,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,v);for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)It(Z.__webglFramebuffer[Et][Pt],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Pt);else It(Z.__webglFramebuffer[Et],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Et=0,Pt=lt.length;Et<Pt;Et++){let te=lt[Et],I=n.get(te);e.bindTexture(i.TEXTURE_2D,I.__webglTexture),Xt(i.TEXTURE_2D,te),It(Z.__webglFramebuffer,P,te,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),g(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,st.__webglTexture),Xt(Et,v),v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)It(Z.__webglFramebuffer[Pt],P,v,i.COLOR_ATTACHMENT0,Et,Pt);else It(Z.__webglFramebuffer,P,v,i.COLOR_ATTACHMENT0,Et,0);g(v)&&p(Et),e.unbindTexture()}P.depthBuffer&&Gt(P)}function rt(P){let v=P.textures;for(let Z=0,st=v.length;Z<st;Z++){let lt=v[Z];if(g(lt)){let at=L(P),Ut=n.get(lt).__webglTexture;e.bindTexture(at,Ut),p(at),e.unbindTexture()}}}let gt=[],U=[];function Dt(P){if(P.samples>0){if(Rt(P)===!1){let v=P.textures,Z=P.width,st=P.height,lt=i.COLOR_BUFFER_BIT,at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(P),Et=v.length>1;if(Et)for(let Pt=0;Pt<v.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<v.length;Pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);let te=n.get(v[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,Z,st,0,0,Z,st,lt,i.NEAREST),l===!0&&(gt.length=0,U.length=0,gt.push(i.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gt.push(at),U.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Pt=0;Pt<v.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);let te=n.get(v[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let v=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ft(P){return Math.min(s.maxSamples,P.samples)}function Rt(P){let v=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(P){let v=a.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function kt(P,v){let Z=P.colorSpace,st=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Zs&&Z!==Di&&(ce.getTransfer(Z)===ge?(st!==Xn||lt!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),v}function Ct(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=tt,this.setTexture2D=ht,this.setTexture2DArray=Q,this.setTexture3D=pt,this.setTextureCube=it,this.rebindTextures=Ht,this.setupRenderTarget=le,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Rt}function c_(i,t){function e(n,s=Di){let r,a=ce.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.BYTE;if(n===au)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===dc)return i.INT;if(n===Qi)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===Br)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===Xn)return i.RGBA;if(n===uu)return i.LUMINANCE;if(n===du)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===fu)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===pu)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===yl||n===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===Ml||n===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===Sl||n===El||n===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var kl=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},h_={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},u_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
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

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ti({vertexShader:u_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Ao(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends mi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,y=new Hl,g=e.getContextAttributes(),p=null,L=null,T=[],M=[],W=new dt,O=null,F=new sn;F.viewport=new _e;let B=new sn;B.viewport=new _e;let C=[F,B],S=new kl,z=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let mt=T[ot];return mt===void 0&&(mt=new gr,T[ot]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(ot){let mt=T[ot];return mt===void 0&&(mt=new gr,T[ot]=mt),mt.getGripSpace()},this.getHand=function(ot){let mt=T[ot];return mt===void 0&&(mt=new gr,T[ot]=mt),mt.getHandSpace()};function J(ot){let mt=M.indexOf(ot.inputSource);if(mt===-1)return;let It=T[mt];It!==void 0&&(It.update(ot.inputSource,ot.frame,c||a),It.dispatchEvent({type:ot.type,data:ot.inputSource}))}function et(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",ht);for(let ot=0;ot<T.length;ot++){let mt=M[ot];mt!==null&&(M[ot]=null,T[ot].disconnect(mt))}z=null,tt=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,L=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){o=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",et),s.addEventListener("inputsourceschange",ht),g.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(W),s.renderState.layers===void 0){let mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),L=new gi(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let mt=null,It=null,Mt=null;g.depth&&(Mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=g.stencil?Bs:Is,It=g.stencil?Fs:Qi);let zt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),L=new gi(d.textureWidth,d.textureHeight,{format:Xn,type:pi,depthTexture:new Co(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ht(ot){for(let mt=0;mt<ot.removed.length;mt++){let It=ot.removed[mt],Mt=M.indexOf(It);Mt>=0&&(M[Mt]=null,T[Mt].disconnect(It))}for(let mt=0;mt<ot.added.length;mt++){let It=ot.added[mt],Mt=M.indexOf(It);if(Mt===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=M.length){M.push(It),Mt=Gt;break}else if(M[Gt]===null){M[Gt]=It,Mt=Gt;break}if(Mt===-1)break}let zt=T[Mt];zt&&zt.connect(It)}}let Q=new N,pt=new N;function it(ot,mt,It){Q.setFromMatrixPosition(mt.matrixWorld),pt.setFromMatrixPosition(It.matrixWorld);let Mt=Q.distanceTo(pt),zt=mt.projectionMatrix.elements,Gt=It.projectionMatrix.elements,Ht=zt[14]/(zt[10]-1),le=zt[14]/(zt[10]+1),rt=(zt[9]+1)/zt[5],gt=(zt[9]-1)/zt[5],U=(zt[8]-1)/zt[0],Dt=(Gt[8]+1)/Gt[0],ft=Ht*U,Rt=Ht*Dt,vt=Mt/(-U+Dt),kt=vt*-U;if(mt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(kt),ot.translateZ(vt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),zt[10]===-1)ot.projectionMatrix.copy(mt.projectionMatrix),ot.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let Ct=Ht+vt,P=le+vt,v=ft-kt,Z=Rt+(Mt-kt),st=rt*le/P*Ct,lt=gt*le/P*Ct;ot.projectionMatrix.makePerspective(v,Z,st,lt,Ct,P),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function bt(ot,mt){mt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(mt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let mt=ot.near,It=ot.far;y.texture!==null&&(y.depthNear>0&&(mt=y.depthNear),y.depthFar>0&&(It=y.depthFar)),S.near=B.near=F.near=mt,S.far=B.far=F.far=It,(z!==S.near||tt!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),z=S.near,tt=S.far),F.layers.mask=ot.layers.mask|2,B.layers.mask=ot.layers.mask|4,S.layers.mask=F.layers.mask|B.layers.mask;let Mt=ot.parent,zt=S.cameras;bt(S,Mt);for(let Gt=0;Gt<zt.length;Gt++)bt(zt[Gt],Mt);zt.length===2?it(S,F,B):S.projectionMatrix.copy(F.projectionMatrix),yt(ot,S,Mt)};function yt(ot,mt,It){It===null?ot.matrix.copy(mt.matrixWorld):(ot.matrix.copy(It.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(mt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(mt.projectionMatrix),ot.projectionMatrixInverse.copy(mt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=br*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ot){l=ot,d!==null&&(d.fixedFoveation=ot),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ot)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Lt=null;function Xt(ot,mt){if(h=mt.getViewerPose(c||a),x=mt,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(L,f.framebuffer),t.setRenderTarget(L));let Mt=!1;It.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let Gt=0;Gt<It.length;Gt++){let Ht=It[Gt],le=null;if(f!==null)le=f.getViewport(Ht);else{let gt=u.getViewSubImage(d,Ht);le=gt.viewport,Gt===0&&(t.setRenderTargetTextures(L,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(L))}let rt=C[Gt];rt===void 0&&(rt=new sn,rt.layers.enable(Gt),rt.viewport=new _e,C[Gt]=rt),rt.matrix.fromArray(Ht.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Ht.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(le.x,le.y,le.width,le.height),Gt===0&&(S.matrix.copy(rt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(rt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Gt=u.getDepthInformation(It[0]);Gt&&Gt.isValid&&Gt.texture&&y.init(t,Gt,s.renderState)}}for(let It=0;It<T.length;It++){let Mt=M[It],zt=T[It];Mt!==null&&zt!==void 0&&zt.update(Mt,mt,c||a)}Lt&&Lt(ot,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),x=null}let ae=new bu;ae.setAnimationLoop(Xt),this.setAnimationLoop=function(ot){Lt=ot},this.dispose=function(){}}},Yi=new Un,f_=new Ie;function p_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Mu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,L,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,L,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let L=t.get(p),T=L.envMap,M=L.envMapRotation;T&&(g.envMap.value=T,Yi.copy(M),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),g.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Yi)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,L,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*L,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,L){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let L=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(L,T){let M=T.program;n.uniformBlockBinding(L,M)}function c(L,T){let M=s[L.id];M===void 0&&(x(L),M=h(L),s[L.id]=M,L.addEventListener("dispose",g));let W=T.program;n.updateUBOMapping(L,W);let O=t.render.frame;r[L.id]!==O&&(d(L),r[L.id]=O)}function h(L){let T=u();L.__bindingPointIndex=T;let M=i.createBuffer(),W=L.__size,O=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,W,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function u(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(L){let T=s[L.id],M=L.uniforms,W=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let O=0,F=M.length;O<F;O++){let B=Array.isArray(M[O])?M[O]:[M[O]];for(let C=0,S=B.length;C<S;C++){let z=B[C];if(f(z,O,C,W)===!0){let tt=z.__offset,J=Array.isArray(z.value)?z.value:[z.value],et=0;for(let ht=0;ht<J.length;ht++){let Q=J[ht],pt=y(Q);typeof Q=="number"||typeof Q=="boolean"?(z.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,tt+et,z.__data)):Q.isMatrix3?(z.__data[0]=Q.elements[0],z.__data[1]=Q.elements[1],z.__data[2]=Q.elements[2],z.__data[3]=0,z.__data[4]=Q.elements[3],z.__data[5]=Q.elements[4],z.__data[6]=Q.elements[5],z.__data[7]=0,z.__data[8]=Q.elements[6],z.__data[9]=Q.elements[7],z.__data[10]=Q.elements[8],z.__data[11]=0):(Q.toArray(z.__data,et),et+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(L,T,M,W){let O=L.value,F=T+"_"+M;if(W[F]===void 0)return typeof O=="number"||typeof O=="boolean"?W[F]=O:W[F]=O.clone(),!0;{let B=W[F];if(typeof O=="number"||typeof O=="boolean"){if(B!==O)return W[F]=O,!0}else if(B.equals(O)===!1)return B.copy(O),!0}return!1}function x(L){let T=L.uniforms,M=0,W=16;for(let F=0,B=T.length;F<B;F++){let C=Array.isArray(T[F])?T[F]:[T[F]];for(let S=0,z=C.length;S<z;S++){let tt=C[S],J=Array.isArray(tt.value)?tt.value:[tt.value];for(let et=0,ht=J.length;et<ht;et++){let Q=J[et],pt=y(Q),it=M%W,bt=it%pt.boundary,yt=it+bt;M+=bt,yt!==0&&W-yt<pt.storage&&(M+=W-yt),tt.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=M,M+=pt.storage}}}let O=M%W;return O>0&&(M+=W-O),L.__size=M,L.__cache={},this}function y(L){let T={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(T.boundary=4,T.storage=4):L.isVector2?(T.boundary=8,T.storage=8):L.isVector3||L.isColor?(T.boundary=16,T.storage=12):L.isVector4?(T.boundary=16,T.storage=16):L.isMatrix3?(T.boundary=48,T.storage=48):L.isMatrix4?(T.boundary=64,T.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),T}function g(L){let T=L.target;T.removeEventListener("dispose",g);let M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let L in s)i.deleteBuffer(s[L]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Po=class{constructor(t={}){let{canvas:e=yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let x=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,L=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=Ni,this.toneMappingExposure=1;let M=this,W=!1,O=0,F=0,B=null,C=-1,S=null,z=new _e,tt=new _e,J=null,et=new se(0),ht=0,Q=e.width,pt=e.height,it=1,bt=null,yt=null,Lt=new _e(0,0,Q,pt),Xt=new _e(0,0,Q,pt),ae=!1,ot=new wr,mt=!1,It=!1,Mt=new Ie,zt=new Ie,Gt=new N,Ht=new _e,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function gt(){return B===null?it:1}let U=n;function Dt(E,q){return e.getContext(E,q)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lc}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",$,!1),U===null){let q="webgl2";if(U=Dt(q,E),U===null)throw Dt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ft,Rt,vt,kt,Ct,P,v,Z,st,lt,at,Ut,Et,Pt,te,I,m,_,b,w,R,V,G,A;function k(){ft=new Ig(U),ft.init(),V=new c_(U,ft),Rt=new wg(U,ft,t,V),vt=new o_(U,ft),Rt.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),kt=new Ug(U),Ct=new Y0,P=new l_(U,ft,vt,Ct,Rt,V,kt),v=new Ag(M),Z=new Pg(M),st=new Hf(U),G=new Sg(U,st),lt=new Lg(U,st,kt,G),at=new Og(U,lt,st,kt),b=new Ng(U,Rt,P),I=new Tg(Ct),Ut=new q0(M,v,Z,ft,Rt,G,I),Et=new p_(M,Ct),Pt=new $0,te=new e_(ft),_=new bg(M,v,Z,vt,at,f,l),m=new s_(M,at,Rt),A=new m_(U,kt,Rt,vt),w=new Eg(U,ft,kt),R=new Dg(U,ft,kt),kt.programs=Ut.programs,M.capabilities=Rt,M.extensions=ft,M.properties=Ct,M.renderLists=Pt,M.shadowMap=m,M.state=vt,M.info=kt}k();let H=new Vl(M,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(Q,pt,!1))},this.getSize=function(E){return E.set(Q,pt)},this.setSize=function(E,q,j=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,pt=q,e.width=Math.floor(E*it),e.height=Math.floor(q*it),j===!0&&(e.style.width=E+"px",e.style.height=q+"px"),this.setViewport(0,0,E,q)},this.getDrawingBufferSize=function(E){return E.set(Q*it,pt*it).floor()},this.setDrawingBufferSize=function(E,q,j){Q=E,pt=q,it=j,e.width=Math.floor(E*j),e.height=Math.floor(q*j),this.setViewport(0,0,E,q)},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(Lt)},this.setViewport=function(E,q,j,K){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,q,j,K),vt.viewport(z.copy(Lt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,q,j,K){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,q,j,K),vt.scissor(tt.copy(Xt).multiplyScalar(it).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){vt.setScissorTest(ae=E)},this.setOpaqueSort=function(E){bt=E},this.setTransparentSort=function(E){yt=E},this.getClearColor=function(E){return E.copy(_.getClearColor())},this.setClearColor=function(){_.setClearColor.apply(_,arguments)},this.getClearAlpha=function(){return _.getClearAlpha()},this.setClearAlpha=function(){_.setClearAlpha.apply(_,arguments)},this.clear=function(E=!0,q=!0,j=!0){let K=0;if(E){let Y=!1;if(B!==null){let xt=B.texture.format;Y=xt===_c||xt===gc||xt===mc}if(Y){let xt=B.texture.type,At=xt===pi||xt===Qi||xt===Mr||xt===Fs||xt===fc||xt===pc,Nt=_.getClearColor(),Ot=_.getClearAlpha(),qt=Nt.r,Zt=Nt.g,Ft=Nt.b;At?(x[0]=qt,x[1]=Zt,x[2]=Ft,x[3]=Ot,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=qt,y[1]=Zt,y[2]=Ft,y[3]=Ot,U.clearBufferiv(U.COLOR,0,y))}else K|=U.COLOR_BUFFER_BIT}q&&(K|=U.DEPTH_BUFFER_BIT),j&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",$,!1),Pt.dispose(),te.dispose(),Ct.dispose(),v.dispose(),Z.dispose(),at.dispose(),G.dispose(),A.dispose(),Ut.dispose(),H.dispose(),H.removeEventListener("sessionstart",Le),H.removeEventListener("sessionend",ze),Ce.stop()};function D(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;let E=kt.autoReset,q=m.enabled,j=m.autoUpdate,K=m.needsUpdate,Y=m.type;k(),kt.autoReset=E,m.enabled=q,m.autoUpdate=j,m.needsUpdate=K,m.type=Y}function $(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _t(E){let q=E.target;q.removeEventListener("dispose",_t),wt(q)}function wt(E){Vt(E),Ct.remove(E)}function Vt(E){let q=Ct.get(E).programs;q!==void 0&&(q.forEach(function(j){Ut.releaseProgram(j)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,q,j,K,Y,xt){q===null&&(q=le);let At=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=oa(E,q,j,K,Y);vt.setMaterial(K,At);let Ot=j.index,qt=1;if(K.wireframe===!0){if(Ot=lt.getWireframeAttribute(j),Ot===void 0)return;qt=2}let Zt=j.drawRange,Ft=j.attributes.position,he=Zt.start*qt,Me=(Zt.start+Zt.count)*qt;xt!==null&&(he=Math.max(he,xt.start*qt),Me=Math.min(Me,(xt.start+xt.count)*qt)),Ot!==null?(he=Math.max(he,0),Me=Math.min(Me,Ot.count)):Ft!=null&&(he=Math.max(he,0),Me=Math.min(Me,Ft.count));let we=Me-he;if(we<0||we===1/0)return;G.setup(Y,K,Nt,j,Ot);let _n,fe=w;if(Ot!==null&&(_n=st.get(Ot),fe=R,fe.setIndex(_n)),Y.isMesh)K.wireframe===!0?(vt.setLineWidth(K.wireframeLinewidth*gt()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(Y.isLine){let Bt=K.linewidth;Bt===void 0&&(Bt=1),vt.setLineWidth(Bt*gt()),Y.isLineSegments?fe.setMode(U.LINES):Y.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else Y.isPoints?fe.setMode(U.POINTS):Y.isSprite&&fe.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)fe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))fe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Bt=Y._multiDrawStarts,ri=Y._multiDrawCounts,pe=Y._multiDrawCount,Bn=Ot?st.get(Ot).bytesPerElement:1,ds=Ct.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<pe;Sn++)ds.setValue(U,"_gl_DrawID",Sn),fe.render(Bt[Sn]/Bn,ri[Sn])}else if(Y.isInstancedMesh)fe.renderInstances(he,we,Y.count);else if(j.isInstancedBufferGeometry){let Bt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ri=Math.min(j.instanceCount,Bt);fe.renderInstances(he,we,ri)}else fe.render(he,we)};function Tt(E,q,j){E.transparent===!0&&E.side===Ln&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,tn(E,q,j),E.side=Oi,E.needsUpdate=!0,tn(E,q,j),E.side=Ln):tn(E,q,j)}this.compile=function(E,q,j=null){j===null&&(j=E),p=te.get(j),p.init(q),T.push(p),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),E!==j&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();let K=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let xt=Y.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){let Nt=xt[At];Tt(Nt,j,Y),K.add(Nt)}else Tt(xt,j,Y),K.add(xt)}),T.pop(),p=null,K},this.compileAsync=function(E,q,j=null){let K=this.compile(E,q,j);return new Promise(Y=>{function xt(){if(K.forEach(function(At){Ct.get(At).currentProgram.isReady()&&K.delete(At)}),K.size===0){Y(E);return}setTimeout(xt,10)}ft.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let oe=null;function ve(E){oe&&oe(E)}function Le(){Ce.stop()}function ze(){Ce.start()}let Ce=new bu;Ce.setAnimationLoop(ve),typeof self!="undefined"&&Ce.setContext(self),this.setAnimationLoop=function(E){oe=E,H.setAnimationLoop(E),E===null?Ce.stop():Ce.start()},H.addEventListener("sessionstart",Le),H.addEventListener("sessionend",ze),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(q),q=H.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,q,B),p=te.get(E,T.length),p.init(q),T.push(p),zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ot.setFromProjectionMatrix(zt),It=this.localClippingEnabled,mt=I.init(this.clippingPlanes,It),g=Pt.get(E,L.length),g.init(),L.push(g),H.enabled===!0&&H.isPresenting===!0){let xt=M.xr.getDepthSensingMesh();xt!==null&&Ke(xt,q,-1/0,M.sortObjects)}Ke(E,q,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(bt,yt),rt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,rt&&_.addToRenderList(g,E),this.info.render.frame++,mt===!0&&I.beginShadows();let j=p.state.shadowsArray;m.render(j,E,q),mt===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,Y=g.transmissive;if(p.setupLights(),q.isArrayCamera){let xt=q.cameras;if(Y.length>0)for(let At=0,Nt=xt.length;At<Nt;At++){let Ot=xt[At];mn(K,Y,E,Ot)}rt&&_.render(E);for(let At=0,Nt=xt.length;At<Nt;At++){let Ot=xt[At];ke(g,E,Ot,Ot.viewport)}}else Y.length>0&&mn(K,Y,E,q),rt&&_.render(E),ke(g,E,q);B!==null&&(P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B)),E.isScene===!0&&E.onAfterRender(M,E,q),G.resetDefaultState(),C=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],mt===!0&&I.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,L.pop(),L.length>0?g=L[L.length-1]:g=null};function Ke(E,q,j,K){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ot.intersectsSprite(E)){K&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(zt);let At=at.update(E),Nt=E.material;Nt.visible&&g.push(E,At,Nt,j,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ot.intersectsObject(E))){let At=at.update(E),Nt=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ht.copy(At.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(zt)),Array.isArray(Nt)){let Ot=At.groups;for(let qt=0,Zt=Ot.length;qt<Zt;qt++){let Ft=Ot[qt],he=Nt[Ft.materialIndex];he&&he.visible&&g.push(E,At,he,j,Ht.z,Ft)}}else Nt.visible&&g.push(E,At,Nt,j,Ht.z,null)}}let xt=E.children;for(let At=0,Nt=xt.length;At<Nt;At++)Ke(xt[At],q,j,K)}function ke(E,q,j,K){let Y=E.opaque,xt=E.transmissive,At=E.transparent;p.setupLightsView(j),mt===!0&&I.setGlobalState(M.clippingPlanes,j),K&&vt.viewport(z.copy(K)),Y.length>0&&Qe(Y,q,j),xt.length>0&&Qe(xt,q,j),At.length>0&&Qe(At,q,j),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function mn(E,q,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new gi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Br:pi,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let xt=p.state.transmissionRenderTarget[K.id],At=K.viewport||z;xt.setSize(At.z,At.w);let Nt=M.getRenderTarget();M.setRenderTarget(xt),M.getClearColor(et),ht=M.getClearAlpha(),ht<1&&M.setClearColor(16777215,.5),M.clear(),rt&&_.render(j);let Ot=M.toneMapping;M.toneMapping=Ni;let qt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),mt===!0&&I.setGlobalState(M.clippingPlanes,K),Qe(E,j,K),P.updateMultisampleRenderTarget(xt),P.updateRenderTargetMipmap(xt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ft=0,he=q.length;Ft<he;Ft++){let Me=q[Ft],we=Me.object,_n=Me.geometry,fe=Me.material,Bt=Me.group;if(fe.side===Ln&&we.layers.test(K.layers)){let ri=fe.side;fe.side=rn,fe.needsUpdate=!0,gn(we,j,K,_n,fe,Bt),fe.side=ri,fe.needsUpdate=!0,Zt=!0}}Zt===!0&&(P.updateMultisampleRenderTarget(xt),P.updateRenderTargetMipmap(xt))}M.setRenderTarget(Nt),M.setClearColor(et,ht),qt!==void 0&&(K.viewport=qt),M.toneMapping=Ot}function Qe(E,q,j){let K=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,xt=E.length;Y<xt;Y++){let At=E[Y],Nt=At.object,Ot=At.geometry,qt=K===null?At.material:K,Zt=At.group;Nt.layers.test(j.layers)&&gn(Nt,q,j,Ot,qt,Zt)}}function gn(E,q,j,K,Y,xt){E.onBeforeRender(M,q,j,K,Y,xt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(M,q,j,K,E,xt),Y.transparent===!0&&Y.side===Ln&&Y.forceSinglePass===!1?(Y.side=rn,Y.needsUpdate=!0,M.renderBufferDirect(j,q,K,Y,E,xt),Y.side=Oi,Y.needsUpdate=!0,M.renderBufferDirect(j,q,K,Y,E,xt),Y.side=Ln):M.renderBufferDirect(j,q,K,Y,E,xt),E.onAfterRender(M,q,j,K,Y,xt)}function tn(E,q,j){q.isScene!==!0&&(q=le);let K=Ct.get(E),Y=p.state.lights,xt=p.state.shadowsArray,At=Y.state.version,Nt=Ut.getParameters(E,Y.state,xt,q,j),Ot=Ut.getProgramCacheKey(Nt),qt=K.programs;K.environment=E.isMeshStandardMaterial?q.environment:null,K.fog=q.fog,K.envMap=(E.isMeshStandardMaterial?Z:v).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?q.environmentRotation:E.envMapRotation,qt===void 0&&(E.addEventListener("dispose",_t),qt=new Map,K.programs=qt);let Zt=qt.get(Ot);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===At)return Ei(E,Nt),Zt}else Nt.uniforms=Ut.getUniforms(E),E.onBeforeCompile(Nt,M),Zt=Ut.acquireProgram(Nt,Ot),qt.set(Ot,Zt),K.uniforms=Nt.uniforms;let Ft=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=I.uniform),Ei(E,Nt),K.needsLights=la(E),K.lightsStateVersion=At,K.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.directionalShadowMap.value=Y.state.directionalShadowMap,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotShadowMap.value=Y.state.spotShadowMap,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMap.value=Y.state.pointShadowMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function Cn(E){if(E.uniformsList===null){let q=E.currentProgram.getUniforms();E.uniformsList=Ds.seqWithValue(q.seq,E.uniforms)}return E.uniformsList}function Ei(E,q){let j=Ct.get(E);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.batchingColor=q.batchingColor,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.instancingMorph=q.instancingMorph,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function oa(E,q,j,K,Y){q.isScene!==!0&&(q=le),P.resetTextureUnits();let xt=q.fog,At=K.isMeshStandardMaterial?q.environment:null,Nt=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Zs,Ot=(K.isMeshStandardMaterial?Z:v).get(K.envMap||At),qt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Zt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ft=!!j.morphAttributes.position,he=!!j.morphAttributes.normal,Me=!!j.morphAttributes.color,we=Ni;K.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(we=M.toneMapping);let _n=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,fe=_n!==void 0?_n.length:0,Bt=Ct.get(K),ri=p.state.lights;if(mt===!0&&(It===!0||E!==S)){let Pn=E===S&&K.id===C;I.setState(K,E,Pn)}let pe=!1;K.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ri.state.version||Bt.outputColorSpace!==Nt||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==Ot||K.fog===!0&&Bt.fog!==xt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==I.numPlanes||Bt.numIntersection!==I.numIntersection)||Bt.vertexAlphas!==qt||Bt.vertexTangents!==Zt||Bt.morphTargets!==Ft||Bt.morphNormals!==he||Bt.morphColors!==Me||Bt.toneMapping!==we||Bt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Bt.__version=K.version);let Bn=Bt.currentProgram;pe===!0&&(Bn=tn(K,q,Y));let ds=!1,Sn=!1,rr=!1,Te=Bn.getUniforms(),jn=Bt.uniforms;if(vt.useProgram(Bn.program)&&(ds=!0,Sn=!0,rr=!0),K.id!==C&&(C=K.id,Sn=!0),ds||S!==E){vt.buffers.depth.getReversed()?(Mt.copy(E.projectionMatrix),Mf(Mt),bf(Mt),Te.setValue(U,"projectionMatrix",Mt)):Te.setValue(U,"projectionMatrix",E.projectionMatrix),Te.setValue(U,"viewMatrix",E.matrixWorldInverse);let wi=Te.map.cameraPosition;wi!==void 0&&wi.setValue(U,Gt.setFromMatrixPosition(E.matrixWorld)),Rt.logarithmicDepthBuffer&&Te.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Te.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Sn=!0,rr=!0)}if(Y.isSkinnedMesh){Te.setOptional(U,Y,"bindMatrix"),Te.setOptional(U,Y,"bindMatrixInverse");let Pn=Y.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Te.setValue(U,"boneTexture",Pn.boneTexture,P))}Y.isBatchedMesh&&(Te.setOptional(U,Y,"batchingTexture"),Te.setValue(U,"batchingTexture",Y._matricesTexture,P),Te.setOptional(U,Y,"batchingIdTexture"),Te.setValue(U,"batchingIdTexture",Y._indirectTexture,P),Te.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Te.setValue(U,"batchingColorTexture",Y._colorsTexture,P));let or=j.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&b.update(Y,j,Bn),(Sn||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,Te.setValue(U,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(jn.envMap.value=Ot,jn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&q.environment!==null&&(jn.envMapIntensity.value=q.environmentIntensity),Sn&&(Te.setValue(U,"toneMappingExposure",M.toneMappingExposure),Bt.needsLights&&aa(jn,rr),xt&&K.fog===!0&&Et.refreshFogUniforms(jn,xt),Et.refreshMaterialUniforms(jn,K,it,pt,p.state.transmissionRenderTarget[E.id]),Ds.upload(U,Cn(Bt),jn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ds.upload(U,Cn(Bt),jn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Te.setValue(U,"center",Y.center),Te.setValue(U,"modelViewMatrix",Y.modelViewMatrix),Te.setValue(U,"normalMatrix",Y.normalMatrix),Te.setValue(U,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Pn=K.uniformsGroups;for(let wi=0,Ti=Pn.length;wi<Ti;wi++){let Xc=Pn[wi];A.update(Xc,Bn),A.bind(Xc,Bn)}}return Bn}function aa(E,q){E.ambientLightColor.needsUpdate=q,E.lightProbe.needsUpdate=q,E.directionalLights.needsUpdate=q,E.directionalLightShadows.needsUpdate=q,E.pointLights.needsUpdate=q,E.pointLightShadows.needsUpdate=q,E.spotLights.needsUpdate=q,E.spotLightShadows.needsUpdate=q,E.rectAreaLights.needsUpdate=q,E.hemisphereLights.needsUpdate=q}function la(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,q,j){Ct.get(E.texture).__webglTexture=q,Ct.get(E.depthTexture).__webglTexture=j;let K=Ct.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,q){let j=Ct.get(E);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(E,q=0,j=0){B=E,O=q,F=j;let K=!0,Y=null,xt=!1,At=!1;if(E){let Ot=Ct.get(E);if(Ot.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(Ot.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(Ot.__hasExternalTextures)P.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ft=E.depthTexture;if(Ot.__boundDepthTexture!==Ft){if(Ft!==null&&Ct.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}let qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let Zt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Zt[q])?Y=Zt[q][j]:Y=Zt[q],xt=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?Y=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Zt)?Y=Zt[j]:Y=Zt,z.copy(E.viewport),tt.copy(E.scissor),J=E.scissorTest}else z.copy(Lt).multiplyScalar(it).floor(),tt.copy(Xt).multiplyScalar(it).floor(),J=ae;if(vt.bindFramebuffer(U.FRAMEBUFFER,Y)&&K&&vt.drawBuffers(E,Y),vt.viewport(z),vt.scissor(tt),vt.setScissorTest(J),xt){let Ot=Ct.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,j)}else if(At){let Ot=Ct.get(E.texture),qt=q||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,j||0,qt)}C=-1},this.readRenderTargetPixels=function(E,q,j,K,Y,xt,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){vt.bindFramebuffer(U.FRAMEBUFFER,Nt);try{let Ot=E.texture,qt=Ot.format,Zt=Ot.type;if(!Rt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=E.width-K&&j>=0&&j<=E.height-Y&&U.readPixels(q,j,K,Y,V.convert(qt),V.convert(Zt),xt)}finally{let Ot=B!==null?Ct.get(B).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,q,j,K,Y,xt,At){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Nt=Nt[At]),Nt){let Ot=E.texture,qt=Ot.format,Zt=Ot.type;if(!Rt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=E.width-K&&j>=0&&j<=E.height-Y){vt.bindFramebuffer(U.FRAMEBUFFER,Nt);let Ft=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ft),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),U.readPixels(q,j,K,Y,V.convert(qt),V.convert(Zt),0);let he=B!==null?Ct.get(B).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,he);let Me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await vf(U,Me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ft),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.deleteBuffer(Ft),U.deleteSync(Me),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,q=null,j=0){E.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1]);let K=Math.pow(2,-j),Y=Math.floor(E.image.width*K),xt=Math.floor(E.image.height*K),At=q!==null?q.x:0,Nt=q!==null?q.y:0;P.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,At,Nt,Y,xt),vt.unbindTexture()},this.copyTextureToTexture=function(E,q,j=null,K=null,Y=0){E.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],q=arguments[2],Y=arguments[3]||0,j=null);let xt,At,Nt,Ot,qt,Zt,Ft,he,Me,we=E.isCompressedTexture?E.mipmaps[Y]:E.image;j!==null?(xt=j.max.x-j.min.x,At=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,Ot=j.min.x,qt=j.min.y,Zt=j.isBox3?j.min.z:0):(xt=we.width,At=we.height,Nt=we.depth||1,Ot=0,qt=0,Zt=0),K!==null?(Ft=K.x,he=K.y,Me=K.z):(Ft=0,he=0,Me=0);let _n=V.convert(q.format),fe=V.convert(q.type),Bt;q.isData3DTexture?(P.setTexture3D(q,0),Bt=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(P.setTexture2DArray(q,0),Bt=U.TEXTURE_2D_ARRAY):(P.setTexture2D(q,0),Bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);let ri=U.getParameter(U.UNPACK_ROW_LENGTH),pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Bn=U.getParameter(U.UNPACK_SKIP_PIXELS),ds=U.getParameter(U.UNPACK_SKIP_ROWS),Sn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,we.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),U.pixelStorei(U.UNPACK_SKIP_ROWS,qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt);let rr=E.isDataArrayTexture||E.isData3DTexture,Te=q.isDataArrayTexture||q.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let jn=Ct.get(E),or=Ct.get(q),Pn=Ct.get(jn.__renderTarget),wi=Ct.get(or.__renderTarget);vt.bindFramebuffer(U.READ_FRAMEBUFFER,Pn.__webglFramebuffer),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ti=0;Ti<Nt;Ti++)rr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,Y,Zt+Ti),E.isDepthTexture?(Te&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(q).__webglTexture,Y,Me+Ti),U.blitFramebuffer(Ot,qt,xt,At,Ft,he,xt,At,U.DEPTH_BUFFER_BIT,U.NEAREST)):Te?U.copyTexSubImage3D(Bt,Y,Ft,he,Me+Ti,Ot,qt,xt,At):U.copyTexSubImage2D(Bt,Y,Ft,he,Me+Ti,Ot,qt,xt,At);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Te?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Bt,Y,Ft,he,Me,xt,At,Nt,_n,fe,we.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(Bt,Y,Ft,he,Me,xt,At,Nt,_n,we.data):U.texSubImage3D(Bt,Y,Ft,he,Me,xt,At,Nt,_n,fe,we):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Y,Ft,he,xt,At,_n,fe,we.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Y,Ft,he,we.width,we.height,_n,we.data):U.texSubImage2D(U.TEXTURE_2D,Y,Ft,he,xt,At,_n,fe,we);U.pixelStorei(U.UNPACK_ROW_LENGTH,ri),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ds),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Sn),Y===0&&q.generateMipmaps&&U.generateMipmap(Bt),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,q,j=null,K=null,Y=0){return E.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,E=arguments[2],q=arguments[3],Y=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,q,j,K,Y)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){O=0,F=0,B=null,vt.reset(),G.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Vs=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Io=class extends Tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new N,s=[],r=[],a=[],o=new N,l=new Ie;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Tr=class extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gl=class extends Tr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var lo=new N,Fa=new vc,Ba=new vc,za=new vc,ei=class extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(lo.subVectors(s[0],s[1]).add(s[0]),c=lo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),Fa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,y,g),Ba.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,y,g),za.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,y,g)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ba.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),za.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Fa.calc(l),Ba.calc(l),za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function g_(i,t){let e=1-i;return e*e*t}function __(i,t){return 2*(1-i)*i*t}function x_(i,t){return i*i*t}function _r(i,t,e,n){return g_(i,t)+__(i,e)+x_(i,n)}function y_(i,t){let e=1-i;return e*e*e*t}function v_(i,t){let e=1-i;return 3*e*e*i*t}function M_(i,t){return 3*(1-i)*i*i*t}function b_(i,t){return i*i*i*t}function xr(i,t,e,n,s){return y_(i,t)+v_(i,e)+M_(i,n)+b_(i,s)}var Lo=class extends Nn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wl=class extends Nn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y),xr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends Nn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xl=class extends Nn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Nn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(t,s.x,r.x,a.x),_r(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Nn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(t,s.x,r.x,a.x),_r(t,s.y,r.y,a.y),_r(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Zh(o,l.x,c.x,h.x,u.x),Zh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:Gl,CatmullRomCurve3:ei,CubicBezierCurve:Lo,CubicBezierCurve3:Wl,EllipseCurve:Tr,LineCurve:Do,LineCurve3:Xl,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:No,SplineCurve:Oo}),ql=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Fo[s.type]().fromJSON(s))}return this}},Gs=class extends ql{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Do(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Uo(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Lo(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Oo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Tr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ar=class i extends dn{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new N,d=new dt,f=new N,x=new N,y=new N,g=0,p=0;for(let L=0;L<=t.length-1;L++)switch(L){case 0:g=t[L+1].x-t[L].x,p=t[L+1].y-t[L].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[L+1].x-t[L].x,p=t[L+1].y-t[L].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(x)}for(let L=0;L<=e;L++){let T=n+L*h*s,M=Math.sin(T),W=Math.cos(T);for(let O=0;O<=t.length-1;O++){u.x=t[O].x*M,u.y=t[O].y,u.z=t[O].x*W,a.push(u.x,u.y,u.z),d.x=L/e,d.y=O/(t.length-1),o.push(d.x,d.y);let F=l[3*O+0]*M,B=l[3*O+1],C=l[3*O+0]*W;c.push(F,B,C)}}for(let L=0;L<e;L++)for(let T=0;T<t.length-1;T++){let M=T+L*t.length,W=M,O=M+t.length,F=M+t.length+1,B=M+1;r.push(W,O,B),r.push(F,B,O)}this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("uv",new ue(o,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Rr=class i extends dn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new N,h=new dt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ws=class i extends dn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,y=[],g=n/2,p=0;L(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function L(){let M=new N,W=new N,O=0,F=(e-t)/n;for(let B=0;B<=r;B++){let C=[],S=B/r,z=S*(e-t)+t;for(let tt=0;tt<=s;tt++){let J=tt/s,et=J*l+o,ht=Math.sin(et),Q=Math.cos(et);W.x=z*ht,W.y=-S*n+g,W.z=z*Q,u.push(W.x,W.y,W.z),M.set(ht,F,Q).normalize(),d.push(M.x,M.y,M.z),f.push(J,1-S),C.push(x++)}y.push(C)}for(let B=0;B<s;B++)for(let C=0;C<r;C++){let S=y[C][B],z=y[C+1][B],tt=y[C+1][B+1],J=y[C][B+1];(t>0||C!==0)&&(h.push(S,z,J),O+=3),(e>0||C!==r-1)&&(h.push(z,tt,J),O+=3)}c.addGroup(p,O,0),p+=O}function T(M){let W=x,O=new dt,F=new N,B=0,C=M===!0?t:e,S=M===!0?1:-1;for(let tt=1;tt<=s;tt++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),x++;let z=x;for(let tt=0;tt<=s;tt++){let et=tt/s*l+o,ht=Math.cos(et),Q=Math.sin(et);F.x=C*Q,F.y=g*S,F.z=C*ht,u.push(F.x,F.y,F.z),d.push(0,S,0),O.x=ht*.5+.5,O.y=Q*.5*S+.5,f.push(O.x,O.y),x++}for(let tt=0;tt<s;tt++){let J=W+tt,et=z+tt;M===!0?h.push(et,et+1,J):h.push(et+1,et,J),B+=3}c.addGroup(p,B,M===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xs=class i extends Ws{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qs=class extends Gs{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Gs().fromJSON(s))}return this}},S_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Au(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=R_(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let x=e;x<s;x+=e)u=i[x],d=i[x+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Cr(r,a,e,o,l,f,0),a}};function Au(i,t,e,n,s){let r,a;if(s===z_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=$h(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=$h(r,i[r],i[r+1],a);return a&&Zo(a,a.next)&&(Ir(a),a=a.next),a}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zo(e,e.next)||De(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&D_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?w_(i,n,s,r):E_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ir(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=T_(es(i),t,e),Cr(i,t,e,n,s,r,2)):a===2&&A_(i,t,e,n,s,r):Cr(es(i),t,e,n,s,r,1);break}}}function E_(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=f&&Cs(s,o,r,l,a,c,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function w_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(De(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,x=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Yl(f,x,t,e,n),L=Yl(y,g,t,e,n),T=i.prevZ,M=i.nextZ;for(;T&&T.z>=p&&M&&M.z<=L;){if(T.x>=f&&T.x<=y&&T.y>=x&&T.y<=g&&T!==s&&T!==a&&Cs(o,h,l,u,c,d,T.x,T.y)&&De(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=f&&M.x<=y&&M.y>=x&&M.y<=g&&M!==s&&M!==a&&Cs(o,h,l,u,c,d,M.x,M.y)&&De(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=y&&T.y>=x&&T.y<=g&&T!==s&&T!==a&&Cs(o,h,l,u,c,d,T.x,T.y)&&De(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=L;){if(M.x>=f&&M.x<=y&&M.y>=x&&M.y<=g&&M!==s&&M!==a&&Cs(o,h,l,u,c,d,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function T_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Zo(s,r)&&Ru(s,n,n.next,r)&&Pr(s,r)&&Pr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ir(n),Ir(n.next),n=i=r),n=n.next}while(n!==i);return es(n)}function A_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&O_(a,o)){let l=Cu(a,o);a=es(a,a.next),l=es(l,l.next),Cr(a,t,e,n,s,r,0),Cr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function R_(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Au(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(N_(c));for(s.sort(C_),r=0;r<s.length;r++)e=P_(s[r],e);return e}function C_(i,t){return i.x-t.x}function P_(i,t){let e=I_(i,t);if(!e)return t;let n=Cu(e,i);return es(n,n.next),es(e,e.next)}function I_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Cs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Pr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&L_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function L_(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function D_(i,t,e,n){let s=i;do s.z===0&&(s.z=Yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,U_(s)}function U_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function N_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function O_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!F_(i,t)&&(Pr(i,t)&&Pr(t,i)&&B_(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||Zo(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zo(i,t){return i.x===t.x&&i.y===t.y}function Ru(i,t,e,n){let s=ho(De(i,t,e)),r=ho(De(i,t,n)),a=ho(De(e,n,i)),o=ho(De(e,n,t));return!!(s!==r&&a!==o||s===0&&co(i,e,t)||r===0&&co(i,n,t)||a===0&&co(e,i,n)||o===0&&co(e,t,n))}function co(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ho(i){return i>0?1:i<0?-1:0}function F_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ru(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Pr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function B_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cu(i,t){let e=new Zl(i.i,i.x,i.y),n=new Zl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $h(i,t,e,n){let s=new Zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Jh(t),jh(n,t);let a=t.length;e.forEach(Jh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,jh(n,e[l]);let o=S_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Lr=class i extends dn{constructor(t=new qs([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,L=e.UVGenerator!==void 0?e.UVGenerator:k_,T,M=!1,W,O,F,B;p&&(T=p.getSpacedPoints(h),M=!0,d=!1,W=p.computeFrenetFrames(h,!1),O=new N,F=new N,B=new N),d||(g=0,f=0,x=0,y=0);let C=o.extractPoints(c),S=C.shape,z=C.holes;if(!yr.isClockWise(S)){S=S.reverse();for(let rt=0,gt=z.length;rt<gt;rt++){let U=z[rt];yr.isClockWise(U)&&(z[rt]=U.reverse())}}let J=yr.triangulateShape(S,z),et=S;for(let rt=0,gt=z.length;rt<gt;rt++){let U=z[rt];S=S.concat(U)}function ht(rt,gt,U){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(gt,U)}let Q=S.length,pt=J.length;function it(rt,gt,U){let Dt,ft,Rt,vt=rt.x-gt.x,kt=rt.y-gt.y,Ct=U.x-rt.x,P=U.y-rt.y,v=vt*vt+kt*kt,Z=vt*P-kt*Ct;if(Math.abs(Z)>Number.EPSILON){let st=Math.sqrt(v),lt=Math.sqrt(Ct*Ct+P*P),at=gt.x-kt/st,Ut=gt.y+vt/st,Et=U.x-P/lt,Pt=U.y+Ct/lt,te=((Et-at)*P-(Pt-Ut)*Ct)/(vt*P-kt*Ct);Dt=at+vt*te-rt.x,ft=Ut+kt*te-rt.y;let I=Dt*Dt+ft*ft;if(I<=2)return new dt(Dt,ft);Rt=Math.sqrt(I/2)}else{let st=!1;vt>Number.EPSILON?Ct>Number.EPSILON&&(st=!0):vt<-Number.EPSILON?Ct<-Number.EPSILON&&(st=!0):Math.sign(kt)===Math.sign(P)&&(st=!0),st?(Dt=-kt,ft=vt,Rt=Math.sqrt(v)):(Dt=vt,ft=kt,Rt=Math.sqrt(v/2))}return new dt(Dt/Rt,ft/Rt)}let bt=[];for(let rt=0,gt=et.length,U=gt-1,Dt=rt+1;rt<gt;rt++,U++,Dt++)U===gt&&(U=0),Dt===gt&&(Dt=0),bt[rt]=it(et[rt],et[U],et[Dt]);let yt=[],Lt,Xt=bt.concat();for(let rt=0,gt=z.length;rt<gt;rt++){let U=z[rt];Lt=[];for(let Dt=0,ft=U.length,Rt=ft-1,vt=Dt+1;Dt<ft;Dt++,Rt++,vt++)Rt===ft&&(Rt=0),vt===ft&&(vt=0),Lt[Dt]=it(U[Dt],U[Rt],U[vt]);yt.push(Lt),Xt=Xt.concat(Lt)}for(let rt=0;rt<g;rt++){let gt=rt/g,U=f*Math.cos(gt*Math.PI/2),Dt=x*Math.sin(gt*Math.PI/2)+y;for(let ft=0,Rt=et.length;ft<Rt;ft++){let vt=ht(et[ft],bt[ft],Dt);Mt(vt.x,vt.y,-U)}for(let ft=0,Rt=z.length;ft<Rt;ft++){let vt=z[ft];Lt=yt[ft];for(let kt=0,Ct=vt.length;kt<Ct;kt++){let P=ht(vt[kt],Lt[kt],Dt);Mt(P.x,P.y,-U)}}}let ae=x+y;for(let rt=0;rt<Q;rt++){let gt=d?ht(S[rt],Xt[rt],ae):S[rt];M?(F.copy(W.normals[0]).multiplyScalar(gt.x),O.copy(W.binormals[0]).multiplyScalar(gt.y),B.copy(T[0]).add(F).add(O),Mt(B.x,B.y,B.z)):Mt(gt.x,gt.y,0)}for(let rt=1;rt<=h;rt++)for(let gt=0;gt<Q;gt++){let U=d?ht(S[gt],Xt[gt],ae):S[gt];M?(F.copy(W.normals[rt]).multiplyScalar(U.x),O.copy(W.binormals[rt]).multiplyScalar(U.y),B.copy(T[rt]).add(F).add(O),Mt(B.x,B.y,B.z)):Mt(U.x,U.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){let gt=rt/g,U=f*Math.cos(gt*Math.PI/2),Dt=x*Math.sin(gt*Math.PI/2)+y;for(let ft=0,Rt=et.length;ft<Rt;ft++){let vt=ht(et[ft],bt[ft],Dt);Mt(vt.x,vt.y,u+U)}for(let ft=0,Rt=z.length;ft<Rt;ft++){let vt=z[ft];Lt=yt[ft];for(let kt=0,Ct=vt.length;kt<Ct;kt++){let P=ht(vt[kt],Lt[kt],Dt);M?Mt(P.x,P.y+T[h-1].y,T[h-1].x+U):Mt(P.x,P.y,u+U)}}}ot(),mt();function ot(){let rt=s.length/3;if(d){let gt=0,U=Q*gt;for(let Dt=0;Dt<pt;Dt++){let ft=J[Dt];zt(ft[2]+U,ft[1]+U,ft[0]+U)}gt=h+g*2,U=Q*gt;for(let Dt=0;Dt<pt;Dt++){let ft=J[Dt];zt(ft[0]+U,ft[1]+U,ft[2]+U)}}else{for(let gt=0;gt<pt;gt++){let U=J[gt];zt(U[2],U[1],U[0])}for(let gt=0;gt<pt;gt++){let U=J[gt];zt(U[0]+Q*h,U[1]+Q*h,U[2]+Q*h)}}n.addGroup(rt,s.length/3-rt,0)}function mt(){let rt=s.length/3,gt=0;It(et,gt),gt+=et.length;for(let U=0,Dt=z.length;U<Dt;U++){let ft=z[U];It(ft,gt),gt+=ft.length}n.addGroup(rt,s.length/3-rt,1)}function It(rt,gt){let U=rt.length;for(;--U>=0;){let Dt=U,ft=U-1;ft<0&&(ft=rt.length-1);for(let Rt=0,vt=h+g*2;Rt<vt;Rt++){let kt=Q*Rt,Ct=Q*(Rt+1),P=gt+Dt+kt,v=gt+ft+kt,Z=gt+ft+Ct,st=gt+Dt+Ct;Gt(P,v,Z,st)}}}function Mt(rt,gt,U){l.push(rt),l.push(gt),l.push(U)}function zt(rt,gt,U){Ht(rt),Ht(gt),Ht(U);let Dt=s.length/3,ft=L.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);le(ft[0]),le(ft[1]),le(ft[2])}function Gt(rt,gt,U,Dt){Ht(rt),Ht(gt),Ht(Dt),Ht(gt),Ht(U),Ht(Dt);let ft=s.length/3,Rt=L.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);le(Rt[0]),le(Rt[1]),le(Rt[3]),le(Rt[1]),le(Rt[2]),le(Rt[3])}function Ht(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function le(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return H_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fo[s.type]().fromJSON(s)),new i(n,t.options)}},k_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,l),new dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],x=t[s*3+2],y=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new dt(a,1-l),new dt(c,1-u),new dt(d,1-x),new dt(y,1-p)]:[new dt(o,1-l),new dt(h,1-u),new dt(f,1-x),new dt(g,1-p)]}};function H_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bo=class i extends dn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new N,x=new dt;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let y=0;y<s;y++){let g=y*(n+1);for(let p=0;p<n;p++){let L=p+g,T=L,M=L+n+1,W=L+n+2,O=L+1;o.push(T,M,O),o.push(M,W,O)}}this.setIndex(o),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ns=class i extends dn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,d=new N,f=[],x=[],y=[],g=[];for(let p=0;p<=n;p++){let L=[],T=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let W=0;W<=e;W++){let O=W/e;u.x=-t*Math.cos(s+O*r)*Math.sin(a+T*o),u.y=t*Math.cos(a+T*o),u.z=t*Math.sin(s+O*r)*Math.sin(a+T*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(O+M,1-T),L.push(c++)}h.push(L)}for(let p=0;p<n;p++)for(let L=0;L<e;L++){let T=h[p][L+1],M=h[p][L],W=h[p+1][L],O=h[p+1][L+1];(p!==0||a>0)&&f.push(T,M,O),(p!==n-1||l<Math.PI)&&f.push(M,W,O)}this.setIndex(f),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dr=class i extends dn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){let y=x/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){let y=(s+1)*f+x-1,g=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,L=(s+1)*f+x;a.push(y,g,L),a.push(g,p,L)}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xi=class i extends dn{constructor(t=new No(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new dt,h=new N,u=[],d=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function y(){for(let T=0;T<e;T++)g(T);g(r===!1?e:0),L(),p()}function g(T){h=t.getPointAt(T/e,h);let M=a.normals[T],W=a.binormals[T];for(let O=0;O<=s;O++){let F=O/s*Math.PI*2,B=Math.sin(F),C=-Math.cos(F);l.x=C*M.x+B*W.x,l.y=C*M.y+B*W.y,l.z=C*M.z+B*W.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let M=1;M<=s;M++){let W=(s+1)*(T-1)+(M-1),O=(s+1)*T+(M-1),F=(s+1)*T+M,B=(s+1)*(T-1)+M;x.push(W,O,B),x.push(O,F,B)}}function L(){for(let T=0;T<=e;T++)for(let M=0;M<=s;M++)c.x=T/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Fi=class extends ts{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ur=class extends Fi{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function uo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function V_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends Ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=t,o=2*e-n;break;case Qc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:a=t,l=2*n-e;break;case Qc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),y=x*x,g=y*x,p=-d*g+2*d*y-d*x,L=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*x+1,T=(-1-f)*g+(1.5+f)*y+.5*x,M=f*g-f*y;for(let W=0;W!==o;++W)r[W]=p*a[h+W]+L*a[c+W]+T*a[l+W]+M*a[u+W];return r}},Jl=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},jl=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=uo(e,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:uo(t.times,Array),values:uo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $l(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case Tl:e=this.InterpolantFactoryMethodLinear;break;case ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&V_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ha,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){let y=e[u+x];if(y!==e[d+x]||y!==e[f+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Tl;var is=class extends Yn{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=xo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends Yn{};Kl.prototype.ValueTypeName="color";var Ql=class extends Yn{};Ql.prototype.ValueTypeName="number";var tc=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},zo=class extends Yn{InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Yn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=xo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends Yn{};ec.prototype.ValueTypeName="vector";var nc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},G_=new nc,ic=class{constructor(t){this.manager=t!==void 0?t:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ko=class extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ka=new Ie,Kh=new N,Qh=new N,Ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),Qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qh),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var tu=new Ie,ur=new N,Ha=new N,sc=class extends Ho{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),Ha.copy(n.position),Ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ha),n.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}},Vo=class extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},rc=class extends Ho{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Mc="\\[\\]\\.:\\/",W_=new RegExp("["+Mc+"]","g"),bc="[^"+Mc+"]",X_="[^"+Mc.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",bc),Y_=/(WCOD+)?/.source.replace("WCOD",X_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),$_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),J_=new RegExp("^"+q_+Y_+Z_+$_+"$"),j_=["material","materials","bones","map"],oc=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(t){let e=J_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);j_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=oc;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);var eu=new Ie,Go=class{constructor(t,e,n=0,s=1/0){this.ray=new zs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(t,e=!0,n=[]){return ac(t,this,n,e),n.sort(nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ac(t[s],this,n,e);return n.sort(nu),n}};function nu(i,t){return i.distance-t.distance}function ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ac(r[a],t,e,!0)}}var Fr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Wo=class extends mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);var Pu={type:"change"},Ec={type:"start"},Lu={type:"end"},$o=new zs,Iu=new Gn,Q_=Math.cos(70*xu.DEG2RAD),Ge=new N,vn=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sc=1e-6,Jo=class extends Wo{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new yn,this._lastTargetPosition=new N,this._quat=new yn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fr,this._sphericalDelta=new Fr,this._scale=1,this._panOffset=new N,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new N,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ex.bind(this),this._onPointerDown=tx.bind(this),this._onPointerUp=nx.bind(this),this._onContextMenu=cx.bind(this),this._onMouseWheel=rx.bind(this),this._onKeyDown=ox.bind(this),this._onTouchStart=ax.bind(this),this._onTouchMove=lx.bind(this),this._onMouseDown=ix.bind(this),this._onMouseMove=sx.bind(this),this._interceptControlDown=hx.bind(this),this._interceptControlUp=ux.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pu),this.update(),this.state=xe.NONE}update(t=null){let e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ge.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<Q_?this.object.lookAt(this.target):(Iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(Iu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sc||this._lastTargetPosition.distanceToSquared(this.target)>Sc?(this.dispatchEvent(Pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?vn/60*this.autoRotateSpeed*t:vn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ge.copy(s).sub(this.target);let r=Ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function tx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ex(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lu),this.state=xe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ix(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xe.DOLLY;break;case rs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}break;case rs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ec)}function sx(i){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rx(i){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(i.preventDefault(),this.dispatchEvent(Ec),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Lu))}function ox(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function ax(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xe.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xe.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ec)}function lx(i){switch(this._trackPointer(i),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xe.NONE}}function cx(i){this.enabled!==!1&&i.preventDefault()}function hx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ux(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var jo=class extends Vs{constructor(){super();let t=new Ze;t.deleteAttribute("uv");let e=new Fi({side:rn}),n=new Fi,s=new Vo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new re(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new re(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new re(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new re(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new re(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new re(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new re(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new re(t,Js(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new re(t,Js(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let x=new re(t,Js(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);let y=new re(t,Js(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let g=new re(t,Js(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new re(t,Js(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Js(i){let t=new _i;return t.color.setScalar(i),t}var Wu=_d(Du()),Ee=Math.PI*2,sa=.1,Ae=i=>-(i-500)*sa,We=i=>(i-500)*sa;function Rn(i){try{window.Bridge&&window.Bridge.postMessage?window.Bridge.postMessage(JSON.stringify(i)):(window.__msgs=window.__msgs||[]).push(i)}catch{}}var me=(i,t,e)=>[i[0]+t*Math.cos(e),i[1]+t*Math.sin(e)],Ks=(i,t,e=48)=>{let n=[];for(let s=0;s<e;s++)n.push(me(i,t,s/e*Ee));return n},be=(i,t,e=48)=>[Ks(i,t,e)],yi=i=>[i];function dx(i){return typeof i[0][0][0]=="number"}function Xu(i){return dx(i)?[i]:i}function Mn(...i){return Wu.default.union(...i.map(Xu))}function fn(i,t,e,n){let s=t[0]-i[0],r=t[1]-i[1],a=Math.hypot(s,r)||1,o=-r/a,l=s/a,c=[[i[0]+o*e/2,i[1]+l*e/2],[t[0]+o*n/2,t[1]+l*n/2],[t[0]-o*n/2,t[1]-l*n/2],[i[0]-o*e/2,i[1]-l*e/2]];return Mn([c],be(i,e/2,24),be(t,n/2,24))}var zr=(i,t,e)=>fn(i,t,e,e);function on(i,t,e,n=0,s=0){let r=s>0?s:Math.max(2,t*Ee/e*.45),a=t-r,o=Ee/e,l=[];for(let c=0;c<e;c++){let h=n+c*o;l.push(me(i,a,h),me(i,t,h+o*.18),me(i,t,h+o*.42),me(i,a,h+o*.6))}return l}function Hc(i,t,e,n,s,r=0){let a=[];for(let o=0;o<n;o++){let l=r+o*Ee/n,c=r+(o+1)*Ee/n,h=Math.asin(Math.min(.9,s/2/t)),u=Math.asin(Math.min(.9,s/2/e)),d=[];for(let f=0;f<=16;f++)d.push(me(i,t,l+h+(c-h-(l+h))*f/16));for(let f=0;f<=6;f++)d.push(me(i,e,c-u-(c-u-(l+u))*f/6));a.push(d)}return a}var ne=[500,500];function qu(i,t,e=4){let n=[on(ne,i,t)];return i>24&&e>0&&n.push(...Hc(ne,i*.74,Math.max(i*.24,10),e,i*.12)),n}function fx(i,t=20){let e=Ee/t,n=[];for(let s=0;s<t;s++){let r=s*e;n.push(me(ne,i*.72,r),me(ne,i,r+e*.55),me(ne,i*.9,r+e*.75))}return[n,...Hc(ne,i*.6,i*.2,4,i*.14)]}var Yu=(i,t,e,n=96)=>[Ks(i,t,n),Ks(i,e,n).reverse()];function px(i){let t=[];for(let e of Xu(i)){let[n,...s]=e,r=new qs(n.map(a=>new dt(Ae(a[0]),-We(a[1]))));for(let a of s)r.holes.push(new Gs(a.map(o=>new dt(Ae(o[0]),-We(o[1])))));t.push(r)}return t}function Jt(i,t,e,n){let s=n!=null?n:Math.min(.12,e*.2),r=new Lr(px(i),{depth:Math.max(.02,e-2*s),bevelEnabled:s>0,bevelThickness:s,bevelSize:s*.8,bevelOffset:-s*.8,bevelSegments:2,curveSegments:8});return r.rotateX(-Math.PI/2),r.translate(0,t+s,0),r}function Wt(i,t,e,n=32,s){let r=new Ws(s!=null?s:i,i,e-t,n);return r.translate(0,(t+e)/2,0),r}function sr(i,t,e,n=1){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Io(s);return r.wrapS=r.wrapT=vr,r.repeat.set(n,n),r.colorSpace=xn,r.anisotropy=4,r}var Uu=(i=!1)=>sr(256,256,(t,e,n)=>{let s=t.createImageData(e,n);for(let r=0;r<n;r++)for(let a=0;a<e;a++){let o=(a+r)%64/64,l=Math.pow(Math.sin(o*Math.PI),2),c=i?150-90*l+(a*7+r*13)%11:168+84*l,h=(r*e+a)*4;s.data[h]=c,s.data[h+1]=c+2,s.data[h+2]=c+6,s.data[h+3]=255}t.putImageData(s,0,0)},1/7),Nu=(i=!1)=>sr(256,256,(t,e,n)=>{t.fillStyle=i?"#8a8a8a":"#c9ced6",t.fillRect(0,0,e,n);let s=32;for(let r=-1;r<=n/s+1;r++)for(let a=-1;a<=e/s+1;a++){let o=a*s+(r%2?s/2:0),l=r*s*.87,c=t.createRadialGradient(o-4,l-4,1,o,l,22);i?(c.addColorStop(0,"#404040"),c.addColorStop(.6,"#909090"),c.addColorStop(1,"#6a6a6a")):(c.addColorStop(0,"#f2f4f7"),c.addColorStop(.55,"#c3c9d2"),c.addColorStop(1,"#dfe3e9")),t.fillStyle=c,t.beginPath(),t.arc(o,l,21,0,Ee),t.fill()}},1/7);function Ac(i){let t=sr(512,512,(e,n,s)=>{e.fillStyle="#d8dde4",e.fillRect(0,0,n,s);for(let r=4;r<n*.72;r+=3){let a=200+Math.floor(Math.random()*50);e.strokeStyle=`rgb(${a},${a+3},${a+8})`,e.lineWidth=2,e.beginPath(),e.arc(n/2,s/2,r,0,Ee),e.stroke()}});return t.wrapS=t.wrapT=Wn,t.repeat.set(1/i,1/i),t.offset.set(.5,.5),t}var mx=()=>{let i=sr(1024,1024,(t,e)=>{let n=e/2;t.fillStyle="#fbf8f2",t.fillRect(0,0,e,e),t.strokeStyle="#1d2b4a";for(let s=0;s<60;s++){let r=s/60*Ee,a=s%5===0;t.lineWidth=a?16:4,t.beginPath(),t.moveTo(n+Math.cos(r)*(a?395:440),n+Math.sin(r)*(a?395:440)),t.lineTo(n+Math.cos(r)*470,n+Math.sin(r)*470),t.stroke()}t.fillStyle="#ffffff",t.fillRect(n+300,n-34,74,68),t.lineWidth=4,t.strokeRect(n+300,n-34,74,68),t.fillStyle="#1d2b4a",t.font="bold 50px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("8",n+337,n+2)});return i.wrapS=i.wrapT=Wn,i.repeat.set(1,1),i},gx=()=>{let i=sr(1024,1024,(t,e)=>{let n=e/2;t.fillStyle="#f4f1ea",t.fillRect(0,0,e,e),t.fillStyle="#1d2b4a",t.font="bold 38px sans-serif",t.textAlign="center",t.textBaseline="middle";for(let s=0;s<31;s++){let r=s/31*Ee;t.save(),t.translate(n+Math.cos(r)*465,n+Math.sin(r)*465),t.rotate(r+Math.PI/2),t.fillText(String(s+1),0,0),t.restore()}});return i.wrapS=i.wrapT=Wn,i.repeat.set(1,1),i},_x=()=>sr(256,256,(i,t,e)=>{let n=i.createImageData(t,e);for(let s=0;s<t*e;s++){let r=225+Math.floor(Math.random()*30);n.data[s*4]=r,n.data[s*4+1]=r,n.data[s*4+2]=r,n.data[s*4+3]=255}i.putImageData(n,0,0)},6),Rc=null;function bi(){return Rc||(Rc={stripes:Uu(),stripesR:Uu(!0),perlage:Nu(),perlageR:Nu(!0),grain10:Ac(21),grain5:Ac(11),grain42:Ac(86),dial:mx(),date:gx()}),Rc}var cs=!0;try{let i=localStorage.getItem("w3d_quality");cs=i?i==="high":(navigator.hardwareConcurrency||4)>=6}catch{}var Xe=i=>new Fi(i),On=i=>cs?new Ur(i):Xe(Object.fromEntries(Object.entries(i).filter(([t])=>!["clearcoat","clearcoatRoughness","anisotropy","anisotropyRotation","iridescence","iridescenceIOR","iridescenceThicknessRange","sheen","sheenColor","sheenRoughness"].includes(t)))),ut={brass:()=>On({color:14265688,metalness:1,roughness:.3,clearcoat:.2}),gold:()=>On({color:15121768,metalness:1,roughness:.22,clearcoat:.35,clearcoatRoughness:.15,anisotropy:.35}),steel:()=>On({color:14673130,metalness:1,roughness:.13,clearcoat:.2}),steelMatte:()=>On({color:13160151,metalness:.95,roughness:.38}),bridge:()=>On({color:16054009,metalness:.95,roughness:.3,map:bi().stripes,roughnessMap:bi().stripesR,anisotropy:.75,anisotropyRotation:Math.PI/4,clearcoat:.15,clearcoatRoughness:.2}),plate:()=>On({color:14080994,metalness:.9,roughness:.42,map:bi().perlage,roughnessMap:bi().perlageR}),ruby:()=>new Ur({color:12720219,metalness:0,roughness:.08,clearcoat:1,clearcoatRoughness:.05,emissive:2752528}),blue:()=>On({color:2311861,metalness:.85,roughness:.2,iridescence:.85,iridescenceIOR:1.8,iridescenceThicknessRange:[220,620],clearcoat:.4}),dark:()=>Xe({color:1317416,metalness:.3,roughness:.6}),spring:()=>Xe({color:7175312,metalness:.9,roughness:.3}),hands:()=>Xe({color:1911626,metalness:.6,roughness:.35}),orange:()=>Xe({color:15895608,metalness:.2,roughness:.4,emissive:6957568}),grain:i=>Xe({color:16777215,metalness:.9,roughness:.3,map:i}),dial:()=>Xe({color:16777215,metalness:0,roughness:.55,map:bi().dial}),dateRing:()=>Xe({color:16777215,metalness:0,roughness:.6,map:bi().date}),heavy:()=>Xe({color:10133931,metalness:.9,roughness:.35}),case:()=>On({color:15133423,metalness:1,roughness:.1,clearcoat:.5,clearcoatRoughness:.08}),oil:()=>On({color:14263361,metalness:0,roughness:.03,clearcoat:1,transparent:!0,opacity:.85})};function js(i,t,e=0){return i.position.set(Ae(t[0]),e,We(t[1])),i}function ct(i,t,e=!0){let n=new re(i,t);return n.castShadow=e,n.receiveShadow=!0,n}function Oe(i,t=0){let e=new Yt;return e.position.set(Ae(i[0]),t,We(i[1])),e}function zi(i,t){return i.translate(-Ae(t[0]),0,-We(t[1])),i}function Ko(i,t,e=.9,n=!1){let s=Oe(i),r=.22,a=n?t-r:t;return s.add(ct(Wt(e,a,a+r,32),ut.ruby(),!1)),s.add(ct(Wt(e*.28,n?a-.01:a+.01,n?a+r-.02:a+r+.01,16),ut.dark(),!1)),s}var nt={c:[500,500],barrel:[640,330],crownWheel:[780,410],click:[548,214],center:[500,500],third:[370,610],fourth:[470,705],escape:[580,730],pallet:[660,690],balance:[760,640],cockFoot:[815,728],rev1:[420,270],rev2:[505,335],slPivot:[820,405],yokePivot:[790,610],clutch:[885,500],windingPinion:[935,500],settingWheel:[860,572],minuteWheel:[425,580],dateWheel:[380,410],jumper:[620,300]},Ou=JSON.parse(JSON.stringify(nt));function Zu(){nt.forkTip=[nt.pallet[0]+(nt.balance[0]-nt.pallet[0])*.62,nt.pallet[1]+(nt.balance[1]-nt.pallet[1])*.62];let i=Math.atan2(nt.pallet[1]-nt.escape[1],nt.pallet[0]-nt.escape[0]);nt.entry=me(nt.escape,52,i-1.7364),nt.exit=me(nt.escape,52,i+1.0136)}Zu();var Re=null,ni=i=>Re&&Re.bridges&&Re.bridges[i]||null,Qo=(i,t)=>!Re||!Re.screws?t:Re.screws[i]||[],vi=(i,t)=>Re&&Re.radii&&Re.radii[i]||t;function xx(i){Re=i&&i.id?i:null;for(let t of Object.keys(Ou))nt[t]=Ou[t].slice();if(Re&&Re.g)for(let[t,e]of Object.entries(Re.g))nt[t]=e.slice();Zu()}var Cc=-3.9,Qt={};function ee(i,t,e,{dir:n=1,face:s=0,cover:r=!1}={}){return e.name=i,e.userData={...e.userData,id:i,part:t},Qt[i]={id:i,obj:e,part:t,dir:n,face:s,cover:r,base:{p:e.position.clone(),q:e.quaternion.clone()}},e}var yx={p_platina:"platina",q_platina:"platina",p_stelo:"stelo",q_stelo:"stelo",p_cassa:"cassa",q_cassa:"cassa"},Hi=i=>yx[i]||i;function Pc(i,t,e,n,s,r,a=ut.gold){let o=Oe(i);return o.add(ct(Jt([qu(t,e)],n,.45,.06),a())),o.add(ct(Jt([on(ne,s,10)],r,n-r+.01,.04),ut.steel())),o.add(ct(Wt(t*.24*sa,n-.05,n+.55,24),a())),o.add(ct(Wt(.35,0,7.6,12),ut.steel())),o}function $u(i){{let o=new Yt;o.add(ct(Jt(be(ne,440,128),-3,3,.25),ut.plate())),ee("platina","platina",o,{dir:1,face:0}),i.add(o)}i.add(ee("ruota_centro","ruota_centro",(()=>{let o=Pc(nt.center,vi("center",115),80,1,18,1.45);return o.add(ct(Wt(.35,-8.2,0,12),ut.steel())),o})())),i.add(ee("ruota_terzo","ruota_terzo",Pc(nt.third,vi("third",85),75,2,14,.6))),i.add(ee("ruota_secondi","ruota_secondi",Pc(nt.fourth,vi("fourth",72),70,3,12,1))),i.add(ee("ruota_scappamento","ruota_scappamento",(()=>{let o=Oe(nt.escape);return o.add(ct(Jt([fx(50)],3.85,.35,.04),ut.steel())),o.add(ct(Jt([on(ne,9,8)],3,.86,.03),ut.steel())),o.add(ct(Wt(.35,0,7.6,12),ut.steel())),o})())),i.add(ee("bariletto","bariletto",(()=>{let o=Oe(nt.barrel),l=vi("barrel",135);return o.add(ct(Jt([on(ne,l,Math.round(l*.67))],.5,.65,.06),ut.gold())),o.add(ct(Wt(l*.092,1.1,4.4,64),ut.gold())),o.add(ct(Wt(l*.089,4.4,4.75,64),ut.brass())),o.add(ct(Wt(2.2,0,7.4,24),ut.steel())),o})())),i.add(ee("ancora","ancora",(()=>{let o=Oe(nt.pallet),l=Mn(fn(nt.pallet,nt.forkTip,30,14),fn(nt.pallet,nt.entry,24,14),fn(nt.pallet,nt.exit,24,14),be(nt.pallet,18));o.add(ct(zi(Jt(l,3.85,.4,.05),nt.pallet),ut.steel()));for(let c of[nt.entry,nt.exit]){let h=new Ze(1.5,.6,.55),u=ct(h,ut.ruby(),!1),d=Ae(c[0])-Ae(nt.pallet[0]),f=We(c[1])-We(nt.pallet[1]);u.position.set(d*1.05,4.05,f*1.05),u.rotation.y=-Math.atan2(f,d),o.add(u)}return o.add(ct(Wt(.3,0,7.6,12),ut.steel())),o})())),i.add(ee("bilanciere","bilanciere",(()=>{let o=Oe(nt.balance),l=vi("balance",100),c=[Ks(ne,l,Math.round(l*.96)),...Hc(ne,l*.86,15,3,10,.4)];o.add(ct(Jt([c],4.7,.6,.08),ut.gold()));for(let x=0;x<10;x++){let y=x/10*Ee,g=ct(new ns(.42,12,8),ut.gold());g.position.set(Math.cos(y)*l*.101,5,Math.sin(y)*l*.101),o.add(g)}o.add(ct(Wt(.28,3.4,9.6,12),ut.steel())),o.add(ct(Wt(2.1,3.9,4.25,32),ut.steel()));let h=ct(Wt(.32,3.55,4.3,12),ut.ruby(),!1),u=Ae(nt.pallet[0])-Ae(nt.balance[0]),d=We(nt.pallet[1])-We(nt.balance[1]),f=Math.hypot(u,d);return h.position.set(u/f*1.6,0,d/f*1.6),o.add(h),o})())),i.add(ee("spirale","spirale",(()=>{let o=Oe(nt.balance),l=[];for(let c=0;c<=900;c++){let h=c/900,u=h*9*Ee,d=1.6+4.4*h;l.push(new N(Math.cos(u)*d,5.75,Math.sin(u)*d))}return o.add(ct(new xi(new ei(l),1400,.05,5,!1),ut.spring(),!1)),o.add(ct(Wt(.9,5.4,6,16),ut.steel())),o})()));let t=ni("ponte_treno")?yi(ni("ponte_treno")):Re?Mn(fn(nt.center,nt.third,80,70),fn(nt.third,nt.fourth,70,60),fn(nt.fourth,nt.escape,60,50),be(nt.center,42),be(nt.third,40),be(nt.fourth,40),be(nt.escape,36)):Mn(yi([[455,455],[545,465],[560,560],[625,700],[615,772],[540,775],[470,752],[335,655],[330,575],[440,470]]),be(nt.center,42),be(nt.third,40),be(nt.fourth,40),be(nt.escape,36)),e=Re&&Re.merged;i.add(ee("ponte_treno","ponte_treno",(()=>{let o=new Yt;if(e)return o;o.add(ct(Jt(t,5.4,2,.22),ut.bridge()));for(let l of[nt.center,nt.third,nt.fourth,nt.escape])o.add(Ko(l,7.4,.95));for(let l of Qo("ponte_treno",[[420,560],[560,640],[400,680]]))o.add(js(ct(Wt(1.6,0,5.4,20),ut.steelMatte()),l));return o})(),{face:7.4,cover:!0})),i.add(ee("ponte_ancora","ponte_ancora",(()=>{let o=new Yt,l=ni("ponte_ancora")?yi(ni("ponte_ancora")):zr([nt.pallet[0]-30,nt.pallet[1]+35],[nt.pallet[0]+25,nt.pallet[1]-30],44);o.add(ct(Jt(l,5.4,2,.2),ut.bridge())),o.add(Ko(nt.pallet,7.4,.75));for(let c of Qo("ponte_ancora",[[636,718]]))o.add(js(ct(Wt(1.4,0,5.4,20),ut.steelMatte()),c));return o})(),{face:7.4,cover:!0}));let n=ni("ponte_bariletto")?yi(ni("ponte_bariletto")):Re?Mn(be(nt.barrel,vi("barrel",135)+15,72),be(nt.crownWheel,72),fn(nt.barrel,nt.crownWheel,150,90)):Mn(be(nt.barrel,150,72),be(nt.crownWheel,72),yi([[700,230],[830,350],[790,470],[650,470]]));i.add(ee("ponte_bariletto","ponte_bariletto",(()=>{let o=new Yt;if(o.add(ct(Jt(n,5,2.4,.22),ut.bridge())),e)for(let l of[nt.center,nt.third,nt.fourth,nt.escape])o.add(Ko(l,7.4,.95));for(let l of Qo("ponte_bariletto",[[520,240],[760,250],[705,455]]))o.add(js(ct(Wt(1.6,0,5,20),ut.steelMatte()),l));return o})(),{face:7.4,cover:!0}));let s=ni("ponte_bilanciere")?Mn(yi(ni("ponte_bilanciere")),be(nt.balance,44)):Mn(be(nt.balance,44),fn(nt.balance,nt.cockFoot,70,82));i.add(ee("ponte_bilanciere","ponte_bilanciere",(()=>{let o=new Yt;o.add(ct(Jt(s,7,1.9,.2),ut.bridge()));let l=ct(Wt(4,0,7,32),ut.bridge());l.position.set(Ae(nt.cockFoot[0]),0,We(nt.cockFoot[1])),o.add(l);let c=Oe(nt.balance);c.add(ct(Wt(2.3,8.9,9.15,32),ut.steel())),c.add(ct(Wt(1.2,9.15,9.3,24),ut.ruby(),!1));for(let h of[-1,1]){let u=ct(new Dr(2,.09,6,24,Math.PI*.7),ut.spring(),!1);u.rotation.x=-Math.PI/2,u.rotation.z=h>0?-.2:Math.PI-1.9,u.position.y=9.3,c.add(u)}return o.add(c),o})(),{face:8.9,cover:!0})),i.add(ee("racchetta","racchetta",(()=>{let o=Oe(nt.balance),l=Re&&Re.regulator!=null?Re.regulator:Math.atan2(-1,-1),c=zr(me(nt.balance,20,l),me(nt.balance,115,l),12);return o.add(ct(zi(Jt(c,8.9,.35,.05),nt.balance),ut.steel())),o})(),{face:9.25})),i.add(ee("rocchetto_cricco","rocchetto_cricco",(()=>{let o=Oe(nt.barrel),l=vi("ratchet",105);return o.add(ct(Jt([on(ne,l,Math.round(l*.57))],7.4,.8,.06),ut.grain(bi().grain10))),o})(),{face:8.2,cover:!0})),i.add(ee("ruota_carica","ruota_carica",(()=>{let o=Oe(nt.crownWheel),l=vi("crown",55);return o.add(ct(Jt([on(ne,l,Math.round(l*.73))],7.4,.8,.06),ut.grain(bi().grain5))),o})(),{face:8.2})),i.add(ee("cricchetto","cricchetto",(()=>{let o=Oe(nt.click),l=Math.atan2(nt.click[1]-nt.barrel[1],nt.click[0]-nt.barrel[0]),c=Mn(fn(nt.click,me(nt.barrel,vi("ratchet",105)+4,l+.04),30,12),be(nt.click,18));o.add(ct(zi(Jt(c,7.4,.6,.06),nt.click),ut.steel()));let h=[];for(let u=0;u<=30;u++){let d=u/30;h.push(new N(1+4.5*d,7.7,-1.8-1.2*Math.sin(d*Math.PI)))}return o.add(ct(new xi(new ei(h),40,.18,6),ut.spring())),o})(),{face:8}));let r=ni("ponte_automatico")?Mn(yi(ni("ponte_automatico")),be(nt.rev1,44),be(nt.rev2,44)):Mn(yi([[320,215],[560,200],[585,300],[560,395],[345,395],[300,300]]),be(nt.rev1,48),be(nt.rev2,48));i.add(ee("ponte_automatico","ponte_automatico",(()=>{let o=new Yt;o.add(ct(Jt(r,9.4,1.5,.18),ut.bridge()));for(let l of Qo("ponte_automatico",[[345,300],[560,240]]))o.add(js(ct(Wt(1.5,0,9.4,20),ut.steelMatte()),l));return o})(),{face:10.9,cover:!0}));for(let[o,l]of[["invertitore_1",nt.rev1],["invertitore_2",nt.rev2]])i.add(ee(o,"invertitori",(()=>{let c=Oe(l);return c.add(ct(Jt([on(ne,40,36)],10.9,.5,.05),ut.brass())),c.add(Ko([500,500],11.4,.6)),c})(),{face:11.4,cover:!0}));i.add(ee("rotore","rotore",(()=>{let o=new Yt,l=[],c=Re&&Re.rotor!=null?Re.rotor:Math.PI;for(let u=0;u<=64;u++)l.push(me(ne,425,c+u/64*Math.PI));for(let u=64;u>=0;u--)l.push(me(ne,62,c+u/64*Math.PI));o.add(ct(Jt([l],12.6,.7,.08),ut.grain(bi().grain42)));let h=[];for(let u=0;u<=64;u++)h.push(me(ne,425,c+u/64*Math.PI));for(let u=64;u>=0;u--)h.push(me(ne,378,c+u/64*Math.PI));return o.add(ct(Jt([h],12,2,.15),ut.heavy())),o.add(ct(Wt(5.6,11.2,13.6,48),ut.steel())),o.add(ct(Wt(4.2,13.6,13.8,48),ut.steelMatte())),o})(),{face:13.8,cover:!0})),i.add(ee("stelo","stelo",(()=>{let o=new Yt;o.position.set(0,Cc,0);let l=ct(Wt(.85,0,18,16),ut.steel());l.rotation.z=Math.PI/2,l.position.set(Ae(860),0,0),o.add(l);let c=ct(new Ze(5,1.2,1.2),ut.steel());c.position.set((Ae(885)+Ae(935))/2,0,0),o.add(c);let h=Jt([on(ne,46,44,0,5)],0,3,.3);h.translate(0,-1.5,0);let u=ct(h,ut.case());u.rotation.z=Math.PI/2,u.position.set(Ae(1050),0,0),o.add(u);let d=ct(Wt(3.6,0,.4,32),ut.case());return d.rotation.z=-Math.PI/2,d.position.set(Ae(1050)-1.5,0,0),o.add(d),o})(),{dir:1})),i.add(ee("tiretto","tiretto",(()=>{let o=Oe(nt.slPivot),l=Mn(fn(nt.slPivot,[905,470],34,18),be(nt.slPivot,22));o.add(ct(zi(Jt(l,-3.55,.55,.05),nt.slPivot),ut.steel()));let c=ct(Wt(.5,-4.6,-3.5,12),ut.steelMatte());return c.position.set(Ae(900)-Ae(nt.slPivot[0]),0,We(476)-We(nt.slPivot[1])),o.add(c),o})(),{dir:-1,face:-3.55}));let a=(o,l,c)=>{let h=new Yt;h.position.set(Ae(o[0]),Cc,We(o[1]));let u=Jt([on(ne,l,10)],-c/2,c,.04),d=ct(u,ut.steel());return d.rotation.z=Math.PI/2,h.add(d),h};i.add(ee("pignone_carica","pignone_carica",a(nt.windingPinion,13,2.8),{dir:-1})),i.add(ee("pignone_scorrevole","pignone_scorrevole",a(nt.clutch,14,3.4),{dir:-1})),i.add(ee("ruota_rinvio","ruota_rinvio",(()=>{let o=Oe(nt.settingWheel);return o.add(ct(Jt([on(ne,28,20)],-3.6,.6,.05),ut.steel())),o})(),{dir:-1,face:-3.6})),i.add(ee("bascula","bascula",(()=>{let o=Oe(nt.yokePivot),l=Mn(fn(nt.yokePivot,[870,530],30,16),be(nt.yokePivot,20));return o.add(ct(zi(Jt(l,-3.5,.5,.05),nt.yokePivot),ut.steelMatte())),o})(),{dir:-1,face:-3.5})),i.add(ee("molla_tiretto","molla_tiretto",(()=>{let o=new Yt,l=yi([[760,385],[850,380],[915,430],[845,455],[800,520],[830,640],[760,660],[735,560]]);o.add(ct(Jt(l,-6,.6,.08),ut.steelMatte()));for(let c of[[770,420],[770,620]])o.add(js(ct(Wt(1.4,-5.4,-3,16),ut.steelMatte()),c));return o})(),{dir:-1,face:-6,cover:!0})),i.add(ee("chaussee","chaussee",(()=>{let o=Oe(nt.center);return o.add(ct(Wt(2.3,-8,-3,24),ut.steel())),o.add(ct(Jt([on(ne,26,12)],-4,1,.04),ut.steel())),o})(),{dir:-1})),i.add(ee("ruota_minuteria","ruota_minuteria",(()=>{let o=Oe(nt.minuteWheel);return o.add(ct(Jt([on(ne,50,36)],-3.9,.5,.05),ut.steel())),o.add(ct(Jt([on(ne,14,10)],-4.8,.95,.03),ut.steel())),o})(),{dir:-1})),i.add(ee("ruota_ore","ruota_ore",(()=>{let o=Oe(nt.center);return o.add(ct(Jt([[...qu(66,48,0),Ks(ne,30,32).reverse()]],-5.3,.45,.05),ut.gold())),o.add(ct(Wt(3,-7.8,-4.85,32),ut.gold())),o})(),{dir:-1})),i.add(ee("ruota_datario","datario",(()=>{let o=Oe(nt.dateWheel);return o.add(ct(Jt([on(ne,44,30)],-4.6,.5,.05),ut.steel())),o})(),{dir:-1})),i.add(ee("disco_datario","datario",(()=>{let o=new Yt,l=[on(ne,362,31,0,9).reverse(),Ks(ne,428,128)];o.add(ct(Jt([[l[1],l[0]]],-5.9,.3,.03),ut.steelMatte()));let c=new Bo(36.4,42.6,128);c.rotateX(Math.PI/2),c.rotateY(Math.PI);let h=new re(c,ut.dateRing());return h.position.y=-5.91,h.receiveShadow=!0,o.add(h),o})(),{dir:-1,face:-5.9})),i.add(ee("saltarello","datario",(()=>{let o=Oe(nt.jumper),l=Mn(fn(nt.jumper,me(ne,368,-1.25),26,10),be(nt.jumper,16));return o.add(ct(zi(Jt(l,-5.95,.4,.05),nt.jumper),ut.steel())),o})(),{dir:-1,face:-5.95})),i.add(ee("placca_calendario","datario",(()=>{let o=new Yt;o.add(ct(Jt(Yu(ne,352,80),-6.6,.55,.08),ut.steelMatte()));for(let l of[[300,420],[640,700],[560,220]])o.add(js(ct(Wt(1.3,-6.05,-3,16),ut.steelMatte()),l));return o})(),{dir:-1,face:-6.6,cover:!0})),i.add(ee("quadrante","quadrante",(()=>{let o=new Yt;o.add(ct(Wt(43.6,-7.6,-7.2,128),Xe({color:15986404,metalness:0,roughness:.55})));let l=new Rr(43.6,128);l.rotateX(Math.PI/2),l.rotateY(Math.PI);let c=new re(l,ut.dial());return c.position.y=-7.61,c.receiveShadow=!0,o.add(c),o})(),{dir:-1,face:-7.6,cover:!0})),i.add(ee("lancette","lancette",(()=>{let o=new Yt,l=-Math.PI/2,c=ct(Jt(fn(ne,me(ne,250,l),30,10),-8.2,.2,.03),ut.hands()),h=ct(Jt(fn(ne,me(ne,370,l),22,8),-8.7,.2,.03),ut.hands()),u=ct(Jt(zr(me(ne,80,l+Math.PI),me(ne,400,l),6),-9.1,.12,.02),ut.orange());return c.name="h",h.name="m",u.name="s",o.add(c,h,u),o.userData.hands={h:c,m:h,s:u},ra(o,10*3600+10*60+30),o.add(ct(Wt(1.2,-9.2,-7.6,24),ut.hands())),o})(),{dir:-1,face:-9.2,cover:!0})),i.add(ee("cassa","cassa",(()=>{let o=new Yt,l=[[44.4,-9.6],[47.6,-9.6],[49,-8.4],[49.4,0],[49,13.6],[47.4,14.5],[44.4,14.5],[44.4,-9.6]].map(h=>new dt(h[0],h[1]));o.add(ct(new Ar(l,128),ut.case()));let c=ct(Wt(1.8,0,4,24),ut.case());c.rotation.z=Math.PI/2,c.position.set(Ae(1e3)-.5,Cc,0),o.add(c);for(let h of[[164,193],[833,810]]){let u=Math.atan2(We(h[1]),Ae(h[0])),d=ct(new Ze(5.5,.6,3.2),ut.steelMatte());d.position.set(Ae(h[0]),.3,We(h[1])),d.rotation.y=-u,o.add(d)}return o})(),{dir:1,face:.6,cover:!0})),i.add(ee("fondello","fondello",(()=>{let o=new Yt;o.add(ct(Wt(47.2,14.5,15.9,128),ut.case())),o.add(ct(Wt(37,15.9,16.3,128),ut.case()));for(let l=0;l<6;l++){let c=l/6*Ee,h=ct(new Ze(3,.5,2.4),ut.dark());h.position.set(Math.cos(c)*44,15.75,Math.sin(c)*44),h.rotation.y=-c,o.add(h)}return o})(),{dir:1,face:16.3,cover:!0}))}function ra(i,t){let e=i.userData.hands;e&&(e.s.rotation.y=t%60/60*Ee,e.m.rotation.y=t%3600/3600*Ee,e.h.rotation.y=t%43200/43200*Ee)}var Fn={};function vx(i){let t=Qt[Hi(i.item)];if(!t)return;let e=i.r*sa,n=new Yt;n.position.set(Ae(i.x),t.face,We(i.y)),t.dir<0&&(n.rotation.x=Math.PI);let s=new Yt;s.add(ct(Wt(e,0,.62,32),ut.blue()));let r=ct(new Ze(e*2.06,.3,e*.3),ut.dark(),!1);r.position.y=.52,r.rotation.y=(i.x*7+i.y)%3,s.add(r),s.add(ct(Wt(e*.45,-2.4,0,12),ut.blue()));{let a=[],o=e*.45+.04;for(let l=0;l<=120;l++){let c=l/120,h=c*6*Ee;a.push(new N(Math.cos(h)*o,-2.3+2.1*c,Math.sin(h)*o))}s.add(ct(new xi(new ei(a),160,.07,5),ut.blue(),!1))}n.add(s),n.name=i.id,n.userData={id:i.id,part:"viti"},Fn[i.id]={id:i.id,item:Hi(i.item),lh:!!i.lh,outer:n,spin:s,r:e,base:{p:n.position.clone(),q:n.quaternion.clone()}},jt.add(n)}var pn,de,qe,Je,jt,$n,$e,je,Jn,Ue,ln,ii,Vc=76,Ju=[],hs=new Set,ju=new Set,Gc=[],er="ponti",nr=!1,ea=null,Ku=0,Qs=[],Mx=document.getElementById("labels"),Qu=1,td={abort:!0};function us(i,t,e,n){let s={t0:performance.now(),dur:i*Qu,fn:t,done:e,fail:n};return Qs.push(s),s}var Se=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;function bx(){let i=document.getElementById("c");try{pn=new Po({canvas:i,antialias:!0,alpha:!0})}catch(F){Rn({type:"nogl",msg:String(F)});return}pn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),pn.setSize(window.innerWidth,window.innerHeight,!1),pn.toneMapping=uc||hc,pn.toneMappingExposure=.95,pn.shadowMap.enabled=!0,pn.shadowMap.type=cs?Vn:cc,pn.setClearColor(0,0),de=new Vs,de.background=null;let t=new Hs(pn);de.environment=t.fromScene(new jo,.03).texture,de.environmentIntensity=1.05,qe=new sn(35,window.innerWidth/window.innerHeight,1,1e3),qe.position.set(0,112,64),Je=new Jo(qe,pn.domElement),Je.enableDamping=!0,Je.dampingFactor=.12,Je.minDistance=18,Je.maxDistance=260,Je.maxPolarAngle=Math.PI*.47,Je.target.set(0,0,0);let e=new Or(16777215,1.7);e.position.set(-35,110,45),e.castShadow=!0,e.shadow.mapSize.set(cs?2048:1024,cs?2048:1024),e.shadow.radius=cs?6:2,e.shadow.blurSamples=12,e.shadow.camera.left=-62,e.shadow.camera.right=62,e.shadow.camera.top=62,e.shadow.camera.bottom=-62,e.shadow.camera.near=10,e.shadow.camera.far=260,e.shadow.bias=-4e-4,e.shadow.normalBias=.02,de.add(e),de.add(new ko(16777215,8357784,.45));let n=new Or(14674175,.55);n.position.set(70,40,-60),de.add(n);let s=new re(new Rr(190,96),Xe({color:2240589,metalness:0,roughness:.95,map:_x()}));s.rotation.x=-Math.PI/2,s.position.y=-16,s.receiveShadow=!0,de.add(s),ii=new Yt;let r=new qs,a=46,o=92,l=5;r.moveTo(-a/2+l,-o/2),r.lineTo(a/2-l,-o/2),r.quadraticCurveTo(a/2,-o/2,a/2,-o/2+l),r.lineTo(a/2,o/2-l),r.quadraticCurveTo(a/2,o/2,a/2-l,o/2),r.lineTo(-a/2+l,o/2),r.quadraticCurveTo(-a/2,o/2,-a/2,o/2-l),r.lineTo(-a/2,-o/2+l),r.quadraticCurveTo(-a/2,-o/2,-a/2+l,-o/2);let c=new Lr(r,{depth:.6,bevelEnabled:!1});c.rotateX(-Math.PI/2);let h=new re(c,Xe({color:6127470,roughness:.95,metalness:0}));h.receiveShadow=!0,ii.add(h),ii.position.set(Vc,-15.9,0),ii.visible=!1,de.add(ii),jt=new Yt,de.add(jt),$u(jt),$n=new Yt;let u=[[0,0],[7.5,0],[8.2,.4],[8.6,2.2],[8.1,2.3],[7.4,.7],[0,.7]].map(F=>new dt(F[0],F[1])),d=ct(new Ar(u,64),Xe({color:16185338,metalness:.1,roughness:.4}));$n.add(d),$n.position.set(62,-8,26),$n.visible=!1,de.add($n),$e=new Yt,$e.add(ct(Wt(.28,0,9,16,.42),ut.steel())),$e.add(ct(Wt(1.5,9,19,24),Xe({color:1915530,metalness:.2,roughness:.5})));let f=ct(new Ze(.5,9,3.1),Xe({color:15895608,roughness:.5}));f.position.y=14,$e.add(f),$e.add(ct(Wt(1.55,19,20.5,24),Xe({color:15895608,roughness:.5}))),$e.visible=!1,de.add($e),Ue=new Yt;let x=new Ze(.7,20,1.6);x.translate(0,10,0);for(let F of[-1,1]){let B=new Yt;B.position.y=20;let C=ct(x.clone(),ut.steel());C.position.y=-20,B.add(C),B.userData.sgn=F,Ue.add(B)}Ue.add(ct(Wt(1,19.5,21,16),ut.steel())),Ue.visible=!1,de.add(Ue),tr(1),ln=new Yt;let y=ct(new Xs(.18,6,12),ut.steel());y.rotation.x=Math.PI,y.position.y=3,ln.add(y),ln.add(ct(Wt(.6,6,20,16),Xe({color:1915530,roughness:.5})));let g=ct(new ns(.32,16,12),ut.oil(),!1);g.position.y=.15,ln.add(g),ln.userData.drop=g,ln.visible=!1,de.add(ln),je=new Yt;let p=ct(new Xs(.35,5,16),ut.steel());p.rotation.x=Math.PI,p.position.y=2.5,je.add(p),je.add(ct(Wt(.9,5,20,16),Xe({color:15895608,roughness:.5}))),je.visible=!1,de.add(je),Jn=new Yt;let L=Xe({color:15895608,emissive:15895608,emissiveIntensity:.6,side:Ln}),T=new Yt;T.add(new re(new Dr(1,.13,8,48,Math.PI*1.45),L));let M=new re(new Xs(.42,.9,16),L),W=Math.PI*1.45;M.position.set(Math.cos(W),Math.sin(W),0),M.rotation.z=W,T.add(M),T.rotation.x=-Math.PI/2,Jn.add(T),Jn.userData.arc=T,Jn.visible=!1,de.add(Jn);let O=null;pn.domElement.addEventListener("pointerdown",F=>{O={x:F.clientX,y:F.clientY,t:performance.now()}}),pn.domElement.addEventListener("pointerup",F=>{if(!O)return;Math.hypot(F.clientX-O.x,F.clientY-O.y)<8&&performance.now()-O.t<450&&Ex(F.clientX,F.clientY),O=null}),window.addEventListener("resize",Fu),Fu(),requestAnimationFrame(cd),Rn({type:"ready"})}function Fu(){let i=window.innerWidth,t=window.innerHeight;!pn||i===0||t===0||(pn.setSize(i,t,!1),qe.aspect=i/t,qe.updateProjectionMatrix())}function Sx(i){for(let t=i;t;t=t.parent)if(!t.visible)return!1;return!0}function Ex(i,t){let e=new Go,n=new dt(i/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);e.setFromCamera(n,qe);let s=e.intersectObject(jt,!0);for(let r of s){if(!Sx(r.object))continue;let a=r.object;for(;a&&!(a.userData&&a.userData.id);)a=a.parent;if(!a)continue;let o=Qt[a.userData.id];if(!(nr&&o&&o.cover)){ea=a.userData.id,Ku=performance.now()+1600,Rn({type:"tap",id:a.userData.id,part:a.userData.part});return}}}function Dc(i,t){i.traverse(e=>{if(!e.isMesh)return;let n=Array.isArray(e.material)?e.material:[e.material];for(let s of n)t(s,e)})}function ki(i,t){Dc(i,e=>{e.userData.baseOpacity===void 0&&(e.userData.baseOpacity=e.opacity),e.transparent=t<.999,e.opacity=t,e.depthWrite=t>.6})}function Ne(i,t){t.position.copy(i.base.p),t.quaternion.copy(i.base.q),t.scale.set(1,1,1)}function Bu(i){for(let t of hs)if(Hi(t)===i)return!0;return!1}function wx(){let i=Qs.splice(0,Qs.length);for(let t of i)t.fail&&t.fail(td);for(let t of[...de.children])t.userData&&t.userData.holder&&de.remove(t);$e.visible=!1,je.visible=!1,Jn.visible=!1}function na(i){wx(),hs=new Set(i.present||[]),ju=new Set((i.highlight||[]).map(Hi)),Gc=i.numbered||[],nr=!!i.xray;let t=i.tray||[],e=(i.mat||[]).map(Hi);for(let r of Ju.splice(0))r.parent&&r.parent.remove(r);Ue.visible=!1,ln.visible=!1;let n=0;for(let r of Object.values(Qt))r.obj.parent!==jt&&jt.add(r.obj),r.busy=!1,r.obj.scale.set(1,1,1),Ne(r,r.obj),(r.id==="cricchetto"||r.id==="rocchetto_cricco"||r.id==="racchetta")&&Ne(r,r.obj),r.obj.visible=Bu(r.id),ki(r.obj,nr&&r.cover?.22:1);for(let r of[...new Set(e)]){let a=Qt[r];!a||Bu(r)||(a.obj.visible=!0,sd(a,n++,!1))}kr=n,ii.visible=n>0||!!i.showMat;let s=0;for(let r of Object.values(Fn))r.outer.parent!==jt&&jt.add(r.outer),Ne(r,r.outer),r.spin.position.set(0,0,0),r.spin.rotation.set(0,0,0),ki(r.outer,1),hs.has(r.id)?r.outer.visible=!0:t.includes(r.id)?(r.outer.visible=!0,ed(r,s++,!1)):r.outer.visible=!1;$n.visible=t.length>0||!!i.showTray,ia=s,i.live&&Si(i.live),i.side&&i.side!==er?Ax(i.side,i.animate!==!1):jt.rotation.z=er==="quadrante"?Math.PI:0,i.focus&&Uc(i.focus,i.animate!==!1,i.zoom)}var ia=0;function Tx(i){let t=i*2.399,e=1.6+1.45*Math.sqrt(i);return new N($n.position.x+Math.cos(t)*Math.min(e,6),$n.position.y+1.3,$n.position.z+Math.sin(t)*Math.min(e,6))}function ed(i,t,e){de.attach(i.outer);let n=Tx(t),s=new yn().setFromEuler(new Un(Math.PI/2-.2,0,.6*t));if(!e){i.outer.position.copy(n),i.outer.quaternion.copy(s);return}let r=i.outer.position.clone(),a=i.outer.quaternion.clone();return new Promise((o,l)=>us(900,c=>{let h=Se(c);i.outer.position.lerpVectors(r,n,h),i.outer.position.y+=Math.sin(h*Math.PI)*14,i.outer.quaternion.slerpQuaternions(a,s,h)},o,l))}function Ax(i,t){er=i;let e=i==="quadrante"?Math.PI:0;if(!t){jt.rotation.z=e;return}let n=jt.rotation.z;us(900,s=>{jt.rotation.z=n+(e-n)*Se(s),jt.position.y=Math.sin(s*Math.PI)*18})}function Rx(i){let t=new An,e=jt.rotation.z,n=jt.position.y;jt.rotation.z=er==="quadrante"?Math.PI:0,jt.position.y=0,jt.updateMatrixWorld(!0);for(let s of i){let r=Hi(s),a=Qt[r]&&Qt[r].obj||Fn[r]&&Fn[r].outer;if(!a)continue;let o=a.visible;a.visible=!0;let l=new An().setFromObject(a);a.visible=o,l.isEmpty()||t.union(l)}return jt.rotation.z=e,jt.position.y=n,jt.updateMatrixWorld(!0),t}function Uc(i,t=!0,e=1){let n=new N(0,0,0),s=52;if((!i||!i.length)&&ii&&ii.visible&&(n=new N(Vc/2-4,0,0),s=66),i&&i.length){let u=Rx(i);u.isEmpty()||(u.getCenter(n),s=Math.max(9,u.getSize(new N).length()/2))}let r=Math.min(240,Math.max(26,s/Math.sin(qe.fov*Math.PI/360)*1.05*(e||1))),a=Math.atan2(qe.position.x-Je.target.x,qe.position.z-Je.target.z),o=i&&i.length?.55:.68,l=new N(n.x+r*Math.sin(o)*Math.sin(a),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(a));if(!t){Je.target.copy(n),qe.position.copy(l);return}let c=Je.target.clone(),h=qe.position.clone();us(800,u=>{let d=Se(u);Je.target.lerpVectors(c,n,d),qe.position.lerpVectors(h,l,d)})}function Nc(i,t=0){return i.outer.updateMatrixWorld(!0),i.spin.localToWorld(new N(0,.62+t,0))}function Wc(i,t,e){return jt.updateMatrixWorld(!0),jt.localToWorld(new N(Ae(i),e,We(t)))}var nd=i=>new Promise((t,e)=>us(i,()=>{},t,e)),ye=(i,t)=>new Promise((e,n)=>us(i,t,e,n));function Cx(i,t,e){Jn.visible=!0,Jn.position.copy(i).add(new N(0,.35,0));let n=t+1;Jn.scale.set(e?n:-n,n,n)}async function Px(i,t){let e=i.lh?-1:1,n=t?-e:e;if(t){let l=new N;jt.add(i.outer),Ne(i,i.outer),i.spin.position.y=1.4,i.outer.updateMatrixWorld(!0),i.outer.getWorldPosition(l);let c=new yn;i.outer.getWorldQuaternion(c),de.attach(i.outer);let h=i.outer.position.clone(),u=i._trayPos||h.clone().add(new N(0,20,0)),d=i._trayQuat||i.outer.quaternion.clone();i.outer.visible=!0,i.outer.position.copy(u),i.outer.quaternion.copy(d),await ye(800,f=>{let x=Se(f);i.outer.position.lerpVectors(u,l,x),i.outer.position.y+=Math.sin(x*Math.PI)*12,i.outer.quaternion.slerpQuaternions(d,c,x)}),jt.attach(i.outer),Ne(i,i.outer)}let s=Nc(i);Cx(s,i.r,n>0),$e.visible=!0,$e.rotation.set(0,0,0),$e.position.copy(s).add(new N(0,22,0)),await ye(550,l=>$e.position.y=s.y+22*(1-Se(l)));let r=3,a=i.spin.position.y;await ye(2300,l=>{let c=n*l*r*Ee;i.spin.rotation.y=c,$e.rotation.y=c,i.spin.position.y=t?a*(1-l):1.4*l;let h=Nc(i);$e.position.copy(h),Jn.userData.arc.rotation.z=-c*.15}),Jn.visible=!1;let o=$e.position.clone();await ye(450,l=>$e.position.y=o.y+22*Se(l)),$e.visible=!1,t||($n.visible=!0,await ed(i,ia++,!0))}var Ix=new Set(["cassa","fondello","stelo","rotore","quadrante","platina","lancette"]);async function zu(i,t){let e=[...new Set(i.map(Hi))].map(r=>Qt[r]).filter(Boolean);if(e.length&&!e.some(r=>Ix.has(r.id)))return t?Fx(e):Ox(e);let n=e;for(let r of n)r.obj.visible=!0,ki(r.obj,1);let s=n.length===1?n[0].id:null;await ye(1300,r=>{let a=Se(t?1-r:r);for(let o of n)Ne(o,o.obj),o.id==="stelo"?o.obj.position.x-=16*a:o.id==="fondello"?(o.obj.rotation.y=a*1.6,o.obj.position.y+=22*Math.max(0,a-.35)/.65):(o.obj.position.y+=o.dir*20*a,o.obj.position.x+=(er==="quadrante"?-1:1)*16*Math.max(0,a-.25)/.75,(o.id==="ponte_bilanciere"||o.id==="bilanciere"||o.id==="spirale"||o.id==="racchetta")&&(o.obj.rotation.y=.12*Math.sin(a*Math.PI))),ki(o.obj,a<.55?1:Math.max(0,1-(a-.55)/.45));for(let o of Object.values(Fn))n.some(l=>l.id===o.item)&&o.outer.parent===jt&&o.outer.visible&&(Ne(o,o.outer),o.outer.position.y+=Qt[o.item].dir*20*a,o.outer.position.x+=(er==="quadrante"?-1:1)*16*Math.max(0,a-.25)/.75)});for(let r of n)Ne(r,r.obj),ki(r.obj,nr&&r.cover?.22:1),r.obj.visible=!!t}async function Lx(i,t){let e=Wc(i[0],i[1],t);je.visible=!0,je.position.copy(e).add(new N(0,18,0)),await ye(600,n=>je.position.y=e.y+18*(1-Se(n)));for(let n=0;n<2;n++)await ye(260,s=>je.position.y=e.y+1.2*Math.sin(s*Math.PI));await nd(300),await ye(450,n=>je.position.y=e.y+18*Se(n)),je.visible=!1}async function Dx(){let i=Qt.cricchetto.obj,t=Qt.rocchetto_cricco.obj,e=me(nt.barrel,112,-2.2),n=Wc(e[0],e[1],8);je.visible=!0,je.position.copy(n).add(new N(0,18,0)),await ye(600,s=>je.position.y=n.y+18*(1-Se(s))),await ye(400,s=>{i.rotation.y=.22*Se(s)}),await ye(2600,s=>{t.rotation.y=-2.5*Ee*(1-Math.pow(1-s,2))}),await ye(400,s=>{i.rotation.y=.22*(1-Se(s))}),await ye(450,s=>je.position.y=n.y+18*Se(s)),je.visible=!1,t.rotation.y=0}async function Ux(){let i=Qt.racchetta.obj;for(let t of[.14,-.14,0]){let e=i.rotation.y;await ye(700,n=>{i.rotation.y=e+(t-e)*Se(n)})}}var ku=Promise.resolve();function Nx(i,t){ku=ku.then(async()=>{try{let e=i.t;if(e==="unscrew"||e==="screw"){let n=Fn[i.ids[0]];if(n){if(e==="screw"){let s=n.outer.parent===de&&n.outer.visible;n._trayPos=s?n.outer.position.clone():null,n._trayQuat=s?n.outer.quaternion.clone():null}await Px(n,e==="screw"),e==="screw"?(hs.add(n.id),ia=Math.max(0,ia-1)):hs.delete(n.id)}}else if(e==="lift"){await zu(i.ids,!1);for(let n of i.ids)hs.delete(n)}else if(e==="lower"){await zu(i.ids,!0);for(let n of i.ids)hs.add(n)}else e==="press"?await Lx(i.at,.2):e==="letdown"?await Dx():e==="regulate"?await Ux():e==="oil"&&await Bx(i.ids[0],i.pts||[])}catch(e){if(e===td){Rn({type:"aborted",seq:t});return}Rn({type:"error",msg:String(e&&e.stack||e)})}Rn({type:"done",seq:t})})}var kr=0;function tr(i){for(let t of Ue.children)t.userData.sgn&&(t.rotation.z=t.userData.sgn*(.025+.06*i))}function id(i){let t=i%2,e=Math.floor(i/2);return new N(Vc-10+t*20,-15.2,-32+e*21)}function sd(i,t,e){let n=i.obj;de.attach(n);let s=n.position.clone(),r=n.scale.clone();n.scale.setScalar(.5),n.updateMatrixWorld(!0);let a=new An().setFromObject(n),o=a.getCenter(new N),l=id(t),c=s.clone().add(new N(l.x-o.x,l.y-a.min.y,l.z-o.z));return n.scale.copy(r),e?{end:c,p0:s,s0:r}:(n.position.copy(c),n.scale.setScalar(.5),{end:c})}function Oc(i){i.updateMatrixWorld(!0);let t=new An().setFromObject(i),e=t.getCenter(new N);return new N(e.x,t.max.y,e.z)}async function Ox(i){ii.visible=!0;let t=i[0];for(let d of i)d.busy=!0,d.obj.visible=!0,ki(d.obj,1);let e=new Yt;e.userData.holder=!0,de.add(e);let n=Oc(t.obj);e.position.copy(n),e.updateMatrixWorld(!0);for(let d of i)e.attach(d.obj);Ue.visible=!0,tr(1),Ue.position.copy(n).add(new N(0,18,0)),Ue.rotation.set(0,.5,.12),await ye(500,d=>Ue.position.y=n.y+18*(1-Se(d))-.4),await ye(250,d=>tr(1-d));let s=t.id==="ponte_bilanciere"?.22:.08,r=e.position.clone();await ye(700,d=>{let f=Se(d);e.position.y=r.y+14*f,e.rotation.x=s*Math.sin(f*Math.PI),e.rotation.y=(t.id==="ponte_bilanciere"?.15:0)*Math.sin(f*Math.PI),Ue.position.y=e.position.y-.4});let a=kr++,l=sd({obj:e},a,!0),c=l.p0,h=l.end;await ye(900,d=>{let f=Se(d);e.position.lerpVectors(c,h,f),e.position.y+=Math.sin(f*Math.PI)*10,e.scale.setScalar(1-.5*f),e.rotation.x=0;let x=Oc(e);Ue.position.set(x.x,x.y-.4,x.z)}),await ye(250,d=>tr(d));let u=Ue.position.clone();await ye(400,d=>Ue.position.y=u.y+20*Se(d)),Ue.visible=!1;for(let d of i)de.attach(d.obj),d.busy=!1;de.remove(e)}async function Fx(i){let t=i[0];for(let c of i)c.obj.parent!==jt&&jt.add(c.obj),c.obj.scale.set(1,1,1),Ne(c,c.obj),c.obj.visible=!0,c.busy=!0,ki(c.obj,1);jt.updateMatrixWorld(!0);let e=Oc(t.obj),n=new Yt;n.userData.holder=!0,de.add(n),n.position.copy(e),n.updateMatrixWorld(!0);for(let c of i)n.attach(c.obj);let s=.5,r=id(Math.max(0,kr-1)),a=new N(r.x,r.y+3,r.z);n.position.copy(a),n.scale.setScalar(s),Ue.visible=!0,tr(0),Ue.rotation.set(0,.5,.12),await ye(1e3,c=>{let h=Se(c);n.position.lerpVectors(a,e.clone().add(new N(0,10,0)),h),n.position.y+=Math.sin(h*Math.PI)*10,n.scale.setScalar(s+(1-s)*h),Ue.position.set(n.position.x,n.position.y-.4,n.position.z)});let o=n.position.y;await ye(700,c=>{n.position.y=o+(e.y-o)*Se(c),Ue.position.y=n.position.y-.4}),await ye(250,c=>tr(c));let l=Ue.position.clone();await ye(400,c=>Ue.position.y=l.y+20*Se(c)),Ue.visible=!1;for(let c of i)jt.attach(c.obj),Ne(c,c.obj),c.obj.scale.set(1,1,1),c.busy=!1;de.remove(n),kr=Math.max(0,kr-1)}async function Bx(i,t){let e=Qt[Hi(i)],n=e?e.face:7.4;ln.visible=!0;for(let s of t){let r=Wc(s[0],s[1],e&&e.dir<0?n-.05:n+.05);ln.userData.drop.visible=!0,ln.position.copy(r).add(new N(0,16,0)),await ye(450,o=>ln.position.y=r.y+16*(1-Se(o))+.3),await nd(250);let a=ct(new ns(.45,16,12),ut.oil(),!1);a.scale.set(1,.45,1),a.position.copy(r).add(new N(0,.15,0)),de.add(a),Ju.push(a),ln.userData.drop.visible=!1,await ye(350,o=>ln.position.y=r.y+.3+10*Se(o))}await ye(300,s=>ln.position.y+=s*2),ln.visible=!1}var ie={on:!1,speed:1,sound:!1,panel:!1,t:0,clock0:0,lastBeat:-1,demo:null},zx=["bilanciere","spirale","ancora","ruota_scappamento","ruota_secondi","ruota_terzo","ruota_centro","bariletto"],Fc=4.6,Hu=.42,kx=.16,Hx=4;function Si(i){if(i.on!==void 0&&(ie.on=!!i.on),i.speed!==void 0&&(ie.speed=Math.max(.005,+i.speed)),i.panel!==void 0&&(ie.panel=!!i.panel),!ie.clock0){let t=new Date;ie.clock0=t.getHours()*3600+t.getMinutes()*60+t.getSeconds()+t.getMilliseconds()/1e3}kc()}function Vx(){for(let i of zx){let t=Qt[i];if(!t||!t.obj.visible||t.obj.parent!==jt||t.busy)return!1}return!0}var Vu="",Gu=0;function Gx(i){let t=Ee*Hx*i/2,e=Fc*Math.sin(t),n=t/Math.PI,s=Math.floor(n+.5),r=(n-s)*Math.PI,a=Math.asin(Math.min(1,Hu/Fc)),o=Math.min(1,Math.max(0,(r+a)/(2*a))),l=s-.5+o*o*(3-2*o),c=kx*Math.max(-1,Math.min(1,e/Hu))*-1,h="libero";return Math.abs(r)<a&&(h=r<-a*.15?"sblocco":"impulso"),{theta:e,steps:l,fork:c,ph:h,beat:s}}function Wx(i,t){if(!ie.on||(ie.t+=i*ie.speed,!(Vx()||ie.demo==="escapement"||ie.demo==="energy")))return;let n=Gx(ie.t),s=-n.steps*(Ee/20)/2,r=(c,h)=>{let u=Qt[c];u&&u.obj.parent===jt&&!u.busy&&(u.obj.rotation.y=h)};r("bilanciere",n.theta);let a=Qt.spirale;if(a&&a.obj.parent===jt&&!a.busy){a.obj.rotation.y=n.theta*.4;let c=1+.035*(n.theta/Fc);a.obj.scale.set(c,1,c)}r("ancora",n.fork),r("ruota_scappamento",s),r("ruota_secondi",-s/12),r("ruota_terzo",s/90),r("ruota_centro",-s/720),r("bariletto",s/5760);let o=Qt.rotore;o&&o.obj.visible&&o.obj.parent===jt&&!o.busy&&ie.speed<=1.5&&(o.obj.rotation.y=.5*Math.sin(ie.t*.8));let l=Qt.lancette;if(l&&l.obj.parent===jt&&ie.demo!=="keyless"){let c=ie.clock0+Math.floor(ie.t*8)/8;ra(l.obj,c)}n.beat!==ie.lastBeat&&(ie.lastBeat>=0&&ie.sound&&ie.speed<=2&&qx(n.beat%2),ie.lastBeat=n.beat),ie.demo==="escapement"&&n.ph!==Vu&&t-Gu>90&&(Vu=n.ph,Gu=t,Rn({type:"phase",phase:n.ph}))}var bn=null,Bc=null;function Xx(){if(bn)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;bn=new i,Bc=bn.createBuffer(1,Math.floor(bn.sampleRate*.03),bn.sampleRate);let t=Bc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=(Math.random()*2-1)*Math.exp(-e/(bn.sampleRate*.0025))}function qx(i){if(!bn)return;let t=bn.createBufferSource();t.buffer=Bc;let e=bn.createBiquadFilter();e.type="bandpass",e.frequency.value=i?3600:4300,e.Q.value=2.5;let n=bn.createGain();n.gain.value=.9,t.connect(e).connect(n).connect(bn.destination),t.start()}var zc=document.getElementById("live");function kc(){if(!zc)return;zc.style.display=ie.panel?"flex":"none";let i=document.getElementById("lp-play"),t=document.getElementById("lp-sound"),e=document.getElementById("lp-speed");i&&(i.textContent=ie.on?"\u275A\u275A":"\u25B6"),t&&(t.textContent=ie.sound?"\u{1F50A}":"\u{1F508}"),e&&(e.textContent=ie.speed>=1?"1\xD7":ie.speed>=.1?"\u2152":"1/50")}zc&&(document.getElementById("lp-play").addEventListener("click",()=>{Si({on:!ie.on})}),document.getElementById("lp-sound").addEventListener("click",()=>{Xx(),bn&&bn.state==="suspended"&&bn.resume(),ie.sound=!ie.sound,kc()}),document.getElementById("lp-speed").addEventListener("click",()=>{ie.speed=ie.speed>=1?.1:ie.speed>=.1?.02:1,kc()}));var ir=null,Zn=null,an=null,si={pos:0,posAnim:0,turning:!1,turnDir:1,psi:0,wrist:!1,ticking:!0,charge:.3,slip:0,flash:0,sentAt:0};function rd(){ir=null,ie.demo=null,Zn&&(de.remove(Zn),Zn=null),an&&(an.visible=!1),jt.visible=!0;for(let i of["stelo","pignone_scorrevole","pignone_carica","tiretto","bascula","ruota_rinvio","ruota_minuteria","chaussee","ruota_ore","ruota_datario","disco_datario"]){let t=Qt[i];t&&Ne(t,t.obj)}}function Yx(i){var e,n;if(rd(),!i||!i.kind){Si({on:!1});return}let t=i.kind;if(ie.demo=t,t==="escapement")na({side:"ponti",present:["platina","ruota_scappamento","ancora","bilanciere","spirale","ruota_secondi","ruota_terzo"],focus:["ruota_scappamento","ancora","bilanciere"],zoom:.8}),Si({on:!0,speed:(e=i.speed)!=null?e:.05,panel:!1});else if(t==="energy"){let s=["platina","bariletto","ruota_centro","ruota_terzo","ruota_secondi","ruota_scappamento","ancora","bilanciere","spirale"];na({side:"ponti",present:s,focus:s.slice(1),zoom:.9}),Si({on:!0,speed:(n=i.speed)!=null?n:60,panel:!1}),Zx()}else if(t==="keyless")na({side:"quadrante",present:["platina","stelo","tiretto","pignone_carica","pignone_scorrevole","ruota_rinvio","bascula","chaussee","ruota_minuteria","ruota_ore","ruota_datario","lancette"],focus:["stelo","tiretto","bascula","pignone_scorrevole","ruota_rinvio"],zoom:.8}),Si({on:!1,panel:!1}),si.psi=0,ir=$x,od(i);else if(t==="bridle"){Si({on:!1,panel:!1}),jt.visible=!1,$n.visible=!1,ii.visible=!1,Jx(),an.visible=!0,ir=jx;let r=new An().setFromObject(an).getCenter(new N),a=Je.target.clone(),o=qe.position.clone(),l=r.clone().add(new N(0,48,30));us(800,c=>{Je.target.lerpVectors(a,r,Se(c)),qe.position.lerpVectors(o,l,Se(c))})}}function Zx(){let i=[nt.barrel,nt.center,nt.third,nt.fourth,nt.escape,nt.pallet,nt.balance].map((r,a)=>new N(Ae(r[0]),6.2-a*.3,We(r[1]))),t=new ei(i);Zn=new Yt;let e=new _i({color:16752704,transparent:!0,opacity:.95}),n=26;for(let r=0;r<n;r++){let a=new re(new ns(.75,14,10),e);a.userData.u=r/n,Zn.add(a)}let s=new re(new xi(t,120,.22,6),new _i({color:15895608,transparent:!0,opacity:.45}));Zn.add(s),Zn.userData.curve=t,de.add(Zn),ir=r=>{if(Zn)for(let a of Zn.children){if(a.userData.u===void 0)continue;a.userData.u=(a.userData.u+r*.12)%1;let o=Zn.userData.curve.getPointAt(a.userData.u);a.position.copy(o);let l=.7+.5*Math.sin(a.userData.u*12+performance.now()/300);a.scale.setScalar(l)}}}function od(i){i.pos!==void 0&&(si.pos=i.pos),i.turning!==void 0&&(si.turning=!!i.turning),i.dir!==void 0&&(si.turnDir=i.dir)}function $x(i){let t=si;t.posAnim+=(t.pos-t.posAnim)*Math.min(1,i*8);let e=t.turning?i*4*t.turnDir:0;t.psi+=e;let n=Qt.stelo,s=Qt.pignone_scorrevole,r=Qt.pignone_carica;Ne(n,n.obj),n.obj.position.x-=1.5*t.posAnim,n.obj.rotation.x=t.psi,Ne(s,s.obj);let a=Math.min(1,t.posAnim);s.obj.position.x+=-1+2*a,s.obj.rotation.x=t.psi,Ne(r,r.obj),t.pos===0&&(t.windA=t.psi),r.obj.rotation.x=t.windA||0;let o=Qt.tiretto,l=Qt.bascula;Ne(o,o.obj),o.obj.rotation.y=-.1*t.posAnim,Ne(l,l.obj),l.obj.rotation.y=.12*a;let c=si;t.pos===2&&e&&(c.setting=(c.setting||0)+e),t.pos===1&&e&&(c.date=(c.date||0)+e);let h=c.setting||0,u=Qt.ruota_rinvio;Ne(u,u.obj),u.obj.rotation.y=h*1.6;let d=Qt.ruota_minuteria;Ne(d,d.obj),d.obj.rotation.y=-h*.9;let f=Qt.chaussee;Ne(f,f.obj),f.obj.rotation.y=h*.4;let x=Qt.ruota_ore;Ne(x,x.obj),x.obj.rotation.y=h*.4/12,ra(Qt.lancette.obj,10*3600+10*60+h*.4/Ee*3600);let y=Qt.ruota_datario;Ne(y,y.obj),y.obj.rotation.y=(c.date||0)*1.2;let g=Qt.disco_datario;Ne(g,g.obj);let p=Math.floor((c.date||0)*1.2/Math.PI);g.obj.rotation.y=p*(Ee/31)}function Jx(){if(an)return;an=new Yt;let i=14,t=ct(Jt([on(ne,150,96)],0,.9,.08),ut.gold());an.add(t);let e=ct(Wt(i,.9,1.3,96),ut.brass());an.add(e);let n=new re(new Ws(i,i,4.6,96,1,!0),On({color:14265688,metalness:1,roughness:.3,side:Ln}));n.position.y=3.6,n.castShadow=!0,n.receiveShadow=!0,an.add(n);let s=ct(Wt(2,0,7.2,32),ut.steel());an.add(s);let r=ct(new Ze(.9,2,.9),ut.steel());r.position.set(2.2,3.4,0),an.add(r);let a=ct(new Ze(2.4,1.2,2.4),ut.steel());a.position.y=6.8,an.add(a),an.userData.arbor=[s,r,a],an.position.set(0,2,0),de.add(an),ad(.3,0)}var Mi=null,ls=null;function ad(i,t){let e=an;Mi&&(e.remove(Mi),Mi.geometry.dispose()),ls&&(e.remove(ls),ls.geometry.dispose());let n=7.5,s=8.5-5.8*i,r=13-5.6*i,a=t-i*9,o=[],l=520;for(let f=0;f<=l;f++){let x=f/l,y=a+x*n*Ee,g=s+(r-s)*Math.pow(x,.9);o.push(new N(Math.cos(y)*g,3.5,Math.sin(y)*g))}o.unshift(new N(Math.cos(a)*2.4,3.5,Math.sin(a)*2.4));let c=new ei(o);Mi=ct(new xi(c,900,.16,6),On({color:13226460,metalness:1,roughness:.18}),!1),Mi.scale.y=1;let h=new re(Mi.geometry,Mi.material);Mi.geometry.scale(1,1,1),e.add(Mi);let u=a+n*Ee,d=[];for(let f=0;f<=40;f++){let x=u+f/40*1.3;d.push(new N(Math.cos(x)*13.6,3.5,Math.sin(x)*13.6))}ls=ct(new xi(new ei(d),60,.32,8),On({color:15895608,metalness:.6,roughness:.3,emissive:4200448}),!1),e.add(ls);for(let f of e.userData.arbor)f.rotation.y=-i*9}var Ic=0;function jx(i,t){let e=si,n=e.charge;e.wrist&&ld(i*.12),e.ticking&&(e.charge=Math.max(0,e.charge-i*.012)),e.flash=Math.max(0,e.flash-i*1.5),ls&&ls.material.emissive.setRGB(.25+.75*e.flash,.1*(1-e.flash),0),Ic+=Math.abs(e.charge-n)+(e.slipping?1:0),Ic>.002&&(ad(e.charge,e.slip),Ic=0),e.slipping=!1,t-e.sentAt>180&&(e.sentAt=t,Rn({type:"bridle",charge:e.charge,flash:e.flash}))}function ld(i){let t=si;t.charge+=i,t.charge>1&&(t.slip+=(t.charge-1)*9,t.charge=1,t.flash=1,t.slipping=!0)}var ly=new N,Lc=0;function cd(i){let t=Lc?Math.min(.1,(i-Lc)/1e3):0;Lc=i;for(let n=Qs.length-1;n>=0;n--){let s=Qs[n],r=Math.min(1,(i-s.t0)/s.dur);s.fn(r),r>=1&&(Qs.splice(n,1),s.done&&s.done())}Je.update(),Wx(t,i),ir&&ir(t,i);let e=.35+.3*Math.sin(i/260);for(let n of Object.values(Qt)){let s=ju.has(n.id)||ea===n.id;s===!!n._lit&&!s||(Dc(n.obj,r=>{r.emissive&&(r.userData.baseEmissive===void 0&&(r.userData.baseEmissive=r.emissive.getHex()),s?(r.emissive.setHex(15895608),r.emissiveIntensity=e):(r.emissive.setHex(r.userData.baseEmissive),r.emissiveIntensity=1))}),n._lit=s)}for(let n of Object.values(Fn)){let s=Gc.some(r=>r.id===n.id&&r.active);s===!!n._lit&&!s||(Dc(n.outer,r=>{r.emissive&&(r.userData.baseEmissive===void 0&&(r.userData.baseEmissive=r.emissive.getHex()),s?(r.emissive.setHex(15895608),r.emissiveIntensity=e):(r.emissive.setHex(r.userData.baseEmissive),r.emissiveIntensity=1))}),n._lit=s)}ea&&i>Ku&&(ea=null),pn.render(de,qe),Kx(),requestAnimationFrame(cd)}var ta=[];function Kx(){let i=window.innerWidth,t=window.innerHeight,e=0;for(let n of Gc){let s=Fn[n.id];if(!s||!s.outer.visible||s.outer.parent!==jt)continue;let r=Nc(s,.4).project(qe);if(r.z>1)continue;let a=ta[e];a||(a=document.createElement("div"),a.className="lbl",Mx.appendChild(a),ta.push(a)),a.textContent=n.n,a.style.display="flex",a.classList.toggle("on",!!n.active),a.style.transform=`translate(${(r.x+1)/2*i-13}px, ${(1-r.y)/2*t-40}px)`,e++}for(let n=e;n<ta.length;n++)ta[n].style.display="none"}var Bi=null;function Qx(i){let t=Qt.lancette&&Qt.lancette.obj,e=Qt.quadrante&&Qt.quadrante.obj;if(!t||!e)return;let n=t.userData.hands;if(!Bi){let r=-Math.PI/2,a=nt.fourth,o=new Yt;o.position.set(Ae(a[0]),0,We(a[1])),o.add(ct(zi(Jt(zr(me(a,22,r+Math.PI),me(a,92,r),5),-8.3,.1,.02),a),ut.orange())),o.add(ct(zi(Wt(.8,-8.4,-7.6,16),[500,500]),ut.hands())),o.visible=!1,t.add(o);let l=new Yt;l.add(ct(Jt(Yu(a,108,102),-7.66,.05,.01),ut.hands(),!1));for(let c=0;c<12;c++){let h=c/12*Ee;l.add(ct(Jt(zr(me(a,92,h),me(a,c%3===0?76:84,h),3.2),-7.66,.05,.01),ut.hands(),!1))}l.visible=!1,e.add(l),Bi={hand:o,dialRing:l,central:n.s}}let s=!!i.smallSeconds;Bi.central.visible=!s,Bi.hand.visible=s,Bi.dialRing.visible=s,n.s=s?Bi.hand:Bi.central,ra(t,10*3600+10*60+30)}window.W3D={setup(i){try{let t=i.profile&&i.profile.id||null,e=Re&&Re.id||null;if(t!==e){xx(i.profile),jt.clear();for(let n of Object.keys(Qt))delete Qt[n];for(let n of Object.keys(Fn))delete Fn[n];Bi=null,$u(jt)}for(let n of i.screws||[])Fn[n.id]||vx(n);Rn({type:"setup",items:Object.keys(Qt),screws:Object.keys(Fn)})}catch(t){Rn({type:"error",msg:String(t&&t.stack||t)})}},show(i){try{ie.demo&&rd(),na(i)}catch(t){Rn({type:"error",msg:String(t&&t.stack||t)})}},play(i,t){Nx(i,t)},focus(i,t){Uc(i,!0,t)},setXray(i){nr=!!i;for(let t of Object.values(Qt))ki(t.obj,nr&&t.cover?.22:1)},_slow(i){Qu=i},layout(i){try{Qx(i||{})}catch(t){Rn({type:"error",msg:String(t&&t.stack||t)})}},live(i){Si(i||{})},demo(i){var t;try{if(i&&ie.demo===i.kind){i.kind==="keyless"&&od(i),(i.kind==="escapement"||i.kind==="energy")&&Si({speed:(t=i.speed)!=null?t:ie.speed}),i.kind==="bridle"&&(i.wind&&ld(i.wind),i.wrist!==void 0&&(si.wrist=!!i.wrist),i.ticking!==void 0&&(si.ticking=!!i.ticking));return}Yx(i)}catch(e){Rn({type:"error",msg:String(e&&e.stack||e)})}},setQuality(i){try{localStorage.setItem("w3d_quality",i)}catch{}location.reload()},quality(){return cs?"high":"normal"},view(i){if(i==="top"){let t=qe.position.clone(),e=qe.position.distanceTo(Je.target),n=Je.target.clone().add(new N(0,e*.995,e*.1));us(600,s=>qe.position.lerpVectors(t,n,Se(s)))}else Uc([],!0)}};bx();})();
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
