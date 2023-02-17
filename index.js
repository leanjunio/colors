document.getElementById("countries-svg").addEventListener("load", () => {
  const svg = document.getElementById("countries-svg").contentDocument;
  const canada = svg.getElementById("CA");

  canada.addEventListener("mouseover", () => {
    canada.style.fill = "#4e4d4d";
  });

  canada.addEventListener("mouseleave", () => {
    canada.style.fill = "black";
  });

  canada.addEventListener("mousedown", () => {
    console.log("clicked");
    canada.style.fill = canada.style.fill === "green" ? "black" : "green";
  });
});
