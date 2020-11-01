var fris = "";
var bier = "";
var wijn = "";
var bitterballen = "";
var count = true;
var receipt = document.getElementById("receipt")

const prijsFris = 200;
const prijsBier = 300;
const prijsWijn = 400;
const prijsSnack = 600;



function takeorder(){
	while(count == true){
		var order = prompt("Wat wilt u bestellen?. U kunt kiezen tussen fris bier of wijn als drank of portie bitterballen");
		if (order == "fris"){
			fris += Number (prompt("Hoeveel fris wil je?"))
		}
		else if (order == "bier"){
			bier += Number (prompt("Hoeveel bier wil je?"))
		}
		else if (order == "wijn"){
			wijn += Number (prompt("Hoeveel wijn wil je?"))
		}
		else if (order == "bitterballen"){
			bitterballen += Number (prompt("Hoeveel bitterballen wilt u?  8 of 16 porties?"))
		}
		else if (order == "stop"){
			alert("Bedankt voor uw bestelling. \nals u de rekening wilt, druk op de kop 'reciept'");
			count = false
		}
		else{
			alert("invalid argument");
	}

	}
	
}




function OrderTotal(){
	var totalPrice = bier*prijsBier + wijn*prijsWijn + fris*prijsFris + bitterballen*prijsSnack;
    var receiptBuilder = "";

    receiptBuilder += "<h1> Dining Hall cafe </h1>";
    receiptBuilder += "Aantal bier: " + bier +" totaal prijsbier: &euro;"+ bier*(prijsBier/100)+ "<br>";
    receiptBuilder += "Aantal wijn: " + wijn +" totaal prijswijn: &euro;"+ wijn*(prijsWijn/100)+ "<br>";
    receiptBuilder += "Aantal fris: " + fris +" totaal prijsfris: &euro;"+ fris*(prijsFris/100)+ "<br>";
    receiptBuilder += "Aantal bitterballen: " + bitterballen +" totaal prijsSnack: &euro;"+ bitterballen*(prijsSnack/100)+ "<br>";
    receiptBuilder += "----------------------------------- + <br>";
    receiptBuilder += "Subtotaal: &euro; " + (totalPrice/100);

    receipt.innerHTML =  receiptBuilder ;
}



