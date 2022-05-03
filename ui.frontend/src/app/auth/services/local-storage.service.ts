import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }

  deleteAll() {
    localStorage.clear();
  }
}
