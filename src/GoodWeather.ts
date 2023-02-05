import { Component, Vue } from 'vue-property-decorator';
import Header from './components/header/Header';

@Component({
  name: 'GoodWeather',
  components: {
    Header,
  }
})
export default class GoodWeather extends Vue {
  TestMsg: string = 'TestMsgContent';
}