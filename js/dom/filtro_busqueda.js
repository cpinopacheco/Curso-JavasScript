const d = document;

export default function searchFilters(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      if (e.key === "Escape") {
        e.target.value = "";
      }

      d.querySelectorAll(selector).forEach((el) => {
        const inputTextValue = e.target.value.toLowerCase();
        el.textContent.toLowerCase().includes(inputTextValue)
          ? el.classList.remove("filter")
          : el.classList.add("filter");
      });
    }
  });
}
