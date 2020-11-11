import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta-search',
  templateUrl: './conta-search.component.html',
  styleUrls: ['./conta-search.component.css'],
  providers: [MessageService]
})
export class ContaSearchComponent implements OnInit {

  contas = [];
  inputSearch;

  constructor(
    private contaService: ContaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.load();
  }

  dialogDelete(conta) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir este registro ?',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.delete(conta);
        },
        reject: () => {
        }
    });
  }

  getContasByName(value) {
      this.contaService.getByName(value)
      .then( contas => this.contas = contas)
      .catch(error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
      });
  }

  private load() {
      this.contaService.getContas()
          .then(contas => {
              this.contas = contas;
          })
          .catch(error => {
              this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
      });
  }

  private delete(conta) {
      this.contaService.delete(conta.id).then(_ => {
          this.load();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
      }).catch(error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
      });
  }

}
