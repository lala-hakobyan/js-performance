import {BarChartColor, ChartData, ChartsHtmlData, LoopData, Operator} from "../data/interface";
const fs = require('fs');

/**
 * Creates report table and charts dynamically based on given data and generates html file with reports
 * operatorCount is the count of operators used in generating report
 * @param data
 * @param operatorCount
 */
export function generateReport(data: LoopData[], operatorCount: number) {
    const nodeVersion = process.version;
    const fileVersion = nodeVersion.replace(/\./g, '-');
    const filePath = `results/js-loops-benchmark-sum-dynamic-${fileVersion}.html`;
    let chartDataSet: ChartData[] = [];
    const reportData = setReportData();
    const chartsData: ChartsHtmlData = setChartData();
    const html = setHtml();

    /**
     * Sets table report data
     * Adds color palette for each count group
     * Prepares chart report dataset
     */
    function setReportData(): string {
        let prevGroupCount = 0;
        let chartData: ChartData = {
            title: '',
            xValues: [],
            yValues: [],
            barColors: [],
        };
        const reportData = data.map((elem: LoopData, index: number) => {
            const colorPaletteNum = Math.floor(index / operatorCount);

            if(!prevGroupCount) {
                prevGroupCount = elem.count;
                chartData.title = `Array sum for ${elem.count} items`;
            }

            if(prevGroupCount!== elem.count) {
                prevGroupCount = elem.count;
                chartDataSet.push(chartData);
                chartData = {
                    title: `Array sum for ${elem.count} items`,
                    xValues: [Operator[elem.operator]],
                    yValues: [elem.time],
                    barColors: [BarChartColor[elem.operator]],
                };
            } else {
                chartData.xValues.push(Operator[elem.operator]);
                chartData.yValues.push(elem.time);
                chartData.barColors.push(BarChartColor[elem.operator]);
            }

            return `<tr class="clr-palette-${colorPaletteNum}">
                        <td>${elem.count}</td>
                        <td>${Operator[elem.operator]}</td>
                        <td>${elem.time}ms</td>
                    </tr>`;
        }).join('');

        chartDataSet.push(chartData);

        return reportData;
    }

    /**
     * Dynamically sets chart data: html canvas for charts and script for each chart
     */
    function setChartData(): ChartsHtmlData {
        let script = '';
        let html = '';

        chartDataSet.forEach((chart: ChartData, index: number) => {
            const chartId = `chartId-${index}`;
            const xValues: string = JSON.stringify(chart.xValues);
            const yValues: string = JSON.stringify(chart.yValues);
            const barColors: string = JSON.stringify(chart.barColors);
            const title: string = JSON.stringify(chart.title);

            html += `<canvas id="chartId-${index}" class="chart-canvas"></canvas>`;

            script += `<script> new Chart('${chartId}', {
                type: 'bar',
                data: {
                    labels: ${xValues},
                    datasets: [{
                        backgroundColor: ${barColors},
                        data: ${yValues},
                    }]
                },
                options: {
                    legend: {display: false},
                    title: {
                        display: true,
                        text: ${title},
                    }
                }
            }); </script>`;
        })

        return {html, script}
    }

    /**
     * Sets total html for the report file content
     */
    function setHtml() {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
            <title>Node.js ${nodeVersion}: Performance Report for Sum operation</title>
            <style>
                body,html {
                    font-size: 16px;
                    font-family: Arial, Helvetica, sans-serif;
                }
                .report-table {
                    border-spacing: 0;
                    text-align: left;
                }
                .report-table td, .report-table th {
                    padding: 5px;
                    border-bottom: 1px solid #a9a9a9;
                    border-right: 1px solid #a9a9a9;
                }
                .report-table th {
                    border-top: 1px solid #a9a9a9;
                }
                .report-table td:nth-child(1), .report-table th:nth-child(1) {
                    border-left: 1px solid #a9a9a9;
                }
                .clr-palette-0 {
                    background-color: #F3F3F3;
                }
                .clr-palette-1 {
                    background-color: #D9EAD3;
                }
                .clr-palette-2 {
                    background-color: #FFF2CC;
                }
                .clr-palette-3 {
                    background-color: #CFE2F3;
                }
                .chart-canvas, .report-table {
                    width: 100%;
                    max-width: 500px;
                }
                .page-title {
                    font-size: 1.35rem;
                    margin: 1rem 0 1rem 0;
                }
                .page-subtitle {
                    font-size: 1.2rem;
                    margin: 2rem 0 1rem 0;
                }
                @media screen and (min-width: 768px) {
                    .report-table {
                        font-size: 1.2rem;
                    }
                }
            </style>
        </head>
        <body>
        <h1 class="page-title">Performance Benchmarks for Sum operation for Node.js ${nodeVersion}</h1>
        <section>
            <h2 class="page-subtitle">Performance Report: Sum operation: Node.js ${nodeVersion}</h2>
            <table class="report-table">
                <thead>
                    <tr>
                        <th>Array length</th>
                        <th>Operator</th>
                        <th>~Result</th>
                    </tr>
                </thead>
                <tbody>
                    ${reportData}
                </tbody>
            </table>
        </section>
        
        <section>
            <h2 class="page-subtitle">Performance Charts: Sum operation: Node.js ${nodeVersion}</h2>
            ${chartsData.html}
            ${chartsData.script}
        </section>
        
        </body>
    </html>`;
    }

    /**
     * Generates report file
     * If file can be created, logs file path
     * Otherwise logs error
     */
    function generateFile() {
        fs.writeFile('./' + filePath, html, (err: Error) => {
            if (err) {
                console.error('Error in generating report file:', err);
            } else {
                console.log('HTML report file has been created under the following path:', filePath);
            }
        });
    }

    generateFile();
}

