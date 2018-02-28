const util = require('util');
const exec = util.promisify(require('child_process').exec);

const analyze = (name = 'audio') => {
	exec(`$(pwd)/rhubarb/rhubarb -d $(pwd)/inbox/${name}.txt -f json -o $(pwd)/outbox/${name}.json $(pwd)/inbox/${name}.wav`)
		.then(() => {
			console.log('successfully analyzed audio file');
		})
		.catch((err) => {
			console.log(`err: ${err}`);
		})
}

analyze('whatATwist');
// analyze('wrekt');
// analyze('firstOfAll');
// analyze('gotIm');