<template>
    <div class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-small-size-33 md-medium-size-30 md-large-size-25">
          <md-field>
              <label for="operator">Operator</label>
              <md-select v-model="filter.operator" name="operator" id="operator">
                  <md-option value="less">Less than</md-option>
                  <md-option value="greater">Greater than</md-option>
                  <md-option value="around">Around</md-option>
              </md-select>
          </md-field>
        </div>

        <div class="md-layout-item md-small-size-33 md-medium-size-30 md-large-size-25">
          <md-field>
              <label>time</label>
              <md-input v-model="filter.time" name="time" id="time"></md-input>
          </md-field>
        </div>

        <div class="md-layout-item md-small-size-33 md-medium-size-30 md-large-size-25">
          <md-field>
              <label for="timeunit">Unit</label>
              <md-select v-model="filter.timeunit" name="timeunit" id="timeunit">
                  <md-option value="minutes">minutes</md-option>
                  <md-option value="hours">hours</md-option>
                  <md-option value="days">days</md-option>
              </md-select>
          </md-field>
        </div>
    </div>
</template>

<script>
export default {
    props: ['filter'],
    updated() {
        this.filter.update()
    }
}

</script>

