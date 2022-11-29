$.getJSON("../config.json", function(data) {
    var items = [];
    $.each(data, function (key, val) {
        if (key[0] != '_') {
            items.push("<li>" + "<a href='" + val + "' target='_blank'>" + key + "</a></li>");
        } else {
            switch (key) {
                case '_first-name':
                    $('.first-name').text(val);
                    break;
                case '_last-name':
                    $('.last-name').text(val);
                    break;
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
                    break;
                case '_phone':
                    $('#phone').text(val);
                    break;
                case '_vcf-url':
                    $('#vcf-url').attr('src', "https://api.qrserver.com/v1/create-qr-code/?data=" + val + "&size=150x150");
                    break;
                default:
                    break;
            }
        }
    });

    $("<div/>", {
        html: items.join("")
    }).appendTo(".social");
});
