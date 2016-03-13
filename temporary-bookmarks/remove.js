chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    
    if (changeInfo.status == 'complete' && tab.active) {
        
        var query = {'url': tab.url};
        
        chrome.bookmarks.search(query, function(arr) {
            
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].title.substring(0, 4) == "Tmp ") {
                    chrome.bookmarks.remove(arr[i].id);
                }
            }
            
        });

    }
})