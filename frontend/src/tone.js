import * as Tone from 'tone';
Tone.Transport.start();
Tone.Transport.bpm.value = 70;

export const seqOnce = function (scale) {
	const formattedScale = scale.map(n => n + '4')
	const synth = new Tone.Synth().toDestination();
	const seq = new Tone.Sequence((time, note) => {
		if (note === 'END') {
			return seq.stop();
		}

		return synth.triggerAttackRelease(note, '8n', time);

	}, [...formattedScale, 'END'], '4n').start(0)

}




