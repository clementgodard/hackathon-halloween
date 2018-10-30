import { Pipe, PipeTransform } from '@angular/core';
import { Bonbon } from './bonbon';

@Pipe({
  name: 'triBonbon'
})
export class TriBonbonPipe implements PipeTransform {

  transform(tab: Bonbon[], search: string): Bonbon[] {
    const res: Bonbon[] = [];

    if (search === '') {
      return res;
    }

    for (let i = 0 ; i < tab.length ; i++) {
      if (tab[i].getNom().toLowerCase().includes(search.toLowerCase())) {
        res.push(tab[i]);
      }
    }

    return res;
  }

}
