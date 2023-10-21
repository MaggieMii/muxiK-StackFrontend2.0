import Taro from "@tarojs/taro";
import { View, Textarea } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";

import "./index.scss";

export default function Feedback() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const copyText = "要复制的字符串";

  const handleCopy = () => {
    Taro.setClipboardData({
      data: copyText,
      success: () => {
        Taro.showToast({
          title: "复制成功",
          icon: "success",
          duration: 2000,
        });
      },
      fail: () => {
        Taro.showToast({
          title: "复制失败",
          icon: "none",
          duration: 2000,
        });
      },
    });
  };

  return (
    <View className="Feedback">
      <Textarea
        className="feedback_input"
        placeholder="欢迎为课栈提建议or私聊和我们说悄悄话呀~"
      />
      <View className="feedback_contact_us">
        <View className="feedback_qq_team">课栈交流群：799651462</View>
        <View className="feedback_copy" onClick={handleCopy}>
          点击复制
        </View>
      </View>
    </View>
  );
}
