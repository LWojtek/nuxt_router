<template>
    <div v-if="verified">
        <h1>Welcome {{ userName }}</h1>
        <nuxt-link exact to="/">
            <p>asdasdas</p>
        </nuxt-link>
    </div>
</template>

<script>
// 1: check id
// 2: get users data
// 3: filter the users data with the id
//  a: exists -> display name
//  b: does not -> redirect to index page


    export default {
        name: 'private',

        data(){
            return {
                id: this.$route.params.userId,            
            }
        },

        computed: {
            users(){
                return this.$store.state.users
            },

            userVerified(){
                return this.users.filter(user => {
                    return user.id === this.id;
                });
            },

            verified(){
                return this.userVerified.length > 0;
            },
            userName() {
                return this.userVerified.length > 0 ? this.userVerified[0].name : '';
            }       
        },

        created(){
            console.log(this.$route);
            if (!this.verified) {
                this.$router.push({
                    path: '/'
                })
            }
        }
       
    };
</script>

<style lang="scss" scoped>

div {
    h1 {
        color: rebeccapurple;
    }

    a{
        text-decoration: none;
    }

    p {
        color: red;
    }
}

</style>
