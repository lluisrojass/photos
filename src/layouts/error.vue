<template>
  <Region>
    <Row :class="[$style.center, $style['vertical-space']]">
      <Heading v-if="error.statusCode === 404">
        {{ errorModel['404'] }}
      </Heading>
      <Heading v-else>
        {{ errorModel ['5xx'] }}
      </Heading>
    </Row>
    <Row :class="$style.center">
      <Link :uppercase="true" :text-size="TEXT_SIZES.MEDIUM" :to="errorModel.reportABug.href">
        {{ errorModel.reportABug.text }}
      </Link>
    </Row>
    <Row :class="$style.center" />
  </Region>
</template>
<script>
import Region from '~/components/atoms/Region';
import Row from '~/components/atoms/Row';
import Link from '~/components/atoms/Link';
import { SIZES } from '~/mixins/TextSize';
import Heading from '~/components/atoms/Heading';
import errorModel from '~/static/cms/error.json';

export default {
  components: {
    Link,
    Region,
    Heading,
    Row
  },
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      TEXT_SIZES: SIZES,
      errorModel
    };
  }
};
</script>
<style module lang="scss">
  .center {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .vertical-space {
    margin-bottom: 2rem;
  }
</style>
