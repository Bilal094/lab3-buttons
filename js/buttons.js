document.body.style.backgroundColor = "gray";

buttonNames = ["Button 1", "Button 2", "Button 3"];
buttonColors = ["red", "blue", "green"];

panel = document.getElementById("container");
panel.style.backgroundColor = "white";
panel.style.margin = "auto";
panel.style.width = "30%";
panel.style.justifyContent = "center";
panel.style.display = "flex";

buttonNames.forEach((button, index) => {
    var btn = document.createElement("button");
    btn.innerText = button;
    btn.style.padding = "20px";
    btn.style.margin = "10px";
    btn.style.alignItems = "center";
    btn.style.backgroundColor = buttonColors[index];

    btn.addEventListener("click", function() {
        background(index);
    });
    
    panel.appendChild(btn);
});

function background(color) {
    document.body.style.backgroundColor = buttonColors[color];
}