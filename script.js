document.addEventListener("DOMContentLoaded", () => {
  const buttons = [...document.querySelectorAll(".tab-button")];
  const panels = {
    yo: document.getElementById("panel-yo"),
    aficiones: document.getElementById("panel-aficiones"),
    social: document.getElementById("panel-social")
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.tab;
      buttons.forEach((item) => item.setAttribute("aria-selected", String(item === button)));
      Object.entries(panels).forEach(([key, panel]) => {
        const isActive = key === selected;
        panel.hidden = !isActive;
        panel.classList.toggle("active", isActive);
      });
    });
  });

  // Los perfiles que no se facilitaron quedan como enlaces configurables.
  document.querySelectorAll("[data-placeholder]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
        const name = link.dataset.placeholder;
        alert(`Añade tu enlace de ${name} en index.html para activarlo.`);
      }
    });
  });
});
