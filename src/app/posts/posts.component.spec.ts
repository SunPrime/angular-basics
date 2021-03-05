import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import {PostsService} from './posts.service';
import {HttpClient} from '@angular/common/http';
import {EMPTY, of} from 'rxjs';

describe('PostComponent', () => {
  let component: PostsComponent;
  let service: PostsService;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [ HttpClient ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    service = new PostsService(null);
    component = new PostsComponent(service);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();

  });

  it('should update posts length after ngOnInit', () => {
    const posts = [1, 2, 3, 4];
    spyOn(service, 'fetch').and.returnValue(of(posts));

    component.ngOnInit();

    expect(component.posts?.length).toBe(posts.length);

  });
});
