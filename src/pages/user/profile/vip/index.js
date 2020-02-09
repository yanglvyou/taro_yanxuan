import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import gift from "./assets/gift.png";
import right from "./assets/right.png";
import "./index.scss";

export default class Vip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
  }
  timer = null;
  count = 0;
  componentDidMount() {
    this.animate();
  }

  componentWillMount() {
    if(this.timer){
      clearTimeout(this.timer)
    }
  }

  animate = () => {

    this.timer = setTimeout(() => {
      if (this.state.x === 0 || this.state.x === -15) {
        this.count += 1;
      }
      this.setState({ x: this.state.x + (this.count % 2 ? -1 : 1) });
      if (this.count <= 6) {
        this.animate();
      }
    }, 20);
  };

  getAnimateStyle = () => {
    if (process.env.TARO_ENV === "rn") {
      return { transform: [{ translateX: this.state.x }] };
    }
    return { transform: `translateX(${Taro.pxTransform(this.state.x)})` };
  };

  render() {
    return (
      <View className="user-profile-vip" style={this.getAnimateStyle()}>
        <Image className="user-profile-vip__gift" src={gift}></Image>
        <View className="user-profile-vip__desc">
          <Text className="user-profile-vip__desc-txt">超级会员</Text>
          <View className="user-profile-vip__desc-wrap">
            <Text className="user-profile-vip__desc-wrap-txt">免费试用</Text>
            <Image
              className="user-profile-vip__desc-wrap-img"
              src={right}
            ></Image>
          </View>
        </View>
      </View>
    );
  }
}
