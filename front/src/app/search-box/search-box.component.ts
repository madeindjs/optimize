import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  public results = [];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {

    const params = new URLSearchParams;
    params.append('q', event.target.value);

    axios.get(`http://api.lvh.me/suggestions?${params.toString()}`)
        .then(res => this.results = res.data.map(d => d.keyword))
        .catch(e => console.error(e));
  }

}
