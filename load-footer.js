document.addEventListener("DOMContentLoaded", function () {
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      const footerContainer = document.getElementById('footer');
      footerContainer.innerHTML = html;

      // Extract and execute scripts inside fetched HTML
      footerContainer.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
          newScript.async = true;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch(error => console.error("Error loading footer:", error));
});
