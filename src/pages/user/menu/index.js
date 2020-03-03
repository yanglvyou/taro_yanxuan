import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import classNames from "classnames";
import "./index.scss";

const MENU_LIST = [{
  key: 'order',
  text: '我的订单',
  img: require('./assets/order.png')
}, {
  key: 'pin',
  text: '我的拼团',
  img: require('./assets/pin.png')
}, {
  key: 'bargain',
  text: '我的砍价',
  img: require('./assets/bargain.png')
}, {
  key: 'credit',
  text: '我的积分',
  img: require('./assets/credit.png')
}, {
  key: 'service',
  text: '退换/售后',
  img: require('./assets/service.png')
}, {
  key: 'coupon',
  text: '优惠券',
  img: require('./assets/coupon.png')
}, {
  key: 'red-packet',
  text: '红包',
  img: require('./assets/red-packet.png')
}, {
  key: 'allowance',
  text: '津贴',
  img: require('./assets/allowance.png')
}, {
  key: 'gif-card',
  text: '礼品卡',
  img: require('./assets/gif-card.png')
}, {
  key: 'location',
  text: '地址管理',
  img: require('./assets/location.png')
}, {
  key: 'safe',
  text: '账号安全',
  img: require('./assets/safe.png')
}, {
  key: 'contact',
  text: '联系客服',
  img: require('./assets/contact.png')
}, {
  key: 'feedback',
  text: '用户反馈',
  img: require('./assets/feedback.png')
}, {
  key: 'help',
  text: '帮助中心',
  url: 'http://m.you.163.com/help',
  img: require('./assets/help.png')
}]
const COUNT_LINE = 3;

export default class Menu extends Component {
  render() {
    return <View className="user-menu">
      {
        MENU_LIST.map((menu,index)=>{
          const nth =(index+1) % COUNT_LINE ===0;
          const lastLine = parseInt(index/COUNT_LINE) === parseInt(MENU_LIST.length /COUNT_LINE)
          return (
            <View key={menu.key} className={classNames('user-menu__item',nth && 'user-menu__item--nth',lastLine&& 'user-menu__item--last')}>
             <Image className="user-menu__item-img" src={menu.img}></Image>
             <Text className="user-menu__item-txt">{menu.text}</Text>
            </View>
          )
        })
      }
    </View>;
  }
}
