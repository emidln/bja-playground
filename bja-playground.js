goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string', 'goog.string.StringBuffer']);
goog.addDependency("../secretary/core.js", ['secretary.core'], ['cljs.core', 'clojure.string']);
goog.addDependency("../crate/util.js", ['crate.util'], ['cljs.core', 'clojure.string']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../crate/binding.js", ['crate.binding'], ['cljs.core', 'clojure.set']);
goog.addDependency("../crate/compiler.js", ['crate.compiler'], ['cljs.core', 'goog.dom', 'clojure.string', 'crate.binding', 'goog.style']);
goog.addDependency("../crate/core.js", ['crate.core'], ['crate.util', 'cljs.core', 'goog.dom', 'crate.compiler']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['cljs.core', 'goog.string']);
goog.addDependency("../jayq/core.js", ['jayq.core'], ['cljs.core', 'clojure.string', 'cljs.reader']);
goog.addDependency("../bja/playground/core.js", ['bja.playground.core'], ['cljs.core', 'secretary.core', 'crate.core', 'jayq.core']);