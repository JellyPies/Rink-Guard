import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number, append:string) : string {
	if (value.length <= length) return value;

	let truncatedValue = value.substring(0, length);

	if (append) {
		truncatedValue = truncatedValue + append;
	}

    return truncatedValue;
  }

}
