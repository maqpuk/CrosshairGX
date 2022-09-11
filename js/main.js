function SetElement_onclick(str_name, str_url) {
    var element_ = document.getElementById(str_name);

    element_.onclick = function() {

        window.open(str_url, '_blank');
    }
    return element_
}

function c_v_(str_ver, str_date, str_url) {
    return '<li>' + str_ver + ' <a target="_blank" style="font-size: 20px;" href="' + str_url + '">[Download] </a> ' + str_date + '</li>'
}





function str_to_time(string) {
    let regExTime = /[0-9]+-?[0-9]+-[0-9]+/;
    let time_ = regExTime.exec(string);
    return time_
}
fetch('https://api.github.com/repos/Under4groos/CrosshairGX.view/releases', {
        headers: new Headers({
            'User-agent': 'Mozilla/4.0 Custom User Agent'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (!data || !data[0]) {
            return
        }


        data.forEach(function(item, i, arr) {
            if (i == 0) {
                return
            }

            $("#versions").append(c_v_(item["tag_name"], str_to_time(item["created_at"]), item["assets"][0]["browser_download_url"]))
        });






        last_ver_date.textContent = str_to_time(data[0]["created_at"])
        SetElement_onclick("last_ver", data[0]["html_url"]).textContent = data[0]["tag_name"]
        SetElement_onclick("but_view_demo", data[0]["assets"][0]["browser_download_url"])
        SetElement_onclick("but_buy", "https://vk.com/underko")
        SetElement_onclick("but_doante", "https://www.donationalerts.com/r/underko")
    })
    .catch(error => console.error(error))

//