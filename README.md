# slack-in-browser

[install extension here](https://addons.mozilla.org/en-US/firefox/addon/slack-in-browser/)

I wanted
[this](https://chrome.google.com/webstore/detail/open-slack-in-browser-not/jkgehijlkoolgcjifalbiicaomkngakb)
extension to work in firefox. So I cloned it. Thank you, yume :\)


Added a simple exponential backoff instead of constant 1sec wait time. Otherwise it is the same.

## Build for FireFox

```bash
npm install --global web-ext
web-ext build
```

## Notes

- Should automatically ask for permissions instead of requiring the user to update the settings
  after install
  - run script in background
    https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background
  - on installed listener
    https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
  - check for permissions and request them
    https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions
  - closest example I could find
    https://github.com/mdn/webextensions-examples/tree/main/runtime-examples
- Consider adding automatic updates for v3 manifest
- Improve the link finding logic, maybe
