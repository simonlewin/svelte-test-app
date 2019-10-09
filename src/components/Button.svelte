<style>
  :root {
    --height: 50px;
  }

  button {
    display: block;
    min-width: 200px;
    height: var(--height);
    margin: 0 auto;
    padding: 0 calc(var(--unit) * 4);
    border: none;
    border-radius: calc(var(--height) / 2);
    font-family: inherit;
    font-size: 18px;
    line-height: var(--height);
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    background-color: var(--accent);
    cursor: pointer;
    outline: none;
  }

  button:hover {
    filter: opacity(90%);
  }

  button:active {
    filter: opacity(80%);
  }
</style>

<button on:click>
  <slot />
</button>
