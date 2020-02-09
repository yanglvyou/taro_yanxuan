import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import Vip from "./vip/index";
import bg from "./assets/bg.png";
import avatar from "./assets/avatar.png";
import qrCode from "./assets/qr-code.png";
import "./index.scss";

export default class Profile extends Component {
  render() {
    return (
      <View className="user-profile">
        {/*背景图片 */}
        <Image className="user-profile__bg" src={bg} mode="widthFix"></Image>
        <View className="user-profile__wrap">
          <Image className="user-profile__avatar" src={avatar}></Image>
          <View className="user-profile__info">
            <Text className="user-profile__info-name">某知名患者</Text>
            <Text className="user-profile__info-type">微信用户</Text>
          </View>
          <View className="user-profile__extra">
            <View className="user-profile__extra-qr">
              <Image className="user-profile__extra-qr-img" src={qrCode} />
            </View>
          </View>
          <Vip></Vip>
        </View>
      </View>
    );
  }
}
