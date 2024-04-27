import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    searchValue: string = '';
    changesearchValue(eventData: Event){
        // console.log((<HTMLInputElement>eventData.target).value);
        this.searchValue = (<HTMLInputElement>eventData.target).value;
    }
}
