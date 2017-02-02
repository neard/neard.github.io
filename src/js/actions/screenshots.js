var actionScreenshots = {

  init : function(gallerySelector) {
    var gallery = $(gallerySelector);
    if (gallery.length <= 0) {
      return;
    }

    gallery.justifiedGallery({
      rowHeight : 160,
      lastRow : 'nojustify',
      margins : 6,
      border: 6
    }).on('jg.complete', function() {
      lightGallery(gallery[0], {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false
      });
    });
  }
};