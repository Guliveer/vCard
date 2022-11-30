//? CONFIG BELOW THIS LINE

var _vcfURL = "https://guliveer.github.io/vCard/contact.vcf";
var _firstNAME = "Oliwer";
var _lastNAME = "Pawelski";
var _nick = "Chińczyk";
var _birthday =  "01.05.2003";
var _phone =  "+48 884 857 188";
var _email = "oliwer.pawelski@gmail.com";
var _links = Array(
    [
    "Facebook",
    "https://facebook.com/O.Pawelski"
    ],
    [
    "LinkedIn",
    "https://linkedin.com/in/oliwer-pawelski"
    ],
    [
    "Moja Witryna",
    "https://guliveer.github.io"
    ]
); 

//? CONFIG ABOVE THIS LINE


//! DO NOT EDIT ANYTHING BELOW THIS LINE
// Insert _vcfURL as src attribute into #vcf-url
$('#vcf-url').attr('src', "https://api.qrserver.com/v1/create-qr-code/?data=" + _vcfURL + "&size=150x150");

// Insert _firstNAME
$('.first-name').text(_firstNAME);

// Insert _lastNAME
$('.last-name').text(_lastNAME);

// Insert _nick
if (_nick != "") {
    $('.nick').text('„' + _nick + '”');
}

// Insert _birthday
$('#birthday').text(_birthday);

// Insert _phone
$('#phone').text(_phone);
$('#phone_a').attr('href', "tel:" + _phone);

// Insert _email
$('#email').text(_email);
$('#email_a').attr('href', "mailto:" + _email);

// Insert _links
var items = [];
$.each(_links, function (key, val) {
    items.push("<li>" + "<a href='" + val[1] + "' target='_blank'>" + val[0] + "</a></li>");
});
$("<div/>", {
    html: items.join("")
}).appendTo(".social");
