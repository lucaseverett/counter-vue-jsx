import { ref } from "vue";
import styles from "./styles";

export default {
  props: ["count"],
  setup(props) {
    const count = ref(props.count);

    const inc = () => (count.value += 1);

    const dec = () => {
      if (count.value !== 0) count.value -= 1;
    };

    return () => (
      <div class={styles}>
        <button onClick={dec} class="dec">
          -
        </button>
        <span class="count">{count.value}</span>
        <button onClick={inc} class="inc">
          +
        </button>
      </div>
    );
  },
};
