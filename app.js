console.log("I am here")

const containerDiv = document.getElementById('vizContainer');
const url = 'https://public.tableau.com/views/SP500IndexMeasuresSheets/Profitability'

const options = {
    hideTabs: true,
    onFirstInteractive: function() {
        console.log("Hey, my dashboard is ready")
    }
}

function initViz() {
    let viz = new tableau.Viz(containerDiv, url, options)
}

document.addEventListener('DOMContentLoaded', initViz)