const changeColorBtn = document.getElementById("changeColorBtn");
let isDarkMode = false; 

if (changeColorBtn) {
    changeColorBtn.addEventListener("click", function() {
        if (isDarkMode) {
            // Nếu đang là Dark Mode -> Chuyển về Light Mode
            document.body.style.backgroundColor = "#ffffff"; 
            document.body.style.color = "#000000";
            isDarkMode = false; 
        } else {
            // Nếu đang là Light Mode -> Chuyển sang Dark Mode
            document.body.style.backgroundColor = "#000000";            
            document.body.style.color = "#ffffff";
            isDarkMode = true;
        }
    });
}