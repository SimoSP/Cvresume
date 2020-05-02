/// Simo Partanen 1900414

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectpersonalPage } from './projectpersonal.page';

describe('ProjectpersonalPage', () => {
  let component: ProjectpersonalPage;
  let fixture: ComponentFixture<ProjectpersonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectpersonalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectpersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
