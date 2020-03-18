window.onload = () => {
  var count = 0
  var title = document.querySelector("#title")
  var input1 = document.querySelector("#input1")
  var input2 = document.querySelector("#input2")
  var btn3 = document.querySelector("#btn3")
  var btn = document.querySelector(".btn")
  var click = document.querySelector("#click")
  var say = document.querySelector("#say")
  var str1 = "Click!"
  var str2 = "Refresh follow list?"
  var str3 = "Customize the startdate?"
  var str4 = "Customize the enddate?"
  var str5 = "Click again then back to the beginning!"
  var str6 = "Enjoy your dynamic!"
  title.addEventListener('animationend', () => {
    title.style.animation = ""
  })
  click.addEventListener('click', () => {
    count++
    title.style.animation = "tremble 1s"
    if (count == 1) {
      say.style.background = "#FFFFFF0F"
      say.style.boxShadow = "0px 5px 5px 0px #10101070"
      typing(str1)
    } else if (count == 2) {
      title.style.top = "15%"
      btn.style.width = "40vh"
      btn.style.height = "40vh"
      typing(str2)
    } else if (count == 3) {
      btn3.style.bottom = "15%"
      typing(str3)
    } else if (count == 4) {
      typing(str4)
      input1.style.left = "20%"
    } else if (count == 5) {
      input2.style.right = "20%"
      typing(str6)
    } else if (count == 6) {
      typing(str5)
    } else if (count == 7) {
      typing("")
      console.log("reset")
      title.style.top = "50%"
      btn.style.width = "0px"
      btn.style.height = "0px"
      btn3.style.bottom = "-200px"
      input1.style.left = "-100px"
      input2.style.right = "-100px"
      say.style.background = "#FFFFFF00"
      say.style.boxShadow = ""
      count = 0;
    }
  })
  input1.addEventListener('change', () => {
    input2.setAttribute('max', 60 - input1.value)
    if (input2.value > 60 - input1.value)
      input2.value = 60 - input1.value
  })
}

var say = document.querySelector("#say")
var timer = 0
let i = 0;

function typing(str) {
  if (i <= str.length) {
    say.innerHTML = str.slice(0, i++) + '_'
    timer = setTimeout(typing, 50, str)
  } else {
    say.innerHTML = str //结束打字,移除 _ 光标
    clearTimeout(timer)
    i = 0
  }
}