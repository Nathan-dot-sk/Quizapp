const userName = "admin";
const userPassword = "1234";

let userNameInput = document.getElementById("username")
let userPasswordInput = document.getElementById("password")
let loginButton = document.getElementById("loginButton")
let loginContainer = document.getElementById("login-container")
let failureContainer = document.getElementById("failure")
let quizContainer = document.getElementById("quiz")
let optiondiv = document.getElementById("option-div")

let nextbtn = document.getElementById("next-btn")

let questionelement =document.getElementById("question")
let questionData = [
    
    {
        question: "What does the <p> tag define in HTML?",
        options: ["A picture", "A paragraph", "A popup", "A property"],
        answer: "A paragraph"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which tag is used to insert an image in HTML?",
        options: ["<img>", "<image>", "<src>", "<pic>"],
        answer: "<img>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        answer: "<br>"
    },
    {
        question: "Which tag is used for the largest heading in HTML?",
        options: ["<heading>", "<h1>", "<head>", "<h6>"],
        answer: "<h1>"
    }
]
loginButton.addEventListener("click", function () {
    let userNameInputed =userNameInput.value.trim();
    let userPasswordInputed =  userPasswordInput.value.trim()
    if (userNameInputed === userName && userPasswordInputed === userPassword) {
        loginContainer.style.display = "none"
        quizContainer.style.display = "block"
        ShowQuestion()
    } else {
        failureContainer.style.display = "block"
    }
})

let questionIndex = 0
let questionDataInIndex = questionData[questionIndex]
let selectedOption = ""
let score = 0
function ShowQuestion() {

    let questionDataInIndex = questionData[questionIndex]

    questionelement.textContent= questionData[questionIndex].question

    questionDataInIndex.options.forEach(option =>{
        const btn = document.createElement("button")
        btn.textContent = option
        btn.classList.add("option-btn")

        optiondiv.appendChild(btn)


        btn.addEventListener("click", function(){

        selectedOption = option
        console.log(selectedOption)

        document.querySelectorAll(".option-btn").forEach(button => button.classList.remove("selected"))
        btn.classList.add("selected")
        })




    })
    
    
}




console.log(questionData.length)

nextbtn.addEventListener("click", function(){

    let questionDataInIndex = questionData[questionIndex]

    if(selectedOption === questionDataInIndex.answer){
        score=score+1
        console.log(score)


    }
    questionIndex = questionIndex + 1
    optiondiv.innerHTML=""
    if(questionIndex < questionData.length){
        ShowQuestion()

    }else{

        quizContainer.innerHTML=`<h2>Quiz Completed</h2>
                             <h4> you scored ${score}/${questionData.length} </h4>`
    }
  
    
    
})

