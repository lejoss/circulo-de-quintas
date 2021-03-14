import { useState } from 'react';
import { major, minor, MAJOR_CIRCLE, MINOR_CIRCLE } from './scales'
// import { seqOnce } from './tone'
import CircleOfFifhts from './components/CircleOfFifhts';
import MajorCircle from './components/MajorCircle';
import MinorCircle from './components/MinorCircle';
import ScalePanel from './components/ScalePanel';
import Tone from './components/Tone';

import './App.css';

function App() {
  let [scale, setScale] = useState([]);
  let [title, setTitle] = useState('');

  function onClickTone(tone) {
    if (tone.includes('m')) {
      if (tone.includes('#') || tone.includes('b')) {
        setScale(minor(tone.substring(0, 2)));
        setTitle(`${tone.substring(0, 2)} Minor`)
        return
      }
      setScale(minor(tone.charAt(0)))
      setTitle(`${tone.charAt(0)} Minor`)
      return
    }

    setScale(major(tone))
    setTitle(`${tone.substring(0, 2)} Major`)
    return
  }

  // function play() {
  //   return seqOnce(scale);
  // }

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
        <p className="scale-title">{title}</p>
        <p className="scale-text">{scale}</p>
      </ScalePanel>
    </div>
  );
}

export default App;
