const params = new URLSearchParams(window.location.search)
const category = params.get("category") //gettinf data from url

document.querySelector(".catname").innerText = category 
// storing data
const data = {
    GENERAL:[
        {
            question: "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
            options: ["Palindrome","isogram","pangram", "tautonym"],
            answer: "Palindrome",
        },
        {
            question:"What is the study of fungi called?",
            options:["anthropology","mycology","mixology","fugology"],
            answer: "mycology"
        },
        {
            question: "Which country has the most natural lakes in the world?",
            options: ["USA", "Canada", "Russia", "Finland"],
            answer: "Canada"
          },
          {
            question: "What is the smallest country in the world by area?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer: "Vatican City"
          },
          {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Arctic", "Antarctica", "Gobi"],
            answer: "Antarctica"
          },
          {
            question: "Which language has the most native speakers?",
            options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
            answer: "Mandarin Chinese"
          },
          {
            question: "Which country has the most time zones?",
            options: ["USA", "Russia", "France", "China"],
            answer: "France"
          },
          {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile"
          },
          {
            question: "Which element has the chemical symbol 'W'?",
            options: ["Tungsten", "Tin", "Tantalum", "Titanium"],
            answer: "Tungsten"
          },
          {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Thailand", "Japan", "South Korea"],
            answer: "Japan"
          }
        

     ],
     TECH:[
        {
            question: "Which data structure uses LIFO principle?",
            options: ["Queue", "Stack", "Tree", "Graph"],
            answer: "Stack"
          },
          {
            question: "Time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: "O(log n)"
          },
          {
            question: "Which protocol is used for secure web browsing?",
            options: ["HTTP", "FTP", "HTTPS", "SMTP"],
            answer: "HTTPS"
          },
          {
            question: "Which company created the Linux kernel?",
            options: ["Microsoft", "Apple", "Linus Torvalds", "IBM"],
            answer: "Linus Torvalds"
          },
          {
            question: "Which language runs in a web browser?",
            options: ["Python", "C++", "Java", "JavaScript"],
            answer: "JavaScript"
          },
          {
            question: "Which SQL command removes a table?",
            options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
            answer: "DROP"
          },
          {
            question: "What does RAM stand for?",
            options: [
              "Read Access Memory",
              "Random Access Memory",
              "Run Access Memory",
              "Real-time Access Memory"
            ],
            answer: "Random Access Memory"
          },
          {
            question: "Which sorting algorithm is fastest on average?",
            options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"],
            answer: "Quick Sort"
          },
          {
            question: "Which layer handles routing in OSI model?",
            options: ["Transport", "Network", "Session", "Data Link"],
            answer: "Network"
          },
          {
            question: "What does API stand for?",
            options: [
              "Application Programming Interface",
              "Applied Program Integration",
              "Advanced Programming Input",
              "Application Process Interface"
            ],
            answer: "Application Programming Interface"
          }
     ],
     SPORTS:[
        {
            question: "Which country has won the most FIFA World Cups?",
            options: ["Germany", "Italy", "Brazil", "Argentina"],
            answer: "Brazil"
          },
          {
            question: "Who holds the record for most runs in international cricket?",
            options: ["Ricky Ponting", "Sachin Tendulkar", "Virat Kohli", "Kumar Sangakkara"],
            answer: "Sachin Tendulkar"
          },
          {
            question: "Which sport uses the term 'love'?",
            options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
            answer: "Tennis"
          },
          {
            question: "How many players in a basketball team on court?",
            options: ["5", "6", "7", "11"],
            answer: "5"
          },
          {
            question: "Which country hosted the 2016 Olympics?",
            options: ["China", "Brazil", "UK", "Russia"],
            answer: "Brazil"
          },
          {
            question: "Who is known as the fastest man alive?",
            options: ["Bolt", "Gatlin", "Blake", "Powell"],
            answer: "Bolt"
          },
          {
            question: "Which sport is associated with Wimbledon?",
            options: ["Cricket", "Football", "Tennis", "Golf"],
            answer: "Tennis"
          },
          {
            question: "How long is a marathon?",
            options: ["40 km", "41 km", "42.195 km", "43 km"],
            answer: "42.195 km"
          },
          {
            question: "Which country invented cricket?",
            options: ["India", "Australia", "England", "South Africa"],
            answer: "England"
          },
          {
            question: "What is the maximum break in snooker?",
            options: ["147", "155", "150", "160"],
            answer: "147"
          }
     ],
     ENTERTAINMENT:[
        {
            question: "Which movie won Best Picture at Oscars 2020?",
            options: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
            answer: "Parasite"
          },
          {
            question: "Who directed 'Inception'?",
            options: ["Spielberg", "Nolan", "Tarantino", "Scorsese"],
            answer: "Nolan"
          },
          {
            question: "Which series features 'Winter is Coming'?",
            options: ["Vikings", "Game of Thrones", "The Witcher", "Breaking Bad"],
            answer: "Game of Thrones"
          },
          {
            question: "Which actor played Iron Man?",
            options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Hemsworth"],
            answer: "Robert Downey Jr."
          },
          {
            question: "Which movie is the highest grossing of all time?",
            options: ["Avatar", "Titanic", "Avengers: Endgame", "Star Wars"],
            answer: "Avatar"
          },
          {
            question: "Which platform produced 'Stranger Things'?",
            options: ["Amazon", "Netflix", "HBO", "Disney+"],
            answer: "Netflix"
          },
          {
            question: "Who composed music for Interstellar?",
            options: ["Hans Zimmer", "A.R. Rahman", "John Williams", "Alan Silvestri"],
            answer: "Hans Zimmer"
          },
          {
            question: "Which Indian movie was nominated for Oscar (2023)?",
            options: ["RRR", "Pathaan", "KGF", "Pushpa"],
            answer: "RRR"
          },
          {
            question: "Which actor is known as 'The Rock'?",
            options: ["John Cena", "Dwayne Johnson", "Vin Diesel", "Jason Statham"],
            answer: "Dwayne Johnson"
          },
          {
            question: "Which show is about a chemistry teacher turned drug lord?",
            options: ["Narcos", "Breaking Bad", "Ozark", "Money Heist"],
            answer: "Breaking Bad"
          }
     ]

}
// selecting questions according to gategory
const questions = data[category]
const nextbox = document.querySelector(".next")
const timebox = document.querySelector(".timer")
const scorebox = document.querySelector(".score")
const submitBtn = document.querySelector(".submit")
const resultbox = document.querySelector(".result")

let currentquestion = 0
let option = document.querySelectorAll(".option")
let score = 0
let selected = ""
let timeLeft= 10
let timer;
let timeUp = false
let answered = false




// loading/displaying questions
function loadquestions(){
    
    let q= questions[currentquestion]
    document.querySelector(".question").innerText = q.question
    option.forEach((btn, index) => {
      btn.innerText = q.options[index];
    });
        
    selected="";
    answered= false;
    timeUp = false;

    
    startTimer()
}


// answer selecting
option.forEach(btn => {
    btn.addEventListener("click",()=>{
      
      selected = btn.innerText
      option.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    
      
    
        
    })
})


//function for next question and score calculation
function handleNext(){
    clearInterval(timer)
    
    let correctanswer = questions[currentquestion].answer
    if (timeUp && selected==""){
      document.querySelector(".result").innerText = "TIME UP."
    }
    else if(selected !== "") {

      if (selected === correctanswer){
          score++;
          document.querySelector(".result").innerText="sahi jawab! 7 crore!"
            
                }else{
                    document.querySelector(".result").innerText= "wrong :("
                }
    }
      scorebox.innerText = "score:"+ score
       
      setTimeout(() => {
        currentquestion++;

        if(currentquestion < questions.length){
            selected = "";
            resultbox.innerText = "";
            loadquestions();
        } else {
            showResult();
        }
    }, 1500);
}
//     submitBtn.addEventListener("click", () => {
//       if (selected === "") return; // do nothing if nothing selected
  
//       clearInterval(timer);
  
//       let correctanswer = questions[currentquestion].answer;
  
//       if (selected === correctanswer) {
//           score++;
//           resultbox.innerText = "sahi jawab! 7 crore!";
//       } else {
//           resultbox.innerText = ` Wrong! Correct answer: ${correctanswer}`;
//       }
  
//       scorebox.innerText = "Score: " + score;
//       answered = true;
//   });

//     function nextquestion (){
//     currentquestion++;

//     if(currentquestion < questions.length){
//         loadquestions();
//     } else {
//         showResult();
//     }
// };
nextbox.addEventListener("click", handleNext)

function showResult() {
  document.querySelector(".resultscreen").innerHTML = `
    <h1>Adios amigos, quiz finished!</h1>
    <h2>Your Score: ${score}</h2>
    <h2> Accuracy: ${score*10}%
    <button class="restart">Restart Quiz</button>
    
  `;

  // add event to restart button
  document.querySelector(".restart").addEventListener("click", () => {
    location.reload()
  });
}

function startTimer() {
  clearInterval(timer);

  timeLeft = 10;
  timebox.innerText = "Time: " + timeLeft;

  timer = setInterval(() => {
      timeLeft--;
      timebox.innerText = "Time: " + timeLeft;

      if (timeLeft === 0) {
        clearInterval(timer);
        timeUp = true;
    
        let correctanswer = questions[currentquestion].answer;
    
        if (!answered) {
            resultbox.innerText = ` Time's up! Correct: ${correctanswer}`;
        }
    
        // 
        setTimeout(() => {
            handleNext();
        }, 1000);
    }
  },1000)
}
// start quiz
loadquestions()