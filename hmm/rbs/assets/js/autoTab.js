//autoTabbing v.1.0
var isNN = (navigator.appName.indexOf("Netscape")!=-1);
function autoTab(input,len, e) {
	var keyCode = (isNN) ? e.which : e.keyCode; 
	var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];	
	if(input.value.length >= len && !containsElement(filter,keyCode)) {
		input.value = input.value.slice(0, len);
		input.form[(getIndex(input)+1) % input.form.length].focus();
		if ( (input.form[(getIndex(input)+1) % input.form.length].value.length > 0) && (input.form[(getIndex(input)+1) % input.form.length].name.substr(0,6) != 'button') ) 
		{
			input.form[(getIndex(input)+1) % input.form.length].select();
		}
	}
	function containsElement(arr, ele) {
		var found = false, index = 0;
		while(!found && index < arr.length)
		if(arr[index] == ele)
			found = true;
		else
			index++;
		return found;
	}
	function getIndex(input) {
		var index = -1, i = 0, found = false;
		while (i < input.form.length && index == -1)
		if (input.form[i] == input) index = i;
		else i++;
		return index;
	}
        if ((typeof TeaLeaf != "undefined") && (typeof TeaLeaf.Client != "undefined") && (typeof TeaLeaf.Client.tlAddEvent != "undefined")) { 
    		TeaLeaf.Client.tlAddEvent(event); 
	} 



	return true;
}
function FormReset()
{
	// clear the form
	document.forms.form.reset();
	
	// move the cursor to the first visible form element  
	var count = document.forms.form.elements.length;
	var i;
	for (i=0; i<count; i++) { 
		if (document.forms.form.elements[i].type.toLowerCase() != 'hidden') {
			document.forms.form.elements[i].focus();
			break;
		}
	}
}