/// Simo Partanen 1900414

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectteamPage } from './projectteam.page';

describe('ProjectteamPage', () => {
  let component: ProjectteamPage;
  let fixture: ComponentFixture<ProjectteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectteamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
