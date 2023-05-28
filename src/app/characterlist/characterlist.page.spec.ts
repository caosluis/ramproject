import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterlistPage } from './characterlist.page';

describe('CharacterlistPage', () => {
  let component: CharacterlistPage;
  let fixture: ComponentFixture<CharacterlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharacterlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
