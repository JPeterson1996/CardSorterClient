(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/profile.ed50a564.jpeg"},25:function(e,t,a){e.exports=a.p+"static/media/sample-user.efe01b90.svg"},26:function(e,t,a){e.exports=a.p+"static/media/plus.648c7e93.svg"},27:function(e,t,a){e.exports=a.p+"static/media/success.a0af0ddb.svg"},30:function(e,t,a){e.exports=a.p+"static/media/empty.cfb49f55.svg"},34:function(e,t,a){e.exports=a(50)},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),c=a.n(i),s=a(18),o=a(10),l=a(4),d=(a(43),a(44),a(25)),u=a.n(d),m=function(e){var t=e.username;e.profilePic;return r.a.createElement("header",null,r.a.createElement("a",{href:"/",id:"logo"},"Card Sorter"),r.a.createElement("div",{className:"profile"},r.a.createElement("p",null,t),r.a.createElement("img",{src:u.a,alt:"Profile"})))},p=Object(l.b)(function(e){return{username:e.header.username,profilePic:e.header.profilePic}},function(e){return{}})(m),g=a(8),h=a(11),v={abandonded:"Abandoned",active:"Active",addCard:"Add Card",averageSort:"average sort",basicInformation:"Basic Information",card:"card",cardName:"Card name",cards:"cards",cardsNo:"cards no",cardsSorted:"cards sorted",categories:"categories",categoriesCreated:"categories created",categoriesNo:"categoriesNo",category:"category",clusters:"clusters",completed:"Completed",completedTheStudy:"completed the study",completion:"completion",couldBeMergedInto:"could be merged into",create:"Create",createStudy:"Create a new study",description:"Description",editedOn:"Last edited on",endedOn:"Ended on",filter:"FILTER",frequency:"frequency",inactive:"Inactive",launchedOn:"Launched on",message:"Message",noParticipantsYet:"no participants yet",of:"of",ongoing:"ongoing",outOf:"out of",participant:"participant",participantNo:"participant no",participants:"participants",similarity:"similarity",similarityMatrix:"similarity matrix",studies:"STUDIES",studyCreated:"Study created",thanksMessage:"Thanks message",timeTaken:"time taken",title:"Title",users:"users",wereSorterInAverage:"were sorter in average"},y=new(function(){function e(){Object(g.a)(this,e)}return Object(h.a)(e,[{key:"initialize",value:function(e){this.text=v}}]),e}()),E=function(e){var t=e.title,a=e.isLive,n=e.completedNo,i=e.abandonedNo,c=e.launchedDate,s=e.editDate,o=e.endDate,l=e.onClick;return r.a.createElement("li",{className:"studyItem",onClick:l},r.a.createElement("div",{className:"header"},r.a.createElement("h3",null,t),a&&r.a.createElement("span",{className:"activeSquare isLive"}),!a&&r.a.createElement("span",{className:"activeSquare notLive"})),r.a.createElement("div",{className:"participants"},r.a.createElement("p",{className:"completed"},n," ",y.text.completed),r.a.createElement("p",{className:"abandoned"},i," ",y.text.abandonded)),r.a.createElement("div",{className:"dates"},r.a.createElement("p",{className:"launched"},y.text.launchedOn," ",r.a.createElement("time",{dateTime:c},c.getDate()," ",c.getMonth()," ",c.getFullYear())),!o&&r.a.createElement("p",{className:"edited"},y.text.editedOn," ",r.a.createElement("time",{dateTime:s},s.getDate()," ",s.getMonth()," ",s.getFullYear())),o&&r.a.createElement("p",{className:"ended"},y.text.endedOn," ",r.a.createElement("time",{dateTime:o},o.getDate()," ",o.getMonth()," ",o.getFullYear()))))},f=a(26),N=a.n(f),C=function(e){var t=e.onClick;return r.a.createElement("button",{className:"createStudyCard",onClick:t},r.a.createElement("img",{src:N.a,alt:"Plus sign"}),r.a.createElement("p",null,"Create a study"))},b=function(e){var t=e.studies,a=e.onStudyClick,n=e.onCreateClick;return r.a.createElement("ul",{className:"studies-container"},t.map(function(e,t){return r.a.createElement(E,{key:"studyItem"+t,title:e.title,isLive:e.isLive,completedNo:e.completedNo,abandonedNo:e.abandonedNo,launchedDate:e.launchedDate,editDate:e.editDate,endDate:e.endDate,onClick:function(){return a(e.id)}})}),r.a.createElement(C,{onClick:n}))},x=Object(l.b)(function(e,t){return{studies:e.studies.studies,onStudyClick:function(e){t.history.push("./study/"+e)},onCreateClick:function(){t.history.push("./create")}}},function(e){return{}})(b),D=function(e){var t="./?filter=all",a="./?filter=all",n="",i="";return e.ongoing&&(t="./?filter=completed",n="active"),e.completed&&(a="./?filter=ongoing",i="active"),r.a.createElement("div",{className:"filter-container"},r.a.createElement("p",null,y.text.filter),r.a.createElement("a",{href:t,className:n},y.text.ongoing),r.a.createElement("a",{href:a,className:i},y.text.completed))},k=function(e){var t=e.history;return r.a.createElement("main",null,r.a.createElement(p,{username:"John"}),r.a.createElement(D,{ongoing:!0,completed:!0}),r.a.createElement(x,{history:t}))},w=function(e){var t=e.values,a=e.dispatch;return r.a.createElement("div",{className:"study-creation-card"},r.a.createElement("h1",null,y.text.createStudy),r.a.createElement("h2",null,y.text.basicInformation),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:t.title||y.text.title,onChange:function(e){return a.onChange("title",e)}}),r.a.createElement("textarea",{placeholder:t.description||y.text.description,rows:"10",cols:"30",onChange:function(e){return a.onChange("description",e)}})),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{className:"prev disabled",onClick:a.onPrev}),r.a.createElement("button",{className:"next",onClick:a.onNext})),r.a.createElement("div",{className:"page-no-container"},r.a.createElement("p",null,"1"),r.a.createElement("p",null,y.text.of),r.a.createElement("p",null,"3"))))},O=function(e){var t=e.name,a=e.description,n=e.onNameChange,i=e.onDescriptionChange;return r.a.createElement("div",{className:"card"},r.a.createElement("input",{type:"text",placeholder:t||y.text.cardName,onChange:function(e){return n(e)}}),r.a.createElement("input",{type:"text",placeholder:a||y.text.description,onChange:function(e){return i(e)}}))},S=function(e){var t=e.values,a=e.dispatch;return r.a.createElement("div",{className:"study-creation-card"},r.a.createElement("h1",null,y.text.createStudy),r.a.createElement("h2",null,y.text.cards),r.a.createElement("form",{className:"cards"},r.a.createElement("div",{className:"card-container"},t.cards.map(function(e){return r.a.createElement(O,{key:"card"+e.id,name:e.name,description:e.description,onNameChange:function(t){return a.onCardNameChange(e.id,t)},onDescriptionChange:function(t){return a.onCardDescriptionChange(e.id,t)}})})),r.a.createElement("button",{type:"button",onClick:a.onCreateCard},y.text.addCard)),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{className:"prev",onClick:a.onPrev}),r.a.createElement("button",{className:"next",onClick:a.onNext})),r.a.createElement("div",{className:"page-no-container"},r.a.createElement("p",null,"2"),r.a.createElement("p",null,y.text.of),r.a.createElement("p",null,"3"))))},T=function(e){var t=e.values,a=e.dispatch;return r.a.createElement("div",{className:"study-creation-card"},r.a.createElement("h1",null,y.text.createStudy),r.a.createElement("h2",null,y.text.message),r.a.createElement("form",null,r.a.createElement("textarea",{className:"thanks message",cols:"30",rows:"10",onChange:function(e){return a.onMessageChange(e)},placeholder:t.message||y.text.thanksMessage})),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{className:"prev",onClick:a.onPrev}),r.a.createElement("button",{className:"create",onClick:function(){return a.onNext(t.study)}},y.text.create)),r.a.createElement("div",{className:"page-no-container"},r.a.createElement("p",null,"3"),r.a.createElement("p",null,y.text.of),r.a.createElement("p",null,"3"))))},j=a(27),A=a.n(j),P=function(e){var t=e.values,a=e.dispatch,i=Object(n.useRef)(null);return r.a.createElement("div",{className:"success-page"},r.a.createElement("h1",null,y.text.studyCreated),r.a.createElement("img",{src:A.a,alt:"Welcome to your new study!"}),r.a.createElement("div",{className:"actions-container"},r.a.createElement("button",{onClick:function(){return a.onButtonClick(t.url)}},"Go to study"),r.a.createElement("div",{className:"url-container"},r.a.createElement("textarea",{className:"url",ref:i,defaultValue:t.url}),r.a.createElement("button",{className:"copy",type:"button",onClick:function(){return a.onCopy(i)}}))))},I=function(e){var t,a=e.currentPage,n=e.page1Values,i=e.page1Dispatch,c=e.page2Values,s=e.page2Dispatch,l=e.page3Values,d=e.page3Dispatch,u=e.page4Values,m=e.page4Dispatch;return 1===a?t=r.a.createElement(w,{values:n,dispatch:i}):2===a?t=r.a.createElement(S,{values:c,dispatch:s}):3===a?t=r.a.createElement(T,{values:l,dispatch:d}):4===a?t=r.a.createElement(P,{values:u,dispatch:m}):-1===a&&(t=r.a.createElement(o.a,{to:"/"})),t},_="IS_FETCHING",L="SUCCESS",M=a(12),V=a.n(M),F=function(){function e(){Object(g.a)(this,e)}return Object(h.a)(e,[{key:"getToken",value:function(){return this.getCookie("auth_token")}}]),e}();F.prototype.getCookie=function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""};var G=new F;function R(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log(t)}var q="http://127.0.0.1:5000",H="LOAD_STUDIES",U="ADD_STUDY";function Y(e,t,a){return{type:H,payload:{status:e,studies:t},error:a}}var z="CHANGE_TITLE",B="CHANGE_DESCRIPTION",J="ADD_CARD",W="CHANGE_CARD_NAME",K="CHANGE_CARD_DESCRIPTION",Q="CHANGE_THANKS_MESSAGE",$="CREATE_STUDY",X="SHOW_PAGE",Z="OPEN_STUDY_PAGE",ee="CHECK_TITLE";function te(e){return{type:X,payload:{pageNo:e},error:!1}}function ae(e,t,a){return{type:$,payload:{status:e,study:t,error:a}}}function ne(e){return function(t){t(ae(_)),fetch(q+"/studies_endpoint",{method:"POST",withCredentials:!0,credentials:"include",headers:{"Content-Type":"application/json",Authorization:G.getToken(),"Access-Control-Allow-Credentials":!0},body:JSON.stringify(e)}).then(function(e){return e.json().then(function(a){var n;401===e.status?(setTimeout(window.location.reload(!0),1e3),window.location.replace(a.location)):(t((n=a.study,{type:U,payload:{study:n},error:!1})),t(ae(L,a.study)))})})}}function re(e,t,a){try{var n=a.target.value;switch(t){case"title":e({type:z,payload:{title:n},error:!1});break;case"description":e({type:B,payload:{description:n},error:!1})}}catch(r){return}}function ie(e){return{title:e.title,description:e.description,cards:e.cards,message:e.thanksMessage}}var ce=Object(l.b)(function(e){return{currentPage:e.studyCreation.ui.currentPage,page1Values:{title:e.studyCreation.title,titleValidity:e.studyCreation.ui.validTitle},page2Values:{cards:Object.values(e.studyCreation.cards)},page3Values:{message:e.studyCreation.thanksMessage,study:ie(e.studyCreation)},page4Values:{url:e.studyCreation.url}}},function(e,t){return{page1Dispatch:{onChange:function(t,a){re(e,t,a)},onNext:function(){e(te(2))},onPrev:function(){}},page2Dispatch:{onCreateCard:function(){var t;e((t=Date.now(),{type:J,payload:{id:t},error:!1}))},onCardNameChange:function(t,a){var n=a.target.value;e(function(e,t){return{type:W,payload:{id:e,name:t},error:!1}}(t,n))},onCardDescriptionChange:function(t,a){var n=a.target.value;e(function(e,t){return{type:K,payload:{id:e,description:t},error:!1}}(t,n))},onNext:function(){e(te(3))},onPrev:function(){e(te(1))}},page3Dispatch:{onMessageChange:function(t){var a=t.target.value;e(function(e){return{type:Q,payload:{message:e},error:!1}}(a))},onNext:function(t){e(ne(t))},onPrev:function(){e(te(2))}},page4Dispatch:{onCopy:function(e){e.current.select(),document.execCommand("copy")},onButtonClick:function(){e({type:Z,payload:{},error:!1})}}}})(I),se=a(16),oe=a.n(se),le=function(e){var t=e.history;return r.a.createElement("main",null,r.a.createElement(p,{username:"John",profilePic:oe.a}),r.a.createElement(ce,{history:t}))},de=Object(l.b)(function(e,t){return{history:t.history}},function(e){return{}})(le),ue=a(32),me=a(29),pe=a(33),ge=a(3),he=a.n(ge),ve=function(e){for(var t=e.selectedNo,a=e.onClicks,n=[],i=0;i<5;i++)n[i]="";return n[t]="selected",r.a.createElement("div",{className:"study-menu"},r.a.createElement("button",{onClick:a.participant,className:n[0]},y.text.participant),r.a.createElement("button",{onClick:a.cards,className:n[1]},y.text.cards),r.a.createElement("button",{onClick:a.categories,className:n[2]},y.text.categories),r.a.createElement("button",{onClick:a.similarityMatrix,className:n[3]},y.text.similarityMatrix),r.a.createElement("button",{onClick:a.clusters,className:n[4]},y.text.clusters))};ve.propsTypes={selectedNo:he.a.number.isRequired,onClick:he.a.object.isRequired};var ye=ve,Ee=function(e){var t=e.headers,a=e.data;return r.a.createElement("div",{className:"data-container"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,t.map(function(e){return r.a.createElement("th",{key:"header"+e},e)}))),r.a.createElement("tbody",null,a.map(function(e,t){return r.a.createElement("tr",{key:"line"+t},e.map(function(e,t){return e instanceof Array?r.a.createElement("td",{key:"item"+t},r.a.createElement("ul",null,e.map(function(e,t){return r.a.createElement("li",{key:"child"+t},e)}))):r.a.createElement("td",{key:"item"+t},e)}))}))))},fe=function(e){var t=e.percentage,a=e.sub,n=e.total,i=e.entity,c=e.title,s=e.action;return r.a.createElement("div",{className:"bar-graph-container"},r.a.createElement("p",null,c),r.a.createElement("div",{className:"graphic"},r.a.createElement("div",{className:"completion",style:{height:t}}),r.a.createElement("div",{className:"index",style:{bottom:t}},r.a.createElement("p",null,t))),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,r.a.createElement("span",{className:"emphasized"},a)," ",y.text.outOf," ",r.a.createElement("span",{className:"emphasized"},n)," ",i),r.a.createElement("p",null,s)))},Ne=a(30),Ce=a.n(Ne),be=function(){return r.a.createElement("div",{className:"no-participants-page"},r.a.createElement("h1",null,y.text.noParticipantsYet),r.a.createElement("img",{src:Ce.a,alt:"Nothing found"}))},xe=function(e){function t(){return Object(g.a)(this,t),Object(ue.a)(this,Object(me.a)(t).apply(this,arguments))}return Object(pe.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.loadStudy()}},{key:"render",value:function(){var e=this.props,t=e.isFetching,a=e.title,n=e.isLive,i=e.launched,c=e.menuValues,s=e.menuDispatch,o=e.graphValues,l=e.tableValues,d=(e.tableDispatch,e.noParticipants);return t||void 0===t?r.a.createElement("p",null,"Loading..."):d?r.a.createElement(be,null):r.a.createElement("div",{className:"study-page"},r.a.createElement("span",{className:"header"},r.a.createElement("h1",null,a),r.a.createElement("button",{className:"edit"})),r.a.createElement("span",{className:"active"},n&&r.a.createElement("div",{className:"active-container"},r.a.createElement("span",{className:"activeSquare isLive"}),r.a.createElement("p",null,y.text.active)),!n&&r.a.createElement("div",{className:"active-container"},r.a.createElement("span",{className:"activeSquare notLive"}),r.a.createElement("p",null,y.text.inactive)),r.a.createElement("h2",{className:"date"},y.text.launchedOn," ",i.getDate()," ",i.getMonth()," ",i.getFullYear())),r.a.createElement(ye,{selectedNo:c.selectedNo,onClicks:s.onClicks}),r.a.createElement("div",{className:"content"},r.a.createElement(fe,{percentage:o.percentage,sub:o.sub,total:o.total,entity:o.entity,title:o.title,action:o.action}),r.a.createElement(Ee,{headers:l.headers,data:l.data})))}}]),t}(n.Component),De="CHANGE_VIEW",ke="LOAD_STUDY";function we(e){return{type:De,payload:{no:e},error:!1}}function Oe(e,t,a){return{type:ke,payload:{status:e,study:t},error:a}}function Se(e){switch(e.study.selectedItem){case 0:return[y.text.participantNo,y.text.timeTaken,y.text.cardsSorted,y.text.categoriesCreated];case 1:return[y.text.card,y.text.categoriesNo,y.text.categories,y.text.frequency];case 2:return[y.text.category,y.text.cardsNo,y.text.cards,y.text.frequency,y.text.participants];default:return[]}}function Te(e){switch(e.study.selectedItem){case 0:return{percentage:e.study.participants.completion,sub:e.study.participants.completed,total:e.study.participants.total,entity:y.text.users,title:y.text.completion,action:y.text.completedTheStudy};case 1:return{percentage:e.study.cards.average,sub:e.study.cards.sorted,total:e.study.cards.total,entity:y.text.cards,title:y.text.averageSort,action:y.text.wereSorterInAverage};case 2:return{percentage:e.study.categories.similarity,sub:e.study.categories.similar,total:e.study.categories.total,entity:y.text.categories,title:y.text.similarity,action:y.text.couldBeMergedInto};default:return{}}}function je(e){switch(e.study.selectedItem){case 0:return e.study.participants.data;case 1:return e.study.cards.data;case 2:return e.study.categories.data;default:return{}}}var Ae=Object(l.b)(function(e){return{isFetching:e.study.isFetching,title:e.study.title,isLive:e.study.isLive,launched:e.study.launchedDate,noParticipants:e.study.noParticipants,menuValues:{selectedNo:e.study.selectedItem},graphValues:Te(e),tableValues:{headers:Se(e),data:je(e)}}},function(e,t){return{loadStudy:function(){return e((a=t.id,function(e){e(Oe(_)),V()(q+"/studies_endpoint?id="+a,{method:"GET",withCredentials:!0,credentials:"include",headers:{Authorization:G.getToken(),"Access-Control-Allow-Credentials":!0}}).then(function(t){return t.json().then(function(a){401===t.status?(setTimeout(window.location.reload(!0),1e3),window.location.replace(a.location)):e(Oe(L,a.study))})})}));var a},menuDispatch:{onClicks:{participant:function(){e(we(0))},cards:function(){e(we(1))},categories:function(){e(we(2))},similarityMatrix:function(){},clusters:function(){}}},tableDispatch:{}}})(xe),Pe=function(e){e.history;var t=e.match;return r.a.createElement("main",null,r.a.createElement(p,{username:"John",profilePic:oe.a}),r.a.createElement(Ae,{id:t.params.id}))},Ie=a(9),_e=a(31),Le="REQUEST_USERNAME";function Me(e,t,a){return{type:Le,payload:{status:e,username:t},error:!1}}var Ve=function e(t,a,n,r,i,c,s,o){Object(g.a)(this,e),this.id=t,this.title=a,this.isLive=n,this.completedNo=r,this.abandonedNo=i,this.launchedDate=c,this.editDate=s,this.endDate=o};var Fe=Object(Ie.c)({header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Le:return Object.assign({},e,{username:t.payload.status===L?t.payload.username:""});default:return e}},studies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:var a=Object.assign({},e);return t.payload.status===L&&(t.payload.studies&&0!==t.payload.studies.length?a.studies=t.payload.studies.map(function(e){var t=e.id,a=e.title,n=e.isLive,r=e.completedNo,i=e.abandonedNo,c=e.launchedDate,s=e.editDate,o=e.endDate;return new Ve(t,a,n,r,i,new Date(c),new Date(s),n?void 0:new Date(o))}):a.studies=[]),a.isFetching=t.payload.status!==L,a;case U:var n=Object.assign({},e),r=t.payload.study;return n.studies.push(new Ve(r.id,r.title,r.isLive,r.completedNo,r.abandonedNo,new Date(r.launchedDate),new Date(r.editDate),void 0)),n;default:return e}},studyCreation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object.assign({},e,{title:t.payload.title});case B:return Object.assign({},e,{description:t.payload.description});case J:var a=Object.assign({},e);return a.cards[t.payload.id]={id:t.payload.id,title:void 0,description:void 0},a;case W:var n=Object.assign({},e);return n.cards[t.payload.id].name=t.payload.name,n;case K:var r=Object.assign({},e);return r.cards[t.payload.id].description=t.payload.description,r;case Q:return Object.assign({},e,{thanksMessage:t.payload.message});case X:var i=Object.assign({},e);return i.ui.currentPage=t.payload.pageNo,i;case ee:var c=Object.assign({},e);return t.payload.status===L&&(c.ui.validTitle=t.payload.validTitle),c.ui.titleFetching=t.payload.status,c;case Z:return window.location.assign(e.url),e;case $:var s=Object.assign({},e);return t.payload.status===L&&(s.url=t.payload.study.url,s.ui.currentPage=4),s.ui.studySending=t.payload.status,s;default:return e}},study:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:var a=Object.assign({},e),n=t.payload.study;return t.payload.status===L&&(a.id=n.id,a.title=n.title,a.isLive=n.isLive,a.launchedDate=new Date(n.launchedDate),a.ended=n.ended?new Date(n.ended):void 0,a.noParticipants=0===n.participants,a.participants={completion:n.participants?n.participants.completion:"0%",total:n.participants?n.participants.total:0,completed:n.participants?n.participants.completed:0,data:n.participants?n.participants.data:[]},a.cards={average:n.cards?n.cards.average:"0%",total:n.cards?n.cards.total:0,sorted:n.cards?n.cards.sorted:0,data:n.cards?n.cards.data:[]},a.categories={similarity:n.categories?n.categories.similarity:"0%",total:n.categories?n.categories.total:0,similar:n.categories?n.categories.similar:0,merged:n.categories?n.categories.merged:0,data:n.categories?n.categories.data:[]}),a.isFetching=t.payload.status!==L,a;case De:return Object.assign({},e,{selectedItem:t.payload.no});default:return e}}}),Ge={header:{username:void 0,profilePic:"../icons/sample-user.svg"},studies:{isFetching:void 0,didInvalidate:void 0,studies:[]},studyCreation:{title:"Title",description:"Description",url:void 0,cards:{1:{id:1,name:void 0,description:void 0}},thanksMessage:"Thanks",ui:{currentPage:1,titleFetching:void 0,validTitle:!0,studySending:void 0}},study:{isFetching:void 0,id:void 0,title:void 0,isLive:void 0,launchedDate:void 0,ended:void 0,selectedItem:0,noParticipants:!0,participants:{completion:void 0,total:void 0,completed:void 0,data:[]},cards:{average:void 0,total:void 0,sorted:void 0,data:[]},categories:{similarity:void 0,total:void 0,similar:void 0,merged:void 0,data:[]}}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=function(){var e=Object(Ie.d)(Fe,Ge,Object(Ie.a)(_e.a));y.initialize("en-us");var t=e.subscribe(function(){});return e.dispatch(function(e){e(Me(_)),V()(q+"/studies_endpoint?username=true",{method:"GET",withCredentials:!0,credentials:"include",headers:{Authorization:G.getToken(),"Access-Control-Allow-Credentials":!0}}).then(function(t){return t.json().then(function(a){401!==t.status&&e(Me(L,a.username))})})}),e.dispatch(function(e){e(Y(_)),V()(q+"/studies_endpoint",{method:"GET",withCredentials:!0,credentials:"include",headers:{Authorization:G.getToken(),"Access-Control-Allow-Credentials":!0}}).then(function(t){t.json().then(function(a){401===t.status?(setTimeout(window.location.reload(!0),1e3),window.location.replace(a.location)):e(Y(L,a.studies))},function(e){return R("Error on decoding json: ",e)})},function(e){return R(e)})}),t(),e}();c.a.render(r.a.createElement(l.a,{store:Re},r.a.createElement(s.a,null,r.a.createElement(o.b,{exact:!0,path:"/",component:k}),r.a.createElement(o.b,{path:"/create",component:de}),r.a.createElement(o.b,{path:"".concat("","/study/:id"),component:Pe}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.0f0ade2b.chunk.js.map