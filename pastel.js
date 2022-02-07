// active nav
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}

const colors = ["#1572A1", "#9AD0EC", "#EFDAD7", "#E3BEC6", "#F3C5C5", "#C1A3A3", "#886F6F", "#694E4E", "#632626", "#9D5353", "#BF8B67", "#DACC96", "#6867AC", "#A267AC", "#CE7BB0", "#FFBCD1", "#D9D7F1", "#FFFDDE", "#E7FBBE", "#FFCBCB", "#D3DEDC", "#92A9BD", "#7C99AC", "#876445", "#CA965C", "#EEC373", "#F4DFBA", "#D77FA1", "#BAABDA", "#D6E5FA", "#F0ECE3", "#DFD3C3", "#C7B198", "#A68DAD", "#8E806A", "#C3B091", "#F2DDC1", "#E2C2B9", "#FF87CA", "#FFC4E1", "#EED7CE", "#EAEAEA", "#B983FF", "#94B3FD", "#94DAFF", "#99FEFF", "#89B5AF", "#96C7C1", "#DED9C4", "#D0CAB2", "#F6D7A7", "#F6EABE", "#C8E3D4", "#87AAAA", "#FEF5ED", "#D3E4CD", "#ADC2A9", "#99A799", "#D1E8E4", "#C37B89", "#BCCC9A", "#EAE7C6", "#F9F3DF", "#CDF2CA", "#FFC898", "#C6D57E", "#D57E7E", "#A2CDCD", "#FFE1AF", "#FF7878", "#E0C097", "#316B83", "#6D8299", "#8CA1A5", "#D5BFBF", "#FCFFA6", "#C1FFD7", "#B5DEFF", "#CAB8FF", "#F9F3DF", "#FDFCE5", "#D7E9F7", "#F4D19B", "#79B4B7", "#F8F0DF", "#9D9D9D", "#E2C2B9", "#BFD8B8", "#E7EAB5", "#CEE5D0", "#F7D59C", "#5E454B", "#BFA2DB", "#7F7C82", "#986D8E", "#87A8A4", "#6F4C5B", "#9E7777", "#DEBA9D", "#B5EAEA", "#FFBCBC", "#F38BA0", "#F6AE99", "#B97A95", "#716F81", "#F4DFD0", "#CDBBA7", "#B5CDA3", "#C9E4C5", "#BEAEE2", "#5D534A", "#F7DAD9", "#5F939A", "#3A6351", "#D8B384", "#CEE5D0", "#F4C7AB", "#CAF7E3", "#064420", "#94D0CC", "#FBC6A4", "#F4A9A8", "#CE97B0", "#AFB9C8", "#EEC4C4", "#F29191", "#CC9B6D", "#F1CA89", "#907FA4", "#A6D6D6", "#A7D0CD", "#A58FAA", "#DE8971", "#A0937D", "#5B6D5B", "#766161", "#87A7B3", "#98DDCA", "#D5ECC2", "#FFD3B4", "#FFAAA7", "#FBC6A4", "#70AF85", "#7C9473", "#9DAD7F", "#9DAB86", "#5AA469", "#8DB596", "#BEDBBB", "#8DB596", "#CCF6C8", "#FAFCC2", "#F6D6AD", "#726A95", "#A0C1B8", "#1572A1", "#D77FA1", "#5F939A", "#EB6383", "#EFEE9D", "#D1EAA3", "#DBC6EB", "#FEE2B3"
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number between 0 - xx
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}