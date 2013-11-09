goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
goog.provide('crate.binding.SubAtom');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__3517__auto__,writer__3518__auto__,opt__3519__auto__){return cljs.core._write.call(null,writer__3518__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6883 = cljs.core.seq.call(null,self__.watches);var chunk__6884 = null;var count__6885 = 0;var i__6886 = 0;while(true){
if((i__6886 < count__6885))
{var vec__6887 = cljs.core._nth.call(null,chunk__6884,i__6886);var key__$1 = cljs.core.nth.call(null,vec__6887,0,null);var f = cljs.core.nth.call(null,vec__6887,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6889 = seq__6883;
var G__6890 = chunk__6884;
var G__6891 = count__6885;
var G__6892 = (i__6886 + 1);
seq__6883 = G__6889;
chunk__6884 = G__6890;
count__6885 = G__6891;
i__6886 = G__6892;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6883);if(temp__4092__auto__)
{var seq__6883__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6883__$1))
{var c__3690__auto__ = cljs.core.chunk_first.call(null,seq__6883__$1);{
var G__6893 = cljs.core.chunk_rest.call(null,seq__6883__$1);
var G__6894 = c__3690__auto__;
var G__6895 = cljs.core.count.call(null,c__3690__auto__);
var G__6896 = 0;
seq__6883 = G__6893;
chunk__6884 = G__6894;
count__6885 = G__6895;
i__6886 = G__6896;
continue;
}
} else
{var vec__6888 = cljs.core.first.call(null,seq__6883__$1);var key__$1 = cljs.core.nth.call(null,vec__6888,0,null);var f = cljs.core.nth.call(null,vec__6888,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6897 = cljs.core.next.call(null,seq__6883__$1);
var G__6898 = null;
var G__6899 = 0;
var G__6900 = 0;
seq__6883 = G__6897;
chunk__6884 = G__6898;
count__6885 = G__6899;
i__6886 = G__6900;
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
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:cljs.core.PersistentVector.fromArray([path], true));var vec__6902 = (((atm instanceof crate.binding.SubAtom))?cljs.core.PersistentVector.fromArray([atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], true):cljs.core.PersistentVector.fromArray([atm,path__$1], true));var atm__$1 = cljs.core.nth.call(null,vec__6902,0,null);var path__$2 = cljs.core.nth.call(null,vec__6902,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__6903__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__6903 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__6903__delegate.call(this,sa,f,x,y,z,more);};
G__6903.cljs$lang$maxFixedArity = 5;
G__6903.cljs$lang$applyTo = (function (arglist__6904){
var sa = cljs.core.first(arglist__6904);
arglist__6904 = cljs.core.next(arglist__6904);
var f = cljs.core.first(arglist__6904);
arglist__6904 = cljs.core.next(arglist__6904);
var x = cljs.core.first(arglist__6904);
arglist__6904 = cljs.core.next(arglist__6904);
var y = cljs.core.first(arglist__6904);
arglist__6904 = cljs.core.next(arglist__6904);
var z = cljs.core.first(arglist__6904);
var more = cljs.core.rest(arglist__6904);
return G__6903__delegate(sa,f,x,y,z,more);
});
G__6903.cljs$core$IFn$_invoke$arity$variadic = G__6903__delegate;
return G__6903;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = {};
crate.binding._compute = (function _compute(this$){if((function (){var and__2972__auto__ = this$;if(and__2972__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__2972__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__3576__auto__ = (((this$ == null))?null:this$);return (function (){var or__2981__auto__ = (crate.binding._compute[goog.typeOf(x__3576__auto__)]);if(or__2981__auto__)
{return or__2981__auto__;
} else
{var or__2981__auto____$1 = (crate.binding._compute["_"]);if(or__2981__auto____$1)
{return or__2981__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});
goog.provide('crate.binding.Computed');

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__3517__auto__,writer__3518__auto__,opt__3519__auto__){return cljs.core._write.call(null,writer__3518__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6905 = cljs.core.seq.call(null,self__.watches);var chunk__6906 = null;var count__6907 = 0;var i__6908 = 0;while(true){
if((i__6908 < count__6907))
{var vec__6909 = cljs.core._nth.call(null,chunk__6906,i__6908);var key__$1 = cljs.core.nth.call(null,vec__6909,0,null);var f = cljs.core.nth.call(null,vec__6909,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6911 = seq__6905;
var G__6912 = chunk__6906;
var G__6913 = count__6907;
var G__6914 = (i__6908 + 1);
seq__6905 = G__6911;
chunk__6906 = G__6912;
count__6907 = G__6913;
i__6908 = G__6914;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6905);if(temp__4092__auto__)
{var seq__6905__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6905__$1))
{var c__3690__auto__ = cljs.core.chunk_first.call(null,seq__6905__$1);{
var G__6915 = cljs.core.chunk_rest.call(null,seq__6905__$1);
var G__6916 = c__3690__auto__;
var G__6917 = cljs.core.count.call(null,c__3690__auto__);
var G__6918 = 0;
seq__6905 = G__6915;
chunk__6906 = G__6916;
count__6907 = G__6917;
i__6908 = G__6918;
continue;
}
} else
{var vec__6910 = cljs.core.first.call(null,seq__6905__$1);var key__$1 = cljs.core.nth.call(null,vec__6910,0,null);var f = cljs.core.nth.call(null,vec__6910,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6919 = cljs.core.next.call(null,seq__6905__$1);
var G__6920 = null;
var G__6921 = 0;
var G__6922 = 0;
seq__6905 = G__6919;
chunk__6906 = G__6920;
count__6907 = G__6921;
i__6908 = G__6922;
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
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__6927_6931 = cljs.core.seq.call(null,atms);var chunk__6928_6932 = null;var count__6929_6933 = 0;var i__6930_6934 = 0;while(true){
if((i__6930_6934 < count__6929_6933))
{var atm_6935 = cljs.core._nth.call(null,chunk__6928_6932,i__6930_6934);cljs.core.add_watch.call(null,atm_6935,k,((function (seq__6927_6931,chunk__6928_6932,count__6929_6933,i__6930_6934,atm_6935){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__6927_6931,chunk__6928_6932,count__6929_6933,i__6930_6934,atm_6935))
);
{
var G__6936 = seq__6927_6931;
var G__6937 = chunk__6928_6932;
var G__6938 = count__6929_6933;
var G__6939 = (i__6930_6934 + 1);
seq__6927_6931 = G__6936;
chunk__6928_6932 = G__6937;
count__6929_6933 = G__6938;
i__6930_6934 = G__6939;
continue;
}
} else
{var temp__4092__auto___6940 = cljs.core.seq.call(null,seq__6927_6931);if(temp__4092__auto___6940)
{var seq__6927_6941__$1 = temp__4092__auto___6940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6927_6941__$1))
{var c__3690__auto___6942 = cljs.core.chunk_first.call(null,seq__6927_6941__$1);{
var G__6943 = cljs.core.chunk_rest.call(null,seq__6927_6941__$1);
var G__6944 = c__3690__auto___6942;
var G__6945 = cljs.core.count.call(null,c__3690__auto___6942);
var G__6946 = 0;
seq__6927_6931 = G__6943;
chunk__6928_6932 = G__6944;
count__6929_6933 = G__6945;
i__6930_6934 = G__6946;
continue;
}
} else
{var atm_6947 = cljs.core.first.call(null,seq__6927_6941__$1);cljs.core.add_watch.call(null,atm_6947,k,((function (seq__6927_6931,chunk__6928_6932,count__6929_6933,i__6930_6934,atm_6947,seq__6927_6941__$1,temp__4092__auto___6940){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__6927_6931,chunk__6928_6932,count__6929_6933,i__6930_6934,atm_6947,seq__6927_6941__$1,temp__4092__auto___6940))
);
{
var G__6948 = cljs.core.next.call(null,seq__6927_6941__$1);
var G__6949 = null;
var G__6950 = 0;
var G__6951 = 0;
seq__6927_6931 = G__6948;
chunk__6928_6932 = G__6949;
count__6929_6933 = G__6950;
i__6930_6934 = G__6951;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,cljs.core.PersistentVector.fromArray([crate.binding.z], true),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,cljs.core.PersistentVector.fromArray([crate.binding.y], true),(function (y){return cljs.core.filter.call(null,(function (p1__6952_SHARP_){return (p1__6952_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = {};
crate.binding.bindable = {};
crate.binding._value = (function _value(this$){if((function (){var and__2972__auto__ = this$;if(and__2972__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__2972__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__3576__auto__ = (((this$ == null))?null:this$);return (function (){var or__2981__auto__ = (crate.binding._value[goog.typeOf(x__3576__auto__)]);if(or__2981__auto__)
{return or__2981__auto__;
} else
{var or__2981__auto____$1 = (crate.binding._value["_"]);if(or__2981__auto____$1)
{return or__2981__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__2972__auto__ = this$;if(and__2972__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__2972__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__3576__auto__ = (((this$ == null))?null:this$);return (function (){var or__2981__auto__ = (crate.binding._on_change[goog.typeOf(x__3576__auto__)]);if(or__2981__auto__)
{return or__2981__auto__;
} else
{var or__2981__auto____$1 = (crate.binding._on_change["_"]);if(or__2981__auto____$1)
{return or__2981__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});
goog.provide('crate.binding.atom_binding');

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__3517__auto__,writer__3518__auto__,opt__3519__auto__){return cljs.core._write.call(null,writer__3518__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){return func.call(null,crate.binding._value.call(null,this$__$1));
}));
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});
goog.provide('crate.binding.notifier');

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__3517__auto__,writer__3518__auto__,opt__3519__auto__){return cljs.core._write.call(null,writer__3518__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6953 = cljs.core.seq.call(null,self__.watches);var chunk__6954 = null;var count__6955 = 0;var i__6956 = 0;while(true){
if((i__6956 < count__6955))
{var vec__6957 = cljs.core._nth.call(null,chunk__6954,i__6956);var key = cljs.core.nth.call(null,vec__6957,0,null);var f = cljs.core.nth.call(null,vec__6957,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6959 = seq__6953;
var G__6960 = chunk__6954;
var G__6961 = count__6955;
var G__6962 = (i__6956 + 1);
seq__6953 = G__6959;
chunk__6954 = G__6960;
count__6955 = G__6961;
i__6956 = G__6962;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6953);if(temp__4092__auto__)
{var seq__6953__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6953__$1))
{var c__3690__auto__ = cljs.core.chunk_first.call(null,seq__6953__$1);{
var G__6963 = cljs.core.chunk_rest.call(null,seq__6953__$1);
var G__6964 = c__3690__auto__;
var G__6965 = cljs.core.count.call(null,c__3690__auto__);
var G__6966 = 0;
seq__6953 = G__6963;
chunk__6954 = G__6964;
count__6955 = G__6965;
i__6956 = G__6966;
continue;
}
} else
{var vec__6958 = cljs.core.first.call(null,seq__6953__$1);var key = cljs.core.nth.call(null,vec__6958,0,null);var f = cljs.core.nth.call(null,vec__6958,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6967 = cljs.core.next.call(null,seq__6953__$1);
var G__6968 = null;
var G__6969 = 0;
var G__6970 = 0;
seq__6953 = G__6967;
chunk__6954 = G__6968;
count__6955 = G__6969;
i__6956 = G__6970;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});
goog.provide('crate.binding.bound_collection');

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__3517__auto__,writer__3518__auto__,opt__3519__auto__){return cljs.core._write.call(null,writer__3518__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__6971){var vec__6972 = p__6971;var event = cljs.core.nth.call(null,vec__6972,0,null);var el = cljs.core.nth.call(null,vec__6972,1,null);var v = cljs.core.nth.call(null,vec__6972,2,null);return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], true));
return crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], true));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], true));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__2981__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__2981__auto__))
{return or__2981__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__6973){
var bc = cljs.core.first(arglist__6973);
var segs = cljs.core.rest(arglist__6973);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__6982_6990 = cljs.core.seq.call(null,added);var chunk__6983_6991 = null;var count__6984_6992 = 0;var i__6985_6993 = 0;while(true){
if((i__6985_6993 < count__6984_6992))
{var a_6994 = cljs.core._nth.call(null,chunk__6983_6991,i__6985_6993);crate.binding.bc_add.call(null,bc,a_6994,a_6994);
{
var G__6995 = seq__6982_6990;
var G__6996 = chunk__6983_6991;
var G__6997 = count__6984_6992;
var G__6998 = (i__6985_6993 + 1);
seq__6982_6990 = G__6995;
chunk__6983_6991 = G__6996;
count__6984_6992 = G__6997;
i__6985_6993 = G__6998;
continue;
}
} else
{var temp__4092__auto___6999 = cljs.core.seq.call(null,seq__6982_6990);if(temp__4092__auto___6999)
{var seq__6982_7000__$1 = temp__4092__auto___6999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6982_7000__$1))
{var c__3690__auto___7001 = cljs.core.chunk_first.call(null,seq__6982_7000__$1);{
var G__7002 = cljs.core.chunk_rest.call(null,seq__6982_7000__$1);
var G__7003 = c__3690__auto___7001;
var G__7004 = cljs.core.count.call(null,c__3690__auto___7001);
var G__7005 = 0;
seq__6982_6990 = G__7002;
chunk__6983_6991 = G__7003;
count__6984_6992 = G__7004;
i__6985_6993 = G__7005;
continue;
}
} else
{var a_7006 = cljs.core.first.call(null,seq__6982_7000__$1);crate.binding.bc_add.call(null,bc,a_7006,a_7006);
{
var G__7007 = cljs.core.next.call(null,seq__6982_7000__$1);
var G__7008 = null;
var G__7009 = 0;
var G__7010 = 0;
seq__6982_6990 = G__7007;
chunk__6983_6991 = G__7008;
count__6984_6992 = G__7009;
i__6985_6993 = G__7010;
continue;
}
}
} else
{}
}
break;
}
var seq__6986 = cljs.core.seq.call(null,removed);var chunk__6987 = null;var count__6988 = 0;var i__6989 = 0;while(true){
if((i__6989 < count__6988))
{var r = cljs.core._nth.call(null,chunk__6987,i__6989);crate.binding.bc_remove.call(null,bc,r);
{
var G__7011 = seq__6986;
var G__7012 = chunk__6987;
var G__7013 = count__6988;
var G__7014 = (i__6989 + 1);
seq__6986 = G__7011;
chunk__6987 = G__7012;
count__6988 = G__7013;
i__6989 = G__7014;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6986);if(temp__4092__auto__)
{var seq__6986__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6986__$1))
{var c__3690__auto__ = cljs.core.chunk_first.call(null,seq__6986__$1);{
var G__7015 = cljs.core.chunk_rest.call(null,seq__6986__$1);
var G__7016 = c__3690__auto__;
var G__7017 = cljs.core.count.call(null,c__3690__auto__);
var G__7018 = 0;
seq__6986 = G__7015;
chunk__6987 = G__7016;
count__6988 = G__7017;
i__6989 = G__7018;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__6986__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__7019 = cljs.core.next.call(null,seq__6986__$1);
var G__7020 = null;
var G__7021 = 0;
var G__7022 = 0;
seq__6986 = G__7019;
chunk__6987 = G__7020;
count__6988 = G__7021;
i__6989 = G__7022;
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
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__7023){var vec__7026 = p__7023;var path = cljs.core.nth.call(null,vec__7026,0,null);var opts = cljs.core.nth.call(null,vec__7026,1,null);var vec__7027 = (cljs.core.truth_(opts)?cljs.core.PersistentVector.fromArray([path,opts], true):cljs.core.PersistentVector.fromArray([null,path], true));var path__$1 = cljs.core.nth.call(null,vec__7027,0,null);var opts__$1 = cljs.core.nth.call(null,vec__7027,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__7023 = null;if (arguments.length > 1) {
  p__7023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__7023);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__7028){
var atm = cljs.core.first(arglist__7028);
var p__7023 = cljs.core.rest(arglist__7028);
return bound_coll__delegate(atm,p__7023);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__7029){var vec__7031 = p__7029;var opts = cljs.core.nth.call(null,vec__7031,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__7029 = null;if (arguments.length > 2) {
  p__7029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__7029);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__7032){
var as = cljs.core.first(arglist__7032);
arglist__7032 = cljs.core.next(arglist__7032);
var atm = cljs.core.first(arglist__7032);
var p__7029 = cljs.core.rest(arglist__7032);
return map_bound__delegate(as,atm,p__7029);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__7034 = b;if(G__7034)
{var bit__3592__auto__ = null;if(cljs.core.truth_((function (){var or__2981__auto__ = bit__3592__auto__;if(cljs.core.truth_(or__2981__auto__))
{return or__2981__auto__;
} else
{return G__7034.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__7034.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__7034);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__7034);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__7036 = b;if(G__7036)
{var bit__3592__auto__ = null;if(cljs.core.truth_((function (){var or__2981__auto__ = bit__3592__auto__;if(cljs.core.truth_(or__2981__auto__))
{return or__2981__auto__;
} else
{return G__7036.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__7036.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__7036);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__7036);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__7038 = atm;if(G__7038)
{var bit__3592__auto__ = (G__7038.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__3592__auto__) || (G__7038.cljs$core$IDeref$))
{return true;
} else
{if((!G__7038.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__7038);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__7038);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__7039){var vec__7041 = p__7039;var func = cljs.core.nth.call(null,vec__7041,0,null);var func__$1 = (function (){var or__2981__auto__ = func;if(cljs.core.truth_(or__2981__auto__))
{return or__2981__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__7039 = null;if (arguments.length > 1) {
  p__7039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__7039);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__7042){
var atm = cljs.core.first(arglist__7042);
var p__7039 = cljs.core.rest(arglist__7042);
return bound__delegate(atm,p__7039);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;

//@ sourceMappingURL=binding.js.map