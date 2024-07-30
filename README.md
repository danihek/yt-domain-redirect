# YT Domain Redirect Firefox Extension

## Installation
Add manifest.json in firefox in this section:
```
about:debugging#/runtime/this-firefox
```

## Configuration
Edit [background.js](./background.js) in this repo and replace example domain url with your own:
```
const myDomainUrl = "https://example.com/";
```
