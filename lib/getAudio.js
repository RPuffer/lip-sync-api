const util = require('util');
const exec = util.promisify(require('child_process').exec);

const getAudio = (path, type = 'mp3') => {
	exec(`curl ${path} --output $(pwd)/inbox/audio.${type}`)
		.then(() => {
			console.log('successfully loaded audio file');
		})
		.catch((err) => {
			console.log(`err: ${err}`);
		})
}

const clearAudio = () => {
	exec(`rm $(pwd)/inbox/audio*`)
		.then(() => {
			console.log('successfully removed audio file');
		})
		.catch((err) => {
			console.log(`err: ${err}`);
		})
}

getAudio('https://d2dkolid8onc3s.cloudfront.net/whatATwist.mp3');