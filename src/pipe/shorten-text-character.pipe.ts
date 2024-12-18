import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'shortenTextCharacter'
})
export class ShortenTextCharacterPipe implements PipeTransform {
  transform(value: string, isExpanded: boolean, limit: number): string {
    if (!value || !limit) return '';

    if (isExpanded || value.length <= limit) {
      // Return the full text if expanded or shorter than the limit
      return value;
    }

    // Find the nearest space before the limit to avoid cutting words
    const cutIndex = value.substring(0, limit).lastIndexOf(' ');

    // Truncate to the nearest space or the limit if no space found
    return value.slice(0, cutIndex > -1 ? cutIndex : limit) + '...';
  }
}
