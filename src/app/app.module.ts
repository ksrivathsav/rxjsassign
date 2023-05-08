import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorsComponent } from './diffpages/operators/operators.component';
import { BufferOperatorComponent } from './diffpages/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './diffpages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './diffpages/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleOperatorComponent } from './diffpages/buffer-toggle-operator/buffer-toggle-operator.component';
import { TakeUntilOperatorComponent } from './diffpages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './diffpages/take-while-operator/take-while-operator.component';
import { SkipWhileOperatorComponent } from './diffpages/skip-while-operator/skip-while-operator.component';
import { DistinctUntilKeyChangedComponent } from './diffpages/distinct-until-key-changed/distinct-until-key-changed.component';
import { ThrottleOperatorComponent } from './diffpages/throttle-operator/throttle-operator.component';
import { DebounceOperatorComponent } from './diffpages/debounce-operator/debounce-operator.component';
import { ElementAtOperatorComponent } from './diffpages/element-at-operator/element-at-operator.component';
import { IgnoreElementsOperatorComponent } from './diffpages/ignore-elements-operator/ignore-elements-operator.component';
import { MapToOperatorComponent } from './diffpages/map-to-operator/map-to-operator.component';
import { ExhaustMapOperatorComponent } from './diffpages/exhaust-map-operator/exhaust-map-operator.component';
import { SwitchMapToOperatorComponent } from './diffpages/switch-map-to-operator/switch-map-to-operator.component';
import { SubjectComponent } from './diffpages/subject/subject.component';
import { ColdObservableComponent } from './diffpages/cold-observable/cold-observable.component';
import { MulticastOperatorComponent } from './diffpages/multicast-operator/multicast-operator.component';
import { ShareOperatorComponent } from './diffpages/share-operators/share-operators.component';
import { VoidSubjectComponent } from './diffpages/void-subject/void-subject.component';
import { CatchErrorOperatorComponent } from './diffpages/catch-error-operator/catch-error-operator.component';
import { RetryWhenOperatorComponent } from './diffpages/retry-when-operator/retry-when-operator.component';
import { ConcatMapToOperatorComponent } from './diffpages/concat-operator/concat-operator.component';
import { ForkJoinOperatorComponent } from './diffpages/fork-join-operator/fork-join-operator.component';
import { RaceOperatorComponent } from './diffpages/race-operator/race-operator.component';
import { ZipOperatorComponent } from './diffpages/zip-operator/zip-operator.component';
import { SchedulersComponent } from './diffpages/schedulers/schedulers.component';
import { DeferOperatorComponent } from './diffpages/defer-operator/defer-operator.component';
import { RangeOperatorComponent } from './diffpages/range-operator/range-operator.component';
import { TimerOperatorComponent } from './diffpages/timer-operator/timer-operator.component';
import { MaxOperatorComponent } from './diffpages/max-operator/max-operator.component';
import { MinOperatorComponent } from './diffpages/min-operator/min-operator.component';
import { IsEmptyOperatorComponent } from './diffpages/is-empty-operator/is-empty-operator.component';
import { FindOperatorComponent } from './diffpages/find-operator/find-operator.component';
import { EveryOperatorComponent } from './diffpages/every-operator/every-operator.component';
import { DefaultIfEmptyOperatorComponent } from './diffpages/default-if-empty-operator/default-if-empty-operator.component';
import { ToArrayOperatorComponent } from './diffpages/to-array-operator/to-array-operator.component';
import { SubscribeOnOperatorComponent } from './diffpages/subscribe-on-operator/subscribe-on-operator.component';
import { CombineLatestAllOperatorComponent } from './diffpages/combine-latest-all-operator/combine-latest-all-operator.component';
import { StartWithOperatorComponent } from './diffpages/start-with-operator/start-with-operator.component';
import { WithLatestFromOperatorComponent } from './diffpages/with-latest-from-operator/with-latest-from-operator.component';
import { GroupByOperatorComponent } from './diffpages/group-by-operator/group-by-operator.component';
import { PairwiseOperatorComponent } from './diffpages/pairwise-operator/pairwise-operator.component';
import { WindowCountOperatorComponent } from './diffpages/window-count-operator/window-count-operator.component';
import { WindowTimeOperatorComponent } from './diffpages/window-time-operator/window-time-operator.component';
import { WindowToggleOperatorComponent } from './diffpages/window-toggle-operator/window-toggle-operator.component';
import { WindowWhenOperatorComponent } from './diffpages/window-when-operator/window-when-operator.component';
import { FunctionObervableComponent } from './components/function-obervable/function-obervable.component';
import { OperatorsBasicsComponent } from './components/operator-basics/operator-basics.component';
import { AjaxOperatorComponent } from './diffpages/ajax-operator/ajax-operator.component';
import { AsyncSubjectComponent } from './diffpages/async-subject/async-subject.component';
import { PublishReplayOperatorComponent } from './diffpages/publish-replay-operator/publish-replay-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionObervableComponent,
    OperatorsBasicsComponent,
    AjaxOperatorComponent,
    AsyncSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColdObservableComponent,
    FunctionObervableComponent,
    ColdObservableComponent,
    OperatorsBasicsComponent,
    OperatorsComponent,
    BufferOperatorComponent,
    BufferCountOperatorComponent,
    BufferTimeOperatorComponent,
    BufferToggleOperatorComponent,
    TakeUntilOperatorComponent,
    TakeWhileOperatorComponent,
    SkipWhileOperatorComponent,
    DistinctUntilKeyChangedComponent,
    ThrottleOperatorComponent,
    DebounceOperatorComponent,
    ElementAtOperatorComponent,
    IgnoreElementsOperatorComponent,
    MapToOperatorComponent,
    AjaxOperatorComponent,
    ConcatMapToOperatorComponent,
    ExhaustMapOperatorComponent,
    SwitchMapToOperatorComponent,
    SubjectComponent,
    ColdObservableComponent,
    MulticastOperatorComponent,
    ShareOperatorComponent,
    AsyncSubjectComponent,
    VoidSubjectComponent,
    PublishReplayOperatorComponent,
    CatchErrorOperatorComponent,
    RetryWhenOperatorComponent,
    ForkJoinOperatorComponent,
    RaceOperatorComponent,
    ZipOperatorComponent,
    SchedulersComponent,
    DeferOperatorComponent,
    RangeOperatorComponent,
    TimerOperatorComponent,
    MaxOperatorComponent,
    MinOperatorComponent,
    IsEmptyOperatorComponent,
    FindOperatorComponent,
    EveryOperatorComponent,
    DefaultIfEmptyOperatorComponent,
    ToArrayOperatorComponent,
    SubscribeOnOperatorComponent,
    CombineLatestAllOperatorComponent,
    StartWithOperatorComponent,
    WithLatestFromOperatorComponent,
    GroupByOperatorComponent,
    PairwiseOperatorComponent,
    WindowCountOperatorComponent,
    WindowTimeOperatorComponent,
    WindowToggleOperatorComponent,
    WindowWhenOperatorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
