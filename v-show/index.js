var app = new Vue({
  el: '#app',

  data: {
    age: undefined,
    count: 0,
    images: [{
        title: 'Big Chest Abigail',
        path: '1.jpg'
      },
      {
        title: 'Lily',
        path: '2.jpg'
      }, {
        title: 'Azullane Lily',
        path: '3.jpg'
      }, {
        title: 'Mahoshojou',
        path: '4.jpg'
      }, {
        title: 'The Russian Last Princess',
        path: '5.jpg'
      }
    ]
  },

  methods: {
    prev: function () {
      this.count = (this.count + this.images.length - 1) % this.images.length
    },
    next: function () {
      this.count = (this.count + this.images.length + 1) % this.images.length
    }
  }

})