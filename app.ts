// Helper function to toggle the visibility of a section's content
function toggleContent(section: HTMLElement | null): void {
    const content = section?.querySelector(".content") as HTMLElement | null;
    if (content) {
        content.style.display = content.style.display === "none" ? "block" : "none";
    }
}

// Get all section headers (h2 elements) and add event listeners to them
document.querySelectorAll("section h2").forEach((header) => {
    const section = header.parentElement as HTMLElement | null;
    header.addEventListener("click", () => toggleContent(section));
});