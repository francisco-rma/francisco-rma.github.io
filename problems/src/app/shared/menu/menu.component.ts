import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

// const modulePaths = {
//   parseInt(ModuleEnum.Welcome): 'welcome/welcome',
//   parseInt(ModuleEnum.Sorting): 'sorting/sorting',
// }

export class MenuComponent implements OnInit {
  constructor(private router: Router) { }

  public listModule = [];

  public showModules: boolean = false;


  ngOnInit(): void {

  }

  navigate(event: any) {
    console.log(event);
    let moduleId = event.target?.id;
    console.log(moduleId);
  }

}
