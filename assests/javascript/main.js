let body = document.querySelector("body")
let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.round(Math.random())
    },
    toString: function() {
        this.flip()
        /* 2. Return the string "Heads" or "Tails", depending on whether
        "this.state" is 0 or 1. */
        if (this.state === 0) {
            return "Heads"    
        }
        else {
            return "Tails"
        }
    },
    toHTML: function() {
        this.flip()
        let image = document.createElement('img');
        let divs = document.createElement('div')
        body.append(divs)
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
        image.src = "./assests/images/Heads.png";
        divs.append("Head")
        divs.append(image) 
      
        }else{
        image.src = "./assests/images/Tails.jpg";
        divs.append("Tails")
        divs.append(image)
        }
        return image;
    }
};

function display20Flips(newCoin) {
    for (let i = 1; i <= 20; i++) {
        console.log(i + " " + newCoin.toString())
        //document.writeln(newCoin.toString())
    }
}
display20Flips(coin)

function display20images(displayImg) {
    for (let j = 1; j <= 20; j++) {
       displayImg.toHTML() 
    }
}
display20images(coin)