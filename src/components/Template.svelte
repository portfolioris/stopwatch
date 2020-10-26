<style global type="text/scss" lang="scss">
  @use 'src/sass/leading';

  html,
  body,
  main {
    height: 100%;
  }

  html {
    background-image:
      repeating-linear-gradient(59deg, hsla(323, 0%, 57%, 0.12) 0, transparent 7px, hsla(323, 0%, 57%, 0.12) 10px, transparent 17px, hsla(323, 0%, 57%, 0.12) 20px, transparent 27px, hsla(323, 0%, 57%, 0.12) 30px),
      repeating-linear-gradient(12deg, hsla(323, 0%, 57%, 0.12) 0, transparent 7px, hsla(323, 0%, 57%, 0.12) 10px, transparent 17px, hsla(323, 0%, 57%, 0.12) 20px, transparent 27px, hsla(323, 0%, 57%, 0.12) 30px),
      repeating-linear-gradient(133deg, hsla(323, 0%, 57%, 0.12) 0, transparent 7px, hsla(323, 0%, 57%, 0.12) 10px, transparent 17px, hsla(323, 0%, 57%, 0.12) 20px, transparent 27px, hsla(323, 0%, 57%, 0.12) 30px),
      linear-gradient(90deg, rgb(37, 37, 37), rgb(37, 37, 37));
    color: #ffffff;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>

<main>
  <div>
    <slot />
  </div>
</main>
