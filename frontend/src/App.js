import { useState } from 'react';
import { major, minor, MAJOR_CIRCLE, MINOR_CIRCLE } from './scales'
import CircleOfFifhts from './components/CircleOfFifhts';
import MajorCircle from './components/MajorCircle';
import MinorCircle from './components/MinorCircle';
import ScalePanel from './components/ScalePanel';
import Tone from './components/Tone';
import './App.css';

function App() {
  const [scale, setScale] = useState([]);

  function onClickTone(tone) {
    if (tone.includes('m')) {
      if (tone.includes('#') || tone.includes('b')) {
        return setScale(minor(tone.substring(0, 2)))
      }
      return setScale(minor(tone.charAt(0)))
    }

    return setScale(major(tone))
  }

  return (
    <div className="App">
      <CircleOfFifhts>
        <MajorCircle>
          {MAJOR_CIRCLE.map(n => <Tone onClick={onClickTone} key={n} note={n} />)}
        </MajorCircle>
        <MinorCircle>
          {MINOR_CIRCLE.map(n => <Tone onClick={onClickTone} key={n} note={n} />)}
        </MinorCircle>
      </CircleOfFifhts>
      <ScalePanel>
        <p>{scale}</p>
      </ScalePanel>
    </div>
  );
}

export default App;
