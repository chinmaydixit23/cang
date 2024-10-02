chrome.omnibox.onInputEntered.addListener((text) => {
    const bangs = {
        "!wk" : "https://en.wikipedia.org/wiki/Special:Search?search=", 
        "!yt" : "https://www.youtube.com/results?search_query=", //youtube,
        "!g" : "https://www.google.com/search?q=", // google,
        "!gi" : "https://www.google.com/search?tbm=isch&q=", // google images,
        "!gn" : "https://news.google.com/search?q=", // google news,
        "!sch" : "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=", // google scholar,
        "!az" : "https://www.amazon.in/s?k=", // amazon,
        "!imdb" : "https://www.imdb.com/find?q=", // imdb,
        "!tw" : "https://twitter.com/search?q=", // twitter,
        "!gh" : "https://github.com/search?q=", // github,
        "!so" : "https://stackoverflow.com/search?q=", // stackoverflow,
        "!r" : "https://www.reddit.com/search/?q=", // reddit,
        "!gm" : "https://www.google.com/maps/place/", // google maps,
        "!mail" : "https://mail.google.com/mail/u/0/#search/", // gmail,

    }
    const searchItems = text.split(" ");
    let searchUrl = "";
    if(searchItems[0] in bangs){
        //
        searchUrl = bangs[searchItems[0]] + searchItems.slice(1).join(" ");
    }
    else if(searchItems[searchItems.length - 1] in bangs){
        //
        searchUrl = bangs[searchItems[searchItems.length - 1]] + searchItems.slice(0, searchItems.length - 1).join(" ");
    }
    else{
        //
        searchUrl = "https://www.google.com/search?q=" + text; 
    }
    // chrome.tabs.create({url: searchUrl});
    chrome.tabs.update({url: searchUrl});
});
