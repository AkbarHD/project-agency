document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-link');
    const individualsContent = document.getElementById('individualsContent');
    const CompanyProfileContent = document.getElementById('CompanyProfileContent');
    const PortfolioContent = document.getElementById('PortfolioContent');

    // Set tampilan awal
    individualsContent.style.display = 'block';
    CompanyProfileContent.style.display = 'none';
    PortfolioContent.style.display = 'none';

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Hapus kelas active dari semua tab
            tabs.forEach(t => t.classList.remove('active'));
            // Tambah kelas active ke tab yang diklik
            this.classList.add('active');

            // Tampilkan konten sesuai tab yang dipilih
            switch (this.textContent.trim()) {
                case "For Individuals":
                    individualsContent.style.display = 'block';
                    CompanyProfileContent.style.display = 'none';
                    PortfolioContent.style.display = 'none';
                    break;
                case "Company Profile":
                    individualsContent.style.display = 'none';
                    CompanyProfileContent.style.display = 'block';
                    PortfolioContent.style.display = 'none';
                    break;
                case "Portfolio":
                    individualsContent.style.display = 'none';
                    CompanyProfileContent.style.display = 'none';
                    PortfolioContent.style.display = 'block';
                    break;
            }
        });
    });

    Fancybox.bind("[data-fancybox]", {
        buttons: [
                "zoom",
                "slideShow",
                "fullScreen",
                "close"
            ],
            wheel: false,
            transitionEffect: "slide",
        Image: {
            zoom: true,
        },
    });
});