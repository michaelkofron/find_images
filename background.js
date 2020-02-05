
let contextMenuItem = {
    "id": "imageSearch",
    "title": "Find Images",
    "contexts": ["selection"]
}

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create(contextMenuItem);
});


chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "imageSearch") {
        let googleImages = `https://www.google.com/search?tbm=isch&q=${clickData.selectionText}`
        window.open(googleImages, "_blank")
    }

})

