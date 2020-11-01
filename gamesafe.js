function ready () {
    console.log("Page ready");
 
   let mids = document.querySelectorAll(".mid"); 
   
    mids.forEach(c => {
        c.classList.add("cent");
    })
    let number = document.forms.number;
    let amount = number.elements.num;

    document.number.onsubmit = function(e) {
        e.preventDefault();
        if (amount.value == "") {
            return alert("Please choose how many GameSafes to order(Numerical Values Only)")
        } else {
            let dollars = amount.value * 124.99
            r = confirm("Please confirm your order of " + amount.value + " GameSafes for $" + dollars + ".");


            if (r == true) {
                alert("Success!")
            } else if (r == false) {
                alert("Canceled.")
            }
        }
        
    };
   
   
};

document.addEventListener("DOMContentLoaded", ready);
