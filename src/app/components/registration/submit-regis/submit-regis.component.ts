import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-regis',
  templateUrl: './submit-regis.component.html',
  styleUrls: ['./submit-regis.component.css']
})
export class SubmitRegisComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl('/registration')
  }
  submit(){
    this.router.navigateByUrl('/regisresult')
  }

}
