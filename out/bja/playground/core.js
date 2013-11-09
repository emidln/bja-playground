goog.provide('bja.playground.core');
goog.require('cljs.core');
goog.require('crate.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('crate.core');
var group__4363__auto___5452 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);bja.playground.core.navbar = (function navbar(){var elem__4364__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",3175382443),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.contain","div.contain",3533474793),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",1151360959),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"button.navbar-toggle","button.navbar-toggle",2613390695),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",2577667657),"collapse",new cljs.core.Keyword(null,"data-target","data-target",2565065862),".navbar-collapse"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",2574764629)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",2574764629)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",2574764629)], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",4283020137),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"#"], true),"Bootstrap theme"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",1047762560),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",4668342074),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"javascript:bja.playground.core.goto$('/four-area-demo')"], true),"Four Area Demo"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"javascript:bja.playground.core.goto$('/two-col-demo')"], true),"Two Col Demo"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"#About"], true),"About"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li.dropdown","li.dropdown",3381983444),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a.dropdown-toggle","a.dropdown-toggle",2289650805),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"data-toggle","data-toggle",2577667657),"dropdown"], true),"Drowndown",cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"b.caret","b.caret",3501291113)], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",618610166),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"#"], true),"Action"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"#"], true),"Another Action"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"#"], true),"Something else here"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li.divider","li.divider",700339994)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li.dropdown-header","li.dropdown-header",3863595210),"NavHeader"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"#"], true),"Separated Link"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"li","li",1013907695),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"href","href",1017115293),"#"], true),"One more separated link"], true)], true)], true)], true)], true)], true)], true)], true));elem__4364__auto__.setAttribute("crateGroup",group__4363__auto___5452);
return elem__4364__auto__;
});
bja.playground.core.navbar.prototype._crateGroup = group__4363__auto___5452;
/**
* Takes an entity name as a keyword and return the unescaped HTML entity
* 
* e.g. (entity :copy) => "&copy;"
*/
bja.playground.core.entity = (function entity(e){return crate.core.raw.call(null,[cljs.core.str("&"),cljs.core.str(cljs.core.name.call(null,e)),cljs.core.str(";")].join(''));
});
var group__4363__auto___5453 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);bja.playground.core.content = (function content(){var elem__4364__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"style","style",1123684643),"margin-top: 25px; margin-left: 50px; margin-right: 50px;"], true),null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div#entrypoint","div#entrypoint",3183398658)], true)], true));elem__4364__auto__.setAttribute("crateGroup",group__4363__auto___5453);
return elem__4364__auto__;
});
bja.playground.core.content.prototype._crateGroup = group__4363__auto___5453;
bja.playground.core.test_layout = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Two Column Layout",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"two-column","two-column",3755966825),new cljs.core.Keyword(null,"containers","containers",1159149444),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"left",new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Chicago, IL",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),cljs.core.PersistentVector.fromArray([41.88,-87.64], true),new cljs.core.Keyword(null,"zoom","zoom",1017648965),12], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"map-point","map-point",835095889)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Random Table",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"labels","labels",4198454129),cljs.core.PersistentVector.fromArray(["A","B","C"], true),new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,2,3], true),cljs.core.PersistentVector.fromArray(["Foo","Bar","Baz"], true),cljs.core.PersistentVector.fromArray(["Spam","Ham","Eggs"], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"table","table",1124020032)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Browsers",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230),new cljs.core.Keyword(null,"name","name",1017277949),"Browser Share",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["FireFox",45.0], true),cljs.core.PersistentVector.fromArray(["IE",26.8], true),cljs.core.PersistentVector.fromArray(["Chrome",12.8], true),cljs.core.PersistentVector.fromArray(["Safari",8.5], true),cljs.core.PersistentVector.fromArray(["Opera",6.2], true),cljs.core.PersistentVector.fromArray(["Other",0.7], true)], true)], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230)], true)], true),new cljs.core.Keyword(null,"selector","selector",2205476689),"-container-left"], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"right",new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Device Types",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230),new cljs.core.Keyword(null,"name","name",1017277949),"Device Type",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["Smart Phone",30.0], true),cljs.core.PersistentVector.fromArray(["Tablet",25.0], true),cljs.core.PersistentVector.fromArray(["Desktop",40.0], true),cljs.core.PersistentVector.fromArray(["Feature Phone",5.0], true)], true)], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Healthy Food Chart",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"categories","categories",2310420878),cljs.core.PersistentVector.fromArray(["Apples","Oranges","Bananas"], true)], true),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",1017460895),"Fruit Eaten"], true)], true),new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"Brandon",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([1,0,4], true)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"Phil",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([5,9,2], true)], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"bar","bar",1014001541)], true)], true),new cljs.core.Keyword(null,"selector","selector",2205476689),"-container-right"], true)], true)], true));
bja.playground.core.other_test_layout = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Two Column Layout",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"four-areas","four-areas",908353937),new cljs.core.Keyword(null,"containers","containers",1159149444),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"top",new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Chicago, IL",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),cljs.core.PersistentVector.fromArray([41.88,-87.64], true),new cljs.core.Keyword(null,"zoom","zoom",1017648965),12], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"map-point","map-point",835095889)], true)], true),new cljs.core.Keyword(null,"selector","selector",2205476689),"-container-top"], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"left",new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Chicago, IL",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),cljs.core.PersistentVector.fromArray([41.88,-87.64], true),new cljs.core.Keyword(null,"zoom","zoom",1017648965),12], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"map-point","map-point",835095889)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Random Table",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"labels","labels",4198454129),cljs.core.PersistentVector.fromArray(["A","B","C"], true),new cljs.core.Keyword(null,"rows","rows",1017410891),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,2,3], true),cljs.core.PersistentVector.fromArray(["Foo","Bar","Baz"], true),cljs.core.PersistentVector.fromArray(["Spam","Ham","Eggs"], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"table","table",1124020032)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Browsers",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230),new cljs.core.Keyword(null,"name","name",1017277949),"Browser Share",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["FireFox",45.0], true),cljs.core.PersistentVector.fromArray(["IE",26.8], true),cljs.core.PersistentVector.fromArray(["Chrome",12.8], true),cljs.core.PersistentVector.fromArray(["Safari",8.5], true),cljs.core.PersistentVector.fromArray(["Opera",6.2], true),cljs.core.PersistentVector.fromArray(["Other",0.7], true)], true)], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230)], true)], true),new cljs.core.Keyword(null,"selector","selector",2205476689),"-container-left"], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"middle",new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Device Types",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230),new cljs.core.Keyword(null,"name","name",1017277949),"Device Type",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["Smart Phone",30.0], true),cljs.core.PersistentVector.fromArray(["Tablet",25.0], true),cljs.core.PersistentVector.fromArray(["Desktop",40.0], true),cljs.core.PersistentVector.fromArray(["Feature Phone",5.0], true)], true)], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Healthy Food Chart",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"categories","categories",2310420878),cljs.core.PersistentVector.fromArray(["Apples","Oranges","Bananas"], true)], true),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",1017460895),"Fruit Eaten"], true)], true),new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"Brandon",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([1,0,4], true)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"Phil",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([5,9,2], true)], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"bar","bar",1014001541)], true)], true),new cljs.core.Keyword(null,"selector","selector",2205476689),"-container-middle"], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"right",new cljs.core.Keyword(null,"widgets","widgets",2354242081),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Device Types",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230),new cljs.core.Keyword(null,"name","name",1017277949),"Device Type",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["Smart Phone",30.0], true),cljs.core.PersistentVector.fromArray(["Tablet",25.0], true),cljs.core.PersistentVector.fromArray(["Desktop",40.0], true),cljs.core.PersistentVector.fromArray(["Feature Phone",5.0], true)], true)], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pie","pie",1014015230)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"display-name","display-name",2582814760),"Healthy Food Chart",new cljs.core.Keyword(null,"private-data","private-data",1968232742),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"categories","categories",2310420878),cljs.core.PersistentVector.fromArray(["Apples","Oranges","Bananas"], true)], true),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",1017460895),"Fruit Eaten"], true)], true),new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"Brandon",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([1,0,4], true)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"Phil",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([5,9,2], true)], true)], true)], true),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"bar","bar",1014001541)], true)], true),new cljs.core.Keyword(null,"selector","selector",2205476689),"-container-right"], true)], true)], true));
/**
* Recursively merges maps. If keys are not maps, the last value w
* @param {...*} var_args
*/
bja.playground.core.deep_merge = (function() { 
var deep_merge__delegate = function (vals){if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals))
{return cljs.core.apply.call(null,cljs.core.merge_with,deep_merge,vals);
} else
{return cljs.core.last.call(null,vals);
}
};
var deep_merge = function (var_args){
var vals = null;if (arguments.length > 0) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return deep_merge__delegate.call(this,vals);};
deep_merge.cljs$lang$maxFixedArity = 0;
deep_merge.cljs$lang$applyTo = (function (arglist__5454){
var vals = cljs.core.seq(arglist__5454);
return deep_merge__delegate(vals);
});
deep_merge.cljs$core$IFn$_invoke$arity$variadic = deep_merge__delegate;
return deep_merge;
})()
;
bja.playground.core.data = (function() {
var data = null;
var data__1 = (function ($elem){return $elem.data();
});
var data__2 = (function ($elem,k){return $elem.data(cljs.core.clj__GT_js.call(null,k));
});
var data__3 = (function ($elem,k,v){return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});
data = function($elem,k,v){
switch(arguments.length){
case 1:
return data__1.call(this,$elem);
case 2:
return data__2.call(this,$elem,k);
case 3:
return data__3.call(this,$elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
data.cljs$core$IFn$_invoke$arity$1 = data__1;
data.cljs$core$IFn$_invoke$arity$2 = data__2;
data.cljs$core$IFn$_invoke$arity$3 = data__3;
return data;
})()
;
/**
* Given a jQuery selector and a highcarts config, construct
* the highchart in a div below the given selector.
* 
* Use kill-chart to remove a chart from location while leaving the location
* container intact.
*/
bja.playground.core.create_chart = (function create_chart($location,config){return jayq.core.append.call(null,$location,crate.core.html.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",4752778719)], true))).highcharts(cljs.core.clj__GT_js.call(null,config));
});
bja.playground.core.render_layout = (function (){var method_table__3747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render-layout",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__3751__auto__,method_table__3747__auto__,prefer_table__3748__auto__,method_cache__3749__auto__,cached_hierarchy__3750__auto__));
})();
cljs.core._add_method.call(null,bja.playground.core.render_layout,new cljs.core.Keyword(null,"two-column","two-column",3755966825),(function (layout){var magic_prefix = cljs.core.name.call(null,cljs.core.gensym.call(null));jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(layout)).empty();
return jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(layout)),crate.core.html.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"data-magic-prefix","data-magic-prefix",2039944039),magic_prefix], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",1688702428),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(magic_prefix),cljs.core.str("-container-left")].join('')], true)], true)], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",1688702428),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(magic_prefix),cljs.core.str("-container-right")].join('')], true)], true)], true)], true)], true)));
}));
cljs.core._add_method.call(null,bja.playground.core.render_layout,new cljs.core.Keyword(null,"four-areas","four-areas",908353937),(function (layout){var magic_prefix = cljs.core.name.call(null,cljs.core.gensym.call(null));jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(layout)).empty();
return jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(layout)),crate.core.html.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"data-magic-prefix","data-magic-prefix",2039944039),magic_prefix], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(magic_prefix),cljs.core.str("-container-top")].join('')], true)], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",1688702426),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(magic_prefix),cljs.core.str("-container-left")].join('')], true)], true)], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",1688702426),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(magic_prefix),cljs.core.str("-container-middle")].join('')], true)], true)], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",1688702426),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row","div.row",2686478959),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(magic_prefix),cljs.core.str("-container-right")].join('')], true)], true)], true)], true)], true)], true)));
}));
bja.playground.core.render_widget = (function (){var method_table__3747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render-widget",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__3751__auto__,method_table__3747__auto__,prefer_table__3748__auto__,method_cache__3749__auto__,cached_hierarchy__3750__auto__));
})();
cljs.core._add_method.call(null,bja.playground.core.render_widget,new cljs.core.Keyword(null,"table","table",1124020032),(function (widget){console.log([cljs.core.str("attempting to render: :table --\n"),cljs.core.str(cljs.core.pr_str.call(null,widget))].join(''));
jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(widget)),crate.core.html.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",4752778719),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"table","table",1124020032),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"thead","thead",1124231110),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"tr","tr",1013907952),(function (){var iter__3659__auto__ = (function iter__5455(s__5456){return (new cljs.core.LazySeq(null,(function (){var s__5456__$1 = s__5456;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5456__$1);if(temp__4092__auto__)
{var s__5456__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5456__$2))
{var c__3657__auto__ = cljs.core.chunk_first.call(null,s__5456__$2);var size__3658__auto__ = cljs.core.count.call(null,c__3657__auto__);var b__5458 = cljs.core.chunk_buffer.call(null,size__3658__auto__);if((function (){var i__5457 = 0;while(true){
if((i__5457 < size__3658__auto__))
{var label = cljs.core._nth.call(null,c__3657__auto__,i__5457);cljs.core.chunk_append.call(null,b__5458,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"th","th",1013907942),label], true));
{
var G__5479 = (i__5457 + 1);
i__5457 = G__5479;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5458),iter__5455.call(null,cljs.core.chunk_rest.call(null,s__5456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5458),null);
}
} else
{var label = cljs.core.first.call(null,s__5456__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"th","th",1013907942),label], true),iter__5455.call(null,cljs.core.rest.call(null,s__5456__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3659__auto__.call(null,new cljs.core.Keyword(null,"labels","labels",4198454129).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"private-data","private-data",1968232742).cljs$core$IFn$_invoke$arity$1(widget)));
})()], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"tbody","tbody",1124062088),(function (){var iter__3659__auto__ = (function iter__5459(s__5460){return (new cljs.core.LazySeq(null,(function (){var s__5460__$1 = s__5460;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5460__$1);if(temp__4092__auto__)
{var s__5460__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5460__$2))
{var c__3657__auto__ = cljs.core.chunk_first.call(null,s__5460__$2);var size__3658__auto__ = cljs.core.count.call(null,c__3657__auto__);var b__5462 = cljs.core.chunk_buffer.call(null,size__3658__auto__);if((function (){var i__5461 = 0;while(true){
if((i__5461 < size__3658__auto__))
{var row = cljs.core._nth.call(null,c__3657__auto__,i__5461);cljs.core.chunk_append.call(null,b__5462,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"tr","tr",1013907952),(function (){var iter__3659__auto__ = ((function (i__5461,row,c__3657__auto__,size__3658__auto__,b__5462,s__5460__$2,temp__4092__auto__){
return (function iter__5471(s__5472){return (new cljs.core.LazySeq(null,((function (i__5461,row,c__3657__auto__,size__3658__auto__,b__5462,s__5460__$2,temp__4092__auto__){
return (function (){var s__5472__$1 = s__5472;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5472__$1);if(temp__4092__auto____$1)
{var s__5472__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5472__$2))
{var c__3657__auto____$1 = cljs.core.chunk_first.call(null,s__5472__$2);var size__3658__auto____$1 = cljs.core.count.call(null,c__3657__auto____$1);var b__5474 = cljs.core.chunk_buffer.call(null,size__3658__auto____$1);if((function (){var i__5473 = 0;while(true){
if((i__5473 < size__3658__auto____$1))
{var column = cljs.core._nth.call(null,c__3657__auto____$1,i__5473);cljs.core.chunk_append.call(null,b__5474,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"td","td",1013907938),column], true));
{
var G__5480 = (i__5473 + 1);
i__5473 = G__5480;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5474),iter__5471.call(null,cljs.core.chunk_rest.call(null,s__5472__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5474),null);
}
} else
{var column = cljs.core.first.call(null,s__5472__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"td","td",1013907938),column], true),iter__5471.call(null,cljs.core.rest.call(null,s__5472__$2)));
}
} else
{return null;
}
break;
}
});})(i__5461,row,c__3657__auto__,size__3658__auto__,b__5462,s__5460__$2,temp__4092__auto__))
,null,null));
});})(i__5461,row,c__3657__auto__,size__3658__auto__,b__5462,s__5460__$2,temp__4092__auto__))
;return iter__3659__auto__.call(null,row);
})()], true));
{
var G__5481 = (i__5461 + 1);
i__5461 = G__5481;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5462),iter__5459.call(null,cljs.core.chunk_rest.call(null,s__5460__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5462),null);
}
} else
{var row = cljs.core.first.call(null,s__5460__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"tr","tr",1013907952),(function (){var iter__3659__auto__ = ((function (row,s__5460__$2,temp__4092__auto__){
return (function iter__5475(s__5476){return (new cljs.core.LazySeq(null,((function (row,s__5460__$2,temp__4092__auto__){
return (function (){var s__5476__$1 = s__5476;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5476__$1);if(temp__4092__auto____$1)
{var s__5476__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5476__$2))
{var c__3657__auto__ = cljs.core.chunk_first.call(null,s__5476__$2);var size__3658__auto__ = cljs.core.count.call(null,c__3657__auto__);var b__5478 = cljs.core.chunk_buffer.call(null,size__3658__auto__);if((function (){var i__5477 = 0;while(true){
if((i__5477 < size__3658__auto__))
{var column = cljs.core._nth.call(null,c__3657__auto__,i__5477);cljs.core.chunk_append.call(null,b__5478,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"td","td",1013907938),column], true));
{
var G__5482 = (i__5477 + 1);
i__5477 = G__5482;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5478),iter__5475.call(null,cljs.core.chunk_rest.call(null,s__5476__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5478),null);
}
} else
{var column = cljs.core.first.call(null,s__5476__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"td","td",1013907938),column], true),iter__5475.call(null,cljs.core.rest.call(null,s__5476__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__5460__$2,temp__4092__auto__))
,null,null));
});})(row,s__5460__$2,temp__4092__auto__))
;return iter__3659__auto__.call(null,row);
})()], true),iter__5459.call(null,cljs.core.rest.call(null,s__5460__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3659__auto__.call(null,new cljs.core.Keyword(null,"rows","rows",1017410891).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"private-data","private-data",1968232742).cljs$core$IFn$_invoke$arity$1(widget)));
})()], true)], true)], true)));
return jayq.core.$.call(null,[cljs.core.str(new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(widget)),cljs.core.str(" div table")].join('')).dataTable();
}));
cljs.core._add_method.call(null,bja.playground.core.render_widget,new cljs.core.Keyword(null,"pie","pie",1014015230),(function (widget){console.log([cljs.core.str("attempting to render: :pie --\n"),cljs.core.str(cljs.core.pr_str.call(null,widget))].join(''));
return bja.playground.core.create_chart.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(widget)),bja.playground.core.deep_merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"plotOptions","plotOptions",3823924719),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"pie","pie",1014015230),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"dataLabels","dataLabels",2072463291),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"enabled","enabled",3699277491),true], true),new cljs.core.Keyword(null,"showInLegend","showInLegend",3881808673),true], true)], true),new cljs.core.Keyword(null,"credits","credits",2042537996),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"enabled","enabled",3699277491),false], true)], true),new cljs.core.Keyword(null,"private-data","private-data",1968232742).cljs$core$IFn$_invoke$arity$1(widget)));
}));
cljs.core._add_method.call(null,bja.playground.core.render_widget,new cljs.core.Keyword(null,"bar","bar",1014001541),(function (widget){console.log([cljs.core.str("attempting to render: :bar --\n"),cljs.core.str(cljs.core.pr_str.call(null,widget))].join(''));
return bja.playground.core.create_chart.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(widget)),bja.playground.core.deep_merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"chart","chart",1108527952),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),"bar"], true),new cljs.core.Keyword(null,"credits","credits",2042537996),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"enabled","enabled",3699277491),false], true)], true),new cljs.core.Keyword(null,"private-data","private-data",1968232742).cljs$core$IFn$_invoke$arity$1(widget)));
}));
cljs.core._add_method.call(null,bja.playground.core.render_widget,new cljs.core.Keyword(null,"map-point","map-point",835095889),(function (widget){console.log([cljs.core.str("attempting to render: map --\n"),cljs.core.str(cljs.core.pr_str.call(null,widget))].join(''));
jayq.core.css.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(widget)),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"height","height",4087841945),"300px"], true));
var my_map = window.L.map(cljs.core.subs.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(widget),1)).setView(cljs.core.clj__GT_js.call(null,cljs.core.get_in.call(null,widget,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"private-data","private-data",1968232742),new cljs.core.Keyword(null,"coordinates","coordinates",2885823853)], true))),cljs.core.get_in.call(null,widget,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"private-data","private-data",1968232742),new cljs.core.Keyword(null,"zoom","zoom",1017648965)], true)));return window.L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"attribution","attribution",704021489),"&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"], true))).addTo(my_map);
}));
bja.playground.core.build_container = (function build_container(container){var selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(container);var seq__5489 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(container));var chunk__5491 = null;var count__5492 = 0;var i__5493 = 0;while(true){
if((i__5493 < count__5492))
{var widget = cljs.core._nth.call(null,chunk__5491,i__5493);var widget_id_5495 = cljs.core.name.call(null,cljs.core.gensym.call(null));jayq.core.append.call(null,jayq.core.$.call(null,selector),crate.core.html.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row.layout-container","div.row.layout-container",3361167329),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"padding","padding",4502531971),"1em"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-12.widget-title","div.col-md-12.widget-title",4532032226),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"h3.text-center","h3.text-center",1248924612),new cljs.core.Keyword(null,"display-name","display-name",2582814760).cljs$core$IFn$_invoke$arity$1(widget)], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.widget-content","div.widget-content",4299661407),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),widget_id_5495], true)], true)], true)));
bja.playground.core.render_widget.call(null,cljs.core.assoc.call(null,widget,new cljs.core.Keyword(null,"selector","selector",2205476689),[cljs.core.str("#"),cljs.core.str(widget_id_5495)].join('')));
{
var G__5496 = seq__5489;
var G__5497 = chunk__5491;
var G__5498 = count__5492;
var G__5499 = (i__5493 + 1);
seq__5489 = G__5496;
chunk__5491 = G__5497;
count__5492 = G__5498;
i__5493 = G__5499;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5489);if(temp__4092__auto__)
{var seq__5489__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5489__$1))
{var c__3690__auto__ = cljs.core.chunk_first.call(null,seq__5489__$1);{
var G__5500 = cljs.core.chunk_rest.call(null,seq__5489__$1);
var G__5501 = c__3690__auto__;
var G__5502 = cljs.core.count.call(null,c__3690__auto__);
var G__5503 = 0;
seq__5489 = G__5500;
chunk__5491 = G__5501;
count__5492 = G__5502;
i__5493 = G__5503;
continue;
}
} else
{var widget = cljs.core.first.call(null,seq__5489__$1);var widget_id_5504 = cljs.core.name.call(null,cljs.core.gensym.call(null));jayq.core.append.call(null,jayq.core.$.call(null,selector),crate.core.html.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.row.layout-container","div.row.layout-container",3361167329),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"padding","padding",4502531971),"1em"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.col-md-12.widget-title","div.col-md-12.widget-title",4532032226),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"h3.text-center","h3.text-center",1248924612),new cljs.core.Keyword(null,"display-name","display-name",2582814760).cljs$core$IFn$_invoke$arity$1(widget)], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div.widget-content","div.widget-content",4299661407),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),widget_id_5504], true)], true)], true)));
bja.playground.core.render_widget.call(null,cljs.core.assoc.call(null,widget,new cljs.core.Keyword(null,"selector","selector",2205476689),[cljs.core.str("#"),cljs.core.str(widget_id_5504)].join('')));
{
var G__5505 = cljs.core.next.call(null,seq__5489__$1);
var G__5506 = null;
var G__5507 = 0;
var G__5508 = 0;
seq__5489 = G__5505;
chunk__5491 = G__5506;
count__5492 = G__5507;
i__5493 = G__5508;
continue;
}
}
} else
{return null;
}
}
break;
}
});
bja.playground.core.build_layout = (function build_layout(layout){var magic_prefix_5522 = bja.playground.core.data.call(null,bja.playground.core.render_layout.call(null,layout).children().first(),new cljs.core.Keyword(null,"magic-prefix","magic-prefix",1165597220));var seq__5516_5523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"containers","containers",1159149444).cljs$core$IFn$_invoke$arity$1(layout));var chunk__5518_5524 = null;var count__5519_5525 = 0;var i__5520_5526 = 0;while(true){
if((i__5520_5526 < count__5519_5525))
{var container_STAR__5527 = cljs.core._nth.call(null,chunk__5518_5524,i__5520_5526);var container_5528 = cljs.core.update_in.call(null,container_STAR__5527,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"selector","selector",2205476689)], true),((function (seq__5516_5523,chunk__5518_5524,count__5519_5525,i__5520_5526,container_STAR__5527){
return (function (p1__5509_SHARP_){return [cljs.core.str("#"),cljs.core.str(magic_prefix_5522),cljs.core.str(p1__5509_SHARP_)].join('');
});})(seq__5516_5523,chunk__5518_5524,count__5519_5525,i__5520_5526,container_STAR__5527))
);console.log([cljs.core.str("container value is: "),cljs.core.str(cljs.core.pr_str.call(null,container_5528))].join(''));
bja.playground.core.build_container.call(null,container_5528);
jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(container_5528)).sortable(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"connectWith","connectWith",2737966146),".layout-container"], true)));
jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(container_5528)).disableSelection();
{
var G__5529 = seq__5516_5523;
var G__5530 = chunk__5518_5524;
var G__5531 = count__5519_5525;
var G__5532 = (i__5520_5526 + 1);
seq__5516_5523 = G__5529;
chunk__5518_5524 = G__5530;
count__5519_5525 = G__5531;
i__5520_5526 = G__5532;
continue;
}
} else
{var temp__4092__auto___5533 = cljs.core.seq.call(null,seq__5516_5523);if(temp__4092__auto___5533)
{var seq__5516_5534__$1 = temp__4092__auto___5533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5516_5534__$1))
{var c__3690__auto___5535 = cljs.core.chunk_first.call(null,seq__5516_5534__$1);{
var G__5536 = cljs.core.chunk_rest.call(null,seq__5516_5534__$1);
var G__5537 = c__3690__auto___5535;
var G__5538 = cljs.core.count.call(null,c__3690__auto___5535);
var G__5539 = 0;
seq__5516_5523 = G__5536;
chunk__5518_5524 = G__5537;
count__5519_5525 = G__5538;
i__5520_5526 = G__5539;
continue;
}
} else
{var container_STAR__5540 = cljs.core.first.call(null,seq__5516_5534__$1);var container_5541 = cljs.core.update_in.call(null,container_STAR__5540,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"selector","selector",2205476689)], true),((function (seq__5516_5523,chunk__5518_5524,count__5519_5525,i__5520_5526,container_STAR__5540,seq__5516_5534__$1,temp__4092__auto___5533){
return (function (p1__5509_SHARP_){return [cljs.core.str("#"),cljs.core.str(magic_prefix_5522),cljs.core.str(p1__5509_SHARP_)].join('');
});})(seq__5516_5523,chunk__5518_5524,count__5519_5525,i__5520_5526,container_STAR__5540,seq__5516_5534__$1,temp__4092__auto___5533))
);console.log([cljs.core.str("container value is: "),cljs.core.str(cljs.core.pr_str.call(null,container_5541))].join(''));
bja.playground.core.build_container.call(null,container_5541);
jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(container_5541)).sortable(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"connectWith","connectWith",2737966146),".layout-container"], true)));
jayq.core.$.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(container_5541)).disableSelection();
{
var G__5542 = cljs.core.next.call(null,seq__5516_5534__$1);
var G__5543 = null;
var G__5544 = 0;
var G__5545 = 0;
seq__5516_5523 = G__5542;
chunk__5518_5524 = G__5543;
count__5519_5525 = G__5544;
i__5520_5526 = G__5545;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.bind.call(null,jayq.core.$.call(null,".widget-title"),new cljs.core.Keyword(null,"click","click",1108654330),(function (){var $this = jayq.core.$.call(null,this);console.log($this);
console.log($this.next(".widget-content"));
return $this.next(".widget-content").toggle();
}));
});
/**
* This was an idea to use gensym as a source of unique div names.
* As it turns out, the problem this was solving, which was being able
* to refer to things by unique name, is solved by creating controls
* underneath the div given, and then making the cleanup do something like
* 
* (-> $elem .children .remove)
* 
*/
bja.playground.core.gendiv = (function gendiv(){return cljs.core.keyword.call(null,[cljs.core.str("div#"),cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null)))].join(''));
});
/**
* HighCharts intro graph
*/
bja.playground.core.fruit_bar_graph = (function fruit_bar_graph($elem){return bja.playground.core.create_chart.call(null,$elem,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"chart","chart",1108527952),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),"bar"], true),new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",1017460895),"Fruit Consumption"], true),new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"categories","categories",2310420878),cljs.core.PersistentVector.fromArray(["Apples","Bannanas","Oranges"], true)], true),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"title","title",1124275658),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",1017460895),"Fruit eaten"], true)], true),new cljs.core.Keyword(null,"series","series",4403032553),cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"Jane",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([1,0,4], true)], true),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"John",new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.fromArray([5,7,3], true)], true)], true),new cljs.core.Keyword(null,"credits","credits",2042537996),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"enabled","enabled",3699277491),false], true)], true));
});
/**
* Given a location for a chart as a jquery selector, remove
* all children under that location.
*/
bja.playground.core.kill_chart = (function kill_chart($location){return jayq.core.remove.call(null,jayq.core.children.call(null,$location));
});
jayq.core.append.call(null,jayq.core.append.call(null,jayq.core.$.call(null,"body"),bja.playground.core.navbar.call(null)),bja.playground.core.content.call(null));
jayq.core.bind.call(null,jayq.core.$.call(null,"#chart-toggle"),new cljs.core.Keyword(null,"click","click",1108654330),(function (){var $this = jayq.core.$.call(null,this);if(cljs.core.truth_(bja.playground.core.data.call(null,$this,new cljs.core.Keyword(null,"visible","visible",1480647652))))
{bja.playground.core.data.call(null,$this,new cljs.core.Keyword(null,"visible","visible",1480647652),false);
return bja.playground.core.kill_chart.call(null,jayq.core.$.call(null,"#chart"));
} else
{bja.playground.core.data.call(null,$this,new cljs.core.Keyword(null,"visible","visible",1480647652),true);
return bja.playground.core.fruit_bar_graph.call(null,jayq.core.$.call(null,"#chart"));
}
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/two-col-demo",(function (params__4347__auto__){var map__5546 = params__4347__auto__;var map__5546__$1 = ((cljs.core.seq_QMARK_.call(null,map__5546))?cljs.core.apply.call(null,cljs.core.hash_map,map__5546):map__5546);return bja.playground.core.build_layout.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,bja.playground.core.test_layout),new cljs.core.Keyword(null,"selector","selector",2205476689),"#entrypoint"));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/four-area-demo",(function (params__4347__auto__){var map__5547 = params__4347__auto__;var map__5547__$1 = ((cljs.core.seq_QMARK_.call(null,map__5547))?cljs.core.apply.call(null,cljs.core.hash_map,map__5547):map__5547);return bja.playground.core.build_layout.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,bja.playground.core.other_test_layout),new cljs.core.Keyword(null,"selector","selector",2205476689),"#entrypoint"));
}));
secretary.core.dispatch_BANG_.call(null,"/four-area-demo");
bja.playground.core.goto$ = (function goto$(place){return secretary.core.dispatch_BANG_.call(null,place);
});
goog.exportSymbol('bja.playground.core.goto$', bja.playground.core.goto$);

//@ sourceMappingURL=core.js.map