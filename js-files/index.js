const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("chooseFile");
const fileName = document.getElementById('file-name');

document.getElementById('chooseFile').onclick = () => {
    realFileBtn.click();
}

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        fileName.value = realFileBtn.value.match( /[\/\\]([\w\d\s\.\-\(\)]+)$/ )[1];
    }
    else
    {
        fileName.innerHTML = "";
    }
});
