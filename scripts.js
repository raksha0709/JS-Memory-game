const cardarr=[
    {
        name:'fries',
        img: 'images/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',
    },
    {
        name:'fries',
        img: 'images/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',
    }
]

cardarr.sort(()=> 0.5 - Math.random())

const gridDisplay=document.querySelector("#grid")
const result=document.querySelector('#result')
let cardChoosen=[]
let cardsChoosen_ids=[]
const cardsWon=[]

function createBoard(){
    for(let i=0;i<cardarr.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkmatch(){
    const cards = document.querySelectorAll('img')
    const opt1_id=cardsChoosen_ids[0]
    const opt2_id=cardsChoosen_ids[1]
    // console.log('check for match')
    if(opt1_id==opt2_id){
        cards[opt1_id].setAttribute('src','images/blank.png')
        cards[opt2_id].setAttribute('src','images/blank.png')
        alert("You clicked the same image!")
    }
    if(cardChoosen[0] == cardChoosen[1]){
        alert('You found a match')
        cards[opt1_id].setAttribute('src','images/white.png')
        cards[opt2_id].setAttribute('src','images/white.png')
        cards[opt1_id].removeEventListener('click',flipcard)
        cards[opt2_id].removeEventListener('click',flipcard)
        cardsWon.push(cardChoosen)
    }else{
        cards[opt1_id].setAttribute('src','images/blank.png')
        cards[opt2_id].setAttribute('src','images/blank.png')
        alert("Sorry!! try again...")
    }
    result.textContent=cardsWon.length
    cardChoosen=[]
    cardsChoosen_ids=[]

    if(cardsWon.length==(cardarr.length/2)){
        result.textContent="Congratulations you found all!"
    }
}

function flipcard(){
   console.log(cardarr)
   const card_id = this.getAttribute('data-id')
   cardChoosen.push(cardarr[card_id].name)
   cardsChoosen_ids.push(card_id)
   
//    console.log('clicked',card_id)
//    console.log(cardChoosen)
   this.setAttribute('src',cardarr[card_id].img)
   if(cardChoosen.length === 2){
    setTimeout(checkmatch,500)
   }
}