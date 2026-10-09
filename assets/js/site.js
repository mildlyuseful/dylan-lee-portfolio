// Video facades, image lightbox, and copy buttons. No dependencies.
(function () {
  // Swap a YouTube poster button for the real player only when clicked.
  document.querySelectorAll("button.video[data-yt]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var start = btn.dataset.start ? "&start=" + btn.dataset.start : "";
      var frame = document.createElement("div");
      frame.className = "video-frame";
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + btn.dataset.yt + "?autoplay=1&rel=0" + start;
      iframe.title = btn.getAttribute("aria-label") || "Project video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      frame.appendChild(iframe);
      btn.replaceWith(frame);
    });
  });

  // Click any figure image to view it full size.
  var box = document.getElementById("lightbox");
  if (box && typeof box.showModal === "function") {
    var big = box.querySelector("img");
    var cap = box.querySelector("p");
    document.querySelectorAll(".plate img").forEach(function (img) {
      img.addEventListener("click", function () {
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        var fc = img.closest("figure") && img.closest("figure").querySelector("figcaption");
        cap.textContent = fc ? fc.textContent : img.alt;
        box.showModal();
      });
    });
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("close")) box.close();
    });
  }

  // Copy email / phone to the clipboard; fall back to selecting the text.
  document.querySelectorAll("button.copy[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.dataset.copy;
      var done = function () {
        var old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = old; }, 1400);
      };
      var select = function () {
        var target = btn.parentElement.querySelector(".val");
        if (!target) return;
        var range = document.createRange();
        range.selectNodeContents(target);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, select);
      } else {
        select();
      }
    });
  });
})();
