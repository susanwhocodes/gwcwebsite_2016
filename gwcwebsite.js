var pages = [$("#Home"), $("#Aboutlink"), $("#GameList"), $("#HalfSunrise"), $("#LifeUncertain"), $("#Game1"), $("#Game2"), $("#Amazonia")]

console.log($);

$(document).ready(function(){
$("#Home1").click(function(){
	console.log("here");
	$("#Home").show();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#noname").hide();
	$("#noname2").hide();
	$("#Amazonia").hide();
})
});

$("#Aboutlink1").click(function(){
	$("#Aboutlink").show();
	$("#Home").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#noname").hide();
	$("#noname2").hide();
	$("#Amazonia").hide();
});


$("#GameList1").click(function(){
	$("#GameList").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#noname").hide();
	$("#noname2").hide();
	$("#Amazonia").hide();
});

$("#Game1").click(function(){
	$("#HalfSunrise").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#LifeUncertain").hide();
	$("#noname").hide();
	$("#noname2").hide();
	$("#Amazonia").hide();
});

$("#Game2").click(function(){
	$("#LifeUncertain").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#noname").hide();
	$("#noname2").hide();
	$("#Amazonia").hide();
});
$("#Game3").click(function(){
	$("#noname").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#noname2").hide();
	$("#Amazonia").hide();
});
$("#Game4").click(function(){
	$("#noname2").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#noname").hide();
	$("#Amazonia").hide();
});
$("#Amazonia").click(function(){
	$("#Amazonia").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#noname").hide();
	$("#noname2").hide();
});

// function ShowHideDiv (divId){
// 	$("#divId").show();
// 	$("#").hide();
// }

// pages.each(ShowHideDiv(index))


