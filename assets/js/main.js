//Swiper
const swiper = new Swiper('.swiperUtilities', {
    slidesPerView: 'auto',
})

//Charts
const chart = document.querySelectorAll('.doughnut-chart')

//Type, Data and options
let chartGraph = new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: ['Pressão Arterial (BPM)', 'Peso (Kg)', 'Calorias (g)'],
        datasets: [{
            label: 'Dataset Simulator',
            data: [102, 64, 251],
            backgroundColor: [
                'rgba(255, 0, 0, 0.8)',
                'rgba(158, 255, 0, 0.8)',
                'rgba(255, 214, 0, 0.8)'
            ],
            borderAlign: 'center',
            borderJoinStyle: 'round',
            hoverOffset: 4
        }]
    }
}) 