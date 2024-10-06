            document.addEventListener('DOMContentLoaded', function () {
                const tabs = document.querySelectorAll('.nav-link');
                const individualsContent = document.getElementById('individualsContent');
                const businessesContent = document.getElementById('businessesContent');

                individualsContent.style.display = 'block';
                businessesContent.style.display = 'none';

                tabs.forEach(tab => {
                    tab.addEventListener('click', function (e) {
                        e.preventDefault();


                        tabs.forEach(t => t.classList.remove('active'));
                        this.classList.add('active');

                        if (this.textContent === "For Individuals") {
                            individualsContent.style.display = 'block';
                            businessesContent.style.display = 'none';
                        } else if (this.textContent === "For Businesses") {
                            individualsContent.style.display = 'none';
                            businessesContent.style.display = 'block';
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