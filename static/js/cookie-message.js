(function() {

    /**
     * Set cookie
     *
     * @param string name
     * @param string value
     * @param int days
     * @param string path
     * @see http://www.quirksmode.org/js/cookies.html
     */
    function createCookie(name,value,days,path) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path="+path;
    }

    /**
     * Read cookie
     * @param string name
     * @returns {*}
     * @see http://www.quirksmode.org/js/cookies.html
     */
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function createElemCookieMessage() {
        var elem = document.createElement('div');
        elem.setAttribute('id', 'cookie-message')
        elem.style.cssText = 'position: fixed;' +
                         '    bottom: 0;' +
                         '    left: 0;' +
                         '    right: 0;' +
                         '    height: auto;' +
                         '    width: 100%;' +
                         '    background: #e2eeee;' +
                         '    z-index: 10;' +
                         '    padding: 10px;' +
                         '    box-shadow: 0px -1px 2px #d4d4d4;';
        elem.innerHTML = '<p style="margin: 0;text-align: center;">' +
                            'coolgc.com uses cookies to make the site simpler. ' +
                            '<a href="/cookies/index.html">Find out more about cookies</a>' +
                         '</p>';

        var footer = document.getElementsByClassName('footer')[0];
        footer.parentNode.insertBefore(elem, footer);
    }

    // Show or not cookie massege
    var cookie = readCookie('seen-cookie-message');
    if (cookie != null && cookie == 'yes') {

    } else {
        createElemCookieMessage();
    }

    // Set/update cookie
    var cookieExpiry = null; // 'data-cookie-expiry'
    if (cookieExpiry == null) {
        cookieExpiry = 30;
    }
    var cookiePath = null; // 'data-cookie-path'
    if (cookiePath == null) {
        cookiePath = "/";
    }
    createCookie('seen-cookie-message','yes',cookieExpiry,cookiePath);

})();