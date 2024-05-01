import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { By } from '@angular/platform-browser';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show default text if loader text not passed', () => {
    const loaderText = fixture.debugElement.query(By.css('.loader-subtext'));
    expect(loaderText.nativeElement.textContent).toEqual(component.defaultText);
  });

  it('should show loader text if loader text passed', () => {
    component.loaderText = 'loading.....';
    fixture.detectChanges();
    const loaderText = fixture.debugElement.query(By.css('.loader-subtext'));
    expect(loaderText.nativeElement.textContent).toEqual(component.loaderText);
  });
});
