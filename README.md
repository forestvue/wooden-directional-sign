# wooden-directional-sign

## 개요
Vue는 대표적인 Single Page Application(SPA) 프레임워크 중 하나입니다.
하나의 html 페이지를 가지고 
다른 경로 요청에 따라서 서로 다른 페이지를 보여주거나, 페이지의 일부를 교체합니다.

## 초보자 가이드
Visual Studio Code나 Webstorm IDE 사용을 적극 권장합니다.
저같은 경우 Webstorm에서 Vue 프로젝트 템플릿을 자동으로 생성해줍니다.
[프로젝트 예시](https://github.com/forestvue/vue-portfolio)

작업과정은 다음과 같습니다

1. 이 repository를 clone한다.
2. repository 밑에 새로운 vue 프로젝트를 생성
3. 별도의 branch 생성 후 이 repository에 주기적으로 push
4. 과제를 완료하였을 경우 pull request
5. code review에 자신을 제외한 나머지 스터디원분들을 걸어주시면 되겠습니다.

## Todo(필수)
[Vue 공식 문서(한국어)](https://kr.vuejs.org/v2/guide/index.html)

1. Vue 프레임워크를 사용해 요청에 따라 페이지가 바뀌는 상황을 보여주시면 되겠습니다.
다음 url 요청에 따라 메인 페이지의 일부분이 바뀌는 모습을 구현.
/ - (메인 페이지)
/about
/contact
/user

[싱글 파일 컴포넌트](https://kr.vuejs.org/v2/guide/single-file-components.html)

2. 각 컴포넌트는 최소한 별도의 `<template></template>`을 가지고 있어야 합니다.

## Todo(옵션)
다음 url 요청에 따라 메인 페이지의 일부분이 바뀌는 모습을 구현.

/user

/user/1

/user/2

/user/3

...

/user/100

