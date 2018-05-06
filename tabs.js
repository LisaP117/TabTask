class tabs {
	constructor(trigger, triggerParent) {
		this.trigger = document.querySelectorAll(trigger);
		this.triggerParent = document.querySelectorAll(triggerParent);
	}

	fireTabs() {
		for(let tt of this.trigger) {
			tt.addEventListener('click', this.onClick, false);
		}
		console.log(this.triggerParent);
	}

	removeActive(triggerParent) {
		for(let tp of triggerParent) {
			if (tp.classList.contains('isActive')) {
				tp.classList.remove('isActive');
			}
		}
	}

	onClick() {
		const tabEl = this.parentNode;
		tabEl.classList.add('isActive');
	}
}

let ft = new tabs('.js-trigger','.js-tab');
ft.fireTabs();
