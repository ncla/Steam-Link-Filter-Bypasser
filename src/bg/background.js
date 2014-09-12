/*
    Function to get URL param
 */
function gup( name, url )
{
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    if( results == null )
        return null;
    else
        return results[1];
}
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: gup("url", details.url)};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);
      