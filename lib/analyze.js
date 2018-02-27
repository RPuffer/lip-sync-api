const util = require('util');
const exec = util.promisify(require('child_process').exec);

const analyze = () => {
	exec(`$(pwd)/rhubarb/rhubarb -d $(pwd)/inbox/dialogue.txt -f json -o $(pwd)/outbox/timing.json $(pwd)/inbox/audio.wav`)
		.then(() => {
			console.log('successfully analyzed audio file');
		})
		.catch((err) => {
			console.log(`err: ${err}`);
		})
}

analyze();