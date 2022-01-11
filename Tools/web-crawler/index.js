var Crawler = require("crawler");
const fs = require('fs');

const baseUrl = "https://ncrrecycles.gsa.gov";//"http://127.0.0.1:8080";
const seenUrls = {};
const crawableUrl = (link) => {
    // list of href values that are not supported
    const regex = /^(\#|mailto:|tel|javascript|ftp)/;
    // if link is not an unsupported value
    if (!regex.test(link)) {
        const url = getUrl(link);
        return seenUrl(url) && !isExternalUrl(url);
    } else {
        return false;
    }
}
const getUrl = (link) => {
    // ignore anchors within page
    // add external links to extUrls list (should count instances), also add to seenUrls
    if(link.includes('http')) {
        return link;
    } else if (link.startsWith('/')) {
        return `${baseUrl}${link}`;
    } else {
        return `${baseUrl}/${link}`;
    }
}
const seenUrl = (url) => {
    if (seenUrls[url]) {
        seenUrls[url] += 1;
        return true;
    }
    else {
        seenUrls[url] = 1;
        return false;
    }
} 
const isExternalUrl = (url) => {
    if (url.includes(baseUrl)) {
        return true;
    } else {
        return false;
    }
}
var c = new Crawler({
    rateLimit: 1000,
    maxConnections: 4,
    jQuery: true,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        } else {
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            const links = $('a')
                .map((i, link) => link.attribs.href)
                .get();
            links.forEach(link => {
                if (crawableUrl(link)) {
                    console.log(`queuing another link ${getUrl(link)}`)
                    c.queue(getUrl(link));
                }
            });
        }
        done();
    }
});
 
// Queue just one URL, with default callback
c.queue(getUrl(baseUrl));

c.on('drain',function(){
    const date = new Date();
    const path = `data/${date.getFullYear()}${date.getMonth()<10 ? '0' : '' }${date.getMonth()+1}${date.getDate()}_${date.getHours()}${date.getMinutes()<10 ? '0' : '' }${date.getMinutes()}`;
    const url = baseUrl.replace("https://","");
    fs.mkdir(path, {recursive: true}, function (dirErr) {
            if (dirErr) return;
            fs.writeFile(`${path}/${url}.json`, JSON.stringify(seenUrls), err => {
                if (err) {
                  console.error(err)
                  return
                }
                //file written successfully
              });
    });
});