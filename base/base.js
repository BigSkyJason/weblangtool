(function (exports) {

    const BASE_INSTANCE= {

    };
    function generate(config={}) {
        let newInstance = JSON.parse(JSON.stringify(BASE_INSTANCE));

        return newInstance;
    }

    /**
     * Testing block contains tests for each function and calculates pass/fails
     */
    function runTests() {
        let success = 0;
        let fail = 0;
        function testInstance() {
            const config = {

            };
            const newInstance = generate(config);
            return newInstance;
        }

        function test_generate() {
            let newInstance = generate();
            if (newInstance) {
                success++;
            } else {
                console.error('Failed to create new Base',newInstance);
                fail++;
            }
        }

        // Print output
        test_generate();

        console.log('tests run:', success + fail, ' success:', success, ' failed:', fail);
    }

    exports.runTests = runTests;
    exports.generate = generate;

    //end module wrap
})(typeof exports === 'undefined' ? this['base'] = {} : exports);