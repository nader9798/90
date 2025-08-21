function CalcTime(dur) {
    ShowDuration = "";
}

function StartTimer() {
    StartTime = Date.now();
}

function EndTimer() {
    EndTime = Date.now();
    CalcTime(EndTime - StartTime);

   // عند نجاح التفعيل، نفذ هذا الكود:
document.body.classList.add('activated'); // تغيّر الخلفية
document.getElementById('spinner').style.display = 'none'; // تخفي دائرة التحميل
document.getElementById('message').innerText = "تم التفعيل بنجاح!";


}