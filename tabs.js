class tabs {
	constructor(trigger, triggerParent, tt, tp) {
		this.trigger = document.querySelectorAll(trigger);
		this.triggerParent = document.querySelectorAll(triggerParent);
		this.tt = tt;
		this.tp = tp;
	}

	fireTabs(trigger, triggerParent, tt, tp) {
		this.removeActive(this.triggerParent,this.tp);
		for(tt of this.trigger) {
			let tabEl = tt.parentNode;
			tt.addEventListener('click', this.onClick(tabEl), true);
		}
	}

	removeActive(triggerParent,tp) {
		for(tp of triggerParent) {
			if (tp.classList.contains('isActive')) {
				tp.classList.remove('isActive');
			}
		}
	}

	onClick(tabEl) {
		tabEl.classList.add('isActive');
	}
}

let ft = new tabs('.js-trigger','.js-tab',0,0);
ft.fireTabs();
