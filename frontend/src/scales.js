import scale from 'music-scale';

const MAJOR_CIRCLE = ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
const MINOR_CIRCLE = ['Am', 'Em', 'Bm', 'F#m', 'C#m', 'G#m', 'Ebm', 'Bbm', 'Fm', 'Cm', 'Gm', 'Dm'];

const major = tone => scale('C D E F G A B', tone);
const minor = tone => scale('A B C D E F G', tone);

export {
	MAJOR_CIRCLE,
	MINOR_CIRCLE,
	major,
	minor
}