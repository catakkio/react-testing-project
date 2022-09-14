import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const newBtnColor = btnColor === 'red' ? 'blue' : 'red';
  const changeBtnColor = () => setBtnColor(newBtnColor);

  const btnBackground = btnColor && btnDisabled ? 'grey' : btnColor;
  return (
    <>
      <button
        type="button"
        style={{ backgroundColor: btnBackground }}
        onClick={changeBtnColor}
        disabled={btnDisabled}
      >
        Change to
        {' '}
        {newBtnColor}
      </button>

      <input
        id="disable-btn-checkbox"
        type="checkbox"
        onChange={() => setBtnDisabled(!btnDisabled)}
        defaultChecked={btnDisabled}
        aria-checked={btnDisabled}
      />
      {/* <label htmlFor="disable-btn-checkbox"> Disable btn </label> */}
    </>
  );
}

export default App;
