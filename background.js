browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const myDomainUrl = "https://example.com/";
    const redirectUrl = myDomainUrl + details.url;
    return { redirectUrl: redirectUrl };
  },
  {
    urls: [
      "*://*.youtube.com/*",
      "*://youtube.com/*"
    ]
  },
  ["blocking"]
);
