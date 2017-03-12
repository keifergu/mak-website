<template>
<div>
  <mu-paper v-for="note in notes" class="note" :zDepth="2">
    <mu-card>
      <mu-card-header :title="user.name " subTitle="sub title">
        <mu-avatar slot="avatar"/>
      </mu-card-header>
      <mu-card-text>{{note.comment}} </mu-card-text>
      <mu-card-text>{{note.text}}</mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="评论"/>
        <mu-flat-button label="收藏"/>
      </mu-card-actions>
    </mu-card>
  </mu-paper>
</div>

</template>

<script>

  import api from '../api'

  export default {
    name: 'note',
    data () {
      return {
        notes: [],
        user: {
          avatar: '',
          name: ''
        }
      }
    },
    created () {
      let name = api.user.baseinfo()
      this.user.name = name
      api.comment.get()
        .then(data => {
          data.forEach(note => {
            this.notes.push(note.attributes)
          })
        })
    }
  }
</script>

<style scoped>
  .note {
    width: 250px;
    height: 235px;
    float: left;
    margin: 5px 5px 5px 5px;
  }
</style>
