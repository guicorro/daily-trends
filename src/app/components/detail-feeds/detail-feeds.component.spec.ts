import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFeedsComponent } from './detail-feeds.component';

describe('DetailFeedsComponent', () => {
  let component: DetailFeedsComponent;
  let fixture: ComponentFixture<DetailFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
