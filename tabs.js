class tabs {
	constructor(trigger, triggerParent, tt, tp) {
		this.trigger = document.querySelectorAll(trigger);
		this.triggerParent = document.querySelectorAll(triggerParent);
		this.tt = tt;
		this.tp = tp;
	}

	fireTabs(trigger, triggerParent, tt, tp) {
		//this.removeActive;
		for(tt of this.trigger) {
			tt.addEventListener('click', this.onClick, false);
		}
	}

	removeActive() {
		for(this.tp of this.triggerParent) {
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

let ft = new tabs('.js-trigger','.js-tab',0,0);
ft.fireTabs();
