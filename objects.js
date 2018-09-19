var playlist = {artist: 'song'};
playlist


function updatePlaylist(playlist, artist, song) {
playlist[artist] = song
 
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
 playlist[artist]
 delete playlist.artist;
 return playlist
}
