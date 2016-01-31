var self    = require("sdk/self"),
    pageMod = require("sdk/page-mod");
  
pageMod.PageMod({
    include: "*.soundcloud.com",
    contentStyleFile: self.data.url("soundcloud.css")
});
