iBarclays.WebAnalytics=(function(){function c(){b("DCS.dcsuri","TaskView/ModuleMenu","DCSext.TaskView-AccountManagement","ModuleMenu","WT.dl","11","WT.seg_1","Editor")}function f(){b("DCS.dcsuri","TaskView/ModuleMenu","DCSext.TaskView-AccountManagement","ModuleMenu","WT.dl","11","WT.seg_1","Editor")}function a(k,l){l=$.trim(l);b("DCS.dcsuri","TaskView/Modules","WT.seg_1","Editor","DCSext.ModuleAdded",l,"s.events","event17","s.prop20","ModuleAdded")}function d(k,l){l=$.trim(l);b("DCS.dcsuri","TaskView/Modules","WT.seg_1","Editor","DCSext.ModuleRemoved",l,"s.events","event17","s.prop20","ModuleRemoved")}function h(){var l=$("meta[name=WT.dcsvid]").attr("content");var k=$("meta[name=WT.seg_2]").attr("content");dcsMultiTrack("DCS.dcsuri","Accounts/See Statements","WT.dcsvid",l,"WT.seg_2",k,"WT.ti","","WT.seg_1","Money Manager","DCSext.StatementsView","eStatements")}function b(){var k,l={};WT={};DCS={};DCSext={};if(arguments.length%2==0){for(k=0;k<arguments.length;k+=2){if(arguments[k].indexOf("WT.")==0){WT[arguments[k].substring(3)]=arguments[k+1]}else{if(arguments[k].indexOf("DCS.")==0){DCS[arguments[k].substring(4)]=arguments[k+1]}else{if(arguments[k].indexOf("DCSext.")==0){DCSext[arguments[k].substring(7)]=arguments[k+1]}else{if(arguments[k].indexOf("s.")==0){l[arguments[k].substring(2)]=arguments[k+1]}}}}}WT.dcsvid=$("meta[name=WT.dcsvid]").attr("content");WT.seg_2=$("meta[name=WT.seg_2]").attr("content");scRemap(l);WT={};DCS={};DCSext={}}}function g(){WT={};DCS={};DCSext={};tagPageView();tagAjaxContent()}function e(){g();scSaveTakeoverPageName()}function j(){$(document).bind("modal.open.complete.webtrends",g);$(document).bind("takeover.open.complete.webtrends",e);$(document).bind("modal.open.complete.webtrends",iBarclays.TouchClarity.log);$(document).bind("takeover.open.complete.webtrends",iBarclays.TouchClarity.log);$(document).bind("takeover.close.complete.webtrends",scRestoreBasePageName);$(document).bind("drawer.opened",c);$(document).bind("drawer.closed",f);$(document).bind("module.opened",a);$(document).bind("module.closed",d);$(document).bind("pdf.download.webtrends",h)}$(j)})();function getElementsByClassName(e,k){if(e.getElementsByClassName){return e.getElementsByClassName(k)}k=k.replace(/ *$/,"");if(e.querySelectorAll){return e.querySelectorAll((" "+k).replace(/ +/g,"."))}k=k.replace(/^ */,"");var b=k.split(/ +/),l=b.length;var d=e.getElementsByTagName("*"),a=d.length;var f=[];var g,c,h;for(g=0;g<a;g++){h=true;for(c=l;c--;){if(!RegExp(" "+b[c]+" ").test(" "+d[g].className+" ")){h=false}}if(h){f.push(d[g])}}return f}function getTextContent(a){if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}return a.textContent||""+a.innerText}String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};var dcs2sc={dcsuri:"prop16",ErrorMessage:new scFixed1Tag("events","event4","eVar11"),sp:"prop1",cg_n:"prop2",cg_s:"prop3",ti:"__pageName","p1:p2:p3":new scCombinedP123(":"),"p1/p2/p3":new scCombinedP123("../../index.html"),tx_e:"__tx_e",si_cs:new scFixed("events","event8"),si_n:"prop26",si_p:"prop31",si_x:"prop31",RealStoreView:new scFixed1Tag("events","prodView","prop20"),RealStoreViewChoice:new scFixed1Tag("events","scView","prop20"),RealStoreAdd:new scFixed1Tag("events","scAdd","prop20"),RealStoreRemove:new scFixed1Tag("events","scRemove","prop20"),ModuleAdded:"prop30",ModuleRemoved:"prop30",ContactDetailsChanged:new scLowRankTag("list2"),emailcontact:new scAppendWholeTag("events","event17","prop20","ContactPreferences","list2"),onlinecontact:new scAppendWholeTag("events","event17","prop20","ContactPreferences","list2"),telcontact:new scAppendWholeTag("events","event17","prop20","ContactPreferences","list2"),textcontact:new scAppendWholeTag("events","event17","prop20","ContactPreferences","list2"),LoginMechanism:"eVar36",LOGIN_METHOD:"eVar37",LoginMethod:"eVar38","Unsuccessful Login":"eVar40",pageNameClone:"eVar41",Impressions:"eVar53",ImpressionsClone:"prop53",ERRORS:"prop11",VALIDATION_ERRORS:"prop32",MEMBERSHIPID:"prop34",pn_sku:"prop20",tx_u:"__tx_u",tx_i:"eVar19",tx_s:new scLowRankTag("prop30"),dcsvid:"eVar25",seg_2:"eVar12",seg_1:"__seg_1",LinkName:new scSetLinkNameTag("__LinkName",3),sevents:"events",spageName:"__pageName",sprop10:"prop10",sprop11:"prop11",sprop12:"prop12",sprop16:"prop16",sprop17:"prop17",sprop21:"prop21",sprop23:"prop23",sprop25:"prop25",sprop13:"prop13",sprop14:"prop14",sprop17:"prop17",sprop33:"prop33",sprop34:"prop34",seVar28:"eVar28",seVar29:"eVar29",seVar41:"eVar41",seVar42:"eVar42",seVar53:"eVar53",seVar9:"eVar9",seVar10:"eVar10",seVar11:"eVar11",seVar23:"eVar23",seVar25:"eVar25",seVar30:"eVar30",slist3:"list3"};function scFixed(a,b){this.f1=a;this.v1=b;this.setTags=function(d,e,c){scSetTag(d,a,b)}}function scFixed1Tag(a,c,b){this.f1=a;this.v1=c;this.f2=b;this.setTags=function(e,g,d){scSetTag(e,a,c);scSetTag(e,b,d)}}function scAppendWholeTag(a,e,d,c,b){this.f1=a;this.v1=e;this.f2=d;this.v2=c;this.f3=b;this.setTags=function(h,j,g){scSetTag(h,a,e);scSetTag(h,d,c);if(h[b]){g=h[b]+"|"+j+"="+g}else{g=j+"="+g}scSetTag(h,b,g)}}function scLowRankTag(a){this.tag=a;this.setTags=function(c,d,b){if(c[this.tag]==null||c[this.tag]==""||c[this.tag]=="0.00"){scSetTag(c,this.tag,b)}}}function scProductsTag(b,a){this.productTag=b;this.compTag=a;this.setTags=function(d,e,c){scSetTag(d,a,c)}}function scSetLinkNameTag(a,b){this.f=a;this.rank=b;this.setTags=function(d,e,c){if(this.rank>d.__LinkNameRank){d.__LinkName=c;d.__LinkNameRank=this.rank}}}function scCombinedP123(a){this.sep=a;this.setTags=function(d,e,b){var c=b.indexOf(this.sep);if(c>0){scSetTag(d,"prop1",b.substring(0,c));b=b.substring(c+1);c=b.indexOf(this.sep);if(c>0){scSetTag(d,"prop2",b.substring(0,c));b=b.substring(c+1)}}scSetTag(d,"prop3",b)}}function scRemap(e){var a=false;var b=s_gi(s_account);scSetInitial(b,"link");for(var d in WT){if(WT[d]!==null){scMapTag(b,d,WT[d]);a=true}}for(var d in DCS){if(DCS[d]!==null){scMapTag(b,d,DCS[d]);a=true}}for(var d in DCSext){if(DCSext[d]!==null){scMapTag(b,d,DCSext[d]);a=true}}for(var d in e){if(e[d]!==null){scSetTag(b,d,e[d]);a=true}}if(a){try{scSetDerived(b,"link");b.tl(this,"o",b.__LinkName);scCleanUp(b)}catch(c){}}WT={};DCS={};DCSext={}}function tagPageView(){var a=$("#_wt");if(a.length){var b=false;var g;var d=s_gi(s_account);scSetInitial(d);var f=a.metadata();for(var c in f){g=f[c];if(c.indexOf("WT.")==0){scMapTag(d,c.substring(3),g);b=true}else{if(c.indexOf("DCSext.")==0){scMapTag(d,c.substring(7),g);b=true}else{if(c.indexOf("DCS.")==0){scMapTag(d,c.substring(4),g);b=true}else{if(c.indexOf("s.")==0){scSetTag(d,c.substring(2),g);b=true}}}}}a.remove();if(b){scSetDerived(d);try{d.t()}catch(e){}}}}function tagAjaxContent(){var a=$("div#_sc1");if(a.length){var b=1;while(a.length){a.each(function(){tagQueryContents($(this))});a.remove();b++;a=$("div#_sc"+b)}}}function tagQueryContents(f){var c=f.closest(".modal-wnd");if(c.length==0){c=f.closest(".takeover-wnd");if(c.length==0){c=f.closest("div.module-holder");if(c.length==0){c=$(window.top.document)}}}var b=f.metadata();var a=b.selector;if(a==null||a.length==0){return}var e=(b.bind?b.bind:"click");var d=function(m){try{scSetInitial(s,"link");var h=$(m.target).text();if(!h){h=$(m.target).val();if(!h){h=$(m.target).attr("name")}}s.__LinkName=h.replace(/(^|\W+)(\w)/g,function(n,p,o){return o.toUpperCase()});s.__LinkNameRank=1;for(var j in b){if(j.indexOf("attr.")==0){var l=$(m.target).attr(b[j]);scSetTag(s,j.substring(5),l)}else{if(j.indexOf("s.")==0){scSetTag(s,j.substring(2),b[j])}else{if(j.indexOf("DCS.")==0){scMapTag(s,j.substring(4),b[j])}else{if(j.indexOf("DCSext.")==0){scMapTag(s,j.substring(7),b[j])}else{if(j.indexOf("WT.")==0){scMapTag(s,j.substring(3),b[j])}}}}}}if(s.__LinkNameRank==1){if(s.__LinkPrefix){s.__LinkName=s.__LinkPrefix+s.__LinkName}}scSetDerived(s,"link");s.tl(true,"o",s.__LinkName);scCleanUp(s)}catch(k){}};if(document.getElementsByClassName==undefined){c.find(a).unbind(e,d);c.find(a).bind(e,b,d);var g=c.find(a);if(g.length==0){$(a).unbind(e);$(a).bind(e,b,d)}}else{c.find(a).unbind(e);c.find(a).bind(e,b,d);var g=c.find(a);if(g.length==0){$(a).unbind(e);$(a).bind(e,b,d)}}}function setFromClickTagsFTB(c,a,b,d){dcsMultiTrack(c,a,b,d,"DCSext.sprop34",getProp34(s),"DCSext.seVar25",getProp34(s))}function dcsMultiTrack(){if(isLoginPage(s)){return}var b={};WT={};DCS={};DCSext={};if(arguments.length%2==0){for(var a=0;a<arguments.length;a+=2){if(arguments[a].indexOf("WT.")==0){WT[arguments[a].substring(3)]=arguments[a+1]}else{if(arguments[a].indexOf("DCS.")==0){DCS[arguments[a].substring(4)]=arguments[a+1]}else{if(arguments[a].indexOf("DCSext.")==0){DCSext[arguments[a].substring(7)]=arguments[a+1]}else{if(arguments[a].indexOf("s.")==0){b[arguments[a].substring(2)]=arguments[a+1]}}}}}scRemap(b)}}function scMeta(c){try{var a;scSetInitial(c);if(document.all){a=document.all.tags("meta")}else{if(document.documentElement){a=document.getElementsByTagName("meta")}}if(typeof(a)!="undefined"){for(var b=1;b<=a.length;b++){var e=a.item(b-1);if(e.name){if(e.name.indexOf("WT.")==0){scMapTag(c,e.name.substring(3),e.content)}else{if(e.name.indexOf("DCSext.")==0){scMapTag(c,e.name.substring(7),e.content)}else{if(e.name.indexOf("DCS.")==0){scMapTag(c,e.name.substring(4),e.content)}else{if(e.name.indexOf("s.")==0){scSetTag(c,e.name.substring(2),e.content)}}}}}}}scSetDerived(c);scSaveBasePageName();tagAjaxContent()}catch(d){}}function scSetInitial(a,b){a.server="bank.barclays.co.uk";a.channel="UKRBB";a.cookieDomainPeriods="3";a.currencyCode="GBP";a.visitorNamespace="barclaysuk";a.trackingServer="metrics.barclays.co.uk";a.trackingServerSecure="smetrics.barclays.co.uk";a.useForcedLinkTracking=false;a.linkTrackEvents="None";a.__tx_e="";delete a.__LinkPrefix;if(!b){a.linkTrackVars="None";a.prop1="onl";a.prop2="";a.prop3="";a.prop16="";a.pageName="";scSetTag(a,"events","event20");if(!isLoginPage(a)&&document.title.indexOf("Login")==-1){scSetTag(a,"events","event20")}}else{a.prop17=a.pageName;a.eVar41=a.pageName;a.linkTrackVars="prop17"}a.products="";a.prop20="";a.prop30="";a.__pageName="";if(document.title){a.__LinkName=document.title}else{a.__LinkName="onl"}a.__LinkNameRank=0}function scSetDerived(a,b){scSetdcsuri(a);scSetPurchaseTracking(a);scSetActivityTracking(a);scSetLoginReg(a);scSetProducts(a);scSetView(a);scSetPageName(a,b);scSetDcsvid(a);if(document.title.indexOf("Login")>=0||isLoginPage(a)){scLoginPagesTracking(a)}scSetLoginEvents(a);scSetEvents(a)}function isLoginPage(a){if(a.eVar41!=undefined&&a.eVar41!=""&&a.eVar41.indexOf("logon")>=0){return true}return false}function isHomePage(a){if(a.eVar41!=undefined&&a.eVar41!=""&&a.eVar41.indexOf("HomePage")>=0){return true}return false}function scLoginPagesTracking(a){scSetImpressions(a);scSetErrorMessage(a);scSetLOGIN_METHOD(a);scSetLOGIN_MECHANISM(a)}function scCleanUp(c){if(c.linkTrackVars&&c.linkTrackVars!="None"){var b=c.linkTrackVars.split(",");for(var a in b){c[b[a]]=""}}var b="eVar11,purchaseID,pageType,campaign,state,zip,transactionID".split(",");for(var a in b){c[b[a]]=""}}function scSetValidationErrorMessage(c){var f=getElementsByClassName(document,"error");var e="";for(var b=0,d=f.length;b<d;b++){var a=f[b];var g=a.getAttribute("name");if(g!=undefined){if(e==""){e=g}else{e=e+"|"+g}}}if(e!=""){dcsMultiTrack("DCSext.sprop11",e,"DCSext.seVar11",e,"DCSext.sprop34",getProp34(c));scSetTag(c,"prop32",e);scSetTag(c,"events","event4");fireLoadEvent(c)}}function fireLoadEvent(b){try{b.tl(true,"o",b.__LinkName)}catch(a){}}function scSetHelpCardButtons(a){scSetTag(s,"prop24","HelpCard"+a);fireLoadEvent(s)}function scSetErrorMessage(j){var d="";var h=false;var a=getElementsByClassName(document,"request-error");for(var e=0,b=a.length;e<b;e++){var c=getElementsByClassName(a[e],"item");var f=null;if(c.length>0){f=getTextContent(getElementsByClassName(a[e],"item")[0]).trim().toUpperCase()}else{f=""}if(!h&&(f.indexOf("WE ARE UNABLE TO LOG YOU")>=0||f.indexOf("WE COULDN'T LOG YOU IN")>=0||f.indexOf("LOG")>=0)){h=true}var g=f.substring(0,f.indexOf("-")).trim();if(a.length-1==e){d=d+g}else{d=d+g+"|"}}if(d!=""){var j=s_gi(s_account);scSetTag(j,"prop11",d);if(j.prop34!=undefined&&j.prop34!=""){j.eVar25=j.prop34;scSetTag(j,"eVar25",j.eVar25)}if(h){scSetTag(j,"eVar40",j.prop1+":unsuccessful")}}else{scSetTag(j,"prop11","")}}function scSetErrorServiceMessage(k){var d="";var h=false;var a=getElementsByClassName(document,"request-error");for(var f=0,b=a.length;f<b;f++){var c=getElementsByClassName(a[f],"item");for(var e=0;e<c.length;e++){content=getTextContent(getElementsByClassName(a[f],"item")[e]).trim().toUpperCase();if(content!=undefined){var g=content.substring(0,content.indexOf("-")).trim();if(d==""){d=g}else{d=d+"|"+g}}}}if(d!=""){var k=s_gi(s_account);scSetTag(k,"prop11",d);scSetTag(k,"eVar11",d);if(k.prop34!=undefined&&k.prop34!=""){k.eVar25=k.prop34;scSetTag(k,"eVar25",k.eVar25)}}else{scSetTag(k,"prop11","")}}function scSetImpressions(a){if(a.eVar53!=undefined&&a.eVar53!=""){if(getElementsByClassName(document,"info")!=undefined){var b=getElementsByClassName(document,"info").length;if(b!=0){a.eVar53=b+a.eVar53.substring(1)}}scSetTag(a,"prop53",a.eVar53)}var c=((a.prop24!=undefined)&&(a.prop24.indexOf("change-user")>=0||a.prop24.indexOf("forget-user")>=0));if(c){scSetTag(a,"eVar53","");scSetTag(a,"prop53","")}}function scSetLOGIN_METHOD(a){if(document.getElementById("passcode-radio")!=undefined&&document.getElementById("passcode-radio").checked){scSetTag(a,"eVar37","Passcode")}else{if(document.getElementById("mobileAuthentication")!=undefined&&document.getElementById("mobileAuthentication").checked){scSetTag(a,"eVar37","MobilePinSentry")}else{if(document.getElementById("pinsentry-radio")!=undefined&&document.getElementById("pinsentry-radio").checked){scSetTag(a,"eVar37","PinSentry")}else{if($("#passcode").length&&!$("#pin-authorise1").length){scSetTag(a,"eVar37","Passcode")}else{if($("#pin-authorise1").length&&!$("#passcode").length&&!$("#pin-authorise3").length){scSetTag(a,"eVar37","PinSentry")}else{if($("#pin-authorise3").length&&!$("#passcode").length&&!$("#pin-authorise1").length){scSetTag(a,"eVar37","MobilePinSentry")}}}}}}}function scSetLOGIN_MECHANISM(a){if(document.getElementById("membership-radio")==undefined&&getElementsByClassName(document,"reference-number").length==1&&!isNaN(getTextContent(getElementsByClassName(document,"reference-number")[0]).trim())){scSetTag(a,"eVar36","MembershipID")}else{if(document.getElementById("membership-radio")!=undefined&&document.getElementById("membership-radio").checked){scSetTag(a,"eVar36","MembershipID")}else{if(document.getElementById("card-radio")!=undefined&&document.getElementById("card-radio").checked){scSetTag(a,"eVar36","CardNumber")}else{if(document.getElementById("card-radio")==undefined&&getElementsByClassName(document,"reference-number").length==1&&getTextContent(getElementsByClassName(document,"reference-number")[0]).trim().indexOf("X")>=0&&getTextContent(getElementsByClassName(document,"reference-number")[0]).trim().indexOf("-")==4){scSetTag(a,"eVar36","CardNumber")}else{if(document.getElementById("account-radio")!=undefined&&document.getElementById("account-radio").checked){scSetTag(a,"eVar36","AccountAndSortcode")}else{if(document.getElementById("account-radio")==undefined&&getElementsByClassName(document,"reference-number").length==1&&getTextContent(getElementsByClassName(document,"reference-number")[0]).trim().indexOf("-")>=2){scSetTag(a,"eVar36","AccountAndSortcode")}}}}}}}function scSetLoginEvents(b){if(!b.event15&&b.eVar40!=undefined&&b.eVar40.indexOf("unsuccessful")>=0){scSetTag(b,"events","event15")}if(!b.event14&&isHomePage(b)&&b.eVar9!=undefined&&b.eVar9=="Logged In"){scSetTag(b,"eVar40",b.prop1+":successful");var a=$("[name=firstTimeOLBLogin]");if(a!=undefined){var c=$(a).attr("content");if(c=="true"){scSetTag(b,"events","event24")}}}}function scSetLoginStep2Events(a){var c=((a.prop24!=undefined)&&(a.prop24.indexOf("change-user")>=0||a.prop24.indexOf("forget-user")>=0));var b=((a.prop11==undefined||a.prop11=="")&&(a.prop32==undefined||a.prop32==""));if(!a.event20&&isLoginPage(a)&&(a.eVar9==undefined||a.eVar9!="Logged In")&&!c&&b){scSetTag(a,"events","event20")}}function scSetdcsuri(a){if(!a.prop16){if(window.jQuery){if(typeof(_wt)!=="undefined"&&_wt.dcsurl!==undefined&&_wt.dcsurl!==""){$.url.setUrl(_wt.dcsurl);scSetTag(a,"prop16",$.url.attr("path"))}else{scSetTag(a,"prop16",window.location.pathname)}}}else{scSetTag(a,"prop16",a.prop16)}}function scSetProducts(b){if(b.prop20!=""&&(b.products==null||b.products=="")){var a=";"+b.prop20+";"+b.__tx_u+";"+b.prop30;scSetTag(b,"products",a)}}function scSetView(a){if(a.__tx_e=="v"){scSetTag(a,"events","scView")}}function getProp34(a){if(typeof(WT)!="undefined"&&WT.dcsvid!=undefined){return WT.dcsvid}else{if(window.jQuery){return $("meta[name=WT.dcsvid]").attr("content")}}}function scSetPurchaseTracking(a){if(a.__tx_e=="p"&&a.__seg_1=="ROLB_purchasers"){scSetTag(a,"events","purchase:-"+a.eVar19);scSetTag(a,"purchaseID",a.eVar19);scSetTag(a,"transactionID",a.eVar19);scSetTag(a,"s.eVar21",a.eVar19);a.eVar19=""}}function scSetActivityTracking(a){if(a.__tx_e=="p"&&a.__seg_1!=null&&a.__seg_1!="ROLB_purchasers"){if(a.events!=null&&a.events.indexOf("event17")<0){scSetTag(a,"events","event17")}}}function scSetLoginReg(a){if(a.prop20!=undefined&&a.prop20!=""){if(a.prop20 in {"1-900-2":1,"910-2":1,"1-900-0":1,"910-0":1}){scSetTag(a,"events","event14");scSetTag(a,"eVar9","Logged In")}else{if(a.prop20 in {"1-900-3":1,"910-3":1,"1-900-1":1,"910-1":1}){scSetTag(a,"events","event14");scSetTag(a,"eVar9","First time logged In")}else{if(a.prop20 in {"900-4":1,"910-4":1,"900-5":1,"910-5":1}){scSetTag(a,"events","event13")}}}}}function scSetPageName(n,k){if(k&&document.getElementById("page")!=undefined){var a="";var m=document.getElementById("page");var f=m.getElementsByTagName("h2");var b=false;var l=((n.prop24!=undefined)&&(n.prop24.indexOf("change-user")>=0||n.prop24.indexOf("forget-user")>=0));if(document.getElementById("accordion-bottom")!=undefined){var e=document.getElementById("accordion-bottom").getAttribute("class");if(e.indexOf("active")>=0){b=true}}for(i=0;i<f.length;i++){var h=getTextContent(f[i]).trim();if(h.indexOf("Step 2")>=0&&(b||(n.eVar53!=undefined&&n.eVar53!=""))){a=h}}var j=$("[for=memorableWord1]");if(j!=undefined&&!l){var d=$(j).text();if(d.indexOf("Create a memorable word")>=0){a="Step-2 Request a new passcode";n.pageName=a.replace(/(^|\W+)(\w)/g,function(o,q,p){return p.toUpperCase()});n.pageName=n.prop3+":"+n.pageName;n.prop17=n.pageName;n.eVar41=n.pageName;return}}if((b||(n.eVar53!=undefined&&n.eVar53!=""))&&a!=""&&n.pageName.indexOf("Step2")==-1&&!l){n.pageName=a.replace(/(^|\W+)(\w)/g,function(o,q,p){return p.toUpperCase()});n.pageName=n.prop3+":"+n.pageName}else{if(n.pageName.indexOf("Step2")!=-1&&l){a=document.title;n.pageName=a.replace(/(^|\W+)(\w)/g,function(o,q,p){return p.toUpperCase()});n.pageName=n.prop3+":"+n.pageName}}n.prop17=n.pageName;n.eVar41=n.pageName;return}if(!k){if(n.__pageName&&n.__LinkNameRank==0){n.__LinkName=n.__pageName}var a="";var g=$("h1").html();var l=((n.prop24!=undefined)&&(n.prop24.indexOf("change-user")>=0||n.prop24.indexOf("forget-user")>=0));if(g!=undefined&&g.indexOf("Forgotten membership number")>=0){a="Step 1- Your details"}else{if((n.eVar53!=undefined&&n.eVar53!="")&&!l){var g="";try{g=$("h2").contents()[1].data.trim()}catch(c){a="Step 2 - Confirm your ID"}a=g}else{a=(n.__pageName)?n.__pageName:((n.pageName)?n.pageName:document.title)}}if(n.__pageName=="ViewTransactions"||n.__pageName=="ViewStatementsList"||n.__pageName=="ViewStatementsList"||n.__pageName=="ManageStatements:StatementPreferences"||n.__pageName=="ManageStatements:ConfirmDetails"||n.__pageName=="ManageStatements:Receipt"){n.pageName=n.__pageName}else{n.pageName=a.replace(/(^|\W+)(\w)/g,function(o,q,p){return p.toUpperCase()})}a=n.prop3;n.prop3=a.replace(/(^|\W+)(\w)/g,function(o,q,p){return p.toUpperCase()});n.pageName=n.prop1+":"+n.prop2+":"+n.prop3+":"+n.pageName;n.prop3=n.prop1+":"+n.prop2+":"+n.prop3;n.prop2=n.prop1+":"+n.prop2;n.eVar41=n.pageName}}function isMultipleSavedUsers(c){if(c.eVar53==undefined||c.eVar53==""||!isLoginPage(c)){return false}var b=c.eVar53;var d=b.split("|");var a=d[1];return a>1}function scSetEvents(a){if(a.linkTrackEvents!=null&&a.linkTrackEvents!="None"){a.events=a.linkTrackEvents}else{a.events=""}}function scSetDcsvid(a){if(a.eVar25==undefined||a.eVar25==""){if(typeof(WT)!="undefined"&&WT.dcsvid!=undefined){scSetTag(a,"eVar25",WT.dcsvid)}else{if(window.jQuery){scSetTag(a,"eVar25",$("meta[name=WT.dcsvid]").attr("content"))}}}else{scUpdateLinkTrack(a,"eVar25")}}function scBarclaysCookieConsent(a){var b=document.getElementById("CCPCat3On");if(b!=null&&b.value=="on"){a.cookieLifetime=""}else{a.cookieLifetime="NONE"}}function scMapTag(c,d,b){if(dcs2sc.hasOwnProperty(d)&&b!==null&&b!=""){var a=dcs2sc[d];if(typeof a=="object"){a.setTags(c,d,b)}else{scSetTag(c,a,b)}}}function scSetTag(b,c,a){b[c]=a;scAddTag(b,c,a)}function scAddTag(c,b,a){if(b.indexOf("__")!=0){if(b.indexOf("events")==0){if(c.linkTrackVars==null||c.linkTrackVars=="None"){c.linkTrackVars="events"}else{if(c.linkTrackVars.indexOf("events")<0){c.linkTrackVars+=",events"}}if(c.linkTrackEvents==null||c.linkTrackEvents=="None"){c.linkTrackEvents=a}else{c.linkTrackEvents+=","+a}}else{if(c.linkTrackVars=="None"){c.linkTrackVars=b}else{c.linkTrackVars+=","+b}}}}function scUpdateLinkTrack(a,b){if(a.linkTrackVars==null||a.linkTrackVars=="None"){a.linkTrackVars=fieldname}else{if(a.linkTrackVars.indexOf(b)<0){a.linkTrackVars+=","+b}}}var scBasePageName="",scTakeoverPageName="";function scSaveBasePageName(){scBasePageName=s.pageName;scTakeoverPageName=s.pageName}function scRestoreBasePageName(){s.pageName=scBasePageName;scTakeoverPageName=scBasePageName;s.eVar41=s.pageName}function scSaveTakeoverPageName(){scTakeoverPageName=s.pageName}function scRestoreTakeoverPageName(){s.pageName=scTakeoverPageName;s.eVar41=s.pageName};