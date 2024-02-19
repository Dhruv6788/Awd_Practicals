let changeBG = document.getElementById('changeBG');
let colors = ['lightgreen', 'lightblue', 'grey', 'purple', 'orange']
let i = 0;
setInterval(() => {
    changeBG.style.background = colors[i];

    if (i > 5) {
        i = 0
    }
    else {
        i++
    }
},
    7000);


addEventListener('change', function () {
    var mobileInput = document.getElementById('mobileNumber');
    if (mobileInput.value.length < 10) {
        mobileInput.classList.add('error');
        alert('Please enter a complete mobile number.');
    } else {
        // Remove the red background if the number is complete
        mobileInput.classList.remove('error');
        alert('Mobile number submitted successfully!');
    }
})


let isAnimating = false;
let animationInterval;

function toggleAnimation() {
    const frequencyInput = document.getElementById('frequency');
    const animatedImage = document.getElementById('animatedImage');

    if (!isAnimating) {
        const frequency = parseInt(frequencyInput.value);

        if (!isNaN(frequency) && frequency > 0) {
            isAnimating = true;
            animationInterval = setInterval(() => {
                animatedImage.src = 'image' + Math.floor(Math.random() * 3 + 1) + '.jpg';
            }, frequency);
        } else {
            alert('Please enter a valid positive frequency.');
        }
    } else {
        isAnimating = false;
        clearInterval(animationInterval);
        animatedImage.src = '';
    }
}