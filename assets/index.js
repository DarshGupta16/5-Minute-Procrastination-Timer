const app = Vue.createApp({
  data() {
    return {
      title: "5 Minute Procrastination Timer",
      btnValue: "Start",
      timerDisplay: "00:00",
      time: 5 * 60,
      interval: null,
      i: null,
    };
  },
  methods: {
    btnClicked() {
      if (this.btnValue === "Start") {
        this.btnValue = "Cancel";
        this.i = this.time;
        let i = this.i;
        this.interval = setInterval(() => {
          if (i != 0) {
            i--;
            let minutes = ~~(i / 60);
            let seconds = ~~(i % 60);

            this.timerDisplay =
              "0" + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
          } else {
            new Audio("/assets/Finish Signal.mp3").play();
            this.btnValue = "Start";
            alert("Switch to a new task");
            clearInterval(this.interval);
          }
        }, 1000);
      } else {
        window.location.reload();
      }
    },
  },
});

app.mount("#app");
