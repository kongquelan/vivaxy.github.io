/**
 * @since 150316 09:55
 * @author vivaxy
 */
var textarea = document.querySelector('textarea'),
    sign = document.querySelector('.sign'),
    check = document.querySelector('.check'),

    getQueryStringByName = function (url, name) {

        var a = document.createElement('a');
        a.href = url;
        var search = a.search || a.hash;
        var result = search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
        if (result === null || result.length < 1) {
            return '';
        }
        return result[1];

    };

sign.addEventListener('click', function () {
    var text = textarea.value,
        uuid = getQueryStringByName(text, 'uuid_token');
    location.href = 'http://qywx.dper.com/app/checkin.html#/sign?uuid_token=' + uuid + '&longitude=121.41546&latitude=31.217155';
});

check.addEventListener('click', function () {
    var text = textarea.value,
        uuid = getQueryStringByName(text, 'uuid_token');
    location.href = 'http://qywx.dper.com/app/checkin.html#/search?uuid_token=' + uuid;

});