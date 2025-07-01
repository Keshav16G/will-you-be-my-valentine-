"use strict";

(function checkForUpdates() {
  var currentVersion, versionUrl, response, data, latestVersion, updateMessage;
  return regeneratorRuntime.async(function checkForUpdates$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          currentVersion = "1.0";
          versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(versionUrl));

        case 5:
          response = _context.sent;

          if (response.ok) {
            _context.next = 9;
            break;
          }

          console.warn("Could not fetch version information.");
          return _context.abrupt("return");

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;
          latestVersion = data.version;
          updateMessage = data.updateMessage;

          if (currentVersion !== latestVersion) {
            alert(updateMessage);
          } else {
            console.log("You are using the latest version.");
          }

          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](2);
          console.error("Error checking for updates:", _context.t0);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 17]]);
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/


var messages = ["Are you sure 🥹?", "Really sure 😥😥??", "Are you positive😢?", "Pookie please...🥺🥺", "Just think about it😕😕!", "If you say no, I will be really sad😢😢...", "I will be very saddddddd...", "I will be very very very sad😫😫😫...", "Ok fine, I will stop asking😭😭...", "Just kidding, say yes please! ❤️❤️❤️❤️"];
var messageIndex = 0;

function handleNoClick() {
  var noButton = document.querySelector('.no-button');
  var yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  var currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = "".concat(currentSize * 1.5, "px");
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
//# sourceMappingURL=script.dev.js.map
