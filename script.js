const countdownDiv = document.getElementById('countdown');

const countDownFrom = (num, callback) => {
  if (num > 0) {
    countdownDiv.textContent = num;
    setTimeout(() => {
      countDownFrom(num - 1, callback);
    }, 1000);
  } else {
    countdownDiv.textContent = "Happy Independence Day!";
    callback();
  }
};

countDownFrom(10);
