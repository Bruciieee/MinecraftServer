iBarclays.Config = iBarclays.Config || {};
iBarclays.Config.KeyCodes = (function() {
	var b = {
			"8": "backspace",
			"9": "tab",
			"13": "enter",
			"16": "shift",
			"27": "escape",
			"32": "spacebar",
			"33": "PgUp",
			"34": "PgDn",
			"37": "left",
			"38": "up",
			"39": "right",
			"40": "down",
			"48": "0",
			"49": "1",
			"50": "2",
			"51": "3",
			"52": "4",
			"53": "5",
			"54": "6",
			"55": "7",
			"56": "8",
			"57": "9",
			"65": "a",
			"66": "b",
			"67": "c",
			"68": "d",
			"69": "e",
			"70": "f",
			"71": "g",
			"72": "h",
			"73": "i",
			"74": "j",
			"75": "k",
			"76": "l",
			"77": "m",
			"78": "n",
			"79": "o",
			"80": "p",
			"81": "q",
			"82": "r",
			"83": "s",
			"84": "t",
			"85": "u",
			"86": "v",
			"87": "w",
			"88": "x",
			"89": "y",
			"90": "z",
			"116": "f5"
		},
		a = {};
	for (var c in b) {
		if (b.hasOwnProperty(c)) {
			a[b[c]] = c
		}
	}
	return {
		getKeyCodeFromValue: function(d) {
			return a[d] || null
		},
		getValueFromKeyCode: function(d) {
			return b[d] || null
		}
	}
})();
iBarclays.Config = iBarclays.Config || {};
iBarclays.Config.SystemValues = {
	basePageTitle: "myBarclays",
	homePageTitle: document.title,
	datePicker: {
		showOn: "button",
		buttonImage: iBarclays.Config.addPath("img/icons/calendar.html"),
		buttonImageOnly: true,
		dateFormat: "dd/mm/yy",
		changeMonth: true,
		changeYear: true,
		yearRange: "-100:+10",
		buttonText: "",
		onClose: function() {
			if ($(this).valid) {
				$(this).valid()
			}
		}
	},
	cookies: {
		moduleDisplayCookie: "CSmod",
		accountListCookie: "CSacc",
		accountDisplayCookie: "CStab",
		accessibilityCookie: "CSaaa"
	},
	btr: {
		path: "/olb/balances/",
		minFilterChars: 3,
		timeOut: 500
	},
	payments: {
		path: "/olb/payments/",
		minFilterChars: 3,
		timeOut: 500
	},
	sales: {
		path: "/olb/products/",
		minFilterChars: 3,
		timeOut: 500
	},
	customer: {
		path: "/olb/customer/",
		minFilterChars: 3,
		timeOut: 500
	},
	contact: {
		path: "/olb/contact/",
		minFilterChars: 3,
		timeOut: 500
	},
	auth: {
		path: "/olb/auth/"
	},
	account: {
		path: "/olb/account/"
	},
	mandates: {
		path: "/olb/mandates/"
	},
	cloudit: {
		path: "/olb/cloudit/"
	},
	preview: {
		path: "/olb/offline/"
	},
	sales: {
		path: "/olb/products/"
	},
	accountTab: {
		p: "p",
		b: "b"
	},
	siteCatalyst: {
		rsid: "barukprod"
	},
	bCloud: {
		path: "/olb/pingit/"
	},
	busbanking: {
		path: "/olb/business/"
	},
	personalisation: {
		path: "/olb/pingit/"
	},
	features: {
		path: "/olb/features/"
	},
	accopening: {
		path: "/olb/accopening/"
	}
};
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.CharCounter = function(a) {
	a.each(function() {
		var g = $(this);
		var b = g.attr("maxlength");
		var j = g.attr("value");
		var i = 0;
		if (j) {
			i = j.length
		}
		var f = b - i;
		var h;
		var d = f.toString() + " characters left";
		if (g.closest(".row").find(".edit-counter").length > 0) {
			h = g.closest(".row");
			h.find(".edit-counter").html(d)
		} else {
			if (g.closest(".multiple-counter").length >= 1) {
				h = g.closest(".multiple-counter");
				h.append('<span class="edit-counter">' + d + "</span>")
			} else {
				$(".details-table-organisation").children("edit-counter").each(function() {
					$(this).parent().remove(this)
				});
				h = g.parent().parent();
				h.after('<span class="edit-counter">' + d + "</span>")
			}
		} if (g.parent().parent().find("label").length > 0) {
			g.parent().parent().find("label").append('<span class="hide">' + f.toString() + " characters left</span>")
		}

		function c() {
			var k = g.attr("maxlength"),
				o = g.attr("value"),
				n = 0,
				l;
			if (o) {
				n = o.length
			}
			var m = k - n;
			if (g.closest(".multiple-counter").length >= 1) {
				l = g.closest(".row").find(".edit-counter");
				l.text(m.toString() + " characters left on " + j.toLowerCase())
			} else {
				l = g.parent().parent().parent().find(".edit-counter");
				l.text(m.toString() + " characters left")
			}
			return this
		}
		$(this).keyup(c);
		$(this).bind("update.charCounter", c);
		$(this).bind("cut.charCounter paste.charCounter", function() {
			setTimeout(c, 150)
		})
	});
	return this
};
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.dragDrop = new(function() {
	var g = false,
		c = null,
		f = null,
		i = null,
		j = {
			x: 0,
			y: 0
		},
		l = null;
	var h = function() {
		l = null;
		j.x = 0;
		j.y = 0
	};
	var k = function(n) {
		if (n !== undefined) {
			var m = {
				x: n.pageX,
				y: n.pageY
			};
			if (l) {
				j.x = m.x - l.x;
				j.y = m.y - l.y
			} else {
				l = {
					x: 0,
					y: 0
				}
			}
			l.x = m.x;
			l.y = m.y
		}
	};
	var b = function() {
		$(document).mousemove(a);
		$(document).mouseup(d)
	};
	var a = function(m) {
		if (!c) {
			return
		}
		k(m);
		if (f) {
			f.call(c, j, l)
		}
		m.stopPropagation();
		m.originalEvent.cancelBubble = true
	};
	var d = function(m) {
		if (!c) {
			return
		}
		k(m);
		if (i) {
			i.call(c, j, l)
		}
		f = null;
		i = null;
		c = null
	};
	this.dragObject = function(o, m, p, n) {
		c = o;
		f = m;
		i = p;
		if (!g) {
			b()
		}
		h();
		k(n)
	}
});
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Loading = (function() {
	block = function() {
		$.loading(true, {
			text: "",
			mask: true,
			maskCss: {
				zIndex: 2000000,
				background: "#000",
				opacity: 0
			}
		})
	}, unblock = function() {
		$.loading(false)
	}, blockContainer = function() {
		$("#container").loading(true, {
			text: "",
			mask: true,
			html: "<div></div>",
			maskHtml: "<iframe></iframe>",
			maskCss: {
				zIndex: 999995
			}
		})
	}, unblockContainer = function() {
		$("#container").loading(false)
	}, blockModal = function() {
		$("#modal-ctr").loading(true, {
			text: "",
			mask: true,
			html: "<div></div>",
			maskHtml: "<iframe></iframe>",
			maskCss: {
				zIndex: 999999
			}
		})
	};
	$(function() {
		$.loading({
			onAjax: true,
			mask: true,
			text: "",
			pulse: "",
			delay: 0,
			classname: "ajax-loading",
			align: "center",
			css: {
				position: "fixed",
				zIndex: 2000010
			},
			maskCss: {
				zIndex: 2000000,
				background: "#000",
				opacity: 0
			},
			pageOptions: {
				align: "center"
			}
		})
	});
	return {
		block: block,
		unblock: unblock,
		blockContainer: blockContainer,
		unblockContainer: unblockContainer,
		blockModal: blockModal
	}
})();
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.SkipLinks = (function() {
	var c;

	function f() {
		c = $("#skip-links p");
		c.find("a").focus(b);
		c.find("a").click(function(i) {
			i.preventDefault();
			var h = $(i.target).attr("href"),
				g = $(h).position();
			$(h).find("a:visible:first").focus();
			$(window).scrollTop(g.top)
		});
		c.find("a").blur(d)
	}

	function b() {
		c.addClass("visible")
	}

	function d() {
		c.removeClass("visible")
	}

	function a(g) {
		c.find("a:contains('content')").attr("href", "#" + g)
	}
	$(document).ready(f);
	return {
		setSkipContentHref: a
	}
})();
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Events = iBarclays.Controls.Events || {};
iBarclays.Controls.Events.Custom = function() {};
iBarclays.Controls.Events.Custom.prototype.loadEvents = function(b) {
	if (b == null) {
		return
	}
	for (var a = b.length - 1; a >= 0; a--) {
		this.addEventHandler(b[a].event, b[a].handler)
	}
};
iBarclays.Controls.Events.Custom.prototype.addEventHandler = function(c, b) {
	if (this.eventsHandlers == null) {
		this.eventsHandlers = {}
	} else {
		if (this.eventsChainIsBroken !== true) {
			this.eventsHandlers = $.extend(true, {}, this.eventsHandlers);
			this.eventsChainIsBroken = true
		}
	} if (this.eventsHandlers[c] == null) {
		this.eventsHandlers[c] = [b]
	} else {
		for (var a = this.eventsHandlers[c].length - 1; a >= 0; a--) {
			if (this.eventsHandlers[c][a] === b) {
				return
			}
		}
		this.eventsHandlers[c].push(b)
	}
};
iBarclays.Controls.Events.Custom.prototype.fireEvent = function(b) {
	if (this.eventsHandlers == null || this.eventsHandlers[b] == null) {
		return
	}
	var a = this.eventsHandlers[b],
		d = $.makeArray(arguments),
		f = 0,
		c = a.length;
	d = d.slice(1, d.length);
	for (f; f < c; f++) {
		a[f].apply(this, d)
	}
};
iBarclays.Controls.Events.Custom.prototype.getHandler = function(a) {
	var b = this;
	return function() {
		a.apply(b, arguments)
	}
};
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Events = iBarclays.Controls.Events || {};
iBarclays.Controls.Events.DocumentDelegate = function(c, b) {
	function a() {
		if (document.addEventListener) {
			document.addEventListener(c, b, true)
		} else {
			if (document.attachEvent) {
				document.attachEvent((c === "focus") ? "onfocusin" : "onfocusout", b)
			} else {
				document["on" + c] = b
			}
		}
	}
	if (c === "blur" || c === "focus") {
		a()
	} else {
		$("body").bind(c, b)
	}
};
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.Select = iBarclays.Controls.Forms.Select || {};
iBarclays.Controls.Forms.Select.Custom = (function() {
	var c = [];

	function b(g) {
		var d = g == null ? g : $(g.target);
		for (var f = c.length - 1; f >= -0; f--) {
			if (g && $.contains(c[f].rootEl[0], d[0])) {
				continue
			}
			c[f].hideList()
		}
	}
	var a = function(d) {
		c.push(this);
		this.isOpen = false;
		this.rootEl = d;
		this.cssClass = this.rootEl.attr("class");
		this.selectEl = this.rootEl.find("select");
		this.selectName = this.selectEl.attr("name");
		this.selectID = this.selectEl.attr("id") || this.selectName;
		this.selectOptions = this.selectEl.find("option");
		this.isSimpleList = false;
		if (this.selectOptions.length >= 100) {
			this.isSimpleList = true
		}
		this.label = this.rootEl.find("label");
		this.disabled = this.selectEl.attr("disabled");
		this.customHandle = undefined;
		this.customList = undefined;
		this.customListItems = [];
		this.customOptions = [];
		this.selectedOption = undefined;
		this.dataArray = [];
		this.dataArrayTitle = "";
		this.rootEl.attr("id", this.selectID);
		this.renderContainer();
		this.bindEvents();
		this.label.remove();
		this.keyPressTimer = null;
		this.timerCount = 0;
		this.keyPressTimeOutIncrement = 200;
		this.keyPressString = "";
		this.preventMouseEvents = false;
		this.mouseTimer = null;
		this.updateFirstSelect(this.defaultOption);
		this.selectOptions.remove();
		this.selectEl.remove()
	};
	a.prototype = new iBarclays.Controls.Events.Custom();
	a.prototype.renderContainer = function() {
		var f = iBarclays.Data.Meta.getValueFromClassName(this.cssClass, "containerClass") || "",
			d = $('<fieldset class="' + iBarclays.Data.Meta.getValueFromClassName(this.cssClass, "selectSize") + '">' + (this
					.label.html() ? "<legend><span>" + this.label.html() + "</span></legend>" : "") + '<div class="holder' + (f.length ?
					" " + f : "") + '"><div class="handle"><p></p></div><div class="list" id="list' + this.selectID +
				'"></div></div></fieldset>');
		this.rootEl.append(d);
		this.customHandle = this.rootEl.find("div.handle p");
		this.customList = this.rootEl.find("div#list" + this.selectID);
		this.populateList();
		if (!this.selectedOption) {
			this.selectedOption = $({})
		}
	};
	a.prototype.populateList = function() {
		var h = this.customList.prev(),
			f = this.customList.detach(),
			k, j, d = this.selectOptions.length;
		if (this.isSimpleList) {
			this.rootEl.addClass("simple-select")
		}
		for (var g = 0; g < d; g++) {
			j = $(this.selectOptions[g]);
			if (this.isSimpleList) {
				k = '<div class="option"><input type="radio" name="' + this.selectName + '" id="' + this.selectID + g +
					'" value="' + j.val() + '" class="' + j.attr("class").replace("_", " ") + '">' + this.selectOptions[g].text +
					"</div>";
				if (this.selectOptions[g].selected) {
					this.customHandle.append('<span class="title">' + this.selectOptions[g].text + "</span>");
					this.selectedOption = $(k);
					k = k.replace("option", "option highlight-option selected")
				}
				this.customListItems.push(k)
			} else {
				k = '<div class="option"><input type="radio" name="' + this.selectName + '" id="' + this.selectID + g +
					'" value="' + j.val() + '" class="' + j.attr("class").replace("_", " ") + '" /><label for="' + this.selectID +
					g + '">Placeholder</label></div>';
				this.populateItem(j, k)
			}
			this.dataArray.push({
				value: this.dataArrayTitle,
				node: k
			})
		}
		this.customList.html(this.customListItems.join(""));
		this.dataFilter = new iBarclays.Data.DataFilter(this.dataArray, "value", false);
		this.defaultOption = $(this.selectedOption || this.customOptions[0]);
		h.after(f)
	};
	a.prototype.populateItem = function(j, f) {
		var i = j.attr("class"),
			p = j.text(),
			m = j.index(this.selectedOptions),
			o = iBarclays.Data.Meta.getValueFromClassName(i, "iconType"),
			r = iBarclays.Data.Meta.getValueFromClassName(i, "account-balance"),
			l = iBarclays.Data.Meta.getValueFromClassName(i, "detail"),
			t = iBarclays.Data.Meta.getValueFromClassName(i, "class").replace("_", " "),
			q = iBarclays.Data.Meta.getValueFromClassName(i, "businessIndicator"),
			h = iBarclays.Data.Meta.getValueFromClassName(i, "op"),
			n = iBarclays.Data.Meta.getValueFromClassName(i, "sortcodeaccount"),
			g = iBarclays.Data.Meta.getValueFromClassName(i, "rightAlignDetailText"),
			d;
		if (n == undefined || n == "") {
			n = iBarclays.Data.Meta.getValueFromClassName(i, "sortcodeaccount", "|")
		}
		if (o !== undefined && o !== "") {
			segCss = "pacc";
			if (q != "" && q == "true") {
				segCss = "bacc"
			}
			d = '<span class="title ' + o + " " + segCss + '">' + p + "</span>";
			if (h != "" && h == "true") {
				d = d.concat('<span class="OP"></span>')
			}
			if (n !== undefined && n !== "") {
				d = d.concat('<br clear="left"/>&nbsp;');
				d = d.concat('<span class="biglist-account-detail">' + n + "</span>")
			}
		} else {
			if (n !== undefined && n !== "") {
				d = '<span class="title">' + p + "</span>";
				d = d.concat('<br clear="left"/>&nbsp;');
				d = d.concat('<span class="list-account-detail">' + n + "</span>")
			} else {
				d = '<span class="title">' + p + "</span>"
			}
		} if (r !== "") {
			selectHTMLinnerValue = '<span class="balance"><span><span class="mid">' + r + "</span></span></span>";
			d = d.concat(selectHTMLinnerValue)
		}
		if (l !== "") {
			selectHTMLinnerDetail = '<span class="detail">' + l.replace(/_/g, " ") + "</span>";
			d = d.concat(selectHTMLinnerDetail)
		}
		if (g !== "") {
			selectHTMLinnerDetail = '<span class="right-align-detail-text">' + g + "</span>";
			d = d.concat(selectHTMLinnerDetail)
		}
		if (t !== "") {
			f.addClass(t)
		}
		var k = f = (f.replace("Placeholder", d));
		this.customOptions.push($(k));
		if (this.selectOptions[m].selected) {
			this.customHandle.append(d);
			k = k.replace('<div class="option">', '<div class="option highlight-option selected">');
			k = k.replace("<label", '<label class="selected"');
			k = k.replace("/><label", 'checked="checked" /><label');
			this.selectedOption = $(k)
		}
		this.customListItems.push(k);
		this.dataArrayTitle = p.toLowerCase()
	};
	a.prototype.bindEvents = function() {
		this.rootEl.bind("initialOpen", this.getHandler(this.onInitialOpen));
		if (this.disabled != true) {
			this.customHandle.click(this.getHandler(this.customHandle_CLICK))
		}
		this.customList.click(this.getHandler(this.customList_CLICK));
		this.customList.find(".option").mouseenter(this.getHandler(this.customOptions_MOUSEENTER));
		var d = this.customList.closest(".holder");
		d.keyup(this.getHandler(this.customList_KEYUP));
		d.keydown(this.getHandler(this.customList_KEYDOWN))
	};
	a.prototype.customHandle_CLICK = function(d) {
		if (this.isOpen === true) {
			this.hideList();
			this.selectedOption.find("input").focus()
		} else {
			this.showList()
		}
	};
	a.prototype.customList_CLICK = function(d) {
		var f = $(d.target);
		if (this.isSimpleList) {
			if (f.is("div,label,label span")) {
				this.updateCustomSelect(f.closest("div.option"), false)
			}
		} else {
			if (f.is("div.option,label,label span")) {
				this.updateCustomSelect(f.closest("div.option"), f.is("div.option"))
			}
		}
		this.customList.css("top", this.customHandle.height());
		d.preventDefault();
		this.selectedOption.find("input").focus()
	};
	a.prototype.customList_KEYDOWN = function(d) {
		var l = iBarclays.Config.KeyCodes.getValueFromKeyCode(d.keyCode),
			f = this.rootEl.find(".highlight-option"),
			j = false,
			g;
		if (!this.rootEl.hasClass("disableKeys") && ((d.keyCode >= 65 && d.keyCode <= 90) || (d.keyCode >= 48 && d.keyCode <=
			57))) {
			var m = new RegExp("^\\s*" + l, "ig");
			g = this.customList.children().filter(function() {
				if (this.isSimpleList) {
					if ($(this).text().match("Please select")) {
						return false
					} else {
						if ($(this).text().match(m)) {
							return true
						}
					}
				} else {
					if ($(this).first("span").text().match("Please select")) {
						return false
					} else {
						if ($(this).first("span").text().match(m)) {
							return true
						}
					}
				}
			}).first();
			if (g != undefined && g.length > 0) {
				this.addHighlight(g);
				this.removeHighlight(f)
			}
			j = true
		} else {
			if (/up|down|PgUp|PgDn/i.test(l)) {
				if (!this.isOpen) {
					this.showList()
				} else {
					clearTimeout(this.mouseTimer);
					this.preventMouseEvents = true;
					if (f.length > 0) {
						g = this.customList.children(".option");
						var i = g.index(f);
						var h = 1;
						if (/PgDn|PgUp/i.test(l)) {
							h = 10
						}
						var k = 0;
						if (/up|PgUp/i.test(l)) {
							k = i - h
						} else {
							k = i + h
						}
						k = Math.max(0, k);
						k = Math.min(k, g.length - 1);
						g = g.eq(k)
					} else {
						g = this.customOptions[0]
					} if (g.length > 0) {
						this.addHighlight(g);
						this.removeHighlight(f);
						g.click()
					}
				}
				j = true
			} else {
				if (/enter/i.test(l)) {
					f.find("label").click();
					j = true
				} else {
					if (/escape/i.test(l) || /tab/i.test(l)) {
						this.hideList()
					}
				}
			}
		} if (j) {
			d.preventDefault()
		}
	};
	a.prototype.customList_KEYUP = function(f) {
		this.allowMouseEvents();
		clearTimeout(this.keyPressTimer);
		var d = iBarclays.Config.KeyCodes.getValueFromKeyCode(f.keyCode);
		if (/[a-z0-9]/i.test(d)) {
			this.handleKeyPress(d);
			this.keyPressTimer = setTimeout(this.getHandler(this.handleKeyPressTimeOut), this.keyPressTimeOutIncrement)
		}
	};
	a.prototype.customOptions_MOUSEENTER = function(d) {
		if (!this.preventMouseEvents) {
			this.removeHighlight(this.rootEl.find(".highlight-option"));
			this.addHighlight($(d.currentTarget))
		}
	};
	a.prototype.addHighlight = function(d) {
		d.addClass("highlight-option");
		if (d.is(":visible")) {
			d.find("input").focus()
		}
	};
	a.prototype.removeHighlight = function(d) {
		d.removeClass("highlight-option")
	};
	a.prototype.showList = function() {
		b();
		if (iBarclays.iOSDevice()) {
			iBarclays.Help.Contextual.showContextHelp(this.rootEl)
		}
		if (this.customHandle.height() > 0) {
			this.customList.css("top", this.customHandle.height())
		}
		if (iBarclays.Data.Browser.isIE7) {
			var d = this.customList.closest(".holder");
			d.addClass("active-select");
			var f = d.closest(".module");
			if (f.length > 0) {
				f.addClass("active-module")
			}
		}
		this.customList.addClass("open");
		if (this.rootEl.hasClass("overflow-spill")) {
			$("#content").addClass("no-overflow");
			$("#content div.login-top").addClass("no-overflow")
		}
		this.isOpen = true;
		this.selectedOption.mouseenter();
		this.selectedOption.find("input").focus()
	};
	a.prototype.hideList = function() {
		if (iBarclays.iOSDevice()) {
			iBarclays.Help.Contextual.hideContextHelp(this.rootEl)
		}
		this.customList.removeClass("open");
		if (iBarclays.Data.Browser.isIE7) {
			var d = this.customList.closest(".active-select");
			if (d.length > 0) {
				d.removeClass("active-select");
				var f = d.closest(".active-module");
				if (f.length > 0) {
					f.removeClass("active-module")
				}
			}
		}
		if (this.rootEl.hasClass("overflow-spill")) {
			$("#content").removeClass("no-overflow");
			$("#content div.login-top").removeClass("no-overflow")
		}
		this.isOpen = false
	};
	a.prototype.updateCustomSelect = function(i, h) {
		var j = this.selectedOption.find("input"),
			f = i.find("input"),
			g;
		var d = iBarclays.Data.Meta.getValueFromClassName(f.attr("class"), "sortcodeaccount");
		if (d == undefined || d == "") {
			d = iBarclays.Data.Meta.getValueFromClassName(f.attr("class"), "sortcodeaccount", "|")
		}
		if (f.attr("id") !== j.attr("id") || j.not(":checked")) {
			f.attr("checked", "checked");
			f.click();
			this.selectedOption.removeClass("selected");
			this.selectedOption = i;
			this.selectedOption.addClass("selected");
			this.customHandle.empty();
			if (this.isSimpleList) {
				html = '<span class="title">' + this.selectedOption.text() + "</span>"
			} else {
				if (d !== undefined && d !== "") {
					html = this.selectedOption.find("label").children().clone();
					g = this.selectedOption.find("label").attr("class")
				} else {
					html = this.selectedOption.find("label > span").clone();
					g = this.selectedOption.find("label").attr("class")
				}
			}
			this.customHandle.append(html);
			this.customHandle.attr("class", g)
		}
		if (h !== true) {
			this.hideList()
		} else {
			this.addHighlight(this.selectedOption)
		}
	};
	a.prototype.updateFirstSelect = function(d) {
		if (this.selectedOption !== undefined) {
			var f = this.selectedOption.find("input").attr("id");
			$("#" + f).attr("checked", "checked");
			this.selectedOption = this.selectedOption.addClass("selected")
		}
	};
	a.prototype.handleKeyPress = function(f) {
		this.keyPressString += f;
		var d = this.dataFilter.getFilteredSet(this.keyPressString);
		if (d[0] != null) {
			this.updateCustomSelect(d[0]["node"], true)
		}
	};
	a.prototype.handleKeyPressTimeOut = function() {
		this.keyPressString = ""
	};
	a.prototype.onInitialOpen = function() {
		this.selectedOption.find("input").click()
	};
	a.prototype.allowMouseEvents = function() {
		var d = this;
		this.mouseTimer = setTimeout(function() {
			d.preventMouseEvents = false
		}, 200)
	};
	$(document).click(b);
	return a
})();
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.Select = iBarclays.Controls.Forms.Select || {};
iBarclays.Controls.Forms.Select.CustomAccessible = (function() {
	var a = function(d) {
		$combobox = d.find("select");
		var c = new iBarclays.Controls.Forms.Select.CustomAccessible.Model($combobox);
		var b = new iBarclays.Controls.Forms.Select.CustomAccessible.View(d, c);
		b.render()
	};
	return a
})();
iBarclays.Controls.Forms.Select.CustomAccessible.Model = (function() {
	var a = function(b) {
		this.$options = b.find("option");
		this.$label = b.siblings("label");
		this.selectedValue = b.val();
		b.change(this.getHandler(this.onChange));
		b.keyup(this.getHandler(this.onKeyup));
		b.focus(this.getHandler(this.onFocus));
		b.blur(this.getHandler(this.onBlur));
		this.$combobox = b
	};
	a.prototype = new iBarclays.Controls.Events.Custom();
	a.prototype.getOptions = function() {
		var b = [];
		this.$options.each(function() {
			var c = $(this).val();
			var d = $(this).text();
			b.push({
				value: c,
				text: d
			})
		});
		return b
	};
	a.prototype.getSelectedValue = function() {
		return this.selectedValue
	};
	a.prototype.setSelectedValue = function(b) {
		this.$combobox.val(b);
		this.$combobox.change()
	};
	a.prototype.getSelectedText = function() {
		return this.$options.filter("[value=" + this.selectedValue + "]").text()
	};
	a.prototype.getLabelContent = function() {
		return this.$label.html()
	};
	a.prototype.onChange = function(b) {
		this.selectedValue = this.$combobox.val();
		this.fireEvent("change")
	};
	a.prototype.onKeyup = function(d) {
		var c = 13;
		var b = 27;
		switch (d.keyCode) {
			case c:
			case b:
				this.fireEvent("listCloseRequested");
				break;
			default:
				this.onChange()
		}
	};
	a.prototype.onFocus = function(b) {
		this.fireEvent("focus")
	};
	a.prototype.onBlur = function(b) {
		this.fireEvent("blur")
	};
	a.prototype.focus = function() {
		this.$combobox.focus()
	};
	return a
})();
iBarclays.Controls.Forms.Select.CustomAccessible.View = (function() {
	var c = [];

	function b(g) {
		var d = g == null ? g : $(g.target);
		for (var f = c.length - 1; f >= -0; f--) {
			if (g && $.contains(c[f].$rootEl[0], d[0])) {
				continue
			}
			c[f].hideList()
		}
	}
	var a = function(f, d) {
		this.$rootEl = f;
		this.model = d;
		this.$wrapper = $("<div>");
		c.push(this);
		this.model.addEventHandler("change", this.getHandler(this.onModelChanged));
		this.model.addEventHandler("focus", this.getHandler(this.onModelFocussed));
		this.model.addEventHandler("blur", this.getHandler(this.onModelBlurred));
		this.model.addEventHandler("listCloseRequested", this.getHandler(this.hideList))
	};
	a.prototype = new iBarclays.Controls.Events.Custom();
	a.prototype.render = function() {
		this.createDropDown();
		this.$wrapper.appendTo(this.$rootEl)
	};
	a.prototype.createDropDown = function() {
		var d = $("<div class='holder' />");
		d.appendTo(this.$wrapper);
		this.createListHandle(d);
		this.createList(d);
		this.$holder = d
	};
	a.prototype.createListHandle = function(h) {
		var f = $("<div class='handle' />");
		f.appendTo(h);
		f.click(this.getHandler(this.onHandleClicked));
		var g = $("<p class='selected' />");
		var d = $("<span class='title' />");
		d.text(this.model.getSelectedText());
		d.appendTo(g);
		g.appendTo(f);
		this.$handle = g
	};
	a.prototype.createList = function(k) {
		var g = $("<div class='list' />");
		g.appendTo(k);
		var f = this.model.getOptions();
		for (var h = 0; h < f.length; ++h) {
			var j = f[h];
			var d = $("<div class='option' />");
			d.attr("data-value", j.value);
			d.html("<label><span class='title'>" + j.text + "</span></label>");
			d.appendTo(g);
			d.mouseenter(this.getHandler(this.onOptionMouseEnter));
			d.click(this.getHandler(this.onOptionClicked))
		}
		this.$list = g
	};
	a.prototype.onHandleClicked = function(d) {
		this.toggleDropDown();
		this.model.focus()
	};
	a.prototype.toggleDropDown = function() {
		if (this.isOpen) {
			this.hideList()
		} else {
			this.showList()
		}
	};
	a.prototype.showList = function() {
		b();
		if (iBarclays.iOSDevice()) {
			iBarclays.Help.Contextual.showContextHelp(this.$rootEl)
		}
		if (this.$handle.height() > 0) {
			this.$list.css("top", this.$handle.height())
		}
		if (iBarclays.Data.Browser.isIE7) {
			this.$holder.addClass("active-select");
			var d = this.$holder.closest(".module");
			if (d.length > 0) {
				d.addClass("active-module")
			}
		}
		this.$list.addClass("open");
		if (this.$rootEl.hasClass("overflow-spill")) {
			$("#content").addClass("no-overflow");
			$("#content div.login-top").addClass("no-overflow")
		}
		this.isOpen = true;
		this.highlightOption(this.getSelectedOption())
	};
	a.prototype.hideList = function() {
		if (iBarclays.iOSDevice()) {
			iBarclays.Help.Contextual.hideContextHelp(this.$rootEl)
		}
		this.$list.removeClass("open");
		if (iBarclays.Data.Browser.isIE7) {
			if (this.$holder.length > 0) {
				this.$holder.removeClass("active-select");
				var d = this.$holder.closest(".active-module");
				if (d.length > 0) {
					d.removeClass("active-module")
				}
			}
		}
		if (this.$rootEl.hasClass("overflow-spill")) {
			$("#content").removeClass("no-overflow");
			$("#content div.login-top").removeClass("no-overflow")
		}
		this.isOpen = false
	};
	a.prototype.getSelectedOption = function() {
		return this.$rootEl.find(".option[data-value=" + this.model.getSelectedValue() + "]")
	};
	a.prototype.onOptionMouseEnter = function(d) {
		this.highlightOption($(d.currentTarget));
		this.model.focus()
	};
	a.prototype.highlightOption = function(d) {
		if (!this.preventMouseEvents) {
			this.removeHighlights();
			d.addClass("highlight-option");
			this.ensureOptionIsVisible(d)
		}
	};
	a.prototype.onOptionClicked = function(d) {
		var f = $(d.currentTarget).attr("data-value");
		this.hideList();
		this.model.focus();
		this.model.setSelectedValue(f)
	};
	a.prototype.removeHighlights = function() {
		this.$list.find(".highlight-option").removeClass("highlight-option")
	};
	a.prototype.onModelChanged = function() {
		this.changeSelectedText();
		this.highlightOption(this.getSelectedOption());
		this.model.focus()
	};
	a.prototype.changeSelectedText = function() {
		this.$handle.find("span:first").text(this.model.getSelectedText())
	};
	a.prototype.onModelFocussed = function() {
		this.$rootEl.addClass("custom-select-focus")
	};
	a.prototype.onModelBlurred = function() {
		this.$rootEl.removeClass("custom-select-focus")
	};
	a.prototype.ensureOptionIsVisible = function(h) {
		var f = h.height() + 1;
		var g = h.position().top;
		var i = g + f;
		var d = this.$list.scrollTop();
		var k = d + this.$list.height();
		if (g < 0) {
			this.$list.scrollTop(d + g)
		} else {
			if (i > this.$list.height()) {
				var j = this.$list.height() - i;
				this.$list.scrollTop(d - j)
			}
		}
	};
	$(document).click(b);
	return a
})();
iBarclays = iBarclays || {};
iBarclays.Pages = iBarclays.Pages || {};
iBarclays.Pages.Base = function() {};
iBarclays.Pages.Base.prototype = new iBarclays.Controls.Events.Custom();
iBarclays.Pages.Base.prototype.handleRequestError = function(a) {
	this.processError(a)
};
iBarclays.Pages.Base.prototype.clearRequestErrors = function() {
	this.processError()
};
iBarclays.Pages.Base.prototype.updateHelpCentre = function(b) {
	var a = $("ul.help-centre");
	if (a.length > 0) {
		a.replaceWith(b)
	} else {
		$("div.help-centre").prepend(b)
	}
};
iBarclays.Pages.Base.prototype.updateChannelInfo = function(a) {
	var b = $("#channel-info");
	if (b.length > 0) {
		b.replaceWith(a)
	} else {
		$("div.channel-info-container").prepend(a)
	}
};
iBarclays.Pages.Base.prototype.processError = function(a) {
	var b = $("#page"),
		c = $("div.request-error");
	if (a) {
		if (a.hasClass("server-error")) {
			a = $("<div></div>").addClass("request-error").attr("data-role", "alert").append($("<div></div>").addClass(
				"icon-exclamation-server-error")).append($("<div></div>").addClass("item").append(a.html()))
		}
		if (c.length > 0) {
			c.replaceWith(a)
		} else {
			b.prepend(a)
		}
	} else {
		if (c.length > 0) {
			c.remove()
		}
	}
};
iBarclays.Pages.Base.prototype.hasError = function(b, c, a) {
	var d = $(b).filter(".request-error");
	if (d.length == 0) {
		d = $(b).find(".request-error")
	}
	if (d.length == 0) {
		d = $(b).find(".server-error")
	}
	if (d.length > 0) {
		if (c) {
			this.handleRequestError(d)
		}
		return true
	}
	if (!a) {
		$(page).find(".form-error").remove();
		this.clearRequestErrors()
	}
	return false
};
iBarclays = iBarclays || {};
iBarclays.Pages = iBarclays.Pages || {};
iBarclays.Pages.Login = function(a) {
	this.rootNode = $("login-ctr");
	this.COOKIE_NAME = "assist2";
	this.root = this.rootNode;
	this.form = this.root.find("form");
	this.inputs = this.form.find("input");
	this.textInputs = this.inputs.filter("[type=text]");
	this.form.find("div.optional input[type=text]").attr("linked", true);
	this.groups = this.form.find("div.option-group");
	this.linkedRadioButtons = this.inputs.filter(".linked-radio");
	this.linkedLabels = this.root.find("label.linked-label");
	this.selectedGroup = null;
	this.selectedRadioButton = null;
	this.savedDetailsPanel = this.form.find("#saved-details");
	this.noSavedDetailsPanel = this.form.find("#none-saved-details");
	this.storedAccountDetails = this.getStoredAccountDetails();
	this.table = this.root.find("#login-table");
	this.displayStoredAccountDetails();
	this.displayNoSavedDetails();
	this.setUp()
};
iBarclays.Pages.Login.prototype = new iBarclays.Pages.Base();
iBarclays.Pages.Login.prototype.setUp = function() {
	if ($(".date-picker").length) {
		if (iBarclays.iOSDevice()) {
			iBarclays.Config.SystemValues.datePicker.showOn = "both"
		}
		$(".date-picker").datepicker(iBarclays.Config.SystemValues.datePicker);
		$(".ui-datepicker-trigger").each(function() {
			var c = $(this).closest(".text");
			c.append(this)
		})
	}
	$("div.accordion div.module-holder").each(this.setAccordionHolderClass);
	$("div.accordion").accordion({
		header: ".module-header",
		autoHeight: false
	});
	this.linkedRadioButtons.keydown(function(d) {
		switch (d.which) {
			case 32:
			case 37:
			case 38:
			case 39:
			case 40:
				var c = $(this).closest("form");
				c.attr("data-eventFromKey", "true");
				break
		}
		return true
	});
	this.linkedRadioButtons.click(this.getHandler(this.radio_Click));
	var b = window.opener;
	var a = $(".section-error p");
	if (b && a.length) {
		if (a.html().indexOf("505") > 0) {
			b.location = "LoginLink6fbf.html?error=505";
			window.close()
		}
	}
};
iBarclays.Pages.Login.prototype.getStoredAccountDetails = function() {
	return $.cookie(this.COOKIE_NAME)
};
iBarclays.Pages.Login.prototype.setStoredAccountDetails = function(a) {
	$.cookie(this.COOKIE_NAME, a, {
		expires: 999
	});
	return this
};
iBarclays.Pages.Login.prototype.deleteAccountDetails = function(c) {
	var b = this.getStoredAccountDetails();
	if (b) {
		var a = b.split(",");
		a.splice(c, 1);
		b = a.join(",")
	}
	this.setStoredAccountDetails(b)
};
iBarclays.Pages.Login.prototype.saveAccountDetails = function(b) {
	var a = this.getStoredAccountDetails();
	if (a && a.length) {
		itemExists = b.match(a);
		if (!itemExists) {
			a += "," + b
		}
	} else {
		a = b
	}
	this.setStoredAccountDetails(a)
};
iBarclays.Pages.Login.prototype.getStoredDataItem = function(b, a) {
	var d = "(#|,|^)" + a + "=([^&,]+)(&amp;|,|$)",
		c = new RegExp(d);
	match = c.exec(b);
	if (match) {
		return match[2]
	}
	return
};
iBarclays.Pages.Login.prototype.displayNoSavedDetails = function() {
	this.textInputs.val("");
	this.displayOptionalInputs()
};
iBarclays.Pages.Login.prototype.displayOptionalInputs = function(c) {
	var g = false;
	if (!c) {
		c = (this.linkedRadioButtons.filter(":checked").length) ? this.linkedRadioButtons.filter(":checked") : this.linkedRadioButtons
			.eq(0);
		g = true
	}
	c = $(c);
	var b = c.attr("id");
	if (b) {
		var a = "#" + b.replace("-radio", ""),
			d = c.closest("form");
		d.validate().resetForm();
		d.find("div.option-group").hide().filter(a).show();
		if (g) {
			formContext = d
		} else {
			this.selectedGroup = this.groups.filter(a);
			formContext = this.selectedGroup;
			var f = c.val();
			if (this.savedAuthMethod != f) {
				d.find("span.optional-label").hide();
				d.find(a + "-label").show();
				d.find("div.save-preference").show()
			} else {
				d.find("div.save-preference").hide()
			}
		} if (d.attr("data-eventFromKey")) {
			d.removeAttr("data-eventFromKey")
		} else {
			formContext.find("input[type=text]").eq(0).focus()
		}
	}
};
iBarclays.Pages.Login.prototype.displayStoredAccountDetails = function() {
	this.table.find("a.remove").click(this.getHandler(this.remove_Click))
};
iBarclays.Pages.Login.prototype.setAccordionHolderClass = function(a) {
	var b = "middle-module";
	if (a === 0) {
		b = "first-module"
	} else {
		if (!$(this).next().length) {
			b = "last-module"
		}
	}
	$(this).addClass(b)
};
iBarclays.Pages.Login.prototype.differentDetails_Click = function() {
	this.displayNoSavedDetails()
};
iBarclays.Pages.Login.prototype.radio_Click = function(a) {
	this.displayOptionalInputs($(a.target))
};
iBarclays.Pages.Login.prototype.loginForm_Submit = function(c) {
	var b = $(c.target),
		a = b.closest("form");
	if (b.is("input#back") || a.valid()) {
		iBarclays.Controls.Loading.blockContainer();
		this.preventLoginTimeout()
	} else {
		c.preventDefault()
	}
};
iBarclays.Pages.Login.prototype.remove_Click = function(d) {
	var c = $(d.target),
		a = c.closest("tr"),
		b = a.closest("table");
	this.deleteAccountDetails(b.find("tr").index(a));
	a.remove();
	if (!b.find("tr").length) {
		this.displayNoSavedDetails()
	} else {
		a.remove()
	}
	d.preventDefault()
};
iBarclays.Pages.Login.prototype.preventLoginTimeout = function() {
	if (loginTimeoutKeepAliveInstance.timedOut) {
		$.ajax({
			type: "GET",
			url: (iBarclays.preview() ? iBarclays.Config.SystemValues.preview.path : iBarclays.Config.SystemValues.auth.path) +
				"LoginTimeoutKeepAlive.action",
			async: false
		})
	}
};
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.ErrorMessages = {
	formErrorMessage: 'You have&#160;<span class="error-count"></span>&#160;<span class="error-text">errors</span> to correct before you can proceed',
	defaultDateMessage: "You must enter a valid date",
	defaultPastDateMessage: "Sorry, you are not allowed to enter a future date. Please select today or a previous date.",
	accountOpenDateValidationMessage: "The dates you're searching for begin before you opened your account. Please choose a start date on or after {1}.",
	defaultIsFromDateTwoYearValidMessage: "Sorry, search date cannot be prior to last 2 years.",
	defaultSearchDateLimitMessage: "Sorry, search date range cannot exceed maximum limit of 395 days.",
	defaultFutureDateMessage: "You must enter a future date",
	defaultTodayOnwardsDateMessage: "You must enter today or a future date",
	defaultToDateMessage: "To date must be after from date",
	defaultToYearMessage: "To year must be after from year",
	allowSameDateMessage: "To date must be on or after from date",
	allowSameYearMessage: "To year must be on or after from year",
	defaultAmountMessage: "The amount must be a valid number",
	defaultNotEqualMessage: "You must select a different option for this value",
	defaultNumberOfCharactersMessage: "Please enter exactly {0} characters",
	defaultPostcodeMessage: "You must enter a valid postcode",
	defaultRadioMessage: "Please select one of the available options",
	defaultSelectMessage: "Please select one of the available options",
	defaultRequiredMessage: "This field is required",
	defaultValidCharactersMessage: "Please enter only valid characters",
	defaultYesMessage: "You must answer yes to this question",
	defaultLettersMessage: "Please enter standard alphabet characters (a-b,A-B)",
	defaultLettersOrNumbersMessage: "Please enter number or standard alphabet characters (1-9,a-b,A-B)",
	defaultStandingOrderDateMessage: {
		isAfterThreeDays: "Selected Date must be after 3 days from today's date",
		isAfterInitialDate: "Start Date must be after Initial Date",
		isAfterStartDate: "Selected date must be after Start date",
		isAfterEndDate: "Final date must be after End date"
	},
	smartphoneCheckboxMessage: {
		required: "You need to tick the box to confirm you have a smartphone to continue"
	},
	groupPaymentMessages: {
		isGroupDescEmpty: "You must supply a description for this group",
		isGroupDescValid: "Group description may only contain the following characters: 0-9 A-Z . Space - / ; & +",
		isGroupNameValid: "Group name may only contain the following characters: 0-9 A-Z . Space - / ; & +",
		isGroupNameEmpty: "You must supply a name for this group"
	},
	accountNameMessages: {
		required: "You must enter an account name",
		selectRequired: "You must select an account name",
		isAccountNameValid: "This account name may not contain the following characters: <> with a max length of 25 characters.",
		isChosenNameValid: "This account name may only contain the following characters: A-Z a-z 0-9 / ' ( ) - &amp; with a max length of 15 characters.",
		radioNotEqualTo: "You must transfer to a different account"
	},
	borrowingReasonMessages: {
		selectRequired: "Please select one of the available options"
	},
	signatureMessages: {
		signatureRequired: "Please sign this document before continuing"
	},
	accountNumberMessages: {
		required: "You must enter an account number",
		digits: "Account number must contain only numeric characters",
		lengthIs: $.format("Account number must be exactly {0} digits")
	},
	mvcCodeMessages: {
		required: "You must enter a mobile verification code",
		digits: "Mobile verification code must contain only numeric characters",
		lengthIs: $.format("Mobile verification code must be exactly {0} digits")
	},
	amountMessages: {
		required: "You must enter an amount",
		number: "The amount must be a valid number",
		amountTooHighMessage: "The amount you have entered is too high",
		amountOutOfRangeMessage: "The amount you have entered must be within the specified limits",
		multiple: "The amount you have entered must be a multiple of &pound;{0}. Please choose another amount",
		withinRange: "The amount must be between {4} and {5}",
		isLowthanLimit: "The amount must be more than &pound;{1}",
		amountLowerLimit: "Please enter amount of &pound;10 or more",
		amountRange: "Rises above amount must be greater than falls below amount",
		wholeNumber: "The amount must be a whole number",
		isAmountZero: "The amount must be more than &pound;0"
	},
	paymentAmountMessages: {
		required: "Please choose a payment amount",
		number: "Please choose a payment amount",
		valid: "Please choose a payment amount",
		tooLow: "Please choose a payment amount"
	},
	dateMessages: {
		required: "You must enter a valid date",
		date: "You must enter a valid date",
		dateRange: "Please select a valid date"
	},
	birthDateMessages: {
		required: "You must enter a valid date of birth",
		date: "You must enter a valid date of birth",
		isDateOfBirthValid: "You must enter a valid date of birth",
		isDateSelectedValid: "You must enter a valid date of birth"
	},
	cardDigitsMessages: {
		required: "You must enter the last digits of your card number",
		digits: "Last digits of your card number must contain only numeric characters",
		lengthIs: $.format("Last digits of your card number must contain exactly {0} characters")
	},
	cardNumberMessages: {
		required: "You must enter a card number",
		digits: "Card number must contain only numeric characters",
		lengthIs: $.format("Card number must be exactly {0} digits")
	},
	confirmMessages: {
		required: "You must tick this box to show you accept the terms and conditions",
		checkbox: "You must tick this box to continue"
	},
	pdfLinkMessages: {
		clickAll: "You must click on all PDF links to continue"
	},
	descriptionMessages: {
		maxlength: $.format("Your description must be {0} characters or less")
	},
	mobilePhoneMessages: {
		isMobilePhoneValid: "Invalid mobile number entered.",
		equalTo: "The mobile phone numbers must match."
	},
	emailMessages: {
		required: "You must enter a valid email address",
		email: "You must enter a valid email address",
		equalTo: "The email addresses must match"
	},
	membershipNumberMessages: {
		required: "You must enter a membership number",
		digits: "Membership number must contain only numeric characters",
		lengthIs: $.format("Membership number must contain exactly {0} characters")
	},
	memwordMessages: {
		required: "You must enter a memorable word",
		maxlength: "Memorable word must be between six and eight characters, and contain only letters",
		minlength: "Memorable word must be between six and eight characters, and contain only letters",
		letters: "Memorable word must be between six and eight characters, and contain only letters"
	},
	memwordConfirmMessages: {
		required: "You must confirm your memorable word",
		equalTo: "Your memorable words must match"
	},
	memwordMessagesNew: {
		required: "You must enter a memorable word",
		maxlength: "Your memorable word must be between six and eight characters and contain only letters",
		minlength: "Your memorable word must be between six and eight characters and contain only letters",
		letters: "Your memorable word must be between six and eight characters and contain only letters"
	},
	memorableWordWithDigits: {
		required: "You must enter a memorable word",
		maxlength: "Your memorable word must be between six and eight characters, and can contain letters and/or numbers",
		minlength: "Your memorable word must be between six and eight characters, and can contain letters and/or numbers",
		letters: "Your memorable word must be between six and eight characters, and can contain letters and/or numbers"
	},
	mobileTopUpValueMessages: {
		radioHasValue: "You must specify a top-up amount"
	},
	nameMessages: {
		required: "You must enter your name",
		minlength: "You must enter at least 2 characters",
		isName: "Your name must contain only letters, spaces, or the characters ' or -"
	},
	niNumberMessages: {
		required: "You must enter a valid national insurance number",
		lengthIs: "You must enter a valid national insurance number"
	},
	numberMessages: {
		required: "You must enter a valid number",
		digits: "You must enter a valid number",
		number: "You must enter a valid number"
	},
	overdraftEBAmountMessages: {
		isNonZeroOverdraftEBAmountBelowStepMin: "The minimum amount available for an overdraft is &pound;{0}. Please enter a valid amount to the nearest &pound;{1}.",
		isOverdraftEBAmountCorrectlyFormatted: "Please enter a valid amount between {3} and {4} in multiples of &pound;{2}."
	},
	overdraftEBDaysMessages: {
		format: "Please enter a number of days between 0 and 31."
	},
	passcodeMessages: {
		required: "You must enter your passcode",
		digits: "Passcode must contain only numeric characters",
		lengthIs: $.format("Passcode must contain exactly {0} characters"),
		equalTo: "The passcode must match"
	},
	payeeNameMessages: {
		required: "You must specify a name for this transaction",
		isPayeeNameValid: "Payee may only contain the following characters: 0-9 A-Z . space - / ; & +",
		isMaxLength: "Lengh of the Payee name should not be more than 18 characters"
	},
	bankNameMessages: {
		required: "You must specify a name for this transaction",
		isBankNameValid: "Name may only contain the following characters: 0-9 A-Z . space - / ; & + '"
	},
	addressMessages: {
		isAddressValid: "Address may only contain the following characters: 0-9 A-Z . space - / ; & + '"
	},
	keywordMessages: {
		isKeywordValid: "Keyword may only contain the following characters: 0-9 A-Z . space - / ; & +"
	},
	payeeSelectMessages: {
		radioHasValue: "You must specify a payee"
	},
	phoneName: {
		required: "You must provide a name for this phone"
	},
	phoneNumberMessages: {
		required: "You must enter a valid telephone number",
		digits: "You must enter a valid telephone number",
		maxlength: "You must enter a valid telephone number",
		equalTo: "You must enter the same telephone number"
	},
	mobileNumberMessage: {
		required: "You must enter a valid mobile number",
		digits: "You must enter a valid mobile number",
		maxlength: "You must enter a valid mobile number",
		equalTo: "You must enter the same mobile number"
	},
	mobileValidationForUkAndIntMessages: {
		mobilePhoneValid: "Mobile number must begin with '07' or '00'"
	},
	STDNumberMessages: {
		required: "You must enter a valid STD number",
		digits: "You must enter a valid STD number",
		maxlength: "You must enter a valid STD number"
	},
	phoneExtNumberMessage: {
		digits: "You must enter a valid telephone extension"
	},
	pinAuthoriseMessages: {
		required: "You must enter your PINsentry number",
		digits: "PINsentry must contain only numeric characters",
		lengthIs: $.format("PINsentry must contain exactly {0} characters")
	},
	postcodeMessages: {
		required: "You must enter a valid postcode",
		isPostcodeLeftValid: "You must enter a valid postcode",
		isPostcodeRightValid: "You must enter a valid postcode"
	},
	barclaycardReferenceMessages: {
		isBarclaycardRequired: "Sorry - the reference field contains spaces or has been left blank. Please input the 15 or 16-digit Barclaycard number you wish to pay in the reference field, without spaces.",
		isBarclaycardNumbers: "Sorry - the Barclaycard number you have input must only contain numbers. Please type in a reference using only numbers.",
		isBarclaycardLengthTooShort: "Sorry - all Barclaycard numbers have at least 15 or 16 digits (depending on the card chosen). You have currently input fewer than the required number. Please check and re-input.",
		isModCheckValid: "Sorry - the Barclaycard number you have input appears to be incorrect. Please check and re-input.",
		isBarclaycardPaymentReferenceValid: "Sorry - the reference field contains spaces or has been left blank. Please input the 15 or 16-digit Barclaycard number you wish to pay in the reference field, without spaces."
	},
	referenceMessages: {
		required: "You must supply a reference for this transaction",
		maxlength: "Your reference must not be more than eighteen characters",
		isPaymentReferenceValid: "Reference may only contain the following characters: 0-9 A-Z . space - / ; & +"
	},
	searchTextMessages: {
		required: "You must enter a valid search",
		letters: "You must enter a valid search",
		maxlength: "Your search must not be more than fifty characters"
	},
	securityCodeMessages: {
		required: "You must enter a valid security code",
		digits: "Security code must contain only numeric characters",
		lengthIs: $.format("Security code must contain exactly {0} characters")
	},
	selectPhoneMessages: {
		radioHasValue: "You must select a contact phone number"
	},
	sortCode1Messages: {
		required: "You must enter the first part of sort code",
		digits: "The first part of sort code must contain only numeric characters",
		lengthIs: "You must enter a valid first part for sort code"
	},
	sortCode2Messages: {
		required: "You must enter the second part of sort code",
		digits: "The second part of sort code must contain only numeric characters",
		lengthIs: "You must enter a valid second part for sort code"
	},
	sortCode3Messages: {
		required: "You must enter the third part of sort code",
		digits: "The third part of sort code must contain only numeric characters",
		lengthIs: "You must enter a valid third part for sort code"
	},
	transferDateMessages: {
		required: "You must enter a valid date",
		date: "You must enter a valid date",
		isFutureDateValid: "You must enter a future date"
	},
	userSelectMessages: {
		radioHasValue: "You must specify an account",
		isDateSelected: "Please select a date for receiving your account balance."
	},
	rangeDateMessages: {
		required: "You must enter a valid date",
		date: "You must enter a valid date",
		isFutureDateValid: "You must enter a future date",
		isPastDateValid: "Date cannot be after today's date"
	},
	beneSelectMessages: {
		beneSelected: "You must choose a payee off the list that is displayed"
	},
	payeesForAdditionMessages: {
		oneOrMoreSelectRequired: " You must select at least one payee to add"
	},
	payeesForDeletionMessages: {
		oneOrMoreRequired: " You must select at least one payee for removal",
		isOptionsSelOverLimit: "You have chosen to delete more than five payees but we can only delete up to five at a time. Please deselect some of your payees"
	},
	ibanMessages: {
		isIbanValid: "An account number of between 5 and 35 characters is required and can only contain the following characters: 0-9 A-Z . space - / ; & +"
	},
	domesticAccountNumberMessages: {
		isDomesticAccountNumberValid: "An account number can only contain the following characters: 0-9 A-Z a-z . - / +"
	},
	swiftBicMessages: {
		isSwiftBicValid: "8 or 11 alpha numeric characters are required i.e. 0-9 A-Z, with the first 6 as letters only"
	},
	paymentAmountPoundsMessagesBIPS: {
		isBIPSPaymentAmountRequired: "You must enter an amount",
		isAmountValid: "The amount must be a valid number",
		isAmountTooHigh: "The amount you have entered is too high"
	},
	paymentAmountForeignMessagesBIPS: {
		isBIPSPaymentAmountRequired: "You must enter an amount",
		isAmountValid: "The amount must be a valid number",
		isAmountTooHigh: "The amount you have entered is too high"
	},
	dealNumberMessages: {
		isDealNumberValid: "A 7 digit number is required"
	},
	bookedExchangeRateMessages: {
		isBookedExchangeRateValid: "A number of up to 17 digits is required. This can contain up to 6 decimal places"
	},
	nccMessages: {
		isNccValid: "National clearing code may only contain alpha numeric characters i.e. 0-9 A-Z"
	},
	payeeNameMessagesBIPS: {
		required: "You must specify a name for this transaction",
		isPayeeNameValid: "Payee may only contain the following characters: 0-9 A-Z . space - / +"
	},
	bankNameMessagesBIPS: {
		required: "You must specify a name for this transaction",
		isBankNameValid: "Name may only contain the following characters: 0-9 A-Z . space - / + '"
	},
	addressMessagesBIPS: {
		isAddressValid: "Address may only contain the following characters: 0-9 A-Z . space - / + '"
	},
	yourReferenceMessagesBIPS: {
		required: "You must supply a reference for this transaction",
		maxlength: "Your reference must not be more than fourteen characters",
		isYourReferenceValid: "Reference may only contain the following characters: 0-9 A-Z . space - / +"
	},
	paymentReferenceMessagesBIPS: {
		required: "You must supply a reference for this transaction",
		maxlength: "Your reference must not be more than thirty five characters",
		isPaymentReferenceValid: "Reference may only contain the following characters: 0-9 A-Z . space - / +"
	},
	overdraftSimplified: {
		personalDetailsConfirmedRequired: "Sorry, you have not ticked to confirm the above.",
		confirmPrintPageOverdraftRequired: "Sorry, you have not ticked to confirm that you have read and printed a copy of this page for your records.",
		confirmReadPrecontractOverdraftRequired: "Sorry, you have not ticked to confirm that you have read the pre-contract information."
	},
	personalLoanPurpose: {
		loanPurposeRequired: "Please confirm before clicking 'Next'"
	},
	providerNameMessages: {
		isProviderNameValid: "Provider name may only contain the following characters: 0-9 A-Z . space - / ; & + ' ( )"
	},
	rollNumberMessages: {
		isRollNumberValid: "Roll number may only contain the following characters: 0-9 A-Z . space - / &"
	},
	planNumberMessages: {
		isPlanNumberValid: "Plan/Account number may only contain the following characters: 0-9 A-Z . space - / ; + ' ( )"
	},
	changeAddressMessages: {
		addressSearchFail: "We were unable to match an address with these details. <br>Please check the details you have entered are correct.",
		addressNotSelected: "Please select an address",
		homeAddressNotSelected: "Please enter a valid house number"
	},
	bCloudMessages: {
		manageDetailInAppropiateFieldtext: "71037 - Sorry. We cannot accept this field text. Please choose an alternative.",
		inValidFileExtensionHeader: "File Name: Please choose a different file.",
		inValidFileExtension: "<p>Sorry. This is not a valid file type. Please choose a different file.</p>",
		inValidFileSizeHeader: "File Size: Please choose a different file.",
		inValidFileSize: "<p>Sorry.The file size must be at least 1k and no greater than 5MB. Please choose a different file.</p>",
		inAppropiateLabelName: "71028 - Sorry. We cannot accept this tag name. Please choose an alternative.",
		inAppropiateDocumentName: "71018 - Sorry. We cannot accept this document name. Please choose a new one.",
		duplicateDocumentName: "71003 - Sorry - this name has already been used within your Barclays Cloud It. Please choose another name.",
		uploadTokenRequestErr: "71005 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71005. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		uploadHttpTimeOutError: "71041 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71041. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		uploadGenericError: "71008 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71008. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		uploadGenericErrorCode: "71008",
		noCustDigiCopyHeader: ": Please choose the Barclays Cloud It customers with whom you want to share this document.</p>",
		noCustDigiCopyErr: "Please choose the Barclays Cloud It customers with whom you want to share this document.",
		noCustExistToDigiCopyHeaderErr: ": This document has been shared with all available Barclays Cloud It customers.</p>",
		noCustExistToDigiCopyErr: "This document has been shared with all available Barclays Cloud It customers.",
		splCharHeaderText1: "<p><b>You have 1 error to correct before you can proceed.</b></br></p>",
		splCharHeaderTextFieldVal: ": The name must contain only numbers, letters or the following symbols ^ & ' @ { } [ ] , $ = ! - # ( ) % . + ~ _&#163;.</p>",
		splCharHeaderTextName: ": The name must contain only letters, spaces, or the characters ' or -.</p>",
		splCharFieldValText: "<p>Sorry, but the information you have entered contains some invalid characters. Please only use numbers, letters or the following symbols ^ & ' @ { } [ ] , $ = ! - # ( ) % . + ~ _ &#163;.</p>",
		splCharNameText: "<p>The name must contain only letters, spaces, or the characters ' or -.</p>",
		emptyFieldHeaderText: ": You must enter a name for your new tag.</p>",
		emptyFieldValText: "<p>You must enter a name for your new tag.</p>",
		shareDocumentRequestErr: "71045 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71045. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		trashDocumentRequestErr: "Sorry - a technical error has occurred and your document may not have been updated. Please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71030. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		downloadTokenRequestErr: "71019 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71019. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		downloadTokenValidationErr: "71020 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71020. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		inAppropiateAlertText: "71032 - Sorry. We cannot accept this alert description. Please choose an alternative.",
		createAlertRequestErr: "71034 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71034. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		editDeleteLabelRequestErr: "71026 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71026. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		specialCharHeaderText1: "<p><b>You have 1 error to correct before you can proceed.</b></br></p>",
		specialCharHeaderTextFieldVal: ":  The name must contain only numbers, letters or the following symbols ^ & ' @ { } [ ] , $ = ! - # ( ) % . + ~ _ &#163;.</p>",
		specialCharHeaderTextName: ": The name must contain only letters, spaces, or the characters ' or -.</p>",
		specialCharFieldValTextNoPara: "Sorry, but the name you have chosen contains some invalid characters. Please only use numbers, letters or the following symbols ^ & ' @ { } [ ] , $ = ! - # ( ) % . + ~ _ &#163;.",
		specialCharFieldValText: "<p>Sorry, but the name you have chosen contains some invalid characters. Please only use numbers, letters or the following symbols ^ & ' @ { } [ ] , $ = ! - # ( ) % . + ~ _ &#163;.</p>",
		uploadDocNameSpecialCharFieldValText: "<p>Sorry, but the information you have entered contains some invalid characters. Please only use numbers, letters or the following symbols ^ & ' @ { } [ ] , $ = ! - # ( ) % . + ~ _ &#163;.</p>",
		specialCharNameText: "<p>The name must contain only letters, spaces, or the characters ' or -.</p>",
		dateFieldValTextNoPara: "Sorry, but the date you have entered is not correct. Please enter date in DD/MM/YYYY format only.",
		dateHeaderTextName: ": The date must be in DD/MM/YYYY format only.</p>",
		invalidAlertDate: "You must enter a valid date",
		labelNameSpecialCharFieldValText: "<p>Please only use numbers, letters or the following symbols ^ & ' @ { } [ ] , $ = ! - # ( ) % . + ~ _ &#163;.</p>",
		deleteAlertRequestErr: "Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71036. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		updateAlertRequestErr: "Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71035. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		createLabelRequestErr: "Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71027. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		noLinkAddedWaring: "We've spotted that you haven't selected any tags for your file. To easily manage and find your documents, it?s important to add them. The more tags you add, the easier you'll find it to use Barclays Cloud It.",
		lengthCheckHeaderText: ": Your field must not be more than",
		lengthCheckText: "Your field must not be more than",
		nonNumericHeaderTextName: ": Your field must contain only numeric characters.</p>",
		nonNumericTextName: "You have non numeric values.",
		invalidAmountHeaderTextName: ": Your field must contain valid amount.</p>",
		invalidAmountTextName: "You have entered invalid amount.",
		invalidPercentHeaderTextName: ": Your field must contain valid percentage.</p>",
		invalidPercentTextName: "You have entered invalid percentage.",
		manageDetailSpecialCharHeaderTextName: ": The field must contain only letters, numbers and/or spaces.</p>",
		manageDetailSpecialCharTextName: "Sorry, but the information you have entered contains some invalid characters. Please only use letters, numbers and/or spaces.",
		isValidYearHeaderTextName: ": The field must contain valid year.</p>",
		isValidYearTextName: "Sorry, but the year you have entered is invalid.",
		maxLinkLabelExceededErrorText: "Sorry, but you can only add a maximum of 20 tags to your document",
		termaAndConditionsHeaderErrorText: ": Please confirm that you have read and accept the Cloud It terms and conditions by ticking the tickbox.</p>",
		termsAndConditionsErrorText: "Please confirm that you have read and accept the Cloud It terms and conditions by ticking the tickbox.",
		NoEmailMobileNumberForAlertText: "Sorry, we need either a mobile phone number or an email address before you can create an alert. Please use the link below to set these contact details.",
		NoDateDescTyprForAlertText: "<p>You are missing some alert information. Please choose a date, a description and whether you would like to be alerted via SMS, email or both.</p>",
		NoAuthorisationToEditDeleteAlert: "<p>Sorry, you are not authorized to edit or delete this alert.</p>",
		updateCustomerSegmentMarkerError: "71043 - Sorry - a technical error has occurred, please try again. If the problem persists, please call us on 0345 600 2323 (outside the UK dial +44 2476 842063) quoting error code 71043. Lines are open 24 hours every day. To maintain a quality service, we may monitor or record phone calls. <a target='_blank' href='http://www.personal.barclays.co.uk/goto/pfs_callcharges' title='Read call charges info (opens in a new browser window)'>Read call charges info</a>.",
		allLimitedAccessCustError: "71046 - Sorry - due to access restrictions there is no other Barclays Cloud It that you can share this document with."
	},
	contactWorkPhoneMessages: {
		required: "Your work telephone number should only contain numbers",
		digits: "Your work telephone number should only contain numbers",
		maxlength: "Your work telephone number should only contain numbers",
		equalTo: "Your work telephone number should only contain numbers"
	},
	contactHomePhoneMessages: {
		required: "Your home telephone number should only contain numbers",
		digits: "Your home telephone number should only contain numbers"
	},
	contactMobilePhoneMessages: {
		required: "Your mobile telephone number should only contain numbers",
		digits: "Your mobile telephone number should only contain numbers"
	},
	phoneDetailsMessages: {
		digits: "Please enter a valid number.",
		required: "Please add a number."
	},
	phoneDetailsConfirmMessages: {
		digits: "Please enter a valid number.",
		requiredIfElementSet: "Please confirm your number.",
		equalTo: "This does not match. Please check you have entered the same number."
	},
	confirmPhoneMessages: {
		isHomePhoneConfirm: "You must enter a valid phone number",
		isWorkPhoneConfirm: "You must enter a valid work phone number",
		isMobilePhoneConfirm: "You must enter a valid mobile phone number"
	},
	alertMobileMessages: {
		isMobileNumberEntered: "Please add a mobile number below",
		confirmMobileAlert: "Please confirm your mobile number below",
		alertRadioEmpty: "Please confirm if we hold a correct mobile number:",
		isNumberError: "You must enter a valid number"
	},
	otherPhoneMessages: {
		required: "Please enter a valid phone number."
	},
	mortgageRegistration: {
		isModCheckValid: "Mortgage account number: You must enter a valid mortgage account number."
	},
	mortgagesContactPhoneMessages: {
		radioHasValue: "Please select a contact number."
	},
	singleOverpaymentAmountMessages: {
		isAmountRequired: "Please choose a payment amount",
		isAmountTooHighMessage: "The amount you have entered is too high",
		isAmountValid: "The amount must be a valid number"
	},
	singleOverpaymentDateMessages: {
		required: "Please select your payment date",
		date: "Please select your payment date",
		isFutureDateValid: "Please select your payment date"
	},
	singleOverpaymentMultipartAmountMessages: {
		isAmountRequired: "Please choose an amount to pay on your mortgage part",
		isAmountTooHighMessage: "The amount you have entered is too high",
		isAmountValid: "The amount must be a valid number"
	},
	singleOverpaymentMortgagePartSelectionMessages: {
		radioHasValue: "Please select a mortgage part"
	},
	regularOverpaymentTypeMessages: {
		radioHasValue: "Please choose a fixed total amount or a fixed overpayment amount"
	},
	regularOverpaymentContineUntilMessages: {
		radioHasValue: "Please select the number of overpayments you'd like to make"
	},
	underpaymentNumberOfPaymentsMessages: {
		radioHasValue: "Please select the number of underpayments you'd like to make"
	},
	regularOverpaymentMultipartOverpaymentTypeMessages: {
		radioHasValue: "Please choose 'whole mortgage' or 'a specific part'"
	},
	regularOverpaymentMultipartAmountMessages: {
		isAmountRequired: "Please choose an amount to pay on your mortgage part",
		isAmountTooHighMessage: "The amount you have entered is too high",
		isAmountValid: "The amount must be a valid number",
		oneOrMoreRequired: "Please select a mortgage part"
	},
	underpaymentAmountMessages: {
		isPaymentAmountRequired: "Please choose a payment amount",
		isPaymentAmountTooHighMessage: "The amount you have entered is too high",
		isPaymentAmountValid: "The amount must be a valid number"
	},
	underpaymentTypeMessages: {
		radioHasValue: "Please choose 'whole mortgage' or 'a specific part'"
	},
	underpaymentMultipartAmountMessages: {
		isPaymentAmountRequired: "Please select an amount for a mortgage part",
		isPaymentAmountTooHighMessage: "The amount you have entered is too high",
		isPaymentAmountValid: "The amount must be a valid number",
		oneOrMoreRequired: "Please select at least one mortgage part"
	},
	regularOverpaymentNumberOfPaymentsMessages: {
		required: "Please select the number of overpayments you'd like to make",
		digits: "Please select the number of overpayments you'd like to make",
		number: "Please select the number of overpayments you'd like to make"
	},
	validDetailsErrorMessage: {
		required: "Select 'yes' or 'no' to continue"
	},
	employmentStatusOpeningErrorMessage: {
		employmentStatusOpeningDropDown: "Choose an employment status"
	},
	employmentStartDateErrorMessage: {
		employmentMonthRequired: "Select a month for your self-employment start date",
		employmentYearRequired: "Select a year for your self-employment start date",
		employmentMonthValidation: "Select your employment start date",
		employmentYearValidation: "Select your employment start date"
	},
	employerName: {
		employerNameRequired: "Check that you have entered your employer's name correctly"
	},
	businessName: {
		businessNameRequired: "Check that  you have entered your business name correctly"
	},
	occupationTypeCodeRequired: {
		occupationTypeCodeRequired: "Choose an occupation type"
	},
	accAddressLine1: {
		accAddressLine1: "Enter the first line of the address"
	},
	accAddressLine2: {
		accAddressLine2: "Enter the second line of the address"
	},
	occupationTypeCodeErrorMessage: {
		frequencyOvertimeRequired: "Choose the frequency of overtime/bonus"
	},
	monthlyIncomeAfterTax: {
		monthlyIncomeRequired: "Enter your monthly income after tax"
	},
	annualIncomeBeforeTax: {
		annualIncomeRequired: "Enter your annual income before tax.",
		validIncomeDetailsCheck: "This must be more than your monthly income after tax"
	},
	accOpeningIdentityCreditAndFraudCheck: {
		accOpeningIdentityCreditAndFraudCheckRequired: "Please confirm you agree to these checks being done."
	},
	accOpeningTermsAndConditions: {
		accOpeningTermsAndConditionsRequired: "Please confirm the details you've supplied are correct, and you're happy to accept our terms and condition."
	},
	accOpeningWelcomeDocumentReceivingType: {
		radioHasValue: "Select one of these options to continue."
	},
	fxCalculatorMessages: {
		invalidAmount: "The amount must be a valid number"
	}
};
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.FormValidation = (function() {
	var dateGrep = new RegExp(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/),
		errorMessages = iBarclays.Controls.Forms.ErrorMessages,
		errorHtmlIcon = "<div class='icon-error-cross'></div>",
		ftb = false;
	ftb3 = false;

	function isOptionalInput(element) {
		return $(element).is("input.optional-input") && ($.trim($(element).val()).length === 0)
	}

	function isHomeNumberPresent(value, element) {
		return $.trim(value).length === 0 ? false : true
	}

	function isAlertMobilePresent(value, element) {
		return $.trim(value).length === 0 ? false : true
	}

	function isConfirmAlert(value, element) {
		var result = $(".alertMobile").val();
		return $.trim(value) === $.trim(result) ? true : false
	}

	function alertRadioHasValue(value, element) {
		var radioHasValue = true;
		var $form = $(element).closest("form"),
			$options = $form.find(":radio[name='" + $(element).attr("name") + "']"),
			$checkedInput = $options.filter(":checked"),
			val = $checkedInput.val(),
			defOpt = $options.filter(".def-opt-val"),
			defOptVal = defOpt.length ? defOpt.val() : "";
		if (!$checkedInput.length || val === defOptVal) {
			radioHasValue = false
		}
		return radioHasValue
	}

	function isMobileNumberValid(value, element) {
		if (isOptionalInput(element)) {
			return true
		}
		return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value)
	}

	function requiredIfElementSet(value, element, params) {
		if ($.trim($(params).val()).length > 0) {
			if ($.trim(value).length == 0) {
				return false
			}
		}
		return true
	}

	function isAddressSelected(value) {
		var result = $("#addressBox").val();
		return $.trim(result).length === 0 ? false : true
	}

	function isNumber(value, element) {
		if (isOptionalInput(element)) {
			return true
		}
		return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value)
	}

	function isDateValid(value, element) {
		if (isOptionalInput(element)) {
			return true
		}
		var dateMatch = dateGrep.exec(value);
		if (!dateMatch) {
			return false
		}
		var dayOfMonth = parseInt(dateMatch[1], 10),
			month = parseInt(dateMatch[2], 10),
			year = parseInt(dateMatch[3], 10),
			daysInMonth;
		if (/^(4|6|9|11)$/.test(month)) {
			daysInMonth = 30
		} else {
			if (/^(1|3|5|7|8|10|12)$/.test(month)) {
				daysInMonth = 31
			} else {
				if (/^2$/.test(month)) {
					daysInMonth = year % 4 === 0 ? 29 : 28
				} else {
					return false
				}
			}
		} if (dayOfMonth > daysInMonth || dayOfMonth < 1) {
			return false
		}
		return true
	}

	function isDateSelectedValid(value, element) {
		var selectedDay, selectedMonth, selectedYear;
		selectedDay = $("#dayList").val();
		selectedMonth = $("#monthList").val();
		selectedYear = $("#yearList option:selected").text();
		if (selectedDay.length != 0 && selectedMonth.length != 0) {
			if (selectedYear.length == 0) {
				selectedYear = "0000"
			}
			var selectedDate = selectedDay + "/" + selectedMonth + "/" + selectedYear;
			return isDateValid(selectedDate)
		} else {
			return true
		}
	}

	function formatValidDate(value) {
		if (isDateValid(value)) {
			return new Date(iBarclays.Data.Date.formatDate(value))
		}
		return false
	}

	function getCompareDate(element) {
		var $element = $(element),
			$form = $(element).closest("form"),
			fieldSet = $(element).closest("fieldset"),
			otherDateStr = $element.is(".from-date") ? "input.to-date" : "input.from-date",
			otherDateObj;
		if (fieldSet.length > 0) {
			otherDateObj = fieldSet.find(otherDateStr)
		} else {
			otherDateObj = $form.find(otherDateStr)
		}
		return otherDateObj
	}

	function getCompareYear(element) {
		var $element = $(element),
			$form = $(element).closest("form"),
			otherYearStr = $element.is(".to-year") ? "select.from-year" : "select.to-year",
			otherYearObj;
		otherYearObj = $form.find(otherYearStr);
		return otherYearObj
	}

	function beforeToDate(value, element) {
		var otherDateObj = getCompareDate(element);
		if (otherDateObj.length > 0 && $.trim(otherDateObj.val()) !== "") {
			setTimeout(function() {
				otherDateObj.valid()
			}, 100)
		}
		return true
	}

	function afterFromDate(value, element) {
		if ($(element).hasClass("allow-same-date")) {
			return true
		}
		var otherDateObj = getCompareDate(element);
		if (otherDateObj.length > 0) {
			var fromDate = formatValidDate(otherDateObj.val()),
				toDate = formatValidDate(value);
			if (fromDate && toDate) {
				return fromDate < toDate
			}
		}
		return true
	}

	function isToYearValid(value, element) {
		if ($(element).hasClass("allow-same-year")) {
			return true
		}
		var otherYearObj = getCompareYear(element);
		if (otherYearObj.length > 0) {
			var fromYear = otherYearObj.val();
			var toYear = value;
			if (fromYear && toYear) {
				return fromYear < toYear
			}
		}
		return true
	}

	function allowSameDate(value, element) {
		if ($(element).hasClass("from-date")) {
			return true
		}
		var otherDateObj = getCompareDate(element);
		if (otherDateObj.length > 0) {
			var fromDate = formatValidDate(otherDateObj.val()),
				toDate = formatValidDate(value);
			if (fromDate && toDate) {
				return fromDate <= toDate
			}
		}
		return true
	}

	function allowSameYear(value, element) {
		if ($(element).hasClass("from-year")) {
			return true
		}
		var otherYearObj = getCompareYear(element);
		if (otherYearObj.length > 0) {
			var fromYear = otherYearObj.val();
			var toYear = value;
			if (fromYear && toYear) {
				return fromYear <= toYear
			}
		}
		return true
	}

	function countSelectedOptions(value, element) {
		var $form = $(element).closest("form"),
			inputs = $form.find("input.required-option:checked");
		return inputs.length
	}

	function oneOrMoreRequired(value, element) {
		return countSelectedOptions(value, element) > 0
	}

	function confirmRequired(value, element) {
		return element.checked
	}

	function pdfLinksClickAll(value, element) {
		var checked = true;
		var $form = $(element).closest("form");
		var checkBoxes = $form.find("input[type='checkbox']");
		for (var i = 0; i < checkBoxes.length; i++) {
			var checkBox = checkBoxes[i];
			if (checkBox.checked == false) {
				checked = false
			}
		}
		return checked
	}

	function isOptionsSelOverLimit(value, element, length) {
		return !(countSelectedOptions(value, element) > length)
	}

	function digitsOrSpaces(value, element) {
		return /^[\d\s]*$/.test(value)
	}

	function digitsOrSpacesOrPlus(value, element) {
		return /^[\d\s\+]*$/.test(value)
	}

	function mobileExtValid(value, element) {
		value = $.trim(value);
		var str = value.substring(0, 4);
		var str2 = value.substring(0, 2);
		var str3 = value.substring(0, 5);
		if (str === "+447") {
			var remainder = value.substring(4);
			if (remainder.indexOf("+") != -1) {
				return false
			} else {
				if (remainder.length === 9) {
					return true
				} else {
					return false
				}
			}
		} else {
			if (str2 === "07") {
				var remainder = value.substring(2);
				if (remainder.indexOf("+") != -1) {
					return false
				} else {
					if (remainder.length === 9) {
						return true
					} else {
						return false
					}
				}
			} else {
				if (str3 === "+4407") {
					var remainder = value.substring(5);
					if (remainder.indexOf("+") != -1) {
						return false
					} else {
						if (remainder.length === 9) {
							return true
						} else {
							return false
						}
					}
				} else {
					return false
				}
			}
		}
	}

	function mobileValidationForUkAndInt(value, element) {
		value = $.trim(value);
		if (value === "") {
			return true
		}
		var str2 = value.substring(0, 2);
		if (str2 === "07") {
			return true
		} else {
			if (str2 === "00") {
				return true
			} else {
				return false
			}
		}
	}

	function isAmountRequired(value, element) {
		if (isOptionalInput(element)) {
			return true
		}
		return $.trim(value).length === 0 ? false : true
	}

	function isAmountValid(value, element) {
		if (value === "") {
			return true
		}
		if ($(element).hasClass("negative-input")) {
			return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(value)
		} else {
			return /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(value)
		}
	}

	function isAmountTooHigh(value, element) {
		var $element = $(element),
			maxValue = $element.attr("maxValue") || iBarclays.Data.Meta.getValueFromClassName($element.attr("className"),
				"maxValue");
		if (maxValue && !isNaN(maxValue)) {
			return parseFloat(value.replace(/,/g, "")) <= parseFloat(maxValue.replace(/,/g, ""))
		}
		return true
	}

	function isAmountInRange(value, element) {
		var min = parseField(element, "min");
		var max = parseField(element, "max");
		var amount = parseFloat(value);
		var isInRange = false;
		if (!isNaN(amount)) {
			if (min && max && (amount >= min) && (amount <= max)) {
				isInRange = true
			}
		}
		return isInRange
	}

	function isAmountInMultiple(value, element) {
		var multiple = parseField(element, "multiple");
		if (multiple) {
			return (parseFloat(value) % multiple == 0)
		}
		return true
	}

	function getMultiple(element) {
		return parseField(element, "multiple")
	}

	function parseField(element, fieldName) {
		return parseInt($(element).data(fieldName))
	}

	function isDateOfBirthValid(value, element) {
		return !isFutureDateValid(value, element)
	}

	function isFutureDateValid(value, element) {
		if (!value) {
			return true
		}
		var date = formatValidDate(value);
		if (date) {
			return date > iBarclays.Data.Date.getCurrentDate()
		}
		return false
	}

	function isEndDateValid(value, element) {
		if (!value) {
			return true
		}
		var $element = $(element),
			$form = $(element).closest("form");
		var startDate = formatValidDate($form.find('input.date_input[name="startDate"]').val());
		var date = formatValidDate(value);
		if (date <= startDate) {
			return false
		}
		return true
	}

	function isLastDateValid(value, element) {
		if (!value) {
			return true
		}
		var $element = $(element),
			$form = $(element).closest("form");
		var endDate = formatValidDate($form.find('input.date_input[name="endValue"]').val());
		var date = formatValidDate(value);
		if (endDate == false) {
			return true
		} else {
			if (date <= endDate) {
				return false
			}
		}
		return true
	}

	function isValidInitialDate(value, element) {
		if (!value) {
			return true
		}
		var today = new Date();
		today.setDate(today.getDate() + 2);
		var todayDate = formatValidDate(today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear());
		var date = formatValidDate(value);
		if (date && todayDate) {
			return (date > todayDate)
		}
		return true
	}

	function isValidStartDate(value, element) {
		if (!value) {
			return true
		}
		var $element = $(element),
			$form = $(element).closest("form");
		var firstDate = formatValidDate($form.find('input.date_input[name="firstDate"]').val());
		if (firstDate == false) {
			return true
		} else {
			var date = formatValidDate(value);
			if (date <= firstDate) {
				return false
			}
		}
		return true
	}

	function isTodayOnwardsDateValid(value, element) {
		if (!value) {
			return true
		}
		var date = formatValidDate(value);
		if (date) {
			return date >= iBarclays.Data.Date.getCurrentDate()
		}
		return false
	}

	function isPastDateValid(value, element) {
		if (!value) {
			return true
		}
		var date = formatValidDate(value);
		if (date) {
			return date <= iBarclays.Data.Date.getCurrentDate()
		}
		return false
	}

	function isFromDateTwoYearValid(value, element) {
		if (!value) {
			return true
		}
		var day = 24 * 60 * 60 * 1000;
		var date2t = iBarclays.Data.Date.getCurrentDate().getTime();
		var date = formatValidDate(value);
		if (date) {
			var date1t = date.getTime();
			var date2t = iBarclays.Data.Date.getCurrentDate().getTime();
			var timeDiff = date2t - date1t;
			var timeDiffInDays = Math.floor(timeDiff / (day));
			return date <= iBarclays.Data.Date.getCurrentDate() && timeDiffInDays < 731
		}
		return false
	}

	function dateDiffInDays(a, b) {
		var _MS_PER_DAY = 1000 * 60 * 60 * 24;
		var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
		var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
		return Math.floor((utc2 - utc1) / _MS_PER_DAY)
	}

	function isSearchDateLimitValid(value, element, param) {
		var startDateValue = $(param).val();
		var _NUM_DAY_LIMIT = 395;
		if (!value || !startDateValue) {
			return true
		}
		var endDateObj = formatValidDate(value);
		var startDateObj = formatValidDate(startDateValue);
		if (endDateObj && startDateObj) {
			return (_NUM_DAY_LIMIT > dateDiffInDays(startDateObj, endDateObj))
		}
		return false
	}

	function isName(value, element) {
		if ($(element).hasClass("optional") || ($.trim(value) === "")) {
			return true
		}
		return /^[a-zA-Z\s\-\']+$/.test(value)
	}

	function isPostcodeValid(value, element) {
		if (!value) {
			return false
		}
		var codes = value.split(" ", 2);
		if (codes.length == 2) {
			return isPostcodeLeftValid(codes[0]) && isPostcodeRightValid(codes[1])
		} else {
			var lengthPostCode = value.length;
			if (lengthPostCode == 5) {
				var left = value.substring(0, 2);
				var right = value.substring(2, 5);
				return isPostcodeLeftValid(left) && isPostcodeRightValid(right)
			} else {
				if (lengthPostCode == 6) {
					var left = value.substring(0, 3);
					var right = value.substring(3, 6);
					return isPostcodeLeftValid(left) && isPostcodeRightValid(right)
				} else {
					if (lengthPostCode == 7) {
						var left = value.substring(0, 4);
						var right = value.substring(4, 7);
						return isPostcodeLeftValid(left) && isPostcodeRightValid(right)
					}
				}
			}
		}
		return false
	}

	function isPostcodeValidWhenOptional(value, element) {
		var result = true;
		if (!value) {
			result = true
		} else {
			result = isPostcodeValid(value, element)
		}
		return result
	}

	function isPostcodeLeftValid(value, element) {
		return /^GIR|([a-p,r-u,w,y,z]([a-h,k-y][0-9]{1,2}[a,b,e,h,m,n,p,r,v,w,x,y]?|[0-9][a-h,j,k,s-u,w]|[0-9]{1,2}))$/i.test(
			value)
	}

	function isPostcodeRightValid(value, element) {
		return /[0-9][abd-h,j,l,n,p-u,w-z]{2}/i.test(value)
	}

	function isVisible(element) {
		return $(element).is(":visible")
	}

	function getMaxlength(element) {
		var maxlength = $(element).attr("maxlength");
		if (maxlength < 0 || maxlength > 10000) {
			maxlength = 15
		}
		$(element).rules("add", {
			lengthIs: maxlength
		});
		$(element).data("lengthIs", maxlength);
		return maxlength
	}

	function lengthIs(value, element, length) {
		return value.length === length
	}

	function lettersOrSpaces(value, element) {
		return /^[\w\s]+$/.test(value)
	}

	function lettersOrNumbers(value, element) {
		return /^[a-zA-Z0-9]+$/.test(value)
	}

	function lettersOrNumbersWithSpace(value, element) {
		if (!value) {
			return true
		}
		return /^[a-zA-Z0-9\s]+$/.test(value)
	}

	function numbers(value, element) {
		return /^[0-9]+$/.test(value)
	}

	function radioHasValue(value, element) {
		var $form = $(element).closest("form"),
			$options = $form.find(":radio[name='" + $(element).attr("name") + "']"),
			$checkedInput = $options.filter(":checked"),
			val = $checkedInput.val(),
			defOpt = $options.filter(".def-opt-val"),
			defOptVal = defOpt.length ? defOpt.val() : "";
		if (!$checkedInput.length || val === defOptVal) {
			return false
		}
		return true
	}

	function radioHasValueWhenAssociatedFieldChecked(value, element, params) {
		var checkboxName = params[0];
		$form = $(element).closest("form");
		var checkedCheckbox = $form.find("input[name='" + checkboxName + "']:checked");
		if (checkedCheckbox.length > 0) {
			return radioHasValue(value, element)
		}
		return true
	}

	function radioNotEqualTo(value, element, params) {
		if ($(element).is("input")) {
			var firstElementName = element.name,
				secondElementName = params[0],
				$form = $(element).closest("form"),
				firstElementValue = $form.find("input[name='" + firstElementName + "']:checked").attr("value"),
				secondElementValue = $form.find("input[name='" + secondElementName + "']:checked").attr("value");
			return firstElementValue !== secondElementValue
		} else {
			if ($(element).is("select")) {
				var firstElementName = element.name,
					secondElementName = params[0],
					form = $(element).closest("form"),
					firstElement = form.find("select[name='" + firstElementName + "']"),
					secondElement = form.find("select[name='" + secondElementName + "']"),
					firstElementValue = firstElement.val(),
					secondElementValue = secondElement.val();
				return firstElementValue !== secondElementValue
			}
		}
	}

	function yesRequired(value, element) {
		return value === "yes" && $(element).attr("checked")
	}

	function letters(value, element) {
		return this.optional(element) || /^[a-zA-Z]+$/.test(value)
	}

	function isAccountNameValid(value, element) {
		if (isOptionalInput(element)) {
			return true
		}
		if (hasNotChanged(element)) {
			return true
		}
		return isChosenName(value, element) ? true : /^[^<>]{1,25}$/.test(value)
	}

	function isChosenNameValid(value, element) {
		if (isOptionalInput(element)) {
			return true
		}
		if (hasNotChanged(element)) {
			return true
		}
		return isChosenName(value, element) ? /^[a-zA-Z0-9\s\-\/\(\)\'&]{1,15}$/.test(value) : true
	}

	function hasNotChanged(element) {
		var originalElementId = "orig" + element.id;
		if (document.getElementById(originalElementId) === null) {
			return false
		}
		var originalValue = document.getElementById(originalElementId).value;
		if (element.value != originalValue) {
			return false
		} else {
			return true
		}
	}

	function isChosenName(value, element) {
		var isChosenName = false,
			$element = $(element);
		if ($element.closest("#module-account-summary").length) {
			isChosenName = $element.closest("li").find("span.chosen-name").length > 0
		} else {
			isChosenName = $element.hasClass("chosen-name")
		}
		return isChosenName
	}

	function isAddressValid(value, element) {
		return /^[\w\s\-\/\.\;\&\+\']*$/.test(value)
	}

	function isMobilePhoneValid(value, element) {
		var regex = /^[0][7][0-9]{9}$/;
		return regex.test(value)
	}

	function isNonZeroOverdraftEBAmountBelowStepMin(value, element, params) {
		params[3] = $(params[2]).html();
		var min = parseInt(params[3].replace(/\u00A3/g, ""));
		if ((min < 100) && (parseInt(value) > 0) && (parseInt(value) < 100)) {
			return false
		} else {
			return true
		}
		return false
	}

	function isOverdraftEBAmountCorrectlyFormatted(value, element, params) {
		params[3] = $(params[0]).html();
		params[4] = $(params[1]).html();
		var min = parseInt(params[3].replace(/\u00A3/g, ""));
		if (value > 0 && min < 100) {
			min = 100;
			params[3] = "\u00A3" + min
		}
		var max = parseInt(params[4].replace(/\u00A3/g, ""));
		var multiple = params[2];
		if (value < min || value > max || value % multiple != 0) {
			return false
		} else {
			return true
		}
	}

	function isDays(value, element) {
		var regex = /^[0]*(([0-9]|[12][0-9]|3[01]))$/;
		return regex.test(value)
	}

	function isPaymentReferenceValid(value, element) {
		return /^[\w\s\-\/\.\;\&\+]*$/.test(value)
	}

	function isIbanValid(value, element) {
		return /^[\w\s\-\/\.\;\&\+]*$/.test(value)
	}

	function isDomesticAccountNumberValid(value, element) {
		return /^[\w\s\-\/\.\;\&\+]*$/.test(value)
	}

	function isSwiftBicValid(value, element) {
		return /^[a-zA-Z]{6}[a-zA-Z0-9]{2}$/.test(value) || /^[a-zA-Z]{6}[a-zA-Z0-9]{5}$/.test(value)
	}

	function isPayeeNameValid(value, element) {
		return /^[\w\s\-\/\.\;\&\+\']*$/.test(value)
	}

	function isBankNameValid(value, element) {
		return /^[\w\s\-\/\.\;\&\+\']*$/.test(value)
	}

	function isNccValid(value, element) {
		return lettersOrNumbers(value, element)
	}

	function isKeywordValid(value, element) {
		return /^[\w\s\-\/\.\;\&\+]*$/.test(value)
	}

	function isPayeeNameRequired(value, element) {
		return value !== $(element).data("default") || !value
	}

	function beneSelected(value, element) {
		return !$(element).is(".bene-not-selected")
	}

	function isDealNumberValid(value, element) {
		return /^\d{7}$/.test(value)
	}

	function isBookedRateValid(value, element) {
		return /^(\d{1,17})(?:\.\d{1,6})?$/.test(value)
	}

	function isModCheckValid(value, element) {
		var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
		var lsum = 0;
		var dgt;
		var odd = false;
		for (var i = value.length - 1; i >= 0; --i) {
			dgt = parseInt(value.charAt(i), 10);
			lsum += (odd = !odd) ? dgt : luhnArr[dgt]
		}
		return (lsum % 10 == 0)
	}

	function isMod11CheckValid(value, element) {
		var modWeighting = [4, 3, 2, 7, 6, 5, 4, 3, 2, 1];
		var lsum = 0;
		var dgt;
		for (var i = 0; i < value.length; i++) {
			dgt = parseInt(value.charAt(i), 10);
			lsum += dgt * modWeighting[i]
		}
		return (lsum % 11 == 0)
	}

	function isBarclaycardLengthTooShort(value, element) {
		var cardLength = value.length;
		if (cardLength < 15) {
			return false
		}
		return true
	}

	function isBarclaycardNumbers(value, element) {
		return numbers(value, element)
	}

	function isBarclaycardRequired(value, element) {
		var isEmpty = true;
		if (value.length == 0) {
			isEmpty = false
		}
		return isEmpty
	}

	function isBarclaycardPaymentReferenceValid(value, element) {
		var spaceFound = /[\s]+/.test(value);
		return !spaceFound
	}

	function isAddressValidBIPS(value, element) {
		return /^[\w\s\-\/\.\+\']*$/.test(value)
	}

	function isYourReferenceValidBIPS(value, element) {
		return /^[\w\s\-\/\.\+]*$/.test(value)
	}

	function isPaymentReferenceValidBIPS(value, element) {
		return /^[0-9a-zA-Z\s\-\/\.\+]*$/.test(value)
	}

	function isPayeeNameValidBIPS(value, element) {
		return /^[\w\s\-\/\.\+\']*$/.test(value)
	}

	function isBankNameValidBIPS(value, element) {
		return /^[\w\s\-\/\.\+\']*$/.test(value)
	}

	function isDescvalid(value, element) {
		if (value.indexOf("_") != -1) {
			return false
		}
		return /^[\w\s\-\/\.\+&;]*$/.test(value)
	}

	function isgroupDescEmpty(value, element) {
		var isEmpty = true;
		if (value.length == 0) {
			isEmpty = false
		}
		return isEmpty
	}

	function isGroupPaymentNewPayeeRequired(value, element) {
		var isEmpty = true;
		if (value.length == 0) {
			isEmpty = false
		}
		return isEmpty
	}

	function isgroupNameValid(value, element) {
		if (value.indexOf("_") != -1) {
			return false
		}
		return /^[\w\s\-\/\.\+&;]*$/.test(value)
	}

	function isgroupNameEmpty(value, element) {
		var isEmpty = true;
		if (value.length == 0) {
			isEmpty = false
		}
		return isEmpty
	}

	function isMaxLength(value, element) {
		var maxlength = true;
		if (value.length > 18) {
			maxlength = false
		}
		return maxlength
	}

	function isChosenTransferOption(value, element) {
		var immediateTransfer = $("input#initialTransfer:checked");
		var regularTransfer = $("input#regulartransfer:checked");
		return immediateTransfer.size() > 0 || regularTransfer.size() > 0
	}

	function isProviderNameValid(value, element) {
		return /^[a-zA-Z0-9 /.;&+'()-]*$/.test(value)
	}

	function isRollNumberValid(value, element) {
		return /^[a-zA-Z0-9 /.&-]*$/.test(value)
	}

	function isPlanNumberValid(value, element) {
		return /^[a-zA-Z0-9 /\\().,;:#+'-]*$/.test(value)
	}

	function isWithinDynamicRange(value, element, params) {
		var lowLimit = $(params[0]).val();
		var upperLimit = $(params[1]).val();
		var valueAsAbsolute = Math.abs(value);
		var lowLimitAsAbsolute = Math.abs(lowLimit);
		var upperLimitAsAbsolute = Math.abs(upperLimit);
		params[4] = $(params[2]).val();
		params[5] = $(params[3]).val();
		return valueAsAbsolute >= lowLimitAsAbsolute && valueAsAbsolute <= upperLimitAsAbsolute
	}

	function isAmountTooLow(value, element, params) {
		var lowLimit = parseFloat($(params[0]).val());
		var valInt = parseFloat(value);
		params[1] = lowLimit;
		return valInt >= lowLimit
	}

	function isAccountOpenDateValid(value, element, params) {
		if (!value || $(params[0]).val() == "") {
			return true
		}
		var date = formatValidDate(value);
		var prodOpeningDate = formatValidDate($(params[0]).val());
		params[1] = $(params[0]).val();
		if (date && prodOpeningDate) {
			return date >= prodOpeningDate
		}
		return false
	}

	function placeErrors(error, element) {
		if (ftb) {
			var className = element.attr("className"),
				name = element.attr("name"),
				displayError = true,
				$form = element.closest("form"),
				$errorBox = $("div.form-error"),
				errorList = $errorBox.find("div.error-list"),
				msgBox = $("#js-err-for-" + name),
				errCont;
			checkErrorContext(element);
			var errorSpanForInputField = $("[htmlfor='" + name + "']");
			if (errorSpanForInputField.length > 0) {
				$(errorSpanForInputField).text(error.text())
			} else {
				if (element.attr("type") === "checkbox" && !element.closest("div.details-table")) {
					element.data("errorContainer").addClass("checkbox-error")
				}
				if (/(^|\s)(user-select)($|\s)/.test(name)) {
					element.closest("div.table-data").prepend(error)
				} else {
					if ((errCont = element.data("errorContainer")).hasClass("radio-list")) {
						$(error).addClass("error-fieldset");
						var errorHandle = errorHandle = $(element).closest("li.error");
						$(errorHandle).before(error)
					} else {
						if (element.hasClass("required-option")) {
							if (!errorList.find("a.required-option-error").length) {
								element.data("errorContainer").prepend(error)
							} else {
								displayError = false
							}
						} else {
							if (element.hasClass("required-add-option")) {
								if (!errorList.find("a.required-add-option-error").length) {
									element.data("errorContainer").prepend(error)
								} else {
									displayError = false
								}
							} else {
								var parent = $(element).parent();
								if ($(parent)[0].nodeName == "FIELDSET") {
									$(parent).before(error)
								} else {
									$(element).before(error)
								}
							}
						}
					}
				}
			} if (displayError) {
				placeListError(element, error, errorList);
				fixDuplicates($form);
				if (errorList.is(":hidden")) {
					errorList.show()
				}
			}
			iBarclays.Help.Contextual.refreshHelp(element)
		} else {
			if (ftb3) {
				var $fieldcontainer = $(element).parents(".fieldcontainer"),
					$errIcon = $('<div class="icon-error-cross"></div>');
				$($fieldcontainer).find(".icon-error-cross").remove();
				$($fieldcontainer).before($(error));
				if ($(element).is("select")) {
					$fieldcontainer.find(".chosen-container").after($errIcon)
				} else {
					$(element).after($errIcon)
				}
			} else {
				var className = element.attr("className"),
					name = element.attr("name"),
					displayError = true,
					$form = element.closest("form"),
					errorList = $form.find("div.error-list"),
					msgBox = $("#js-err-for-" + name);
				checkErrorContext(element);
				if (element.attr("type") === "checkbox" && !element.closest("div.details-table")) {
					element.data("errorContainer").addClass("checkbox-error")
				}
				if (/(^|\s)(payee-select)($|\s)/.test(name) || /(^|\s)(type-select)($|\s)/.test(name) ||
					/(^|\s)(payeeAccountIndexString)($|\s)/.test(name) || /(^|\s)(multi-payee-select)($|\s)/.test(name) ||
					/(^|\s)(addPayeesBean.payeesSelectedForAddition)($|\s)/.test(name)) {
					if (!msgBox.length) {
						msgBox = element.closest("div.details-table")
					}
					msgBox.prepend(error).addClass("error");
					$("#payee-ctr").css("position", "static")
				} else {
					if (/(^|\s)(user-select)($|\s)/.test(name)) {
						element.closest("div.table-data").prepend(error)
					} else {
						if (element.data("errorContainer").hasClass("bil-letters")) {
							var errorHandle = element.data("errorContainer").closest(".pdf-links-label");
							errorHandle.prepend(error)
						} else {
							if (element.data("errorContainer").hasClass("radio-list")) {
								var errorHandle = element.data("errorContainer").find("legend");
								if (errorHandle.length > 0) {
									errorHandle.after(error)
								} else {
									if (element.hasClass("js-err-at-table-level")) {
										displayError = placeErrorsForTable(error, element)
									} else {
										if (msgBox.length) {
											msgBox.prepend(error)
										} else {
											errorHandle = element.data("errorContainer");
											errorHandle.prepend(error)
										}
									}
								}
							} else {
								if (element.hasClass("linked-radio") || element.hasClass("table-radio")) {
									element.closest("div.details-table").prepend(error), element.closest("div.details-table").addClass("error"),
										$("#bene-list").css("position", "static")
								} else {
									if (element.hasClass("required-option")) {
										if (!errorList.find("a.required-option-error").length) {
											element.data("errorContainer").prepend(error)
										} else {
											displayError = false
										}
									} else {
										if (element.hasClass("confirm-required")) {
											if (!errorList.find("a.confirm-required-error").length) {
												element.data("errorContainer").prepend(error)
											} else {
												displayError = false
											}
										} else {
											if (element.hasClass("required-add-option")) {
												if (!errorList.find("a.required-add-option-error").length) {
													element.data("errorContainer").prepend(error)
												} else {
													displayError = false
												}
											} else {
												placeSpanError(element, error)
											}
										}
									}
								}
							}
						}
					}
				} if (displayError) {
					placeListError(element, error, errorList);
					fixDuplicates($form);
					if (errorList.is(":hidden")) {
						errorList.show()
					}
				}
				iBarclays.Help.Contextual.refreshHelp(element);
				$("#payee-ctr, #bene-list").css("position", "relative")
			}
		}
	}

	function placeErrorsForTable(error, element) {
		var msgBox = $("#js-err-for-" + element.closest("table").attr("id")),
			name = element.attr("name"),
			result = true;
		if (!msgBox.length) {
			return false
		}
		if (msgBox.find("span.error:visible").text() !== error.text()) {
			msgBox.prepend(error)
		} else {
			result = false
		}
		nameList = msgBox.data("nameList");
		if (!nameList) {
			nameList = ""
		}
		if (nameList.indexOf(name) < 0) {
			msgBox.data("nameList", nameList + name)
		}
		element.data("msgBox", msgBox);
		return result
	}

	function placeSpanError(element, error) {
		if (ftb) {
			var spanErrors = element.data("errorContainer").find("span.error"),
				existingSpanError = errorsFor(element);
			if (isGroupedInput(element)) {
				error.addClass(getGroupedInputClass(element))
			}
			if (!spanErrors.length) {
				if ($.trim(element.data("errorLabel").html()) === "") {
					element.data("errorContainer").prepend(error);
					setTimeout(function() {
						element.blur()
					}, 0)
				} else {
					element.data("errorLabel").after(error)
				}
			} else {
				if (existingSpanError.length == 0) {
					spanErrors.filter(":last").after(error)
				}
			}
		} else {
			var spanErrors = element.data("errorContainer").find("span.error"),
				existingSpanError = errorsFor(element);
			if (!spanErrors.length) {
				if ($.trim(element.data("errorLabel").html()) === "") {
					element.data("errorContainer").prepend(error);
					setTimeout(function() {
						element.blur()
					}, 0)
				} else {
					element.data("errorLabel").after(error)
				}
			} else {
				if (existingSpanError.length == 0) {
					spanErrors.filter(":last").after(error)
				}
			}
			element.data("errorLabel").removeClass().addClass("error")
		}
	}

	function placeListError(element, error, errorList) {
		if (ftb) {
			var errorLabel = element.data("errorLabel").clone(),
				errorLabelText, errorListText, errorId = getErrorLinkId(element),
				errorLegendText = "";
			errorLabel.find("a.help-item,.hide").remove();
			var errorType = $.trim(errorLabel.text());
			if (!errorLabel.is("legend")) {
				var errorLegend = element.closest("li").find("label:first");
				if (errorLegend.length > 0) {
					errorLegend = errorLegend.clone();
					errorLegend.find("a.help-item,.hide").remove();
					errorLegendText = $.trim(errorLegend.text())
				}
			}
			if (errorType !== "") {
				errorLabelText = errorType
			} else {
				if (errorLegendText !== "") {
					errorLabelText = errorLegendText
				} else {
					errorLabelText = ""
				}
			} if (errorLabelText !== "") {
				if (!/[\:]$/.test(errorLabelText)) {
					errorLabelText += ":"
				}
				errorLabelText += " "
			}
			if (element.hasClass("payAmount")) {
				errorListText = errorLabelText + errorMessages.amountMessages.number
			} else {
				errorListText = errorLabelText + error.html()
			}
			var errClassName = "err-lnk";
			if (isGroupedInput(element)) {
				errClassName = errClassName + " " + getGroupedInputClass(element)
			}
			element.listError = $("<a class='" + errClassName + "' href='#' id='" + errorId + "'>" + errorListText + "</a>");
			$("#" + errorId).click(function() {
				element.focus();
				element.select();
				return false
			});
			if (element.hasClass("required-option")) {
				element.listError.addClass("required-option-error")
			}
			var existingListError = errorList.find("#" + errorId);
			if (!existingListError.length) {
				errorList.append(element.listError)
			} else {
				existingListError.html(errorListText)
			}
		} else {
			var errorLabel = element.data("errorLabel").clone(),
				errorLabelText, errorListText, errorId = getErrorLinkId(element),
				errorLegendText = "";
			errorLabel.find("a.help-item,.hide").remove();
			var errorType = $.trim(errorLabel.text());
			if (!errorLabel.is("legend")) {
				var errorLegend = element.closest("fieldset").find("legend");
				if (errorLegend.length > 0) {
					errorLegend = errorLegend.clone();
					errorLegend.find("a.help-item,.hide").remove();
					errorLegendText = $.trim(errorLegend.text())
				}
			}
			if (errorType !== "") {
				errorLabelText = errorType
			} else {
				if (errorLegendText !== "") {
					errorLabelText = errorLegendText
				} else {
					errorLabelText = ""
				}
			} if (errorLabelText !== "") {
				if (!/[\:]$/.test(errorLabelText)) {
					errorLabelText += ":"
				}
				errorLabelText += " "
			}
			if (element.hasClass("payAmount")) {
				errorListText = errorLabelText + errorMessages.amountMessages.number
			} else {
				errorListText = errorLabelText + error.html()
			}
			element.listError = $("<a class='err-lnk' href='#' id='" + errorId + "'>" + errorListText + "</a>");
			$("#" + errorId).click(function() {
				element.focus();
				element.select();
				return false
			});
			if (element.hasClass("required-option")) {
				element.listError.addClass("required-option-error")
			}
			if (element.hasClass("confirm-required")) {
				element.listError.addClass("confirm-required-error")
			}
			var existingListError = errorList.find("#" + errorId);
			if (!existingListError.length) {
				errorList.append(element.listError)
			} else {
				existingListError.html(errorListText)
			}
			element.data("errorLabel").addClass("error")
		}
	}

	function checkErrorContext(element) {
		if (ftb) {
			var errorContainer = null;
			var dfaStep2Custom = element.closest("div#authenticationDiv");
			if (!element.data("errorContainer") || !element.data("errorContainer").length) {
				if (element.hasClass("required-option")) {
					errorContainer = element.closest("div.custom-input")
				} else {
					errorContainer = element.closest(
						"div.custom-input,div.custom-select,div.checkbox,.radio-list,div.fieldcontainer");
					if (dfaStep2Custom.length > 0) {
						errorContainer = {}
					}
				}
				element.data("errorContainer", errorContainer);
				if (!element.data("errorContainer").length) {
					errorContainer = element.parent();
					element.data("errorContainer", errorContainer)
				}
			}
			if (!element.data("errorLabel") || !element.data("errorLabel").length) {
				var errorContainer = element.data("errorContainer");
				if ((!errorContainer.hasClass("accessible") && errorContainer.hasClass("custom-select")) || (errorContainer.hasClass(
					"radio-list") && (dfaStep2Custom.length <= 0))) {
					var errorLabel = element.data("errorContainer").find("legend");
					element.data("errorLabel", errorLabel)
				} else {
					var existingLabel = element.data("errorContainer").find("label[for='" + element.attr("id") + "']").not(".hide");
					if (!existingLabel.length) {
						existingLabel = element.data("errorContainer").find("label,legend").filter(":first")
					}
					if (existingLabel.length > 0 && existingLabel.not(".hide").length == 0) {
						element.data("showHideLabel", true);
						element.data("errorLabel", existingLabel.removeClass("hide"))
					} else {
						element.data("errorLabel", existingLabel)
					}
				}
			}
		} else {
			var elementId = element.attr("id");
			var errorContainerSelector = $("#errorfor-" + elementId);
			if (!element.data("errorContainer") || !element.data("errorContainer").length) {
				if ($(errorContainerSelector).length > 0) {
					element.data("errorContainer", errorContainerSelector)
				} else {
					if (element.hasClass("required-option")) {
						element.data("errorContainer", element.closest("div.custom-input"))
					} else {
						if (element.hasClass("pdf-links-click-all")) {
							element.data("errorContainer", element.closest(".bil-letters"))
						} else {
							element.data("errorContainer", element.closest("div.custom-input,div.custom-select,div.checkbox,.radio-list"))
						}
					}
				} if (!element.data("errorContainer").length) {
					element.data("errorContainer", element.parent())
				}
			}
			if (!element.data("errorLabel") || !element.data("errorLabel").length) {
				var errorContainer = element.data("errorContainer");
				if ((!errorContainer.hasClass("accessible") && errorContainer.hasClass("custom-select")) || errorContainer.hasClass(
					"radio-list")) {
					element.data("errorLabel", element.data("errorContainer").find("legend:first"))
				} else {
					if (errorContainer.hasClass("pdf-links-click-all")) {
						var existingLabel = document.find("label[for='" + element.attr("id") + "']").not(".hide");
						element.data("errorLabel", existingLabel)
					} else {
						var existingLabel = element.data("errorContainer").find("label[for='" + element.attr("id") + "']").not(".hide");
						if (!existingLabel.length) {
							existingLabel = element.data("errorContainer").find("label,legend").filter(":first")
						}
						if (existingLabel.length > 0 && existingLabel.not(".hide").length == 0) {
							element.data("showHideLabel", true);
							element.data("errorLabel", existingLabel.removeClass("hide"))
						} else {
							element.data("errorLabel", existingLabel)
						}
					}
				}
			}
		}
	}

	function errorsFor(element) {
		var name = getIdOrName(element);
		return element.closest("form").find("span.error").filter(function() {
			return $(this).attr("for") == name
		})
	}

	function getIdOrName(element) {
		return /radio|checkbox/i.test(element.attr("type")) ? element.attr("name") : element.attr("id") || element.attr(
			"name")
	}

	function getErrorLinkId(element) {
		var linkId = getIdOrName(element).replace(/\./g, "-") + "-error";
		return linkId
	}

	function removeRevalidatedErrors(validElements) {
		if (ftb) {
			var $form = validElements.closest("form"),
				$page = $form.closest("#page").length ? $form.closest("#page") : $form.closest("#takeover-content"),
				errorList = $page.find("div.error-list"),
				errorCount;
			validElements.each(function() {
				var $this = $(this),
					msgBox, nameList = "";
				checkErrorContext($this);
				if ($this.data("showHideLabel")) {
					$this.data("errorContainer").find("label,legend").filter(":first").addClass("hide")
				} else {
					if ($this.hasClass("js-err-at-table-level") && $.trim(nameList).length != 0) {
						msgBox.find("span.error:hidden").show()
					} else {
						errorList.find("#" + getErrorLinkId($this)).remove();
						var inputFieldId = $(this).attr("id");
						var errorSpanForInputField = $("[htmlfor='" + inputFieldId + "']");
						errorSpanForInputField.remove();
						handleGroupedInput($this)
					} if ($("div.details-table input[type=radio]").is(":checked")) {
						$("div.details-table").removeClass("error")
					}
				}
			})
		} else {
			var $form = validElements.closest("form"),
				errorList = $form.find("div.error-list"),
				errorCount, payeeCtr = $("#payee-ctr");
			payeeCtr.css("position", "static");
			validElements.each(function() {
				var $this = $(this),
					msgBox, nameList = "";
				checkErrorContext($this);
				if ($this.hasClass("js-err-at-table-level")) {
					msgBox = $("#js-err-for-" + $this.closest("table").attr("id"));
					nameList = msgBox.data("nameList");
					nameList = (nameList) ? nameList.replace($this.attr("name"), "") : "";
					msgBox.data("nameList", nameList)
				}
				if (!$this.data("errorContainer").find("span.error:visible").length) {
					$this.data("errorLabel").removeClass("error")
				}
				if ($this.data("showHideLabel")) {
					$this.data("errorContainer").find("label,legend").filter(":first").addClass("hide")
				}
				if ($this.hasClass("multi-payee-select") && $this.closest("#existing-payee").find("span.error:visible").length) {
					return
				}
				if ($this.hasClass("multi-add-payee-select") && $this.closest("#existing-payee").find("span.error:visible").length) {
					return
				} else {
					if ($("#bene-list input[type=radio]").is(":checked")) {
						$("div.details-table").removeClass("error")
					} else {
						if ($this.hasClass("js-err-at-table-level") && $.trim(nameList).length != 0) {
							msgBox.find("span.error:hidden").show()
						} else {
							errorList.find("#" + getErrorLinkId($this)).remove()
						} if ($("div.details-table input[type=radio]").is(":checked")) {
							$("div.details-table").removeClass("error")
						}
					}
				} if (ftb3) {
					if ($this.is("select")) {
						$this.closest("div.fieldcontainer").removeClass("error").find("div.icon-error-cross").remove()
					} else {
						$this.next(".icon-error-cross").remove()
					}
				}
			});
			payeeCtr.css("position", "relative")
		}
	}

	function placeUmbrellaErrMsg($form, message) {
		if (ftb) {
			var umbrellaIcon = '<div class="icon-umbrella-error-cross"></div>';
			var errorHtml = '<div class="form-error">' + umbrellaIcon + "<a href='#' class='count'>" + message +
				'</a><div class="error-list"></div></div>';
			var $position = $("#accordion-top");
			var $position2 = $("#logon-snippet-icookie");
			$position.before(errorHtml).before($position2);
			if (!$("#takeover div.form-error").length) {
				$("#takeover div.column.main #takeover-content").prepend(errorHtml)
			}
		} else {
			var errorHtml = "<div class=\"form-error\"><a href='#' class='count'>" + message +
				'</a><div class="error-list"></div></div>';
			if ($form.closest("#takeover").length > 0) {
				$form.find("div.error-panel").prepend(errorHtml);
				return
			}
			var $position = $form.find("h2");
			if ($position.closest("div.module-holder").length > 0) {
				return
			}
			if ($position.length === 0) {
				var $modalWnd = $form.closest("div.modal-wnd"),
					h2 = "<h2 class='hidden'></h2>";
				if ($modalWnd.length > 0) {
					$modalWnd.find("div.modal").append(h2)
				} else {
					if ($form.find("div#page").length > 0) {
						$form.prepend(h2)
					} else {
						if ($form.closest("div.whiteout-overlay").length > 0) {
							$form.closest("div.whiteout-overlay").find("div.error-panel").html(h2)
						}
					}
				}
				$position = $form.find("h2")
			}
			$position.before(errorHtml)
		}
	}

	function invalidHandler(e) {
		announceErrors()
	}

	function announceErrors() {
		var errorTitle = $(".form-error a.count:first");
		errorTitle.attr("role", "alert");
		$(".form-error .error-list a.err-lnk:first").focus()
	}

	function fixSpecialDuplicates(form) {
		var $form = $(form);
		var $errorBox = $("div.form-error");
		var pageErrorList = $errorBox.find("div.error-list a");
		var spanErrList = $form.find("span.error");
		if (pageErrorList && pageErrorList.length > 1) {
			var errorTextList = [];
			var addCount = 0;
			var removeCount = 0;
			var text;
			var removalIdList = [];
			var removeSpanHtmlForList = [];
			pageErrorList.each(function() {
				text = $(this).text();
				var sibling = $(this).next();
				if ($.inArray(text, errorTextList) < 0 && $(this).next().text() != text) {
					errorTextList[addCount] = text;
					addCount++
				} else {
					removalIdList[removeCount] = $(sibling).attr("id");
					removeSpanHtmlForList[removeCount] = ($(sibling).attr("id")).replace(/-error$/, "");
					removeCount++
				}
			});
			if (removalIdList && removalIdList.length > 0) {
				var msgErrorLinkId;
				var cnt = removeCount - 1;
				while (cnt > -1) {
					msgErrorLinkId = removalIdList[cnt];
					$errorBox.find("#" + msgErrorLinkId).addClass("hide");
					cnt--
				}
				var htmlfor;
				spanErrList.each(function() {
					htmlfor = $(this).attr("htmlfor");
					if (removeSpanHtmlForList && (removeSpanHtmlForList.length > 0) && (removeSpanHtmlForList.indexOf(htmlfor) >
						-1)) {
						if ($(this).hasClass("error-fieldset")) {
							$(this).removeClass("error-fieldset")
						}
						$(this).addClass("hide")
					}
				})
			}
		}
	}

	function removeSectionError() {
		var loginSection = $("div.login-ctr");
		var sectionError = loginSection.find("div.section-error-o1");
		if (sectionError && sectionError.length) {
			sectionError.remove()
		}
	}

	function showErrors(errorMap, errorList) {
		if (this.currentForm.getAttribute("ftb") == "true") {
			ftb = true
		} else {
			if (this.currentForm.getAttribute("ftb3") == "true") {
				ftb = false;
				ftb3 = true
			}
		} if (ftb) {
			var validator = this,
				$form = $(validator.currentForm),
				$page = $form.closest("#page").length ? $form.closest("#page") : $form.closest("#takeover-content"),
				errorWarning = $page.find("div.form-error"),
				modal, umbrellaUpdated = false;
			if (!errorWarning.length && errorList.length) {
				removeSectionError();
				placeUmbrellaErrMsg($form, errorMessages.formErrorMessage);
				umbrellaUpdated = true;
				modal = $form.closest("#modal-ctr");
				if (modal.length) {
					$("html,body").attr("scrollTop", parseInt(modal.css("top"), 10) || 0)
				}
				this.defaultShowErrors()
			} else {
				this.defaultShowErrors();
				removeRevalidatedErrors(validator.validElements())
			}
			scSetValidationErrorMessage(s);
			fixSpecialDuplicates($form);
			updateErrorCount($form);
			if (umbrellaUpdated) {
				announceErrors()
			}
			iBarclays.Help.Contextual.refreshHelp()
		} else {
			var validator = this,
				$form = $(validator.currentForm),
				errorWarning = $form.find("div.form-error"),
				modal, umbrellaUpdated = false;
			if (!errorWarning.length && errorList.length) {
				placeUmbrellaErrMsg($form, errorMessages.formErrorMessage);
				umbrellaUpdated = true;
				modal = $form.closest("#modal-ctr");
				if (modal.length) {
					$("html,body").attr("scrollTop", parseInt(modal.css("top"), 10) || 0)
				}
				this.defaultShowErrors()
			} else {
				this.defaultShowErrors();
				removeRevalidatedErrors(validator.validElements())
			}
			updateErrorCount($form);
			if (umbrellaUpdated) {
				announceErrors()
			}
			iBarclays.Help.Contextual.refreshHelp()
		}
	}

	function updateErrorCount(form) {
		if (ftb) {
			var $form = $(form),
				$page = $form.closest("#page").length ? $form.closest("#page") : $form.closest("#takeover-content"),
				errorWarning = $page.find("div.form-error"),
				errorList = errorWarning.find("div.error-list"),
				errorCount = errorList.find("a").not(".hide").length;
			fixDuplicates($form);
			if (!errorCount) {
				$form.find("span.error").remove();
				errorWarning.hide()
			} else {
				$page.find("span.error-count").text(errorCount);
				if (errorCount == 1) {
					$page.find("span.error-text").text("error")
				} else {
					$page.find("span.error-text").text("errors")
				}
				errorWarning.show()
			}
		} else {
			var $form = $(form),
				errorWarning = $form.find("div.form-error"),
				errorList = errorWarning.find("div.error-list"),
				errorCount = errorList.find("a").not(".hide").length,
				payeeCtr = $("#payee-ctr");
			fixDuplicates($form);
			if (!errorCount) {
				payeeCtr.css("position", "static");
				errorWarning.hide()
			} else {
				$form.find("span.error-count").text(errorCount);
				if (errorCount === 1) {
					$form.find("span.error-text").text("error")
				} else {
					$form.find("span.error-text").text("errors")
				}
				errorWarning.show()
			}
			payeeCtr.css("position", "relative")
		}
	}

	function resetElementErrorStatus(element) {
		if (ftb) {
			if (element.is("input.error") || element.is("select.error")) {
				$.validator.defaults.unhighlight(element, $.validator.defaults.errorClass, $.validator.defaults.validClass);
				var $form = element.closest("form");
				var $page = $form.closest("#page").length ? $form.closest("#page") : $form.closest("#takeover-content");
				$page.find("div.error-list").find("#" + getErrorLinkId(element)).remove();
				checkErrorContext(element);
				var errorLabel = element.data("errorContainer").find("label,legend").filter(":first");
				if (element.data("showHideLabel")) {
					errorLabel.addClass("hide")
				}
				element.data("errorContainer").find("span.error").hide()
			}
		} else {
			if (element.is("input.error")) {
				$.validator.defaults.unhighlight(element, $.validator.defaults.errorClass, $.validator.defaults.validClass);
				var $form = element.closest("form");
				$form.find("div.error-list").find("#" + getErrorLinkId(element)).remove();
				checkErrorContext(element);
				var errorLabel = element.data("errorContainer").find("label,legend").filter(":first");
				errorLabel.removeClass("error");
				if (element.data("showHideLabel")) {
					errorLabel.addClass("hide")
				}
				element.data("errorContainer").find("span.error").hide()
			}
		}
	}

	function validateDateRange(value, element) {
		var result = false;
		var isChecked = $(element).closest("input[type='checkbox']:checked");
		if (isChecked) {
			if (parseInt(value) > 0 && parseInt(value) <= 31) {
				result = true
			}
		}
		return result
	}

	function validateAmountRequired(value, element) {
		var result = true;
		var isChecked = $(element).closest("input[type='checkbox']:checked");
		if (isChecked) {
			if (value == null || value == "") {
				result = false
			}
		}
		return result
	}

	function validateMinAccBalance(value, element) {
		var result = true;
		var isChecked = $(element).closest("input[type='checkbox']:checked");
		if (isChecked) {
			if (parseFloat(value) < 10) {
				result = false
			}
		}
		return result
	}

	function validateAmounts() {
		var lowerLimitSelected = $("#smsStep2LowBalanceAlertDiv").find("#smsLowBalanceAlertCheckId").is(":checked");
		var upperLimitSelected = $("#smsStep2HighBalanceAlertDiv").find("#smsHighBalanceAlertCheckId").is(":checked");
		var result = true;
		if (lowerLimitSelected && upperLimitSelected) {
			var lowerLimit = parseFloat($("#smsStep2LowBalanceAlertInputDiv").find("input[name=thresholdLowerLimit]").attr(
				"value"));
			var upperLimit = parseFloat($("#smsStep2HighBalanceAlertInputDiv").find("input[name=thresholdUpperLimit]").attr(
				"value"));
			if (lowerLimit > upperLimit) {
				result = false
			}
		}
		return result
	}

	function otherPhoneNumberPresent(value, element) {
		var otherRadio = $("#other-phone-radio").is(":checked");
		var otherPhoneVal = $("#otherPhoneId").val();
		if (otherRadio == true && $.trim(otherPhoneVal.length) < 5) {
			return false
		}
		return true
	}

	function selectRequired(value, element) {
		var $form = $(element).closest("form");
		var $options = $form.find("input[name='" + $(element).attr("name") + "'][type='radio']");
		var $checkedInput = $options.filter(":checked");
		var $val = $checkedInput.val();
		return $val !== "select"
	}

	function selectBoxRequired(value, element) {
		var $form = $(element).closest("form");
		var $options = $form.find("select[name='" + $(element).attr("name") + "'] option");
		var $checkedInput = $options.filter(":selected");
		var $val = $checkedInput.val();
		return !($val == "" || $val == "Please select" || $val == "-1")
	}

	function signatureRequired(value, element) {
		var $form = $(element).closest("form");
		var $options = $form.find("input[name='" + $(element).attr("name") + "'][type='radio']");
		var $checkedInput = $options.filter(":checked");
		var $val = $checkedInput.val();
		return $val !== "0"
	}

	function validateAmounts(value, element) {
		var lowerLimitSelected = $(element).closest("form").find("#smsStep2LowBalanceAlertDiv").find(
			"#smsLowBalanceAlertCheckId").is(":checked");
		var upperLimitSelected = $(element).closest("form").find("#smsStep2HighBalanceAlertDiv").find(
			"#smsHighBalanceAlertCheckId").is(":checked");
		var result = true;
		if (lowerLimitSelected && upperLimitSelected) {
			var lowerLimit = parseFloat($(element).closest("form").find("#smsStep2LowBalanceAlertInputDiv").find(
				"input[name=thresholdLowerLimit]").attr("value"));
			var upperLimit = parseFloat($(element).closest("form").find("#smsStep2HighBalanceAlertInputDiv").find(
				"input[name=thresholdUpperLimit]").attr("value"));
			if (lowerLimit > upperLimit) {
				result = false
			}
		}
		return result
	}

	function validateThresholdLowerLimitRequired(value, element) {
		var result = true;
		var isChecked = $(element).closest("form").find("#smsLowBalanceAlertCheckId").is(":checked");
		if (isChecked) {
			if (value == null || value == "") {
				result = false
			}
		}
		return result
	}

	function validateThresholdLowerLimitMinAccBalance(value, element) {
		var result = true;
		var isChecked = $(element).closest("form").find("#smsLowBalanceAlertCheckId").is(":checked");
		if (isChecked) {
			if (value < 10) {
				result = false
			}
		}
		return result
	}

	function validateAmountForWholeNumber(value, element) {
		var result = true;
		if (!(/^\d+$/.test(value))) {
			result = false
		}
		return result
	}

	function validateThresholdUpperLimitMinAccBalance(value, element) {
		var result = true;
		var isChecked = $(element).closest("form").find("#smsHighBalanceAlertCheckId").is(":checked");
		if (isChecked) {
			if (value < 10) {
				result = false
			}
		}
		return result
	}

	function validateThresholdUpperLimitRequired(value, element) {
		var result = true;
		var isChecked = $(element).closest("form").find("#smsHighBalanceAlertCheckId").is(":checked");
		if (isChecked) {
			if (value == null || value == "") {
				result = false
			}
		}
		return result
	}

	function isSMSMonthDaySelected(value, element) {
		if ($(element).closest("form").find("input#balanceAlert").is(":checked")) {
			var result = $(element).closest("form").find("#smsStep2MonthlyBalanceAlertSelectDiv").find(
				"input:radio[name=duchessAlertDetailsSetBean.monthlyBalanceAlertDate]:checked").val();
			return result == "" ? false : true
		}
		return true
	}

	function accountOpeningDropDown(value, element) {
		var $form = $(element).closest("form");
		var $options = $form.find("input[name='" + $(element).attr("name") + "'][type='radio']");
		var $checkedInput = $options.filter(":checked");
		var $val = $checkedInput.val();
		return $val != "Please select"
	}

	function validateAddressLines(value, element, addressLineId) {
		var addressLineValue = $(addressLineId).val();
		if (value == "" && addressLineValue != "") {
			return false
		}
		return true
	}

	function frequencyOvertimeRequired(value, element, annualBonusId) {
		var $annualIncomeBeforeTax = $(annualBonusId);
		var $val = $($annualIncomeBeforeTax).val();
		if ($val != undefined && parseFloat($val) > 0) {
			return accountOpeningDropDown(value, element)
		}
		return true
	}

	function employmentDateValidationRequired(value, element, currentEmploymentStatusCodeId) {
		var employmentStatus = $(currentEmploymentStatusCodeId).val();
		if (employmentStatus == "03") {
			return accountOpeningDropDown(value, element)
		}
		return true
	}

	function employmentRequiredDateCheck(value, element, currentEmploymentStatusCodeId) {
		var employmentStatus = $(currentEmploymentStatusCodeId).val();
		if (employmentStatus == "01" || employmentStatus == "02") {
			return accountOpeningDropDown(value, element)
		}
		return true
	}

	function employmentValidMonthCheck(value, element) {
		var startMonth = getSelectedValue("accountOpeningSessionBean.employmentStartMonth");
		var startYear = getSelectedValue("accountOpeningSessionBean.employmentStartYear");
		if (startMonth != startYear && startMonth == "Please select") {
			return false
		}
		return true
	}

	function employmentValidYearCheck(value, element) {
		var startMonth = getSelectedValue("accountOpeningSessionBean.employmentStartMonth");
		var startYear = getSelectedValue("accountOpeningSessionBean.employmentStartYear");
		if (startMonth != startYear && startYear == "Please select") {
			return false
		}
		return true
	}

	function getSelectedValue(name) {
		var $form = $('input:radio[name^="' + name + '"]').closest("form");
		var $options = $form.find("input[name='" + name + "'][type='radio']");
		var $checkedInput = $options.filter(":checked");
		return $checkedInput.val()
	}

	function validateIncomeDetails(value, element) {
		var monthlyIncomeAfterTax = $("#monthlyIncomeAfterTax").val().replace(/,/g, "");
		var annualIncomeBeforeTax = $("#annualIncomeBeforeTax").val().replace(/,/g, "");
		if (!isNaN(parseFloat(monthlyIncomeAfterTax)) && !isNaN(parseFloat(annualIncomeBeforeTax))) {
			return parseFloat(monthlyIncomeAfterTax) < parseFloat(annualIncomeBeforeTax)
		}
		return true
	}

	function isGroupedInput(element) {
		if (element && element.attr("class") && element.attr("class").indexOf("-grouped") > -1) {
			return true
		} else {
			if (element && element.attr("class") && element.attr("class").indexOf("-dategrouped") > -1) {
				return true
			}
		}
		return false
	}

	function getGroupedInputClass(element) {
		var name;
		if (isGroupedInput(element)) {
			var clsName = element.attr("class");
			var groupClassExpr = new RegExp(/[a-zA-Z]+-grouped/);
			var matches = groupClassExpr.exec(clsName);
			if (matches && matches != "") {
				var match = matches[0];
				var temp = match.substring(0, match.indexOf("-")).trim();
				var elementName = element.attr("name");
				if (elementName.indexOf(temp) != -1 || clsName.indexOf(elementName) != -1) {
					name = match
				}
			}
		}
		return name
	}

	function handleGroupedInput(validElement) {
		var isGroupedElement = isGroupedInput(validElement);
		if (isGroupedElement) {
			var groupClass = getGroupedInputClass(validElement);
			if (groupClass) {
				var $form = validElement.closest("form");
				var $page = $form.closest("#page").length ? $form.closest("#page") : $form.closest("#takeover-content");
				var pageErrorList = $page.find("div.error-list a." + groupClass + ".hide");
				pageErrorList.each(function() {
					$(this).removeClass("hide")
				});
				var spanErrList = $form.find("span.error." + groupClass + ".hide");
				spanErrList.each(function() {
					$(this).removeClass("hide")
				})
			}
		}
	}

	function fixDuplicates(form) {
		if (ftb) {
			var etypemins = {},
				count = 0,
				id, etype, enumber, htmlfor, errList, labelCount = {},
				spanErrList, $form = $(form),
				$errorBox = $("div.form-error"),
				module = $form.closest("div.module-holder");
			isModule = module.length > 0 ? true : false;
			spanErrList = $form.find("span.error");
			if (isModule) {
				errList = module.find("span.error:visible")
			} else {
				errList = $errorBox.find("div.error-list")
			}
			errList.each(function() {
				if (isModule) {
					id = $(this).attr("htmlfor");
					etype = id.replace(/\d$/, "");
					enumber = id.replace(etype, "")
				} else {
					id = $(this).attr("id");
					etype = id.replace(/\d-error$/, "");
					enumber = id.replace(etype, "").replace(/-error$/, "")
				} if (enumber) {
					if (!etypemins[etype] || enumber < etypemins[etype]) {
						etypemins[etype] = enumber;
						count++
					}
				}
			});
			if (!count) {
				return
			}
			if (!isModule) {
				errList.each(function() {
					id = $(this).attr("id");
					etype = id.replace(/\d-error$/, "");
					enumber = id.replace(etype, "").replace(/-error$/, "");
					if (enumber) {
						if (etypemins[etype] == enumber) {
							$(this).removeClass("hide")
						} else {
							$(this).remove()
						}
					}
				})
			}
			spanErrList.each(function() {
				htmlfor = $(this).attr("htmlfor");
				etype = htmlfor.replace(/\d$/, "");
				enumber = htmlfor.replace(etype, "");
				etype = etype.replace(/\./, "-");
				if (enumber) {
					if (etypemins[etype] == enumber) {
						$(this).removeClass("hide");
						$("#" + htmlfor).closest("div").addClass("error")
					} else {
						$(this).addClass("hide");
						$("#" + htmlfor).closest("div").removeClass("error");
						$("#" + htmlfor).removeClass("error")
					}
				}
			})
		} else {
			var etypemins = {},
				count = 0,
				id, etype, enumber, htmlfor, errList, labelErrList, labelCount = {},
				spanErrList, $form = $(form),
				module = $form.closest("div.module-holder");
			isModule = module.length > 0 ? true : false;
			labelErrList = $form.find("div.error.custom-input");
			spanErrList = $form.find("span.error");
			if (isModule) {
				errList = module.find("span.error:visible")
			} else {
				errList = $form.find("div.error-list").find("a")
			}
			errList.each(function() {
				if (isModule) {
					id = $(this).attr("htmlfor");
					etype = id.replace(/\d$/, "");
					enumber = id.replace(etype, "")
				} else {
					id = $(this).attr("id");
					etype = id.replace(/\d-error$/, "");
					enumber = id.replace(etype, "").replace(/-error$/, "")
				} if (enumber) {
					if (!etypemins[etype] || enumber < etypemins[etype]) {
						etypemins[etype] = enumber;
						count++
					}
				}
			});
			labelErrList.each(function() {
				if (!$(this).children("label").length) {
					return
				}
				htmlfor = $(this).children("label").attr("for");
				etype = htmlfor.replace(/\d$/, "");
				if (etype) {
					if (!labelCount[etype]) {
						labelCount[etype] = 1
					} else {
						labelCount[etype]++
					}
				}
			});
			if (!count) {
				return
			}
			if (!isModule) {
				errList.each(function() {
					id = $(this).attr("id");
					etype = id.replace(/\d-error$/, "");
					enumber = id.replace(etype, "").replace(/-error$/, "");
					if (enumber) {
						if (etypemins[etype] == enumber) {
							$(this).removeClass("hide")
						} else {
							$(this).remove()
						}
					}
				})
			}
			labelErrList.each(function() {
				if (!$(this).children("label").length) {
					return
				}
				htmlfor = $(this).children("label").attr("for");
				etype = htmlfor.replace(/\d$/, "");
				enumber = htmlfor.replace(etype, "");
				if (enumber) {
					if (etypemins[etype] == enumber || (etypemins[etype] != enumber && labelCount[etype] <= 1)) {
						$(this).children("label").addClass("error")
					} else {
						if (etypemins[etype] != enumber && labelCount[etype] > 1) {
							$(this).children("label").removeClass("error")
						}
					}
				}
			});
			spanErrList.each(function() {
				htmlfor = $(this).attr("htmlfor");
				etype = htmlfor.replace(/\d$/, "");
				enumber = htmlfor.replace(etype, "");
				etype = etype.replace(/\./, "-");
				if (enumber) {
					if (etypemins[etype] == enumber) {
						$(this).removeClass("hide");
						$("#" + htmlfor).closest("div").addClass("error")
					} else {
						$(this).addClass("hide");
						$("#" + htmlfor).closest("div").removeClass("error")
					}
				}
			})
		}
	}

	function isBIPSPaymentAmountRequired(value, element) {
		var poundsInput = $("#paymentAmountPounds")[0];
		var foreignInput = $("#paymentAmountForeign")[0];
		var result = true;
		if (poundsInput && foreignInput) {
			if (element === foreignInput) {
				return true
			}
			result = isAmountRequired($(poundsInput).val(), poundsInput);
			if (result == false) {
				return false
			}
		}
		return result
	}
	with($.validator) {
		addMethod("frequency", function() {
			return true
		});
		addMethod("number", isNumber, errorMessages.numberMessages.number);
		addMethod("isDays", isDays, errorMessages.overdraftEBDaysMessages.format);
		addMethod("isDays", isDays, errorMessages.overdraftEBDaysMessages.format);
		addMethod("isNonZeroOverdraftEBAmountBelowStepMin", isNonZeroOverdraftEBAmountBelowStepMin, errorMessages.overdraftEBAmountMessages
			.isNonZeroOverdraftEBAmountBelowStepMin);
		addMethod("isOverdraftEBAmountCorrectlyFormatted", isOverdraftEBAmountCorrectlyFormatted, errorMessages.overdraftEBAmountMessages
			.isOverdraftEBAmountCorrectlyFormatted);
		addMethod("mobilePhone", isMobilePhoneValid, errorMessages.mobilePhoneMessages.isMobilePhoneValid);
		addMethod("beforeToDate", beforeToDate, errorMessages.defaultDateMessage);
		addMethod("afterFromDate", afterFromDate, errorMessages.defaultToDateMessage);
		addMethod("allowSameDate", allowSameDate, errorMessages.allowSameDateMessage);
		addMethod("allowSameYear", allowSameYear, errorMessages.allowSameYearMessage);
		addMethod("isToYearValid", isToYearValid, errorMessages.defaultToYearMessage);
		addMethod("oneOrMoreRequired", oneOrMoreRequired, errorMessages.defaultRequiredMessage);
		addMethod("digitsOrSpaces", digitsOrSpaces, errorMessages.phoneExtNumberMessage.digits);
		addMethod("digitsOrSpacesOrPlus", digitsOrSpacesOrPlus, errorMessages.mobileNumberMessage.digits);
		addMethod("mobileExtValid", mobileExtValid, errorMessages.mobileNumberMessage.digits);
		addMethod("isAmountValid", isAmountValid, errorMessages.amountMessages.number);
		addMethod("isAmountInMultiple", isAmountInMultiple, errorMessages.amountMessages.multiple);
		addMethod("isAmountRequired", isAmountRequired, errorMessages.amountMessages.required);
		addMethod("isAmountTooHigh", isAmountTooHigh, errorMessages.amountMessages.amountTooHighMessage);
		addMethod("isAmountInRange", isAmountInRange, errorMessages.amountMessages.amountOutOfRangeMessage);
		addMethod("isPaymentAmountRequired", isAmountRequired, errorMessages.paymentAmountMessages.required);
		addMethod("isPaymentAmountNumber", isNumber, errorMessages.paymentAmountMessages.number);
		addMethod("isPaymentAmountValid", isAmountValid, errorMessages.paymentAmountMessages.valid);
		addMethod("isPaymentAmountTooLow", isAmountTooLow, errorMessages.paymentAmountMessages.tooLow);
		addMethod("isAccountOpenDateValid", isAccountOpenDateValid, errorMessages.accountOpenDateValidationMessage);
		addMethod("isDateOfBirthValid", isDateOfBirthValid, errorMessages.birthDateMessages.required);
		addMethod("isDateSelectedValid", isDateSelectedValid, errorMessages.birthDateMessages.isDateSelectedValidMessage);
		addMethod("isFutureDateValid", isFutureDateValid, errorMessages.defaultFutureDateMessage);
		addMethod("isEndDateValid", isEndDateValid, errorMessages.defaultStandingOrderDateMessage.isAfterStartDate);
		addMethod("isLastDateValid", isLastDateValid, errorMessages.defaultStandingOrderDateMessage.isAfterEndDate);
		addMethod("isValidInitialDate", isValidInitialDate, errorMessages.defaultStandingOrderDateMessage.isAfterThreeDays);
		addMethod("isValidStartDate", isValidStartDate, errorMessages.defaultStandingOrderDateMessage.isAfterInitialDate);
		addMethod("isTodayOnwardsDateValid", isTodayOnwardsDateValid, errorMessages.defaultTodayOnwardsDateMessage);
		addMethod("isName", isName, errorMessages.defaultValidCharactersMessage);
		addMethod("isPastDateValid", isPastDateValid, errorMessages.defaultPastDateMessage);
		addMethod("isFromDateTwoYearValid", isFromDateTwoYearValid, errorMessages.defaultIsFromDateTwoYearValidMessage);
		addMethod("isSearchDateLimitValid", isSearchDateLimitValid, errorMessages.defaultSearchDateLimitMessage);
		addMethod("isPostcodeValid", isPostcodeValid, errorMessages.defaultPostcodeMessage);
		addMethod("isPostcodeLeftValid", isPostcodeLeftValid, errorMessages.defaultPostcodeMessage);
		addMethod("isPostcodeRightValid", isPostcodeRightValid, errorMessages.defaultPostcodeMessage);
		addMethod("isVisible", isVisible, errorMessages.defaultRequiredMessage);
		addMethod("lengthIs", lengthIs, $.format(errorMessages.defaultNumberOfCharactersMessage));
		addMethod("lettersOrSpaces", lettersOrSpaces, errorMessages.defaultRequiredMessage);
		addMethod("radioHasValue", radioHasValue, errorMessages.defaultRadioMessage);
		addMethod("alertRadioHasValue", alertRadioHasValue, errorMessages.alertMobileMessages.alertRadioEmpty);
		addMethod("isMobileNumberValid", isMobileNumberValid, errorMessages.alertMobileMessages.isNumberError);
		addMethod("radioHasValueWhenAssociatedFieldChecked", radioHasValueWhenAssociatedFieldChecked, errorMessages.defaultRadioMessage);
		addMethod("radioNotEqualTo", radioNotEqualTo, errorMessages.defaultNotEqualMessage);
		addMethod("yesRequired", yesRequired, errorMessages.defaultYesMessage);
		addMethod("letters", letters, errorMessages.defaultLettersMessage);
		addMethod("lettersOrNumbers", lettersOrNumbers, errorMessages.defaultLettersOrNumbersMessage);
		addMethod("isAccountNameValid", isAccountNameValid, errorMessages.accountNameMessages.isAccountNameValid);
		addMethod("isChosenNameValid", isChosenNameValid, errorMessages.accountNameMessages.isChosenNameValid);
		addMethod("date", isDateValid, errorMessages.defaultDateMessage);
		addMethod("isPaymentReferenceValid", isPaymentReferenceValid, errorMessages.referenceMessages.isPaymentReferenceValid);
		addMethod("isBarclaycardPaymentReferenceValid", isBarclaycardPaymentReferenceValid, errorMessages.barclaycardReferenceMessages
			.isBarclaycardPaymentReferenceValid);
		addMethod("isModCheckValid", isModCheckValid, errorMessages.barclaycardReferenceMessages.isModCheckValid);
		addMethod("isMod11CheckValid", isMod11CheckValid, errorMessages.mortgageRegistration.isModCheckValid);
		addMethod("isBarclaycardLengthTooShort", isBarclaycardLengthTooShort, errorMessages.barclaycardReferenceMessages.isBarclaycardLengthTooShort);
		addMethod("isBarclaycardNumbers", isBarclaycardNumbers, errorMessages.barclaycardReferenceMessages.isBarclaycardNumbers);
		addMethod("isBarclaycardRequired", isBarclaycardRequired, errorMessages.barclaycardReferenceMessages.isBarclaycardRequired);
		addMethod("isIbanValid", isIbanValid, errorMessages.ibanMessages.isIbanValid);
		addMethod("isDomesticAccountNumberValid", isDomesticAccountNumberValid, errorMessages.domesticAccountNumberMessages
			.isDomesticAccountNumberValid);
		addMethod("isSwiftBicValid", isSwiftBicValid, errorMessages.swiftBicMessages.isSwiftBicValid);
		addMethod("isPayeeNameValid", isPayeeNameValid, errorMessages.payeeNameMessages.isPayeeNameValid);
		addMethod("isBankNameValid", isBankNameValid, errorMessages.bankNameMessages.isBankNameValid);
		addMethod("isNccValid", isNccValid, errorMessages.nccMessages.isNccValid);
		addMethod("isKeywordValid", isKeywordValid, errorMessages.keywordMessages.isKeywordValid);
		addMethod("isPayeeNameRequired", isPayeeNameRequired, errorMessages.payeeNameMessages.required);
		addMethod("beneSelected", beneSelected, errorMessages.beneSelectMessages.beneSelected);
		addMethod("isOptionsSelOverLimit", isOptionsSelOverLimit, errorMessages.payeesForDeletionMessages.isOptionsSelOverLimit);
		addMethod("isAddressValid", isAddressValid, errorMessages.addressMessages.isAddressValid);
		addMethod("isDealNumberValid", isDealNumberValid, errorMessages.dealNumberMessages.isDealNumberValid);
		addMethod("isBookedRateValid", isBookedRateValid, errorMessages.bookedExchangeRateMessages.isBookedExchangeRateValid);
		addMethod("isAddressValidBIPS", isAddressValidBIPS, errorMessages.addressMessagesBIPS.isAddressValid);
		addMethod("isYourReferenceValidBIPS", isYourReferenceValidBIPS, errorMessages.yourReferenceMessagesBIPS.isYourReferenceValid);
		addMethod("isPaymentReferenceValidBIPS", isPaymentReferenceValidBIPS, errorMessages.paymentReferenceMessagesBIPS.isPaymentReferenceValid);
		addMethod("isPayeeNameValidBIPS", isPayeeNameValidBIPS, errorMessages.payeeNameMessagesBIPS.isPayeeNameValid);
		addMethod("isBankNameValidBIPS", isBankNameValidBIPS, errorMessages.bankNameMessagesBIPS.isBankNameValid);
		addMethod("isChosenTransferOption", isChosenTransferOption, errorMessages.defaultRadioMessage);
		addMethod("isProviderNameValid", isProviderNameValid, errorMessages.providerNameMessages.isProviderNameValid);
		addMethod("isRollNumberValid", isRollNumberValid, errorMessages.rollNumberMessages.isRollNumberValid);
		addMethod("isPlanNumberValid", isPlanNumberValid, errorMessages.planNumberMessages.isPlanNumberValid);
		addMethod("isDescvalid", isDescvalid, errorMessages.groupPaymentMessages.isGroupDescValid);
		addMethod("isgroupDescEmpty", isgroupDescEmpty, errorMessages.groupPaymentMessages.isGroupDescEmpty);
		addMethod("isgroupNameValid", isgroupNameValid, errorMessages.groupPaymentMessages.isGroupNameValid);
		addMethod("isgroupNameEmpty", isgroupNameEmpty, errorMessages.groupPaymentMessages.isGroupNameEmpty);
		addMethod("isGrpAmountValid", isAmountValid, errorMessages.amountMessages.amountLowerLimit);
		addMethod("isWithinDynamicRange", isWithinDynamicRange, errorMessages.amountMessages.withinRange);
		addMethod("isAmountTooLow", isAmountTooLow, errorMessages.amountMessages.isLowthanLimit);
		addMethod("isAddressSelected", isAddressSelected, errorMessages.changeAddressMessages.addressNotSelected);
		addMethod("isHomeNumberPresent", isHomeNumberPresent, errorMessages.changeAddressMessages.homeAddressNotSelected);
		addMethod("isAlertMobilePresent", isAlertMobilePresent, errorMessages.alertMobileMessages.isMobileNumberEntered);
		addMethod("isConfirmAlert", isConfirmAlert, errorMessages.alertMobileMessages.confirmMobileAlert);
		addMethod("isMaxLength", isMaxLength, errorMessages.payeeNameMessages.isMaxLength);
		addMethod("isGroupPaymentNewPayeeRequired", isGroupPaymentNewPayeeRequired, errorMessages.payeeNameMessages.required);
		addMethod("mobileValidationForUkAndInt", mobileValidationForUkAndInt, errorMessages.mobileValidationForUkAndIntMessages
			.mobilePhoneValid);
		addMethod("requiredIfElementSet", requiredIfElementSet, errorMessages.phoneDetailsConfirmMessages.requiredIfElementSet);
		addMethod("validateDateRange", validateDateRange, errorMessages.dateMessages.dateRange);
		addMethod("validateMinAccBalance", validateMinAccBalance, errorMessages.amountMessages.amountLowerLimit);
		addMethod("validateAmounts", validateAmounts, errorMessages.amountMessages.amountRange);
		addMethod("validateThresholdLowerLimitRequired", validateThresholdLowerLimitRequired, errorMessages.amountMessages
			.required);
		addMethod("validateThresholdLowerLimitMinAccBalance", validateThresholdLowerLimitMinAccBalance, errorMessages.amountMessages
			.amountLowerLimit);
		addMethod("validateThresholdUpperLimitRequired", validateThresholdUpperLimitRequired, errorMessages.amountMessages
			.required);
		addMethod("validateThresholdUpperLimitMinAccBalance", validateThresholdUpperLimitMinAccBalance, errorMessages.amountMessages
			.amountLowerLimit);
		addMethod("isSMSMonthDaySelected", isSMSMonthDaySelected, errorMessages.userSelectMessages.isDateSelected);
		addMethod("otherPhoneNumberPresent", otherPhoneNumberPresent, errorMessages.otherPhoneMessages.required);
		addMethod("confirmRequired", confirmRequired, errorMessages.confirmMessages.checkbox);
		addMethod("pdfLinksClickAll", pdfLinksClickAll, errorMessages.pdfLinkMessages.clickAll);
		addMethod("selectRequired", selectRequired, errorMessages.defaultSelectMessage);
		addMethod("signatureRequired", signatureRequired, errorMessages.signatureMessages.signatureRequired);
		addMethod("validateAmountForWholeNumber", validateAmountForWholeNumber, errorMessages.amountMessages.wholeNumber);
		addMethod("selectBoxRequired", selectBoxRequired, errorMessages.defaultSelectMessage);
		addMethod("isBIPSPaymentAmountRequired", isBIPSPaymentAmountRequired, errorMessages.paymentAmountPoundsMessagesBIPS
			.isBIPSPaymentAmountRequired);
		addMethod("employmentStatusOpeningDropDown", accountOpeningDropDown, errorMessages.employmentStatusOpeningErrorMessage);
		addMethod("employmentMonthRequired", employmentDateValidationRequired, errorMessages.employmentStartDateErrorMessage
			.employmentMonthRequired);
		addMethod("employmentYearRequired", employmentDateValidationRequired, errorMessages.employmentStartDateErrorMessage
			.employmentYearRequired);
		addMethod("employerNameRequired", $.validator.methods.required, errorMessages.employerName.employerNameRequired);
		addMethod("businessNameRequired", $.validator.methods.required, errorMessages.businessName.businessNameRequired);
		addMethod("occupationTypeCodeRequired", accountOpeningDropDown, errorMessages.occupationTypeCodeRequired);
		addMethod("accAddressLine1", validateAddressLines, errorMessages.accAddressLine1.accAddressLine1);
		addMethod("accAddressLine2", validateAddressLines, errorMessages.accAddressLine2.accAddressLine2);
		addMethod("frequencyOvertimeRequired", frequencyOvertimeRequired, errorMessages.occupationTypeCodeErrorMessage.frequencyOvertimeRequired);
		addMethod("employmentValidDateWithMonthCheck", employmentValidMonthCheck, errorMessages.employmentStartDateErrorMessage
			.employmentMonthValidation);
		addMethod("employmentValidDateWithYearCheck", employmentValidYearCheck, errorMessages.employmentStartDateErrorMessage
			.employmentYearValidation);
		addMethod("employmentRequiredDateWithMonthCheck", employmentRequiredDateCheck, errorMessages.employmentStartDateErrorMessage
			.employmentMonthValidation);
		addMethod("employmentRequiredDateWithYearCheck", employmentRequiredDateCheck, errorMessages.employmentStartDateErrorMessage
			.employmentYearValidation);
		addMethod("monthlyIncomeRequired", $.validator.methods.required, errorMessages.monthlyIncomeAfterTax.monthlyIncomeRequired);
		addMethod("annualIncomeRequired", $.validator.methods.required, errorMessages.annualIncomeBeforeTax.annualIncomeRequired);
		addMethod("validIncomeDetailsCheck", validateIncomeDetails, errorMessages.annualIncomeBeforeTax.validIncomeDetailsCheck);
		addMethod("isPostcodeValidWhenOptional", isPostcodeValidWhenOptional, errorMessages.defaultPostcodeMessage);
		addMethod("lettersOrNumbersWithSpace", lettersOrNumbersWithSpace, errorMessages.defaultLettersOrNumbersMessage);
		addMethod("accOpeningIdentityCreditAndFraudCheckRequired", $.validator.methods.required, errorMessages.accOpeningIdentityCreditAndFraudCheck
			.accOpeningIdentityCreditAndFraudCheckRequired);
		addMethod("accOpeningTermsAndConditionsRequired", $.validator.methods.required, errorMessages.accOpeningTermsAndConditions
			.accOpeningTermsAndConditionsRequired);
		var orginalValidator = {
			highlight: $.validator.defaults.highlight,
			unhighlight: $.validator.defaults.unhighlight,
			resetForm: $.validator.prototype.resetForm,
			showLabel: $.validator.prototype.showLabel,
			optional: $.validator.prototype.optional,
			formatAndAdd: $.validator.prototype.formatAndAdd,
			customMetaMessage: $.validator.prototype.customMetaMessage
		};
		$.validator.prototype.customMetaMessage = function(element, method) {
			var meta = $.metadata ? $(element).metadata() : "",
				m;
			if (meta && meta.messages) {
				m = ($.validator.defaults.messages[meta.messages])[method]
			}
			return m ? m : orginalValidator.customMetaMessage.call(this, element, method)
		};
		$.validator.prototype.showLabel = function(element, message) {
			orginalValidator.showLabel.call(this, element, message);
			var label = this.errorsFor(element);
			if (label.length > 0) {
				placeErrors(label, $(element))
			}
		};
		$.validator.prototype.resetForm = function() {
			var errorElements = $(this.currentForm).find("input.error,select.error");
			if (errorElements.length > 0) {
				errorElements.each(function() {
					resetElementErrorStatus($(this))
				});
				updateErrorCount(this.currentForm)
			}
			orginalValidator.resetForm.call(this)
		};
		$.validator.prototype.resetFormAndClearServerSideMessages = function() {
			var errorSection = $(this.currentForm).find("#uid-error:visible");
			errorSection.remove()
		};
		$.validator.prototype.resetHiddenElementsStatus = function() {
			var elements = $(this.currentForm).find("input:hidden").filter(".error");
			this.resetElements(elements)
		};
		$.validator.prototype.resetDisabledElementsStatus = function() {
			var elements = this.filterOnDisabledElementsWihErrorAndAreNotRadioButtonsInAList();
			this.resetElements(elements)
		};
		$.validator.prototype.filterOnDisabledElementsWihErrorAndAreNotRadioButtonsInAList = function() {
			return $(this.currentForm).find("input:disabled").filter(".error").not("div.list input[type='radio']")
		};
		$.validator.prototype.resetElements = function(elements) {
			var validator = this;
			if (elements.length > 0) {
				elements.each(function() {
					resetElementErrorStatus($(this), validator)
				});
				updateErrorCount(this.currentForm)
			}
		};
		$.validator.prototype.optional = function(element) {
			if (element.value.length === 0 && element.defaultValue != null && element.defaultValue.length === 0) {
				return true
			}
			return orginalValidator.optional.call(this, element)
		};
		$.validator.prototype.formatAndAdd = function(element, rule) {
			var changedParams = $(element).data(rule.method);
			if (changedParams != null) {
				rule.parameters = changedParams;
				$(element).removeData(rule.method)
			}
			orginalValidator.formatAndAdd.call(this, element, rule)
		};
		$.validator.classRules = function(element) {
			var rules = {},
				classes = $(element).attr("class");
			if (classes) {
				classes = classes.replace(/meta\(([\w\s\W]*)\)/, "")
			}
			classes && $.each(classes.split(" "), function() {
				if (this in $.validator.classRuleSettings) {
					$.extend(rules, $.validator.classRuleSettings[this])
				}
			});
			return rules
		};
		setDefaults({
			errorPlacement: placeErrors,
			ignore: ":hidden,.optional",
			ignoreTitle: true,
			showErrors: showErrors,
			invalidHandler: invalidHandler,
			errorElement: "span",
			focusInvalid: false,
			highlight: function(element, errorClass, validClass) {
				if (ftb) {
					orginalValidator.highlight.call(this, element, errorClass, validClass);
					$(element).closest("li").addClass("error");
					if (!$(element).closest("li,div.fieldcontainer").find("div.icon-error-cross").length) {
						var parent = $(element).parent();
						if ($(parent)[0].nodeName == "FIELDSET") {
							$(parent).after(errorHtmlIcon)
						} else {
							$(element).after(errorHtmlIcon)
						}
					}
				} else {
					orginalValidator.highlight.call(this, element, errorClass, validClass);
					$(element).closest("span").addClass("error-span").closest("div").addClass("error").closest(
						"div.custom-input").addClass("error")
				}
			},
			unhighlight: function(element, errorClass, validClass) {
				if (ftb) {
					orginalValidator.unhighlight.call(this, element, errorClass, validClass);
					if (!$(element).siblings($(element).get(0).tagName).hasClass("error")) {
						$(element).closest("li,div.fieldcontainer").removeClass("error").find("div.icon-error-cross").remove()
					}
				} else {
					orginalValidator.unhighlight.call(this, element, errorClass, validClass);
					$(element).closest("span").removeClass("error-span").closest("div").removeClass("error").closest(
						"div.custom-input").removeClass("error")
				}
			},
			messages: {
				accountNumber: errorMessages.accountNumberMessages,
				mvcCode: errorMessages.mvcCodeMessages,
				depositAccount: errorMessages.accountNumberMessages,
				osAccount: errorMessages.accountNumberMessages,
				accountNo: errorMessages.accountNumberMessages,
				businessCurrentAcct: errorMessages.accountNumberMessages,
				accountName: errorMessages.accountNameMessages,
				smsReference: errorMessages.accountNameMessages,
				birthDate: errorMessages.birthDateMessages,
				day: errorMessages.birthDateMessages,
				month: errorMessages.birthDateMessages,
				year: errorMessages.birthDateMessages,
				dateOfBirth: errorMessages.birthDateMessages,
				startDate: errorMessages.dateMessages,
				amount: errorMessages.amountMessages,
				amountRequired: errorMessages.amountMessages,
				bondTransferAmount: errorMessages.amountMessages,
				extendAmount: errorMessages.amountMessages,
				initialBorrowAmount: errorMessages.amountMessages,
				initialPaymentAmount: errorMessages.amountMessages,
				initialTransferAmount: errorMessages.amountMessages,
				openAmount: errorMessages.amountMessages,
				paymentAmount: errorMessages.amountMessages,
				transferAmount: errorMessages.amountMessages,
				finalTransferAmount: errorMessages.amountMessages,
				startAmount: errorMessages.amountMessages,
				startamount: errorMessages.amountMessages,
				firstAmount: errorMessages.amountMessages,
				lastAmount: errorMessages.amountMessages,
				smsMinimumBalance: errorMessages.amountMessages,
				smsLargeCreditAmount: errorMessages.amountMessages,
				smsLargeDebitAmount: errorMessages.amountMessages,
				smsLowBalanceLimit: errorMessages.amountMessages,
				smsOverdraftLowerLimit: errorMessages.amountMessages,
				smsOverdraftUpperLimit: errorMessages.amountMessages,
				principalCalcInput: errorMessages.amountMessages,
				sweepAmount: errorMessages.amountMessages,
				lowerLimitBalance: errorMessages.amountMessages,
				upperLimitBalance: errorMessages.amountMessages,
				seriousSavingsTargetAmount: errorMessages.amountMessages,
				savingsReserveTargetBalance: errorMessages.amountMessages,
				homePhoneDetails: errorMessages.phoneDetailsMessages,
				homePhoneDetailsStd: errorMessages.phoneDetailsMessages,
				homePhoneDetailsConfirm: errorMessages.phoneDetailsConfirmMessages,
				homePhoneDetailsStdConfirm: errorMessages.phoneDetailsConfirmMessages,
				workPhoneDetails: errorMessages.phoneDetailsMessages,
				workPhoneDetailsStd: errorMessages.phoneDetailsMessages,
				workPhoneDetailsExt: errorMessages.phoneDetailsMessages,
				workPhoneDetailsConfirm: errorMessages.phoneDetailsConfirmMessages,
				workPhoneDetailsStdConfirm: errorMessages.phoneDetailsConfirmMessages,
				workPhoneDetailsExtConfirm: errorMessages.phoneDetailsConfirmMessages,
				mobilePhoneDetails: errorMessages.phoneDetailsMessages,
				mobilePhoneDetailsConfirm: errorMessages.phoneDetailsConfirmMessages,
				agreeDetails: errorMessages.confirmMessages,
				chapsTermsAccept: errorMessages.confirmMessages,
				confirmDetails: errorMessages.confirmMessages,
				connectCard1: errorMessages.cardNumberMessages,
				connectCard2: errorMessages.cardNumberMessages,
				connectCard3: errorMessages.cardNumberMessages,
				connectCard4: errorMessages.cardNumberMessages,
				debitCardSet1: errorMessages.cardNumberMessages,
				debitCardSet2: errorMessages.cardNumberMessages,
				debitCardSet3: errorMessages.cardNumberMessages,
				debitCardSet4: errorMessages.cardNumberMessages,
				forgottenNumberCardNum1: errorMessages.cardNumberMessages,
				forgottenNumberCardNum2: errorMessages.cardNumberMessages,
				forgottenNumberCardNum3: errorMessages.cardNumberMessages,
				forgottenNumberCardNum4: errorMessages.cardNumberMessages,
				cardNo1: errorMessages.cardNumberMessages,
				cardNo2: errorMessages.cardNumberMessages,
				cardNo3: errorMessages.cardNumberMessages,
				cardNo4: errorMessages.cardNumberMessages,
				"pinViewStep2Bean.connectCard1": errorMessages.cardNumberMessages,
				"pinViewStep2Bean.connectCard2": errorMessages.cardNumberMessages,
				"pinViewStep2Bean.connectCard3": errorMessages.cardNumberMessages,
				"pinViewStep2Bean.connectCard4": errorMessages.cardNumberMessages,
				description: errorMessages.descriptionMessages,
				email: errorMessages.emailMessages,
				emailAddress: errorMessages.emailMessages,
				editEmailAddr: errorMessages.emailMessages,
				emailAddressConfirm: errorMessages.emailMessages,
				confirmEmailAddress: errorMessages.emailMessages,
				confirmEditEmailAddr: errorMessages.emailMessages,
				eMailAdd: errorMessages.emailMessages,
				eMailAddConfirm: errorMessages.emailMessages,
				emailAddress1: errorMessages.emailMessages,
				emailAddress2: errorMessages.emailMessages,
				emailWork: errorMessages.emailMessages,
				fromAccountId: errorMessages.accountNameMessages,
				toAccountId: errorMessages.accountNameMessages,
				alertFrom: errorMessages.transferDateMessages,
				alertTo: errorMessages.transferDateMessages,
				dateFrom: errorMessages.transferDateMessages,
				dateTo: errorMessages.transferDateMessages,
				endTransferDate: errorMessages.transferDateMessages,
				finalTransferDate: errorMessages.transferDateMessages,
				initialTransferDate: errorMessages.transferDateMessages,
				paymentDate: errorMessages.transferDateMessages,
				startTransferDate: errorMessages.transferDateMessages,
				udcaCountry1FromDate: errorMessages.transferDateMessages,
				udcaCountry1ToDate: errorMessages.transferDateMessages,
				udcaCountry2FromDate: errorMessages.transferDateMessages,
				udcaCountry2ToDate: errorMessages.transferDateMessages,
				transferDate: errorMessages.transferDateMessages,
				smsSuspendFromDate: errorMessages.rangeDateMessages,
				smsSuspendToDate: errorMessages.rangeDateMessages,
				phone: errorMessages.selectPhoneMessages,
				mobile: errorMessages.mobilePhoneMessages,
				cardDigits: errorMessages.cardDigitsMessages,
				membershipNumber: errorMessages.membershipNumberMessages,
				memorableword: errorMessages.memwordMessages,
				memorablewordNew: errorMessages.memwordMessages,
				memorablewordConfirmed: errorMessages.memwordConfirmMessages,
				memorableWord1: errorMessages.memwordMessages,
				memorableWord2: errorMessages.memwordConfirmMessages,
				memorableWord1WithDigits: errorMessages.memorableWordWithDigits,
				memorableWord2WithDigits: errorMessages.memorableWordWithDigits,
				memorableWordNew1: errorMessages.memwordMessagesNew,
				memorableWordNew2: errorMessages.memwordConfirmMessages,
				memorableWordNew1WithDigits: errorMessages.memorableWordWithDigits,
				memorableWordNew2WithDigits: errorMessages.memorableWordWithDigits,
				firstMemorableCharacter: errorMessages.defaultSelectMessage,
				secondMemorableCharacter: errorMessages.defaultSelectMessage,
				oldMD: errorMessages.memwordMessages,
				newMD1: errorMessages.memwordMessages,
				newMD2: errorMessages.memwordConfirmMessages,
				oldMDWithDigits: errorMessages.memorableWordWithDigits,
				newMD1WithDigits: errorMessages.memorableWordWithDigits,
				newMD2WithDigits: errorMessages.memorableWordWithDigits,
				mobileTopUpValue: errorMessages.mobileTopUpValueMessages,
				name: errorMessages.nameMessages,
				forename: errorMessages.nameMessages,
				firstname: errorMessages.nameMessages,
				middleName: errorMessages.nameMessages,
				surname: errorMessages.nameMessages,
				forgottenNumberSurname: errorMessages.nameMessages,
				ni1: errorMessages.niNumberMessages,
				ni2: errorMessages.niNumberMessages,
				ni3: errorMessages.niNumberMessages,
				ni4: errorMessages.niNumberMessages,
				ni5: errorMessages.niNumberMessages,
				nationalInsuranceOne: errorMessages.niNumberMessages,
				nationalInsuranceTwo: errorMessages.niNumberMessages,
				numberOfTransfers: errorMessages.numberMessages,
				cmwExistingpasscode: errorMessages.passcodeMessages,
				cmwNewpasscode: errorMessages.passcodeMessages,
				cmwNewpasscodeConfirmed: errorMessages.passcodeMessages,
				passcode: errorMessages.passcodeMessages,
				"payee-select": errorMessages.payeeSelectMessages,
				payeeAccountIndexString: errorMessages.payeeSelectMessages,
				"user-select": errorMessages.userSelectMessages,
				payeeName: errorMessages.payeeNameMessages,
				phoneName: errorMessages.phoneName,
				phoneNumber: errorMessages.phoneNumberMessages,
				homePhone: errorMessages.phoneNumberMessages,
				workPhone: errorMessages.phoneNumberMessages,
				workPhoneExt: errorMessages.phoneNumberMessages,
				dayTimeTeleNum: errorMessages.phoneNumberMessages,
				dayTimeTeleNumSTD: errorMessages.phoneNumberMessages,
				homePhoneNumber: errorMessages.phoneNumberMessages,
				workPhoneNumber: errorMessages.phoneNumberMessages,
				workPhoneExtension: errorMessages.phoneNumberMessages,
				mobilePhoneNumber: errorMessages.phoneNumberMessages,
				dayTimeTeleNum: errorMessages.phoneNumberMessages,
				homePhoneSTD: errorMessages.STDNumberMessages,
				workPhoneSTD: errorMessages.STDNumberMessages,
				mobilePhoneSTD: errorMessages.STDNumberMessages,
				dayTimeTeleNumSTD: errorMessages.STDNumberMessages,
				pinAuthorise1: errorMessages.pinAuthoriseMessages,
				pinAuthorise2: errorMessages.pinAuthoriseMessages,
				oneTimePasscode1: errorMessages.pinAuthoriseMessages,
				oneTimePasscode2: errorMessages.pinAuthoriseMessages,
				cardSignature1: errorMessages.pinAuthoriseMessages,
				cardSignature2: errorMessages.pinAuthoriseMessages,
				pinSentryCode1: errorMessages.pinAuthoriseMessages,
				pinSentryCode2: errorMessages.pinAuthoriseMessages,
				responseCode1: errorMessages.pinAuthoriseMessages,
				responseCode2: errorMessages.pinAuthoriseMessages,
				bankPostcode1: errorMessages.postcodeMessages,
				bankPostcode2: errorMessages.postcodeMessages,
				postCode: errorMessages.postcodeMessages,
				postCode1: errorMessages.postcodeMessages,
				postCode2: errorMessages.postcodeMessages,
				pcode1: errorMessages.postcodeMessages,
				pcode2: errorMessages.postcodeMessages,
				oldPC: errorMessages.passcodeMessages,
				newPC1: errorMessages.passcodeMessages,
				newPC2: errorMessages.passcodeMessages,
				paymentReference: errorMessages.referenceMessages,
				reference: errorMessages.referenceMessages,
				faqSearch: errorMessages.searchTextMessages,
				search: errorMessages.searchTextMessages,
				forgottenNumberSecurityCode: errorMessages.securityCodeMessages,
				securityCode: errorMessages.securityCodeMessages,
				"pinViewStep2Bean.securityCode": errorMessages.securityCodeMessages,
				sc1: errorMessages.sortCode1Messages,
				sc2: errorMessages.sortCode2Messages,
				sc3: errorMessages.sortCode3Messages,
				sortCode1: errorMessages.sortCode1Messages,
				sortCode2: errorMessages.sortCode2Messages,
				sortCode3: errorMessages.sortCode3Messages,
				sortCodeSet1: errorMessages.sortCode1Messages,
				sortCodeSet2: errorMessages.sortCode2Messages,
				sortCodeSet3: errorMessages.sortCode3Messages,
				sortCodePart1: errorMessages.sortCode1Messages,
				sortCodePart2: errorMessages.sortCode2Messages,
				sortCodePart3: errorMessages.sortCode3Messages,
				"isaTransferDetailBean.fromSortCode1": errorMessages.sortCode1Messages,
				"isaTransferDetailBean.fromSortCode2": errorMessages.sortCode2Messages,
				"isaTransferDetailBean.fromSortCode3": errorMessages.sortCode3Messages,
				"isaTransferDetailBean.fromAccountNumber": errorMessages.accountNumberMessages,
				depositAccountSC1: errorMessages.sortCode1Messages,
				depositAccountSC2: errorMessages.sortCode2Messages,
				depositAccountSC3: errorMessages.sortCode3Messages,
				osAccountSC1: errorMessages.sortCode1Messages,
				osAccountSC2: errorMessages.sortCode2Messages,
				osAccountSC3: errorMessages.sortCode3Messages,
				smsNewMobileNumber: errorMessages.phoneNumberMessages,
				smsConfirmNewMobileNumber: errorMessages.phoneNumberMessages,
				endValue: errorMessages.numberMessages,
				"multi-payee-select": errorMessages.payeesForDeletionMessages,
				"contactUsBean.workPhone": errorMessages.contactWorkPhoneMessages,
				"contactUsBean.homePhone": errorMessages.contactHomePhoneMessages,
				"contactUsBean.mobilePhone": errorMessages.contactMobilePhoneMessages,
				personalDetailsConfirmed: errorMessages.overdraftSimplified.personalDetailsConfirmedRequired,
				confirmPrintPageOverdraft: errorMessages.overdraftSimplified.confirmPrintPageOverdraftRequired,
				confirmReadPrecontractOverdraft: errorMessages.overdraftSimplified.confirmReadPrecontractOverdraftRequired,
				confirmLoanPurpose: errorMessages.personalLoanPurpose.loanPurposeRequired,
				loanFromAccountId: errorMessages.accountNameMessages,
				loanToAccountId: errorMessages.accountNameMessages,
				"bilQuoteDetails.borrowingReason": errorMessages.borrowingReasonMessages,
				"bilQuoteDetails.assetType": errorMessages.borrowingReasonMessages,
				"bilFormsBean.signature": errorMessages.signatureMessages,
				overPaymentAmount: errorMessages.singleOverpaymentAmountMessages,
				"multipartMortgagePaymentStep1Bean.productId": errorMessages.singleOverpaymentMortgagePartSelectionMessages,
				"mortgagesRegularOverpaymentBean.overpaymentType": errorMessages.regularOverpaymentTypeMessages,
				"mortgagesRegularOverpaymentBean.continueUntil": errorMessages.regularOverpaymentContineUntilMessages,
				"mortgagesRegularOverpaymentBean.multipartOverpaymentType": errorMessages.regularOverpaymentMultipartOverpaymentTypeMessages,
				"mortgagesRegularOverpaymentBean.numberOfPayments": errorMessages.regularOverpaymentNumberOfPaymentsMessages,
				numberOfPayments: errorMessages.underpaymentNumberOfPaymentsMessages,
				underpayAmount: errorMessages.underpaymentAmountMessages,
				multipartUnderpaymentType: errorMessages.underpaymentTypeMessages,
				countryNationality: errorMessages.defaultSelectMessage,
				countryResidence: errorMessages.defaultSelectMessage,
				countryBirth: errorMessages.defaultSelectMessage,
				paymentAmountPounds: errorMessages.paymentAmountPoundsMessagesBIPS,
				paymentAmountForeign: errorMessages.paymentAmountForeignMessagesBIPS,
				"accountOpeningSessionBean.validDetails": errorMessages.validDetailsErrorMessage,
				"accountOpeningSessionBean.employmentStatusCode": errorMessages.employmentStatusOpeningErrorMessage,
				"accountOpeningSessionBean.employmentStartMonth": errorMessages.employmentStartDateErrorMessage,
				"accountOpeningSessionBean.occupationTypeCode": errorMessages.occupationTypeCodeRequired,
				"accountOpeningSessionBean.countryNationality": errorMessages.defaultSelectMessage,
				"accountOpeningSessionBean.countryResidence": errorMessages.defaultSelectMessage,
				"accountOpeningSessionBean.countryBirth": errorMessages.defaultSelectMessage,
				"accountOpeningSessionBean.bonusFrequencyCode": errorMessages.occupationTypeCodeErrorMessage
			},
			rules: {
				overdraftDaysTextInput: {
					isDays: true
				},
				emergencyDaysTextInput: {
					isDays: true
				},
				overdraftAmountTextInput: {
					isNonZeroOverdraftEBAmountBelowStepMin: [100, 10, "#overdraftAmountSlider-min-label"],
					isOverdraftEBAmountCorrectlyFormatted: ["#overdraftAmountSlider-min-label",
						"#overdraftAmountSlider-max-label", 10
					]
				},
				emergencyAmountTextInput: {
					isOverdraftEBAmountCorrectlyFormatted: ["#emergencyAmountSlider-min-label",
						"#emergencyAmountSlider-max-label", 100
					]
				},
				nationalInsRadio: {
					yesRequired: true
				},
				frequency: {
					required: true,
					selectBoxRequired: true
				},
				continuationType: {
					required: true,
					selectBoxRequired: true
				},
				firstMemorableCharacter: {
					required: true
				},
				secondMemorableCharacter: {
					required: true
				},
				toAccountId: {
					radioNotEqualTo: ["fromAccountId", errorMessages.accountNameMessages.radioNotEqualTo]
				},
				mobileTopUpValue: {
					radioHasValue: true
				},
				"payee-select": {
					radioHasValue: true
				},
				payeeAccountIndexString: {
					radioHasValue: true
				},
				"user-select": {
					radioHasValue: true
				},
				bankCountry: {
					radioHasValue: true
				},
				"residence-country": {
					radioHasValue: true
				},
				"nationality-country": {
					radioHasValue: true
				},
				"birth-country": {
					radioHasValue: true
				},
				"type-select": {
					radioHasValue: true
				},
				currentAccount: {
					radioHasValue: true
				},
				invoiceDiscountingFactor: {
					radioHasValue: true
				},
				invoiceOrFactor: {
					radioHasValue: true
				},
				moreThanOneSignature: {
					radioHasValue: true
				},
				nature: {
					radioHasValue: true
				},
				subject: {
					radioHasValue: true
				},
				payeeName: {
					isPayeeNameRequired: true,
					isPayeeNameValid: true
				},
				beneficiaryBankName: {
					rangelength: [2, 35],
					isBankNameValid: true
				},
				keyword: {
					isKeywordValid: true
				},
				"Containing the word(s)": {
					isKeywordValid: true
				},
				valueIn: {
					number: true
				},
				valueOut: {
					number: true
				},
				valueInBottom: {
					number: true
				},
				valueOutBottom: {
					number: true
				},
				dayTimeTeleNumSTD: {
					required: true,
					digits: true
				},
				dayTimeTeleNum: {
					required: true,
					digits: true
				},
				paymentCountry: {
					radioHasValue: true
				},
				paymentCurrency: {
					radioHasValue: true
				},
				beneficiaryName: {
					rangelength: [2, 35],
					required: true,
					isPayeeNameValid: true
				},
				beneficiaryAddress3: {
					radioHasValue: false
				},
				beneficiaryBankAdd3: {
					radioHasValue: true
				},
				nccType: {
					radioHasValue: true
				},
				ncc: {
					isNccValid: true
				},
				countryNationality: {
					radioHasValue: true
				},
				countryResidence: {
					radioHasValue: true
				},
				countryBirth: {
					radioHasValue: true
				},
				selectedISAProduct: {
					radioHasValue: true
				},
				smsDayOfWeek: {
					radioHasValueWhenAssociatedFieldChecked: ["smsDayOfWeekCheckBox"]
				},
				personalDetailsConfirmed: {
					required: true
				},
				confirmPrintPageOverdraft: {
					required: true
				},
				confirmReadPrecontractOverdraft: {
					required: true
				},
				confirmLoanPurpose: {
					required: true
				},
				"isaTransferDetailBean.cedingPartyName": {
					required: true,
					isProviderNameValid: true
				},
				"isaTransferDetailBean.fromRollNumber": {
					isRollNumberValid: true,
					required: false,
					rangelength: [4, 18]
				},
				"isaTransferDetailBean.fromPlanNumber": {
					isPlanNumberValid: true,
					required: true,
					rangelength: [1, 30]
				},
				smsLowBalanceLimit: {
					isAmountTooLow: ["#smsLowBalanceLimitMin"]
				},
				smsOverdraftUpperLimit: {
					isWithinDynamicRange: ["#overdraftUpperLimitMinValue", "#overdraftUpperLimitMaxValue",
						"#overdraftUpperLimitMinValueFormatted", "#overdraftUpperLimitMaxValueFormatted"
					]
				},
				homePhoneDetailsStdConfirm: {
					requiredIfElementSet: "#homePhoneDetailsStd",
					equalTo: "#homePhoneDetailsStd"
				},
				homePhoneDetailsConfirm: {
					requiredIfElementSet: "#homePhoneDetails",
					equalTo: "#homePhoneDetails"
				},
				workPhoneDetailsStdConfirm: {
					requiredIfElementSet: "#workPhoneDetailsStd",
					equalTo: "#workPhoneDetailsStd"
				},
				workPhoneDetailsConfirm: {
					requiredIfElementSet: "#workPhoneDetails",
					equalTo: "#workPhoneDetails"
				},
				workPhoneDetailsExtConfirm: {
					requiredIfElementSet: "#workPhoneDetailsExt",
					equalTo: "#workPhoneDetailsExt"
				},
				mobilePhoneDetailsConfirm: {
					requiredIfElementSet: "#mobilePhoneDetails",
					equalTo: "#mobilePhoneDetails"
				},
				"mortgagesRegularOverpaymentBean.continueUntil": {
					radioHasValue: true
				},
				numberOfPayments: {
					radioHasValue: true
				},
				loanFromAccountId: {
					selectRequired: true
				},
				loanToAccountId: {
					selectRequired: true
				},
				"bilQuoteDetails.borrowingReason": {
					selectRequired: true
				},
				"bilQuoteDetails.assetType": {
					selectRequired: true
				},
				"bilFormsDetails.facilitySign": {
					signatureRequired: true
				},
				"bilFormsDetails.sfgSign": {
					signatureRequired: true
				},
				sortCode1: {
					required: true,
					digits: true,
					lengthIs: 2
				},
				sortCode2: {
					required: true,
					digits: true,
					lengthIs: 2
				},
				sortCode3: {
					required: true,
					digits: true,
					lengthIs: 2
				},
				AccountNumber: {
					required: true,
					digits: true
				},
				"accountOpeningSessionBean.validDetails": {
					required: true
				},
				"accountOpeningSessionBean.employmentStatusCode": {
					employmentStatusOpeningDropDown: true
				},
				"accountOpeningSessionBean.employmentStartMonth": {
					employmentMonthRequired: "#currentEmploymentStatusCode",
					employmentValidDateWithMonthCheck: true,
					employmentRequiredDateWithMonthCheck: "#currentEmploymentStatusCode"
				},
				"accountOpeningSessionBean.employmentStartYear": {
					employmentYearRequired: "#currentEmploymentStatusCode",
					employmentValidDateWithYearCheck: true,
					employmentRequiredDateWithYearCheck: "#currentEmploymentStatusCode"
				},
				"accountOpeningSessionBean.occupationTypeCode": {
					occupationTypeCodeRequired: true
				},
				"accountOpeningSessionBean.countryNationality": {
					occupationTypeCodeRequired: true
				},
				"accountOpeningSessionBean.countryResidence": {
					occupationTypeCodeRequired: true
				},
				"accountOpeningSessionBean.countryBirth": {
					occupationTypeCodeRequired: true
				},
				"accountOpeningSessionBean.bonusFrequencyCode": {
					frequencyOvertimeRequired: "#annualBonus"
				},
				"accountOpeningSessionBean.monthlyIncomeAfterTax": {
					monthlyIncomeRequired: true,
					digits: true
				},
				"accountOpeningSessionBean.annualIncomeBeforeTax": {
					annualIncomeRequired: true,
					validIncomeDetailsCheck: true
				},
				"accountOpeningSessionBean.postcode": {
					isPostcodeValidWhenOptional: true
				},
				"accountOpeningSessionBean.addressLine3": {
					lettersOrNumbersWithSpace: true
				},
				"accountOpeningSessionBean.addressLine4": {
					lettersOrNumbersWithSpace: true
				},
				"accountOpeningSessionBean.addressLine5": {
					lettersOrNumbersWithSpace: true
				},
				identityCreditAndFraudCheck: {
					accOpeningIdentityCreditAndFraudCheckRequired: true
				},
				termsAndConditions: {
					accOpeningTermsAndConditionsRequired: true
				}
			}
		});
		addClassRules({
			"address-selected": {
				isAddressSelected: true
			},
			"home-number": {
				isHomeNumberPresent: true
			},
			alertMobile: {
				isAlertMobilePresent: true,
				isMobileNumberValid: true
			},
			"mob-confim-alert": {
				isConfirmAlert: true
			},
			"account-name": {
				required: true,
				isAccountNameValid: true,
				isChosenNameValid: true
			},
			firstname: {
				required: true
			},
			surname: {
				required: true,
				minlength: 2,
				isName: true
			},
			"account-number": {
				required: true,
				digits: true,
				lengthIs: 8
			},
			"mvc-code": {
				required: true,
				digits: true,
				lengthIs: 6
			},
			agree: {
				required: true
			},
			resendOneTimePasscode: {
				resendOneTimePasscodeRequired: true
			},
			amount: {
				isAmountRequired: true,
				isAmountValid: true,
				isAmountTooHigh: true
			},
			paymentAmount: {
				isPaymentAmountRequired: true,
				isPaymentAmountNumber: true,
				isPaymentAmountValid: true,
				isPaymentAmountTooLow: ["#minPaymentAmount"]
			},
			amountValid: {
				isGrpAmountValid: true
			},
			"amount-with-range": {
				isAmountRequired: true,
				isAmountValid: true,
				isAmountInRange: true
			},
			"amount-with-range-and-multiple": {
				isAmountRequired: true,
				isAmountValid: true,
				isAmountInRange: true,
				isAmountInMultiple: getMultiple
			},
			"birth-date": {
				isDateOfBirthValid: true
			},
			"birth-day": {
				required: true,
				isDateSelectedValid: true
			},
			"birth-month": {
				required: true,
				isDateSelectedValid: true
			},
			"birth-year": {
				required: true,
				isDateSelectedValid: true
			},
			"card-number": {
				required: true,
				digits: true,
				lengthIs: 4
			},
			cardDigits: {
				required: isVisible,
				digits: true,
				lengthIs: getMaxlength
			},
			"country-name": {
				lettersOrSpaces: true
			},
			date: {
				date: true
			},
			description: {
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			"email-confirm": {
				equalTo: ".email"
			},
			emailWork: {
				required: true,
				email: true
			},
			"emailWork-confirm": {
				equalTo: ".emailWork"
			},
			"from-date": {
				beforeToDate: true
			},
			"future-date": {
				isFutureDateValid: true
			},
			"after-start-date": {
				isEndDateValid: true
			},
			"after-end-date": {
				isLastDateValid: true
			},
			"after-3-days": {
				isValidInitialDate: true
			},
			"after-initial-date": {
				isValidStartDate: true
			},
			"today-onwards-date": {
				isTodayOnwardsDateValid: true
			},
			"kyc-phone": {
				radioHasValue: isVisible
			},
			lastdigits: {
				required: isVisible,
				digits: true,
				lengthIs: getMaxlength
			},
			"manual-payee-select": {
				required: isVisible
			},
			"membership-number": {
				required: isVisible,
				digits: true,
				lengthIs: 12
			},
			memword: {
				required: true,
				maxlength: 8,
				minlength: 6,
				letters: true
			},
			"memword-switch": {
				required: true,
				maxlength: 8,
				minlength: 6,
				lettersOrNumbers: true
			},
			"memword-confirm": {
				required: true,
				equalTo: ".memword-new"
			},
			"memword-switch-confirm": {
				required: true,
				equalTo: ".memword-switch-new"
			},
			mobile: {
				required: true,
				digitsOrSpaces: true,
				maxlength: 13
			},
			mobilePlus: {
				required: true,
				digitsOrSpacesOrPlus: true,
				mobileExtValid: true,
				maxlength: 14
			},
			mobileNumberValidation: {
				digits: true,
				required: false,
				mobileValidationForUkAndInt: true
			},
			nameRequired: {
				required: true,
				isName: true
			},
			name: {
				isName: true
			},
			"ni-number": {
				required: isVisible,
				lengthIs: 9
			},
			"ni-number-confirm": {
				equalTo: ".ni-number"
			},
			"optional-input": {
				required: false
			},
			passcode: {
				required: true,
				digits: true,
				lengthIs: 5
			},
			securityCode: {
				required: true,
				digits: true,
				lengthIs: 3
			},
			"passcode-confirm": {
				equalTo: ".passcode-new"
			},
			"past-date": {
				isPastDateValid: true,
			},
			"date-two-year-valid": {
				isFromDateTwoYearValid: true
			},
			maxAllowedMonth: {
				isSearchDateLimitValid: "#searchDateFrom"
			},
			maxAllowedBottomMonth: {
				isSearchDateLimitValid: "#searchDateFromBottom"
			},
			"past-year": {
				isToYearValid: true
			},
			"phone-std": {
				required: function(element) {
					var phone = $(element).closest(".phone-detail").find(".phone");
					if (phone.length) {
						return phone.val().length > 0
					} else {
						return true
					}
				},
				digits: true,
				maxlength: 6
			},
			phone: {
				required: function(element) {
					var phoneStd = $(element).closest(".phone-detail").find(".phone-std");
					if (phoneStd.length) {
						return phoneStd.val().length > 0
					} else {
						return true
					}
				},
				digits: true,
				maxlength: 14
			},
			"phone-ext": {
				digitsOrSpaces: true
			},
			"mobile-new": {
				required: true,
				mobilePhone: true
			},
			"mobile-confirm": {
				equalTo: ".mobile-new"
			},
			"mphone-new": {
				digits: true
			},
			pins: {
				required: true,
				digits: true,
				lengthIs: 4
			},
			"postcode-full": {
				required: true,
				isPostcodeValid: true
			},
			"postcode-left": {
				required: true,
				isPostcodeLeftValid: true
			},
			"postcode-right": {
				required: true,
				isPostcodeRightValid: true
			},
			"reference-14": {
				required: isVisible,
				rangelength: [5, 14],
				isPaymentReferenceValid: true
			},
			"reference-35": {
				required: isVisible,
				rangelength: [1, 35],
				isPaymentReferenceValid: true
			},
			reference: {
				required: isVisible,
				maxlength: 18,
				isPaymentReferenceValid: true
			},
			modCheck: {
				isBarclaycardRequired: true,
				isBarclaycardPaymentReferenceValid: true,
				isBarclaycardNumbers: true,
				isBarclaycardLengthTooShort: true,
				isModCheckValid: true
			},
			referenceNotRequired: {
				rangelength: [1, 35],
				isPaymentReferenceValidBIPS: true
			},
			iban: {
				required: isVisible,
				rangelength: [5, 35],
				isIbanValid: true
			},
			domesticAccountNumber: {
				required: isVisible,
				rangelength: [4, 35],
				isDomesticAccountNumberValid: true
			},
			swiftBic: {
				required: isVisible,
				isSwiftBicValid: true
			},
			addressRequired: {
				rangelength: [2, 35],
				isAddressValid: true,
				required: true
			},
			address: {
				rangelength: [2, 35],
				isAddressValid: true
			},
			"required-option": {
				oneOrMoreRequired: true
			},
			"search-text": {
				required: true,
				letters: true,
				maxlength: 50
			},
			"security-code": {
				required: isVisible,
				digits: true,
				lengthIs: 3
			},
			"sort-code": {
				required: isVisible,
				digits: true,
				lengthIs: 2
			},
			"to-date": {
				afterFromDate: true
			},
			"allow-same-date": {
				allowSameDate: true
			},
			"allow-same-year": {
				allowSameYear: true
			},
			"work-phone": {
				digitsOrSpaces: true,
				maxlength: 14
			},
			"linked-radio": {
				radioHasValue: true
			},
			"alert-radio": {
				alertRadioHasValue: true
			},
			"required-radio": {
				radioHasValue: true
			},
			"table-radio": {
				radioHasValue: true
			},
			"bene-not-selected": {
				beneSelected: true
			},
			"multi-payee-select": {
				isOptionsSelOverLimit: 5,
				oneOrMoreRequired: true
			},
			"multi-add-payee-select": {
				oneOrMoreSelectRequired: true
			},
			"num-payments": {
				digits: true
			},
			"reference-transfer": {
				maxlength: 18,
				isPaymentReferenceValid: true
			},
			"deal-number": {
				maxlength: 7,
				isDealNumberValid: true
			},
			"booked-rate": {
				maxlength: 17,
				isBookedRateValid: true
			},
			addressBIPS: {
				rangelength: [2, 35],
				isAddressValidBIPS: true
			},
			yourReferenceBIPS: {
				required: isVisible,
				rangelength: [5, 14],
				isYourReferenceValidBIPS: true
			},
			paymentReferenceBIPS: {
				required: isVisible,
				rangelength: [1, 105],
				isPaymentReferenceValidBIPS: true
			},
			beneficiaryNameBIPS: {
				rangelength: [2, 35],
				required: true,
				isPayeeNameValidBIPS: true
			},
			beneficiaryBankNameBIPS: {
				rangelength: [2, 35],
				isBankNameValidBIPS: true
			},
			savingsTransferOption: {
				isChosenTransferOption: true
			},
			"group-desc-area": {
				isgroupDescEmpty: true,
				isDescvalid: true
			},
			"grp-name-txt": {
				isgroupNameEmpty: true,
				isgroupNameValid: true
			},
			newPayeeName: {
				isGroupPaymentNewPayeeRequired: true,
				isPayeeNameValid: true
			},
			activation: {
				required: true,
				digits: true,
				lengthIs: 4
			},
			otherPhone: {
				otherPhoneNumberPresent: true
			},
			"confirm-required": {
				confirmRequired: true
			},
			"pdf-links-click-all": {
				pdfLinksClickAll: true
			},
			mortgageAccountNumber: {
				required: true,
				digits: true,
				lengthIs: 10,
				isMod11CheckValid: true
			},
			thresholdLowerLimitValidationClass: {
				validateThresholdLowerLimitRequired: true,
				validateThresholdLowerLimitMinAccBalance: true,
				validateAmounts: true,
				validateAmountForWholeNumber: true
			},
			thresholdUpperLimitValidationClass: {
				validateThresholdUpperLimitRequired: true,
				validateThresholdUpperLimitMinAccBalance: true,
				validateAmounts: true,
				validateAmountForWholeNumber: true
			},
			sms_selectId: {
				isSMSMonthDaySelected: true
			},
			payeeNameRequired: {
				required: true,
				isPayeeNameValid: true
			},
			oneTimePasscode: {
				required: true,
				lengthIs: 4
			},
			cardDigitsRequired: {
				required: true
			},
			paymentAmountBIPS: {
				isBIPSPaymentAmountRequired: true,
				isAmountValid: true,
				isAmountTooHigh: true
			},
			employerName: {
				employerNameRequired: true,
				maxlength: 30,
				lettersOrNumbersWithSpace: true
			},
			businessName: {
				businessNameRequired: true,
				maxlength: 30,
				lettersOrNumbersWithSpace: true
			},
			accAddressLine1: {
				accAddressLine1: "#addressLine2",
				maxlength: 30,
				lettersOrNumbersWithSpace: true
			},
			accAddressLine2: {
				accAddressLine2: "#addressLine1",
				maxlength: 30,
				lettersOrNumbersWithSpace: true
			},
			accOpenDate: {
				isAccountOpenDateValid: ["#prodOpeningDate"]
			}
		})
	}
	this.isPastDateValid = isPastDateValid;
	this.isFromDateTwoYearValid = isFromDateTwoYearValid;
	this.isToYearValid = isToYearValid;
	this.isAmountValid = isAmountValid;
	this.isProviderNameValid = isProviderNameValid;
	this.isSearchDateLimitValid = isSearchDateLimitValid;
	return this
})();
$(document).ready(function() {
	setInterval("$('.section-error[data-role=alert]').attr('role', 'alert').removeAttr('data-role');", 500)
});
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.AutoHopTextbox = (function() {
	$(document).ready(function() {
		iBarclays.Controls.Events.DocumentDelegate("keyup", a)
	});

	function a(g) {
		g = g || event;
		var f = $(g.target || g.srcElement);
		if (f.is("input[type=text]") && (!f.hasClass("error"))) {
			var d = f.closest("fieldset.auto-input-focus-step-thru");
			if (d && d.length) {
				if (iBarclays.Config.KeyCodes.getValueFromKeyCode(g.keyCode) === "tab" || iBarclays.Config.KeyCodes.getValueFromKeyCode(
					g.keyCode) === "shift") {
					return
				}
				var h = f.val();
				var c = f.attr("maxlength");
				if (h && h !== "" && c && c !== "" && h.length === c) {
					f.next("input[type=text]").trigger("focusout");
					f.next("input[type=text]").focus();
					var i = d.find("input[type=text]");
					var b = i.index(f);
					i.eq(b).trigger("focusout");
					i.eq(b + 1).focus()
				}
			}
		}
	}
})();
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.Textbox = (function() {
	$(document).ready(function() {
		iBarclays.Controls.Events.DocumentDelegate("keyup", b)
	});

	function b(l) {
		l = l || event;
		var k = $(l.target || l.srcElement),
			m;
		if (k.is("input[type=text]")) {
			if (!k.hasClass("error")) {
				var j = k.closest("div.custom-input");
				if (j && j.length && j.hasClass("auto-input-focus-step-thru")) {
					if (iBarclays.Config.KeyCodes.getValueFromKeyCode(l.keyCode) === "tab" || iBarclays.Config.KeyCodes.getValueFromKeyCode(
						l.keyCode) === "shift") {
						return
					}
					m = k.val();
					var i = k.attr("maxlength");
					if (m && m !== "" && i && i !== "" && m.length === i) {
						k.next("input[type=text]").trigger("focusout");
						k.next("input[type=text]").focus();
						var n = j.find("input[type=text]"),
							h = n.index(k);
						n.eq(h).trigger("focusout");
						n.eq(h + 1).focus()
					}
				}
			}
			if (k.is(".amount")) {}
		}
	}

	function c(i) {
		var h = $(i.target || i.srcElement);
		if (h.is("input[type=text]") && h.is(".amount")) {
			setTimeout(function() {
				a.call(this, i)
			}, 150)
		}
	}

	function a(k) {
		var h = k.target || k.srcElement,
			j = $(h),
			l = j.val();
		if (!iBarclays.Controls.Forms.FormValidation.isAmountValid(l)) {
			return
		}
		var m = iBarclays.Data.Numbers.formatThousands(l);
		var i = g(k.keyCode, h, m);
		j.val(m);
		if (i != undefined) {
			f(h, i)
		}
	}

	function f(j, h) {
		if (j.createTextRange) {
			var i = j.createTextRange();
			i.move("character", h);
			i.select()
		} else {
			if (j.selectionStart != undefined) {
				j.focus();
				j.setSelectionRange(h, h)
			}
		}
	}

	function d(i) {
		if (document.selection) {
			var h = document.selection.createRange();
			h.setEndPoint("StartToStart", i.createTextRange());
			return h.text.length
		} else {
			if (i.selectionStart != undefined) {
				return i.selectionStart
			}
		}
	}

	function g(q, p, l) {
		var r = l.length;
		var k = d(p);
		if (k > 0 && k < p.value.length) {
			if (q > 47 && q < 58 || q == 46 || q == 8) {
				var o = 0;
				var v = p.value.substring(0, k).split("");
				for (var m = 0; m < v.length; m++) {
					if (!isNaN(v[m])) {
						o++
					}
				}
				var u = l.split("");
				var t = 0;
				for (var h = 0; h < u.length; h++) {
					if (!isNaN(u[h])) {
						t++
					}
					if (t == o) {
						var n = l.substring(k).split("");
						if ((v[k - 1] == "," && q != 46 && q != 8) || (n[0] == "," && q == 46)) {
							r = h + 2
						} else {
							r = h + 1
						}
						break
					}
				}
			} else {
				r = k
			}
		} else {
			if (k == 0) {
				r = 0
			}
		}
		return r
	}
	return this
})();
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.Radio = (function() {
	function a() {
		$("input[type=radio]").each(function(d) {
			c($(this))
		})
	}

	function c(d) {
		var f = d.attr("id");
		d.next("label[for=" + f + "]").toggleClass("selected", d.attr("checked") === true)
	}

	function b(g) {
		var d = $(g.target),
			f = d.attr("name");
		$("input[name=" + f + "]").each(function(h) {
			c($(this))
		})
	}
	$("input[type=radio]").live("click", b);
	this.updateSelectedRadioButtons = a;
	return this
})();
$(document).ready(iBarclays.Controls.Forms.Radio.updateSelectedRadioButtons);
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.Focus = (function() {
	$(document).ready(function() {
		iBarclays.Controls.Events.DocumentDelegate("focus", d);
		iBarclays.Controls.Events.DocumentDelegate("blur", c)
	});

	function d(i) {
		i = i || event;
		var h = $(i.target || i.srcElement),
			g, f;
		if (h.is("input")) {
			g = h.closest(".custom-select, .custom-input, .button, .min-btn");
			if (g.hasClass("custom-select")) {
				f = "select"
			} else {
				if (g.hasClass("custom-input")) {
					f = "input"
				} else {
					f = "button"
				}
			} if (g.length === 0) {
				return
			}
			if (g.offset().top > 0) {
				b(g)
			}
			g.addClass("custom-" + f + "-focus")
		}
	}

	function c(g) {
		g = g || event;
		var f = $(g.target || g.srcElement);
		if (f.is("input")) {
			f.closest(".custom-select").removeClass("custom-select-focus");
			f.closest(".custom-input").removeClass("custom-input-focus");
			f.closest(".button").removeClass("custom-button-focus");
			f.closest(".min-btn").removeClass("custom-button-focus")
		}
	}

	function b(j) {
		var i = j.offset().top,
			f = i + j.height(),
			k = $(window).scrollTop(),
			h = k + $(window).height(),
			g = 0;
		if (f > h) {
			g = k + j.height() + 5
		} else {
			if (i < k) {
				g = i
			}
		} if (g > 0) {
			$(document).scrollTop(g)
		}
	}

	function a(g) {
		var f = $(g.target).find("input");
		$(f).focus()
	}
	$("div.amount-input").live("click", a)
})();
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.Buttons = function() {
	this.focusClass = "focus";
	if (iBarclays.Data.Browser.isIE) {
		iBarclays.Controls.Events.DocumentDelegate("mouseover", this.getHandler(this.buttonInput_Event));
		iBarclays.Controls.Events.DocumentDelegate("mouseout", this.getHandler(this.buttonInput_Event))
	}
};
iBarclays.Controls.Forms.Buttons.prototype = new iBarclays.Controls.Events.Custom();
iBarclays.Controls.Forms.Buttons.prototype.getEventTarget = function(a) {
	a = a || window.event;
	return a.target || a.srcElement
};
iBarclays.Controls.Forms.Buttons.prototype.setButtonAttribute = function(a) {
	if (!a.button) {
		a.button = $(a).closest(".button")
	}
	return a.button
};
iBarclays.Controls.Forms.Buttons.prototype.toggleButtonClass = function(f, d, c) {
	var b = f.button || this.setButtonAttribute(f);
	var a = (c === "focus" || c === "focusin" || c === "mouseover");
	b.toggleClass(d, a)
};
iBarclays.Controls.Forms.Buttons.prototype.validateEventTarget = function(a) {
	a = $(a);
	return a.is("input") && a.closest("span.button").length > 0
};
iBarclays.Controls.Forms.Buttons.prototype.buttonInput_Event = function(b) {
	var a = this.getEventTarget(b);
	if (this.validateEventTarget(a)) {
		this.toggleButtonClass(a, this.focusClass, b.type)
	}
};
$(document).ready(function() {
	var a = new iBarclays.Controls.Forms.Buttons()
});
iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Tables = iBarclays.Controls.Tables || {};
iBarclays.Controls.Tables.Reveal = function(a) {
	this.table = a;
	a.click(iBarclays.Controls.Events.Custom.prototype.getHandler.call(this, this.table_click));
	a.find("img.all").click(iBarclays.Controls.Events.Custom.prototype.getHandler.call(this, this.table_click));
	this.setUpReveals();
	this.table.bind("sortEnd", iBarclays.Controls.Events.Custom.prototype.getHandler.call(this, this.onTableSorted));
	this.table.bind("update", iBarclays.Controls.Events.Custom.prototype.getHandler.call(this, this.onUpdate))
};
iBarclays.Controls.Tables.Reveal.prototype.image = {
	closed: $('<img src="assets/img/closed.gif" class="closed">'),
	open: $('<img src="assets/img/open.gif" class="open">'),

};
iBarclays.Controls.Tables.Reveal.prototype.onUpdate = function(b, a) {
	if (a === "add") {
		this.setUpReveals()
	}
};
iBarclays.Controls.Tables.Reveal.prototype.setUpReveals = function() {
	if (iBarclays.Data.Browser.isIE7) {
		var c = this,
			d = this.table.find("tr"),
			a = d.length;
		for (var b = 0; b < a; b += 1) {
			var g = $(d[b]),
				f = d[b];
			if (/_reveal/.test(f.id)) {
				relatedRow = d.filter("#" + f.id.substring(0, f.id.lastIndexOf("_")));
				relatedRow.data("relatedRow", g);
				g.remove()
			}
		}
	} else {
		var c = this;
		this.table.find("tr").each(function() {
			var h = $(this),
				i = h.attr("id");
			if (/_reveal/.test(h.attr("id"))) {
				relatedRow = c.table.find("#" + i.substring(0, i.lastIndexOf("_")));
				relatedRow.data("relatedRow", h);
				h.remove()
			}
		})
	}
};
iBarclays.Controls.Tables.Reveal.prototype.table_click = function(f) {
	var g = $(f.target);
	var j = g.is("tr") ? g : g.closest("tr");
	if (g.attr("type") === "radio") {
		return
	}
	if (j.hasClass("togglereveal") && /_reveal/.test(j.attr("id"))) {
		var b = j.attr("id").substring(0, j.attr("id").lastIndexOf("_"));
		j = this.table.find("#" + b)
	}
	var d = j.find("td:first img"),
		h = j.data("relatedRow");
	if (d.length === 0) {
		if (!g.closest("th").hasClass("first")) {
			return
		}
		d = j.find("th:first img")
	}
	if (d.hasClass("all")) {
		var i = this,
			c, a;
		if (d.hasClass("closed")) {
			c = this.image.open.clone();
			a = "open"
		} else {
			if (d.hasClass("closed-white")) {
				c = this.image.openwhite.clone();
				a = "open"
			} else {
				if (d.hasClass("open-white")) {
					c = this.image.closedwhite.clone();
					a = "close"
				} else {
					c = this.image.closed.clone();
					a = "close"
				}
			}
		}
		c.addClass("all");
		d.replaceWith(c);
		this.table.find("tbody .first img").each(function() {
			var k = $(this);
			i[a](k, k.closest("tr"))
		})
	} else {
		if (d.hasClass("closed")) {
			this.open(d, j)
		} else {
			if (d.hasClass("open")) {
				this.close(d, j)
			}
		}
	}
	f.preventDefault()
};
iBarclays.Controls.Tables.Reveal.prototype.setupToggleIcons = function() {};
iBarclays.Controls.Tables.Reveal.prototype.open = function(a, c) {
	if (c.is(":hidden")) {
		return
	}
	var b = c.data("relatedRow");
	if (b == null) {
		return
	}
	c.after(b);
	b.show();
	a.replaceWith(this.image.open.clone());
	c.addClass("current");
	if (c.hasClass("togglereveal")) {
		c.hide()
	}
};
iBarclays.Controls.Tables.Reveal.prototype.close = function(a, c) {
	var b = c.data("relatedRow");
	if (b == null) {
		return
	}
	b.hide();
	b.remove();
	a.replaceWith(this.image.closed.clone());
	c.removeClass("current");
	if (c.hasClass("togglereveal")) {
		c.show()
	}
};
iBarclays.Controls.Tables.Reveal.prototype.onTableSorted = function(c, b) {
	var a = this;
	$(c.target).find("tbody img.open").each(function() {
		var d = $(this),
			g = d.closest("tr"),
			f = g.data("relatedRow");
		g.after(f)
	})
};
iBarclays.Data = iBarclays.Data || {};
iBarclays.Data.Browser = (function() {
	var a = parseInt($.browser.version, 10);
	return {
		isIE: $.browser.msie,
		isIE7: ($.browser.msie && a === 7)
	}
})();
$(document).ready(function() {});
iBarclays.Data = iBarclays.Data || {};
iBarclays.Data.DataFilter = function(d, a, c) {
	var b = {};
	this.getFilteredSet = function(f) {
		if (b[f] == null) {
			b[f] = new iBarclays.Data.DataFilter(this.filterSet(f, d, a, c))
		}
		return b[f].getSet()
	};
	this.getSet = function() {
		return d
	}
};
iBarclays.Data.DataFilter.prototype.filterSet = function(d, h, l, m) {
	var a = typeof l == "string";
	var b = [];
	var k = m === true ? d : "^" + d + ".*$";
	var n = new RegExp(k, "i"),
		c = false;
	for (var g = 0, f = h.length; g < f; g++) {
		if (a) {
			c = n.test(h[g][l])
		} else {
			c = n.test(h[g])
		} if (c === true) {
			b.push(h[g])
		}
	}
	return b
};
iBarclays.Data = iBarclays.Data || {};
iBarclays.Data.Date = (function() {
	var d = new Date();
	var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
		"November", "December"
	];

	function h(k) {
		k = k || d;
		var i = k.getDate(),
			j = k.getMonth() + 1;
		return (i < 10 ? "0" : "") + i + "/" + (j < 10 ? "0" : "") + j + "/" + k.getFullYear()
	}

	function g() {
		return d.getDate()
	}

	function c(j) {
		var i = d.getMonth();
		if (j) {
			i += j;
			if (i < 0) {
				i += a.length
			} else {
				if (i >= a.length) {
					i = i % a.length
				}
			}
		}
		return a[i]
	}

	function f(i, l) {
		var j = i.replace(/\s/g, "").match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/),
			k;
		if (j) {
			k = j[3];
			if (l === "int") {
				return (k.length === 2 ? "20" : "") + k + "/" + j[2] + "/" + j[1]
			}
			return j[2] + "/" + j[1] + "/" + (k.length === 2 ? "20" : "") + k
		}
		return i
	}

	function b() {
		if (iBarclays.Config.serverSideDate != null) {
			return new Date(iBarclays.Config.serverSideDate)
		} else {
			return new Date()
		}
	}
	return {
		getShortDateString: h,
		getDate: g,
		getMonth: c,
		formatDate: f,
		getCurrentDate: b
	}
})();
iBarclays.Data = iBarclays.Data || {};
iBarclays.Data.Meta = {
	getValueFromClassName: function(c, f, b) {
		var d = b || "&";
		if (c) {
			var g = /meta\(([\w\s\W]*)\)/.exec(c),
				h;
			if (g && g.length >= 1) {
				g = g[1]
			} else {
				g = null
			} if (g == null) {
				return ""
			}
			g = g.replace(/meta\(/, "").replace(/\)/, "").split(d);
			for (var a = g.length - 1; a >= 0; a--) {
				h = g[a].split("=");
				if ($.trim(h[0]) === f) {
					return h[1]
				}
			}
		}
		return ""
	}
};
iBarclays.Data = iBarclays.Data || {};
iBarclays.Data.JSON = iBarclays.Data.JSON || {};
iBarclays.Data.JSON.getLeafNodeValue = function(c, b, d) {
	var k = c.split("."),
		h, f;
	if (d === true) {
		var g = false;
		for (h = 0, f = k.length; h < f; h++) {
			g = false;
			for (var a in b) {
				if (a.match(new RegExp(k[h], "i"))) {
					b = b[a];
					g = true;
					break
				}
			}
			if (!g) {
				return ""
			}
		}
	} else {
		for (h = 0, f = k.length; h < f; h++) {
			if (b[k[h]]) {
				b = b[k[h]]
			} else {
				return ""
			}
		}
	}
	return b
};
iBarclays.Data.JSON.getFormAsJSON = function(a) {
	var b = {};
	a.each(function(d) {
		var c = $(this),
			f = c.val();
		if (!(c.attr("type") === "radio" && c.attr("checked") === false)) {
			b[c.attr("name")] = c.val()
		}
	});
	return b
};
iBarclays.Help = iBarclays.Help || {};
iBarclays.Help.Centre = function() {
	iBarclays.Controls.Events.DocumentDelegate("load", this.getHandler(this.setUp()))
};
iBarclays.Help.Centre.prototype = new iBarclays.Pages.Base();
iBarclays.Help.Centre.prototype.setUp = function() {
	var a = this;
	this.helpCentre = $("div.help-centre");
	this.helpDialog = $("#help-centre-dialog");
	this.channelInfoButton = $("#channel-info-button");
	this.channelInfo = $("#channel-info");
	this.channelInfoClose = $("#channel-info-close");
	this.closeDialogButtons = this.helpDialog.find("li:first-child span,li:last-child .button");
	this.dontShowField = this.helpDialog.find("label[for='DontShow']");
	this.helpCardsSelected = [];
	this.channelInfoButton.unbind("click").click(function() {
		try {
			dcsMultiTrack("DCSext.LinkName", "onl:HelpModule:Service:channelInfo", "s.linkTrackVars",
				"prop16,prop17,prop24,prop34,eVar25")
		} catch (b) {}
		a.channelInfo.show();
		return false
	});
	this.channelInfoClose.find("span").unbind("click").click(function() {
		try {
			dcsMultiTrack("DCSext.LinkName", "onl:HelpModule:Service:channelInfoClose", "s.linkTrackVars",
				"prop16,prop17,prop24,prop34,eVar25")
		} catch (b) {}
		a.channelInfo.hide();
		return false
	});
	this.findHelpCardLinks().each(function() {
		a.resetClickEvent(this)
	});
	this.closeDialogButtons.unbind("click").click(function() {
		try {
			dcsMultiTrack("DCSext.LinkName", "onl:HelpModule:Service:closeDialog", "s.linkTrackVars",
				"prop16,prop17,prop24,prop34,eVar25")
		} catch (b) {}
		a.helpDialog.hide();
		a.addToRequest();
		return false
	});
	this.autoOpenHelp();
	this.autoTriggerLinks()
};
iBarclays.Help.Centre.prototype.autoTriggerLinks = function() {
	var a = this;
	this.findAutoTriggerLinks().each(function() {
		var f = this.attributes.getNamedItem("data-help-card-ref");
		var b = f.value;
		var d = this.attributes.getNamedItem("display").value;
		var c = a.isIconVisible(b);
		if (!a.isClosedHelpCard(b) && c) {
			if (d == "OPEN") {
				a.requestHelp(b);
				a.dontShowField.show();
				return false
			}
		}
	})
};
iBarclays.Help.Centre.prototype.findAutoTriggerLinks = function() {
	return $('[data-auto-execute="true"]')
};
iBarclays.Help.Centre.prototype.findHelpCardLinks = function(b) {
	var a;
	if (b) {
		a = b.find("[data-help-card-ref]")
	} else {
		a = $("[data-help-card-ref]")
	}
	return a
};
iBarclays.Help.Centre.prototype.autoOpenHelp = function() {
	var b = this;
	this.findHelpCardLinks(this.helpCentre).each(function() {
		if ($(this).data("display") == "OPEN") {
			b.requestHelp($(this).data("help-card-ref"));
			b.dontShowField.show();
			return false
		}
	});
	if ($(b).data("display") == "OPEN") {
		if ($(this).data("data-auto-execute") == "false") {
			var a = $(this).data("help-card-ref");
			b.requestHelp(a);
			b.dontShowField.show();
			return false
		}
	}
};
iBarclays.Help.Centre.prototype.resetClickEvent = function(b) {
	var a = this;
	$(b).unbind("click").click(function() {
		var c = $(this).data("help-card-ref");
		a.requestHelp(c);
		return false
	})
};
iBarclays.Help.Centre.prototype.getExistingHelpCard = function(a) {
	return this.helpDialog.find("li[data-loaded-help-card-ref='" + a + "']")
};
iBarclays.Help.Centre.prototype.isIconVisible = function(a) {
	var b = $("div[data-help-card-ref='" + a + "']");
	if (b) {
		return $(b[0]).find("div.icon-info").is(":visible")
	}
	return false
};
iBarclays.Help.Centre.prototype.requestHelp = function(f) {
	try {
		dcsMultiTrack("DCSext.LinkName", "onl:HelpModule:Service:requestHelp", "s.linkTrackVars",
			"prop16,prop17,prop24,prop34,eVar25")
	} catch (i) {}
	var m = this;
	this.dontShowField.hide();
	var g = s.prop24;
	if (g == undefined || g != "HelpCentre_" + f) {
		try {
			tagAjaxContent();
			scSetTag(s, "prop24", "HelpCentre_" + f);
			if (isLoginPage(s)) {
				scCleanUpEvents(s)
			}
			fireLoadEvent(s)
		} catch (i) {}
	}
	var h = this.getExistingHelpCard(f);
	if (h.length == 0) {
		$.ajax({
			type: "GET",
			url: (iBarclays.preview() ? iBarclays.Config.SystemValues.preview.path : iBarclays.Config.SystemValues.auth.path) +
				"HelpCardLink.action",
			async: false,
			data: "id=" + f,
			success: function(o, p, n) {
				if (m.hasError(o, true, true)) {
					return
				}
				h = $("<li/>").attr("data-loaded-help-card-ref", f);
				h.append(o);
				m.addHelpCard(h)
			}
		})
	}
	m.hideAllHelpCards();
	if (h.length > 0) {
		h.show();
		m.populateDialogTitle(h.find(".title").html());
		m.showDialog()
	} else {
		m.hideDialog()
	}
	var c = $("#help-centre-close-icon");
	if (!this.isOnScreen(c[0])) {
		var b = document.documentElement;
		var a = window.innerWidth || b.clientWidth;
		var k = $("#help-centre-close-icon")[0].getBoundingClientRect();
		var d = $("#help-centre-dialog").position();
		if (k.top < 0) {
			$("#help-centre-dialog").css("top", (d.top - k.top) + "px")
		}
		if (k.left > a) {
			var j = k.left - a;
			var l = 0 - k.width - (j - d.left);
			$("#help-centre-dialog").css("left", l + "px")
		}
	}
	window.lastOpenCardRef = f
};
iBarclays.Help.Centre.prototype.isOnScreen = function(c) {
	var f, h = c.getBoundingClientRect(),
		b = document.documentElement,
		a = window.innerWidth || b.clientWidth,
		j = window.innerHeight || b.clientHeight,
		g = function(k, l) {
			return document.elementFromPoint(k, l)
		},
		d = "contains" in c ? "contains" : "compareDocumentPosition",
		i = d == "contains" ? 1 : 20;
	if (h.right < 0 || h.bottom < 0 || h.left > a || h.top > j) {
		return false
	}
	return ((f = g(h.left, h.top)) == c || c[d](f) == i || (f = g(h.right, h.top)) == c || c[d](f) == i || (f = g(h.right,
		h.bottom)) == c || c[d](f) == i || (f = g(h.left, h.bottom)) == c || c[d](f) == i)
};
iBarclays.Help.Centre.prototype.populateDialogTitle = function(a) {
	this.helpDialog.find(":first h3").html(a)
};
iBarclays.Help.Centre.prototype.addHelpCard = function(a) {
	this.helpDialog.children("ul").children("li").first().after(a)
};
iBarclays.Help.Centre.prototype.hideAllHelpCards = function() {
	this.helpDialog.children("ul").children("li").not(":first").not(":last").hide()
};
iBarclays.Help.Centre.prototype.showDialog = function() {
	this.helpDialog.show();
	var a = this;
	this.findHelpCardLinks().each(function() {
		a.resetClickEvent(this)
	})
};
iBarclays.Help.Centre.prototype.hideDialog = function() {
	this.helpDialog.hide()
};
iBarclays.Help.Centre.prototype.addToRequest = function() {
	var a = this;
	var c = window.lastOpenCardRef;
	if ($("input#DontShow")[0].checked) {
		a.helpCardsSelected[c] = c;
		window.helpCardsSelected = a.helpCardsSelected
	}
	var d = "";
	for (var b in a.helpCardsSelected) {
		d += a.helpCardsSelected[b] + ","
	}
	$("#helpCardAssetId").val(d)
};
iBarclays.Help.Centre.prototype.isClosedHelpCard = function(b) {
	for (var a in window.helpCardsSelected) {
		if (a == b) {
			return true
		}
	}
	return false
};
iBarclays.Help = iBarclays.Help || {};
iBarclays.Help.Contextual = (function() {
	var d, a;
	$(function() {
		if (iBarclays.Data.Browser.isIE) {
			document.body.onfocusin = c;
			document.body.onfocusout = f
		} else {
			document.body.addEventListener("focus", c, true);
			document.body.addEventListener("blur", f, true);
			document.body.addEventListener("mousedown", g, true)
		}
	});

	function g(i) {
		var h = $(i.target);
		if (h.is("p.help a")) {
			h.click();
			clearTimeout(d);
			i.preventDefault()
		}
	}

	function c(i) {
		i = i || event;
		var h = $(i.target || i.srcElement);
		a = h;
		if (h.is(".custom-input input") || (h.is(".custom-select input") && !iBarclays.iOSDevice())) {
			setTimeout(function() {
				showContextHelp(h)
			}, 50)
		}
		if (h.is("p.help a")) {
			clearTimeout(d)
		}
	}

	function f(j) {
		j = j || event;
		var i = $(j.target || j.srcElement),
			h;
		if (i.is(".custom-input input") || (i.is(".custom-select input") && !iBarclays.iOSDevice())) {
			d = setTimeout(function() {
				h = i.closest("div.custom-input,div.custom-select").find("p.help");
				if (i.is(".custom-input input")) {
					h.parent().css("position", "static")
				}
				h.hide()
			}, 50)
		}
		if (i.is("p.help a") && i.next("a").length === 0) {
			if (iBarclays.iOSDevice()) {
				h = i.closest("div.custom-select").find("p.help")
			} else {
				h = i.closest("div.custom-input,div.custom-select").find("p.help")
			}
			h.hide()
		}
	}
	this.showContextHelp = function(o) {
		var n = o.closest("div.custom-input,div.custom-select"),
			i = n.find("p.help"),
			j = n.find("div.amount-input, div.amount-small, div.text, div.holder").filter(":last"),
			t = j.find("input").not("[type=hidden]"),
			r, p = 0,
			h, m, q, l, k, u;
		if (i.length === 0 || $.trim(i.html()) === "") {
			return false
		}
		if (n.hasClass("custom-select")) {
			t = j
		}
		if (t.length === 0 || j.length === 0) {
			return
		}
		n.css("position", "relative");
		i.data("input", t);
		r = n.innerWidth();
		m = j.fixedPosition().top;
		n.find("div.text, div.amount-input, span.divider, div.holder").each(function() {
			p += $(this).outerWidth(true)
		});
		h = t.outerHeight();
		l = p + 10;
		k = r - l;
		q = m + h / 2 - 5;
		if (n.hasClass("custom-select")) {
			k = $(".modal-body-ctr").width() - l - 20
		}
		if (n.find(".date-picker").length > 0) {
			l += 20;
			k = r - l - 20
		}
		i.css({
			top: q,
			left: l,
			width: k
		});
		i.show();
		u = i.outerHeight(true);
		if (u > 13) {
			q = m;
			i.css({
				top: q
			})
		}
	};
	this.hideContextHelp = function(j) {
		var i = j.closest("div.custom-input,div.custom-select"),
			h = i.find("p.help");
		h.hide();
		helpHeight = h.outerHeight(true)
	};

	function b() {
		var h = $("p.help:visible"),
			i;
		if (h.length) {
			i = h.data("input");
			if (i.length) {
				showContextHelp(i)
			}
		}
	}
	this.refreshHelp = b;
	return this
})();
iBarclays.Help = iBarclays.Help || {};
iBarclays.Help.Panel = (function() {
	var a = false,
		b = $(
			' 		    <div class="helping-panel"> 				<div class="help-panel-tl"></div> 				<div class="help-panel-tr"></div> 				<div class="help-panel-bl"></div> 				<div class="help-panel-br"></div> 				<div class="help-panel-middle"> 					<div class="help-panel-top clearfix"> 						<h1 tabindex="0">Help</h1> 						<a href="#" class="panel-close">Close</a> 					</div> 					<div class="content"> 						<div id="cursorBlock">&nbsp;</div> 						<iframe id="help-frame" title="Help" name="help-frame" src="" frameborder="0" width="185" height="410"></iframe> 					</div> 				</div> 				<div class="help-panel-bottom"><a href="#" class="supplementary-close hide">End of Help. Click to Close and Return.</a></div> 			</div>'
		),
		l, o = false,
		d = false,
		h = {},
		k = {},
		i = {},
		f = {},
		c = 0,
		j = 0;
	$(document).bind("DOMMouseScroll mousewheel keyup mousedown mousemove mouseleave", function(p) {
		if (p.type == "keyup") {
			j = 200
		}
		if (p.type == "mousewheel" || p.type == "DOMMouseScroll") {
			j = 500
		}
		if (p.type == "mousedown") {
			j = 200;
			helpIframe = $(b).find("iframe")
		}
		if (p.type == "mouseleave") {
			iBarclays.Controls.dragDrop.dragObject(this, m, e)
		}
	});
	$(window).resize(function() {
		i = {
			x: $(document).width(),
			y: $(document).height()
		}
	});
	$(window).scroll(function() {
		if (a === true) {
			var v = b.height(),
				q = $(window).scrollTop(),
				p = $(window).height() / 2,
				r = v / 2;
			if (d === true) {
				var t = k.y,
					u = 0;
				if (c > 0) {
					t = t - c
				}
				if (u != 0) {
					t = u;
					u = 0
				}
				if ((t + v) + q >= i.y) {
					u = t - q;
					t = (i.y - v) - q
				}
				b.stop().animate({
					top: (q + t) + "px"
				}, j);
				return true
			} else {
				var t = (p - r) + q;
				if (p <= r) {
					t = q
				}
				b.stop().animate({
					top: t + "px"
				}, j)
			}
		} else {
			return false
		}
	});
	$(".help-item").live("click", function(q) {
		q.preventDefault();
		var p = $(q.target).attr("href");
		$(b).find("iframe").attr("src", p);
		iBarclays.Help.Panel.render();
		iBarclays.Help.Panel.open();
		$(".helping-panel h1").focus();
		iBarclays.Help.lastClickedHelpLinkAnchor = this
	});
	$(".panel-close, .supplementary-close").live("click", function(p) {
		$(b).find("iframe").attr("src", "");
		iBarclays.Help.Panel.close(p);
		iBarclays.Help.lastClickedHelpLinkAnchor.focus();
		return false
	});

	function n(p) {
		$("body").disableTextSelect();
		$("#cursorBlock").css("display", "block");
		iBarclays.Controls.dragDrop.dragObject(this, g, m, p);
		var q = b.fixedPosition();
		h.zoomRatio = $.getBrowserZoomRatio();
		h.x = parseInt(p.pageX / h.zoomRatio, 10) - q.left;
		h.y = parseInt(p.pageY / h.zoomRatio, 10) - q.top;
		i = {
			x: $(document).width(),
			y: $(document).height()
		};
		if (iBarclays.Data.Browser.isIE) {
			i.x = (i.x - 22)
		}
		f = {
			x: b.width(),
			y: b.height()
		};
		return false
	}

	function g(u, r) {
		var q = $(window).scrollTop(),
			t = $(window).height(),
			p = $(b).find(".help-panel-top").height();
		c = q;
		k.x = parseInt(r.x / h.zoomRatio, 10) - h.x;
		k.y = parseInt(r.y / h.zoomRatio, 10) - h.y;
		if (k.x <= 0) {
			k.x = 0
		}
		if (k.y <= q) {
			k.y = q
		}
		if (k.x + f.x > i.x) {
			k.x = (i.x - f.x)
		}
		if (k.y > (q + t) - p) {
			k.y = (q + t) - p
		}
		if (k.y + f.y > i.y) {
			k.y = (i.y - f.y)
		}
		b.css("left", k.x + "px");
		b.css("top", k.y + "px");
		dragPositionTop = k.y;
		d = true;
		if ($.browser.msie && parseInt($.browser.version, 10) == 7 && ($.getBrowserZoomRatio() > 1)) {
			window.scrollBy(0, 1);
			window.scrollBy(0, -1)
		}
	}

	function m(q, p) {
		$("body").enableTextSelect();
		$("#cursorBlock").css("display", "none");
		return true
	}
	return {
		render: function() {
			if (!o) {
				$("#container").after(b);
				$(".help-panel-top").mousedown(n);
				$(".help-panel-tl").mousedown(n);
				$(".help-panel-tr").mousedown(n);
				o = true
			}
			var p, v, x, y = b.width(),
				A = b.height(),
				z = $.getBrowserZoomRatio(),
				u = $.getVisibleArea(),
				w = parseInt($(window).scrollLeft() / z, 10),
				q = u.width - w,
				r = parseInt($(window).scrollTop() / z, 10),
				t = u.height - r;
			if (!d) {
				if (l == null) {
					l = $("#modal-ctr")
				}
				if (l.length === 0) {
					p = {
						left: 370,
						top: 28
					}
				} else {
					p = l.fixedPosition()
				}
				v = q - y;
				x = (u.height - A) / 2;
				if (v + y > q) {
					v = q - y
				}
				if (v < w) {
					v = w
				}
				if (x + A > t) {
					x = t - A
				}
				if (x < r) {
					x = r
				}
				b.css({
					left: v + "px",
					top: x + "px"
				})
			}
		},
		toggle: function(p) {
			if (a) {
				iBarclays.Help.Panel.close(p)
			} else {
				iBarclays.Help.Panel.open()
			}
			p.preventDefault()
		},
		open: function() {
			b.show();
			a = true
		},
		openDirect: function(p) {
			$(b).find("iframe").attr("src", p);
			iBarclays.Help.Panel.render();
			iBarclays.Help.Panel.open()
		},
		close: function(p) {
			b.hide();
			a = false;
			if (p == "modal.process" || p == "takover" || p == "taskview.module") {
				d = false
			}
		}
	}
}());
iBarclays.Views = {};
iBarclays.Views.Accordion = {};
iBarclays.Views.Accordion.Base = function() {
	this.rootNode = ""
};
iBarclays.Views.Accordion.Base.prototype = new iBarclays.Controls.Events.Custom();
if (typeof tagAjaxContent == "undefined") {
	function tagAjaxContent() {}
}
iBarclays.Views.Accordion.Base.prototype.configure = function(a, c) {
	this.position = a;
	this.loadContentOnError = (c == "true" ? true : false);
	this.rootNode = $("#" + this.position);
	this.preventLoginTimeout = this.rootNode.data("prevent-timeout");
	if (typeof tagAjaxContent != "undefined") {
		try {
			tagAjaxContent()
		} catch (b) {}
	}
	this.configureActions();
	this.resetHeader();
	this.accordionLoaded();
	this.addEventHandler("onBeforeFireAction", this.onBeforeFireAction);
	this.addEventHandler("onAfterFireAction", this.onAfterFireAction);
	$("form").validate().resetForm();
	$("form").attr("autocomplete", "off");
	$("input").attr("autocomplete", "off");
	this.ie8Fixes();
	var d = $("#help-centre-dialog ul li:first-child");
	if (d.length > 0) {
		EventUtil.addHandler(d[0], "mousedown", helpDialogMouseDown);
		EventUtil.addHandler(document, "mouseup", helpDialogMouseUp)
	}
	new iBarclays.Help.Centre()
};
var offX = 0;
var offY = 0;
var helpDialogMouseUp = function() {
	EventUtil.removeHandler(document, "mousemove", helpDialogMove)
};
var helpDialogMouseDown = function(b) {
	var a = $("#help-centre-dialog");
	offY = b.clientY - parseInt(a[0].offsetTop);
	offX = b.clientX - parseInt(a[0].offsetLeft);
	EventUtil.addHandler(document, "mousemove", helpDialogMove)
};
var helpDialogMove = function(b) {
	var a = $("#help-centre-dialog");
	a[0].style.top = (b.clientY - offY) + "px";
	a[0].style.left = (b.clientX - offX) + "px"
};
var EventUtil = {
	addHandler: function(a, c, b) {
		if (a.addEventListener) {
			a.addEventListener(c, b, false)
		} else {
			if (a.attachEvent) {
				a.attachEvent("on" + c, b)
			} else {
				a["on" + c] = b
			}
		}
	},
	removeHandler: function(a, c, b) {
		if (a.removeEventListener) {
			a.removeEventListener(c, b, false)
		} else {
			if (a.detachEvent) {
				a.detachEvent("on" + c, b)
			} else {
				a["on" + c] = null
			}
		}
	}
};
jQuery.fn.removeClassRegEx = function(f) {
	var d = $(this).attr("class");
	if (!d || !f) {
		return false
	}
	var b = [];
	d = d.split(" ");
	for (var c = 0, a = d.length; c < a; c++) {
		if (!d[c].match(f)) {
			b.push(d[c])
		}
	}
	$(this).attr("class", b.join(" "));
	return $(this)
};
iBarclays.Views.Accordion.Base.prototype.ie8Fixes = function() {
	if (!jQuery.support.leadingWhitespace) {
		$("label").click(function() {
			if ($(this).attr("for") != "") {
				$("#" + $(this).attr("for")).click()
			}
		});
		$("select").chosen({
			disable_search: false,
			inherit_select_classes: true,
			placeholder_text_single: " "
		});
		$("*").removeClassRegEx(/^slvzr-/);
		Selectivizr.init();
		document.body.onselectstart = function() {
			return false
		};
		$("body").delegate("input[type=text],input[type=password],textarea", "focus", function() {
			document.body.onselectstart = function() {
				return true
			}
		});
		$("body").delegate("input[type=text],input[type=password],textarea", "blur", function() {
			document.body.onselectstart = function() {
				return false
			}
		})
	}
};
iBarclays.Views.Accordion.Base.prototype.resetHeader = function() {
	var a = this.rootNode.find("h2:first");
	if (a && a.hasClass("active")) {
		a.removeClass("active")
	}
};
iBarclays.Views.Accordion.Base.prototype.configureHeaderAction = function() {
	var a = this.rootNode.find("h2:first");
	if (a) {
		a.addClass("active");
		a.click(this.getHandler(this.triggerHeaderAction))
	}
};
iBarclays.Views.Accordion.Base.prototype.configureActions = function() {
	var a = this;
	this.rootNode.find(".accordion-action").each(function() {
		a.resetClickEvent(this)
	})
};
iBarclays.Views.Accordion.Base.prototype.removeURLParam = function(a, g) {
	var d = a.split("?");
	if (d.length >= 2) {
		var f = encodeURIComponent(g) + "=";
		var c = d[1].split(/[&;]/g);
		for (var b = c.length; b-- > 0;) {
			if (c[b].indexOf(f, 0) == 0) {
				c.splice(b, 1)
			}
		}
		if (c.length > 0) {
			return d[0] + "?" + c.join("&")
		} else {
			return d[0]
		}
	} else {
		return a
	}
};
iBarclays.Views.Accordion.Base.prototype.resetClickEvent = function(c) {
	var b = this;
	var a = c.name.split("::");
	if (a[1].indexOf()) {
		$(c).click(function() {
			var g = $(c);
			var i = iBarclays.preview() ? iBarclays.Config.SystemValues.preview.path : iBarclays.Config.SystemValues.auth.path +
				a[1];
			var h = new iBarclays.Controllers.Accordion(b.position, b.removeURLParam(i, "error"), a[2]);
			if ((!g.is("a#change-user-1")) && g.hasClass("validate")) {
				var d = g.closest("form");
				if (d.valid()) {
					h.view = b;
					h.followLink()
				}
			} else {
				if (g.is("a#change-user-1")) {
					var f = $("div.form-error");
					if (f && f.length) {
						f.remove()
					}
				}
				h.view = b;
				h.followLink()
			}
			return false
		})
	}
};
iBarclays.Views.Accordion.Base.prototype.loadSingleSavedMember = function() {
	new iBarclays.Controllers.Accordion("accordion-top", (iBarclays.preview() ? iBarclays.Config.SystemValues.preview.path :
		iBarclays.Config.SystemValues.path) + "LoginStep1_SavedMemberInfo.action", "POST").followLink()
};
iBarclays.Views.Accordion.Base.prototype.activate = function() {
	this.rootNode.find(".accordion-page").hide();
	this.removeClass("inactive");
	this.removeClass("disabled");
	this.addClass("active");
	this.rootNode.find(".accordion-page").slideDown()
};
iBarclays.Views.Accordion.Base.prototype.deActivate = function() {
	this.rootNode.find(".accordion-page").hide();
	this.removeClass("active");
	this.removeClass("disabled");
	this.addClass("inactive");
	this.unbindSCEvent();
	if (typeof scSetPageName != "undefined" && typeof scSetLOGIN_METHOD != "undefined" && typeof fireLoadEvent !=
		"undefined" && typeof scSetTag != "undefined") {
		try {
			scSetPageName(s, "link");
			scSetLOGIN_METHOD(s);
			scSetTag(s, "prop24", "");
			scSetLoginStep2Events(s);
			fireLoadEvent(s)
		} catch (a) {}
	}
	this.rootNode.find(".accordion-page").slideDown()
};
iBarclays.Views.Accordion.Base.prototype.bindSCEvent = function() {
	var a = $("#accordion-bottom").filter('[onclick="tagAjaxContent();"]');
	if (a != "undefined" || a.length == 0) {
		$("#accordion-bottom").attr("onclick", "tagAjaxContent();");
		$("#accordion-bottom").bind("click")
	}
};
iBarclays.Views.Accordion.Base.prototype.unbindSCEvent = function() {
	var a = $("#accordion-bottom").filter('[onclick="tagAjaxContent();"]');
	if (a != "undefined") {
		$("#accordion-bottom").unbind("click");
		$("#accordion-bottom").removeAttr("onclick")
	}
};
iBarclays.Views.Accordion.Base.prototype.disable = function() {
	this.removeClass("active");
	this.removeClass("inactive");
	this.addClass("disabled");
	this.bindSCEvent()
};
iBarclays.Views.Accordion.Base.prototype.addClass = function(a) {
	if (this.rootNode.hasClass(a) == false) {
		this.rootNode.addClass(a)
	}
};
iBarclays.Views.Accordion.Base.prototype.removeClass = function(a) {
	if (this.rootNode.hasClass(a)) {
		this.rootNode.removeClass(a)
	}
};
iBarclays.Views.Accordion.Base.prototype.accordionLoaded = function() {};
iBarclays.Views.Accordion.Base.prototype.onBeforeFireAction = function(b, a, c) {};
iBarclays.Views.Accordion.Base.prototype.onAfterFireAction = function(b, a, c) {};
iBarclays.Views.Accordion.Base.prototype.triggerHeaderAction = function(a) {};
iBarclays.Views.Accordion.Base.prototype.attachValidation = function(b) {
	var a = $("#" + b).find("form");
	a.validate().resetForm()
};
iBarclays.Views.Accordion.Base.prototype.attachHeaderBehaviour = function(a) {};
iBarclays.Views.Accordion.Base.prototype.clearBottomAccordion = function() {
	$("#accordion-bottom h2").text("Step 2 - Confirm your ID");
	var b = $("#accordion-bottom");
	if (b.hasClass("active") || b.hasClass("inactive")) {
		b.removeClass("active");
		b.removeClass("inactive");
		b.addClass("disabled");
		this.bindSCEvent()
	}
	var a = b.find("ul.form-grid");
	a.find("li").each(function() {
		$(this).remove()
	})
};
var formSubmitted = false;

function preventDoubleSubmit() {
	if ($("#accordion-bottom-form").valid()) {
		if (formSubmitted) {
			return false
		} else {
			formSubmitted = true;
			return true
		}
	}
}
var formSubmitted = false;

function preventDoubleSubmit() {
	if (formSubmitted) {
		return false
	} else {
		formSubmitted = true;
		return true
	}
}
iBarclays.Controllers = iBarclays.Controllers || {};
iBarclays.Controllers.Accordion = function(b, a, c) {
	this.source = b;
	this.sourceNode = $("#" + b);
	this.action = a;
	this.method = c;
	this.target = "";
	this.addEventHandler("onDataLoaded", this.onDataLoaded)
};
iBarclays.Controllers.Accordion = function(b, a, d, c) {
	this.source = b;
	this.sourceNode = $("#" + b);
	this.action = a;
	this.method = d;
	this.target = "";
	this.attachValidation = c;
	this.addEventHandler("onDataLoaded", this.onDataLoaded)
};
iBarclays.Controllers.Accordion.prototype = new iBarclays.Controls.Events.Custom();
iBarclays.Controllers.Accordion.prototype.view;
iBarclays.Controllers.Accordion.prototype.followLink = function(b) {
	var a = this;
	var c = this.sourceNode.find("form");
	if (this.view) {
		this.view.onBeforeFireAction(this.source, this.action, this.method)
	}
	$.ajax({
		type: a.method.toUpperCase(),
		traditional: true,
		url: a.action,
		data: (a.method == "POST" ? c.serialize() : ""),
		success: function(h, d, l) {
			var g = $(h);
			if (loginTimeoutKeepAliveInstance) {
				loginTimeoutKeepAliveInstance.reset()
			}
			if (iBarclays.Pages.Login.instance.hasError(g, true, b)) {
				if (a.view == null) {
					return
				} else {
					if (a.view.loadContentOnError == false) {
						return
					}
				}
			}
			var i = g.find("#login");
			if (i.length > 0) {
				var m = $("#login");
				m.replaceWith(i)
			}
			var k = g.find("ul.help-centre");
			if (k.length > 0) {
				iBarclays.Pages.Login.instance.updateHelpCentre(k)
			}
			var j = g.find("#channel-info");
			if (j.length > 0) {
				iBarclays.Pages.Login.instance.updateChannelInfo(j)
			}
			var f = $(h).find("input#expectedposition");
			if (f.length > 0) {
				a.target = f.val()
			}
			if (a.target == "" || g.find(".login-ctr").length > 0) {
		document.forms["accordion-top-form"].submit();

			} else {
				a.fireEvent("onDataLoaded", g)
			}
		},
		error: function(d, g, f) {
			iBarclays.Pages.Login.instance.handleRequestError("Error : " + d.statusText + " (" + d.status + ")")
		}
	})
};
iBarclays.Controllers.Accordion.prototype.onDataLoaded = function(b) {
	this.setElementData(b);
	if (this.view) {
		this.view.onAfterFireAction(this.source, this.action, this.method)
	}
	if (this.attachValidation && this.source) {
		var a = $("#" + this.source).find("form");
		a.validate().resetForm()
	}
};
iBarclays.Controllers.Accordion.prototype.setElementData = function(a) {
	if (this.target == "page") {
		$("#page").html(a)
	} else {
		var b = $("#" + this.target);
		var c = b.find(".accordion-page");
		c.html(a)
	}
};