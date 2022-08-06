<template>
  <!-- <div class="home"> -->
    <!-- <h1>Home</h1> -->
    <!-- <button @click="showPost = !showPost">Unmounted</button>
    <button @click="posts.pop()">delete post</button> -->
    <!-- <h1>Computed</h1>
    <input type="text" v-model="search">
    <div v-for="(name, index) in resultSearch" :key="index">{{ name }}</div>
    <button @click="handleClick">Stop</button> -->
    <!-- <p ref="p">Hi, saya {{ name }}. Ini adalah nomor saya {{ number }}</p> -->
    <!-- <h2>Ref</h2>
     <p>Hi, saya {{ contactOne.name }}. Ini adalah nomor saya {{ contactOne.number }}</p>
    <button @click="handleClick">click!</button>
    <h2>Reactive</h2>
     <p>Hi, saya {{ contactTwo.name }}. Ini adalah nomor saya {{ contactTwo.number }}</p>
     <button @click="handleClickTwo">click!</button> -->
    <!-- <button @click="number++">Increment</button> -->
    <!-- <input type="text" v-model="name"> -->
  <!-- </div> -->
      <!-- Page Header-->
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>Clean Blog</h1>
                        <span class="subheading">A Blog Theme by Start Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
               <div v-if="error">{{ error }}</div>
                <div v-if="posts.length">
                  <PostList :posts="posts" />
                </div>
                <div v-else>
                  <loading />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import PostList from '@/components/posts/PostList'
import getPosts from '../composable/getPosts'
import Loading from '@/components/Loading'

export default {
  components: { PostList, Loading },
  name: 'home',
  setup() {

    // const posts = ref([
    //   { id: 1, title: 'Artikel Pertama di Februari', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},
    //   { id: 2, title: 'Artikel Kedua di Februari', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' }
    // ])

     
      const { posts, error, load } = getPosts()
      

      load()

  //   const search = ref( '' )
  //   const names = ref(['tofan', 'bagus', 'apriyanto'])

  // const stop = watch(search, () => {
  //     console.log('fungsi watch berjalan')
  //   })

  // const stopEffect = watchEffect(() => {
  //     console.log('watchEffect berjalan', search.value)
  //   })

  // const handleClick = () => {
  //   stop()
  //   stopEffect()
  // }

  //   const resultSearch = computed( () => {
  //     return names.value.filter((name) => name.includes(search.value))
  //   }) 
    // const contactOne = ref({ name: 'Bagus', number: '08343248387' })
    // const contactTwo = reactive({ name: 'Tofan', number: '0345546456' })
    // const p = ref(null)
    
    // const name = ref("bagus")
    // const number = ref("081225027507")

    // const handleClick = () => {
    //   contactOne.value.name = 'tofan'
    //   contactOne.value.number = '3459344374'
    //   name.value = 'lima'
    //   number.value = "1233455"
    //   console.log(p, p.value)
    //   p.value.classList.add('paragrap')
    //   p.value.textContent = 'Hi, saya bagus'
    // }

    // const handleClickTwo = () => {
    //   contactTwo.name = 'Luma'
    //   contactTwo.number = '0874534'
    // }

    return { posts, error }
  },

  // mounted() {
  //   console.log($('.para').text())
  // }
}
</script>
