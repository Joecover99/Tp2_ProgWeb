new Vue({
    el: "#movieRating",
    methods: {
      setRating: function(rating){
        this.rating= rating;
      }
    },
    data:{
      rating: 0
    }
  });