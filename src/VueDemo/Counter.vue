<template>
  <div>
    <!--<h1 @click="count++">-->
      <!--<result>{{count}}</result>-->
      <!--<slot></slot>-->
    <!--</h1>-->
    <div class="ric-wrapper-wrapper">
      <VueWrapper>
        <ReactButton :count="count" :act="increaseReactCount" inside="I'm React" />
        <div class="ric-sum">I'm the inner sum inside the outer component: <strong>{{reactCount}}</strong></div>
      </VueWrapper>
      <ReactWrapper>
        <ReactButton :count="count" :act="increaseReactCount" inside="I'm React" />
        <div class="ric-sum">I'm the inner sum inside the outer component: <strong>{{reactCount}}</strong></div>
      </ReactWrapper>
    </div>
    <div class="ric-wrapper-wrapper">
      <VueWrapper>
        <VueButton :count="count" @clicked="increaseVueCount" type="primary">I'm Vue</VueButton>
        <div class="ric-sum">I'm the inner sum inside the outer component: <strong>{{vueCount}}</strong></div>
      </VueWrapper>
      <ReactWrapper>
        <VueButton :count="count" @clicked="increaseVueCount" type="primary">I'm Vue</VueButton>
        <div class="ric-sum">I'm the inner sum inside the outer component: <strong>{{vueCount}}</strong></div>
      </ReactWrapper>
    </div>
  </div>
</template>

<script>
  import Result from './Result'
  import VueButton from '../styleguide/VButton.vue'
  import ReactButton from '../styleguide/RButton'
  import VueWrapper from '../styleguide/VWrapper.vue'
  import ReactWrapper from '../styleguide/RWrapper'

  export default {
    components: { 
      Result,
      VueButton,
      VueWrapper,
      ReactButton,
      ReactWrapper
    },
    props: {
      test: {
        type: String
      }
    },
    data () {
      return {
        count: 0,
        reactCount: 0,
        vueCount: 0
      }
    }, 
    created () {
      console.log(this)
    },
    methods: {
      increaseReactCount (increase) {
        this.reactCount += increase
        this.count += increase
      },
      increaseVueCount (increase) {
        this.vueCount += increase
        this.count += increase
      }
    }
  }
</script>

<style lang="scss">
  .ric-sum {
    margin-top: 10px;
  }
  .ric-wrapper-wrapper {
    display: flex;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
  strong {
    font-size: 1.5em;
    font-weight: bold;
    color: green;
  }
</style>