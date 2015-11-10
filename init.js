/* jshint evil:true */

(function() {
  var source = decodeURIComponent(location.hash.slice(1));

  [].forEach.call(document.querySelectorAll('.input-output'), function(pair) {
    var input = CodeMirror.fromTextArea(pair.querySelector('textarea:nth-of-type(1)'), {
      lineNumbers: true,
      smartIndent: false,
      indentWithTabs: false,
      tabSize: 2,
      autofocus: true,
      theme: 'default'
    });

    var output = CodeMirror.fromTextArea(pair.querySelector('textarea:nth-of-type(2)'), {
      lineNumbers: true,
      smartIndent: false,
      indentWithTabs: false,
      tabSize: 2,
      theme: 'default'
    });

    if (source) {
      input.setValue(source);
    }

    var errorContainer = pair.querySelector('.error-message');
    var convertTimeout;
    input.on('change', function() {
      if (convertTimeout) {
        clearTimeout(convertTimeout);
      }
      convertTimeout = setTimeout(convert, 500);
    });

    function convert() {
      var converted;
      try {
        source = input.getValue();
        location.hash = encodeURIComponent(source);
        converted = esnext.convert(source).code;
        output.setValue(converted);
        hideError();
      } catch (ex) {
        console.error('compile error:', ex);
        showError(ex.message);
      }
    }

    function showError(error) {
      errorContainer.innerHTML = '';
      errorContainer.appendChild(document.createTextNode(error));
      errorContainer.style.display = 'block';
    }

    function hideError() {
      errorContainer.style.display = '';
    }

    convert();
  });
})();
