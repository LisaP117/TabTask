const fireTabs = function() {
	const tabTrigger = document.querySelectorAll('.js-trigger');
	const tabParent = document.querySelectorAll('.js-tab');
	console.log(tabTrigger, tabParent);
	for(tt in tabTrigger) {
		let el = tabTrigger[tt];
		let tabEl = tabTrigger[tt].parentElement;

		//console.log(el, tabEl);

		el.addEventListener('click', (tabEl) => {
			el.onClick(tabEl);
		});
	}
}

const removeActive = (tabParent) => {
	for(tp in tabParent) {
		if (tabParent[tp].classList.contains('isActive')) {
			tabParent[tp].classList.remove('isActive');
		}
	}
}

const onClick = (tabEl) => {
	removeActive(tabParent);
	tabEl.classList.add('isActive');
}


window.onload = fireTabs();
