var booking = {
  num_cols: 10,
  num_rows: 10,
  seats: [],
  initialize: function() {
    for (var i = 0; i < this.num_cols; i++) {
      this.seats[i] = [];
      for (var j = 0; j < this.num_rows; j++) {
        this.seats[i].push(0);
      }
    }
    console.log(this.seats);
  },
  bookAseat: function(col, row, seat) {
    this.seats[col][row] = (this.seats[col][row] + 1) % 2;
    if (seat.dataset.status === '0') {
      seat.dataset.status = '1';
    } else {
      seat.dataset.status = '0';
    }
  }
};

booking.initialize();

window.onload = function() {
  var div = document.getElementById('seats_section1');
  for (var i = 0; i < booking.num_rows; i++) {
    for (var j = 0; j < booking.num_cols; j++) {
      var seat = document.createElement('div');
      seat.className = "seat";
      seat.dataset.row = i;
      seat.dataset.col = j;
      seat.dataset.status = '0';
      seat.addEventListener("click", function() {
        booking.bookAseat(this.dataset.row, this.dataset.col,
          this);
      });
      div.appendChild(seat);
    }
  }
};
