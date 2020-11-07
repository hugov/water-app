import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create-and-edit',
  templateUrl: './categoria-create-and-edit.component.html',
  styleUrls: ['./categoria-create-and-edit.component.css'],
  providers: [MessageService]
})
export class CategoriaCreateAndEditComponent implements OnInit {

  situacao: SelectItem[];
  categoriaForm: FormGroup;
  categoriaId: number;
  categoria: Categoria;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.categoriaId = this.route.snapshot.params['categoriaId'];
    if (this.categoriaId) {
        this.categoriaService.getCategoriaById(this.categoriaId)
            .then( categoria => {
                this.updateCategoriaForm(categoria);
            })
            .catch(error => {
                this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
            });
    }

    this.categoriaForm = this.fb.group({
        'id': null,
        'descricao': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
        'situacao': new FormControl(null, Validators.required)
    });

    this.situacao = [
      {label: 'Selecione', value: null},
      {label: 'Ativo', value: {id: 1, name: 'Ativo', value: '1'}},
      {label: 'Inativo', value: {id: 0, name: 'Inativo', value: '0'}}
    ];

  }

  onSubmit(value: string) {
    this.categoriaService.save(value).then(_ => {
        this.categoriaForm.reset();
        this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
    }).catch( erro => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
    });
  }

  formInvalid() {
      return !this.categoriaForm.valid;
  }

  private updateCategoriaForm(categoria) {
    this.categoriaForm.patchValue({
        id: categoria.id,
        descricao: categoria.descricao,
        situacao: categoria.situacao
    });
  }

}
