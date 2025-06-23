chrome.runtime.onInstalled.addListener(()=>{
  console.log('plah plah plah installed my chrome ext');
})

chrome.bookmarks.onCreated.addListener(()=>{
  console.log('bookmarked this page');
}) 