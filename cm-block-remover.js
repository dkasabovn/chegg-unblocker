function removeBlock() {
	let nonOverflow = document.querySelectorAll('.cs-dm-block');
	nonOverflow.forEach(element => {
		element.classList.toggle('cs-dm-block');
	});
	let blockingModal = document.getElementById("C-common-devicemanager-block");
	if (blockingModal) {
		blockingModal.remove();
	}

	let nonOverflowMac = document.querySelectorAll('.cs-dm-add');
	nonOverflowMac.forEach(element => {
		element.classList.toggle('cs-dm-add');
	});
	let blockingModalMac = document.getElementById("C-common-devicemanager-add");
	if (blockingModalMac) {
		blockingModalMac.remove();
	}
}

window.addEventListener("load", removeBlock, false);
