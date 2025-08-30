
function cv() {
    const enlace = document.createElement("a");
    enlace.href = "CV_Iago_Casas.pdf"; // ruta relativa al HTML
    enlace.download = "CV_Iago_Casas.pdf";
    enlace.target = "_blank";
    enlace.click();
}



