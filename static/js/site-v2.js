(function () {
  "use strict";

  var menuButton = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-site-menu]");

  // 在窄屏上切换导航，并同步无障碍展开状态。
  function setMenuState(isOpen) {
    if (!menuButton || !menu) {
      return;
    }

    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menu.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenuState(false);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 820) {
        setMenuState(false);
      }
    });
  }

  document.querySelectorAll("[data-language-choice]").forEach(function (link) {
    link.addEventListener("click", function () {
      try {
        localStorage.setItem("coolgc_language", link.getAttribute("data-language-choice"));
      } catch (error) {
        // 本地偏好不可用时，普通链接仍然可以完成语言切换。
      }
    });
  });

  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });
}());
