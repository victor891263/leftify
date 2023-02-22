import { ref } from "vue"

const display = ref<'ready' | 'test' | 'result'>('ready')

export default display