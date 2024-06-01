document.addEventListener("DOMContentLoaded", function() {
    const paginationLinks = document.querySelectorAll(".custom-pagination a");
    const prevLink = document.getElementById("prev");
    const nextLink = document.getElementById("next");

    let currentPage = parseInt(document.querySelector(".custom-pagination a.active").dataset.page);

    paginationLinks.forEach(link => {
        if (!link.classList.contains("prev") && !link.classList.contains("next")) {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                const page = parseInt(this.dataset.page);
                updateActivePage(page);
                loadPage(page);
            });
        }
    });

    prevLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            updateActivePage(prevPage);
            loadPage(prevPage);
        }
    });

    nextLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (currentPage < paginationLinks.length - 2) {
            const nextPage = currentPage + 1;
            updateActivePage(nextPage);
            loadPage(nextPage);
        }
    });

    function updateActivePage(pageNumber) {
        paginationLinks.forEach(link => {
            link.classList.remove("active");
        });
        const link = document.querySelector(`.custom-pagination a[data-page="${pageNumber}"]`);
        if (link) {
            link.classList.add("active");
            currentPage = pageNumber;
        }
    }

    function loadPage(pageNumber) {
        const link = document.querySelector(`.custom-pagination a[data-page="${pageNumber}"]`);
        if (link) {
            // Simulate page loading
            console.log(`Loading page ${pageNumber}`);
        }
    }
});
