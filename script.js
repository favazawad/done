document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const homeScreen = document.getElementById('home-screen');
    const ordersScreen = document.getElementById('orders-screen');
    const paymentScreen = document.getElementById('payment-screen');
    const otpSection = document.getElementById('otp-section');
    const sendOtpButton = document.getElementById('send-otp');

    // إرسال رمز التحقق
    sendOtpButton.addEventListener('click', () => {
        otpSection.classList.remove('hidden');
    });

    // تسجيل الدخول
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
    });

    // اختيار خدمة
    document.querySelectorAll('.service').forEach(button => {
        button.addEventListener('click', (e) => {
            const service = e.target.dataset.service;
            alert(`تم اختيار الخدمة: ${service}`);
            homeScreen.classList.add('hidden');
            ordersScreen.classList.remove('hidden');
        });
    });

    // طلب جديد
    const newRequestButton = document.getElementById('new-request');
    newRequestButton.addEventListener('click', () => {
        ordersScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
    });

    // إتمام الدفع
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('تم الدفع بنجاح!');
        paymentScreen.classList.add('hidden');
        homeScreen.classList.remove('hidden');
    });
});
