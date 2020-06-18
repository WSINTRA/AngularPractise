import { Pipe, PipeTransform } from '@angular/core';
/*
Strips the Youtube URL into an ID
*/
@Pipe({name: 'getVideoID'})
export class GetVideoID implements PipeTransform {
  transform(value: string,) {
    return value.substr(value.length - 11)
  }
}