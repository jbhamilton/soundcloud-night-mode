var self    = require("sdk/self"),
    pageMod = require("sdk/page-mod");
  
pageMod.PageMod({
    include: "*.soundcloud.com",
    exclude: "https://w.soundcloud.com/player/*",
    contentStyleFile: self.data.url("soundcloud.min.css")
});

