import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  public results = [];
  public search: string;
  public isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value: string) {
    this.results = [];
    this.search = value;
  }

  onChange(event) {
    const value = event.target.value;

    if (!value) {
      this.results = [];
      return;
    }

    this.isLoading = true;

    const params = new URLSearchParams;
    params.append('q', value);

    axios.get(`http://api.lvh.me/suggestions?${params.toString()}`)
        .then(res => this.results = res.data.map(d => d.keyword))
        .catch(e => console.error(e))
        .finally(() => this.isLoading = false);
  }

}
