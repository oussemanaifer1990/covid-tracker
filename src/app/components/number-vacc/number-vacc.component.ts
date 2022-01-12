import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {CovidService} from "../../services/covid.service";

@Component({
  selector: 'app-number-vacc',
  templateUrl: './number-vacc.component.html',
  styleUrls: ['./number-vacc.component.scss']
})
export class NumberVaccComponent implements OnInit {
  lisV: any;
  private baseUrl: string = environment.baseUrl;

  constructor(private covidServ: CovidService) {
  }

  ngOnInit(): void {
    this.Vaccin();
  }


  Vaccin(): void {
    this.covidServ.getNbrVacc()
      .subscribe(response => {

        if (response) {
        }
        this.lisV = response;
      });

  }

}
