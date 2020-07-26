//htmlからグラフを描画する要素（Canvas）を取得する
var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Green','Yellow','Pink'],
        datasets: [
            {
                type: 'bar',
                label:'toutou',
                data: [21, 31, 53,20,65],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255,159,78,0.2)',
                    'rgba(328,291,67,0.2)'
                ]
            }
        ]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    befinAtZero:true
                }
            }]
        }
    }
});
