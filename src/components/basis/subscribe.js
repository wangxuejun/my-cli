/* eslint-disable */
export default {
  install: function (Vue) {
  	Vue.prototype.$listens = {}
    Vue.prototype.$listen = function (name, fun) {
      if (!this.$listens[name]) {
      	this.$listens[name] = []
      }
      this.$listens[name].push(fun.bind(this))
    }
    Vue.prototype.$action = function (name) {
    	if (this.$listens[name] && this.$listens[name].length > 0) {
    		let arr = this.$listens[name]
    		let argument = [...arguments]
    		argument.shift()
    		arr.forEach(item => {
    			item(...argument)
    		})
    	}
    }
  }
}