const coin = {
    state: 0,

    flip: function() {
        this.state = Math.round(Math.random() * (1 - 0) + 0);
    },

    toString: function() {
        if(this.state === 0) {
            return 'Heads';
        } else {
            return 'Tails';
        }
    },

    toHTML: function() {
        const image = document.createElement('img');
        if(this.state === 0) {
            image.src = './img/cara.jpg';
            image.alt = 'Heads';
        } else {
            image.src = './img/coroa.jpg';
            image.alt = 'Tails';
        }
        return image;
    }
}

function display20Flips() {
    let result = [];

    for(let i = 0; i < 20; i++) {
        coin.flip();
        result.push(coin.toString());
        let div = document.createElement('div');
        div.textContent = `${result[i]}`
        document.body.appendChild(div);
    }

    console.log(result);
    return result;
}
display20Flips();

function display20Images() {
    let result = [];

    for(let i = 0; i < 20; i++) {
        coin.flip();
        let imagem = coin.toHTML();
        imagem.style.width = '50px';
        imagem.style.height = '50px';
        result.push(imagem);
        document.body.appendChild(imagem);
    }

    console.log(result);
    return result;
}
display20Images();