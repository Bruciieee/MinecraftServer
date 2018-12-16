var LBG = window.LBG || {};
LBG.browserIdent = {
    browserIdent: false,
    browserVersions: {
        ff2: "1.8",
        ff3: "1.9"
    },
    sniff: function() {
        if ($.browser.mozilla) {
            var currentBrowser = LBG.common.parseVersionString($.browser
                .version);
            var ff2 = LBG.common.parseVersionString(this.browserVersions
                .ff2);
            var ff3 = LBG.common.parseVersionString(this.browserVersions
                .ff3);
            if (currentBrowser.major === ff2.major && currentBrowser.minor <=
                ff2.minor) {
                this.browserIdent = "ff2";
            } else {
                if (currentBrowser.major === ff3.major &&
                    currentBrowser.minor >= ff3.minor && currentBrowser
                    .patch <= ff3.patch) {
                    this.browserIdent = "ff3";
                }
            }
        } else {
            if ($.browser.msie) {
                this.browserIdent = ($.browser.version > 6) ? "ie" :
                    "ie6";
            } else {
                if (navigator.platform.indexOf("iPad") !== -1) {
                    this.browserIdent = "iPad";
                } else {
                    if (navigator.platform.indexOf("iPhone") !== -1) {
                        this.browserIdent = "iPhone";
                    }
                }
            }
        }
        return this.browserIdent;
    }
};
LBG.accordion = {
    currentTriggerClass: ".current",
    panePrefix: "accPane",
    paneCount: 1,
    linkAddedClass: "linkPointer hasLink",
    partSelector: ".part",
    selectedClass: "selected",
    triggerTitle: DI.lang.accordion.trigger,
    isChrome: /chrome/.test(navigator.userAgent.toLowerCase()),
    build: function(accordionSelector, triggerSelector) {
        var $accordion = $(accordionSelector);
        if (!$accordion.length) {
            return false;
        }
        var $trigger = $accordion.find(triggerSelector);
        if (!$trigger.length) {
            return false;
        }
        var container = $(".secondary:eq(0)")[0];
        $trigger.addClass(LBG.accordion.linkAddedClass);
        if (LBG.accordion.isChrome === false && $.browser.safari ===
            true && (navigator.appVersion.indexOf("3.") !== -1)) {
            $trigger.wrapInner('<a href="#" />').find("a").keydown(
                function(e) {
                    if (e.keyCode === 13 || e.keyCode === 32) {
                        $(this).parent().click();
                    }
                });
        }
        LBG.accordion.tabIndexFocusFix($trigger);
        $accordion.accordion({
            header: triggerSelector,
            active: LBG.accordion.currentTriggerClass,
            collapsible: true,
            autoHeight: false,
            clearStyle: true,
            changestart: function(event, ui) {
                if (ui.newHeader) {
                    ui.newHeader.parent(LBG.accordion.partSelector)
                        .toggleClass(LBG.accordion.selectedClass);
                }
                LBG.accordion.tabIndexFocusFix($trigger);
            },
            change: function(event, ui) {
                if (jQuery.browser.msie && jQuery.browser.version <
                    8) {
                    LBG.common.explorerRedrawFix(container,
                        true);
                }
                if (ui.oldHeader) {
                    ui.oldHeader.parent(LBG.accordion.partSelector)
                        .toggleClass(LBG.accordion.selectedClass);
                    $trigger.attr("tabIndex", "-1").attr(
                        "tabIndex", "0");
                }
                LBG.accordion.tabIndexFocusFix($trigger);
            }
        });
        $trigger.attr("tabIndex", "-1").attr("tabIndex", "0");
        $trigger.each(function() {
            this.title = $(this).text() + ": " + LBG.accordion.triggerTitle;
        });
    },
    addOpenClass: function() {
        $(".accordion .current").parent().addClass("selected");
    },
    tabIndexFocusFix: function($trigger) {
        if ($.browser.safari === true || LBG.accordion.isChrome ===
            true && $.browser.version <= 533) {
            $trigger.parents(".part").each(function() {
                var i = ($(this).hasClass(".selected") === true) ?
                    0 : -1;
                $(this).find("a, .qfaqTrigger").attr("tabIndex",
                    i);
            });
            $trigger.find("a:first").attr("tabIndex", 0).bind("blur",
                function() {
                    var anchor = this;
                    var timer = window.setTimeout(function() {
                        $(anchor).css("overflow", "hidden");
                        window.clearTimeout(timer);
                    }, 10);
                });
        }
    },
    init: function() {
        this.build("ul.quickFAQs", "h3.qfaqTrigger");
        this.build("div.accordion", ".trigger");
        this.build("div.accordionLight", "h2.trigger");
        this.build("ul.showHideAccordion", ".trigger");
        this.build("div.tillReceipt.expandable", "h3.trigger");
        this.build(".testingAccord", ".testingTrigger");
    }
};
LBG.quickTransfer = (function() {
    var TRANSFER_SELECTOR = ".quickTransfer",
        CLOSED_TEXT = DI.lang.quickTransfer.triggerClosedText,
        OPEN_TEXT = DI.lang.quickTransfer.triggerOpenText,
        HEADING_TEXT = DI.lang.quickTransfer.defaultHeadingText,
        TRANSFER_ID = DI.lang.quickTransfer.triggerID,
        OPEN_CLASS = "close";

    function _processQuickTransferModule() {
        var $transfer = $(this),
            $trigger = $(
                '<p class="transferTrigger"><a href="#" id="' +
                TRANSFER_ID + '">' + CLOSED_TEXT + "</a></p>"),
            $parent = $transfer.parent(),
            $anchor = $trigger.find("a:eq(0)");
        $parent.before($trigger);
        $trigger.find("a:eq(0)").click(function() {
            $parent.slideToggle(400, function() {
                if ($anchor.html() === CLOSED_TEXT) {
                    $anchor.html(OPEN_TEXT);
                } else {
                    $anchor.html(CLOSED_TEXT);
                }
                $anchor.toggleClass(OPEN_CLASS);
                $parent.find(".success").removeClass(
                    "success").html(
                    HEADING_TEXT);
                $(this).stop();
            });
            return false;
        });
        if (!$transfer.hasClass("open")) {
            $parent.hide();
        } else {
            var triggerLink = $("p.transferTrigger").children("a");
            triggerLink.html(OPEN_TEXT);
            triggerLink.toggleClass(OPEN_CLASS);
            if ($transfer.find(".success").length > 0) {
                LBG.common.effects.highlightElement(
                    ".transferSlideOuter");
            }
        }
    }
    return {
        init: function() {
            $(TRANSFER_SELECTOR).each(_processQuickTransferModule);
        }
    };
})();
LBG.iban = {
    triggerSelector: ".viewIban > a",
    statementWrapperSelector: ".ibanPlaceholder",
    slideHTML: '<div class="ibanSlide"></div>',
    triggerOpenText: DI.lang.iban.triggerOpenText,
    triggerOpenClass: "open",
    loadMsg: '<span class="loading">&nbsp;</span>',
    loadErrorMsg: DI.lang.iban.loadErrorMsgStub,
    init: function() {
        $(this.triggerSelector).each(function(i, trigger) {
            var statementItem = $(trigger).parents()[2],
                requested = false;
            trigger.wrapper = $(statementItem).find(LBG.iban.statementWrapperSelector)[
                0];
            trigger.slide = $(LBG.iban.slideHTML);
            $(trigger.wrapper).append(trigger.slide);
            trigger.slide.hide();
            trigger.slide.loaded = false;
            trigger.savedText = $(trigger).text();
            $(trigger).click(function() {
                if (trigger.slide.is(":animated")) {
                    return false;
                }
                if (!this.slide.loaded && requested ===
                    false) {
                    requested = true;
                    $(this).parent().append(LBG.iban.loadMsg);
                    $.ajax({
                        url: LBG.common.ajax.tagUrl(
                            LBG.common.ajax
                            .getAjaxURI(
                                trigger)),
                        success: function(
                            response) {
                            trigger.slide.html(
                                response
                            );
                            trigger.slide.loaded =
                                true;
                            $(trigger).parent()
                                .find(
                                    "span")
                                .not(
                                    "span.cxtHelp"
                                ).remove();
                            LBG.ajax.pageUpdated();
                            if (typeof LBG.smartRewards !==
                                "undefined" &&
                                typeof LBG.smartRewards
                                .statementCashbackOffers
                                .init ===
                                "function") {
                                LBG.smartRewards
                                    .statementCashbackOffers
                                    .init($(
                                        trigger
                                        .wrapper
                                    ));
                            }
                            if (typeof dcsMultiTrack !=
                                "undefined"
                            ) {
                                dcsMultiTrack
                                    (
                                        "WT.ac",
                                        "pages/p27_00_account_statement/properties.p2700lnk507a,pages/p27_00_account_statement/properties.p2700lnk510a,Show IBAN / BIC,Hide IBAN/BIC"
                                    );
                            }
                            trigger.slide.slideToggle(
                                500,
                                function() {
                                    $(
                                            trigger
                                        )
                                        .toggleClass(
                                            LBG
                                            .iban
                                            .triggerOpenClass
                                        );
                                    if (
                                        $(
                                            trigger
                                        )
                                        .text() ===
                                        trigger
                                        .savedText
                                    ) {
                                        $
                                            (
                                                trigger
                                            )
                                            .text(
                                                LBG
                                                .iban
                                                .triggerOpenText
                                            );
                                        $
                                            (
                                                trigger
                                                .slide
                                            )
                                            .find(
                                                "li.close a"
                                            )
                                            .text(
                                                LBG
                                                .iban
                                                .triggerOpenText
                                            );
                                    } else {
                                        $
                                            (
                                                trigger
                                            )
                                            .text(
                                                trigger
                                                .savedText
                                            );
                                    }
                                    $(
                                            this
                                        )
                                        .stop();
                                    return
                                        false;
                                });
                            $(trigger.slide)
                                .find(
                                    "li.close a"
                                ).click(
                                    function() {
                                        trigger
                                            .slide
                                            .loaded =
                                            false;
                                        trigger
                                            .slide
                                            .slideToggle(
                                                500,
                                                function() {
                                                    $
                                                        (
                                                            trigger
                                                        )
                                                        .toggleClass(
                                                            LBG
                                                            .iban
                                                            .triggerOpenClass
                                                        );
                                                    if (
                                                        $(
                                                            trigger
                                                        )
                                                        .text() ===
                                                        trigger
                                                        .savedText
                                                    ) {
                                                        $
                                                            (
                                                                trigger
                                                            )
                                                            .text(
                                                                LBG
                                                                .iban
                                                                .triggerOpenText
                                                            );
                                                    } else {
                                                        $
                                                            (
                                                                trigger
                                                            )
                                                            .text(
                                                                trigger
                                                                .savedText
                                                            );
                                                    }
                                                    $
                                                        (
                                                            this
                                                        )
                                                        .stop();
                                                }
                                            );
                                        return
                                            false;
                                    });
                        },
                        error: function() {
                            $.ajax({
                                url: LBG
                                    .iban
                                    .loadErrorMsg,
                                dataType: "html",
                                success: function(
                                    data
                                ) {
                                    trigger
                                        .slide
                                        .html(
                                            data
                                        );
                                }
                            });
                            $(trigger).parent()
                                .find(
                                    "span")
                                .remove();
                            trigger.slide.slideToggle(
                                500,
                                function() {
                                    $(
                                            trigger
                                        )
                                        .toggleClass(
                                            LBG
                                            .iban
                                            .triggerOpenClass
                                        );
                                    if (
                                        $(
                                            trigger
                                        )
                                        .text() ===
                                        trigger
                                        .savedText
                                    ) {
                                        $
                                            (
                                                trigger
                                            )
                                            .text(
                                                LBG
                                                .iban
                                                .triggerOpenText
                                            );
                                    } else {
                                        $
                                            (
                                                trigger
                                            )
                                            .text(
                                                trigger
                                                .savedText
                                            );
                                    }
                                    $(
                                            this
                                        )
                                        .stop();
                                    return
                                        false;
                                });
                        }
                    });
                } else {
                    trigger.slide.slideToggle(500,
                        function() {
                            trigger.slide.loaded =
                                false;
                            $(trigger).toggleClass(
                                LBG.iban.triggerOpenClass
                            );
                            if ($(trigger).text() ===
                                trigger.savedText) {
                                $(trigger).text(LBG
                                    .iban.triggerOpenText
                                );
                            } else {
                                $(trigger).text(
                                    trigger.savedText
                                );
                            }
                            $(this).stop();
                            return false;
                        });
                }
                return false;
            });
        });
    }
};
LBG.miniStatement = {
    triggerSelector: ".viewMiniStatement a",
    statementWrapperSelector: ".miniStatementPlaceholder",
    slideHTML: '<div class="miniStatementSlide"></div>',
    triggerOpenText: DI.lang.miniStatement.triggerOpenText,
    triggerOpenClass: "open",
    loadMsg: '<span class="loading">&nbsp;</span>',
    loadErrorMsg: DI.lang.miniStatement.loadErrorMsgStub,
    init: function() {
        $(this.triggerSelector).each(function(i, trigger) {
            var statementItem = $(trigger).parents()[2],
                requested = false;
            trigger.wrapper = $(statementItem).find(LBG.miniStatement
                .statementWrapperSelector)[0];
            trigger.slide = $(LBG.miniStatement.slideHTML);
            $(trigger.wrapper).append(trigger.slide);
            trigger.slide.hide();
            trigger.slide.loaded = false;
            trigger.savedText = $(trigger).text();
            $(trigger).click(function() {
                if (trigger.slide.is(":animated")) {
                    return false;
                }
                if (!this.slide.loaded && requested ===
                    false) {
                    requested = true;
                    $(this).parent().append(LBG.miniStatement
                        .loadMsg);
                    $.ajax({
                        url: LBG.common.ajax.tagUrl(
                            LBG.common.ajax
                            .getAjaxURI(
                                trigger)),
                        success: function(
                            response) {
                            trigger.slide.html(
                                response
                            );
                            trigger.slide.loaded =
                                true;
                            $(trigger).parent()
                                .find(
                                    "span")
                                .remove();
                            LBG.ajax.pageUpdated();
                            if (typeof LBG.smartRewards !==
                                "undefined" &&
                                typeof LBG.smartRewards
                                .statementCashbackOffers
                                .init ===
                                "function") {
                                LBG.smartRewards
                                    .statementCashbackOffers
                                    .init($(
                                        trigger
                                        .wrapper
                                    ));
                            }
                            trigger.slide.slideToggle(
                                500,
                                function() {
                                    $(
                                            trigger
                                        )
                                        .toggleClass(
                                            LBG
                                            .miniStatement
                                            .triggerOpenClass
                                        );
                                    if (
                                        $(
                                            trigger
                                        )
                                        .text() ===
                                        trigger
                                        .savedText
                                    ) {
                                        $
                                            (
                                                trigger
                                            )
                                            .text(
                                                LBG
                                                .miniStatement
                                                .triggerOpenText
                                            );
                                        $
                                            (
                                                trigger
                                                .slide
                                            )
                                            .find(
                                                "li.close a"
                                            )
                                            .text(
                                                LBG
                                                .miniStatement
                                                .triggerOpenText
                                            );
                                    } else {
                                        $
                                            (
                                                trigger
                                            )
                                            .text(
                                                trigger
                                                .savedText
                                            );
                                    }
                                    $(
                                            this
                                        )
                                        .stop();
                                    return
                                        false;
                                });
                            $(trigger.slide)
                                .find(
                                    "li.close a"
                                ).click(
                                    function() {
                                        trigger
                                            .slide
                                            .loaded =
                                            false;
                                        trigger
                                            .slide
                                            .slideToggle(
                                                500,
                                                function() {
                                                    $
                                                        (
                                                            trigger
                                                        )
                                                        .toggleClass(
                                                            LBG
                                                            .miniStatement
                                                            .triggerOpenClass
                                                        );
                                                    if (
                                                        $(
                                                            trigger
                                                        )
                                                        .text() ===
                                                        trigger
                                                        .savedText
                                                    ) {
                                                        $
                                                            (
                                                                trigger
                                                            )
                                                            .text(
                                                                LBG
                                                                .miniStatement
                                                                .triggerOpenText
                                                            );
                                                    } else {
                                                        $
                                                            (
                                                                trigger
                                                            )
                                                            .text(
                                                                trigger
                                                                .savedText
                                                            );
                                                    }
                                                    $
                                                        (
                                                            this
                                                        )
                                                        .stop();
                                                }
                                            );
                                        return
                                            false;
                                    });
                        },
                        error: function() {
                            $.ajax({
                                url: LBG
                                    .miniStatement
                                    .loadErrorMsg,
                                dataType: "html",
                                success: function(
                                    data
                                ) {
                                    trigger
                                        .slide
                                        .html(
                                            data
                                        );
                                }
                            });
                            $(trigger).parent()
                                .find(
                                    "span")
                                .remove();
                            trigger.slide.slideToggle(
                                500,
                                function() {
                                    $(
                                            trigger
                                        )
                                        .toggleClass(
                                            LBG
                                            .miniStatement
                                            .triggerOpenClass
                                        );
                                    if (
                                        $(
                                            trigger
                                        )
                                        .text() ===
                                        trigger
                                        .savedText
                                    ) {
                                        $
                                            (
                                                trigger
                                            )
                                            .text(
                                                LBG
                                                .miniStatement
                                                .triggerOpenText
                                            );
                                    } else {
                                        $
                                            (
                                                trigger
                                            )
                                            .text(
                                                trigger
                                                .savedText
                                            );
                                    }
                                    $(
                                            this
                                        )
                                        .stop();
                                    return
                                        false;
                                });
                        }
                    });
                } else {
                    trigger.slide.slideToggle(500,
                        function() {
                            trigger.slide.loaded =
                                false;
                            $(trigger).toggleClass(
                                LBG.miniStatement
                                .triggerOpenClass
                            );
                            if ($(trigger).text() ===
                                trigger.savedText) {
                                $(trigger).text(LBG
                                    .miniStatement
                                    .triggerOpenText
                                );
                            } else {
                                $(trigger).text(
                                    trigger.savedText
                                );
                            }
                            $(this).stop();
                            return false;
                        });
                }
                return false;
            });
        });
    }
};
LBG.scottishWidows = {
    triggerSelector: ".viewScottishWidowsAccounts a",
    listWrapperSelector: ".scottishWidowsAccountsPlaceholder",
    slideHTML: '<div class="scottishWidowsAccountsSlide"></div>',
    triggerOpenClass: "open",
    loadMsg: '<span class="loading">&nbsp;</span>',
    loadErrorMsg: '<p class="asyncError">' + DI.lang.scottishWidows.loadErrorMsgText +
        "</p>",
    init: function() {
        $(this.triggerSelector).each(function(i, trigger) {
            var accountListItem = $(trigger).parents()[2],
                requested = false;
            trigger.wrapper = $(accountListItem).find(LBG.scottishWidows
                .listWrapperSelector)[0];
            trigger.slide = $(LBG.scottishWidows.slideHTML);
            $(trigger.wrapper).append(trigger.slide);
            trigger.slide.hide();
            trigger.slide.loaded = false;
            $(trigger).click(function() {
                if (!this.slide.loaded && requested ===
                    false) {
                    requested = true;
                    $(this).parent().append(LBG.scottishWidows
                        .loadMsg);
                    $.ajax({
                        url: LBG.common.ajax.tagUrl(
                            LBG.common.ajax
                            .getAjaxURI(
                                trigger)),
                        success: function(
                            response) {
                            trigger.slide.html(
                                response
                            );
                            trigger.slide.loaded =
                                true;
                            $(trigger).parent()
                                .find(
                                    "span")
                                .remove();
                            LBG.ajax.pageUpdated();
                            trigger.slide.slideToggle(
                                500,
                                function() {
                                    $(
                                            trigger
                                        )
                                        .toggleClass(
                                            LBG
                                            .scottishWidows
                                            .triggerOpenClass
                                        );
                                    $(
                                            this
                                        )
                                        .stop();
                                    return
                                        false;
                                });
                        },
                        error: function() {
                            trigger.slide.html(
                                LBG.scottishWidows
                                .loadErrorMsg
                            );
                            trigger.slide.loaded =
                                true;
                            $(trigger).parent()
                                .find(
                                    "span")
                                .remove();
                            trigger.slide.slideToggle(
                                500,
                                function() {
                                    $(
                                            trigger
                                        )
                                        .toggleClass(
                                            LBG
                                            .scottishWidows
                                            .triggerOpenClass
                                        );
                                    $(
                                            this
                                        )
                                        .stop();
                                    return
                                        false;
                                });
                        }
                    });
                } else {
                    if (!trigger.slide.is(":animated")) {
                        trigger.slide.slideToggle(500,
                            function() {
                                trigger.slide.loaded =
                                    false;
                                $(trigger).toggleClass(
                                    LBG.scottishWidows
                                    .triggerOpenClass
                                );
                                $(this).stop();
                                return false;
                            });
                    }
                }
                return false;
            });
        });
    }
};
LBG.showHide = {
    toggleSelector: ".showHide",
    toggleSelectorBind: ".showHideBind",
    triggerSelector: ".trigger",
    triggerContent: '<span class="toggle"></span>',
    paneSelector: "div.pane",
    tempIDPrefix: "show",
    closedClass: "closed",
    showSingle: false,
    triggerTitle: DI.lang.showHide.trigger,
    formFixClass: "safariFormFix",
    hasNestedClass: "hasNested",
    updateTriggerTitle: function($trigger) {
        $trigger.each(function() {
            this.title = $.trim($(this).text()) + ": " + $.trim(
                LBG.showHide.triggerTitle);
        });
    },
    init: function() {
        $(this.toggleSelector).find(this.triggerSelector).each(function(
            i, trigger) {
            var thePane = $(trigger).siblings(LBG.showHide.paneSelector)[
                0] || null;
            var $pane = $(thePane);
            var meta = $(trigger).parents(LBG.showHide.toggleSelector)
                .metadata();
            var allowMultipleAjaxRequests = meta && meta.allowMultipleAjaxRequests ?
                true : false;
            var triggerID = "";
            if (meta && meta.target) {
                thePane = $(meta.target)[0];
            }
            if (!thePane) {
                return;
            }
            var tmpID = LBG.showHide.tempIDPrefix + i;
            if (thePane.id) {
                tmpID = thePane.id;
            } else {
                thePane.id = tmpID;
            }
            $(trigger).append(LBG.showHide.triggerContent).data(
                "thePaneId", thePane.id);
            if ($(trigger)[0].tagName.toLowerCase() !== "a" &&
                !meta.triggerNoLink) {
                $(trigger).wrapInner('<a href="#' + tmpID +
                    '" class="triggerChild"></a>');
                if (trigger.id) {
                    $("a:first", trigger).attr("id", trigger.id);
                    $(trigger).removeAttr("id");
                }
            } else {
                $(trigger).wrapInner(
                    '<span class="triggerChild"></span>');
            } if ($(trigger).closest(LBG.showHide.toggleSelector)
                .hasClass("resets")) {
                trigger.resets = thePane.innerHTML;
            }
            if (($(trigger).parent().next().hasClass("clearer")) ===
                false && document.body.style.maxHeight !==
                undefined) {
                $(trigger).parent().after(
                    '<div class="clearer"></div>');
            }
            if ($(trigger).parents(LBG.showHide.toggleSelector)
                .hasClass(LBG.showHide.closedClass)) {
                $(thePane).hide();
            }
            if (trigger.tagName.toLowerCase() === "a") {
                $(trigger).click(function(event) {
                    event.preventDefault();
                });
            }
            $(".triggerChild", trigger).each(function() {
                $(this).click(function() {
                    if (LBG.showHide.showSingle) {
                        var closeTrigger = $(
                                LBG.showHide.paneSelector +
                                ":visible").parent()
                            .find(LBG.showHide.triggerSelector);
                        if (closeTrigger.length >
                            0 && closeTrigger.find(
                                ".triggerChild"
                            ).get(0).hash !==
                            this.hash) {
                            LBG.showHide.toggleDisplay(
                                closeTrigger
                            );
                        }
                    }
                    if ($(trigger).parent().hasClass(
                        LBG.showHide.toggleSelectorBind
                    )) {
                        var $collection = $(LBG
                            .showHide.toggleSelectorBind
                        ).find(LBG.showHide
                            .triggerSelector
                        );
                        $collection.each(
                            function() {
                                LBG.showHide
                                    .toggleDisplay(
                                        $(
                                            this
                                        )[0]
                                    );
                            });
                    } else {
                        LBG.showHide.toggleDisplay(
                            $(trigger)[0]);
                    } if (trigger.actionFlag &&
                        !LBG.common.isEmpty($(
                                trigger).metadata()
                            .async)) {
                        if (!$pane.hasClass(
                            "show-hide-async-loaded"
                        )) {
                            $pane.addClass(
                                "async-loading"
                            ).html(
                                '<div class="async-loading-message">loading...</div>'
                            );
                            $.ajax({
                                url: $(
                                        trigger
                                    ).metadata()
                                    .async
                                    .url,
                                cache: false,
                                dataType: "html",
                                success: function(
                                    data
                                ) {
                                    $pane
                                        .html(
                                            data
                                        );
                                    $pane
                                        .removeClass(
                                            "async-loading"
                                        );
                                    if (!
                                        allowMultipleAjaxRequests
                                    ) {
                                        $pane
                                            .addClass(
                                                "show-hide-async-loaded"
                                            );
                                    }
                                }
                            });
                        }
                    }
                    return false;
                });
                if (this.tagName.toLowerCase() !== "a") {
                    $(this).attr("tabIndex", 0).keydown(
                        function(e) {
                            if (e.keyCode === 32 ||
                                e.keyCode === 13) {
                                $(this).click();
                                return false;
                            }
                        });
                    if ($.browser.msie && $.browser.version <
                        7) {
                        $(this).hover(function() {
                            $(this).addClass(
                                "hover");
                        }, function() {
                            $(this).removeClass(
                                "hover");
                        });
                    }
                }
            });
            LBG.showHide.updateTriggerTitle($(this).find(
                ".triggerChild"));
        });
        if ($(this.toggleSelector + ":first").parent().hasClass(
            "show_single")) {
            this.showSingle = true;
        }
        $(".showHide .part.closed .pane").css("display", "none");
    },
    toggleDisplay: function(trigger) {
        var $closeAppliedTo = $(trigger).parent();
        var $thePane = $(trigger).siblings(LBG.showHide.paneSelector);
        if (!$thePane.length) {
            $thePane = $("#" + $(trigger).data("thePaneId"));
        }
        if (!trigger.busyFlag) {
            trigger.busyFlag = true;
            if (jQuery.browser.safari) {
                $(trigger).parents("form").toggleClass(LBG.showHide.formFixClass);
            }
            if ($closeAppliedTo.hasClass(LBG.showHide.closedClass)) {
                $closeAppliedTo.toggleClass(LBG.showHide.closedClass);
                trigger.actionFlag = true;
            }
            $thePane.slideToggle("slow", function() {
                var meta = $(trigger).metadata().label;
                if (trigger.actionFlag) {
                    trigger.actionFlag = false;
                    if (typeof(LBG.ommDetect) !== "undefined") {
                        LBG.ommDetect.revealLoader(trigger);
                    }
                    if (meta) {
                        $(trigger).find(".triggerChild")[0].firstChild
                            .nodeValue = meta.open;
                    }
                } else {
                    $closeAppliedTo.toggleClass(LBG.showHide.closedClass);
                    trigger.actionFlag = true;
                    if (trigger.resets) {
                        $(this).html(trigger.resets);
                        LBG.Forms.Validation.init(this);
                    }
                    if (meta) {
                        $(trigger).find(".triggerChild")[0].firstChild
                            .nodeValue = meta.closed;
                    }
                }
                LBG.showHide.updateTriggerTitle($(trigger).find(
                    ".triggerChild"));
                trigger.busyFlag = false;
            });
        }
    }
};
LBG.tableSorter = {
    tableSelector: "table.sortable",
    zeroPaddingSize: 30,
    init: function() {
        var months = {
            "JAN": "01",
            "FEB": "02",
            "MAR": "03",
            "APR": "04",
            "MAY": "05",
            "JUN": "06",
            "JUL": "07",
            "AUG": "08",
            "SEP": "09",
            "OCT": "10",
            "NOV": "11",
            "DEC": "12"
        };
        $.tablesorter.addParser({
            id: "LBGShortDate",
            is: function(s) {
                return (/(\d{2}) ([A-Za-z]{3}) (\d{2})/.test(
                    s));
            },
            format: function(s, table) {
                var c = table.config,
                    y;
                var dateParts = s.match(
                    /(\d{2}) ([A-Za-z]{3}) (\d{2})/);
                if (dateParts && dateParts.length === 4) {
                    y = (parseFloat(dateParts[3]) < 2000) ?
                        parseFloat(dateParts[3]) + 2000 :
                        parseFloat(dateParts[3]);
                    return $.tablesorter.formatFloat(new Date(
                        y, months[dateParts[2].toUpperCase()],
                        dateParts[1]).getTime());
                }
            },
            type: "numeric"
        });
        $.tablesorter.addParser({
            id: "LBGDateDDMMMYY",
            is: function(s) {
                return false;
            },
            format: function(s) {
                s = $.trim(s);
                var regEx =
                    "^[\\d]{2}[/|\\s]{1}[A-Za-z]{3}[/|\\s]{1}[\\d]{2}";
                var date = s.match(regEx);
                if (date !== null) {
                    date = date[0];
                    date = date.replace(/\s/g, "/");
                    date = date.split("/");
                    date[1] = months[date[1].toUpperCase()];
                    return date.reverse().join("");
                } else {
                    return "999999";
                }
            },
            type: "numeric"
        });
        $.tablesorter.addParser({
            id: "LBGAlphaNumeric",
            is: function(s) {
                return false;
            },
            format: function(s) {
                var numCheck = new RegExp("^[\d{1}]");
                var stripHTML = new RegExp("<(?:.|s)*?>",
                    "g");
                s = $.trim(s.replace(stripHTML, "").toLowerCase());
                return (numCheck.test(s) === false) ? "0" +
                    s : LBG.common.zeroPadding(s, LBG.tableSorter
                        .zeroPaddingSize);
            },
            type: "text"
        });
        $(LBG.tableSorter.tableSelector).tablesorter();
        $(LBG.tableSorter.tableSelector).find(".header").makeTabbable(0);
        if (jQuery.browser.safari && (navigator.appVersion.indexOf("3.") !==
            -1)) {
            $(LBG.tableSorter.tableSelector).find(".header").each(
                function() {
                    $(this).wrapInner(
                        '<a href="#" class="sortingTrigger"></a>'
                    );
                });
        }
    }
};
LBG.textAlerts = {
    registerSelector: ".registerTextAlerts",
    textAlertsTableSelector: ".textAlerts",
    tableWithInputsSelector: ".textAlertInputs",
    validationClass: "validate:(required)",
    formFieldClass: ".formField",
    init: function() {
        $(LBG.textAlerts.textAlertsTableSelector + " input:checkbox").each(
            function() {
                var hasSiblingInputs;
                if ($.browser.msie === true && $.browser.version <
                    8) {
                    var $checkbox = $(this),
                        $oldLabel = $checkbox.prev("label.postit"),
                        $newLabel = $oldLabel.clone().removeClass(
                            "postit"),
                        $formField = $checkbox.parents(LBG.textAlerts
                            .formFieldClass),
                        $spanLabel = $("<span />");
                    $formField.addClass("checkbox");
                    $spanLabel.addClass("postit").html($newLabel.html());
                    $spanLabel.insertBefore($checkbox);
                    $oldLabel.remove();
                    $newLabel.html("");
                    $spanLabel.add($checkbox).wrapAll($newLabel);
                }
                hasSiblingInputs = $(this).parents(LBG.textAlerts.tableWithInputsSelector)
                    .length;
                if (hasSiblingInputs > 0) {
                    if (!this.checked) {
                        LBG.textAlerts.updateRowInputs(this, this.checked);
                    }
                }
                $(this).click(function() {
                    if (hasSiblingInputs) {
                        LBG.textAlerts.updateRowInputs(this,
                            this.checked);
                    }
                    if ($(this).parents(LBG.textAlerts.registerSelector)
                        .length > 0) {
                        LBG.textAlerts.updateSiblingCheckboxes(
                            this);
                    }
                });
            });
    },
    updateRowInputs: function(input, checked) {
        var that = this;
        this.$inputAdjacentCells = $(input).parents("tr").find(
            "div.formField");
        this.validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            this.$inputAdjacentCells);
        if (checked) {
            this.$inputAdjacentCells.find(':input[type!="checkbox"]').attr(
                "disabled", "").removeClass("isDisabled");
            this.validationHandler.isValid = false;
            this.validationHandler.findChildren($(input).parents("tr"));
        } else {
            this.validationHandler.hideError();
            $(input).parents("td").siblings("td").each(function() {
                that.validationHandler.removeChildren($(this));
            });
            this.$inputAdjacentCells.find(':input[type!="checkbox"]').val(
                "-");
            this.$inputAdjacentCells.find(':input[type="text"]').val("");
            this.$inputAdjacentCells.find(':input[type!="checkbox"]').attr(
                "disabled", "disabled").addClass("isDisabled");
        }
        LBG.ajax.pageUpdated();
    },
    updateSiblingCheckboxes: function(input) {
        var $siblingCheckboxes = $(input).parents(LBG.textAlerts.textAlertsTableSelector)
            .find("input:checkbox");
        var checkedElements = 0;
        var i, len, disableCheckboxes = false;
        if ($siblingCheckboxes.length > 5) {
            for (i = 0, len = $siblingCheckboxes.length; i < len; i++) {
                if ($siblingCheckboxes[i].checked) {
                    checkedElements++;
                }
            }
            if (checkedElements === 5) {
                disableCheckboxes = true;
            }
            for (i = 0; i < len; i++) {
                if (!$siblingCheckboxes[i].checked) {
                    $siblingCheckboxes[i].disabled = disableCheckboxes;
                }
            }
        }
        LBG.ajax.pageUpdated();
    }
};
LBG.autoTotal = {
    init: function() {
        if ($("div.total").parent("form.balanceTransfer").length) {
            $("fieldset.balanceTransfer").each(function() {
                var $amounts = $("input.amount");
                $("input.calculate").remove();
                $("span.totalAmount").autoTotal($amounts);
            });
        } else {
            if ($("fieldset.balanceTransfer").length) {
                $("fieldset.balanceTransfer").each(function() {
                    $("input.calculate", this).remove();
                    if ($(".total", this).length) {
                        var $amounts = $("input.amount", this);
                        $("span.totalAmount", this).autoTotal(
                            $amounts);
                    }
                });
            }
        }
        var modifiers = DI.lang.autoTotalModifiers.bulkPaymentCalculator;
        $("div.bulkPaymentCalculator").each(function() {
            var $amounts = $("input.amount", this);
            $("input.calculate", this).remove();
            $(".subtotal span.value", this).autoTotal($amounts);
            $(".contingency span.value", this).autoTotal(
                $amounts, modifiers.contingency);
            $(".grandTotal span.value", this).autoTotal(
                $amounts, modifiers.grandTotal);
        });
        LBG.autoTotal.batchLimit();
        $(".loanRequirements").each(function() {
            var $amounts = $(".amount", this);
            $("input.calculate", this).remove();
            $(".totalAmount", this).autoTotal($amounts);
        });
    },
    batchLimit: function() {
        var limit, $amounts, total;
        $("form.amendBulkPayments").each(function() {
            $amounts = $("input.amount", this);
            $("input.calculate", this).remove();
            $("span.batchTotal, th.totalLimit", this).autoTotal(
                $amounts);
            $("span.remainingLimit, th.remainingLimit", this).autoTotal(
                $amounts, function(x) {
                    if (limit === undefined) {
                        limit = 0;
                    }
                    total = (limit || 0) - x;
                    return Math.round(total * 100) / 100;
                });
        });
        $("select.payDate").change(function() {
            if (this.value === "-") {
                $(".batchAmount p.off").show();
                $(".batchAmount p.on").hide();
            } else {
                $(".batchAmount p.off").hide();
                $(".batchAmount p.on").show();
            }
            limit = $(":selected", this).metadata().limit;
            if (limit === undefined) {
                limit = 0;
            }
            if ($amounts.length > 0) {
                $amounts.blur();
            } else {
                $("span.batchTotal, th.totalLimit").text(LBG.common
                    .formatCurrencyString(0));
                $("span.remainingLimit, th.remainingLimit").text(
                    LBG.common.formatCurrencyString(limit));
            }
        }).change();
    }
};
LBG.datePicker = {
    constants: {
        datePickerSelector: "input.datePicker",
        parentSelector: "div.inputGroup",
        parentFormFieldSelector: "div.formField",
        daySelector: "select.slctDay",
        monthSelector: "select.slctMonth",
        yearSelector: "select.slctYear",
        calendarIconSelector: "img.ui-datepicker-trigger"
    },
    tools: {
        convertDetailsToDate: function(details) {
            details = details.split("-");
            var yyyy = details[0];
            var mm = details[1];
            var dd = details[2];
            return new Date(yyyy, mm - 1, dd);
        },
        checkLinkedInputDays: function(hiddenDatePickerTextInput) {
            var daysInMonth = 32 - new Date(hiddenDatePickerTextInput.parentWrapperElement
                .find(LBG.datePicker.constants.yearSelector).val(),
                hiddenDatePickerTextInput.parentWrapperElement.find(
                    LBG.datePicker.constants.monthSelector).val() -
                1, 32).getDate();
            if (hiddenDatePickerTextInput.parentWrapperElement.find(LBG
                    .datePicker.constants.daySelector).val() >
                daysInMonth) {
                hiddenDatePickerTextInput.parentWrapperElement.find(LBG
                    .datePicker.constants.daySelector).val(
                    daysInMonth);
            }
        },
        transferDateRangeRestrictionRulesToDatepicker: function(
            validationRoutineDetails, defaultOptions) {
            if (validationRoutineDetails.minDate !== undefined) {
                defaultOptions.minDate = LBG.datePicker.tools.convertDetailsToDate(
                    validationRoutineDetails.minDate);
            }
            if (validationRoutineDetails.maxDate !== undefined) {
                defaultOptions.maxDate = LBG.datePicker.tools.convertDetailsToDate(
                    validationRoutineDetails.maxDate);
            }
            return defaultOptions;
        },
        findOtherDatePickerInRangePair: function(datePicker) {
            var $formField = $(datePicker).parents(".formField"),
                datePickerType = datePicker.typeOfDatePicker,
                datePickerPairName = datePicker.datePickerGroupName,
                otherDatePickers, otherDatePickerInRangePair;
            if (datePickerType === "to") {
                otherDatePickers = $formField.find(
                    "input.datePicker.from");
            } else {
                if (datePickerType === "from") {
                    otherDatePickers = $formField.find(
                        "input.datePicker.to");
                }
            }
            for (var i = 0, len = otherDatePickers.length; i < len; i++) {
                if (otherDatePickers[i].datePickerGroupName !==
                    datePickerPairName) {
                    otherDatePickerInRangePair = otherDatePickers[i];
                    break;
                }
            }
            return otherDatePickerInRangePair;
        }
    },
    defaultOptions: {
        showButtonPanel: true,
        closeText: " ",
        buttonText: DI.lang.datePicker.buttonText,
        buttonImage: DI.lang.datePicker.buttonImage,
        dayNamesLong: DI.lang.datePicker.dayNamesLong,
        dayNamesMin: DI.lang.datePicker.dayNamesMin,
        monthNames: DI.lang.datePicker.monthNames,
        dateFormat: "dd/mm/yyyy",
        minDate: null,
        maxDate: null,
        beforeShowDay: function(date) {
            var isValidDateToSelect = true;
            var dayOfMonth = date.getDate();
            var monthOfYear = date.getMonth();
            var year = date.getFullYear();
            var daysOfWeekNames = ["sun", "mon", "tue", "wed", "thu",
                "fri", "sat"
            ];
            var dayOfWeekEntered = daysOfWeekNames[date.getDay()];
            var monthsOfYearNames = ["jan", "feb", "mar", "apr", "may",
                "jun", "jul", "aug", "sep", "oct", "nov", "dec"
            ];
            var monthOfYearEnteredName = monthsOfYearNames[monthOfYear],
                j, len;
            var validationRoutineDetails = this.validationRoutines.validateDateRestriction;
            if (validationRoutineDetails !== undefined) {
                if (validationRoutineDetails.invalidDays !== undefined) {
                    if (typeof validationRoutineDetails.invalidDays ===
                        "string") {
                        validationRoutineDetails.invalidDays = [
                            validationRoutineDetails.invalidDays
                        ];
                    }
                    for (j = 0, len = validationRoutineDetails.invalidDays
                        .length; j < len; j++) {
                        var validationRoutineDetailsSplit =
                            validationRoutineDetails.invalidDays[j].split(
                                "-");
                        if (year === parseInt(
                                validationRoutineDetailsSplit[0], 10) &&
                            monthOfYear === parseInt(
                                validationRoutineDetailsSplit[1] - 1,
                                10) && dayOfMonth === parseInt(
                                validationRoutineDetailsSplit[2], 10)) {
                            isValidDateToSelect = false;
                        }
                    }
                }
                if (validationRoutineDetails.invalidDaysOfWeek !==
                    undefined) {
                    if (typeof validationRoutineDetails.invalidDaysOfWeek ===
                        "string") {
                        validationRoutineDetails.invalidDaysOfWeek = [
                            validationRoutineDetails.invalidDaysOfWeek
                        ];
                    }
                    for (j = 0, len = validationRoutineDetails.invalidDaysOfWeek
                        .length; j < len; j++) {
                        if (dayOfWeekEntered ===
                            validationRoutineDetails.invalidDaysOfWeek[
                                j]) {
                            isValidDateToSelect = false;
                        }
                    }
                }
                if (validationRoutineDetails.invalidMonths !==
                    undefined) {
                    if (typeof validationRoutineDetails.invalidMonths ===
                        "string") {
                        validationRoutineDetails.invalidMonths = [
                            validationRoutineDetails.invalidMonths
                        ];
                    }
                    for (j = 0, len = validationRoutineDetails.invalidMonths
                        .length; j < len; j++) {
                        if (monthOfYearEnteredName ===
                            validationRoutineDetails.invalidMonths[j]) {
                            isValidDateToSelect = false;
                        }
                    }
                }
            }
            return [isValidDateToSelect, ""];
        },
        showOn: "both",
        hideIfNoPrevNext: true,
        buttonImageOnly: true,
        changeMonth: false,
        changeYear: false,
        beforeShow: function() {
            if (LBG.Forms.Validation.Routines.validDate(this.parentWrapperElement)) {
                var year = parseInt(this.parentWrapperElement.find(LBG.datePicker
                        .constants.yearSelector).val(), 10),
                    month = parseInt(this.parentWrapperElement.find(LBG
                            .datePicker.constants.monthSelector).val(),
                        10) - 1,
                    day = parseInt(this.parentWrapperElement.find(LBG.datePicker
                        .constants.daySelector).val(), 10);
                this.$hiddenDatePickerTextInput.val(day + "/" + (month +
                    1) + "/" + year);
                return {
                    defaultDate: new Date(year, month, day)
                };
            } else {
                return {
                    defaultDate: null
                };
            }
        },
        onClose: function() {
            $(this).next().focus();
        },
        onSelect: function(date) {
            this.parentWrapperElement.find(LBG.datePicker.constants.daySelector)
                .val(date.slice(0, 2));
            this.parentWrapperElement.find(LBG.datePicker.constants.monthSelector)
                .val(date.slice(3, 5));
            this.parentWrapperElement.find(LBG.datePicker.constants.yearSelector)
                .val(date.slice(6, 10));
            if (this.parentWrapperElement.parents(".radioGroup").length >
                0) {
                this.parentWrapperElement.prevAll("input:radio").get(0)
                    .checked = true;
            }
            this.parentWrapperElement.find(LBG.datePicker.constants.datePickerSelector)
                .blur();
            if (this.typeOfDatePicker === "single") {
                this.parentWrapperElement.find(LBG.datePicker.constants
                    .daySelector).focus();
                this.parentWrapperElement.find(LBG.datePicker.constants
                    .daySelector).blur();
            } else {
                if (this.typeOfDatePicker === "to" || this.typeOfDatePicker ===
                    "from") {
                    var otherDatePickerInRangePair = LBG.datePicker.tools
                        .findOtherDatePickerInRangePair(this);
                    if (typeof otherDatePickerInRangePair !==
                        "undefined") {
                        if (otherDatePickerInRangePair.parentWrapperElement
                            .find(LBG.datePicker.constants.daySelector)
                            .val() !== "" && this.parentWrapperElement.find(
                                LBG.datePicker.constants.daySelector).val() !==
                            "") {
                            this.parentWrapperElement.find(LBG.datePicker
                                .constants.daySelector).focus();
                            this.parentWrapperElement.find(LBG.datePicker
                                .constants.daySelector).blur();
                            this.parentWrapperElement.find(LBG.datePicker
                                .constants.monthSelector).focus();
                            this.parentWrapperElement.find(LBG.datePicker
                                .constants.monthSelector).blur();
                            this.parentWrapperElement.find(LBG.datePicker
                                .constants.yearSelector).focus();
                            this.parentWrapperElement.find(LBG.datePicker
                                .constants.yearSelector).blur();
                        }
                    }
                    if (this.maxRangeInMonths !== undefined) {
                        if (typeof otherDatePickerInRangePair !==
                            "undefined") {
                            otherDatePickerInRangePair.$hiddenDatePickerTextInput
                                .datepicker("destroy");
                        }
                        var defaultOptions = LBG.datePicker.defaultOptions;
                        if (this.typeOfDatePicker === "to") {
                            var toDate = this.$hiddenDatePickerTextInput
                                .datepicker("getDate");
                            var newFromDate = new Date(toDate);
                            newFromDate.setMonth(parseInt(newFromDate.getMonth(),
                                10) - parseInt(this.maxRangeInMonths,
                                10));
                            if (this.originalMinDate !== null &&
                                newFromDate < this.originalMinDate) {
                                newFromDate = this.originalMinDate;
                            }
                            defaultOptions.minDate = newFromDate;
                            defaultOptions.maxDate = toDate;
                        } else {
                            if (this.typeOfDatePicker === "from") {
                                var fromDate = this.$hiddenDatePickerTextInput
                                    .datepicker("getDate");
                                var newToDate = new Date(fromDate);
                                newToDate.setMonth(parseInt(newToDate.getMonth(),
                                    10) + parseInt(this.maxRangeInMonths,
                                    10));
                                if (this.originalMaxDate !== null &&
                                    newToDate > this.originalMaxDate) {
                                    newToDate = this.originalMaxDate;
                                }
                                defaultOptions.minDate = fromDate;
                                defaultOptions.maxDate = newToDate;
                            }
                        } if (typeof otherDatePickerInRangePair !==
                            "undefined") {
                            otherDatePickerInRangePair.$hiddenDatePickerTextInput
                                .datepicker(defaultOptions);
                        }
                    }
                    if ($(otherDatePickerInRangePair).next("a").find(
                        LBG.datePicker.constants.calendarIconSelector
                    ).length === 0) {
                        $(otherDatePickerInRangePair).siblings("a").remove();
                        LBG.datePicker.selectableCalendarIcon(
                            otherDatePickerInRangePair);
                    }
                }
            }
        }
    },
    init: function() {
        $(LBG.datePicker.constants.datePickerSelector).each(function() {
            var that = this;
            if ($.browser.msie && $.browser.version < 7) {
                this.parentFormField = $(this).parents(LBG.datePicker
                    .constants.parentFormFieldSelector +
                    ":first");
            } else {
                LBG.datePicker.createDatePicker.call(this, this,
                    LBG.datePicker.defaultOptions);
                var preWrapWidth = $(this).parent().width();
                LBG.datePicker.selectableCalendarIcon(this);
                if ($.browser.safari) {
                    $(this).parent().width(preWrapWidth + 20);
                }
            }
            $(this).parents(LBG.datePicker.constants.parentSelector)
                .find(".date select").change(function() {
                    LBG.datePicker.updateRangeDatePickers.call(
                        that);
                });
            $(this).attr("tabIndex", -1);
        });
    },
    selectableCalendarIcon: function(input) {
        $(input).siblings(LBG.datePicker.constants.calendarIconSelector)
            .wrap("<a href='#'></a>").parent().css({
                "float": "left",
                "display": "block",
                "overflow": "hidden"
            }).click(function(e) {
                e.preventDefault();
                $(this).find(LBG.datePicker.constants.calendarIconSelector)
                    .click();
            });
    },
    createDatePicker: function(hiddenDatePickerTextInput, defaultOptions) {
        var that = this;
        this.$hiddenDatePickerTextInput = $(hiddenDatePickerTextInput);
        this.parentFormField = this.$hiddenDatePickerTextInput.parents(
            LBG.datePicker.constants.parentFormFieldSelector +
            ":first");
        this.parentWrapperElement = this.$hiddenDatePickerTextInput.parents(
            LBG.datePicker.constants.parentSelector + ":first");
        this.typeOfDatePicker = "single";
        if (this.$hiddenDatePickerTextInput.hasClass("to")) {
            this.typeOfDatePicker = "to";
        } else {
            if (this.$hiddenDatePickerTextInput.hasClass("from")) {
                this.typeOfDatePicker = "from";
            }
        }
        this.datePickerGroupName = LBG.Forms.Validation.Tools.convertClassDetailsToData(
            this, "datePickerGroupName:")[0];
        this.validationRoutines = LBG.Forms.Validation.Tools.convertClassDetailsToData(
            this.parentFormField.get(0), "validate:");
        var formFieldGroupValidationRoutines = LBG.Forms.Validation.Tools
            .convertClassDetailsToData(this.parentFormField.get(0),
                "formFieldGroup:");
        for (var i = 0, len = formFieldGroupValidationRoutines.length; i <
            len; i++) {
            this.validationRoutines.push(
                formFieldGroupValidationRoutines[i]);
            this.validationRoutines[formFieldGroupValidationRoutines[i]] =
                formFieldGroupValidationRoutines[
                    formFieldGroupValidationRoutines[i]];
        }
        this.originalMaxDate = null;
        this.originalMinDate = null;
        this.validateDateRestriction = false;
        for (i = 0, len = this.validationRoutines.length; i < len; i++) {
            var validationRoutineName = this.validationRoutines[i];
            var validationRoutineDetails = this.validationRoutines[
                validationRoutineName];
            if (validationRoutineName === "validateDateTimeRange" ||
                validationRoutineName === "specificDateWithRadio" ||
                validationRoutineName === "validateDateRangeIsInRange" ||
                validationRoutineName === "validateDatesAreInRange") {
                defaultOptions = LBG.datePicker.tools.transferDateRangeRestrictionRulesToDatepicker(
                    validationRoutineDetails, defaultOptions);
                this.originalMinDate = defaultOptions.minDate;
                this.originalMaxDate = defaultOptions.maxDate;
            }
            if (validationRoutineName === "validateDateRange" ||
                validationRoutineName === "validateDatesRelativeRange") {
                this.maxRangeInMonths = validationRoutineDetails.maxRangeInMonths;
            }
            if (validationRoutineName === "validateDateRestriction") {
                this.validateDateRestriction = true;
            }
        }
        this.$hiddenDatePickerTextInput.datepicker(defaultOptions);
        $(this.parentWrapperElement.find(LBG.datePicker.constants.monthSelector))
            .bind("change", function() {
                LBG.datePicker.tools.checkLinkedInputDays(that);
            });
        $(this.parentWrapperElement.find(LBG.datePicker.constants.yearSelector))
            .bind("change", function() {
                LBG.datePicker.tools.checkLinkedInputDays(that);
            });
    },
    updateRangeDatePickers: function() {
        if (this.parentFormField.parents(".radioGroup").length > 0) {
            this.parentFormField.find("input:radio").get(0).checked =
                true;
        }
        if ($.browser.msie && $.browser.version < 7) {
            return;
        }
        if (LBG.Forms.Validation.Routines.validDate(this.parentWrapperElement)) {
            var year = parseInt(this.parentWrapperElement.find(LBG.datePicker
                    .constants.yearSelector).val(), 10),
                month = parseInt(this.parentWrapperElement.find(LBG.datePicker
                    .constants.monthSelector).val(), 10) - 1,
                day = parseInt(this.parentWrapperElement.find(LBG.datePicker
                    .constants.daySelector).val(), 10);
            this.$hiddenDatePickerTextInput.val(day + "/" + (month + 1) +
                "/" + year);
            if (this.typeOfDatePicker === "to" || this.typeOfDatePicker ===
                "from") {
                var otherDatePickerInRangePair = LBG.datePicker.tools.findOtherDatePickerInRangePair(
                    this);
                if (otherDatePickerInRangePair.parentWrapperElement.find(
                        LBG.datePicker.constants.daySelector).val() !==
                    "" && this.parentWrapperElement.find(LBG.datePicker
                        .constants.daySelector).val() !== "") {
                    this.parentWrapperElement.find(LBG.datePicker.constants
                        .daySelector).focus();
                    this.parentWrapperElement.find(LBG.datePicker.constants
                        .daySelector).blur();
                }
                if (this.maxRangeInMonths !== undefined) {
                    otherDatePickerInRangePair.$hiddenDatePickerTextInput
                        .datepicker("destroy");
                    var defaultOptions = LBG.datePicker.defaultOptions;
                    if (this.typeOfDatePicker === "to") {
                        var toDate = new Date();
                        toDate.setFullYear(year, month, day);
                        var newFromDate = new Date(toDate);
                        newFromDate.setMonth(parseInt(newFromDate.getMonth(),
                            10) - parseInt(this.maxRangeInMonths,
                            10));
                        if (this.originalMinDate !== null &&
                            newFromDate < this.originalMinDate) {
                            newFromDate = this.originalMinDate;
                        }
                        defaultOptions.minDate = newFromDate;
                        defaultOptions.maxDate = toDate;
                    } else {
                        if (this.typeOfDatePicker === "from") {
                            var fromDate = new Date();
                            fromDate.setFullYear(year, month, day);
                            var newToDate = new Date(fromDate);
                            newToDate.setMonth(parseInt(newToDate.getMonth(),
                                10) + parseInt(this.maxRangeInMonths,
                                10));
                            if (this.originalMaxDate !== null &&
                                newToDate > this.originalMaxDate) {
                                newToDate = this.originalMaxDate;
                            }
                            defaultOptions.minDate = fromDate;
                            defaultOptions.maxDate = newToDate;
                        }
                    }
                    otherDatePickerInRangePair.$hiddenDatePickerTextInput
                        .datepicker(defaultOptions);
                }
            }
        }
    }
};
LBG.help = {
    triggerSelector: ".cxtHelp",
    wrapperSelector: ".refPoint",
    contextualHTML: '<div class="refPoint"><div class="contextual"></div></div>',
    pointerHTML: '<div class="pointer"></div>',
    closeHTML: '<p class="close"><a href="#" title="' + DI.lang.help.closeHTMLTitle +
        '">' + DI.lang.help.closeHTMLTitle + "</a></p>",
    activeClass: "active",
    helpWidth: 320,
    helpContentHeight: 200,
    contentInnerHTML: '<div class="contentInner" />',
    contentInnerSelector: ".contentInner",
    init: function() {
        function showHelp() {
            var helpLink = this,
                $ff3 = $("div.primary.ff3");
            if (LBG.common.urlGetAnchor(helpLink)) {
                if ($(helpLink).hasClass(LBG.help.activeClass)) {
                    LBG.help.closeHelp();
                } else {
                    LBG.help.closeHelp();
                    var viewPortWidth = self.innerWidth || (
                        document.documentElement && document.documentElement
                        .clientWidth) || document.body.clientWidth;
                    var hasArea = viewPortWidth - LBG.common.getAbsoluteLeft(
                        helpLink);
                    var contextualHTML = $(LBG.help.contextualHTML);
                    if (((hasArea < LBG.help.helpWidth) && (LBG.common
                        .getAbsoluteLeft(helpLink) >= LBG.help
                        .helpWidth)) || ($(helpLink).parents(
                        ".secondary").length > 0)) {
                        contextualHTML.find(".contextual").addClass(
                            "left");
                    }
                    if ($ff3.length > 0) {
                        var secondaryWidth = $(".secondary").width(),
                            ff3left = LBG.common.getAbsoluteLeft(
                                $ff3[0]),
                            minusArea = (secondaryWidth + ff3left);
                        hasArea = (viewPortWidth - minusArea) - LBG
                            .common.getAbsoluteLeft(helpLink);
                        if (((hasArea < LBG.help.helpWidth) && (LBG
                            .common.getAbsoluteLeft(
                                helpLink) >= LBG.help.helpWidth
                        )) || ($(helpLink).parents(".secondary")
                            .length > 0)) {
                            contextualHTML.find(".contextual").addClass(
                                "left");
                        }
                    }
                    var helpContentID = LBG.common.escapeSpecialCharsInId(
                        LBG.common.urlGetAnchor(helpLink));
                    var helpContent = $(helpContentID).clone(true);
                    helpContent.id = "";
                    helpContent.appendTo($(helpLink).parent()[0]);
                    helpContent.wrap(contextualHTML);
                    helpContent.wrapInner(LBG.help.contentInnerHTML)
                        .find("h3").remove().clone().insertBefore(
                            helpContent.find(LBG.help.contentInnerSelector)
                        );
                    helpContent.find(LBG.help.contentInnerSelector)
                        .attr("tabIndex", 0);
                    if (helpContent.find(LBG.help.contentInnerSelector)
                        .height() > LBG.help.helpContentHeight) {
                        helpContent.find(LBG.help.contentInnerSelector)
                            .height(LBG.help.helpContentHeight);
                        helpContent.find(LBG.help.contentInnerSelector)
                            .css("margin", "20px 20px 0 0");
                    }
                    if (helpContent.get(0).clientHeight > LBG.common
                        .getAbsoluteTop(helpLink)) {
                        helpContent.closest(".refPoint").addClass(
                            "bottom");
                    }
                    if (!$(this).hasClass(".onHover")) {
                        var closeHelpLink = $(LBG.help.closeHTML);
                        closeHelpLink.find("a").click(function() {
                            LBG.help.closeHelp();
                            return false;
                        });
                        helpContent.after(closeHelpLink);
                    }
                    helpContent.after(LBG.help.pointerHTML);
                    helpContent.attr("tabindex", -1);
                    helpContent.focus();
                    if ($.browser.msie && $.browser.version < 7) {
                        helpContent.parent().bgiframe();
                    }
                    $(helpLink).addClass(LBG.help.activeClass);
                    if ($.browser.msie && $.browser.version < 7) {
                        $(LBG.help.triggerSelector).not($(this).parent())
                            .css("position", "static");
                    }
                    LBG.iOS.scrollGestureMessage(helpContent.find(
                        ".contentInner")[0]);
                    if ($.browser.msie && $.browser.version < 8 &&
                        !$("#olMask:visible").length) {
                        setTimeout(function() {
                            LBG.ieZindexFix.apply(true,
                                helpContent);
                        }, 0);
                    }
                }
            }
            return false;
        }
        $(LBG.help.triggerSelector + " a.cxtTrigger:not(.onHover)").live(
            "click", showHelp);
        $(LBG.help.triggerSelector + " a.cxtTrigger.onHover").bind(
            "mouseover", showHelp);
        $(LBG.help.triggerSelector + " a.cxtTrigger.onHover").bind(
            "mouseleave", LBG.help.closeHelp);
    },
    closeHelp: function() {
        $(LBG.help.triggerSelector + " ." + LBG.help.activeClass).removeClass(
            LBG.help.activeClass).focus();
        $(LBG.help.wrapperSelector).remove();
        if ($.browser.msie && $.browser.version < 8 && $(
            "div.rewardOfferBlock").length > 0) {
            setTimeout(function() {
                LBG.ieZindexFix.apply(true);
            }, 0);
        }
        if ($.browser.msie && $.browser.version < 7) {
            $(LBG.help.triggerSelector).css("position", "relative");
        }
    }
};
LBG.overlay = {
    pageSelector: "#wrapper",
    outerSelector: "body",
    triggerSelector: ".overlay, .overlayContainer a",
    loadedCloseSelector: ".closeOverlay",
    loadedCancelSelector: ".cancelOverlay",
    datePickerSelector: "input.datePicker",
    overlayCloseButton: "#overlay p.close a",
    overlayCancelButton: "#overlay li.cancel a",
    maskID: "olMask",
    overlayWrapperID: "overlayWrapper",
    overlayLoadedClass: "loaded",
    overlayID: "overlay",
    overlayClass: "content",
    overlayInnerID: "overlayInner",
    overlayContID: "overlayCont",
    closeClass: "close",
    overlayFlagClass: "overlayOpen",
    spinnerHTML: '<div class="spinner"></div>',
    closeTriggerTitleCopy: DI.lang.overlay.closeTriggerTitle,
    openTriggerTitleCopy: DI.lang.overlay.openTriggerTitle,
    closeLinkCopy: DI.lang.overlay.closeLink,
    loadErrorCopy: DI.lang.overlay.loadError,
    fromDomElement: false,
    $previousParent: null,
    $storedOverlayInners: null,
    $modifiedStoredInners: null,
    hasLaunchOverlay: false,
    init: function() {
        $(LBG.overlay.triggerSelector).bind("click", function(e) {
            e.preventDefault();
            var metadata = $(this).metadata();
            var $domElement = metadata.domElement ? $(metadata.domElement)
                .eq(0) : undefined;
            if ($domElement) {
                LBG.overlay.fromDomElement = true;
                LBG.overlay.open($domElement, this, true);
            } else {
                LBG.overlay.open(LBG.common.ajax.tagUrl(LBG.common
                    .ajax.getAjaxURI(this)), this, true);
            }
            return false;
        }).each(function() {
            var $trigger = $(this).find("img").length ? $(this)
                .find("img:first") : $(this);
            var tagName = $trigger[0].tagName.toLowerCase();
            var message = LBG.overlay.openTriggerTitleCopy;
            if (tagName === "img") {
                if ($trigger.attr("alt")) {
                    message = $trigger.attr("alt") + ": " +
                        message;
                }
                $trigger.attr({
                    alt: message,
                    title: message
                });
            } else {
                if ($trigger.attr("title")) {
                    message = $trigger.attr("title") + ": " +
                        message;
                } else {
                    if (tagName === "a") {
                        message = $trigger.text() + ": " +
                            message;
                    }
                }
                $trigger.attr("title", message);
            } if (!LBG.overlay.hasLaunchOverlay) {
                LBG.overlay.hasLaunchOverlay = true;
                var meta = $trigger.metadata();
                if (meta.launchOverlay) {
                    $trigger.click();
                }
            }
        });
        if (!LBG.overlay.hasLaunchOverlay && typeof LBG.launchOverlayData !==
            "undefined" && typeof LBG.launchOverlayData.ajaxURL !==
            "undefined") {
            LBG.overlay.hasLaunchOverlay = true;
            LBG.overlay.open(LBG.launchOverlayData.ajaxURL, null,
                typeof LBG.launchOverlayData.canClose === "boolean" ?
                LBG.launchOverlayData.canClose : true);
        }
        var kill_primary_overlay = $(
            ".altOverlayContainer.firstTimeSRContainer").length;
        var i_can_see_the_alt_overlay = $(
            ".altOverlayContainer.firstTimeSRContainer").is(
            ":visible");
        if ((kill_primary_overlay > 0) && (i_can_see_the_alt_overlay)) {
            $("#olMask").hide();
            $("#overlayWrapper").hide();
        }
    },
    open: function(path, trigger, canClose, timeout) {
        if (!path) {
            return false;
        }
        LBG.overlay.close();
        $(LBG.overlay.datePickerSelector).datepicker("hide");
        var $outerSelector = $(LBG.overlay.outerSelector);
        $outerSelector.addClass(LBG.overlay.overlayFlagClass);
        $("#showMeMask").removeClass("show");
        $("#showMeOrientation").css("display", "none");
        LBG.showMeOrientation.removeCookie(LBG.showMeOrientation.journeyCookieName);
        var meta = $(trigger).metadata();
        var $mask = $("<div />").attr("id", LBG.overlay.maskID).appendTo(
            $outerSelector);
        var $overlayWrapper = $("<div />").attr("id", LBG.overlay.overlayWrapperID)
            .appendTo($outerSelector);
        var $overlay = $("<div />").attr("id", LBG.overlay.overlayID).attr(
                "class", LBG.overlay.overlayClass).attr("tabindex", -1)
            .appendTo($overlayWrapper);
        var $overlayInner = $("<div />").attr("id", LBG.overlay.overlayInnerID)
            .appendTo($overlay);
        var $overlayCont = $("<div />").attr("id", LBG.overlay.overlayContID)
            .html(LBG.overlay.spinnerHTML).appendTo($overlayInner);
        if (meta.overlayWidth) {
            $overlay.width(parseInt(meta.overlayWidth, 10));
        }
        if (trigger) {
            $overlay[0].storedTrigger = trigger;
        }
        if (canClose === true) {
            $mask.click(function() {
                LBG.overlay.close();
                return false;
            });
            $('<a href="#" />').html(LBG.overlay.closeLinkCopy).attr(
                "title", LBG.overlay.closeLinkCopy + LBG.overlay.closeTriggerTitleCopy
            ).click(function() {
                LBG.overlay.close();
                return false;
            }).appendTo($("<p />").attr("class", LBG.overlay.closeClass)
                .prependTo($overlay));
        }
        LBG.overlay.adjustMaskDimensions(true);
        LBG.overlay.position();
        if (typeof path === "string") {
            $.ajax({
                url: path,
                success: function(response) {
                    LBG.overlay.config({
                        content: response,
                        callback: true,
                        timeout: timeout
                    });
                },
                error: function() {
                    LBG.overlay.config({
                        content: "<p><strong>" +
                            LBG.overlay.loadErrorCopy +
                            "</strong></p>",
                        callback: false,
                        timeout: timeout
                    });
                }
            });
        } else {
            if (typeof path === "object") {
                try {
                    LBG.overlay.config({
                        content: path,
                        callback: true,
                        timeout: false
                    });
                } catch (err) {
                    LBG.overlay.config({
                        content: "<p><strong>" + LBG.overlay.loadErrorCopy +
                            "</strong></p>",
                        callback: true,
                        timeout: false
                    });
                }
            }
        }
    },
    config: function(opts) {
        var $overlay = $("#" + LBG.overlay.overlayID);
        var $overlayCont = $overlay.find("#" + LBG.overlay.overlayContID);
        if (opts.content && LBG.overlay.fromDomElement) {
            if (!$("#tempOverlayParent").length) {
                $(opts.content).wrap('<div id="tempOverlayParent" />');
                LBG.overlay.$previousParent = $(opts.content).parent();
            }
            LBG.overlay.$storedOverlayInners = opts.content;
            LBG.overlay.$modifiedStoredInners = $(opts.content).clone()
                .removeClass("hideJS");
            $(opts.content).remove();
            $overlayCont.html(LBG.overlay.$modifiedStoredInners);
            LBG.overlay.position();
        } else {
            if (opts.content) {
                $overlayCont.html(opts.content);
                LBG.overlay.position();
            }
        } if ($overlayCont.find("form").length > 0) {
            LBG.Forms.Validation.init($overlayCont[0]);
            $(LBG.overlay.loadedCloseSelector).attr("onKeyPress",
                "event.stopPropagation();");
            $(document).bind("keydown", function(event) {
                if ($(event.target).hasClass(LBG.overlay.loadedCloseSelector) &&
                    event.which === 13) {
                    event.preventDefault();
                    LBG.overlay.close();
                    return false;
                }
            });
            if ($(".submitAction").attr("disabled")) {
                $(".submitAction").attr("disabled", "");
            }
            if ($overlay[0].storedTrigger && $overlay[0].storedTrigger.tagName
                .toLowerCase() !== "a") {
                $($overlay[0].storedTrigger).parents("form").find(
                    ':input:not([type="image"])').each(function() {
                    $overlayCont.find("form").prepend($(
                        "<input />").val(this.value).attr({
                        type: "hidden",
                        name: this.name,
                        id: this.id
                    }));
                });
            }
        }
        if ($overlayCont.find(".js-tabs").length > 0) {
            LBG.tabs.init();
        }
        $overlay.find(LBG.overlay.loadedCloseSelector).click(function() {
            LBG.overlay.close();
            return false;
        });
        LBG.ajax.pageUpdated($overlay, opts.timeout);
        if (opts.callback) {
            LBG.overlay.callback();
        }
    },
    position: function() {
        if ($(LBG.common.escapeSpecialCharsInId(LBG.overlay.overlayID))) {
            var overlay = $(LBG.common.escapeSpecialCharsInId(LBG.overlay
                .overlayID));
            var overlayWrapper = $(LBG.common.escapeSpecialCharsInId(
                LBG.overlay.overlayWrapperID));
            var pageWrapper = $(LBG.overlay.pageSelector);
            var windowH = $(window).height();
            var overlayH = overlay.outerHeight();
            var pageH = pageWrapper.outerHeight();
            overlayWrapper.addClass(LBG.overlay.overlayLoadedClass);
            overlay.css("margin-top", 0);
            var scrollPosition = $(window).scrollTop();
            if (overlayH >= pageH) {
                pageWrapper.css("min-height", overlayH + 20);
                overlay.css("top", 10 + "px");
            } else {
                if ((overlayH / 2 + scrollPosition) < pageH) {
                    var horiz = scrollPosition + windowH / 2;
                    var top = overlayH / 2;
                    if (horiz > top) {
                        overlay.css("top", horiz + "px");
                        overlay.css("margin-top", "-" + top + "px");
                    } else {
                        pageWrapper.css("min-height", overlayH + 20);
                        overlay.css("top", 10 + "px");
                    }
                } else {
                    pageWrapper.css("min-height", overlayH + 20);
                    overlay.css("top", 10 + "px");
                }
            }
            overlay.css("margin-left", "-" + overlay.outerWidth() / 2 +
                "px");
        }
    },
    adjustMaskDimensions: function(setOnResize) {
        if ($.browser.msie && $.browser.version < 7 || LBG.browserIdent
            .browserIdent === "iPad" || LBG.browserIdent.browserIdent ===
            "iPhone") {
            var mask = $(LBG.common.escapeSpecialCharsInId(LBG.overlay.maskID));
            var pageWrapper = $(LBG.overlay.pageSelector);
            mask.width(pageWrapper.outerWidth(true));
            mask.height(pageWrapper.outerHeight(true));
            if (setOnResize && setOnResize === true) {
                $(window).resize(function() {
                    LBG.overlay.adjustMaskDimensions();
                });
            }
        }
    },
    close: function() {
        if (document.getElementById(LBG.overlay.overlayID)) {
            var overlay = $(LBG.common.escapeSpecialCharsInId(LBG.overlay
                .overlayID));
            var storedTrigger = false;
            if (overlay[0].storedTrigger) {
                storedTrigger = overlay[0].storedTrigger;
            }
            $(LBG.common.escapeSpecialCharsInId(LBG.overlay.maskID)).remove();
            $(LBG.common.escapeSpecialCharsInId(LBG.overlay.overlayWrapperID))
                .remove();
            $(LBG.overlay.pageSelector).css("min-height", "100%");
            if (storedTrigger) {
                LBG.ajax.pageUpdated(overlay[0].storedTrigger, false);
            } else {
                LBG.ajax.pageUpdated(null, false);
            } if (LBG.overlay.fromDomElement) {
                LBG.overlay.$previousParent.html(LBG.overlay.$storedOverlayInners);
                LBG.overlay.fromDomElement = false;
            }
            $("body").removeClass(LBG.overlay.overlayFlagClass);
        }
    },
    callback: function() {
        LBG.Forms.DatePickerConverter.init();
        LBG.datePicker.init();
        LBG.employmentShowHide.init();
        LBG.selectAccount.init();
        LBG.beneficiariesChooser.init();
        LBG.contentScrollerTabIndex();
        var $overlayCont = $("#" + LBG.overlay.overlayContID);
        if ($("#omm").length) {
            if (LBG.ommSelectImageOverlay && typeof LBG.ommSelectImageOverlay
                .init === "function") {
                LBG.ommSelectImageOverlay.init();
            }
            if (LBG.ommDetect && typeof LBG.ommDetect.init ===
                "function") {
                LBG.ommDetect.init($("#overlayWrapper"));
            }
            if (LBG.arrangementsDateDropdown && typeof LBG.arrangementsDateDropdown
                .init === "function") {
                if ($overlayCont.find(".viewFilterOverlay").length) {
                    LBG.arrangementsDateDropdown.init();
                }
            }
        }
        $overlayCont.find("form:eq(0)").bind("submit", function(e) {
            e.preventDefault();
            this.submit();
        });
        $(".exportStatement:eq(0)").parent().unbind("submit").bind(
            "submit", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    LBG.overlay.close();
                }, DI.exportStatement.closeOverlayInterval);
                this.submit();
            });
        if ($(LBG.overlay.overlayCancelButton).length) {
            $(LBG.overlay.overlayCancelButton).bind("click", function() {
                LBG.overlay.close();
            });
        }
        $(document).one("keypress", function(e) {
            if (e.keyCode === 27) {
                LBG.overlay.close();
            }
        });
        $overlayCont.find(LBG.overlay.loadedCloseSelector).each(
            function() {
                this.title = (this.alt || this.title || $(this).text()) +
                    LBG.overlay.closeTriggerTitleCopy;
            });
        $(LBG.overlay.overlayCloseButton).focus();
        LBG.iOS.scrollGestureMessage($overlayCont.find(".legals")[0]);
    }
};
LBG.session = {
    isUnauthenticated: false,
    sessionActive: false,
    logoutClass: "logoutWarning",
    msgClass: "logoutMsg",
    actionsClass: "actions",
    loggedOutOverlayClass: "dark",
    alternateLinkData: {},
    allow: function(isUnauthenticated, alternateLinkData) {
        if (isUnauthenticated) {
            this.isUnauthenticated = true;
        }
        this.sessionActive = true;
        this.alternateLinkData = alternateLinkData;
        this.init();
    },
    preloadImg: function(src) {
        var img = new Image();
        img.src = src;
        return img;
    },
    init: function() {
        LBG.session.duration = LBG.session.isUnauthenticated ? DI.sessionUnauthenticated
            .duration : DI.session.duration;
        LBG.session.gracePeriod = LBG.session.isUnauthenticated ? DI.sessionUnauthenticated
            .gracePeriod : DI.session.gracePeriod;
        LBG.session.hideLogoutButton = DI.session.hideLogoutButton ||
            false;
        LBG.session.hideLogonButton = DI.session.hideLogonButton ||
            false;
        if (LBG.session.isUnauthenticated) {
            LBG.session.warnTitle = DI.lang.sessionUnauthenticated.warningTitle;
            LBG.session.warnMsg = DI.lang.sessionUnauthenticated.warningMsg;
            LBG.session.warnSecondaryBtnSrc = DI.lang.sessionUnauthenticated
                .resetButton;
            LBG.session.warnSecondaryBtnAlt = DI.lang.sessionUnauthenticated
                .resetAlt;
            LBG.session.warnPrimaryBtnSrc = DI.lang.sessionUnauthenticated
                .continueButton;
            LBG.session.warnPrimaryBtnAlt = DI.lang.sessionUnauthenticated
                .continueAlt;
            LBG.session.warnPrimaryBtnLink = DI.lang.sessionUnauthenticated
                .continueLink;
            LBG.session.exitTitle = DI.lang.sessionUnauthenticated.timedOutTitle;
            LBG.session.exitMsg = DI.lang.sessionUnauthenticated.timedOutMsg;
            LBG.session.exitPrimaryBtnSrc = DI.lang.sessionUnauthenticated
                .startAgainButton;
            LBG.session.exitPrimaryBtnAlt = DI.lang.sessionUnauthenticated
                .startAgainAlt;
            LBG.session.warnSecondaryBtnLink = typeof LBG.session.alternateLinkData
                .resetLink !== "undefined" ? LBG.session.alternateLinkData
                .resetLink : DI.lang.sessionUnauthenticated.resetLink;
            LBG.session.exitPrimaryBtnLink = typeof LBG.session.alternateLinkData
                .startAgainLink !== "undefined" ? LBG.session.alternateLinkData
                .startAgainLink : DI.lang.sessionUnauthenticated.startAgainLink;
        } else {
            LBG.session.warnTitle = DI.lang.session.warningTitle;
            LBG.session.warnMsg = DI.lang.session.warningMsg;
            LBG.session.warnSecondaryBtnSrc = DI.lang.session.logoutButton;
            LBG.session.warnSecondaryBtnAlt = DI.lang.session.logoutAlt;
            LBG.session.warnSecondaryBtnLink = DI.lang.session.logoutLink;
            LBG.session.warnPrimaryBtnSrc = DI.lang.session.continueButton;
            LBG.session.warnPrimaryBtnAlt = DI.lang.session.continueAlt;
            LBG.session.warnPrimaryBtnLink = DI.lang.session.continueLink;
            LBG.session.exitTitle = DI.lang.session.loggedOutTitle;
            LBG.session.exitMsg = DI.lang.session.loggedOutMsgText;
            LBG.session.exitPrimaryBtnSrc = DI.lang.session.loggedOutButton;
            LBG.session.exitPrimaryBtnAlt = DI.lang.session.loggedOutAlt;
            LBG.session.exitPrimaryBtnLink = DI.lang.session.loggedOutLink;
        }
        LBG.session.warnMsg = LBG.common.formatPlaceholder.call(LBG.session
            .warnMsg, Math.floor(LBG.session.duration / 60000));
        LBG.session.exitMsg = LBG.common.formatPlaceholder.call(LBG.session
            .exitMsg, Math.ceil((LBG.session.duration + LBG.session
                .gracePeriod) / 60000));
        if (LBG.session.sessionActive) {
            LBG.sessionTerminate.init();
            LBG.session.warnSecondaryBtnImg = LBG.session.preloadImg(
                LBG.session.warnSecondaryBtnSrc);
            LBG.session.warnPrimaryBtnImg = LBG.session.preloadImg(LBG.session
                .warnPrimaryBtnSrc);
            LBG.session.exitPrimaryBtnImg = LBG.session.preloadImg(LBG.session
                .exitPrimaryBtnSrc);
            window.clearTimeout(LBG.session.timeOut);
            LBG.session.timeOut = window.setTimeout(function() {
                LBG.overlay.open(LBG.session.buildMsg(), null,
                    false, false);
                $(".logoutWarning img").removeAttr("width").removeAttr(
                    "height");
                window.clearTimeout(LBG.session.timeOut);
                try {
                    window.focus();
                } catch (e) {}
                LBG.session.timeOut = window.setTimeout(
                    function() {
                        LBG.sessionTerminate.isEnabled =
                            true;
                        LBG.session.loggedOutMsg();
                        LBG.sessionTerminate.sendTerminate();
                        window.clearTimeout(LBG.session.timeOut);
                    }, LBG.session.gracePeriod);
            }, LBG.session.duration);
        }
    },
    buildMsg: function() {
        var $wrapper = $("<div></div>").attr("class", LBG.session.logoutClass);
        var $title = $("<h2>" + LBG.session.warnTitle + "</h2>");
        var $message = $("<div></div>").attr("class", LBG.session.msgClass)
            .append($("<p><strong>" + LBG.session.warnMsg +
                "</strong></p>"));
        var $actions = $("<ul></ul>").attr("class", LBG.session.actionsClass);
        if (!LBG.session.hideLogoutButton) {
            var $secondary = $("<li></li>").appendTo($actions);
            var $secondaryLink = $("<a></a>").attr("href", LBG.session.warnSecondaryBtnLink)
                .appendTo($secondary);
            var $secondaryImg = $(LBG.session.warnSecondaryBtnImg).attr(
                "alt", LBG.session.warnSecondaryBtnAlt).appendTo(
                $secondaryLink);
        }
        var $primary = $("<li></li>").addClass("primaryAction").appendTo(
            $actions);
        var $primaryLink = $("<a></a>").attr("href", LBG.session.warnPrimaryBtnLink)
            .appendTo($primary);
        var $primaryImg = $(LBG.session.warnPrimaryBtnImg).attr("alt",
            LBG.session.warnPrimaryBtnAlt).appendTo($primaryLink);
        $primaryLink.click(function() {
            LBG.session.ping(LBG.session.warnPrimaryBtnLink);
            return false;
        });
        $wrapper.append($title, $message, $actions);
        return $wrapper;
    },
    loggedOutMsg: function() {
        var $wrapper = $("." + LBG.session.logoutClass);
        var $actions = $wrapper.find("." + LBG.session.actionsClass);
        $actions.empty();
        $wrapper.find("h2").html(LBG.session.exitTitle);
        $wrapper.find("." + LBG.session.msgClass + " strong").html(LBG.session
            .exitMsg);
        if (!LBG.session.hideLogonButton) {
            var $primary = $("<li></li>").addClass("primaryAction").appendTo(
                $actions);
            var $primaryLink = $("<a></a>").attr("href", LBG.session.exitPrimaryBtnLink)
                .appendTo($primary);
            var $primaryImg = $(LBG.session.exitPrimaryBtnImg).attr(
                "alt", LBG.session.exitPrimaryBtnAlt).removeAttr(
                "width").removeAttr("height").appendTo($primaryLink);
        } else {
            $actions.css("display", "none");
        }
        LBG.ajax.pageUpdated($(LBG.common.escapeSpecialCharsInId(LBG.overlay
            .overlayID)), false);
        $(LBG.common.escapeSpecialCharsInId(LBG.overlay.maskID)).addClass(
            LBG.session.loggedOutOverlayClass);
    },
    ping: function(path) {
        if (!path) {
            return false;
        }
        $.ajax({
            url: path,
            dataType: "json",
            success: function(response) {
                if (response.isActive === true) {
                    LBG.overlay.close();
                    LBG.session.init();
                } else {
                    LBG.session.loggedOutMsg();
                    window.clearTimeout(LBG.session.timeOut);
                }
            },
            error: function() {
                LBG.session.loggedOutMsg();
                window.clearTimeout(LBG.session.timeOut);
            }
        });
    }
};
LBG.sessionNotLoggedIn = {
    sessionActive: false,
    duration: DI.sessionNotLoggedIn.duration,
    logoutClass: "logoutWarning",
    msgClass: "logoutMsg",
    actionsClass: "actions",
    loggedOutOverlayClass: "dark",
    loggedOutTitle: DI.lang.sessionNotLoggedIn.loggedOutTitle,
    loggedOutMsgText: LBG.common.formatPlaceholder.call(DI.lang.sessionNotLoggedIn
        .loggedOutMsgText, Math.floor(DI.sessionNotLoggedIn.duration /
            60000)),
    loggedOutButtonSrc: DI.lang.sessionNotLoggedIn.loggedOutButton,
    loggedOutButtonAlt: DI.lang.sessionNotLoggedIn.loggedOutAlt,
    loggedOutLinkPath: DI.lang.sessionNotLoggedIn.loggedOutLink,
    allow: function() {
        this.sessionActive = true;
        this.init();
    },
    preloadImg: function(src) {
        var img = new Image();
        img.src = src;
        return img;
    },
    init: function() {
        if (LBG.sessionNotLoggedIn.sessionActive) {
            LBG.sessionNotLoggedIn.loggedOutImg = LBG.sessionNotLoggedIn
                .preloadImg(LBG.sessionNotLoggedIn.loggedOutButtonSrc);
            window.clearTimeout(LBG.sessionNotLoggedIn.timeOut);
            LBG.sessionNotLoggedIn.timeOut = window.setTimeout(function() {
                LBG.overlay.open(LBG.sessionNotLoggedIn.buildMsg(),
                    null, false, false);
                $(".logoutWarning img").removeAttr("width").removeAttr(
                    "height");
                window.clearTimeout(LBG.sessionNotLoggedIn.timeOut);
                try {
                    window.focus();
                } catch (e) {}
            }, LBG.sessionNotLoggedIn.duration);
        }
    },
    buildMsg: function() {
        var logoutSession = $("<div></div>").attr("class", LBG.sessionNotLoggedIn
            .logoutClass);
        $("<h2>" + LBG.sessionNotLoggedIn.loggedOutTitle + "</h2>").appendTo(
            logoutSession);
        var msg = $("<div></div>").attr("class", LBG.sessionNotLoggedIn
            .msgClass);
        $("<p><strong>" + LBG.sessionNotLoggedIn.loggedOutMsgText +
            "</strong></p>").appendTo(msg);
        msg.appendTo(logoutSession);
        var actions = $("<ul></ul>").attr("class", LBG.sessionNotLoggedIn
            .actionsClass);
        var logoutImg = $(LBG.sessionNotLoggedIn.loggedOutImg).attr(
            "alt", LBG.sessionNotLoggedIn.loggedOutButtonAlt);
        var logoutLink = $("<a></a>").attr("href", LBG.sessionNotLoggedIn
            .loggedOutLinkPath).append(logoutImg);
        $("<li></li>").append(logoutLink).appendTo(actions);
        actions.appendTo(logoutSession);
        return logoutSession;
    }
};
LBG.miniSession = {
    sessionActive: false,
    duration: DI.session.miniDuration,
    logoutClass: "logoutWarning",
    msgClass: "logoutMsg",
    actionsClass: "actions",
    loggedOutOverlayClass: "dark",
    loginButtonSrc: DI.lang.session.loginButton,
    loginButtonAlt: DI.lang.session.loginAlt,
    loginLinkPath: DI.lang.session.loginLink,
    loggedOutTitle: DI.lang.session.loggedOutTitle,
    loggedOutMsgText: LBG.common.formatPlaceholder.call(DI.lang.session.loggedOutMsgText,
        Math.ceil((DI.session.miniDuration) / 60000)),
    allow: function() {
        this.sessionActive = true;
        this.init();
    },
    preloadImg: function(src) {
        var img = new Image();
        img.src = src;
        return img;
    },
    init: function() {
        if (LBG.miniSession.sessionActive) {
            LBG.sessionTerminate.init();
            LBG.miniSession.loginImg = LBG.sessionNotLoggedIn.preloadImg(
                LBG.miniSession.loginButtonSrc);
            window.clearTimeout(LBG.miniSession.timeOut);
            LBG.miniSession.timeOut = window.setTimeout(function() {
                LBG.overlay.open(LBG.miniSession.buildMsg(),
                    null, false, false);
                LBG.miniSession.loggedOutMsg();
                window.clearTimeout(LBG.miniSession.timeOut);
                try {
                    window.focus();
                } catch (e) {}
            }, LBG.miniSession.duration);
        }
    },
    buildMsg: function() {
        var logout = $("<div></div>").attr("class", LBG.miniSession.logoutClass);
        $("<h2>" + LBG.miniSession.loggedOutTitle + "</h2>").appendTo(
            logout);
        var msg = $("<div></div>").attr("class", LBG.miniSession.msgClass);
        $("<p><strong>" + LBG.miniSession.loggedOutMsgText +
            "</strong></p>").appendTo(msg);
        msg.appendTo(logout);
        var actions = $("<ul></ul>").attr("class", LBG.miniSession.actionsClass);
        var loginImg = $(LBG.miniSession.loginImg).attr("alt", LBG.miniSession
            .loginButtonAlt);
        var loginLink = $("<a></a>").attr("href", LBG.miniSession.loginLinkPath)
            .append(loginImg);
        $("<li></li>").addClass("primaryAction").append(loginLink).appendTo(
            actions);
        actions.appendTo(logout);
        return logout;
    },
    loggedOutMsg: function() {
        LBG.ajax.pageUpdated($(LBG.common.escapeSpecialCharsInId(LBG.overlay
            .overlayID)), false);
        $(LBG.common.escapeSpecialCharsInId(LBG.overlay.maskID)).addClass(
            LBG.miniSession.loggedOutOverlayClass);
    }
};
LBG.sessionTerminate = {
    terminateUrl: DI.sessionTerminate.url,
    dataSelector: "input:hidden.sessionTerminate",
    isEnabled: false,
    isReload: false,
    allowSend: false,
    sendTerminate: function() {
        if (LBG.sessionTerminate.isEnabled === true) {
            LBG.sessionTerminate.isEnabled = false;
            $.ajax({
                type: "GET",
                async: false,
                url: LBG.sessionTerminate.terminateUrl,
                data: $(LBG.sessionTerminate.dataSelector).serialize()
            });
        }
    },
    init: function() {
        var nav = navigator.appVersion.toLowerCase();
        var os = {
            win: (nav.indexOf("win") !== -1) ? true : false,
            mac: (nav.indexOf("mac") !== -1) ? true : false
        };
        var $data = $(LBG.sessionTerminate.dataSelector);
        if ($data.length > 0 && $data.val() !== "") {
            LBG.sessionTerminate.isEnabled = true;
            $(document).bind("keydown", function(event) {
                var SHIFT = event.shiftKey,
                    CTRL = event.ctrlKey,
                    ALT = event.altKey,
                    KEY = (event.keyCode ? event.keyCode :
                        event.which);
                if (event.clientY < 0) {
                    var F5 = !CTRL && !SHIFT && KEY === 116,
                        CTRLR = CTRL && !SHIFT && KEY === 82,
                        CTRLF5 = CTRL && !SHIFT && KEY === 116,
                        SHIFTF5 = !CTRL && SHIFT && KEY === 116,
                        CTRLSHIFTR = CTRL && SHIFT && KEY ===
                        82;
                    LBG.sessionTerminate.isReload = (F5 ||
                        CTRLR || CTRLF5 || SHIFTF5 ||
                        CTRLSHIFTR);
                }
                var allowMozilla = $.browser.mozilla && $.browser
                    .version >= "1.9.1",
                    allowIE = $.browser.msie && $.browser.version >=
                    "7";
                var ALTF4 = os.win && ALT && KEY === 115,
                    CTRLW = CTRL && !SHIFT && KEY === 87,
                    CTRLF4 = ($.browser.safari || allowIE ||
                        allowMozilla) && !SHIFT && CTRL && !ALT &&
                    KEY === 115,
                    CTRLSHIFTW = !$.browser.msie && CTRL &&
                    SHIFT && KEY === 87;
                LBG.sessionTerminate.allowSend = (ALTF4 ||
                    CTRLW || CTRLF4 || CTRLSHIFTW);
            });
            $(window).bind("beforeunload", function(event) {
                var x = 0;
                var y = 0;
                if (event.pageX || event.pageY) {
                    x = event.pageX;
                    y = event.pageY;
                } else {
                    if (event.clientX || event.clientY) {
                        x = event.clientX;
                        y = event.clientY;
                    }
                }
                var cursorAtCloseButton = (y < 0) ? x > $(
                    document).width() - 60 && y < 0 : false;
                if (LBG.sessionTerminate.allowSend === true ||
                    (y < 0 && LBG.sessionTerminate.isReload ===
                        false && cursorAtCloseButton === true)) {
                    LBG.sessionTerminate.sendTerminate();
                }
            });
        }
    }
};
LBG.authPolling = {
    isSubmitting: false,
    init: function() {
        if ($("div.authPanel").length === 0) {
            return;
        }
        $("form").hide();
        $("div.inner.dash").hide();
        window.setTimeout(function() {
            window.clearInterval(LBG.authPolling.interval);
            LBG.authPolling.processResponse(DI.authPolling.timeoutData);
        }, DI.authPolling.timeoutInterval);
        LBG.authPolling.interval = window.setInterval(function() {
            $.getJSON(LBG.common.ajax.tagUrl(DI.authPolling.url),
                LBG.authPolling.processResponse);
        }, DI.authPolling.frequency);
    },
    processResponse: function(json) {
        var i = 0;
        for (var k in json) {
            if (json.hasOwnProperty(k)) {
                $('<input type="hidden">').attr({
                    name: k,
                    value: json[k]
                }).appendTo("form");
                ++i;
            }
        }
        if (i && !LBG.authPolling.isSubmitting) {
            LBG.authPolling.isSubmitting = true;
            window.clearInterval(LBG.authPolling.interval);
            $("form input[type=image]").click(function(e) {
                LBG.Forms.Validation._submitManagement(e);
            }).click();
        }
    }
};
LBG.ajax = {
    pageUpdated: function(focusEL, timeout) {
        LBG.common.ajax.updateBuffer();
        if (focusEL) {
            if ($.isArray(focusEL) || (focusEL.length > 0)) {
                focusEL[0].focus();
            } else {
                focusEL.focus();
            }
        }
        if (timeout !== false) {
            LBG.session.init();
        }
    }
};
LBG.submitOnChange = (function() {
    var submitSelector = "select.submitOnChange";
    var hiddenInputSelector = "input[type=image], input[type=submit]";

    function handleChange() {
        $(this).parents("form:first").find(hiddenInputSelector).eq(
            0).click(function(e) {
            LBG.Forms.Validation._submitManagement(e);
        }).click();
    }

    function setup() {
        $(this).change(handleChange);
        $(this).parents("form:first").find(hiddenInputSelector).eq(
            0).hide();
    }
    return {
        init: function() {
            $(submitSelector).each(setup);
        }
    };
}());
LBG.compareSelection = (function() {
    var PANEL = "ul.comparisonSelectList",
        CHECKBOXES = ".addToCompare input:checkbox",
        BUTTONS = ".comparisonSelectAction input",
        DISABLED_SUFFIX = "_disabled",
        MIN = 2,
        MAX = 3;
    return {
        init: function() {
            var $panel = $(PANEL);
            if (!$panel.length) {
                return;
            }
            var $buttons = $(BUTTONS),
                $checkboxes = $(CHECKBOXES);
            $buttons.each(function() {
                this.state_hi = this.src;
                this.state_lo = this.src.replace(
                    /(?=\.[^.]+$)/, DISABLED_SUFFIX);
            });
            var handleChangeEvent = function() {
                var count = $checkboxes.filter(":checked").length;
                if (count < MIN) {
                    $buttons.each(function() {
                        this.disabled = true;
                        this.src = this.state_lo;
                    });
                } else {
                    if (count >= MAX) {
                        $checkboxes.not(":checked").each(
                            function() {
                                this.disabled = true;
                            });
                    } else {
                        $buttons.each(function() {
                            this.disabled = false;
                            this.src = this.state_hi;
                        });
                        $checkboxes.each(function() {
                            this.disabled = false;
                        });
                    }
                }
            };
            $panel.bind("click", handleChangeEvent);
            handleChangeEvent();
        }
    };
})();
LBG.ajaxLink = {
    ajaxLinkSel: ".ajaxLink",
    placeHolderSel: ".ajaxPlaceholder",
    maximumTraverse: 7,
    init: function() {
        var $el = $(LBG.ajaxLink.ajaxLinkSel);
        $el.bind("click", LBG.ajaxLink.onClick);
    },
    onClick: function(e) {
        e.preventDefault();
        var o, k;
        var $el = $(this);
        $el[0].callback = $el[0].callback || function() {};

        function loader(k, $link) {
            var url = ($link.metadata().async) ? $link.metadata().async
                .url : $link.attr("href");
            $(k).load(url, function(e) {
                LBG.Forms.Validation.init($(k));
                $link[0].callback($(this), e);
                $(k).find(".btnCancel").click(function(e) {
                    e.preventDefault();
                    $(k).html("");
                });
            });
        }
        for (o = 0; o < LBG.ajaxLink.maximumTraverse; o++) {
            k = LBG.ajaxLink.travCheck($el);
            if (k.length) {
                loader(k, $(this));
                break;
            } else {
                $el = $el.parent();
            }
        }
    },
    travCheck: function($el) {
        return $el.find(LBG.ajaxLink.placeHolderSel).eq(0);
    }
};
LBG.addressFinder = {
    handlers: [],
    addressDataStub: DI.lang.addressFinder.addressPickerStubData,
    isNumeric: function(value) {
        return LBG.Forms.Validation.Routines.simpleRegexTest(LBG.Forms.Validation
            .Expressions.numeric, value);
    },
    finder: function(wrapper, uniqueID) {
        this.uniqueID = uniqueID;
        this.$wrapper = $(wrapper);
        this.$header = $(wrapper).find(".addressHeader");
        this.formValidationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            this.$wrapper);
        this.isPreviousAddress = this.$wrapper.hasClass(
            "previousAddress");
        this.panels = [];
        this.panels.push(this.$panelSelectedAddress = this.$wrapper.find(
            "div.selectedAddress"));
        this.panels.push(this.$panelFindAddress = this.$wrapper.find(
            "div.findAddress"));
        this.panels.push(this.$panelyearsAtCurrent = this.$wrapper.find(
            "div.timeYearsMonths"));
        this.panels.push(this.$panelSelectAddress = this.$wrapper.find(
            "div.selectAddress"));
        this.panels.push(this.$panelManualAddress = this.$wrapper.find(
            "div.manualAddress"));
        this.panels.push(this.$panelBFPOAddress = this.$wrapper.find(
            "div.BFPOAddress"));
        if (this.isPreviousAddress) {
            this.$currentTimeAtAddress = this.$wrapper.prev(
                "div.timeYearsMonths");
            this.panels.push(this.$previousTimeAtAddress = this.$wrapper
                .find("div.timeYearsMonths"));
        }
        this.postcode = "";
        this.addressData = {};
        this.btnFindAddressSrcEnabled = this.$panelFindAddress.find(
            "input:image")[0].src;
        this.btnFindAddressSrcDisabled = this.$panelFindAddress.find(
            "input:image")[0].className.split("disabledSrc:")[1];
        this.$wrapper.parents("form").find(".hideJS").find(
            "input, select").attr("tabIndex", -1);
        this.setup();
    },
    init: function() {
        $("fieldset.addressFinder").each(function(i) {
            LBG.addressFinder.handlers.push(new LBG.addressFinder
                .finder(this, i));
        });
    }
};
LBG.addressFinder.finder.prototype = {
    getValidationName: function($formField) {
        return LBG.Forms.Validation.Tools.convertClassDetailsToData(
            $formField[0], "validationName:")[0];
    },
    getValidationHandler: function($formField) {
        return this.formValidationHandler.getChild(this.getValidationName(
            $formField));
    },
    hideErrors: function($panel) {
        var self = this;
        var $errorFormFields = $panel.is("div.formField.error") ?
            $panel : $panel.find("div.formField.error");
        var validationHandler;
        $errorFormFields.each(function() {
            validationHandler = self.getValidationHandler($(
                this));
            validationHandler.isShowingError = true;
            if ($.browser.msie && $.browser.version < 7) {
                window.setTimeout(function() {
                    validationHandler.hideError();
                }, 30);
            } else {
                validationHandler.hideError();
            }
        });
    },
    showPanel: function($panel) {
        var self = this;
        var arrayRemove = function(arr, $panel) {
            return $.grep(arr, function(value) {
                return value !== $panel;
            });
        };
        var show = function($element) {
            $element.removeClass("hideAddressPanel");
            if ($.browser.msie && $.browser.version < 7) {
                $element.css("display", "none").css("display",
                    "block");
            }
        };
        var hide = function($element) {
            $element.addClass("hideAddressPanel");
            if ($.browser.msie && $.browser.version < 7) {
                $element.css("display", "block").css("display",
                    "none");
            }
        };
        for (var i = 0; i < this.panels.length; i++) {
            if (this.panels[i] === $panel || (this.panels[i] === this.$previousTimeAtAddress &&
                this.isPreviousAddress)) {
                show(this.panels[i]);
            } else {
                hide(this.panels[i]);
            }
            this.hideErrors(this.panels[i]);
        }
        if ($panel === this.$panelFindAddress) {
            this.resetFields();
        }
        if (this.$panelManualAddress.is(":visible")) {
            this.$wrapper.find("p.useAddressFinder").removeClass(
                "hideAddressPanel");
        } else {
            this.$wrapper.find("p.useAddressFinder").addClass(
                "hideAddressPanel");
        } if (this.$panelBFPOAddress.is(":not(.hideAddressPanel)")) {
            this.resetFields();
            show(this.$panelFindAddress);
            this.$panelFindAddress.find("input:image:first").attr("src",
                this.btnFindAddressSrcDisabled);
            this.$panelFindAddress.addClass("isDisabled").find(":input")
                .attr("disabled", "disabled");
            this.$header.addClass("isDisabled");
        } else {
            this.$panelFindAddress.removeClass("isDisabled").find(
                ":input").removeAttr("disabled");
            this.$panelFindAddress.find("input:image:first").attr("src",
                this.btnFindAddressSrcEnabled);
            this.$header.removeClass("isDisabled");
        } if ($panel === this.$panelFindAddress || $panel === this.$panelManualAddress ||
            $panel === this.$panelBFPOAddress) {
            $panel.find("input:text:first").focus();
        }
    },
    resetFields: function() {
        this.postcode = "";
        this.addressData = {};
        for (var i = 0; i < this.panels.length; i++) {
            this.panels[i].find("input:text").val("");
        }
        this.$panelSelectAddress.find("select").empty();
    },
    updateAddressList: function($panel) {
        var self = this;
        var text = "";
        var data = {};
        var $postcodeFinder = $panel.find("div.postcodeFinder");
        var postcodeVal = $postcodeFinder.find("input:text").val();
        var $addressList = this.$panelSelectAddress.find(
            "div.addressList select");
        var validationHandler = this.getValidationHandler(
            $postcodeFinder);
        validationHandler.validate();
        if (!validationHandler.isValid || postcodeVal === this.postcode) {
            if ($.trim(postcodeVal) === "") {
                validationHandler.showError("required");
            }
            return false;
        }
        this.postcode = postcodeVal;
        this.addressData = {};
        $addressList.empty();
        validationHandler = this.getValidationHandler(this.$panelSelectAddress
            .find("div.addressList"));
        validationHandler.hideError();

        function onFail() {
            $postcodeFinder.find("span.error").remove();
            $postcodeFinder.addClass("error").append($("<span />").addClass(
                "error").html(Messages.noAddressesFound));
            var postcodeInput = $(".formField.wtError input:text");
            if ($(".formField.wtError.postCodeFindAddress").hasClass(
                ".error")) {
                LBG.track({
                    "WT.ti": postcodeInput.attr("id"),
                    "DCSext.CurrentPostcode": postcodeInput
                        .attr("value"),
                    "DCSext.CurrentPostcodeValid": "noaddress"
                });
            }
            if (self.$panelFindAddress.is(":visible")) {
                self.$panelFindAddress.find(".cantFindAddress").removeClass(
                    "hideAddressPanel");
            }
        }
        $.ajax({
            url: LBG.addressFinder.addressDataStub,
            cache: false,
            dataType: "json",
            type: "GET",
            data: {
                "addressFinderUniqueID": self.uniqueID,
                "postalCode": self.postcode
            },
            error: function(data) {
                onFail();
            },
            success: function(data) {
                self.addressData = data;
                var testResponse = (typeof(self.addressData
                        .addresses) !== "undefined") ? self
                    .addressData.addresses.length === 0 :
                    true;
                if (testResponse) {
                    onFail();
                } else {
                    var labelOption = 0;
                    var label = $addressList.prev("label");
                    if ($addressList[0].size <= 1) {
                        $addressList[0].options[0] = new Option(
                            label.text(), "-");
                        labelOption = 1;
                        label.addClass("postit");
                    }
                    var existingOptions = $addressList[0].options
                        .length;
                    for (var i = 0, len = self.addressData.addresses
                        .length; i < len; i++) {
                        text = "";
                        data = self.addressData.addresses[i];
                        if (!LBG.common.isNull(data.numberOrName)) {
                            text += data.numberOrName;
                        }
                        if (!LBG.common.isNull(data.streetName)) {
                            text += (text !== "") ? " " +
                                data.streetName : data.streetName;
                        }
                        if (!LBG.common.isNull(data.district)) {
                            text += (text !== "") ? ", " +
                                data.district : data.district;
                        }
                        if (!LBG.common.isNull(data.townOrCity)) {
                            text += (text !== "") ? ", " +
                                data.townOrCity : data.townOrCity;
                        }
                        if (!LBG.common.isNull(data.county)) {
                            text += (text !== "") ? ", " +
                                data.county : data.county;
                        }
                        $addressList[0].options[i +
                            labelOption] = new Option(
                            text, i);
                    }
                    self.$panelSelectAddress.find(
                        "div.postcodeFinder input:text"
                    ).val(self.postcode);
                    self.showPanel(self.$panelSelectAddress);
                    self.$panelSelectAddress.find("a:first")
                        .focus();
                    self.$panelSelectAddress.find(
                        "select:not(.single)").focus();
                }
            }
        });
    },
    updateSelectedAddress: function() {
        var self = this;
        var data = {};
        var html = "";
        var $postcodeFinder = this.$panelSelectAddress.find(
            "div.postcodeFinder");
        var $addressList = this.$panelSelectAddress.find(
            "div.addressList");
        var $addressParagraph = this.$panelSelectedAddress.find(
            "div.adr");
        var $btnChangeAddress = this.$panelSelectedAddress.find(
            "ul.linkList a.changeAddress");
        var validationHandlerAddressList = this.getValidationHandler(
            $addressList);
        var validationHandlerPostcode = this.getValidationHandler(
            $postcodeFinder);
        validationHandlerAddressList.validate();
        validationHandlerPostcode.validate();
        if (!validationHandlerPostcode.isValid) {
            $postcodeFinder.find("input:text").val(this.postcode);
            validationHandlerPostcode.hideError();
        }
        if (!validationHandlerAddressList.isValid) {
            return false;
        }
        data = self.addressData.addresses[$addressList.find("select").val()];
        if (!LBG.common.isNull(data.numberOrName) || !LBG.common.isNull(
            data.streetName)) {
            html += '<span class="street-address">';
            html += !LBG.common.isNull(data.numberOrName) ? data.numberOrName :
                "";
            html += !LBG.common.isNull(data.streetName) && !LBG.common.isNull(
                data.numberOrName) ? " " : "";
            html += !LBG.common.isNull(data.streetName) ? data.streetName :
                "";
            html += "</span>";
        }
        html += !LBG.common.isNull(data.district) ?
            '<span class="district">' + data.district + "</span>" : "";
        html += !LBG.common.isNull(data.townOrCity) ?
            '<span class="town">' + data.townOrCity + "</span>" : "";
        html += !LBG.common.isNull(data.county) ?
            '<span class="county">' + data.county + "</span>" : "";
        html += !LBG.common.isNull(data.postcode) ?
            '<span class="postcode">' + data.postcode + "</span>" : "";
        $addressParagraph.html(html);
        this.showPanel(this.$panelSelectedAddress);
        $btnChangeAddress.focus();
    },
    getTimeAtAddress: function($target) {
        var $inputs = this.$currentTimeAtAddress.find(".field");
        var years = $inputs.eq(0).val();
        var months = $inputs.eq(1).val();
        if ($target === $inputs.eq(0) && $target.val() === "" || months ===
            "") {
            months = 0;
        }
        if (parseInt(months, 10) === 12) {
            return false;
        }
        if (LBG.addressFinder.isNumeric(years) && LBG.addressFinder.isNumeric(
            months)) {
            years = parseInt(years, 10) + parseInt(months / 12, 10);
            if (years < 3) {
                if (this.$wrapper.is(":hidden")) {
                    this.showPanel(this.$panelFindAddress);
                    this.$wrapper.removeClass("hideAddressPanel").show();
                }
            } else {
                this.resetFields();
                this.$wrapper.hide();
            }
        }
    },
    removeTextBFPO: function($element) {
        if ($element.text().indexOf("BFPO") !== -1) {
            $element.text($element.text().replace("BFPO ", ""));
        }
    },
    setup: function() {
        var self = this;
        if (this.$panelBFPOAddress.is(":hidden")) {
            this.$panelFindAddress.removeClass("isDisabled").find(
                ":input").removeAttr("disabled");
            this.$header.removeClass("isDisabled");
        }
        self.$wrapper.nextAll(".hideUntilAddress:first").hide();
        var handlerSelectedAddress = function(event) {
            event.preventDefault();
            if ($(this).hasClass("BFPOAddress")) {
                self.showPanel(self.$panelBFPOAddress);
            } else {
                self.showPanel(self.$panelFindAddress);
                self.removeTextBFPO(self.$wrapper.find(
                    "div.selectedAddress a.changeAddress"));
                self.removeTextBFPO(self.$wrapper.find(
                    "div.addressHeader h3"));
            }
        };
        var handlerFindAddress = function(event) {
            if (event.type === "click" || (event.type ===
                "keypress" && event.keyCode === 13)) {
                self.updateAddressList(self.$panelFindAddress);
            }
        };
        var handlerChangeAddress = function(event) {
            if (event.type === "click" || (event.type ===
                "keypress" && event.keyCode === 13)) {
                self.updateAddressList(self.$panelSelectAddress);
            }
        };
        var handlerSingleSelectAddress = function(event) {
            if ($(this).val() !== "-") {
                self.$wrapper.nextAll(".hideUntilAddress:first").show();
            } else {
                self.$wrapper.nextAll(".hideUntilAddress:first").hide();
            }
        };
        var handlerSelectAddress = function(event) {
            if (event.type === "click" || event.type === "dblclick" ||
                (event.type === "keypress" && event.keyCode === 13)
            ) {
                self.updateSelectedAddress();
                return false;
            }
        };
        var handlerCantFindAddress = function(event) {
            if ($(this).attr("href")) {
                event.preventDefault();
            }
            if (event.type === "click" || (event.type ===
                "keypress" && event.keyCode === 13)) {
                self.showPanel(self.$panelManualAddress);
            }
        };
        var handlerUseAddressFinder = function(event) {
            event.preventDefault();
            self.showPanel(self.$panelFindAddress);
            self.removeTextBFPO(self.$wrapper.find(
                "div.selectedAddress a.changeAddress"));
            self.removeTextBFPO(self.$wrapper.find(
                "div.addressHeader h3"));
            self.$wrapper.nextAll(".hideUntilAddress:first").hide();
        };
        var handlerBFPOAddress = function(event) {
            event.preventDefault();
            self.showPanel(self.$panelBFPOAddress);
        };
        this.$panelSelectedAddress.find("a.changeAddress").click(
            handlerSelectedAddress);
        this.$panelFindAddress.find("div.postcodeFinder input:text").keypress(
            handlerFindAddress);
        this.$panelFindAddress.find("div.postcodeFinder input:image").keypress(
            handlerFindAddress).click(handlerFindAddress);
        this.$panelFindAddress.find(".cantFindAddress input:image").keypress(
            handlerCantFindAddress).click(handlerCantFindAddress);
        this.$panelSelectAddress.find("div.postcodeFinder input:text").keypress(
            handlerChangeAddress);
        this.$panelSelectAddress.find("div.postcodeFinder input:image")
            .keypress(handlerChangeAddress).click(handlerChangeAddress);
        this.$panelSelectAddress.find("div.addressList select").keypress(
            handlerSelectAddress).dblclick(handlerSelectAddress);
        this.$panelSelectAddress.find("div.addressList select.single").change(
            handlerSingleSelectAddress);
        this.$panelSelectAddress.find("div.addressList input:image").keypress(
            handlerSelectAddress).click(handlerSelectAddress);
        this.$panelSelectAddress.find(".cantFindAddress input:image").keypress(
            handlerCantFindAddress).click(handlerCantFindAddress);
        this.$panelSelectAddress.find(
            ".cantFindAddress a:not(.cxtTrigger)").keypress(
            handlerCantFindAddress).click(handlerCantFindAddress);
        this.$wrapper.find("p.useAddressFinder a").click(
            handlerUseAddressFinder);
        this.$panelManualAddress.find("input:text").keypress(function(e) {
            if (e.keyCode === 13) {
                $(this).parents("form").find(".submitAction").click();
            }
        });
        this.$wrapper.find(
            "div.applyBFPO:not(div.BFPOAddress div.applyBFPO) a:not(.cxtTrigger)"
        ).click(handlerBFPOAddress);
        this.$wrapper.find(
            "div.BFPOAddress div.applyBFPO a:not(.cxtTrigger)").click(
            handlerUseAddressFinder);
        if (this.isPreviousAddress) {
            this.$currentTimeAtAddress.find("input:text").blur(function() {
                self.getTimeAtAddress($(this));
            });
            this.$currentTimeAtAddress.find("select").change(function() {
                self.getTimeAtAddress($(this));
            });
        }
    }
};
LBG.ajaxPoweredAddressFinder = {
    init: function() {
        var $elementsForAjaxResponseInjection = $(
            "div.ajaxPoweredAddressFinder");
        if ($elementsForAjaxResponseInjection.length === 0) {
            return false;
        }
        var ajaxPoweredAddressFinders = [];
        var $manualAddressFieldset = $("fieldset.enterAddressManually");
        var validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            $manualAddressFieldset);
        for (var i = 0, len = $elementsForAjaxResponseInjection.length; i <
            len; i++) {
            ajaxPoweredAddressFinders.push(new LBG.ajaxPoweredAddressFinder
                .ajaxPoweredAddressFinder($(
                    $elementsForAjaxResponseInjection[i]), i));
        }
        var formID = $elementsForAjaxResponseInjection.parents("form").attr(
                "id"),
            $yearsAtCurrentAddress = $(LBG.common.escapeSpecialCharsInId(
                formID + ":txtYearsAtCurrentAddress")),
            $monthsAtCurrentAddress = $(LBG.common.escapeSpecialCharsInId(
                formID + ":txtMonthsAtCurrentAddress"));
        if ($(".personalDetails").length > 0) {
            ajaxPoweredAddressFinders[0].isPersonalDetailsPostcodeFinder =
                true;
        }
        if ($yearsAtCurrentAddress.get(0) !== undefined &&
            $monthsAtCurrentAddress.get(0) !== undefined) {
            var $parentFormField = $yearsAtCurrentAddress.parents(
                "div.formField");
            var years, months;
            var focusAndBlurEventCapturing = function(e) {
                var evt = e || window.event;
                var tgt = evt.target || evt.srcElement;
                if (tgt === $yearsAtCurrentAddress.get(0) || tgt ===
                    $monthsAtCurrentAddress.get(0)) {
                    years = $yearsAtCurrentAddress.val();
                    months = $monthsAtCurrentAddress.val();
                    if (tgt === $monthsAtCurrentAddress.get(0) &&
                        tgt.value === "" || months === "") {
                        months = 0;
                    }
                    if (LBG.Forms.Validation.Routines.simpleRegexTest(
                            LBG.Forms.Validation.Expressions.numeric,
                            years) && LBG.Forms.Validation.Routines
                        .simpleRegexTest(LBG.Forms.Validation.Expressions
                            .numeric, months)) {
                        if (parseInt(years, 10) < 3 && parseInt(
                                months, 10) < 12 && jQuery(
                                $elementsForAjaxResponseInjection[0]
                            ).html().length === 0 &&
                            $manualAddressFieldset.get(0).style.display !==
                            "block") {
                            $.ajax({
                                url: ajaxPoweredAddressFinders[
                                        0].isPersonalDetailsPostcodeFinder ?
                                    DI.lang.personalDetailsAddressFinder
                                    .postCodeFinderStub : DI
                                    .lang.addressFinder.postCodeFinderStub,
                                dataType: "html",
                                success: function(data) {
                                    ajaxPoweredAddressFinders
                                        [0].injectNewFormFields(
                                            data);
                                    ajaxPoweredAddressFinders
                                        [0].processPostcodeFinder();
                                }
                            });
                        } else {
                            if (parseInt(years, 10) >= 3 &&
                                parseInt(months, 10) < 12 && $(
                                    $elementsForAjaxResponseInjection[
                                        0]).html().length > 0) {
                                ajaxPoweredAddressFinders[0].injectNewFormFields(
                                    null);
                                $manualAddressFieldset.hide();
                                LBG.ajax.pageUpdated();
                            } else {
                                if (parseInt(years, 10) >= 3 && $(
                                    $elementsForAjaxResponseInjection[
                                        0]).html().length === 0) {
                                    $manualAddressFieldset.hide();
                                    LBG.ajax.pageUpdated();
                                }
                            }
                        }
                    }
                }
            };
            if ($.browser.msie) {
                $parentFormField.get(0).onfocusout =
                    focusAndBlurEventCapturing;
            } else {
                $parentFormField.get(0).addEventListener("blur",
                    focusAndBlurEventCapturing, true);
            }
        } else {
            for (i = 0, len = ajaxPoweredAddressFinders.length; i < len; i++) {
                ajaxPoweredAddressFinders[i].processPostcodeFinder();
            }
        }
        $manualAddressFieldset.hide();
        validationHandler.removeChildren($manualAddressFieldset);
    }
};
LBG.ajaxPoweredAddressFinder.ajaxPoweredAddressFinder = function(
    $elementForAjaxResponseInjection, addressFinderUniqueID) {
    var that = this;
    this.$elementForAjaxResponseInjection =
        $elementForAjaxResponseInjection;
    this.addressFinderUniqueID = addressFinderUniqueID;
    this.isPersonalDetailsPostcodeFinder = false;
    this.$enterAddressManuallyFieldset = $("fieldset.enterAddressManually");
    this.parentValidationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
        this.$elementForAjaxResponseInjection);
};
LBG.ajaxPoweredAddressFinder.ajaxPoweredAddressFinder.prototype = {
    injectNewFormFields: function(htmlStubToInject) {
        this.parentValidationHandler.removeChildren(this.$elementForAjaxResponseInjection);
        if (htmlStubToInject === null) {
            this.$elementForAjaxResponseInjection.empty();
        } else {
            this.$elementForAjaxResponseInjection.html(htmlStubToInject);
            if ($.browser.msie && $.browser.version >= 8) {
                $("input:visible,select:visible,textarea:visible", this
                    .$elementForAjaxResponseInjection).eq(0).focus();
            }
        }
        this.parentValidationHandler.isValid = false;
        LBG.common.explorerRedrawFix();
        LBG.ajax.pageUpdated();
        LBG.Forms.Validation.Tools.setMultipleFieldValidation(this.$elementForAjaxResponseInjection);
        this.parentValidationHandler.findChildren(this.$elementForAjaxResponseInjection);
    },
    processPostcodeFinder: function() {
        var that = this,
            $enterAddressManuallyLink = this.$elementForAjaxResponseInjection
            .find("a"),
            postCodeFinderFormfieldElement = this.$elementForAjaxResponseInjection
            .find("div.formField")[0],
            postCodeFinderFormfieldName;
        if (!postCodeFinderFormfieldElement) {
            return;
        }
        postCodeFinderFormfieldName = LBG.Forms.Validation.Tools.convertClassDetailsToData(
            postCodeFinderFormfieldElement, "validationName:")[0];

        function loadManualAddressForm(event) {
            event.preventDefault();
            that.parentValidationHandler.remove(
                postCodeFinderFormfieldName);
            that.$elementForAjaxResponseInjection.empty();
            that.$enterAddressManuallyFieldset.show();
            that.$enterAddressManuallyFieldset.find("input:text").each(
                function() {
                    this.ready = false;
                });
            that.parentValidationHandler.findChildren(that.$enterAddressManuallyFieldset);
            that.processManualAddressForm(that.$enterAddressManuallyFieldset);
            LBG.ajax.pageUpdated();
        }
        $enterAddressManuallyLink.bind("click", loadManualAddressForm);
        var $findAddressInput = this.$elementForAjaxResponseInjection.find(
            "input:image");
        if (postCodeFinderFormfieldElement !== undefined) {
            var loadAddressSelector = function(event) {
                var addressData;
                if (that.parentValidationHandler.getChild(
                        postCodeFinderFormfieldName).isValid ===
                    true) {
                    var integrateAddressData = function(addressData) {
                        var option, data, text;
                        for (var i = 0, len = addressData.addresses
                            .length; i < len; i++) {
                            text = "";
                            data = addressData.addresses[i];
                            option = document.createElement(
                                "option");
                            option.setAttribute("value", i);
                            if (!LBG.common.isNull(data.numberOrName)) {
                                text += data.numberOrName;
                            }
                            if (!LBG.common.isNull(data.streetName)) {
                                text += (text !== "") ? " " +
                                    data.streetName : data.streetName;
                            }
                            if (!LBG.common.isNull(data.district)) {
                                text += (text !== "") ? ", " +
                                    data.district : data.district;
                            }
                            if (!LBG.common.isNull(data.townOrCity)) {
                                text += (text !== "") ? ", " +
                                    data.townOrCity : data.townOrCity;
                            }
                            if (!LBG.common.isNull(data.county)) {
                                text += (text !== "") ? ", " +
                                    data.county : data.county;
                            }
                            option.innerHTML = text;
                            jQuery(that.$elementForAjaxResponseInjection
                                .find("select")[0]).append(
                                option);
                        }
                    };
                    var insertAddressSelector = function(
                        addressData) {
                        if (addressData.addresses.length === 0) {
                            var error = document.createElement(
                                "span");
                            error.className = "error";
                            error.innerHTML = Messages.noAddressesFound;
                            var oldError = $(
                                postCodeFinderFormfieldElement
                            ).find(".error");
                            if (oldError.length > 0) {
                                oldError.remove();
                            }
                            $(postCodeFinderFormfieldElement).append(
                                error);
                            $(postCodeFinderFormfieldElement).addClass(
                                "error");
                        } else {
                            var stubUrl = that.isPersonalDetailsPostcodeFinder ?
                                DI.lang.personalDetailsAddressFinder
                                .addressPickerStub : DI.lang.addressFinder
                                .addressPickerStub;
                            $.get(stubUrl, {
                                "addressFinderUniqueID": that
                                    .addressFinderUniqueID
                            }, function(data) {
                                that.injectNewFormFields(
                                    data);
                                integrateAddressData(
                                    addressData);
                                that.processAddressSelector(
                                    addressData);
                            }, "html");
                        }
                    };
                    $.get(DI.lang.addressFinder.addressPickerStubData +
                        "?postalCode=" + $(
                            postCodeFinderFormfieldElement).find(
                            "input:text").val(), {
                            "addressFinderUniqueID": that.addressFinderUniqueID
                        }, function named(data) {
                            addressData = data;
                            insertAddressSelector(data);
                        }, "json");
                }
            };
            $findAddressInput.bind("click", loadAddressSelector);
            var keyPressEventDelegation = function(event) {
                if (event.keyCode === 13) {
                    loadAddressSelector(event);
                }
            };
            $findAddressInput.bind("keypress", keyPressEventDelegation);
        }
    },
    processManualAddressForm: function($fieldset) {
        var that = this,
            $enterAddressManuallyLink = $("div.previousAddress").find(
                "a.linkBullet");

        function handleChangePostcode(event) {
            event.preventDefault();
            $.ajax({
                url: that.isPersonalDetailsPostcodeFinder ?
                    DI.lang.personalDetailsAddressFinder.postCodeFinderStub : DI
                    .lang.addressFinder.postCodeFinderStub,
                data: {
                    "addressFinderUniqueID": that.addressFinderUniqueID
                },
                dataType: "html",
                type: "GET",
                success: function(data) {
                    that.parentValidationHandler.removeChildren(
                        $fieldset);
                    $fieldset.find("input:text").each(
                        function() {
                            this.value = "";
                        });
                    $fieldset.hide();
                    that.injectNewFormFields(data);
                    that.processPostcodeFinder();
                }
            });
        }
        $enterAddressManuallyLink.bind("click", handleChangePostcode);
    },
    processAddressSelector: function(addressData) {
        var that = this,
            $changePostcodeLinks = this.$elementForAjaxResponseInjection
            .find("a"),
            $useAddressInput = this.$elementForAjaxResponseInjection.find(
                "input:image");
        var handleChangePostcode = function() {
            $(
                "div.ajaxPoweredAddressFinder .timeYearsMonths:eq(0) input"
            ).val("");
            $(".enterAddressManually:eq(0)").append($(
                ".ajaxPoweredAddressFinder .timeYearsMonths:eq(0)"
            ));
            $.ajax({
                url: that.isPersonalDetailsPostcodeFinder ?
                    DI.lang.personalDetailsAddressFinder.postCodeFinderStub : DI
                    .lang.addressFinder.postCodeFinderStub,
                data: {
                    "addressFinderUniqueID": that.addressFinderUniqueID
                },
                dataType: "html",
                type: "GET",
                success: function(data) {
                    that.injectNewFormFields(data);
                    that.processPostcodeFinder();
                }
            });
        };
        var loadManualAddressForm = function() {
            $.ajax({
                url: that.isPersonalDetailsPostcodeFinder ?
                    DI.lang.personalDetailsAddressFinder.enterAddressManuallyStub : DI
                    .lang.addressFinder.enterAddressManuallyStub,
                data: {
                    "addressFinderUniqueID": that.addressFinderUniqueID
                },
                dataType: "html",
                type: "GET",
                success: function(data) {
                    that.injectNewFormFields(data);
                    that.processManualAddressForm(that.$enterAddressManuallyFieldset);
                }
            });
        };
        var handleUseAddress = function() {
            var selectedAddressValue = jQuery(that.$elementForAjaxResponseInjection
                .find("select")[0]).val();
            var injectAddressData = function() {
                var addressParagraph = jQuery(that.$elementForAjaxResponseInjection
                    .find("div.adr"));
                var data = addressData.addresses[
                    selectedAddressValue];
                var html = "";
                if (!LBG.common.isNull(data.numberOrName) || !
                    LBG.common.isNull(data.streetName)) {
                    html += '<span class="street-address">';
                    html += !LBG.common.isNull(data.numberOrName) ?
                        data.numberOrName : "";
                    html += !LBG.common.isNull(data.streetName) &&
                        !LBG.common.isNull(data.numberOrName) ?
                        " " + data.streetName : data.streetName;
                    html += "</span>";
                }
                html += !LBG.common.isNull(data.district) ?
                    '<span class="district">' + data.district +
                    "</span>" : "";
                html += !LBG.common.isNull(data.townOrCity) ?
                    '<span class="town">' + data.townOrCity +
                    "</span>" : "";
                html += !LBG.common.isNull(data.county) ?
                    '<span class="county">' + data.county +
                    "</span>" : "";
                html += !LBG.common.isNull(data.postcode) ?
                    '<span class="postcode">' + data.postcode +
                    "</span>" : "";
                addressParagraph.html(html);
            };
            $.ajax({
                url: that.isPersonalDetailsPostcodeFinder ?
                    DI.lang.personalDetailsAddressFinder.addressPickerCompletedStub : DI
                    .lang.addressFinder.addressPickerCompletedStub,
                data: {
                    "addressFinderUniqueID": +that.addressFinderUniqueID,
                    "selectedAddressValue": selectedAddressValue
                },
                dataType: "html",
                type: "GET",
                success: function(data) {
                    that.injectNewFormFields(data);
                    injectAddressData();
                    $(that.$elementForAjaxResponseInjection
                        .find("a")[0]).bind("click",
                        handleChangePostcode);
                    that.$elementForAjaxResponseInjection
                        .append($(
                            ".enterAddressManually .timeYearsMonths:eq(0)"
                        ));
                    that.parentValidationHandler.findChildren(
                        that.$elementForAjaxResponseInjection
                    );
                    LBG.Forms.Validation.Tools.setMultipleFieldValidation(
                        that.$elementForAjaxResponseInjection
                    );
                }
            });
        };
        var clickHandler = function(event) {
            event.preventDefault();
            if (event.target === $useAddressInput.get(0)) {
                var selectAddressFormfieldElement = that.$elementForAjaxResponseInjection
                    .find("div.formField")[0];
                var selectAddressFormfieldName = LBG.Forms.Validation
                    .Tools.convertClassDetailsToData(
                        selectAddressFormfieldElement,
                        "validationName:")[0];
                if (that.parentValidationHandler.getChild(
                        selectAddressFormfieldName).isValid ===
                    true) {
                    handleUseAddress();
                }
            } else {
                if (event.target === $changePostcodeLinks[0] ||
                    event.target === $($changePostcodeLinks[0]).children(
                        "img")[0]) {
                    handleChangePostcode();
                } else {
                    if (event.target === $changePostcodeLinks[1] ||
                        event.target === $($changePostcodeLinks[1])
                        .children("img")[0]) {
                        loadManualAddressForm();
                    }
                }
            }
        };
        this.$elementForAjaxResponseInjection.bind("click",
            clickHandler);
        var keyPressEventDelegation = function(event) {
            if (event.keyCode === 13) {
                clickHandler(event);
            }
        };
        $useAddressInput.bind("keypress", keyPressEventDelegation);
    }
};
LBG.selectHybrid = {
    componentSelector: "div.selectHybrid",
    detailsSelector: ".furtherDetails",
    balanceSelector: ".accountBalance",
    fundsSelector: ".availableFunds",
    businessSelector: ".businessName",
    helpSelector: ".cxtHelp",
    detailsHTML: '<div class="furtherDetails"><p><span class="accountBalance"></span><span class="availableFunds"></span></p><p class="businessName"></p></div>',
    cxtHelpHTML: '<span class="cxtHelp"><a class="cxtTrigger">[?]</a></span>',
    setFocusOnTab: false,
    init: function() {
        var $selectHybridComponents = $(LBG.selectHybrid.componentSelector);
        if ($selectHybridComponents.length === 0) {
            return false;
        } else {
            var selectHybrids = [];
            $.each($selectHybridComponents, function(i) {
                selectHybrids[i] = $(this);
                selectHybrids[i].uniqueID = this.id || null;
                if (selectHybrids[i].uniqueID !== null) {
                    selectHybrids[i].accountData = LBG[this.id]
                        .accountData;
                    var $selectInput = selectHybrids[i].find(
                        "select");
                    $selectInput.change(function() {
                        LBG.selectHybrid.updateAccountData(
                            selectHybrids[i]);
                    });
                    if ($.browser.safari === true || $.browser.mozilla ===
                        true) {
                        $selectInput.keydown(function(event) {
                            LBG.selectHybrid.setFocusOnTab =
                                event.shiftKey ===
                                false && event.keyCode ===
                                9;
                        });
                    }
                    var $elm = ($selectInput.next().hasClass(
                            "submitAction") === true) ?
                        $selectInput.next() : $selectInput;
                    $elm.after(LBG.selectHybrid.detailsHTML);
                    LBG.selectHybrid.updateAccountData(
                        selectHybrids[i]);
                }
            });
        }
    },
    hideError: function($selectHybrid, $field) {
        var $formFields = ($field.hasClass("formField")) ? $field :
            $field.find("div.formField");
        var validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            $selectHybrid.find("input, select").eq(0));
        $formFields.each(function() {
            var data = LBG.Forms.Validation.Tools.convertClassDetailsToData(
                this, "validationName:");
            var field = validationHandler.getChild(data[0]);
            if (field.hideError) {
                field.hideError();
            }
        });
    },
    updateAccountData: function($selectHybrid) {
        var selectInput = $selectHybrid.find("select").get(0),
            selectedAccountValue, newBalance, newAvailableFunds,
            newBusinessName;
        if (selectInput.selectedIndex !== -1 && selectInput.options[
            selectInput.selectedIndex]) {
            selectedAccountValue = selectInput.options[selectInput.selectedIndex]
                .value;
        }
        var $nextFocusable = $selectHybrid.next(".formField").find(
            "input, select, a").eq(0);
        if (selectedAccountValue !== undefined && $selectHybrid.accountData !==
            undefined && $selectHybrid.accountData[selectedAccountValue] !==
            undefined) {
            newBalance = $selectHybrid.accountData[selectedAccountValue]
                .accountBalance;
            newAvailableFunds = $selectHybrid.accountData[
                selectedAccountValue].availableFunds;
            newBusinessName = $selectHybrid.accountData[
                selectedAccountValue].businessName;
            if (newBalance !== "" && newBalance !== undefined) {
                $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(
                    LBG.selectHybrid.balanceSelector).html(
                    newBalance);
            } else {
                $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(
                    LBG.selectHybrid.balanceSelector).empty();
            } if (newAvailableFunds !== "" && newAvailableFunds !==
                undefined) {
                $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(
                    LBG.selectHybrid.fundsSelector).html(
                    newAvailableFunds);
            } else {
                $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(
                    LBG.selectHybrid.fundsSelector).empty();
            } if (newBusinessName !== "" && newBusinessName !==
                undefined) {
                $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(
                    LBG.selectHybrid.businessSelector).html(
                    newBusinessName);
            } else {
                $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(
                    LBG.selectHybrid.businessSelector).empty();
            }
            $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(
                LBG.selectHybrid.helpSelector).remove();
            if ($selectHybrid.accountData[selectedAccountValue].cxtHelpText !==
                "" && $selectHybrid.accountData[selectedAccountValue].cxtHelpText !==
                undefined) {
                $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(
                    LBG.selectHybrid.fundsSelector).after(LBG.selectHybrid
                    .buildContextualHelp($selectHybrid,
                        selectedAccountValue));
            }
            $selectHybrid.find(LBG.selectHybrid.detailsSelector).show();
            LBG.selectHybrid.hideError($selectHybrid, $selectHybrid.find(
                ".formField"));
            if (($.browser.safari === true || $.browser.mozilla ===
                true) && LBG.selectHybrid.setFocusOnTab === true) {
                var $focus = $selectHybrid.find(LBG.selectHybrid.detailsSelector)
                    .find(LBG.selectHybrid.helpSelector).find(
                        "a.cxtTrigger");
                if ($focus.length > 0) {
                    var $next = $focus.parents(".selectHybrid").next(
                        ".formField");
                    setTimeout(function() {
                        $focus.focus();
                        LBG.selectHybrid.hideError(
                            $selectHybrid, $next);
                    }, 5);
                } else {
                    $nextFocusable.focus();
                }
            }
        } else {
            LBG.selectHybrid.clearDetails($selectHybrid);
            $selectHybrid.find(LBG.selectHybrid.detailsSelector).hide();
            if (($.browser.safari === true || $.browser.mozilla ===
                true) && LBG.selectHybrid.setFocusOnTab === true) {
                $nextFocusable.focus();
            }
        }
    },
    adjustDetailsWidth: function($selectHybrid) {
        $selectHybrid.find(LBG.selectHybrid.detailsSelector).width(0).width(
            $selectHybrid.find(".formFieldInner").width());
    },
    buildContextualHelp: function($selectHybrid, selectedAccountValue) {
        var $cxtHelpHTML = $(LBG.selectHybrid.cxtHelpHTML);
        var $anchorLink = $cxtHelpHTML.find("a");
        var anchorURL = "#cxtHelp_" + $selectHybrid.uniqueID;
        $anchorLink.attr("title", $selectHybrid.accountData[
            selectedAccountValue].cxtHelpText);
        $cxtHelpHTML.find("a").attr("href", anchorURL);
        return $cxtHelpHTML.get(0);
    },
    clearDetails: function($selectHybrid) {
        $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(LBG.selectHybrid
            .balanceSelector).empty();
        $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(LBG.selectHybrid
            .fundsSelector).empty();
        $selectHybrid.find(LBG.selectHybrid.detailsSelector).find(LBG.selectHybrid
            .helpSelector).remove();
    }
};
LBG.employmentShowHide = {
    employmentSelector: ".employmentStatus",
    infoSelector: "div.employmentInfo",
    employmentStatusSelector: "select.slctEmploymentStatus",
    occupationTypeSelector: "select.slctOccupationType",
    occupationSelector: "select.slctOccupation",
    validIdentifier: DI.lang.employmentShowHide.validIdentifier,
    isEligible: true,
    data: null,
    init: function() {
        var $infoElements = $(LBG.employmentShowHide.infoSelector),
            $employmentWrapper = $(LBG.employmentShowHide.employmentSelector),
            $employmentStatus = [],
            $occupationType = [],
            $occupation = [],
            $occupationOptions = [];
        if ($infoElements.length > 0) {
            $infoElements.each(function() {
                var that = this;
                that.validationHandler = LBG.Forms.Validation.Tools
                    .getValidationHandlerObject($(that));
                var employmentShowHideHelper = function(
                    emplSelect, that) {
                    if (LBG.employmentShowHide.isEligible) {
                        LBG.employmentShowHide.updateInfoVisibility(
                            emplSelect, that);
                    } else {
                        $(that).hide();
                    }
                };
                var $employSelect = $(that).parents("fieldset")
                    .find(LBG.employmentShowHide.employmentSelector)
                    .find(":input");
                $employSelect.change(function() {
                    if (LBG.employmentShowHide.isEligible) {
                        LBG.employmentShowHide.updateInfoVisibility(
                            this, that);
                    }
                });
                $employSelect.keyup(function(e) {
                    if ((e.keyCode === 38) || (e.keyCode ===
                        40)) {
                        if (LBG.employmentShowHide.isEligible) {
                            LBG.employmentShowHide.updateInfoVisibility(
                                this, that);
                        }
                    }
                });
                LBG.employmentShowHide.data = $(that).parents(
                    "form:eq(0)").metadata();
                if (("age" in LBG.employmentShowHide.data) && (
                    "maxlimit" in LBG.employmentShowHide.data
                )) {
                    LBG.employmentShowHide.isEligible = LBG.employmentShowHide
                        .testEligiblity($(that).closest("form")
                            .find("input:eq(1)"));
                    $(that).closest("form").find("input:eq(1)")
                        .change(function() {
                            LBG.employmentShowHide.isEligible =
                                LBG.employmentShowHide.testEligiblity(
                                    $(this));
                            employmentShowHideHelper(
                                $employSelect[0], that);
                        });
                }
                employmentShowHideHelper($employSelect[0], that);
            });
        }
        if ($employmentWrapper.length) {
            $employmentStatus = $employmentWrapper.find(LBG.employmentShowHide
                .employmentStatusSelector);
            $occupationType = $employmentWrapper.parent().find(LBG.employmentShowHide
                .occupationTypeSelector);
            $occupation = $employmentWrapper.parent().find(LBG.employmentShowHide
                .occupationSelector);
            var employmentStatusIndex = $employmentStatus.attr(
                "selectedIndex");
            var occupationSelectedVal = "";
            if ($occupationType.length) {
                var tabDirection = "";
                var getTabDirection = function(e) {
                    if (e.keyCode !== 9) {
                        tabDirection = "";
                    } else {
                        tabDirection = (e.shiftKey) ? "prev" :
                            "next";
                    }
                };
                $occupationOptions = $occupation.find("option");
                occupationSelectedVal = $occupationOptions.filter(
                    ":selected").val();
                $occupationType.keyup(function(e) {
                    if ((e.keyCode === 38) || (e.keyCode === 40)) {
                        if (LBG.employmentShowHide.isEligible) {
                            $occupationType.change();
                        }
                    }
                });
                var handlerEmploymentStatus = function(e) {
                    if (e.type === "change" && $(this).attr(
                            "selectedIndex") !==
                        employmentStatusIndex) {
                        occupationSelectedVal = "";
                    }
                    if (e.type === "blur" && tabDirection ===
                        "next") {
                        var timer = window.setTimeout(function() {
                            $occupationType.focus();
                            tabDirection = "";
                            window.clearTimeout(timer);
                        }, 1);
                    }
                };
                var handlerOccupationType = function(e) {
                    var selectedClass = "relation-" + this.value;
                    var curIndex = 0;
                    if (e.type === "change") {
                        if (this.value !== "-") {
                            $occupation.empty();
                            $occupation[0].options[curIndex] = new Option(
                                $occupationOptions[0].text,
                                $occupationOptions[0].value,
                                true);
                            $occupationOptions.each(function(i) {
                                if ($(this).hasClass(
                                    selectedClass)) {
                                    curIndex = $occupation[
                                        0].options.length;
                                    $occupation[0].options[
                                        curIndex] = new Option(
                                        this.text, this
                                        .value, this.value ===
                                        occupationSelectedVal
                                    );
                                    if (this.value ===
                                        occupationSelectedVal
                                    ) {
                                        $occupation.attr(
                                            "selectedIndex",
                                            curIndex);
                                    }
                                }
                            });
                        } else {
                            $occupation.attr("selectedIndex", 0);
                        }
                    }
                    if (e.type === "blur" && tabDirection !== "") {
                        var timer = window.setTimeout(function() {
                            if (tabDirection === "next") {
                                $occupation.focus();
                            } else {
                                $employmentStatus.focus();
                            }
                            tabDirection = "";
                            window.clearTimeout(timer);
                        }, 1);
                    }
                };
                $employmentStatus.blur(handlerEmploymentStatus).change(
                    handlerEmploymentStatus).keydown(
                    getTabDirection);
                if ($occupation.length) {
                    $occupationType.blur(handlerOccupationType).change(
                        handlerOccupationType).keydown(
                        getTabDirection);
                }
            }
        }
    },
    testEligiblity: function(input) {
        return ((this.data.age + parseInt($(input).val(), 10)) / 12) <
            this.data.maxlimit;
    },
    updateInfoVisibility: function(input, info) {
        var showInfo = input.value.match(LBG.employmentShowHide.validIdentifier);
        var lpiCheckbox = $(info).find("input:checkbox").get(0);
        var meta = $(input).find(":selected").metadata();
        if (showInfo && meta.enable === true) {
            $(info).show();
            if (lpiCheckbox !== undefined) {
                lpiCheckbox.disabled = false;
            }
            if (info.validationHandler) {
                info.validationHandler.findChildren($(info));
            }
        } else {
            $(info).hide();
            if (lpiCheckbox !== undefined) {
                lpiCheckbox.checked = false;
                lpiCheckbox.disabled = true;
            }
            if (info.validationHandler) {
                info.validationHandler.removeChildren($(info));
            }
        }
        LBG.common.explorerRedrawFix();
    }
};
LBG.pseudoLinks = {
    linkSelector: "input.pseudoLink",
    init: function() {
        $(LBG.pseudoLinks.linkSelector).mouseover(function() {
            var src = $(this).attr("src").replace(/.png/g,
                "_hover.png");
            $(this).attr("src", src);
        });
        $(LBG.pseudoLinks.linkSelector).mouseout(function() {
            var src = $(this).attr("src").replace(/_hover.png/g,
                ".png");
            $(this).attr("src", src);
        });
        $(LBG.pseudoLinks.linkSelector).each(function() {
            if ($(this).attr("disabled")) {
                $(this).addClass("disabledField");
            }
        });
    }
};
LBG.manageTransfers = {
    fromAccountSelector: "select.fromAccount",
    toAccountSelector: "select.toAccount",
    detailsSelector: ".furtherDetails",
    hybridSelector: ".selectHybrid",
    fromText: DI.lang.manageTransfers.fromText,
    toText: DI.lang.manageTransfers.toText,
    initTo: true,
    init: function() {
        this.$fromInput = $(LBG.manageTransfers.fromAccountSelector);
        if (!this.$fromInput.length) {
            return;
        }
        this.$toInput = $(LBG.manageTransfers.toAccountSelector);
        if (!this.$toInput.length) {
            return;
        }
        this.$parentSelectHybrid = $(LBG.manageTransfers.toAccountSelector)
            .parents(LBG.manageTransfers.hybridSelector);
        this.initialToAccounts = $(LBG.manageTransfers.toAccountSelector)
            .html();
        this.initialFromAccounts = $(LBG.manageTransfers.fromAccountSelector)
            .html();
        this.$fromInput.change(function() {
            LBG.manageTransfers.updateToAccount(this);
        }).change();
        this.$toInput.change(function() {
            LBG.manageTransfers.updateFromAccount(this);
        }).change();
    },
    updateToAccount: function(fromAccountInput) {
        var selectedAccountValue = fromAccountInput.options[
            fromAccountInput.selectedIndex].value;
        var selectedAccountIndexValue = (this.$toInput.get(0).selectedIndex >=
                0) ? this.$toInput.get(0).options[this.$toInput.get(0).selectedIndex]
            .value : null;
        if (LBG.manageTransfers.initTo === false) {
            this.$toInput.html(this.initialToAccounts);
        }
        var toCount = 0;
        var removedIndex;
        var sIndex;
        this.$toInput.find("option").each(function() {
            if (this.value === selectedAccountValue && this.value !==
                "-" && this.value !== null) {
                $(this).remove();
                removedIndex = toCount;
            }
            toCount++;
        });
        toCount = 0;
        this.$toInput.find("option").each(function() {
            if (this.value === selectedAccountIndexValue) {
                sIndex = toCount;
            }
            toCount++;
        });
        this.$toInput.get(0).selectedIndex = sIndex;
        if (LBG.manageTransfers.initTo === false && this.$toInput.get(0)
            .selectedIndex === 0) {
            this.$parentSelectHybrid.find(LBG.manageTransfers.detailsSelector)
                .hide();
        }
        LBG.manageTransfers.initTo = false;
    },
    updateFromAccount: function(toAccountInput) {
        var selectedAccountValue = toAccountInput.options[
            toAccountInput.selectedIndex].value;
        var selectedAccountIndexValue = this.$fromInput.get(0).options[
            this.$fromInput.get(0).selectedIndex].value;
        if (LBG.manageTransfers.initTo === false) {
            this.$fromInput.html(this.initialFromAccounts);
        }
        var fromCount = 0;
        var removedIndex;
        var sIndex;
        this.$fromInput.find("option").each(function() {
            if (this.value === selectedAccountValue && this.value !==
                "-") {
                $(this).remove();
                removedIndex = fromCount;
            }
            fromCount++;
        });
        fromCount = 0;
        this.$fromInput.find("option").each(function() {
            if (this.value === selectedAccountIndexValue) {
                sIndex = fromCount;
            }
            fromCount++;
        });
        this.$fromInput.get(0).selectedIndex = sIndex;
        if (LBG.manageTransfers.initTo === false && this.$fromInput.get(
            0).selectedIndex === 0) {
            this.$parentSelectHybrid.find(LBG.manageTransfers.detailsSelector)
                .hide();
        }
        LBG.manageTransfers.initTo = false;
    }
};
LBG.linkedRadioAndTextFields = (function() {
    var WRAPPER = ".linkedRadioAndTextFields",
        RADIO_BUTTONS = ".linkedRadio",
        FORM_FIELDS = ".linkedTextField",
        TEXT_ENABLED = "enabledTextField",
        SELECTED_VALUE = DI.lang.validation.yesRegexValue,
        clickTrigger = false;

    function updateTextInput(input) {
        var $linkedTextField = $(input).parents(WRAPPER).find(
                FORM_FIELDS),
            $formFieldElement = $linkedTextField.parents(
                ".formField"),
            validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
                $formFieldElement),
            validationName = LBG.Forms.Validation.Tools.convertClassDetailsToData(
                $formFieldElement.get(0), "validationName:")[0],
            validationElement;
        if ($linkedTextField.hasClass(TEXT_ENABLED) === false && !
            $linkedTextField.data("skip")) {
            $linkedTextField.attr("disabled", "disabled");
            $linkedTextField.addClass("isDisabled");
        }
        for (var i = 0, len = validationHandler.children.length; i <
            len; i++) {
            if (validationHandler.children[i].name ===
                validationName) {
                validationElement = validationHandler.children[i];
            }
        }
        if (input.checked) {
            if (SELECTED_VALUE.test(input.value) &&
                $linkedTextField.hasClass(TEXT_ENABLED) === false) {
                $linkedTextField.attr("disabled", "");
                $linkedTextField.removeClass("isDisabled");
                $linkedTextField.data("skip", true);
            } else {
                if (clickTrigger === true && $linkedTextField.hasClass(
                    TEXT_ENABLED) === false) {
                    $linkedTextField.val("");
                }
                validationElement.hideError();
                validationElement.isValid = false;
                if ($linkedTextField.hasClass(TEXT_ENABLED) ===
                    false) {
                    $linkedTextField.attr("disabled", "disabled");
                    $linkedTextField.addClass("isDisabled");
                }
            }
        }
        LBG.ajax.pageUpdated();
    }

    function setup() {
        updateTextInput(this);
        $(this).click(function() {
            clickTrigger = true;
            updateTextInput(this);
        });
    }
    return {
        init: function() {
            $(WRAPPER).find(RADIO_BUTTONS).each(setup);
        }
    };
}());
LBG.linkedSelectAndTextFields = {
    wrapperSelector: ".linkedSelectAndTextFields",
    selectSelector: ".linkedSelect",
    textSelector: ".linkedTextField",
    otherValue: DI.lang.validation.otherValue,
    init: function() {
        $(LBG.linkedSelectAndTextFields.wrapperSelector).find(LBG.linkedSelectAndTextFields
            .selectSelector).each(function() {
            LBG.linkedSelectAndTextFields.updateTextInput(this);
            $(this).change(function() {
                LBG.linkedSelectAndTextFields.updateTextInput(
                    this);
            });
        });
    },
    updateTextInput: function(input) {
        this.$linkedTextField = $(input).parents(LBG.linkedSelectAndTextFields
            .wrapperSelector).find(LBG.linkedSelectAndTextFields.textSelector);
        this.$formFieldElement = this.$linkedTextField.parents(
            ".formField");
        this.validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            this.$formFieldElement);
        this.validationName = LBG.Forms.Validation.Tools.convertClassDetailsToData(
            this.$formFieldElement.get(0), "validationName:")[0];
        var value = input.options[input.selectedIndex].value;
        for (var i = 0, len = this.validationHandler.children.length; i <
            len; i++) {
            if (this.validationHandler.children[i].name === this.validationName) {
                this.validationElement = this.validationHandler.children[
                    i];
            }
        }
        if (value === LBG.linkedSelectAndTextFields.otherValue) {
            this.$formFieldElement.show();
            $("input:visible", this.$formFieldElement).eq(0).focus();
            LBG.common.explorerRedrawFix();
        } else {
            this.$linkedTextField.val("");
            this.validationElement.hideError();
            this.validationElement.isValid = false;
            this.$formFieldElement.hide();
            LBG.common.explorerRedrawFix();
        }
        LBG.ajax.pageUpdated();
    }
};
LBG.linkedCheckBoxAndTextFields = {
    wrapperSelector: ".linkedCheckBoxAndTextFields",
    checkboxSelector: ".linkedCheckBox",
    textSelector: ".linkedTextField",
    checkedValue: DI.lang.validation.checkedValue,
    init: function() {
        $(LBG.linkedCheckBoxAndTextFields.wrapperSelector).find(LBG.linkedCheckBoxAndTextFields
            .checkboxSelector).each(function() {
            LBG.linkedCheckBoxAndTextFields.updateTextInput(
                this);
            $(this).click(function() {
                LBG.linkedCheckBoxAndTextFields.updateTextInput(
                    this);
            });
        });
    },
    updateTextInput: function(input) {
        this.$linkedTextField = $(input).parents(LBG.linkedCheckBoxAndTextFields
            .wrapperSelector).find(LBG.linkedCheckBoxAndTextFields.textSelector);
        this.$formFieldElement = this.$linkedTextField.parents(
            ".formField");
        this.validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            this.$formFieldElement);
        this.validationName = LBG.Forms.Validation.Tools.convertClassDetailsToData(
            this.$formFieldElement.get(0), "validationName:")[0];
        for (var i = 0, len = this.validationHandler.children.length; i <
            len; i++) {
            if (this.validationHandler.children[i].name === this.validationName) {
                this.validationElement = this.validationHandler.children[
                    i];
            }
        }
        if (input.checked === LBG.linkedCheckBoxAndTextFields.checkedValue) {
            this.$linkedTextField.attr("disabled", "");
            this.$linkedTextField.removeClass("isDisabled");
        } else {
            this.$linkedTextField.val("");
            this.validationElement.isShowingError = this.$formFieldElement
                .hasClass("error");
            this.validationElement.hideError();
            this.validationElement.isValid = false;
            this.$linkedTextField.attr("disabled", "disabled");
            this.$linkedTextField.addClass("isDisabled");
        }
        LBG.ajax.pageUpdated();
    }
};
LBG.linkedTextFieldAndCheckBox = {
    wrapperSelector: ".linkedTextFieldAndCheckBox",
    checkboxSelector: ".linkedCheckBox",
    textSelector: ".linkedTextField",
    setFocusOnTab: false,
    init: function() {
        $(LBG.linkedTextFieldAndCheckBox.checkboxSelector, $(LBG.linkedTextFieldAndCheckBox
            .wrapperSelector)).attr("disabled", "disabled");
        $(LBG.linkedTextFieldAndCheckBox.wrapperSelector).find(LBG.linkedTextFieldAndCheckBox
            .textSelector).each(function() {
            $(this).change(function() {
                LBG.linkedTextFieldAndCheckBox.updateTextInput(
                    this);
            }).keydown(function(event) {
                LBG.linkedTextFieldAndCheckBox.setFocusOnTab =
                    event.shiftKey === false && event.keyCode ===
                    9;
            });
        });
    },
    updateTextInput: function(input) {
        this.$linkedCheckBox = $(input).parents(LBG.linkedTextFieldAndCheckBox
            .wrapperSelector).find(LBG.linkedTextFieldAndCheckBox.checkboxSelector);
        this.$linkedTextField = $(input).parents(LBG.linkedTextFieldAndCheckBox
            .wrapperSelector).find(LBG.linkedTextFieldAndCheckBox.textSelector);
        this.$formFieldElement = this.$linkedCheckBox.parents(
            ".formField");
        this.validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            this.$formFieldElement);
        if (this.$linkedTextField.val() !== "") {
            this.$linkedCheckBox.attr("disabled", "");
            if (LBG.linkedTextFieldAndCheckBox.setFocusOnTab === true) {
                var $linkedInput = this.$linkedCheckBox;
                setTimeout(function() {
                    $linkedInput.focus();
                }, 5);
            }
        } else {
            this.$linkedTextField.val("");
            this.$linkedCheckBox.attr("checked", "");
            this.$linkedCheckBox.attr("disabled", "disabled");
        }
        LBG.ajax.pageUpdated();
    }
};
LBG.autoFillDecimals = {
    amountFormFieldSelector: ".amountField",
    addDecimals: function($formField) {
        var $inputElements = $formField.find("input:text");
        var inputsToUpdate = [],
            i, len;
        if ($inputElements.length > 1) {
            if ($formField.parents(".radioGroup").length > 0) {
                for (i = 0, len = $inputElements.length; i < len; i++) {
                    inputsToUpdate.push($inputElements[i]);
                }
            }
        } else {
            inputsToUpdate.push($inputElements[0]);
        }
        for (i = 0, len = inputsToUpdate.length; i < len; i++) {
            if (inputsToUpdate[i].value.length > 0) {
                LBG.autoFillDecimals.updateAmountWithDecimalPlaces(
                    inputsToUpdate[i]);
            }
        }
    },
    updateAmountWithDecimalPlaces: function(input) {
        var isNegative = parseInt(input.value, 10) < 0 || input.value.indexOf(
            "-") !== -1;
        if (!LBG.Forms.Validation.Routines.simpleRegexTest(LBG.Forms.Validation
            .Expressions.currencyCharacters, input.value)) {
            return false;
        }
        if (isNegative) {
            input.value = input.value.replace(/-/g, "");
        }
        input.value = input.value.replace(/^0+/, "");
        if (input.value < 1) {
            input.value = "0" + input.value;
        }
        if (input.value.indexOf(".") < 0) {
            if (LBG.Forms.Validation.Routines.simpleRegexTest(LBG.Forms
                .Validation.Expressions.numeric, parseInt(input.value
                    .replace(/,/g, ""), 10))) {
                input.value += ".00";
            }
        } else {
            var splitDecimal = input.value.split("."),
                decimalPlaces = "";
            for (var i = 1; i < splitDecimal.length; i++) {
                if (splitDecimal[i] !== "") {
                    decimalPlaces = splitDecimal[i];
                }
            }
            if (decimalPlaces.length < 2) {
                input.value += "0";
                this.updateAmountWithDecimalPlaces(input);
            }
        } if (isNegative) {
            input.value = "-" + input.value;
        }
    }
};
LBG.converter = (function() {
    var setup_run = false,
        $con;

    function updateInputs() {
        if (setup_run) {
            $con.find("input[type=text]").val("");
        }
        var meta = $(this).find(":selected").metadata();
        $("input.dynCurrencyValueDomestic")[0].rate = meta.rate;
        $("input.dynCurrencyValueForeign")[0].rate = 1 / meta.rate ||
            undefined;
        var $copy = $("div.dynconSelectionCopy");
        if (this.value === "-") {
            $copy.hide();
        } else {
            $copy.show();
            $copy.find("p.dynconSelectionCopyCurrency").text(meta.abbr +
                ": " + meta.name);
            $copy.find("span").text(meta.rate + " " + meta.abbr);
            $copy.find("p.dynconSelectionCopyInfo").text(meta.info ||
                "");
            $("label.dynconValueForeignLabel").text(meta.name);
        }
    }

    function updateDropdown() {
        var $this = $(this);
        if (setup_run) {
            LBG.Forms.Validation.Tools.getValidationHandlerObject(
                $this).hideError();
        }
        $("div.country_cash, div.country_cheque").hide();
        var dropdown = $($this.metadata().target).show().find(
            "select");
        updateInputs.call(dropdown[0]);
    }

    function convert() {
        if (!this.rate) {
            return;
        }
        $($(this).metadata().target).val((LBG.converter.tidyCurrency(
            this.value) * this.rate).toFixed(2));
    }

    function reverse(str) {
        return str.split("").reverse().join("");
    }
    return {
        tidyCurrency: function(strIn) {
            var val = strIn,
                reRplc = new RegExp("[-+,\\u00A3]", "g");
            val = val.replace("&pound;", "");
            val = val.replace(reRplc, "");
            return val;
        },
        formatCurrency: function(value) {
            var val = value,
                spl = [],
                len = 0,
                dol = 0,
                cen = 0;
            val = val.replace(/,/g, "");
            spl = val.split(".");
            len = spl.length;
            if (len > 2) {
                val = spl.slice(0, len - 1);
                val = val.join("") + "." + spl[len - 1];
                spl = val.split(".");
            }
            dol = reverse(spl[0]);
            cen = spl[1] ? "." + spl[1] : "";
            spl = [];
            for (var i = 0; i < dol.length; i += 3) {
                spl.push(dol.substr(i, 3));
            }
            dol = reverse(spl.join());
            return dol + cen;
        },
        init: function() {
            $con = $("div.dynamicConverter");
            if (!$con.length) {
                return;
            }
            $("div.staticConverter").hide();
            $con.show();
            $con.find("input[type=text]").keyup(convert).keydown(
                function() {
                    $con.find("input.dynconValueFlag").val(this
                        .id);
                });
            $con.find("select").change(updateInputs);
            $con.find("input[type=radio]").click(updateDropdown).filter(
                ":checked").click();
            setup_run = true;
        }
    };
})();
LBG.enhanceOverdraftDetails = (function() {
    var MODULE_SELECTOR = "fieldset.overdraftDetails",
        OPTION_VALUES = {
            termValue: "ongoing_term",
            overdraftPurposeValue: "ongoing_od_purpose",
            overdraftRepayValue: "ongoing_od_repay"
        },
        selectElementHash = {},
        validationHandler;

    function _getSelectElements() {
        $.each(OPTION_VALUES, function(key, value) {
            selectElementHash[key] = $('option[value="' +
                value + '"]').closest("select")[0];
        });
        return selectElementHash;
    }

    function _onChangeHandler(key, value) {
        if (OPTION_VALUES[key] === value) {
            if (validationHandler !== undefined) {
                $.each(validationHandler.children, function() {
                    this.hideError();
                });
            }
            $.each(selectElementHash, function(_key) {
                if (this.value !== value) {
                    this.value = OPTION_VALUES[_key];
                }
            });
        }
    }
    return {
        init: function overdraftDetailController() {
            var overdraftFormEl = $(MODULE_SELECTOR)[0] || null;
            if (overdraftFormEl !== null) {
                validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
                    $(overdraftFormEl));
                $.each(_getSelectElements(), function(key) {
                    $(this).change(function() {
                        _onChangeHandler(key, this.value);
                    });
                });
            }
        }
    };
})();
LBG.autoSelectRadioButton = (function() {
    var RADIO_GROUP_SELECTOR = "div.amountGroup",
        ELEMENT_SELECTORS = "input:text";

    function _updateRadiobutton() {
        var $this = $(this),
            currentValue = $this.val();
        this.parentFormField = this.parentFormField || $this.closest(
            "div.formField");
        if (currentValue !== this.previousValue) {
            this.parentFormField.find("input:radio").get(0).checked =
                true;
            this.previousValue = currentValue;
            this.parentFormObject = this.parentFormObject || LBG.Forms
                .Validation.Tools.getValidationHandlerObject($this);
            this.formFieldName = this.formFieldName || LBG.Forms.Validation
                .Tools.convertClassDetailsToData(this.parentFormField[
                    0], "validationName:")[0] || null;
            for (var i = 0, len = this.parentFormObject.children.length,
                childField; i < len; i++) {
                childField = this.parentFormObject.children[i];
                if (childField.name !== this.formFieldName &&
                    childField.isShowingError === true) {
                    childField.hideError();
                }
            }
        }
    }
    return {
        init: function autoSelectRadiobuttonController() {
            $(RADIO_GROUP_SELECTOR).find(ELEMENT_SELECTORS).each(
                function() {
                    var $this = $(this);
                    this.previousValue = $this.val();
                    $(this).blur(_updateRadiobutton);
                });
        }
    };
})();
LBG.beneficiariesChooser = (function() {
    var FORM = "form.beneficiariesChooser",
        OVERLAY = "#overlay",
        INPUT_TABLE = "table.beneficiaries",
        INPUT_FIELDSET = "fieldset.selectBeneficiaryAccount",
        MESSAGE_CONTAINER = "p.selectionMsg",
        SELECTION_LIMIT = DI.lang.beneficiariesChooser.selectionCountValue,
        X_REMAINING_MSG = DI.lang.beneficiariesChooser.selectionRemainingMsg,
        MAX_REACHED_MSG = DI.lang.beneficiariesChooser.selectionMaxReachedMsg,
        PAGE_FORM = "#page form",
        HIDDEN_COUNT_VAL = "input.selectBeneficiaryCountValue:hidden";

    function updateSiblingCheckboxes() {
        var $inputsParent = ($(OVERLAY).length > 0) ? $(this).parents(
            FORM).find(INPUT_FIELDSET) : $(this).parents(FORM).find(
            INPUT_TABLE);
        var $siblingCheckboxes = $inputsParent.find(
            "input:checkbox");
        var checkedElements = 0;
        var i, len, disableCheckboxes = false;
        if ($siblingCheckboxes.length > SELECTION_LIMIT) {
            for (i = 0, len = $siblingCheckboxes.length; i < len; i++) {
                if ($siblingCheckboxes[i].checked) {
                    checkedElements++;
                }
            }
            if (checkedElements === SELECTION_LIMIT) {
                disableCheckboxes = true;
            }
            for (i = 0; i < len; i++) {
                if (!$siblingCheckboxes[i].checked) {
                    $siblingCheckboxes[i].disabled =
                        disableCheckboxes;
                }
            }
            var html = ((SELECTION_LIMIT - checkedElements) === 0) ?
                MAX_REACHED_MSG : X_REMAINING_MSG.replace("{0}",
                    SELECTION_LIMIT - checkedElements);
            $(this).parents(FORM).find(MESSAGE_CONTAINER).html(html);
        }
    }
    return {
        init: function() {
            var $inputsParent = ($(OVERLAY).length > 0) ? $(OVERLAY)
                .find(FORM).find(INPUT_FIELDSET) : $(FORM).find(
                    INPUT_TABLE);
            if ($(OVERLAY).length) {
                var $inputHiddenCount = $(PAGE_FORM).find(
                    HIDDEN_COUNT_VAL);
                if ($inputHiddenCount.length && $inputHiddenCount.val() !==
                    "") {
                    SELECTION_LIMIT = parseInt($inputHiddenCount.val(),
                        10);
                }
            }
            var checkedElements = $inputsParent.find(
                "input:checkbox:checked").length;
            $inputsParent.parents(FORM).find(MESSAGE_CONTAINER).html(
                X_REMAINING_MSG.replace("{0}", SELECTION_LIMIT -
                    checkedElements));
            $inputsParent.find("input:checkbox").bind("click",
                updateSiblingCheckboxes);
        }
    };
})();
LBG.previousAddressRepeater = (function() {
    var previousAddressSelector = "fieldset.previousAddress",
        additionalPreviousAddressSelector =
        "fieldset.additionalPreviousAddress",
        mainSelector = "fieldset.repeatableAddress",
        yearsSelector = "div.timeYearsMonths input.years",
        monthsSelector = "div.timeYearsMonths input.months";

    function calculateTimeAtAddress(container) {
        var years = parseInt($(yearsSelector, container).val(), 10) ||
            0,
            months = parseInt($(monthsSelector, container).val(),
                10) || 0;
        if (isNaN(years) || years < 0 || isNaN(months) || months <
            0) {
            return undefined;
        } else {
            return years * 12 + months;
        }
    }

    function hideAddress(selector) {
        var inputCollection = $(selector).find("input:text"),
            hideThisAddress = true;
        for (var i = 0; i < inputCollection.length; i++) {
            if (inputCollection[i].value !== "") {
                hideThisAddress = false;
                break;
            }
        }
        if (hideThisAddress === true) {
            $(selector).hide();
        }
    }

    function timeFieldHasValue(addressSelector) {
        var isValid = false,
            tTime;
        $(addressSelector).find("input:text").each(function() {
            if ($(this).hasClass("years") || $(this).hasClass(
                "months")) {
                tTime = parseInt($(this).val(), 10) || 0;
                if (tTime > 0) {
                    isValid = true;
                    return false;
                }
            }
        });
        return isValid;
    }

    function setup() {
        hideAddress(previousAddressSelector);
        hideAddress(additionalPreviousAddressSelector);
        var addresses = [this];
        var handleChange = function handleChange() {};
        var insertNewAddress = function insertNewAddress(
            addressSelector) {
            var block = $(addressSelector)[0];
            $(addressSelector).show();
            addresses.push(block);
            $(yearsSelector, block).change(handleChange);
            $(monthsSelector, block).change(handleChange);
            LBG.Forms.Validation.init();
            LBG.initAddressRepeaters.init();
        };
        handleChange = function handleChange() {
            var total = 0;
            for (var i = 0; i < addresses.length; i++) {
                var time = calculateTimeAtAddress(addresses[i]);
                if (time === undefined || time === 0) {
                    return;
                }
                total += time;
                if (total >= 36) {
                    while (addresses.length > i + 1) {
                        $(addresses.pop()).hide();
                    }
                    return;
                }
            }
            if (addresses.length <= 2) {
                if (addresses.length === 1) {
                    insertNewAddress(previousAddressSelector);
                    if (timeFieldHasValue(
                        previousAddressSelector)) {
                        insertNewAddress(
                            additionalPreviousAddressSelector
                        );
                    }
                } else {
                    insertNewAddress(
                        additionalPreviousAddressSelector);
                }
            }
        };
        $(yearsSelector, this).change(handleChange).change().blur();
        $(monthsSelector, this).change(handleChange).change().blur();
    }
    return {
        init: function() {
            $(mainSelector).each(setup);
        }
    };
})();
LBG.initAddressRepeaters = (function() {
    var mainSelector = "div.addressField";

    function setup() {
        $(this).find("input:text").each(function() {
            if (($(this).hasClass(".first") || $(this).hasClass(
                ".second"))) {
                $(this).focus(function() {
                    $(this).find("input:text").each(
                        function() {
                            if (!($(this).hasClass(
                                    ".first"
                                ) || $(this)
                                .hasClass(
                                    ".second"
                                ))) {
                                this.ready =
                                    true;
                            }
                        });
                });
            } else {
                this.ready = true;
            }
        });
    }
    return {
        init: function() {
            $(mainSelector).each(setup);
        }
    };
})();
LBG.paymentCalculator = {
    selectorForm: "form.internationalPaymentsCalculator",
    selectorCurrency: "select.internationalPaymentsCurrency",
    selectorCurrencyTypeForeign: ".currencyType .currencyTypeForeign",
    selectorCurrencyAmount: ".amountField",
    init: function() {
        var $form = $(LBG.paymentCalculator.selectorForm);
        $form.find(LBG.paymentCalculator.selectorCurrency).bind(
            "change", function() {
                if (!this.disabled) {
                    LBG.currencyCode.init();
                    var $warningMessage = $("<p class='warning'>" +
                            DI.lang.allowDecimalsForCurrency.warningMessage +
                            "</p>"),
                        $amountWrapper = $(LBG.paymentCalculator.selectorCurrencyAmount)
                        .find(".formFieldInner");
                    if ($(":selected", this).metadata().allowDecimal ===
                        false) {
                        $warningMessage.prependTo($amountWrapper);
                    } else {
                        $amountWrapper.find("p.warning").remove();
                    }
                    var $selectedCurrencyLabel = $form.find(LBG.paymentCalculator
                        .selectorCurrencyTypeForeign).find(
                        "label");
                    if ($selectedCurrencyLabel[0].defaultLabel ===
                        undefined) {
                        $selectedCurrencyLabel[0].defaultLabel =
                            $selectedCurrencyLabel.html();
                    }
                    var currencyText = ($(this).val() === "-") ?
                        $selectedCurrencyLabel[0].defaultLabel : $(
                            this).find("option:selected").text();
                    $selectedCurrencyLabel.html(currencyText);
                }
            }).change();
    }
};
LBG.internationalPayment = {
    init: function() {
        var currencyWarning = "span.warning",
            currencySelect = "select.internationalPaymentCurrency",
            domesticInput = "input.domesticAmountInput",
            foreignInput = "input.foreignAmountInput",
            $allowDecimalMessage;
        $(currencySelect).bind("change", function() {
            var metadata = $(":selected", this).metadata();
            LBG.currencyCode.init();
            if (metadata.disabledSterlingEquivalent === true) {
                $(foreignInput).attr("checked", "checked");
                $(domesticInput).attr("disabled", "disabled").next(
                    "label").addClass("disabled");
            } else {
                $(domesticInput).removeAttr("disabled").next(
                    "label").removeClass("disabled");
            } if (metadata.showCurrencyWarning === true) {
                $(currencyWarning).add($(currencyWarning).next(
                    ".cxtHelp")).show();
            } else {
                $(currencyWarning).add($(currencyWarning).next(
                    ".cxtHelp")).hide();
            } if (metadata.allowDecimal !== undefined) {
                if ($allowDecimalMessage === undefined) {
                    $allowDecimalMessage = $(
                        '<span class="inlineHelp">' + DI.lang
                        .allowDecimalsForCurrency.warningMessage +
                        "</span>").hide();
                    $(foreignInput).parents(".formFieldInner").find(
                        "span.label").append(
                        $allowDecimalMessage);
                }
                if (metadata.allowDecimal === false) {
                    $allowDecimalMessage.show();
                } else {
                    $allowDecimalMessage.hide();
                }
            } else {
                if ($allowDecimalMessage) {
                    $allowDecimalMessage.hide();
                }
            }
        }).change();
        LBG.internationalPayment.international_payments_email_preferences();
    },
    international_payments_email_preferences: function() {
        if (!$("input.ngb-ip-email-prefs").is(":checked")) {
            $(".ngb-ip-email-details").hide();
        }
        $("input.ngb-ip-email-prefs").change(function() {
            $(".ngb-ip-email-details").toggle();
        });
    }
};
LBG.currencyCode = {
    init: function() {
        var currencyCode = $("select.currencyCodeSelect").val();
        if (currencyCode == "-") {
            if ($(".domesticAmountInput").is(":checked")) {
                $(".currencyCodeLabel").text("GBP");
            } else {
                $(".currencyCodeLabel").text("");
            }
        } else {
            if ($(".domesticAmountInput").is(":checked")) {
                $(".currencyCodeLabel").text("GBP");
            } else {
                $(".currencyCodeLabel").text(currencyCode);
            }
        }
        $(".currencyCodeSwitch input").click(function() {
            if ($(".domesticAmountInput").is(":checked")) {
                if (currencyCode == "-") {
                    $(".currencyCodeLabel").text("");
                } else {
                    $(".currencyCodeLabel").text("GBP");
                }
            } else {
                if (currencyCode == "-") {
                    $(".currencyCodeLabel").text("");
                } else {
                    $(".currencyCodeLabel").text(currencyCode);
                }
            }
        });
        $("select.currencyCodeSelect").change(function() {
            if ($(this).val() == "-") {
                $(".currencyCodeLabel").text("");
            }
        });
    }
};
LBG.accountSwitcher = (function() {
    var ACCOUNT_SELECTOR = ".accountSwitcher",
        ACCOUNT_FIELDS = ".accountDetailsGroup";

    function updateAccountFields(input) {
        var value = input.options[input.selectedIndex].value.toString(),
            ajaxUrl, validationHandler = LBG.Forms.Validation.Tools
            .getValidationHandlerObject($(input).parents(
                ".formField"));
        switch (value) {
            case "1":
                ajaxUrl = DI.lang.accountSwitcher.currentAccountStub;
                break;
            case "2":
                ajaxUrl = DI.lang.accountSwitcher.creditCardStub;
                break;
            case "3":
                ajaxUrl = DI.lang.accountSwitcher.loanAccountStub;
                break;
            case "4":
                ajaxUrl = DI.lang.accountSwitcher.mortgageAccountStub;
                break;
            case "5":
                ajaxUrl = DI.lang.accountSwitcher.creditCardCardOnlyStub;
                break;
        }

        function injectNewFormFields(data) {
            validationHandler.removeChildren($(ACCOUNT_FIELDS));
            $(ACCOUNT_FIELDS).html(data);
            validationHandler.hideError();
            validationHandler.isValid = false;
            if ($.browser.msie) {
                LBG.common.explorerRedrawFix();
            }
            LBG.ajax.pageUpdated();
            validationHandler.findChildren($(ACCOUNT_FIELDS));
        }
        $.ajax({
            url: ajaxUrl,
            dataType: "html",
            success: function(data) {
                injectNewFormFields(data);
            }
        });
    }

    function setup() {
        $(ACCOUNT_SELECTOR).change(function() {
            updateAccountFields(this);
        });
    }
    return {
        init: function() {
            $(ACCOUNT_SELECTOR).each(setup);
        }
    };
})();
LBG.balanceTransfer = (function() {
    var selectorFieldset = "fieldset.balanceTransfer",
        selectorAddButton =
        ".validateBalanceTransfer .actions input:image",
        selectorFieldRow = ".formFieldRow",
        selectorAccDetails = ".accountDetails",
        selectorAmountInput = "input.amount";
    var classExpiry = "expiryDate",
        classAccount = "account";
    var max = 5;

    function removeNoTransferOption($fieldset) {
        $fieldset.find("select option.hideJS").remove();
    }

    function setupAccountDropDown($fieldRows) {
        $fieldRows.each(function() {
            $(this).find(".formField:first select").change(
                function() {
                    var $row = $(this).parents(
                        selectorFieldRow);
                    var $inputs = $row.next(
                        selectorAccDetails).find(
                        "input:text(not:" +
                        selectorAmountInput + ")");
                    var $amount = $row.find(
                        selectorAmountInput);
                    $inputs.val("");
                    if (this.value === "-") {
                        $amount.val("");
                    }
                    LBG.Forms.Validation.Tools.getFieldHandler(
                        $amount).hideError();
                    LBG.autoTotal.init();
                }).blur(function() {
                LBG.autoTotal.init();
            });
        });
    }

    function setup() {
        $(selectorFieldset).each(function() {
            var $fieldset = $(this);
            var $fieldRows = $fieldset.find(
                selectorFieldRow);
            removeNoTransferOption($fieldset);
            if ($fieldRows.length >= max) {
                $(selectorAddButton, $fieldset).attr(
                    "disabled", "disabled").css({
                    "opacity": "0.5",
                    "cursor": "default"
                });
            }
            setupAccountDropDown($fieldRows);
        });
    }
    return {
        init: function() {
            setup();
        }
    };
})();
LBG.enrichedSelects = function() {
    $("select.enriched").change(function() {
        var meta = $("option:selected", this).metadata().enriched;
        if (!meta) {
            return;
        }
        $.each(meta, function(target, text) {
            $(target).each(function() {
                var $this = $(this);
                if ($this.is("input, select")) {
                    $this.val(text.substring(0, 18));
                } else {
                    $this.text(text);
                }
            });
        });
    });
    if ($.browser.mozilla === true) {
        $("select.enriched").trigger("change");
    }
};
LBG.businessOverdraft = function() {
    var target = $(".businessNameToggle"),
        defaultName = $(target).text();
    $("select.businessGroup").change(function() {
        var $busName = $("option:selected", this).parent().attr(
            "label");
        if (!$busName) {
            $(target).text(defaultName);
        } else {
            $(target).text($busName);
        }
    });
};
LBG.statusToggle = (function() {
    var setFocusOnTab = false;

    function hideErrors($element, $this) {
        var $formFields = null;
        var validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            $this);
        if ($element.hasClass("formField")) {
            $formFields = $element;
        } else {
            $formFields = $element.is("input, select") ? $element.parents(
                "div.formField") : $element.find(
                "div.formField");
        }
        $formFields.each(function() {
            var data = LBG.Forms.Validation.Tools.convertClassDetailsToData(
                this, "validationName:");
            var field = validationHandler.getChild(data[0]);
            if (field.hideError) {
                field.hideError();
            }
        });
    }

    function setDisabled($element, isDisabled, clearDisabled) {
        if (!$element.is("input, select")) {
            $element = $element.find("input, select");
        }
        $element.each(function() {
            var $this = $(this);
            $this[0].disabled = isDisabled;
            if (isDisabled) {
                $this.addClass("isDisabled");
                if (clearDisabled || $this.parents().hasClass(
                    "otherTitle")) {
                    if (!$(
                        ".transferBalances .balanceTransferTo"
                    ).length) {
                        $this.val("");
                    } else {
                        $this.filter("input").val("");
                    }
                }
            } else {
                $this.removeClass("isDisabled").val($(this)
                    .defaultText);
            } if ($.browser.safari) {
                $this.css("-webkit-transform", "scale(0.9)");
                setTimeout(function() {
                    $this.css("-webkit-transform",
                        "none");
                }, 1);
            }
        });
    }

    function isId(str) {
        return str.substring(1, 0) === "#";
    }

    function escapeId(id) {
        return id.replace(/:/g, "\\:");
    }

    function handleToggle(event) {
        var $this = $(this),
            meta = ($this.is("select")) ? $this.find(":selected").metadata() :
            $this.metadata(),
            $disable, $enable, $hide, $show, $reset, clearDisabled =
            false;
        if (meta.disable) {
            $disable = isId(meta.disable) ? $(escapeId(meta.disable)) :
                $(meta.disable);
        }
        if (meta.enable) {
            $enable = isId(meta.enable) ? $(escapeId(meta.enable)) :
                $(meta.enable);
        }
        if (meta.hide) {
            $hide = isId(meta.hide) ? $(escapeId(meta.hide)) : $(
                meta.hide);
        }
        if (meta.show) {
            $show = isId(meta.show) ? $(escapeId(meta.show)) : $(
                meta.show);
        }
        if (meta.clearDisabled && typeof clearDisabled ===
            "boolean") {
            clearDisabled = meta.clearDisabled;
        }
        if (meta.reset) {
            $reset = isId(meta.reset) ? $(escapeId(meta.reset)) : $(
                meta.reset);
        }
        if ($this.is(":checkbox, :radio") && !this.checked) {
            var $temp = $disable;
            $disable = $enable;
            $enable = $temp;
        }
        if ($this.is(":checkbox, :radio, select") || ($this.is(
            ":text") && $this.val() !== "")) {
            if ($disable) {
                hideErrors($disable, $this);
                setDisabled($disable, true, clearDisabled);
            }
            if ($enable) {
                setDisabled($enable, false, clearDisabled);
            }
        }
        if ($this.is(":text") && $this.val() === "") {
            if ($disable) {
                setDisabled($disable, false, clearDisabled);
            }
            if ($enable) {
                hideErrors($enable, $this);
                setDisabled($enable, true, clearDisabled);
            }
        }
        if ($hide) {
            hideErrors($hide, $this);
            $hide.hide();
        }
        if ($show) {
            var $showHiddenOnly = $show.not(":visible");
            if ($showHiddenOnly.length) {
                $showHiddenOnly.show();
            }
            if ($reset) {
                hideErrors($reset, $this);
                if (event) {
                    $reset.find("input:radio,input:checkbox").removeAttr(
                        "checked");
                    $reset.find("input:text").val("");
                    $reset.find("select").attr("selectedIndex", 0);
                    $reset.find(":input").each(function() {
                        this.ready = false;
                    });
                }
            }
        }
        if ($show && $show.length) {
            if ($show.hasClass("fasterPaymentFree")) {
                $hide.find(":radio").removeAttr("checked");
                $show.find(":radio").eq(0).attr("checked",
                    "checked");
            } else {
                if ($show.hasClass("fasterPaymentCharged")) {
                    $hide.find(":radio").removeAttr("checked");
                    $show.find(":radio").eq(1).attr("checked",
                        "checked");
                } else {
                    if ($show.hasClass("paymentASAP")) {
                        $hide.find(":radio").removeAttr("checked");
                        $show.find(":radio").eq(0).attr("checked",
                            "checked");
                    }
                }
            } if ($show.parent().hasClass(
                ".secondaryauthcommercial")) {
                if ($show.parent().find(".option0.statusToggleHide")
                    .is(":visible")) {
                    if ($show.parent().find(
                        ".option1.statusToggleHide .submitAction"
                    ).hasClass("submitAction")) {
                        $show.parent().find(
                            ".option1.statusToggleHide .primaryAction input"
                        ).removeClass("submitAction");
                    }
                    if ($show.parent().find(
                        ".option2.statusToggleHide .submitAction"
                    ).hasClass("submitAction")) {
                        $show.parent().find(
                            ".option2.statusToggleHide .primaryAction input"
                        ).removeClass("submitAction");
                    }
                    if (!$show.parent().find(
                        ".option0.statusToggleHide .submitAction"
                    ).hasClass("submitAction")) {
                        $show.parent().find(
                            ".option0.statusToggleHide .primaryAction input"
                        ).addClass("submitAction");
                    }
                } else {
                    if ($show.parent().find(
                        ".option1.statusToggleHide").is(
                        ":visible")) {
                        if ($show.parent().find(
                            ".option0.statusToggleHide .submitAction"
                        ).hasClass("submitAction")) {
                            $show.parent().find(
                                ".option0.statusToggleHide .primaryAction input"
                            ).removeClass("submitAction");
                        }
                        if ($show.parent().find(
                            ".option2.statusToggleHide .submitAction"
                        ).hasClass("submitAction")) {
                            $show.parent().find(
                                ".option2.statusToggleHide .primaryAction input"
                            ).removeClass("submitAction");
                        }
                        if (!$show.parent().find(
                            ".option1.statusToggleHide .submitAction"
                        ).hasClass("submitAction")) {
                            $show.parent().find(
                                ".option1.statusToggleHide .primaryAction input"
                            ).addClass("submitAction");
                        }
                    } else {
                        if ($show.parent().find(
                            ".option2.statusToggleHide").is(
                            ":visible")) {
                            if ($show.parent().find(
                                ".option0.statusToggleHide .submitAction"
                            ).hasClass("submitAction")) {
                                $show.parent().find(
                                    ".option0.statusToggleHide .primaryAction input"
                                ).removeClass("submitAction");
                            }
                            if ($show.parent().find(
                                ".option1.statusToggleHide .submitAction"
                            ).hasClass("submitAction")) {
                                $show.parent().find(
                                    ".option1.statusToggleHide .primaryAction input"
                                ).removeClass("submitAction");
                            }
                            if (!$show.parent().find(
                                ".option2.statusToggleHide .submitAction"
                            ).hasClass("submitAction")) {
                                $show.parent().find(
                                    ".option2.statusToggleHide .primaryAction input"
                                ).addClass("submitAction");
                            }
                        }
                    }
                }
            }
        }
        if (($.browser.safari === true || $.browser.mozilla ===
            true) && setFocusOnTab === true) {
            var $allFields = $(".formField");
            var $index = $allFields.index($this.parents(
                ".formField"));
            var $nextFormField = $allFields.eq($index + 1);
            var $focus = $nextFormField.find("input, select").eq(0);
            var $next = $allFields.eq($allFields.index($focus) + 1);
            if ($focus.length) {
                if ($focus[0].disabled) {
                    $next.find("input, select").eq(0).focus();
                } else {
                    setTimeout(function() {
                        $focus.focus();
                        hideErrors($next, $this);
                    }, 5);
                }
            }
        }
    }

    function setup() {
        var $this = $(this);
        if ($this.is(":text")) {
            $this.bind("change keydown keyup", handleToggle).change();
        }
        if ($this.is("select")) {
            $this.change(handleToggle).change();
        } else {
            $this.click(handleToggle);
            if (this.checked || $this.is(":checkbox")) {
                handleToggle.call(this);
            }
        } if ($.browser.safari === true || $.browser.mozilla ===
            true) {
            $this.keydown(function(event) {
                setFocusOnTab = event.shiftKey === false &&
                    event.keyCode === 9;
            });
        }
    }
    return {
        init: function($context) {
            if (typeof $context === "undefined" || !$context.length) {
                $context = $("body");
            }
            $("input.statusToggle, select.statusToggle", $context).each(
                setup);
        }
    };
})();
LBG.selectAccount = (function() {
    var $overlay, $businesses, $form, $formField, $dropDown, $introCopy;
    var selectorScroller = "fieldset.businessAccountList .formField",
        selectorJumpToList = "ul.beneficiariesList",
        selectorIntroCopy = ".beneficiariesListIntro";
    var dropDownID = DI.lang.selectAccount.dropDown.id,
        dropDownDefault = DI.lang.selectAccount.dropDown.defaultText,
        dropDownValidate = DI.lang.selectAccount.formField.validateClass,
        dropDownValidationName = DI.lang.selectAccount.formField.validationName;

    function showBusiness() {
        var selectedIndex = $dropDown.attr("selectedIndex") - 1;
        $introCopy.find(selectorJumpToList).remove();
        if (selectedIndex >= 0) {
            $introCopy.find("p").hide();
            $businesses.hide().eq(selectedIndex).show().each(
                function() {
                    $(this).find(selectorJumpToList).clone().appendTo(
                        $introCopy).show().find("a:eq(0)").focus();
                    $form.find(selectorScroller).scrollTop(0);
                });
        } else {
            $overlay.find(selectorIntroCopy).find("p").show();
            $businesses.hide().find("input:checked").removeAttr(
                "checked");
        }
    }

    function build() {
        $overlay = $("#overlay .businessBulkPayments");
        $businesses = $overlay.find(".selectBusinessAccount");
        $form = $overlay.find("form");
        $introCopy = $overlay.find(selectorIntroCopy);
        if ($businesses.length > 0) {
            $formField = $('<div class="formField validate:(' +
                dropDownValidate + ") validationName:(" +
                dropDownValidationName +
                ') clearfix"><div class="formFieldInner"></div></div>'
            );
            $dropDown = $('<select id="' + dropDownID +
                '" class="selectBusiness"><option value="-">' +
                dropDownDefault + "</option></select>");
            $businesses.each(function(i) {
                var index = i + 1;
                var businessName = $(this).find("h3").text();
                $dropDown.append('<option value="' + index +
                    '">' + businessName + "</option>");
            });
            $dropDown.attr("selectedIndex", 0).change(showBusiness)
                .appendTo($formField.find(".formFieldInner"));
            if ($businesses.length === 1) {
                $dropDown.addClass("isDisabled").attr({
                    selectedIndex: 1,
                    disabled: "disabled"
                }).change().hide();
                var $businessName = $("<div><p>" + $businesses.eq(0)
                    .find("h3").text() + "</p></div>");
                $businessName.appendTo($formField.find(
                    ".formFieldInner"));
            }
            $businesses.find("h3").parent(".inner").remove();
            $formField.prependTo($form);
            var parentValidationHandler = LBG.Forms.Validation.Tools
                .getValidationHandlerObject($formField);
            parentValidationHandler.isValid = false;
            parentValidationHandler.add(new LBG.Forms.Validation.FormField(
                $formField[0]));
        }
    }
    return {
        init: function() {
            build();
        }
    };
})();
LBG.scrollable = (function() {
    var SCROLL_CONTROL = ".scroller";

    function setup() {
        $(SCROLL_CONTROL).find("a").live("click", function() {
            var data = $(this).parents(SCROLL_CONTROL).metadata(),
                $target = $($(this).attr("href").replace(
                    /^.*(#.*)$/, "$1")),
                $pane = $(data.pane);
            $pane.scrollTo($target, 400, function() {
                $target.next("ul").find(
                    "li:first-child input:radio"
                ).focus();
            });
            return false;
        });
    }
    return {
        init: function() {
            setup();
        }
    };
})();
LBG.setupPasscode = (function() {
    var selector = "div.formField.passCode";
    var maxLength = 4;

    function getCursorPosition(input) {
        var pos = null;
        if (document.selection) {
            var range = document.selection.createRange();
            var rangeLength = range.text.length;
            range.moveStart("character", -input.value.length);
            pos = range.text.length - rangeLength;
        } else {
            if (input.selectionStart) {
                pos = input.selectionStart;
            }
        }
        return pos;
    }

    function setup() {
        $(selector).each(function() {
            $(this).find("input:text:first").keyup(function(
                event) {
                var val = $(this).val();
                var pos = getCursorPosition(this);
                var elm = $(this).siblings(
                    "input:text");
                var key = event.keyCode;
                if (key < 37 || key > 41) {
                    if (pos === maxLength && val.length ===
                        maxLength && this.prevLength >=
                        (maxLength - 1)) {
                        $(elm).unbind("focus").focus();
                    } else {
                        this.prevLength = val.length;
                    }
                }
            });
        });
    }
    return {
        init: setup
    };
})();
LBG.setupTextAlertsDailyFrequency = function() {
    var defaultValue = DI.lang.textAlertsDailyFrequency.defaultValue,
        dailyValue = DI.lang.textAlertsDailyFrequency.dailyValue,
        notApplicableValue = DI.lang.textAlertsDailyFrequency.notApplicableValue,
        notApplicableSelector = "option[value=" + notApplicableValue + "]";
    $("table.textAlertsDailyFrequency select.slctFrequency").each(function() {
        var select = $(this).parents("tr").find(
            "select.slctReceiveOn");
        this.notApplicableOption = $(select).find(
            notApplicableSelector).clone();
        $(this).bind("change", function() {
            var slctReceiveOn = $(this).parents("tr").find(
                "select.slctReceiveOn");
            if (this.value === dailyValue) {
                $(slctReceiveOn).append(this.notApplicableOption)
                    .attr("disabled", "disabled");
                try {
                    $(slctReceiveOn).val(notApplicableValue);
                } catch (e) {}
                LBG.Forms.Validation.Tools.getFieldHandler(
                    $(slctReceiveOn).parents(
                        ".formField")).hideError();
            } else {
                if ($(slctReceiveOn).val() ===
                    notApplicableValue) {
                    $(slctReceiveOn).val(defaultValue);
                }
                $(slctReceiveOn).removeAttr("disabled");
                $(slctReceiveOn).find(notApplicableSelector)
                    .remove();
            }
        });
        if ($(this).parents("tr").find("input:checkbox").is(
            ":checked")) {
            $(this).change();
        }
    });
};
LBG.toggleFrequencyTerm = {
    selectorDepositTerm: "select.toggleFrequencyTerm",
    selectorInterestPaidOptions: ".interestPaidOptions",
    selectorFrequencyTerm: "select.slctFrequencyTerm",
    toggle: function($this) {
        var meta = $this.find(":selected").metadata();
        var $show = meta.target ? $(meta.target) : undefined;
        var validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            $this);
        $(LBG.toggleFrequencyTerm.selectorInterestPaidOptions).each(
            function() {
                var field = validationHandler.getChild(LBG.Forms.Validation
                    .Tools.convertClassDetailsToData(this,
                        "validationName:")[0]);
                if (field.hideError) {
                    field.hideError();
                }
            });
        var $slctFrequencyTerm = $(LBG.toggleFrequencyTerm.selectorFrequencyTerm);
        if ($show !== undefined) {
            $slctFrequencyTerm.removeAttr("disabled").removeClass(
                "isDisabled");
            if ($.browser.mozilla === false) {
                if ($slctFrequencyTerm[0].optionElements === undefined) {
                    $slctFrequencyTerm[0].optionElements =
                        $slctFrequencyTerm.html();
                }
                $slctFrequencyTerm.html($slctFrequencyTerm[0].optionElements);
                $show = $(meta.target);
            }
            $slctFrequencyTerm.find("option").hide().attr("disabled",
                "disabled");
            $show.show().attr("disabled", "");
            var selectedIndex = $slctFrequencyTerm.attr("selectedIndex");
            $slctFrequencyTerm.attr("selectedIndex", selectedIndex).removeAttr(
                "disabled").removeClass("isDisabled").show();
            if ($.browser.mozilla === false) {
                $slctFrequencyTerm.find("option").each(function() {
                    if ($(this).css("display") === "none") {
                        $(this).remove();
                    }
                });
            }
        } else {
            $slctFrequencyTerm.attr("disabled", "disabled").addClass(
                "isDisabled");
        }
    },
    init: function() {
        $(LBG.toggleFrequencyTerm.selectorDepositTerm).change(function() {
            LBG.toggleFrequencyTerm.toggle($(this));
        }).change();
    }
};
LBG.fraudDetection = {
    screenResolution: "input.screenRes",
    timeZone: "input.timeZone",
    init: function() {
        var screenWidth = window.screen.width;
        var screenHeight = window.screen.height;
        var screenResolution = screenWidth + "x" + screenHeight;
        $(LBG.fraudDetection.screenResolution).attr("value",
            screenResolution);
        var visitortime = new Date();
        var offsettime = -1 * visitortime.getTimezoneOffset() / 60;
        var offsethour = parseInt(Math.abs(visitortime.getTimezoneOffset() /
            60), 10);
        var offsetmin = Math.abs(visitortime.getTimezoneOffset()) % 60;
        var formattedtime = "";
        if (offsettime !== 0) {
            var offsettimeSymb = (offsettime > 0) ? "+" : "-";
            var offsethourSymb = (offsethour < 10) ? "0" : "";
            var offsetminSymb = (offsetmin < 10) ? "0" : "";
            formattedtime = "GMT " + offsettimeSymb + offsethourSymb +
                offsethour + offsetminSymb + offsetmin;
        } else {
            formattedtime = "GMT 0000";
        } if (visitortime) {
            $(LBG.fraudDetection.timeZone).attr("value", formattedtime);
        } else {
            $(LBG.fraudDetection.timeZone).attr("value",
                "JavaScript Date() not enabled");
        }
    }
};
LBG.leapYearDayAdjust = (function() {
    var selector = {
        dateGroup: ".formField.dateRange .inputGroup, .formField .date.inputGroup",
        inputGroup: ".inputGroup",
        day: "select.day",
        month: "select.month",
        year: "select.year"
    };
    var defaultValue = {
        month: "-",
        year: "-"
    };
    var $focusedSelect = null;

    function isLeapYear(year) {
        return ((year % 4 === 0) && (year % 100 !== 0 || year % 400 ===
            0));
    }

    function getDaysInMonth(month, year) {
        if (month === "02" && isLeapYear(year) === true) {
            return 29;
        } else {
            var days = 31;
            switch (month) {
                case "01":
                case "03":
                case "05":
                case "07":
                case "08":
                case "10":
                case "12":
                    days = 31;
                    break;
                case "04":
                case "06":
                case "09":
                case "11":
                    days = 30;
                    break;
                case "02":
                    days = 28;
                    break;
                default:
                    break;
            }
            return days;
        }
    }

    function setDaysInMonth(inputGroup, trigger) {
        var $slctDay = $(inputGroup).find(selector.day),
            month = $(inputGroup).find(selector.month).val(),
            year = $(inputGroup).find(selector.year).val();
        if (month === defaultValue.month && year === defaultValue.year) {
            return;
        }
        var displayDays = (month !== defaultValue.month && year !==
                defaultValue.year) ? getDaysInMonth(month, year) +
            1 : inputGroup.optionsElements.length;
        var optionLength = $slctDay.find("option").length;
        var selectedIndex = $slctDay.attr("selectedIndex");
        var i;
        if ($.browser.safari === false) {
            if (optionLength >= displayDays) {
                for (i = optionLength; i >= displayDays; i--) {
                    $slctDay.find("option").eq(i).remove();
                }
            } else {
                for (i = optionLength; i < displayDays; i++) {
                    $slctDay.append(inputGroup.optionsElements[i]);
                }
            }
        } else {
            var $newSlctDay = $($("<select></select>").attr({
                id: $slctDay.attr("id"),
                name: $slctDay.attr("name"),
                className: $slctDay.attr("class")
            }));
            for (i = 0; i < displayDays; i++) {
                $newSlctDay.append(inputGroup.optionsElements[i]);
            }
            $slctDay.replaceWith($newSlctDay);
        }
        $slctDay = $(inputGroup).find(selector.day);
        optionLength = $slctDay.find("option").length - 1;
        if (selectedIndex > optionLength) {
            $slctDay.attr("selectedIndex", optionLength);
        } else {
            $slctDay.attr("selectedIndex", selectedIndex);
        } if ($.browser.msie === true && $focusedSelect !== null) {
            $focusedSelect.focus();
        }
    }

    function setup() {
        var $dateGroup = $(selector.dateGroup);
        $dateGroup.each(function() {
            if (this.optionsElements === undefined) {
                this.optionsElements = $(this).find(
                    selector.day + " option").clone();
            }
            $(this).find(selector.month + ", " + selector.year)
                .bind("change.leapYearDayAdjust", function() {
                    if ($.browser.msie === true) {
                        $focusedSelect = $(this);
                    }
                    setDaysInMonth($(this).parents(
                            selector.inputGroup)[0],
                        this);
                });
            $(this).find(selector.day).bind(
                "focus.leapYearDayAdjust", function() {
                    $focusedSelect = null;
                    setDaysInMonth($(this).parents(
                            selector.inputGroup)[0],
                        this);
                });
            if ($.browser.msie === true) {
                $(this).find(selector.day).bind(
                    "change.leapYearDayAdjust",
                    function() {
                        $(this).focus();
                    });
            }
        });
    }
    return {
        init: function() {
            setup();
        }
    };
})();
LBG.successFadeOutDelay = (function() {
    return {
        init: function(color, delay) {
            color = (!color) ? "#FFFFCC" : color;
            delay = (!delay) ? 10000 : delay;
            $(".successInfoMessage h2.success").each(function() {
                var successInfoMessage = $(this).parents(
                    ".successInfoMessage").css(
                    "background-color", color);
                setTimeout(function() {
                    $(successInfoMessage).css(
                        "background-color",
                        "transparent");
                    LBG.common.effects.highlightElement(
                        successInfoMessage,
                        color);
                }, delay);
            });
        }
    };
})();
LBG.warningFadeOutDelay = (function() {
    return {
        init: function(color, delay) {
            color = (!color) ? "#FFFFCC" : color;
            delay = (!delay) ? 10000 : delay;
            $(".warningInfoMessage h2.warning").each(function() {
                var warningInfoMessage = $(this).parents(
                    ".warningInfoMessage").css(
                    "background-color", color);
                setTimeout(function() {
                    $(warningInfoMessage).css(
                        "background-color",
                        "transparent");
                    LBG.common.effects.highlightElement(
                        warningInfoMessage,
                        color);
                }, delay);
            });
        }
    };
})();
LBG.setFocus = {
    focusFieldSelector: ".setFocus",
    init: function() {
        $(LBG.setFocus.focusFieldSelector).each(function() {
            $(LBG.setFocus.focusFieldSelector).focus();
        });
    }
};
LBG.rememberMe = (function() {
    var selector = "form.rememberUserID";
    var parameters = DI.cookieRememberUserID;
    return {
        init: function() {
            $(selector).each(function() {
                var $checkbox = $(this).find(
                    "input:checkbox");
                if ($checkbox.length > 0) {
                    var cookie = $.cookie(parameters.name);
                    var $username = $(this).find(
                        "input:text");
                    if (cookie !== null) {
                        $checkbox.attr("checked", "checked");
                        $username.val(cookie);
                    }
                    $(this).bind("submit", function() {
                        if ($checkbox.is(":checked")) {
                            $.cookie(parameters.name,
                                $username.val(), {
                                    expires: parameters
                                        .expires,
                                    path: parameters
                                        .path,
                                    domain: parameters
                                        .domain,
                                    secure: parameters
                                        .secure
                                });
                        } else {
                            $.cookie(parameters.name,
                                null);
                        }
                    });
                }
            });
        }
    };
})();
LBG.toggleBankRouting = {
    selectorCountry: "select.toggleBankRouting",
    selectorRouting: ".bankInfoSelector",
    selectorRoutingType: "select.bankRoutingType",
    toggle: function($this) {
        var meta = $this.find(":selected").metadata();
        var $show = meta.target ? $(meta.target) : undefined;
        var validationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            $this);
        $(LBG.toggleBankRouting.selectorRouting).each(function() {
            var field = validationHandler.getChild(LBG.Forms.Validation
                .Tools.convertClassDetailsToData(this,
                    "validationName:")[0]);
            if (field.hideError) {
                field.hideError();
            }
        });
        $("input:text.bankRoutingType").remove();
        if ($show !== undefined) {
            $(LBG.toggleBankRouting.selectorRouting).show();
            var $slctRoutingType = $(LBG.toggleBankRouting.selectorRoutingType);
            if ($.browser.mozilla === false) {
                if ($slctRoutingType[0].optionElements === undefined) {
                    $slctRoutingType[0].optionElements =
                        $slctRoutingType.html();
                }
                $slctRoutingType.html($slctRoutingType[0].optionElements);
                $show = $(meta.target);
            }
            $slctRoutingType.find("option").hide();
            $show.show();
            if ($show.length > 1) {
                $slctRoutingType.attr("selectedIndex", 0).removeAttr(
                    "disabled").show();
            } else {
                var $option = $slctRoutingType.find("option[value=" +
                    $show.val() + "]");
                $slctRoutingType.attr({
                    "selectedIndex": $slctRoutingType.find(
                        "option").index($option)
                }).hide();
                $("<input />").attr({
                    "type": "text",
                    "readonly": "readonly",
                    "class": $($slctRoutingType).attr("class"),
                    "name": $($slctRoutingType).attr("name") +
                        "_readonly",
                    "id": $($slctRoutingType).attr("id") +
                        "_readonly",
                    "value": $option.text()
                }).insertAfter($slctRoutingType);
            } if ($.browser.mozilla === false) {
                $slctRoutingType.find("option").each(function() {
                    if ($(this).css("display") === "none") {
                        $(this).remove();
                    }
                });
            }
        } else {
            $(LBG.toggleBankRouting.selectorRouting).hide();
        }
    },
    init: function() {
        $(LBG.toggleBankRouting.selectorCountry).change(function() {
            LBG.toggleBankRouting.toggle($(this));
        }).change();
    }
};
LBG.contentScrollerTabIndex = function() {
    $(".legals").attr("tabIndex", 0);
};
LBG.iOS = {
    scrollGestureMessage: function(element) {
        if (LBG.browserIdent.browserIdent === "iPad" || LBG.browserIdent
            .browserIdent === "iPhone") {
            var message =
                '<div class="infoMessage alert scrollGesture clearfix"><div class="infoMessageInner clearfix"><p>' +
                DI.lang.iOS.scrollGestureMessage + "</p></div></div>";
            if (element && element.scrollHeight > $(element).innerHeight()) {
                $(element).addClass("scrollGesture");
                $(message).insertBefore(element);
            }
        }
    }
};
LBG.timedLogout = {
    duration: 0,
    interval: null,
    selectorContainer: ".logoutTimer",
    selectorMessage: ".logoutTimer .timer",
    selectorButtons: ".logoutButton",
    selectorLogoutLink: ".movingOn a",
    selectorDuration: ".logoutTimerDurationMS",
    enabledClassName: "jsTimedLogout",
    messageHtml: "",
    buttonUrl: "",
    buttonAlt: "",
    init: function() {
        if ($(LBG.timedLogout.selectorContainer).length === 1) {
            LBG.timedLogout.duration = $(LBG.timedLogout.selectorDuration)
                .val();
            LBG.timedLogout.messageHtml = DI.lang.timedLogout.logoutMsg;
            LBG.timedLogout.buttonUrl = DI.lang.timedLogout.logoutButton;
            LBG.timedLogout.buttonAlt = DI.lang.timedLogout.logoutAlt;
            $(LBG.timedLogout.selectorContainer).addClass(LBG.timedLogout
                .enabledClassName);
            $(LBG.timedLogout.selectorButtons).attr({
                "src": LBG.timedLogout.buttonUrl,
                "alt": LBG.timedLogout.buttonAlt
            });
            var timerImg = new Image();
            $(LBG.timedLogout.selectorMessage).before($(timerImg).addClass(
                    "clock").attr("alt", DI.timedLogout.timerImgAlt)
                .attr("src", DI.timedLogout.timerImg));
            LBG.timedLogout.refreshMessage();
            LBG.timedLogout.start();
        }
    },
    start: function() {
        LBG.timedLogout.timer = window.setInterval(LBG.timedLogout.countdown,
            1000);
    },
    stop: function() {
        window.clearInterval(LBG.timedLogout.timer);
    },
    refreshMessage: function() {
        var message = LBG.timedLogout.messageHtml + " <strong>" + LBG.timedLogout
            .formatMs(LBG.timedLogout.duration) + "</strong>";
        $(LBG.timedLogout.selectorMessage).html(message);
    },
    formatMs: function(ms) {
        var formattedTime = parseInt(ms % 60000 / 1000, 10) +
            " seconds.";
        if (ms / 60000 >= 1) {
            formattedTime = parseInt(Math.floor(ms / 60000), 10) +
                " minutes and " + formattedTime;
        }
        return formattedTime;
    },
    logout: function() {
        window.location.href = $(LBG.timedLogout.selectorLogoutLink).attr(
            "href");
    },
    countdown: function() {
        LBG.timedLogout.duration = LBG.timedLogout.duration - 1000;
        if (LBG.timedLogout.duration >= 0) {
            LBG.timedLogout.refreshMessage();
        } else {
            LBG.timedLogout.stop();
            LBG.timedLogout.logout();
        }
    }
};
LBG.clickActionLinkOnce = {
    init: function() {
        $(
            'a[href*="&al="]:not(.removeSplit a, a.newwin, a.newhelpwin, a.newfaqwin, a.overlay, a.printwin, a.statementLink, a.pdfLink, a.tabBrowse, a.tabSearch, a.oabAddToCalLink), a[href*="link"]'
        ).bind("click", function() {
            $(this).unbind().bind("click", function() {
                return false;
            });
        });
    }
};
LBG.expandSelect = {
    selector: ".expandSelect select, select.expandSelect, .navBar select",
    current: null,
    cloneCSS: {
        position: "absolute",
        top: "-100px",
        left: "-10000px",
        width: "auto",
        maxWidth: "none",
        visibility: "hidden"
    },
    defaultCSS: {
        width: "auto",
        maxWidth: "none",
        "z-index": 2,
        position: "relative"
    },
    resetWidth: function(element) {
        $(element).css("width", $(element).data("origWidth"));
    },
    doMouseover: function(event) {
        var target = event.target;
        if (LBG.expandSelect.current !== null && LBG.expandSelect.current !==
            event.target) {
            LBG.expandSelect.resetWidth(LBG.expandSelect.current);
        }
        var cloneSelect = $(target).clone().css(LBG.expandSelect.cloneCSS)
            .insertAfter(target);
        var cloneWidth = cloneSelect[0].offsetWidth;
        if (cloneWidth === 0) {
            cloneWidth = cloneSelect.width();
        }
        cloneSelect.remove();
        if (cloneWidth >= $(target).data("origWidth")) {
            $(target).css(LBG.expandSelect.defaultCSS);
        }
        LBG.expandSelect.current = target;
    },
    doMouseout: function(event) {
        LBG.expandSelect.resetWidth(event.target);
    },
    doFocus: function(event) {
        $(event.target).unbind("mouseout").bind("blur", function() {
            LBG.expandSelect.resetWidth(this);
            $(this).bind("mouseout", LBG.expandSelect.doMouseout);
        });
    },
    init: function() {
        if ($.browser.msie && $.browser.version < 9) {
            $(LBG.expandSelect.selector).each(function() {
                $(this).data("origWidth", this.offsetWidth);
            }).bind("mouseover", LBG.expandSelect.doMouseover).bind(
                "mouseout", LBG.expandSelect.doMouseout).bind(
                "focus", LBG.expandSelect.doFocus);
        }
    }
};
LBG.equalisePanelHeights = {
    isResizing: false,
    panels: [],
    resetPanels: function() {
        $(LBG.equalisePanelHeights.panels).css("height", "auto");
    },
    equaliseHeights: function() {
        LBG.equalisePanelHeights.panels = [];

        function doEqualise(selWrapper, selPanel) {
            var curHeight = 0;
            var maxHeight = 0;
            $(selWrapper).each(function() {
                $(this).find(selPanel).each(function() {
                    curHeight = $(this).height();
                    if (curHeight > maxHeight) {
                        maxHeight = curHeight;
                    }
                    LBG.equalisePanelHeights.panels
                        .push(this);
                }).height(maxHeight);
            });
        }
        doEqualise(".equalPanelHeights", ".subPanel");
        doEqualise(".yourOffersMultiBox ul.offerList", "> li");
        doEqualise(".yourOffersSingleBox ul.offerList", "> li");
        doEqualise("div.optionPanel", "div.subPanel");
        doEqualise("div.summaryPanels div.colLayout", "div.subPanel");
        if ($.browser.msie) {
            LBG.equalisePanelHeights.isResizing = false;
        }
    },
    init: function(doResetHeights) {
        if (doResetHeights) {
            LBG.equalisePanelHeights.resetPanels();
        }
        LBG.equalisePanelHeights.equaliseHeights();
        if (!$.browser.msie || $.browser.msie && $.browser.version >= 7) {
            $(window).resize(function() {
                if ($.browser.msie && !LBG.equalisePanelHeights
                    .isResizing || !$.browser.msie) {
                    if ($.browser.msie) {
                        LBG.equalisePanelHeights.isResizing =
                            true;
                    }
                    LBG.equalisePanelHeights.resetPanels();
                    LBG.equalisePanelHeights.equaliseHeights();
                }
            });
        }
    }
};
LBG.investmentsExpandingTable = {
    selectorTable: "table.expandingTable",
    selectorTrigger: "tr.trigger",
    selectorDetail: "tr.detail",
    selectorReveal: "div.reveal",
    expand: function($trigger) {
        var $detail = $trigger.next(this.selectorDetail),
            $reveal = $detail.find(this.selectorReveal);
        if ($trigger.data("isRevealSingle")) {
            $trigger.parents(this.selectorTable).find(
                "tbody tr.expanded").each(function() {
                LBG.investmentsExpandingTable.collapse($(this));
            });
        }
        $trigger.addClass("expanded");
        $detail.show();
        $reveal.slideDown();
    },
    collapse: function($trigger) {
        var $detail = $trigger.next(this.selectorDetail),
            $reveal = $detail.find(this.selectorReveal);
        $reveal.slideUp(function() {
            $detail.hide();
            $trigger.removeClass("expanded");
        });
    },
    init: function() {
        $(this.selectorTable).each(function() {
            var $table = $(this),
                $triggers = $table.find("tr.trigger");
            $triggers.data("isRevealSingle", $table.hasClass(
                "revealSingle"));
            $triggers.click(function(e) {
                if (e.target.tagName.toLowerCase() !==
                    "a") {
                    if ($(this).hasClass("expanded")) {
                        LBG.investmentsExpandingTable.collapse(
                            $(this));
                    } else {
                        LBG.investmentsExpandingTable.expand(
                            $(this));
                    }
                }
            });
            if ($.browser.msie && $.browser.version < 7) {
                $triggers.hover(function() {
                    $(this).addClass("hover");
                }, function() {
                    $(this).removeClass("hover");
                });
            }
            $triggers.filter("tr").find(".first").attr(
                "tabIndex", "0").keyup(function(event) {
                if (event.keyCode === 13) {
                    $(this).parent("tr").click();
                }
            });
        });
    }
};
LBG.loanExpandingTable = {
    init: function() {
        var $loansTable = $(".loanSelectionTable"),
            $revealRow = $loansTable.find("tr.detail"),
            $triggerRow = $loansTable.find("tr.trigger");
        var updateTriggerTitle = function($trigger) {
            $trigger.each(function() {
                this.title = $(this).text() + ": " + LBG.showHide
                    .triggerTitle;
            });
        };
        $revealRow.hide();
        $triggerRow.addClass("collapsed").hover(function() {
            $(this).addClass("hover");
        }, function() {
            $(this).removeClass("hover");
        });
        $triggerRow.find("a.loanSelectionOptions").click(function(e) {
            e.preventDefault();
        });
        $triggerRow.click(function() {
            var $trigger = $(this),
                meta = $(this).find("a.trigger").metadata().label;
            var getRevealGroup = function($row) {
                var $group = $([]);
                $row.nextAll().each(function() {
                    if (!$(this).hasClass("detail")) {
                        return false;
                    }
                    $group = $group.add($(this));
                });
                return $group;
            };
            var expand = function($row) {
                $row.removeClass("collapsed").addClass(
                    "expanded");
                if (typeof meta.open === "string") {
                    $row.find("p").text(meta.open);
                }
                getRevealGroup($row).show();
                updateTriggerTitle($row.find("a.trigger"));
            };
            var collapse = function($row) {
                $row.removeClass("expanded").addClass(
                    "collapsed");
                if (typeof meta.closed === "string") {
                    $row.find("p").text(meta.closed);
                }
                getRevealGroup($row).hide();
                updateTriggerTitle($row.find("a.trigger"));
            };
            $triggerRow.not($trigger).each(function() {
                collapse($(this));
            });
            if ($trigger.hasClass("collapsed")) {
                expand($trigger);
            } else {
                collapse($trigger);
            }
        });
        updateTriggerTitle($triggerRow.find("a.trigger"));
    }
};
LBG.accountStatementTableExpandPolicy = {
    init: function() {
        var $loansTable = $(".accountStatementTableExpandPolicy"),
            $revealRow = $loansTable.find("tr.detail"),
            $triggerRow = $loansTable.find("tr.trigger");
        $revealRow.hide();
        $triggerRow.addClass("collapsed");
        $triggerRow.find("a.loanSelectionOptions").click(function(e) {
            e.preventDefault();
        });
        $triggerRow.click(function() {
            var $trigger = $(this);
            var getRevealGroup = function($row) {
                var $group = $([]);
                $row.nextAll().each(function() {
                    if (!$(this).hasClass("detail")) {
                        return false;
                    }
                    $group = $group.add($(this));
                });
                return $group;
            };
            var expand = function($row) {
                $row.removeClass("collapsed").addClass(
                    "expanded");
                getRevealGroup($row).show();
            };
            var collapse = function($row) {
                $row.removeClass("expanded").addClass(
                    "collapsed");
                getRevealGroup($row).hide();
            };
            $triggerRow.not($trigger).each(function() {
                collapse($(this));
            });
            if ($trigger.hasClass("collapsed")) {
                expand($trigger);
            } else {
                collapse($trigger);
            }
            $triggerRow.removeClass("expanded_alt");
            if ($(this).hasClass("alt")) {
                if ($(this).hasClass("expanded")) {
                    $(this).addClass("expanded_alt");
                }
            }
        });
    }
};
LBG.olympicCountdown = {
    animationInterval: 5000,
    animationDuration: 300,
    countdown: null,
    panels: null,
    css3DEnabled: function() {
        if (this._css3D === undefined) {
            var perspective = this.countdown.css("Perspective") || this
                .countdown.css("WebkitPerspective");
            this._css3D = !(perspective === undefined || perspective ===
                null || perspective === "" || perspective ===
                "none");
        }
        return this._css3D;
    },
    squeeze: function() {
        var self = this;
        $(this.panels[0]).animate({
            marginLeft: "50%",
            width: 0
        }, {
            duration: self.animationDuration,
            complete: function() {
                self.panels.reverse();
                self.expand();
            }
        });
    },
    expand: function() {
        var self = this;
        $(this.panels[0]).animate({
            marginLeft: 0,
            width: "100%"
        }, {
            duration: this.animationDuration
        });
    },
    init: function(countdown) {
        var self = this;
        this.countdown = $(countdown);
        this.panels = this.countdown.find("div").get();
        try {
            document.execCommand("BackgroundImageCache", false, true);
        } catch (e) {}
        window.setInterval(function() {
            if (self.css3DEnabled()) {
                self.countdown.toggleClass("flip");
            } else {
                self.squeeze();
            }
        }, self.animationInterval);
    }
};
LBG.iOS = {
    scrollGestureMessage: function(element) {
        if (LBG.browserIdent.browserIdent === "iPad" || LBG.browserIdent
            .browserIdent === "iPhone") {
            var message =
                '<div class="infoMessage alert scrollGesture clearfix"><div class="infoMessageInner clearfix"><p>' +
                DI.lang.iOS.scrollGestureMessage + "</p></div></div>";
            if (element && element.scrollHeight > $(element).innerHeight()) {
                $(element).addClass("scrollGesture");
                $(message).insertBefore(element);
            }
        }
    }
};
LBG.ticker = {
    isResizing: false,
    messages: [],
    total: 0,
    defaultState: "play",
    currentState: "play",
    currIndex: 0,
    nextIndex: 0,
    prevIndex: 0,
    interval: null,
    intervalDelay: 40,
    increment: 2,
    timer: null,
    timerDelay: 2000,
    indent: 15,
    playBtn: null,
    prevBtn: null,
    nextBtn: null,
    pauseBtn: null,
    init: function() {
        LBG.ticker.messages = $(".content .ticker li");
        if (!LBG.ticker.messages.length) {
            return;
        }
        LBG.ticker.total = LBG.ticker.messages.length;
        LBG.ticker.defaultState = ($(".content .ticker").hasClass(
            "play") ? "play" : "pause");
        LBG.ticker.currentState = LBG.ticker.defaultState;
        LBG.ticker.currIndex = 0;
        LBG.ticker.nextIndex = LBG.ticker.currIndex + 1;
        LBG.ticker.prevIndex = LBG.ticker.total - 1;
        LBG.ticker.messages.each(function() {
            LBG.ticker.startPosition($(this));
        });
        LBG.ticker.attachFadeEnds();
        LBG.ticker.attachButtons();
        LBG.ticker.bindResize();
        if (LBG.ticker.total <= 1) {
            $(".content .ticker").addClass("single");
        }
        LBG.ticker.setDefaultState();
        $(".content .ticker ul").hover(function() {
            LBG.ticker.pause();
        }, function() {
            if (LBG.ticker.currentState === "play") {
                LBG.ticker.start();
            }
        });
    },
    setDefaultState: function() {
        if (LBG.ticker.defaultState === "play") {
            LBG.ticker.start();
        } else {
            var curr = LBG.ticker.messages.eq(LBG.ticker.currIndex);
            var next = LBG.ticker.messages.eq(LBG.ticker.nextIndex);
            if (LBG.ticker.messages.length > 1) {
                next.css("left", LBG.ticker.indent).show();
                LBG.ticker.startPosition(curr);
                LBG.ticker.updateIndex(false);
            } else {
                LBG.ticker.messages.css("left", LBG.ticker.indent);
                $(".prev, .next").hide();
            }
            LBG.ticker.pause();
        }
    },
    bindResize: function() {
        if (!$.browser.msie || $.browser.msie && $.browser.version >= 7) {
            $(window).resize(function() {
                if (!$.browser.msie || $.browser.msie && !LBG.equalisePanelHeights
                    .isResizing) {
                    if ($.browser.msie) {
                        LBG.ticker.isResizing = true;
                    }
                    var scrollerWidth = $(
                        ".content .ticker .scrollContainer"
                    ).width();
                    LBG.ticker.messages.each(function(i) {
                        var curr = $(this);
                        var left = parseInt(curr.css(
                            "left"), 10);
                        if (left > scrollerWidth || !
                            curr.data("isScrolling")) {
                            LBG.ticker.startPosition(
                                curr);
                        }
                    });
                }
            });
        }
    },
    startPosition: function(elm) {
        elm.css("left", $(".content .ticker .scrollContainer").width())
            .show();
    },
    updateIndex: function(isDecrement) {
        LBG.ticker.currIndex = isDecrement ? LBG.ticker.currIndex - 1 :
            LBG.ticker.currIndex + 1;
        if (LBG.ticker.currIndex >= LBG.ticker.total) {
            LBG.ticker.currIndex = 0;
        }
        if (LBG.ticker.currIndex < 0) {
            LBG.ticker.currIndex = LBG.ticker.total - 1;
        }
        LBG.ticker.nextIndex = LBG.ticker.currIndex + 1;
        if (LBG.ticker.nextIndex === LBG.ticker.total) {
            LBG.ticker.nextIndex = 0;
        }
        LBG.ticker.prevIndex = LBG.ticker.currIndex - 1;
        if (LBG.ticker.prevIndex < 0) {
            LBG.ticker.prevIndex = LBG.ticker.total - 1;
        }
    },
    attachFadeEnds: function() {
        if (!$.browser.msie || $.browser.msie && $.browser.version >= 7) {
            var fadeL = $("<div />").addClass("fadeEdge fadeLeft");
            var fadeR = $("<div />").addClass("fadeEdge fadeRight");
            fadeL.add(fadeR).appendTo($(
                ".content .ticker .scrollContainer"));
            LBG.ticker.indent = fadeL.width() - 10;
        }
    },
    attachButtons: function() {
        var buttonHolder = $('<span class="buttons" />');
        LBG.ticker.playBtn = $("<img/>").attr("src", DI.ticker.playButtonURL)
            .addClass("play").appendTo(buttonHolder);
        LBG.ticker.pauseBtn = $("<img/>").attr("src", DI.ticker.pauseButtonURL)
            .addClass("pause").appendTo(buttonHolder);
        if (LBG.ticker.total > 1) {
            LBG.ticker.prevBtn = $("<img/>").attr("src", DI.ticker.previousButtonURL)
                .addClass("prev").appendTo(buttonHolder);
            LBG.ticker.nextBtn = $("<img/>").attr("src", DI.ticker.nextButtonURL)
                .addClass("next").appendTo(buttonHolder);
        }
        buttonHolder.unbind().bind("click", function(e) {
            var targetElement = $(e.originalTarget || e.srcElement);
            if (targetElement && targetElement.hasClass("play")) {
                LBG.ticker.start();
                LBG.ticker.updateCurrentState("play");
            }
            if (targetElement && targetElement.hasClass("pause")) {
                LBG.ticker.pause();
                LBG.ticker.updateCurrentState("pause");
            }
            if (targetElement && targetElement.hasClass("next")) {
                LBG.ticker.pause();
                LBG.ticker.skip();
            }
            if (targetElement && targetElement.hasClass("prev")) {
                LBG.ticker.pause();
                LBG.ticker.skip(true);
            }
        });
        $(".content .ticker").append(buttonHolder);
    },
    updateCurrentState: function(state) {
        LBG.ticker.updateDefaultState(state);
        LBG.ticker.currentState = state;
        if (state === "play") {
            $(".content .ticker").removeClass("pause").addClass("play");
        } else {
            $(".content .ticker").removeClass("play").addClass("pause");
        }
    },
    updateDefaultState: function(state) {
        var actionURL = (state === "play") ? DI.ticker.setDefaultActionPlayURL :
            DI.ticker.setDefaultActionPauseURL;
        $.ajax({
            url: actionURL,
            type: "GET",
            dataType: "html"
        });
    },
    start: function() {
        if (LBG.ticker.timer) {
            LBG.ticker.clearTimer();
        }
        LBG.ticker.interval = window.setInterval(LBG.ticker.scroll, LBG
            .ticker.intervalDelay);
        $(".content .ticker .play").css("display", "none");
        $(".content .ticker .pause").css("display", "inline");
    },
    pause: function() {
        window.clearInterval(LBG.ticker.interval);
        LBG.ticker.interval = null;
        $(".content .ticker .play").css("display", "inline");
        $(".content .ticker .pause").css("display", "none");
    },
    clearTimer: function() {
        window.clearTimeout(LBG.ticker.timer);
        LBG.ticker.timer = null;
    },
    skip: function(isPrevious) {
        LBG.ticker.pause();
        if (LBG.ticker.timer) {
            LBG.ticker.clearTimer();
        }
        if (LBG.ticker.messages.is(":animated")) {
            return false;
        }
        var curr = LBG.ticker.messages.eq(LBG.ticker.currIndex);
        var next = isPrevious ? LBG.ticker.messages.eq(LBG.ticker.prevIndex) :
            LBG.ticker.messages.eq(LBG.ticker.nextIndex);
        curr.fadeOut("fast", function() {
            next.css("left", LBG.ticker.indent).fadeIn("fast",
                function() {
                    if (LBG.ticker.currentState === "play") {
                        LBG.ticker.timer = window.setTimeout(
                            function() {
                                LBG.ticker.start();
                                LBG.ticker.clearTimer();
                            }, LBG.ticker.timerDelay);
                    }
                    LBG.ticker.startPosition(curr);
                    LBG.ticker.updateIndex(isPrevious);
                });
        });
    },
    scroll: function() {
        var curr = LBG.ticker.messages.eq(LBG.ticker.currIndex).data(
            "isScrolling", true);
        var left = parseInt(curr.css("left"), 10);
        if (left + curr.width() < 0) {
            curr.data("isScrolling", false).css("left", $(
                ".content .ticker .scrollContainer").width());
            LBG.ticker.updateIndex();
        } else {
            curr.css("left", left - LBG.ticker.increment);
        }
    }
};
LBG.investmentsFund = {
    selectorOptions: ".investmentsFundOptions",
    selectorTable: ".investmentsFundTable",
    errorHTML: '<div class="investmentsFundTable inner clearfix"><p>' + DI.lang
        .investmentsFund.ajaxErrorText + "</p></div>",
    selectedValue: null,
    init: function() {
        $(LBG.investmentsFund.selectorOptions).find(":radio").click(
            function() {
                if (LBG.investmentsFund.selectedValue === this.value) {
                    return;
                }
                var meta = $(this).metadata();
                if (meta && meta.ajaxURI) {
                    $.ajax({
                        url: LBG.common.ajax.tagUrl(meta.ajaxURI),
                        success: function(response) {
                            $(LBG.investmentsFund.selectorTable)
                                .remove();
                            $(response).insertAfter(LBG
                                .investmentsFund.selectorOptions
                            );
                            LBG.investmentsFund.selectedValue =
                                this.value;
                            LBG.ajax.pageUpdated();
                        },
                        error: function() {
                            $(LBG.investmentsFund.selectorTable)
                                .remove();
                            $(LBG.investmentsFund.errorHTML)
                                .insertAfter(LBG.investmentsFund
                                    .selectorOptions);
                            LBG.investmentsFund.selectedValue =
                                null;
                        }
                    });
                }
            });
        $(LBG.investmentsFund.selectorOptions).find(":radio:checked").change();
    }
};
LBG.ajaxFormContentLoader = {
    selectorOptions: ".ajaxFormContent",
    selectorContent: ".ajaxResult",
    errorHTML: '<div class="ajaxResult inner clearfix"><p>' + DI.lang.ajaxFormContent
        .ajaxErrorText + "</p></div>",
    init: function() {
        $(LBG.ajaxFormContentLoader.selectorOptions).find("input").click(
            function() {
                var $fieldset = $(this).parents("fieldset");
                var formValidationHandler = LBG.Forms.Validation.Tools
                    .getValidationHandlerObject($fieldset);
                if (LBG.ajaxFormContentLoader.selectedValue ===
                    this.value) {
                    return;
                }
                var meta = $(this).metadata();
                var imgSrcStore;
                var $spinner = $fieldset.find(".spinner");
                $spinner.attr("style", "display: block");
                if (meta && meta.ajaxURI) {
                    $.ajax({
                        url: LBG.common.ajax.tagUrl(meta.ajaxURI),
                        success: function(response) {
                            formValidationHandler.removeChildren(
                                $fieldset);
                            $fieldset.find(LBG.ajaxFormContentLoader
                                .selectorContent).remove();
                            $(response).insertAfter(
                                $fieldset.find(LBG.ajaxFormContentLoader
                                    .selectorOptions
                                ));
                            var submitButton =
                                $fieldset.find(
                                    "submitAction").context;
                            submitButton.disabled =
                                true;
                            imgSrcStore = submitButton.src;
                            var disabledImageSrc =
                                submitButton.className.split(
                                    "disabledSrc:")[1];
                            if (disabledImageSrc.length >
                                0) {
                                submitButton.src =
                                    disabledImageSrc;
                            }
                            LBG.ajaxFormContentLoader.selectedValue =
                                this.value;
                            formValidationHandler.findChildren(
                                $fieldset);
                            LBG.ajax.pageUpdated();
                        },
                        error: function() {
                            var submitButton =
                                $fieldset.find(
                                    "submitAction").context;
                            submitButton.disabled =
                                false;
                            submitButton.src =
                                imgSrcStore;
                            $(LBG.ajaxFormContentLoader
                                .selectorContent).remove();
                            $(LBG.ajaxFormContentLoader
                                .errorHTML).insertAfter(
                                LBG.ajaxFormContentLoader
                                .selectorOptions);
                            LBG.ajaxFormContentLoader.selectedValue =
                                null;
                        }
                    });
                }
                $spinner.attr("style", "display: none");
            });
    }
};
LBG.dbtSetupModules = {
    init: function() {
        $(".dbtSetupConfirmation input").css("display", "none");
        $(".setupRadioCheckedNoJS").attr("checked", false);
        $(".dbtSetupConfirmation").attr("style", "display:none");
        $(".dbtSetup").each(function() {
            var $setupModuleRadios = $(this).find(
                "input.setupRadio");
            var $setupModuleConfirmBox = $(this).find(
                ".dbtSetupConfirmation");
            $setupModuleRadios.each(function() {
                if ($(this).is(":checked")) {
                    if ($(this).val() === DI.lang.validation
                        .yesValue) {
                        $setupModuleConfirmBox.show(
                            "slow", function() {});
                        $setupModuleConfirmBox.find(
                            "input").css("display",
                            "block");
                    }
                }
            });
        });
        LBG.dbtSetupModules.check_valid_modules();
        $(".dbtSetup .yesplease").click(function(e) {
            e.preventDefault();
            var $toggleWrapper = $(this).parents(".dbtSetup");
            var $toggleContent = $toggleWrapper.find(
                ".dbtSetupConfirmation");
            $(this).attr("src",
                "../assets/theme/lang/images/buttons/yes_please_disabled.png"
            );
            $toggleContent.show("slow", function() {});
            $toggleContent.find("input").css("display", "block");
        });
        $(".dbtSetup a.cancel").click(function(e) {
            e.preventDefault();
            var $toggleWrapper = $(this).parents(".dbtSetup");
            var $toggleContent = $toggleWrapper.find(
                ".dbtSetupConfirmation");
            var $yespleaseButton = $toggleWrapper.find(
                ".yesplease");
            $yespleaseButton.attr("src",
                "../assets/theme/lang/images/buttons/yes_please.png"
            );
            $toggleContent.hide("slow", function() {});
            $toggleContent.find("input").css("display", "none");
        });
        $(".dbtSetup input.setupRadio").click(function() {
            var selected_radio = $(this).val();
            var $toggleWrapper = $(this).parents(".dbtSetup");
            var $toggleContent = $toggleWrapper.find(
                ".dbtSetupConfirmation");
            if (selected_radio === DI.lang.validation.yesValue) {
                $toggleContent.show("slow", function() {});
                $toggleContent.find("input").css("display",
                    "block");
            }
            if (selected_radio === "no") {
                $toggleContent.hide("slow", function() {});
                $toggleContent.find("input").css("display",
                    "none");
            }
            LBG.dbtSetupModules.check_valid_modules();
        });
        if (!$(".dbtSetup").hasClass("dbtSetupComm")) {
            $(".dbtSetup input.confirmButton").click(function(e) {
                var $wrapper = $(this).parents(".dbtSetup");
                var $disableRadios = $wrapper.find(
                    "input.setupRadio");
                $("form").submit(function(e) {
                    $disableRadios.attr("disabled",
                        "disabled");
                });
            });
        }
        $(".dbtSetupComm .primaryAction input").click(function() {
            var selected_radio = $(
                ".dbtSetupComm input.setupRadio:checked").val();
            if (selected_radio === "no") {
                $(".dbtSetupComm input.mobileNumberMatch").val(
                    "");
            }
        });
    },
    check_valid_modules: function() {
        $("ul.dbtSetup .submitAction").attr("src", DI.themePath +
            "en-gb/images/buttons/continue.png");
        $("ul.dbtSetup .submitAction").removeAttr("disabled");
        if ($(".dbtSetup .controls .radioGroup").length > 0) {
            var valid = true;
            $(".dbtSetup .controls .radioGroup").each(function() {
                var no_checks = true;
                var $theseRadios = $(this).find(
                    "input.setupRadio");
                $theseRadios.each(function() {
                    if ($(this).is(":checked")) {
                        no_checks = false;
                        if ($(this).val() !== "no") {
                            valid = false;
                        }
                    }
                });
                if (no_checks === true) {
                    valid = false;
                }
            });
            if (valid === false) {
                $("ul.dbtSetup .submitAction").attr("src", DI.themePath +
                    "en-gb/images/buttons/continue_disabled.png");
                $("ul.dbtSetup .submitAction").attr("disabled",
                    "disabled");
            } else {
                $("ul.dbtSetup .submitAction").attr("src", DI.themePath +
                    "en-gb/images/buttons/continue.png");
                $("ul.dbtSetup .submitAction").removeAttr("disabled");
            }
        }
    }
};
LBG.jumpList = {
    init: function() {
        var $list = $("ul.jumpList"),
            $table = $("table.jumpListData"),
            $links = $list.find("a"),
            $headings = $table.find("thead th"),
            curIndex = null;
        if (!$links.length) {
            return;
        }
        $headings.each(function() {
            if ($(this).metadata().sorter !== false) {
                $(this).click(function() {
                    curIndex = $headings.index(this);
                });
            }
        });
        $links.click(function(event) {
            var id = $(this)[0].hash,
                meta = $table.metadata(),
                $sort = null;
            if ($table.hasClass("sortable")) {
                if (typeof meta.targetColumn === "number" &&
                    $headings.eq(meta.targetColumn).metadata().sorter !==
                    false) {
                    $sort = $headings.eq(meta.targetColumn);
                } else {
                    $sort = $headings.eq(0);
                } if ($headings.index($sort) !== curIndex) {
                    if ($sort[0].count % 2 !== 0) {
                        $sort[0].count++;
                    }
                    $sort.click();
                }
            }
            if (id && id !== "") {
                setTimeout(function() {
                    $($.browser.safari ? "body" :
                        "html").animate({
                        scrollTop: $(id).offset()
                            .top
                    }, "slow");
                }, 100);
            }
            event.preventDefault();
        });
    }
};
LBG.tabs = {
    selectorTabs: "ul.js-tabs",
    selectorCurr: "current",
    setCurrent: function(elm) {
        var $curr = $(elm).parents("li"),
            $tabs = $curr.parents(this.selectorTabs).find("li").not(
                $curr);
        if ($curr.hasClass()) {
            return;
        }
        $tabs.removeClass(this.selectorCurr).find("a").each(function() {
            $(this.hash).hide();
        });
        $curr.addClass(this.selectorCurr).find("a").each(function() {
            $(this.hash).show();
        });
    },
    init: function() {
        $(this.selectorTabs).each(function() {
            var $links = $(this).find("a"),
                meta = $(this).metadata(),
                index = 0,
                i = 0,
                isMPA = false;
            if (meta && meta.showTab && meta.showTab > 0 &&
                meta.showTab <= $links.length) {
                index = meta.showTab - 1;
            }
            $links.click(function(event) {
                LBG.tabs.setCurrent(this);
                event.preventDefault();
            });
            LBG.tabs.setCurrent($links[index]);
            $links.each(function() {
                var bg = $(this).metadata(),
                    img = $("<img />"),
                    imgWidth, tabWidth, tabPadding;
                if (bg.bgURI && bg.bgURI.length > 0) {
                    isMPA = true;
                    img.hide();
                    img.bind("load", function() {
                        imgWidth = $(this).width();
                        tabWidth = 120 -
                            imgWidth;
                        tabPadding = 12 +
                            imgWidth;
                        $(this).closest("a").css({
                            "background-image": 'url("' +
                                bg.bgURI +
                                '")',
                            "background-position": "7px 9px",
                            "width": tabWidth +
                                "px",
                            "max-width": tabWidth +
                                "px",
                            "padding-left": tabPadding +
                                "px"
                        });
                    });
                    $(this).append(img);
                    img.attr("src", bg.bgURI);
                }
            });
            if (isMPA) {
                $("#overlay").css("width", "auto");
            }
        });
    }
};
LBG.calculateFundAllocations = function() {
    if ($("table.fundAllocationDetails").length) {
        $(".amount_percent_total").autoTotal(".amount_percent");
    }
};
LBG.lineWrap = {
    init: function() {
        var $heading = $(
            ".tile h2 span, .tile h3 span, .banner h2 span, .banner h3 span, .bigBanner h2 span, .bigBanner h3 span, .bigPrompt h2 span, .bigPrompt h3 span, .IBMediumPanel h3 span"
        );
        $heading.each(function() {
            var $headingParent = $(this).parent(),
                headingText = $(this).text(),
                headingWidth = $headingParent.width();
            $headingParent.append("<span style=>T</span>");
            var $spanInit = $headingParent.find("span"),
                singleTextWidth = $headingParent.find("span").eq(
                    $spanInit.length - 1).width();
            $headingParent.find("span").eq($spanInit.length - 1)
                .remove();
            headingWidth = headingWidth - parseInt($(this).css(
                "padding-left"), 10) - parseInt($(this).css(
                "padding-right"), 10);
            var noChars = Math.floor(headingWidth /
                singleTextWidth);
            $headingParent.html("");
            var lines = [""];
            var max_chars_per_line = noChars;
            var segments = headingText.split(" ");
            var j = 0,
                i = 0;
            for (i = 0; i < segments.length; i++) {
                if (lines[j].length + segments[i].length >
                    max_chars_per_line) {
                    j++;
                }
                if (typeof lines[j] === "undefined") {
                    lines[j] = "";
                }
                lines[j] += segments[i] + " ";
            }
            for (i = 0; i < lines.length; i++) {
                $headingParent.append("<span>" + lines[i] +
                    "</span>");
            }
        });
    }
};
LBG.flashEmbed = {
    embedflash: function($this, configOptions) {
        swfobject.embedSWF(configOptions.swfFile, $this.attr("id"),
            configOptions.width, configOptions.height,
            configOptions.version, false, configOptions.customParams,
            configOptions.player, configOptions.attributes);
    },
    init: function() {
        var $flashAttr = $(".flashMovie"),
            meta = [],
            flashNum = 0;
        var defaultObj = {
            version: "10",
            attributes: {
                styleclass: "flashMovie"
            },
            player: {
                play: "true",
                loop: "true",
                wmode: "window",
                allowFullScreen: "false",
                allowscriptaccess: "sameDomain"
            }
        };
        $flashAttr.each(function() {
            var $this = $(this);
            meta = $this.metadata();
            var $objLink = $this.find(".flashLinkWrapper").remove();
            $this.closest(".flashContainer").append($objLink);
            if (!($this.attr("id"))) {
                flashNum++;
                var classToID = "flashMovie" + flashNum;
                $this.attr("id", classToID);
            }
            for (var parent in defaultObj) {
                if (parent in meta) {
                    if (typeof defaultObj[parent] === "object") {
                        for (var subKey in defaultObj[parent]) {
                            if (!(subKey in meta[parent]) ||
                                meta[parent][subKey] === "") {
                                meta[parent][subKey] =
                                    defaultObj[parent][subKey];
                            }
                        }
                    }
                } else {
                    meta[parent] = defaultObj[parent];
                }
            }
            LBG.flashEmbed.embedflash($this, meta);
        });
    }
};
LBG.flashLink = {
    init: function() {
        var $flashAttr = $(".flashMovie");
        $flashAttr.each(function() {
            var $this = $(this);
            var $thisLink = $this.next(".flashLinkWrapper");
            var altText = $thisLink.find("a").text();
            $thisLink.find("a").empty().attr("title", altText);
            var flashGif = new Image();
            $(flashGif).attr("src", DI.flashObj.flashObjImg).attr(
                "alt", "");
            $thisLink.find("a").append($(flashGif));
            var objWidth = $this.width();
            var objHeight = $this.height();
            $this.closest(".flashContainer").css({
                "width": objWidth,
                "height": objHeight
            });
            $thisLink.css({
                "width": objWidth,
                "height": objHeight
            });
            $thisLink.mouseover(function() {
                $thisLink.css("cursor", "pointer");
            });
        });
    }
};
LBG.doNotUpdateEmail = {
    init: function() {
        $(function() {
            if (($(".txtEmail1") && $(".txtEmail2")) && $(
                ".showHide")) {
                $(".donotupdate").click(function() {
                    $("input.txtEmail").each(function() {
                        $(this).val("");
                    });
                    $(".pane .formField").each(function() {
                        var validationHandler =
                            LBG.Forms.Validation
                            .Tools.getFieldHandler(
                                $(this));
                        validationHandler.hideError();
                    });
                    LBG.showHide.toggleDisplay($(
                        ".emailPreference .trigger"
                    ));
                    return false;
                });
            }
        });
    }
};
LBG.clearValuesOnHide = {
    init: function() {
        if ($(".triggerChild").length && $(".showHide").length && $(
            ".typesAndAmounts").length && $(".amountGroup").length) {
            var wrapperValues = $(".pane .amountGroup .formField");
            var formValidationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
                wrapperValues);
            var triggered = 0;
            $(".searchTransactions .showHide .triggerChild").click(
                function() {
                    if (triggered > 0) {
                        formValidationHandler.removeChildren(
                            wrapperValues);
                        formValidationHandler.isValid = false;
                        LBG.Forms.Validation.Tools.setMultipleFieldValidation(
                            wrapperValues);
                        formValidationHandler.hideError();
                        $(".pane .amountGroup input:text").val("");
                        $(
                            ".pane .amountGroup .formField input:radio"
                        ).eq(0).attr("checked", true);
                    }
                    triggered++;
                });
        }
    }
};
LBG.fixedHeadingHeight = {
    init: function() {
        $(function() {
            var sizes = [];
            if ($(
                ".content table.fiveCol thead th strong.autoHeighStrong"
            )) {
                $(
                    ".content table.fiveCol thead th strong.autoHeighStrong"
                ).each(function() {
                    sizes.push($(this).height());
                }).css("height", (Math.max.apply(null,
                    sizes) + 4) + "px");
            }
            sizes = [];
            if ($(
                ".content table.fiveCol thead th p.autoHeightDescription"
            )) {
                $(
                    ".content table.fiveCol thead th p.autoHeightDescription"
                ).each(function() {
                    sizes.push($(this).height());
                }).css("height", Math.max.apply(null, sizes) +
                    "px");
            }
            sizes = [];
            if ($(
                ".content table.fiveCol thead th a.autoHeightLink"
            )) {
                $(
                    ".content table.fiveCol thead th a.autoHeightLink"
                ).each(function() {
                    sizes.push($(this).height());
                }).css("height", Math.max.apply(null, sizes) +
                    "px");
                $(
                    ".content table.fiveCol thead th a.autoHeightLink"
                ).each(function() {
                    if ($(this).height < Math.max.apply(
                        null, sizes)) {
                        $(this).css("line-height", (
                                Math.max.apply(null,
                                    sizes) / 2 + 4) +
                            "px");
                    }
                });
            }
        });
    }
};
LBG.formAutoSubmit = {
    init: function() {
        if ($("form.samlAutoSubmit").length) {
            $("form.samlAutoSubmit").submit();
        }
    }
};
LBG.managePaperStatements = function() {
    $("table.preferences.paperstatements").each(function() {
        var strInputName = DI.lang.managePaperStatements.selectAll.inputName,
            strLabelText = DI.lang.managePaperStatements.selectAll.labelText;
        var $table = $(this),
            $tbody = $table.find("tbody"),
            $checkboxes = $tbody.find("input:checkbox").not(
                ":disabled"),
            $rows = $tbody.find("tr"),
            $cells = null;
        var $toggleCell = null,
            $toggleRow = $("<tr />").addClass("selectAll"),
            $toggleLabel = $("<label />").attr("for", strInputName)
            .html(strLabelText),
            $toggleInput = $("<input />").attr({
                type: "checkbox",
                id: strInputName,
                name: strInputName
            });
        var isSetup = false;
        if ($checkboxes.length <= 1) {
            return;
        }

        function enableSelectAll(isEnabled) {
            if (isEnabled) {
                $toggleRow.find("label").removeClass(
                    "isDisabled");
                $toggleRow.find("input:checkbox").attr({
                    "disabled": "",
                    "checked": ""
                });
            } else {
                $toggleRow.find("label").addClass("isDisabled");
                $toggleRow.find("input:checkbox").attr({
                    "disabled": "disabled",
                    "checked": "checked"
                });
            }
        }
        for (var i = 0; i < $rows.length; i++) {
            if (!isSetup && $rows.eq(i).find("input:checkbox").length) {
                $cells = $rows.eq(i).find("td");
                for (var j = 0; j < $cells.length; j++) {
                    $toggleCell = $("<td />");
                    if (j === 0) {
                        $toggleCell.addClass("first");
                    }
                    if ($cells.eq(j).find(":checkbox").length) {
                        $toggleLabel.append($toggleInput).appendTo(
                            $toggleCell.addClass("selectAll"));
                    }
                    $toggleCell.appendTo($toggleRow);
                }
                isSetup = true;
                break;
            }
        }
        if (!$toggleRow.find("td").length) {
            return;
        }
        $tbody.prepend($toggleRow);
        $tbody.find("tr:odd").removeClass("alt");
        $tbody.find("tr:even").addClass("alt");
        if ($checkboxes.filter(":checked").length === $checkboxes.length) {
            enableSelectAll(false);
        }
        $toggleRow.find("input:checkbox").click(function() {
            if (this.checked) {
                enableSelectAll(false);
                $checkboxes.attr("checked", "checked");
            }
        });
        $checkboxes.click(function() {
            if (this.checked && $checkboxes.filter(
                ":checked").length === $checkboxes.length) {
                enableSelectAll(false);
            } else {
                enableSelectAll(true);
            }
        });
    });
};
LBG.alternateImageSrc = function() {
    var isID = function(str) {
        return str.substring(1, 0) === "#";
    };
    var escapeID = function(id) {
        return id.replace(/:/g, "\\:");
    };
    var clickHandler = function(event) {
        var meta = $(this).metadata();
        var $target = $(this);
        if (meta.target) {
            if (meta.parent) {
                $target = $target.parents(meta.parent).find(meta.target);
            } else {
                $target = isID(meta.target) ? $(escapeID(meta.target)) :
                    $(meta.target);
            }
        }
        $target.each(function() {
            $(this).attr("src", $(this).metadata().alternateSrc);
        });
    };
    $(".alternateImageSrc").each(function() {
        var meta = $(this).metadata();
        if (meta && (meta.alternateSrc || meta.target)) {
            $(this).one("click", clickHandler);
        }
    });
};
LBG.ajaxLoader = (function() {
    var wrapperSelector = "div.ajaxLoaderPlaceholder";
    var contentSelector = "div.ajaxContent";
    var contentWrapper = '<div class="ajaxContent" />';
    var errorClassName = "ajaxLoaderError";
    var successClassName = "ajaxLoaderSuccess";
    var errorMessage = '<div class="inner"><p>' + DI.lang.ajaxLoader.errorMessage +
        "</p></div>";
    return {
        init: function() {
            $(wrapperSelector).each(function(i) {
                var $wrapper = $(this);
                var meta = $(this).metadata();
                if (meta && meta.ajaxURI) {
                    $.ajax({
                        url: meta.ajaxURI,
                        cache: false,
                        type: "GET",
                        error: function() {
                            $wrapper.addClass(
                                errorClassName
                            ).html(
                                errorMessage
                            );
                        },
                        success: function(data) {
                            $wrapper.css(
                                "height",
                                $wrapper.height()
                            ).animate({
                                opacity: 0
                            }, function() {
                                $wrapper
                                    .wrapInner(
                                        contentWrapper
                                    );
                                var
                                    animHeight =
                                    $(
                                        contentSelector,
                                        $wrapper
                                    ).html(
                                        data
                                    ).height();
                                $wrapper
                                    .animate({
                                            opacity: 1,
                                            height: animHeight
                                        },
                                        function() {
                                            $wrapper
                                                .addClass(
                                                    successClassName
                                                );
                                        }
                                    );
                            });
                        }
                    });
                }
            });
        }
    };
})();
LBG.stpLoanCalculatorSlider = {
    init: function() {
        var trigger = $(".stpLoanCalculator input"),
            sliderWrapper =
            '<div class="sliderWrapper"><div class="sliderInnerWrapper"><div class="slider"/></div></div>',
            btnAmountMore =
            '<span class="sliderIncrease"><a href="#" title="' + DI.stpLoanCalculatorButton
            .amount.increase + '">' + DI.stpLoanCalculatorButton.amount
            .increase + "</a></span>",
            btnAmountLess =
            '<span class="sliderDecrease"><a href="#" title="' + DI.stpLoanCalculatorButton
            .amount.decrease + '">' + DI.stpLoanCalculatorButton.amount
            .decrease + "</a></span>",
            btnMonthMore =
            '<span class="sliderIncrease"><a href="#" title="' + DI.stpLoanCalculatorButton
            .months.increase + '">' + DI.stpLoanCalculatorButton.months
            .increase + "</a></span>",
            btnMonthLess =
            '<span class="sliderDecrease"><a href="#" title="' + DI.stpLoanCalculatorButton
            .months.decrease + '">' + DI.stpLoanCalculatorButton.months
            .decrease + "</a></span>";
        if (!trigger.length) {
            return;
        }
        var formValidationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            trigger);
        trigger.each(function(i) {
            var input = $(this),
                params = input.metadata(),
                sliderMin = parseInt(input.closest(
                        ".formFieldInner").find(".minVal").text()
                    .replace(/,/, ""), 10),
                sliderMax = parseInt(input.closest(
                        ".formFieldInner").find(".maxVal").text()
                    .replace(/,/, ""), 10),
                interval = (params.sliderInterval) ? parseInt(
                    params.sliderInterval, 10) : 1,
                startOverlay = parseInt(input.closest(
                    ".formFieldInner").find(
                    ".startBestRate").text().replace(/,/,
                    ""), 10),
                endOverlay = parseInt(input.closest(
                        ".formFieldInner").find(".endBestRate")
                    .text().replace(/,/, ""), 10),
                positionOverlay, widthOverlay, slider, oValue,
                labelUnit;
            var formFieldName = LBG.Forms.Validation.Tools.convertClassDetailsToData(
                $(this).closest(".formField")[0],
                "validationName:")[0];
            var formFieldValidationHandler =
                formValidationHandler.getChild(formFieldName);
            input.closest(".inputWrapper").after(sliderWrapper);
            slider = input.closest(".inputWrapper").next(
                ".sliderWrapper").find(".slider");
            slider.slider({
                min: sliderMin,
                max: sliderMax,
                value: input.val().replace(/,/, "") ||
                    sliderMin,
                step: interval,
                slide: function(event, ui) {
                    input.val(ui.value);
                    input.val(input.val().replace(
                        /(\d)(?=(\d\d\d)+(?!\d))/g,
                        "$1,"));
                },
                start: function(event, ui) {
                    input.val(ui.value);
                    input.val(input.val().replace(
                        /(\d)(?=(\d\d\d)+(?!\d))/g,
                        "$1,"));
                    if (formFieldValidationHandler.isShowingError) {
                        formFieldValidationHandler.hideError();
                        formFieldValidationHandler.isShowingError =
                            false;
                    }
                }
            });
            input.focus(function() {
                if (!(formFieldValidationHandler.isShowingError)) {
                    oValue = $(this).val().replace(/,/,
                        "");
                }
            });
            input.blur(function() {
                var typedVal = $(this).val().replace(
                    /,/, "");
                if (formFieldValidationHandler.isShowingError &&
                    !isNaN(Math.abs(typedVal))) {
                    if (typedVal > sliderMax) {
                        slider.slider("value",
                            sliderMax);
                    } else {
                        if (typedVal < sliderMin) {
                            slider.slider("value",
                                sliderMin);
                        } else {
                            slider.slider("value",
                                oValue);
                        }
                    }
                }
            });
            input.bind("keypress", function(e) {
                var typedVal = $(this).val().replace(
                    /,/, "");
                if (e.keyCode === 13 && !isNaN(Math.abs(
                    typedVal))) {
                    if (typedVal > sliderMax) {
                        slider.slider("value",
                            sliderMax);
                    } else {
                        if (typedVal < sliderMin) {
                            slider.slider("value",
                                sliderMin);
                        } else {
                            slider.slider("value",
                                oValue);
                        }
                    }
                }
            });
            input.change(function() {
                var typedVal = $(this).val().replace(
                        /,/, ""),
                    roundedVal, i;
                if (typedVal.indexOf(".") !== -1) {
                    typedVal = typedVal.substr(0,
                        typedVal.indexOf("."));
                }
                if (!isNaN(Math.abs(typedVal))) {
                    if (typedVal % interval !== 0) {
                        roundedVal = Math.round(
                                typedVal / interval) *
                            interval;
                        slider.slider("value",
                            roundedVal);
                    } else {
                        slider.slider("value", typedVal);
                    }
                }
                $(this).val(typedVal.toString(10).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1,"));
            });
            if (i === 0) {
                slider.parent().before(btnAmountLess).after(
                    btnAmountMore);
            } else {
                slider.parent().before(btnMonthLess).after(
                    btnMonthMore);
            }
            $(input.closest(".formFieldInner").find(
                ".sliderDecrease,.sliderIncrease")).bind(
                "click", function(e) {
                    var oldVal = parseInt(input.val().replace(
                            /,/, ""), 10),
                        newVal;
                    if (isNaN(oldVal)) {
                        oldVal = sliderMin;
                    }
                    e.preventDefault();
                    if ($(this).hasClass("sliderDecrease")) {
                        newVal = ((oldVal - interval) <
                            sliderMin) ? sliderMin : (
                            oldVal - interval);
                    } else {
                        newVal = ((oldVal + interval) >
                            sliderMax) ? sliderMax : (
                            oldVal + interval);
                    }
                    slider.slider("option", "value", newVal);
                    if (newVal >= sliderMin && newVal <=
                        sliderMax &&
                        formFieldValidationHandler.isShowingError
                    ) {
                        formFieldValidationHandler.hideError();
                        formFieldValidationHandler.isShowingError =
                            false;
                    }
                    newVal = newVal.toString(10).replace(
                        /(\d)(?=(\d\d\d)+(?!\d))/g,
                        "$1,");
                    input.val(newVal);
                });
            if (startOverlay < endOverlay && startOverlay >=
                sliderMin && endOverlay <= sliderMax) {
                positionOverlay = ((startOverlay - sliderMin) /
                    (sliderMax - sliderMin)) * 100;
                widthOverlay = (((endOverlay - startOverlay) /
                    (sliderMax - sliderMin)) * 100);
                input.closest(".formFieldInner").find(".slider")
                    .append(
                        '<div class="overlayLoanCalculator" style="left:' +
                        positionOverlay + "%; width:" +
                        widthOverlay + '%;"/>');
            }
            if (input.prev("span").hasClass("currency")) {
                labelUnit = input.prev("span").text();
                input.closest(".formFieldInner").find(
                    ".minVal, .maxVal").prepend(labelUnit);
            }
            if (input.next("span").hasClass("durationUnit")) {
                labelUnit = " " + input.next("span").text();
                input.closest(".formFieldInner").find(
                    ".minVal, .maxVal").append(labelUnit);
            }
        });
    }
};
LBG.filterBy = {
    instances: [],
    selectorInit: "select.filterBy",
    classTrigger: "filterByTrigger",
    classMenu: "filterByMenu",
    classSelected: "selected",
    classActive: "active",
    classHover: "hover",
    classFocus: "focus",
    classLast: "last",
    prefixMenuId: "filterById",
    dataKeyId: "dataFilterById",
    dataKeyIndex: "dataFilterByIndex",
    dataKeyValue: "dataFilterByValue",
    fadeSpeed: 100,
    getInstanceObject: function(menuId) {
        var self;
        for (var i = 0; i < LBG.filterBy.instances.length; i++) {
            if (LBG.filterBy.instances[i].menuId === menuId) {
                self = LBG.filterBy.instances[i];
                break;
            }
        }
        return self;
    },
    getMenuId: function($target) {
        var menuId;
        if ($target[0].tagName.toLowerCase() === "span" && $target.parent(
            "." + LBG.filterBy.classTrigger).length) {
            $target = $target.parents("." + LBG.filterBy.classTrigger);
        }
        if ($target.hasClass(LBG.filterBy.classTrigger)) {
            menuId = $target.data(LBG.filterBy.dataKeyId);
        } else {
            menuId = $target.parents("ul." + LBG.filterBy.classMenu).attr(
                "id");
        }
        return menuId;
    },
    init: function() {
        $(LBG.filterBy.selectorInit).each(function() {
            var uniqueId = LBG.filterBy.instances.length;
            var select = this;
            if (select.options.length) {
                LBG.filterBy.instances.push(new LBG.filterBy.dropDown(
                    select, uniqueId));
            }
        });
    }
};
LBG.filterBy.dropDown = function(select, uniqueId) {
    this.form = $(select).parents("form");
    this.$select = $(select).hide();
    this.$options = $(select).find("option");
    this.uniqueId = uniqueId;
    this.menuId = LBG.filterBy.prefixMenuId + uniqueId;
    this.focusIndex = 0;
    this.$trigger = [];
    this.$menu = [];
    this.$menuItems = [];
    this.setup();
};
LBG.filterBy.dropDown.prototype = {
    setFocus: function(e) {
        var menuId = LBG.filterBy.getMenuId($(e.target));
        var isUp = e.keyCode === 38;
        var isDown = e.keyCode === 40;
        var len = 0;
        var self;
        if (menuId && (isUp || isDown)) {
            e.preventDefault();
            e.stopPropagation();
            self = LBG.filterBy.getInstanceObject(menuId);
            if (self) {
                len = self.$menuItems.length - 1;
                if (isUp) {
                    self.focusIndex = self.focusIndex === 0 ? len :
                        self.focusIndex - 1;
                }
                if (isDown) {
                    self.focusIndex = self.focusIndex === len ? 0 :
                        self.focusIndex + 1;
                }
                self.$menuItems.eq(self.focusIndex).find("a:first").focus();
            }
        }
    },
    showMenu: function() {
        var position = {};
        var height = 0;
        for (var i = 0; i < LBG.filterBy.instances.length; i++) {
            if (LBG.filterBy.instances[i].$menu !== this.$menu) {
                LBG.filterBy.instances[i].hideMenu();
            }
        }
        position = this.$trigger.position();
        height = this.$trigger.outerHeight();
        this.$menu.css({
            "top": position.top + height + "px",
            "left": position.left + "px",
            "width": (this.$menu.width() < 195) ? this.$menu.width() : 195 +
                "px"
        }).fadeIn(LBG.filterBy.fadeSpeed);
        this.$trigger.addClass(LBG.filterBy.classActive);
        this.focusIndex = this.$menuItems.filter("." + LBG.filterBy.classSelected)
            .find("a:eq(0)").data(LBG.filterBy.dataKeyIndex);
        $(document).bind("keydown", this.setFocus);
    },
    hideMenu: function() {
        this.$menu.fadeOut(LBG.filterBy.fadeSpeed);
        this.$trigger.removeClass(LBG.filterBy.classActive);
        $(document).unbind("keydown", this.setFocus);
    },
    toggleMenu: function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.$menu.is(":hidden")) {
            this.showMenu();
        } else {
            this.hideMenu();
        }
        return false;
    },
    trackFocus: function(e) {
        this.focusIndex = $(e.target).data(LBG.filterBy.dataKeyIndex);
    },
    setSelected: function(e) {
        var self = this;
        var $target = $(e.target);
        var value = $target.data(LBG.filterBy.dataKeyValue);
        this.$menuItems.filter("." + LBG.filterBy.classSelected).removeClass(
            LBG.filterBy.classSelected);
        $target.parent("li").addClass(LBG.filterBy.classSelected);
        self.hideMenu();
        this.$options.each(function(i) {
            if (this.value === value) {
                self.$select.attr("selectedIndex", i);
            }
        });
        self.form.submit();
    },
    setup: function() {
        var self = this;
        self.$trigger = $("<a />");
        self.$menu = $("<ul />");
        self.$trigger.html(self.$select.find("option:eq(0)").html()).attr(
                "tabIndex", 0).data(LBG.filterBy.dataKeyId, self.menuId)
            .keydown(function(e) {
                if (e.keyCode === 32 || e.keyCode === 13) {
                    $(this).click();
                    return false;
                }
            }).addClass(LBG.filterBy.classTrigger).insertBefore(self.$select);
        self.$trigger.wrapInner($("<span />"));
        self.$trigger.add(self.$trigger.find("span")).click(function(e) {
            self.toggleMenu(e);
        });
        self.$menu.attr("id", self.menuId).addClass(LBG.filterBy.classMenu)
            .insertAfter(self.$trigger);
        self.$options.each(function(i) {
            if (i > 0) {
                var $item = $("<li />");
                var $link = $("<a />");
                if (this.selected) {
                    $item.addClass(LBG.filterBy.classSelected);
                }
                $link.html(this.text).attr("tabIndex", 0).data(
                    LBG.filterBy.dataKeyIndex, i).data(LBG.filterBy
                    .dataKeyValue, this.value).click(
                    function(e) {
                        self.setSelected(e);
                    }).focus(function(e) {
                    self.trackFocus(e);
                }).keydown(function(e) {
                    if (e.keyCode === 32 || e.keyCode ===
                        13) {
                        $(this).click();
                        return false;
                    }
                }).mouseover(function(e) {
                    self.trackFocus(e);
                }).appendTo($item);
                $item.appendTo(self.$menu);
            }
        });
        self.$menuItems = self.$menu.find("li");
        if ($.browser.msie && $.browser.version < 7) {
            self.$menuItems.find("a").focus(function() {
                $(this).parent("li").addClass(LBG.filterBy.classFocus);
            }).blur(function() {
                $(this).parent("li").removeClass(LBG.filterBy.classFocus);
            });
            self.$menuItems.hover(function() {
                $(this).addClass(LBG.filterBy.classHover);
            }, function() {
                $(this).removeClass(LBG.filterBy.classHover);
            });
        }
        if ($.browser.msie && $.browser.version < 9) {
            self.$menuItems.filter(":last").addClass(LBG.filterBy.classLast);
        }
        $(document).click(function(e) {
            var $target = $(e.target);
            var isVisible = self.$menu.is(":visible");
            var isTrigger = $target.hasClass(LBG.filterBy.classTrigger);
            var isMenu = $target.parents("ul." + LBG.filterBy.classMenu)
                .length;
            if (isVisible && !isTrigger && !isMenu) {
                self.hideMenu();
            }
        });
    }
};
LBG.radioButtonPanel = {
    init: function() {
        var $panelSelect = $(
            ".content .optionPanel input:radio.statusToggle");
        $panelSelect.click(function() {
            $panelSelect.each(function() {
                $(this).closest(".subPanel").removeClass(
                    "panelSelected");
            });
            $(this).closest(".subPanel").addClass(
                "panelSelected");
            var $panelGroup = $(
                ".content .optionPanel .subPanel");
            $panelGroup.each(function() {
                if (!$(this).hasClass(".panelSelected")) {
                    $(this).find("input:text").val("");
                }
            });
        });
    }
};
LBG.optionPanelDisable = {
    init: function() {
        var $getDisabled = $(".content .optionPanel .isDisabled");
        $getDisabled.attr("disabled", "disabled");
    }
};
LBG.yourInbox = {
    toggleRow: function($rowTrigger) {
        var $rowDetail = $rowTrigger.next("tr.detail");
        var $checkbox = $rowTrigger.find(":checkbox:eq(0)");
        if ($rowTrigger.hasClass("expanded")) {
            $rowTrigger.removeClass("expanded");
            $rowDetail.hide();
        } else {
            $("tr").removeClass("expanded");
            $("tr.detail").hide();
            $rowTrigger.addClass("expanded");
            $rowDetail.show();
        }
    },
    toggleMainActions: function(isEnable) {
        var $messageTable = $("table.inboxMessageTable");
        var yourInboxDI = DI.paperlessCorrespondence.yourInbox;
        var $archive = $("th.selectAll", $messageTable).find(
            "li.archive input");
        var $delete = $("th.selectAll", $messageTable).find(
            "li.delete input");
        var isRead = $("td.first input:enabled", $messageTable).length;
        if (isEnable && isRead) {
            $archive.removeAttr("disabled").removeClass("isDisabled").attr(
                "src", yourInboxDI.archiveImage.enabled);
            $delete.removeAttr("disabled").removeClass("isDisabled").attr(
                "src", yourInboxDI.deleteImage.enabled);
        } else {
            $archive.addClass("isDisabled").attr({
                "disabled": true,
                "src": yourInboxDI.archiveImage.disabled
            });
            $delete.addClass("isDisabled").attr({
                "disabled": true,
                "src": yourInboxDI.deleteImage.disabled
            });
        }
    },
    init: function() {
        var $inboxTable = $("table.inboxMessageTable");
        LBG.yourInbox.toggleMainActions();
        $(".messageAction .isDisabled").attr("tabindex", "-1");
        $(".inboxData .infoMessage p.buttonLink a").click(function() {
            $(this).parents(".infoMessage").slideUp({
                opacity: "hide"
            }, "slow");
        });
        $(".secondary .inboxPanel").click(function(e) {
            var location = $("a:eq(0)", this).attr("href");
            if (typeof location === "string" && location !== "") {
                document.location.href = location;
            }
            e.preventDefault();
        });
        if (!$inboxTable.length) {
            return;
        }
        $inboxTable.find("tr").each(function() {
            if ($(this).hasClass("trigger")) {
                $(this).click(function(event) {
                    var tagName = event.target.tagName.toLowerCase();
                    if (tagName !== "input") {
                        event.preventDefault();
                        event.stopPropagation();
                        LBG.yourInbox.toggleRow($(this));
                    }
                });
            }
            if ($(this).hasClass("detail")) {
                $(this).hide();
            }
        });
        $inboxTable.find("tr.detail .messageAction").find(
            "li.archive a, li.delete a").click(function(event) {
            var checkbox = $(this).parents("tr.detail").prev().find(
                "td.select input:checkbox")[0];
            if (checkbox.disabled) {
                event.preventDefault();
                return false;
            }
            return true;
        });
        $inboxTable.find("thead th.selectAll").find(
            "li.archive input, li.delete input").click(function(
            event) {
            var checkbox = $(this).parents("th").find(
                "input:checkbox")[0];
            if (!checkbox.checked) {
                event.preventDefault();
                return false;
            }
            return true;
        });
        $inboxTable.find("thead th.selectAll input:checkbox").click(
            function() {
                $(this).parents("table").find(
                    "tbody td.select input:checkbox:not(:disabled)"
                ).attr("checked", this.checked);
                LBG.yourInbox.toggleMainActions(this.checked);
            });
        $inboxTable.find("tbody td.select input:checkbox").click(
            function() {
                var $selectAll = $inboxTable.find(
                    "thead th.selectAll");
                var $rowCheckboxes = $inboxTable.find(
                        "tbody td input:checked").length,
                    $rowCheckboxesAll = $inboxTable.find(
                        "tbody td.select input:checkbox:not(:disabled)"
                    ).length;
                if ($rowCheckboxes >= 1) {
                    LBG.yourInbox.toggleMainActions(true);
                } else {
                    $inboxTable.find(
                        "thead th.selectAll input:checkbox").attr(
                        "checked", false);
                    LBG.yourInbox.toggleMainActions(false);
                } if ($rowCheckboxes < $rowCheckboxesAll) {
                    $inboxTable.find(
                        "thead th input:checkbox:not(:disabled)"
                    ).attr("checked", false);
                } else {
                    $inboxTable.find(
                        "thead th input:checkbox:not(:disabled)"
                    ).attr("checked", true);
                }
            });
        $inboxTable.find(".statementLink").one("click", function() {
            var $rowTrigger = $(this).parents("tr.detail").prev(
                "tr");
            var $rowDetail = $(this).parents("tr.detail");
            var $checkbox = $rowTrigger.find(":checkbox:eq(0)");
            $rowTrigger.removeClass("messageUnread").addClass(
                "messageRead");
            $rowDetail.removeClass("messageUnread").addClass(
                "messageRead");
            $checkbox.removeAttr("disabled");
            $rowDetail.find(".isDisabled").removeClass(
                "isDisabled");
        });
    }
};
LBG.checkboxSelectAll = (function() {
    var initSelector = ".checkboxSelectAll";
    var isId = function(str) {
        return str.substring(1, 0) === "#";
    };
    var escapeId = function(id) {
        return id.replace(/:/g, "\\:");
    };
    var getCheckboxes = function(metadata) {
        var $checkboxes = $([]);
        if (metadata.columns && metadata.columns.length) {
            for (var i = 0; i < metadata.columns.length; i++) {
                $checkboxes = $checkboxes.add(metadata.$target.find(
                    "tbody th:nth-child(" + metadata.columns[
                        i] + "), tbody td:nth-child(" +
                    metadata.columns[i] + ")").find(
                    "input:checkbox:not(:disabled)"));
            }
        } else {
            $checkboxes = $checkboxes.add(metadata.$target.find(
                "tbody input:checkbox:not(:disabled)"));
        }
        return $checkboxes;
    };
    var checkStatus = function(event, $trigger) {
        $trigger = $trigger || $(event.target);
        var metadata = $trigger.data("metadata"),
            $checkboxes = getCheckboxes(metadata),
            isChecked, allChecked;
        $checkboxes.each(function() {
            allChecked = true;
            if ($(this).is(":checked") === false) {
                allChecked = false;
                return allChecked;
            }
            return allChecked;
        });
        if (allChecked && $trigger[0] === metadata.$trigger[0]) {
            isChecked = allChecked;
            metadata.$trigger.attr("checked", isChecked).attr(
                "disabled", isChecked);
        } else {
            if ($trigger[0] === metadata.$trigger[0]) {
                isChecked = metadata.$trigger.is(":checked");
                $checkboxes.each(function() {
                    if (!isChecked && this.checked) {
                        $(this).attr("checked", "checked");
                    } else {
                        $(this).attr("checked", isChecked);
                    }
                });
                metadata.$trigger.attr("disabled", isChecked);
            } else {
                isChecked = $checkboxes.filter(":checked").length ===
                    $checkboxes.length;
                metadata.$trigger.attr({
                    "disabled": isChecked,
                    "checked": isChecked
                });
            }
        }
    };
    var setup = function($formField) {
        var metadata = $formField.metadata();
        var $checkboxes;
        if (typeof metadata.target === "undefined") {
            return;
        }
        metadata.$trigger = $formField.find("input:checkbox:eq(0)");
        metadata.$target = $(escapeId(metadata.target));
        if (!metadata.$target.length) {
            return;
        }
        $checkboxes = getCheckboxes(metadata);
        $checkboxes.data("metadata", metadata).click(checkStatus);
        metadata.$trigger.data("metadata", metadata).click(
            checkStatus).each(function() {
            checkStatus(null, $(this));
        });
    };
    return {
        init: function() {
            $(initSelector).each(function() {
                setup($(this));
            });
        }
    };
})();
LBG.preventPaste = {
    init: function() {
        $("input.noPaste").bind("paste", function(e) {
            e.preventDefault();
        });
    }
};
LBG.branchFinder = {
    onlyLloyds: false,
    allResultsContainer: null,
    allResults: null,
    numberItemsDisplay: 5,
    init: function() {
        LBG.branchFinder.allResultsContainer = $(
            "div.selectBranchAccountSetup div.branchResults");
        LBG.branchFinder.allResults = LBG.branchFinder.allResultsContainer
            .find("div.inputGroup");
        LBG.branchFinder.altRows();
        $("#slctBranches").change(function(e) {
            if ($("#slctBranches option:selected").attr("value") ===
                "onlyLloyds") {
                LBG.branchFinder.onlyLloyds = true;
                LBG.branchFinder.goToPage(1);
            } else {
                LBG.branchFinder.onlyLloyds = false;
                LBG.branchFinder.goToPage(1);
            }
        });
        $(
            "div.selectBranchAccountSetup div.paginationSudoButtons li.next input.pseudoLink"
        ).click(function() {});
    },
    goToPage: function(pageNumber) {
        var localCurrentView = LBG.branchFinder.allResults;
        var minIndex = (pageNumber - 1) * LBG.branchFinder.numberItemsDisplay;
        var maxIndex = (pageNumber * LBG.branchFinder.numberItemsDisplay) -
            1;
        localCurrentView.show();
        if (LBG.branchFinder.onlyLloyds) {
            localCurrentView = localCurrentView.filter(
                "div.branchDivested").hide();
        }
        localCurrentView.filter(":visible").filter(function(index) {
            return index < minIndex || index > maxIndex;
        }).hide();
        LBG.branchFinder.altRows();
    },
    altRows: function() {
        var visibleResults = LBG.branchFinder.allResults.filter(
            ":visible");
        $(visibleResults).each(function() {
            if ($(this).find(".alt")) {
                $(this).find(".alt").removeClass("alt");
            }
        });
        $(visibleResults).filter(":odd").find(".branchDetails").addClass(
            "alt");
    }
};
LBG.showMeOrientation = {
    journeyCookieName: "IBCookie04",
    loadedStubs: [],
    welcomeBubbleAnchorExceptionConstant: "welcomeShowMeAnchor",
    doneBubbleAnchorExceptionConstant: "doneShowMeAnchor",
    showMeSupportAnchorConstant: "showMeSupport",
    isWelcomeMessage: false,
    frameIsInjected: false,
    origialBubbleTopMargin: undefined,
    bubbleNavigationControls: [".goNext", ".goPrev", ".close"],
    currentBubbleControl: 0,
    bubbleControlFocus: ".goNext",
    showMeWebTrends: false,
    thisSlideNumber: 0,
    bubblesToShow: [],
    bubblesToLookFor: [],
    match_anchors_to_functions: function(anchor) {
        if (anchor === LBG.showMeOrientation.welcomeBubbleAnchorExceptionConstant) {
            LBG.showMeOrientation.isWelcomeMessage = true;
            LBG.showMeOrientation.welcomeSlide();
        } else {
            if (anchor === LBG.showMeOrientation.doneBubbleAnchorExceptionConstant) {
                LBG.showMeOrientation.isWelcomeMessage = false;
                LBG.showMeOrientation.doneSlide();
            } else {
                if (anchor === "welcomeOnly") {
                    LBG.showMeOrientation.welcomeOnlySlide();
                } else {
                    if (anchor === "accountNameShowMeAnchor") {
                        var $accountAnchorWrapper = $(
                            ".accountNameShowMeAnchor").parents(
                            ".accountDetails");
                        var $AccountNameTextElement =
                            $accountAnchorWrapper.find("h2 a");
                        var account_name = "Account name";
                        if ($AccountNameTextElement.text().length > 1) {
                            account_name = $AccountNameTextElement.text();
                        }
                        $("#showMeOrientation .accountName h2").empty()
                            .append(account_name);
                        LBG.showMeOrientation.showBubble("accountName",
                            anchor, "up", 10, 20);
                    } else {
                        var metadata = $("." + anchor).metadata();
                        var pointer = "up";
                        if (metadata.hasOwnProperty("pointer")) {
                            pointer = metadata.pointer;
                        }
                        var topPositionOffset = 0;
                        if (metadata.hasOwnProperty("topPositionOffset")) {
                            topPositionOffset = metadata.topPositionOffset;
                        }
                        var leftPositionOffset = 0;
                        if (metadata.hasOwnProperty(
                            "leftPositionOffset")) {
                            leftPositionOffset = metadata.leftPositionOffset;
                        }
                        if (metadata.hasOwnProperty("bubble")) {
                            LBG.showMeOrientation.showBubble(metadata.bubble,
                                anchor, pointer, topPositionOffset,
                                leftPositionOffset);
                        }
                    }
                }
            }
        }
    },
    createBubbleIndicators: function() {
        LBG.showMeOrientation.bubblesToShow.length = 0;
        if (($.inArray(LBG.showMeOrientation.welcomeBubbleAnchorExceptionConstant,
            LBG.showMeOrientation.bubblesToLookFor)) > -1) {
            LBG.showMeOrientation.bubblesToShow.push(LBG.showMeOrientation
                .welcomeBubbleAnchorExceptionConstant);
        }
        for (var i = 0; i < LBG.showMeOrientation.bubblesToLookFor.length; i++) {
            if (($("." + LBG.showMeOrientation.bubblesToLookFor[i]).length >
                0) && (LBG.showMeOrientation.bubblesToLookFor[i] !==
                LBG.showMeOrientation.welcomeBubbleAnchorExceptionConstant
            ) && (LBG.showMeOrientation.bubblesToLookFor[i] !== LBG
                .showMeOrientation.doneBubbleAnchorExceptionConstant
            )) {
                LBG.showMeOrientation.bubblesToShow.push(LBG.showMeOrientation
                    .bubblesToLookFor[i]);
            }
        }
        if (($.inArray(LBG.showMeOrientation.doneBubbleAnchorExceptionConstant,
            LBG.showMeOrientation.bubblesToLookFor)) > -1) {
            LBG.showMeOrientation.bubblesToShow.push(LBG.showMeOrientation
                .doneBubbleAnchorExceptionConstant);
        }
        if (LBG.showMeOrientation.bubblesToShow.length > 1) {
            $("ul.steps").empty();
            for (var j = 1; j <= LBG.showMeOrientation.bubblesToShow.length; j++) {
                if (j === 1) {
                    $("ul.steps").append(
                        '<li class="first current"><span>' + j +
                        "</span></li>");
                } else {
                    if (j === LBG.showMeOrientation.bubblesToShow.length) {
                        $("ul.steps").append('<li class="last"><span>' +
                            j + "</span></li>");
                    } else {
                        $("ul.steps").append("<li><span>" + j +
                            "</span></li>");
                    }
                }
            }
            $("#showMeOrientation .bubbleControls").css("display",
                "inline");
        } else {
            $("#showMeOrientation .bubbleControls").css("display",
                "none");
        }
    },
    welcomeSlide: function() {
        LBG.showMeOrientation.bubbleControlFocus = ".goNext";
        LBG.showMeOrientation.thisSlideNumber = 0;
        this.scrollPage(0);
        $("#showMeOrientation a.goPrev").removeClass("restart");
        $("#showMeOrientation").removeClass("tip").addClass(
            "showMeWelcome");
        $("#showMeOrientation .bubbleControls").css("display", "inline");
        $("#showMeMask").addClass("show");
        $("#showMeOrientation a.goNext img").attr({
            "src": DI.showme.welcomeNextArrow,
            "alt": DI.showme.welcomeNextAlt
        }).css("display", "inline");
        $("#showMeOrientation a.goPrev img").attr({
            "src": DI.showme.welcomePrevArrow,
            "alt": DI.showme.welcomePrevAlt
        }).css("display", "inline");
        $("#showMeOrientation a.goNext").css("display", "inline");
        $("#showMeOrientation a.goPrev").css("display", "inline");
        $("ul.steps li").removeClass("current");
        $("ul.steps li.first").addClass("current");
        $("#showMeOrientation .midspace img").removeClass("show");
        $("#showMeOrientation .midspace img.welcome").addClass("show");
        $("#showMeOrientation .midspace .textContent > div").css(
            "display", "none");
        $("#showMeOrientation .midspace .textContent .welcome").css(
            "display", "block");
        $("#showMeOrientation img.pointUp").css("display", "none");
        $("#showMeOrientation img.pointUpRight").css("display", "none");
        $("#showMeOrientation img.pointRight").css("display", "none");
        $("#showMeOrientation img.pointLeft").css("display", "none");
        $("#showMeOrientation img.pointDownLeft").css("display", "none");
        $("#showMeOrientation img.pointDownRight").css("display",
            "none");
        $("#showMeOrientation").animate({
            top: 135,
            left: "50%",
            width: "810px"
        }, 500, function() {});
        $(LBG.showMeOrientation.bubbleControlFocus).prev().focus();
        LBG.showMeOrientation.web_trends("welcome_journey_start");
    },
    fade_text: function(in_or_out) {
        var fade = 0;
        if (in_or_out === "in") {
            fade = 1;
        }
        $("#showMeOrientation .textContent").animate({
            opacity: fade
        }, 350, function() {});
    },
    showBubble: function(bubbleClassName, anchor, pointer,
        positionTopOffset, positionLeftOffset) {
        if ($("." + anchor).length > 0) {
            $("#showMeOrientation img").css("margin-left", "");
            $("#showMeOrientation img.pointRight").removeClass(
                "doneStretch");
            $("#showMeOrientation").removeClass("showMeWelcome");
            var arrowTopOffset, arrowLeftOffset;
            switch (pointer) {
                case "up":
                    LBG.showMeOrientation.hide_all_bubble_arrows();
                    $("#showMeOrientation img.pointUp").css("display",
                        "block");
                    arrowTopOffset = 70;
                    arrowLeftOffset = 360;
                    break;
                case "upRight":
                    LBG.showMeOrientation.hide_all_bubble_arrows();
                    $("#showMeOrientation img.pointUpRight").css(
                        "display", "block");
                    arrowTopOffset = 70;
                    arrowLeftOffset = 0;
                    break;
                case "left":
                    LBG.showMeOrientation.hide_all_bubble_arrows();
                    $("#showMeOrientation img.pointLeft").css("display",
                        "block");
                    arrowTopOffset = -12;
                    arrowLeftOffset = 500;
                    break;
                case "right":
                    LBG.showMeOrientation.hide_all_bubble_arrows();
                    $("#showMeOrientation img.pointRight").css(
                        "display", "block");
                    arrowTopOffset = -20;
                    arrowLeftOffset = -10;
                    if ($.browser.msie && parseInt($.browser.version) <
                        8) {
                        arrowTopOffset = -10;
                    }
                    break;
                case "downLeft":
                    LBG.showMeOrientation.hide_all_bubble_arrows();
                    $("#showMeOrientation img.pointDownLeft").css(
                        "display", "block");
                    arrowTopOffset = 35;
                    arrowLeftOffset = 360;
                    break;
                default:
                    LBG.showMeOrientation.hide_all_bubble_arrows();
                    $("#showMeOrientation img.pointUp").css("display",
                        "block");
                    arrowTopOffset = 70;
                    arrowLeftOffset = 360;
                    break;
            }
            if ((positionTopOffset > 0) || (positionTopOffset < 0)) {
                arrowTopOffset = arrowTopOffset + positionTopOffset;
            }
            if ((positionLeftOffset > 0) || (positionLeftOffset < 0)) {
                arrowLeftOffset = arrowLeftOffset + positionLeftOffset;
            }
            if (anchor === LBG.showMeOrientation.showMeSupportAnchorConstant) {
                LBG.showMeOrientation.thisSlideNumber = 0;
            }
            $("#showMeOrientation .midspace img").removeClass("show");
            $("#showMeOrientation .textContent").animate({
                opacity: 0
            }, 350, function() {
                $("#showMeOrientation").addClass("tip");
                $("#showMeMask").removeClass("show");
                $(
                    "#showMeOrientation .midspace .textContent > div"
                ).css("display", "none");
                $("#showMeOrientation .midspace ." +
                    bubbleClassName).css("display", "block");
                $("#showMeOrientation a.goNext img").attr({
                    "src": DI.showme.standardNextTip,
                    "alt": DI.showme.standardNextTipAlt
                });
                $("#showMeOrientation a.goPrev img").attr({
                    "src": DI.showme.standardPrevTip,
                    "alt": DI.showme.standardPrevTipAlt
                });
                if (LBG.showMeOrientation.thisSlideNumber === 0) {
                    $("#showMeOrientation a.goPrev img").css(
                        "display", "none");
                    $("#showMeOrientation a.goPrev").css(
                        "display", "none");
                    $("#showMeOrientation a.goNext img").css(
                        "display", "inline");
                    $("#showMeOrientation a.goNext").css(
                        "display", "inline");
                    $(LBG.showMeOrientation.bubbleControlFocus)
                        .focus();
                } else {
                    if ((LBG.showMeOrientation.thisSlideNumber +
                            1) === LBG.showMeOrientation.bubblesToShow
                        .length) {
                        $("#showMeOrientation a.goPrev img").css(
                            "display", "inline");
                        $("#showMeOrientation a.goPrev").css(
                            "display", "inline");
                        $("#showMeOrientation a.goNext img").css(
                            "display", "none");
                        $("#showMeOrientation a.goNext").css(
                            "display", "none");
                        LBG.showMeOrientation.bubbleControlFocus =
                            ".goPrev";
                        $(LBG.showMeOrientation.bubbleControlFocus)
                            .focus();
                    } else {
                        if (LBG.showMeOrientation.isWelcomeMessage ===
                            true && ((LBG.showMeOrientation.thisSlideNumber +
                                    2) === LBG.showMeOrientation
                                .bubblesToShow.length)) {
                            $("#showMeOrientation a.goNext img")
                                .attr({
                                    "src": DI.showme.standardNextArrow,
                                    "alt": DI.showme.standardNextArrowAlt
                                });
                        } else {
                            if (LBG.showMeOrientation.isWelcomeMessage ===
                                true && ((LBG.showMeOrientation
                                    .thisSlideNumber) === 1)) {
                                $(
                                    "#showMeOrientation a.goPrev img"
                                ).attr({
                                    "src": DI.showme.standardPrevArrow,
                                    "alt": DI.showme.standardPrevArrowAlt
                                });
                            } else {
                                $("#showMeOrientation a.goPrev")
                                    .css("display", "inline");
                                $("#showMeOrientation a.goNext")
                                    .css("display", "inline");
                                $(
                                    "#showMeOrientation a.goPrev img"
                                ).css("display", "inline");
                                $(
                                    "#showMeOrientation a.goNext img"
                                ).css("display", "inline");
                            }
                        }
                    }
                } if (bubbleClassName === "showMeSupport") {
                    $(".showmMeSupport > li:first").focus();
                } else {
                    if ($(
                        "#showMeOrientation a.goNext img:visible"
                    ).length > 0 || $(
                        "#showMeOrientation a.goPrev img:visible"
                    ).length > 0) {
                        $(LBG.showMeOrientation.bubbleControlFocus)
                            .focus();
                    } else {
                        $("#showMeOrientation .close").focus();
                    }
                }
            });
            var p = $("." + anchor);
            var position = p.offset();
            var thisBubbleHeight = $(
                "#showMeOrientation > .showWrap:visible:last").height();
            var thisBubbleContentHight = $(
                "#showMeOrientation .textContent:visible:last").height();
            var isBottomArrow = (pointer === "downLeft" || pointer ===
                "downRight");
            var newContentHeight = $("." + bubbleClassName + ":last").height();
            var offsetTop = position.top;
            var offsetCorrection = newContentHeight -
                thisBubbleContentHight;
            if (isBottomArrow) {
                if (LBG.showMeOrientation.origialBubbleTopMargin ===
                    undefined) {
                    LBG.showMeOrientation.origialBubbleTopMargin = (
                        Number($(
                            "#showMeOrientation .pointDownLeft:first"
                        ).css("marginTop").replace("px", "")));
                }
                if (newContentHeight !== thisBubbleContentHight) {
                    offsetCorrection = newContentHeight -
                        thisBubbleContentHight;
                }
                offsetTop = position.top - thisBubbleHeight -
                    offsetCorrection;
            } else {
                offsetTop = position.top + arrowTopOffset;
                offsetCorrection = 0;
            }
            var width = bubbleClassName === "showMeSupport" ? "396px" :
                "480px";
            $("#showMeOrientation").animate({
                top: offsetTop,
                left: position.left + arrowLeftOffset,
                width: width
            }, 500, function() {
                if ($(".showMeSupport:visible").length > 0) {
                    $(".showMeSupport li a:first").focus();
                }
            });
            if (pointer !== "downLeft") {
                LBG.showMeOrientation.scrollPage(position.top - 100);
            }
            LBG.showMeOrientation.fade_text("in");
        }
        $("#showMeOrientation .midspace .textContent div").filter(
            ":visible").focus();
        LBG.showMeOrientation.web_trends(bubbleClassName);
    },
    doneSlide: function() {
        LBG.showMeOrientation.thisSlideNumber = LBG.showMeOrientation.bubblesToShow
            .length + 1;
        this.scrollPage(0);
        $("#showMeOrientation a.goPrev").addClass("restart");
        $("#showMeMask").removeClass("show");
        $("#showMeOrientation a.goNext img").attr({
            "src": DI.showme.doneNextArrow,
            "alt": DI.showme.doneNextArrowAlt
        });
        $("#showMeOrientation a.goPrev img").attr({
            "src": DI.showme.donePrevArrow,
            "alt": DI.showme.donePrevArrowAlt
        });
        $("#showMeOrientation a.goNext").css("display", "inline");
        $("#showMeOrientation a.goPrev").css("display", "inline");
        $("ul.steps li").removeClass("current");
        $("ul.steps li.last").addClass("current");
        $("#showMeOrientation .midspace img").removeClass("show");
        $("#showMeOrientation .midspace img.done").addClass("show");
        $("#showMeOrientation .midspace .textContent > div").css(
            "display", "none");
        $("#showMeOrientation .midspace .textContent .done").css(
            "display", "block");
        LBG.showMeOrientation.hide_all_bubble_arrows();
        var is_button_visible = $(".showMeSupportLinkShowMeAnchor").parents(
            "div").hasClass("selected");
        var p = $(".showMeSupportLinkShowMeAnchor");
        if (is_button_visible === false) {
            p = $(".showMeSupportLinkShowMeAnchor").parents(".part").find(
                "h2");
        }
        var ie7Offset = ($.browser.msie === true && Number($.browser.version) ===
            7) ? 7 : 20;
        if ($(".showMeSupportLinkShowMeAnchor").length > 0) {
            $("#showMeOrientation img.pointRight").css("display",
                "block").addClass("doneStretch");
            $("#showMeOrientation .bubbleControls").addClass(
                "lastBubble");
            var position = p.offset();
            $("#showMeOrientation").animate({
                top: position.top - ie7Offset,
                left: position.left - 300,
                width: 680
            }, 500, function() {});
        } else {
            $("#showMeOrientation").animate({
                top: 135,
                left: "50%",
                width: "700px"
            }, 500, function() {});
        }
        LBG.showMeOrientation.web_trends("welcome_journey_done");
    },
    welcomeOnlySlide: function() {
        LBG.showMeOrientation.thisSlideNumber = LBG.showMeOrientation.bubblesToShow
            .length + 1;
        this.scrollPage(0);
        $("#showMeOrientation a.goPrev").addClass("restart");
        $("#showMeOrientation").addClass("tip showMeWelcome");
        $("#showMeMask").removeClass("show");
        $("#showMeOrientation a.goNext img").attr("src", DI.showme.doneNextArrow);
        $("#showMeOrientation a.goPrev img").css("display", "none");
        $("#showMeOrientation .midspace img").removeClass("show");
        $("#showMeOrientation .midspace img.welcome").addClass("show");
        $("#showMeOrientation .midspace .textContent > div").css(
            "display", "none");
        $("#showMeOrientation .midspace .textContent .welcomeOnly").css(
            "display", "block").css("width", "375px");
        LBG.showMeOrientation.hide_all_bubble_arrows();
        if ($(".showMeSupportLinkShowMeAnchor").length > 0) {
            $("#showMeOrientation img.pointRight").css("display",
                "block").css("margin-left", "759px");
            var p = $(".showMeSupportLinkShowMeAnchor");
            var position = p.offset();
            $("#showMeOrientation").animate({
                top: position.top - 15,
                left: position.left - 420,
                width: 810
            }, 500, function() {});
        } else {
            $("#showMeOrientation").animate({
                top: 135,
                left: "68%",
                width: "810px"
            }, 500, function() {});
        }
    },
    checkForNudge: function() {
        var container_metadata = $(".showMeContainer").metadata();
        if (container_metadata.hasOwnProperty("nudge")) {
            var nudgeJourneyKey = container_metadata.nudge;
            return nudgeJourneyKey;
        } else {
            return false;
        }
    },
    scrollPage: function(y) {
        $("html, body").animate({
            scrollTop: y
        }, 500);
    },
    setCookie: function(cookieName, cookieValue) {
        document.cookie = cookieName + "=" + cookieValue + ";path=/";
    },
    getCookie: function(get_cookie_name) {
        var noCookie = true;
        var i, cookieName, cookieVal, ARRcookies = document.cookie.split(
            ";");
        for (i = 0; i < ARRcookies.length; i++) {
            cookieName = ARRcookies[i].substr(0, ARRcookies[i].indexOf(
                "="));
            cookieVal = ARRcookies[i].substr(ARRcookies[i].indexOf("=") +
                1);
            cookieName = cookieName.replace(/^\s+|\s+$/g, "");
            if (cookieName === get_cookie_name) {
                if ((cookieVal.length > 0) && (cookieVal !== "false")) {
                    noCookie = false;
                    return cookieVal;
                }
            }
        }
        if (noCookie === true) {
            return false;
        }
    },
    removeCookie: function(cookieName) {
        document.cookie = cookieName + "= " +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT" + ";path=/";
    },
    collapseToShowMe: function() {
        LBG.showMeOrientation.thisSlideNumber = 0;
        LBG.showMeOrientation.hide_all_bubble_arrows();
        var is_button_visible = $(".showMeSupportLinkShowMeAnchor").parents(
            ".part").hasClass("selected");
        var closeTo = $(".showMeSupportLinkShowMeAnchor");
        if (is_button_visible === false) {
            closeTo = $(".showMeSupportLinkShowMeAnchor").parents(
                ".part").find("h2");
        }
        var curHeight = $("#showMeOrientation").height();
        var position = closeTo.offset(),
            topPos = position.top - 15,
            leftPos = position.left + 85,
            width = 0,
            currentLeft = $("#showMeOrientation").offset().left,
            params = {
                top: topPos,
                left: leftPos,
                width: 0,
                margin: 0
            };
        if ($(".showMeSupportLinkShowMeAnchor").length > 0) {
            $("#showMeOrientation").css({
                left: currentLeft
            }).animate(params, 850, function() {
                $(this).css({
                    top: 135,
                    left: "50%",
                    width: "810px",
                    marginTop: -60,
                    marginLeft: -405,
                    display: "none"
                });
                $("#showMeMask").removeClass("show");
            });
        } else {
            $("#showMeOrientation").css("display", "none");
            $("#showMeMask").removeClass("show");
        }
    },
    showMeSupportClicks: function($clicked_element) {
        var link_metadata = $clicked_element.metadata();
        var existing_content = $(
            ".showMeContainer #showMeOrientation .textContent").html();
        LBG.showMeOrientation.setCookie(LBG.showMeOrientation.journeyCookieName,
            link_metadata.journeyKey);
        var i = $(".showMeContainer").metadata();
        if (i.journeyKeys.lastIndexOf(link_metadata.journeyKey) !== -1) {
            if ($.inArray(link_metadata.journeyKey, LBG.showMeOrientation
                .loadedStubs) === -1) {
                $(".showMeContainer #showMeOrientation .textContent").empty();
                $(".showMeContainer #showMeOrientation .textContent").load(
                    DI.showme.stubFileLocation + "showme_" +
                    link_metadata.journeyKey + DI.showme.stubFileExtension,
                    function(responseText, textStatus, req) {
                        if (textStatus === "error") {
                            $(
                                ".showMeContainer #showMeOrientation .textContent"
                            ).prepend(existing_content);
                            $(
                                ".showMeContainer #showMeOrientation .textContent > div"
                            ).css("display", "none");
                            LBG.showMeOrientation.showBubble(
                                "unavailabubble",
                                "showMeSupportLinkShowMeAnchor",
                                "right");
                        }
                        if (textStatus === "success") {
                            LBG.showMeOrientation.setCookie(LBG.showMeOrientation
                                .journeyCookieName,
                                link_metadata.journeyKey);
                            $(
                                ".showMeContainer #showMeOrientation .textContent"
                            ).prepend(existing_content);
                            $(
                                ".showMeContainer #showMeOrientation .textContent > div"
                            ).css("display", "none");
                            LBG.showMeOrientation.loadedStubs.push(
                                link_metadata.journeyKey);
                            LBG.showMeOrientation.invokeJourneyFromKey(
                                link_metadata.journeyKey);
                        }
                    });
            } else {
                LBG.showMeOrientation.invokeJourneyFromKey(
                    link_metadata.journeyKey);
            }
        } else {
            if ($(".backToAccountsAnchor").length > 0) {
                $("#showMeOrientation .bubbleControls").css("display",
                    "none");
                LBG.showMeOrientation.showBubble(
                    "backToAccountOverview", "backToAccountsAnchor",
                    "up");
            } else {
                $("#showMeOrientation .bubbleControls").css("display",
                    "none");
                LBG.showMeOrientation.showBubble("unavailabubble",
                    "showMeSupportLinkShowMeAnchor", "right");
            }
        }
    },
    invokeJourneyFromKey: function(journey_key) {
        if (journey_key.length > 0) {
            var container_metadata = $(".showMeContainer").metadata();
            var journey_arrays = container_metadata.journeyKeys.split(
                ";");
            var journey_anchors = [];
            var found = false;
            var i;
            for (i = 0; i < journey_arrays.length; i++) {
                var kee = journey_arrays[i].split(":");
                if (kee[0] === journey_key) {
                    journey_anchors = kee[1].split(",");
                    found = true;
                }
            }
            if (found === true) {
                LBG.showMeOrientation.setCookie(LBG.showMeOrientation.journeyCookieName,
                    journey_key);
                LBG.showMeOrientation.bubblesToLookFor =
                    journey_anchors;
                LBG.showMeOrientation.createBubbleIndicators();
                if (LBG.showMeOrientation.bubblesToShow.length > 0) {
                    LBG.showMeOrientation.match_anchors_to_functions(
                        LBG.showMeOrientation.bubblesToShow[0]);
                } else {
                    if ($(".backToAccountsAnchor").length > 0) {
                        $("#showMeOrientation .bubbleControls").css(
                            "display", "none");
                        LBG.showMeOrientation.showBubble(
                            "backToAccountOverview",
                            "backToAccountsAnchor", "up");
                    } else {
                        $("#showMeOrientation .bubbleControls").css(
                            "display", "none");
                        LBG.showMeOrientation.showBubble(
                            "unavailabubble",
                            "showMeSupportLinkShowMeAnchor",
                            "right");
                    }
                }
            } else {
                if ($(".backToAccountsAnchor").length > 0) {
                    $("#showMeOrientation .bubbleControls").css(
                        "display", "none");
                    LBG.showMeOrientation.showBubble(
                        "backToAccountOverview",
                        "backToAccountsAnchor", "up");
                } else {
                    $("#showMeOrientation .bubbleControls").css(
                        "display", "none");
                    LBG.showMeOrientation.showBubble("unavailabubble",
                        "showMeSupportLinkShowMeAnchor", "right");
                }
            }
        } else {
            $("#showMeOrientation .bubbleControls").css("display",
                "none");
            LBG.showMeOrientation.showBubble("unavailabubble",
                "showMeSupportLinkShowMeAnchor", "right");
        }
    },
    isCurrentJourneyInTheShowMeMetadata: function() {
        var current_journey = LBG.showMeOrientation.getCookie(LBG.showMeOrientation
            .journeyCookieName);
        if (current_journey !== false) {
            var container_metadata = $(".showMeContainer").metadata();
            var journey_arrays = container_metadata.journeyKeys.split(
                ";");
            var i;
            var found = false;
            for (i = 0; i < journey_arrays.length; i++) {
                var kee = journey_arrays[i].split(":");
                if (kee[0] === current_journey) {
                    found = true;
                }
            }
            return found;
        } else {
            return false;
        }
    },
    hide_all_bubble_arrows: function() {
        $("#showMeOrientation img.pointUp").css("display", "none");
        $("#showMeOrientation img.pointUpRight").css("display", "none");
        $("#showMeOrientation img.pointRight").css("display", "none");
        $("#showMeOrientation img.pointLeft").css("display", "none");
        $("#showMeOrientation img.pointDownLeft").css("display", "none");
        $("#showMeOrientation img.pointDownRight").css("display",
            "none");
    },
    web_trends: function(bubble_identifier) {
        var time = new Date().toTimeString().replace(
            /.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        var date = new Date();
        var datestring = ("0" + (date.getMonth() + 1).toString()).substr(-
                2) + "/" + ("0" + date.getDate().toString()).substr(-2) +
            "/" + (date.getFullYear().toString()).substr(2);
        if (typeof WebTrends !== "undefined") {
            if (LBG.showMeOrientation.showMeWebTrends === false) {
                LBG.showMeOrientation.showMeWebTrends = new WebTrends();
                LBG.showMeOrientation.showMeWebTrends.dcsid = _AP.dcsid;
                LBG.showMeOrientation.showMeWebTrends.domain = _AP.domain;
                LBG.showMeOrientation.showMeWebTrends.fpcdom = _AP.fpcdom;
            }
            LBG.showMeOrientation.showMeWebTrends.dcsMultiTrack("WT.ti",
                bubble_identifier, "DCS.dcsuri", "showme_overlay",
                "WT.dl", "77", "WT.tx_it", time, "WT.tx_id",
                datestring);
        }
    },
    init: function() {
        if ($(".showMeContainer").length > 0) {
            LBG.showMeOrientation.thisSlideNumber = 0;
            $(".showMeMenu ul").prepend(DI.showme.showMeMenuButton);
            var item = 1;
            $("li.showMeItem").each(function(index) {
                if (item !== 1) {
                    $(this).remove();
                }
                item = 2;
            });
            var current_journey = LBG.showMeOrientation.getCookie(LBG.showMeOrientation
                .journeyCookieName);
            var nudge = LBG.showMeOrientation.checkForNudge();
            var existing_content = "";
            if (current_journey !== false) {
                if (LBG.showMeOrientation.frameIsInjected === false) {
                    $(".showMeContainer").load(DI.showme.stubFileLocation +
                        DI.showme.coreStubFile + DI.showme.stubFileExtension,
                        function() {
                            LBG.showMeOrientation.frameIsInjected =
                                true;
                            if ($.inArray(current_journey, LBG.showMeOrientation
                                .loadedStubs) === -1) {
                                existing_content = $(
                                    ".showMeContainer #showMeOrientation .textContent"
                                ).html();
                                $(
                                    ".showMeContainer #showMeOrientation .textContent"
                                ).load(DI.showme.stubFileLocation +
                                    "showme_" + current_journey +
                                    DI.showme.stubFileExtension,
                                    function() {
                                        $(
                                            ".showMeContainer #showMeOrientation .textContent"
                                        ).prepend(
                                            existing_content
                                        );
                                        $(
                                            ".showMeContainer #showMeOrientation .textContent > div"
                                        ).css("display",
                                            "none");
                                        LBG.showMeOrientation.loadedStubs
                                            .push(
                                                current_journey
                                            );
                                        LBG.showMeOrientation.invokeJourneyFromKey(
                                            current_journey
                                        );
                                    });
                            } else {
                                LBG.showMeOrientation.invokeJourneyFromKey(
                                    current_journey);
                            }
                        });
                } else {
                    if ($.inArray(current_journey, LBG.showMeOrientation
                        .loadedStubs) === -1) {
                        existing_content = $(
                            ".showMeContainer #showMeOrientation .textContent"
                        ).html();
                        $(
                            ".showMeContainer #showMeOrientation .textContent"
                        ).load(DI.showme.stubFileLocation +
                            "showme_" + current_journey + DI.showme
                            .stubFileExtension, function() {
                                $(
                                    ".showMeContainer #showMeOrientation .textContent"
                                ).prepend(existing_content);
                                $(
                                    ".showMeContainer #showMeOrientation .textContent > div"
                                ).css("display", "none");
                                LBG.showMeOrientation.loadedStubs.push(
                                    current_journey);
                                LBG.showMeOrientation.invokeJourneyFromKey(
                                    current_journey);
                            });
                    } else {
                        LBG.showMeOrientation.invokeJourneyFromKey(
                            current_journey);
                    }
                }
            } else {
                if (nudge !== false) {
                    if (LBG.showMeOrientation.frameIsInjected === false) {
                        $(".showMeContainer").load(DI.showme.stubFileLocation +
                            DI.showme.coreStubFile + DI.showme.stubFileExtension,
                            function() {
                                LBG.showMeOrientation.frameIsInjected =
                                    true;
                                existing_content = $(
                                    ".showMeContainer #showMeOrientation .textContent"
                                ).html();
                                if ($.inArray(nudge, LBG.showMeOrientation
                                    .loadedStubs) === -1) {
                                    $(
                                        ".showMeContainer #showMeOrientation .textContent"
                                    ).load(DI.showme.stubFileLocation +
                                        "showme_" + nudge + DI.showme
                                        .stubFileExtension,
                                        function() {
                                            $(
                                                ".showMeContainer #showMeOrientation .textContent"
                                            ).prepend(
                                                existing_content
                                            );
                                            $(
                                                ".showMeContainer #showMeOrientation .textContent > div"
                                            ).css("display",
                                                "none");
                                            LBG.showMeOrientation
                                                .loadedStubs.push(
                                                    nudge);
                                            LBG.showMeOrientation
                                                .invokeJourneyFromKey(
                                                    nudge);
                                        });
                                } else {
                                    LBG.showMeOrientation.invokeJourneyFromKey(
                                        nudge);
                                }
                            });
                    } else {
                        existing_content = $(
                            ".showMeContainer #showMeOrientation .textContent"
                        ).html();
                        if ($.inArray(nudge, LBG.showMeOrientation.loadedStubs) ===
                            -1) {
                            $(
                                ".showMeContainer #showMeOrientation .textContent"
                            ).load(DI.showme.stubFileLocation +
                                "showme_" + nudge + DI.showme.stubFileExtension,
                                function() {
                                    $(
                                        ".showMeContainer #showMeOrientation .textContent"
                                    ).prepend(existing_content);
                                    $(
                                        ".showMeContainer #showMeOrientation .textContent > div"
                                    ).css("display", "none");
                                    LBG.showMeOrientation.loadedStubs
                                        .push(nudge);
                                    LBG.showMeOrientation.invokeJourneyFromKey(
                                        nudge);
                                });
                        } else {
                            LBG.showMeOrientation.invokeJourneyFromKey(
                                nudge);
                        }
                    }
                } else {
                    $("#showMeOrientation").css("display", "none");
                    $("#showMeMask").removeClass("show");
                }
            }
            $("a.close").live("click", function(e) {
                e.preventDefault();
                LBG.showMeOrientation.thisSlideNumber = 0;
                LBG.showMeOrientation.isWelcomeMessage = false;
                LBG.showMeOrientation.removeCookie(LBG.showMeOrientation
                    .journeyCookieName);
                LBG.showMeOrientation.collapseToShowMe();
                LBG.showMeOrientation.web_trends("close");
            });
            $("a.goNext").live("click", function(e) {
                e.preventDefault();
                LBG.showMeOrientation.thisSlideNumber++;
                var thisAnchor = LBG.showMeOrientation.bubblesToShow[
                    LBG.showMeOrientation.thisSlideNumber];
                var $currentStepNum = $("ul.steps li.current");
                var $nextStepNum = $("ul.steps li.current").next();
                $currentStepNum.removeClass("current");
                $nextStepNum.addClass("current");
                if (LBG.showMeOrientation.thisSlideNumber === (
                    LBG.showMeOrientation.bubblesToShow.length +
                    2)) {
                    LBG.showMeOrientation.thisSlideNumber = 0;
                    $(".restart").removeClass("restart");
                    LBG.showMeOrientation.removeCookie(LBG.showMeOrientation
                        .journeyCookieName);
                    LBG.showMeOrientation.collapseToShowMe();
                } else {
                    LBG.showMeOrientation.match_anchors_to_functions(
                        thisAnchor);
                }
            });
            $("a.goPrev").live("click", function(e) {
                e.preventDefault();
                LBG.showMeOrientation.thisSlideNumber--;
                var thisAnchor = LBG.showMeOrientation.bubblesToShow[
                    LBG.showMeOrientation.thisSlideNumber];
                var $totalSteps = $("ul.steps li").length;
                var $currentStepNum = $("ul.steps li.current");
                var $prevStepNum = $("ul.steps li.current").prev();
                $currentStepNum.removeClass("current");
                $prevStepNum.addClass("current");
                if (LBG.showMeOrientation.thisSlideNumber === -
                    1) {
                    $("#showMeMask").removeClass("show");
                    LBG.showMeOrientation.thisSlideNumber = 0;
                    LBG.showMeOrientation.removeCookie(LBG.showMeOrientation
                        .journeyCookieName);
                    LBG.showMeOrientation.collapseToShowMe();
                } else {
                    if ($(this).hasClass("restart")) {
                        LBG.showMeOrientation.welcomeSlide();
                    } else {
                        LBG.showMeOrientation.match_anchors_to_functions(
                            thisAnchor);
                    }
                }
            });
            $("#showMeOrientation .showMeSupport a").live("click",
                function(e) {
                    e.preventDefault();
                    var $cligged = $(this);
                    if (LBG.showMeOrientation.frameIsInjected ===
                        false) {
                        $(".showMeContainer").load(DI.showme.stubFileLocation +
                            DI.showme.coreStubFile + DI.showme.stubFileExtension,
                            function() {
                                LBG.showMeOrientation.frameIsInjected =
                                    true;
                                LBG.showMeOrientation.showMeSupportClicks(
                                    $cligged);
                            });
                    } else {
                        LBG.showMeOrientation.showMeSupportClicks(
                            $cligged);
                    }
                });
            $("a.showMeSupportLinkShowMeAnchor").live("click", function(
                e) {
                e.preventDefault();
                LBG.showMeOrientation.thisSlideNumber = 0;
                LBG.showMeOrientation.isWelcomeMessage = false;
                var node = e ? $(e.target) : $(window.event.srcElement);
                var metadata = node.metadata();
                var nodename = node.nodeName;
                var pointer = "right";
                if (metadata.hasOwnProperty("pointer")) {
                    pointer = metadata.pointer;
                }
                var topPositionOffset = 0;
                if (metadata.hasOwnProperty("topPositionOffset")) {
                    topPositionOffset = metadata.topPositionOffset;
                }
                var leftPositionOffset = 0;
                if (metadata.hasOwnProperty(
                    "leftPositionOffset")) {
                    leftPositionOffset = metadata.leftPositionOffset;
                }
                var existing_contents = "";
                if (LBG.showMeOrientation.frameIsInjected ===
                    false) {
                    $(".showMeContainer").load(DI.showme.stubFileLocation +
                        DI.showme.coreStubFile + DI.showme.stubFileExtension,
                        function() {
                            LBG.showMeOrientation.frameIsInjected =
                                true;
                            existing_contents = $(
                                ".showMeContainer #showMeOrientation .textContent"
                            ).html();
                            if ($.inArray(DI.showme.menuStubFile,
                                LBG.showMeOrientation.loadedStubs
                            ) === -1) {
                                $(
                                    ".showMeContainer #showMeOrientation .textContent"
                                ).load(DI.showme.menuStubFile,
                                    function() {
                                        $(
                                            "#showMeOrientation .bubbleControls"
                                        ).css(
                                            "display",
                                            "none");
                                        $(
                                            ".showMeContainer #showMeOrientation .textContent"
                                        ).prepend(
                                            existing_contents
                                        );
                                        $(
                                            ".showMeContainer #showMeOrientation .textContent > div"
                                        ).css(
                                            "display",
                                            "none");
                                        LBG.showMeOrientation
                                            .loadedStubs
                                            .push(DI.showme
                                                .menuStubFile
                                            );
                                        LBG.showMeOrientation
                                            .showBubble(
                                                "showMeSupport",
                                                "showMeSupportLinkShowMeAnchor",
                                                pointer,
                                                topPositionOffset,
                                                leftPositionOffset
                                            );
                                    });
                            } else {
                                $(
                                    "#showMeOrientation .bubbleControls"
                                ).css("display", "none");
                                LBG.showMeOrientation.showBubble(
                                    "showMeSupport",
                                    "showMeSupportLinkShowMeAnchor",
                                    pointer,
                                    topPositionOffset,
                                    leftPositionOffset);
                            }
                        });
                } else {
                    existing_contents = $(
                        ".showMeContainer #showMeOrientation .textContent"
                    ).html();
                    if ($.inArray(DI.showme.menuStubFile, LBG.showMeOrientation
                        .loadedStubs) === -1) {
                        $(
                            ".showMeContainer #showMeOrientation .textContent"
                        ).load(DI.showme.menuStubFile,
                            function() {
                                $(
                                    "#showMeOrientation .bubbleControls"
                                ).css("display", "none");
                                $(
                                    ".showMeContainer #showMeOrientation .textContent"
                                ).prepend(
                                    existing_contents);
                                $(
                                    ".showMeContainer #showMeOrientation .textContent > div"
                                ).css("display", "none");
                                LBG.showMeOrientation.loadedStubs
                                    .push(DI.showme.menuStubFile);
                                LBG.showMeOrientation.showBubble(
                                    "showMeSupport",
                                    "showMeSupportLinkShowMeAnchor",
                                    pointer,
                                    topPositionOffset,
                                    leftPositionOffset);
                            });
                    } else {
                        $("#showMeOrientation .bubbleControls")
                            .css("display", "none");
                        LBG.showMeOrientation.showBubble(
                            "showMeSupport",
                            "showMeSupportLinkShowMeAnchor",
                            pointer, topPositionOffset,
                            leftPositionOffset);
                    }
                }
                LBG.showMeOrientation.hide_all_bubble_arrows();
                $("#showMeOrientation img.pointRight").css(
                    "display", "block");
                $(".showMeSupport ul li").focus();
                LBG.showMeOrientation.web_trends("show_me_menu");
            });
            document.onmousedown = function(evt) {
                var $clicked_thing = evt ? $(evt.target) : $(window
                    .event.srcElement);
                var cookie_running = LBG.showMeOrientation.getCookie(
                    LBG.showMeOrientation.journeyCookieName);
                if ($clicked_thing.hasClass("backToAccountsAnchor")) {
                    var sameJourney = LBG.showMeOrientation.isCurrentJourneyInTheShowMeMetadata();
                    if (sameJourney === true) {
                        var current_journey = LBG.showMeOrientation
                            .getCookie(LBG.showMeOrientation.journeyCookieName);
                        var metadata = $(".showMeContainer").metadata();
                        var journey_arrays = metadata.journeyKeys.split(
                            ";");
                        var i;
                        var classes;
                        var classCount = 0;
                        var killCookie = true;
                        for (i = 0; i < journey_arrays.length; i++) {
                            var kee = journey_arrays[i].split(":");
                            if (kee[0] === current_journey) {
                                classes = kee[1].split(",");
                                for (var j = 0; j < classes.length; j++) {
                                    var currentClass = "." +
                                        classes[j];
                                    classCount += $(currentClass).length;
                                }
                            }
                        }
                        if (classCount === 0) {
                            killCookie = false;
                        }
                        if (killCookie) {
                            LBG.showMeOrientation.collapseToShowMe();
                            LBG.showMeOrientation.removeCookie(LBG.showMeOrientation
                                .journeyCookieName);
                        } else {
                            killCookie = true;
                            LBG.showMeOrientation.collapseToShowMe();
                        }
                    }
                } else {
                    if (($clicked_thing.hasClass(cookie_running)) ||
                        ($clicked_thing.parents("a").hasClass(
                            cookie_running))) {} else {
                        if ($clicked_thing.parents(
                            ".showMeContainer").length > 0) {} else {
                            if (($clicked_thing.hasClass(
                                "showMeSupportLinkShowMeAnchor"
                            )) || ($clicked_thing.parents("a").hasClass(
                                "showMeSupportLinkShowMeAnchor"
                            ))) {} else {
                                if (($clicked_thing.parents().hasClass(
                                    "retainCookieSetup"))) {
                                    if ($("#showMeOrientation").is(
                                        ":visible")) {
                                        LBG.showMeOrientation.collapseToShowMe();
                                    }
                                } else {
                                    var tagType = $clicked_thing.attr(
                                        "tagName");
                                    var parentType = $clicked_thing
                                        .parent().attr("tagName");
                                    var exceptions = ["A"];
                                    if (($.inArray(tagType,
                                            exceptions) !== -1) ||
                                        ($.inArray(parentType,
                                            exceptions) !== -1)) {
                                        LBG.showMeOrientation.removeCookie(
                                            LBG.showMeOrientation
                                            .journeyCookieName);
                                        LBG.showMeOrientation.thisSlideNumber =
                                            0;
                                        if ($("#showMeOrientation")
                                            .is(":visible")) {
                                            LBG.showMeOrientation.collapseToShowMe();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
        } else {
            LBG.showMeOrientation.removeCookie(LBG.showMeOrientation.journeyCookieName);
        }
    }
};
LBG.iadaUtilities = {
    parameters: {
        ajaxUserNameCheckSelector: "input[class*=ajaxUserNameCheck]:first",
        focusOnSuccess: "#passwordField"
    },
    addAnimation: function() {
        var $loaderAnimation = $("<div/>").append(
            "<span class='loading' />&nbsp;" + DI.lang.ajaxLoader.waitMessage
        );
        $("input[class*=ajaxUserNameCheck]:first").after(
            $loaderAnimation);
    },
    removeAnimation: function() {
        $("span.loading").parent("div").remove();
    },
    ajaxUserNameCheck: function() {
        var $ajaxUserNameCheck = $(LBG.iadaUtilities.parameters.ajaxUserNameCheckSelector);
        if ($ajaxUserNameCheck.parents(".error").length) {
            return false;
        }
        var classSelector = $ajaxUserNameCheck.attr("class").split(" ");
        jsonURLSelector = "url";
        var v = classSelector;
        for (var i = 0; i < v.length; i++) {
            var test = v[i].search(/ajaxUserNameCheck/);
            if (test) {
                classSelector.splice(i, 1);
                classSelector = classSelector[0].replace(
                    "ajaxUserNameCheck", "url");
            }
        }
        LBG.iadaUtilities.removeSuggestions();
        var jsonURL = DI.iada.userName[classSelector] + "?userName=" +
            $ajaxUserNameCheck.val() + "&_" + new Date().getTime();
        LBG.iadaUtilities.addAnimation();
        $.getJSON(jsonURL, function(data) {
            LBG.iadaUtilities.removeAnimation();
            if (data.userName.length > 0) {
                var $suggestionsText = $(
                        "<p class='userNameSuggestions note informational'/>"
                    ),
                    $suggestions = $(
                        "<ul class='userNameSuggestionsList note informational' />"
                    );
                if ($ajaxUserNameCheck.next().hasClass("note")) {
                    $ajaxUserNameCheck.next().css("display",
                        "none");
                }
                $(data.userName).each(function(index) {
                    var $li = $(
                        '<li><a href="#"></a></li>'
                    );
                    $("a", $li).text(data.userName[
                        index]);
                    $suggestions.append($li);
                });
                $suggestionsText.append(data.displayText);
                $("input[class*=ajaxUserNameCheck]:first").after(
                    $suggestionsText);
                $(".userNameSuggestions:first").after(
                    $suggestions);
                var h = $(".userNameSuggestionsList").height();
                $(".userNameSuggestionsList").css("height", h);
            } else {
                return true;
            }
        });
    },
    removeSuggestions: function() {
        $(".userNameSuggestions, .userNameSuggestionsList").remove();
        $(".iada p:hidden").css("display", "block");
    },
    deleteFormContent: function() {
        LBG.iadaUtilities.removeSuggestions();
        $(this).val("");
    },
    listeners: function() {
        $("input[class*=ajaxUserNameCheck]").blur(this.ajaxUserNameCheck);
        $("input[class*=ajaxUserNameCheck]").focus(function() {
            LBG.iadaUtilities.removeSuggestions();
            $(this).val("");
        });
        $(".userNameSuggestionsList a").live("click", function(e) {
            e.preventDefault();
            $(this).find(":hidden").css("display", "block");
            var $this = $(e.target);
            $("input[class*=ajaxUserNameCheck]:first").val(
                $this.text());
            LBG.iadaUtilities.removeSuggestions();
            $(this).val("");
            if (LBG.iadaUtilities.parameters.focusOnSuccess) {
                $(LBG.iadaUtilities.parameters.focusOnSuccess).focus();
            }
            return false;
        });
        $('.iada input[name="applyForISA"]').click(function() {
            if ($(this).val() === "yes") {
                $(".conditionalFields").show("slow");
            } else {
                $(".conditionalFields").hide("slow");
            }
        });
    },
    init: function() {
        this.listeners();
    }
};
LBG.selectReference = (function(initSelector, textSelector, dropDownSelector) {
    var setup = function($formField) {
        $(dropDownSelector, $formField).change(function() {
            var $input = $(this).parents(initSelector).parent()
                .find(textSelector),
                $option = $("option:selected", this),
                metadata = $option.metadata(),
                $refhelp = $(this).parents(initSelector).nextAll(
                    ".showHide").eq(0);
            if (typeof metadata === "undefined" || !$input.length) {
                return;
            }
            if ($option.attr("disabled")) {
                metadata.reference = "";
            }
            $input.val(metadata.reference);
            if (metadata.reference) {
                $refhelp.show();
            } else {
                $refhelp.hide();
                $input.removeAttr("disabled", "disabled").removeClass(
                    "isDisabled");
            } if (metadata.hide) {
                $(metadata.hide).hide();
            }
        });
    };
    return {
        init: function() {
            $(initSelector).each(function() {
                setup($(this));
                $(dropDownSelector, this).trigger("change");
            });
        }
    };
});
LBG.beneficaryReference = (function() {
    return LBG.selectReference(".formField.beneficaryReference",
        ".formField.beneficaryReferenceLinkedTextField input:text",
        "select.existingPayee");
})();
LBG.isaTopUpReference = (function() {
    return LBG.selectReference(".formField.isaTopUpReference",
        "div.dcfModule", "select.isaTopUpAccount");
})();
LBG.multichannel = {
    selectChipAndPinValue: function() {
        var selectedVal = $(
            'fieldset.multichannel input[type="radio"]:checked').val();
        if ($(
            'fieldset.multichannel input[name$="confirmCheckboxTelephony"]'
        ).size() != 0) {
            $(
                'fieldset.multichannel input[name$="confirmCheckboxTelephony"]'
            ).attr("checked", false);
        }
        if (selectedVal === "available") {
            $("fieldset.multichannel .chipAndPinAvailableInfo").show();
            $("fieldset.multichannel .chipAndPinUnavailableInfo").hide();
            $("fieldset.multichannel .chipAndPinSelected").val(
                "available");
        } else {
            $("fieldset.multichannel .chipAndPinUnavailableInfo").show();
            $("fieldset.multichannel .chipAndPinAvailableInfo").hide();
            $(
                'fieldset.multichannel .chipAndPinUnavailableInfo input[type="checkbox"]'
            ).attr("checked", false);
            $("fieldset.multichannel .chipAndPinSelected").val(
                "unavailable");
        }
    },
    selectReasonForWaiver: function() {
        if ($(".content dl.summary .descriptionGroup").find(":checkbox")
            .attr("checked") === true) {
            $(".content dl.summary .descriptionGroup select").attr(
                "disabled", false);
        } else {
            $(".content dl.summary .descriptionGroup select").attr(
                "disabled", true);
            $(".content fieldset.select_account select").attr(
                "disabled", false);
        }
        var totalCostVal = $(".content dl.summary .descriptionGroup em")
            .text();
        $(".content dl.summary .descriptionGroup").find(":checkbox").click(
            function() {
                if ($(this).attr("checked") === true) {
                    $(
                        ".content dl.summary .descriptionGroup select"
                    ).attr("disabled", false);
                } else {
                    $(
                        ".content dl.summary .descriptionGroup select"
                    ).attr("disabled", true);
                    $(
                        ".content dl.summary .descriptionGroup select"
                    ).val("-");
                    $(".content dl.summary .descriptionGroup em").text(
                        totalCostVal);
                    $(".content fieldset.select_account select").attr(
                        "disabled", false);
                }
            });
    },
    updateTotalCosts: function() {
        var totalCostVal = $(".content dl.summary .descriptionGroup em")
            .text();
        $(".content dl.summary .descriptionGroup select").change(
            function() {
                if ($(this).val() != "-") {
                    $(".content dl.summary .descriptionGroup em").text(
                        "£0");
                    $(".content fieldset.select_account select").attr(
                        "disabled", "true");
                } else {
                    $(".content dl.summary .descriptionGroup em").text(
                        totalCostVal);
                    $(".content fieldset.select_account select").attr(
                        "disabled", false);
                }
            });
    },
    showReasonText: function() {
        $(".content .manageAuthPassword,.content .manageAuthDomain").hide();
        $(
            ".content p.manageAuthReasonLabel,.content .manageAuthReasonText"
        ).hide();
        if ($(".content .manageAuthReasonText").siblings(".error").length >
            0) {
            $(".content .manageAuthReasonText").siblings(".error").remove();
        }
        if ($(".content .manageAuthReasonText").parent().parent().hasClass(
            ".error") === true) {
            $(".content .manageAuthReasonText").parent().parent().removeClass(
                "error");
        }
        var selectedRadioval = $(
            ".content .formField.stackedField .radioGroup.managerAuthGroup"
        ).find(":radio:checked").val();
        if (selectedRadioval === "1") {
            $(
                ".content p.manageAuthReasonLabel, .content .manageAuthReasonText"
            ).hide();
        } else {
            $(
                ".content p.manageAuthReasonLabel, .content .manageAuthReasonText"
            ).show();
        }
        $(
            ".content .formField.stackedField .radioGroup.managerAuthGroup"
        ).find(":radio").click(function() {
            if ($(this).val() === "2") {
                $(
                    ".content p.manageAuthReasonLabel, .content .manageAuthReasonText"
                ).show();
                $(".content .manageAuthPassword").show();
                $(".content .manageAuthDomain").show();
                $(".content .manageAuthPasswordRequired").hide();
                $(".content .manageAuthDomainRequired").hide();
            } else {
                if ($(".content .manageAuthReasonText").siblings(
                    ".error").length > 0) {
                    $(".content .manageAuthReasonText").siblings(
                        ".error").remove();
                }
                if ($(".content .manageAuthReasonText").parent()
                    .parent().hasClass(".error") === true) {
                    $(".content .manageAuthReasonText").parent()
                        .parent().removeClass("error");
                }
                $(
                    ".content p.manageAuthReasonLabel, .content .manageAuthReasonText"
                ).hide();
                $(".content .manageAuthPassword").hide();
                $(".content .manageAuthDomain").hide();
                $(".content .manageAuthPasswordRequired").show();
                $(".content .manageAuthDomainRequired").show();
            }
        });
    },
    init: function() {
        LBG.multichannel.selectChipAndPinValue();
        LBG.multichannel.selectReasonForWaiver();
        LBG.multichannel.updateTotalCosts();
        LBG.multichannel.showReasonText();
        $('fieldset.multichannel input[type="radio"]').click(function() {
            LBG.multichannel.selectChipAndPinValue();
        });
        $("fieldset.multichannel #initiateChipAndPin").click(function(
            event) {
            event.preventDefault();
            event.stopPropagation();
            try {
                var AGCI = new ActiveXObject(
                    "AGCI.functionCall");
            } catch (e) {}
            var temp = [],
                alias = "PEDIDV",
                data = "<root><data>PEDIDV</data></root>";
            if (AGCI) {
                var responseObject = AGCI.doFunction(alias,
                    data, temp);
                if (responseObject) {
                    $(
                        "fieldset.multichannel #chipAndPinRespPBS"
                    ).val(responseObject);
                }
            }
        });
    }
};
LBG.fatcaNationality = (function() {
    var initSelector = "fieldset.fatcaNationality .nationalityContext",
        legacyInitSelector = "fieldset.fatcaNationality",
        addSelector = "div.addNationality",
        nationalitySelector = "div.formField.nationality";
    var checkLimit = function($wrapper) {
        var $formFields = $wrapper.find(nationalitySelector),
            $addWrapper = $wrapper.find(addSelector);
        if ($formFields.filter(":visible").length !== $formFields.length) {
            $addWrapper.show();
        } else {
            $addWrapper.hide();
        }
    };
    var updateLabel = function($formField) {
        $formField.find("label").each(function() {
            var meta = $(this).metadata();
            if (typeof meta.altLabel === "string") {
                $(this).html(meta.altLabel);
            }
        });
    };
    var setup = function($wrapper) {
        var $formFields = $wrapper.find(nationalitySelector),
            $addWrapper = $wrapper.find(addSelector),
            $selects = $formFields.find("select"),
            $sudoButtons = $formFields.find("ul.sudoButtons");
        $formFields.each(function(i) {
            var $select = $(this).find("select");
            var threshold = 1;
            if ($wrapper.hasClass("taxResidencies")) {
                threshold--;
            }
            $select.data("options", $select.find("option"));
            updateLabel($(this));
            if ($select.val() === "-" && i > threshold) {
                $(this).hide();
            }
        });
        $selects.each(function() {
            var formField = $(this).parents(".formField");
            $(this).change(function() {
                var vals = $selects.map(function() {
                    return $.trim($(this).val());
                });
                if ("-" !== $.trim($(this).val())) {
                    formField.removeClass("error").find(
                        "span.error").remove();
                }
                $selects.each(function() {
                    $("span", this).each(
                        function() {
                            if (-1 ===
                                $.inArray(
                                    $.trim(
                                        $(
                                            this
                                        )
                                        .attr(
                                            "data-val"
                                        )
                                    ),
                                    vals
                                )) {
                                var
                                    option =
                                    $(
                                        "<option/>"
                                    ).val(
                                        $(
                                            this
                                        )
                                        .attr(
                                            "data-val"
                                        )
                                    ).text(
                                        $(
                                            this
                                        )
                                        .text()
                                    );
                                $(this)
                                    .before(
                                        option
                                    ).remove();
                            }
                        });
                    var pIndex = this.selectedIndex;
                    $("option", this).filter(
                        function() {
                            if (pIndex ==
                                this.index
                            ) {
                                return
                                    false;
                            }
                            var myval =
                                $.trim(
                                    this
                                    .value
                                );
                            return -1 !==
                                $.inArray(
                                    myval,
                                    vals
                                ) &&
                                "-" !==
                                myval;
                        }).each(
                        function() {
                            var clone =
                                $(
                                    "<span/>"
                                ).attr(
                                    "data-val",
                                    $(
                                        this
                                    ).val()
                                ).text(
                                    $(
                                        this
                                    ).text()
                                );
                            $(this).before(
                                clone
                            ).remove();
                        });
                });
            });
        });
        setTimeout(function() {
            $selects.change();
        }, 0);
        $sudoButtons.find("input").click(function(e) {
            var ctx = $(this).parents(legacyInitSelector);
            var idx = $("input.pseudoLink", ctx).index(this);
            var me = ctx.find(nationalitySelector).eq(idx +
                (ctx.is(".taxResidencies") ? 0 : 1));
            if (me.nextAll(nationalitySelector + ":visible")
                .length < 1) {
                $("option:selected", this).removeAttr(
                    "selected");
                ctx.find(nationalitySelector).eq(1).hide();
            }
            me.nextAll(nationalitySelector + ":visible").each(
                function() {
                    var next = $(this).next(
                        nationalitySelector +
                        ":visible");
                    if (next.length > 0 && next.is(
                        ":visible")) {
                        var opt = document.createElement(
                            "option");
                        opt.value = $("select", next).val();
                        opt.text = $("select", next).find(
                            "option:selected").text();
                        var optindex = $("select", next)
                            .find("option:selected")[0]
                            .index;
                        $("select", this)[0].add(opt);
                        $("select", this).val(opt.value);
                        $("select", this).html($(
                            "select option",
                            this).sort(function(
                            a, b) {
                            return a.text ==
                                b.text ? 0 :
                                a.text < b.text ?
                                -1 : 1;
                        }));
                    } else {
                        $("option:selected", this).removeAttr(
                            "selected");
                        $(this).hide();
                    }
                });
            $(nationalitySelector + " select:not(:visible)",
                ctx).val("-").change();
            checkLimit($wrapper);
            e.preventDefault();
        });
        checkLimit($wrapper);
        $addWrapper.find("a").click(function(e) {
            e.preventDefault();
            var $visible = $formFields.filter(":visible");
            var index = $formFields.index($visible[$visible
                .length - 1]);
            var validationHandler;
            var fieldInvalid = false;
            var blnRequiredValidationAddedDynamically =
                false;
            $visible.each(function(i) {
                var $current = $($visible[i]);
                if ($current.find(
                        "select option:selected").val() ===
                    "-") {
                    validationHandler = LBG.Forms.Validation
                        .Tools.getFieldHandler(
                            $current);
                    if (!validationHandler.validationRoutines
                        .required) {
                        blnRequiredValidationAddedDynamically
                            = true;
                        validationHandler.validationRoutines
                            .push("required");
                        validationHandler.validationRoutines
                            .required = {
                                msg: "validateSelect"
                            };
                    }
                    validationHandler.validate();
                    if (
                        blnRequiredValidationAddedDynamically
                    ) {
                        delete validationHandler.validationRoutines
                            .required;
                        validationHandler.validationRoutines
                            .splice($.inArray(
                                "required",
                                validationHandler
                                .validationRoutines
                            ), 1);
                    }
                    fieldInvalid = true;
                }
            });
            if (fieldInvalid) {
                return false;
            }
            $formFields.eq(index + 1).find(
                'option[value="-"]').attr("selected",
                "selected");
            $formFields.eq(index + 1).show();
            checkLimit($wrapper);
        });
    };
    return {
        init: function() {
            $initElements = $(initSelector);
            if (!$initElements.length) {
                $initElements = $(legacyInitSelector);
            }
            $initElements.each(function() {
                setup($(this));
            });
        }
    };
})();
LBG.appointmentBookings = {
    init: function() {
        if ($(".appointment-booker").length > 0) {
            LBG.appointmentBookings.page_load_setup();
            $(".appointment-booker tbody th a").click(function(e) {
                e.preventDefault();
                if ($(this).hasClass("closed")) {
                    $(this).removeClass("closed");
                    $(this).parents("tr").find("td span").slideDown(
                        "slow");
                } else {
                    $(this).addClass("closed");
                    $(this).parents("tr").find("td span").slideUp(
                        "slow");
                }
            });
            $(".appointment-booker tbody td a").click(function(e) {
                e.preventDefault();
                $(".appointment-booker tbody td a").removeClass(
                    "selected");
                $(this).addClass("selected");
                $(this).parents(".appointment-booker tr td").find(
                    "input[type=radio]").attr("checked",
                    "checked");
                target_val = $(this).attr("href").substr(1);
                $(".appointment_booger_radio_conglomerate").val(
                    target_val);
            });
        }
    },
    page_load_setup: function() {
        if ($(".appointment-booker tbody tr th a").length > 0) {
            $(".appointment-booker tbody tr td").wrapInner("<span />");
            $(".appointment-booker tbody tr td span").hide();
            $(".appointment-booker tbody tr").eq(0).find("td span").show();
            $(".appointment-booker tbody tr th a").addClass("closed");
            $(".appointment-booker tbody tr").eq(0).find("th a").removeClass(
                "closed");
        }
        $(".appointment-booker tbody tr td label").each(function() {
            var labeltxt = $(this).html();
            var is_radio_selected = $(this).parents("td").find(
                "input[type=radio]").is(":checked");
            if (is_radio_selected) {
                $('<a href="#" class="selected">' + labeltxt +
                    "</a>").insertBefore(this);
            } else {
                $('<a href="#">' + labeltxt + "</a>").insertBefore(
                    this);
            }
        });
        $(".appointment-booker tbody tr td input:radio").hide();
        $(".appointment-booker tbody tr td label").hide();
    }
}, LBG.oabShowHidePropertyBox = {
    init: function() {
        if ($(".oabPropertyField").length > 0) {
            LBG.oabShowHidePropertyBox.show_hide_property_box();
            $(".oabMoneyField select").change(function() {
                LBG.oabShowHidePropertyBox.show_hide_property_box();
            });
        }
    },
    show_hide_property_box: function() {
        if ($(".oabMoneyField select option:selected").hasClass(
            "showPropertyBox")) {
            $(".oabPropertyField").show();
        } else {
            $(".oabPropertyField").hide();
        }
    }
}, LBG.oabShowHideEmailPhoneReminderBoxes = {
    init: function() {
        LBG.oabShowHideEmailPhoneReminderBoxes.showhide_email();
        $(".oab .formField.oabEmailReminder input").blur(function() {
            LBG.oabShowHideEmailPhoneReminderBoxes.showhide_email();
        });
        LBG.oabShowHideEmailPhoneReminderBoxes.showhide_sms();
        $(".oab .formField.oabSMSReminder input").blur(function() {
            LBG.oabShowHideEmailPhoneReminderBoxes.showhide_sms();
        });
    },
    showhide_email: function() {
        var emailReminderField = $(
            ".oab .formField.oabEmailReminder input").val();
        if (($.trim(emailReminderField).length > 0) && (!$(
            ".oab .formField.oabEmailReminder").hasClass(
            "error"))) {
            $(".oab .linkedTooabEmailReminder").show();
        } else {
            $(".oab .linkedTooabEmailReminder input:checkbox").attr(
                "checked", false);
            $(".oab .linkedTooabEmailReminder").hide();
        }
    },
    showhide_sms: function() {
        var phoneReminderField = $(
            ".oab .formField.oabSMSReminder input").val();
        if (($.trim(phoneReminderField).length > 0) && (!$(
                ".oab .formField.oabSMSReminder").hasClass("error")) &&
            (LBG.oabShowHideEmailPhoneReminderBoxes.is_mobile_number(
                phoneReminderField) === true)) {
            $(".oab .linkedTooabSMSReminder").show();
        } else {
            $(".oab .linkedTooabSMSReminder input:checkbox").attr(
                "checked", false);
            $(".oab .linkedTooabSMSReminder").hide();
        }
    },
    is_mobile_number: function(phone_number) {
        var mob = false;
        if (phone_number.substring(0, 2) == "07") {
            mob = true;
        }
        if (phone_number.substring(0, 3) == "447") {
            mob = true;
        }
        return mob;
    }
}, LBG.oabSearchSelectBranchBoxes = {
    init: function() {
        var searchBranchBox = $(
            ".selectBranch .colPart:eq(0) .subPanel");
        var selectedBranchBox = $(
            ".findBranch .colPart:eq(1) .subPanel");
        if (searchBranchBox.height() > selectedBranchBox.height()) {
            selectedBranchBox.height(searchBranchBox.height());
        } else {
            searchBranchBox.height(selectedBranchBox.height());
        }
    }
}, LBG.vefTable = {
    z_index_fixed: false,
    init: function() {
        if ($(".ajax_loaded_vef_debit_transactions_table").length > 0) {
            $(".vef-get-content a").click(function() {
                $(".ajax_loaded_vef_debit_transactions_table").load(
                    DI.vef.transactions + "?_" + new Date()
                    .getTime(), function() {
                        if (typeof dcsMultiTrack !=
                            "undefined") {
                            dcsMultiTrack("WT.ac",
                                "modules/m342/properties.pm342lnk500c,modules/m342/properties.pm342lnk500a,Pending debit card transactions and uncleared cheques"
                            );
                        }
                        $(".vefTable").each(function(index) {
                            var $thisVefTable = $(
                                this);
                            var vefmeta =
                                $thisVefTable.metadata();
                            var onLoadThisManyRows =
                                vefmeta.num_rows_to_load ||
                                10;
                            var vefTableRowCount =
                                $("tbody tr",
                                    $thisVefTable).length;
                            if (vefTableRowCount >
                                onLoadThisManyRows) {
                                $("tbody",
                                    $thisVefTable
                                ).addClass(
                                    "startHidden"
                                ).css("display",
                                    "none");
                                $("thead",
                                    $thisVefTable
                                ).after(
                                    '<tbody class="first"></tbody>'
                                );
                                $("tbody tr",
                                    $thisVefTable
                                ).each(function(
                                    index) {
                                    if (
                                        index <
                                        onLoadThisManyRows
                                    ) {
                                        $(
                                                "tbody.first",
                                                $thisVefTable
                                            )
                                            .append(
                                                $(
                                                    this
                                                )
                                                .clone()
                                            );
                                        $(
                                                this
                                            )
                                            .remove();
                                    }
                                });
                                var numCols = $(
                                    "thead tr th",
                                    $thisVefTable
                                ).length;
                                $(
                                    "tbody.startHidden",
                                    $thisVefTable
                                ).before(
                                    '<tbody><tr><td colspan="' +
                                    numCols +
                                    '" class="first"><a href="#" class="showMoreRows">Show all</a></td></tr></tbody>'
                                );
                                $(
                                    "tbody.startHidden",
                                    $thisVefTable
                                ).after(
                                    '<tbody style="display:none"><tr><td colspan="' +
                                    numCols +
                                    '" class="first"><a href="#" class="hideMoreRows">Hide</a></td></tr></tbody>'
                                );
                            }
                        });
                        $("a.showMoreRows").click(function(
                            e) {
                            e.preventDefault();
                            $(this).parents(
                                ".vefTable").find(
                                "tbody.startHidden"
                            ).toggle();
                            $(this).parents("tbody")
                                .fadeOut("slow");
                            $(this).parents(
                                ".vefTable").find(
                                "a.hideMoreRows"
                            ).parents("tbody").fadeIn(
                                "slow");
                        });
                        $("a.hideMoreRows").click(function(
                            e) {
                            e.preventDefault();
                            $(this).parents(
                                ".vefTable").find(
                                "tbody.startHidden"
                            ).toggle();
                            $(this).parents("tbody")
                                .fadeOut("slow");
                            $(this).parents(
                                ".vefTable").find(
                                "a.showMoreRows"
                            ).parents("tbody").fadeIn(
                                "slow");
                        });
                        LBG.vefTable.bobbers_zindex_fix();
                    });
            });
        }
    },
    bobbers_zindex_fix: function() {
        if (!LBG.vefTable.z_index_fixed && ($.browser.msie && $.browser
            .version < 8)) {
            if ($(".ajax_loaded_vef_debit_transactions_table").length >
                0) {
                $("div.secondary .subPanel .pane").css({
                    "z-index": 1,
                    "position": "static"
                });
            }
        }
    }
}, LBG.travelFlags = {
    init: function() {
        $(".addNewTravelFlagPanel").hide();
        $("form.changeTravelFlag").hide();
        $(".addNewTravelFlagButton").click(function(e) {
            e.preventDefault();
            $(".addNewTravelFlagButton").slideUp("slow");
            $(".addNewTravelFlagPanel").slideDown("slow");
        });
        $(".addNewTravelFlagPanel .cancelTravel").click(function(e) {
            e.preventDefault();
            $(".addNewTravelFlagPanel").slideUp("slow");
            $(".addNewTravelFlagButton").slideDown("slow");
        });
        $(".changeTravelFlagButton").click(function(e) {
            e.preventDefault();
            $(this).parents(".travelFlagPanel").find(
                "form.changeTravelFlag").slideDown();
        });
        $("form.changeTravelFlag .cancelTravel").click(function(e) {
            e.preventDefault();
            $(this).parents("form.changeTravelFlag").slideUp();
        });
    }
}, LBG.jsPrintButton = {
    init: function() {
        $(".jsPrintButton").css("display", "block");
        $(".jsPrintButton").parents("ul.printactions").css("position",
            "static").css("position", "absolute");
    }
}, LBG.loanServicing = {
    init: function() {
        $(".loanServicing .loadHidden").hide();
        if ($(".loanServicing .showHiddenIfChecked").is(":checked")) {
            $(".loanServicing .loadHidden").show();
        }
    }
}, LBG.LinkDropDownToToolTip_Hrefs = {
    init: function() {
        if ($("select.LinkToolTips").length > 0) {
            $("select.LinkToolTips").change(function() {
                LBG.LinkDropDownToToolTip_Hrefs.populateTooltip();
            }).change();
        }
    },
    populateTooltip: function() {
        var dd_meta = $("select.LinkToolTips").metadata();
        var linked_tip_class = dd_meta.tooltipclass;
        var option_meta = $("select.LinkToolTips").find(":selected").metadata();
        var option_tipref = option_meta.tooltip_ref;
        $("." + linked_tip_class).attr("href", "#" + option_tipref);
    }
}, LBG.avaRadioButtons = {
    init: function() {
        $(".avaSuitabilityCheck .avaSuitabilitySectionOne input:radio")
            .each(function() {
                var label = $("label[for=" + '"' + this.id + '"' +
                    "]").text();
                var checked = $(this).attr("checked");
                var radioStatus = checked ? "radio-checked" :
                    "radio";
                var radioButton = $('<a title=" ' + $.trim(label) +
                    ' " class="avaRadioBtn ' + this.name +
                    '" href="#"><span class="' + radioStatus +
                    '"></span></a>');
                radioButton.insertAfter(this);
            });
        $(".avaSuitabilityCheck .avaSuitabilitySectionOne .avaRadioBtn")
            .click(function(e) {
                var $check = $(this).prev("input:radio");
                var unique = "." + this.className.split(" ")[1] +
                    " span";
                unique = unique.replace(/:/g, "\\:");
                $(unique).attr("class", "radio");
                $(this).find("span").attr("class", "radio-checked");
                $check.attr("checked", true);
                if ($(this).parents("tr").hasClass("error")) {
                    $check.trigger("click");
                }
                return false;
            });
        $(
            ".avaSuitabilityCheck .avaSuitabilitySectionOne .disabled .avaRadioBtn"
        ).click(function() {
            $(this).find("span").attr("class", "radio");
            return false;
        });
    }
};
LBG.ajaxPoweredBankFinder = (function() {
    var initSelector = "div.bankFinder",
        isFilterResults = DI.lang.bankFinder.isFilterResults,
        bankNameSpecialChars = LBG.Forms.Validation.Expressions.bankNameSpecialChars,
        bankFinderURL = DI.lang.bankFinder.bankFinderURL,
        dataURL = DI.lang.bankFinder.bankData,
        addressDataURL = DI.lang.bankFinder.bankAddressData,
        loadingData = false,
        ajaxResultsSelector = "div.ajaxPoweredBankFinderResults",
        $elementsForAjaxResponseInjection, resultsTemplateURL = DI.lang
        .bankFinder.bankResults,
        resultsTemplate, bankNoResultsText = DI.lang.bankFinder.bankNoResultsText,
        radioGroupSelector = "div.radioGroup",
        $radioGroupTemplate, resultsArr = [],
        inputTextBoxSelector = "input.bankSearchTxt",
        bankInputDefaultText = DI.lang.bankFinder.bankNameInputText,
        isPagedResults = DI.lang.bankFinder.isPagedResults,
        numSearchItemsToDisplay = DI.lang.bankFinder.numSearchItemsToDisplay,
        numBrowseItemsToDisplay = DI.lang.bankFinder.numBrowseItemsToDisplay,
        numItemsToDisplay, pagingSelector =
        "fieldset ul.paginationSudoButtons",
        previousImgEnabled = DI.lang.bankFinder.previousImgEnabled,
        previousImgDisabled = DI.lang.bankFinder.previousImgDisabled,
        nextImgEnabled = DI.lang.bankFinder.nextImgEnabled,
        nextImgDisabled = DI.lang.bankFinder.nextImgDisabled,
        $previousLink, $nextLink, $tabSearch, $tabBrowse,
        resetBrowseSubTabs = true,
        currentPage = 1,
        numPages = 0,
        tabCache;
    var setup = function($wrapper) {
            $elementsForAjaxResponseInjection = $wrapper.find(
                ajaxResultsSelector);
            if ($elementsForAjaxResponseInjection.length === 0) {
                return false;
            }
            $("li.primaryAction a.submitAction", initSelector).addClass(
                "disabled");
            if ($wrapper.find("div.searchBank").length > 0) {
                var $bankInputBox = $wrapper.find(inputTextBoxSelector);
                $bankInputBox.attr("defaultVal", bankInputDefaultText);
                $bankInputBox.val(bankInputDefaultText);
                $bankInputBox.addClass("bgColor");
                $bankInputBox.focus(function() {
                    bankInputFocusHandler($bankInputBox);
                });
                $bankInputBox.blur(function() {
                    bankInputBlurHandler($bankInputBox);
                });
                $bankInputBox.bind("keyup", function() {
                    if ($bankInputBox.val().length >= 3 &&
                        $bankInputBox.val().substring(0, 3) !==
                        "   ") {
                        $("div.formSubmitError", initSelector).remove();
                        $($bankInputBox).closest("div.error").removeClass(
                            "error").find("span.error").remove();
                        getJsonResults($bankInputBox.val(),
                            null, null, null, null);
                    } else {
                        $(ajaxResultsSelector, initSelector).closest(
                            ".formField").removeClass(
                            "error").find("span.error").remove();
                        $(ajaxResultsSelector, initSelector).empty();
                        $(pagingSelector, initSelector).hide();
                        $("li.primaryAction a.submitAction",
                            initSelector).addClass(
                            "disabled");
                    }
                });
            }
            $.get(resultsTemplateURL, function(data) {
                resultsTemplate = data;
                $radioGroupTemplate = $(resultsTemplate).find(
                    radioGroupSelector);
                if ($wrapper.find("div.browseBank.active").length >
                    0) {
                    setBankBrowseLinks($wrapper);
                }
            }, "html");
            $previousLink = $wrapper.find(pagingSelector).find(
                "li.previous a.pseudoLink");
            $nextLink = $wrapper.find(pagingSelector).find(
                "li.next a.pseudoLink");
            $tabSearch = $("ul.tabs li a.tabSearch", initSelector);
            $tabBrowse = $("ul.tabs li a.tabBrowse", initSelector);
            tabCache = $("ul.subTabs").clone();
            $tabBrowse.live("click", function(e) {
                e.preventDefault();
                $("ul.subTabs").before(tabCache.clone()).remove();
                $(".searchBank").removeClass("active").addClass(
                    "hide");
                $(".browseBank").removeClass("hide").addClass(
                    "active");
                setBankBrowseLinks($wrapper);
            });
            $tabSearch.live("click", function(e) {
                e.preventDefault();
                $(".browseBank").removeClass("active").addClass(
                    "hide");
                $(".searchBank").removeClass("hide").addClass(
                    "active");
                clearForm();
            });
            if (isPagedResults) {
                setPagingLinks();
                if (resultsArr.length === 0) {
                    $wrapper.find(pagingSelector).hide();
                }
            } else {
                $wrapper.find(pagingSelector).hide();
            }
            $(".radioGroup input").live("click", function() {
                var radioSelected = $(
                    ".radioGroup input:checked").length;
                $("li.primaryAction a.submitAction",
                    initSelector).addClass("disabled");
                if (radioSelected > 0) {
                    $("div.formSubmitError", initSelector).remove();
                    $("span.error", initSelector).remove();
                    $("div.formField.error", initSelector).removeClass(
                        "error");
                    $("li.primaryAction a.submitAction",
                        initSelector).removeClass(
                        "disabled");
                }
            });
            $(initSelector + " form").submit(function(e) {
                var radioSelected, radioSelectedValue;
                e.preventDefault();
                radioSelected = $(".radioGroup input:checked").length;
                if (radioSelected > 0) {
                    radioSelectedValue = $(
                        ".radioGroup input:checked").val();
                    processSmartSearchResult(radioSelectedValue);
                } else {
                    return false;
                }
            });
            $(initSelector + " .submitAction").live("click", function(e) {
                var radioSelected, radioSelectedValue;
                if (3 === e.which) {
                    return;
                }
                e.preventDefault();
                radioSelected = $(".radioGroup input:checked").length;
                if (radioSelected > 0) {
                    radioSelectedValue = $(
                        ".radioGroup input:checked").val();
                    processSmartSearchResult(radioSelectedValue);
                } else {
                    return false;
                }
            });
            $(initSelector + " a.searchAgainLink").live("click",
                function(e) {
                    e.preventDefault();
                    $.ajax({
                        type: "GET",
                        url: bankFinderURL,
                        cache: false,
                        data: {
                            searchAgain: "true"
                        }
                    });
                    $(".bankFinderConfirmation", initSelector).addClass(
                        "hide");
                    $(".searchBank", initSelector).removeClass(
                        "hide").addClass("active");
                    clearForm();
                });
            $previousLink.live("click", function(e) {
                if ($previousLink.is(".disabled") || 3 === e.which) {
                    return;
                }
                $("li.primaryAction a.submitAction",
                    initSelector).addClass("disabled");
                e.preventDefault();
                currentPage -= 1;
                displayResults();
                setPagingLinks();
            });
            $nextLink.live("click", function(e) {
                if ($nextLink.is(".disabled") || 3 === e.which) {
                    return;
                }
                $("li.primaryAction a.submitAction",
                    initSelector).addClass("disabled");
                e.preventDefault();
                currentPage += 1;
                displayResults();
                setPagingLinks();
            });
        },
        processSmartSearchResult = function(smartSearchResult) {
            var addressDataURLBase = addressDataURL;
            addressDataURL += "?selectedOption=" + encodeURIComponent(
                smartSearchResult);
            $(".searchBank", initSelector).addClass("hide");
            $(".browseBank", initSelector).addClass("hide");
            $(initSelector + " .isaProviderConfirmation").empty();
            $.ajax({
                type: "GET",
                url: addressDataURL,
                cache: false,
                dataType: "json",
                success: function(data) {
                    var t = buildTemplate(data);
                    $(initSelector +
                        " .isaProviderConfirmation").append(
                        t);
                },
                error: function(data) {
                    $(initSelector +
                        " .isaProviderConfirmation").append(
                        "<h3>An error occurred. Please try again</h3>"
                    );
                }
            });
            addressDataURL = addressDataURLBase;
            $(".bankFinderConfirmation", initSelector).removeClass(
                "hide");
        },
        clearForm = function() {
            $(ajaxResultsSelector, initSelector).empty();
            $("form input", initSelector).each(function() {
                var inputType = $(this).attr("type");
                if (inputType === "text") {
                    $(this).val("");
                } else {
                    if (inputType === "radio") {
                        $(this).attr("checked", false);
                    }
                }
            });
            $("div.formSubmitError", initSelector).remove();
            $("span.error", initSelector).remove();
            $("div.formField.error", initSelector).removeClass("error");
            $(inputTextBoxSelector, initSelector).val(
                bankInputDefaultText).addClass("bgColor");
            $(pagingSelector, initSelector).hide();
            $("li.primaryAction a.submitAction", initSelector).addClass(
                "disabled");
        },
        buildTemplate = function(data) {
            var template = "";
            if (data.bankSunData.length > 0) {
                for (var key in data) {
                    var obj = data[key];
                    for (var prop in obj) {
                        template +=
                            "<h3>Your existing Cash ISA provider</h3>";
                        template += "<p>" + obj[prop].Provider + "</p>";
                        template +=
                            "<h3>Your existing Cash ISA provider's address</h3>";
                        template += "<p>" + obj[prop].Address1 + "<br>";
                        template += obj[prop].hasOwnProperty("Address2") ?
                            obj[prop].Address2 + "<br>" : "";
                        template += obj[prop].hasOwnProperty("Address3") ?
                            obj[prop].Address3 + "<br>" : "";
                        template += obj[prop].hasOwnProperty("Address4") ?
                            obj[prop].Address4 + "<br>" : "";
                        template += obj[prop].PostCode1;
                        template += "</p>";
                    }
                }
            } else {
                template += "<h3>No results found</h3>";
            }
            return template;
        },
        setPagingLinks = function() {
            if (currentPage > 1) {
                $previousLink.children("img").attr("src",
                    previousImgEnabled);
                $previousLink.unbind("click");
                $previousLink.removeClass("disabled");
            } else {
                $previousLink.children("img").attr("src",
                    previousImgDisabled);
                $previousLink.click(function() {
                    return false;
                });
                $previousLink.addClass("disabled");
            } if (currentPage < numPages) {
                $nextLink.children("img").attr("src", nextImgEnabled);
                $nextLink.unbind("click");
                $nextLink.removeClass("disabled");
            } else {
                $nextLink.children("img").attr("src", nextImgDisabled);
                $nextLink.click(function() {
                    return false;
                });
                $nextLink.addClass("disabled");
            }
        };
    bankInputFocusHandler = function($input) {
        if ($input.val() == $input.attr("defaultVal")) {
            $input.val("");
            $input.removeClass("bgColor");
            $input.addClass("fgColor");
        }
    }, bankInputBlurHandler = function($input) {
        if ($input.val() == $input.attr("defaultVal")) {
            $input.val($input.attr("defaultVal"));
            $input.removeClass("fgColor");
            $input.addClass("bgColor");
        }
    }, setBankBrowseLinks = function($wrapper) {
        var $browseBankTabs = $wrapper.find(
            "ul.subTabs span.tabInner");
        if ($browseBankTabs.length > 0) {
            var $currentTab, $currentList, $list;
            var $parent, meta, letters;
            var metaBackup;
            var startLetter = null,
                endLetter = null,
                isBrowseNum = false,
                isBrowseSpecialChar = false;
            $currentTab = $browseBankTabs.find("em");
            if ($currentTab.length !== 0) {
                $parent = $currentTab.parents("span.tabInner");
                meta = $currentTab.metadata();
                if (typeof meta.browseBankAlpha === "string") {
                    letters = meta.browseBankAlpha.split("-");
                    if (letters.length > 0) {
                        startLetter = letters[0];
                        endLetter = letters[letters.length - 1];
                    }
                }
                if (typeof meta.browseBankNum === "boolean") {
                    isBrowseNum = meta.browseBankNum;
                }
                if (typeof meta.browseBankSpecialChars ===
                    "boolean") {
                    isBrowseSpecialChar = meta.browseBankSpecialChars;
                }
                if (typeof meta.browseBankAlpha === "undefined") {
                    letters = $currentTab.html();
                    letters = letters.split("-");
                    startLetter = letters[0];
                    endLetter = letters[letters.length - 1];
                }
                getJsonResults(null, startLetter, endLetter,
                    isBrowseNum, isBrowseSpecialChar);
                isBrowseNum = false;
                isBrowseSpecialChar = false;
            }
            if (resetBrowseSubTabs) {
                resetBrowseSubTabs = false;
                $browseBankTabs.find("a").live("click", function(e) {
                    e.preventDefault();
                    $browseBankTabs = $wrapper.find(
                        "ul.subTabs span.tabInner");
                    $("li.primaryAction a.submitAction",
                        initSelector).addClass(
                        "disabled");
                    $currentTab = $browseBankTabs.find("em");
                    $currentList = $currentTab.parents("li");
                    $list = $(this).parents("li");
                    $parent = $(this).parents(
                        "span.tabInner");
                    meta = $(this).metadata();
                    if (typeof meta.browseBankAlpha ===
                        "string") {
                        letters = meta.browseBankAlpha.split(
                            "-");
                        if (letters.length > 0) {
                            startLetter = letters[0];
                            endLetter = letters[letters.length -
                                1];
                            $currentList.removeClass(
                                "current");
                            $currentList.removeAttr("class");
                            metaBackup = $currentTab.html();
                            metaBackup =
                                "{browseBankAlpha:'" +
                                metaBackup + "'}";
                            if ($currentTab.hasClass(
                                "numbersAndSpecial")) {
                                metaBackup =
                                    "{browseBankAlpha:'" +
                                    $currentTab.html() +
                                    "', browseBankNum:true, browseBankSpecialChars:true} numbersAndSpecial";
                            }
                            $currentTab.replaceWith(
                                '<a href="#" class="' +
                                metaBackup + '">' +
                                $currentTab.html() +
                                "</a>");
                            $list.addClass("current");
                            metaBackup = $(this).metadata();
                            metaBackup = metaBackup.browseBankAlpha;
                            if ($(this).hasClass(
                                "numbersAndSpecial")) {
                                $(this).replaceWith(
                                    "<em class=\"{browseBankAlpha:'" +
                                    metaBackup +
                                    "', browseBankNum:true, browseBankSpecialChars:true} numbersAndSpecial\">" +
                                    metaBackup +
                                    "</em>");
                            } else {
                                $(this).replaceWith("<em>" +
                                    metaBackup +
                                    "</em>");
                            }
                        }
                    }
                    if (typeof meta.browseBankNum ===
                        "boolean") {
                        isBrowseNum = meta.browseBankNum;
                    }
                    if (typeof meta.browseBankSpecialChars ===
                        "boolean") {
                        isBrowseSpecialChar = meta.browseBankSpecialChars;
                    }
                    getJsonResults(null, startLetter,
                        endLetter, isBrowseNum,
                        isBrowseSpecialChar);
                    isBrowseNum = false;
                    isBrowseSpecialChar = false;
                });
            }
        }
    }, displayResults = function() {
        var resultsHTML = "",
            resultsLength = resultsArr.length;
        $elementsForAjaxResponseInjection.empty();
        if (resultsLength > 0) {
            var radioList = "";
            resultsHTML = resultsTemplate;
            if (isPagedResults) {
                var i, j, k;
                numPages = (isNaN(numItemsToDisplay) ? 1 : Math.ceil(
                    resultsLength / numItemsToDisplay));
                if (numPages > 1) {
                    $(initSelector).find(pagingSelector).show();
                } else {
                    $(initSelector).find(pagingSelector).hide();
                }
                i = (currentPage * numItemsToDisplay) -
                    numItemsToDisplay;
                j = (((currentPage * numItemsToDisplay) - 1) >
                    resultsLength - 1 ? resultsLength - 1 : (
                        currentPage * numItemsToDisplay) - 1);
                for (k = i; k <= j; k++) {
                    radioList += $radioGroupTemplate.clone().html()
                        .replace(/{id}/g, resultsArr[k].id).replace(
                            /\s*{Provider}\s*/g, resultsArr[k].provider
                        );
                }
            } else {
                $.each(resultsArr, function(index, value) {
                    radioList += $radioGroupTemplate.clone()
                        .html().replace(/{id}/g, value.id).replace(
                            /\s*{Provider}\s*/g, value.provider
                        );
                });
            }
            var target = $elementsForAjaxResponseInjection.filter(
                function() {
                    return $(this).parents(".active").length !=
                        0;
                });
            target.append(resultsHTML);
            var $radioGroupResults =
                $elementsForAjaxResponseInjection.find(
                    radioGroupSelector);
            $radioGroupResults.empty();
            $radioGroupResults.append(radioList);
        } else {
            $elementsForAjaxResponseInjection.append("<p>" +
                bankNoResultsText + "</p>");
            $(ajaxResultsSelector, initSelector).closest(
                ".formField").removeClass("error").find(
                "span.error").remove();
            $(initSelector).find(pagingSelector).hide();
        }
    }, getJsonResults = function(searchStr, startLetter, endLetter,
        isBrowseNum, isBrowseSpecialChar) {
        $("li.primaryAction a.submitAction", initSelector).addClass(
            "disabled");
        $.ajax({
            type: "GET",
            url: dataURL,
            data: {
                searchStr: searchStr,
                startLetter: startLetter,
                endLetter: endLetter,
                isBrowseNum: isBrowseNum,
                isBrowseSpecialChar: isBrowseSpecialChar
            },
            cache: false,
            dataType: "json",
            success: function(response) {
                if (typeof response.bankSunData !==
                    "undefined") {
                    var resultsData = response.bankSunData;
                    resultsArr = [];
                    currentPage = 1;
                    numPages = 0;
                    numItemsToDisplay = (searchStr !==
                        null ?
                        numSearchItemsToDisplay :
                        numBrowseItemsToDisplay);
                    if (isFilterResults) {
                        if (searchStr !== null) {
                            searchStr = searchStr.toLowerCase();
                            for (var key in resultsData) {
                                if ($.trim(resultsData[
                                        key].Provider).substring(
                                        0, searchStr.length
                                    ).toLowerCase() ===
                                    searchStr) {
                                    resultsArr.push({
                                        id: resultsData[
                                            key
                                        ].ID,
                                        provider: resultsData[
                                            key
                                        ].Provider
                                    });
                                }
                            }
                        } else {
                            if (startLetter !== null ||
                                isBrowseNum !== null ||
                                isBrowseSpecialChar !==
                                null) {
                                startLetter = (
                                    startLetter !==
                                    null ?
                                    startLetter.toLowerCase() :
                                    "");
                                endLetter = (endLetter !==
                                    null ? "-" +
                                    endLetter.toLowerCase() :
                                    "");
                                isBrowseNum = (
                                    isBrowseNum !==
                                    null ?
                                    isBrowseNum :
                                    false);
                                isBrowseSpecialChar = (
                                    isBrowseSpecialChar !==
                                    null ?
                                    isBrowseSpecialChar :
                                    false);
                                var regExp = "^[" +
                                    startLetter +
                                    endLetter + (
                                        isBrowseNum ?
                                        "\\d" : "") + (
                                        isBrowseSpecialChar ?
                                        bankNameSpecialChars :
                                        "") + "]+$";
                                for (var key in
                                    resultsData) {
                                    if ($.trim(
                                            resultsData[
                                                key].Provider
                                        ).substring(0,
                                            1).toLowerCase()
                                        .match(regExp)) {
                                        resultsArr.push({
                                            id: resultsData[
                                                    key
                                                ]
                                                .ID,
                                            provider: resultsData[
                                                    key
                                                ]
                                                .Provider
                                        });
                                    }
                                }
                            }
                        }
                    } else {
                        for (var key in resultsData) {
                            resultsArr.push({
                                id: resultsData[
                                    key].ID,
                                provider: resultsData[
                                    key].Provider
                            });
                        }
                    }
                    displayResults();
                    setPagingLinks();
                }
            },
            error: function() {
                loadingData = false;
            }
        });
    };
    return {
        init: function() {
            setup($(initSelector));
        }
    };
})();
LBG.showNextOnChange = {
    init: function() {
        var selector = ".showNextOnChange",
            formFieldSelector = ".formField",
            hideClass = "hideJS";
        $(selector).find("input, select").each(function() {
            var elem = $(this);
            elem.data("oldVal", elem.val());
            elem.bind("propertychange keyup input paste",
                function(event) {
                    if (elem.data("oldVal") != elem.val()) {
                        elem.data("oldVal", elem.val());
                        elem.parents(selector).next(
                            formFieldSelector).show().removeClass(
                            hideClass).find(
                            "input, select").val("");
                    }
                });
        });
    }
};
LBG.closeWindowLink = {
    init: function() {
        $("a.closeWindow").unbind("click").bind("click", function(e) {
            e.preventDefault();
            window.open("", "_self", "");
            window.close();
        });
    }
};
LBG.fixedTermDepositReinvestDropDown = {
    initSelector: ".maturityOptionsDropdowns",
    successorProduct: ".successorProduct",
    interestFrequency: ".interestFrequency",
    init: function() {
        if ($(LBG.fixedTermDepositReinvestDropDown.initSelector).length >
            0) {
            $(LBG.fixedTermDepositReinvestDropDown.successorProduct).change(
                function() {
                    LBG.fixedTermDepositReinvestDropDown.populateNextDropDown(
                        $(this));
                });
            $(LBG.fixedTermDepositReinvestDropDown.successorProduct).keyup(
                function() {
                    LBG.fixedTermDepositReinvestDropDown.populateNextDropDown(
                        $(this));
                });
        }
    },
    populateNextDropDown: function($successorProduct) {
        var dropDownReceiverData = DI.lang.fixedTermDeposit.dropDownReceiverData;
        var $interestFrequencyElement = $successorProduct.parents(LBG.fixedTermDepositReinvestDropDown
            .initSelector).find(LBG.fixedTermDepositReinvestDropDown
            .interestFrequency);
        if ($successorProduct.val() !== "-") {
            $.get(dropDownReceiverData, {
                "successorProduct": $successorProduct.val()
            }, function(data) {
                $interestFrequencyElement.empty().append($(
                    "option", $(data)));
                $("option:first-child",
                    $interestFrequencyElement).attr(
                    "selected", "selected");
            });
        } else {
            $interestFrequencyElement.html(
                '<option selected="selected" value="-">&lt;Please select&gt;</option>'
            );
        }
    }
};
LBG.ieZindexFix = {
    apply: function(override, cxt) {
        if (override || (!LBG.ieZindexFix.zIndexFixed && ($.browser.msie &&
            $.browser.version < 8))) {
            var elems, count, offset;
            if (!cxt) {
                elems = $(".content div:not(.no-z-fix)");
                count = elems.length;
                offset = 0;
            } else {
                others = $(".content div");
                others.css("z-index", "");
                elems = cxt.parents("div:not(.no-z-fix)");
                count = elems.length;
                offset = others.length;
            }
            for (var i = 0; i < count; i++) {
                $(elems[i]).css({
                    "z-index": (count - i) + offset
                });
            }
            LBG.ieZindexFix.zIndexFixed = true;
            return true;
        } else {
            return false;
        }
    },
    zIndexFixed: false
};
LBG.dateShortcut = {
    init: function() {
        $("a.dateRangeShortcut").each(function() {
            if (!$(this).metadata().period) {
                $(this).remove();
            } else {
                $(this).data("period", $(this).metadata().period);
            }
        }).click(function() {
            var cxt = $(this).closest("form");
            var period = $(this).data("period");
            var from = new Date((new Date()).getTime() -
                parseInt(period) * 86400000);
            var to = new Date();
            $(".datesAndNames select.slctDay:eq(0)", cxt).val(
                LBG.dateShortcut.dayFormat(from.getUTCDate())
            );
            $(".datesAndNames select.slctMonth:eq(0) > option",
                cxt).attr("selected", "").eq(from.getUTCMonth() +
                1).attr("selected", "selected");
            $(".datesAndNames select.slctYear:eq(0)", cxt).val(
                from.getUTCFullYear());
            $(".datesAndNames select.slctDay:eq(1)", cxt).val(
                LBG.dateShortcut.dayFormat(to.getUTCDate())
            );
            $(".datesAndNames select.slctMonth:eq(1) > option",
                cxt).attr("selected", "").eq(to.getUTCMonth() +
                1).attr("selected", "selected");
            $(".datesAndNames select.slctYear:eq(1)", cxt).val(
                to.getUTCFullYear());
            return false;
        });
    },
    dayFormat: function(val) {
        if (val < 10) {
            return "0" + val;
        }
        return val;
    }
};
LBG.eloanUtils = {
    init: function() {
        $(".cancelInput").click(function(e) {
            e.preventDefault();
            var target = e ? $(e.target) : $(window.event.srcElement),
                context = $(target).parents(".showHide");
            $(".triggerChild", context).trigger("click");
            $(":input", context).val("");
        });
    }
};
LBG.altOverlay = (function() {
    var reposition = function() {
        var verticalSpace = Math.min($(".altOverlayContainer").height(),
            $(window).height());
        var coverage = Math.min(0.95, $(".altOverlay").height() /
            verticalSpace);
        $(".altOverlay").css("margin-top", coverage * verticalSpace /
            -2);
    };
    var bind = function() {
        $(".altOverlay a.dismiss, .altOverlayMask").click(function(
            e) {
            e.preventDefault();
            $(".hasAltOverlay").removeClass("hasAltOverlay");
            $(".altOverlayContainer").hide();
            return false;
        });
    };
    return {
        init: function() {
            if ($(".altOverlay").length > 0) {
                $("html").addClass("hasAltOverlay").find("body").append(
                    $(".altOverlayContainer"));
                reposition();
                $(window).resize(reposition);
                bind();
            }
        }
    };
})();
LBG.marmaladePhaseTwo = (function() {
    var expand = (function() {
        var initSelector = "td.first a.avaRadioBtn";
        var parent;
        var setup = function($wrapper) {
            $wrapper.click(function(event) {
                $parent = $(this).parents("table");
                $thisRow = $(this).parents("tr");
                currentRowIndex = $("tr", $parent).index(
                    $thisRow);
                $("tr", $parent).each(function(
                    index) {
                    var $this = $(this);
                    var $trigger = $(this).find(
                        ".triggerChild:first"
                    );
                    var testDiv = $(
                        ".showHide", $(
                            this));
                    if (index ===
                        currentRowIndex) {
                        if (testDiv.hasClass(
                            "closed")) {
                            $trigger.trigger(
                                "click"
                            );
                        }
                    } else {
                        if (!testDiv.hasClass(
                            "closed")) {
                            $trigger.trigger(
                                "click"
                            );
                        }
                    }
                });
            });
        };
        return {
            init: function() {
                $(initSelector).each(function() {
                    setup($(this));
                });
            }
        };
    })();
    var validateCountable = (function() {
        var initSelector =
            ".avaSales .avaSuitabilityCheck table",
            radioGroupSelector =
            ".formField .radioGroup .inputGroup",
            countableSelector =
            ".countable .formField .radioGroup .inputGroup",
            checkedSelector = ".radio-checked";
        var getThreshold = function($wrapper) {
            var meta = $wrapper.metadata();
            return meta.threshold;
        };
        var setup = function($wrapper) {
            var $countables = $(countableSelector),
                $inputGroups = $(radioGroupSelector),
                $form = $wrapper.parents("form");
            var countableThreshold = getThreshold($wrapper);
            var total = $(".radioGroup").find(
                ":input[value='yes']").length;
            var successfulSubmit = false;
            var performCountableCheck = function() {
                var answered = $(".radioGroup").find(
                        ":input:radio[checked='true']")
                    .length;
                if (answered < total) {
                    return false;
                }
                var count = $(".countable .radioGroup")
                    .find(
                        ":input:radio[checked='true']")
                    .filter("[value='yes']").length;
                return count <= countableThreshold;
            };
            var updateWarning = function() {
                var showWarning = performCountableCheck();
                var disclosure = $(".disclosure");
                var benefitCount = $wrapper.parents(
                    "form").find("tr").length;
                var questionsAnswered = $wrapper.parents(
                    "form").find(":radio:checked").length;
                if (showWarning) {
                    disclosure.slideDown();
                    $wrapper.parents("form").find(
                        ".submitAction").attr(
                        "disabled", true);
                } else {
                    disclosure.slideUp();
                    if (benefitCount ===
                        questionsAnswered) {
                        $wrapper.parents("form").find(
                            ".submitAction").attr(
                            "disabled", false);
                    }
                }
            };
            $(".radioGroup .avaRadioBtn", $wrapper).click(
                function(e) {
                    updateWarning();
                });
            $(":radio").click(function(e) {
                updateWarning();
            });
            $(document).ready(function() {
                updateWarning();
            });
        };
        return {
            init: function() {
                $(initSelector).each(function() {
                    setup($(this));
                });
            }
        };
    })();
    var ageDisclosure = (function() {
        var initSelector = ".avaSales .disclosurePanel",
            nearingIneligibleWarningSelector =
            ".nearingIneligibleWarning",
            ineligibleWarningSelector = ".ineligibleWarning";
        var setup = function($wrapper) {
            var meta = $wrapper.metadata();
            var ineligibleAge = meta.ineligibleAge;
            var nearingIneligibleAge = meta.nearingIneligibleAge;
            var $datePicker = $wrapper.parent().find(
                ".formField .date");
            var createDate = function($dateWrapper) {
                var daySelector = "select.slctDay";
                var monthSelector = "select.slctMonth";
                var yearSelector = "select.slctYear";
                var day = $dateWrapper.find(daySelector)
                    .val(),
                    month = $dateWrapper.find(
                        monthSelector).val(),
                    year = $dateWrapper.find(
                        yearSelector).val();
                return new Date(year, month - 1, day);
            };
            var greaterOrEqualToAge = function(dateOfBirth,
                age) {
                var ageDateOfBirth = new Date();
                ageDateOfBirth = new Date(
                    ageDateOfBirth.getFullYear() -
                    age, ageDateOfBirth.getMonth(),
                    ageDateOfBirth.getDate());
                return ageDateOfBirth >= dateOfBirth;
            };
            $(":input", $datePicker).change(function(e) {
                var ageNotEntered = false;
                $datePicker.find(":input").each(
                    function() {
                        var ageNotEntered =
                            ageNotEntered || $(
                                this).val() ===
                            "-";
                    });
                if (ageNotEntered) {
                    return false;
                }
                var dob = createDate($datePicker);
                var ineligible =
                    greaterOrEqualToAge(dob,
                        ineligibleAge);
                var nearingIneligible = false;
                if (!ineligible) {
                    var nearingIneligible =
                        greaterOrEqualToAge(dob,
                            nearingIneligibleAge);
                }
                if (ineligible) {
                    $(ineligibleWarningSelector,
                        $wrapper).slideDown();
                } else {
                    $(ineligibleWarningSelector,
                        $wrapper).slideUp();
                } if (nearingIneligible) {
                    $(
                        nearingIneligibleWarningSelector,
                        $wrapper).slideDown();
                } else {
                    $(
                        nearingIneligibleWarningSelector,
                        $wrapper).slideUp();
                }
                return false;
            }).change();
        };
        return {
            init: function() {
                $(initSelector).each(function() {
                    setup($(this));
                });
            }
        };
    })();
    return {
        init: function() {
            expand.init();
            ageDisclosure.init();
        }
    };
})();
LBG.marmaladePhaseTwo = (function() {
    var expand = (function() {
        var initSelector = "td.first a.avaRadioBtn";
        var parent;
        var setup = function($wrapper) {
            $wrapper.click(function(event) {
                $parent = $(this).parents("table");
                $thisRow = $(this).parents("tr");
                currentRowIndex = $("tr", $parent).index(
                    $thisRow);
                $("tr", $parent).each(function(
                    index) {
                    var $this = $(this);
                    var $trigger = $(this).find(
                        ".triggerChild:first"
                    );
                    var testDiv = $(
                        ".showHide", $(
                            this));
                    if (index ===
                        currentRowIndex) {
                        if (testDiv.hasClass(
                            "closed")) {
                            $trigger.trigger(
                                "click"
                            );
                        }
                    } else {
                        if (!testDiv.hasClass(
                            "closed")) {
                            $trigger.trigger(
                                "click"
                            );
                        }
                    }
                });
            });
        };
        return {
            init: function() {
                $(initSelector).each(function() {
                    setup($(this));
                });
            }
        };
    })();
    var validateCountable = (function() {
        var initSelector =
            ".avaSales .avaSuitabilityCheck table",
            radioGroupSelector =
            ".formField .radioGroup .inputGroup",
            countableSelector =
            ".countable .formField .radioGroup .inputGroup",
            checkedSelector = ".radio-checked";
        var getThreshold = function($wrapper) {
            var meta = $wrapper.metadata();
            return meta.threshold;
        };
        var setup = function($wrapper) {
            var $countables = $(countableSelector),
                $inputGroups = $(radioGroupSelector),
                $form = $wrapper.parents("form");
            var countableThreshold = getThreshold($wrapper);
            var total = $(".radioGroup").find(
                ":input[value='yes']").length;
            var successfulSubmit = false;
            var performCountableCheck = function() {
                var answered = $(".radioGroup").find(
                        ":input:radio[checked='true']")
                    .length;
                if (answered < total) {
                    return false;
                }
                var count = $(".countable .radioGroup")
                    .find(
                        ":input:radio[checked='true']")
                    .filter("[value='yes']").length;
                return count <= countableThreshold;
            };
            var updateWarning = function() {
                var showWarning = performCountableCheck();
                var disclosure = $(".disclosure");
                var benefitCount = $wrapper.parents(
                    "form").find("tr").length;
                var questionsAnswered = $wrapper.parents(
                    "form").find(":radio:checked").length;
                if (showWarning) {
                    disclosure.slideDown();
                    $wrapper.parents("form").find(
                        ".submitAction").attr(
                        "disabled", true);
                } else {
                    disclosure.slideUp();
                    if (benefitCount ===
                        questionsAnswered) {
                        $wrapper.parents("form").find(
                            ".submitAction").attr(
                            "disabled", false);
                    }
                }
            };
            $(".radioGroup .avaRadioBtn", $wrapper).click(
                function(e) {
                    updateWarning();
                });
            $(":radio").click(function(e) {
                updateWarning();
            });
            $(document).ready(function() {
                updateWarning();
            });
        };
        return {
            init: function() {
                $(initSelector).each(function() {
                    setup($(this));
                });
            }
        };
    })();
    var ageDisclosure = (function() {
        var initSelector = ".avaSales .disclosurePanel",
            nearingIneligibleWarningSelector =
            ".nearingIneligibleWarning",
            ineligibleWarningSelector = ".ineligibleWarning";
        var setup = function($wrapper) {
            var meta = $wrapper.metadata();
            var ineligibleAge = meta.ineligibleAge;
            var nearingIneligibleAge = meta.nearingIneligibleAge;
            var $datePicker = $wrapper.parent().find(
                ".formField .date");
            var createDate = function($dateWrapper) {
                var daySelector = "select.slctDay";
                var monthSelector = "select.slctMonth";
                var yearSelector = "select.slctYear";
                var day = $dateWrapper.find(daySelector)
                    .val(),
                    month = $dateWrapper.find(
                        monthSelector).val(),
                    year = $dateWrapper.find(
                        yearSelector).val();
                return new Date(year, month - 1, day);
            };
            var greaterOrEqualToAge = function(dateOfBirth,
                age) {
                var ageDateOfBirth = new Date();
                ageDateOfBirth = new Date(
                    ageDateOfBirth.getFullYear() -
                    age, ageDateOfBirth.getMonth(),
                    ageDateOfBirth.getDate());
                return ageDateOfBirth >= dateOfBirth;
            };
            $(":input", $datePicker).change(function(e) {
                var ageNotEntered = false;
                $datePicker.find(":input").each(
                    function() {
                        var ageNotEntered =
                            ageNotEntered || $(
                                this).val() ===
                            "-";
                    });
                if (ageNotEntered) {
                    return false;
                }
                var dob = createDate($datePicker);
                var ineligible =
                    greaterOrEqualToAge(dob,
                        ineligibleAge);
                var nearingIneligible = false;
                if (!ineligible) {
                    var nearingIneligible =
                        greaterOrEqualToAge(dob,
                            nearingIneligibleAge);
                }
                if (ineligible) {
                    $(ineligibleWarningSelector,
                        $wrapper).slideDown();
                } else {
                    $(ineligibleWarningSelector,
                        $wrapper).slideUp();
                } if (nearingIneligible) {
                    $(
                        nearingIneligibleWarningSelector,
                        $wrapper).slideDown();
                } else {
                    $(
                        nearingIneligibleWarningSelector,
                        $wrapper).slideUp();
                }
                return false;
            }).change();
        };
        return {
            init: function() {
                $(initSelector).each(function() {
                    setup($(this));
                });
            }
        };
    })();
    var fixTextWrap = (function() {
        var initSelector = ".avaSummaryTable .notEligible";
        var setup = function($wrapper) {
            var elWidth = $wrapper.outerWidth(true) + 10;
            $wrapper.parent("a").css("padding-right",
                elWidth);
        };
        return {
            init: function() {
                $(initSelector).each(function() {
                    setup($(this));
                });
            }
        };
    })();
    return {
        init: function() {
            expand.init();
            ageDisclosure.init();
            fixTextWrap.init();
        }
    };
})();
LBG.textNoSpace = {
    init: function() {
        $(".js-noSpace input:text").blur(function() {
            var txt = this.value;
            txt = txt.replace(/[()+\-\s]/ig, "");
            $(this).val(txt);
        });
    }
};
LBG.lostAndStolen = {
    init: function() {
        var submit = $("div.lostAndStolen .submitAction");
        var formReplacement = $("div.lostAndStolen form");
        var formReqReplacement = $("div.reqReplacement form");
        var field = $("div.lostAndStolen input.field");
        var row = $("table.lostAndStolenCardCancellation tbody tr");
        var rowReqReplacement = $(
            "table.lostAndStolenCardReplace tbody tr");
        var creditCardRepRow = $(
            "table.lostAndStolenCardReplace tbody tr.creditCard");
        var cancel = $(
            "table.lostAndStolenCardCancellation td div.replaceCard input, table.lostAndStolenCardCancellation td div.newPin input"
        );
        var radio = $("div.lostAndStolen .radioGroup input");
        var radioContainer = $("div.lostAndStolen div.radio");
        var checkbox = $(
            "div.lostAndStolen table.lostAndStolenCardCancellation td div.cancelCard input"
        );
        var checkboxReqReplacement = $(
            "div.reqReplacement table.lostAndStolenCardReplace td input"
        );
        var errorMessage = $(".formSubmitError");
        var confirmationRadio = $(
            "div.lostAndStolen.confirmationSummary .radioGroup");
        var confirmAddressLS = $(".confirmAddressLostandStolen");
        $(confirmAddressLS).hide();
        var replaceErrShown = false;
        var wrapperValues = $(".lostAndStolen .formField");
        var formValidationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            wrapperValues);
        LBG.Forms.Validation.ValidationHandlers.push(
            formValidationHandler);
        var reqWrapperValues = $(".reqReplacement .formField");
        var reqformValidationHandler = LBG.Forms.Validation.Tools.getValidationHandlerObject(
            reqWrapperValues);
        LBG.Forms.Validation.ValidationHandlers.push(
            reqformValidationHandler);
        if (formValidationHandler != false && formValidationHandler.validationRoutines !=
            undefined && !formValidationHandler.validationRoutines.customMessage
        ) {
            blnRequiredValidationAddedDynamically = true;
            formValidationHandler.validationRoutines.push(
                "customMessage");
            formValidationHandler.validationRoutines.customMessage = {
                msg: "validateRadio"
            };
        }
        $(radioContainer).find("input:radio").click(function() {
            if (formValidationHandler) {
                formValidationHandler.hideError();
            }
        });
        $(rowReqReplacement).each(function() {
            var tmpChekbx = $(this).find("input:checkbox");
            tmpChekbx.unbind("click");
            tmpChekbx.click(function() {
                if (reqformValidationHandler) {
                    reqformValidationHandler.hideError();
                }
                if ($(this.checked) && ($(
                    ".submitAction").attr(
                    "disabled") !== undefined)) {
                    if (formValidationHandler) {
                        formValidationHandler.hideError();
                    }
                    $(".submitAction").removeAttr(
                        "disabled");
                }
            });
        });
        $(creditCardRepRow).each(function() {
            var replaceCard = $(this).find(".replaceCard input");
            var newPin = $(this).find(".newPin input");
            replaceCard.click(function(event) {
                if (replaceCard[0].checked) {
                    newPin.addClass("isDisabled").attr(
                        "disabled", "disabled");
                } else {
                    newPin.removeClass("isDisabled").removeAttr(
                        "disabled");
                }
            });
            newPin.click(function() {
                if (newPin[0].checked) {
                    replaceCard.addClass("isDisabled").attr(
                        "disabled", "disabled");
                } else {
                    replaceCard.removeClass(
                        "isDisabled").removeAttr(
                        "disabled");
                }
            });
        });
        $(formReqReplacement).submit(function(e) {
            if (checkboxReqReplacement.filter(":checked").length ==
                0) {
                errorMessage.show();
                rowReqReplacement.addClass("error");
                return false;
            }
        });
        $(row).each(function() {
            var boxchecked = $(this).find(".cancelCard input");
            $(this).find("input:checkbox").click(function() {
                if (radio.filter(":checked").length !==
                    0) {
                    if (formValidationHandler) {
                        formValidationHandler.hideError();
                    }
                }
            });
            if ($.browser.msie) {
                $(this).find(".newPin input").removeClass(
                    "isDisabled").removeAttr("disabled");
            }
            if ($(boxchecked).is(":checked")) {
                $(this).find(".replaceCard input").removeClass(
                    "isDisabled").removeAttr("disabled");
                if (!$(this).find(".replaceCard input").is(
                    ":checked")) {
                    $(this).find(".newPin input").addClass(
                        "isDisabled").attr("disabled",
                        "disabled");
                }
            } else {
                $(this).find(".replaceCard input").addClass(
                    "isDisabled").attr("disabled",
                    "disabled");
                $(this).find(".newPin input").addClass(
                    "isDisabled").attr("disabled",
                    "disabled");
            }
            $(this).find(".cancelCard input").click(function() {
                if (this.checked) {
                    $(this).parents("tr").find(
                        ".replaceCard input, .newPin input"
                    ).removeClass("isDisabled").removeAttr(
                        "disabled");
                    $(this).parents("tr").find(
                        ".replaceCard input").attr(
                        "checked", "checked");
                } else {
                    $(this).parents("tr").find(
                        ".replaceCard input, .newPin input"
                    ).addClass("isDisabled").removeAttr(
                        "checked").attr("disabled",
                        "disabled");
                }
            });
            $(this).find(".replaceCard input").click(function() {
                if (this.checked) {
                    $(this).parents("tr").find(
                        ".newPin input").removeClass(
                        "isDisabled").removeAttr(
                        "disabled");
                } else {
                    if (!replaceErrShown) {
                        if (formValidationHandler.validationRoutines !=
                            undefined) {
                            formValidationHandler.validationRoutines
                                .customMessage = {
                                    msg: "msg2476"
                                };
                        }
                        if (formValidationHandler) {
                            formValidationHandler.showError();
                        }
                        replaceErrShown = true;
                    }
                    $(this).parents("tr").find(
                        ".newPin input").addClass(
                        "isDisabled").removeAttr(
                        "checked").attr("disabled",
                        "disabled");
                }
            });
        });
        $(submit).click(function() {
            if (($(field).length == 0)) {
                if ((checkbox.filter(":checked").length == 0) ||
                    (radio.filter(":checked").length == 0)) {
                    if (radio.filter(":checked").length == 0) {
                        if (formValidationHandler.validationRoutines !=
                            undefined) {
                            formValidationHandler.validationRoutines
                                .customMessage = {
                                    msg: "validateRadio"
                                };
                        }
                    } else {
                        if (checkbox.filter(":checked").length ==
                            0) {
                            if (formValidationHandler.validationRoutines !=
                                undefined) {
                                formValidationHandler.validationRoutines
                                    .customMessage = {
                                        msg: "msg2474"
                                    };
                            }
                        }
                    } if (formValidationHandler) {
                        formValidationHandler.showError();
                    }
                    return false;
                }
            }
        });
        $(formReplacement).submit(function(e) {
            if (!formValidationHandler) {
                return true;
            }
            if (($(field).length == 0)) {
                if ((checkbox.filter(":checked").length == 0) ||
                    (radio.filter(":checked").length == 0)) {
                    errorMessage.show();
                    if (checkbox.filter(":checked").length == 0) {
                        $(row).addClass("error");
                    }
                    if (radio.filter(":checked").length == 0) {
                        $(radioContainer).addClass("error");
                    }
                    return false;
                }
            }
        });
        $(field).bind("paste", function(e) {
            setTimeout(function() {
                if ($(field).val() !== "") {
                    $(submit).removeAttr("disabled").attr(
                        "src", DI.lang.lostAndStolen
                        .submitImgEnabled);
                } else {
                    $(submit).attr("disabled",
                        "disabled").attr("src", DI.lang
                        .lostAndStolen.submitImgDisabled
                    );
                }
            }, 100);
        });
        $(field).keyup(function() {
            if ($(field).val() !== "") {
                $(submit).removeAttr("disabled").attr("src", DI
                    .lang.lostAndStolen.submitImgEnabled);
            } else {
                $(submit).attr("disabled", "disabled").attr(
                    "src", DI.lang.lostAndStolen.submitImgDisabled
                );
            }
        });
        $(confirmationRadio).find("input").click(function() {
            if ($(this).val() == 1) {
                $(".lostAndStolenSummary .choiceValue").each(
                    function() {
                        $(this).parent().attr("orig-value",
                            $(this).text());
                        $(this).text("N/A");
                        $(confirmAddressLS).show("slow",
                            function() {});
                    });
            } else {
                if ($(this).val() == 0) {
                    $(".lostAndStolenSummary .choiceValue").each(
                        function() {
                            $(this).text($(this).parent().attr(
                                "orig-value"));
                            $(confirmAddressLS).hide("slow",
                                function() {});
                        });
                }
            }
        });
    }
};
LBG.cssFixUtilities = {
    init: function() {
        var isIE9 = ($.browser.msie && parseInt($.browser.version) ===
            9) ? true : false;
        var hasPaymentTable = $("table.payments").length > 0 ? true :
            false;
        if (isIE9 && hasPaymentTable) {
            var cells = $("th,td");
            var div = $("<div/>");
            cells.each(function() {
                $(this).wrapInner(div);
            });
        } else {
            return false;
        }
    }
};
LBG.browserSniffer = {
    init: function() {
        var browser = $.browser;
        var version = parseInt($.browser.version);
        for (var key in browser) {
            if (browser[key] === Boolean(true)) {
                $("body").addClass(key + "_" + version).attr({
                    "data-browser": key,
                    "data-version": version
                });
            }
            key++;
        }
    }
};
var AspectCollection = (function() {
    function AspectCollection() {
        this.aspects = [];
    }
    AspectCollection.prototype.init = function() {
        for (var i = 0; i < this.aspects.length; i++) {
            this.aspects[i].init();
        }
    };
    AspectCollection.prototype.addAspectAsLiteral = function(aspect) {
        this.aspects.push(aspect);
        return this;
    };
    AspectCollection.prototype.addAspectAsFunction = function(aspect) {
        this.aspects.push({
            init: aspect
        });
        return this;
    };
    AspectCollection.prototype.add = function(aspect) {
        if ("function" === typeof aspect) {
            this.addAspectAsFunction(aspect);
        } else {
            if (aspect.init && "function" === typeof aspect.init) {
                this.addAspectAsLiteral(aspect);
            }
        }
        return this;
    };
    return AspectCollection;
})();
LBG.wtError = {
    init: function() {
        $(".formField.wtError input:text").blur(function() {
            if ($(".formField.wtError").hasClass(".error")) {
                LBG.track({
                    "WT.ti": this.id,
                    "DCSext.CurrentPostcode": this.value,
                    "DCSext.CurrentPostcodeValid": "false"
                });
            } else {
                LBG.track({
                    "WT.ti": this.id,
                    "DCSext.CurrentPostcode": this.value,
                    "DCSext.CurrentPostcodeValid": "true"
                });
            }
        });
    }
};
LBG.selectAccountNew = function() {
    var el;

    function init() {
        el = $(".selectAccountNewList");
        if (!el.length) {
            return;
        }
        el.find("li").each(function() {
            var button = $(
                "<a href='#' class='button selectAccountButton'>Select</a>"
            );
            $(this).append(button);
            button.bind("click", function(e) {
                radioButton_click(e, this);
            });
        });
        el.find("input[type='radio']").click(function() {
            refreshClasses();
        });
        refreshClasses();
    }

    function refreshClasses() {
        if (el.find("input:checked").length) {
            el.addClass("account-selected").find("li").removeClass(
                "selected").find("a.selectAccountButton").text(
                "Select");
            el.find("input:checked").parents("li").addClass("selected")
                .find("a.selectAccountButton").text("Selected");
        } else {
            el.removeClass("account-selected");
        }
    }

    function radioButton_click(e, el) {
        e.preventDefault();
        var radio = $(el).parents("li").find("input[type='radio']");
        radio.attr("checked", "checked");
        refreshClasses();
    }
    return {
        init: init
    };
}();
LBG.ajaxSelect = (function() {
    var init = function() {
        $("select.ajaxSelect").each(function() {
            var md = $(this).metadata();
            $(this).change(function() {
                var url = $(":selected", this).metadata()
                    .url;
                if (!url) {
                    $(md.target).html("");
                } else {
                    $(md.target).load(url, function() {
                        $(this).removeClass(
                            "loading");
                        LBG.Forms.Validation
                            .init();
                        LBG.common.getNewWindowLinks();
                    }).addClass("loading");
                }
            }).change();
        });
    };
    return {
        init: init
    };
})();
LBG.loans = window.LBG.loans || (function(config) {
    var loans = new AspectCollection();
    loans.addAspectAsFunction(function() {
        var OverpaymentCalculator = (function($, config) {
            var selectors = {
                amount: "input[type=text]",
                form: "form",
                result: ".overpayment-calc-result",
                submit: ".submitAction",
                linkedField: ".colPart:eq(0) .amountField input",
                containers: {
                    form: ".overpayment-calc-form",
                    result: ".overpayment-calc-result-container",
                    page: ".colLayout"
                }
            };
            var classes = {
                progress: "overpayment-calc-progress"
            };

            function OPCalc(element) {
                context = $(element);
                var self = this;
                this.form = $(selectors.form,
                    context);
                this.form.submit(function(e) {
                    e.preventDefault();
                    self.handler(e);
                    return false;
                }).bind("error", function() {
                    self.result.hide();
                    $(selectors.submit,
                        self.form).removeAttr(
                        "disabled");
                });
                this.amount = $(selectors.amount,
                    context);
                this.amount.keydown(function(e) {
                    if (13 == e.which) {
                        e.preventDefault();
                        $(selectors.submit,
                            self.form).click();
                    }
                });
                this.result = $(selectors.containers
                    .result, context);
                this.context = context;
            }
            OPCalc.prototype.getAmount = function() {
                return this.amount.val();
            };
            OPCalc.prototype.handler = function(e) {
                e.preventDefault();
                LBG.track({
                    "WT.tx_s": this.amount.val(),
                    "WT.ac": "pages/p60_00_loan_statements/properties.p6000btn518a,pages/p60_00_loan_statements/properties.p6000btn518b,Calculate"
                });
                var val = this.amount.val();
                if ("" == val || isNaN(parseFloat(
                    val))) {
                    return false;
                }
                var data = {};
                data[this.amount.attr("name")] =
                    val;
                $(selectors.result, this.result).text(
                    config.text.loading).addClass(
                    classes.progress);
                this.result.show();
                var self = this;
                $.ajax({
                    url: config.ajax.url,
                    data: data,
                    success: function(
                        result) {
                        self.form[0].reset();
                        self.amount.val(
                            val);
                        $(selectors.result,
                                self.result
                            ).html(
                                result)
                            .removeClass(
                                classes
                                .progress
                            );
                        $(selectors.submit,
                            self.form
                        ).removeAttr(
                            "disabled"
                        );
                        $(self.context)
                            .parents(
                                selectors
                                .containers
                                .page).find(
                                selectors
                                .linkedField
                            ).val(val).parents(
                                ".error"
                            ).removeClass(
                                "error"
                            ).find(
                                "span.error"
                            ).remove();
                    },
                    error: function() {
                        self.form[0].reset();
                        self.amount.val(
                            val);
                        $(selectors.result,
                                self.result
                            ).html(
                                config.html
                                .error)
                            .removeClass(
                                classes
                                .progress
                            );
                        $(selectors.submit,
                            self.form
                        ).removeAttr(
                            "disabled"
                        );
                    }
                });
                return false;
            };
            return OPCalc;
        })($, config.overpaymentCalculator || {});
        $(".overpayment-calc").each(function() {
            new OverpaymentCalculator(this);
        });
    });
    return loans;
})(DI.lang.loans || {});
LBG.selectAccountNew = function() {
    var el;

    function init() {
        el = $(".selectAccountNewList");
        if (!el.length) {
            return;
        }
        el.find("input[type='radio']").click(function() {
            refreshClasses();
        });
        refreshClasses();
    }

    function refreshClasses() {
        if (el.find("input:checked").length) {
            el.addClass("account-selected").find("li").removeClass(
                "selected");
            el.find("input:checked").parents("li").addClass("selected");
        } else {
            el.removeClass("account-selected");
        }
    }

    function radioButton_click(e, el) {
        e.preventDefault();
        var radio = $(el).parents("li").find("input[type='radio']");
        radio.attr("checked", "checked");
        refreshClasses();
    }
    return {
        init: init
    };
}();
LBG.emailModule = (function() {
    var init = function() {
        $("div.optionalEmail").each(function() {
            var $this = $(this);
            var checkbox = $this.find(
                'input[type="checkbox"]').eq(0);
            var hidden = $this.find('input[type="hidden"]')
                .eq(0);
            var emailfields = $this.find(
                'input[type="text"]');
            var emailcapture = $this.find(
                "div.emailShowHide");
            var pane = $this.find(".pane");
            if (checkbox.length > 0) {
                checkbox.attr("checked", "");
                emailcapture.hide();
                checkbox.click(function() {
                    if (emailcapture.hasClass(
                        "email-visible")) {
                        emailcapture.removeClass(
                            "email-visible");
                        emailcapture.hide();
                        pane.hide();
                        if (hidden.length > 0) {
                            emailfields.val(hidden.val());
                        }
                    } else {
                        emailcapture.addClass(
                            "email-visible");
                        emailcapture.show();
                    }
                });
            } else {
                emailcapture.show();
                $this.find(".inner").eq(0).addClass("dash");
            }
        });
    };
    return {
        init: init
    };
})();
$(document).ready(function() {
    LBG.common.identJS();
    LBG.accordion.addOpenClass();
    LBG.quickTransfer.init();
    $("input[type=radio]").fixRadioChange();
    $(".preventDefault").click(function(e) {
        e.preventDefault();
    });
    LBG.miniStatement.init();
    LBG.scottishWidows.init();
    LBG.accordion.init();
    LBG.showHide.init();
    LBG.datePicker.init();
    LBG.help.init();
    LBG.ajaxPoweredAddressFinder.init();
    LBG.compareSelection.init();
    LBG.textAlerts.init();
    LBG.common.getNewWindowLinks();
    LBG.common.getNewWindowContinueActionLinks();
    LBG.common.getPrintLinks();
    LBG.common.getHighlightElements();
    LBG.common.replaceLongStrings();
    LBG.selectHybrid.init();
    LBG.employmentShowHide.init();
    LBG.pseudoLinks.init();
    LBG.manageTransfers.init();
    LBG.linkedRadioAndTextFields.init();
    LBG.linkedSelectAndTextFields.init();
    LBG.linkedCheckBoxAndTextFields.init();
    LBG.linkedTextFieldAndCheckBox.init();
    LBG.converter.init();
    LBG.enhanceOverdraftDetails.init();
    LBG.authPolling.init();
    LBG.autoTotal.init();
    LBG.beneficiariesChooser.init();
    LBG.submitOnChange.init();
    LBG.tableSorter.init();
    LBG.previousAddressRepeater.init();
    LBG.initAddressRepeaters.init();
    LBG.paymentCalculator.init();
    LBG.accountSwitcher.init();
    LBG.balanceTransfer.init();
    LBG.enrichedSelects();
    LBG.businessOverdraft();
    LBG.statusToggle.init();
    LBG.scrollable.init();
    LBG.autoSelectRadioButton.init();
    LBG.setupPasscode.init();
    LBG.setupTextAlertsDailyFrequency();
    LBG.toggleFrequencyTerm.init();
    LBG.leapYearDayAdjust.init();
    LBG.successFadeOutDelay.init();
    LBG.warningFadeOutDelay.init();
    LBG.setFocus.init();
    LBG.rememberMe.init();
    LBG.internationalPayment.init();
    LBG.toggleBankRouting.init();
    LBG.contentScrollerTabIndex();
    LBG.expandSelect.init();
    LBG.timedLogout.init();
    LBG.investmentsExpandingTable.init();
    LBG.loanExpandingTable.init();
    LBG.accountStatementTableExpandPolicy.init();
    LBG.ticker.init();
    LBG.investmentsFund.init();
    LBG.ajaxFormContentLoader.init();
    LBG.dbtSetupModules.init();
    LBG.jumpList.init();
    LBG.ajaxLink.init();
    LBG.tabs.init();
    LBG.calculateFundAllocations();
    LBG.flashEmbed.init();
    LBG.doNotUpdateEmail.init();
    LBG.managePaperStatements();
    LBG.fixedHeadingHeight.init();
    LBG.addressFinder.init();
    LBG.formAutoSubmit.init();
    LBG.alternateImageSrc();
    LBG.ajaxLoader.init();
    LBG.clearValuesOnHide.init();
    LBG.stpLoanCalculatorSlider.init();
    LBG.filterBy.init();
    LBG.radioButtonPanel.init();
    LBG.yourInbox.init();
    LBG.optionPanelDisable.init();
    LBG.checkboxSelectAll.init();
    LBG.preventPaste.init();
    LBG.branchFinder.init();
    LBG.beneficaryReference.init();
    LBG.isaTopUpReference.init();
    LBG.showMeOrientation.init();
    LBG.fatcaNationality.init();
    LBG.multichannel.init();
    LBG.avaRadioButtons.init();
    LBG.iadaUtilities.init();
    LBG.ajaxPoweredBankFinder.init();
    LBG.vefTable.init();
    LBG.appointmentBookings.init();
    LBG.oabShowHidePropertyBox.init();
    LBG.oabShowHideEmailPhoneReminderBoxes.init();
    LBG.oabSearchSelectBranchBoxes.init();
    LBG.LinkDropDownToToolTip_Hrefs.init();
    LBG.jsPrintButton.init();
    LBG.loanServicing.init();
    LBG.showNextOnChange.init();
    LBG.travelFlags.init();
    LBG.fixedTermDepositReinvestDropDown.init();
    LBG.dateShortcut.init();
    LBG.eloanUtils.init();
    LBG.altOverlay.init();
    LBG.marmaladePhaseTwo.init();
    LBG.textNoSpace.init();
    LBG.iban.init();
    LBG.lostAndStolen.init();
    LBG.cssFixUtilities.init();
    LBG.browserSniffer.init();
    LBG.wtError.init();
    LBG.loans.init();
    LBG.selectAccountNew.init();
    LBG.ajaxSelect.init();
    LBG.emailModule.init();
    if ($(".countdown").length > 0) {
        LBG.olympicCountdown.init($(".countdown"));
    }
    $("body").click(function(event) {
        if (event.altKey) {
            if ("console" in window) {
                console.log("August 27th 12:45am");
            }
        }
    });
});
$(window).load(function() {
    LBG.overlay.init();
    LBG.equalisePanelHeights.init();
    LBG.flashLink.init();
});
var LBG = window.LBG || {};
LBG.tags = {
    ajax: {
        ajaxActions: [],
        addAjaxAction: function(id, target, source, event, type, href,
            params, paramsfields, onstart, onerror, oncomplete, replace,
            fade, spinner, disabledSrc, onsuccess, onfadedone) {
            LBG.tags.ajax.ajaxActions.push({
                "id": id,
                "target": target,
                "source": source,
                "event": event,
                "type": type,
                "href": href,
                "params": params,
                "paramsfields": paramsfields,
                "onstart": onstart,
                "onerror": onerror,
                "oncomplete": oncomplete,
                "replace": replace,
                "fade": fade,
                "spinner": spinner,
                "disabledSrc": disabledSrc,
                "onsuccess": onsuccess,
                "onfadedone": onfadedone
            });
        },
        getAjaxAction: function(id) {
            var actions = LBG.tags.ajax.ajaxActions;
            if (actions.length > 0) {
                for (var i = 0, l = actions.length; i < l; i++) {
                    var aa = actions[i];
                    if (aa.id === id) {
                        return aa;
                    }
                }
            }
            return null;
        },
        getAjaxActionData: function(aa) {
            var data, module, $module, $moduleInputs, inputVals = [];
            data = aa.id != null ? {
                "$aid": aa.id
            } : {};
            module = aa.target;
            $module = $(LBG.common.escapeSpecialCharsInId(module));
            $moduleDataCells = $module.find('table td:not(".first")');
            $moduleDataCells.each(function() {
                var isChecked;
                if ($(this).find("input").length === 1) {
                    var $thisInput = $(this).find("input");
                    var thisInputId = $thisInput[0].id.split(
                        ":");
                    isChecked = $thisInput.is(":checked");
                    thisInputId = thisInputId[thisInputId.length -
                        1];
                } else {
                    isChecked = false;
                }
                inputVals.push(isChecked);
            });
            if (aa.type === 2 && aa.params && aa.paramsfields) {
                var p = aa.params.split(",");
                var fp = aa.paramsfields.split(",");
                if (p.length == fp.length) {
                    for (var i = 0; i < p.length; i++) {
                        var el = $(LBG.common.escapeSpecialCharsInId(fp[
                            i]));
                        if (el.length == 0) {
                            data[p[i]] = fp[i];
                        } else {
                            if (el.parents(".formField").hasClass(
                                "error")) {
                                return -1;
                            }
                            if (el.is(":checkbox")) {
                                if (el.length == 1) {
                                    data[p[i]] = el.is(":checked");
                                } else {
                                    if (!data[p[i]]) {
                                        data[p[i]] = [];
                                    }
                                    el.each(function() {
                                        var id = el.attr("id").split(
                                            ":");
                                        var target = data[p[i]];
                                        for (var e in id) {
                                            if (id.hasOwnProperty(
                                                e)) {
                                                if (!target[id[
                                                    e]]) {
                                                    target[id[e]] = [];
                                                }
                                                target = target[
                                                    id[e]];
                                            }
                                        }
                                        target = el.is(
                                            ":checked");
                                    });
                                }
                            } else {
                                data[p[i]] = el.val();
                            }
                        }
                    }
                }
            }
            if (inputVals.length > 0) {
                data.checkedInputs = inputVals.join();
            }
            return data;
        },
        evalFunc: function(f) {
            if (f) {
                if (typeof f == "string") {
                    eval(f);
                } else {
                    f();
                }
            }
        },
        injectContent: function(aa, id, el, response) {
            if (aa.fade != true) {
                if (aa.replace != false) {
                    el.replaceWith(response);
                } else {
                    el.html(response);
                }
            } else {
                el.fadeOut("slow", function() {
                    if (aa.replace != false) {
                        $(this).replaceWith($(response).hide());
                    } else {
                        $(this).html(response);
                    }
                    var e = $(id);
                    var p;
                    if (e.length == 0 && (p = id.lastIndexOf(
                        ":")) > 0) {
                        id = id.substring(p + 1);
                        e = $(LBG.common.escapeSpecialCharsInId(
                            id));
                        if (e.length == 0) {
                            alert(
                                "Can't find element with id: " +
                                id);
                        }
                    }
                    e.fadeIn("slow", function() {
                        LBG.tags.ajax.evalFunc(aa.onfadedone);
                    });
                });
            }
        },
        ajaxActionHandler: function(event) {
            var idx = event.data.idx;
            var aa = LBG.tags.ajax.ajaxActions[idx];
            var uri = LBG.common.ajax.tagUrl(aa.href);
            var id = LBG.common.escapeSpecialCharsInId(aa.target);
            var el = $(id);
            if (el.length == 0) {
                alert("Cannot find the target: " + aa.target +
                    ", element for the ajax call: " + uri);
                return;
            }
            var dat = LBG.tags.ajax.getAjaxActionData(aa);
            if (dat === -1) {
                return;
            }
            var origImg;
            if (aa.disabledSrc) {
                var sEl = $(LBG.common.escapeSpecialCharsInId(aa.source));
                origImg = sEl.attr("src");
                sEl.disabled = true;
                sEl.attr("src", aa.disabledSrc);
            }
            if (aa.spinner) {
                $(LBG.common.escapeSpecialCharsInId(aa.spinner)).attr(
                    "style", "display: block");
            }
            $.ajax({
                url: uri,
                data: dat,
                type: aa.type === 1 ? "POST" : "GET",
                success: function(response) {
                    var vh = LBG.Forms.Validation.Tools.getValidationHandlerObject(
                        el);
                    if (vh) {
                        var pel = el.parent();
                        vh.removeChildren(el);
                        LBG.tags.ajax.injectContent(aa, id,
                            el, response);
                        vh.hideError();
                        vh.isValid = false;
                        el = $(id);
                        vh.findChildren(el.length == 0 ?
                            pel : el);
                    } else {
                        LBG.tags.ajax.injectContent(aa, id,
                            el, response);
                    }
                    LBG.ajax.pageUpdated();
                    LBG.tags.ajax.evalFunc(aa.onsuccess);
                },
                beforeSend: function() {
                    LBG.tags.ajax.evalFunc(aa.onstart);
                },
                error: function() {
                    LBG.tags.ajax.evalFunc(aa.onerror);
                },
                complete: function() {
                    if (aa.spinner) {
                        $(LBG.common.escapeSpecialCharsInId(
                            aa.spinner)).attr("style",
                            "display: none");
                    }
                    if (aa.disabledSrc) {
                        var sEl = $(LBG.common.escapeSpecialCharsInId(
                            aa.source));
                        sEl.disabled = false;
                        sEl.attr("src", origImg);
                    }
                    LBG.tags.ajax.evalFunc(aa.oncomplete);
                }
            });
            return false;
        },
        init: function() {
            $(".ajaxAction").each(function(i, trigger) {
                var jqEl = $(trigger);
                var meta = jqEl.metadata();
                LBG.tags.ajax.addAjaxAction(null, meta.target,
                    jqEl.attr("id"), meta.event, 2, meta.href,
                    meta.params, meta.paramsfields, meta.onstart,
                    meta.onerror, meta.oncomplete, meta.replace,
                    meta.fade, meta.spinner, meta.disabledSrc,
                    meta.onsuccess, meta.onfadedone);
            });
            var actions = LBG.tags.ajax.ajaxActions;
            if (actions.length > 0) {
                for (var i = 0, l = actions.length; i < l; i++) {
                    var aa = actions[i];
                    $(LBG.common.escapeSpecialCharsInId(aa.source)).bind(
                        aa.event, {
                            "idx": i
                        }, LBG.tags.ajax.ajaxActionHandler);
                }
            }
        }
    }
};
$(document).ready(function() {
    LBG.tags.ajax.init();
});