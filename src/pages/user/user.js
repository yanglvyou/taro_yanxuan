import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import * as actions from "@action/user";
import { getWindowHeight } from "@utils/style";
// import { dispatchCartNum } from "@action/cart";
import Profile from "./profile/index";
import Menu from "./menu/index";
import Activity from "./activity/index";
// import * as actions from "../../actions/counter";
import "./user.scss";

@connect(state => state.user, { ...actions })
class Index extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };

  render() {
    const { userInfo } = this.props;
    return (
      <View className="user">
        <ScrollView scrollY style={{ height: getWindowHeight() }}>
          <Profile userInfo={userInfo}></Profile>
          <Menu></Menu>
          {userInfo.login && (
            <View className="user__logout">
              <Text className="user__logout-text">退出登录</Text>
            </View>
          )}
          <View className="user__empty"></View>
        </ScrollView>
        <View className="user__activity">
          <Activity></Activity>
        </View>
      </View>
    );
  }
}

export default Index;
