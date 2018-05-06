const fireTabs = function() {
	const tabTrigger = document.querySelectorAll('.js-trigger');
	const tabParent = document.querySelectorAll('.js-tab');

	for(tt of tabTrigger) {
		let el = tt;
		let tabEl = el.parentNode;

		console.log(tabEl);

		el.addEventListener('click', onClick(tabEl,tabParent), false);
	}
}

const removeActive = (tabParent) => {
	for(tp of tabParent) {
		if (tp.classList.contains('isActive')) {
			tp.classList.remove('isActive');
		}
	}
}

const onClick = (tabEl,tabParent) => {
	removeActive(tabParent);
	tabEl.classList.add('isActive');
}


window.onload = fireTabs();
