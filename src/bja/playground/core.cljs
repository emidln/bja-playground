(ns bja.playground.core
    (:refer-clojure :exclude [remove])
    (:require-macros [crate.def-macros :refer [defpartial]]
                     [bja.playground.macros :refer [js-fn jq-fn]])
    (:require [crate.core :refer [html raw]]
              [jayq.core :refer [$
                                 append
                                 bind
                                 children
                                 css
                                 hide
                                 remove
                                 show
                                 text]]))


(defpartial navbar []
  [:div.navbar.navbar-inverse.navbar-fixed-top
   [:div.contain
    [:div.navbar-header
     [:button.navbar-toggle {:type "button"
                             :data-toggle "collapse"
                             :data-target ".navbar-collapse"}
      [:span.icon-bar]
      [:span.icon-bar]
      [:span.icon-bar]]
     [:a.navbar-brand {:href "#"} "Bootstrap theme"]]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li.active
       [:a {:href "#"} "Home"]]
      [:li [:a {:href "#about"} "About"]]
      [:li [:a {:href "#contact"} "Contact"]]
      [:li.dropdown
       [:a.dropdown-toggle {:href "#"
                            :data-toggle "dropdown"}
        "Drowndown" [:b.caret]]
       [:ul.dropdown-menu
        [:li [:a {:href "#"} "Action"]]
        [:li [:a {:href "#"} "Another Action"]]
        [:li [:a {:href "#"} "Something else here"]]
        [:li.divider]
        [:li.dropdown-header "NavHeader"]
        [:li [:a {:href "#"} "Separated Link"]]
        [:li [:a {:href "#"} "One more separated link"]]]]]]]])


(defn entity
  "Takes an entity name as a keyword and return the unescaped HTML entity

   e.g. (entity :copy) => \"&copy;\""
  [e]
  (raw (str "&" (name e) ";")))

(defpartial content []
  [:div.container.theme-showcase
   ;; main jumbotron for a primary marketing message or call to action
   [:div.jumbotron
    [:h1 "Hello World!"]
    [:p "This is a template for a simple marketing or informational "
        "website. It includes a large callout called a jumbotron and "
        "three supporting pieces of content. Use it as a starting "
        "point to create something more unique."]
    [:p [:a.btn.btn-primary.btn-lg "Learn more " (entity :raquo)]]]

   [:div.page-header
    [:h1 "Fruit"]]

   [:div.container
    [:div.row
     [:div.col-md-4
      [:button#chart-toggle.btn.btn-primary "Toggle Chart"]]
     [:div.col-md-8
      [:div#chart]]]]
   ])

(defn gendiv
  "This was an idea to use gensym as a source of unique div names.
  As it turns out, the problem this was solving, which was being able
  to refer to things by unique name, is solved by creating controls
  underneath the div given, and then making the cleanup do something like

  (-> $elem .children .remove)
  "
  []
  (keyword (str "div#" (name (gensym)))))

(defn create-chart
  "Given a jQuery selector and a highcarts config, construct
  the highchart in a div below the given selector.

  Use kill-chart to remove a chart from location while leaving the location
  container intact."
  [$location config]
  (-> $location
      (append (html [:div]))
      (.highcharts (clj->js config))))

(defn fruit-bar-graph
  "HighCharts intro graph"
  [$elem]
  (create-chart $elem
                {:chart {:type "bar"}
                 :title {:text "Fruit Consumption"}
                 :xAxis {:categories ["Apples" "Bannanas" "Oranges"]}
                 :yAxis {:title {:text "Fruit eaten"}}
                 :series [{:name "Jane"
                           :data [1, 0, 4]}
                          {:name "John"
                           :data [5, 7, 3]}]
                 :credits {:enabled false}}))

(defn kill-chart
  "Given a location for a chart as a jquery selector, remove
  all children under that location."
  [$location]
  (remove (children $location)))


(-> ($ "body")
    (append (navbar))
    (append (content)))

;; this is a patched data that will make it into a future release
(defn data
  ([$elem] (.data $elem))
  ([$elem k] (.data $elem (clj->js k)))
  ([$elem k v] (.data $elem (name k) (clj->js v))))

;; Show and hide graphs
(bind ($ "#chart-toggle") :click
      (jq-fn []
          (if (data $this :visible)
            (do
              (data $this :visible false)
              (kill-chart ($ "#chart")))
            (do
              (data $this :visible true)
              (fruit-bar-graph ($ "#chart"))))))
