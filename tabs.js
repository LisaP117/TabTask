fireTabs() => {
	const tabTrigger = document.querySelectorAll('.js-trigger');
	const tabParent = document.querySelectorAll('.js-tab');

	for(tt in tabTrigger) {
		let tabEl = tabTrigger[tt].parentElement;
		tabTrigger[tt].addEventListener('click', (tabEl) => {
			this.onClick(tabEl)
		});
	}

	onClick(tabEl) => {
		if (tabEl.classList.contains('isActive')) {
			
		}
	}
}


window.onload = fireTabs();
