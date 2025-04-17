function extrairVideoID(url) {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  function irParaLive() {
    const url = document.getElementById('liveUrl').value;
    const videoId = extrairVideoID(url);
    if (videoId) {
      window.location.href = `live.html?v=${videoId}`;
    } else {
      alert("Link inválido! Cole um link de live do YouTube válido.");
    }
  }

  function carregarVideoDaURL() {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('v');
    if (videoId) {
      document.getElementById('liveFrame').src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
      document.getElementById('chatFrame').src = `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}`;
    }
  }

  window.onload = carregarVideoDaURL;