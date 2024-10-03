chrome.omnibox.onInputEntered.addListener((text) => {
    const bangs = {
        ".wk" : "https://en.wikipedia.org/wiki/Special:Search?search=", 
        ".yt" : "https://www.youtube.com/results?search_query=", 
        ".g" : "https://www.google.com/search?q=", 
        ".gi" : "https://www.google.com/search?tbm=isch&q=", 
        ".gn" : "https://news.google.com/search?q=", 
        ".sch" : "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=", 
        ".az" : "https://www.amazon.in/s?k=", 
        ".imdb" : "https://www.imdb.com/find?q=", 
        ".tw" : "https://twitter.com/search?q=", 
        ".gh" : "https://github.com/search?q=", 
        ".so" : "https://stackoverflow.com/search?q=",
        ".r" : "https://www.reddit.com/search/?q=", 
        ".gm" : "https://www.google.com/maps/place/", 
        ".mail" : "https://mail.google.com/mail/u/0/#search/",

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

chrome.omnibox.onInputStarted.addListener(() => {
    chrome.omnibox.setDefaultSuggestion({
        description: "Example = [.yt for Youtube, .g for Google, .mail for Gmaiil, .r for Reddit, .gh for Github, .wk for Wikipedia, .az for Amazon, etc.]"
    });
}
);