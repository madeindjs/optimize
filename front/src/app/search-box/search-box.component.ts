import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  public suggestions = [];
  public search: string;
  public isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value: string) {
    this.suggestions = [];
    this.search = value;
  }

  onChange(event) {
    const value = event.target.value;

    if (!value) {
      this.suggestions = [];
      return;
    }

    this.isLoading = true;

    const params = new URLSearchParams;
    params.append('q', value);

    axios.get(`http://api.lvh.me/suggestions?${params.toString()}`)
        .then(res => this.suggestions = res.data.map(d => d.keyword))
        .catch(e => console.error(e))
        .finally(() => this.isLoading = false);
  }

}
