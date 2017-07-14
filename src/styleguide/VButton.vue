<template>
    <div>
        <button @click="clicked" :class="typeClass">
            <slot></slot>
        </button>
        <div class="ric-sum">I'm the outer sum inside the inner component: <strong>{{count}}</strong></div>  
    </div>
</template>

<script>
    export default {
      props: ['type', 'count'],
      data: {
        increase: 2
      },
      computed: {
        typeClass () {
          switch (this.type) {
            case 'primary':
            default:
              return 'ric-button--primary mdl-js-button mdl-js-ripple-effect'
            case 'flat':
              return 'ric-button--flat mdl-js-button mdl-js-ripple-effect'
            case 'large':
              return 'ric-button--large mdl-js-button mdl-js-ripple-effect'
            case 'ordinary':
              return 'ric-button--ordinary'
          }
        }
      },
      methods: {
        clicked () {
          this.$emit('clicked', this.increase)
        }
      }
    }
</script>
