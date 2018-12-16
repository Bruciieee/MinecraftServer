var LBG = window.LBG || {};
if (typeof DI !== "undefined" && DI.themePath) {
    document.write('<link href="yeah-js.css" media="screen" type="text/css" rel="stylesheet" />');
}
LBG.common.frameKill();
LBG.retroFit = {
    browserIdent: false,
    wrappersDefined: false,
    page: null,
    outer: null,
    primarySubPanelSelector: ".primary .subPanel",
    primarySubPanelWrappers: '<div class="subPanel-t"><div class="subPanel-r"><div class="subPanel-b"><div class="subPanel-l"><div class="subPanel-tl"><div class="subPanel-tr"><div class="subPanel-br"><div class="subPanel-bl"></div></div></div></div></div></div></div></div>',
    secondarySubPanelSelector: ".secondary .subPanel",
    secondaryAccordionSelector: ".secondary .accordion .part",
    primaryAccordionSelector: ".primary .accordion .part",
    genericCornersTop: '<div class="partTop"><div class="tl"></div><div class="tr"></div></div>',
    genericCornersBottom: '<div class="partBottom"><div class="bl"></div><div class="br"></div></div>',
    pullOutSelector: ".pullOut",
    pullOutCornersHTML: '<div class="pullOut-tl"></div><div class="pullOut-tr"></div><div class="pullOut-bl"></div><div class="pullOut-br"></div>',
    outerSelector: ".outer",
    pageSelector: "#page",
    outerMinWidth: 950,
    pageMinWidth: 950,
    maxWidth: 1206,
    init: function() {
        this.browserIdent = LBG.browserIdent.sniff();
        if ($.browser.msie && $.browser.version > 8) {
            return;
        }
        if (this.browserIdent !== false && this.browserIdent !== "ie6" && this.browserIdent !== "iPad") {
            if (this.browserIdent === "ff2" || this.browserIdent === "ie") {
                $(this.primarySubPanelSelector).wrap(this.primarySubPanelWrappers);
                $(this.secondarySubPanelSelector).prepend(this.genericCornersTop);
                $(this.secondarySubPanelSelector).append(this.genericCornersBottom);
                $(this.secondaryAccordionSelector).prepend(this.genericCornersTop);
                $(this.secondaryAccordionSelector).append(this.genericCornersBottom);
                $(this.primaryAccordionSelector).prepend(this.genericCornersTop);
                $(this.primaryAccordionSelector).append(this.genericCornersBottom);
                $(this.pullOutSelector).append(this.pullOutCornersHTML);
            }
        }
        if (this.browserIdent === "ie6") {
            $(".colLayout").each(function() {
                var colPart = $(".colPart", this);
                if (colPart.length > 1) {
                    colPart.filter(":last").addClass("last");
                }
            });
            $(".smartRewards-optin .colLayout.cols2").find(".colSmartRewards:last").addClass("last");
            $(".smartRewards-optin .colLayout.cols3").find(".colSmartRewards:last").addClass("last");
            $("#footer li").filter(":first").addClass("first");
            var subPanel = $(this.secondarySubPanelSelector);
            if (subPanel.length > 0) {
                $(subPanel).prepend(this.genericCornersTop);
                $(subPanel).append(this.genericCornersBottom);
            }
        }
    },
    getWrappers: function() {
        LBG.retroFit.page = $(LBG.retroFit.pageSelector);
        LBG.retroFit.outer = $(LBG.retroFit.outerSelector);
        LBG.retroFit.wrappersDefined = true;
    },
    setPageWidth: function() {
        if (!LBG.retroFit.wrappersDefined) {
            LBG.retroFit.getWrappers();
        }
        var docWidth = $(window).width();
        if (docWidth < LBG.retroFit.outerMinWidth) {
            $(LBG.retroFit.outer).width(LBG.retroFit.outerMinWidth + "px");
        } else {
            if (docWidth > LBG.retroFit.maxWidth) {
                $(LBG.retroFit.outer).width(LBG.retroFit.maxWidth + "px");
            } else {
                $(LBG.retroFit.outer).width("auto");
            }
        }
        if (docWidth < LBG.retroFit.pageMinWidth) {
            $(LBG.retroFit.page).width(LBG.retroFit.pageMinWidth + "px");
        } else {
            if (docWidth > LBG.retroFit.maxWidth) {
                $(LBG.retroFit.page).width(LBG.retroFit.maxWidth + "px");
            } else {
                $(LBG.retroFit.page).width("auto");
            }
        }
    }
};
LBG.functions = {
    init: function() {
        LBG.retroFit.init();
        LBG.termsConditions.init();
    }
};
LBG.termsConditions = {
    init: function() {
        $(".tandcCheck").attr("style", "display:block");
        $("p.JSenabled").attr("style", "display:block");
        $("p.JSdisabled").attr("style", "display:none");
        $(".tandcCheck #tmpLegals").attr("checked", false);
        $("ul.tandcActions .primaryAction a").addClass("disabledState");
        $("ul.tandcActions").addClass("off");
        $("ul.tandcActions .primaryAction a").click(function() {
            if ($("ul.tandcActions").hasClass("off")) {
                return false;
            }
        });
        $(".tandcCheck #tmpLegals").click(function() {
            if ($(".tandcCheck #tmpLegals").is(":checked")) {
                $("ul.tandcActions").removeClass("off").addClass("on");
                $("ul.tandcActions .primaryAction a").removeClass("disabledState").addClass("continueState");
            } else {
                $("ul.tandcActions").removeClass("on").addClass("off");
                $("ul.tandcActions .primaryAction a").removeClass("continueState").addClass("disabledState");
            }
        });
    }
};