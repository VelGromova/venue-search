<template>
  <div class="range">
    <output>
      <slot name="label" />
    </output>
    <input class="radius__range"
           type="range"
           :min="min"
           :max="max"
           :value="value"
           :step="step"
           @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    min: 0,
    max: 0,
    value: 0,
    step: 0,
  },
};
</script>

<style>
  .radius__range {
    text-align: center;
    width: 12.5rem;
    margin: 1rem 0 0 1rem;
    padding: 0 0 3px 8px;
    color: inherit;
  }

  .radius__range::-webkit-slider-thumb {
    width: 0.8rem;
    height: 0.8rem;
    margin-top: calc(-0.4rem + 2px);
    border-radius: 50%;
    background-color: var(--color-darkgrey);
  }

  .radius__range::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background-image: linear-gradient(to right, #fff, #fb998e);
  }
</style>

