//TIP With Search Everywhere, you can find any action, file, or symbol in your project. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/>, type in <b>terminal</b>, and press <shortcut actionId="EditorEnter"/>. Then run <shortcut raw="npm run dev"/> in the terminal and click the link in its output to open the app in the browser.
export function setupCounter(element: HTMLElement) {
  let counter = 0;

  const adjustCounterValue = (value: number)  => {
    if (value >= 100) return value - 100;
    if (value <= -100) return value + 100;
    return value;
  };

  const setCounter = (value: number) => {
    counter = adjustCounterValue(value);
    const text = `${counter}`;
    element.innerHTML = text;
  };

  document.getElementById('increaseByOne')?.addEventListener('click', () => setCounter(counter + 1));
  document.getElementById('decreaseByOne')?.addEventListener('click', () => setCounter(counter - 1));
  document.getElementById('increaseByTwo')?.addEventListener('click', () => setCounter(counter + 2));

  document.getElementById('decreaseByTwo')

  setCounter(0);
}

setupCounter(document.getElementById('counter-value') as HTMLElement);
