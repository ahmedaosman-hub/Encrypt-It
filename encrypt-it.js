/*
 * Starter file 
 */
(function () {
  "use strict";
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  function handleClick() {
    var inputTextArea = document.getElementById("input-text");
    var inputText = inputTextArea.value; 

    var shiftText = ShiftCipher(inputText);

    var resultParagraph = document.getElementById("result");

    resultParagraph.textContent = shiftText;
  }

  function ShiftCipher(text) {
    var encryptTexted = ""; 

    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      var encryptedCharCode;
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        if (charCode === 90 || charCode === 122) {
          encryptedCharCode = charCode - 25;
        } else {
          encryptedCharCode = charCode + 1; 
        }
        encryptTexted += String.fromCharCode(encryptedCharCode);
      } else {
        encryptTexted += text[i]; 
      }
    }
    return encryptTexted; 
  }
  


  function init() {
    var encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);
  }

  window.addEventListener("load", init);

})();
