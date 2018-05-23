import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1bbeaab0 = () => import('..\\pages\\workouts.vue' /* webpackChunkName: "pages_workouts" */).then(m => m.default || m)
const _29a436d5 = () => import('..\\pages\\settings.vue' /* webpackChunkName: "pages_settings" */).then(m => m.default || m)
const _a98babb2 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _7c4aa76a = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _df9969ca = () => import('..\\pages\\pomodoro.vue' /* webpackChunkName: "pages_pomodoro" */).then(m => m.default || m)
const _2dddad55 = () => import('..\\pages\\statistics.vue' /* webpackChunkName: "pages_statistics" */).then(m => m.default || m)
const _3cdaf1e0 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/workouts",
			component: _1bbeaab0,
			name: "workouts"
		},
		{
			path: "/settings",
			component: _29a436d5,
			name: "settings"
		},
		{
			path: "/login",
			component: _a98babb2,
			name: "login"
		},
		{
			path: "/about",
			component: _7c4aa76a,
			name: "about"
		},
		{
			path: "/pomodoro",
			component: _df9969ca,
			name: "pomodoro"
		},
		{
			path: "/statistics",
			component: _2dddad55,
			name: "statistics"
		},
		{
			path: "/",
			component: _3cdaf1e0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
