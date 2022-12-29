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
        src: 'https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/322501910_668084581677297_7370947678963321453_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF39WgTRroESitW3TZ6xFhePveRaptgVO4-95Fqm2BU7gKewdhBai-p6NVHZ89km0HNxpjuBL03Lywf-3uzsVh_&_nc_ohc=JIycXAq07qMAX84pOsB&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfDwOqDHnj0V58kdVuqejAbcEx97UXl6qI_OjXgITjcUww&oe=63B2CDA3'
      },
      {
        title: '',
        src: 'https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/322883786_1558883544578311_1744584303868810643_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG44qWQEBrhP67Fd303bAHuEt1fRMJKWbIS3V9EwkpZstso-cudulk5lqXY1K-w8bRbyGmi4Uvr7SIc4J-aRx5M&_nc_ohc=KA8g1VgesugAX8q8-_A&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfDTCAHDGe2Ezq702lo-SG-7r4iqHquT0aU33ieaNhSJFA&oe=63B39BC7'
      },
      {
        title: '',
        src: 'https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/321999281_911483083346752_5164582309120750279_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGOrbALT76p5bU5sH-ZuyalgfWYxIuh3hSB9ZjEi6HeFGFmvWyt-QtHPbzCpV_qr7nwCmiEvhNr-X3BhvsUezvi&_nc_ohc=Ij-IIsbfuCUAX_3Fr-K&tn=ZbBHHjLrGYZ-8ylo&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfBMPC3YDBvG4GBy49KS8yAfGSEwNRH8LW7b5FrJQF4BYQ&oe=63B303C4'
      },
      {
        title: '',
        src: 'https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/322707365_500232578874835_4895363986841380440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFVFo0_d522Jw0ry2Kk4Gp4oHJS8d8_1TKgclLx3z_VMjg1BK6OQ_eb8SA8zoVs4HrEocwNVpoec1YXt-QzguyQ&_nc_ohc=0u6DQgxZJncAX-pXl2p&tn=ZbBHHjLrGYZ-8ylo&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfDHFuymRpv1oB-L0eqmMxUONTuQC-jlOpcaq2yP63KOUQ&oe=63B3A325'
      },
      {
        title: '',
        src: 'https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/321943792_1343906623109784_7097675390788046438_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGBDsAqKEdfsY_K6Vssjn0Q7UEdLv2vn3jtQR0u_a-feOxR-BA8_czFWnzuFxHxN1ZcjqMI-K2bGsnUM2bBKUPg&_nc_ohc=7qtc3ogguoEAX-V_G8I&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfAOymil5sVRfHGE2lzRpa-aqMLnsYX2A54uNLZO4_QYBg&oe=63B3553A'
      },
      {
        title: '',
        src: 'https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/322719342_480058217395134_528814175781480206_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE3qHViFm_SWZ2uuufBnrnarpdQLVyNylqul1AtXI3KWvG6FCLo5JY9uX9CAqmZ5rrwXLjbKm8VYJKMmqf0uEVV&_nc_ohc=ouyAmAKaigMAX-MEhV7&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfA06JeY7Ns_TX_k86JmOptWDKGv6hj0Ab-yRE0j66uSnw&oe=63B3E6B4'
      },
      {
        title: '',
        src: 'https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/322350033_1228851717983024_4507416106579109619_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEumISuatZ9rfcCDbx7n7dQGNwzz-NGu_wY3DPP40a7_OxC6eWQF8f9-SbZez-nWZfenjXu6RbS-Fnk4tAgGkwn&_nc_ohc=xxwkJTAzDeIAX9VkbvF&_nc_ht=scontent.fgdl10-1.fna&oh=00_AfAdgIjtOAUXT648kr_RpVDMPo0cAbj8XM5T_2AZV66IiQ&oe=63B24A3D'
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