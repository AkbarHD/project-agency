            document.addEventListener('DOMContentLoaded', function () {
                const tabs = document.querySelectorAll('.nav-link');
                const individualsContent = document.getElementById('individualsContent');
                const CompanyProfileContent = document.getElementById('CompanyProfileContent');

                individualsContent.style.display = 'block';
                CompanyProfileContent.style.display = 'none';

                tabs.forEach(tab => {
                    tab.addEventListener('click', function (e) {
                        e.preventDefault();


                        tabs.forEach(t => t.classList.remove('active'));
                        this.classList.add('active');

                        if (this.textContent === "For Individuals") {
                            individualsContent.style.display = 'block';
                            CompanyProfileContent.style.display = 'none';
                        } else if (this.textContent === "Company Profile") {
                            individualsContent.style.display = 'none';
                            CompanyProfileContent.style.display = 'block';
                        }
                    });
                });

                const videoModal = document.getElementById('videoModal');
                const videoFrame = videoModal.querySelector('iframe');

                videoModal.addEventListener('show.bs.modal', function () {
                    videoFrame.src = 'https://www.youtube.com/embed/Si4bwj3qyAY';
                });

                videoModal.addEventListener('hide.bs.modal', function () {
                    videoFrame.src = '';
                });
            });