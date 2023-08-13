// Fonte: https://stackoverflow.com/questions/72350551/combination-of-vue-3-vuetify-3-vue-test-utils-results-in-could-not-find-in
// Fix undefined ResizeObserver error
class ResizeObserverStub {
  disconnect () { }
  observe () { }
  unobserve () { }
}
window.ResizeObserver ??= ResizeObserverStub;
