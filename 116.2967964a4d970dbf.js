"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[116],{2181:(N,Z,o)=>{o.d(Z,{b:()=>U});var t=o(6381),_=o(1974),m=o(1824),e=o(3344);class h extends e.I{mapFrom(f){return{id:f.id,name:f.name,email:f.email,dni:f.dni,type:f.type}}mapTo(f){return{id:f.id,name:f.name,email:f.email,dni:f.dni,type:f.type}}}var B=o(2012),M=o(6844);let U=(()=>{class T{constructor(u,b){this.http=u,this.storage=b,this.baseUrl=m.N.baseUrl,this.beneficiaryMapper=new h}getAll(){const u=new t.WM({authorization:`bearer ${this.storage.Get("token")}`});return this.http.get(`${this.baseUrl}/beneficiary/`,{headers:u})}Post(u){const b=new t.WM({authorization:`bearer ${this.storage.Get("token")}`});return this.http.post(`${this.baseUrl}/beneficiary`,u,{headers:b}).pipe((0,_.U)(this.beneficiaryMapper.mapTo))}GetOne(u){const b=new t.WM({authorization:`bearer ${this.storage.Get("token")}`});return this.http.get(`${this.baseUrl}/beneficiary/${u}`,{headers:b})}UpdateOne(u){const b=new t.WM({authorization:`bearer ${this.storage.Get("token")}`});return this.http.put(`${this.baseUrl}/beneficiary/${u.id}`,u,{headers:b}).pipe((0,_.U)(this.beneficiaryMapper.mapFrom))}DeleteOne(u){const b=new t.WM({authorization:`bearer ${this.storage.Get("token")}`});return this.http.delete(`${this.baseUrl}/beneficiary/${u}`,{headers:b})}}return T.\u0275fac=function(u){return new(u||T)(B.LFG(t.eN),B.LFG(M.C))},T.\u0275prov=B.Yz7({token:T,factory:T.\u0275fac}),T})()},6844:(N,Z,o)=>{o.d(Z,{C:()=>_});var t=o(2012);let _=(()=>{class m{constructor(){}Set(h,B){localStorage.setItem(h,JSON.stringify(B))}Get(h){return JSON.parse(localStorage.getItem(h))}Dispose(h){localStorage.removeItem(h)}}return m.\u0275fac=function(h){return new(h||m)},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},3344:(N,Z,o)=>{o.d(Z,{I:()=>t});class t{}},3116:(N,Z,o)=>{o.r(Z),o.d(Z,{BeneficiaryModule:()=>X,BeneficiaryRoutingModule:()=>s});var t=o(5654),_=o(2181),m=o(930),e=o(2012);function h(n,p){if(1&n){const i=e.EpF();e.TgZ(0,"div",18)(1,"button",19),e.NdJ("click",function(){e.CHM(i);const l=e.oxw();return e.KtG(l.new())}),e.qZA(),e.TgZ(2,"button",20),e.NdJ("click",function(){e.CHM(i);const l=e.oxw();return e.KtG(l.deleteBeneficiarys())}),e.qZA()()}}function B(n,p){1&n&&(e.TgZ(0,"div",18),e._UZ(1,"button",21),e.qZA())}function M(n,p){1&n&&(e.TgZ(0,"div",22)(1,"h5",23),e._uU(2,"Listado de Beneficiarios"),e.qZA(),e.TgZ(3,"span",24),e._UZ(4,"i",25)(5,"input",26),e.qZA()())}function U(n,p){1&n&&(e.TgZ(0,"tr")(1,"th",27),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",28),e._uU(4," Nombre "),e._UZ(5,"p-sortIcon",29),e.qZA(),e.TgZ(6,"th",30),e._uU(7," Email "),e._UZ(8,"p-sortIcon",31),e.qZA(),e.TgZ(9,"th",32),e._uU(10," RIF/CI "),e._UZ(11,"p-sortIcon",33),e.qZA(),e.TgZ(12,"th",34),e._uU(13," Tipo "),e._UZ(14,"p-sortIcon",35),e.qZA(),e.TgZ(15,"th",36),e._uU(16," Estatus "),e._UZ(17,"p-sortIcon",37),e.qZA(),e._UZ(18,"th"),e.qZA())}function T(n,p){if(1&n){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",38),e.qZA(),e.TgZ(3,"td",39)(4,"span",40),e._uU(5,"Name"),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"td",41)(8,"span",40),e._uU(9,"Price"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"td",39)(12,"span",40),e._uU(13,"Category"),e.qZA(),e._uU(14),e.qZA(),e.TgZ(15,"td",39)(16,"span",40),e._uU(17,"Category"),e.qZA(),e._uU(18),e.qZA(),e.TgZ(19,"td",39)(20,"span",40),e._uU(21,"Status"),e.qZA(),e.TgZ(22,"span",42),e._uU(23),e.qZA()(),e.TgZ(24,"td")(25,"div",43)(26,"button",44),e.NdJ("click",function(){const c=e.CHM(i).$implicit,x=e.oxw();return e.KtG(x.updateOne(c))}),e.qZA(),e.TgZ(27,"button",45),e.NdJ("click",function(){const c=e.CHM(i).$implicit,x=e.oxw();return e.KtG(x.deleteOne(c))}),e.qZA()()()()}if(2&n){const i=p.$implicit;e.xp6(2),e.Q6J("value",i),e.xp6(4),e.hij(" ",i.name," "),e.xp6(4),e.hij(" ",i.email," "),e.xp6(4),e.hij(" ",i.dni," "),e.xp6(4),e.hij(" ",i.type," "),e.xp6(5),e.Oqu(i.isActive)}}function f(n,p){if(1&n&&(e.TgZ(0,"span"),e._uU(1,"Estas seguro que deseas elminar al beneficiario "),e.TgZ(2,"b"),e._uU(3),e.qZA(),e._uU(4,"?"),e.qZA()),2&n){const i=e.oxw();e.xp6(3),e.Oqu(i.beneficiary.name)}}function u(n,p){if(1&n){const i=e.EpF();e.TgZ(0,"button",46),e.NdJ("click",function(){e.CHM(i);const l=e.oxw();return e.KtG(l.deletedialog=!1)}),e.qZA(),e.TgZ(1,"button",47),e.NdJ("click",function(){e.CHM(i);const l=e.oxw();return e.KtG(l.confirmDeleteBeneficiary())}),e.qZA()}}function b(n,p){if(1&n){const i=e.EpF();e.TgZ(0,"button",46),e.NdJ("click",function(){e.CHM(i);const l=e.oxw();return e.KtG(l.DeleteBeneficiariesDialog=!1)}),e.qZA(),e.TgZ(1,"button",48),e.NdJ("click",function(){e.CHM(i);const l=e.oxw();return e.KtG(l.confirmDeleteSelected())}),e.qZA()}}const F=function(){return["name","country.name","representative.name","status"]},S=function(){return[10,20,30]},D=function(){return{width:"60%"}},I=function(){return{width:"450px"}};let r=(()=>{class n{constructor(i,a){this.messageService=i,this.beneficiaryRepository=a,this.addBeneficiarydialog=!1,this.beneficiary={id:""},this.beneficiaries=[],this.deletedialog=!1,this.cols=[],this.DeleteBeneficiariesDialog=!1,this.selectedBeneficiary=[]}ngOnInit(){this.getBeneficiaries(),this.cols=[{field:"Name",header:"Name"},{field:"Email",header:"Email"},{field:"Dni",header:"Dni"},{field:"Type",header:"Type"},{field:"IsActive",header:"IsActive"}]}getBeneficiaries(){this.beneficiaryRepository.getAll().subscribe(i=>{this.beneficiaries=i.beneficiarys})}updateOne(i){this.beneficiary=Object.assign({},i),this.addBeneficiarydialog=!0}deleteOne(i){this.beneficiary=Object.assign({},i),this.addBeneficiarydialog=!0}new(){this.beneficiary={},this.addBeneficiarydialog=!0}confirmDeleteBeneficiary(){this.deletedialog=!0,this.beneficiaryRepository.DeleteOne(this.beneficiary.id).subscribe(i=>{this.messageService.add({severity:"success",summary:"Solicitud exitosa",detail:"Beneficiario eliminado",life:3e3}),this.beneficiary={}},i=>{this.messageService.add({severity:"error",summary:"Oops, ha ocurrido un error",detail:i.message,life:3e3})})}deleteBeneficiarys(){this.DeleteBeneficiariesDialog=!0}confirmDeleteSelected(){this.selectedBeneficiary.forEach(i=>{this.beneficiaryRepository.DeleteOne(i.id)}),this.messageService.add({severity:"success",summary:"Solicitud exitosa",detail:`Se eliminaron ${this.selectedBeneficiary.length}`,life:3e3}),this.DeleteBeneficiariesDialog=!1}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(m.ez),e.Y36(_.b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-beneficiary"]],features:[e._Bn([m.ez,_.b])],decls:25,vars:32,consts:[[1,"grid","fadein","animate-duration-500"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} hasta {last} de {totalRecords} resultados","selectionMode","multiple","dataKey","id","scrollHeight","500px",3,"columns","selection","value","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","rowHover","scrollable","virtualScroll","virtualScrollItemSize","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Beneficiario",1,"p-fluid",3,"visible","modal","visibleChange"],[3,"beneficiary"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],["pTemplate","footer"],[1,"my-2"],["pButton","","pRipple","","label","Nueva Entrada","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Eliminar","icon","pi pi-trash",1,"p-button-danger",3,"click"],["pButton","","pRipple","","label","Exportar a PDF","icon","pi pi-file-pdf",1,"p-button-warning"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto"],[2,"width","3rem"],["pSortableColumn","Name"],["field","Name"],["pSortableColumn","Email"],["field","Email"],["pSortableColumn","Dni"],["field","Dni"],["pSortableColumn","Type"],["field","Type"],["pSortableColumn","IsActive"],["field","IsActive"],[3,"value"],[2,"width","14%","min-width","10rem"],[1,"p-column-title"],[2,"width","14%","min-width","8rem"],[1,"product-badge","status"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Si",1,"p-button-text",3,"click"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"p-toast"),e.TgZ(4,"p-toolbar",3),e.YNc(5,h,3,0,"ng-template",4),e.YNc(6,B,2,0,"ng-template",5),e.qZA(),e.TgZ(7,"p-table",6,7),e.NdJ("selectionChange",function(c){return a.selectedBeneficiary=c}),e.YNc(9,M,6,0,"ng-template",8),e.YNc(10,U,19,0,"ng-template",9),e.YNc(11,T,28,6,"ng-template",10),e.qZA()(),e.TgZ(12,"p-dialog",11),e.NdJ("visibleChange",function(c){return a.addBeneficiarydialog=c}),e._UZ(13,"app-beneficiary-form",12),e.qZA(),e.TgZ(14,"p-dialog",13),e.NdJ("visibleChange",function(c){return a.deletedialog=c}),e.TgZ(15,"div",14),e._UZ(16,"i",15),e.YNc(17,f,5,1,"span",16),e.qZA(),e.YNc(18,u,2,0,"ng-template",17),e.qZA(),e.TgZ(19,"p-dialog",13),e.NdJ("visibleChange",function(c){return a.DeleteBeneficiariesDialog=c}),e.TgZ(20,"div",14),e._UZ(21,"i",15),e.TgZ(22,"span"),e._uU(23,"Estas seguro de eliminar los beneficiarios seleccionados?"),e.qZA()(),e.YNc(24,b,2,0,"ng-template",17),e.qZA()()()),2&i&&(e.xp6(7),e.Q6J("columns",a.cols)("selection",a.selectedBeneficiary)("value",a.beneficiaries)("rows",10)("globalFilterFields",e.DdM(27,F))("rows",10)("paginator",!0)("rowsPerPageOptions",e.DdM(28,S))("showCurrentPageReport",!0)("rowHover",!0)("scrollable",!0)("virtualScroll",!0)("virtualScrollItemSize",46),e.xp6(5),e.Akn(e.DdM(29,D)),e.Q6J("visible",a.addBeneficiarydialog)("modal",!0),e.xp6(1),e.Q6J("beneficiary",a.beneficiary),e.xp6(1),e.Akn(e.DdM(30,I)),e.Q6J("visible",a.deletedialog)("modal",!0),e.xp6(3),e.Q6J("ngIf",a.beneficiary),e.xp6(2),e.Akn(e.DdM(31,I)),e.Q6J("visible",a.DeleteBeneficiariesDialog)("modal",!0))}}),n})();const y=[{path:"",component:r}];let s=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.Bz.forChild(y),t.Bz]}),n})();var d=o(8439),v=o(4625),C=o(6229),Y=o(6511),k=o(290),w=o(9636),R=o(9101),J=o(5804),H=o(6541),K=o(2180),P=o(4777),A=o(5733),E=o(416),O=o(6873),G=o(404);function j(n,p){1&n&&(e.TgZ(0,"small",14),e._uU(1,"El monto es requerido."),e.qZA())}function z(n,p){1&n&&(e.TgZ(0,"small",14),e._uU(1,"El monto es requerido."),e.qZA())}function $(n,p){1&n&&(e.TgZ(0,"small",14),e._uU(1,"El monto es requerido."),e.qZA())}function V(n,p){1&n&&(e.TgZ(0,"small",14),e._uU(1,"El monto es requerido."),e.qZA())}function L(n,p){1&n&&(e.TgZ(0,"small",14),e._uU(1,"El monto es requerido."),e.qZA())}const q=function(n){return{"ng-dirty":n}};function W(n,p){if(1&n){const i=e.EpF();e.TgZ(0,"div",1)(1,"label",2),e._uU(2,"Beneficiario"),e.qZA(),e.TgZ(3,"input",3,4),e.NdJ("ngModelChange",function(l){e.CHM(i);const c=e.oxw();return e.KtG(c.beneficiary.name=l)}),e.qZA(),e.YNc(5,j,2,0,"small",5),e.qZA(),e.TgZ(6,"div",1)(7,"label",2),e._uU(8,"Correo"),e.qZA(),e.TgZ(9,"input",6,7),e.NdJ("ngModelChange",function(l){e.CHM(i);const c=e.oxw();return e.KtG(c.beneficiary.email=l)}),e.qZA(),e.YNc(11,z,2,0,"small",5),e.qZA(),e.TgZ(12,"div",1)(13,"label",2),e._uU(14,"RIF/C.I"),e.qZA(),e.TgZ(15,"input",3,8),e.NdJ("ngModelChange",function(l){e.CHM(i);const c=e.oxw();return e.KtG(c.beneficiary.dni=l)}),e.qZA(),e.YNc(17,$,2,0,"small",5),e.qZA(),e.TgZ(18,"div",1)(19,"label",2),e._uU(20,"Tipo"),e.qZA(),e.TgZ(21,"p-dropdown",9,10),e.NdJ("ngModelChange",function(l){e.CHM(i);const c=e.oxw();return e.KtG(c.selectedType=l)}),e.qZA(),e.YNc(23,V,2,0,"small",5),e.qZA(),e.TgZ(24,"div",1)(25,"label",2),e._uU(26,"Estado"),e.qZA(),e.TgZ(27,"p-dropdown",11,12),e.NdJ("ngModelChange",function(l){e.CHM(i);const c=e.oxw();return e.KtG(c.SelectedStatus=l)}),e.qZA(),e.YNc(29,L,2,0,"small",5),e.qZA(),e.TgZ(30,"div",1)(31,"p-button",13),e.NdJ("onClick",function(){e.CHM(i);const l=e.oxw();return e.KtG(l.save())}),e.qZA()()}if(2&n){const i=e.MAs(4),a=e.MAs(10),l=e.MAs(16),c=e.MAs(22),x=e.MAs(28),g=e.oxw();e.xp6(3),e.Q6J("ngModel",g.beneficiary.name)("required",!0)("ngClass",e.VKq(22,q,i.invalid&&g.submitted||i.dirty&&i.invalid)),e.xp6(2),e.Q6J("ngIf",i.invalid&&g.submitted||i.dirty&&i.invalid),e.xp6(4),e.Q6J("ngModel",g.beneficiary.email)("required",!0)("ngClass",e.VKq(24,q,a.invalid&&g.submitted||a.dirty&&a.invalid)),e.xp6(2),e.Q6J("ngIf",a.invalid&&g.submitted||a.dirty&&a.invalid),e.xp6(4),e.Q6J("ngModel",g.beneficiary.dni)("required",!0)("ngClass",e.VKq(26,q,l.invalid&&g.submitted||l.dirty&&l.invalid)),e.xp6(2),e.Q6J("ngIf",l.invalid&&g.submitted||l.dirty&&l.invalid),e.xp6(4),e.Q6J("ngModel",g.selectedType)("options",g.types)("required",!0)("ngClass",e.VKq(28,q,c.invalid&&g.submitted||c.dirty&&c.invalid)),e.xp6(2),e.Q6J("ngIf",c.invalid&&g.submitted||c.dirty&&c.invalid),e.xp6(4),e.Q6J("ngModel",g.SelectedStatus)("required",!0)("options",g.statuses)("ngClass",e.VKq(30,q,x.invalid&&g.submitted||x.dirty&&x.invalid)),e.xp6(2),e.Q6J("ngIf",x.invalid&&g.submitted||x.dirty&&x.invalid)}}let Q=(()=>{class n{constructor(i,a){this.dialogBeneficiary=i,this.beneficiaryrepository=a,this.submitted=!1,this.formValid=!1,this.types=[],this.statuses=[],this.beneficiary={},this.types=[{name:"Propia",code:"Propia"},{name:"Tercero",code:"Tercero"}],this.statuses=[{name:"ACTIVA",code:"ACTIVA"},{name:"INACTIVA",code:"INACTIVA"}]}validate(i){const a=Object.entries(i);return this.formValid=5===a.length,this.formValid}save(){if(this.beneficiary.type=this.selectedType.name,this.beneficiary.isActive=this.SelectedStatus.name,this.validate(this.beneficiary),!this.formValid)return this.dialogBeneficiary.messageService.add({severity:"error",summary:"Formulario incorrecto",detail:"Todos los campos son necesarios",life:3e3});this.beneficiaryrepository.Post(this.beneficiary).subscribe(i=>{this.dialogBeneficiary.addBeneficiarydialog=!1,this.dialogBeneficiary.messageService.add({severity:"success",detail:"registro exitoso",life:3e3})},i=>{this.dialogBeneficiary.messageService.add({severity:"error",detail:i.message,life:3e3})})}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(r),e.Y36(_.b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-beneficiary-form"]],inputs:{beneficiary:"beneficiary"},standalone:!0,features:[e._Bn([m.ez,_.b]),e.jDz],decls:2,vars:0,consts:[["pTemplate","content"],[1,"field"],["for","firstname"],["id","firstname","type","text","pInputText","","pInputText","",3,"ngModel","required","ngClass","ngModelChange"],["name","ngModel"],["class","p-error fadein",4,"ngIf"],["id","firstname","type","email","pInputText","","pInputText","",3,"ngModel","required","ngClass","ngModelChange"],["email","ngModel"],["dni","ngModel"],["id","firstname","optionLabel","name",3,"ngModel","options","required","ngClass","ngModelChange"],["type","ngModel"],["id","firstname","optionLabel","name",3,"ngModel","required","options","ngClass","ngModelChange"],["status","ngModel"],["label","Guardar","icon","pi pi-save",3,"onClick"],[1,"p-error","fadein"]],template:function(i,a){1&i&&(e.TgZ(0,"p-card"),e.YNc(1,W,32,32,"ng-template",0),e.qZA())},dependencies:[d.ez,d.mk,d.O5,G.d,G.Z,m.jx,J.j,J.o,w.kW,w.Lt,E.EV,C.hJ,C.zx,v.u5,v.Fj,v.JJ,v.Q7,v.On]}),n})(),X=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,s,k.S,w.kW,A.U$,C.hJ,O.V,J.j,R.L$,K.cc,v.u5,P.Xt,E.EV,v.UX,Y._8,H.A,Q]}),n})();e.B6R(r,[d.O5,k.V,m.jx,A.iA,A.lQ,A.fz,A.UA,A.Mo,C.Hq,O.o,J.o,E.FN,Q],[])},404:(N,Z,o)=>{o.d(Z,{Z:()=>D,d:()=>I});var t=o(2012),_=o(8439),m=o(930);function e(r,y){1&r&&t.GkF(0)}function h(r,y){if(1&r&&(t.TgZ(0,"div",8),t.Hsn(1,1),t.YNc(2,e,1,0,"ng-container",6),t.qZA()),2&r){const s=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",s.headerTemplate)}}function B(r,y){1&r&&t.GkF(0)}function M(r,y){if(1&r&&(t.TgZ(0,"div",9),t._uU(1),t.YNc(2,B,1,0,"ng-container",6),t.qZA()),2&r){const s=t.oxw();t.xp6(1),t.hij(" ",s.header," "),t.xp6(1),t.Q6J("ngTemplateOutlet",s.titleTemplate)}}function U(r,y){1&r&&t.GkF(0)}function T(r,y){if(1&r&&(t.TgZ(0,"div",10),t._uU(1),t.YNc(2,U,1,0,"ng-container",6),t.qZA()),2&r){const s=t.oxw();t.xp6(1),t.hij(" ",s.subheader," "),t.xp6(1),t.Q6J("ngTemplateOutlet",s.subtitleTemplate)}}function f(r,y){1&r&&t.GkF(0)}function u(r,y){1&r&&t.GkF(0)}function b(r,y){if(1&r&&(t.TgZ(0,"div",11),t.Hsn(1,2),t.YNc(2,u,1,0,"ng-container",6),t.qZA()),2&r){const s=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",s.footerTemplate)}}const F=["*",[["p-header"]],[["p-footer"]]],S=["*","p-header","p-footer"];let D=(()=>{class r{constructor(s){this.el=s}ngAfterContentInit(){this.templates.forEach(s=>{switch(s.getType()){case"header":this.headerTemplate=s.template;break;case"title":this.titleTemplate=s.template;break;case"subtitle":this.subtitleTemplate=s.template;break;case"content":default:this.contentTemplate=s.template;break;case"footer":this.footerTemplate=s.template}})}getBlockableElement(){return this.el.nativeElement.children[0]}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(t.SBq))},r.\u0275cmp=t.Xpm({type:r,selectors:[["p-card"]],contentQueries:function(s,d,v){if(1&s&&(t.Suo(v,m.h4,5),t.Suo(v,m.$_,5),t.Suo(v,m.jx,4)),2&s){let C;t.iGM(C=t.CRH())&&(d.headerFacet=C.first),t.iGM(C=t.CRH())&&(d.footerFacet=C.first),t.iGM(C=t.CRH())&&(d.templates=C)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:S,decls:9,vars:9,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(s,d){1&s&&(t.F$t(F),t.TgZ(0,"div",0),t.YNc(1,h,3,1,"div",1),t.TgZ(2,"div",2),t.YNc(3,M,3,2,"div",3),t.YNc(4,T,3,2,"div",4),t.TgZ(5,"div",5),t.Hsn(6),t.YNc(7,f,1,0,"ng-container",6),t.qZA(),t.YNc(8,b,3,1,"div",7),t.qZA()()),2&s&&(t.Tol(d.styleClass),t.Q6J("ngClass","p-card p-component")("ngStyle",d.style),t.xp6(1),t.Q6J("ngIf",d.headerFacet||d.headerTemplate),t.xp6(2),t.Q6J("ngIf",d.header||d.titleTemplate),t.xp6(1),t.Q6J("ngIf",d.subheader||d.subtitleTemplate),t.xp6(3),t.Q6J("ngTemplateOutlet",d.contentTemplate),t.xp6(1),t.Q6J("ngIf",d.footerFacet||d.footerTemplate))},dependencies:[_.mk,_.O5,_.tP,_.PC],styles:[".p-card-header img{width:100%}\n"],encapsulation:2,changeDetection:0}),r})(),I=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[_.ez,m.m8]}),r})()}}]);