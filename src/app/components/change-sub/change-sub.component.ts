import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-sub',
  templateUrl: './change-sub.component.html',
  styleUrls: ['./change-sub.component.css']
})
export class ChangeSubComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl('/regisresult')
  }
}
