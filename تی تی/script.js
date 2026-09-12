// ۱. انتخاب المان‌ها از DOM
const showFormBtn = document.getElementById('showFormBtn');
const loginForm = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');
const errorBox = document.getElementById('errorBox');

// ۲. نمایش فرم با کلیک روی دکمه اصلی
showFormBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

// ۳. اعتبارسنجی هنگام کلیک روی دکمه ارسال
submitBtn.addEventListener('click', () => {
  const fullName = document.getElementById('fullName').value.trim();
  const username = document.getElementById('username').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // الگوی شماره موبایل ایران (شروع با 09 و کلاً ۱۱ رقم)
  const phoneRegex = /^09\d{9}$/;

  // بررسی خالی نبودن نام
  if (fullName === '') {
    showError('لطفاً نام و نام خانوادگی را وارد کنید.');
    return;
  }

  // بررسی طول نام کاربری (حداقل ۴ کاراکتر)
  if (username.length < 4) {
    showError('نام کاربری باید حداقل ۴ کاراکتر باشد.');
    return;
  }

  // بررسی فرمت شماره موبایل
  if (!phoneRegex.test(phone)) {
    showError('شماره موبایل معتبر نیست! (باید ۱۱ رقم باشد و با 09 شروع شود)');
    return;
  }

  // اگر همه ورودی‌ها درست بودند:
  errorBox.style.display = 'none';
  alert('اطلاعات با موفقیت ثبت شد!');
});

// تابع کمکی برای نمایش خطا
function showError(message) {
  errorBox.textContent = message;
  errorBox.style.display = 'block';
}