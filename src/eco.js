!function(a,b){function e(a,b,c){2==arguments.length&&(b=[],c=b),this.id=a,this.dependencyIds=b,this.dependencies={},this.factory=c,this.status=d.CREATED,this.exports={},this._enable=!0,this.nameSpace=null}function f(a){this.name=a,this._data={_env:""},this._meta={name:"",version:"",description:"",author:"",participator:""},this.childNames=[],this.children={},this.parent=null,this.moduleIds=[],this.modules={},this.taskIds=[],this.tasks={},this.serviceIds=[],this.services={},this.aspectIds=[],this.aspects={},this.workflowIds=[],this.workflows={},this.configData={base:"/",nameSpaces:{},fullNameSpaces:{},modules:{},fullModules:{}},this.status=0}function j(a,b,c){this.context=a,this.id=b,this.sequenceTask=c,this.taskaspectIds={}}function k(a,b){return function(){this.id=a,this.advice=b}}function l(a,b,c,d,e,f){return function(){try{m({aspectObjs:b,adviceType:"before",returnVal:null,error:null,srcArgs:arguments,nameSpace:e,targetId:a,type:f,funcName:c});var g=d.call(this,arguments);m({aspectObjs:b,adviceType:"after",returnVal:g,error:null,srcArgs:arguments,nameSpace:e,targetId:a,type:f,funcName:c})}catch(h){m({aspectObjs:b,adviceType:"error",returnVal:null,error:h,srcArgs:arguments,nameSpace:e,targetId:a,type:f,funcName:c})}return g}}function m(a){var b,c;for(b=0;b<a.aspectObjs.length&&(c={stop:!1,srcArgs:a.srcArguments,targetId:a.targetId,type:a.type,nameSpace:a.nameSpace,error:a.error,funcName:a.funcName},a.aspectObjs[b].advice[a.adviceType]&&a.aspectObjs[b].advice[a.adviceType](c),!c.stop);b++);}var c,d,g,h;a.eco||(c={},c.isType=function(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}},c.isObject=c.isType("Object"),c.isString=c.isType("String"),c.isArray=Array.isArray||c.isType("Array"),c.isFunction=c.isType("Function"),c.isUndefined=c.isType("Undefined"),c.isInArray=function(a,b){for(i=0;i<a.length;i++)if(a[i]==b)return!0;return!1},c._uid=0,c.uid=function(){return c._uid++},function(a){function j(h,j,l,m){var n,o,q;if(l="utf-8",m=b,n=g.test(h),!n&&c){try{importScripts(h)}catch(p){o=p}return j(o),void 0}q=d.createElement(n?"link":"script"),l&&(q.charset=l),a.isUndefined(m)||q.setAttribute("crossorigin",m),k(q,j,n,h),n?(q.rel="stylesheet",q.href=h):(q.async=!0,q.src=h),i=q,f?e.insertBefore(q,f):e.appendChild(q),i=null}function k(b,c,d,f){function i(a){b.onload=b.onerror=b.onreadystatechange=null,b.rel||e.removeChild(b),b=null,c(a)}var g="onload"in b;return!d||!h&&g?(g?(b.onload=i,b.onerror=function(){a.emit("error",{uri:f,node:b}),i(!0)}):b.onreadystatechange=function(){/loaded|complete/.test(b.readyState)&&i()},void 0):(setTimeout(function(){l(b,c)},1),void 0)}function l(a,b){var d,c=a.sheet;if(h)c&&(d=!0);else if(c)try{c.cssRules&&(d=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(d=!0)}setTimeout(function(){d?b():l(a,b)},20)}var i,c="undefined"==typeof window&&"undefined"!=typeof importScripts&&isFunction(importScripts),d=document,e=d.head||d.getElementsByTagName("head")[0]||d.documentElement,f=e.getElementsByTagName("base")[0],g=/\.css(?:\?|$)/i,h=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i,"$1")<536;a.request=j}(c),c.extend=function(a,b,d){var e;if(!b)return a;for(e in b)a!==b[e]&&(c.isObject(b[e])&&d&&(a[e]||(a[e]={}),c.extend(a[e],b[e],d)),a[e]=b[e]);return a},c.events={},c.on=function(a,b){var d=c.events[a]||(c.events[a]=[]);return d.push(b),c},c.one=function(a,b){var d=this,e=function(c){d.off(a,e),b.call(d,c)};return d.on(a,e),c},c.off=function(a,b){var d,e;if(!a&&!b)return c.events={},c;if(d=c.events[a])if(b)for(e=d.length-1;e>=0;e--)d[e]===b&&d.splice(e,1);else delete c.events[a];return c},c.emit=function(a,b){var e,f,d=c.events[a];if(d)for(d=d.slice(),e=0,f=d.length;f>e;e++)d[e](b);return c},d=e.STATUS={VIRTUAL:-1,CREATED:0,READY:1,EXECUTING:2,EXECUTED:3},e.prototype.exec=function(){var a,b;if(!this._enable)throw new Error("模块"+this.id+"处于不可用的状态");if(this.status>=d.EXECUTING)return this.exports;for(this.status=d.EXECUTING,a=[],b=0;b<this.dependencyIds.length;b++)a.push(this.dependencies[this.dependencyIds[b]].exec());return this.exports=c.isFunction(this.factory)?this.factory.apply(this,a):this.factory,this.status=d.EXECUTED,this.exports},e.prototype.setDependencies=function(){var a,b,c;if(this.dependencyIds)for(a=0;a<this.dependencyIds.length;a++)b=this.dependencyIds[a],c=this.nameSpace.searchModuleById(b),c.setDependencies(),this.dependencies[b]=c},e.prototype.disable=function(){this._enable=!1},e.prototype.enable=function(){this._enable=!0},e.prototype.isEnable=function(){return this._enable},f.prototype.util=c,f.prototype.namespace=function(b,c){a[b]||(a[b]=new f(b),a[b].parent=this,this.childNames.push(b),this.children[b]=a[b]),c&&c(a[b])},f.prototype.data=function(a,b){var d=arguments.length,e=null,f=a,g="";return-1!=a.indexOf(".")&&(f=a.split(".")[0],g=a.split(".")[1]),1==d&&(this._data._env&&!g&&(g=this._data._env),g?(c.isObject(this._data[f][g])&&(e={},c.extend(e,this._data[f]._global),c.extend(e,this._data[f][g])),e=this._data[f][g]):e=this._data[f]._global),2==d&&(this._data[f]||(this._data[f]={_global:{}},g||(this._data[f]._global=b)),c.isObject(b)?(c.isObject(this._data[f]._global)||(this._data[f]._global={}),c.isObject(this._data[f][g])||(this._data[f][g]={}),g?c.extend(this._data[f][g],b):c.extend(this._data[f]._global,b)):g?this._data[f][g]=b:this._data[f]._global=b,e=this),e},f.prototype.env=function(a){var b=a,c="";return-1!=a.indexOf(".")&&(c=a.split(".")[0],b=a.split(".")[1]),this._data._env=b,c&&(this._data[c]._env=b),this},f.prototype.meta=function(a){return a?(c.extend(this._meta,a),void 0):this._meta},f.prototype.searchModuleById=function(b){var e,f,g,c=this.modules[b];if(-1!=b.indexOf(".")){if(e=b.split(".")[0],b=b.split(".")[1],f=a[e],!f)throw Error("模块："+b+",所在的命名空间："+e+"不存在");c=f.searchModuleById(b)}else if(!c)if(g=this.configData.modules[b]?this.configData.base+this.configData.modules[b]:this.configData.fullModules[b])c={url:g,id:b,nameSpace:this,status:d.VIRTUAL};else{if(!this.parent)throw Error("模块："+b+",在命名空间树中未查询到");c=this.parent.searchModuleById(b)}return c},f.prototype.getUrlByNameSpaceName=function(a){var b=this.configData.nameSpaces[a]?this.configData.base+this.configData.nameSpaces[a]:this.configData.fullNameSpaces[a];if(!b){if(!this.parent)throw Error("没有发现命名空间"+a+",在资源配置表中。");b=this.parent.getUrlByNameSpaceName(a)}return b},g={ERROR:-1,INIT:0,FETCHING:1,FETCHED:2},h={},f.prototype.loadNameSpaces=function(b,d){function k(){var g,h,f=!0;for(g=0;g<b.length;g++)if(h=b[g],!a[h]||0==a[h].status){f=!1;break}f&&(c.off("nameSpaceReady",k),d.call(e))}var f,i,j,e=this;for(f=0;f<b.length;f++)if(i=b[f],j=this.getUrlByNameSpaceName(i),j&&(!h[j]||h[j]<g.FETCHING))!function(b){h[j]=g.FETCHING,c.request(j,function(d){if(d===!0)throw h[j]=g.ERROR,Error("命名空间"+module.nameSpace.name+"中加载命名空间:"+b+",发生错误："+d);h[j]=g.FETCHED,a[b].status=1,c.emit("nameSpaceReady")})}(i);else{if(!a[i])throw Error("命名空间"+module.nameSpace.name+"中未找到要加载的命名空间:"+i+"的配置");a[i].status=1}c.on("nameSpaceReady",k),k()},f.prototype.loadModules=function(a,b){function l(){var f,g,h,i;if(!l.locked){for(f=!0,g=0;g<a.length;g++)if(h=a[g],i=e.searchModuleById(h),i.status<=d.CREATED){f=!1;break}f&&(l.locked=!0,c.off("moduleReady",l),b.call(e))}}var f,i,j,k,e=this;for(f=0;f<a.length;f++)i=a[f],j=this.searchModuleById(i),k=j.url,k&&(!h[k]||h[k]<g.FETCHING)&&function(a){var b=a.url;h[b]=g.FETCHING,c.request(b,function(d){if(d===!0)throw h[b]=g.ERROR,Error("命名空间"+a.nameSpace.name+"中加载模块:"+a.id+",发生错误："+d);h[b]=g.FETCHED,-1!=b.indexOf(".css")?a.nameSpace.define(i,[],function(){}):c.emit("loadDependencies")})}(j);l.locked=!1,c.on("moduleReady",l),l()},f.prototype.config=function(a){c.extend(this.configData,a)},f.prototype.define=function(a,b,f){var g,h;return 2==arguments.length&&(f=b,b=[]),g=this,h=new e(a,b,f),h.nameSpace=this,this.moduleIds.push(a),this.modules[a]=h,0==b.length?(h.status=d.READY,c.emit("moduleReady")):c.one("loadDependencies",function(){g.loadModules(b,function(){h.status=d.READY,c.emit("moduleReady")})}),this},f.prototype.use=function(a,b,d){function j(){var e,f,g,a=this,c=[];for(e=0;e<b.length;e++)f=a.searchModuleById(b[e]),f.setDependencies(),g=f.exec(),c.push(g);d.apply(a,c)}var e,f,g,h,i;if(c.isString(a)&&(a=[a]),3==arguments.length&&c.isString(b)&&(b=[b]),2==arguments.length&&(d=b,b=a,a=[]),1!=arguments.length){for(e=0;e<b.length;e++)h=b[e],-1!=h.indexOf(".")&&(i=h.split(".")[0],c.isInArray(a,i)||a.push(i));a&&a.length>0?this.loadNameSpaces(a,function(){c.emit("loadDependencies"),this.loadModules(b,j)}):(c.emit("loadDependencies"),this.loadModules(b,j))}else for(c.emit("loadDependencies"),b=a,a=[],d=function(){},e=0;e<b.length;e++){if(f=b[e],-1!=f.indexOf("."))throw Error("同步模式不得夸命名空间调用");g=this.searchModuleById(f),g.setDependencies(),this[f]=g.exec()}},f.prototype.showNameSpaceTree=function(){var d,a=this,b=a.childNames.join(","),c="";for(b&&(c="("+b+")"),console.log(a.name+c),console.log("----"),d=0;d<a.childNames.length;d++)a.children[b].showNameSpaceTree()},f.prototype.showModules=function(){console.log("该命名空间模块总数是:"+this.moduleIds.length),console.log("该命名空间下的模块有:"+this.moduleIds.join(","))},f.prototype.showModulesTree=function(){for(var a=0;a<this.moduleIds.length;a++)this.showModuleTree(this.moduleIds[a]),console.log("---------------")},f.prototype.showModuleTree=function(a){var e,b=this.modules[a],c=b.dependencyIds.join(","),d="";for(c&&(d="("+c+")"),console.log(b.id+d),console.log("----"),e=0;e<b.dependencyIds.length;e++)this.showModuleTree(b.dependencyIds[e])},f.prototype.task=function(a,b){if(c.isObject(a))for(var d in a)this.taskIds.push(d),this.tasks[d]=a[d];else this.taskIds.push(a),this.tasks[a]=b;return this},f.prototype.service=function(a,b){if(c.isObject(a))for(var d in a)this.serviceIds.push(d),this.services[d]=a[d];else this.serviceIds.push(a),this.services[a]=b;return this},j.prototype.run=function(){var c,d,a=this.sequenceTask,b=this.context;for(c=0;c<a.length;c++)d=a[c],b.tasks[d].call(b,b.services,b.tasks)},f.prototype.run=function(a){this.workflows[a].run()},f.prototype.workflow=function(a,b){return 1==arguments.length&&c.isArray(a)&&(b=a,a="_anonymous_workflow_"+c.uid()),2==arguments.length&&c.isString(b)&&(b=[b]),this.workflowIds.push(a),this.workflows[a]=new j(this,a,b),this.workflows[a]},f.prototype.aspect=function(a,b){return this.aspectIds.push(a),this.aspects[a]=new k(a,b),this},f.prototype.pointCutTask=function(a,b){arguments.length;var e=this.taskIds;return 1==arguments.length&&(b=a,a=e),c.isString(b)&&(b=[b]),this.pointCut(a,b,"task"),this},f.prototype.pointCutService=function(a,b){arguments.length;var e=this.serviceIds;return 1==arguments.length&&(b=a,a=e),c.isString(b)&&(b=[b]),this.pointCut(a,b,"service"),this},f.prototype.pointCutModule=function(a,b){arguments.length;var e=this.moduleIds;return 1==arguments.length&&(b=a,a=e),c.isString(b)&&(b=[b]),this.pointCut(a,b,"module"),this},f.prototype.pointCutModule=function(a,b){arguments.length;var e=this.moduleIds;return 1==arguments.length&&(b=targetmoduleIds,targetmoduleIds=e),c.isString(b)&&(b=[b]),this.pointCut(targetmoduleIds,b,"moduleFactory"),this},f.prototype.pointCut=function(a,b,d){var f,h,i,j,k,m,n,o;for(c.isString(a)&&(a=[a]),c.isString(b)&&(b=[b]),arguments.length,a=[],f=[],"task"==d&&(a=this.taskIds,f=this.tasks),"service"==d&&(a=this.serviceIds,f=this.services),("module"==d||"moduleFactory"==d)&&(a=this.moduleIds,f=this.modules),h=0;h<a.length;h++){for(i=a[h],j=f[i],k=[],m=0;m<b.length;m++)k.push(new this.aspects[b[m]]);if(c.isObject(j))if("moduleFactory"==d)j.factory=l(i,k,"factory",j.factory);else if("module"==d){if(j.exec(),n=j.exports,c.isFunction(n)&&(j.exports=l(i,k,"exports",n)),c.isObject(n))for(o in n)c.isFunction(n[o])&&(n[o]=l(i,k,o,n[o]))}else for(o in j)c.isFunction(j[o])&&(j[o]=l(i,k,o,j[o]));c.isFunction(j)&&(f[i]=l(i,k,i,j))}return this},j.prototype.pointCutTask=function(a,b){return 1==arguments.length&&(b=a,a=this.sequenceTask),this.context.pointCutTask(a,b),this},a.eco=new f("eco"))}(this);