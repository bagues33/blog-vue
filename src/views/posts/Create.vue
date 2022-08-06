<template>
    <div> 
            <!-- Page Header-->
        <header class="masthead" style="background-image: url('assets/img/contact-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1>Create New Post</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                            <form @submit.prevent="handleSubmit">
                                <div class="form-floating">
                                    <input class="form-control" id="name" type="text" placeholder="Title Post" v-model="title"  />
                                    <label for="name">Title</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div class="form-floating">
                                    <textarea class="form-control" id="message" placeholder="Input Body Post" style="height: 12rem" v-model="body"></textarea>
                                    <label for="message">Body</label>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                 <div class="form-floating">
                                    <input class="form-control" id="name" type="text" placeholder="Input Tags" v-model="tag" @keydown.enter.prevent="handleKeydown" />
                                    <label for="name">Tag</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                 <span v-for="tag in tags" :key="tag"> #{{ tag }}</span>
                                <br />
                                <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form-->
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                <!-- Submit Button-->
                                <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Send</button>
                            </form>
                        
                    </div>
                </div>
            </div>
        </main>
    </div>   
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { projectFirestore } from '@/firebase/config'

export default {
    setup() {
        const router = useRouter()
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const handleKeydown = () => {
            if (! tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g, '')
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        const handleSubmit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }

            // await fetch('http://localhost:3000/posts/', {
            //     method: 'POST',
            //     headers: { 'Content-Type':  'application/json'},
            //     body: JSON.stringify(post)
            // })

            const res = await projectFirestore.collection('posts')
                .add(post)

            router.push({
                name: 'home'
            })

        }

        return { title, body, tag, tags, handleKeydown, handleSubmit };
    }
}
</script>

<style>

</style>