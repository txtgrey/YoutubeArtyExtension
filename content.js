chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'downloadThumbnail') {
      const videoId = new URLSearchParams(window.location.search).get('v');
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
      fetch(thumbnailUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const title = document.querySelector('h1.title yt-formatted-string').textContent.trim();
          const fileName = `${title} - ${videoId}.jpg`;
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
    }
  });
  