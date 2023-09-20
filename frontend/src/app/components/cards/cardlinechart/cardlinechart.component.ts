import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Chart, LinearScale, CategoryScale, Title, Tooltip, Legend, LineController, PointElement, LineElement, ChartConfiguration, ChartType, ChartOptions } from 'chart.js';
import { map } from "rxjs";
import { dashboard } from "src/app/model/superviseur/Dashboards";
import { SuoerviseurserviceService } from "src/app/views/Superviseur/service/suoerviseurservice.service";



@Component({
  selector: 'app-cardlinechart',
  templateUrl: './cardlinechart.component.html',
  styleUrls: ['./cardlinechart.component.css']
})
export class CardlinechartComponent implements OnInit , AfterViewInit{
  constructor(private superviservice: SuoerviseurserviceService) {}
  ngOnInit() {
    this.getdashboard();    
  }
  ngAfterViewInit() {
    Chart.register(LinearScale, CategoryScale, Title, Tooltip, Legend, LineController, PointElement, LineElement);
    this.getdashboard().subscribe((res) => {
      this.dashboard = res;
      this.renderChart(); 
  });}
  dashboard: dashboard = new dashboard();
  getdashboard() {
    return this.superviservice.getdashboard().pipe(
      map((res: dashboard) => {
        this.dashboard = res;
        return res; // Return the data for further processing if needed
      })
    );
  }

  renderChart() {
    const scales = {
      x: {
        type: 'category',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
        ticks: {
          fontColor: 'rgba(255, 255, 255, .7)',
        },
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'X-Axis Label',
          fontColor: 'white',
        },
        grid: {
          display: false,
          borderDash: [2],
          borderDashOffset: [2],
          color: 'rgba(33, 37, 41, 0.3)',
          zeroLineColor: 'rgba(0, 0, 0, 0)',
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
      y: {
        type: 'linear',
        ticks: {
          fontColor: 'rgba(255, 255, 255, .7)',
        },
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Y-Axis Label',
          fontColor: 'white',
        },
        grid: {
          borderDash: [3],
          borderDashOffset: [3],
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.15)',
          zeroLineColor: 'rgba(0, 0, 0, 0)',
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
    };
  
    
    const config: ChartConfiguration = {
      type: "line" as ChartType,
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            // label: new Date().getFullYear().toString(),
            label: "Materiel",
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [12,10,15,25,27,32,23,40,31,29,50,52],
           // data: this.dashboard.materiel,
            fill: false,
          },
          {
            label: "Logiciel",
            fill: false,
            backgroundColor: 'rgba(220, 38, 38, 1)',
            borderColor: 'rgba(220, 38, 38, 1)',
            data: [12,16,20,54,40,47,62,70,59,66,38,52],
           // data: this.dashboard.logiciel,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        plugins: {
          tooltip: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        },
        scales: scales as unknown as ChartOptions['scales'], // Your scales configuration...
      } as ChartOptions,
    };
    let ctx: any = document.getElementById("line-chart") as HTMLCanvasElement;
    ctx = ctx.getContext("2d");
    new Chart(ctx, config);
  }
}
