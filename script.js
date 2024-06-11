document.addEventListener('DOMContentLoaded', function () {
    const candles = document.querySelectorAll('.candle');
    candles.forEach(candle => {
        candle.addEventListener('click', function () {
            this.classList.toggle('blow');
        });
    });
});
