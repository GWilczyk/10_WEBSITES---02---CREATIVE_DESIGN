document.querySelectorAll('.story-btn').forEach(btn => {
	btn.addEventListener('click', event => {
		btn.classList.toggle('changed');
		btn.nextElementSibling.classList.toggle('changed');
	});
});
