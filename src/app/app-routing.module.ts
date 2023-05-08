import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AjaxOperatorComponent } from './diffpages/ajax-operator/ajax-operator.component';
import { AsyncSubjectComponent } from './diffpages/async-subject/async-subject.component';
import { PublishReplayOperatorComponent } from './diffpages/publish-replay-operator/publish-replay-operator.component';

const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      { path: 'buffer', component: BufferOperatorComponent },
      { path: 'buffercount', component: BufferCountOperatorComponent },
      { path: 'buffertime', component: BufferTimeOperatorComponent },
      { path: 'buffertoggle', component: BufferToggleOperatorComponent },
      { path: 'takeuntil', component: TakeUntilOperatorComponent },
      { path: 'takewhile', component: TakeWhileOperatorComponent },
      { path: 'skipwhile', component: SkipWhileOperatorComponent },
      { path: 'throttle', component: ThrottleOperatorComponent },
      { path: 'debounce', component: DebounceOperatorComponent },
      { path: 'elementat', component: ElementAtOperatorComponent },
      { path: 'ignoreelements', component: IgnoreElementsOperatorComponent },
      { path: 'mapto', component: MapToOperatorComponent },
      { path: 'ajax', component: AjaxOperatorComponent },
      { path: 'concatmapto', component: ConcatMapToOperatorComponent },
      { path: 'exhaustmap', component: ExhaustMapOperatorComponent },
      { path: 'switchmapto', component: SwitchMapToOperatorComponent },
      { path: 'multicast', component: MulticastOperatorComponent },
      { path: 'share', component: ShareOperatorComponent },
      { path: 'publishreplay', component: PublishReplayOperatorComponent },
      { path: 'catcherror', component: CatchErrorOperatorComponent },
      { path: 'retrywhen', component: RetryWhenOperatorComponent },
      { path: 'forkjoin', component: ForkJoinOperatorComponent },
      { path: 'race', component: RaceOperatorComponent },
      { path: 'zip', component: ZipOperatorComponent },
      { path: 'defer', component: DeferOperatorComponent },
      { path: 'range', component: RangeOperatorComponent },
      { path: 'timer', component: TimerOperatorComponent },
      { path: 'max', component: MaxOperatorComponent },
      { path: 'min', component: MinOperatorComponent },
      { path: 'isempty', component: IsEmptyOperatorComponent },
      { path: 'find', component: FindOperatorComponent },
      { path: 'every', component: EveryOperatorComponent },
      { path: 'defaultifempty', component: DefaultIfEmptyOperatorComponent },
      { path: 'toarray', component: ToArrayOperatorComponent },
      { path: 'subscribeon', component: SubscribeOnOperatorComponent },
      { path: 'startwith', component: StartWithOperatorComponent },
      { path: 'windowcount', component: WindowCountOperatorComponent },
      { path: 'windowtime', component: WindowTimeOperatorComponent },
      { path: 'windowtoggle', component: WindowToggleOperatorComponent },
      { path: 'windowwhen', component: WindowWhenOperatorComponent },
      {
        path: 'combinelatestall',
        component: CombineLatestAllOperatorComponent,
      },
      { path: 'withlatestfrom', component: WithLatestFromOperatorComponent },
      { path: 'groupby', component: GroupByOperatorComponent },
      { path: 'pairwise', component: PairwiseOperatorComponent },
      {
        path: 'distinctuntilkeychanged',
        component: DistinctUntilKeyChangedComponent,
      },
    ],
  },
  { path: 'subject', component: SubjectComponent },
  { path: 'coldobservable', component: ColdObservableComponent },
  { path: 'asyncsubject', component: AsyncSubjectComponent },
  { path: 'voidsubject', component: VoidSubjectComponent },
  { path: 'scheduler', component: SchedulersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
