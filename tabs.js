class tabs {
	constructor(trigger) {
		this.trigger = document.querySelectorAll(trigger);
	}

	fireTabs() {
		const go = this.onclick
		for(let tt of this.trigger) {
			tt.addEventListener('click', go, false);
		}
	}

	onclick() {
		const tabEl = this.parentNode;
		const triggerParent = document.querySelectorAll('.'+this.parentNode.classList[1]);
		for(let tp of triggerParent) {
			if (tp.classList.contains('isActive')) {
				tp.classList.remove('isActive');
			}
		}
		tabEl.classList.add('isActive');
	}
}

let ft = new tabs('.js-trigger');
ft.fireTabs();