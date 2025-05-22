
 
const pantalla = document.querySelector(".pantalla");
let [n1, n2, op] = ["", "", ""];
let esperando = false;

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;

    if (btn.id === "netejar") return pantalla.textContent = n1 = n2 = op = "", esperando = false, "0";
    if (btn.id === "borrar") {
      if (!esperando) n1 = n1.slice(0, -1), pantalla.textContent = n1 || "0";
      else n2 = n2.slice(0, -1), pantalla.textContent = n2 || "0";
      return;
    }

    if (btn.id === "igual") {
      if (n1 && op && n2) {
        const a = parseFloat(n1), b = parseFloat(n2);
        let r = { "+": a + b, "-": a - b, "*": a * b, "/": b ? a / b : "Error" }[op];
        pantalla.textContent = r;
        n1 = r.toString(), n2 = op = "", esperando = false;
      }
      return;
    }

    if (btn.classList.contains("operador") && !["C", "←", ","].includes(val)) {
      if (n1) op = val, esperando = true;
      return;
    }

    const entrada = val === "," ? "." : val;
    if (!esperando) n1 += entrada, pantalla.textContent = n1;
    else n2 += entrada, pantalla.textContent = n2;
  });
});
