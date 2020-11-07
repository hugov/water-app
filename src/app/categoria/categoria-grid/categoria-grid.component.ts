import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categoria-grid',
  templateUrl: './categoria-grid.component.html',
  styleUrls: ['./categoria-grid.component.css']
})
export class CategoriaGridComponent implements OnInit {

  @Input() categorias = [];

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(categoria) {
    this.delete.emit(categoria);
  }

}
