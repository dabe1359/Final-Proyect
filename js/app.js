$('.carousel').carousel({
    interval: false,
  });


var suites = [2,3,4,5,6,7,8,9,10, 'jack','queen','king','ace'];
var cards = [];

for(var i =0;i<suites.length;i++)
{
    cards.push(`images/${suites[i]}_of_hearts.png`);
    cards.push(`images/${suites[i]}_of_spades.png`);
    cards.push(`images/${suites[i]}_of_diamonds.png`);
    cards.push(`images/${suites[i]}_of_clubs.png`);
}



//$(`#table`).hide();

// solo ahora hacer la funcion de minus one bet, plus one in balance, recheck if there is up picture, recheck arrows...
// put more sounds and see if you can add the ATM Machine and animation
// 2 errors: one, I can turn right carrousell when playing
// 2nd: the left carrousell makes me go down some centimeters
// transform scale is amazing! does not change positions !!!

var suites2 = [2,3,4,5,6,7,8,9,10, 'j','q','k','a'];
var cardsGifs = [];

for(var g =0;g<suites2.length;g++)
{
    cardsGifs.push(`images/Cards_Open_Gifs/${suites2[g]}_heart_open.gif`); 
    cardsGifs.push(`images/Cards_Open_Gifs/${suites2[g]}_spade_open.gif`);
    cardsGifs.push(`images/Cards_Open_Gifs/${suites2[g]}_diamond_open.gif`);  
    cardsGifs.push(`images/Cards_Open_Gifs/${suites2[g]}_club_open.gif`); 
}

for(var j =0;j<cards.length;j++)
{
    $(`.adding`).append(`<img src="${cards[j]}" class= "col-6 col-md-3">`);
}


var balance = 100; //initial balance = 100$
var bet = 0; //initial bed = 0$


$(`#Coin1`).on(`click`,Add1);
$(`#Coin5`).on(`click`,Add5);
$(`#Coin25`).on(`click`,Add25);
$(`#Coin50`).on(`click`,Add50);
$(`#Coin100`).on(`click`,Add100);

$(`#balance`).html(`<u><i>Balance</u><br>$${balance}</i>`);
$(`#bet`).html(`<u><i>Bet</u> <br>$${bet}</i>`);

checkIfCanPlay();

function checkIfCanPlay()
{
    flagCanDeal =1;
    if(bet<1)
    {
        $(`.PlayButton`).hide();
    }
    else if(bet>0)
    {
        $(`.PlayButton`).show();
    }
}

function Add1()
{

    bet++;
    balance--;
    reDistributeChips();
    removeChips();
    $(`#balance`).html(`<u><i>Balance</u><br>$${balance}</i>`);
    $(`#bet`).html(`<u><i>Bet</u> <br>$${bet}</i>`);
    checkIfCanPlay();
}

function Add5()
{

    bet+=5;
    balance-=5;
    reDistributeChips();
    removeChips();
    $(`#balance`).html(`<u><i>Balance</u><br>$${balance}</i>`);
    $(`#bet`).html(`<u><i>Bet</u> <br>$${bet}</i>`);
    checkIfCanPlay();
}

function Add25()
{

    bet+=25;
    balance-=25;
    reDistributeChips();
    removeChips();
    $(`#balance`).html(`<u><i>Balance</u><br>$${balance}</i>`);
    $(`#bet`).html(`<u><i>Bet</u> <br>$${bet}</i>`);
    checkIfCanPlay();
}

function Add50()
{

    bet+=50;
    balance-=50;
    reDistributeChips();
    removeChips();
    $(`#balance`).html(`<u><i>Balance</u><br>$${balance}</i>`);
    $(`#bet`).html(`<u><i>Bet</u> <br>$${bet}</i>`);
    checkIfCanPlay();
}

function Add100()
{

    bet+=100;
    balance-=100;
    reDistributeChips();
    removeChips();
    $(`#balance`).html(`<u><i>Balance</u><br>$${balance}</i>`);
    $(`#bet`).html(`<u><i>Bet</u> <br>$${bet}</i>`);
    checkIfCanPlay();
}

function reDistributeChips()
{
    if(bet>=100)
    {
        // to make the bet = 100 if they want to bet more
        balance+= bet;
        bet = 100;
        balance-= bet;

        $(`#Chips100`).attr(`src`,`images/Bets/bet100.png`);

        $(`#Chips1`).attr(`src`,`images/Bets/defaultColorTable.png`);
        $(`#Chips5`).attr(`src`,`images/Bets/defaultColorTable.png`);
        $(`#Chips25`).attr(`src`,`images/Bets/defaultColorTable.png`);
        $(`#Chips50`).attr(`src`,`images/Bets/defaultColorTable.png`);

        $(`#arrowBlue`).css({"transform":"scale(0)"}); //transform: scale(0);
        $(`#arrowPurple`).css({"transform":"scale(0)"});
        $(`#arrowRed`).css({"transform":"scale(0)"});
        $(`#arrowGreen`).css({"transform":"scale(0)"});
        $(`#arrowBlack`).css({"transform":"scale(1)"}); //scale 1 is perfect
    }
    else
    {
        var fifties = parseInt(bet/50);
        var twentyFives = parseInt((bet-fifties*50)/25);
        var fives = parseInt((bet-fifties*50-twentyFives*25)/5);
        var ones = parseInt((bet-fifties*50-twentyFives*25-fives*5)/1);

        if(ones>0)
        {
            $(`#Chips1`).attr(`src`,`images/Bets/bet${ones}.png`);
            $(`#arrowBlue`).css({"transform":"scale(1)"});
            $(`#arrowBlack`).css({"transform":"scale(0)"});
        }
        else
        {
            $(`#Chips1`).attr(`src`,`images/Bets/defaultColorTable.png`);
            $(`#arrowBlue`).css({"transform":"scale(0)"});
        }

        if(fives>0)
        {
            $(`#Chips5`).attr(`src`,`images/Bets/bet${fives*5}.png`);
            $(`#arrowPurple`).css({"transform":"scale(1)"});
            $(`#arrowBlack`).css({"transform":"scale(0)"});
        }
        else
        {
            $(`#Chips5`).attr(`src`,`images/Bets/defaultColorTable.png`);
            $(`#arrowPurple`).css({"transform":"scale(0)"});
        }

        if(twentyFives>0)
        {
            $(`#Chips25`).attr(`src`,`images/Bets/bet${twentyFives*25}.png`);
            $(`#arrowRed`).css({"transform":"scale(1)"});
            $(`#arrowBlack`).css({"transform":"scale(0)"});
        }
        else
        {
            $(`#Chips25`).attr(`src`,`images/Bets/defaultColorTable.png`);
            $(`#arrowRed`).css({"transform":"scale(0)"});
        }

        if(fifties>0)
        {
            $(`#Chips50`).attr(`src`,`images/Bets/bet${fifties*50}.png`);
            $(`#arrowGreen`).css({"transform":"scale(1)"});
            $(`#arrowBlack`).css({"transform":"scale(0)"});
        }
        else
        {
            $(`#Chips50`).attr(`src`,`images/Bets/defaultColorTable.png`);
            $(`#arrowGreen`).css({"transform":"scale(0)"});
            $(`#arrowBlack`).css({"transform":"scale(0)"});
        }

    }
    
}

function removeChips()
{
    if(balance<100)
    {
        $(`#Coin100`).hide();
    }
    if(balance<50)
    {
        $(`#Coin50`).hide();
    }
    if(balance<25)
    {
        $(`#Coin25`).hide();
    }
    if(balance<5)
    {
        $(`#Coin5`).hide();
    }
    if(balance<1)
    {
        $(`#Coin1`).hide();
        $(`.showChips`).append(`<b>No More Balance! Please Go to the ATM!</b>`);
    }
}


//var carousel_i = 2;
var dealerNum1 ;
var dealerNum2 ;
var dealerTemp;
var dealerAQuantity = 0;

var num1 ;
var num2 ;
var checking;
var value; // A can be 1 or 11
var aQuantity = 0;
var aQuantitySplit = 0; //when split
var temp;
var temp2; //split
var hitMeTimes = 0; 
var hitMeTimesSplit=0; //when split
var sliptCounter =0; //works to compare only the first 2 cards
var splitCheck1;
var splitCheck2;
var splitNumber;
var SplitFlag =0;
var alternativeFlag =0;
var audioCard = new Audio('Sounds/OneCardSound.mp3');
var audio3Cards = new Audio('Sounds/Cards3Sound.mp3');
var audioCardsMult = new Audio('Sounds/MultipleCardsSound.mp3');

var flagCanDeal = 1;

//var busted =false;
$(`#Hit`).hide();
$(`#SplitMe`).hide();
$(`.split`).hide();

$(`#SplitMe`).on(`click`,SplitFunct);

function SplitFunct()
{
    $(`#double`).hide();
    audioCard.play();
    $(`#Stand`).hide();
    $(`#StandSplit`).hide();
    SplitFlag =1;
    temp /=2; //because it already added the 2 numbers... now I divide by 2
    temp2 = temp;
    console.log("Temp is:" + temp +" and temp2 is: "+temp2);
    $(`#SplitMe`).hide();
    $(`.split`).show();
    $(`#show2`).html(``);
    $(`#myCard7`).attr(`src`,`${cardsGifs[splitNumber]}`);
    setTimeout(() => {
        $(`#myCard7`).css({ "background-color": "snow", "border-radius": "15%" ,
        "padding": "10px","border": "1px solid black","border-width": "thick"});
      $(`#myCard7`).attr(`src`,`${cards[splitNumber]}`);   
    }, 1000);
    $(`#myCard2`).replaceWith(`<img id="myCard2" class="col-2 CardBack" src="images/backCard.png"/>`);
    
}

$(`#double`).on(`click`,doubleFunct);

function doubleFunct()
{
    $(`#double`).hide();
    //bid *=2;
    hitMe();
    setTimeout(() => {
        StandFunction();
    }, 1100);

}

$(`#PlayBtn`).on(`click`, PlayMe);

$(`#double`).hide();
$(`#Stand`).hide();


function PlayMe()
{
    if(flagCanDeal==1)
    {
        flagCanDeal =0;

        //$(`.PlayButton`).trigger(`click`);
        //$(`.PlayButton`).attr(`class`,`PlayButton`);

        audioCardsMult.play();
        $(`#double`).hide();
        $(`#buttonPlay`).hide();
        $(`.Btns1`).show();
        $(`#SplitMe`).hide();
        $(`.split`).hide();
        $(`#HitSplit`).hide();
        $(`#StandSplit`).hide();
        
        sliptCounter =0;
        $(`.messages`).html(``);
        $(`.messagesSplit`).html(``);
        temp =0;
        aQuantity = 0;
        hitMeTimes=0;
        SplitFlag =0;
        temp2 =0;
        aQuantitySplit = 0;
        hitMeTimesSplit=0;

        dealerNum1 =0;
        dealerNum2 =0;
        dealerTemp =0;
        dealerAQuantity = 0;

        //replace code to restart with only 2 cards
        for(var a =3;a<=6;a++)
        {
            $(`#show${a}`).replaceWith(`<p id="show${a}" class="col-2"></p>`);
            $(`#myCard${a}`).replaceWith(`<img id="myCard${a}" class="col-2" src=""/>`);
            $(`#Dealershow${a}`).replaceWith(`<p id="Dealershow${a}" class="col-2"></p>`);
            $(`#DealerCard${a}`).replaceWith(`<img id="DealerCard${a}" class="col-2" src=""/>`);

        }

        //replace code to restart with only 2 cards in case of a split

        for(var b =7;b<=8;b++)
        {
            $(`#show${b}`).replaceWith(`<p id="show${b}" class="col-2"></p>`);
            $(`#myCard${b}`).replaceWith(`<img id="myCard${b}" class="col-2" src="images/backCard.png"/>`);
        }

        for(var c =9;c<=12;c++)
        {
            $(`#show${c}`).replaceWith(`<p id="show${c}" class="col-2"></p>`);
            $(`#myCard${c}`).replaceWith(`<img id="myCard${c}" class="col-2" src=""/>`);
        }

        //Dealers 1st 2 cards

        dealerNum1 = Math.round(Math.random()*51);
        dealerNum2 = Math.round(Math.random()*51);


        $(`#DealerCard1`).attr(`src`,`${cardsGifs[dealerNum1]}`);
        setTimeout(() => {
            $(`#DealerCard1`).css({ "background-color": "snow", "border-radius": "15%" ,
            "padding": "10px","border": "1px solid black","border-width": "thick"});
        $(`#DealerCard1`).attr(`src`,`${cards[dealerNum1]}`);    
        }, 1000);

        $(`#DealerCard2`).attr(`src`,`images/Cards_Close_Gifs/BackAnim.gif`);
        setTimeout(() => {
        $(`#DealerCard2`).attr(`src`,``);
        $(`#DealerCard2`).css({ "background-image": "url(../images/backCard.png)", 
        "background-repeat" : "no-repeat" ,"background-size" : "100% 100%" ,"border-radius": "15%" ,
        "padding": "10px","border": "1px solid black","border-width": "thick"}); 
        }, 1000);


        DealercheckValue(dealerNum1);
        dealerTemp = value;

        $(`#Dealershow1`).html(value);
        if(value ==11)
        {
            $(`#Dealershow1`).append(`<p id="DealerA1">${value-10}</p>`);
        }

        DealercheckValue(dealerNum2); 

        dealerTemp += value;
        
        $(`#Dealershow2`).html(dealerTemp);
        if(value ==11)
        {
            $(`#Dealershow2`).append(`<p id="DealerA2">${dealerTemp-10}</p>`);
        }  

        if(dealerTemp==22) // dealer received A and A
        {
            dealerTemp-=10;
            dealerAQuantity-=1;
        }

        $(`#Dealershow1`).hide();
        $(`#Dealershow2`).hide();

        num1 = Math.round(Math.random()*51);
        num2 = Math.round(Math.random()*51);

        $(`#myCard1`).attr(`src`,`${cardsGifs[num1]}`);
        setTimeout(() => {
            $(`#myCard1`).css({ "background-color": "snow", "border-radius": "15%" ,
            "padding": "10px","border": "1px solid black","border-width": "thick"});
        $(`#myCard1`).attr(`src`,`${cards[num1]}`);    
        }, 1000);

        $(`#myCard2`).attr(`src`,`${cardsGifs[num2]}`);
        setTimeout(() => {
            $(`#myCard2`).css({ "background-color": "snow", "border-radius": "15%" ,
            "padding": "10px","border": "1px solid black","border-width": "thick"});
        $(`#myCard2`).attr(`src`,`${cards[num2]}`);   
        }, 1000);

        /*
        while(num2==num1)
        {
        num2 = Math.round(Math.random()*51); //if only 1 deck: if num2 is equal to num1, change card
        }
        */

        //23 is the 1st letter
        checkValue(num1); 

        temp = value;
        
        $(`#show1`).html(value);
        if(value ==11)
        {
            $(`#show1`).append(`<p id="A2">${value-10}</p>`);
        }   

        checkValue(num2); 

        temp += value;
        
        $(`#show2`).html(temp);
        if(value ==11)
        {
            $(`#show2`).append(`<p id="A2">${temp-10}</p>`);
        }  

        if(temp<=11 ||(temp<=20 && aQuantity>0))
        {
            if(balance>=bet)
            {
                $(`#double`).show();
            }
        }


        if(temp==21)
        {
            $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                <b>BLACKJACK!! Well Done! You win: 1.5 x ${bet} = $${bet*1.5} </b></p>`);
                balance += bet*1.5;
                $(`#Hit`).hide(); 
                $(`#Stand`).hide(); 
                $(`.PlayButton`).attr(`class`,`PlayButton carousel-control-next`);
                $(`#buttonPlay`).show();
        }
        else
        {
            setTimeout(() => {
                $(`#Hit`).show();
                $(`#Stand`).show(); 
            }, 1000);
        }


    }
    else
    {
        if(bet>balance)
        {
            bet=balance;
        }
        checkIfCanPlay();
        reDistributeChips();
        removeChips();
        $(`#balance`).html(`<u><i>Balance</u><br>$${balance}</i>`);
        $(`#bet`).html(`<u><i>Bet</u> <br>$${bet}</i>`);
    }
    
};

$(`#Hit`).on(`click`,hitMe);
$(`#Stand`).on(`click`,StandFunction);
$(`#StandSplit`).on(`click`,StandFunction);

function StandFunction() 
{
    $(`#SplitMe`).hide();
    $(`#double`).hide();

    if(SplitFlag==1)
    {
        $(`#HitSplit`).show();
        //$(`#StandSplit`).show();
        alternativeFlag = 1;
        SplitFlag =0;
        $(`.Btns1`).hide();
    }
    else
    {
        if(dealerTemp<17)
        {
            audio3Cards.play();
        }
        else
        {
            audioCard.play();
        }

        if(alternativeFlag==1)
        {
            SplitFlag =1;
        }

        $(`#HitSplit`).hide();
        $(`#StandSplit`).hide();
        $(`#Hit`).hide();
        $(`#Stand`).hide();

        $(`#Dealershow1`).show();

        $(`#DealerCard2`).css({ "background-image": "none", "all": "none"});

        $(`#DealerCard2`).attr(`src`,`${cardsGifs[dealerNum2]}`);

        $(`#DealerCard2`).css({ "background-color": "snow"})
        setTimeout(() => {
            
            $(`#Dealershow2`).show();

            $(`#DealerCard2`).css({ "background-color": "snow", "border-radius": "15%" ,
            "padding": "10px","border": "1px solid black","border-width": "thick"});
            $(`#DealerCard2`).attr(`src`,`${cards[dealerNum2]}`);   
        }, 1000);

        if(dealerTemp>16)
        {
            setTimeout(() => {
                $(`.PlayButton`).attr(`class`,`PlayButton carousel-control-next`);
                $(`#buttonPlay`).show();
            }, 1300);
        }


        if(dealerTemp==21)
        {
            //not yet
            if(temp!=21)
            {
                $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                <b>You Lose! the Dealer has BLACKJACK! </b></p>`);
                balance -= bet;

            }
            else
            {
                $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                <b>The Dealer has BLACKJACK! But Its a DRAW! Nice!</b></p>`);
            }

        }
        else if(dealerTemp<17)
        {
            var tempHitTimes =0;
            for (var dealerHitTimes = 1;dealerTemp<17 && dealerHitTimes<5; dealerHitTimes++)
            {
                var newDealerNumber = Math.round(Math.random()*51);
                $(`#DealerCard${dealerHitTimes+2}`).attr(`src`,`${cardsGifs[newDealerNumber]}`);
                replaceCard(dealerHitTimes , newDealerNumber);
                DealercheckValue(newDealerNumber); 
                dealerTemp += value;
                $(`#Dealershow${dealerHitTimes+2}`).html(dealerTemp);
            
                for(var Dindex=1;dealerAQuantity>=Dindex && dealerTemp>21;Dindex++)
                {
                    dealerTemp -=10;
                    $(`#Dealershow${dealerHitTimes+2}`).html(dealerTemp);
                    dealerAQuantity--;
                    //$(`#Dealershow${dealerHitTimes+2}`).append(`<p id="DealerA2">${dealerTemp}</p>`);
                }
                tempHitTimes = dealerHitTimes;

            }

            if(tempHitTimes<3)
            {
                setTimeout(() => {
                    $(`.PlayButton`).attr(`class`,`PlayButton carousel-control-next`);
                    $(`#buttonPlay`).show();
                }, 1900*tempHitTimes);
            }
            else
            {
                setTimeout(() => {
                    $(`.PlayButton`).attr(`class`,`PlayButton carousel-control-next`);
                    $(`#buttonPlay`).show();
                }, 1400*tempHitTimes);
            }
           

            if(dealerTemp<22)
            {
                if(dealerTemp>temp)
                {
                    $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                <b>Sorry, Dealer wins with a Higher Value: ${dealerTemp} VS ${temp}</b></p>`);
                balance -= bet;

                }
                else if(dealerTemp==temp)
                {
                    $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-success" role="alert">
                <b>Draw! : ${dealerTemp} VS ${temp}</b></p>`);
                balance = balance; //or write nothing

                }
                else if(dealerTemp<temp && temp<22)
                {
                    $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                <b>Nice! YOU WIN $${bet}!: ${temp} VS ${dealerTemp}</b></p>`);
                balance += bet;

                }

                if(SplitFlag==1 && temp2>0) //temp2>0 is redundant butfor some reason is needed
                {
                    if(dealerTemp>temp2)
                    {
                        $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                    <b>Sorry, Dealer wins with a Higher Value: ${dealerTemp} VS ${temp2}</b></p>`);
                    balance -= bet;

                    }
                    else if(dealerTemp==temp2)
                    {
                        $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-success" role="alert">
                    <b>Draw! : ${dealerTemp} VS ${temp2}</b></p>`);
                    balance = balance; //or write nothing...

                    }
                    else if(dealerTemp<temp2 && temp2<22)
                    {
                        $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                    <b>Nice! YOU WIN $${bet}!: ${temp2} VS ${dealerTemp}</b></p>`);
                    balance += bet;

                    }

                }
            }
            else if(dealerTemp>21) //here is the only part of the code where the dealer can be busted.
            {
                $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                <b>Dealer Busted! Good Job! Dealer has: ${dealerTemp}, You win: $${bet}</b></p>`);
                balance += bet;

                if(SplitFlag==1 && (temp2<22 && temp<22) && temp2>0) //temp2>0 needed redundant
                {
                    $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                    <b>Double Win! Dealer Busted! Good Job! Total Winnings: $${bet*2} </b></p>`);
                    balance += bet;
                }
                else if(SplitFlag==1 && (temp2>21 || temp>21) && temp2>0) //temp2>0 needed redundant
                {
                    $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-success" role="alert">
                    <b>You Win one and Lose one! DRAW! </b></p>`);
                    balance -= bet;
                }
                
            }
    
        }
        else
        {   // here the dealer has 17,18,19 or 20
            
                if(dealerTemp>temp)
                {
                    $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                <b>Sorry, Dealer wins with a Higher Value: ${dealerTemp} VS ${temp}</b></p>`);
                balance -= bet;

                }
                else if(dealerTemp==temp)
                {
                    $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-success" role="alert">
                <b>Draw! : ${dealerTemp} VS ${temp}</b></p>`);
                balance = balance; //or, write nothing 

                }
                else if(dealerTemp<temp && temp<22)
                {
                    $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                <b>Nice! YOU WIN $${bet}!: ${temp} VS ${dealerTemp}</b></p>`);
                balance += bet;

                }
                if(SplitFlag==1 && temp2>0) //temp2>0 is redundant butfor some reason is needed
                {
                    if(dealerTemp>temp2)
                    {
                        $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                    <b>Sorry, Dealer wins with a Higher Value: ${dealerTemp} VS ${temp2}</b></p>`);
                    balance -= bet;

                    }
                    else if(dealerTemp==temp2)
                    {
                        $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-success" role="alert">
                    <b>Draw! : ${dealerTemp} VS ${temp2}</b></p>`);
                    balance = balance; //or write nothing...

                    }
                    else if(dealerTemp<temp2 && temp2<22)
                    {
                        $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                    <b>Nice! YOU WIN $${bet}!: ${temp2} VS ${dealerTemp}</b></p>`);
                    balance += bet;

                    }

                }
        }
    }
}

function replaceCard(numbersC, card)
{
    setTimeout(() => {
        $(`#DealerCard${numbersC+2}`).css({ "background-color": "snow", "border-radius": "15%" ,
        "padding": "10px","border": "1px solid black","border-width": "thick"});
        $(`#DealerCard${numbersC+2}`).attr(`src`,`${cards[card]}`);
    }, 1000*(numbersC+1));
}

function hitMe() 
{
    $(`#double`).hide();
    audioCard.play();
    $(`#Stand`).show();
    console.log("SplitFlag is: "+SplitFlag);
    //busted=false;
    $(`#Hit`).hide();
    $(`#Stand`).hide();
    $(`#SplitMe`).hide();

    hitMeTimes++;
    var newNumber = Math.round(Math.random()*51);
    
    //SplitFlag is 0 so by default #myCard3 will get the card when hit.
    // but since we can split, we can make SplitFlag =1 and then #myCard2 will get the next card.
    $(`#myCard${hitMeTimes+2-SplitFlag}`).attr(`src`,`${cardsGifs[newNumber]}`);
    setTimeout(() => {
        $(`#myCard${hitMeTimes+2-SplitFlag}`).css({ "background-color": "snow", 
        "border-radius": "15%" ,"padding": "10px","border": "1px solid black","border-width": "thick"});       
        $(`#myCard${hitMeTimes+2-SplitFlag}`).attr(`src`,`${cards[newNumber]}`);   
        if(temp<21) //21 is great, not show, and 22 and more lets assume is busted
        {
            $(`#Hit`).show();
            $(`#Stand`).show();
        } 
    }, 1000);

    checkValue(newNumber); 

    temp += value;

    $(`#show${hitMeTimes+2-SplitFlag}`).html(temp);
    // print down another total value -10 for each A we have
    for(var index=1;aQuantity>=index;index++)
    {
        $(`#show${hitMeTimes+2-SplitFlag}`).append(`<p id="A2">${temp-(10)*index}</p>`);
    }
    if(temp==21 && hitMeTimes==1 && SplitFlag==1)
    {
        console.log(hitMeTimes + ''+ SplitFlag);
        $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
            <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
            <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
            <b>BLACKJACK!! Well Done! You win: 1.5 x ${bet} = $${bet*1.5} </b></p>`);
            balance += bet*1.5;
            $(`#Hit`).hide();
            $(`#Stand`).hide();
            setTimeout(() => {
                StandFunction();
            }, 1100); 
    }
    else if(temp==21)
    {
        $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
            <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
            <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
            <b> 21! Well Done! </b></p>`);
            $(`#Hit`).hide();
            $(`#Stand`).hide();
            setTimeout(() => {
                StandFunction();
            }, 1100); 
        
    }
    else if(temp>21)
    {
        if(aQuantity>0)
        {
            for(var index2=1;temp>21 && aQuantity>0;index2++)
            {
                temp-=10;
                $(`#show${hitMeTimes+2}`).html(`<p id="A2">${temp}</p>`);
                aQuantity--;
            }
            
            if(temp==21)
            {
                $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-warning" role="alert">
                    <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                    <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                    <b> 21! Well Done! </b></p>`);
                    $(`#Hit`).hide();
                    $(`#Stand`).hide(); 
                    setTimeout(() => {
                        StandFunction();
                    }, 1100); 
                    
                    if(SplitFlag==1)
                    {
                        $(`#HitSplit`).show();
                        //$(`#StandSplit`).show();
                        $(`.Btns1`).hide();
                    }
            }
            else if(temp>21)
            {
                $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-danger" role="alert">
                <b>Oh No! You are Busted!</b></p>`);
                balance -= bet;
                if(SplitFlag==1)
                {
                    $(`#HitSplit`).show();
                    //$(`#StandSplit`).show();
                    $(`.Btns1`).hide();
                }
                else
                {
                    $(`.PlayButton`).attr(`class`,`PlayButton carousel-control-next`);
                    $(`#buttonPlay`).show();
                }
            }

        }
        else
        {
            $(`.messages`).append(`<p id="Hit" class="col-10 alert alert-danger" role="alert">
            <b>Oh No! You are Busted!</b></p>`); 
            balance -= bet;
            if(SplitFlag==1)
            {
                $(`#HitSplit`).show();
                //$(`#StandSplit`).show();
                $(`.Btns1`).hide();
            }
            else
            {
                $(`.PlayButton`).attr(`class`,`PlayButton carousel-control-next`);
                $(`#buttonPlay`).show();
            }
        }
    }

}

//as HitMe function, we make HitMe Split function, very similar to our previous case
$(`#HitSplit`).on(`click`,hitMeSplit);
$(`#StandSplit`).on(`click`,``);

function hitMeSplit() 
{
    audioCard.play();
    //busted=false;
    $(`#HitSplit`).hide();
    $(`#StandSplit`).hide();
    hitMeTimesSplit++;

    var newNumber = Math.round(Math.random()*51);
    
    $(`#myCard${hitMeTimesSplit+7}`).attr(`src`,`${cardsGifs[newNumber]}`);
    setTimeout(() => {
        if(temp2<21) //21 is great, not show, and 22 and more lets assume is busted
        {
            $(`#HitSplit`).show();
            $(`#StandSplit`).show();
        }
        $(`#myCard${hitMeTimesSplit+7}`).css({ "background-color": "snow", "border-radius": "15%" ,
        "padding": "10px","border": "1px solid black","border-width": "thick"});
      $(`#myCard${hitMeTimesSplit+7}`).attr(`src`,`${cards[newNumber]}`);    
    }, 1000);

    checkValue(newNumber); 

    $(`#show${hitMeTimesSplit+6}`).html(temp2);

    temp2 += value;


    $(`#show${hitMeTimesSplit+7}`).html(temp2);
    // print down another total value -10 for each A we have
    for(var index=1;aQuantitySplit>=index;index++)
    {
        $(`#show${hitMeTimesSplit+7}`).append(`<p id="A2">${temp2-(10)*index}</p>`);
    }

    if(temp2==21 && hitMeTimesSplit==1)
    {
        console.log(hitMeTimesSplit);
        $(`.messagesSplit`).append(`<p id="HitSplit" class="col-10 alert alert-warning" role="alert">
            <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
            <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
            <b>BLACKJACK!! Well Done! You win: 1.5 x ${bet} = ${bet*1.5} </b></p>`);
            balance += bet*1.5;
            $(`#HitSplit`).hide();
            $(`#StandSplit`).hide(); 
            StandFunction();
    }
    else if(temp2==21)
    {
        console.log(hitMeTimesSplit);
        $(`.messagesSplit`).append(`<p id="HitSplit" class="col-10 alert alert-warning" role="alert">
            <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
            <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
            <b> 21! Well Done! </b></p>`);
            $(`#HitSplit`).hide();
            $(`#StandSplit`).hide(); 
            StandFunction();
    }
    else if(temp2>21)
    {
        if(aQuantitySplit >0)
        {
            for(var index2=1;temp2>21 && aQuantitySplit>0;index2++)
            {
                temp2-=10;
                $(`#show${hitMeTimes+7}`).html(`<p id="A2">${temp2}</p>`);
                aQuantitySplit --;
            }
            
            if(temp2==21)
            {
                $(`.messagesSplit`).append(`<p id="HitSplit" class="col-10 alert alert-warning" role="alert">
                    <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                    <img src="https://img.icons8.com/ios/50/000000/cards.png"/>
                    <b> 21! Well Done! </b></p>`);
                    $(`#HitSplit`).hide();
                    $(`#StandSplit`).hide(); 
                    StandFunction();
            }
            else if(temp2>21)
            {
                $(`.messagesSplit`).append(`<p id="HitSplit" class="col-10 alert alert-danger" role="alert">
                <b>Oh No! You are Busted!</b></p>`);

                balance -= bet;
                if(temp<22)
                {
                    StandFunction();
                }
                else
                {
                    $(`.PlayButton`).attr(`class`,`PlayButton carousel-control-next`);
                    $(`#buttonPlay`).show();
                }
            }

        }
        else
        {
            $(`.messagesSplit`).append(`<p id="HitSplit" class="col-10 alert alert-danger" role="alert">
            <b>Oh No! You are Busted!</b></p>`); 
            balance -= bet;
            if(temp<22)
            {
                StandFunction();
            }
            else
            {
                $(`.PlayButton`).attr(`class`,`PlayButton carousel-control-next`);
                $(`#buttonPlay`).show();
            }
        }
    }

}


function checkValue(num) 
{
    checking = cardsGifs[num].charAt(23);

    //to give the option to split if 2 are the same
    if(sliptCounter==0)
    {
        splitCheck1 = checking;
        sliptCounter++;
        console.log(splitCheck1 +" "+ sliptCounter);
    }
    else if(sliptCounter==1)
    {
        splitCheck2 = checking;
        sliptCounter++;
        console.log(splitCheck2 +" "+ sliptCounter);
        if(splitCheck1==splitCheck2)
        {
            if(splitCheck1=='a')
            {
                //in case of receiving an Ace
                aQuantity--;
                aQuantitySplit++;
            }
            splitNumber = num;
            setTimeout(() => {
                //alert('You can split now, do you want?');
                $(`#SplitMe`).show();
            }, 1100);
        }
    }
   
    if(checking=='1'|| checking=='q' || checking=='j' || checking=='k')
    {
        value = 10;
    }
    else if(checking =='a')
    {
        value = 11;
        if(hitMeTimesSplit>0)
        {
            aQuantitySplit++;
        }
        else
        {
            aQuantity++;
        }
    }
    else
    {
        value = Number(checking); //casting to number
    }

}

//dealer checking value

function DealercheckValue(num) 
{
    checking = cardsGifs[num].charAt(23);
   
    if(checking=='1'|| checking=='q' || checking=='j' || checking=='k')
    {
        value = 10;
    }
    else if(checking =='a')
    {
        value = 11;
        dealerAQuantity++;
    }
    else
    {
        value = Number(checking); //casting to number
    }

}

