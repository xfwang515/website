(function () {
  "use strict";

  // 每款游戏的公开名称和包名只在这里维护，避免页面各处出现不一致。
  var games = {
    bubblepenguin: {
      name: "Bubble Penguin: Bubble Shooter",
      packageName: "com.coolgc.bubblepenguin"
    },
    dominopenguin: {
      name: "Domino Penguin: Merge & Match",
      packageName: "com.coolgc.dominopenguin"
    },
    sandflow: {
      name: "Sand Bucket Jam",
      packageName: "com.coolgc.sandflow"
    },
    colorblock: {
      name: "Color Block Escape",
      packageName: "com.coolgc.colorblock"
    },
    smashfest: {
      name: "Smash Kingdom",
      packageName: "com.coolgc.smashfest"
    },
    gemsort: {
      name: "Jewel Block Sort: Color Puzzle",
      packageName: "com.coolgc.gemsort"
    },
    "fruit-orb-factory": {
      name: "Fruit Orb Factory",
      packageName: "com.coolgc.fruit.orb.factory"
    },
    fruitsplash: {
      name: "Fruit Splash: Home Makeover",
      packageName: "com.coolgc.fruitsplash"
    },
    homedesigner: {
      name: "Lila’s Dream Home: Match 3",
      packageName: "com.coolgc.homedesigner"
    },
    puzzlestories: {
      name: "Puzzle Stories: Jigsaw Puzzles",
      packageName: "com.coolgc.puzzlestoies"
    },
    bubblesquirrel: {
      name: "Treetop Pop: Rescue & Rebuild",
      packageName: "com.coolgc.bubblesquirrel"
    }
  };

  var form = document.getElementById("deletion-request-form");
  var gameSelect = document.getElementById("game-select");
  var otherGameFields = document.getElementById("other-game-fields");
  var otherGameName = document.getElementById("other-game-name");
  var otherPackageName = document.getElementById("other-package-name");
  var selectedGameName = document.getElementById("selected-game-name");
  var selectedPackageName = document.getElementById("selected-package-name");
  var formError = document.getElementById("form-error");

  // 根据选择结果生成统一的游戏资料，供页面摘要和邮件正文共同使用。
  function getSelectedGame() {
    if (gameSelect.value === "other") {
      return {
        name: otherGameName.value.trim(),
        packageName: otherPackageName.value.trim() || "Not provided"
      };
    }

    return games[gameSelect.value] || null;
  }

  function updateGameSummary() {
    var selectedGame = getSelectedGame();
    var isOtherGame = gameSelect.value === "other";

    otherGameFields.hidden = !isOtherGame;
    otherGameName.required = isOtherGame;

    if (!selectedGame || !selectedGame.name) {
      selectedGameName.textContent = isOtherGame ? "Enter your Coolgc game" : "Choose your Coolgc game";
      selectedPackageName.textContent = "Not selected";
      return;
    }

    selectedGameName.textContent = selectedGame.name;
    selectedPackageName.textContent = selectedGame.packageName;
  }

  function showError(message) {
    formError.textContent = message;
    formError.hidden = false;
    formError.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function hideError() {
    formError.hidden = true;
    formError.textContent = "";
  }

  // 只构造 mailto 链接；用户仍需在自己的邮件应用中检查并主动发送请求。
  function openDeletionEmail(event) {
    event.preventDefault();
    hideError();

    if (!form.checkValidity()) {
      form.reportValidity();
      showError("Please complete the required game, player ID, and contact email fields.");
      return;
    }

    var selectedGame = getSelectedGame();
    var requestType = form.querySelector('input[name="request-type"]:checked').value;
    var requestTypeText = requestType === "account"
      ? "Delete my account and associated data"
      : "Delete selected data only";
    var playerId = document.getElementById("player-id").value.trim();
    var contactEmail = document.getElementById("contact-email").value.trim();
    var requestDetails = document.getElementById("request-details").value.trim() || "None provided";
    var subject = "Data Deletion Request - " + selectedGame.name;
    var body = [
      "Hello Coolgc Privacy Team,",
      "",
      "I would like to request deletion of my game data.",
      "",
      "Game: " + selectedGame.name,
      "Android package: " + selectedGame.packageName,
      "Request type: " + requestTypeText,
      "Player ID or account ID: " + playerId,
      "Contact email: " + contactEmail,
      "Additional details: " + requestDetails,
      "",
      "I understand that deletion is permanent and may remove access to game progress and virtual items.",
      "Please tell me if you need limited additional information to verify account ownership.",
      "",
      "Thank you."
    ].join("\n");

    window.location.href = "mailto:privacy@coolgc.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  // Play Console 可以使用 ?app=gemsort，让审核人员直接看到匹配的游戏名称和包名。
  function applyGameFromUrl() {
    var appKey = new URLSearchParams(window.location.search).get("app");

    if (appKey && games[appKey]) {
      gameSelect.value = appKey;
    }

    updateGameSummary();
  }

  gameSelect.addEventListener("change", updateGameSummary);
  otherGameName.addEventListener("input", updateGameSummary);
  otherPackageName.addEventListener("input", updateGameSummary);
  form.addEventListener("submit", openDeletionEmail);

  applyGameFromUrl();
}());
