import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  contas: any[];

  constructor() { }

  async save(conta: any) {
    if (conta.id) {
        this.update(conta);
    } else {
        this.create(conta);
    }
  }

  async create(conta: any) {
      let contas = [];
      const contasStorage = await localStorage.getItem('@appConta');
      if (contasStorage) {
          contas = JSON.parse(contasStorage);
      }
      conta.id = new Date().getTime();
      contas.push(conta);
      localStorage.setItem('@appConta', JSON.stringify(contas));
  }

  async delete(contaId) {
      const contasStorage = await localStorage.getItem('@appConta');
      const contas = JSON.parse(contasStorage);
      const contasFiltered = contas.filter( conta => conta.id !== Number(contaId));
      localStorage.setItem('@appConta', JSON.stringify(contasFiltered));
  }

  async update(conta) {
      let contas = [];
      const contasStorage = await localStorage.getItem('@appConta');
      if (contasStorage) {
          contas = JSON.parse(contasStorage);
      }
      contas.map( (contasStorage, index) => {
          if (contasStorage.id === Number(conta.id)) {
              contas[index] = conta;
          }
      });
      localStorage.setItem('@appConta', JSON.stringify(contas));
  }

  async getContas() {
      this.contas = [];
      const contasStorage = await localStorage.getItem('@appConta');
      if (contasStorage) {
          this.contas = JSON.parse(contasStorage);
      }
      return this.contas;
  }

  async getContaById(contaId) {
      let contas = [];
      const contasStorage = await localStorage.getItem('@appConta');
      if (contasStorage) {
          contas = JSON.parse(contasStorage);
      }
      const contasFiltered = contas.filter( conta => (conta.id) ===  Number(contaId));
      return contasFiltered[0];
  }

  async getByName(value) {
      let contas = [];
      const contasStorage = await localStorage.getItem('@appConta');
      if (contasStorage) {
          contas = JSON.parse(contasStorage);
      }
      
      return contas.filter( conta => conta.name.toLowerCase().includes(value.toLowerCase()));
  }
}
