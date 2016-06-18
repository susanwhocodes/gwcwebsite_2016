var pages = [$("#Home"), $("#Aboutlink"), $("#GameList"), $("#HalfSunrise"), $("#LifeUncertain"), $("#TheRiggedGameOfLife"), $("#WhoKilledEqualPay"), $("#Amazonia")]

console.log($);

function goHome()
{
	$("#Home").show();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#TheRiggedGameOfLife").hide();
	$("#WhoKilledEqualPay").hide();
	$("#Amazonia").hide();
};

$(document).ready(function(){
goHome();
});

$("#Home1").click(goHome)

$("#Aboutlink1").click(function(){
	$("#Aboutlink").show();
	$("#Home").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#TheRiggedGameOfLife").hide();
	$("#WhoKilledEqualPay").hide();
	$("#Amazonia").hide();
});


$("#GameList1").click(function(){
	$("#GameList").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#TheRiggedGameOfLife").hide();
	$("#WhoKilledEqualPay").hide();
	$("#Amazonia").hide();
});

$("#Game1").click(function(){
	$("#HalfSunrise").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#LifeUncertain").hide();
	$("#TheRiggedGameOfLife").hide();
	$("#WhoKilledEqualPay").hide();
	$("#Amazonia").hide();
});

$("#Game2").click(function(){
	$("#LifeUncertain").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#TheRiggedGameOfLife").hide();
	$("#WhoKilledEqualPay").hide();
	$("#Amazonia").hide();
});
$("#Game3").click(function(){
	$("#TheRiggedGameOfLife").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#WhoKilledEqualPay").hide();
	$("#Amazonia").hide();
});
$("#Game4").click(function(){
	$("#WhoKilledEqualPay").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#TheRiggedGameOfLife").hide();
	$("#Amazonia").hide();
});
$("#Game5").click(function(){
	$("#Amazonia").show();
	$("#Home").hide();
	$("#Aboutlink").hide();
	$("#GameList").hide();
	$("#HalfSunrise").hide();
	$("#LifeUncertain").hide();
	$("#TheRiggedGameOfLife").hide();
	$("#WhoKilledEqualPay").hide();
});

// function ShowHideDiv (divId){
// 	$("#divId").show();
// 	$("#").hide();
// }

// pages.each(ShowHideDiv(index))


