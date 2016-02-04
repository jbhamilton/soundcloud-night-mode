#SoundCloud Night Mode
View soundcloud.com in night mode.

https://addons.mozilla.org/en-US/firefox/addon/soundcloud-night-mode/

#Prep
run
```
npm install
```

#Build
run 
```
grunt watch
```

which will take care of the build process.

#Release
run
```
. sign-and-release.sh
```

To create a new XPI and push it to your account.

Be sure to change `package.json` to point the add-on to your own.

Have fun.
