(ns bja.playground.macros)

(defmacro jq-fn [args & body]
  `(fn ~args
     (let [~'$this ~(list (symbol "$") '(js* "this"))]
       ~@body)))

(defmacro js-fn [args & body]
  `(fn ~args
     (let [~'this ~(list 'js* "this")]
       ~@body)))
