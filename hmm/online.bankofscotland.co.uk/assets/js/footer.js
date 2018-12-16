/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function(root,factory){if(typeof exports==="object"&&exports){factory(exports);}else{var mustache={};factory(mustache);if(typeof define==="function"&&define.amd){define(mustache);}else{root.Mustache=mustache;}}}(this,function(mustache){var RegExp_test=RegExp.prototype.test;function testRegExp(re,string){return RegExp_test.call(re,string);}var nonSpaceRe=/\S/;function isWhitespace(string){return !testRegExp(nonSpaceRe,string);}var Object_toString=Object.prototype.toString;var isArray=Array.isArray||function(object){return Object_toString.call(object)==="[object Array]";};function isFunction(object){return typeof object==="function";}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function escapeHtml(string){return String(string).replace(/[&<>"'\/]/g,function(s){return entityMap[s];});}function escapeTags(tags){if(!isArray(tags)||tags.length!==2){throw new Error("Invalid tags: "+tags);}return[new RegExp(escapeRegExp(tags[0])+"\\s*"),new RegExp("\\s*"+escapeRegExp(tags[1]))];}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){tags=tags||mustache.tags;template=template||"";if(typeof tags==="string"){tags=tags.split(spaceRe);}var tagRes=escapeTags(tags);var scanner=new Scanner(template);var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length){delete tokens[spaces.pop()];}}else{spaces=[];}hasTag=false;nonSpace=false;}var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(tagRes[0]);if(value){for(var i=0,len=value.length;i<len;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length);}else{nonSpace=true;}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n"){stripSpace();}}}if(!scanner.scan(tagRes[0])){break;}hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(tagRes[1]);}else{if(type==="{"){value=scanner.scanUntil(new RegExp("\\s*"+escapeRegExp("}"+tags[1])));scanner.scan(curlyRe);scanner.scanUntil(tagRes[1]);type="&";}else{value=scanner.scanUntil(tagRes[1]);}}if(!scanner.scan(tagRes[1])){throw new Error("Unclosed tag at "+scanner.pos);}token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token);}else{if(type==="/"){openSection=sections.pop();if(!openSection){throw new Error('Unopened section "'+value+'" at '+start);}if(openSection[1]!==value){throw new Error('Unclosed section "'+openSection[1]+'" at '+start);}}else{if(type==="name"||type==="{"||type==="&"){nonSpace=true;}else{if(type==="="){tagRes=escapeTags(tags=value.split(spaceRe));}}}}}openSection=sections.pop();if(openSection){throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);}return nestTokens(squashTokens(tokens));}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,len=tokens.length;i<len;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3];}else{squashedTokens.push(token);lastToken=token;}}}return squashedTokens;}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,len=tokens.length;i<len;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token);}}return nestedTokens;}function Scanner(string){this.string=string;this.tail=string;this.pos=0;}Scanner.prototype.eos=function(){return this.tail==="";};Scanner.prototype.scan=function(re){var match=this.tail.match(re);if(match&&match.index===0){var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string;}return"";};Scanner.prototype.scanUntil=function(re){var index=this.tail.search(re),match;switch(index){case -1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index);}this.pos+=match.length;return match;};function Context(view,parentContext){this.view=view==null?{}:view;this.cache={".":this.view};this.parent=parentContext;}Context.prototype.push=function(view){return new Context(view,this);};Context.prototype.lookup=function(name){var value;if(name in this.cache){value=this.cache[name];}else{var context=this;while(context){if(name.indexOf(".")>0){value=context.view;var names=name.split("."),i=0;while(value!=null&&i<names.length){value=value[names[i++]];}}else{value=context.view[name];}if(value!=null){break;}context=context.parent;}this.cache[name]=value;}if(isFunction(value)){value=value.call(this.view);}return value;};function Writer(){this.cache={};}Writer.prototype.clearCache=function(){this.cache={};};Writer.prototype.parse=function(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null){tokens=cache[template]=parseTemplate(template,tags);}return tokens;};Writer.prototype.render=function(template,view,partials){var tokens=this.parse(template);var context=(view instanceof Context)?view:new Context(view);return this.renderTokens(tokens,context,partials,template);};Writer.prototype.renderTokens=function(tokens,context,partials,originalTemplate){var buffer="";var self=this;function subRender(template){return self.render(template,context,partials);}var token,value;for(var i=0,len=tokens.length;i<len;++i){token=tokens[i];switch(token[0]){case"#":value=context.lookup(token[1]);if(!value){continue;}if(isArray(value)){for(var j=0,jlen=value.length;j<jlen;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate);}}else{if(typeof value==="object"||typeof value==="string"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate);}else{if(isFunction(value)){if(typeof originalTemplate!=="string"){throw new Error("Cannot use higher-order sections without the original template");}value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null){buffer+=value;}}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate);}}}break;case"^":value=context.lookup(token[1]);if(!value||(isArray(value)&&value.length===0)){buffer+=this.renderTokens(token[4],context,partials,originalTemplate);}break;case">":if(!partials){continue;}value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null){buffer+=this.renderTokens(this.parse(value),context,partials,value);}break;case"&":value=context.lookup(token[1]);if(value!=null){buffer+=value;}break;case"name":value=context.lookup(token[1]);if(value!=null){buffer+=mustache.escape(value);}break;case"text":buffer+=token[1];break;}}return buffer;};mustache.name="mustache.js";mustache.version="0.8.1";mustache.tags=["{{","}}"];var defaultWriter=new Writer();mustache.clearCache=function(){return defaultWriter.clearCache();};mustache.parse=function(template,tags){return defaultWriter.parse(template,tags);};mustache.render=function(template,view,partials){return defaultWriter.render(template,view,partials);
};mustache.to_html=function(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result);}else{return result;}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;}));var deletedIds=[];var slice=deletedIds.slice;jQuery.extend({proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}if(!jQuery.isFunction(fn)){return undefined;}args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;}});jQuery.parseJSON=function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data+"");}var requireNonComma,depth=null,str=jQuery.trim(data+"");return str&&!jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){if(requireNonComma&&comma){depth=0;}if(depth===0){return token;}requireNonComma=open||comma;depth+=!close-!open;return"";}))?(Function("return "+str))():jQuery.error("Invalid JSON: "+data);};LBG.isAnimating=false;LBG.animationComplete=function(interval){setTimeout(function(){LBG.isAnimating=false;},interval);return;};if(jQuery.fn.on===undefined||!jQuery.fn.on){jQuery.fn.on=function(){return jQuery.fn.live.apply(this,arguments);};}$.fn.redraw=function(){$(this).each(function(){var redraw=this.offsetHeight;});return this;};var ShowMe=new Class({autobind:false},{init:function(){if($(".showMeContainer").length<=0){return;}this.showMeJourneys={};this.currentJourney=null;this.currentStep=null;this.tipIndex=0;this.fadeTime=400;this.showMeCookieKey="LBG.showMe";this.supportedPages={"VPD":{"url":DI.showMe.vpdUrl},"AOV":{"url":DI.showMe.aovUrl}};this.thisPage=$('input[name="show-me-page"]').val();this.journeyFileType=DI.showMe.hasOwnProperty("journeyFileType")?DI.showMe.journeyFileType:"json";this.loading=false;this.backToAccountsMessage=DI.showMe.hasOwnProperty("backToAccountsMessage")?DI.showMe.backToAccountsMessage:"Back to accounts";this.showMeMenuTemplate="#m-860-d-show-me-menu";this.showMeBubbleTemplate="#m-861-d-show-me-bubble";this.showMeErrorTemplate="#m-861-error";this.showMeContainer=".m-show-me-container";this.showMeOverlay=".m-860-overlay";this.showMeMenu=".m-860-d-show-me-menu";this.showMeBubble=".m-861-d-show-me-bubble";this.showMeAnchorLink="showme-anchor-link";this.drawContainer();this.loadMustacheTemplates();this.addTouchLauncher();$(".show-me-trigger").click($.proxy(function(e){e.preventDefault();this.showMenu();},this));$("body").click($.proxy(function(e){if(!$(e.target).hasClass(this.showMeAnchorLink)&&!$(e.target).is(this.showMeContainer)&&!$(e.target).is(".show-me-trigger")&&$(e.target).parents(this.showMeContainer).length<=0){if($(this.showMeContainer).is(":visible")){this.closeShowMe();}}},this));$(window).resize($.proxy(function(){if(this.currentJourney!==null){var step;if(this.currentJourney=="nudge"){step=showMeNudge;}else{step=this.showMeJourneys[this.currentJourney][this.currentStep];}this.setCoords(step);}},this));},drawContainer:function(){var ieClass="";if(LBG.ieVersion>0&&LBG.ieVersion<11){for(var i=11;i>LBG.ieVersion;i--){ieClass+=" lt-ie"+i;}}var container=$('<div class="m-show-me-container"><a href="#" class="close-show-me-button"></a></div>');$(container).appendTo($("body"));if(ieClass){var element=$(container).get(0),wrapper=document.createElement("div");wrapper.appendChild(element.parentNode.replaceChild(wrapper,element));wrapper.className=ieClass;}$('<div class="m-860-overlay"></div>').appendTo($("body"));$(".close-show-me-button").click($.proxy(function(e){e.preventDefault();this.closeShowMe();},this));return this;},loadMustacheTemplates:function(){$.ajax({url:DI.showMe.bubbleTemplateUri,dataType:"html",success:$.proxy(function(data){$(data).appendTo($("body"));this.showMeMenuTemplate=$(this.showMeMenuTemplate).html();this.showMeBubbleTemplate=$(this.showMeBubbleTemplate).html();this.showMeErrorTemplate=$(this.showMeErrorTemplate).html();Mustache.parse(this.showMeMenuTemplate);Mustache.parse(this.showMeBubbleTemplate);Mustache.parse(this.showMeErrorTemplate);if(!this.checkForCookie()){this.checkForNudge();}},this),error:$.proxy(function(){console.log("Could not load show me bubble templates");},this)});return this;},addTouchLauncher:function(){var touchAcordion=$(".showMeMenu ul.quickFAQs");if(touchAcordion.length>0){var touchLauncher='<div class="sp-830-account-helper-show-me"><h3 class="m-fixed-title show-me-link"><span><a href="#" class="show-me-trigger">Show me how to...</a></span></h3></div>';$(touchLauncher).insertAfter($(touchAcordion).parents(".part"));$(touchAcordion).find("li.showMeItem").remove();}return this;},checkForNudge:function(){if(typeof showMeNudge!=="undefined"&&showMeNudge){this.drawNudge(showMeNudge);}return this;},checkForCookie:function(){this.showMeCookie=this.getCookie();if(this.showMeCookie){this.showMeCookie=$.parseJSON(this.showMeCookie);this.loadJourney(this.showMeCookie.Journey,this.showMeCookie.Step);this.removeCookie();return true;}return false;},loadMenu:function(){if(!this.loading){this.loading=true;$.ajax({url:DI.showMe.menuUri,dataType:"json",success:$.proxy(function(menu){if($(this.showMeMenuTemplate).length>0){var showMeMenu=Mustache.render(this.showMeMenuTemplate,menu);$(showMeMenu).appendTo(this.showMeContainer);Autobinder.reBind($(showMeMenu));this.bindMenuItems();this.showMenu();}else{console.log("Menu template has not been loaded");}this.loading=false;},this),error:$.proxy(function(){this.drawError("Could not load show me menu");console.log("Could not load show me menu");this.loading=false;},this)});}return this;},bindMenuItems:function(){$(this.showMeMenu).find("a").click($.proxy(function(e){e.preventDefault();var journey=$(e.target).attr("data-show-me-journey");var pageSupport=$(e.target).attr("data-page-support");if(pageSupport){var supportedPages=pageSupport.split(","),isSupportedPage=false;for(var i=0;i<supportedPages.length;i++){if(this.thisPage==supportedPages[i]){isSupportedPage=true;break;}}}if(isSupportedPage||!pageSupport){if(!this.showMeJourneys.hasOwnProperty(journey)){this.loadJourney(journey);}else{this.startJourney(journey);}}else{this.backToAccounts(journey);}},this));return this;},loadJourney:function(journey,step){if(!this.loading){this.loading=true;console.log("loading... "+journey);$.ajax({url:DI.showMe.journeySrc+journey+""+this.journeyFileType,dataType:"json",success:$.proxy(function(journeyData){this.showMeJourneys[journey]=journeyData;if(typeof step==="undefined"||!step){this.startJourney(journey);}else{this.currentJourney=journey;this.currentStep=step;var nextStep=this.showMeJourneys[this.currentJourney][this.currentStep];this.drawBubble(nextStep);}this.loading=false;},this),error:$.proxy(function(){this.drawError("Could not load journey");console.log("Could not load journey");this.loading=false;},this)});}return this;},getObjectKey:function(key,value){var i=0;for(var step in this.showMeJourneys[this.currentJourney]){if(this.showMeJourneys[this.currentJourney][step][key]==value){return i;}i++;}return null;},skipStep:function(direction){var step=this.showMeJourneys[this.currentJourney][this.currentStep];if(step.hasOwnProperty("Tips")){if(step.Tips[this.tipIndex].hasOwnProperty("skipIf")){if((step.Tips[this.tipIndex].skipIf.exists&&$(step.Tips[this.tipIndex].skipIf.selector).length>0)||(step.Tips[this.tipIndex].skipIf.exists==false&&$(step.Tips[this.tipIndex].skipIf.selector).length<=0)){if(direction=="next"){this.tipIndex++;
}else{if(direction=="prev"){this.tipIndex--;}}}}}else{if(step.hasOwnProperty("skipIf")){if((step.skipIf.exists&&$(step.skipIf.selector).length>0)||(step.skipIf.exists==false&&$(step.skipIf.selector).length<=0)){++this.currentStep;}}}return;},startJourney:function(journey){this.currentJourney=journey;this.currentStep=0;this.skipStep();var step=this.showMeJourneys[this.currentJourney][this.currentStep];this.drawBubble(step);return this;},backToAccounts:function(journey){this.currentJourney=journey;this.currentStep=null;this.setCookie();var step={"Anchor":"backToAccountsAnchor","Pointer":"LeftTop","Content":this.backToAccountsMessage};this.drawBubble(step);return this;},drawBubble:function(step){this.closeOverlay();$(this.showMeContainer).fadeOut(this.fadeTime,$.proxy(function(){var bubbleContent="";if(step.hasOwnProperty("Tips")){bubbleContent=Mustache.render(this.showMeBubbleTemplate,step.Tips[this.tipIndex]);}else{bubbleContent=Mustache.render(this.showMeBubbleTemplate,step);}$(this.showMeMenu).hide();$(this.showMeBubble).remove();$(bubbleContent).appendTo(this.showMeContainer);this.showShowMe(step);if(step.Tips){this.drawTipControls(step);}else{this.setupNextStep(step);}},this));return this;},drawTipControls:function(step){Object.size=function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key)){size++;}}return size;};var tipSize=Object.size(step.Tips);if(tipSize>1){$('<div class="m-861-tip-controls"></div>').appendTo(this.showMeBubble);$('<a href="#" class="tip-control-button prev"></a><a href="#" class="tip-control-button next"></a>').appendTo(".m-861-tip-controls");var segmentedControl=$("<ol/>",{"class":"segmented-control-list"});for(var i=0;i<tipSize;i++){$(segmentedControl).append($("<li/>",{"class":(i==this.tipIndex)?"current":""}));}$(segmentedControl).appendTo(".m-861-tip-controls");if(this.tipIndex==0){$(".tip-control-button.prev").hide();$(".tip-control-button.next").show();}else{if((this.tipIndex+1)==tipSize){$(".tip-control-button.prev").show();$(".tip-control-button.next").hide();if(step.hasOwnProperty("nextAnchor")){$("."+step.Tips[this.tipIndex].Anchor).addClass(this.showMeAnchorLink);$("body").one("click",$.proxy(function(e){if($(e.target).is("."+step.Tips[this.tipIndex].Anchor)){var nextStep=this.showMeJourneys[this.currentJourney][++this.currentStep];this.tipIndex=0;this.drawBubble(nextStep);$(e.target).removeClass(this.showMeAnchorLink);}},this));}}}var direction="";$(".tip-control-button").click($.proxy(function(e){e.preventDefault();if($(e.target).hasClass("next")){this.tipIndex++;direction="next";}else{if($(e.target).hasClass("prev")){this.tipIndex--;direction="prev";}}this.skipStep(direction);this.drawBubble(step);},this));}return this;},drawNudge:function(step){this.currentJourney="nudge";$(this.showMeContainer).fadeOut(this.fadeTime,$.proxy(function(){var nudgeContent=Mustache.render(this.showMeBubbleTemplate,step);$(this.showMeMenu).hide();$(this.showMeBubble).remove();$(nudgeContent).appendTo(this.showMeContainer);this.showShowMe(step);if(step.hasOwnProperty("Journey")){$("body").one("click",$.proxy(function(e){if($(e.target).is("."+step.Anchor)){this.loadJourney(step.Journey,1);}},this));}$(".cta-button").click($.proxy(function(e){e.preventDefault();this.closeShowMe();},this));},this));return this;},setCookie:function(step){var expires=new Date();expires.setTime(expires.getTime()+(1*24*60*60*1000));var nextStep=this.currentStep===null?0:this.currentStep+1;var cookieStr='{"Journey":"'+this.currentJourney+'","Step":'+nextStep+"}";document.cookie=this.showMeCookieKey+"="+cookieStr+";expires="+expires.toUTCString()+"; path=/";return this;},getCookie:function(){var keyValue=document.cookie.match("(^|;) ?"+this.showMeCookieKey+"=([^;]*)(;|$)");return keyValue?keyValue[2]:null;},removeCookie:function(){document.cookie=this.showMeCookieKey+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";return this;},setupNextStep:function(step){$("."+step.Anchor).addClass(this.showMeAnchorLink);if(step.hasOwnProperty("nextAnchor")){$("body").one("click",$.proxy(function(e){if($(e.target).is("."+step.Anchor)){++this.currentStep;this.skipStep();var nextStep=this.showMeJourneys[this.currentJourney][this.currentStep];this.drawBubble(nextStep);$(e.target).removeClass(this.showMeAnchorLink);}},this));}if(step.hasOwnProperty("newPage")||(step.hasOwnProperty("nextAnchor")&&$("."+step.nextAnchor).length<=0&&(!$("."+step.Anchor).hasClass("vpd-ajax-link")||$(".vpd-ajax-container").length<=0||(LBG.ieVersion>0&&LBG.ieVersion<9)))){this.setCookie(step);}return this;},showMenu:function(){$(this.showMeBubble).remove();if($(this.showMeMenu).length<=0){this.loadMenu();}else{$(this.showMeMenu).show();$(this.showMeContainer).css({display:"block",visibility:"hidden"});var menuLength=$(this.showMeMenu).find("ul li").length;var menuCol=2;if(menuLength>8){$(this.showMeMenu).addClass("three-col");menuCol=3;}for(var i=0;i<(menuLength/menuCol);i++){var from=i*menuCol;if(i>0){++from;}var to=from+menuCol;if(i>0){--to;}var maxHeight=0;var items=$(this.showMeMenu).find("ul li:nth-child(n+"+from+"):nth-child(-n+"+(to)+")");items.each(function(){var newHeight=$(this).find("a").outerHeight();if(newHeight>maxHeight){maxHeight=newHeight;}});$("a",items).css({height:maxHeight-32});if(LBG.ieVersion<=0||LBG.ieVersion>8){$("a",items).css({width:items.outerWidth()});}}$(this.showMeContainer).css({display:"none",visibility:"visible"});this.showOverlay();this.showShowMe();}return this;},showShowMe:function(step){if(typeof step==="undefined"||!step){$(this.showMeContainer).css({top:"50%",marginTop:-($(this.showMeContainer).outerHeight()/2),left:"50%",marginLeft:-($(this.showMeContainer).outerWidth()/2),right:"auto"});$(this.showMeContainer).redraw().fadeIn(this.fadeTime);$(".close-show-me-button",this.showMeContainer).focus();}else{var target;if(step.hasOwnProperty("Tips")){target="."+step.Tips[this.tipIndex].Anchor;}else{target="."+step.Anchor;}var iterations=0;var self=this;function positionBubble(){if(iterations>50){self.removeCookie();return;}if($(target).length>0&&!LBG.isAnimating){self.setCoords(step);$(self.showMeContainer).redraw().fadeIn(self.fadeTime);$(".close-show-me-button",this.showMeContainer).focus();if(!self.bubbleOnScreen()){$("html, body").animate({scrollTop:$(self.showMeContainer).offset().top-$(window).height()+$(self.showMeContainer).outerHeight()+40},self.fadeTime);}}else{console.log(target+" has not been loaded yet/still animating...");setTimeout(positionBubble,100);}iterations++;}setTimeout(positionBubble,100);}return this;},setCoords:function(step){var target,pointer;if(step.hasOwnProperty("Tips")){target="."+step.Tips[this.tipIndex].Anchor;pointer=step.Tips[this.tipIndex].Pointer;}else{target="."+step.Anchor;pointer=step.Pointer;}if($(target).parents(".m-account-tile-drawer").length>0){target=".m-account-tile-drawer.open "+target;}var targetOffset=$(target).offset();var topPos=targetOffset.top+$(target).outerHeight(true);var leftPos=targetOffset.left;var rightPos="auto";var isVisible=$(this.showMeContainer).is(":visible");if(!isVisible){$(this.showMeContainer).show().css({"visibility":"hidden"}).redraw();}var bubbleWidth=$(this.showMeBubble).outerWidth(),bubbleHeight=$(this.showMeBubble).outerHeight(),targetWidth=$(target).outerWidth(),targetHeight=$(target).outerHeight(),pointerExcess=20;switch(pointer){case"RightTop":topPos=targetOffset.top+(targetHeight/2)-pointerExcess;leftPos=targetOffset.left-bubbleWidth+10-pointerExcess;break;case"LeftTop":topPos=targetOffset.top+(targetHeight/2)-pointerExcess;
leftPos=targetOffset.left+targetWidth+10;break;case"TopLeft":topPos=targetOffset.top+targetHeight+10;leftPos=targetOffset.left;break;case"TopMiddle":topPos=targetOffset.top+targetHeight+10;leftPos=targetOffset.left+(targetWidth/2)-(bubbleWidth/2);break;case"TopRight":topPos=targetOffset.top+targetHeight+10;leftPos=targetOffset.left+(targetWidth-bubbleWidth);break;case"BottomLeft":topPos=targetOffset.top-bubbleHeight-10;leftPos=targetOffset.left;break;case"BottomMiddle":topPos=targetOffset.top-bubbleHeight-10;leftPos=targetOffset.left+(targetWidth/2)-(bubbleWidth/2);break;case"BottomRight":topPos=targetOffset.top-bubbleHeight-10;leftPos=targetOffset.left+(targetWidth-bubbleWidth);break;}if(!isVisible){$(this.showMeContainer).hide().css({"visibility":"visible"}).redraw();}if(step.hasOwnProperty("topAbsolute")){topPos=step.topAbsolute;}if(step.hasOwnProperty("leftAbsolute")){leftPos=step.leftAbsolute;}if(step.hasOwnProperty("rightAbsolute")){leftPos="auto";rightPos=step.rightAbsolute;}if(step.hasOwnProperty("topOffset")){topPos+=parseInt(step.topOffset);}if(step.hasOwnProperty("leftOffset")){leftPos+=parseInt(step.leftOffset);}if($(target).parents(".m-account-tile-drawer .m-accordion-title").length>0&&pointer=="RightTop"){leftPos="auto";rightPos=$(target).parents(".m-account-tile-drawer .m-accordion-title").outerWidth();}$(this.showMeContainer).css({top:topPos,marginTop:0,left:leftPos,marginLeft:0,right:rightPos});return this;},bubbleOnScreen:function(){var docViewTop=$(window).scrollTop();var docViewBottom=docViewTop+$(window).height();var elemTop=$(this.showMeContainer).offset().top;var elemBottom=elemTop+$(this.showMeContainer).height();return((elemBottom<=docViewBottom)&&(elemTop>=docViewTop));},drawError:function(str){$(this.showMeContainer).append('<div class="m-861-d-show-me-bubble"><p>'+str+"</p></div>");$(this.showMeMenu).hide();this.showOverlay();this.showShowMe();return this;},closeShowMe:function(){this.currentJourney=null;this.currentStep=0;this.tipIndex=0;this.removeCookie();this.closeOverlay();$("."+this.showMeAnchorLink).removeClass(this.showMeAnchorLink);$(this.showMeContainer).fadeOut(this.fadeTime,$.proxy(function(){$(this.showMeMenu).hide();$(this.showMeBubble).remove();},this));return this;},closeOverlay:function(){if(Modernizr.cssanimations){$(this.showMeOverlay).css({opacity:0});}else{$(this.showMeOverlay).animate({opacity:0},this.fadeTime);}setTimeout($.proxy(function(){$(this.showMeOverlay).redraw().css({display:"none"});},this),this.fadeTime);return this;},showOverlay:function(){$(this.showMeOverlay).css({display:"block"}).redraw();if(Modernizr.cssanimations){$(this.showMeOverlay).css({opacity:1});}else{$(this.showMeOverlay).animate({opacity:0.6},this.fadeTime);}return this;}});jQuery(document).ready(function($){var ShowMeInst=new ShowMe();});var MAccordion=new Class(".m-accordion",{init:function(element){var titles=$("> .m-accordion-title, .subHead",element);var contents=$("> .m-accordion-content, .showHideAccordion",element);contents.hide();for(var i=0;i<titles.length;i++){if($(titles[i]).hasClass("m-accordion-opened")){$(titles[i]).next().show();}}titles.click(function(event){event.preventDefault();var index=titles.index(this);if($(this).hasClass("m-accordion-opened")){$(this).removeClass("m-accordion-opened");contents.eq(index).slideUp();element.trigger("accordion-closed");}else{titles.removeClass("m-accordion-opened");$(this).addClass("m-accordion-opened");contents.slideUp();contents.eq(index).slideDown();element.trigger("accordion-open");}});}});var M825DProductsAndServices=new Class(".m-825-d-products-and-services",{init:function(element){var newTag=$("li a .new",element);setTimeout($.proxy(function(){newTag.each(function(){if($(this).css("position")=="absolute"){$(this).css({left:-($(this).outerWidth(true)+18),display:"block"});}});},this),0);}});$.fn.matchHeight=function(outer){var maxHeight=0,$this=$(this);$this.each(function(){var height;if(outer){height=$(this).outerHeight();}else{height=$(this).height();}if(height>maxHeight){maxHeight=height;}});return $this.css("height",maxHeight);};var MHF01BankBar=new Class(".sp-pat-m-hf-01-bank-bar",{init:function(element){var $outer=$("#outer");var bankBar=element;var menuItems=bankBar.find("[data-section]");var nav=$(".m-01-menu-bar");var bankBarContent=$(".sp-pat-m-hf-01-bank-bar-container");var areas=bankBarContent.find("[data-expandable-section]");if(!LBG.isMobile){areas.hide();}menuItems.bind("click",function(e){e.preventDefault();var $this=$(this);var index=menuItems.index($this);var index=$this.attr("data-section");showTab(index);});function equaliseHeights(){$(bankBarContent).show().redraw();$(".m-hf-01-bank-bar-panel").each(function(){$(this).find(".m-01-section").matchHeight(true);});$(bankBarContent).hide();}function showTab(index){var menuItem=$("a[data-section~='"+index+"']");if(menuItem.hasClass("selected")){if(LBG.isMobile&&index=="products-services"){return;}menuItem.removeClass("selected");if(Modernizr.csstransitions){bankBarContent.css("height",0);}else{bankBarContent.animate({height:"0px"},750);}setTimeout(function(){$(bankBarContent).hide();},750);}else{$(bankBarContent).show();if(!LBG.isMobile){areas.hide();var section=$("div[data-expandable-section~='"+index+"']");section.show();if(!section.is("[data-match-heights]")){section.find(".m-01-section").matchHeight(true);section.attr("data-match-heights",true);}}var newHeight=$("div[data-expandable-section~='"+index+"']").outerHeight(true);menuItems.removeClass("selected");menuItem.addClass("selected");newHeight=newHeight;if(LBG.isMobile&&index=="products-services"){areas.removeClass("fade-in");bankBarContent.css({"height":newHeight+"px","transition":"none","-webkit-transition":"none","-moz-transition":"none","-o-transition":"none"});$("div[data-expandable-section~='"+index+"']").css({"opacity":1});$(".layout-content").hide();$(".layout-side").hide();}else{if(Modernizr.csstransitions){bankBarContent.css("height",newHeight+"px");areas.removeClass("fade-in");$("div[data-expandable-section~='"+index+"']").addClass("fade-in");}else{bankBarContent.animate({height:newHeight+"px"},750);areas.removeClass("fade-in");$("div[data-expandable-section~='"+index+"']").addClass("fade-in");$("div[data-expandable-section~='"+index+"']").animate({opacity:1},750);}}}}if(LBG.isMobile){var element=$outer.get(0),wrapper=document.createElement("div");wrapper.appendChild(element.parentNode.replaceChild(wrapper,element));wrapper.className="mobile-wrapper";mobileMenuClick();}function mobileMenuClick(){$(".m-hf-02-customer-bar").addClass("mobile-menu");checkShadowOverlay();$("html").css("overflow-x","hidden");$(".m-01-menu-button, .shadow-overlay").click(function(e){e.preventDefault();var pageheight=document.body.scrollHeight;$(".shadow-overlay").height(pageheight);if($outer.hasClass("container-push")){$outer.removeClass("container-push").height("auto");$(".shadow-overlay").height("auto");$(document.body).trigger("MobileMenuClosed");}else{$outer.addClass("container-push").height(pageheight);$(document.body).trigger("MobileMenuOpened");if($(".m-hf-02-tab.cb-tab-accounts .m-hf-02-your-accounts").length<=0){$(".m-hf-02-tab.cb-tab-accounts .nav-title a").attr("data-wt-disabled","true").trigger("click");}}return false;});}function checkShadowOverlay(){var shawdowOverlay=$(".shadow-overlay").length==1;if(!shawdowOverlay){$outer.append('<div class="shadow-overlay">');}}var ao_add_ons=$(".m-hf-01-account-addons"),ao_product_services=$(".m-hf-01-products-services");
if(LBG.isMobile){$("a",ao_add_ons).bind("click",function(e){e.preventDefault();$(".layout-content").show();$(".layout-side").show();$(this).addClass("selected");$("a",ao_product_services).removeClass("selected");$(".sp-pat-m-hf-01-bank-bar-container").css("height",0);});}}});var MHF0CustomerBar=new Class(".m-hf-02-customer-bar",{init:function(element){if($.browser.ie){document.createElement("header");}var navbar=element,itemContainer=navbar.find(".m-hf-02-nav"),lis=navbar.find("li.m-hf-02-tab"),areas=lis.find(".nav-content"),styleTag,className="m-hf-02-customer-bar-0",itemContainerHeight;itemContainer.find(".sub-nav-toggle").click(function(e){e.preventDefault();var parent=$(this).parents("li");if(parent.hasClass("selected")){parent.removeClass("selected");parent.find(".mobile-sub-nav").slideUp();}else{parent.addClass("selected");parent.find(".mobile-sub-nav").slideDown();}});navbar.addClass(className);lis.find("a").bind("click",function(e){e.preventDefault();if(!lis.find("a").hasClass("loading-content")){var $this=$(this);var li=$this.parents("li");var index=lis.index(li);var url=$this.attr("data-ajax-uri");showTab(index);LBG.isAnimating=true;if(li.hasClass("selected")){loadContent(index,url);}}});function showTab(index){var li=lis.eq(index);var anchor=li.find(".nav-title a"),anchors=lis.find(".nav-title a");if(li.hasClass("selected")){itemContainer.removeClass("open");lis.removeClass("selected");setHeights(false,index);}else{lis.removeClass("selected");itemContainer.addClass("open");li.addClass("selected");setHeights(index);}}function setHeights(index,closingindex){if(typeof LBG.animationComplete!=="undefined"){LBG.animationComplete(750);}itemContainerHeight=itemContainerHeight||itemContainer.height();if(index===false||!lis.eq(index).hasClass("selected")){if(Modernizr.cssanimations){$(styleTag).remove();}else{navbar.animate({height:60},750,function(){areas.eq(closingindex).css("visibility","hidden");});}return;}var height=areas.eq(index).height();height+=itemContainerHeight;if(Modernizr.cssanimations){var styleTag2=$("<style>"+".m-hf-02-customer-bar-0 .m-hf-02-nav {"+"height:"+height+"px !important"+"}"+"</style>");styleTag2.appendTo("body");if(styleTag){$(styleTag).remove();}styleTag=styleTag2;}else{navbar.animate({height:height},750);areas.css("visibility","hidden");areas.eq(index).css("visibility","visible");}}function setMaxItems(area,max,index){var viewMoreEl=$(".mobile-view-more");var elements=area.find("ul").eq(0).children("li");if(elements.length<=max){return;}function truncateAccounts(){for(var i=max;i<elements.length;i++){elements.eq(i).addClass("hide-mobile");}viewMoreEl.removeClass("hide-mobile");}truncateAccounts();$(document.body).bind("MobileMenuClosed",function(){truncateAccounts();});}function loadContent(index,url){var li=lis.eq(index);var area=areas.eq(index);if(area.data("ajax-loaded")){return;}if(Modernizr.cssanimations){area.addClass("loading");navbar.addClass("loading");area.removeClass("fade-out").addClass("fade-in");}else{navbar.addClass("loading");navbar.animate({height:260},750);}li.find("a").addClass("loading-content");$.ajax({url:url,dataType:"html",cache:false,success:function(response){li.find("a").removeClass("loading-content");if(response!==""){area.html(response);if(area.attr("data-max-items")){setMaxItems(area,area.attr("data-max-items"),index);}var coserviced=$(".m-hf-02-your-accounts .coserviced",area);var accounts=$(".m-hf-02-your-accounts li",area);var rowItems=4;for(var i=0,j=accounts.length;i<j;i+=rowItems){$row=accounts.slice(i,i+rowItems);$row.find(">div>div").matchHeight(true);}var placeholders=$(".m-hf-02-your-accounts .placeholder",area);if(placeholders){var placeholder_height=$(placeholders[0]).parent("li").prev().find("> div").outerHeight(true);placeholders.height(placeholder_height);}var view_all=$(".m-hf-02-your-accounts .view-all",area);if(view_all){var view_all_height=$(view_all).parent("li").prev().find("> div").outerHeight(true);view_all.height(view_all_height);var view_all_link=view_all.find("> div");view_all_link.css({paddingTop:(view_all_height-view_all_link.outerHeight())/2});}if(area.find("> div").hasClass("error")){area.addClass("error");lis.eq(index).addClass("error");}else{area.removeClass("error");lis.eq(index).removeClass("error");}if(area.find("[data-wt-ac]").length>0){Autobinder.bind();}if((!LBG.isMobile&&!$.browser.safari)||$.fn.jquery=="1.3.2"){area.css("height",area.height());}area.data("ajax-loaded",true);area.removeClass("loading");navbar.removeClass("loading");area.addClass("content-loaded");setHeights(index);}},error:function(){area.html(DI.lang.customerBar.ajaxError);area.addClass("error");area.removeClass("loading").removeClass("fade-in");area.addClass("content-loaded");navbar.removeClass("loading");li.addClass("error");setHeights(index);li.find("a").removeClass("loading-content");}});}}});