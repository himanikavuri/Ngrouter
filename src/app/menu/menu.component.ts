import { Component, OnInit } from '@angular/core';
import{MenuItem}from 'primeng/api'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
        label: 'File',
        items: [
            {label: 'New', icon: 'fa-plus'},
            {label: 'Open', icon: 'fa-download'}
        ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Undo', icon: 'fa-refresh'},
            {label: 'Redo', icon: 'fa-repeat'}
        ]
    }];
    
}

}
