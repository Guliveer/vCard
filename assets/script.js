$.getJSON("../config.json", function(data) {
    var items = [];
    $.each(data, function (key, val) {;
        if (key[0] != '_') {
            items.push("<li>" + "<a href='" + val + "' target='_blank'>" + key + "</a></li>");
        } else {
            switch (key) {
                case '_firstNAME':
                    $('.first-name').text(val);
                    var first_name = val;
                    return first_name;
                case '_lastNAME':
                    $('.last-name').text(val);
                    var last_name = val;
                    return last_name;
                case '_nick':
                    if (val != '') {
                        $('.nick').text('„' + val + '”');
                    }
                    break;
                case '_birthday':
                    $('#birthday').text(val);
                    break;
                case '_email':
                    $('#email').text(val);
                    $('#email_ref').attr('href', 'mailto:' + val);
                    break;
                case '_phone':
                    $('#phone').text(val);
                    $('#phone_ref').attr('href', 'tel:' + val);
                    break;
                case '_vcfURL':
                    $('#vcf-url').attr('src', "https://api.qrserver.com/v1/create-qr-code/?data=" + val + "&size=150x150");
                    break;
                default:
                    break;
            }
        }
    });
    var first_name = $('.first-name').text();
    var last_name = $('.last-name').text();
    document.title = first_name + ' ' + last_name + ' | vCard';

    $("<div/>", {
        html: items.join("")
    }).appendTo(".social");
});
