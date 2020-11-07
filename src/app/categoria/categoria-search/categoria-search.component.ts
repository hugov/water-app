import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-search',
  templateUrl: './categoria-search.component.html',
  styleUrls: ['./categoria-search.component.css'],
  providers: [MessageService]
})
export class CategoriaSearchComponent implements OnInit {

  categorias = [];
  inputSearch;

  constructor(
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.loadcategorias();
  }

  dialogDelete(categoria) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir esta categoria?',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.deleteCategoria(categoria);
        },
        reject: () => {
        }
    });
}

getCategoriasByName(value) {
    this.categoriaService.getByName(value)
    .then( categorias => this.categorias = categorias)
    .catch(error => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
    });
}

private loadcategorias() {
    this.categoriaService.getCategorias()
        .then(categorias => {
            this.categorias = categorias;
        })
        .catch(error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
    });
}

private deleteCategoria(categoria) {
    this.categoriaService.delete(categoria.id).then(_ => {
        this.loadcategorias();
        this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
    }).catch(error => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
    });
}

}
