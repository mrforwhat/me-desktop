<template>
  <div class="invite">
    <h1>这不是套路，是诚意</h1>
    <div class="invite-content">
      <p v-text="first"></p>
      <p v-text="second"></p>
      <p v-text="third"></p>
      <p v-text="fourth"></p>
      <!--<p>hello,就是想找妳聊聊天，谈谈心，开心一下，比如（吃个饭、看看电影或者滑滑冰【我一直想去】）释放下找工作这段时间的压力</p>-->
      <!--<p>相处快一年下来，其实更多时候我们是工作上的搭档，可能是碍于工作和同事的原因吧，我们更多的交流也是工作方面的。-->
      <!--但同时，我更欣赏是妳的态度、性格和气质。（当然，还很漂亮）-->
      <!--</p>-->
      <!--<p>我觉得我们之间是有些共同点的，所以我很希望我们的关系能够再推动一个层次，至少能给彼此一个机会进一层了解对方。</p>-->
      <!--<p>请原谅我的直接（直男么），我已经觉得很委婉了，如果太唐突了，给妳带来一些困扰的话还请包涵</p>-->
      <div class="invite-action">
        <div class="invite-btn" @click="onAnswer(0)">蛮有兴趣的</div>
        <div class="invite-btn" @click="onAnswer(1)">还没想好</div>
        <div class="invite-btn" @click="onAnswer(2)">残忍拒绝</div>
      </div>
      <textarea placeholder="对我说点什么吧" id="" cols="30" rows="10" v-model="say"></textarea>
      <button type="submit" @click="onSubmit">提交</button>
      <audio
        src="http://fs.open.kugou.com/c634056378e8404c62555dcb1b597640/5b9f7864/G124/M00/15/08/HIcBAFpwy3CAVDr1AEIYchdgAok173.mp3"
        autoplay></audio>
    </div>
  </div>
</template>

<script>
class TypeWriter {
  constructor () {
    this.seq = 0
  }

  type (that, key, msg, speed, success) {
    let the = this
    let t = setInterval(function () {
      if (the.seq === msg.length) {
        the.seq = 0
        clearInterval(t)
        success()
      } else {
        the.seq++
        that[key] = msg.substring(0, the.seq)
      }
    }, speed)
  }
}

const fir = 'hello,就是想找妳聊聊天，谈谈心，开心一下，比如（吃个饭、看看电影或者滑滑冰【我一直想去】）释放下找工作这段时间的压力'
const sec = '相处快一年下来，其实更多时候我们是工作上的搭档，可能是碍于工作和同事的原因吧，我们更多的交流也是工作方面的。但同时，我更欣赏是妳的态度、性格和气质。（当然，还很漂亮）'
const thi = '我觉得我们之间是有些共同点的，所以我很希望我们的关系能够再推动一个层次，至少能给彼此一个机会进一层了解对方。'
const four = '请原谅我的直接（直男么），我已经觉得很委婉了，如果太唐突了，给妳带来一些困扰的话还请包涵'
export default {
  name: 'Invite',
  data: function () {
    return {
      first: '',
      second: '',
      third: '',
      fourth: '',
      say: ''
    }
  },
  methods: {
    onAnswer: function (index) {
      if (index === 0) {
        alert('那就约个时间吧')
      }
      if (index === 1) {
        alert('我等着妳')
      }
      if (index === 2) {
        alert('好吧')
      }
    },
    onSubmit: function () {
      console.log(this.say)
      this.$axios.put('/api/say', {say: this.say})
        .then((ret) => {
          alert('我收到妳的消息啦')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted: function () {
    let writer = new TypeWriter()
    let that = this
    writer.type(that, 'first', fir, 200, function () {
      writer.type(that, 'second', sec, 200, function () {
        writer.type(that, 'third', thi, 200, function () {
          writer.type(that, 'fourth', four, 200, function () {
            console.log('hha')
          })
        })
      })
    })
    // var p1 = new Promise(function (resolve, reject) {
    //   writer.type(that, 'first', fir, 200)
    // })
    // var p2 = new Promise(function (resolve, reject) {
    //   writer.type(that, 'second', sec, 200)
    // })
    // p1.then()
    // writer.type(that.second, sec, 200)
    // writer.type(that.third, thi, 200)
    // writer.type(that.fourth, four, 200)
  }
}

</script>

<style scoped lang="scss">
  .invite {
    background-image: url("/static/img/bg.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    min-height: 750px;
    background-color: #72b5c5;
    padding: 20px;
    font-size: 14px;
    h1 {
      text-align: center;
    }
    &-content {
      margin: 20px 0;
    }
    &-action {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px auto;
    }
    &-btn {
      padding: 10px 15px;
      border: 1px solid white;
      border-radius: 20px;
      &:nth-child(2) {
        margin: 0 10px;
      }
    }
    textarea {
      padding: 20px;
      width: 100%;
    }
    button {
      padding: 10px 15px;
      background: transparent;
      outline: none;
      border: 1px solid #fff;
    }
  }
</style>
