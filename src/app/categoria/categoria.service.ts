import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias: any[];

  constructor() { }

  async save(categoria: any) {
    if (categoria.id) {
        this.update(categoria);
    } else {
        this.create(categoria);
    }
  }

  async create(categoria: any) {
      let categorias = [];
      const categoriasStorage = await localStorage.getItem('@appCategoria');
      if (categoriasStorage) {
          categorias = JSON.parse(categoriasStorage);
      }
      categoria.id = new Date().getTime();
      categorias.push(categoria);
      localStorage.setItem('@appCategoria', JSON.stringify(categorias));
  }

  async delete(categoriaId) {
      const categoriasStorage = await localStorage.getItem('@appCategoria');
      const categorias = JSON.parse(categoriasStorage);
      const categoriasFiltered = categorias.filter( categoria => categoria.id !== Number(categoriaId));
      localStorage.setItem('@appCategoria', JSON.stringify(categoriasFiltered));
  }

  async update(categoria) {
      let categorias = [];
      const categoriasStorage = await localStorage.getItem('@appCategoria');
      if (categoriasStorage) {
          categorias = JSON.parse(categoriasStorage);
      }
      categorias.map( (categoriaStorage, index) => {
          if (categoriaStorage.id === Number(categoria.id)) {
              categorias[index] = categoria;
          }
      });
      localStorage.setItem('@appCategoria', JSON.stringify(categorias));
  }

  async getCategorias() {
      this.categorias = [];
      const categoriasStorage = await localStorage.getItem('@appCategoria');
      if (categoriasStorage) {
          this.categorias = JSON.parse(categoriasStorage);
      }
      return this.categorias;
  }

  async getCategoriaById(idItem) {
      let categorias = [];
      const categoriasStorage = await localStorage.getItem('@appCategoria');
      if (categoriasStorage) {
          categorias = JSON.parse(categoriasStorage);
      }
      const categoriasFiltered = categorias.filter( categoria => (categoria.id) ===  Number(idItem));
      return categoriasFiltered[0];
  }

  async getByName(value) {
      let categorias = [];
      const categoriasStorage = await localStorage.getItem('@appCategoria');
      if (categoriasStorage) {
          categorias = JSON.parse(categoriasStorage);
      }
      const categoriasFiltered = categorias.filter( categoria => categoria.name.toLowerCase().includes(value.toLowerCase()));
      return categoriasFiltered;
  }

}
