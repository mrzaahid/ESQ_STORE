$(function() {
    $('.popular-carousel').owlCarousel({
        loop: false,
        
        nav: true,
        dots: false,
        responsive: {
            300:{
                items:1
            },
            500:{
                items:1
            },
            800:{
                items:2
            },
            1050:{
                items:3
            },
            1150:{
                items:3,
                margin: 15
            }
        }});
    $('.hero-merch-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        center: true
        });
    $('.hero-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        center: true
    });
    $('.product-carousel').owlCarousel({
        loop: false,
        margin: 10,
        items: 1,
        center: true,
        dots:false,
        nav:true,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });

    $(".cards-home-c:nth-child(2), .cards-home-c:nth-child(3) ").hover(function () {
        $(".cards-home-c:first-child").removeClass("fix");
    }, function () {
        $(".cards-home-c:first-child").addClass("fix");
    });

    // checkbox in cart_checkout.html
    const selectAll = document.querySelector('.form-check.select-all input');
		const allCheckbox = document.querySelectorAll('.form-check:not(.select-all) input');
		let listBoolean = [];

		allCheckbox.forEach(item=> {
			item.addEventListener('change', function () {
				allCheckbox.forEach(i=> {
					listBoolean.push(i.checked);
				})
				if(listBoolean.includes(false)) {
					selectAll.checked = false;
				} else {
					selectAll.checked = true;
				}
				listBoolean = []
			})
		})

		selectAll.addEventListener('change', function () {
			if(this.checked) {
				allCheckbox.forEach(i=> {
					i.checked = true;
				})
			} else {
				allCheckbox.forEach(i=> {
					i.checked = false;
				})
			}
		})

    // counter 
    let minusBtn = document.getElementById("minus-btn");
    let count = document.getElementById("count");
    let plusBtn = document.getElementById("plus-btn");
    
    let countNum = 1;
    count.innerHTML = countNum;
    
    minusBtn.addEventListener("click", () => {
        if (countNum>0) {
            countNum -= 1;
            count.innerHTML = countNum;
        }
    });
    
    plusBtn.addEventListener("click", () => {
        countNum += 1;
        count.innerHTML = countNum;
    });
    
})





