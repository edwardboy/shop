import React, { Component } from "react";
import Header from "../component/Header";
import LeftNav from "../component/LeftNav";
import ContentContainer from "../component/ContentContainer";
import { createStore } from "redux";

// 消息常量
const ADD_NUM = "ADD_NUM";
const DELETE_NUM = "DELETE_NUM";

// action对象
let addNum5 = { type: ADD_NUM, step: 5 };
let deleteNum2 = { type: DELETE_NUM, step: 2 };

// reducer
function reducer(state = 0, action) {
  // 根据action类型处理state
  switch (action.type) {
    case ADD_NUM:
      state += action.step;
      break;

    case DELETE_NUM:
      state -= action.step;
      break;

    default:
      break;
  }

  return state;
}

// 创建store
let store = createStore(reducer);

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <LeftNav />
        <ContentContainer />
      </div>
    );
  }
}

export default Home;
