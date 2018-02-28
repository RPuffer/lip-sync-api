$(document).ready(function () {

	////////////////////////// WHAT A TWIST ////////////////////////////////////////////////////////

	const whatATwist = document.getElementById('whatATwistAudio');
	const image = document.getElementById('myImage');

	function animateWhatATwist() {
		let time = whatATwist.currentTime;
		console.log(`Current audio time: ${whatATwist.currentTime}`);
		twistTiming.forEach((item) => {
			if (item.start < time && time < item.end) image.src = `/images/${item.value}.png`;
		})
		if (!whatATwist.ended) window.requestAnimationFrame(animateWhatATwist);
	}

	function playWhatATwist() {
		whatATwist.play();
		animateWhatATwist();
	}

	document.getElementById('whatATwistBtn').onclick = playWhatATwist;

	////////////////////////// FIRST OF ALL ////////////////////////////////////////////////////////

	const firstOfAll = document.getElementById('firstOfAllAudio');
	const image2 = document.getElementById('myImage2');


	function animateFirstOfAll() {
		let time = firstOfAll.currentTime;
		console.log(`Current audio time: ${firstOfAll.currentTime}`);
		firstOfAllTiming.forEach((item) => {
			if (item.start < time && time < item.end) image2.src = `/images/${item.value}.png`;
		})
		if (!firstOfAll.ended) window.requestAnimationFrame(animateFirstOfAll);
	}

	function playFirstOfAll() {
		firstOfAll.play();
		animateFirstOfAll();
	}

	document.getElementById('firstOfAllBtn').onclick = playFirstOfAll;

	////////////////////////// WREKT ////////////////////////////////////////////////////////

	const wrekt = document.getElementById('wrektAudio');
	const image3 = document.getElementById('myImage3');


	function animateWrekt() {
		let time = wrekt.currentTime;
		console.log(`Current audio time: ${wrekt.currentTime}`);
		wrektTiming.forEach((item) => {
			if (item.start < time && time < item.end) image3.src = `/images/${item.value}.png`;
		})
		if (!wrekt.ended) window.requestAnimationFrame(animateWrekt);
	}

	function playWrekt() {
		wrekt.play();
		animateWrekt();
	}

	document.getElementById('wrektBtn').onclick = playWrekt;

	////////////////////////// GOT EEEM ////////////////////////////////////////////////////////

	const gotIm = document.getElementById('gotImAudio');
	const image4 = document.getElementById('myImage4');

	function animateGotIm() {
		let time = gotIm.currentTime;
		console.log(`Current audio time: ${gotIm.currentTime}`);
		gotImTiming.forEach((item) => {
			if (item.start < time && time < item.end) image4.src = `/images/${item.value}.png`;
		})
		if (!gotIm.ended) window.requestAnimationFrame(animateGotIm);
	}

	function playGotIm() {
		gotIm.play();
		animateGotIm();
	}

	document.getElementById('gotImBtn').onclick = playGotIm;
})