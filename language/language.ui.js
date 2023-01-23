
(function (exports) {

    function buildDisplay(lang, txt){
        let border = document.createElement('div');
        border.className = 'lc-container';
        border.innerHTML = '('+lang.parent+'-'+lang.id+'): '+txt;
        return border;
    }
    
    exports.buildDisplay = buildDisplay;

})(typeof exports === 'undefined' ? this['language_ui'] = {} : exports);