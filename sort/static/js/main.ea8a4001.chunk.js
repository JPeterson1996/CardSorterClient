(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,n){e.exports=n.p+"static/media/down-arrow-sketch.30028bfd.svg"},211:function(e,t,n){e.exports=n.p+"static/media/thanks-icon.84d1d4ad.svg"},212:function(e,t,n){e.exports=n.p+"static/media/not-found.8c3d2a79.svg"},215:function(e,t,n){e.exports=n(554)},224:function(e,t,n){},553:function(e,t,n){},554:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(136),i=n.n(o),c=n(20),s=(n(224),n(35)),l=n(207),d=n(140),u=n(208),p=n.n(u),g="IS_FETCHING",f="IS_SENDING",y="SUCCESS",m="CREATE_CATEGORY",h="REMOVE_CATEGORY",v="RENAME_CATEGORY",E="NORMALIZE_CATEGORIES";var D="http://83.212.97.237:8090",C="SHOW_DESCRIPTION",O="HIDE_ALL_DESCRIPTIONS",b="SHOW_TITLE_BOX",T="HIDE_ALL_BOXES",I="SAVE_STUDY_ID",k="SENDING_SORT",w="SAVE_THANKS_MESSAGE",j="RENDER_THANKS_MESSAGE",S="TOOGLE_ON_BOARDING";function N(e){return{type:S,payload:{showOnBoarding:e},error:!1}}function _(){return{type:T,error:!1}}function A(e,t,n){return{type:k,payload:{status:e},error:n}}function R(e,t,n){return function(r){r({type:E,payload:{},error:!1}),r(A(f)),fetch(D+"/sort_endpoint",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({studyID:e,categories:n,container:t})}).then(function(e){return e.json().then(function(e){var t;r(A(y)),r((t=e.message,{type:w,payload:{message:t},error:!1})),r({type:j,payload:{},error:!1})})})}}var x="ADD_CARD_CATEGORY",F="REMOVE_CARD_CATEGORY",G="ADD_CARD_CONTAINER",M="REMOVE_CARD_CONTAINER",P="REQUEST_CARDS";function B(e,t,n){return{type:P,payload:{status:e,response:t,error:n}}}function L(e){return function(t){t(function(e){return{type:I,payload:{studyID:e},error:!1}}(e)),t(B(g)),p()(D+"/sort_endpoint?cards=true&study_id="+e).then(function(e){return e.json().then(function(n){if(404!==e.status){t(B(y,n));var r,a=!0,o=!1,i=void 0;try{for(var c,s=n.cards[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;t((r=l.id,{type:G,payload:{cardID:r},error:!1}))}}catch(d){o=!0,i=d}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}t(N(!0))}else t(B(y,void 0,n.error))})},function(e){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)}(e)})}}var H=n(36),Y=n(60),V=function(){function e(t,n){Object(H.a)(this,e),this.id=t,this.title=n,this.cards=[]}return Object(Y.a)(e,[{key:"addCard",value:function(e){this.cards.push(e)}},{key:"removeCard",value:function(e){this.cards=this.cards.filter(function(t){return t!==e})}}]),e}(),z={clickToRename:"click here to rename",studyNotFound:"study not found",dropToAdd:"drop to add",dropToCreateCategory:"drop to create a category"},W=new(function(){function e(){Object(H.a)(this,e)}return Object(Y.a)(e,[{key:"initialize",value:function(e){this.text=z}}]),e}());var U=function e(t,n,r){Object(H.a)(this,e),this.id=t,this.title=n,this.description=r},J={};var K=Object(s.combineReducers)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:var n=t.payload.response;if(n){var r=!0,a=!1,o=void 0;try{for(var i,c=n.cards[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;J[s.id]=new U(s.id,s.name,s.description)}}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}}return Object.assign({},e,{status:t.payload.status,notFound:!!t.payload.error});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=t.payload.categoryID||Date.now(),r=new V(n,t.payload.title);r.addCard(t.payload.cardID);var a=Object.assign({},e);return a[n]=r,a;case h:var o=t.payload.categoryID,i=Object.assign({},e);return delete i[o],i;case v:var c=t.payload.categoryID,s=Object.assign({},e);return s[c].title=t.payload.title,s;case x:var l=t.payload.cardID,d=t.payload.categoryID,u=Object.assign({},e);return u[d].addCard(l),u;case F:var p=t.payload.cardID,g=t.payload.categoryID,f=Object.assign({},e);return f[g].removeCard(p),f;case E:var y=Object.assign({},e);for(var D in y)if({}.hasOwnProperty.call(y,D)){var C=y[D];C.title===W.text.clickToRename&&(C.title="not set")}return y;default:return e}},container:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return[].concat(Object(d.a)(e),[t.payload.cardID]);case M:return Object(d.a)(e).filter(function(e){return e!==t.payload.cardID});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object.assign({},e,{showOnBoarding:t.payload.showOnBoarding});case C:return Object.assign({},e,{showingDescription:t.payload.cardID});case O:return Object.assign({},e,{showingDescription:void 0});case b:return Object.assign({},e,{changeTitle:t.payload.categoryID});case T:return Object.assign({},e,{changeTitle:void 0});case I:return Object.assign({},e,{studyID:t.payload.studyID});case k:return Object.assign({},e,{sendingSort:t.payload.status});case w:return Object.assign({},e,{thanksMessage:t.payload.message});case j:return Object.assign({},e,{renderThanks:!0});default:return e}}}),X={cards:{notFound:void 0,status:void 0},container:[],categories:{},ui:{showOnBoarding:void 0,changeTitle:void 0,showingDescription:void 0,studyID:void 0,sendingSort:void 0,renderThanks:void 0,thanksMessage:void 0,cardsSorted:void 0,categoriesCreated:void 0}};var Q=n(213),Z=n(209),$=n(214),q=(n(225),n(37)),ee=n(210),te=n.n(ee),ne="card-drag";var re=Object(q.DragSource)(ne,{beginDrag:function(e){return{id:e.id,position:e.position}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(function(e){e.id;var t=e.title,n=e.description,r=e.minimized,o=(e.position,e.onClick),i=e.showDescription,c=e.connectDragSource,s=(e.isDragging,r?"card minimized":"card");return c(a.a.createElement("li",{className:s},a.a.createElement("h4",null,t),!r&&a.a.createElement("p",null,n),r&&n&&a.a.createElement("div",{className:"desc-container"},a.a.createElement("button",{onClick:o,className:"desc-btn"},"?"),i&&a.a.createElement("div",{className:"desc-pop"},a.a.createElement("p",null,n)))))}),ae=function(e){var t=e.cards;return a.a.createElement("ul",{id:"list"},t.map(function(e){return a.a.createElement(re,{key:e.id,id:e.id,title:e.title,description:e.description,position:-1})}))};function oe(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;t.push(J[c])}}catch(s){r=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return{cards:t}}var ie=Object(c.b)(function(e){return oe(e.container)},function(e){return{}})(ae),ce=n(96),se=n.n(ce);var le=Object(q.DropTarget)(ne,{drop:function(e,t){var n=t.getItem();e.onCardDrop(n.id,n.position,e.id)}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})(function(e){var t=e.id,n=e.title,r=e.cards,o=e.onClick,i=e.showTitleBox,c=(e.onCardDrop,e.onTitleClick),s=e.onTitleChange,l=e.onTitleFinish,d=e.descriptionID,u=e.connectDropTarget,p=e.isOver;return r=oe(r).cards,u(a.a.createElement("li",{className:p?"category max-height":"category"},i&&a.a.createElement("div",{className:"title-input"},a.a.createElement("input",{type:"text",defaultValue:n,onChange:function(e){return s(e,t)},onKeyPress:function(e){return l(e)},onClick:function(e){return e.stopPropagation()}}),a.a.createElement("button",{type:"button",onClick:function(){return l()}})),!i&&a.a.createElement("h3",{onClick:function(e){return c(e,t)}},n),p&&a.a.createElement("div",{className:"drop-to-add"},a.a.createElement("img",{src:se.a}),a.a.createElement("p",null,W.text.dropToAdd)),a.a.createElement("ul",null,r.map(function(e){return a.a.createElement(re,{key:e.id,id:e.id,title:e.title,description:e.description,minimized:!0,position:t,onClick:function(t){return o(t,e.id,e.description)},showDescription:e.id===d})}))))});var de=Object(q.DropTarget)(ne,{drop:function(e,t){if(!t.didDrop()){var n=t.getItem();e.onDrop(n.id,n.position)}e.removeEmptyCategories(e.categories)}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver({shallow:!0})}})(function(e){var t=e.categories,n=e.onClick,r=e.onCardClick,o=e.onCategTitleClick,i=e.changeTitleID,c=e.onCardDrop,s=(e.onDrop,e.descriptionID),l=e.onCategTitleChange,d=e.onCategTitleFinish,u=(e.removeEmptyCategories,e.connectDropTarget),p=e.isOver;return t=t.map(function(e){return a.a.createElement(le,{key:"k"+e.id,id:e.id,title:e.title,cards:e.cards,onClick:r,onTitleChange:l,onTitleClick:o,onCardDrop:c,onTitleFinish:d,showTitleBox:e.id===i,descriptionID:s})}),u(a.a.createElement("ul",{id:"board",onClick:n},t,p&&a.a.createElement("div",{className:"category drop-to-create"},a.a.createElement("img",{src:se.a}),a.a.createElement("p",null,W.text.dropToCreateCategory))))});function ue(e,t,n){-1===t?e(function(e){return{type:M,payload:{cardID:e},error:!1}}(n)):t>-1&&e(function(e,t){return{type:F,payload:{cardID:e,categoryID:t},error:!1}}(n,t))}var pe=Object(c.b)(function(e){return{categories:Object.values(e.categories),descriptionID:e.ui.showingDescription,changeTitleID:e.ui.changeTitle}},function(e){return{onClick:function(){e({type:O,error:!1}),e(_())},onDrop:function(t,n){ue(e,n,t),e(function(e,t,n){return{type:m,payload:{categoryID:e,title:t,cardID:n},error:!1}}(void 0,W.text.clickToRename,t))},removeEmptyCategories:function(t){!function(e,t){for(var n in t)if(t[n].cards.length<1){e((r=t[n].id,{type:h,payload:{categoryID:r}}));break}var r}(e,t)},onCategTitleClick:function(t,n){t.stopPropagation(),e(function(e){return{type:b,payload:{categoryID:e},error:!1}}(n))},onCategTitleChange:function(t,n){var r=t.target.value;r=(r=r.replace(/\s\s+/g," ").trim()).length>0?r:W.text.clickToRename,e(function(e,t){return{type:v,payload:{categoryID:e,title:t},error:!1}}(n,r))},onCategTitleFinish:function(t){t?(t.stopPropagation(),13===t.charCode&&e(_())):e(_())},onCardClick:function(t,n,r){t.stopPropagation(),r&&r.length>0&&e(function(e){return{type:C,payload:{cardID:e},error:!1}}(n))},onCardDrop:function(t,n,r){ue(e,n,t),e(function(e,t){return{type:x,payload:{cardID:e,categoryID:t},error:!1}}(t,r))}}})(de),ge=function(e){var t=e.studyID,n=e.container,r=e.categories,o=e.onFinishClick;return a.a.createElement("header",null,a.a.createElement("h1",{id:"logo"},"Card Sorter"),a.a.createElement("button",{onClick:function(){return o(t,n,r)}},"Finish"))},fe=Object(c.b)(function(e){return{studyID:e.ui.studyID,container:e.container,categories:e.categories}},function(e){return{onFinishClick:function(t,n,r){e(R(t,n,r))}}})(ge),ye=function(e){var t=e.message,n=e.image;return a.a.createElement("div",{className:"message-screen"},a.a.createElement("h1",{id:"logo"},"Card Sorter"),a.a.createElement("img",{src:n,alt:"Sending love!"}),a.a.createElement("h2",null,t))},me=n(139),he=n.n(me),ve=function(e){var t=e.show,n=e.onClick;return t?a.a.createElement("div",{className:"on-boarding-screen",onClick:function(e){return n(e)}},a.a.createElement("div",{className:"list-explainer"},a.a.createElement("img",{src:he.a,alt:"Arrow pointing to the left of the screen",className:"arrow"}),a.a.createElement("span",null,a.a.createElement("p",null,"Pick a card and drag it to the right to create a category."),a.a.createElement("p",null,"You can add a card to a category by dropping the card inside of the category."))),a.a.createElement("div",{className:"finish-explainer"},a.a.createElement("img",{src:he.a,alt:"Arrow pointing to the left of the screen",className:"arrow"}),a.a.createElement("span",null,a.a.createElement("p",null,"When you feel like you are done, press the finish button.")))):a.a.createElement("span",null)},Ee=Object(c.b)(function(e){return{show:e.ui.showOnBoarding}},function(e){return{onClick:function(t){t.stopPropagation(),e(N(!1))}}})(ve),De=n(211),Ce=n.n(De),Oe=n(212),be=n.n(Oe),Te=(n(553),function(e){function t(){return Object(H.a)(this,t),Object(Q.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object($.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.studyNotFound,r=t.renderThanks,o=t.thanksMessage;return e=r?a.a.createElement("main",null,a.a.createElement(ye,{message:o,image:Ce.a})):n?a.a.createElement("main",null,a.a.createElement(ye,{message:W.text.studyNotFound,image:be.a})):a.a.createElement(q.DragDropContextProvider,{backend:te.a},a.a.createElement(Ee,null),a.a.createElement("div",{className:"App"},a.a.createElement(fe,null),a.a.createElement("div",{id:"main-panel"},a.a.createElement(ie,null),a.a.createElement(pe,null)))),e}}]),t}(r.Component)),Ie=Object(c.b)(function(e){return{studyNotFound:e.cards.notFound,renderThanks:e.ui.renderThanks,thanksMessage:e.ui.thanksMessage}})(Te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=function(){var e=Object(s.createStore)(K,X,Object(s.applyMiddleware)(l.a)),t=e.subscribe(function(){});W.initialize("en-us");var n=new URL(window.location.href).searchParams.get("id");return e.dispatch(L(n)),t(),e}();i.a.render(a.a.createElement(c.a,{store:ke},a.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,n){e.exports=n.p+"static/media/plus.ed718a5f.svg"}},[[215,1,2]]]);
//# sourceMappingURL=main.ea8a4001.chunk.js.map