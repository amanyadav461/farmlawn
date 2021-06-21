	$( function() {
		//
		let checkin_selected_date = null;
		let checkout_selected_date = null;

		let curr_date = new Date();
		let curr_month = curr_date.getMonth() + 1;
		let curr_day = curr_date.getDate();
		let curr_year = curr_date.getFullYear();

		function getMonthWord(monthNum) {
			switch (monthNum){
				case 1:
					monthWord = "Jaunuary";
					break;
				case 2:
					monthWord = "February";
					break;
				case 3:
					monthWord = "March";
					break;
				case 4:
					monthWord = "April";
					break;
				case 5:
					monthWord = "May";
					break;
				case 6:
					monthWord = "June";
					break;
				case 7:
					monthWord = "July";
					break;
				case 8:
					monthWord = "August";
					break;
				case 9:
					monthWord = "September";
					break;
				case 10:
					monthWord = "October";
					break;
				case 11:
					monthWord = "November";
					break;
				case 12:
					monthWord = "December";
					break;
			}
			return monthWord
		}

		getMonthWord(curr_month);

		$(".cal-date").html(curr_day);
		$(".cal_month").html(monthWord);
		$(".cal_year").html(curr_year);
		//
		$( "div#checkin-date" ).click(function () {
			console.log("CHECK-IN")
			$(this).find('#checkinDate-input').datepicker({
				onSelect: function(dateText, inst){
					let date = $(this).datepicker("getDate");
					cin_day = date.getDate();
					cin_month = date.getMonth() + 1;
					cin_year = date.getFullYear();

					getMonthWord(cin_month);

					$("div#cin_day_print").html(cin_day);
					$("div#cin_month_print").html(monthWord);
					$("div#cin_year_print").html(cin_year);

					checkin_selected_date = cin_day+"-"+monthWord+"-"+cin_year
				}
			});
			$(this).find('#checkinDate-input').datepicker("show");
		});

		$("div#checkout-date").click(function(){
			console.log("CHECK-OUT")
			$(this).find('#checkoutDate-input').datepicker({
				onSelect: function(dateText, inst){
					let date = $(this).datepicker("getDate");
					cout_day = date.getDate();
					cout_month = date.getMonth() + 1;
					cout_year = date.getFullYear();

					getMonthWord(cout_month);

					$("div#cout_day_print").html(cout_day);
					$("div#cout_month_print").html(monthWord);
					$("div#cout_year_print").html(cout_year);

					checkout_selected_date = cout_day+"-"+monthWord+"-"+cout_year
				}				
			});
			$(this).find('#checkoutDate-input').datepicker("show");
		});		
		$(".booking-button").click(function(){
			if(checkin_selected_date && checkout_selected_date){
				window.open(`https://api.whatsapp.com/send?phone=919870246671&text=Hello%2C%20I%20would%20like%20to%20make%20a%20booking%20from%20${checkin_selected_date}%20to%20${checkout_selected_date}+`,"_blank");
			}
		});
	});

$( document ).ready(function() {

    // Carousel

    $(".carousel").carousel({
        interval: false,
        pause: true
    });

    $( ".carousel .carousel-inner" ).swipe( {
    swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
        this.parent( ).carousel( 'next' );
    },
    swipeRight: function ( ) {
        this.parent( ).carousel( 'prev' );
    },
    threshold: 0,
    tap: function(event, target) {
        window.location = $(this).find('.carousel-item.active a').attr('href');
    },
    excludedElements:"label, button, input, select, textarea, .noSwipe"
    } );

    $('.carousel .carousel-inner').on('dragstart', 'a', function () {
        return false;
    });  

});