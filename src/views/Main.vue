<template>
  <div>
    <div id="header">
      <route-link
        id="logo"
        to="/"
      >
        HP:_
      </route-link>
    </div>
    <div id="tag_wrapper">
      <div id="tag" />
    </div>
    <div id="title_wrapper">
      <h1 id="title_h1">
        Hacking Potter
      </h1>
      <h2 id="title_h2">
        해킹으로 함께하는 해리포터
      </h2>
    </div>
    <div id="card_wrapper">
      <div
        v-for="(item, idx) in cardList"
        :key="idx"
        class="card"
      >
        <div class="card_image" />
        <div class="card_title">
          {{ item.title }}
        </div>
        <!-- <div class="card_tags">
          <span class="card_tag pink">프론트엔드</span>
          <span class="card_tag green">HTML</span>
          <span class="card_tag blue">자바스크립트</span>
        </div> -->
      </div>
    </div>
    <div id="footer">
      <div id="footer_wrapper">
        Welcome To HackingPotter
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Main',
        data() {
          return {
            cardList: [
              {
                title: '9와 3/4 승강장'
              },
              {
                title: '수색꾼 테스트'
              },
              {
                title: '진짜 스니치 찾기'
              },
              {
                title: '슬리데린은 싫어요'
              }                                          
            ]
          }
        }
    }
</script>

<style scoped>
  #header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid #ececec;
  }

  #logo {
    height: inherit;
    line-height: inherit;
    font-size: 30px;
    display: block;
    color: black;
    position:relative;
    font-weight: 600;
  }

  #tag_wrapper {
    width: 100%;
    height: 85px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #tag {
    height: 65px;
    background: mediumpurple;
  }

  #title_wrapper {
    width: calc(100% - 48px);
    margin-left:auto;
    margin-right:auto;
  }
  #title_h1 {
    font-size: 40px;
    font-weight: 900;
  }
  #title_h2 {
    font-weight: 400;
  }
  #card_wrapper {
    width: calc(100% - 48px);
    margin-left:auto;
    margin-right:auto;
  }
  .card {
    width: 100%;
    margin-bottom: 30px;
  }
  .card_image {
    width: inherit;
    height: 255px;
    background-color:lightcoral;
  }
  .card_title {
    width: inherit;
    font-size: 30px;    
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 10px;
  }
  .card_tags {
    width: inherit;
    height: 40px;
    line-height: 40px;
  }
  .card_tag {
    background-color:palevioletred;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
    color: white;
    /* border-radius: 20%; */
    border-radius: 0.75rem;
    margin-right: 10px;
  }
  .green {
    background-color:darkseagreen;
  }
  .blue {
    background-color:cornflowerblue;
  }
  #footer{ 
    width: 100%;
    height: 150px;
    border-top: 1px solid #ececec;
  }
  #footer_wrapper{
    width: 100%;
    text-align: center;
    margin-top: 40px;
  }
</style>