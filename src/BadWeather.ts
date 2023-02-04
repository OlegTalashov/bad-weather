import { Component, Vue } from 'vue-property-decorator';
import Header from './header/Header.vue';

@Component({
  components: {
    Header,
  }
})
export default class BadWeather extends Vue {
  TestMsg: string = 'TestMsgContent';
}