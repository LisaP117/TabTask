class tabs {
	constructor(trigger/*, triggerParent*/) {
		this.trigger = document.querySelectorAll(trigger);
		//this.triggerParent = document.querySelectorAll(triggerParent);
	}

	fireTabs() {
		for(let tt of this.trigger) {
			tt.addEventListener('click', this.onClick, false);
		}
	}

	onClick() {
		const tabEl = this.parentNode;
		const sibEls = tabEl.siblings;
		this.removeActive(sibEls);
		tabEl.classList.add('isActive');
	}

	removeActive(sibEls) {
		for(let tp of sibEls) {
			if (tp.classList.contains('isActive')) {
				tp.classList.remove('isActive');
			}
		}
	}
}

let ft = new tabs('.js-trigger'/*,'.js-tab'*/);
ft.fireTabs();
