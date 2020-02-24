let googleContextMenuItem
let imgurContextMenuItem
let flickrContextMenuItem
let gettyContextMenuItem

let menuArray = [
    googleContextMenuItem = {
        "id": "googleSearch",
        "title": "Google Images"
    },
    imgurContextMenuItem = {
        "id": "imgurSearch",
        "title": "Imgur"
    },
    flickrContextMenuItem = {
        "id": "flickrSearch",
        "title": "Flickr"
    },
    gettyContextMenuItem = {
        "id": "gettySearch",
        "title": "Getty Images"
    }
]

chrome.contextMenus.removeAll(function() {
    menuArray.forEach(function(menuItem){
        menuItem["contexts"] = ["selection"]
        chrome.contextMenus.create(menuItem)
    })
})


chrome.contextMenus.onClicked.addListener(function(clickData){
    switch(clickData.menuItemId) {
        case "googleSearch":
            let googleLink = `https://www.google.com/search?tbm=isch&q=${clickData.selectionText}`
            window.open(googleLink, "_blank")
            break
        case "imgurSearch":
            let imgurLink = `https://imgur.com/search?q=${clickData.selectionText}`
            window.open(imgurLink, "_blank")
            break
        case "flickrSearch":
            let flickrLink = `https://www.flickr.com/search/?text=${clickData.selectionText}`
            window.open(flickrLink, "_blank")
            break
        case "gettySearch":
            let gettyLink = `https://www.gettyimages.com/search/2/image?phrase=${clickData.selectionText}`
            window.open(gettyLink, "_blank")
    }
})

