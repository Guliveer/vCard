//! DO NOT EDIT ANYTHING BELOW THIS LINE
// Set website title
document.title = _firstNAME + " " + _lastNAME + " | vCard";

// Insert _firstNAME and _lastNAME
$("#text01").text(_firstNAME + " " + _lastNAME);

// Insert _nick
if (_nick != "") {
	$("#text07").text('"' + _nick + '"');
}

// Insert _phone
$("#phone").text(_phone);
$("#phone-a").attr("href", "tel:" + _phone);

// Insert _email
$("#email").text(_email);
$("#email-a").attr("href", "mailto:" + _email);

// Insert _links
var items = [];
$.each(_links, function (key, val) {
	items.push("<li>" + "<a href='" + val + "' target='_blank' class='button'>" + key + "</a></li>");
});
$("#buttons03").empty().append(items.join(""));

// Edit default download file name
$("#add-contact").attr("download", _firstNAME + "-" + _lastNAME + ".vcf");

// Insert _vcfURL as src attribute into #vcf-url
$("#qr").attr("src", "https://api.qrserver.com/v1/create-qr-code/?data=" + _vcfURL + "&color=fff&bgcolor=000&margin=0&format=svg");
