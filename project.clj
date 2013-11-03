(defproject bja.playground "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1978"]
                 [jayq "2.4.0"]
                 [crate "0.2.4"]]

  :plugins [[lein-cljsbuild "0.3.4"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "playground"
              :source-paths ["src"]
              :compiler {
                :output-to "bja-playground.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
