"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[433],{2433:(J,y,c)=>{c.r(y),c.d(y,{AuthModule:()=>p,AuthRoutingModule:()=>O});var t=c(5654),g=c(7030),m=c(4625),v=c(930),e=c(2012),h=c(6916),b=c(8439),C=c(1202),x=c(6229),k=c(5804),w=c(416);function M(a,d){if(1&a&&(e.TgZ(0,"div")(1,"div",17),e._uU(2," solo caracteres son permitidos "),e.qZA()()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("hidden",!i.email.errors.pattern)}}const A=[{path:"",component:(()=>{class a{constructor(i,o,f,_,T){this.layoutService=i,this.AuthRepository=o,this.fb=f,this.message=_,this.navigate=T,this.formBuilder()}login(){if("INVALID"===this.form.status)return this.message.add({severity:"error",summary:"Formulario invalido",detail:"Todos los valores son requeridos",life:3e3});this.AuthRepository.Login(this.form.value).subscribe(o=>(this.navigate.navigate(["/"]),this.message.add({severity:"success",summary:"Login correcto",life:3e3})),o=>this.message.add({severity:"error",summary:`ERROR ${o.error.message}`}))}formBuilder(){this.form=this.fb.group({email:["",[m.kI.required,m.kI.email]],password:["",[m.kI.required,m.kI.minLength(5)]]})}get email(){return this.form.get("email")}get password(){return this.form.get("password")}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(h.P),e.Y36(g.g),e.Y36(m.qu),e.Y36(v.ez),e.Y36(t.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-login"]],features:[e._Bn([g.g,v.ez])],decls:24,vars:3,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0",3,"src"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(\n                    180deg,\n                    var(--primary-color) 10%,\n                    rgba(14, 121, 209, 0) 30%\n                )"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],["novalidate","",3,"formGroup","ngSubmit"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","name","email","type","email","formControlName","email","placeholder","Correo electronico","pInputText","","required","",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem"],[4,"ngIf"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","formControlName","password","name","password","placeholder","Contrase\xf1a","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem","required",""],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","pRipple","","label","Sign In",1,"w-full","p-3","text-xl"],[3,"hidden"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"div",1),e._UZ(3,"img",2),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),e._uU(8," Bienvenido! "),e.qZA(),e.TgZ(9,"span",7),e._uU(10,"Inicie sesi\xf3n para continuar"),e.qZA()(),e.TgZ(11,"form",8),e.NdJ("ngSubmit",function(){return o.login()}),e.TgZ(12,"div")(13,"label",9),e._uU(14,"Correo Electronico"),e.qZA(),e._UZ(15,"input",10),e.YNc(16,M,3,1,"div",11),e.TgZ(17,"label",12),e._uU(18,"Contrase\xf1a"),e.qZA(),e._UZ(19,"p-password",13),e.TgZ(20,"div",14)(21,"a",15),e._uU(22,"Forgot password?"),e.qZA()(),e._UZ(23,"button",16),e.qZA()()()()()()),2&i&&(e.xp6(3),e.MGl("src","assets/layout/images/","light"===o.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(8),e.Q6J("formGroup",o.form),e.xp6(5),e.Q6J("ngIf",!o.email.valid&&(o.email.dirty||o.email.touched)))},dependencies:[b.O5,m._Y,m.Fj,m.JJ,m.JL,m.Q7,C.ro,x.Hq,k.o,m.sg,m.u,w.FN]}),a})()}];let O=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[t.Bz.forChild(A),t.Bz]}),a})();var I=c(4691);const Z=["cb"],E=function(a,d,i){return{"p-checkbox-label":!0,"p-checkbox-label-active":a,"p-disabled":d,"p-checkbox-label-focus":i}};function S(a,d){if(1&a){const i=e.EpF();e.TgZ(0,"label",7),e.NdJ("click",function(f){e.CHM(i);const _=e.oxw(),T=e.MAs(3);return e.KtG(_.onClick(f,T,!0))}),e._uU(1),e.qZA()}if(2&a){const i=e.oxw();e.Tol(i.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,E,i.checked(),i.disabled,i.focused)),e.uIk("for",i.inputId),e.xp6(1),e.Oqu(i.label)}}const r=function(a,d,i){return{"p-checkbox p-component":!0,"p-checkbox-checked":a,"p-checkbox-disabled":d,"p-checkbox-focused":i}},u=function(a,d,i){return{"p-highlight":a,"p-disabled":d,"p-focus":i}},s={provide:m.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0};let n=(()=>{class a{constructor(i){this.cd=i,this.checkboxIcon="pi pi-check",this.trueValue=!0,this.falseValue=!1,this.onChange=new e.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.focused=!1}onClick(i,o,f){i.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(i),f&&o.focus())}updateModel(i){let o;this.binary?(o=this.checked()?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(o=this.checked()?this.model.filter(f=>!I.gb.equals(f,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this.onChange.emit({checked:o,originalEvent:i})}handleChange(i){this.readonly||this.updateModel(i)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(i){this.model=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:I.gb.contains(this.value,this.model)}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(e.sBO))},a.\u0275cmp=e.Xpm({type:a,selectors:[["p-checkbox"]],viewQuery:function(i,o){if(1&i&&e.Gf(Z,5),2&i){let f;e.iGM(f=e.CRH())&&(o.inputViewChild=f.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([s])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[3,"class","ngClass","click",4,"ngIf"],[3,"ngClass","click"]],template:function(i,o){if(1&i){const f=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(){return o.onFocus()})("blur",function(){return o.onBlur()})("change",function(T){return o.handleChange(T)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(T){e.CHM(f);const B=e.MAs(3);return e.KtG(o.onClick(T,B,!0))}),e._UZ(5,"span",5),e.qZA()(),e.YNc(6,S,2,9,"label",6)}2&i&&(e.Tol(o.styleClass),e.Q6J("ngStyle",o.style)("ngClass",e.kEZ(18,r,o.checked(),o.disabled,o.focused)),e.xp6(2),e.Q6J("readonly",o.readonly)("value",o.value)("checked",o.checked())("disabled",o.disabled),e.uIk("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-checked",o.checked())("required",o.required),e.xp6(2),e.Q6J("ngClass",e.kEZ(22,u,o.checked(),o.disabled,o.focused)),e.xp6(1),e.Q6J("ngClass",o.checked()?o.checkboxIcon:null),e.xp6(1),e.Q6J("ngIf",o.label))},dependencies:[b.mk,b.O5,b.PC],styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0}),a})(),l=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[b.ez]}),a})(),p=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[b.ez,O,m.u5,C.gz,l,x.hJ,k.j,m.UX,w.EV]}),a})()},416:(J,y,c)=>{c.d(y,{EV:()=>S,FN:()=>E});var t=c(2012),g=c(8439),m=c(930),v=c(4691),e=c(2590),h=c(1010);const b=["container"],C=function(r,u,s,n){return{"pi-info-circle":r,"pi-exclamation-triangle":u,"pi-times-circle":s,"pi-check":n}};function x(r,u){if(1&r&&(t.ynx(0),t._UZ(1,"span",6),t.TgZ(2,"div",7)(3,"div",8),t._uU(4),t.qZA(),t.TgZ(5,"div",9),t._uU(6),t.qZA()(),t.BQk()),2&r){const s=t.oxw();t.xp6(1),t.Tol("p-toast-message-icon pi"+(s.message.icon?" "+s.message.icon:"")),t.Q6J("ngClass",t.l5B(5,C,"info"==s.message.severity,"warn"==s.message.severity,"error"==s.message.severity,"success"==s.message.severity)),t.xp6(3),t.Oqu(s.message.summary),t.xp6(2),t.Oqu(s.message.detail)}}function k(r,u){1&r&&t.GkF(0)}function w(r,u){if(1&r){const s=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(l){t.CHM(s);const p=t.oxw();return t.KtG(p.onCloseIconClick(l))})("keydown.enter",function(l){t.CHM(s);const p=t.oxw();return t.KtG(p.onCloseIconClick(l))}),t._UZ(1,"span",11),t.qZA()}}const M=function(r){return[r,"p-toast-message"]},D=function(r,u,s,n){return{showTransformParams:r,hideTransformParams:u,showTransitionParams:s,hideTransitionParams:n}},A=function(r){return{value:"visible",params:r}},O=function(r){return{$implicit:r}};function I(r,u){if(1&r){const s=t.EpF();t.TgZ(0,"p-toastItem",3),t.NdJ("onClose",function(l){t.CHM(s);const p=t.oxw();return t.KtG(p.onMessageClose(l))})("@toastAnimation.start",function(l){t.CHM(s);const p=t.oxw();return t.KtG(p.onAnimationStart(l))})("@toastAnimation.done",function(l){t.CHM(s);const p=t.oxw();return t.KtG(p.onAnimationEnd(l))}),t.qZA()}if(2&r){const s=u.$implicit,n=u.index,l=t.oxw();t.Q6J("message",s)("index",n)("template",l.template)("@toastAnimation",void 0)("showTransformOptions",l.showTransformOptions)("hideTransformOptions",l.hideTransformOptions)("showTransitionOptions",l.showTransitionOptions)("hideTransitionOptions",l.hideTransitionOptions)}}let Z=(()=>{class r{constructor(s){this.zone=s,this.onClose=new t.vpe}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick(s){this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),s.preventDefault()}ngOnDestroy(){this.clearTimeout()}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(t.R0b))},r.\u0275cmp=t.Xpm({type:r,selectors:[["p-toastItem"]],viewQuery:function(s,n){if(1&s&&t.Gf(b,5),2&s){let l;t.iGM(l=t.CRH())&&(n.containerViewChild=l.first)}},hostAttrs:[1,"p-element"],inputs:{message:"message",index:"index",template:"template",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},decls:6,vars:21,consts:[[3,"ngClass","mouseenter","mouseleave"],["container",""],["role","alert","aria-live","assertive","aria-atomic","true",1,"p-toast-message-content",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-toast-icon-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[3,"ngClass"],[1,"p-toast-message-text"],[1,"p-toast-summary"],[1,"p-toast-detail"],["type","button","pRipple","",1,"p-toast-icon-close","p-link",3,"click","keydown.enter"],[1,"p-toast-icon-close-icon","pi","pi-times"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0,1),t.NdJ("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()}),t.TgZ(2,"div",2),t.YNc(3,x,7,10,"ng-container",3),t.YNc(4,k,1,0,"ng-container",4),t.YNc(5,w,2,0,"button",5),t.qZA()()),2&s&&(t.Tol(n.message.styleClass),t.Q6J("ngClass",t.VKq(10,M,"p-toast-message-"+n.message.severity))("@messageState",t.VKq(17,A,t.l5B(12,D,n.showTransformOptions,n.hideTransformOptions,n.showTransitionOptions,n.hideTransitionOptions))),t.uIk("id",n.message.id),t.xp6(2),t.Q6J("ngClass",n.message.contentStyleClass),t.xp6(1),t.Q6J("ngIf",!n.template),t.xp6(1),t.Q6J("ngTemplateOutlet",n.template)("ngTemplateOutletContext",t.VKq(19,O,n.message)),t.xp6(1),t.Q6J("ngIf",!1!==n.message.closable))},dependencies:[g.mk,g.O5,g.tP,e.H],encapsulation:2,data:{animation:[(0,h.X$)("messageState",[(0,h.SB)("visible",(0,h.oB)({transform:"translateY(0)",opacity:1})),(0,h.eR)("void => *",[(0,h.oB)({transform:"{{showTransformParams}}",opacity:0}),(0,h.jt)("{{showTransitionParams}}")]),(0,h.eR)("* => void",[(0,h.jt)("{{hideTransitionParams}}",(0,h.oB)({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0}),r})(),E=(()=>{class r{constructor(s,n,l){this.messageService=s,this.cd=n,this.config=l,this.autoZIndex=!0,this.baseZIndex=0,this.position="top-right",this.preventOpenDuplicates=!1,this.preventDuplicates=!1,this.showTransformOptions="translateY(100%)",this.hideTransformOptions="translateY(-100%)",this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.onClose=new t.vpe,this.id=(0,v.Th)()}ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(s=>{if(s)if(s instanceof Array){const n=s.filter(l=>this.canAdd(l));this.add(n)}else this.canAdd(s)&&this.add([s])}),this.clearSubscription=this.messageService.clearObserver.subscribe(s=>{s?this.key===s&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}ngAfterViewInit(){this.breakpoints&&this.createStyle()}add(s){this.messages=this.messages?[...this.messages,...s]:[...s],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...s]:[...s]),this.cd.markForCheck()}canAdd(s){let n=this.key===s.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,s)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,s)),n}containsMessage(s,n){return!!s&&null!=s.find(l=>l.summary===n.summary&&l.detail==n.detail&&l.severity===n.severity)}ngAfterContentInit(){this.templates.forEach(s=>{s.getType(),this.template=s.template})}onMessageClose(s){this.messages.splice(s.index,1),this.onClose.emit({message:s.message}),this.cd.detectChanges()}onAnimationStart(s){"void"===s.fromState&&(this.containerViewChild.nativeElement.setAttribute(this.id,""),this.autoZIndex&&""===this.containerViewChild.nativeElement.style.zIndex&&v.P9.set("modal",this.containerViewChild.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(s){"void"===s.toState&&this.autoZIndex&&v.gb.isEmpty(this.messages)&&v.P9.clear(this.containerViewChild.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let s="";for(let n in this.breakpoints){let l="";for(let p in this.breakpoints[n])l+=p+":"+this.breakpoints[n][p]+" !important;";s+=`\n                    @media screen and (max-width: ${n}) {\n                        .p-toast[${this.id}] {\n                           ${l}\n                        }\n                    }\n                `}this.styleElement.innerHTML=s}}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&v.P9.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(m.ez),t.Y36(t.sBO),t.Y36(m.b4))},r.\u0275cmp=t.Xpm({type:r,selectors:[["p-toast"]],contentQueries:function(s,n,l){if(1&s&&t.Suo(l,m.jx,4),2&s){let p;t.iGM(p=t.CRH())&&(n.templates=p)}},viewQuery:function(s,n){if(1&s&&t.Gf(b,5),2&s){let l;t.iGM(l=t.CRH())&&(n.containerViewChild=l.first)}},hostAttrs:[1,"p-element"],inputs:{key:"key",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:"preventOpenDuplicates",preventDuplicates:"preventDuplicates",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},decls:3,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0,1),t.YNc(2,I,1,8,"p-toastItem",2),t.qZA()),2&s&&(t.Tol(n.styleClass),t.Q6J("ngClass","p-toast p-component p-toast-"+n.position)("ngStyle",n.style),t.xp6(2),t.Q6J("ngForOf",n.messages))},dependencies:[g.mk,g.sg,g.PC,Z],styles:[".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}\n"],encapsulation:2,data:{animation:[(0,h.X$)("toastAnimation",[(0,h.eR)(":enter, :leave",[(0,h.IO)("@*",(0,h.pV)())])])]},changeDetection:0}),r})(),S=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.ez,e.T,m.m8]}),r})()}}]);