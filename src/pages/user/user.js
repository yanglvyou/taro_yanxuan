import Taro, { Component } from "@tarojs/taro";
import { View, Text,ScrollView } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import * as actions from '@actions/user';
import {getWindowHeight} from '@utils/style';
import {dispatchCartNum} from '@actions/cart';
import Profile from "./profile/index";
import Menu from "./menu/index";
import Activity from './activity/index';
// import * as actions from "../../actions/counter";
import "./user.scss";

@connect(state=>state.user,{...actions,dispatchCartNum})
class Index extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };

  render() {
    return (
      <View className="user">
        <Profile></Profile>
        <Menu></Menu>
        <View className="user__logout">
          <Text className="user__logout-text">退出登录</Text>
        </View>
      </View>
    );
  }
}

export default Index;
