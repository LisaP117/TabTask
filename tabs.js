class tabs {
	constructor(trigger, triggerParent) {
		this.trigger = document.querySelectorAll(trigger);
		this.triggerParent = document.querySelectorAll(triggerParent);
	}

	fireTabs(trigger, triggerParent) {
		for(let tt of this.trigger) {
			tt.addEventListener('click', this.onClick, false);
		}
	}

	removeActive() {
		for(let tp of this.triggerParent) {
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
