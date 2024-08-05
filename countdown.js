// 2. สร้างตัวแปรคงที่
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

// 3.4 refactor code ให้อ่านง่ายขึ้น รับค่าเป็น id กับ text ที่อยากจะ set ขึ้นหน้าจอ
function setEleInnerText(id, text) {
    const element = document.getElementById(id)
    element.innerText = text
}

// 3. สร้าง function countdown
function countdown() {
    // 3.1 สร้างวันที่ปัจจุบัน และใช้ getTime() เพื่อดึง unix timestamp ปัจจุบันออกมา
    const now = new Date().getTime()
    // 3.2 สร้างวันสิ้นปี เพื่อกำหนดวันที่ใช้นับถอยหลัง และใช้ getTime() เพื่อดึง unix timestamp วันสิ้นปีออกมา
    const newYear = new Date('December 31, 2024 23:59:59').getTime()
    // 3.3 หาความต่างระหว่างวันสิ้นปีกับวันที่ปัจจุบัน ต่างกันเท่าไหร่ และจะเอาค่านี้ไปหาเป็น days, hours, mins, secs
    const timeLeft = newYear - now
    // 3.4 หา days, hours, mins, secs โดย refactor เป็น function setEleInnerText
    setEleInnerText("days", Math.floor(timeLeft / day))
    setEleInnerText("hours", Math.floor((timeLeft % day) / hour))
    setEleInnerText("minutes", Math.floor((timeLeft % hour) / minute))
    setEleInnerText("seconds", Math.floor((timeLeft % minute) / second))

}

// 1. สร้าง function run ขึ้นมาเพื่่อใช้ครอบ code ทั้งหมดไว้
function run() {
    // 4. เรียกใช้ function countdown ใน function run
    countdown()
    // 5. ทำให้ function countdown นับถอยหลังทุกๆ 1 วินาที
    setInterval(countdown, second)
}
// 2. ต้องเรียกใช้ function ใหญ่ด้วย
run()
