import { ref } from 'vue'
import questions from '@/data/questions'

const currentQuestion = ref(questions[0])

export default currentQuestion