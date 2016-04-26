$(document).ready(function(){
	
	
	
/* --------------------------------- START - INDEX/HEADER --------------------------------- */
	
	/* TOP MENU HOVER */
	$("#main-menu li").on("mouseover",function(){
		$("a", this).css("color","#96281B");
		$(this).css("background-color","#ecf0f1");
	});
	
	$("#main-menu li").on("mouseout",function(){
		$("a", this).css("color","#ecf0f1");
		$(this).css("background-color","#96281B");
	});
	
	
	/* HOME BOOK HOVER */
	$(".book").on("mouseover",function(){
		$(".price",this).css("font-size","1.3em");
		$(".price",this).css("line-height","37px");
	});
	
	$(".book").on("mouseout",function(){
		$(".price",this).css("font-size","1.2em");
		$(".price",this).css("line-height","40px");
	});
	
/* --------------------------------- END - INDEX/HEADER --------------------------------- */
	
	
	
/* --------------------------------- START - PRODUCT --------------------------------- */	
	
	/* BOOK FORMAT SELECTION */
	$(".prices").on("click",function(){	
		$(".prices").removeClass("prices-toggle");
		$(this).addClass("prices-toggle");		
	});
	
	
	/* DESCRIPTION READ MORE */
	var read_clicked = 0;
	$("#read-more").on("click",function(){		
		$(".det_descrip").toggleClass("det_descrip-toggle");		
		if(read_clicked == 0){
			$("#read-more").text("Mostrar menos...");
			read_clicked=1;
		}else{
			$("#read-more").text("Mostrar más...");
			read_clicked=0;
		}		
	});	
	
/* --------------------------------- END - PRODUCT --------------------------------- */		
	
	
	
/* --------------------------------- START - BUYING --------------------------------- */	
	
	/* PROFILE SELECTION */	
	$(".billing-box").on("click",function(){
		$(".billing-box").removeClass("toggle-profile");
		$(this).addClass("toggle-profile");		
	});	
	
	
	/* SHIPPING SELECTION */	
	$("#transport div").on("click",function(){		
		$("#transport div").removeClass("transport-toggle");
		$(this).addClass("transport-toggle");		
	});
	
	
	/* PAYMENT METHOD SELECTION */	
	$("#pay-images div").on("click",function(){		
		$("#pay-images div").removeClass("pay-toggle");
		$(this).addClass("pay-toggle");		
	});	
	
	
	/* START - STEP CONTROL FOR BUYING PROCESS */	
	
		paso=0;
		$("#back").on("click",function(){	
			if(paso == 1){
				$("#ship-wrapper").slideUp(100);
				$("#billing-wrap").slideDown(100);
				$("#back").css("opacity","0");	
			}else if(paso == 2){
				$("#pay-wrapper").slideUp(100);
				$("#ship-wrapper").slideDown(100);
			}else if(paso == 3){
				$("#conf-wrapper").slideUp(100);
				$("#pay-wrapper").slideDown(100);
				$("#continue").html("Siguiente <i class='fa fa-arrow-right'></i>");	
			}		
						
			if(paso != 0){
				paso--;		
				$("#pasos div:eq("+paso+")").css("text-decoration","none");
				$("#pasos div:eq("+paso+")").css("background","#96281B");		
				$("#pasos div:eq("+paso+")").css("color","#ecf0f1");
				$("#pasos div:eq("+eval(paso+1)+")").css("background","rgba(150, 40, 27, 0.3)");		
				$("#pasos div:eq("+eval(paso+1)+")").css("color","black");	
			}			
		});
		
	
		$("#continue").on("click",function(){	
			if(paso == 0){
				$("#billing-wrap").slideUp(100);
				$("#ship-wrapper").slideDown(100);
				$("#back").css("opacity","1");		
			}else if(paso == 1){	
				$("#ship-wrapper").slideUp(100);
				$("#pay-wrapper").slideDown(100);	
			}else if(paso == 2){
				$("#pay-wrapper").slideUp(100);	
				$("#conf-wrapper").slideDown(100);	
				$("#continue").html("Confirmar pedido <i class='fa fa-arrow-right'></i>");	
			}
			
			if(paso != 3){
				$("#pasos div:eq("+paso+")").css("text-decoration","line-through");
				$("#pasos div:eq("+paso+")").css("background","rgba(150, 40, 27, 0.3)");		
				$("#pasos div:eq("+paso+")").css("color","black");
				$("#pasos div:eq("+eval(paso+1)+")").css("background","#96281B");		
				$("#pasos div:eq("+eval(paso+1)+")").css("color","#ecf0f1");		
				paso++;	
			}
		});	
	
	/* END - STEP CONTROL FOR BUYING PROCESS */		
	
/* --------------------------------- END - BUYING --------------------------------- */
	
});