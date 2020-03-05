<!--  -->
<template>
  <div class="post-list">
    <el-backtop  :right='5'>
      Yt
    </el-backtop>
    <ul>
      <li v-for="item in dataList" :key="item.id">
        <router-link :to="{ name: 'user_info', params: { name: item.author.loginname }}" :title="item.author_id">
					<img :src="item.author.avatar_url" :title="item.author.loginname"/>
				</router-link>
        <span class="nums">{{item.reply_count}}/{{item.visit_count}}</span>
        <router-link :to="{name: 'post_content' ,params: {id: item.id, name: item.author.loginname}}">{{item.title}}</router-link>
        <span class="date">{{item.last_reply_at | timeStyle}}</span>
      </li>
      <div>
        <el-pagination
        @current-change="handleCurrentChange"
        :page-size="params.limit"
        layout="prev, pager, next, jumper"
        :total="2000"
        :current-page="params.page">
        </el-pagination>
      </div>
      
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data () {
    return {
      dataList: [],
      params: {
        page: 1,
        limit:50
      }
    };
  },
  created(){
    this.getData()
  },
  updated(){
    window.scrollTo(0,0)

  },
  methods: {
    getData(){
      this.$axios('/topics',{params:this.params}).then(res => {  
        this.dataList = res.data.data
        
      })
    },
    handleCurrentChange(page){
      this.params.page = page
      this.getData()
      window.scrollTo(0,0)
    }
  },
  filters: {
        timeStyle(createTime) {
            return String(createTime).match(/.{10}/)[0];
        }
  }
}

</script>
<style lang='less' scoped>
  .post-list {
    padding: 5px 3rem;
    ul {
      background-color: white;
      position: relative;
      padding-bottom: 40px;
      div {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      li {
        margin-bottom: 14px;
        list-style: none;
        line-height: 30px;
        border-bottom: 1px solid #333333;
        .nums {
          display: inline-block;
		      text-align: center;
		      width: 70px;
          font-size: 6px;
        }
        .date {
          float: right;
          margin-right: 15px;
          font-size: 12px;
        }
        a {
          text-decoration: none;
		      color: inherit;
        }
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
</style>