document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Download CV Functionality
    const downloadCV = document.getElementById('downloadCV');
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = 'assets/docs/Ashiqur_Rahman_Rony_CV.pdf';
        a.download = 'Ashiqur_Rahman_Rony_CV.pdf';
        a.click();
    };

    downloadCV?.addEventListener('click', handleDownload);
});