import ClipboardJS from "clipboard";

export const clipboard = new ClipboardJS('.clipboard');

clipboard.on('success', function(e) {
	const trigger = e.trigger;
	const parent = trigger.parentNode;

	parent.classList.add('--copied');

	setTimeout(() => {
		parent.classList.remove('--copied');
	}, 1300);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
