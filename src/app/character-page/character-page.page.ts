import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.page.html',
  styleUrls: ['./character-page.page.scss'],
})
export class CharacterPagePage implements OnInit {

  characterId: string | null = ''
  characterData: any = {}
  constructor(private activatedroute: ActivatedRoute, private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.characterId = this.activatedroute.snapshot.paramMap.get('id')
    this.httpclient.get<any>(`https://rickandmortyapi.com/api/character/${this.characterId}`).subscribe(res => {
      this.characterData = res;

    })
  }

}
