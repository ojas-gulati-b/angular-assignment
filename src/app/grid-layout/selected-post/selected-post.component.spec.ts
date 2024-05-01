import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPostComponent } from './selected-post.component';
import { By } from '@angular/platform-browser';

describe('SelectedPostComponent', () => {
  let component: SelectedPostComponent;
  let fixture: ComponentFixture<SelectedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedPostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "no post selected" message if nothing is passed', () => {
    const selectedPostElement = fixture.debugElement.query(
      By.css('.selected-post-wrapper')
    );
    expect(selectedPostElement.nativeElement.textContent).toEqual(
      'No Post selected yet'
    );
  });

  it('should show selected id if id is passed', () => {
    component.selectedId = 1;
    fixture.detectChanges();
    const selectedPostElement = fixture.debugElement.query(
      By.css('.selected-id')
    );
    expect(selectedPostElement.nativeElement).not.toBeNull();
  });
});
