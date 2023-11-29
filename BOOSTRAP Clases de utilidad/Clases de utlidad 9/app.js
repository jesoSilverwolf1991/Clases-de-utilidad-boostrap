
$(document).ready(function () {
  let audio = new Audio();
  let currentSong = null;


  $('.song-link').on('click', function (e) {
    e.preventDefault();
    const src = $(this).data('src');
    playSong(src);
  });

 
  $('.play-btn').on('click', function () {
    if (currentSong) {
      audio.play();
    }
  });

 
  $('.pause-btn').on('click', function () {
    if (currentSong) {
      audio.pause();
    }
  });

 
  $('.stop-btn').on('click', function () {
    if (currentSong) {
      audio.pause();
      audio.currentTime = 0;
    }
  });


  $('#volumeControl').on('input', function () {
    if (currentSong) {
      audio.volume = $(this).val() / 100;
    }
  });

 
  function playSong(src) {
    if (currentSong) {
      audio.pause();
      audio.currentTime = 0;
    }

    audio = new Audio(src);
    audio.play();
    currentSong = src;
  }
});
