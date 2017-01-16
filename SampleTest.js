(function(exports) {
    "use strict";

    // the path to where the PDF worker files are
    CoreControls.setWorkerPath('WebViewer/lib/html5');

    window.runSampleTest = function() {
        function* main() {
            // To be filled
			try {
			var doc = yield PDFNet.PDFDoc.createFromURL("25102016-November.pdf");         // creates an empty pdf document
			doc.initSecurityHandler();                      // initializes security handler
			doc.lock();                                     // Locks all PNaCl operations on the document

			// insert user code after this point
			var pgnum = yield doc.getPageCount();
			alert("Test Complete! Your file has " + pgnum + " pages");

			} catch(err) {
				console.log(err.stack)
			}
        }
        PDFNet.runGeneratorWithCleanup(main());
        // Alt: PDFNet.runGeneratorWithoutCleanup(main()); // does not deallocate anything after finishing.
    }
})(window);