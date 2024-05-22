// relative-time.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: string): string {
    const previous = new Date(value);
    const current = new Date();
    const elapsed = current.getTime() - previous.getTime();

    // Calculate elapsed time in seconds
    const seconds = Math.floor(elapsed / 1000);

    // If less than a minute
    if (seconds < 60) {
      return 'Just now';
    }
    // If less than an hour
    else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} min${minutes > 1 ? '' : ''} ago`;
    }
    // If less than a day
    else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} h${hours > 1 ? '' : ''} ago`;
    }
    // If less than a month
    else if (seconds < 2592000) {
      const days = Math.floor(seconds / 86400);
      return `${days} day${days > 1 ? '' : ''} ago`;
    }
    // If less than a year
    else if (seconds < 31536000) {
      const months = Math.floor(seconds / 2592000);
      return `${months} month${months > 1 ? '' : ''} ago`;
    }
    // If more than a year
    else {
      const years = Math.floor(seconds / 31536000);
      return `${years} year${years > 1 ? '' : ''} ago`;
    }
  }
}
