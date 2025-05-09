(self.webpackChunkrc_chooser=self.webpackChunkrc_chooser||[]).push([[904],{19128:function(n,r,e){"use strict";var c;e.r(r),e.d(r,{demos:function(){return R}});var i=e(17061),a=e.n(i),o=e(17156),y=e.n(o),_=e(67294),B=e(25976),O=e(66486),R={"docs-demo-simple-demo-simple":{component:_.memo(_.lazy(function(){return e.e(433).then(e.bind(e,23527))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25133).Z},react:{type:"NPM",value:"16.14.0"},"rc-chooser":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:c||(c=e.t(_,2)),"@/index":O},renderOpts:{compile:function(){var b=y()(a()().mark(function K(){var I,p=arguments;return a()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,e.e(335).then(e.bind(e,37335));case 2:return x.abrupt("return",(I=x.sent).default.apply(I,p));case 3:case"end":return x.stop()}},K)}));function A(){return b.apply(this,arguments)}return A}()}}}},11171:function(n,r,e){"use strict";e.r(r),e.d(r,{demos:function(){return a}});var c=e(67294),i=e(68537),a={}},66486:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return z}});var c=e(10434),i=e.n(c),a=e(66115),o=e.n(a),y=e(9348),_=e.n(y),B=e(26389),O=e.n(B),R=e(56690),b=e.n(R),A=e(89728),K=e.n(A),I=e(38416),p=e.n(I),m=e(67294),x={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",96:"n0",97:"n1",98:"n2",99:"n3",100:"n4",101:"n5",102:"n6",103:"n7",104:"n8",105:"n9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12"},$=function(d){var f=d.altKey,l=d.shiftKey,t=d.ctrlKey,s=d.metaKey,u=d.keyCode,h=[f&&"alt",l&&"shift",t&&"ctrl",s&&"meta",x[u]].filter(function(g){return g}).sort().join("+");return h};function H(v){if(v){for(var d=$(v),f=arguments.length,l=new Array(f>1?f-1:0),t=1;t<f;t++)l[t-1]=arguments[t];for(var s=0,u=l;s<u.length;s++){var h=u[s],g=h.split("+").sort().join("+");if(d===g)return v.preventDefault(),!0}return!1}}var W=function(){function v(d){var f,l,t,s;b()(this,v),p()(this,"left",void 0),p()(this,"width",void 0),p()(this,"top",void 0),p()(this,"height",void 0),this.left=(f=d.left)!==null&&f!==void 0?f:0,this.top=(l=d.top)!==null&&l!==void 0?l:0,this.width=(t=d.width)!==null&&t!==void 0?t:0,this.height=(s=d.height)!==null&&s!==void 0?s:0}return K()(v,[{key:"right",get:function(){return this.left+this.width}},{key:"bottom",get:function(){return this.top+this.height}}]),v}(),N=function(v){_()(f,v);var d=O()(f);function f(l){var t;return b()(this,f),t=d.call(this,l),p()(o()(t),"childrenRef",void 0),p()(o()(t),"rectRef",void 0),p()(o()(t),"onSelectStart",void 0),p()(o()(t),"startPoint",void 0),p()(o()(t),"initValue",void 0),p()(o()(t),"prevValue",void 0),p()(o()(t),"mode",void 0),t.childrenRef=m.createRef(),t.rectRef=m.createRef(),t.onSelectStart=function(s){return s.preventDefault()},t.onMouseDown=t.onMouseDown.bind(o()(t)),t.onMouseMove=t.onMouseMove.bind(o()(t)),t.onMouseUp=t.onMouseUp.bind(o()(t)),t.getOffset=t.getOffset.bind(o()(t)),t.onKeyDown=t.onKeyDown.bind(o()(t)),t.cancel=t.cancel.bind(o()(t)),t.startPoint=null,t.initValue=[],t.prevValue=t.initValue,t.mode="",t}return K()(f,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown),this.childrenRef&&this.childrenRef.current&&(this.childrenRef.current.onselectstart=this.onSelectStart)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"onMouseDown",value:function(t){var s=t.target,u=t.clientX,h=t.clientY,g=t.shiftKey,E=t.altKey,w=t.button,C=this.props.children.props.onMouseDown;if(C&&C(),!w&&s.tagName!=="INPUT"){var M=this.childrenRef.current.getBoundingClientRect(),j=M.left,T=M.top;g&&!E&&(this.mode="append"),!g&&E&&(this.mode="subtract"),this.startPoint={clientX:u,clientY:h,left:u-j,top:h-T}}}},{key:"onMouseMove",value:function(t){var s=this,u=t.clientX,h=t.clientY,g=this.props.children.props.onMouseMove,E=this.props||{},w=E.observeProp,C=E.observeHandle,M=this.rectRef.current,j=this.childrenRef.current;if(g&&g(),!this.startPoint)return this.prevValue=this.initValue;if(!(Math.sqrt(Math.pow(this.startPoint.clientX-u,2)+Math.pow(this.startPoint.clientY-h,2))<10)){var T=j.getBoundingClientRect(),X=T.left,Y=T.top,L=u-X,V=h-Y,P=new W({left:Math.min(this.startPoint.left,L),top:Math.min(this.startPoint.top,V),width:Math.abs(this.startPoint.left-L),height:Math.abs(this.startPoint.top-V)});if(M.style.left="".concat(P.left-10,"px"),M.style.top="".concat(P.top-10,"px"),M.style.width="".concat(P.width+20,"px"),M.style.height="".concat(P.height+20,"px"),M.style.display="block",C){var G=Array.from(j.querySelectorAll("[".concat(w,"]"))),S=[];G.forEach(function(D){var U=new W({left:s.getOffset(D,"offsetLeft"),top:s.getOffset(D,"offsetTop"),width:D.offsetWidth,height:D.offsetHeight});U.left>P.right||U.top>P.bottom||U.right<P.left||U.bottom<P.top||S.push(D.getAttribute(w))}),(this.prevValue.length!==S.length||this.prevValue.join(",")!==S.join(","))&&(this.prevValue=S,C(S,this.mode))}}}},{key:"onMouseUp",value:function(){var t=this.props.children.props.onMouseUp;t&&t(),this.cancel()}},{key:"onKeyDown",value:function(t){var s=this.props.observeHandle;H(t,"esc")&&(this.cancel(),s&&s([]))}},{key:"getOffset",value:function(t,s){var u;if(!t||!t.offsetParent)return 0;var h=(u=this.childrenRef)===null||u===void 0?void 0:u.current,g=t.offsetParent===h?0:this.getOffset(t.offsetParent,s);return(t[s]||0)+g}},{key:"render",value:function(){var t=this.props,s=t.children,u=t.border,h=t.borderBg;return!s||!m.isValidElement(s)?(console.error("children is not valid Element"),null):m.createElement("div",{style:{position:"relative",userSelect:"none"},ref:this.childrenRef,onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp},s,m.createElement("div",{className:"rect",ref:this.rectRef,style:{cursor:"default",position:"absolute",zIndex:999,display:"none",padding:"10px"}},m.createElement("div",{style:{width:"100%",height:"100%",border:u!=null?u:"1px dashed #000",backgroundColor:h!=null?h:"rgba(0, 0, 0, 0.1)"}})))}},{key:"cancel",value:function(){this.prevValue=this.initValue,this.mode="",this.startPoint=null,this.rectRef.current.style.display="none"}}]),f}(m.Component),z=m.forwardRef(function(v,d){return m.createElement(N,i()({},v,{ref:d}))})},49726:function(n,r,e){"use strict";e.r(r),e.d(r,{texts:function(){return i}});var c=e(25976);const i=[]},51446:function(n,r,e){"use strict";e.r(r),e.d(r,{texts:function(){return i}});var c=e(68537);const i=[{value:"\u9F20\u6807\u5DE6\u952E\u6279\u91CF\u9009\u4E2D\uFF0C\u952E\u76D8\u4E8B\u4EF6 ESC \u6E05\u7A7A\u3002",paraId:0,tocIndex:0},{value:`import React, { useState } from 'react';
import Chooser from 'rc-chooser';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const boxStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  border: '1px solid red',
  margin: 2,
};

const Child = React.memo(({ selected }: { selected: string[] }) => {
  return (
    <div className="child" style={containerStyle}>
      {Array.from({ length: 100 }).map((_, index) => {
        const isSelected = selected.includes(\`\${index}\`);
        return (
          <div
            key={index}
            style={{
              ...boxStyle,
              backgroundColor: isSelected ? 'blue' : 'white',
            }}
            data-id={index}
          >
            Div {index + 1}
          </div>
        );
      })}
    </div>
  );
});

export default () => {
  const [selected, setSelected] = useState<string[]>([]);

  const observeHandle = (data: string[]) => {
    setSelected(data);
  };

  return (
    <div style={{ margin: 20 }}>
      <Chooser observeProp="data-id" observeHandle={observeHandle}>
        <Child selected={selected} />
      </Chooser>
    </div>
  );
};

`,paraId:1,tocIndex:2}]},25133:function(n,r){"use strict";r.Z=`import React, { useState } from 'react';
import Chooser from '@/index';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const boxStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  border: '1px solid red',
  margin: 2,
};

const Child = React.memo(({ selected }: { selected: string[] }) => {
  return (
    <div className="child" style={containerStyle}>
      {Array.from({ length: 100 }).map((_, index) => {
        const isSelected = selected.includes(\`\${index}\`);
        return (
          <div
            key={index}
            style={{
              ...boxStyle,
              backgroundColor: isSelected ? 'blue' : 'white',
            }}
            data-id={index}
          >
            Div {index + 1}
          </div>
        );
      })}
    </div>
  );
});

export default () => {
  const [selected, setSelected] = useState<string[]>([]);

  const observeHandle = (data: string[]) => {
    setSelected(data);
  };

  return (
    <div style={{ margin: 20 }}>
      <Chooser observeProp="data-id" observeHandle={observeHandle}>
        <Child selected={selected} />
      </Chooser>
    </div>
  );
};
`},66115:function(n){function r(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},26389:function(n,r,e){var c=e(73808),i=e(69617),a=e(94993);function o(y){var _=i();return function(){var O=c(y),R;if(_){var b=c(this).constructor;R=Reflect.construct(O,arguments,b)}else R=O.apply(this,arguments);return a(this,R)}}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},10434:function(n){function r(){return n.exports=r=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var i=arguments[c];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},n.exports.__esModule=!0,n.exports.default=n.exports,r.apply(this,arguments)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},73808:function(n){function r(e){return n.exports=r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},n.exports.__esModule=!0,n.exports.default=n.exports,r(e)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},9348:function(n,r,e){var c=e(6015);function i(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(o&&o.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),o&&c(a,o)}n.exports=i,n.exports.__esModule=!0,n.exports.default=n.exports},69617:function(n){function r(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},94993:function(n,r,e){var c=e(18698).default,i=e(66115);function a(o,y){if(y&&(c(y)==="object"||typeof y=="function"))return y;if(y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return i(o)}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},6015:function(n){function r(e,c){return n.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,o){return a.__proto__=o,a},n.exports.__esModule=!0,n.exports.default=n.exports,r(e,c)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
