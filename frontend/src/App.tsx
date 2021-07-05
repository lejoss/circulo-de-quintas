import { useState } from 'react';
import { major, minor, MAJOR_CIRCLE, MINOR_CIRCLE, majorGrades, minorGrades } from './scales'
// import { seqOnce } from './tone'
import CircleOfFifhts from './components/CircleOfFifhts';
import MajorCircle from './components/MajorCircle';
import MinorCircle from './components/MinorCircle';
import ScalePanel from './components/ScalePanel';
import Scale from './components/Scale';
import Title from './components/Title';
import Tone from './components/Tone';

import './App.css';

function App() {
  let [majorScale, setMajorScale] = useState(null);
  let [minorScale, setMinorScale] = useState(null);
  let [title, setTitle] = useState('');

  function onClickToneSetScale(tone: String) {
    if (tone.includes('m')) {
      if (tone.includes('#') || tone.includes('b')) {
        setMinorScale(minor(tone.substring(0, 2)));
        setMajorScale(major(tone.substring(0, 2)))
        setTitle(`${tone.substring(0, 2)} Minor`)
        return
      }
      setMinorScale(minor(tone.charAt(0)))
      setMajorScale(major(tone.charAt(0)))
      setTitle(`${tone.charAt(0)} Minor`)
      return
    }

    setMajorScale(major(tone))
    setMinorScale(minor(tone))
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
          {MAJOR_CIRCLE.map(n => <Tone onClick={onClickToneSetScale} key={n} note={n} />)}
        </MajorCircle>
        <MinorCircle>
          {MINOR_CIRCLE.map(n => <Tone onClick={onClickToneSetScale} key={n} note={n} />)}
        </MinorCircle>
      </CircleOfFifhts>
      <ScalePanel>
        <Title>{title.charAt(0)}</Title>
        <Scale type="maj" grades={majorGrades}>{majorScale}</Scale>
        <Scale type="min" grades={minorGrades}>{minorScale}</Scale>
      </ScalePanel>
    </div>
  );
}

export default App;
