import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtist'
})
export class SearchArtistPipe implements PipeTransform {

  transform(pipeData,pipeModifier): any {
    return pipeData.filter(eachitem =>{
      return(
        eachitem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachitem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
