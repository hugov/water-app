import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta-create-and-edit',
  templateUrl: './conta-create-and-edit.component.html',
  styleUrls: ['./conta-create-and-edit.component.css'],
  providers: [MessageService]
})
export class ContaCreateAndEditComponent implements OnInit {

  tipoPessoa: SelectItem[];
  situacao: SelectItem[];
  contaForm: FormGroup;
  contaId: number;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private contaService: ContaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.contaId = this.route.snapshot.params['contaId'];
    if (this.contaId) {
        this.contaService.getContaById(this.contaId)
            .then( conta => {
                this.updateForm(conta);
            })
            .catch(error => {
                this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
            });
    }

    this.contaForm = this.fb.group({
        'id': null,
        'tipoPessoa': new FormControl(null, Validators.required),
        'nomeRazaoSocial': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
        'cpfCnpj': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
        'logradouro': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
        'numero': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
        'cidade': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
        'estado': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
        'complemento': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
        'telefone': new FormControl(null, Validators.required),
        'dataCadastro': new FormControl(null, Validators.required),
        'situacao': new FormControl(null, Validators.required)
    });

    this.tipoPessoa = [
      {label: 'Selecione', value: null},
      {label: 'Pessoa Fisica', value: {id: 1, name: 'Pessoa Fisica', value: '1'}},
      {label: 'Pessoa Juridica', value: {id: 2, name: 'Pessoa Juridica', value: '2'}}
    ];

    this.situacao = [
      {label: 'Selecione', value: null},
      {label: 'Ativo', value: {id: 1, name: 'Ativo', value: '1'}},
      {label: 'Inativo', value: {id: 0, name: 'Inativo', value: '0'}}
    ];

  }

  onSubmit(value: string) {
    this.contaService.save(value).then(_ => {
        this.contaForm.reset();
        this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
    }).catch( erro => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
    });
  }

  formInvalid() {
      return !this.contaForm.valid;
  }

  private updateForm(conta) {
    this.contaForm.patchValue({
        id: conta.id,
        tipoPessoa: conta.tipoPessoa,
        nomeRazaoSocial: conta.nomeRazaoSocial,
        cpfCnpj: conta.cpfCnpj,
        logradouro: conta.logradouro,
        numero: conta.numero,
        cidade: conta.cidade,
        estado: conta.estado,
        complemento: conta.complemento,
        telefone: conta.telefone,
        dataCadastro: conta.dataCadastro,
        situacao: conta.situacao
    });
  }

}
