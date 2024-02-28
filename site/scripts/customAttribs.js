document.addEventListener('DOMContentLoaded', (event) => {
    var forms = document.querySelectorAll('form');
    for (let i = 0; i < forms.length; i++) {
        var form = forms[i];
        var { remote } = form['dataset'];

        if (remote == 'true' || remote == true) {
            var { method, action } = form;
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                var fdata = new FormData(form);
                var xhr = new XMLHttpRequest();
                console.log(event)

                xhr.open(method, action, true);
                xhr.onload = function() { alert("so: " + xhr.response) };
                //xhr.setRequestHeader("Content-Type", `${enctype}; boundary=${form._boundary}`);
                xhr.setRequestHeader("Content-Type", "application/json");
                var jsonData = JSON.stringify(Object.fromEntries(fdata));
                xhr.send(jsonData);
            })
        }
    }
});

