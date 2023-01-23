(function (exports) {

    const BASE_INSTANCE= {
        id: 0,
        parent: 0,
        phenomes: undefined,
        grammar: undefined,
        lexicon: undefined,
        isAlive: true
    };
    function generate(config={}) {        
        let baseConfig = JSON.parse(JSON.stringify(BASE_INSTANCE));
        let newInstance = baseConfig;
        let keys = Object.keys(config);
        for(let i = 0, iLen = keys.length; i < iLen; i++) {
            let thisKey = keys[i];
            newInstance[thisKey] = config[thisKey];
        }
        return newInstance;
    }
    function evolve(lang) {

        /*
        // choose type of evolution
        const KILL_LANGUAGE = 0;
        const SHIFT_SOUND = 1;
        // Phenome changes
	    const ADD_SOUND  = 2;
        const LOSE_SOUND = 3;
        const CHANGE_STRESS = 4;
        const SOUND_ASSIMILATE = 5;
	• Syllable shape change
	• Lose vowels in unstressed syllable
	• Drop the ha (like between vowels which can create dipthong
	• Assimilation when a sound changes to sound more like a sound around it. Unvoiced between vowels becomes voiced.
        // Syntax changes
        const WORD_ORDER_SHIFT = 6;
        const ADPOSITION_CHANGE = 7;
	• Word order shift
	• Adjective position change
	• Adjective derive change
	• Adposition change
	• Deviate word order
        // Grammar changes
        const PLURAL_MARKER = 8;
        const CHANGE_VALENCY = 9;
        const CHANGE_TENSE = 10;
	• Change plural marker
	• Change valency
	• Change tense
        // Lexicon changes
        const DERIVE_AFFIX = 11;
        const BORROW_WORD = 12;
        const NOUN_INCORPORATE = 13;
	• Derivational affix
	• Loan words
	• Noun incorporation
    */
        const CHANGES = [
            'KILL_LANGAUGE',
            'SHIFT_SOUND',
        ];

        let thisChange = CHANGES[Math.floor(Math.random() * CHANGES.length)];
        if (thisChange == 'KILL_LANGUAGE') {
            console.log('killing language');
            lang.isAlive = false;
        } else if (thisChange = 'SHIFT_SOUND') {
            console.log('doing a sound shift');
        }
    }

    function translate(raw) {
        let final = raw;
        return final;
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
    exports.evolve = evolve;
    exports.translate = translate;

    //end module wrap
})(typeof exports === 'undefined' ? this['language'] = {} : exports);