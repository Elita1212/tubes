const menuToggle = document.getElementById('menuToggle');
const menuNav = document.getElementById('menuNav');
if (menuToggle && menuNav) {
    menuToggle.addEventListener('click', () => menuNav.classList.toggle('buka'));
}

const formDaftar = document.getElementById('formDaftar');
const pesanDaftar = document.getElementById('pesanDaftar');
if (formDaftar && pesanDaftar) {
    formDaftar.addEventListener('submit', (e) => {
        e.preventDefault();
        pesanDaftar.className = 'pesan sukses';
        pesanDaftar.textContent = 'Form daftar tervalidasi (mode simulasi front-end).';
    });
}

const formLogin = document.getElementById('formLogin');
const pesanLogin = document.getElementById('pesanLogin');
if (formLogin && pesanLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        pesanLogin.className = 'pesan sukses';
        pesanLogin.textContent = 'Form login tervalidasi (mode simulasi front-end).';
    });
}