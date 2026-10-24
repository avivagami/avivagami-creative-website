/* GoatCounter: page views, video plays, video finishes and file downloads.
   Your own visits are skipped once you open avivagami.com/#toggle-goatcounter
   in a browser. Localhost is never counted. */
(function () {
  var ENDPOINT = 'https://avivagami.goatcounter.com/count';

  var s = document.createElement('script');
  s.async = true;
  s.src = '//gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', ENDPOINT);
  document.head.appendChild(s);

  function send(path, title) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: path, title: title, event: true });
    }
  }

  // "/videos/ai/safe-space.mp4" -> "safe-space"
  function name(src) {
    return (src || '').split('?')[0].split('/').pop().replace(/\.[^.]+$/, '') || 'unknown';
  }

  function page() {
    return location.pathname.replace(/\/+$/, '') || '/home';
  }

  // Media events do not bubble, so listen in the capture phase.
  // This also catches videos added later (e.g. the home page project overlay).
  document.addEventListener('play', function (e) {
    var v = e.target;
    if (!v || v.tagName !== 'VIDEO' || v._gcPlayed) return;
    v._gcPlayed = true;
    var n = name(v.currentSrc || v.src);
    send('video-play' + page() + '/' + n, 'Play: ' + n);
  }, true);

  // Count a finish at 95% so looping videos (which never fire "ended") count too.
  document.addEventListener('timeupdate', function (e) {
    var v = e.target;
    if (!v || v.tagName !== 'VIDEO' || v._gcDone || !v.duration) return;
    if (v.currentTime / v.duration < 0.95) return;
    v._gcDone = true;
    var n = name(v.currentSrc || v.src);
    send('video-finish' + page() + '/' + n, 'Finished: ' + n);
  }, true);

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[download]');
    if (!a) return;
    var f = a.getAttribute('download') || name(a.getAttribute('href'));
    send('download' + page() + '/' + f, 'Download: ' + f);
  }, true);
})();
