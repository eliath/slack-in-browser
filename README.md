# slack-in-browser

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

- Need to sign and distribute extension to enable permanent loading:
  https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/
- Consider adding automatic updates for v3 manifest
- Improve the link finding logic, maybe
