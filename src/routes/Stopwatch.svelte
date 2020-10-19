<script>
  let time = Date.now();
  let startTime, endTime, interval;

  const startTimer = () => {
    interval = setInterval(() => {
      time = Date.now();
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(interval);
  };

  function handleStart() {
    startTime = Date.now();
    startTimer();
  }

  function handleStop() {
    endTime = Date.now();
    stopTimer();
  }
</script>

<h1>{ time - startTime }</h1>

<h1>Elapsed: { endTime - startTime }</h1>

<button type="button" on:click={handleStart}>Start</button>
<button type="button" on:click={handleStop}>Stop</button>
