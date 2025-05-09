(self.webpackChunkrc_chooser=self.webpackChunkrc_chooser||[]).push([[904],{19128:function(n,r,e){"use strict";var c;e.r(r),e.d(r,{demos:function(){return O}});var i=e(17061),a=e.n(i),o=e(17156),y=e.n(o),_=e(67294),B=e(25976),E=e(66486),O={"docs-demo-simple-demo-simple":{component:_.memo(_.lazy(function(){return e.e(433).then(e.bind(e,23527))})),asset:{type:"BLOCK",id:"docs-demo-simple-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25133).Z},react:{type:"NPM",value:"16.14.0"},"rc-chooser":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:c||(c=e.t(_,2)),"@/index":E},renderOpts:{compile:function(){var R=y()(a()().mark(function S(){var I,p=arguments;return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,e.e(335).then(e.bind(e,37335));case 2:return M.abrupt("return",(I=M.sent).default.apply(I,p));case 3:case"end":return M.stop()}},S)}));function A(){return R.apply(this,arguments)}return A}()}}}},11171:function(n,r,e){"use strict";e.r(r),e.d(r,{demos:function(){return a}});var c=e(67294),i=e(68537),a={}},66486:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return z}});var c=e(10434),i=e.n(c),a=e(66115),o=e.n(a),y=e(61655),_=e.n(y),B=e(26389),E=e.n(B),O=e(56690),R=e.n(O),A=e(89728),S=e.n(A),I=e(38416),p=e.n(I),m=e(67294),M={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",96:"n0",97:"n1",98:"n2",99:"n3",100:"n4",101:"n5",102:"n6",103:"n7",104:"n8",105:"n9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12"},$=function(l){var d=l.altKey,u=l.shiftKey,t=l.ctrlKey,s=l.metaKey,f=l.keyCode,h=[d&&"alt",u&&"shift",t&&"ctrl",s&&"meta",M[f]].filter(function(g){return g}).sort().join("+");return h};function N(v){if(v){for(var l=$(v),d=arguments.length,u=new Array(d>1?d-1:0),t=1;t<d;t++)u[t-1]=arguments[t];for(var s=0,f=u;s<f.length;s++){var h=f[s],g=h.split("+").sort().join("+");if(l===g)return v.preventDefault(),!0}return!1}}var L=function(){function v(l){var d,u,t,s;R()(this,v),p()(this,"left",void 0),p()(this,"width",void 0),p()(this,"top",void 0),p()(this,"height",void 0),this.left=(d=l.left)!==null&&d!==void 0?d:0,this.top=(u=l.top)!==null&&u!==void 0?u:0,this.width=(t=l.width)!==null&&t!==void 0?t:0,this.height=(s=l.height)!==null&&s!==void 0?s:0}return S()(v,[{key:"right",get:function(){return this.left+this.width}},{key:"bottom",get:function(){return this.top+this.height}}]),v}(),H=function(v){_()(d,v);var l=E()(d);function d(u){var t;return R()(this,d),t=l.call(this,u),p()(o()(t),"childrenRef",void 0),p()(o()(t),"rectRef",void 0),p()(o()(t),"onSelectStart",void 0),p()(o()(t),"startPoint",void 0),p()(o()(t),"initValue",void 0),p()(o()(t),"prevValue",void 0),p()(o()(t),"mode",void 0),t.childrenRef=m.createRef(),t.rectRef=m.createRef(),t.onSelectStart=function(s){return s.preventDefault()},t.onMouseDown=t.onMouseDown.bind(o()(t)),t.onMouseMove=t.onMouseMove.bind(o()(t)),t.onMouseUp=t.onMouseUp.bind(o()(t)),t.getOffset=t.getOffset.bind(o()(t)),t.onKeyDown=t.onKeyDown.bind(o()(t)),t.cancel=t.cancel.bind(o()(t)),t.startPoint=null,t.initValue=[],t.prevValue=t.initValue,t.mode="",t}return S()(d,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown),this.childrenRef&&this.childrenRef.current&&(this.childrenRef.current.onselectstart=this.onSelectStart)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"onMouseDown",value:function(t){var s=t.target,f=t.clientX,h=t.clientY,g=t.shiftKey,b=t.altKey,T=t.button,D=this.props.children.props.onMouseDown;if(D&&D(),!T&&s.tagName!=="INPUT"){var x=this.childrenRef.current.getBoundingClientRect(),U=x.left,j=x.top;g&&!b&&(this.mode="append"),!g&&b&&(this.mode="subtract"),this.startPoint={clientX:f,clientY:h,left:f-U,top:h-j}}}},{key:"onMouseMove",value:function(t){var s=this,f=t.clientX,h=t.clientY,g=this.props.children.props.onMouseMove,b=this.props||{},T=b.observeProp,D=b.observeHandle,x=this.rectRef.current,U=this.childrenRef.current;if(g&&g(),!this.startPoint)return this.prevValue=this.initValue;if(!(Math.sqrt(Math.pow(this.startPoint.clientX-f,2)+Math.pow(this.startPoint.clientY-h,2))<10)){var j=U.getBoundingClientRect(),X=j.left,Y=j.top,W=f-X,V=h-Y,P=new L({left:Math.min(this.startPoint.left,W),top:Math.min(this.startPoint.top,V),width:Math.abs(this.startPoint.left-W),height:Math.abs(this.startPoint.top-V)});if(x.style.left="".concat(P.left-10,"px"),x.style.top="".concat(P.top-10,"px"),x.style.width="".concat(P.width+20,"px"),x.style.height="".concat(P.height+20,"px"),x.style.display="block",D){var G=Array.from(U.querySelectorAll("[".concat(T,"]"))),C=[];G.forEach(function(K){var w=new L({left:s.getOffset(K,"offsetLeft"),top:s.getOffset(K,"offsetTop"),width:K.offsetWidth,height:K.offsetHeight});w.left>P.right||w.top>P.bottom||w.right<P.left||w.bottom<P.top||C.push(K.getAttribute(T))}),(this.prevValue.length!==C.length||this.prevValue.join(",")!==C.join(","))&&(this.prevValue=C,D(C,this.mode))}}}},{key:"onMouseUp",value:function(){var t=this.props.children.props.onMouseUp;t&&t(),this.cancel()}},{key:"onKeyDown",value:function(t){var s=this.props.observeHandle;N(t,"esc")&&(this.cancel(),s&&s([]))}},{key:"getOffset",value:function(t,s){var f;if(!t||!t.offsetParent)return 0;var h=(f=this.childrenRef)===null||f===void 0?void 0:f.current,g=t.offsetParent===h?0:this.getOffset(t.offsetParent,s);return(t[s]||0)+g}},{key:"render",value:function(){var t=this.props,s=t.children,f=t.border,h=t.borderBg;return!s||!m.isValidElement(s)?(console.error("children is not valid Element"),null):m.createElement("div",{style:{position:"relative",userSelect:"none"},ref:this.childrenRef,onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp},s,m.createElement("div",{className:"rect",ref:this.rectRef,style:{cursor:"default",position:"absolute",zIndex:999,display:"none",padding:"10px"}},m.createElement("div",{style:{width:"100%",height:"100%",border:f!=null?f:"1px dashed #000",backgroundColor:h!=null?h:"rgba(0, 0, 0, 0.1)"}})))}},{key:"cancel",value:function(){this.prevValue=this.initValue,this.mode="",this.startPoint=null,this.rectRef.current.style.display="none"}}]),d}(m.Component),z=m.forwardRef(function(v,l){return m.createElement(H,i()({},v,{ref:l}))})},49726:function(n,r,e){"use strict";e.r(r),e.d(r,{texts:function(){return i}});var c=e(25976);const i=[]},51446:function(n,r,e){"use strict";e.r(r),e.d(r,{texts:function(){return i}});var c=e(68537);const i=[{value:"\u9F20\u6807\u5DE6\u952E\u6279\u91CF\u9009\u4E2D\uFF0C\u952E\u76D8\u4E8B\u4EF6 ESC \u6E05\u7A7A\u3002",paraId:0,tocIndex:0}]},25133:function(n,r){"use strict";r.Z=`import React, { useCallback, useState } from 'react';
import Chooser from '@/index';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const boxStyle = {
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

  const observeHandle = useCallback((data: string[]) => {
    setSelected(data);
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <Chooser observeProp="data-id" observeHandle={observeHandle}>
        <Child selected={selected} />
      </Chooser>
    </div>
  );
};
`},66115:function(n){function r(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},26389:function(n,r,e){var c=e(73808),i=e(69617),a=e(94993);function o(y){var _=i();return function(){var E=c(y),O;if(_){var R=c(this).constructor;O=Reflect.construct(E,arguments,R)}else O=E.apply(this,arguments);return a(this,O)}}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},10434:function(n){function r(){return n.exports=r=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var i=arguments[c];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},n.exports.__esModule=!0,n.exports.default=n.exports,r.apply(this,arguments)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},73808:function(n){function r(e){return n.exports=r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},n.exports.__esModule=!0,n.exports.default=n.exports,r(e)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},61655:function(n,r,e){var c=e(6015);function i(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(o&&o.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),o&&c(a,o)}n.exports=i,n.exports.__esModule=!0,n.exports.default=n.exports},69617:function(n){function r(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},94993:function(n,r,e){var c=e(18698).default,i=e(66115);function a(o,y){if(y&&(c(y)==="object"||typeof y=="function"))return y;if(y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return i(o)}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},6015:function(n){function r(e,c){return n.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,o){return a.__proto__=o,a},n.exports.__esModule=!0,n.exports.default=n.exports,r(e,c)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
