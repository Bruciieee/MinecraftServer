iBarclays.Controls = iBarclays.Controls || {};
iBarclays.Controls.Forms = iBarclays.Controls.Forms || {};
iBarclays.Controls.Forms.Snippets = (function() {
	var b = $("div.request-error");
	var a = $("#logon-snippet-icookie");
	if (typeof b !== "undefined" && b.length) {
		a.before(b)
	}
	return this
})();