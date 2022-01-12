import {Component, OnInit} from '@angular/core';
import * as Highcharts from "highcharts";
import {environment} from "../../../environments/environment";
import {CovidService} from "../../services/covid.service";

@Component({
  selector: 'app-covid-graph',
  templateUrl: './covid-graph.component.html',
  styleUrls: ['./covid-graph.component.scss']
})
export class CovidGraphComponent implements OnInit {
  countr: any;
  show = true;

  constructor(private covidService: CovidService) {
  }

  ngOnInit(): void {
    this.vaccinFirstYear();
    this.vaccinFirstDay();
  }

  vaccinFirstYear(): void {
    this.covidService.getVaccinFirstYear()
      .subscribe(Response => {

        if (Response) {
        }
        console.log(Response)
        this.countr = Response;
        var obj = [];
        for (var i = 0; i < this.countr[0].series.length; i++) {
          obj.push({
            'name': this.countr[0].series[i].name,
            'data': this.countr[0].series[i].dataF
          })
        }

// @ts-ignore
        Highcharts.chart('container', {
          Chart: {
            type: 'area',
            height: 700
          },
          title: {
            text: 'Number of people vaccinated first dose in a country  in a year'
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.countr[0].categoriesY,

            tickmarkPlacement: 'on',
            title: {
              enabled: false
            }
          },
          series: obj
        });

      });
  }

  vaccinFirstDay(): void {
    this.covidService.getVaccinFirstDay()
      .subscribe(Response => {

        if (Response) {
        }
        console.log(Response)
        this.countr = Response;
        var obj = [];
        for (var i = 0; i < this.countr[0].series.length; i++) {
          obj.push({
            'name': this.countr[0].series[i].name,
            'data': this.countr[0].series[i].dataS
          })
        }

// @ts-ignore
        Highcharts.chart('containerF_day', {
          Chart: {
            type: 'area',
            height: 700
          },
          title: {
            text: 'Number of people vaccinated first dose in a country in a day'
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.countr[0].categoriesD,

            tickmarkPlacement: 'on',
            title: {
              enabled: false
            }
          },
          series: obj
        });

      });
  }

  vaccinSecondYear(): void {
    this.covidService.getVaccinFirstYear()
      .subscribe(Response => {

        if (Response) {
        }
        console.log(Response)
        this.countr = Response;
        var obj = [];
        for (var i = 0; i < this.countr[0].series.length; i++) {
          obj.push({
            'name': this.countr[0].series[i].name,
            'data': this.countr[0].series[i].dataS
          })
        }

        // @ts-ignore
        Highcharts.chart('containerS-year', {
          Chart: {
            type: 'area',
            height: 700
          },
          title: {
            text: 'Number of people vaccinated second dose  in a country  in a year'
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.countr[0].categoriesY,

            tickmarkPlacement: 'on',
            title: {
              enabled: false
            }
          },
          series: obj
        });

      });
  }

  vaccinSecondDay(): void {
    this.covidService.getVaccinFirstDay()
      .subscribe(Response => {

        if (Response) {
        }
        console.log(Response)
        this.countr = Response;
        var obj = [];
        for (var i = 0; i < this.countr[0].series.length; i++) {
          obj.push({
            'name': this.countr[0].series[i].name,
            'data': this.countr[0].series[i].dataF
          })
        }

        // @ts-ignore
        Highcharts.chart('containerS_day', {
          Chart: {
            type: 'area',
            height: 700
          },
          title: {
            text: 'Number of people vaccinated second dose  in a country  in a day'
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.countr[0].categoriesD,

            tickmarkPlacement: 'on',
            title: {
              enabled: false
            }
          },
          series: obj
        });

      });
  }

  clickFirst() {
    this.show = true;
    this.vaccinFirstYear();
    this.vaccinFirstDay();
  }

  clickSecond() {
    this.show = false;
    this.vaccinSecondYear();
    this.vaccinSecondDay();
  }
}



