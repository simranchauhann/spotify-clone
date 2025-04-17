// Song List
const songs = [
    "Blinding Lights - The Weeknd",
    "Levitating - Dua Lipa",
    "Peaches - Justin Bieber",
    "Bad Habits - Ed Sheeran",
    "Save Your Tears - The Weeknd",
    "Shape of You - Ed Sheeran",
    "Stay - The Kid LAROI, Justin Bieber",
  ];
  
  // Load songs on Home Page
  if (document.getElementById('songList')) {
    const songListDiv = document.getElementById('songList');
    const nowPlaying = document.getElementById('nowPlaying');
  
    songs.forEach(songTitle => {
      const songDiv = document.createElement('div');
      songDiv.className = 'song';
      songDiv.textContent = songTitle;
  
      songDiv.addEventListener('click', () => {
        nowPlaying.textContent = `Now Playing: ${songTitle}`;
      });
  
      songListDiv.appendChild(songDiv);
    });
  }
  
  // Search functionality on Search Page
  function searchSongs() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsDiv = document.getElementById('searchResults');
    const nowPlaying = document.getElementById('nowPlaying');
  
    const query = searchInput.value.toLowerCase();
    searchResultsDiv.innerHTML = '';
  
    const filteredSongs = songs.filter(song => song.toLowerCase().includes(query));
  
    filteredSongs.forEach(songTitle => {
      const songDiv = document.createElement('div');
      songDiv.className = 'song';
      songDiv.textContent = songTitle;
  
      songDiv.addEventListener('click', () => {
        nowPlaying.textContent = `Now Playing: ${songTitle}`;
      });
  
      searchResultsDiv.appendChild(songDiv);
    });
  }
  