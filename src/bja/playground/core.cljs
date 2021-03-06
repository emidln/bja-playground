(ns bja.playground.core
    (:refer-clojure :exclude [remove])
    (:require-macros [crate.def-macros :refer [defpartial]]
                     [secretary.macros :refer [defroute]]
                     [bja.playground.macros :refer [js-fn jq-fn]])
    (:require [crate.core :refer [html raw]]
              [secretary.core :as secretary]
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
      [:li [:a {:href "javascript:bja.playground.core.goto$('/four-area-demo')"} "Four Area Demo"]]
      [:li [:a {:href "javascript:bja.playground.core.goto$('/two-col-demo')"} "Two Col Demo"]]
      [:li [:a {:href "#About"} "About"]]
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
  [:div {:style "margin-top: 25px; margin-left: 50px; margin-right: 50px;"}
   (comment
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

    [:div.row {:style "padding-top: 200px;"}
     [:div.col-md-4
      [:button#chart-toggle.btn.btn-primary "Toggle Chart"]]
     [:div.col-md-8
      [:div#chart]]])
   [:div#entrypoint]
   ])

(def test-layout
  (atom
  {:display-name "Two Column Layout"
   :type :two-column
   :containers [{:display-name "left"
                 :widgets [{:display-name "Chicago, IL"
                            :private-data {:coordinates [41.88 -87.64]
                                           :zoom 12}
                            :type :map-point}
                           {:display-name "Random Table"
                            :private-data {:labels ["A" "B" "C"]
                                           :rows [[1, 2, 3]
                                                  ["Foo" "Bar" "Baz"]
                                                  ["Spam" "Ham" "Eggs"]]}
                            :type :table}
                           {:display-name "Browsers"
                            :private-data {:series [{:type :pie
                                                     :name "Browser Share"
                                                    :data [["FireFox" 45.0]
                                                           ["IE" 26.8]
                                                           ["Chrome" 12.8]
                                                           ["Safari" 8.5]
                                                           ["Opera" 6.2]
                                                           ["Other" 0.7]]}]}
                            :type :pie}
                           ]
                 :selector "-container-left"}
                {:display-name "right"
                 :widgets [{:display-name "Device Types"
                            :private-data {:series [{:type :pie
                                                     :name "Device Type"
                                                    :data [["Smart Phone" 30.0]
                                                           ["Tablet" 25.0]
                                                           ["Desktop" 40.0]
                                                           ["Feature Phone" 5.0]]}]}
                            :type :pie}
                           {:display-name "Healthy Food Chart"
                            :private-data {:xAxis {:categories ["Apples" "Oranges" "Bananas"]}
                                           :yAxis {:title {:text "Fruit Eaten"}}
                                           :series [{:name "Brandon"
                                                     :data [1 0 4]}
                                                    {:name "Phil"
                                                     :data [5 9 2]}]}
                            :type :bar}]
                 :selector "-container-right"}]}))

(def other-test-layout
  (atom
  {:display-name "Two Column Layout"
   :type :four-areas
   :containers [{:display-name "top"
                 :widgets [{:display-name "Chicago, IL"
                            :private-data {:coordinates [41.88 -87.64]
                                           :zoom 12}
                            :type :map-point}
                           ]
                 :selector "-container-top"}
                {:display-name "left"
                 :widgets [{:display-name "Chicago, IL"
                            :private-data {:coordinates [41.88 -87.64]
                                           :zoom 12}
                            :type :map-point}
                           {:display-name "Random Table"
                            :private-data {:labels ["A" "B" "C"]
                                           :rows [[1, 2, 3]
                                                  ["Foo" "Bar" "Baz"]
                                                  ["Spam" "Ham" "Eggs"]]}
                            :type :table}
                           {:display-name "Browsers"
                            :private-data {:series [{:type :pie
                                                     :name "Browser Share"
                                                    :data [["FireFox" 45.0]
                                                           ["IE" 26.8]
                                                           ["Chrome" 12.8]
                                                           ["Safari" 8.5]
                                                           ["Opera" 6.2]
                                                           ["Other" 0.7]]}]}
                            :type :pie}
                           ]
                 :selector "-container-left"}
                {:display-name "middle"
                 :widgets [{:display-name "Device Types"
                            :private-data {:series [{:type :pie
                                                     :name "Device Type"
                                                    :data [["Smart Phone" 30.0]
                                                           ["Tablet" 25.0]
                                                           ["Desktop" 40.0]
                                                           ["Feature Phone" 5.0]]}]}
                            :type :pie}
                           {:display-name "Healthy Food Chart"
                            :private-data {:xAxis {:categories ["Apples" "Oranges" "Bananas"]}
                                           :yAxis {:title {:text "Fruit Eaten"}}
                                           :series [{:name "Brandon"
                                                     :data [1 0 4]}
                                                    {:name "Phil"
                                                     :data [5 9 2]}]}
                            :type :bar}]
                 :selector "-container-middle"}
                 {:display-name "right"
                 :widgets [{:display-name "Device Types"
                            :private-data {:series [{:type :pie
                                                     :name "Device Type"
                                                    :data [["Smart Phone" 30.0]
                                                           ["Tablet" 25.0]
                                                           ["Desktop" 40.0]
                                                           ["Feature Phone" 5.0]]}]}
                            :type :pie}
                           {:display-name "Healthy Food Chart"
                            :private-data {:xAxis {:categories ["Apples" "Oranges" "Bananas"]}
                                           :yAxis {:title {:text "Fruit Eaten"}}
                                           :series [{:name "Brandon"
                                                     :data [1 0 4]}
                                                    {:name "Phil"
                                                     :data [5 9 2]}]}
                            :type :bar}]
                 :selector "-container-right"}


                ]}))

(defn deep-merge
  "Recursively merges maps. If keys are not maps, the last value w"
  [& vals]
  (if (every? map? vals)
    (apply merge-with deep-merge vals)
    (last vals)))

(defn data
  ([$elem] (.data $elem))
  ([$elem k] (.data $elem (clj->js k)))
  ([$elem k v] (.data $elem (name k) (clj->js v))))

(defn create-chart
  "Given a jQuery selector and a highcarts config, construct
  the highchart in a div below the given selector.

  Use kill-chart to remove a chart from location while leaving the location
  container intact."
  [$location config]
  (-> $location
      (append (html [:div.col-md-12]))
      (.highcharts (clj->js config))))

;; rendering assuming that you have already merged a selector
;; into layout before-hand. Most of the time we just hard-code this to
;; "#main-content", but for testing it could be something else
(defmulti render-layout :type)
(defmethod render-layout :two-column
  [layout]
  (let [magic-prefix (name (gensym))]
    (-> ($ (:selector layout))
        (.empty))
    (append ($ (:selector layout))
            (html
             [:div.row {:data-magic-prefix magic-prefix}
               [:div.col-md-6
                [:div.row
                 [:div {:id (str magic-prefix "-container-left")}]]]
               [:div.col-md-6
                [:div.row
                 [:div {:id (str magic-prefix "-container-right")}]]]]))))

(defmethod render-layout :four-areas
  [layout]
  (let [magic-prefix (name (gensym))]
        (-> ($ (:selector layout))
        (.empty))
    (append ($ (:selector layout))
            (html
             [:div.row {:data-magic-prefix magic-prefix}
              [:div.row
               [:div {:id (str magic-prefix "-container-top")}]]
              [:div.row
               [:div.col-md-4
                [:div.row
                 [:div {:id (str magic-prefix "-container-left")}]]]
               [:div.col-md-4
                [:div.row
                 [:div {:id (str magic-prefix "-container-middle")}]]]
               [:div.col-md-4
                [:div.row
                 [:div {:id (str magic-prefix "-container-right")}]]]]]))))

;; rendering assumes that you have already merged a selector
;; into widget by someone higher
(defmulti render-widget :type)

(defmethod render-widget :table
  [widget]
  (.log js/console (str "attempting to render: :table --\n" (pr-str widget)))
  (->
  (append ($ (:selector widget))
          (html
           [:div.col-md-12
           [:table
            [:thead
             [:tr
              (for [label (-> widget :private-data :labels)]
                [:th label])]]
            [:tbody
             (for [row (-> widget :private-data :rows)]
               [:tr
                (for [column row]
                  [:td column])])]]])))
  (->
   ($ (str (:selector widget) " div table"))
   .dataTable))

(defmethod render-widget :pie
  [widget]
  (.log js/console (str "attempting to render: :pie --\n" (pr-str widget)))
  (create-chart ($ (:selector widget))
                (deep-merge {:plotOptions {:pie {:dataLabels {:enabled true}
                                                 :showInLegend true}}
                             :credits {:enabled false}}
                            (:private-data widget))))

(defmethod render-widget :bar
  [widget]
  (.log js/console (str "attempting to render: :bar --\n" (pr-str widget)))
  (create-chart ($ (:selector widget))
                (deep-merge  {:chart {:type "bar"}
                              :credits {:enabled false}}
                             (:private-data widget))))


(defmethod render-widget :map-point
  [widget]
  (.log js/console (str "attempting to render: map --\n" (pr-str widget)))
  ;;(comment
  (-> ($ (:selector widget))
      (css {:height "300px"}))
  (let [my-map (-> (.-L js/window)
      (.map (subs (:selector widget) 1))
      (.setView (clj->js (get-in widget [:private-data :coordinates])) (get-in widget [:private-data :zoom])))]
  (-> (.-L js/window)
      (.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  (clj->js {:attribution "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"}))
      (.addTo my-map)))
  ;;)
  )


(defn build-container [container]
  (let [selector (:selector container)]
    (doseq [widget (:widgets container)
            :let [widget-id (name (gensym))]]
      (append ($ selector) (html [:div.row.layout-container {:style {:padding "1em"}}
                                  [:div.col-md-12.widget-title [:h3.text-center (:display-name widget)]]
                                  [:div.widget-content {:id widget-id}]]))
      (render-widget (assoc widget :selector (str "#" widget-id))))
    ))

(defn build-layout [layout]
  (let [magic-prefix (data (-> (render-layout layout) .children .first) :magic-prefix)]
    (doseq [container* (:containers layout)
            :let [container (update-in container* [:selector] #(str "#" magic-prefix %))]]
      (.log js/console (str "container value is: " (pr-str container)))
      (build-container container)
      (.sortable ($ (:selector container))
                 (clj->js {:connectWith ".layout-container"}))
      ;(.resizable ($ (:selector container))
      ;            (clj->js {:animate true}))
      (.disableSelection ($ (:selector container)))))
    (bind ($ ".widget-title") :click
      (jq-fn []
             (.log js/console $this)
             (.log js/console (.next $this ".widget-content"))
             (-> (.next $this ".widget-content")
                 (.toggle)))))

(defn gendiv
  "This was an idea to use gensym as a source of unique div names.
  As it turns out, the problem this was solving, which was being able
  to refer to things by unique name, is solved by creating controls
  underneath the div given, and then making the cleanup do something like

  (-> $elem .children .remove)
  "
  []
  (keyword (str "div#" (name (gensym)))))

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

(defroute "/two-col-demo" []
  (build-layout (assoc @test-layout :selector "#entrypoint")))

(defroute "/four-area-demo" []
  (build-layout (assoc @other-test-layout :selector "#entrypoint")))

(secretary/dispatch! "/four-area-demo")

(defn ^:export goto [place]
  (secretary/dispatch! place))
