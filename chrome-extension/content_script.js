
window.addEventListener('click', evt => {
    // If event is fired by user's operation then isTrusted == true.
    // Requires Chrome 46.0 or Greater
    // https://developer.mozilla.org/ja/docs/Web/API/Event/isTrusted
    if (!evt.isTrusted) return;
    let target = evt.target;
    while (target && target.tagName.toLowerCase() !== 'a' && target.tagName.toLowerCase() !== 'area') {
        target = target.parentElement;
    }


    if (target) {
        // check for baseVal of svg a tag's href-SVGAnimatedString
        const url = target instanceof SVGAElement ? target.href.baseVal : target.href;
        
        //New function to listen for clicks which contain http and append or remove http for file link functionality
        if (url.startsWith('http://file://'))
            try {
                
            }


        if (url.startsWith('file://')) if (url.includes('.121systems.com')) {
            evt.preventDefault();
            // Catch the about:blank#blocked default behaviour
            try {
                chrome.runtime.sendMessage({
                    method: 'openLocalFile',
                    localFileUrl: url,
                });
            } catch (e) { }
        } else if (url.startsWith('file://192.168.')) {
            evt.preventDefault();
            // Catch the about:blank#blocked default behaviour
            try {
                chrome.runtime.sendMessage({
                    method: 'openLocalFile',
                    localFileUrl: url,
                });
            } catch (e) { }
        } else if (url.startsWith('file://srvfps')) {
			evt.preventDefault();
			// Catch the about:blank#blocked default behaviour
			try {
				chrome.runtime.sendMessage({
					method: 'openLocalFile',
					localFileUrl: url,
				});
			} catch (e) {}
		} 

    }

}, {
    capture: true,
})
;