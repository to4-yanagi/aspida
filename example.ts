/* eslint-disable */
import axios from 'axios'
import aspida from './apis/$api'
;(async () => {
  const hogeId = 2
  const fugaId = 6
  const res1 = await axios.get(`/v1/hoge/${hogeId}/test/${fugaId}`)

  const res2 = await aspida().v1.hoge._hogeId(2).test._fugaId('aaa').get()
})()