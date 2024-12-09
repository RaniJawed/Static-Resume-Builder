// Helper function to toggle the visibility of a section's content
function toggleContent(section) {
    var content = section === null || section === void 0 ? void 0 : section.querySelector(".content");
    if (content) {
        content.style.display = content.style.display === "none" ? "block" : "none";
    }
}
// Get all section headers (h2 elements) and add event listeners to them
document.querySelectorAll("section h2").forEach(function (header) {
    var section = header.parentElement;
    header.addEventListener("click", function () { return toggleContent(section); });
});
