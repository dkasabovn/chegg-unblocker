function removeBlock() {
	let nonOverflow = document.querySelectorAll('.cs-dm-block');
	nonOverflow.forEach(element => {
		element.classList.toggle('cs-dm-block');
	});
	let blockingModal = document.getElementById("C-common-devicemanager-block");
	blockingModal.remove();
}

window.addEventListener("load", removeBlock, false);
