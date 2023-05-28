import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.page.html',
  styleUrls: ['./characterlist.page.scss'],
})
export class CharacterlistPage implements OnInit {

  characterList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(`https://rickandmortyapi.com/api/character`).subscribe(res => {
      this.characterList = res.results
      console.log(this.characterList);
      
    }
    )
  }

}
