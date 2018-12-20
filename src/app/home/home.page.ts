import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../components/spinner/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.activate();
    setTimeout(() => {
      this.spinnerService.deactivate();
    }, 3000);
  }

}
