class cookieTools {
    constructor(cookie) {
        this.cookie = cookie || decodeURIComponent(document.cookie);
        this.cookieJSON = this.cookieToJSON(this.cookie);
        //console.log(this.cookieJSON)
    };

    cookieToJSON(cookie) {
        let cJSON = {};
        let decodedCookie = cookie; //|| decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].split('=');
            //console.log(c)
            cJSON[c[0]] = String(c[1]);
        };
        //console.log(cookie)
        return cJSON;
    };

    JSONtoCookie(json) {
        let cookieArr = [];
        for (var i in json) {
            var cookieStr = i + "=" + String(json[i]);
            cookieArr.push(cookieStr);
        };
        var encodedCookie = cookieArr.join(";");
        return encodedCookie;
    };

    getCookie(cname) {
        return this.cookieJSON[cname];
    };

    setCookie(cname, cvalue) {
        this.cookieJSON[cname] = cvalue;
    };

    applyCookie(exdays, path) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = /*"expires=" +*/ d.toUTCString();
        this.cookieJSON["expires"] = expires;
        this.cookieJSON["path"] = path | "/";
        document.cookie = this.JSONtoCookie(this.cookieJSON);
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.cookie = cname + "=" + cvalue + ";";
};

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}