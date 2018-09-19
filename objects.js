var playlist = {artist: 'song'};
playlist


function updatePlaylist(playlist, artist, song) {
playlist[artist] = song
 
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  var jukebox = {playlist: 'artistName'};
  delete playlist.artistName;
  return jukebox
}
