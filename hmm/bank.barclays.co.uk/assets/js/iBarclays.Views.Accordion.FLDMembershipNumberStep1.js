iBarclays.Views.Accordion.FLDMembershipNumberStep1 = function() {};
iBarclays.Views.Accordion.FLDMembershipNumberStep1.prototype = new iBarclays.Views.Accordion.Base();
iBarclays.Views.Accordion.FLDMembershipNumberStep1.prototype.accordionLoaded = function() {
	this.activate();
	this.clearBottomAccordion();
	$("#accordion-top h2").text("Step 1 - Your details");
	$("#accordion-bottom h2").text("Step 2 - Check your details");
	var a = $("#birthDate").val();
	var b = a.split("../../index.html");
	if (b.length > 1) {
		$("#dayList option:contains(" + b[0] + ")").attr("selected", "selected");
		$("#monthList").val(parseInt(b[1]));
		$("#yearList option:contains(" + b[2] + ")").attr("selected", "selected")
	}
	this.configureHeaderAction()
};
iBarclays.Views.Accordion.FLDMembershipNumberStep1.prototype.onBeforeFireAction = function() {
	var d = $("#dayList option:selected").text();
	var b = $("#monthList").val();
	if (b.length < 2) {
		b = "0" + b
	}
	var c = $("#yearList option:selected").text();
	var a = d + "/" + b + "/" + c;
	$("input#birthDate").attr("value", a)
};
iBarclays.Views.Accordion.FLDMembershipNumberStep1.prototype.triggerHeaderAction = function(a) {
	this.activate();
	this.clearBottomAccordion();
	$("input#cvv").val("")
};