new Vue({
  el: '#app',
  data: {
    fullScreenImage: '',
    fullScreenTitle: '',
    hidden: false,
    scrollCount: 0,
    progressWidth: 0,
    gallery:  [
      {
        title: '',
        src: 'https://burst.shopifycdn.com/photos/glass-curves-and-trees.jpg?width=1850&format=pjpg&exif=1&iptc=1'
      },
      {
        title: '',
        src: 'https://burst.shopifycdn.com/photos/amsterdam-canal-boats.jpg?width=925&format=pjpg&exif=1&iptc=1'
      },
      {
        title: '',
        src: 'https://burst.shopifycdn.com/photos/sailing-at-dusk.jpg?width=1850&format=pjpg&exif=1&iptc=1'
      },
      {
        title: '',
        src: 'https://burst.shopifycdn.com/photos/a-child-takes-in-nature.jpg?width=1850&format=pjpg&exif=1&iptc=1'
      },
      {
        title: '',
        src: 'https://burst.shopifycdn.com/photos/poolside-smile.jpg?width=925&format=pjpg&exif=1&iptc=1'
      },
      {
        title: '',
        src: 'https://burst.shopifycdn.com/photos/a-ferris-wheel-from-a-worm-s-eye-view.jpg?width=925&format=pjpg&exif=1&iptc=1'
      },
      {
        title: '',
        src: 'https://burst.shopifycdn.com/photos/white-wall-and-blue-sky.jpg?width=1850&format=pjpg&exif=1&iptc=1'
      }
    ]
  },
  methods: {
    openFullScreen: function(i) {
      this.fullScreenImage = this.gallery[i].src;
      this.fullScreenTitle = this.gallery[i].title;
      this.hidden = true;
    },
    closeFullScreen: function() {
      this.hidden = false;
    },
    progress: function() {
      const scrollPosition = this.$refs.gallery.scrollLeft;
      const ww = ((scrollPosition / (this.$refs.gallery.scrollWidth - this.$refs.gallery.offsetWidth)) * 100).toFixed(0);

      this.progressWidth = (scrollPosition > this.scrollCount) ? ww : ww;

      this.scrollCount = scrollPosition;
    }
  }
});

const cursor = document.getElementById('cursor');

window.addEventListener('keydown', e => (e.key === 'Shift') ? cursor.classList.add('cursor--scroll') : null);

window.addEventListener('keyup', () => cursor.classList.contains('cursor--scroll') ? cursor.classList.remove('cursor--scroll') :null);

window.addEventListener('mousemove', e => cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`);
