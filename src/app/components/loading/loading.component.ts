import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements AfterViewInit,OnDestroy {

  loadingSubscription:Subscription;

  constructor(
    private loadingScreenService:LoadingService,
    private elmRef:ElementRef,
    private changeDetectorRef:ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loading$.pipe().subscribe((status:boolean) => {
      this.elmRef.nativeElement.style.display = status ? 'block' : 'none';
      this.changeDetectorRef.detectChanges();
    })
  };

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
