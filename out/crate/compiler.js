goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xhtml","xhtml",1127939989),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",1014018518),"http://www.w3.org/2000/svg"], true);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,cljs.core.PersistentVector.fromArray([tag,b], true));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__6737 = cljs.core.seq.call(null,content);var chunk__6738 = null;var count__6739 = 0;var i__6740 = 0;while(true){
if((i__6740 < count__6739))
{var c = cljs.core._nth.call(null,chunk__6738,i__6740);var child_6741 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_6741))
{goog.dom.appendChild(parent,child_6741);
} else
{}
{
var G__6742 = seq__6737;
var G__6743 = chunk__6738;
var G__6744 = count__6739;
var G__6745 = (i__6740 + 1);
seq__6737 = G__6742;
chunk__6738 = G__6743;
count__6739 = G__6744;
i__6740 = G__6745;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6737);if(temp__4092__auto__)
{var seq__6737__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6737__$1))
{var c__3690__auto__ = cljs.core.chunk_first.call(null,seq__6737__$1);{
var G__6746 = cljs.core.chunk_rest.call(null,seq__6737__$1);
var G__6747 = c__3690__auto__;
var G__6748 = cljs.core.count.call(null,c__3690__auto__);
var G__6749 = 0;
seq__6737 = G__6746;
chunk__6738 = G__6747;
count__6739 = G__6748;
i__6740 = G__6749;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6737__$1);var child_6750 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_6750))
{goog.dom.appendChild(parent,child_6750);
} else
{}
{
var G__6751 = cljs.core.next.call(null,seq__6737__$1);
var G__6752 = null;
var G__6753 = 0;
var G__6754 = 0;
seq__6737 = G__6751;
chunk__6738 = G__6752;
count__6739 = G__6753;
i__6740 = G__6754;
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
crate.compiler.dom_binding = (function (){var method_table__3747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){return type;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__3751__auto__,method_table__3747__auto__,prefer_table__3748__auto__,method_cache__3749__auto__,cached_hierarchy__3750__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",1017460895),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,cljs.core.PersistentVector.fromArray([v], true));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (_,p__6755,elem){var vec__6756 = p__6755;var k = cljs.core.nth.call(null,vec__6756,0,null);var b = cljs.core.nth.call(null,vec__6756,1,null);return crate.binding.on_change.call(null,b,(function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",1123684643),(function (_,p__6757,elem){var vec__6758 = p__6757;var k = cljs.core.nth.call(null,vec__6758,0,null);var b = cljs.core.nth.call(null,vec__6758,1,null);return crate.binding.on_change.call(null,b,(function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4090__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",1014000659));if(cljs.core.truth_(temp__4090__auto__))
{var adder = temp__4090__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4090__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",4374260726));if(cljs.core.truth_(temp__4090__auto__))
{var remover = temp__4090__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1016963678),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__6759 = cljs.core._EQ_;var expr__6760 = type;if(pred__6759.call(null,new cljs.core.Keyword(null,"add","add",1014000659),expr__6760))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(pred__6759.call(null,new cljs.core.Keyword(null,"remove","remove",4374260726),expr__6760))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__6760)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__6768 = cljs.core.seq.call(null,bs);var chunk__6769 = null;var count__6770 = 0;var i__6771 = 0;while(true){
if((i__6771 < count__6770))
{var vec__6772 = cljs.core._nth.call(null,chunk__6769,i__6771);var type = cljs.core.nth.call(null,vec__6772,0,null);var b = cljs.core.nth.call(null,vec__6772,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__6774 = seq__6768;
var G__6775 = chunk__6769;
var G__6776 = count__6770;
var G__6777 = (i__6771 + 1);
seq__6768 = G__6774;
chunk__6769 = G__6775;
count__6770 = G__6776;
i__6771 = G__6777;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6768);if(temp__4092__auto__)
{var seq__6768__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6768__$1))
{var c__3690__auto__ = cljs.core.chunk_first.call(null,seq__6768__$1);{
var G__6778 = cljs.core.chunk_rest.call(null,seq__6768__$1);
var G__6779 = c__3690__auto__;
var G__6780 = cljs.core.count.call(null,c__3690__auto__);
var G__6781 = 0;
seq__6768 = G__6778;
chunk__6769 = G__6779;
count__6770 = G__6780;
i__6771 = G__6781;
continue;
}
} else
{var vec__6773 = cljs.core.first.call(null,seq__6768__$1);var type = cljs.core.nth.call(null,vec__6773,0,null);var b = cljs.core.nth.call(null,vec__6773,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__6782 = cljs.core.next.call(null,seq__6768__$1);
var G__6783 = null;
var G__6784 = 0;
var G__6785 = 0;
seq__6768 = G__6782;
chunk__6769 = G__6783;
count__6770 = G__6784;
i__6771 = G__6785;
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
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__6792_6798 = cljs.core.seq.call(null,v);var chunk__6793_6799 = null;var count__6794_6800 = 0;var i__6795_6801 = 0;while(true){
if((i__6795_6801 < count__6794_6800))
{var vec__6796_6802 = cljs.core._nth.call(null,chunk__6793_6799,i__6795_6801);var k_6803 = cljs.core.nth.call(null,vec__6796_6802,0,null);var v_6804__$1 = cljs.core.nth.call(null,vec__6796_6802,1,null);dom_style.call(null,elem,k_6803,v_6804__$1);
{
var G__6805 = seq__6792_6798;
var G__6806 = chunk__6793_6799;
var G__6807 = count__6794_6800;
var G__6808 = (i__6795_6801 + 1);
seq__6792_6798 = G__6805;
chunk__6793_6799 = G__6806;
count__6794_6800 = G__6807;
i__6795_6801 = G__6808;
continue;
}
} else
{var temp__4092__auto___6809 = cljs.core.seq.call(null,seq__6792_6798);if(temp__4092__auto___6809)
{var seq__6792_6810__$1 = temp__4092__auto___6809;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6792_6810__$1))
{var c__3690__auto___6811 = cljs.core.chunk_first.call(null,seq__6792_6810__$1);{
var G__6812 = cljs.core.chunk_rest.call(null,seq__6792_6810__$1);
var G__6813 = c__3690__auto___6811;
var G__6814 = cljs.core.count.call(null,c__3690__auto___6811);
var G__6815 = 0;
seq__6792_6798 = G__6812;
chunk__6793_6799 = G__6813;
count__6794_6800 = G__6814;
i__6795_6801 = G__6815;
continue;
}
} else
{var vec__6797_6816 = cljs.core.first.call(null,seq__6792_6810__$1);var k_6817 = cljs.core.nth.call(null,vec__6797_6816,0,null);var v_6818__$1 = cljs.core.nth.call(null,vec__6797_6816,1,null);dom_style.call(null,elem,k_6817,v_6818__$1);
{
var G__6819 = cljs.core.next.call(null,seq__6792_6810__$1);
var G__6820 = null;
var G__6821 = 0;
var G__6822 = 0;
seq__6792_6798 = G__6819;
chunk__6793_6799 = G__6820;
count__6794_6800 = G__6821;
i__6795_6801 = G__6822;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v)))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.PersistentVector.fromArray([null,v], true));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__6829_6835 = cljs.core.seq.call(null,attrs);var chunk__6830_6836 = null;var count__6831_6837 = 0;var i__6832_6838 = 0;while(true){
if((i__6832_6838 < count__6831_6837))
{var vec__6833_6839 = cljs.core._nth.call(null,chunk__6830_6836,i__6832_6838);var k_6840 = cljs.core.nth.call(null,vec__6833_6839,0,null);var v_6841 = cljs.core.nth.call(null,vec__6833_6839,1,null);dom_attr.call(null,elem,k_6840,v_6841);
{
var G__6842 = seq__6829_6835;
var G__6843 = chunk__6830_6836;
var G__6844 = count__6831_6837;
var G__6845 = (i__6832_6838 + 1);
seq__6829_6835 = G__6842;
chunk__6830_6836 = G__6843;
count__6831_6837 = G__6844;
i__6832_6838 = G__6845;
continue;
}
} else
{var temp__4092__auto___6846 = cljs.core.seq.call(null,seq__6829_6835);if(temp__4092__auto___6846)
{var seq__6829_6847__$1 = temp__4092__auto___6846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6829_6847__$1))
{var c__3690__auto___6848 = cljs.core.chunk_first.call(null,seq__6829_6847__$1);{
var G__6849 = cljs.core.chunk_rest.call(null,seq__6829_6847__$1);
var G__6850 = c__3690__auto___6848;
var G__6851 = cljs.core.count.call(null,c__3690__auto___6848);
var G__6852 = 0;
seq__6829_6835 = G__6849;
chunk__6830_6836 = G__6850;
count__6831_6837 = G__6851;
i__6832_6838 = G__6852;
continue;
}
} else
{var vec__6834_6853 = cljs.core.first.call(null,seq__6829_6847__$1);var k_6854 = cljs.core.nth.call(null,vec__6834_6853,0,null);var v_6855 = cljs.core.nth.call(null,vec__6834_6853,1,null);dom_attr.call(null,elem,k_6854,v_6855);
{
var G__6856 = cljs.core.next.call(null,seq__6829_6847__$1);
var G__6857 = null;
var G__6858 = 0;
var G__6859 = 0;
seq__6829_6835 = G__6856;
chunk__6830_6836 = G__6857;
count__6831_6837 = G__6858;
i__6832_6838 = G__6859;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_6860__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_6860__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6863){var vec__6864 = p__6863;var n = cljs.core.nth.call(null,vec__6864,0,null);var v = cljs.core.nth.call(null,vec__6864,1,null);if(v === true)
{return cljs.core.PersistentVector.fromArray([n,cljs.core.name.call(null,n)], true);
} else
{return cljs.core.PersistentVector.fromArray([n,v], true);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__6866){var vec__6871 = p__6866;var tag = cljs.core.nth.call(null,vec__6871,0,null);var content = cljs.core.nthnext.call(null,vec__6871,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__6872 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__6872,0,null);var tag__$1 = cljs.core.nth.call(null,vec__6872,1,null);var id = cljs.core.nth.call(null,vec__6872,2,null);var class$ = cljs.core.nth.call(null,vec__6872,3,null);var vec__6873 = (function (){var vec__6874 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__6874,0,null);var t = cljs.core.nth.call(null,vec__6874,1,null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return cljs.core.PersistentVector.fromArray([(function (){var or__2981__auto__ = ns_xmlns;if(cljs.core.truth_(or__2981__auto__))
{return or__2981__auto__;
} else
{return nsp;
}
})(),t], true);
} else
{return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"xhtml","xhtml",1127939989).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], true);
}
})();var nsp = cljs.core.nth.call(null,vec__6873,0,null);var tag__$2 = cljs.core.nth.call(null,vec__6873,1,null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__6872,_,tag__$1,id,class$,vec__6873,nsp,tag__$2){
return (function (p1__6865_SHARP_){return !((cljs.core.second.call(null,p1__6865_SHARP_) == null));
});})(vec__6872,_,tag__$1,id,class$,vec__6873,nsp,tag__$2))
,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__2981__auto__ = id;if(cljs.core.truth_(or__2981__auto__))
{return or__2981__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], true)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], true);
} else
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,tag_attrs,content], true);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings6877 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__6878 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__6878,0,null);var tag = cljs.core.nth.call(null,vec__6878,1,null);var attrs = cljs.core.nth.call(null,vec__6878,2,null);var content = cljs.core.nth.call(null,vec__6878,3,null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings6877;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__6881__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__6880 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__6880,0,null);var body = cljs.core.nthnext.call(null,vec__6880,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__6881 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6881__delegate.call(this,args);};
G__6881.cljs$lang$maxFixedArity = 0;
G__6881.cljs$lang$applyTo = (function (arglist__6882){
var args = cljs.core.seq(arglist__6882);
return G__6881__delegate(args);
});
G__6881.cljs$core$IFn$_invoke$arity$variadic = G__6881__delegate;
return G__6881;
})()
;
});

//@ sourceMappingURL=compiler.js.map