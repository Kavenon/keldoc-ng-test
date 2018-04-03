import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'humanAge'
})
export class HumanAgePipe implements PipeTransform {

  transform(age: number): number {
    if (!age) {
      return null;
    }
    return age < 4 ? age * 10 : age * 5;
  }

}
