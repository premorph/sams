"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[503],{9503:(P,b,o)=>{o.r(b),o.d(b,{BankModule:()=>K,BankRoutingModule:()=>C});var h=o(5654),m=o(930),t=o(2012);function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",13)(1,"button",14),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.new())}),t.qZA(),t._UZ(2,"button",15),t.qZA()}}function y(n,a){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"button",16),t.qZA())}function q(n,a){1&n&&(t.TgZ(0,"div",17)(1,"h5",18),t._uU(2,"Listado de Bancos"),t.qZA(),t.TgZ(3,"span",19),t._UZ(4,"i",20)(5,"input",21),t.qZA()())}function U(n,a){1&n&&(t.TgZ(0,"tr")(1,"th",22),t._UZ(2,"p-tableHeaderCheckbox"),t.qZA(),t.TgZ(3,"th",23),t._uU(4,"Banco "),t._UZ(5,"p-sortIcon",24),t.qZA(),t.TgZ(6,"th",25),t._uU(7,"Numero de cuenta "),t._UZ(8,"p-sortIcon",26),t.qZA(),t.TgZ(9,"th",27),t._uU(10,"Estatus "),t._UZ(11,"p-sortIcon",28),t.qZA(),t._UZ(12,"th"),t.qZA())}function N(n,a){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"p-tableCheckbox",29),t.qZA(),t.TgZ(3,"td",30)(4,"span",31),t._uU(5,"Code"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"td",30)(8,"span",31),t._uU(9,"Name"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"td",32)(12,"span",31),t._uU(13,"Price"),t.qZA(),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"td",30)(17,"span",31),t._uU(18,"Category"),t.qZA(),t._uU(19),t.qZA(),t.TgZ(20,"td",30)(21,"span",31),t._uU(22,"Status"),t.qZA(),t.TgZ(23,"span"),t._uU(24),t.qZA()(),t.TgZ(25,"td")(26,"div",33),t._UZ(27,"button",34)(28,"button",35),t.qZA()()()),2&n){const e=a.$implicit;t.xp6(2),t.Q6J("value",e),t.xp6(4),t.hij(" ",e.code||e.id," "),t.xp6(4),t.hij(" ",e.name," "),t.xp6(4),t.hij(" ",t.xi3(15,8,e.price,"USD")," "),t.xp6(5),t.hij(" ",e.category," "),t.xp6(4),t.Tol("product-badge status-"+(e.inventoryStatus?e.inventoryStatus.toLowerCase():"")),t.xp6(1),t.Oqu(e.inventoryStatus)}}const F=function(){return["name","country.name","representative.name","status"]},J=function(){return[10,20,30]},w=function(){return{width:"60%"}};let Z=(()=>{class n{constructor(e){this.messageService=e,this.addBankDialog=!1,this.cols=[],this.bank={id:"",name:"",accountNumber:0,companyId:"",user_id:"",isActive:""}}ngOnInit(){this.cols=[{field:"banco",header:"banco"},{field:"NumberAccount",header:"NumberAccount"},{field:"isActive",header:"isActive"}]}new(){this.addBankDialog=!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.ez))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bank"]],features:[t._Bn([m.ez])],decls:14,vars:19,consts:[[1,"grid","fadein","animate-duration-500"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} hasta {last} de {totalRecords} resultados","selectionMode","multiple","dataKey","id","scrollHeight","500px",3,"columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","rowHover","scrollable","virtualScroll","virtualScrollItemSize"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Banco",1,"p-fluid",3,"visible","modal","visibleChange"],[3,"bank"],[1,"my-2"],["pButton","","pRipple","","label","Nueva Entrada","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Eliminar","icon","pi pi-trash",1,"p-button-danger"],["pButton","","pRipple","","label","Exportar a PDF","icon","pi pi-file-pdf",1,"p-button-warning"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar...",1,"w-full","sm:w-auto"],[2,"width","3rem"],["pSortableColumn","banco"],["field","Banco"],["pSortableColumn","NumberAccount"],["field","NumberAccount"],["pSortableColumn","isActive"],["field","isActive"],[3,"value"],[2,"width","14%","min-width","10rem"],[1,"p-column-title"],[2,"width","14%","min-width","8rem"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"p-toast"),t.TgZ(4,"p-toolbar",3),t.YNc(5,M,3,0,"ng-template",4),t.YNc(6,y,2,0,"ng-template",5),t.qZA(),t.TgZ(7,"p-table",6,7),t.YNc(9,q,6,0,"ng-template",8),t.YNc(10,U,13,0,"ng-template",9),t.YNc(11,N,29,11,"ng-template",10),t.qZA()(),t.TgZ(12,"p-dialog",11),t.NdJ("visibleChange",function(r){return i.addBankDialog=r}),t._UZ(13,"app-bank-form",12),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("columns",i.cols)("rows",10)("globalFilterFields",t.DdM(16,F))("rows",10)("paginator",!0)("rowsPerPageOptions",t.DdM(17,J))("showCurrentPageReport",!0)("rowHover",!0)("scrollable",!0)("virtualScroll",!0)("virtualScrollItemSize",46),t.xp6(5),t.Akn(t.DdM(18,w)),t.Q6J("visible",i.addBankDialog)("modal",!0),t.xp6(1),t.Q6J("bank",i.bank))}}),n})();const S=[{path:"",component:Z}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(S),h.Bz]}),n})();var u=o(8439),I=o(4777),j=o(6541),A=o(290),_=o(9636),d=o(5733),c=o(6229),k=o(6873),g=o(5804),p=o(4625),Q=o(6511),R=o(9101),z=o(2180),v=o(416),T=o(404),x=o(9051);function E(n,a){1&n&&(t.TgZ(0,"small",16),t._uU(1,"El monto es requerido."),t.qZA())}function H(n,a){1&n&&(t.TgZ(0,"small",16),t._uU(1,"El monto es requerido."),t.qZA())}function V(n,a){1&n&&(t.TgZ(0,"small",16),t._uU(1,"El monto es requerido."),t.qZA())}function Y(n,a){1&n&&(t.TgZ(0,"small",16),t._uU(1,"El estatus es requerido."),t.qZA())}const f=function(n){return{"ng-dirty":n}};function D(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"label",2),t._uU(2,"Nombre del banco"),t.qZA(),t.TgZ(3,"input",3,4),t.NdJ("ngModelChange",function(l){t.CHM(e);const r=t.oxw();return t.KtG(r.bank.name=l)}),t.qZA(),t.YNc(5,E,2,0,"small",5),t.qZA(),t.TgZ(6,"div",1)(7,"label",6),t._uU(8,"Numero de cuenta"),t.qZA(),t.TgZ(9,"p-inputMask",7,8),t.NdJ("ngModelChange",function(l){t.CHM(e);const r=t.oxw();return t.KtG(r.bank.accountNumber=l)}),t.qZA(),t.YNc(11,H,2,0,"small",5),t.qZA(),t.TgZ(12,"div",1)(13,"label",9),t._uU(14,"Beneficiario"),t.qZA(),t.TgZ(15,"p-dropdown",10,11),t.NdJ("ngModelChange",function(l){t.CHM(e);const r=t.oxw();return t.KtG(r.bank.companyId=l)}),t.qZA(),t.YNc(17,V,2,0,"small",5),t.qZA(),t.TgZ(18,"div",1)(19,"label",12),t._uU(20,"Estado"),t.qZA(),t.TgZ(21,"p-dropdown",13,14),t.NdJ("ngModelChange",function(l){t.CHM(e);const r=t.oxw();return t.KtG(r.bank.isActive=l)}),t.qZA(),t.YNc(23,Y,2,0,"small",5),t.qZA(),t.TgZ(24,"div",1)(25,"p-button",15),t.NdJ("onClick",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.save())}),t.qZA()()}if(2&n){const e=t.MAs(4),i=t.MAs(10),l=t.MAs(16),r=t.MAs(22),s=t.oxw();t.xp6(3),t.Q6J("ngModel",s.bank.name)("required",!0)("ngClass",t.VKq(17,f,e.invalid&&s.submitted||e.dirty&&e.invalid)),t.xp6(2),t.Q6J("ngIf",e.invalid&&s.submitted||e.dirty&&e.invalid),t.xp6(4),t.Q6J("ngModel",s.bank.accountNumber)("required",!0)("ngClass",t.VKq(19,f,i.invalid&&s.submitted||i.dirty&&i.invalid)),t.xp6(2),t.Q6J("ngIf",i.invalid&&s.submitted||i.dirty&&i.invalid),t.xp6(4),t.Q6J("ngModel",s.bank.companyId)("filter",!0)("required",!0)("ngClass",t.VKq(21,f,l.invalid&&s.submitted||l.dirty&&l.invalid)),t.xp6(2),t.Q6J("ngIf",l.invalid&&s.submitted||l.dirty&&l.invalid),t.xp6(4),t.Q6J("ngModel",s.bank.isActive)("required",!0)("ngClass",t.VKq(23,f,r.invalid&&s.submitted||r.dirty&&r.invalid)),t.xp6(2),t.Q6J("ngIf",r.invalid&&s.submitted||r.dirty&&r.invalid)}}let B=(()=>{class n{constructor(e){this.dialogbank=e,this.submitted=!1,this.formValid=!1,this.bank={id:"",name:"",accountNumber:0,companyId:"",user_id:"",isActive:""}}validate(e){const i=Object.entries(e);return this.formValid=4===i.length,this.formValid}save(){this.validate(this.bank),this.dialogbank.addBankDialog=!1,this.dialogbank.messageService.add({severity:"success",detail:"registro exitoso",life:3e3})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bank-form"]],inputs:{bank:"bank"},standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[["pTemplate","content"],[1,"field"],["for","name"],["id","name","type","text","pInputText","","pInputText","",3,"ngModel","required","ngClass","ngModelChange"],["name","ngModel"],["class","p-error fadein",4,"ngIf"],["for","accountNumber"],["mask","9999-9999-9999-9999-99999","id","accountNumber",3,"ngModel","required","ngClass","ngModelChange"],["accountNumber","ngModel"],["for","company"],["id","company","type","text",3,"ngModel","filter","required","ngClass","ngModelChange"],["company","ngModel"],["for","status"],["id","status",3,"ngModel","required","ngClass","ngModelChange"],["status","ngModel"],["label","Guardar","icon","pi pi-save",3,"onClick"],[1,"p-error","fadein"]],template:function(e,i){1&e&&(t.TgZ(0,"p-card"),t.YNc(1,D,26,25,"ng-template",0),t.qZA())},dependencies:[u.ez,u.mk,u.O5,T.d,T.Z,m.jx,g.j,g.o,_.kW,_.Lt,v.EV,c.hJ,c.zx,p.u5,p.Fj,p.JJ,p.Q7,p.On,x.zz,x.vy]}),n})(),K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,C,A.S,_.kW,d.U$,c.hJ,k.V,g.j,R.L$,z.cc,p.u5,I.Xt,v.EV,p.UX,Q._8,j.A,B]}),n})();t.B6R(Z,[A.V,m.jx,d.iA,d.lQ,d.fz,d.UA,d.Mo,c.Hq,k.o,g.o,v.FN,B],[u.H9])}}]);