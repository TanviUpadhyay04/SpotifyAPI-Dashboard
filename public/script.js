document.addEventListener('DOMContentLoaded', () => {
  
    const genreData = {
        labels: ['Indie Rock', 'Indie Pop', 'Metal Core', 'Liquid DnB', 'Electronic'],
        datasets: [{
            data: [45, 22, 17, 11, 5],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }]
    };

    const artistData = {
        labels: ['Devon Mckinney', 'Tomothy Neugen', 'Evan Howard', 'Victoria Robertson', 'Leslie Cooper'],
        datasets: [{
            data: [229, 127, 82, 53, 14],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }]
    };

    const listeningData = {
        labels: Array.from({length: 30}, (_, i) => `Nov ${i + 1}`),
        datasets: [{
            label: 'Listening Time (minutes)',
            data: [82, 120, 90, 110, 130, 150, 140, 160, 170, 180, 160, 150, 140, 120, 130, 140, 150, 160, 170, 180, 160, 150, 140, 120, 130, 140, 150, 160, 170, 180],
            borderColor: '#36A2EB',
            fill: false,
            tension: 0.1
        }]
    };

    const favoriteDayData = {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [{
            label: 'Favorite Day to Listen (minutes)',
            data: [502, 487, 864, 205, 512, 87, 136],
            backgroundColor: '#FF6384'
        }]
    };

  
    const genreCtx = document.getElementById('genre-chart').getContext('2d');
    new Chart(genreCtx, {
        type: 'pie',
        data: genreData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Top 5 Genres, %'
                }
            }
        }
    });

 
    const artistCtx = document.getElementById('artist-chart').getContext('2d');
    new Chart(artistCtx, {
        type: 'bar',
        data: artistData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Top 5 Artists'
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

   
    const listeningCtx = document.getElementById('listening-chart').getContext('2d');
    new Chart(listeningCtx, {
        type: 'line',
        data: listeningData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Detailed Listening Time'
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

    const favoriteDayCtx = document.getElementById('favorite-day-chart').getContext('2d');
    new Chart(favoriteDayCtx, {
        type: 'bar',
        data: favoriteDayData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Favorite Day to Listen, min'
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

   
    document.getElementById('month-selector').addEventListener('change', (event) => {
        const selectedMonth = event.target.value;
        
    });
});
