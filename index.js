window.onload = () => {
    let chosen_country = "";

    setTimeout(() => {
        chosen_country = prompt("Enter a country name: ");

        if (chosen_country === "canada") {
            const svg = document.getElementById("countries-svg").contentDocument;
            const canada_svg = svg.getElementById("CA");
    
            canada_svg.style.fill = canada_svg.style.fill === "green" ? "black" : "green";
        }
    }, 2000);
}
