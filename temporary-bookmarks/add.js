chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    
    var bkmk = {
        "parentId": '1', //bookmarkBar.id,
        "title": "Tmp " + tab.title,
        "url": tab.url
    };

    chrome.bookmarks.create(bkmk, function(res) {
        chrome.bookmarks.move(res.id, {'index': 0});
    });
    
});