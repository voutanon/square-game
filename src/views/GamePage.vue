<template>
<pre>{{squares}}</pre>
  <v-text-field
    v-model="size.sizeX"
    label="Size X"
    type="number"
    min="0"
  />
  <v-text-field
    v-model="size.sizeY"
    label="Size Y"
    type="number"
    min="0"
  />
  <div class="squareContainer">
    <div class="squareContainer__row">
      <div :class="{active: value.isActive}" @mouseenter="value.isActive = !value.isActive" class="square" v-for="value of squares.squaresX" :key="value.id"></div>
    </div>
    <div class="squareContainer__column">
      <div :class="{active: value.isActive}" @mouseenter="value.isActive = !value.isActive" class="square" v-for="value of squares.squaresY" :key="value.id"></div>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from "vue"

export default {
  setup() {
    const size = reactive({
        sizeX: 0,
        sizeY: 0
    })
    class square {
      constructor(id) {
        this.isActive = false
        this.id = id
      }
    }
    const squares = reactive({
      squaresX: [],
      squaresY: []
    })
    watch(size, () => {
      squares.squaresX = []
      squares.squaresY = []
      if (size.sizeY > 0) {
        for(let i = 0; size.sizeY > i; i++) {
          squares.squaresY.push(new square(`Y${i}`))
        }
      }
      if (size.sizeX > 0) {
        for(let i = 0; size.sizeX > i; i++) {
          squares.squaresX.push(new square(`X${i}`))
        }
      }
    })
    return {
      size,
      squares
    }
  },
}
</script>

<style scoped lang="scss">
  .square {
    min-width: 36px;
    width: 36px;
    min-height: 36px;
    height: 36px;
    background: white;
    &.active {
      background: blue;
    }
    &Container {
      background: black;
      padding: 10px;
     &__row {
      display: flex;
     }
    }
  }
</style>