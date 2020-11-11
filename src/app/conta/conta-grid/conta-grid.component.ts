import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conta-grid',
  templateUrl: './conta-grid.component.html',
  styleUrls: ['./conta-grid.component.css']
})
export class ContaGridComponent implements OnInit {

  @Input() contas = [];

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(conta) {
    this.delete.emit(conta);
  }

}
