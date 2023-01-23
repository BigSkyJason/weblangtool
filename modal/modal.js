

// wrap our app as a module
(function (exports) {

	function ModalService(props = {}) {
		const lightbox = document.createElement('div');
		const titleblock = document.createElement('div');
		const content = document.createElement('div');
		const body = document.createElement('div');

		_buildDisplay(props.holder);

		function show(title,contentElement) {
			lightbox.className = 'modal-lightbox show';
			titleblock.innerHTML = "";
			titleblock.innerHTML = title;
			content.innerHTML = "";
			content.appendChild(contentElement);
		}
		function hide() {
			console.log('hiding');
			lightbox.className = 'modal-lightbox';
		}
		function _buildDisplay(holder) {
			// build lightbox
			lightbox.className = 'modal-lightbox';
			lightbox.onclick = hide;

			// build body
			body.className = 'modal-body';
			// build tab block
			titleblock.className = 'modal-title';
			// build scrollable content block
			content.className = 'modal-content';
			body.appendChild(titleblock);
			body.appendChild(content);
			body.onclick = function (evt) {
				evt.stopPropagation();
			}
			lightbox.appendChild(body);
			holder.appendChild(lightbox);
		}
		this.show = show;
		this.hide = hide;
	}

	function runTests() {
		let success = 0;
		let fail = 0;
		const service = new ModalService();
	}

	// define our exports for node based testing
	exports.runTests = runTests;
	exports.ModalService = ModalService;

	//end module wrap
})(typeof exports === 'undefined' ? this['modal'] = {} : exports);
