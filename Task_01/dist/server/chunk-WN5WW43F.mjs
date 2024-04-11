import './polyfills.server.mjs';
import{$ as E3,A as K2,B as q,C as l,D as f,E as V,F as N3,G as k,H as J2,I as S3,J as w3,K as m,L as k3,M as A3,N as D3,O as F3,P as g2,Q as P,R as P3,S as f2,U as _3,Z as T3,a as g3,aa as B3,b as L3,ba as _1,c as x3,d as Y2,da as Z2,e as z2,ea as R3,f as K,fa as c1,g as V2,ga as U3,h as l2,ha as I3,i as X2,ia as O3,j as J,ja as G3,k as D,l as M2,m as F,ma as W3,n as Z,o as Q2,p as F2,q as C2,qa as q3,r as b3,s as y3,sa as L2,t as L,ta as j3,u as H,v as P2,w as O,x as W,y as P1,z as y}from"./chunk-YMMBOLT6.mjs";import{a as B,b as H2}from"./chunk-VVCT4QZE.mjs";var c4=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(H(P2),H(F2))},c.\u0275dir=F({type:c});let a=c;return a})(),a4=(()=>{let c=class c extends c4{};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=Q2(c)))(n||c)}})(),c.\u0275dir=F({type:c,features:[O]});let a=c;return a})(),l1=new l2(""),R6={provide:l1,useExisting:z2(()=>B1),multi:!0},B1=(()=>{let c=class c extends a4{writeValue(e){this.setProperty("checked",e)}};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=Q2(c)))(n||c)}})(),c.\u0275dir=F({type:c,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,n){r&1&&k("change",function(t){return n.onChange(t.target.checked)})("blur",function(){return n.onTouched()})},features:[g2([R6]),O]});let a=c;return a})(),U6={provide:l1,useExisting:z2(()=>b2),multi:!0};function I6(){let a=_1()?_1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var O6=new l2(""),b2=(()=>{let c=class c extends c4{constructor(e,r,n){super(e,r),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!I6())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(H(P2),H(F2),H(O6,8))},c.\u0275dir=F({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,n){r&1&&k("input",function(t){return n._handleInput(t.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(t){return n._compositionEnd(t.target.value)})},features:[g2([U6]),O]});let a=c;return a})();var R1=new l2(""),U1=new l2("");function e4(a){return a!=null}function i4(a){return _3(a)?g3(a):a}function r4(a){let c={};return a.forEach(i=>{c=i!=null?B(B({},c),i):c}),Object.keys(c).length===0?null:c}function n4(a,c){return c.map(i=>i(a))}function G6(a){return!a.validate}function s4(a){return a.map(c=>G6(c)?c:i=>c.validate(i))}function W6(a){if(!a)return null;let c=a.filter(e4);return c.length==0?null:function(i){return r4(n4(i,c))}}function t4(a){return a!=null?W6(s4(a)):null}function q6(a){if(!a)return null;let c=a.filter(e4);return c.length==0?null:function(i){let e=n4(i,c).map(i4);return x3(e).pipe(L3(r4))}}function o4(a){return a!=null?q6(s4(a)):null}function $3(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function l4(a){return a._rawValidators}function f4(a){return a._rawAsyncValidators}function T1(a){return a?Array.isArray(a)?a:[a]:[]}function e1(a,c){return Array.isArray(a)?a.includes(c):a===c}function Y3(a,c){let i=T1(c);return T1(a).forEach(r=>{e1(i,r)||i.push(r)}),i}function X3(a,c){return T1(c).filter(i=>!e1(a,i))}var i1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=t4(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=o4(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},m2=class extends i1{get formDirective(){return null}get path(){return null}},h2=class extends i1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},r1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},j6={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},S5=H2(B({},j6),{"[class.ng-submitted]":"isSubmitted"}),f1=(()=>{let c=class c extends r1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(H(h2,2))},c.\u0275dir=F({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,n){r&2&&K2("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[O]});let a=c;return a})(),m4=(()=>{let c=class c extends r1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(H(m2,10))},c.\u0275dir=F({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,n){r&2&&K2("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[O]});let a=c;return a})();var _2="VALID",a1="INVALID",x2="PENDING",T2="DISABLED";function h4(a){return(m1(a)?a.validators:a)||null}function $6(a){return Array.isArray(a)?t4(a):a||null}function u4(a,c){return(m1(c)?c.asyncValidators:a)||null}function Y6(a){return Array.isArray(a)?o4(a):a||null}function m1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function X6(a,c,i){let e=a.controls;if(!(c?Object.keys(e):e).length)throw new Y2(1e3,"");if(!e[i])throw new Y2(1001,"")}function Q6(a,c,i){a._forEachChild((e,r)=>{if(i[r]===void 0)throw new Y2(1002,"")})}var n1=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===_2}get invalid(){return this.status===a1}get pending(){return this.status==x2}get disabled(){return this.status===T2}get enabled(){return this.status!==T2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(Y3(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(Y3(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(X3(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(X3(c,this._rawAsyncValidators))}hasValidator(c){return e1(this._rawValidators,c)}hasAsyncValidator(c){return e1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=x2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=T2,this.errors=null,this._forEachChild(e=>{e.disable(H2(B({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(H2(B({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=_2,this._forEachChild(e=>{e.enable(H2(B({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(H2(B({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_2||this.status===x2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?T2:_2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=x2,this._hasOwnPendingAsyncValidator=!0;let i=i4(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new C2,this.statusChanges=new C2}_calculateStatus(){return this._allControlsDisabled()?T2:this.errors?a1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x2)?x2:this._anyControlsHaveStatus(a1)?a1:_2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){m1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=$6(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=Y6(this._rawAsyncValidators)}},s1=class extends n1{constructor(c,i,e){super(h4(i),u4(e,i)),this.controls=c,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,i){return this.controls[c]?this.controls[c]:(this.controls[c]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(c,i,e={}){this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(c,i={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(c,i,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],i&&this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,i={}){Q6(this,!0,c),Object.keys(c).forEach(e=>{X6(this,!0,e),this.controls[e].setValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(c,i={}){c!=null&&(Object.keys(c).forEach(e=>{let r=this.controls[e];r&&r.patchValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(c={},i={}){this._forEachChild((e,r)=>{e.reset(c?c[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(c,i,e)=>(c[e]=i.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(i,e)=>e._syncPendingControls()?!0:i);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(i=>{let e=this.controls[i];e&&c(e,i)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[i,e]of Object.entries(this.controls))if(this.contains(i)&&c(e))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(i,e,r)=>((e.enabled||this.disabled)&&(i[r]=e.value),i))}_reduceChildren(c,i){let e=c;return this._forEachChild((r,n)=>{e=i(e,r,n)}),e}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var h1=new l2("CallSetDisabledState",{providedIn:"root",factory:()=>u1}),u1="always";function v4(a,c){return[...c.path,a]}function E1(a,c,i=u1){I1(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),J6(a,c),c0(a,c),Z6(a,c),K6(a,c)}function Q3(a,c,i=!0){let e=()=>{};c.valueAccessor&&(c.valueAccessor.registerOnChange(e),c.valueAccessor.registerOnTouched(e)),o1(a,c),a&&(c._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function t1(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function K6(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function I1(a,c){let i=l4(a);c.validator!==null?a.setValidators($3(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=f4(a);c.asyncValidator!==null?a.setAsyncValidators($3(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();t1(c._rawValidators,r),t1(c._rawAsyncValidators,r)}function o1(a,c){let i=!1;if(a!==null){if(c.validator!==null){let r=l4(a);if(Array.isArray(r)&&r.length>0){let n=r.filter(s=>s!==c.validator);n.length!==r.length&&(i=!0,a.setValidators(n))}}if(c.asyncValidator!==null){let r=f4(a);if(Array.isArray(r)&&r.length>0){let n=r.filter(s=>s!==c.asyncValidator);n.length!==r.length&&(i=!0,a.setAsyncValidators(n))}}}let e=()=>{};return t1(c._rawValidators,e),t1(c._rawAsyncValidators,e),i}function J6(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&d4(a,c)})}function Z6(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&d4(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function d4(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function c0(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function a0(a,c){a==null,I1(a,c)}function e0(a,c){return o1(a,c)}function p4(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function i0(a){return Object.getPrototypeOf(a.constructor)===a4}function r0(a,c){a._syncPendingControls(),c.forEach(i=>{let e=i.control;e.updateOn==="submit"&&e._pendingChange&&(i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function H4(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(n=>{n.constructor===b2?i=n:i0(n)?e=n:r=n}),r||e||i||null}function n0(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function K3(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function J3(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var a2=class extends n1{constructor(c=null,i,e){super(h4(i),u4(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),m1(i)&&(i.nonNullable||i.initialValueIsDefault)&&(J3(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){K3(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){K3(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){J3(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var s0=a=>a instanceof a2;var t0={provide:h2,useExisting:z2(()=>O1)},Z3=Promise.resolve(),O1=(()=>{let c=class c extends h2{constructor(e,r,n,s,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new a2,this._registered=!1,this.name="",this.update=new C2,this._parent=e,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=H4(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),p4(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){E1(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Z3.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,n=r!==0&&E3(r);Z3.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?v4(e,this._parent):[e]}};c.\u0275fac=function(r){return new(r||c)(H(m2,9),H(R1,10),H(U1,10),H(l1,10),H(T3,8),H(h1,8))},c.\u0275dir=F({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[J.None,"disabled","isDisabled"],model:[J.None,"ngModel","model"],options:[J.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[g2([t0]),O,Z]});let a=c;return a})(),z4=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=F({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let a=c;return a})();var V4=new l2("");var o0={provide:m2,useExisting:z2(()=>G1)},G1=(()=>{let c=class c extends m2{constructor(e,r,n){super(),this.callSetDisabledState=n,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new C2,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(o1(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let r=this.form.get(e.path);return E1(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){Q3(e.control||null,e,!1),n0(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,r0(this.form,this.directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,n=this.form.get(e.path);r!==n&&(Q3(r||null,e),s0(n)&&(E1(n,e,this.callSetDisabledState),e.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);a0(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let r=this.form.get(e.path);r&&e0(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){I1(this.form,this),this._oldForm&&o1(this._oldForm,this)}_checkFormPresent(){this.form}};c.\u0275fac=function(r){return new(r||c)(H(R1,10),H(U1,10),H(h1,8))},c.\u0275dir=F({type:c,selectors:[["","formGroup",""]],hostBindings:function(r,n){r&1&&k("submit",function(t){return n.onSubmit(t)})("reset",function(){return n.onReset()})},inputs:{form:[J.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[g2([o0]),O,Z]});let a=c;return a})();var l0={provide:h2,useExisting:z2(()=>W1)},W1=(()=>{let c=class c extends h2{set isDisabled(e){}constructor(e,r,n,s,t){super(),this._ngModelWarningConfig=t,this._added=!1,this.name=null,this.update=new C2,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=H4(this,s)}ngOnChanges(e){this._added||this._setUpControl(),p4(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return v4(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};c._ngModelWarningSentOnce=!1,c.\u0275fac=function(r){return new(r||c)(H(m2,13),H(R1,10),H(U1,10),H(l1,10),H(V4,8))},c.\u0275dir=F({type:c,selectors:[["","formControlName",""]],inputs:{name:[J.None,"formControlName","name"],isDisabled:[J.None,"disabled","isDisabled"],model:[J.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[g2([l0]),O,Z]});let a=c;return a})();var M4=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=M2({type:c}),c.\u0275inj=V2({});let a=c;return a})();var C4=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:h1,useValue:e.callSetDisabledState??u1}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=M2({type:c}),c.\u0275inj=V2({imports:[M4]});let a=c;return a})(),g4=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:V4,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:h1,useValue:e.callSetDisabledState??u1}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=M2({type:c}),c.\u0275inj=V2({imports:[M4]});let a=c;return a})();function x4(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function u(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?x4(Object(i),!0).forEach(function(e){b(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):x4(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function b1(a){"@babel/helpers - typeof";return b1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},b1(a)}function f0(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function b4(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function m0(a,c,i){return c&&b4(a.prototype,c),i&&b4(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function b(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function s3(a,c){return u0(a)||d0(a,c)||Q4(a,c)||H0()}function q2(a){return h0(a)||v0(a)||Q4(a)||p0()}function h0(a){if(Array.isArray(a))return X1(a)}function u0(a){if(Array.isArray(a))return a}function v0(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function d0(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,n=!1,s,t;try{for(i=i.call(a);!(r=(s=i.next()).done)&&(e.push(s.value),!(c&&e.length===c));r=!0);}catch(o){n=!0,t=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw t}}return e}}function Q4(a,c){if(a){if(typeof a=="string")return X1(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return X1(a,c)}}function X1(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function p0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y4=function(){},t3={},K4={},J4=null,Z4={mark:y4,measure:y4};try{typeof window<"u"&&(t3=window),typeof document<"u"&&(K4=document),typeof MutationObserver<"u"&&(J4=MutationObserver),typeof performance<"u"&&(Z4=performance)}catch{}var z0=t3.navigator||{},N4=z0.userAgent,S4=N4===void 0?"":N4,i2=t3,g=K4,w4=J4,v1=Z4,A5=!!i2.document,X=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",c6=~S4.indexOf("MSIE")||~S4.indexOf("Trident/"),d1,p1,H1,z1,V1,j="___FONT_AWESOME___",Q1=16,a6="fa",e6="svg-inline--fa",d2="data-fa-i2svg",K1="data-fa-pseudo-element",V0="data-fa-pseudo-element-pending",o3="data-prefix",l3="data-icon",k4="fontawesome-i2svg",M0="async",C0=["HTML","HEAD","STYLE","SCRIPT"],i6=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),C="classic",x="sharp",f3=[C,x];function j2(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[C]}})}var U2=j2((d1={},b(d1,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),b(d1,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),d1)),I2=j2((p1={},b(p1,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),b(p1,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),p1)),O2=j2((H1={},b(H1,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),b(H1,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),H1)),g0=j2((z1={},b(z1,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),b(z1,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),z1)),L0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,r6="fa-layers-text",x0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,b0=j2((V1={},b(V1,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),b(V1,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),V1)),n6=[1,2,3,4,5,6,7,8,9,10],y0=n6.concat([11,12,13,14,15,16,17,18,19,20]),N0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],u2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G2=new Set;Object.keys(I2[C]).map(G2.add.bind(G2));Object.keys(I2[x]).map(G2.add.bind(G2));var S0=[].concat(f3,q2(G2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",u2.GROUP,u2.SWAP_OPACITY,u2.PRIMARY,u2.SECONDARY]).concat(n6.map(function(a){return"".concat(a,"x")})).concat(y0.map(function(a){return"w-".concat(a)})),B2=i2.FontAwesomeConfig||{};function w0(a){var c=g.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function k0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}g&&typeof g.querySelector=="function"&&(A4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],A4.forEach(function(a){var c=s3(a,2),i=c[0],e=c[1],r=k0(w0(i));r!=null&&(B2[e]=r)}));var A4,s6={styleDefault:"solid",familyDefault:"classic",cssPrefix:a6,replacementClass:e6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B2.familyPrefix&&(B2.cssPrefix=B2.familyPrefix);var w2=u(u({},s6),B2);w2.autoReplaceSvg||(w2.observeMutations=!1);var d={};Object.keys(s6).forEach(function(a){Object.defineProperty(d,a,{enumerable:!0,set:function(i){w2[a]=i,R2.forEach(function(e){return e(d)})},get:function(){return w2[a]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(c){w2.cssPrefix=c,R2.forEach(function(i){return i(d)})},get:function(){return w2.cssPrefix}});i2.FontAwesomeConfig=d;var R2=[];function A0(a){return R2.push(a),function(){R2.splice(R2.indexOf(a),1)}}var e2=Q1,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D0(a){if(!(!a||!X)){var c=g.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=g.head.childNodes,e=null,r=i.length-1;r>-1;r--){var n=i[r],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=n)}return g.head.insertBefore(c,e),a}}var F0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function W2(){for(var a=12,c="";a-- >0;)c+=F0[Math.random()*62|0];return c}function k2(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function m3(a){return a.classList?k2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function t6(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function P0(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(t6(a[i]),'" ')},"").trim()}function S1(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function h3(a){return a.size!==G.size||a.x!==G.x||a.y!==G.y||a.rotate!==G.rotate||a.flipX||a.flipY}function _0(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),s="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(t)},v={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:v}}function T0(a){var c=a.transform,i=a.width,e=i===void 0?Q1:i,r=a.height,n=r===void 0?Q1:r,s=a.startCentered,t=s===void 0?!1:s,o="";return t&&c6?o+="translate(".concat(c.x/e2-e/2,"em, ").concat(c.y/e2-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/e2,"em), calc(-50% + ").concat(c.y/e2,"em)) "):o+="translate(".concat(c.x/e2,"em, ").concat(c.y/e2,"em) "),o+="scale(".concat(c.size/e2*(c.flipX?-1:1),", ").concat(c.size/e2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var E0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function o6(){var a=a6,c=e6,i=d.cssPrefix,e=d.replacementClass,r=E0;if(i!==a||e!==c){var n=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(n,".".concat(i,"-")).replace(s,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var D4=!1;function q1(){d.autoAddCss&&!D4&&(D0(o6()),D4=!0)}var B0={mixout:function(){return{dom:{css:o6,insertCss:q1}}},hooks:function(){return{beforeDOMElementCreation:function(){q1()},beforeI2svg:function(){q1()}}}},$=i2||{};$[j]||($[j]={});$[j].styles||($[j].styles={});$[j].hooks||($[j].hooks={});$[j].shims||($[j].shims=[]);var R=$[j],l6=[],R0=function a(){g.removeEventListener("DOMContentLoaded",a),y1=1,l6.map(function(c){return c()})},y1=!1;X&&(y1=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),y1||g.addEventListener("DOMContentLoaded",R0));function U0(a){X&&(y1?setTimeout(a,0):l6.push(a))}function $2(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,n=r===void 0?[]:r;return typeof a=="string"?t6(a):"<".concat(c," ").concat(P0(e),">").concat(n.map($2).join(""),"</").concat(c,">")}function F4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var I0=function(c,i){return function(e,r,n,s){return c.call(i,e,r,n,s)}},j1=function(c,i,e,r){var n=Object.keys(c),s=n.length,t=r!==void 0?I0(i,r):i,o,v,h;for(e===void 0?(o=1,h=c[n[0]]):(o=0,h=e);o<s;o++)v=n[o],h=t(h,c[v],v,c);return h};function O0(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var n=a.charCodeAt(i++);(n&64512)==56320?c.push(((r&1023)<<10)+(n&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function J1(a){var c=O0(a);return c.length===1?c[0].toString(16):null}function G0(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function P4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function Z1(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,n=P4(c);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(a,P4(c)):R.styles[a]=u(u({},R.styles[a]||{}),n),a==="fas"&&Z1("fa",c)}var M1,C1,g1,y2=R.styles,W0=R.shims,q0=(M1={},b(M1,C,Object.values(O2[C])),b(M1,x,Object.values(O2[x])),M1),u3=null,f6={},m6={},h6={},u6={},v6={},j0=(C1={},b(C1,C,Object.keys(U2[C])),b(C1,x,Object.keys(U2[x])),C1);function $0(a){return~S0.indexOf(a)}function Y0(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!$0(r)?r:null}var d6=function(){var c=function(n){return j1(y2,function(s,t,o){return s[o]=j1(t,n,{}),s},{})};f6=c(function(r,n,s){if(n[3]&&(r[n[3]]=s),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=s})}return r}),m6=c(function(r,n,s){if(r[s]=s,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=s})}return r}),v6=c(function(r,n,s){var t=n[2];return r[s]=s,t.forEach(function(o){r[o]=s}),r});var i="far"in y2||d.autoFetchSvg,e=j1(W0,function(r,n){var s=n[0],t=n[1],o=n[2];return t==="far"&&!i&&(t="fas"),typeof s=="string"&&(r.names[s]={prefix:t,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});h6=e.names,u6=e.unicodes,u3=w1(d.styleDefault,{family:d.familyDefault})};A0(function(a){u3=w1(a.styleDefault,{family:d.familyDefault})});d6();function v3(a,c){return(f6[a]||{})[c]}function X0(a,c){return(m6[a]||{})[c]}function v2(a,c){return(v6[a]||{})[c]}function p6(a){return h6[a]||{prefix:null,iconName:null}}function Q0(a){var c=u6[a],i=v3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function r2(){return u3}var d3=function(){return{prefix:null,iconName:null,rest:[]}};function w1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?C:i,r=U2[e][a],n=I2[e][a]||I2[e][r],s=a in R.styles?a:null;return n||s||null}var _4=(g1={},b(g1,C,Object.keys(O2[C])),b(g1,x,Object.keys(O2[x])),g1);function k1(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,n=(c={},b(c,C,"".concat(d.cssPrefix,"-").concat(C)),b(c,x,"".concat(d.cssPrefix,"-").concat(x)),c),s=null,t=C;(a.includes(n[C])||a.some(function(v){return _4[C].includes(v)}))&&(t=C),(a.includes(n[x])||a.some(function(v){return _4[x].includes(v)}))&&(t=x);var o=a.reduce(function(v,h){var p=Y0(d.cssPrefix,h);if(y2[h]?(h=q0[t].includes(h)?g0[t][h]:h,s=h,v.prefix=h):j0[t].indexOf(h)>-1?(s=h,v.prefix=w1(h,{family:t})):p?v.iconName=p:h!==d.replacementClass&&h!==n[C]&&h!==n[x]&&v.rest.push(h),!r&&v.prefix&&v.iconName){var z=s==="fa"?p6(v.iconName):{},M=v2(v.prefix,v.iconName);z.prefix&&(s=null),v.iconName=z.iconName||M||v.iconName,v.prefix=z.prefix||v.prefix,v.prefix==="far"&&!y2.far&&y2.fas&&!d.autoFetchSvg&&(v.prefix="fas")}return v},d3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===x&&(y2.fass||d.autoFetchSvg)&&(o.prefix="fass",o.iconName=v2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=r2()||"fas"),o}var K0=function(){function a(){f0(this,a),this.definitions={}}return m0(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(t){i.definitions[t]=u(u({},i.definitions[t]||{}),s[t]),Z1(t,s[t]);var o=O2[C][t];o&&Z1(o,s[t]),d6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(n){var s=r[n],t=s.prefix,o=s.iconName,v=s.icon,h=v[2];i[t]||(i[t]={}),h.length>0&&h.forEach(function(p){typeof p=="string"&&(i[t][p]=v)}),i[t][o]=v}),i}}]),a}(),T4=[],N2={},S2={},J0=Object.keys(S2);function Z0(a,c){var i=c.mixoutsTo;return T4=a,N2={},Object.keys(S2).forEach(function(e){J0.indexOf(e)===-1&&delete S2[e]}),T4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(i[s]=r[s]),b1(r[s])==="object"&&Object.keys(r[s]).forEach(function(t){i[s]||(i[s]={}),i[s][t]=r[s][t]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(s){N2[s]||(N2[s]=[]),N2[s].push(n[s])})}e.provides&&e.provides(S2)}),i}function c3(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var n=N2[a]||[];return n.forEach(function(s){c=s.apply(null,[c].concat(e))}),c}function p2(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=N2[a]||[];r.forEach(function(n){n.apply(null,i)})}function Y(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return S2[a]?S2[a].apply(null,c):void 0}function a3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||r2();if(c)return c=v2(i,c)||c,F4(H6.definitions,i,c)||F4(R.styles,i,c)}var H6=new K0,c8=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,p2("noAuto")},a8={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(p2("beforeI2svg",c),Y("pseudoElements2svg",c),Y("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,U0(function(){i8({autoReplaceSvgRoot:i}),p2("watch",c)})}},e8={icon:function(c){if(c===null)return null;if(b1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:v2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=w1(c[0]);return{prefix:e,iconName:v2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(d.cssPrefix,"-"))>-1||c.match(L0))){var r=k1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||r2(),iconName:v2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var n=r2();return{prefix:n,iconName:v2(n,c)||c}}}},_={noAuto:c8,config:d,dom:a8,parse:e8,library:H6,findIconDefinition:a3,toHtml:$2},i8=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?g:i;(Object.keys(R.styles).length>0||d.autoFetchSvg)&&X&&d.autoReplaceSvg&&_.dom.i2svg({node:e})};function A1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return $2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(X){var e=g.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function r8(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,n=a.styles,s=a.transform;if(h3(s)&&i.found&&!e.found){var t=i.width,o=i.height,v={x:t/o/2,y:.5};r.style=S1(u(u({},n),{},{"transform-origin":"".concat(v.x+s.x/16,"em ").concat(v.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function n8(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,n=a.symbol,s=n===!0?"".concat(c,"-").concat(d.cssPrefix,"-").concat(i):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:s}),children:e}]}]}function p3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,n=a.iconName,s=a.transform,t=a.symbol,o=a.title,v=a.maskId,h=a.titleId,p=a.extra,z=a.watchable,M=z===void 0?!1:z,S=e.found?e:i,T=S.width,E=S.height,U=r==="fak",N=[d.replacementClass,n?"".concat(d.cssPrefix,"-").concat(n):""].filter(function(Q){return p.classes.indexOf(Q)===-1}).filter(function(Q){return Q!==""||!!Q}).concat(p.classes).join(" "),w={children:[],attributes:u(u({},p.attributes),{},{"data-prefix":r,"data-icon":n,class:N,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(E)})},I=U&&!~p.classes.indexOf("fa-fw")?{width:"".concat(T/E*16*.0625,"em")}:{};M&&(w.attributes[d2]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(h||W2())},children:[o]}),delete w.attributes.title);var A=u(u({},w),{},{prefix:r,iconName:n,main:i,mask:e,maskId:v,transform:s,symbol:t,styles:u(u({},I),p.styles)}),t2=e.found&&i.found?Y("generateAbstractMask",A)||{children:[],attributes:{}}:Y("generateAbstractIcon",A)||{children:[],attributes:{}},o2=t2.children,F1=t2.attributes;return A.children=o2,A.attributes=F1,t?n8(A):r8(A)}function E4(a){var c=a.content,i=a.width,e=a.height,r=a.transform,n=a.title,s=a.extra,t=a.watchable,o=t===void 0?!1:t,v=u(u(u({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(v[d2]="");var h=u({},s.styles);h3(r)&&(h.transform=T0({transform:r,startCentered:!0,width:i,height:e}),h["-webkit-transform"]=h.transform);var p=S1(h);p.length>0&&(v.style=p);var z=[];return z.push({tag:"span",attributes:v,children:[c]}),n&&z.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),z}function s8(a){var c=a.content,i=a.title,e=a.extra,r=u(u(u({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),n=S1(e.styles);n.length>0&&(r.style=n);var s=[];return s.push({tag:"span",attributes:r,children:[c]}),i&&s.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),s}var $1=R.styles;function e3(a){var c=a[0],i=a[1],e=a.slice(4),r=s3(e,1),n=r[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(u2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(u2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(u2.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:i,icon:s}}var t8={found:!1,width:512,height:512};function o8(a,c){!i6&&!d.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function i3(a,c){var i=c;return c==="fa"&&d.styleDefault!==null&&(c=r2()),new Promise(function(e,r){var n={found:!1,width:512,height:512,icon:Y("missingIconAbstract")||{}};if(i==="fa"){var s=p6(a)||{};a=s.iconName||a,c=s.prefix||c}if(a&&c&&$1[c]&&$1[c][a]){var t=$1[c][a];return e(e3(t))}o8(a,c),e(u(u({},t8),{},{icon:d.showMissingIcons&&a?Y("missingIconAbstract")||{}:{}}))})}var B4=function(){},r3=d.measurePerformance&&v1&&v1.mark&&v1.measure?v1:{mark:B4,measure:B4},E2='FA "6.5.2"',l8=function(c){return r3.mark("".concat(E2," ").concat(c," begins")),function(){return z6(c)}},z6=function(c){r3.mark("".concat(E2," ").concat(c," ends")),r3.measure("".concat(E2," ").concat(c),"".concat(E2," ").concat(c," begins"),"".concat(E2," ").concat(c," ends"))},H3={begin:l8,end:z6},L1=function(){};function R4(a){var c=a.getAttribute?a.getAttribute(d2):null;return typeof c=="string"}function f8(a){var c=a.getAttribute?a.getAttribute(o3):null,i=a.getAttribute?a.getAttribute(l3):null;return c&&i}function m8(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(d.replacementClass)}function h8(){if(d.autoReplaceSvg===!0)return x1.replace;var a=x1[d.autoReplaceSvg];return a||x1.replace}function u8(a){return g.createElementNS("http://www.w3.org/2000/svg",a)}function v8(a){return g.createElement(a)}function V6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?u8:v8:i;if(typeof a=="string")return g.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(s){r.setAttribute(s,a.attributes[s])});var n=a.children||[];return n.forEach(function(s){r.appendChild(V6(s,{ceFn:e}))}),r}function d8(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var x1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(V6(r),i)}),i.getAttribute(d2)===null&&d.keepOriginalSource){var e=g.createComment(d8(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~m3(i).indexOf(d.replacementClass))return x1.replace(c);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(t,o){return o===d.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",n.toNode.join(" "))}var s=e.map(function(t){return $2(t)}).join(`
`);i.setAttribute(d2,""),i.innerHTML=s}};function U4(a){a()}function M6(a,c){var i=typeof c=="function"?c:L1;if(a.length===0)i();else{var e=U4;d.mutateApproach===M0&&(e=i2.requestAnimationFrame||U4),e(function(){var r=h8(),n=H3.begin("mutate");a.map(r),n(),i()})}}var z3=!1;function C6(){z3=!0}function n3(){z3=!1}var N1=null;function I4(a){if(w4&&d.observeMutations){var c=a.treeCallback,i=c===void 0?L1:c,e=a.nodeCallback,r=e===void 0?L1:e,n=a.pseudoElementsCallback,s=n===void 0?L1:n,t=a.observeMutationsRoot,o=t===void 0?g:t;N1=new w4(function(v){if(!z3){var h=r2();k2(v).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!R4(p.addedNodes[0])&&(d.searchPseudoElements&&s(p.target),i(p.target)),p.type==="attributes"&&p.target.parentNode&&d.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&R4(p.target)&&~N0.indexOf(p.attributeName))if(p.attributeName==="class"&&f8(p.target)){var z=k1(m3(p.target)),M=z.prefix,S=z.iconName;p.target.setAttribute(o3,M||h),S&&p.target.setAttribute(l3,S)}else m8(p.target)&&r(p.target)})}}),X&&N1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function p8(){N1&&N1.disconnect()}function H8(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var n=r.split(":"),s=n[0],t=n.slice(1);return s&&t.length>0&&(e[s]=t.join(":").trim()),e},{})),i}function z8(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=k1(m3(a));return r.prefix||(r.prefix=r2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=X0(r.prefix,a.innerText)||v3(r.prefix,J1(a.innerText))),!r.iconName&&d.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function V8(a){var c=k2(a.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return d.autoA11y&&(i?c["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||W2()):(c["aria-hidden"]="true",c.focusable="false")),c}function M8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function O4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=z8(a),e=i.iconName,r=i.prefix,n=i.rest,s=V8(a),t=c3("parseNodeAttributes",{},a),o=c.styleParser?H8(a):[];return u({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},t)}var C8=R.styles;function g6(a){var c=d.autoReplaceSvg==="nest"?O4(a,{styleParser:!1}):O4(a);return~c.extra.classes.indexOf(r6)?Y("generateLayersText",a,c):Y("generateSvgReplacementMutation",a,c)}var n2=new Set;f3.map(function(a){n2.add("fa-".concat(a))});Object.keys(U2[C]).map(n2.add.bind(n2));Object.keys(U2[x]).map(n2.add.bind(n2));n2=q2(n2);function G4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();var i=g.documentElement.classList,e=function(p){return i.add("".concat(k4,"-").concat(p))},r=function(p){return i.remove("".concat(k4,"-").concat(p))},n=d.autoFetchSvg?n2:f3.map(function(h){return"fa-".concat(h)}).concat(Object.keys(C8));n.includes("fa")||n.push("fa");var s=[".".concat(r6,":not([").concat(d2,"])")].concat(n.map(function(h){return".".concat(h,":not([").concat(d2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var t=[];try{t=k2(a.querySelectorAll(s))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var o=H3.begin("onTree"),v=t.reduce(function(h,p){try{var z=g6(p);z&&h.push(z)}catch(M){i6||M.name==="MissingIcon"&&console.error(M)}return h},[]);return new Promise(function(h,p){Promise.all(v).then(function(z){M6(z,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),h()})}).catch(function(z){o(),p(z)})})}function g8(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;g6(a).then(function(i){i&&M6([i],c)})}function L8(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:a3(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:a3(r||{})),a(e,u(u({},i),{},{mask:r}))}}var x8=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?G:e,n=i.symbol,s=n===void 0?!1:n,t=i.mask,o=t===void 0?null:t,v=i.maskId,h=v===void 0?null:v,p=i.title,z=p===void 0?null:p,M=i.titleId,S=M===void 0?null:M,T=i.classes,E=T===void 0?[]:T,U=i.attributes,N=U===void 0?{}:U,w=i.styles,I=w===void 0?{}:w;if(c){var A=c.prefix,t2=c.iconName,o2=c.icon;return A1(u({type:"icon"},c),function(){return p2("beforeDOMElementCreation",{iconDefinition:c,params:i}),d.autoA11y&&(z?N["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(S||W2()):(N["aria-hidden"]="true",N.focusable="false")),p3({icons:{main:e3(o2),mask:o?e3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:t2,transform:u(u({},G),r),symbol:s,title:z,maskId:h,titleId:S,extra:{attributes:N,styles:I,classes:E}})})}},b8={mixout:function(){return{icon:L8(x8)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=G4,i.nodeCallback=g8,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?g:e,n=i.callback,s=n===void 0?function(){}:n;return G4(r,s)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,n=e.title,s=e.titleId,t=e.prefix,o=e.transform,v=e.symbol,h=e.mask,p=e.maskId,z=e.extra;return new Promise(function(M,S){Promise.all([i3(r,t),h.iconName?i3(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var E=s3(T,2),U=E[0],N=E[1];M([i,p3({icons:{main:U,mask:N},prefix:t,iconName:r,transform:o,symbol:v,maskId:p,title:n,titleId:s,extra:z,watchable:!0})])}).catch(S)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,n=i.main,s=i.transform,t=i.styles,o=S1(t);o.length>0&&(r.style=o);var v;return h3(s)&&(v=Y("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),e.push(v||n.icon),{children:e,attributes:r}}}},y8={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,n=r===void 0?[]:r;return A1({type:"layer"},function(){p2("beforeDOMElementCreation",{assembler:i,params:e});var s=[];return i(function(t){Array.isArray(t)?t.map(function(o){s=s.concat(o.abstract)}):s=s.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(q2(n)).join(" ")},children:s}]})}}}},N8={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,n=r===void 0?null:r,s=e.classes,t=s===void 0?[]:s,o=e.attributes,v=o===void 0?{}:o,h=e.styles,p=h===void 0?{}:h;return A1({type:"counter",content:i},function(){return p2("beforeDOMElementCreation",{content:i,params:e}),s8({content:i.toString(),title:n,extra:{attributes:v,styles:p,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(q2(t))}})})}}}},S8={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?G:r,s=e.title,t=s===void 0?null:s,o=e.classes,v=o===void 0?[]:o,h=e.attributes,p=h===void 0?{}:h,z=e.styles,M=z===void 0?{}:z;return A1({type:"text",content:i},function(){return p2("beforeDOMElementCreation",{content:i,params:e}),E4({content:i,transform:u(u({},G),n),title:t,extra:{attributes:p,styles:M,classes:["".concat(d.cssPrefix,"-layers-text")].concat(q2(v))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,n=e.transform,s=e.extra,t=null,o=null;if(c6){var v=parseInt(getComputedStyle(i).fontSize,10),h=i.getBoundingClientRect();t=h.width/v,o=h.height/v}return d.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([i,E4({content:i.innerHTML,width:t,height:o,transform:n,title:r,extra:s,watchable:!0})])}}},w8=new RegExp('"',"ug"),W4=[1105920,1112319];function k8(a){var c=a.replace(w8,""),i=G0(c,0),e=i>=W4[0]&&i<=W4[1],r=c.length===2?c[0]===c[1]:!1;return{value:J1(r?c[0]:c),isSecondary:e||r}}function q4(a,c){var i="".concat(V0).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var n=k2(a.children),s=n.filter(function(o2){return o2.getAttribute(K1)===c})[0],t=i2.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(x0),v=t.getPropertyValue("font-weight"),h=t.getPropertyValue("content");if(s&&!o)return a.removeChild(s),e();if(o&&h!=="none"&&h!==""){var p=t.getPropertyValue("content"),z=~["Sharp"].indexOf(o[2])?x:C,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?I2[z][o[2].toLowerCase()]:b0[z][v],S=k8(p),T=S.value,E=S.isSecondary,U=o[0].startsWith("FontAwesome"),N=v3(M,T),w=N;if(U){var I=Q0(T);I.iconName&&I.prefix&&(N=I.iconName,M=I.prefix)}if(N&&!E&&(!s||s.getAttribute(o3)!==M||s.getAttribute(l3)!==w)){a.setAttribute(i,w),s&&a.removeChild(s);var A=M8(),t2=A.extra;t2.attributes[K1]=c,i3(N,M).then(function(o2){var F1=p3(u(u({},A),{},{icons:{main:o2,mask:d3()},prefix:M,iconName:w,extra:t2,watchable:!0})),Q=g.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(Q,a.firstChild):a.appendChild(Q),Q.outerHTML=F1.map(function(B6){return $2(B6)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function A8(a){return Promise.all([q4(a,"::before"),q4(a,"::after")])}function D8(a){return a.parentNode!==document.head&&!~C0.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(K1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function j4(a){if(X)return new Promise(function(c,i){var e=k2(a.querySelectorAll("*")).filter(D8).map(A8),r=H3.begin("searchPseudoElements");C6(),Promise.all(e).then(function(){r(),n3(),c()}).catch(function(){r(),n3(),i()})})}var F8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=j4,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?g:e;d.searchPseudoElements&&j4(r)}}},$4=!1,P8={mixout:function(){return{dom:{unwatch:function(){C6(),$4=!0}}}},hooks:function(){return{bootstrap:function(){I4(c3("mutationObserverCallbacks",{}))},noAuto:function(){p8()},watch:function(i){var e=i.observeMutationsRoot;$4?n3():I4(c3("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Y4=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var n=r.toLowerCase().split("-"),s=n[0],t=n.slice(1).join("-");if(s&&t==="h")return e.flipX=!0,e;if(s&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(s){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},_8={mixout:function(){return{parse:{transform:function(i){return Y4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=Y4(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,n=i.containerWidth,s=i.iconWidth,t={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),v="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),h="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(o," ").concat(v," ").concat(h)},z={transform:"translate(".concat(s/2*-1," -256)")},M={outer:t,inner:p,path:z};return{tag:"g",attributes:u({},M.outer),children:[{tag:"g",attributes:u({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),M.path)}]}]}}}},Y1={x:0,y:0,width:"100%",height:"100%"};function X4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function T8(a){return a.tag==="g"?a.children:[a]}var E8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),n=r?k1(r.split(" ").map(function(s){return s.trim()})):d3();return n.prefix||(n.prefix=r2()),i.mask=n,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,n=i.main,s=i.mask,t=i.maskId,o=i.transform,v=n.width,h=n.icon,p=s.width,z=s.icon,M=_0({transform:o,containerWidth:p,iconWidth:v}),S={tag:"rect",attributes:u(u({},Y1),{},{fill:"white"})},T=h.children?{children:h.children.map(X4)}:{},E={tag:"g",attributes:u({},M.inner),children:[X4(u({tag:h.tag,attributes:u(u({},h.attributes),M.path)},T))]},U={tag:"g",attributes:u({},M.outer),children:[E]},N="mask-".concat(t||W2()),w="clip-".concat(t||W2()),I={tag:"mask",attributes:u(u({},Y1),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,U]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:T8(z)},I]};return e.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(N,")")},Y1)}),{children:e,attributes:r}}}},B8={provides:function(c){var i=!1;i2.matchMedia&&(i=i2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=u(u({},n),{},{attributeName:"opacity"}),t={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:u(u({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:u(u({},s),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},R8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return i.symbol=n,i}}}},U8=[B0,b8,y8,N8,S8,F8,P8,_8,E8,B8,R8];Z0(U8,{mixoutsTo:_});var D5=_.noAuto,F5=_.config,P5=_.library,_5=_.dom,L6=_.parse,T5=_.findIconDefinition,E5=_.toHtml,x6=_.icon,B5=_.layer,I8=_.text,O8=_.counter;var G8=["*"],W8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},q8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},j8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},$8=a=>a.prefix!==void 0&&a.iconName!==void 0,Y8=(a,c)=>$8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},X8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=K({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),Q8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let n of r.icon[2])typeof n=="string"&&(this.definitions[r.prefix][n]=r)}}addIconPacks(...e){for(let r of e){let n=Object.keys(r).map(s=>r[s]);this.addIcons(...n)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=K({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),K8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=F({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Z]});let a=c;return a})(),J8=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(H(P2),H(F2))},c.\u0275cmp=D({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Z,P],ngContentSelectors:G8,decls:1,vars:0,template:function(r,n){r&1&&(S3(),w3(0))},encapsulation:2});let a=c;return a})(),A2=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,n,s,t){this.sanitizer=e,this.config=r,this.iconLibrary=n,this.stackItem=s,this.classes=[],t!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){q8();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(r);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=Y8(e,this.config.defaultPrefix);if("icon"in r)return r;let n=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return n??(W8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?L6.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...j8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let n=x6(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(H(O3),H(X8),H(Q8),H(K8,8),H(J8,8))},c.\u0275cmp=D({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,n){r&2&&(N3("innerHTML",n.renderedIconHTML,b3),P1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Z,P],decls:0,vars:0,template:function(r,n){},encapsulation:2});let a=c;return a})();var D2=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=M2({type:c}),c.\u0275inj=V2({});let a=c;return a})();var b6={prefix:"fas",iconName:"basketball",icon:[512,512,[127936,"basketball-ball"],"f434","M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"]};var y6={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]};var N6={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var S6=(()=>{let c=class c{constructor(e){this.httpClient=e}registerUSer(e){return console.log(e),this.httpClient.post("http://localhost:8080/user/register",e)}};c.\u0275fac=function(r){return new(r||c)(X2(c1))},c.\u0275prov=K({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var s2=(()=>{let c=class c{constructor(e){this.httpclient=e,this.userEmail="",this.username=""}setProfileData(e){this.profileData=e}getProfileData(){return this.profileData}setNextComponentData(e){this.nextComponentData=e}getNextComponentData(){return this.nextComponentData}updateUser(e,r){return console.log(r),console.log(e),this.httpclient.patch(`http://localhost:8080/user/update/${r}`,e)}};c.\u0275fac=function(r){return new(r||c)(X2(c1))},c.\u0275prov=K({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();function a5(a,c){a&1&&(l(0,"p",7),m(1,"Username has already been taken"),f())}function e5(a,c){if(a&1&&V(0,"fa-icon",14),a&2){let i=J2();y("icon",i.faTriangleExclamation)}}var k6=(()=>{let c=class c{constructor(e,r,n){this.regsiterUSerService=e,this.router=r,this.usedetailService=n,this.faTriangleExclamation=N6,this.error=!1,this.success=!1,this.register=new s1({name:new a2(""),username:new a2(""),email:new a2(""),password:new a2(""),termsandCondition:new a2("")})}onSubmit(){console.log(this.register.value),this.regsiterUSerService.registerUSer(this.register.value).subscribe(e=>{this.usedetailService.userEmail=this.register.value.email,this.usedetailService.username=this.register.value.username,this.router.navigate(["profile"])},e=>{this.error=!0})}};c.\u0275fac=function(r){return new(r||c)(H(S6),H(L2),H(s2))},c.\u0275cmp=D({type:c,selectors:[["app-register"]],standalone:!0,features:[P],decls:48,vars:4,consts:[[1,"container-fluid","p-0"],[1,"row"],[1,"col-lg-5","col-sm-5","image_section"],[1,"text_section"],[1,"d-flex","align-items-center","justify-content-center"],["src","../../assets/registerPage.png","alt",""],[1,"col-lg-7","col-sm-7","container","form-section"],[2,"color","red"],["action","",1,"pt-5",3,"ngSubmit","formGroup"],[1,"row","pb-4","input_section"],[1,"col-lg-6"],["for","name"],["type","text","name","","id","name","formControlName","name"],[1,"d-flex"],[2,"color","chocolate",3,"icon"],["for","username",1,"ms-2"],["type","text","name","","id","username","formControlName","username",3,"ngClass"],[1,"col-lg-12"],["for","email"],["type","email","id","email","formControlName","email"],[1,"row","input_section"],["for","password"],["type","password","id","password","placeholder","6+ characters","formControlName","password"],[1,"mb-3","form-check"],["type","checkbox","id","exampleCheck1","formControlName","termsandCondition",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],[1,"createBtn"]],template:function(r,n){r&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span"),m(5,"dribble"),f(),l(6,"h3"),m(7,"Discover the world's top "),V(8,"br"),m(9," Designers & Creatives"),f()(),l(10,"div",4),V(11,"img",5),f()(),l(12,"div",6)(13,"h2"),m(14,"Sign in to Dribble"),f(),W(15,a5,2,0,"p",7),l(16,"form",8),k("ngSubmit",function(){return n.onSubmit()}),l(17,"div",9)(18,"div",10)(19,"label",11),m(20,"Name"),f(),V(21,"br")(22,"input",12),f(),l(23,"div",10)(24,"div",13),W(25,e5,1,1,"fa-icon",14),l(26,"label",15),m(27,"Username"),f(),V(28,"br"),f(),V(29,"input",16),f()(),l(30,"div",9)(31,"div",17)(32,"label",18),m(33,"Email"),f(),V(34,"input",19),f()(),l(35,"div",20)(36,"div",17)(37,"label",21),m(38,"Password"),f(),V(39,"input",22),f()(),l(40,"div",23),V(41,"input",24),l(42,"label",25),m(43,"Creating an account means you're okay with our "),l(44,"span"),m(45,"Terms of services, Privacy Policy and our default Notification Setting"),f()()(),l(46,"button",26),m(47,"Create Account"),f()()()()()),r&2&&(L(15),q(15,n.error?15:-1),L(),y("formGroup",n.register),L(9),q(25,n.error?25:-1),L(4),y("ngClass",n.error?"error":"usernameInput"))},dependencies:[g4,z4,b2,B1,f1,m4,G1,W1,D2,A2,Z2],styles:['@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6K6MmTpA.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6D6MmTpA.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6I6MmTpA.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6J6MmTpA.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6H6Mk.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.image_section[_ngcontent-%COMP%]{background-color:#f3d184;height:100vh}.image_section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:75vh;width:100vh;position:absolute;bottom:0}.text_section[_ngcontent-%COMP%]{padding:60px}.text_section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b58619;font-size:30px;font-family:Pacifico,cursive;font-weight:400;font-style:normal}.text_section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-top:10px;font-weight:700;color:#8c660c}.input_section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .usernameInput[_ngcontent-%COMP%]{border:none;background-color:#dfdfdf;line-height:40px;border-radius:5px;width:100%;padding:2px 10px}.form-section[_ngcontent-%COMP%]{padding:100px 210px}.form-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .input_section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.createBtn[_ngcontent-%COMP%]{background-color:#eb386e;color:#fff;padding:7px 25px;border-radius:5px;border:none}.error[_ngcontent-%COMP%]{background-color:#e0a7a7!important;color:#ed3e3e}@media screen and (max-width: 920px){.image_section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60vh;width:70vh}}@media screen and (max-width: 520px){.image_section[_ngcontent-%COMP%]{height:50vh}.image_section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;height:50vh;width:60vh}}']});let a=c;return a})();var i5=()=>({border:"dashed rgb(212, 212, 212);"});function r5(a,c){if(a&1&&V(0,"fa-icon",6),a&2){let i=J2();y("icon",i.faCamera)}}var A6=(()=>{let c=class c{constructor(e,r){this.router=e,this.userdataService=r,this.faCamera=y6,this.selectedImage=null,this.location="",this.profileData={}}onFileChange(e){let r=e.target.files[0];if(console.log(r),r){let n=new FileReader;n.onload=s=>{this.selectedImage=s.target?.result},n.readAsDataURL(r)}}onSubmit(){this.profileData={location:this.location},this.userdataService.setProfileData(this.profileData),this.router.navigate(["profile-details"])}};c.\u0275fac=function(r){return new(r||c)(H(L2),H(s2))},c.\u0275cmp=D({type:c,selectors:[["app-profile"]],standalone:!0,features:[P],decls:24,vars:5,consts:[[1,"container","profile_container"],[1,"row"],[1,"col-lg-4"],[1,"heading","my-4"],[1,"profile_image",3,"ngStyle"],["alt","",3,"src"],[2,"color","rgb(212, 212, 212)",3,"icon"],[1,"col-lg-6","d-flex","align-items-center","image_section"],["for","file"],["type","file","src","","alt","","accept","image/*","id","file","hidden","",1,"customeFileBtn",3,"change"],[1,"row","my-5"],[1,"col-lg-12","location_section"],["for","location"],["type","text","placeholder","Enter a location","id","location",3,"ngModelChange","ngModel"],[1,"btn","next_btn",3,"click"]],template:function(r,n){r&1&&(l(0,"div",0)(1,"h1"),m(2,"Welcome! Lets create your profile"),f(),l(3,"p"),m(4,"Let others get to know you better! You can do these later"),f(),l(5,"div",1)(6,"div",2)(7,"div",3),m(8," Add an avatar "),f(),l(9,"div",4),V(10,"img",5),W(11,r5,1,1,"fa-icon",6),f()(),l(12,"div",7)(13,"label",8),m(14,"Choose Image"),f(),l(15,"input",9),k("change",function(t){return n.onFileChange(t)}),f()()(),l(16,"div",10)(17,"div",11)(18,"label",12),m(19," Add your location"),f(),V(20,"br"),l(21,"input",13),F3("ngModelChange",function(t){return D3(n.location,t)||(n.location=t),t}),f()()(),l(22,"div",14),k("click",function(){return n.onSubmit()}),m(23,"Next"),f()()),r&2&&(L(9),y("ngStyle",P3(4,i5)),L(),y("src",n.selectedImage,y3),L(),q(11,n.selectedImage?-1:11),L(10),A3("ngModel",n.location))},dependencies:[D2,A2,C4,b2,f1,O1,R3],styles:[".profile_container[_ngcontent-%COMP%]{padding:120px 200px}.profile_container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-bottom:10px}.profile_image[_ngcontent-%COMP%]{height:170px;width:170px;border-radius:5rem;display:flex;align-items:center;justify-content:center}.profile_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:auto}.heading[_ngcontent-%COMP%]{font-size:21px;font-weight:700}.image_section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{border:1px solid rgb(212,212,212)!important;color:#000;padding:.5rem;font-family:sans-serif;border-radius:.3rem;cursor:pointer;margin-top:1rem}.location_section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px 0;width:100%;border:none;outline:none;border-bottom:1px solid rgb(212,212,212)}.location_section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:25px;font-weight:600}.next_btn[_ngcontent-%COMP%]{margin-top:20px;font-size:20px;width:200px;background-color:#d33380;color:#fff}"]});let a=c;return a})();var D6=(()=>{let c=class c{constructor(){this.title="Task_01"}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=D({type:c,selectors:[["app-root"]],standalone:!0,features:[P],decls:1,vars:0,template:function(r,n){r&1&&V(0,"router-outlet")},dependencies:[q3]});let a=c;return a})();var M3=a=>({"selected-card":a}),C3=a=>({checked:a});function n5(a,c){a&1&&(l(0,"p"),m(1,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a molestiae qui."),f())}function s5(a,c){a&1&&(l(0,"p"),m(1,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a molestiae qui."),f())}function t5(a,c){a&1&&(l(0,"p"),m(1,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a molestiae qui."),f())}var F6=(()=>{let c=class c{constructor(e,r){this.router=e,this.userdetails=r,this.selectedCard=null,this.onselected=!1,this.cardDescription="",this.userEmail=this.userdetails.userEmail,this.userData={}}onclicked(e){console.log(e),this.selectedCard=e,this.onselected=!0,e===1?this.cardDescription="share my work":e===2?this.cardDescription="hire a designer":e===3&&(this.cardDescription="inspire design"),this.userdetails.setNextComponentData({description:this.cardDescription});let r=document.getElementById(`checkbox-${e}`);r&&console.log(r.ariaChecked)}onfinshBtn(){let e=this.userdetails.getProfileData(),r=this.userdetails.getNextComponentData(),n=B(B({},e),r);console.log(n),this.userdetails.updateUser(n,this.userdetails.username).subscribe(()=>{this.router.navigate(["landing"])})}};c.\u0275fac=function(r){return new(r||c)(H(L2),H(s2))},c.\u0275cmp=D({type:c,selectors:[["app-describes"]],standalone:!0,features:[P],decls:33,vars:21,consts:[[1,"container","text-center"],[1,"heading"],[1,"row","justify-content-center","mb-5"],[1,"col-md-4"],[1,"card","p-4","align-items-center",2,"width","20rem",3,"click","ngClass"],["src","../../assets/image_1.png",1,"card-img"],[1,"card-text","pb-2"],["type","checkbox","id","checkbox-1","checked","checked",3,"ngClass"],[1,"checkmark"],["src","../../assets/image_2.png",1,"card-img"],["type","checkbox","id","checkbox-2","checked","checked",3,"ngClass"],["src","../../assets/image_3.png",1,"card-img"],["type","checkbox","id","checkbox-3",3,"ngClass"],[1,"btn","finish-btn",3,"click"]],template:function(r,n){r&1&&(l(0,"div",0)(1,"div",1)(2,"h2"),m(3,"What brings you to Dribble?"),f(),l(4,"p"),m(5,"Select the options that best describe Don't worry you can explore ohter options later"),f()(),l(6,"div",2)(7,"div",3)(8,"div",4),k("click",function(){return n.onclicked(1)}),V(9,"img",5),l(10,"div",6),m(11,"I'm a designer looking to share my work"),f(),W(12,n5,2,0,"p"),V(13,"input",7)(14,"span",8),f()(),l(15,"div",3)(16,"div",4),k("click",function(){return n.onclicked(2)}),V(17,"img",9),l(18,"div",6),m(19,"I'm looking to hire a designer"),f(),W(20,s5,2,0,"p"),V(21,"input",10)(22,"span",8),f()(),l(23,"div",3)(24,"div",4),k("click",function(){return n.onclicked(3)}),V(25,"img",11),l(26,"div",6),m(27,"I'm looking for design a inspiration"),f(),W(28,t5,2,0,"p"),V(29,"input",12)(30,"span",8),f()()(),l(31,"div",13),k("click",function(){return n.onfinshBtn()}),m(32,"Finish"),f()()),r&2&&(L(8),y("ngClass",f2(9,M3,n.selectedCard===1)),L(4),q(12,n.selectedCard===1?12:-1),L(),y("ngClass",f2(11,C3,n.selectedCard==1)),L(3),y("ngClass",f2(13,M3,n.selectedCard===2)),L(4),q(20,n.selectedCard===2?20:-1),L(),y("ngClass",f2(15,C3,n.selectedCard==2)),L(3),y("ngClass",f2(17,M3,n.selectedCard==3)),L(4),q(28,n.selectedCard===3?28:-1),L(),y("ngClass",f2(19,C3,n.selectedCard==3)))},dependencies:[Z2],styles:['*[_ngcontent-%COMP%]{overflow:visible}.heading[_ngcontent-%COMP%]{margin:30px 0 90px}.card[_ngcontent-%COMP%]{overflow:visible}.selected-card.card[_ngcontent-%COMP%]{border:1px solid #eb386e}.card-container[_ngcontent-%COMP%]{position:relative;cursor:pointer;transition:transform .3s ease}.selected-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{transform:translateY(-100px)}.selected-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{position:absolute;transform:translateY(140px)}.card-text[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.finish-btn[_ngcontent-%COMP%]{width:170px;text-align:center;color:#eee;background-color:#eb386e}input[_ngcontent-%COMP%]{opacity:0;cursor:pointer;height:0;width:0}.checkmark[_ngcontent-%COMP%]{top:0;left:0;height:25px;width:25px;background-color:#fff;border:1px solid #eee}input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{border-radius:50%}.checked[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#2196f3}.checkmark[_ngcontent-%COMP%]:after{content:"";position:absolute;display:none}.checked[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.checkmark[_ngcontent-%COMP%]:after{left:50%;bottom:32px;width:5px;height:10px;border:solid white;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}']});let a=c;return a})();var P6=(()=>{let c=class c{constructor(e){this.userDetail=e,this.faBasketball=b6}ngOnInit(){}};c.\u0275fac=function(r){return new(r||c)(H(s2))},c.\u0275cmp=D({type:c,selectors:[["app-landing"]],standalone:!0,features:[P],decls:147,vars:2,consts:[[1,"navbar","navbar-expand-sm","navbar-dark","px-3"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["href","#","aria-current","page",1,"nav-link"],[1,"visually-hidden"],[1,"navbar-nav"],[1,"d-flex","my-2","my-lg-0"],["type","text","placeholder","Search",1,"form-control","me-sm-2"],["href","",1,"nav-link"],[1,"btn","btn-primary"],[1,"container","text-center","py-5"],[1,"mb-4"],["src","../../assets/email.png","alt","","srcset","","height","100px","width","100px",1,"email-image","mb-4"],[1,"email"],[1,"p-3"],[1,"container","d-flex"],[1,"logo"],["href","#",1,"footer-brand"],[1,"icons"],[3,"icon"],[1,"designers"],[1,"hire"],[1,"company"],[1,"directors"],[1,"design"]],template:function(r,n){r&1&&(l(0,"nav",0)(1,"a",1),m(2,"dribble"),f(),V(3,"button",2),l(4,"div",3)(5,"ul",4)(6,"li",5)(7,"a",6),m(8,"Inspiration "),l(9,"span",7),m(10,"(current)"),f()()(),l(11,"li",5)(12,"a",6),m(13,"Find work "),l(14,"span",7),m(15,"(current)"),f()()(),l(16,"li",5)(17,"a",6),m(18,"Learn Design "),l(19,"span",7),m(20,"(current)"),f()()(),l(21,"li",5)(22,"a",6),m(23,"Go Pro "),l(24,"span",7),m(25,"(current)"),f()()(),l(26,"li",5)(27,"a",6),m(28,"Hire Designers "),l(29,"span",7),m(30,"(current)"),f()()()(),l(31,"ul",8)(32,"form",9),V(33,"input",10),f(),l(34,"li",5)(35,"a",11),m(36,"icon"),f()(),l(37,"li",5)(38,"a",11),m(39,"profile"),f()(),l(40,"div",12),m(41,"upload"),f()()()(),l(42,"div",13)(43,"h1",14),m(44,"Please verify your email..."),f(),V(45,"img",15),l(46,"p"),m(47,"Please verify your email address. We've sent a confirmation email to"),f(),l(48,"p",16),m(49),f()(),l(50,"footer",17)(51,"div",18)(52,"div",19)(53,"div",20),m(54,"dribble"),f(),l(55,"p"),m(56,"Dribble is the world's leading"),V(57,"br"),m(58," community for creative to share, grow "),V(59,"br"),m(60,"and get hired "),f(),l(61,"div",21),V(62,"fa-icon",22),f()(),l(63,"div",23)(64,"ul")(65,"li"),m(66,"Go Pro!"),f(),l(67,"li"),m(68,"Explore design work"),f(),l(69,"li"),m(70,"Design Blog"),f(),l(71,"li"),m(72,"Overtime Podcast"),f(),l(73,"li"),m(74,"Playoffs"),f(),l(75,"li"),m(76,"Weekly Warm-up"),f(),l(77,"li"),m(78,"Refer a friend"),f(),l(79,"li"),m(80,"Code of conduct"),f()()(),l(81,"div",24)(82,"ul")(83,"li"),m(84,"Post a job opening"),f(),l(85,"li"),m(86,"Post a freelancer project"),f(),l(87,"li"),m(88,"Search for designers"),f(),l(89,"li"),m(90,"Brands"),f(),l(91,"li"),m(92,"Advertise with us"),f()()(),l(93,"div",25)(94,"ul")(95,"li"),m(96,"About"),f(),l(97,"li"),m(98,"Careers"),f(),l(99,"li"),m(100,"Support"),f(),l(101,"li"),m(102,"Media Kit"),f(),l(103,"li"),m(104,"Testimonials"),f(),l(105,"li"),m(106,"API"),f(),l(107,"li"),m(108,"Terms of Services"),f(),l(109,"li"),m(110,"Privacy Policy"),f(),l(111,"li"),m(112,"Cookie Policy"),f()()(),l(113,"div",26)(114,"ul")(115,"li"),m(116,"Design jobs"),f(),l(117,"li"),m(118,"Designers for hire"),f(),l(119,"li"),m(120,"Freelancer designers for hire"),f(),l(121,"li"),m(122,"Tags"),f(),l(123,"li"),m(124,"Places"),f(),l(125,"li"),m(126,"Design assets"),f(),l(127,"li"),m(128,"Dribble Marketplace"),f(),l(129,"li"),m(130,"Creative Market"),f(),l(131,"li"),m(132,"Fontspring"),f(),l(133,"li"),m(134,"Font squirrel"),f()()(),l(135,"div",27)(136,"ul")(137,"li"),m(138,"Freelancing"),f(),l(139,"li"),m(140,"Design Hiring"),f(),l(141,"li"),m(142,"Design Portfolio"),f(),l(143,"li"),m(144,"Design Education"),f(),l(145,"li"),m(146,"Design Industry Trends"),f()()()()()),r&2&&(L(49),k3(n.userEmail),L(13),y("icon",n.faBasketball))},dependencies:[D2,A2],styles:['@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6K6MmTpA.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6D6MmTpA.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6I6MmTpA.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6J6MmTpA.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Pacifico;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6H6Mk.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.navbar-brand[_ngcontent-%COMP%]{font-family:Pacifico,cursive;font-weight:500;font-size:30px;letter-spacing:2px;color:#000}.nav-link[_ngcontent-%COMP%]{color:#000}.email-image[_ngcontent-%COMP%]{opacity:.5}.footer-brand[_ngcontent-%COMP%]{font-family:Pacifico,cursive;font-weight:500;font-size:30px;letter-spacing:2px;color:#eb386e}']});let a=c;return a})();var _6=[{path:"",component:k6},{path:"profile",component:A6},{path:"profile-details",component:F6},{path:"landing",component:P6}];var T6={providers:[j3(_6),G3(),U3()]};var o5={providers:[W3()]},E6=B3(T6,o5);var l5=()=>I3(D6,E6),S7=l5;export{S7 as a};
